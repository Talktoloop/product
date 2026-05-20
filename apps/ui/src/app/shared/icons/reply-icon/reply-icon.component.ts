import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-reply-icon',
  templateUrl: './reply-icon.component.html',
  styleUrls: ['../icon-style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReplyIconComponent {}
