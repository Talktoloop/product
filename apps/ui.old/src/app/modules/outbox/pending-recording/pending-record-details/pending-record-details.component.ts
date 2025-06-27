import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MAIN_ROUTES, OUTBOX_ROUTES } from '@app/app-routing.props';
import { RerecordModalComponent } from '@app/modules/outbox/pending-recording/pending-record-details/rerecord-modal/rerecord-modal.component';
import { ShortStoryInformationComponent } from '@app/modules/outbox/pending-recording/pending-record-details/short-story-information/short-story-information.component';
import { DetailsContainerComponent } from '@app/modules/outbox/shared/details-container/details-container.component';
import LoopIcon from '@app/shared/loop-design-system/components/loop-icon';
import { SimpleTagTheme } from '@app/shared/loop-design-system/components/tags/simple-tag-theme.enum';
import { CommentService } from '@core/services/api/comment/comment.service';
import { IVRRService } from '@core/services/api/ivrr/ivrr';
import { IComment } from '@core/services/api/model/comment.model';
import { IUploadIvvrAudioRequest } from '@core/services/api/model/request/upload-ivvr-audio.model';
import { IGetOutboxIntroOutroRecordings } from '@core/services/api/model/response/get-outbox-intro-outro-recordings.model';
import { IStory } from '@core/services/api/model/story.model';
import { StoryService } from '@core/services/api/story/story.service';
import { LocalStorageKeys, LocalStorageService } from '@core/services/local-storage/local-storage.service';
import { UserLanguageService } from '@core/services/locales/user-language.service';
import { ModalServiceV2 } from '@core/services/modal/modal-v2.service';
import { UIService } from '@core/services/ui/ui.service';
import { TranslateService } from '@ngx-translate/core';
import { BaseComponent } from '@shared/components/base.component';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-pending-record-details',
  templateUrl: './pending-record-details.component.html',
  styleUrls: ['./pending-record-details.component.scss'],
})
export class PendingRecordDetailsComponent extends BaseComponent implements OnInit {
  readonly LoopIcon = LoopIcon;
  readonly SimpleTagTheme = SimpleTagTheme;
  backUrl: string;
  details: IComment;
  storyDetails: IStory;
  recordings: IGetOutboxIntroOutroRecordings;
  isIntroExpanded: boolean;
  isReplyExpanded = true;
  isOutroExpanded: boolean;
  isStoryDetailsExpanded: boolean;
  recordBlob = null;
  isRecorderInViewPort;
  introText = new UntypedFormControl({ value: null, disabled: true });
  onScroll$ = new BehaviorSubject<void>(null);
  isRequestInProgress = false;
  isInProgress: boolean;
  s3fileUrl: string;
  minContainerHeight: number;
  private commentId: string;

