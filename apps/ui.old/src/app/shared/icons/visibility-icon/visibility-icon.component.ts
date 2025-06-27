import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-visibility-icon',
  templateUrl: './visibility-icon.component.html',
  styleUrls: ['../icon-style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisibilityIconComponent {}
