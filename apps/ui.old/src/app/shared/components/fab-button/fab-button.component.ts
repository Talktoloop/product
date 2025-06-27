import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { widthAnimation } from '@shared/animations/width.animation';
type FabButtonSize = 'small' | 'medium' | 'big';
type FabButtonTheme = 'primary' | 'secondary' | 'moderator-fab';
type FabButtonMode = 'v1' | 'v2';

@Component({
  selector: 'app-fab-button',
  templateUrl: './fab-button.component.html',
  styleUrls: ['./fab-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [widthAnimation],
})
export class FabButtonComponent {
  @Input() size: FabButtonSize = 'medium';
  @Input() theme: FabButtonTheme = 'primary';
  @Input() mode: FabButtonMode = 'v1';
  @Input() title: string;
  @Input() defaultIcon = true;
  @Input() text: string;
  @Input() textClass: Array<string>;
  @Input() padded = false;
  @Input() animated = false;
  @Input() rotate = 0;
  @Output() clicked = new EventEmitter<Event>();

  handleClick(event: Event): void {
    this.clicked.emit(event);
  }
}
