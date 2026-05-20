import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DoneIconComponent } from './done-icon.component';

@NgModule({
  declarations: [DoneIconComponent],
  exports: [DoneIconComponent],
  imports: [CommonModule],
})
export class DoneIconModule {}
