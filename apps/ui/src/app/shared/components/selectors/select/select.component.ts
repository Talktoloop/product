import { ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { SelectOptionComponent } from '@shared/components/selectors/select-option/select-option.component';

@Component({
  selector: 'loop-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent {
  @Input() showHeader: boolean;
  @Input() fullWidth = false;
  @Input() showSuffix: boolean;
  @Input() flat: boolean;

  @ContentChildren('loop-select-option', { read: SelectOptionComponent }) options: QueryList<SelectOptionComponent>;
}
