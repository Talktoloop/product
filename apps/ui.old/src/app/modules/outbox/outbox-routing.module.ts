import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OUTBOX_ROUTES } from '@app/app-routing.props';
import { OutboxComponent } from './outbox.component';

const routes: Routes = [
  {
    path: '',
    component: OutboxComponent,
    data: { title: 'outbox' },
    children: [
      {
        path: '',
        redirectTo: OUTBOX_ROUTES.PENDING_RECORDING,
        pathMatch: 'full',
      },
      {
        path: OUTBOX_ROUTES.PENDING_RECORDING,
        loadChildren: () => import('./pending-recording/pending-recording.module').then((m) => m.PendingRecordingModule),
      },

      {
        path: OUTBOX_ROUTES.IN_PROGRESS,
        loadChildren: () => import('./in-progress/in-progress.module').then((m) => m.InProgressModule),
      },
      {
        path: OUTBOX_ROUTES.Archive,
        loadChildren: () => import('./archive/archive.module').then((m) => m.ArchiveModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutboxRoutingModule {}
