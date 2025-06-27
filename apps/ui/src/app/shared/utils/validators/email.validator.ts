import { FormControl, ValidationErrors } from '@angular/forms';

export class EmailValidator {
  static optional(control: FormControl): ValidationErrors {
    const valid = !control.value || /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(control.value);
    return !valid ? { invalid: { value: control.value } } : null;
  }
}
