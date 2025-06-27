import { Component, Input } from '@angular/core';
import { CheckboxComponent } from '@app/shared/components/checkbox/checkbox.component';

@Component({
  selector: 'loop-checkbox-icon-square',
  templateUrl: './checkbox-icon-square.component.html',
  styleUrls: ['./checkbox-icon-square.component.scss'],
})
export class CheckboxIconSquareComponent extends CheckboxComponent {
  @Input() label: string;

  handleClick($event): void {
    this.checked = !this.checked;
    $event?.stopPropagation();
    if (this.disabled) {
      return;
    }
    this.changed.emit({ checked: this.checked, value: this.value });
  }
}
