import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { STORY_ROUTES } from '@app/app-routing.props';
import { StoryDetailsComponent } from './story-details.component';

const routes: Routes = [
  {
    path: STORY_ROUTES.DETAILS,
    component: StoryDetailsComponent,
    data: { title: 'storyDetails' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoryDetailsRoutingModule {}
