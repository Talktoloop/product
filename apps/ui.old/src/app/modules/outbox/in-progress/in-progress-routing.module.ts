import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InProgressListComponent } from './in-progress-list/in-progress-list.component';

const routes: Routes = [
  {
    path: '',
    component: InProgressListComponent,
    data: { title: 'outboxInProgress' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InProgressRoutingModule {}
