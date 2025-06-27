import { Directive, ElementRef, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { KeyCodes } from '../../utils/key-codes.enum';

@Directive({
  selector: '[appPhoneInput]',
})
export class PhoneInputDirective implements OnInit {
  constructor(private element: ElementRef, private ngControl: NgControl) {}

  readonly allowedSpecialKeys = [KeyCodes.SPACE, KeyCodes.BACKSPACE, KeyCodes.DELETE, KeyCodes.ARROW_LEFT, KeyCodes.ARROW_RIGHT];
  readonly allowedCharactersRegex = /[^0-9 ]/gm;

  ngOnInit(): void {
    const inputElement: HTMLInputElement = this.element.nativeElement;
    inputElement.onkeydown = (event: KeyboardEvent) => {
      if (this.allowedSpecialKeys.includes(event.code)) {
        return;
      }
      if (!Number.isInteger(Number(event.key)) && event.key !== 'Backspace') {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    inputElement.onchange = () => {
      inputElement.value = inputElement.value.replace(this.allowedCharactersRegex, '');
      this.ngControl.viewToModelUpdate(inputElement.value.replace(' ', ''));
    };
  }
}
