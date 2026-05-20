import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AUTH_ROUTES, MAIN_ROUTES } from '@app/app-routing.props';
import { AuthService } from '@app/core/services/auth/auth.service';
import { BaseComponent } from '@app/shared/components/base.component';
import { AdvancedEmailValidator } from '@app/shared/custom-validators/advanced-email.directive';
import { TranslateService } from '@ngx-translate/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { catchError, finalize, take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss'],
})
export class ResetComponent extends BaseComponent implements OnInit, OnDestroy {
  resetForm: UntypedFormGroup;
  submitting = false;

  constructor(
    private authService: AuthService,
    private fb: UntypedFormBuilder,
    private googleAnalyticsService: GoogleAnalyticsService,
    private router: Router,
    private toastr: ToastrService,
    private translateService: TranslateService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.initForm();
  }

  resetSubmit(event: Event): void {
    event.preventDefault();

    if (this.resetForm.invalid) {
      return;
    }

    this.submitting = true;
    const email = this.resetForm?.value?.email?.trim();

    this.authService
      .resetPassword(email)
      .pipe(
        take(1),
        catchError((e) => throwError({ error: e })),
        takeUntil(this.destroyed$),
        finalize(() => (this.submitting = false)),
      )
      .subscribe(
        () => {
          this.googleAnalyticsService.event('authorization', 'reset password', email);
          this.toastr.success(
            this.translateService.instant(`auth.reset.toast.success.title`),
            this.translateService.instant('auth.reset.toast.success.subtitle'),
          );

          this.router.navigate([`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.MAGIC_LINK_LOGIN}`]);
        },
        (err) => {
          this.toastr.success(
            this.translateService.instant(`auth.reset.toast.error.title`),
            err.error?.message || this.translateService.instant('auth.reset.toast.error.subtitle'),
          );
        },
      );
  }

  backAction(event: Event): void {
    event.preventDefault();

    this.router.navigate([`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.MAGIC_LINK_LOGIN}`]);
  }

  private initForm(): void {
    this.resetForm = this.fb.group({
      email: [null, [Validators.required, Validators.email, Validators.maxLength(128), AdvancedEmailValidator.validateEmail]],
    });
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
