import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { INBOX_ROUTES, MAIN_ROUTES } from '@app/app-routing.props';
import { CHANNEL_CONSTANTS } from '@app/core/services/api/model/channel.enum';
import { IGetThematicAPIExtended } from '@app/core/services/api/model/response/get-thematic.model';
import { ICaseManagerNoteViewModel, IStory } from '@app/core/services/api/model/story.model';
import { ISMSMessage } from '@core/services/api/model/story-sms-message.model';
import { StoryService } from '@core/services/api/story/story.service';
import { TranslateService } from '@ngx-translate/core';
import { Observable,of,Subject } from 'rxjs';
import { catchError,filter,finalize,map,take } from 'rxjs/operators';

@Injectable()
export class StoryDetailsService {
  public updatedOriginalStory = null;
  public updatedEditedStory = null;
  public story: IStory;
  public thematics: IGetThematicAPIExtended[];
  public originalStoryContentChanged$ = new Subject();
  public reviewSubmitError$ = new Subject<boolean>();
  public isReviewStep: boolean;
  public isOriginalContentEditContainErrors = false;
  public isEditedContentEditContainErrors = false;
  private isRefreshingConversationMessages = false;
  private lastConversationMessagesRefreshTs = 0;

  constructor(private translateService: TranslateService, private router: Router, private storyService: StoryService) {
    this.isReviewStep = router.url.includes('review');
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      const segments = event.url.split('/');
      this.isReviewStep = segments[segments.length - 1].split('?')[0] === 'review';
    });
  }

  getCaseManagerNote(): ICaseManagerNoteViewModel {
    const name = this.story.caseManagerName || this.translateService.instant('admin.conversationReply.author.anonymous'),
      text = this.story.caseManagerNote,
      date = this.story.caseManagerReturnedAt;
    return text ? { name, text, date } : null;
  }

  backToStoriesListWithoutStory(storyId?: string) {
    this.router.navigate([`${MAIN_ROUTES.INBOX}/${INBOX_ROUTES.STORIES}`], {
      queryParams: { processedStoryId: storyId || this.story.id },
    });
  }

  switchPinMessageToStory(messageId: string): void {
    this.story.messages = this.story.messages.map((message: ISMSMessage) => {
      if (message.id === messageId) {
        message.isPinned = !message.isPinned;
      }
      return message;
    });
    this.createStoryPreview(true);
  }

  createStoryPreview(isPinningChanged?: boolean): void {
    if (!this.story.messages) {
      return;
    }
    let pinnedStoryPreview = '';
    this.story.messages.forEach((message: ISMSMessage) => {
      if (message.isPinned || message.storyId) {
        pinnedStoryPreview += `${message.content}\n`;
      }
    });
    this.story.content = pinnedStoryPreview;
    if (isPinningChanged) {
      this.story.historicalContent = null;
      this.originalStoryContentChanged$.next(true);
    }
  }

  async getStoryWithRestoredTranslation(): Promise<IStory> {
    await this.storyService.restoreStoryTranslationModerator(this.story.id).toPromise();
    return;
  }
  refreshWhatsappConversationMessages(minIntervalMs = 1500): Observable<boolean> {
    const { story } = this;
    if (
      !story?.id ||
      story.channel !== CHANNEL_CONSTANTS.WHATSAPP ||
      this.isRefreshingConversationMessages ||
      Date.now() - this.lastConversationMessagesRefreshTs < minIntervalMs
    ) return of(false);

    this.isRefreshingConversationMessages = true;

    return this.storyService.getStoryModerator(story.id, story.channel).pipe(
      take(1),
      map((updated: IStory) => {
        const prev = this.story?.messages ?? [];
        const next = updated.messages ?? [];
        const ids = new Set(prev.map((m) => String(m.id)));

        if (this.story?.id !== story.id || !next.some((m) => !ids.has(String(m.id)))) return false;

        this.story.messages = this.mergeAndSortConversationMessages(prev, next);
        return true;
      }),
      catchError(() => of(false)),
      finalize(() => {
        this.isRefreshingConversationMessages = false;
        this.lastConversationMessagesRefreshTs = Date.now();
      }),
    );
  }

  private mergeAndSortConversationMessages(prev: ISMSMessage[], next: ISMSMessage[]): ISMSMessage[] {
    return Array.from(new Map([...prev, ...next].map((m) => [String(m.id), m])).values())
      .sort((a, b) => {
        const tsDiff = +new Date(a.createdAt) - +new Date(b.createdAt);
        if (tsDiff) return tsDiff;
        const [nA, nB] = [Number(a.id), Number(b.id)];
        return !isNaN(nA) && !isNaN(nB) ? nA - nB : String(a.id).localeCompare(String(b.id));
      });
  }
}
