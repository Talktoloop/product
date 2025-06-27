import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { INBOX_ROUTES, MAIN_ROUTES } from '@app/app-routing.props';
import { IGetThematicAPIExtended } from '@app/core/services/api/model/response/get-thematic.model';
import { ICaseManagerNoteViewModel, IStory } from '@app/core/services/api/model/story.model';
import { ISMSMessage } from '@core/services/api/model/story-sms-message.model';
import { StoryService } from '@core/services/api/story/story.service';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

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
}
