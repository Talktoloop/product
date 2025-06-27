import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-done-icon',
  templateUrl: './done-icon.component.html',
  styleUrls: ['../icon-style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoneIconComponent {
  @Input() fillColor = 'currentColor';
  @Input() size = 20;
}
