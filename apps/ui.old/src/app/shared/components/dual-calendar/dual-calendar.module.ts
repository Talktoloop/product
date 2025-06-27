import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TranslateModule } from '@ngx-translate/core';
import { ExpandMoreIconModule } from './../../icons/expand-more-icon/expand-more-icon.module';
import { DualCalendarComponent } from './dual-calendar.component';

@NgModule({
  declarations: [DualCalendarComponent],
  imports: [CommonModule, TranslateModule, MatDatepickerModule, ExpandMoreIconModule, MatNativeDateModule],
  exports: [DualCalendarComponent],
})
export class DualCalendarModule {}
