import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { FeatureFlagStorageKey } from '@app/app-feature-flag.type';
import { AUTH_ROUTES, MAIN_ROUTES, PROFILE_ROUTES } from '@app/app-routing.props';
import { AuthService } from '@core/services/auth/auth.service';
import { prepareGuardRoute } from '@shared/utils/prepare-guard-route';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    switch (prepareGuardRoute(state.url)) {
      case prepareGuardRoute(`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.MAGIC_LINK_LOGIN}`):
        if (this.authService.isLoggedIn()) {
          this.router.navigate([`${MAIN_ROUTES.PROFILE}/${PROFILE_ROUTES.ACCOUNT}`]);
          return false;
        }
        break;
      case prepareGuardRoute(`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.MAGIC_LINK_LOGIN}`):
      case prepareGuardRoute(`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.MAGIC_LINK_SENT}`):
        if (this.authService.isLoggedIn()) {
          this.router.navigate([`${MAIN_ROUTES.PROFILE}/${PROFILE_ROUTES.ACCOUNT}`]);
          return false;
        }
        if (localStorage.getItem(FeatureFlagStorageKey.MAGIC_LINK_LOGIN_FEATURE) === 'false') {
          this.router.navigate([`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.MAGIC_LINK_LOGIN}`]);
        }
        break;

      case prepareGuardRoute(`${MAIN_ROUTES.PROFILE}/${PROFILE_ROUTES.ACCOUNT}`):
        if (!this.authService.isLoggedIn()) {
          this.router.navigate([`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.MAGIC_LINK_LOGIN}`]);
          return false;
        }
        break;
      default:
        return true;
        break;
    }
    return true;
  }
  canActivateChild(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  activationFunction(): boolean {
    return !!(this.authService.accessTokenString || this.authService.session);
  }
}
