import { Injector, Optional, Self } from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  ControlValueAccessor,
  FormControlDirective,
  FormControlName,
  NgControl,
  NgModel,
} from '@angular/forms';
import { BaseComponent } from '@shared/components/base.component';

export abstract class ControlValueAccessorBase<T> extends BaseComponent implements ControlValueAccessor {
  value: T;
  disabled: boolean;
  private controlContainer: ControlContainer;

  protected onChange: (value: T) => void;
  protected onTouch: () => void;

  get control(): AbstractControl {
    if (this.ngControl instanceof NgModel) {
      return this.ngControl.control;
    }
    if (this.ngControl instanceof FormControlDirective) {
      return this.ngControl.form;
    }
    if (this.ngControl instanceof FormControlName) {
      if (!this.controlContainer) {
        this.controlContainer = this.injector.get(ControlContainer);
      }
      return this.controlContainer.control?.get(this.ngControl.name as string);
    }
  }

  protected constructor(@Optional() @Self() protected ngControl: NgControl, protected injector: Injector) {
    super();
    if (ngControl != null) {
      ngControl.valueAccessor = this;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: T): void {
    this.value = obj;
  }
}
