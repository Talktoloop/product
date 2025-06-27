import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-eye-hide-icon',
  templateUrl: './eye-hide-icon.component.html',
  styleUrls: ['../icon-style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EyeHideIconComponent {
  @Input() size = 20;
  @Input() fillColor = '#107D79';
}
