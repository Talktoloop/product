import { ChangeDetectorRef, Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '@app/core/services/api/profile/profile.service';
import { COMMENT_STATUS } from '@app/shared/enums/comment-status.enum';
import { CommentService } from '@core/services/api/comment/comment.service';
import { IComment } from '@core/services/api/model/comment.model';
import { BaseComponent } from '@shared/components/base.component';
import { ICommentID } from '@shared/components/post/partials/reply-form/model/comment-id.model';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-single-comment',
  templateUrl: './single-comment.component.html',
  styleUrls: ['./single-comment.component.scss'],
})
export class SingleCommentComponent extends BaseComponent implements OnChanges, OnDestroy {
  @Input() comment: IComment;
  @Input() forceExpanded = false;
  @Input() showActions = true;
  @Input() showChildren = true;
  @Input() showReplyForm = true;
  @Input() storyId: string;

  commentId: ICommentID;
  voted = [];
  votes = {};
  voting = false;
  replyFormShown = false;

  COMMENT_STATUS = COMMENT_STATUS;

  constructor(
    private cd: ChangeDetectorRef,
    public profileService: ProfileService,
    private commentService: CommentService,
    private router: Router,
  ) {
    super();
  }

  handlePendingReviewCommentClick(): void {
    if (this.comment.status === 'pending_review') {
      this.router.navigate([`/inbox/replies/${this.comment.id}/review-and-translate`]);
    }
  }

  handlePendingReviewCommentReplyClick(subcomment: IComment): void {
    if (subcomment.status === 'pending_review') {
      this.router.navigate([`/inbox/replies/${subcomment.id}/review-and-translate`]);
    }
  }

  isVisibleForAdmin(comment): boolean {
    return (
      this.profileService.isAdmin &&
      [COMMENT_STATUS.PENDING_REVIEW, COMMENT_STATUS.PUBLISHED, COMMENT_STATUS.PUBLISHED_AND_PENDING_CALL].includes(comment.status)
    );
  }

  isVisibleForNonAdmin(comment): boolean {
    return !this.profileService.isAdmin && [COMMENT_STATUS.PUBLISHED, COMMENT_STATUS.PUBLISHED_AND_PENDING_CALL].includes(comment.status);
  }

  getNgStyleForComment(comment): { [key: string]: string } {
    return comment.status === COMMENT_STATUS.PENDING_REVIEW ? { opacity: '0.4' } : { opacity: '1' };
  }

  isReplyEnabled(comment): boolean {
    return comment.status !== COMMENT_STATUS.PENDING_REVIEW;
  }

  isUpVoteEnabled(comment): boolean {
    return comment.status !== COMMENT_STATUS.PENDING_REVIEW;
  }

  ngOnChanges(): void {
    this.commentId = { id: this.storyId, parentCommentId: this.comment?.id };
    if (this.comment && !this.initialized) {
      if (this.commentService.hasUserVoted(this.comment?.id)) {
        this.voted.push(this.comment?.id);
      }
      this.votes[this.comment.id] = this.comment.votes;
      this.comment.children?.forEach((child) => {
        this.votes[child.id] = child.votes || 0;
      });
      this.initialized = true;
    }
  }

  upvote($event): void {
    if (!this.showActions || this.voting) {
      return;
    }

    this.voting = true;
    if (this.voted.indexOf($event) === -1) {
      this.voted.push($event);
      this.votes[$event]++;
      this.commentService
        .voteComment($event)
        .pipe(take(1), takeUntil(this.destroyed$))
        .subscribe(
          (res) => {
            this.voting = false;
            if (!res.success) {
              this.votes[$event]--;
            } else {
              this.commentService.setUserVoted($event, true);
            }
            this.cd.detectChanges();
          },
          () => {
            this.voting = false;
            this.votes[$event]--;
            this.voted.splice(this.voted.indexOf($event), 1);
            this.cd.detectChanges();
          },
        );
    } else {
      this.voted.splice(this.voted.indexOf($event), 1);
      this.votes[$event]--;
      this.commentService
        .unvoteComment($event)
        .pipe(take(1), takeUntil(this.destroyed$))
        .subscribe(
          (res) => {
            this.voting = false;
            if (!res.success) {
              this.votes[$event]++;
              this.voted.push($event);
            } else {
              this.commentService.setUserVoted($event, false);
            }
            this.cd.detectChanges();
          },
          () => {
            this.voting = false;
            this.votes[$event]++;
            this.voted.push($event);
            this.cd.detectChanges();
          },
        );
    }
  }

  replyFormSwitch(): void {
    if (!this.showReplyForm) {
      this.replyFormShown = false;
      return;
    }
    this.replyFormShown = !this.replyFormShown;
  }

  trackByFunction(i: number, item: IComment): string {
    return item.id;
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
