import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-check-square',
  templateUrl: './check-square.component.html',
  styleUrls: ['./check-square.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckSquareComponent {
  @Input() checked: boolean;
  @Input() disabled: boolean;
  @Input() v2: boolean;
  @Input() semiChecked: boolean;
  @Input() tabIndex = -1;
  @Input() compact = false;
  @Input() alwaysRenderCheckmark: boolean;
  @Output() clicked = new EventEmitter<Event>();

  handleClick(event: Event): void {
    this.clicked.emit(event);
  }
}
