import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { BarGrouppedChartComponent } from './bar-groupped-chart.component';

@NgModule({
  declarations: [BarGrouppedChartComponent],
  imports: [CommonModule, NgxEchartsModule, TranslateModule],
  exports: [BarGrouppedChartComponent],
})
export class BarGrouppedChartModule {}
