import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { INBOX_STORY_ROUTES } from '@app/app-routing.props';
import { StoriesListComponent } from './stories-list/stories-list.component';

const routes: Routes = [
  {
    path: '',
    component: StoriesListComponent,
    data: { title: 'inboxStories' },
  },
  {
    path: INBOX_STORY_ROUTES.STORY,
    loadChildren: () => import('./story-details/stories-details.module').then((m) => m.StoriesDetailsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoriesRoutingModule {}
