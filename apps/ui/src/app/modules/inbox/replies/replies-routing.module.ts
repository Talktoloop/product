import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { INBOX_REPLY_ROUTES } from '@app/app-routing.props';
import { RepliesListComponent } from './replies-list/replies-list.component';

const routes: Routes = [
  {
    path: '',
    component: RepliesListComponent,
    data: { title: 'inboxReplies' },
    pathMatch: 'prefix',
  },
  {
    path: INBOX_REPLY_ROUTES.REPLY,
    loadChildren: () => import('./reply-details/reply-details.module').then((m: { ReplyDetailsModule }) => m.ReplyDetailsModule),
    pathMatch: 'prefix',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepliesRoutingModule {}
