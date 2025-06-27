import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'loop-stepper-navigation',
  templateUrl: './stepper-navigation.component.html',
  styleUrls: ['./stepper-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperNavigationComponent {
  @Input() nextVisible = true;
  @Input() prevVisible = true;
  @Input() nextEnabled = true;
  @Input() prevEnabled = true;
  @Output() nextClicked = new EventEmitter<void>();
  @Output() prevClicked = new EventEmitter<void>();
}
