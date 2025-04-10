import { Component,OnDestroy,OnInit } from '@angular/core';
import { AbstractControl,FormGroup,UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AUTH_ROUTES,MAIN_ROUTES } from '@app/app-routing.props';
import { ISupportedLanguage } from '@app/core/services/api/meta-data/model/supported-language.model';
import { IUpdateHideLastName } from '@app/core/services/api/model/request/update-hide-last-name.model';
import { IUserProfileAPI } from '@app/core/services/api/model/response/user-profile.model';
import { ProfileService } from '@app/core/services/api/profile/profile.service';
import { AuthService } from '@app/core/services/auth/auth.service';
import { SupportedLanguagesService } from '@app/core/services/locales/supported-languages.service';
import { BaseComponent } from '@app/shared/components/base.component';
import { IUpdateNotifications } from '@core/services/api/model/request/update-notifications.model';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { catchError,finalize,map,take,takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent extends BaseComponent implements OnInit, OnDestroy {
  dropdownOpen = false;
  profileForm: FormGroup<{
    firstName: AbstractControl<string>;
    lastName: AbstractControl<string>;
    hideLastName: AbstractControl<boolean>;
    notifications: AbstractControl<boolean>;
    organisation: AbstractControl<string>;
    reminders: AbstractControl<boolean>;
    optin_marketing: AbstractControl<boolean>;
  }>;
  switchDisabled = false;
  selectedLanguage: string;
  languages: ISupportedLanguage[] = [];
  selectLanguages: any[];
  userProfile: IUserProfileAPI;
  optin_marketing: boolean;

  private timeBetweenProfileRefresh = 7500;

  constructor(
    private authService: AuthService,
    private fb: UntypedFormBuilder,
    private profileService: ProfileService,
    private router: Router,
    private toastr: ToastrService,
    private languageService: SupportedLanguagesService,
    private translateService: TranslateService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.initForm();
    this.fetchProfileData();
    this.fetchLanguageDirectory();
  }

  handleOptionSelect(languageCode: string): void {
    this.selectedLanguage = languageCode;
    this.dropdownOpen = false;
  }

  handleSelectorOpenClick(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  logout(): void {
    this.authService.logout();
    this.toastr.success(this.translateService.instant(`auth.logout.toast.success.subtitle`));
    this.router.navigate([`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.MAGIC_LINK_LOGIN}`]);
  }

  notificationChange(value: boolean, field: string): void {
    this.profileForm.get(field).setValue(value);
    this.switchDisabled = true;

    const request: IUpdateNotifications = {
      notifications: this.profileForm.get('notifications').getRawValue(),
      reminders: this.profileForm.get('reminders').getRawValue(),
    };

    this.profileService
      .updateNotifications(request)
      .pipe(
        take(1),
        catchError((e) => throwError({ error: e })),
        map((r) => {
          if (!r.success) {
            return throwError({ error: null });
          }
          return r;
        }),
        finalize(() => (this.switchDisabled = false)),
        takeUntil(this.destroyed$),
      )
      .subscribe(
        () => {
          this.toastr.success(
            this.translateService.instant(`profile.notifications.toast.success.title`),
            this.translateService.instant(`profile.notifications.toast.success.subtitle`),
          );
        },
        (err) => {
          this.profileForm.get('notifications').setValue(false);

          this.toastr.success(
            this.translateService.instant(`profile.notifications.toast.error.title`),
            this.translateService.instant(err.error?.message || 'profile.notifications.toast.error.subtitle'),
          );
        },
      );
  }

  onEditProfile() {
    this.router.navigate([`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.REGISTER}`], {
      state: {
        edit: true,
        optin_marketing: this.optin_marketing,
        email: this.userProfile?.email,
        hideLastName: this.profileForm.get('hideLastName').getRawValue(),
      },
    });
  }

  private initForm(): void {
    this.profileForm = this.fb.group({
      firstName: [{ value: null, disabled: true }],
      lastName: [{ value: null, disabled: true }],
      organisation: [{ value: null, disabled: true }],
      notifications: [false],
      reminders: [false],
      hideLastName: [false],
      optin_marketing: [false],
    });
  }

  private fetchLanguageDirectory(): void {
    this.languageService
      .getSupportedLanguages()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data: ISupportedLanguage[]) => {
        this.languages = data;
        this.selectLanguages = this.languages.map((language) => {
          return {
            id: language.language,
            content: `languages.${language.language}`,
          };
        });
      });
  }

  private fetchProfileData(): void {
    const now = new Date().valueOf();

    if (!!this.profileService.userProfile && this.timeBetweenProfileRefresh > now - this.profileService.lastUpdated) {
      this.updateForm(this.profileService.userProfile);
    } else {
      this.profileService
        .getProfile()
        .pipe(take(1), takeUntil(this.destroyed$))
        .subscribe((profile) => {
          this.updateForm(profile);
        });
    }
  }

  onHideLastNameChanged(value: boolean): void {
    this.switchDisabled = true;

    const request: IUpdateHideLastName = {
      hideLastName: value,
      firstName: this.userProfile?.firstName,
      lastName: this.userProfile?.lastName,
    };

    this.profileService
      .updateHideLastName(request)
      .pipe(
        take(1),
        catchError((e) => throwError({ error: e })),
        map((r) => {
          this.profileService.userProfile.nickname = r.nickname;
          if (!r.success) {
            return throwError({ error: null });
          }
          return r;
        }),
        finalize(() => {
          this.profileForm.get('hideLastName').setValue(value);
          this.switchDisabled = false;
        }),
        takeUntil(this.destroyed$),
      )
      .subscribe(
        () => {
          this.toastr.success(
            this.translateService.instant(`profile.hideLastNameButton.toast.success.title`),
            this.translateService.instant(`profile.hideLastNameButton.toast.success.subtitle`),
          );
        },
        (err) => {
          this.profileForm.get('hideLastName').setValue(!value);

          this.toastr.success(
            this.translateService.instant(`profile.hideLastNameButton.toast.error.title`),
            this.translateService.instant(err.error?.message || 'profile.hideLastNameButton.toast.error.subtitle'),
          );
        },
      );
  }

  private updateForm(userProfile: IUserProfileAPI): void {
    this.userProfile = userProfile;
    this.profileForm.get('firstName').setValue(userProfile?.firstName);
    this.profileForm.get('lastName').setValue(userProfile?.lastName);
    this.profileForm.get('organisation').setValue(userProfile?.organisation?.name);
    this.profileForm.get('notifications').setValue(Boolean(userProfile.notifications));
    this.profileForm.get('reminders').setValue(Boolean(userProfile.reminders));
    this.profileForm.get('optin_marketing').setValue(Boolean(userProfile.optin_marketing));
    this.profileForm.get('hideLastName').setValue(Boolean(userProfile.hideLastName));
    this.optin_marketing = userProfile.optin_marketing;
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
