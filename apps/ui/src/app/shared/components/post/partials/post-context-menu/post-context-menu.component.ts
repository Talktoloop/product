import { ChangeDetectorRef, Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { INBOX_REPLY_ROUTES, INBOX_ROUTES, MAIN_ROUTES } from '@app/app-routing.props';
import { CommentService } from '@app/core/services/api/comment/comment.service';
import { CHANNEL_CONSTANTS } from '@app/core/services/api/model/channel.enum';
import { IBaseApiResponse } from '@app/core/services/api/model/response/base-response.model';
import { ProfileService } from '@app/core/services/api/profile/profile.service';
import { ModalServiceV2 } from '@app/core/services/modal/modal-v2.service';
import { StoryService } from '@app/core/services/api/story/story.service';
import { ReportFormComponent } from '@app/shared/components/report-form/report-form.component';
import { BaseComponent } from '@app/shared/components/base.component';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'loop-post-context-menu',
  templateUrl: './post-context-menu.component.html',
  styleUrls: ['./post-context-menu.component.scss'],
})
export class PostContextMenuComponent extends BaseComponent {
  @Input() id: string;
  @Input() channel: CHANNEL_CONSTANTS;
  @Input() postType: 'story' | 'reply';
  @Output() postRemoved$ = new Subject<string>();
  contextMenuOpened = false;
  private postLink: string;
  constructor(
    public profileService: ProfileService,
    private commentService: CommentService,
    private router: Router,
    private storyService: StoryService,
    private modalService: ModalServiceV2,
    private toastr: ToastrService,
    private translateService: TranslateService,
    private cd: ChangeDetectorRef,
  ) {
    super();
  }

  private unpublishFn(id: string): Observable<IBaseApiResponse> {
    switch (this.postType) {
      // TODO
      case 'story':
        this.postLink = `${MAIN_ROUTES.INBOX}/${INBOX_ROUTES.STORIES}/${'/story/:channel/:id'
          .replace(':channel', this.channel || CHANNEL_CONSTANTS.WEB)
          .replace(':id', this.id)}`;
        return this.storyService.unpublishStoryModerator(id);
      case 'reply':
        this.postLink = `${MAIN_ROUTES.INBOX}/${INBOX_ROUTES.REPLIES}/${INBOX_REPLY_ROUTES.REPLY.replace(':id', this.id)}`;
        return this.commentService.unpublishCommentModerator(id);
      default:
        return null;
    }
  }

  contextMenuClicked(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.contextMenuOpened = !this.contextMenuOpened;
  }

  editClicked(): void {
    this.unpublishHandler();
  }

  reportClicked(): void {
    this.contextMenuOpened = false;
    this.modalService.open(ReportFormComponent, {
      postId: this.id,
      postType: this.postType,
    });
  }

  private unpublishHandler(withReject = false): void {
    this.unpublishFn?.(this.id)
      .pipe(take(1), takeUntil(this.destroyed$))
      .subscribe(
        (res) => {
          if (res.success) {
            if (withReject) {
              this.showSuccessToast(withReject);
              this.router.navigate([this.postLink, { forceReject: true }]);
            } else {
              window.open(this.router.serializeUrl(this.router.createUrlTree([this.postLink])), '_blank');
            }
            this.postRemoved$?.next(this.id);
            this.contextMenuOpened = !this.contextMenuOpened;
          } else {
            this.errorHandler();
          }
        },
        () => {
          this.errorHandler();
        },
      );
  }

  private errorHandler(): void {
    this.toastr.error(this.translateService.instant(`error.generic.title`), this.translateService.instant('error.generic.subtitle'));
    this.contextMenuOpened = !this.contextMenuOpened;
  }

  private showSuccessToast(withRedirect: boolean): void {
    const subtitle = withRedirect
      ? 'admin.contextMenu.success.redirecting'
      : `<a href="${this.postLink}">${this.translateService.instant('admin.contextMenu.success.link')}</a>`;

    if (withRedirect) {
      this.toastr.info(this.translateService.instant(`admin.contextMenu.success.${this.postType}.title`));
    } else {
      this.toastr.success(this.translateService.instant(`admin.contextMenu.success.${this.postType}.title`, subtitle));
    }
  }

  handleOutsideClick() {
    this.contextMenuOpened = false;
    this.cd.detectChanges();
  }
}
