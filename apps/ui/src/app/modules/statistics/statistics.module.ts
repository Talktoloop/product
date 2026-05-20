import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StatisticsCountService } from '@app/modules/statistics/statistics-count.service';
import { TranslateModule } from '@ngx-translate/core';
import { SubnavigationBarModule } from '@shared/components/subnavigation-bar/subnavigation-bar.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsComponent } from './statistics.component';
import { FilterSectionV2Module } from '@app/shared/components/filters-section-v2/filter-section-v2.module';

@NgModule({
  declarations: [StatisticsComponent],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    RouterModule,
    TranslateModule,
    FilterSectionV2Module,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    SubnavigationBarModule,
  ],
  providers: [DatePipe, StatisticsCountService],
})
export class StatisticsModule {}
