import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, UntypedFormControl, ValidationErrors, Validator } from '@angular/forms';

export const EMAIL_PATTERN =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Directive({
  selector: '[appAdvancedEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AdvancedEmailValidator),
      multi: true,
    },
  ],
})
export class AdvancedEmailValidator implements Validator {
  static validateEmail(control: UntypedFormControl): ValidationErrors | null {
    const regex = new RegExp(EMAIL_PATTERN);

    if (control?.value?.match(regex)) {
      return null;
    }

    // This conditions prevent setting error if control is empty or value was removed
    if (control?.value === null || control?.value === '') {
      return null;
    }

    return {
      validEmail: false,
    };
  }

  validate(control: UntypedFormControl): ValidationErrors | null {
    return AdvancedEmailValidator.validateEmail(control);
  }
}
