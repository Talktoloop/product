import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AUTH_ROUTES, MAIN_ROUTES, PROFILE_ROUTES } from '@app/app-routing.props';
import { AuthService } from '@app/core/services/auth/auth.service';
import { UIService } from '@app/core/services/ui/ui.service';
import { BaseComponent } from '@app/shared/components/base.component';
import { AdvancedEmailValidator } from '@app/shared/custom-validators/advanced-email.directive';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { loopDesktopLogoSvg, loopMobileLogoSvg } from './loop-logo.svg';
import { magicLinkLoginSvg } from './magic-link-login.svg';

@Component({
  selector: 'app-magic-link-login',
  templateUrl: './magic-link-login.component.html',
  styleUrls: ['./magic-link-login.component.scss'],
})
export class MagicLinkLoginComponent extends BaseComponent implements OnInit, OnDestroy {
  loginForm: UntypedFormGroup;
  isMobile: boolean;
  isTablet: boolean;
  accountRequired: boolean;
  magicLinkLoginSvg = this.sanitizer.bypassSecurityTrustHtml(magicLinkLoginSvg);
  loopMobileLogoSvg = this.sanitizer.bypassSecurityTrustHtml(loopMobileLogoSvg);
  loopDesktopLogoSvg = this.sanitizer.bypassSecurityTrustHtml(loopDesktopLogoSvg);
  requestProcessing = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private translateService: TranslateService,
    private uiService: UIService,
    private sanitizer: DomSanitizer,
  ) {
    super();
    if (this.authService.session) {
      this.router.navigate([`${MAIN_ROUTES.PROFILE}/${PROFILE_ROUTES.ACCOUNT}`]);
    }
    this.accountRequired = this.router.getCurrentNavigation()?.extras?.state?.accountRequired;
  }

  sendMagicLink(event: Event) {
    event.preventDefault();

    if (this.loginForm.invalid) {
      this.loginForm.controls.email.markAsDirty();
      this.loginForm.controls.email.markAsTouched();
      this.loginForm.setValue({ email: '' });
      return;
    }

    const email = this.loginForm?.value?.email?.trim();

    this.requestProcessing = true;
    this.authService.sendMagicLink(email).subscribe({
      next: () => {
        this.requestProcessing = false;
        this.router.navigate([`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.MAGIC_LINK_SENT}`], { state: { email } });
      },
      error: (error) => {
        //TODO: temporary, endpoint returns error but sending magic link
        this.requestProcessing = false;
        this.router.navigate([`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.MAGIC_LINK_SENT}`], { state: { email } });
      },
    });
  }

  ngOnInit(): void {
    this.initForm();

    this.uiService.mobileView$.subscribe({
      next: (isMobile) => {
        this.isMobile = isMobile;
      },
    });

    this.uiService.tabletView$.subscribe({
      next: (isTablet) => {
        this.isTablet = isTablet;
      },
    });
  }

  private initForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, {
        validators: [Validators.required, Validators.email, Validators.maxLength(128), AdvancedEmailValidator.validateEmail],
      }),
    });
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
