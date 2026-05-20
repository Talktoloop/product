import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PROFILE_ROUTES } from '@app/app-routing.props';
import { AuthGuard } from '@core/services/guards/auth/auth.guard';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: PROFILE_ROUTES.ACCOUNT,
    component: ProfileComponent,
    canActivate: [AuthGuard],
    data: { title: 'profile' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
