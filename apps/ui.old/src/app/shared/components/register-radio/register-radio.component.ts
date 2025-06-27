import { Component, ElementRef, forwardRef, HostBinding, Input, ViewChild } from '@angular/core';
import { RadioComponent } from '../radio/radio.component';

@Component({
  selector: 'app-register-radio',
  templateUrl: './register-radio.component.html',
  styleUrls: ['./register-radio.component.scss'],
  providers: [{ provide: RadioComponent, useExisting: forwardRef(() => RegisterRadioComponent) }],
})
export class RegisterRadioComponent extends RadioComponent {
  @Input() iconName: string;
  @ViewChild('radio') radio: ElementRef;
  @HostBinding('class.checked')
  get radioChecked(): boolean {
    return this.checked;
  }
}
