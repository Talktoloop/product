import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutocompleteModule } from '@app/shared/components/autocomplete/autocomplete.module';
import { ButtonModule } from '@app/shared/components/button/button.module';
import { InputModule } from '@app/shared/components/input/input.module';
import { CyModule } from '@app/shared/directives/cy/cy.module';
import { CloseIconModule } from '@app/shared/icons/close-icon/close-icon.module';
import { EditPencilIconModule } from '@app/shared/icons/edit-pencil-icon/edit-pencil-icon.module';
import { SharedModule } from '@app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { InfoLinkModule } from '@shared/components/info-link/info-link.module';
import { CountrySectionComponent } from './country-section.component';

@NgModule({
  declarations: [CountrySectionComponent],
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    InfoLinkModule,
    ButtonModule,
    InputModule,
    AutocompleteModule,
    FormsModule,
    EditPencilIconModule,
    CloseIconModule,
    ReactiveFormsModule,
    CyModule,
  ],
  exports: [CountrySectionComponent],
})
export class CountrySectionModule {}
