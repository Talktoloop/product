import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AUTH_ROUTES, INBOX_ROUTES, MAIN_ROUTES } from '@app/app-routing.props';
import { ProfileService } from '@app/core/services/api/profile/profile.service';
import { AuthService } from '@app/core/services/auth/auth.service';
import { BaseComponent } from '@app/shared/components/base.component';
import { passwordMatchValidator } from '@app/shared/custom-validators/password-match-validator';
import { TranslateService } from '@ngx-translate/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { ToastrService } from 'ngx-toastr';
import { concat, throwError } from 'rxjs';
import { catchError, filter, take, takeUntil } from 'rxjs/operators';

enum COGNITO_ERROR {
  CODE_MISMATCH_EXCEPTION = 'CodeMismatchException',
  EXPIRED_CODE_EXCEPTION = 'ExpiredCodeException',
}

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent extends BaseComponent implements OnInit, OnDestroy {
  changeForm: UntypedFormGroup;
  submitting = false;

  private minLength = 8;
  private email: string;
  private code: string;

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
    this.extractParamsFromUrl();
  }

  ngOnInit(): void {
    this.initForm();
  }

  backAction(event: Event): void {
    event.preventDefault();

    this.router.navigate([`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.MAGIC_LINK_LOGIN}`]);
  }

  changeSubmit(event: Event): void {
    event.preventDefault();

    if (this.changeForm.invalid) {
      return;
    }

    this.submitting = true;
    const password = this.changeForm.get('password').value?.trim();

    this.authService
      .createNewPassword(this.email, this.code, password)
      .pipe(
        take(1),
        catchError((e) => throwError({ error: e })),
        takeUntil(this.destroyed$),
      )
      .subscribe(
        () => {
          this.googleAnalyticsService.event('authorization', 'password change', this.email);
          this.toastr.success(
            this.translateService.instant(`auth.resetPassword.toast.success.title`),
            this.translateService.instant(`auth.resetPassword.toast.success.subtitle`),
          );

          this.performLogin(this.email, password);
        },
        (err: HttpErrorResponse) => {
          if (err.error.code === COGNITO_ERROR.CODE_MISMATCH_EXCEPTION || err.error.code === COGNITO_ERROR.EXPIRED_CODE_EXCEPTION) {
            this.toastr.error(this.translateService.instant(`auth.resetPassword.toast.error.title`), err.error.message);
          } else {
            this.toastr.error(
              this.translateService.instant(`auth.resetPassword.toast.error.title`),
              this.translateService.instant(`auth.resetPassword.toast.error.subtitle`),
            );
          }

          this.router.navigate([`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.MAGIC_LINK_LOGIN}`]);
        },
      );
  }

  private initForm(): void {
    this.changeForm = this.fb.group({
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(this.minLength),
          Validators.maxLength(128),
          Validators.pattern(/^\S*$/),
          passwordMatchValidator('confirmPassword', true),
        ],
      ],
      confirmPassword: [
        null,
        [
          Validators.required,
          Validators.minLength(this.minLength),
          Validators.maxLength(128),
          Validators.pattern(/^\S*$/),
          passwordMatchValidator('password'),
        ],
      ],
    });
  }

  private extractParamsFromUrl(): void {
    this.code = this.activatedRoute.snapshot.queryParamMap.get('code');
    this.email = this.activatedRoute.snapshot.queryParamMap.get('email');

    if (!this.email || !this.code || this.authService.isLoggedIn()) {
      this.router.navigate([`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.MAGIC_LINK_LOGIN}`]);
    }
  }

  private performLogin(email: string, password: string): void {
    concat(
      this.authService.login(email, password).pipe(
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
    this.router.navigate([`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.MAGIC_LINK_LOGIN}`]);
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
