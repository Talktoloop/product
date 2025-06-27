import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChatReplyIconComponent } from './chat-reply-icon.component';

@NgModule({
  declarations: [ChatReplyIconComponent],
  exports: [ChatReplyIconComponent],
  imports: [CommonModule],
})
export class ChatReplyIconModule {}
