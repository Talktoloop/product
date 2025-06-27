import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChatBubbleIconComponent } from './chat-bubble-icon.component';

@NgModule({
  declarations: [ChatBubbleIconComponent],
  exports: [ChatBubbleIconComponent],
  imports: [CommonModule],
})
export class ChatBubbleIconModule {}
