import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

type PillTheme =
  | 'green'
  | 'moderator-pill'
  | 'outlined-gray'
  | 'outlined-purple'
  | 'filter-button'
  | 'outlined-filter-button'
  | 'green-link';

type PillVariant = 'legacy' | 'new';

type PillSize = 'small' | 'medium';

@Component({
  selector: 'app-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PillComponent {
  @Input() text: string;
  @Input() theme: PillTheme = 'green';
  @Input() interactive = false;
  @Input() variant: PillVariant = 'legacy';
  @Input() customContent = false;
  @Input() prefixIcon = false;
  @Input() badge: string | number = '';
  @Input() bigPadding = false;
  @Input() bold = false;
  @Input() verified = false;
  @Input() size: PillSize = 'medium';

  @Output() dismissed = new EventEmitter();

  elementRef: ElementRef;

  handleDismiss(): void {
    this.dismissed.emit();
  }
}
