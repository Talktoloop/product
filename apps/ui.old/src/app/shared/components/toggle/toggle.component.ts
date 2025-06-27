import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => ToggleComponent),
    },
  ],
})
export class ToggleComponent implements ControlValueAccessor {
  checked = false;
  @Input() disabled = false;
  @Input() label: string;

  private onChange: (checked: boolean) => void;
  private onTouch: () => void;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(checked: boolean): void {
    this.checked = checked;
    this.onChange?.(this.checked);
  }

  handleFocus(): void {
    this.onTouch?.();
  }

  toggleCheckbox(): void {
    this.writeValue(!this.checked);
  }
}
