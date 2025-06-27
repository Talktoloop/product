import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from '@shared/components/button/button.module';
import { UpvoteModule } from '@shared/components/upvote/upvote.module';
import { ReplyIconModule } from '@shared/icons/reply-icon/reply-icon.module';
import { CommentActionsComponent } from './comment-actions.component';

@NgModule({
  declarations: [CommentActionsComponent],
  imports: [CommonModule, ButtonModule, ReplyIconModule, UpvoteModule, TranslateModule],
  exports: [CommentActionsComponent],
})
export class CommentActionsModule {}
