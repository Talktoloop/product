import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => TextareaComponent),
    },
  ],
})
export class TextareaComponent implements ControlValueAccessor {
  value = '';
  @Input() disabled: boolean;
  @Input() placeholder = '';
  @Input() maxlength = 512;
  @Input() noResize = false;
  @Output() valueChanged = new EventEmitter<string>();
  private onChange: (text: string) => void;
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

  writeValue(text: string): void {
    this.value = text;
    this.onChange?.(text);
    this.valueChanged.emit(text);
  }

  handleFocus(): void {
    this.onTouch?.();
  }
}
