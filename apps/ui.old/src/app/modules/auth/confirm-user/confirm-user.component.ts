import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AUTH_ROUTES, MAIN_ROUTES } from '@app/app-routing.props';
import { AuthService } from '@app/core/services/auth/auth.service';
import { BaseComponent } from '@app/shared/components/base.component';
import { passwordMatchValidator } from '@app/shared/custom-validators/password-match-validator';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { catchError, take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-confirm-user',
  templateUrl: './confirm-user.component.html',
  styleUrls: ['./confirm-user.component.scss'],
})
export class ConfirmUserComponent extends BaseComponent implements OnInit, OnDestroy {
  setPasswordForm: UntypedFormGroup;
  submitting = false;

  private minLength = 8;
  private email: string;
  private code: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private fb: UntypedFormBuilder,
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

  passwordSubmit(event: Event): void {
    event.preventDefault();

    if (this.setPasswordForm.invalid) {
      return;
    }

    this.submitting = true;
    const password = this.setPasswordForm.get('password').value?.trim();

    this.authService
      .changePassword(this.email, this.code, password)
      .pipe(
        take(1),
        catchError((e) => throwError({ error: e })),
        takeUntil(this.destroyed$),
      )
      .subscribe(
        () => {
          this.toastr.success(
            this.translateService.instant(`auth.confirmUser.toast.success.title`),
            this.translateService.instant(`auth.confirmUser.toast.success.subtitle`),
          );
          this.router.navigate([`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.MAGIC_LINK_LOGIN}`]);
        },
        () => {
          this.errorSettingPasswordAction();
        },
      );
  }

  private initForm(): void {
    this.setPasswordForm = this.fb.group({
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

  private errorSettingPasswordAction(): void {
    this.authService
      .getConfirmationStatus(this.email)
      .pipe(
        take(1),
        catchError((e) => throwError({ error: e })),
        takeUntil(this.destroyed$),
      )
      .subscribe(
        (res) => {
          if (res.status) {
            this.toastr.info(
              this.translateService.instant(`auth.confirmUser.toast.confirmedAlready.title`),
              this.translateService.instant(`auth.confirmUser.toast.confirmedAlready.subtitle`),
            );
            this.router.navigate([`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.MAGIC_LINK_LOGIN}`]);
          } else {
            this.proceedErrorAction();
          }
        },
        () => this.proceedErrorAction(),
      );
  }

  private proceedErrorAction(): void {
    this.toastr.error(
      this.translateService.instant(`auth.confirmUser.toast.error.title`),
      this.translateService.instant(`auth.confirmUser.toast.error.subtitle`),
    );
    this.router.navigate([`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.MAGIC_LINK_LOGIN}`]);
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
