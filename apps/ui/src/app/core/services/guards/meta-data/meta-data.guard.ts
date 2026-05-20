import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { STATISTICS_ROUTES } from '@app/app-routing.props';
import { MetaDataService } from '@core/services/api/meta-data/meta-data.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MetaDataGuard implements CanActivateChild {
  constructor(private metaDataService: MetaDataService) {}
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (next.url.toString() === STATISTICS_ROUTES.SENSITIVE_CASES) {
      this.metaDataService.requestMissingCasesMetaData();
    } else {
      this.metaDataService.requestMissingMetaData();
    }
    return of(true);
  }
}
