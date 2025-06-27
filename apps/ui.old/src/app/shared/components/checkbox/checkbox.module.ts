import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CheckSquareModule } from '../check-square/check-square.module';
import { CheckboxComponent } from './checkbox.component';

@NgModule({
  declarations: [CheckboxComponent],
  imports: [CommonModule, CheckSquareModule],
  exports: [CheckboxComponent],
})
export class CheckboxModule {}
