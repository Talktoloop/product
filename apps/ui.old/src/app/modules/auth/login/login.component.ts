import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { INBOX_ROUTES, MAIN_ROUTES, PROFILE_ROUTES } from '@app/app-routing.props';
import { ProfileService } from '@app/core/services/api/profile/profile.service';
import { AuthService } from '@app/core/services/auth/auth.service';
import { BaseComponent } from '@app/shared/components/base.component';
import { AdvancedEmailValidator } from '@app/shared/custom-validators/advanced-email.directive';
import { TranslateService } from '@ngx-translate/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { ToastrService } from 'ngx-toastr';
import { concat, throwError } from 'rxjs';
import { catchError, filter, take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends BaseComponent implements OnInit, OnDestroy {
  loginForm: UntypedFormGroup;
  submitting = false;
  createAccountLink = 'https://airtable.com/shrTL1QDvmskKmCSy';

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private fb: UntypedFormBuilder,
    private googleAnalyticsService: GoogleAnalyticsService,
    private profileService: ProfileService,
    private router: Router,
    private toastr: ToastrService,
    private translateService: TranslateService,
  ) {
    super();
    if (this.authService.session) {
      this.router.navigate([`${MAIN_ROUTES.PROFILE}/${PROFILE_ROUTES.ACCOUNT}`]);
    }

    if (this.authService.didLogoutDuringSession && this.activatedRoute.snapshot.queryParamMap.get('session')) {
      this.toastr.warning(
        this.translateService.instant(`auth.logout.toast.expired.title`),
        this.translateService.instant('auth.logout.toast.expired.subtitle'),
      );
    }
  }

  ngOnInit(): void {
    this.initForm();
  }

  loginSubmit(event: Event): void {
    event.preventDefault();

    if (this.loginForm.invalid) {
      return;
    }

    this.submitting = true;

    const email = this.loginForm?.value?.email?.trim();

    concat(
      this.authService.login(email, this.loginForm?.value?.password?.trim()).pipe(
        take(1),
        catchError((e) => throwError({ error: e })),
      ),
      this.profileService.getProfile().pipe(take(1)),
    )
      .pipe(
        filter(() => !!this.profileService.userProfile),
        takeUntil(this.destroyed$),
      )
      .subscribe(
        () => {
          this.successLoginAction(email);
        },
        (err) => {
          this.submitting = false;
          this.errorLoginAction(err);
        },
      );
  }

  private successLoginAction(email: string): void {
    this.googleAnalyticsService.event('authorization', 'login', email);

    if (this.profileService.isAdmin) {
      this.router.navigate([`${MAIN_ROUTES.INBOX}/${INBOX_ROUTES.STORIES}`]);
    } else {
      this.router.navigate([`${MAIN_ROUTES.STORIES}`]);
    }
  }

  private errorLoginAction(err): void {
    this.toastr.error(
      this.translateService.instant(`auth.login.toast.error.title`),
      err.error?.message || this.translateService.instant('auth.login.toast.error.subtitle'),
    );
  }

  private initForm(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email, Validators.maxLength(128), AdvancedEmailValidator.validateEmail]],
      password: ['', [Validators.required, Validators.maxLength(128), Validators.minLength(8), Validators.pattern(/^\S*$/)]],
    });
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}

export enum COGNITO_CODES {
  EXPIRED_CODE = 'ExpiredCodeException',
}
