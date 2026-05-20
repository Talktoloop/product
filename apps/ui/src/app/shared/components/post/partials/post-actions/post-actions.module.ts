import { CommonModule, DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { UpvoteModule } from '@shared/components/upvote/upvote.module';
import { ChatBubbleIconModule } from '@shared/icons/chat-bubble-icon/chat-bubble-icon.module';
import { DoubleChatIconModule } from '@shared/icons/double-chat-icon/double-chat-icon.module';
import { VisibilityIconModule } from '@shared/icons/visibility-icon/visibility-icon.module';
import { PostActionsComponent } from './post-actions.component';

@NgModule({
  declarations: [PostActionsComponent],
  imports: [CommonModule, TranslateModule, UpvoteModule, VisibilityIconModule, ChatBubbleIconModule, DoubleChatIconModule],
  exports: [PostActionsComponent],
  providers: [DecimalPipe],
})
export class PostActionsModule {}
