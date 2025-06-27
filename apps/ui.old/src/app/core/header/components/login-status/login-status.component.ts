import { Component, Input } from '@angular/core';
import { AUTH_ROUTES, MAIN_ROUTES } from '@app/app-routing.props';
import { ProfileService } from '@core/services/api/profile/profile.service';
import { AuthService } from '@core/services/auth/auth.service';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.scss'],
})
export class LoginStatusComponent {
  magicLinkLoginLink = ['/', MAIN_ROUTES.AUTH, AUTH_ROUTES.MAGIC_LINK_LOGIN];
  profileLink = ['/', MAIN_ROUTES.PROFILE];
  @Input() showTextOnMobiles: boolean;

  get loggedIn(): boolean {
    return !!(this.authService.isLoggedIn() && this.profileService.userProfile);
  }

  get nickname(): string {
    return this.profileService.userProfile?.nickname;
  }

  constructor(private authService: AuthService, private profileService: ProfileService) {}
}
