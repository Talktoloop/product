import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MobileTableModule } from '@app/shared/components/mobile-table/mobile-table.module';
import { PillsModule } from '@app/shared/components/pills/pills.module';
import { SortModule } from '@app/shared/components/sort/sort.module';
import { TranslateModule } from '@ngx-translate/core';
import { InboxOutboxStylerModule } from '@shared/components/inbox-outbox-styler/inbox-outbox-styler.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  imports: [
    InboxOutboxStylerModule,
    CommonModule,
    FormsModule,
    InfiniteScrollModule,
    MatTableModule,
    MobileTableModule,
    PillsModule,
    SortModule,
    TranslateModule,
  ],
  exports: [
    InboxOutboxStylerModule,
    CommonModule,
    FormsModule,
    InfiniteScrollModule,
    MatTableModule,
    MobileTableModule,
    PillsModule,
    SortModule,
    TranslateModule,
  ],
})
export class SharedOutboxModule {}
