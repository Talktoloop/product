import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '@app/core/header/header.module';
import { ButtonModule } from '@app/shared/components/button/button.module';
import { CheckboxModule } from '@app/shared/components/checkbox/checkbox.module';
import { CreateNewOrganizationModalModule } from '@app/shared/components/create-new-organization-modal/create-new-organization-modal.module';
import { CreateNewOrganizationModule } from '@app/shared/components/create-new-organization/create-new-organization.module';
import { InputModule } from '@app/shared/components/input/input.module';
import { OrganisationModule } from '@app/shared/components/organisation/organisation.module';
import { RadioModule } from '@app/shared/components/radio/radio.module';
import { RegisterRadioModule } from '@app/shared/components/register-radio/register-radio.module';
import { SlideToggleModule } from '@app/shared/components/slide-toggle/slide-toggle.module';
import { ArrowPreviousIconModule } from '@app/shared/icons/arrow-previous-icon/arrow-previous-icon.module';
import { LoopDesignSystemModule } from '@app/shared/loop-design-system/loop-design-system.module';
import { SharedModule } from '@app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { CyModule } from '../../shared/directives/cy/cy.module';
import { AcceptTermsComponent } from './accept-terms/accept-terms.component';
import { AuthPageWrapperComponent } from './auth-page-wrapper/auth-page-wrapper.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FullNameFormComponent } from './components/full-name-form/full-name-form.component';
import { ConfirmUserComponent } from './confirm-user/confirm-user.component';
import { CreateNewOrganizationPageComponent } from './create-new-organization-page/create-new-organization-page.component';
import { LoginComponent } from './login/login.component';
import { MagicLinkLoginComponent } from './magic-link-login/magic-link-login.component';
import { MagicLinkSentComponent } from './magic-link-sent/magic-link-sent.component';
import { MainTemplateComponent } from './main-template/main-template.component';
import { RegisterIndividualComponent } from './register-individual/register-individual.component';
import { RegisterOrganizationComponent } from './register-organization/register-organization.component';
import { ResetComponent } from './reset/reset.component';

@NgModule({
  declarations: [
    MainTemplateComponent,
    LoginComponent,
    ResetComponent,
    ChangePasswordComponent,
    ConfirmUserComponent,
    MagicLinkLoginComponent,
    MagicLinkSentComponent,
    RegisterIndividualComponent,
    AuthPageWrapperComponent,
    RegisterOrganizationComponent,
    CreateNewOrganizationPageComponent,
    AcceptTermsComponent,
    FullNameFormComponent,
  ],
  imports: [
    ArrowPreviousIconModule,
    ButtonModule,
    CommonModule,
    CyModule,
    FormsModule,
    InputModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    TranslateModule,
    RegisterRadioModule,
    RadioModule,
    LoopDesignSystemModule,
    OrganisationModule,
    CreateNewOrganizationModalModule,
    CreateNewOrganizationModule,
    HeaderModule,
    CheckboxModule,
    SlideToggleModule,
  ],
  exports: [AuthRoutingModule, MainTemplateComponent],
})
export class AuthModule {}