  @ViewChild('recorder') recorder: ElementRef<HTMLDivElement>;
  @ViewChild('detailsContainer') detailsContainer: DetailsContainerComponent;
  @ViewChild('recordDetailsHeader') recordDetailsHeader: ElementRef<HTMLDivElement>;
  @ViewChild('expandButton') expandButton: ElementRef<HTMLDivElement>;
  @ViewChild('storyInfo') storyInfo: ShortStoryInformationComponent;

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.onScroll$.next(null);
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.recalculateHeight();
  }

  constructor(
    public ui: UIService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private ivrrService: IVRRService,
    private storyService: StoryService,
    private modalService: ModalServiceV2,
    private commentService: CommentService,
    private translateService: TranslateService,
    private storageService: LocalStorageService,
    private languageService: UserLanguageService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.watchIsRecorderComponentInViewPort();
    this.fetchData();

    this.ui.desktopView$.pipe(takeUntil(this.destroyed$)).subscribe((val) => val && this.recalculateHeight());
  }

  getTextWithNewLines(text: string): string {
    return text.replaceAll('\n', '<br><br>');
  }

  onInfoSubmit(): void {
    this.storageService.set(LocalStorageKeys.OUTBOX_IVRR_AUDIO_RECORDER_INFO, 'true');
  }

  expandStoryDetails(): void {
    this.isStoryDetailsExpanded = !this.isStoryDetailsExpanded;
    setTimeout(() => this.recalculateHeight(), 100);
  }

  recalculateHeight(): void {
    if (!this.isStoryDetailsExpanded) {
      this.minContainerHeight = null;
      return;
    }

    const detailsHeaderHeight = this.detailsContainer?.detailsHeader.nativeElement.scrollHeight;
    const recordDetailsHeaderHeight = this.recordDetailsHeader?.nativeElement.scrollHeight;
    const storyInfoHeight = this.storyInfo?.storyDetailsRef.nativeElement.scrollHeight;
    const expandButtonHeight = this.expandButton?.nativeElement.scrollHeight;
    if (!!detailsHeaderHeight && !!recordDetailsHeaderHeight && !!storyInfoHeight) {
      this.minContainerHeight = detailsHeaderHeight + recordDetailsHeaderHeight + storyInfoHeight + expandButtonHeight;
    }
  }

  uploadIvrrFile(): void {
    if (this.recordBlob && !this.isRequestInProgress) {
      this.isRequestInProgress = true;
      const uploadFilesRequest: IUploadIvvrAudioRequest = {
        files: [this.recordBlob],
        commentId: this.commentId,
      };
      this.commentService.uploadAudioComment(uploadFilesRequest).subscribe(
        () => {
          this.toastr.success(
            this.translateService.instant(`admin.comment.toast.published.success.title`),
            this.translateService.instant('admin.comment.toast.published.success.subtitle'),
          );
          this.router.navigate([this.backUrl]);
        },
        () => {
          this.toastr.error(
            this.translateService.instant(`admin.comment.toast.published.error.title`),
            this.translateService.instant('admin.comment.toast.published.error.subtitle'),
          );
          this.isRequestInProgress = false;
        },
      );
    }
  }

  get isInfoActive(): boolean {
    const key = this.storageService.get(LocalStorageKeys.OUTBOX_IVRR_AUDIO_RECORDER_INFO);
    return !key || key === 'false';
  }

  private watchIsRecorderComponentInViewPort() {
    this.onScroll$.pipe(debounceTime(1)).subscribe(() => {
      if (!this.recorder?.nativeElement?.parentElement) {
        return;
      }
      const rect = this.recorder.nativeElement.parentElement.getBoundingClientRect();
      this.isRecorderInViewPort =
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    });
  }

  private fetchData(): void {
    this.commentId = this.route.snapshot.paramMap.get('id');
    this.commentService.getCommentModerator(this.commentId).subscribe(
      (commentDetails: IComment) => {
        this.details = commentDetails;
        this.storyService.getStory(this.details.storyId).subscribe(
          (storyDetails: IStory) => {
            this.storyDetails = storyDetails;
            this.isInProgress = this.route.snapshot.queryParams?.inProgress === 'true';
            if (this.isInProgress) {
              this.downloadAudioSrc();
            }
            if (this.storyDetails.language) {
              this.commentService.getOutboxIntroOutroRecordings(this.storyDetails.language).subscribe(
                (recordings: IGetOutboxIntroOutroRecordings) => {
                  this.recordings = recordings;
                },
                () => {
                  this.toastr.error(
                    this.translateService.instant(`outbox.details.noContentForSelectedLanguageToast.title`),
                    this.translateService.instant('outbox.details.noContentForSelectedLanguageToast.subtitle'),
                  );
                  this.router.navigate([this.backUrl]);
                },
              );
            }
            this.backUrl = this.isInProgress
              ? `/${MAIN_ROUTES.OUTBOX}/${OUTBOX_ROUTES.IN_PROGRESS}`
              : `/${MAIN_ROUTES.OUTBOX}/${OUTBOX_ROUTES.PENDING_RECORDING}`;
          },
          () => {
            this.router.navigate([this.backUrl]);
          },
        );
      },
      () => {
        this.router.navigate([this.backUrl]);
      },
    );
  }

  downloadAudioSrc(): void {
    this.ivrrService.getSignedUrlForS3Audio(this.details.s3FileId).subscribe((fileUrl) => {
      this.s3fileUrl = fileUrl;
    });
  }

  openDeleteRecordPopup() {
    const close$ = new Subject();
    const modal = this.modalService.open(RerecordModalComponent, {
      close$,
      id: this.details.id,
    });
    this.isRecorderInViewPort = true;

    modal.close$.subscribe(() => {
      this.isRecorderInViewPort = false;
    });

    modal.confirm.subscribe(() => {
      setTimeout(() => {
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: { inProgress: null },
          queryParamsHandling: 'merge',
        });
        this.fetchData();
      }, 1000);
    });
  }

  getRecordInStoryLanguage(): string {
    return (
      this.details.translations.find((translation) => translation.code === this.storyDetails.language)?.content || this.details.content
    );
  }
}
