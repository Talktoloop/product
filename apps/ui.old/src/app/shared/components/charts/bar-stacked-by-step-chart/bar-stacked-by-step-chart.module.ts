import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TooltipDirectiveModule } from '@app/shared/directives/tooltip/tooltip.directive.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { BarStackedByStepChartComponent } from './bar-stacked-by-step-chart.component';

@NgModule({
  declarations: [BarStackedByStepChartComponent],
  imports: [CommonModule, NgxEchartsModule, TooltipDirectiveModule, TranslateModule],
  exports: [BarStackedByStepChartComponent],
})
export class BarStackedByStepChartModule {}
