import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SwitchModule } from '@shared/components/switch/switch.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { BarStackedMultiChartComponent } from './bar-stacked-multi-chart.component';
@NgModule({
  declarations: [BarStackedMultiChartComponent],
  imports: [CommonModule, NgxEchartsModule, TranslateModule, SwitchModule],
  exports: [BarStackedMultiChartComponent],
})
export class BarStackedMultiChartModule {}
