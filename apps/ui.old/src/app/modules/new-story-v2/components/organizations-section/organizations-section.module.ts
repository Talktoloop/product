import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PillsModule } from '@app/shared/components/pills/pills.module';
import { TranslateModule } from '@ngx-translate/core';
import { AutocompleteModule } from '@shared/components/autocomplete/autocomplete.module';
import { ButtonModule } from '@shared/components/button/button.module';
import { InfoLinkModule } from '@shared/components/info-link/info-link.module';
import { InputModule } from '@shared/components/input/input.module';
import { OrganisationModule } from '@shared/components/organisation/organisation.module';
import { SelectOptionModule } from '@shared/components/selectors/select-option/select-option.module';
import { SelectModule } from '@shared/components/selectors/select/select.module';
import { DropdownDirectiveModule } from '@shared/directives/dropdown/dropdown-directive.module';
import { AddIconModule } from '@shared/icons/add-icon/add-icon.module';
import { ArrowDropUpIconModule } from '@shared/icons/arrow-drop-up-icon/arrow-drop-up-icon.module';
import { ExpandMoreIconModule } from '@shared/icons/expand-more-icon/expand-more-icon.module';
import { NewLineIconModule } from '@shared/icons/new-line-icon/new-line-icon.module';
import { SearchIconModule } from '@shared/icons/search-icon/search-icon.module';
import { SharedModule } from '@shared/shared.module';
import { OrganizationsSectionComponent } from './organizations-section.component';

@NgModule({
  declarations: [OrganizationsSectionComponent],
  imports: [
    AddIconModule,
    ArrowDropUpIconModule,
    AutocompleteModule,
    ButtonModule,
    CommonModule,
    DropdownDirectiveModule,
    ExpandMoreIconModule,
    FormsModule,
    InfoLinkModule,
    InputModule,
    NewLineIconModule,
    OrganisationModule,
    PillsModule,
    ReactiveFormsModule,
    SearchIconModule,
    SelectModule,
    SelectOptionModule,
    SharedModule,
    TranslateModule,
  ],
  exports: [OrganizationsSectionComponent],
})
export class OrganizationsSectionModule {}
