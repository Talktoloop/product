import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-new-line-icon',
  templateUrl: './new-line-icon.component.html',
  styleUrls: ['../icon-style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewLineIconComponent {}
