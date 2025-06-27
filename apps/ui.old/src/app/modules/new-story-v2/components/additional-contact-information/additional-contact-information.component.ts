import { Component, Input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-additional-contact-information',
  templateUrl: './additional-contact-information.component.html',
  styleUrls: ['./additional-contact-information.component.scss'],
})
export class AdditionalContactInformationComponent {
  @Input() form: UntypedFormGroup;
}
