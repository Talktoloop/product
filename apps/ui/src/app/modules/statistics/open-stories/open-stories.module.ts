import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BarGrouppedChartModule } from '@app/shared/components/charts/bar-groupped-chart/bar-groupped-chart.module';
import { BarStackedChartModule } from '@app/shared/components/charts/bar-stacked-chart/bar-stacked-chart.module';
import { BarStackedMultiChartModule } from '@app/shared/components/charts/bar-stacked-multi-chart/bar-stacked-multi-chart.module';
import { TextBoxesModule } from '@app/shared/components/charts/text-boxes/text-boxes.module';
import { TextGridModule } from '@app/shared/components/charts/text-grid/text-grid.module';
import { WaveTimelineChartModule } from '@app/shared/components/charts/wave-timeline-chart/wave-timeline-chart.module';
import { DownloadButtonModule } from '@app/shared/components/download-button/download-button.module';
import { InfoLinkModule } from '@app/shared/components/info-link/info-link.module';
import { TranslateModule } from '@ngx-translate/core';
import { FilterSectionV2Module } from '@shared/components/filters-section-v2/filter-section-v2.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { TooltipDirectiveModule } from '../../../shared/directives/tooltip/tooltip.directive.module';
import { OpenStoriesRoutingModule } from './open-stories-routing.module';
import { OpenStoriesComponent } from './open-stories.component';

@NgModule({
  declarations: [OpenStoriesComponent],
  imports: [
    CommonModule,
    OpenStoriesRoutingModule,
    NgxEchartsModule,
    TranslateModule,
    InfoLinkModule,
    TextGridModule,
    WaveTimelineChartModule,
    BarGrouppedChartModule,
    TextBoxesModule,
    BarStackedChartModule,
    BarStackedMultiChartModule,
    TooltipDirectiveModule,
    FilterSectionV2Module,
    DownloadButtonModule,
  ],
})
export class OpenStoriesModule {}
