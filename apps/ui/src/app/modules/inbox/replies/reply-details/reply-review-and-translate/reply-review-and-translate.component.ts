import { Pill } from '@app/modules/inbox/shared/components/form-section/form-section.component';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MAIN_ROUTES, OUTBOX_PENDING_RECORD_ROUTES, OUTBOX_ROUTES } from '@app/app-routing.props';
import { MetaDataService } from '@app/core/services/api/meta-data/meta-data.service';
import { IBaseEntityCheckNested } from '@app/core/services/api/model/response/base-entity.model';
import { IGetThematicAPIExtended } from '@app/core/services/api/model/response/get-thematic.model';
import { ReplyDetailsService } from '@app/modules/inbox/replies/reply-details/reply-details.service';
import { InboxRejectFormComponent } from '@app/modules/inbox/shared/components/reject-modal/reject-form/reject-form.component';
import { InboxPostBaseComponent } from '@app/modules/inbox/shared/inbox-post.component';
import { CheckboxListFilterData } from '@app/shared/components/filters-section-v2/filters-controls-data.model';
import { CommentService } from '@core/services/api/comment/comment.service';
import { CHANNEL_CONSTANTS } from '@core/services/api/model/channel.enum';
import { IComment } from '@core/services/api/model/comment.model';
import { IRejectReason } from '@core/services/api/model/request/reject-reason.model';
import { IPutStoryTranslation } from '@core/services/api/model/story-translation';
import { FixedElementData } from '@core/services/fixed-positioning/fixed-position.model';
import { FixedPositioning } from '@core/services/fixed-positioning/fixed-positioning';
import { SupportedLanguagesService } from '@core/services/locales/supported-languages.service';
import { ModalServiceV2 } from '@core/services/modal/modal-v2.service';
import { UIService } from '@core/services/ui/ui.service';
import { TranslateService } from '@ngx-translate/core';
import { AsidePosition, AsideService } from '@shared/components/aside/aside.service';
import { FormStep } from '@shared/model/form-step.model';
import { Option } from '@shared/model/option.model';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, combineLatest, Observable, of, throwError } from 'rxjs';
import { catchError, finalize, mergeMap, take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-reply-review-and-translate',
  templateUrl: './reply-review-and-translate.component.html',
  styleUrls: ['./reply-review-and-translate.component.scss'],
})
export class ReplyReviewAndTranslateComponent extends InboxPostBaseComponent implements OnChanges, OnDestroy, OnInit, AfterViewInit {
  @ViewChild('storyPreview') storyPreviewRef;
  @ViewChild('storyReviewContainer') storyReviewContainerElement: ElementRef;
  @ViewChild('storyDetails') storyDetailsElement: ElementRef;
  audioSrc$: Observable<string>;
  isSubmitted: boolean;

  @Input() set reply(value: IComment) {
    this._reply = value;
    this.cd.detectChanges();
  }

  get reply(): IComment {
    return this._reply;
  }

  publishButtonLabel: string;
  @Input() rejectButtonLabel = this.translateService.instant('admin.pendingReplyReview.rejectReply');
  @Input() backUrl: string | string[] = '/inbox/replies';

  _reply: IComment;
  publishing = false;
  rejecting = false;
  step = 1;
  contentScrolled = false;
  solutionProposed = false;
  scrolledToBottom = false;
  disablePublishAction = false;
  switchingLanguage: boolean;
  languageControl = new UntypedFormControl(null);
  thematicAreaDataNew$: BehaviorSubject<CheckboxListFilterData> = new BehaviorSubject<CheckboxListFilterData>(null);
  resetThematics$ = new BehaviorSubject<boolean>(true);
  commentForm = new UntypedFormGroup({
    thematics: new UntypedFormControl(),
  });
  thematicOptions: Option[];

  readonly steps: FormStep[] = [{ text: 'admin.pendingReplyReview.reviewStep' }];
  private fixedElementData: FixedElementData;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.fixedPositioning.positionFixedElement(this.fixedElementData, this.ui.mobileView$.getValue());
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(): void {
    this.fixedPositioning.positionFixedElement(this.fixedElementData, this.ui.mobileView$.getValue());
  }

  get replyLanguagePill(): Pill[] {
    return this.reply?.language
      ? [{ content: this.translateService.instant(`languages.${this.reply.language}`), id: this.reply.language }]
      : [];
  }

  get isVoiceStory(): boolean {
    return this.reply?.storyChannel === CHANNEL_CONSTANTS.IVRR && this.reply.channel !== CHANNEL_CONSTANTS.IVRR;
  }

