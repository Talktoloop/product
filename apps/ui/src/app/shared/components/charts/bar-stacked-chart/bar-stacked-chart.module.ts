import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { AnonymousDataComponent } from '../../../../modules/statistics/anonymous-data/anonymous-data.component';
import { BarStackedChartComponent } from './bar-stacked-chart.component';
import { BarStackedHorizontalChartComponent } from './horizontal/bar-stacked-horizontal-chart.component';

@NgModule({
  declarations: [BarStackedChartComponent, BarStackedHorizontalChartComponent, AnonymousDataComponent],
  imports: [CommonModule, NgxEchartsModule, TranslateModule],
  exports: [BarStackedChartComponent, BarStackedHorizontalChartComponent],
})
export class BarStackedChartModule {}
