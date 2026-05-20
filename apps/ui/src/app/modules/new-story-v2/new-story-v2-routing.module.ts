import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareYourExperienceWrapperComponent } from '@app/modules/new-story-v2/components/share-your-experience-wrapper/share-your-experience-wrapper.component';
import { NewStoryV2Component } from './new-story-v2.component';
const routes: Routes = [
  {
    path: '',
    component: NewStoryV2Component,
    data: { title: 'newStory' },
    children: [
      {
        component: ShareYourExperienceWrapperComponent,
        path: 'info-modal',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewStoryV2RoutingModule {}
