import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { AutocompleteModule } from '../../autocomplete/autocomplete.module';
import { CountryFilterComponent } from './country-filter.component';

@NgModule({
  declarations: [CountryFilterComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslateModule, AutocompleteModule, SharedModule],
  exports: [CountryFilterComponent],
})
export class CountryFilterModule {}
