import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CloseIconModule } from '@app/shared/icons/close-icon/close-icon.module';
import { DoneIconModule } from '@app/shared/icons/done-icon/done-icon.module';
import { SlideToggleComponent } from './slide-toggle.component';

@NgModule({
  declarations: [SlideToggleComponent],
  exports: [SlideToggleComponent],
  imports: [CommonModule, CloseIconModule, DoneIconModule],
})
export class SlideToggleModule {}
