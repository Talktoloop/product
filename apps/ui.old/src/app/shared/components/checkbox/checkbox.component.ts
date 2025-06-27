import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

export interface CheckboxEvent {
  checked: boolean;
  value: any;
}

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {
  private static Id = 1;
  @Input() checked: boolean;
  @Input() v2: boolean;
  @Input() value: any;
  @Input() compact = false;
  @Input() containerClass: string;
  @Input() disabled: boolean;
  @Input() alwaysRenderCheckmark: boolean;
  @Output() changed = new EventEmitter<CheckboxEvent>();
  id = CheckboxComponent.Id++;

  handleClick($event: Event): void {
    $event?.stopPropagation();
    if (this.disabled) {
      return;
    }
    this.changed.emit({ checked: !this.checked, value: this.value });
  }

  onElementClick(event: Event, inputReference: HTMLElement): void {
    event.preventDefault();
    event.stopImmediatePropagation();
    inputReference.click();
  }
}