  constructor(
    protected languageService: SupportedLanguagesService,
    protected toastr: ToastrService,
    protected translateService: TranslateService,
    private replyDetailsService: ReplyDetailsService,
    private asideService: AsideService,
    private cd: ChangeDetectorRef,
    private commentService: CommentService,
    private fixedPositioning: FixedPositioning,
    private modalService: ModalServiceV2,
    private route: ActivatedRoute,
    private router: Router,
    private metaDataService: MetaDataService,
    private ui: UIService,
  ) {
    super(translateService, languageService, toastr);
    this.getMetadata();
  }

  private checkParams(): void {
    this.route.parent.snapshot.paramMap.get('forceReject') && this.handleRejectClick();
  }

  ngOnChanges(changes: SimpleChanges): void {
    super.setup(this.reply.id, this.reply.translations, this.reply.language);
    this.hideDetailsPanel();
    super.initLanguages();
    this.checkParams();
    this.refreshTranslations(null, 0);
  }

  refreshTranslations(affectedLang = '', minimumRepeat?: number): void {
    this.isSubmitted = false;
    super.refreshTranslationsByFn(this.commentService.getCommentTranslationStatuses.bind(this.commentService), affectedLang, minimumRepeat);
  }

  closeClicked(): void {
    super.initLanguages();
  }

  submitTranslation(): void {
    super
      .submitTranslationByFn(this.commentService.addCommentTranslationModerator.bind(this.commentService))
      .pipe(take(1), takeUntil(this.destroyed$))
      .subscribe(
        () => {
          this.refreshTranslations(this.targetLanguage, 4);
          this.cd.detectChanges();
        },
        (err) => {
          super.showErrorNotification(err?.error.message?.error);
          this.refreshTranslations(null, 0);
          this.cd.markForCheck();
        },
      );
  }

  verifyTranslation(payload: IPutStoryTranslation): void {
    super
      .verifyTranslationByFn(this.commentService.verifyCommentTranslationModerator.bind(this.commentService), payload)
      .pipe(take(1), takeUntil(this.destroyed$))
      .subscribe(
        () => {
          this.refreshTranslations(payload.language, 1);
          this.cd.markForCheck();
        },
        (err) => {
          this.refreshTranslations(this.targetLanguage, 0);
          super.showErrorNotification(err?.error.message?.error);
          this.cd.markForCheck();
        },
      );
  }

  deleteTranslation(language: string): void {
    super
      .deleteTranslationByFn(this.commentService.deleteCommentTranslationModerator.bind(this.commentService), language)
      .pipe(take(1), takeUntil(this.destroyed$))
      .subscribe(
        () => {
          this.refreshTranslations(null, 1);
          this.cd.markForCheck();
        },
        (err) => {
          this.refreshTranslations(null, 0);
          super.showErrorNotification(err?.error.message?.error);
        },
      );
  }

  retryTranslation(language: string): void {
    if (this.processing) {
      return;
    }

    super
      .retryTranslationByFn(this.commentService.retryCommentTranslationModerator.bind(this.commentService), language)
      .pipe(take(1), takeUntil(this.destroyed$))
      .subscribe(
        () => {
          this.refreshTranslations(language, 4);
          this.cd.markForCheck();
        },
        (err) => {
          this.refreshTranslations(null, 0);
          super.showErrorNotification(err?.error.message?.error);
        },
      );
  }

  handleRejectClick(): void {
    this.rejecting = true;
    const modal = this.modalService.open(InboxRejectFormComponent, {
      hasAuthor: this.shouldShowNotificationMessage(),
      languageCode: this.reply.language,
      type: 'comment',
      channel: this.reply?.channel,
      contactIsNotAccepted: false,
      multiple: false,
    });
    modal.confirm.pipe(take(1), takeUntil(this.destroyed$)).subscribe((payload) => this.rejectComment(payload));
    modal.close$.pipe(take(1), takeUntil(this.destroyed$)).subscribe(() => {
      this.rejecting = false;
      this.cd.markForCheck();
    });
  }

  private shouldShowNotificationMessage(): boolean {
    return this.reply?.channel === CHANNEL_CONSTANTS.WEB ? !!this.reply.emailProvided : true;
  }

