import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { INBOX_ROUTES, MAIN_ROUTES } from '@app/app-routing.props';
import { CHANNEL_CONSTANTS } from '@app/core/services/api/model/channel.enum';
import { IRejectReason } from '@app/core/services/api/model/request/reject-reason.model';
import { ISendStoryToCaseManager } from '@app/core/services/api/model/request/send-story-to-case-manager.model';
import { IUpdateStoryAPI } from '@app/core/services/api/model/request/update-story.model';
import { ILinkUsers, IStory } from '@app/core/services/api/model/story.model';
import { OrganisationService } from '@app/core/services/api/organisation/organisation.service';
import { StoryService } from '@app/core/services/api/story/story.service';
import { ModalServiceV2 } from '@app/core/services/modal/modal-v2.service';
import { UIService } from '@app/core/services/ui/ui.service';
import { HomeService } from '@app/modules/home/home.service';
import { InboxRejectFormComponent } from '@app/modules/inbox/shared/components/reject-modal/reject-form/reject-form.component';
import { BaseComponent } from '@app/shared/components/base.component';
import { STORY_STATUS } from '@app/shared/enums/story-status.enum';
import { Age } from '@app/shared/types/age.type';
import { Gender } from '@app/shared/types/gender.type';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { finalize, mergeMap, take, takeUntil } from 'rxjs/operators';
import { SendToCaseManagerFormComponent } from '../../../../shared/components/send-story-to-case-manager-modal/send-story-to-case-manager-form/send-story-to-case-manager-form.component';
import { StoryDetailsService } from '../../story-details.service';
import { ISMSMessage } from '../../../../../../core/services/api/model/story-sms-message.model';

@Component({
  selector: 'app-story-translate-action-buttons',
  templateUrl: './story-translate-action-buttons.component.html',
  styleUrls: ['./story-translate-action-buttons.component.scss'],
})
export class StoryTranslateActionButtonsComponent extends BaseComponent {
  performingSaveAction = false;
  readonly storiesListUrl = `/${MAIN_ROUTES.INBOX}/${INBOX_ROUTES.STORIES}`;

  CHANNEL_CONSTANTS = CHANNEL_CONSTANTS;

