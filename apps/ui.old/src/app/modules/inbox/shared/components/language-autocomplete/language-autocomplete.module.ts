import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutocompleteModule } from '@app/shared/components/autocomplete/autocomplete.module';
import { LanguageAutocompleteComponent } from './language-autocomplete.component';

@NgModule({
  declarations: [LanguageAutocompleteComponent],
  imports: [AutocompleteModule, CommonModule, FormsModule],
  exports: [LanguageAutocompleteComponent],
})
export class LanguageAutocompleteModule {}
