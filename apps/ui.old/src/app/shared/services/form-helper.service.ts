import { Injectable } from '@angular/core';
import { AbstractControl, UntypedFormArray, UntypedFormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { DEFAULT_ERROR_MESSAGE, ERROR_TRANSLATION_KEYS } from '../consts/error-translation-keys';

@Injectable({ providedIn: 'root' })
export class FormHelperService {
  constructor(private translateService: TranslateService) {}

  getControlError(control: AbstractControl, customErrors?): Observable<string> | null {
    if (!control || !control.errors) {
      return of(null);
    }
    const [errorName, errorValue] = Object.entries(control.errors)[0];
    const typeOfErrorValue = typeof errorValue;
    // the message has been set directly in validator

    if (typeOfErrorValue === 'string') {
      return this.translateService.get(errorValue);
    }

    const customErrorKey = customErrors?.get(errorName);
    // the value contains parameters that can be used as translation params
    const errorTranslationKey = customErrorKey ? customErrorKey : ERROR_TRANSLATION_KEYS[errorName];
    if (errorTranslationKey && typeOfErrorValue === 'object') {
      return this.translateService.get(errorTranslationKey, errorValue);
    }

    if (errorTranslationKey) {
      return this.translateService.get(errorTranslationKey);
    }
    return this.translateService.get(DEFAULT_ERROR_MESSAGE);
  }

  getIsInvalid(control: AbstractControl): boolean {
    if (!control) {
      return false;
    }

    return control.dirty && control.invalid && control.touched;
  }

  /**
   * Stolen from https://github.com/ngneat/forms-manager/blob/master/projects/ngneat/forms-manager/src/lib/forms-manager.ts :D
   */
  markAllAsDirty(control: AbstractControl): void {
    control.markAsDirty();

    if (control instanceof UntypedFormGroup || control instanceof UntypedFormArray) {
      const controls: AbstractControl[] = Object.keys(control.controls).map((controlName) => control.controls[controlName]);

      controls.forEach((ctrl) => {
        ctrl.markAsDirty();
        ctrl.markAsTouched();

        if ((ctrl as UntypedFormGroup | UntypedFormArray).controls) {
          this.markAllAsDirty(ctrl);
        }
      });
    }
  }

  updateValueAndValidity(control: AbstractControl): void {
    control.updateValueAndValidity();

    if (control instanceof UntypedFormGroup || control instanceof UntypedFormArray) {
      const controls: AbstractControl[] = Object.keys(control.controls).map((controlName) => control.controls[controlName]);

      controls.forEach((ctrl) => {
        ctrl.updateValueAndValidity();

        if ((ctrl as UntypedFormGroup | UntypedFormArray).controls) {
          this.updateValueAndValidity(ctrl);
        }
      });
    }
  }
}
