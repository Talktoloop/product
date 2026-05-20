import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArchiveRoutingModule } from '@app/modules/outbox/archive/archive-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { ArchiveListComponent } from './archive-list/archive-list.component';

@NgModule({
  declarations: [ArchiveListComponent],
  imports: [CommonModule, SharedModule, ArchiveRoutingModule],
})
export class ArchiveModule {}
