import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AUTH_ROUTES, MAIN_ROUTES } from '@app/app-routing.props';
import { ProfileService } from '@app/core/services/api/profile/profile.service';
import { AuthService } from '@app/core/services/auth/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { FullNameFormComponent } from '../components/full-name-form/full-name-form.component';
import { IUserProfileAPI } from "@core/services/api/model/response/user-profile.model";

@Component({
  selector: 'app-register-individual',
  templateUrl: './register-individual.component.html',
  styleUrls: ['./register-individual.component.scss'],
})
export class RegisterIndividualComponent {
  @ViewChild(FullNameFormComponent) fullNameFormComponent: FullNameFormComponent;
  private readonly edit: boolean;
  profile: IUserProfileAPI


  constructor(
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService,
    private translateService: TranslateService,
    private profileService: ProfileService,
  ) {
    this.edit = this.router.getCurrentNavigation()?.extras?.state?.edit;
    this.profile = this.profileService.userProfile;
  }

  onSignOut() {
    this.authService.logout();
    this.toastr.success(this.translateService.instant(`auth.logout.toast.success.subtitle`));
    this.router.navigate([`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.MAGIC_LINK_LOGIN}`]);
  }

  continue() {
    if (this.fullNameFormComponent.form.invalid) {
      this.fullNameFormComponent.checkAndMarkValidationErrors();
      return;
    }

    this.router.navigate([`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.REGISTER_ORGANIZATION}`], {
      state: {
        firstName: this.fullNameFormComponent.firstName,
        lastName: this.fullNameFormComponent.lastName,
        hideLastName: this.fullNameFormComponent?.hideLastName ?? this.profile.hideLastName,
        edit: this.edit,
        optin_marketing: this.profile.optin_marketing,
        email: this.profile.email,
      },
    });
  }
}
