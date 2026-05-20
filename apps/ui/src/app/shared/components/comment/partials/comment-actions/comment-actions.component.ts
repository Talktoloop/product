import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comment-actions',
  templateUrl: './comment-actions.component.html',
  styleUrls: ['./comment-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentActionsComponent {
  @Input() isReplyEnable = true;
  @Input() isUpVoteEnable = true;
  @Input() isReplyFormShown: boolean;
  @Input() voted: boolean;
  @Input() votes: number;
  @Output() replyClick = new EventEmitter<void>();
  @Output() upvoteClick = new EventEmitter<void>();

  get upvoteLabelKey(): string {
    return this.voted ? 'global.upvoted' : 'global.upvote';
  }

  handleReplyClick(): void {
    this.replyClick.emit();
  }

  handleUpvoteClick(): void {
    this.upvoteClick.emit();
  }
}
