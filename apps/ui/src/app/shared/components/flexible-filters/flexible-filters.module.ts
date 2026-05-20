import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexibleFiltersDirective } from './flexible-filters.directive';

@NgModule({
  declarations: [FlexibleFiltersDirective],
  imports: [CommonModule],
  exports: [FlexibleFiltersDirective],
})
export class FlexibleFiltersModule {}
