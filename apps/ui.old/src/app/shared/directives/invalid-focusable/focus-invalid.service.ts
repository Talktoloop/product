import { Platform } from '@angular/cdk/platform';
import { Injectable } from '@angular/core';
import { INVALID_FOCUSABLE_CLASS_NAME } from './constants';

@Injectable({
  providedIn: 'root',
})
export class FocusInvalidService {
  constructor(private platform: Platform) {}

  focusFirstInvalidFocusableElement(): void {
    const element: HTMLElement = document.getElementsByClassName(INVALID_FOCUSABLE_CLASS_NAME)[0] as HTMLElement;
    element?.focus();
    // focusing input on firefox and safari does not move it to center of viewport we have to do it manually.
    if (this.platform.FIREFOX || this.platform.SAFARI) {
      element?.scrollIntoView({ block: 'center' });
    }
  }
}
