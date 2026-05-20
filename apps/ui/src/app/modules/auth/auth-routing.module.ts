import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AUTH_ROUTES } from '@app/app-routing.props';
import { AuthGuard } from '@core/services/guards/auth/auth.guard';
import { AcceptTermsComponent } from './accept-terms/accept-terms.component';
import { CreateNewOrganizationPageComponent } from './create-new-organization-page/create-new-organization-page.component';
import { LoginComponent } from './login/login.component';
import { MagicLinkLoginComponent } from './magic-link-login/magic-link-login.component';
import { MagicLinkSentComponent } from './magic-link-sent/magic-link-sent.component';
import { RegisterIndividualComponent } from './register-individual/register-individual.component';
import { RegisterOrganizationComponent } from './register-organization/register-organization.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'login' },
    canActivate: [AuthGuard],
  },
  {
    path: AUTH_ROUTES.MAGIC_LINK_LOGIN,
    component: MagicLinkLoginComponent,
    data: { title: 'magicLinkLogin' },
    canActivate: [AuthGuard],
  },
  {
    path: AUTH_ROUTES.MAGIC_LINK_SENT,
    component: MagicLinkSentComponent,
    data: { title: 'magicLinkSent' },
    canActivate: [AuthGuard],
  },
  {
    path: AUTH_ROUTES.REGISTER,
    component: RegisterIndividualComponent,
    data: { title: 'registerIndividual' },
    canActivate: [AuthGuard],
  },
  {
    path: AUTH_ROUTES.CREATE_ORGANIZATION,
    component: CreateNewOrganizationPageComponent,
    data: { title: 'createOrganization' },
    canActivate: [AuthGuard],
  },
  {
    path: AUTH_ROUTES.REGISTER_ORGANIZATION,
    component: RegisterOrganizationComponent,
    data: { title: 'registerOrganization' },
    canActivate: [AuthGuard],
  },
  {
    path: AUTH_ROUTES.ACCEPT_TERMS,
    component: AcceptTermsComponent,
    data: { title: 'acceptTerms' },
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
