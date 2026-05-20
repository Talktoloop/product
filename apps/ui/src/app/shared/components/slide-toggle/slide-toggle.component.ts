import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlideToggleComponent {
  private static Id = 1;
  disableIconColor = '#9d9d9d';
  @Input() checked = false;
  @Input() disableColor = '#B6B6B6';
  @Input() disabled = false;
  @Input() enableColor = '#228B22';
  @Input() text: string;
  @Input() inverted: boolean;
  @Input() wide: boolean;
  @Output() changed$ = new EventEmitter<boolean>();

  id = SlideToggleComponent.Id++ + '-slide-toggle';

  handleClick($event: Event): void {
    $event?.stopPropagation();
    if (this.disabled) {
      return;
    }
    this.changed$.emit(!this.checked);
  }
}
