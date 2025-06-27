import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioComponent<T = any> {
  @Input() value: T;
  @Input() label: string;
  @Input() name: string;
  @Input() checked: boolean;
  @Input() disabled = false;
  @Output() changed = new EventEmitter<T>();
  @Output() clicked = new EventEmitter<T>();

  constructor(public cd: ChangeDetectorRef) {}

  handleValueChange(): void {
    this.changed.emit(this.value);
  }

  handleClick(event: Event): void {
    event.stopPropagation();
    this.clicked.emit(this.value);
  }
}
