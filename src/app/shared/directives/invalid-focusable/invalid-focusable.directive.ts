import { Directive, ElementRef, Input } from '@angular/core';
import { INVALID_FOCUSABLE_CLASS_NAME } from '@shared/directives/invalid-focusable/constants';

@Directive({
  selector: '[appInvalidFocusable]',
})
export class InvalidFocusableDirective {
  @Input('appInvalidFocusable') set isInvalid(value: boolean) {
    if (!this.elementRef) {
      return;
    }
    const htmlElement = this.elementRef.nativeElement as HTMLElement;
    if (value) {
      htmlElement.classList.add(INVALID_FOCUSABLE_CLASS_NAME);
    } else {
      htmlElement.classList.remove(INVALID_FOCUSABLE_CLASS_NAME);
    }
  }

  constructor(private elementRef: ElementRef) {}
}
