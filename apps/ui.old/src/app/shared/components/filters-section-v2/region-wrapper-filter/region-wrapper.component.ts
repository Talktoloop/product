import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'loop-region-wrapper-filter',
  templateUrl: './region-wrapper.component.html',
  styleUrls: ['./region-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegionWrapperComponent {
  @Input() title: string;
  @Input() isModal: boolean;
  @Input() lastLocationQuery: string;
}
