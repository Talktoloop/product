import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-translate-icon',
  templateUrl: './translate-icon.component.html',
  styleUrls: ['../icon-style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TranslateIconComponent {}
