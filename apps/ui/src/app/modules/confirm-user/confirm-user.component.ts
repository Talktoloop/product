import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AUTH_ROUTES, MAIN_ROUTES } from '@app/app-routing.props';
import { AuthService } from '@core/services/auth/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Subject, throwError } from 'rxjs';
import { catchError, take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-confirm-user',
  templateUrl: './confirm-user.component.html',
  styleUrls: ['./confirm-user.component.scss'],
})
export class ConfirmUserComponent implements OnInit, OnDestroy {
  public readonly minLength = 8;
  destroyed$ = new Subject();
  showPasswordForm = true;
  newPasswordForm = new FormGroup({
    password: new FormControl(''),
    password2: new FormControl(''),
  });
  fieldsTouched: Array<string> = [];
  submitted = false;
  email: string;
  code: string;
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private translateService: TranslateService,
  ) {}

  ngOnInit(): void {
    this.code = this.route.snapshot.queryParamMap.get('code');
    this.email = this.route.snapshot.queryParamMap.get('email');
    if (!this.email || !this.code || this.authService.isLoggedIn()) {
      this.router.navigate([`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.MAGIC_LINK_LOGIN}`]);
    }
  }

  focusedOut(name: string): boolean {
    return this.fieldsTouched.indexOf(name) >= 0;
  }

  validate(name: string): void {
    this.fieldsTouched.push(name);
  }

  getValue(name: string): string {
    return this.newPasswordForm.get(name).value;
  }

  shouldShowValidation(): boolean {
    return (
      (this.getValue('password') !== this.getValue('password2') || this.getValue('password') === '' || this.getValue('password2') === '') &&
      this.focusedOut('password') &&
      this.focusedOut('password2')
    );
  }

  getError(name: string): string {
    const value = this.getValue(name);
    return value === ''
      ? 'confirmUser.validation.empty'
      : value.length < this.minLength
      ? 'confirmUser.validation.tooShort'
      : 'confirmUser.validation.notMatch';
  }

  passwordSubmit($event): void {
    this.validate('password');
    this.validate('password2');
    const valid = !this.shouldShowValidation();
    $event.preventDefault();
    if (valid) {
      this.newPasswordForm.controls.password.disable();
      this.newPasswordForm.controls.password2.disable();
      this.submitted = true;
      this.authService
        .changePassword(this.email, this.code, this.getValue('password'))
        .pipe(
          take(1),
          catchError((e) => throwError({ error: e })),
          takeUntil(this.destroyed$),
        )
        .subscribe(
          () => {
            this.toastr.success(
              this.translateService.instant(`confirmUser.toast.success.title`),
              this.translateService.instant('confirmUser.toast.success.subtitle'),
            );
            this.router.navigate([`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.MAGIC_LINK_LOGIN}`]);
          },
          () => {
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
                      this.translateService.instant(`confirmUser.toast.confirmedAlready.title`),
                      this.translateService.instant('confirmUser.toast.confirmedAlready.subtitle'),
                    );
                    this.router.navigate([`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.MAGIC_LINK_LOGIN}`]);
                  } else {
                    this.toastr.error(
                      this.translateService.instant(`confirmUser.toast.error.title`),
                      this.translateService.instant('confirmUser.toast.error.subtitle'),
                    );
                    this.router.navigate([`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.MAGIC_LINK_LOGIN}`]);
                  }
                },
                () => {
                  this.toastr.error(
                    this.translateService.instant(`confirmUser.toast.error.title`),
                    this.translateService.instant('confirmUser.toast.error.subtitle'),
                  );
                  this.router.navigate([`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.MAGIC_LINK_LOGIN}`]);
                },
              );
          },
        );
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }
}
