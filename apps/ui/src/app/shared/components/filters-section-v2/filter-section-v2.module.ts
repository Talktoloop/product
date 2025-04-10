import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';

import { TranslateModule } from '@ngx-translate/core';

import { AutocompleteFilterComponent } from '@shared/components/filters-section-v2/autocomplete-filter/autocomplete-filter.component';

import { LocationModule } from '@shared/components/location/location.module';

import { CountrySectionModule } from '@app/modules/new-story-v2/components/country-section/country-section.module';

import { DropdownDirectiveModule } from '../../directives/dropdown/dropdown-directive.module';

import { ArrowNextIconModule } from '../../icons/arrow-next-icon/arrow-next-icon.module';

import { CloseIconModule } from '../../icons/close-icon/close-icon.module';

import { ExpandMoreIconModule } from '../../icons/expand-more-icon/expand-more-icon.module';

import { FiltersHamburgerIconModule } from '../../icons/filters-hamburger-icon/filters-hamburger-icon.module';

import { RemoveBinIconModule } from '../../icons/remove-bin-icon/remove-bin-icon.module';

import { SharedModule } from '../../shared.module';

import { AutocompleteModule } from '../autocomplete/autocomplete.module';

import { ButtonModule } from '../button/button.module';

import { CheckboxWrapperModule } from '../checkbox-wrapper/checkbox-wrapper.module';

import { CheckboxModule } from '../checkbox/checkbox.module';

import { DualCalendarModule } from '../dual-calendar/dual-calendar.module';

import { FlexibleFiltersModule } from '../flexible-filters/flexible-filters.module';

import { InputModule } from '../input/input.module';

import { ListModule } from '../list/list.module';

import { ModalV2Module } from '../modal-v2/modal-v2.module';

import { OrganisationModule } from '../organisation/organisation.module';

import { PillsModule } from '../pills/pills.module';

import { CheckboxFilterWrapperGroupedModule } from './checkbox-filter-wrapper-grouped/checkbox-filter-wrapper-grouped.module';

import { CheckboxTabsFilterComponent } from './checkbox-tabs-filter/checkbox-tabs-filter.component';

import { CountryFilterModule } from './country-filter/country-filter.module';

import { DateWrapperFilterComponent } from './date-wrapper-filter/date-wrapper-filter.component';

import { FilterDropdownComponent } from './filter-dropdown/filter-dropdown.component';

import { FilterPillComponent } from './filter-pill/filter-pill.component';

import { FilterSectionV2Component } from './filter-section-v2.component';

import { FiltersModalComponent } from './filters-modal/filters-modal.component';

import { LanguageFilterModule } from './language-filter/language-filter.module';

import { LocationFilterModule } from './location-filter/location-filter.module';

import { LocationWrapperFilterComponent } from './location-wrapper-filter/location-wrapper-filter.component';

import { SearchIconModule } from '@app/shared/icons/search-icon/search-icon.module';
import { LengthFilterComponent } from '@shared/components/filters-section-v2/length-filter/length-filter.component';
import { RegionWrapperComponent } from '@shared/components/filters-section-v2/region-wrapper-filter/region-wrapper.component';
import { NewStoryModalsModule } from '@app/modules/new-story-v2/modals/new-story-modals.module';
import { CheckSquareModule } from '../check-square/check-square.module';
import { OrganisationFilterComponent } from './organisation-filter/organisation-filter.component';
import { CyModule } from "@shared/directives/cy/cy.module";
import { FiltersPresetComponent } from "@shared/components/filters-section-v2/filters-preset/filters-preset.component";
import { LoopDesignSystemModule } from "@shared/loop-design-system/loop-design-system.module";

@NgModule({
  declarations: [
    DateWrapperFilterComponent,
    CheckboxTabsFilterComponent,
    FilterDropdownComponent,
    FilterPillComponent,
    FilterSectionV2Component,
    FiltersModalComponent,
    LocationWrapperFilterComponent,
    OrganisationFilterComponent,
    AutocompleteFilterComponent,
    RegionWrapperComponent,
    DateWrapperFilterComponent,
    LengthFilterComponent,
    FiltersPresetComponent,
  ],
  imports: [
    ArrowNextIconModule,
    AutocompleteModule,
    ButtonModule,
    CheckboxFilterWrapperGroupedModule,
    CheckboxModule,
    CheckboxWrapperModule,
    SearchIconModule,
    CheckSquareModule,
    CloseIconModule,
    CommonModule,
    CountryFilterModule,
    CountrySectionModule,
    DropdownDirectiveModule,
    DualCalendarModule,
    ExpandMoreIconModule,
    ExpandMoreIconModule,
    FiltersHamburgerIconModule,
    FlexibleFiltersModule,
    FormsModule,
    InputModule,
    CheckSquareModule,
    LanguageFilterModule,
    ListModule,
    LocationFilterModule,
    MatTabsModule,
    ModalV2Module,
    OrganisationModule,
    PillsModule,
    ReactiveFormsModule,
    RemoveBinIconModule,
    SharedModule,
    TranslateModule,
    LocationModule,
    NewStoryModalsModule,
    CyModule,
    LoopDesignSystemModule,
  ],
  exports: [FilterSectionV2Component, FilterPillComponent],
})
export class FilterSectionV2Module {}
