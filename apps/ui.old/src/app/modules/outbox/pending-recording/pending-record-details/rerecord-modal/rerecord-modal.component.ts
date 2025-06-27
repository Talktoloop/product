import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { IBaseApiResponse } from '@app/core/services/api/model/response/base-response.model';
import { ModalBase } from '@app/modules/new-story-v2/modals/modal.base';
import { CommentService } from '@core/services/api/comment/comment.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-rerecord-modal',
  templateUrl: './rerecord-modal.component.html',
  styleUrls: ['./rerecord-modal.component.scss'],
})
export class RerecordModalComponent extends ModalBase {
  @Output() confirm = new EventEmitter<void>();
  private id: string;

  constructor(
    @Inject('close$') close$,
    @Inject('id') id,
    private toastr: ToastrService,
    private commentService: CommentService,
    private translateService: TranslateService,
  ) {
    super(close$);
    this.id = id;
  }

  onRerecordClick() {
    this.commentService
      .putPendingRecordingComment(this.id)
      .pipe(take(1))
      .subscribe(
        (baseApiResponse: IBaseApiResponse) => (baseApiResponse.success ? this.handleSuccessResponse() : this.handleErrorResponse()),
        () => {
          this.handleErrorResponse();
        },
      );
  }

  private handleErrorResponse(): void {
    this.toastr.error(
      this.translateService.instant('admin.comment.toast.sentToPendingRecording.error.title'),
      this.translateService.instant('admin.comment.toast.sentToPendingRecording.error.subtitle'),
    );
  }

  private handleSuccessResponse(): void {
    this.toastr.success(
      this.translateService.instant('admin.comment.toast.sentToPendingRecording.success.subtitle'),
      this.translateService.instant('admin.comment.toast.sentToPendingRecording.success.title'),
    );
    this.confirm.next(null);
    this.onModalClose();
  }
}
