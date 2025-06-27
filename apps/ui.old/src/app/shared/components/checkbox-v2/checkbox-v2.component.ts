import { Component, Injector, Input } from '@angular/core';
import { AbstractControl, NgControl } from '@angular/forms';
import { FormHelperService } from '@shared/services/form-helper.service';
import { ControlValueAccessorBase } from '@shared/utils/control-value-accessor-base';

type CheckboxTheme = 'primary' | 'secondary';

@Component({
  selector: 'loop-checkbox',
  templateUrl: './checkbox-v2.component.html',
  styleUrls: ['./checkbox-v2.component.scss'],
})
export class CheckboxV2Component extends ControlValueAccessorBase<boolean> {
  @Input() formControl?: AbstractControl;
  @Input() formControlName?: string;
  @Input() id: string;
  @Input() checkboxValue: string;
  @Input() label: string;
  @Input() colorTheme: CheckboxTheme = 'primary';
  @Input() requiredErrorText: string;
  @Input() readonly = false;

  get isInvalid(): boolean {
    return this.formHelper.getIsInvalid(this.control);
  }

  constructor(private formHelper: FormHelperService, protected ngControl: NgControl, protected injector: Injector) {
    super(ngControl, injector);
  }

  handleCheckboxClick(): void {
    this.writeValue(!this.value);
    this.onChange(this.value);
    this.onTouch?.();
  }

  handleCheckboxBlur(): void {
    this.onTouch?.();
  }
}
