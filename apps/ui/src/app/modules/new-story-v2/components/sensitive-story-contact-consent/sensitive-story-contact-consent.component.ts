import { Component, Input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-sensitive-story-contact-consent',
  templateUrl: './sensitive-story-contact-consent.component.html',
  styleUrls: ['./sensitive-story-contact-consent.component.scss']
})
export class SensitiveStoryContactConsentComponent {
  @Input() form: UntypedFormGroup;
}
