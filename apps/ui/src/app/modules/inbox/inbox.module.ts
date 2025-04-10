import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SubnavigationBarModule } from '@app/shared/components/subnavigation-bar/subnavigation-bar.module';
import { CountryPipe } from '@app/shared/pipes/country.pipe';
import { SharedModule } from '@app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { FilterSectionV2Module } from '@shared/components/filters-section-v2/filter-section-v2.module';
import { InboxFiltersService } from './inbox-filters.service';
import { InboxRoutingModule } from './inbox-routing.module';
import { InboxComponent } from './inbox.component';
import { SharedInboxModule } from './shared/shared.module';

@NgModule({
  declarations: [InboxComponent],
  imports: [
    CommonModule,
    SubnavigationBarModule,
    TranslateModule,
    SharedInboxModule,
    SharedModule,
    InboxRoutingModule,
    FilterSectionV2Module,
  ],
  providers: [InboxFiltersService, CountryPipe],
})
export class InboxModule {}