  constructor(
    public storyDetailsService: StoryDetailsService,
    public ui: UIService,
    private router: Router,
    private homeService: HomeService,
    private storyService: StoryService,
    private toastr: ToastrService,
    private translateService: TranslateService,
    private modalService: ModalServiceV2,
    private organisationService: OrganisationService,
  ) {
    super();
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

  handlePublishClick(): void {
    if (!this.areRequireFieldsValid()) {
      this.storyDetailsService.reviewSubmitError$.next(true);
      window.scrollTo(0, 0);
      return;
    }
    this.storyDetailsService.story.isSensitive ? this.handleSendToCaseManager() : this.handlePublishStory();
  }

  protected areRequireFieldsValid(): boolean {
    const { story, isOriginalContentEditContainErrors, isEditedContentEditContainErrors } = this.storyDetailsService;

    return (
      (story.isSensitive || (!story.isSensitive && !!story.categories.length)) &&
      (!!story.language || story.language === '') &&
      !!story.thematics.length &&
      story.isUrgent!==null &&
      !isOriginalContentEditContainErrors &&
      !isEditedContentEditContainErrors &&
      !!story.countryId &&
      !!story.country
    );

  }

  private sendInvitation(): void {
    const inviteData: ILinkUsers = {
      storyId: this.storyDetailsService.story.id,
      links: this.organisationService.invites,
    };
    if (this.organisationService.invites.length === 0) {
      return;
    }
    this.organisationService.linkUsersToOrganisations(inviteData).subscribe((res) => {
      if (res.success) {
        this.organisationService.invites = [];
      }
    });
  }

  private handlePublishStory(): void {
    this.performingSaveAction = true;
    const reqData: IUpdateStoryAPI = this.mapStoryToUpdateInterface(
      this.storyDetailsService.story,
      this.storyDetailsService.updatedOriginalStory,
      this.storyDetailsService.updatedEditedStory,
    );
    const handleErrorResponse = (error = null) => {
      const storyAlreadyPublishedErrorCode = 'E0061';
      if (error?.error?.code === storyAlreadyPublishedErrorCode) {
        this.storyDetailsService.story.status = STORY_STATUS.PUBLISHED;
      }

      this.toastr.error(
        this.translateService.instant(
          error?.error?.code === storyAlreadyPublishedErrorCode
            ? 'story.details.review.buttons.storyAlreadyPublished'
            : 'admin.story.toast.published.error.subtitle',
        ),
        this.translateService.instant(`admin.story.toast.published.error.title`),
      );
    };

    this.storyService
      .updateStoryModerator(this.storyDetailsService.story.id, reqData)
      .pipe(
        mergeMap(() => this.storyService.publishStoryModerator(this.storyDetailsService.story.id)),
        finalize(() => (this.performingSaveAction = false)),
        take(1),
        takeUntil(this.destroyed$),
      )
      .subscribe(
        (res) => {
          if (res.success) {
            this.toastr.success(
              this.translateService.instant(`admin.story.toast.published.success.title`),
              this.translateService.instant('admin.story.toast.published.success.subtitle'),
            );
            this.homeService.resetState();
            setTimeout(() => {
              this.router.navigate([this.storiesListUrl], { queryParams: { processedStoryId: this.storyDetailsService.story.id } });
            });
            this.sendInvitation();
          } else {
            handleErrorResponse();
          }
        },
        (error) => {
          handleErrorResponse(error);
        },
      );
  }

  private handleSendToCaseManager(): void {
    const modal = this.modalService.open(SendToCaseManagerFormComponent, {
      type: 'story',
    });

    modal.confirm.pipe(take(1), takeUntil(this.destroyed$)).subscribe((payload) => this.sendStoryToCaseManager(payload));
    modal.close$.pipe(take(1), takeUntil(this.destroyed$)).subscribe();
  }

  private sendStoryToCaseManager(payload: ISendStoryToCaseManager): void {
    this.performingSaveAction = true;

    const handleResponseError = (error = null): void => {
      const storyAlreadySentToCaseManagerErrorCode = 'E0044';
      if (error?.error?.code === storyAlreadySentToCaseManagerErrorCode) {
        this.storyDetailsService.story.status = STORY_STATUS.SENT_TO_CASE_MANAGER;
      }

      //TODO: handle story already sent to case manager error
      this.toastr.error(
        this.translateService.instant(
          error?.error?.code === storyAlreadySentToCaseManagerErrorCode
            ? 'story.details.review.buttons.storyAlreadySentToCaseManager'
            : 'admin.story.toast.sendStoryToCaseManager.error.title',
        ),
        this.translateService.instant('admin.story.toast.sendStoryToCaseManager.error.subtitle'),
      );
    };

    //save story before sending to case manager
    this.storyService
      .updateStoryModerator(this.storyDetailsService.story.id, this.mapStoryToUpdateInterface(this.storyDetailsService.story, this.storyDetailsService.updatedOriginalStory, this.storyDetailsService.updatedEditedStory))
      .pipe(
        finalize(() => (this.performingSaveAction = false))
      )
      .subscribe(
        () => {
          this.storyService
            .sendStoryToCaseManagerModerator(this.storyDetailsService.story.id, payload)
            .pipe(
              finalize(() => (this.performingSaveAction = false)),
              take(1),
              takeUntil(this.destroyed$),
            )
            .subscribe(
              (res) => {
                if (res.success) {
                  this.toastr.success(
                    this.translateService.instant('admin.story.toast.sendStoryToCaseManager.success.title'),
                    this.translateService.instant('admin.story.toast.sendStoryToCaseManager.success.subtitle'),
                  );
                  this.router.navigate([this.storiesListUrl], { queryParams: { processedStoryId: this.storyDetailsService.story.id } });
                  this.sendInvitation();
                } else {
                  handleResponseError();
                }
              },
              (error) => {
                handleResponseError(error);
              },
            );
        },
        () => {
          this.storyDetailsService.reviewSubmitError$.next(true);
        },
      );
  }

  private rejectStory(payload: IRejectReason): void {
    const handleResponseError = (error = null): void => {
      this.storyDetailsService.backToStoriesListWithoutStory();
      const storyAlreadyRejectedErrorCode = 'E0016';
      if (error?.error?.code === storyAlreadyRejectedErrorCode) {
        this.storyDetailsService.story.status = STORY_STATUS.REJECTED;
      }

      this.toastr.error(
        this.translateService.instant(
          error?.error?.code === storyAlreadyRejectedErrorCode
            ? 'story.details.review.buttons.storyAlreadyRejected'
            : 'admin.story.toast.rejected.error.subtitle',
        ),
        this.translateService.instant(`admin.story.toast.rejected.error.title`),
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
        (error) => {
          handleResponseError(error);
        },
      );
  }

  private mapStoryToUpdateInterface(story: IStory, updatedOriginalStory: string, updatedEditedStory: string): IUpdateStoryAPI {
    const updateStoryRequest: IUpdateStoryAPI = {
      authorNickname: story.authorNickname,
      age: story.age || Age.NO_ANSWER,
      gender: story.gender || Gender.NO_ANSWER,
      categories: story.categories.map((category) => Number(category.id)),
      difficulties: story.difficulties.map((difficulty) => Number(difficulty.id)),
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
    };
    if (updatedOriginalStory) {
      updateStoryRequest.content = updatedOriginalStory;
    }
    if (updatedEditedStory) {
      updateStoryRequest.translations = [{
        code: story.language,
        content: updatedEditedStory,
      }];
    }
    return updateStoryRequest;
  }

  private shouldShowNotificationMessage(): boolean {
    return this.storyDetailsService.story.channel === CHANNEL_CONSTANTS.WEB ? !!this.storyDetailsService.story.emailProvided : true;
  }
}
