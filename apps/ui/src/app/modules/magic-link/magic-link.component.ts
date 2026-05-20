import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AUTH_ROUTES, INBOX_ROUTES, MAIN_ROUTES } from '@app/app-routing.props';
import { RegistrationStatus } from '@app/core/services/api/model/registration-status.enum';
import { IUserProfileAPI } from '@app/core/services/api/model/response/user-profile.model';
import { ProfileService } from '@app/core/services/api/profile/profile.service';
import { AuthService } from '@app/core/services/auth/auth.service';
import { BaseComponent } from '@app/shared/components/base.component';
import { POSTHOG_EVENTS } from '@app/shared/enums/posthog-event.enum';
import { PosthogService } from '@app/shared/services/posthog.service';
import { TranslateService } from '@ngx-translate/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { ToastrService } from 'ngx-toastr';
import { catchError, concat, filter, from, take, takeUntil, throwError } from 'rxjs';
@Component({
  selector: 'app-magic-link',
  templateUrl: './magic-link.component.html',
  styleUrls: ['./magic-link.component.scss'],
})
export class MagicLinkComponent extends BaseComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private profileService: ProfileService,
    private googleAnalyticsService: GoogleAnalyticsService,
    private toastr: ToastrService,
    private translateService: TranslateService,
    private posthogService: PosthogService
  ) {
    super();
  }

  async ngOnInit() {
    const email = this.route.snapshot.queryParams?.email;
    const token = this.route.snapshot.queryParams?.token;

    if (this.authService.isLoggedIn() && this.profileService.userProfile) {
      this.redirect(this.profileService.userProfile);
      return;
    }

    concat(
      from(this.authService.loginViaToken(email, token)).pipe(
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
        (profile) => {
          this.googleAnalyticsService.event('authorization', 'login', email);
          this.posthogService.trackEvent(POSTHOG_EVENTS.LOGIN, { user: profile.id })
          this.redirect(profile);
        },
        (err) => {
          this.toastr.error(
            this.translateService.instant(`auth.login.toast.error.title`),
            err.error?.message || this.translateService.instant('auth.login.toast.error.subtitle'),
          );
        },
      );
  }

  private redirect(profile: IUserProfileAPI) {
    if (!profile.firstName || profile.registrationStatus === RegistrationStatus.Pending) {
      this.router.navigate([`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.REGISTER}`]);
      return;
    }

    if (this.profileService.isAdmin) {
      this.router.navigate([`${MAIN_ROUTES.INBOX}/${INBOX_ROUTES.STORIES}`]);
    } else {
      this.router.navigate([`${MAIN_ROUTES.STORIES}`]);
    }
  }
}
