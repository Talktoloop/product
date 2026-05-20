import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { WaveTimelineChartComponent } from './wave-timeline-chart.component';

@NgModule({
  declarations: [WaveTimelineChartComponent],
  imports: [CommonModule, NgxEchartsModule, TranslateModule],
  exports: [WaveTimelineChartComponent],
})
export class WaveTimelineChartModule {}
