import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { INBOX_STORY_ROUTES } from '@app/app-routing.props';
import { StoryDetailsRoutesResolver } from '../story-details-routes.resolver';
import { StoryDetailsResolver } from '../story-details.resolver';
import { StoryDetailsComponent } from './story-details/story-details.component';
import { StoryReviewComponent } from './story-review/story-review.component';

const routes: Routes = [
  {
    path: '',
    component: StoryDetailsComponent,
    resolve: { steps: StoryDetailsRoutesResolver },
    children: [
      {
        path: INBOX_STORY_ROUTES.STORY_REVIEW,
        component: StoryReviewComponent,
        data: { title: 'reviewStory' },
        resolve: { data: StoryDetailsResolver },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [StoryDetailsResolver, StoryDetailsRoutesResolver],
})
export class StoriesDetailsRoutingModule {}
