import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

export interface ISwitchOption {
  code: string;
  text: string;
}
@Component({
  selector: 'loop-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchComponent {
  @Input() options: Array<ISwitchOption>;
  @Input() selected: ISwitchOption['code'];
  @Output() clicked = new EventEmitter();

  switchClicked($event?: Event): void {
    $event?.preventDefault();
    this.clicked.emit();
  }
}
