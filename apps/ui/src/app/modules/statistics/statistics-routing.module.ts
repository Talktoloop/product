import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { STATISTICS_ROUTES } from '@app/app-routing.props';
import { StatisticsComponent } from './statistics.component';

const routes: Routes = [
  {
    path: '',
    component: StatisticsComponent,
    data: { title: 'statistics' },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: STATISTICS_ROUTES.OPEN_STORIES,
      },
      {
        path: STATISTICS_ROUTES.OPEN_STORIES,
        loadChildren: () => import('./open-stories/open-stories.module').then((m) => m.OpenStoriesModule),
      },
      {
        path: STATISTICS_ROUTES.SENSITIVE_CASES,
        loadChildren: () => import('./sensitive-cases/sensitive-cases.module').then((m) => m.SensitiveCasesModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatisticsRoutingModule {}
