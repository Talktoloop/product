import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { INBOX_ROUTES, INBOX_STORY_ROUTES, MAIN_ROUTES } from '@app/app-routing.props';
import { CHANNEL_CONSTANTS } from '@app/core/services/api/model/channel.enum';
import { IRejectReason } from '@app/core/services/api/model/request/reject-reason.model';
import { IUpdateStoryAPI } from '@app/core/services/api/model/request/update-story.model';
import { ISMSMessage } from '@app/core/services/api/model/story-sms-message.model';
import { IStory } from '@app/core/services/api/model/story.model';
import { StoryService } from '@app/core/services/api/story/story.service';
import { ModalServiceV2 } from '@app/core/services/modal/modal-v2.service';
import { UIService } from '@app/core/services/ui/ui.service';
import { InboxRejectFormComponent } from '@app/modules/inbox/shared/components/reject-modal/reject-form/reject-form.component';
import { BaseComponent } from '@app/shared/components/base.component';
import { Age } from '@app/shared/types/age.type';
import { Gender } from '@app/shared/types/gender.type';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { finalize, take, takeUntil } from 'rxjs/operators';
import { StoryDetailsService } from '../../story-details.service';

@Component({
  selector: 'app-story-review-action-buttons',
  templateUrl: './story-review-action-buttons.component.html',
  styleUrls: ['./story-review-action-buttons.component.scss'],
})
export class StoryReviewActionButtonsComponent extends BaseComponent {
  CHANNEL_CONSTANTS = CHANNEL_CONSTANTS;
  performingSaveAction = false;
  readonly storiesListUrl = `/${MAIN_ROUTES.INBOX}/${INBOX_ROUTES.STORIES}`;

  constructor(
    public storyDetailsService: StoryDetailsService,
    public ui: UIService,
    private router: Router,
    private storyService: StoryService,
    private toastr: ToastrService,
    private translateService: TranslateService,
    private modalService: ModalServiceV2,
    private activatedRoute: ActivatedRoute,
  ) {
    super();
    this.activatedRoute.parent.snapshot.paramMap.get('forceReject') && this.handleRejectClick();
  }

  handleRejectClick(): void {
    const modal = this.modalService.open(InboxRejectFormComponent, {
      hasAuthor: this.shouldShowNotificationMessage(),
      type: 'story',
      channel: this.storyDetailsService.story.channel,
      languageCode: this.storyDetailsService.story.language,
      contactIsNotAccepted: !this.storyDetailsService.story.contactAccepted,
      multiple: false,
    });
    modal.confirm.pipe(take(1), takeUntil(this.destroyed$)).subscribe((payload) => this.rejectStory(payload));
  }

  handleSaveClick(): void {
    if (!this.areRequireFieldsValid()) {
      this.storyDetailsService.reviewSubmitError$.next(true);
      window.scrollTo(0, 0);
      return;
    }

    this.storyService
      .updateStoryModerator(
        this.storyDetailsService.story.id,
        this.mapStoryToUpdateInterface(
          this.storyDetailsService.story,
          this.storyDetailsService.updatedOriginalStory,
          this.storyDetailsService.updatedEditedStory,
        ),
      )
      .pipe(
        finalize(() => {
          this.performingSaveAction = false;
        }),
      )
      .subscribe(
        () => {
          const translateUrl = `/${MAIN_ROUTES.INBOX}/${INBOX_ROUTES.STORIES}/story/:channel/:id/${INBOX_STORY_ROUTES.STORY_TRANSLATE}`
            .replace(':channel', this.storyDetailsService.story.channel)
            .replace(':id', this.storyDetailsService.story.id);

          this.storyDetailsService.reviewSubmitError$.next(false);

          this.router.navigate([translateUrl]);
        },
        () => {
          this.storyDetailsService.reviewSubmitError$.next(true);
        },
      );
  }

  handleBackClick(): void {
    this.router.navigate([this.storiesListUrl]);
  }

  private rejectStory(payload: IRejectReason): void {
    const handleResponseError = (): void => {
      this.storyDetailsService.backToStoriesListWithoutStory();
      this.toastr.error(
        this.translateService.instant(`admin.story.toast.rejected.error.title`),
        this.translateService.instant('admin.story.toast.rejected.error.subtitle'),
      );
    };
    this.storyService
      .rejectStoryModerator(this.storyDetailsService.story.id, payload)
      .pipe(take(1), takeUntil(this.destroyed$))
      .subscribe(
        (res) => {
          if (res.success) {
            this.toastr.success(
              this.translateService.instant(`admin.story.toast.rejected.success.title`),
              this.translateService.instant('admin.story.toast.rejected.success.subtitle'),
            );
            this.storyDetailsService.backToStoriesListWithoutStory();
          } else {
            handleResponseError();
          }
        },
        () => {
          handleResponseError();
        },
      );
  }

  private areRequireFieldsValid(): boolean {
    const { story, isOriginalContentEditContainErrors, isEditedContentEditContainErrors } = this.storyDetailsService;

    return (
      (story.isSensitive || (!story.isSensitive && !!story.categories.length)) &&
      (!!story.language || story.language === '') &&
      !!story.thematics.length &&
      !isOriginalContentEditContainErrors &&
      !isEditedContentEditContainErrors
    );
  }

  private mapStoryToUpdateInterface(story: IStory, updatedOriginalStory: string, updatedEditedStory: string): IUpdateStoryAPI {
    const updateStoryRequest: IUpdateStoryAPI = {
      authorNickname: story.authorNickname,
      age: story.age || Age.NO_ANSWER,
      gender: story.gender || Gender.NO_ANSWER,
      categories: story.categories.map((category) => Number(category.id)),
      difficulties: story.difficulties.map((difficulty) => Number(difficulty.id)),
      disabilitiesOtherExplanation: story.disabilitiesOtherExplanation,
      maternityStatus: story.maternityStatus.map((maternity) => Number(maternity.id)),
      organisations: story.organisations.map((organisations) => organisations.id),
      thematics: story.thematics,
      regionId: story.regionId,
      countryId: story.countryId,
      isSensitive: story.isSensitive,
      language: story.language,
      translations: updatedEditedStory
        ? [
            {
              content: updatedEditedStory,
              code: story.language,
            },
          ]
        : [],
        isUrgent: !!story.isUrgent,
        isMinority: !!story.isMinority,
        vulnerabilityFactors: story.vulnerabilityFactors,
    };
    if (updatedOriginalStory) {
      updateStoryRequest.content = updatedOriginalStory;
    }
    if (story.messages?.length) {
      updateStoryRequest.pinnedMessageIds = (story.messages || [])
        .map((message: ISMSMessage) => {
          if (message.isPinned) {
            return message.id;
          }
        })
        .filter((value: string) => value !== undefined);
    }

    return updateStoryRequest;
  }

  private shouldShowNotificationMessage(): boolean {
    return this.storyDetailsService.story.channel === CHANNEL_CONSTANTS.WEB ? !!this.storyDetailsService.story.emailProvided : true;
  }
}