  publishReply(): void {
    this.isSubmitted = true;
    if (!this.isValid()) {
      return;
    }

    this.publishing = true;
    this.cd.markForCheck();

    const handleErrorResponse = (isIvrr = false) => {
      this.toastr.error(
        this.translateService.instant(
          isIvrr ? 'admin.comment.toast.sentToPendingRecording.error.title' : `admin.comment.toast.published.error.title`,
        ),
        this.translateService.instant(
          isIvrr ? 'admin.comment.toast.sentToPendingRecording.error.subtitle' : 'admin.comment.toast.published.error.subtitle',
        ),
      );
    };

    const handleSuccessResponse = (isIvrr?: boolean) => {
      this.toastr
        .success(
          this.translateService.instant(
            isIvrr ? 'admin.comment.toast.sentToPendingRecording.success.subtitle' : 'admin.comment.toast.published.success.subtitle',
          ),
          this.translateService.instant(
            isIvrr ? 'admin.comment.toast.sentToPendingRecording.success.title' : 'admin.comment.toast.published.success.title',
          ),
          isIvrr ? ({ buttons: [{ title: 'Record a voice note' }] } as unknown) : {},
        )
        .onAction.subscribe(() => {
          this.router.navigate([
            `${MAIN_ROUTES.OUTBOX}/${OUTBOX_ROUTES.PENDING_RECORDING}/${OUTBOX_PENDING_RECORD_ROUTES.RECORD.replace(':id', this.reply.id)}`,
          ]);
        });
      this.router.navigate([this.backUrl], { queryParams: { processedReplyId: this.reply.id } });
    };

    if (this.isVoiceStory) {
      this.commentService
        .putPendingRecordingComment(this.reply.id)
        .pipe(
          finalize(() => (this.publishing = false)),
          take(1),
          takeUntil(this.destroyed$),
        )
        .subscribe(
          (res) => (res.success ? handleSuccessResponse(true) : handleErrorResponse(true)),
          (e) => {
            handleErrorResponse(true);
          },
        );
    } else {
      this.publishing = true;

      this.commentService
        .updateCommentModerator(this.reply.id, {
          thematics: this.commentForm.value.thematics,
          language: this.reply.language,
          solution_proposed: this.solutionProposed,
        })
        .pipe(
          mergeMap(() => this.commentService.publishCommentModerator(this.reply.id)),
          take(1),
          takeUntil(this.destroyed$),
          finalize(() => {
            this.publishing = false;
          }),
        )
        .subscribe(
          (res) => (res.success ? handleSuccessResponse() : handleErrorResponse()),
          (e) => {
            handleErrorResponse();
          },
        );
    }
  }

  rejectComment(payload?: IRejectReason): void {
    if (!this.isValid()) {
      return;
    }

    const handleErrorResponse = () => {
      this.toastr.error(
        this.translateService.instant(`admin.comment.toast.rejected.error.title`),
        this.translateService.instant('admin.comment.toast.rejected.error.subtitle'),
      );
      this.rejecting = false;
      this.cd.markForCheck();
    };

    this.commentService
      .rejectCommentModerator(this.reply.id, payload)
      .pipe(
        take(1),
        catchError((e) => throwError({ error: e })),
        takeUntil(this.destroyed$),
      )
      .subscribe(
        (res) => {
          if (res.success) {
            this.toastr.success(
              this.translateService.instant(`admin.comment.toast.rejected.success.title`),
              this.translateService.instant('admin.comment.toast.rejected.success.subtitle'),
            );
            this.router.navigate([this.backUrl], { queryParams: { processedReplyId: this.reply.id } });
          } else {
            handleErrorResponse();
          }
        },
        () => {
          handleErrorResponse();
        },
      );
  }

