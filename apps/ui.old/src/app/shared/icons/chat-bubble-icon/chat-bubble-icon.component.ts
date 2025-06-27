import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-chat-bubble-icon',
  templateUrl: './chat-bubble-icon.component.html',
  styleUrls: ['../icon-style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatBubbleIconComponent {}
