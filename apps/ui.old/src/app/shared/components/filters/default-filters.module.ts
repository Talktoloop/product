import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DefaultFiltersModalComponent } from './default-filters-modal.component';

@NgModule({
  declarations: [DefaultFiltersModalComponent],
  exports: [DefaultFiltersModalComponent],
  imports: [CommonModule],
})
export class DefaultFiltersModule {}
