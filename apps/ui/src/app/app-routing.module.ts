import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevComponentsComponent } from '@app/modules/dev-components/dev-components.component';
import { InboxGuard } from '@core/services/guards/auth/inbox.guard';
import { MetaDataGuard } from '@core/services/guards/meta-data/meta-data.guard';
import { UserDataGuard } from '@core/services/guards/user-data/user-data.guard';
import { NotFoundComponent } from '@shared/components/not-found/not-found.component';
import { AUTH_ROUTES, MAIN_ROUTES } from './app-routing.props';
import { OutboxGuard } from './core/services/guards/auth/outbox.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [UserDataGuard],
    canActivateChild: [UserDataGuard, MetaDataGuard],
    children: [
      { path: '', redirectTo: MAIN_ROUTES.STORIES, pathMatch: 'full' },
      { path: 'login', redirectTo: `${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.MAGIC_LINK_LOGIN}`, pathMatch: 'full' },
      { path: 'dev-components', component: DevComponentsComponent }, // todo only for development purpose
      {
        path: MAIN_ROUTES.STORIES,
        loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: MAIN_ROUTES.STORY,
        loadChildren: () => import('./modules/story-details/story-details.module').then((m) => m.StoryDetailsModule),
      },
      {
        path: MAIN_ROUTES.AUTH,
        loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: MAIN_ROUTES.PROFILE,
        loadChildren: () => import('./modules/profile/profile.module').then((m) => m.ProfileModule),
      },
      {
        // Submit-feedback flow is temporarily disabled: redirect to the public
        // landing page on every navigation (client-side click, direct link or
        // refresh). To re-enable, restore the loadChildren -> NewStoryV2Module
        // route below and remove FeedbackClosedRedirectComponent.
        path: MAIN_ROUTES.NEW_STORY,
        loadComponent: () =>
          import('./core/feedback-closed-redirect/feedback-closed-redirect.component').then(
            (m) => m.FeedbackClosedRedirectComponent,
          ),
      },
      {
        path: MAIN_ROUTES.INBOX,
        loadChildren: () => import('./modules/inbox/inbox.module').then((m) => m.InboxModule),
        canActivate: [InboxGuard],
        canActivateChild: [InboxGuard],
      },
      {
        path: MAIN_ROUTES.OUTBOX,
        loadChildren: () => import('./modules/outbox/outbox.module').then((m) => m.OutboxModule),
        canActivate: [OutboxGuard],
        canActivateChild: [OutboxGuard],
      },
      {
        // Statistics is temporarily hidden — redirect to landing page on direct URL hit,
        // same pattern as the disabled submit-feedback flow.
        // To re-enable, restore: loadChildren: () => import('./modules/statistics/statistics.module').then((m) => m.StatisticsModule)
        path: MAIN_ROUTES.STATISTICS,
        loadChildren: () => import('./modules/statistics/statistics.module').then((m) => m.StatisticsModule),
      },
      {
        path: MAIN_ROUTES.COMMUNITY_GUIDELINES,
        loadChildren: () => import('./modules/community-guidelines/community-guidelines.module').then((m) => m.CommunityGuidelinesModule),
      },
      {
        path: MAIN_ROUTES.MAGIC_LINK,
        loadChildren: () => import('./modules/magic-link/magic-link.module').then((m) => m.MagicLinkModule),
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
    canActivate: [UserDataGuard],
    canActivateChild: [UserDataGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
