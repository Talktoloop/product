import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { INBOX_ROUTES } from '@app/app-routing.props';
import { InboxComponent } from './inbox.component';

const routes: Routes = [
  {
    path: '',
    component: InboxComponent,
    data: { title: 'inbox' },
    children: [
      {
        path: '',
        redirectTo: INBOX_ROUTES.STORIES,
        pathMatch: 'full',
      },
      {
        path: INBOX_ROUTES.STORIES,
        loadChildren: () => import('./stories/stories.module').then((m) => m.StoriesModule),
      },
      {
        path: INBOX_ROUTES.REPLIES,
        loadChildren: () => import('./replies/replies.module').then((m) => m.RepliesModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InboxRoutingModule {}
