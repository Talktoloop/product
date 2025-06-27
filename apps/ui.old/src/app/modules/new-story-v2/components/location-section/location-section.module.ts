import { FormSectionModule } from '@admin/components/form-section/form-section.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutocompleteModule } from '@app/shared/components/autocomplete/autocomplete.module';
import { ButtonModule } from '@app/shared/components/button/button.module';
import { InfoLinkModule } from '@app/shared/components/info-link/info-link.module';
import { InputModule } from '@app/shared/components/input/input.module';
import { LocationModule } from '@app/shared/components/location/location.module';
import { CyModule } from '@app/shared/directives/cy/cy.module';
import { LockIconModule } from '@app/shared/icons/lock-icon/lock-icon.module';
import { TranslateModule } from '@ngx-translate/core';
import { CloseIconModule } from '@shared/icons/close-icon/close-icon.module';
import { LocationIconModule } from '@shared/icons/location-icon/location-icon.module';
import { LocationSectionComponent } from './location-section.component';

@NgModule({
  declarations: [LocationSectionComponent],
  imports: [
    CommonModule,
    TranslateModule,
    LockIconModule,
    InfoLinkModule,
    ButtonModule,
    InputModule,
    AutocompleteModule,
    FormsModule,
    LocationIconModule,
    CyModule,
    ReactiveFormsModule,
    FormSectionModule,
    CloseIconModule,
    LocationModule,
  ],
  exports: [LocationSectionComponent],
})
export class LocationSectionModule {}
