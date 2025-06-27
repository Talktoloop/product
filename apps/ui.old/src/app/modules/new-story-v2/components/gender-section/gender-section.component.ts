import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { GENDER_MAPPING, GENDER_VALUE } from '@shared/types/gender.type';

@Component({
  selector: 'loop-gender-section',
  templateUrl: './gender-section.component.html',
  styleUrls: ['./gender-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenderSectionComponent {
  @Input() form: UntypedFormGroup;

  gendersAvailable = Object.values(GENDER_VALUE);
  genderMapping = GENDER_MAPPING;
}
