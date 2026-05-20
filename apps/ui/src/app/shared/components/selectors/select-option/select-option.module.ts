import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SelectOptionComponent } from './select-option.component';

@NgModule({
  declarations: [SelectOptionComponent],
  exports: [SelectOptionComponent],
  imports: [CommonModule],
})
export class SelectOptionModule {}
