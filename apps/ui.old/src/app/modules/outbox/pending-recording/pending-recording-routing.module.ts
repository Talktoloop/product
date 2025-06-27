import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OUTBOX_PENDING_RECORD_ROUTES } from '@app/app-routing.props';
import { PendingRecordingListComponent } from './pending-recording-list/pending-recording-list.component';

const routes: Routes = [
  {
    path: '',
    component: PendingRecordingListComponent,
    data: { title: 'outboxPendingRecording' },
  },
  {
    path: OUTBOX_PENDING_RECORD_ROUTES.RECORD,
    loadChildren: () => import('./pending-record-details/pending-record-details.module').then((m) => m.PendingRecordDetailsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingRecordingRoutingModule {}
