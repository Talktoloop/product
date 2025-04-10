import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AutocompleteModule } from '../../autocomplete/autocomplete.module';
import { LocationFilterComponent } from './location-filter.component';

@NgModule({
  declarations: [LocationFilterComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslateModule, AutocompleteModule],
  exports: [LocationFilterComponent],
})
export class LocationFilterModule {}
