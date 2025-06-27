import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-send-icon',
  templateUrl: './send-icon.component.html',
  styleUrls: ['../icon-style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SendIconComponent {}
