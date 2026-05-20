import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenStoriesComponent } from './open-stories.component';

const routes: Routes = [{ path: '', component: OpenStoriesComponent, data: { title: 'openStories' } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenStoriesRoutingModule {}
