import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SubnavigationBarModule } from '@app/shared/components/subnavigation-bar/subnavigation-bar.module';
import { CountryPipe } from '@app/shared/pipes/country.pipe';
import { SharedModule } from '@app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { OutboxFiltersService } from './outbox-filters.service';
import { OutboxRoutingModule } from './outbox-routing.module';
import { OutboxComponent } from './outbox.component';
import { SharedOutboxModule } from './shared/shared.module';

@NgModule({
  declarations: [OutboxComponent],
  imports: [CommonModule, SharedOutboxModule, SubnavigationBarModule, TranslateModule, SharedModule, OutboxRoutingModule],
  providers: [OutboxFiltersService, CountryPipe],
})
export class OutboxModule {}
