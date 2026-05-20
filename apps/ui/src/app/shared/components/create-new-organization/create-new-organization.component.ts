import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { OrganisationService } from '@app/core/services/api/organisation/organisation.service';
import { CountriesService } from '@app/shared/services/countries.service';
import { take } from 'rxjs';

export interface CreateOrganizationEvent {
  id: string;
  name: string;
  acronym: string;
  countryCode: string;
}

@Component({
  selector: 'app-create-new-organization',
  templateUrl: './create-new-organization.component.html',
  styleUrls: ['./create-new-organization.component.scss'],
})
export class CreateNewOrganizationComponent {
  @Input() isModal: boolean;
  @Output() organizationAdded = new EventEmitter<CreateOrganizationEvent>();
  @Output() canceled = new EventEmitter();
  hasAcronym: boolean;
  organizationNameControl = new UntypedFormControl('', Validators.required);
  organizationAcronymControl = new UntypedFormControl('', Validators.minLength(2));
  countryControl = new UntypedFormControl(null, Validators.required);

  @Input() set organizationName(value) {
    this.organizationNameControl.setValue(value);
  }

  constructor(private organisationService: OrganisationService, private countriesService: CountriesService) {}

  onHasAcronymChanged(hasAcronym) {
    this.hasAcronym = hasAcronym;
  }

  onCancel() {
    this.canceled.emit();
  }

  createNewOrganization() {
    if (this.organizationNameControl.invalid) {
      this.organizationNameControl.markAsTouched();
      this.organizationNameControl.markAsDirty();
      this.organizationNameControl.setValue(this.organizationNameControl.value);
    }

    if (this.countryControl.invalid) {
      this.countryControl.markAsTouched();
      this.countryControl.markAsDirty();
      this.countryControl.setValue(this.countryControl.value);
    }

    if (this.organizationAcronymControl.invalid) {
      this.organizationAcronymControl.markAsTouched();
      this.organizationAcronymControl.markAsDirty();
      this.organizationAcronymControl.setValue(this.organizationAcronymControl.value);
    }

    if (this.countryControl.invalid || this.organizationNameControl.invalid || this.organizationAcronymControl.invalid) {
      return;
    }

    this.countriesService
      .getCountries(false)
      .pipe(take(1))
      .subscribe((countries) => {
        const name = this.organizationNameControl.value;
        const acronym = this.organizationAcronymControl.value;
        const currentCountry = countries.find((country) => country.code === this.countryControl.value);
        this.organisationService.createOrganisation(name, currentCountry.id, this.organizationAcronymControl.value).subscribe({
          next: (response) => {
            this.organizationAdded.emit({ id: response.id, name, acronym, countryCode: currentCountry.code });
          },
        });
      });
  }
}
