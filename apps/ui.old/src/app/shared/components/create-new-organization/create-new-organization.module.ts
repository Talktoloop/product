import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountrySectionModule } from '@app/modules/new-story-v2/components/country-section/country-section.module';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from '../button/button.module';
import { InputModule } from '../input/input.module';
import { OrganisationModule } from '../organisation/organisation.module';
import { SlideToggleModule } from '../slide-toggle/slide-toggle.module';
import { CreateNewOrganizationComponent } from './create-new-organization.component';

@NgModule({
  declarations: [CreateNewOrganizationComponent],
  imports: [
    CommonModule,
    InputModule,
    SlideToggleModule,
    TranslateModule,
    CountrySectionModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    OrganisationModule,
  ],
  exports: [CreateNewOrganizationComponent],
})
export class CreateNewOrganizationModule {}