  showStoryDetails($event: Event): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.asideService.openAside(this.storyPreviewRef, { position: AsidePosition.RIGHT });
    this.cd.markForCheck();
  }

  hideDetailsPanel(): void {
    this.asideService.closeAside();
    this.cd.markForCheck();
  }

  previewLoadingError(): void {
    this.toastr.error(
      this.translateService.instant(`admin.comment.toast.preview.error.title`),
      this.translateService.instant('admin.comment.toast.preview.error.subtitle'),
    );
    this.hideDetailsPanel();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    this.hideDetailsPanel();
  }

  handleLanguageChange(value: string): void {
    if (value === this.reply.language || !value) {
      return;
    }
    this.switchingLanguage = true;
    this.commentService
      .updateCommentModerator(this.reply.id, {
        thematics: this.commentForm.value.thematics,
        language: value,
        solution_proposed: this.solutionProposed,
      })
      .pipe(
        finalize(() => (this.switchingLanguage = false)),
        catchError((error) => {
          this.showErrorNotification();
          throw error;
        }),
        takeUntil(this.destroyed$),
      )
      .subscribe(() => {
        this.reply.language = value;
        this.setup(this.reply.id, this.reply.translations, this.reply.language);
        this.initLanguages();
        this.refreshTranslations('', 5);
      });
  }

  handleLanguageDismiss(): void {
    this.reply.language = null;
  }

  ngAfterViewInit(): void {
    this.enableFixedPositioning();
  }

  private enableFixedPositioning(): void {
    this.fixedElementData = {
      containerElement: this.storyReviewContainerElement.nativeElement,
      documentTopPadding: 70,
      fixedElement: this.storyDetailsElement.nativeElement,
      fixedElementPadding: 32,
    };

    this.ui.mobileView$.pipe(takeUntil(this.destroyed$)).subscribe((isMobile: boolean) => {
      setTimeout(() => this.fixedPositioning.positionFixedElement(this.fixedElementData, isMobile), 0);
    });
  }

  isValid(): boolean {
    if (this.reply.language && this.reply.thematics.length) {
      return true;
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }

  private getMetadata(): void {
    combineLatest([this.metaDataService.thematicAreas$])
      .pipe(take(1), takeUntil(this.destroyed$))
      .subscribe(([thematic]) => {
        const processedData: CheckboxListFilterData = {
          data: thematic.map((tx) => {
            tx.checked = false;
            tx.children.forEach((child) => {
              child.parentId = tx.code;
              child.checked = false;
            });
            tx.children.sort((a, b) => {
              const isOtherA = a.code.toLowerCase().endsWith('other') || a.code.toLowerCase().endsWith('autre');
              const isOtherB = b.code.toLowerCase().endsWith('other') || b.code.toLowerCase().endsWith('autre');
              if (isOtherA && !isOtherB) return 1;
              if (!isOtherA && isOtherB) return -1;
              
              const nameA = String(this.translateService.instant(a.code) || a.code);
              const nameB = String(this.translateService.instant(b.code) || b.code);
              return nameA.localeCompare(nameB);
            });
            return tx;
          }).sort((a, b) => {
            const nameA = String(this.translateService.instant(a.code) || a.code);
            const nameB = String(this.translateService.instant(b.code) || b.code);
            return nameA.localeCompare(nameB);
          }) as IBaseEntityCheckNested[],
        };
        this.thematicAreaDataNew$.next(processedData);
      });
  }

  handleThematicChange(): void {
    this.reply.thematics = this.commentForm.value.thematics;
  }

  get selectedThematics(): { id: string; content: string }[] {
    if (!this.thematicOptions) {
      return [];
    }

    const ids = this.reply.thematics || [];

    const children = this.thematicOptions.reduce((acc, area) => [...acc, ...area.children], []);
    return ids
      .map((id) => children.find((option) => option.value === id))
      .filter((option) => !!option)
      .map((option) => ({
        id: option.value,
        content: option.content,
      }));
  }

  dismissThematicArea(id: number): void {
    const updatedThematics = this.reply.thematics.filter((thematicId) => thematicId !== id);

    this.reply = { ...this.reply, thematics: updatedThematics };
    this.commentForm.get('thematics').setValue(this.reply.thematics);
  }

  thematicAreaOutsideClick(): void {
    this.commentForm.get('thematics').setValue(this.reply.thematics);
    this.resetThematics$.next(true);
  }

  ngOnInit(): void {
    this.setThematics();
    this.replyDetailsService.reply.subscribe((reply: IComment) => {
      this.reply = reply;
      this.solutionProposed = reply.solution_proposed;
      this.setAudioToTranscribe();
      this.publishButtonLabel = this.translateService.instant(
        this.isVoiceStory ? 'admin.pendingReplyReview.publishAndForwardToVoiceRecord' : 'admin.pendingReplyReview.publishReply',
      );
      this.ngOnChanges(null);
    });
    this.commentForm.get('thematics').setValue(this.replyDetailsService.thematics);
  }

  private setThematics(): void {
    this.thematicOptions = this.replyDetailsService.thematicsMetaData.map(
      (thematic: IGetThematicAPIExtended): Option => ({
        value: thematic.id,
        content: this.translateService.instant(thematic.code),
        children: thematic.children.map((child) => ({
          content: this.translateService.instant(child.code),
          value: child.id,
        })),
      }),
    );
  }

  private setAudioToTranscribe() {
    this.replyDetailsService.s3fileUrl.subscribe((fileUrl: string) => {
      this.audioSrc$ = of(fileUrl);
    });
  }

  solutionProposedChanged(solutionProposed: boolean): void {
    this.solutionProposed = solutionProposed;
  }
}
