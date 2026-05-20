import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'loop-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() interactive = false;
  @Input() flat: boolean;
  @Input() noPadding: boolean;
  @Input() pulsating: boolean;
}
