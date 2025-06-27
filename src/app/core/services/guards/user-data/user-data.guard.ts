import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AUTH_ROUTES, MAIN_ROUTES } from '@app/app-routing.props';
import { MetaDataService } from '@core/services/api/meta-data/meta-data.service';
import { ProfileService } from '@core/services/api/profile/profile.service';
import { AuthService } from '@core/services/auth/auth.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { RegistrationStatus } from '../../api/model/registration-status.enum';
import { IUserProfileAPI } from '../../api/model/response/user-profile.model';

@Injectable({
  providedIn: 'root',
})
export class UserDataGuard implements CanActivate, CanActivateChild {
  constructor(
    private authService: AuthService,
    private router: Router,
    private profileService: ProfileService,
    private metaDataService: MetaDataService,
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.handleProfileRefresh(state.url);
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.handleProfileRefresh(state.url);
  }

  handleProfileRefresh(url: string): Observable<boolean | UrlTree> {
    if (this.authService.isLoggedIn()) {
      const userProfile = this.profileService.userProfile;

      return userProfile
        ? of(this.handleUserProfile(userProfile, url))
        : this.profileService.getProfile().pipe(
            map((profile) => {
              return this.handleUserProfile(profile, url);
            }),
          );
    }

    return of(true);
  }

  private handleUserProfile(profile: IUserProfileAPI, url: string) {
    if (
      profile.registrationStatus !== RegistrationStatus.Pending ||
      url.startsWith(`/${MAIN_ROUTES.AUTH}`) ||
      url.startsWith(`/${MAIN_ROUTES.MAGIC_LINK}`)
    ) {
      return true;
    }

    return this.router.parseUrl(`/${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.REGISTER}`);
  }
}
