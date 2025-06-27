import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, UrlTree } from '@angular/router';
import { AUTH_ROUTES, MAIN_ROUTES } from '@app/app-routing.props';
import { Observable } from 'rxjs';
import { ProfileService } from '../../api/profile/profile.service';

@Injectable({
  providedIn: 'root',
})
export class InboxGuard implements CanActivate, CanActivateChild {
  constructor(private profileService: ProfileService, private router: Router) {}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.profileService.isAdmin) {
      this.router.navigate([`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.MAGIC_LINK_LOGIN}`]);
    }
    return this.profileService.isAdmin;
  }
  canActivateChild(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.profileService.isAdmin) {
      this.router.navigate([`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.MAGIC_LINK_LOGIN}`]);
    }
    return this.profileService.isAdmin;
  }
}
