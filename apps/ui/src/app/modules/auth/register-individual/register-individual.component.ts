import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AUTH_ROUTES, MAIN_ROUTES } from '@app/app-routing.props';
import { ProfileService } from '@app/core/services/api/profile/profile.service';
import { AuthService } from '@app/core/services/auth/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { FullNameFormComponent } from '../components/full-name-form/full-name-form.component';

@Component({
  selector: 'app-register-individual',
  templateUrl: './register-individual.component.html',
  styleUrls: ['./register-individual.component.scss'],
})
export class RegisterIndividualComponent implements OnInit {
  @ViewChild(FullNameFormComponent) fullNameFormComponent: FullNameFormComponent;
  private edit: boolean;
  private optin_marketing: boolean;
  private email: string
  hideLastName: boolean


  constructor(
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService,
    private translateService: TranslateService,
    private profileService: ProfileService,
  ) {
    this.edit = this.router.getCurrentNavigation()?.extras?.state?.edit;
    this.optin_marketing = this.router.getCurrentNavigation()?.extras?.state?.optin_marketing
    this.email = this.router.getCurrentNavigation()?.extras?.state?.email
    this.hideLastName = this.router.getCurrentNavigation()?.extras?.state?.hideLastName

  }

  ngOnInit(): void {
    this.fetchProfileData();
  }

  private fetchProfileData(): void {
    this.profileService
      .getProfile()
      .pipe(take(1))
      .subscribe((profile) => {
        this.email = profile.email;
        this.optin_marketing = profile.optin_marketing;
      });
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
        hideLastName: this.fullNameFormComponent?.hideLastName ?? this.hideLastName,
        edit: this.edit,
        optin_marketing: this.optin_marketing,
        email: this.email,
      },
    });
  }
}
