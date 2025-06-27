import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { INBOX_REPLY_ROUTES, INBOX_ROUTES, MAIN_ROUTES } from '@app/app-routing.props';
import { IRejectReason } from '@app/core/services/api/model/request/reject-reason.model';
import { ReplyDetailsService } from '@app/modules/inbox/replies/reply-details/reply-details.service';
import { InboxRejectFormComponent } from '@app/modules/inbox/shared/components/reject-modal/reject-form/reject-form.component';
import LoopIcon from '@app/shared/loop-design-system/components/loop-icon';
import { SimpleTagTheme } from '@app/shared/loop-design-system/components/tags/simple-tag-theme.enum';
import { CommentService } from '@core/services/api/comment/comment.service';
import { CHANNEL_CONSTANTS } from '@core/services/api/model/channel.enum';
import { IComment } from '@core/services/api/model/comment.model';
import { ModalServiceV2 } from '@core/services/modal/modal-v2.service';
import { TranslateService } from '@ngx-translate/core';
import { AudioPlayerComponent } from '@shared/components/audio-player/audio-player.component';
import { BaseComponent } from '@shared/components/base.component';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { finalize, take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-reply-transcribe',
  templateUrl: './reply-transcribe.component.html',
  styleUrls: ['./reply-transcribe.component.scss'],
})
export class ReplyTranscribeComponent extends BaseComponent implements OnInit {
  @ViewChild(AudioPlayerComponent) audioPlayer: AudioPlayerComponent;
  readonly LoopIcon = LoopIcon;
  readonly SimpleTagTheme = SimpleTagTheme;

  reply: IComment;
  loading = false;
  poorAudioQuality = false;
  audioSrc$: Observable<string>;
  transcribeControl = new UntypedFormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(30000)]);

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private modalService: ModalServiceV2,
    private commentService: CommentService,
    private activatedRoute: ActivatedRoute,
    private translateService: TranslateService,
    private replyDetailsService: ReplyDetailsService,
  ) {
    super();
  }

  ngOnInit() {
    this.replyDetailsService.reply.subscribe((reply: IComment) => {
      this.reply = reply;
      this.transcribeControl.setValue(this.reply.content || null);
      this.setAudioToTranscribe();
      if (this.reply.channel !== CHANNEL_CONSTANTS.IVRR) {
        this.router.navigate([INBOX_REPLY_ROUTES.REPLY_REVIEW_AND_TRANSLATE], { relativeTo: this.activatedRoute.parent });
      }
    });
  }

  poorAudioQualityChange(poorAudioQuality: boolean): void {
    this.poorAudioQuality = poorAudioQuality;
  }

  setAudioToTranscribe(): void {
    this.replyDetailsService.s3fileUrl.subscribe((fileUrl: string) => {
      this.audioSrc$ = of(fileUrl);
    });
  }

  submitTranscribe(): void {
    this.transcribeControl.markAsTouched();
    this.transcribeControl.updateValueAndValidity();

    if (!this.transcribeControl.valid) {
      return;
    }
    this.loading = true;

    this.commentService
      .addCommentTranslationModerator(this.reply.id, {
        language: this.reply.language,
        content: this.transcribeControl.value,
      })
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () => {
          this.replyDetailsService.fetch(this.reply.id);
          this.router.navigate([`${INBOX_REPLY_ROUTES.REPLY_REVIEW_AND_TRANSLATE}/`], { relativeTo: this.activatedRoute.parent });
        },
        () => {
          this.toastr.error(
            this.translateService.instant(`story.details.transcribe.toast.reviewStory.error.subtitle`), // TODO
            this.translateService.instant(`story.details.transcribe.toast.reviewStory.error.title`), // TODO
          );
        },
      );
  }

  handleRejectClick(): void {
    const modal = this.modalService.open(InboxRejectFormComponent, {
      hasAuthor: this.shouldShowNotificationMessage(),
      languageCode: this.reply.language,
      type: 'comment',
      channel: this.reply.channel,
      contactIsNotAccepted: false,
      multiple: false,
    });
    modal.confirm.pipe(take(1), takeUntil(this.destroyed$)).subscribe((payload: IRejectReason) => this.reject(payload));
  }

  private shouldShowNotificationMessage(): boolean {
    return this.reply.channel === CHANNEL_CONSTANTS.WEB ? !!this.reply.emailProvided : true;
  }

  reject(rejectReasons: IRejectReason): void {
    this.loading = true;

    this.commentService
      .rejectCommentModerator(this.reply.id, rejectReasons)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () => {
          this.router.navigate([`${MAIN_ROUTES.INBOX}/${INBOX_ROUTES.REPLIES}`], { queryParams: { processedReplyId: this.reply.id } });
          this.toastr.success(
            this.translateService.instant(`admin.comment.toast.rejected.success.subtitle`),
            this.translateService.instant(`admin.comment.toast.rejected.success.title`),
          );
        },
        () => {
          this.toastr.error(
            this.translateService.instant(`admin.comment.toast.rejected.error.subtitle`),
            this.translateService.instant(`admin.comment.toast.rejected.error.title`),
          );
        },
      );
  }
}
