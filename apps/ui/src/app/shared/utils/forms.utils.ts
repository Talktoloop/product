import { AbstractControl, UntypedFormArray, UntypedFormGroup } from '@angular/forms';
import { checkIfHasValue } from '@shared/utils/object.utils';

export const anyControlHasValue = (form: AbstractControl): boolean => {
  if (form instanceof UntypedFormGroup) {
    return Object.keys(form.controls)?.some((key) => anyControlHasValue(form.get(key)));
  } else if (form instanceof UntypedFormArray) {
    return form.controls.some((arrayControl) => anyControlHasValue(arrayControl));
  } else {
    return checkIfHasValue(form.value);
  }
};

export const removeMultipleWhitespaces = (value: string) => value.trim().replace(/  +/g, ' ');
