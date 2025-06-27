import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TextGridModule } from '@app/shared/components/charts/text-grid/text-grid.module';
import { WaveTimelineChartModule } from '@app/shared/components/charts/wave-timeline-chart/wave-timeline-chart.module';
import { InfoLinkModule } from '@app/shared/components/info-link/info-link.module';
import { TooltipDirectiveModule } from '@app/shared/directives/tooltip/tooltip.directive.module';
import { TranslateModule } from '@ngx-translate/core';
import { FilterSectionV2Module } from '@shared/components/filters-section-v2/filter-section-v2.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { ButtonModule } from '../../../shared/components/button/button.module';
import { BarStackedByStepChartModule } from '../../../shared/components/charts/bar-stacked-by-step-chart/bar-stacked-by-step-chart.module';
import { BarStackedChartModule } from '../../../shared/components/charts/bar-stacked-chart/bar-stacked-chart.module';
import { TextBoxesModule } from '../../../shared/components/charts/text-boxes/text-boxes.module';
import { ModalV2Module } from '../../../shared/components/modal-v2/modal-v2.module';
import { AddIconModule } from '../../../shared/icons/add-icon/add-icon.module';
import { CloseIconModule } from '../../../shared/icons/close-icon/close-icon.module';
import { ExpandMoreIconModule } from '../../../shared/icons/expand-more-icon/expand-more-icon.module';
import { PdfIconModule } from '../../../shared/icons/pdf-icon/pdf-icon.module';
import { AccountabilityProcessComponent } from './accountability-process/accountability-process.component';
import { SeeProcessModalComponent } from './accountability-process/see-process/see-process-modal.component';
import { SliderComponent } from './accountability-process/slider/slider.component';
import { SensitiveCasesRoutingModule } from './sensitive-cases-routing.module';
import { SensitiveCasesComponent } from './sensitive-cases.component';

@NgModule({
  declarations: [SensitiveCasesComponent, AccountabilityProcessComponent, SliderComponent, SeeProcessModalComponent],
  imports: [
    AddIconModule,
    BarStackedByStepChartModule,
    BarStackedChartModule,
    ButtonModule,
    ButtonModule,
    CloseIconModule,
    CommonModule,
    ExpandMoreIconModule,
    InfoLinkModule,
    ModalV2Module,
    NgxEchartsModule,
    PdfIconModule,
    SensitiveCasesRoutingModule,
    TextBoxesModule,
    TextGridModule,
    TooltipDirectiveModule,
    TranslateModule,
    WaveTimelineChartModule,
    FilterSectionV2Module,
  ],
  exports: [SensitiveCasesComponent],
})
export class SensitiveCasesModule {}
