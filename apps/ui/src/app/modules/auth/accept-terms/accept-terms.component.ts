import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { INBOX_ROUTES, MAIN_ROUTES } from '@app/app-routing.props';
import { AccountType } from '@app/core/services/api/model/account-type.enum';
import { ProfileService } from '@app/core/services/api/profile/profile.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, of, switchMap, throwError } from 'rxjs';

@Component({
  selector: 'app-accept-terms',
  templateUrl: './accept-terms.component.html',
  styleUrls: ['./accept-terms.component.scss'],
})
export class AcceptTermsComponent {
  termsOfServiceChecked: boolean;
  optInMarketinChecked: boolean;
  MAIN_ROUTES = MAIN_ROUTES;
  showError: boolean;
  privacyPolicyUrl = 'https://www.iubenda.com/privacy-policy/99407557';
  termsOfServiceUrl = 'https://www.iubenda.com/terms-and-conditions/99407557';
  private firstName: string;
  private lastName: string;
  private organizationId: string;
  private hideLastName: boolean;
  private communityGuidelinesUrl = `${document.location.origin}/${MAIN_ROUTES.COMMUNITY_GUIDELINES}`;
  private edit: boolean;
  private optin_marketing: boolean
  private email: string

  constructor(
    private router: Router,
    private profileService: ProfileService,
    private toastr: ToastrService,
    private translateService: TranslateService,
  ) {
    this.firstName = this.router.getCurrentNavigation().extras?.state?.firstName;
    this.lastName = this.router.getCurrentNavigation().extras?.state?.lastName;
    this.organizationId = this.router.getCurrentNavigation().extras?.state?.organizationId;
    this.hideLastName = this.router.getCurrentNavigation().extras?.state?.hideLastName;
    this.edit = this.router.getCurrentNavigation()?.extras?.state?.edit;
    this.optin_marketing = this.router.getCurrentNavigation().extras?.state?.optin_marketing
    this.email = this.router.getCurrentNavigation().extras?.state?.email
    this.optInMarketinChecked = this.optin_marketing
  }

  onBack() {
    history.back();
  }

  continue() {
    if (!this.termsOfServiceChecked) {
      this.showError = true;
      return;
    }

    this.showError = false;

    const type = this.organizationId ? AccountType.Organization : AccountType.Individual;
    this.profileService
      .updateProfile({
        firstName: this.firstName,
        lastName: this.lastName === '' ? null : this.lastName,
        hideLastName: this.hideLastName,
        consents: {
          termsOfService: this.termsOfServiceUrl,
          communityGuidelines: this.communityGuidelinesUrl,
          privacyPolicy: this.privacyPolicyUrl,
        },
        ...(this.organizationId && { organisationApplicationId: this.organizationId }),
        optin_marketing: this.optInMarketinChecked,
        email: this.email
      })
      .pipe(
        switchMap(() =>
          type === AccountType.Organization
            ? this.profileService.addOrganizationToUserProfile({ organisationId: this.organizationId })
            : of({}),
        ),
        switchMap(() => this.profileService.getProfile()),
        catchError((error) => throwError(error)),
      )
      .subscribe({
        next: () => {
          if (this.profileService.isAdmin) {
            this.router.navigate([`${MAIN_ROUTES.INBOX}/${INBOX_ROUTES.STORIES}`]);
          } else {
            this.router.navigate([`${MAIN_ROUTES.STORIES}`]);
          }
          if (this.edit) {
            this.toastr.success(this.translateService.instant('auth.acceptTerms.userEditedToast.success'));
          } else {
            this.toastr.success(this.translateService.instant('auth.acceptTerms.userCreatedToast.success'));
          }
        },
        error: (error) => {
          this.toastr.error(this.translateService.instant(`error.generic.title`), this.translateService.instant('error.generic.subtitle'));
        },
      });
  }

  onTermsOfServiceCheckboxChanged(termsOfServiceChecked) {
    this.termsOfServiceChecked = !this.termsOfServiceChecked;

    if (this.showError && termsOfServiceChecked) {
      this.showError = false;
    }
  }

  onOptInMarketinCheckboxChanged(optInMarketinCheck) {
    this.optInMarketinChecked = !this.optInMarketinChecked;

    if (this.showError && optInMarketinCheck) {
      this.showError = false;
    }
  }
}
