import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-eye-icon',
  templateUrl: './eye-icon.component.html',
  styleUrls: ['../icon-style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EyeIconComponent {
  @Input() size = 20;
  @Input() fillColor = '#107D79';
}
