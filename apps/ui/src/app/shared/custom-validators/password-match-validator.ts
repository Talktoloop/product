import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(matchTo: string, reverse?: boolean): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.parent && reverse) {
      ((control.parent?.controls as any)[matchTo] as AbstractControl)?.updateValueAndValidity();
      return null;
    }
    return !!control.parent && !!control.parent.value && control.value === (control.parent?.controls as any)[matchTo].value
      ? null
      : { passwordMatching: true };
  };
}
