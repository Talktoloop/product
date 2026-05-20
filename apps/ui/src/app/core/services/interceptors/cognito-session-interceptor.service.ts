import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AUTH_ROUTES, MAIN_ROUTES } from '@app/app-routing.props';
import { AuthService } from '@core/services/auth/auth.service';
import { Observable } from 'rxjs';
import { catchError, flatMap } from 'rxjs/operators';
import { CognitoError } from '../api/model/cognito-errror.enum';

@Injectable({
  providedIn: 'root',
})
export class CognitoSessionInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authService.isLoggedIn()
      ? this.authService.refreshCurrentUserSession().pipe(
          flatMap(() => {
            return next.handle(request);
          }),
          catchError((error) => {
            if (error === CognitoError.RefreshSessionError) {
              this.handleSessionExpired();
            }
            return next.handle(request);
          }),
        )
      : next.handle(request);
  }

  protected handleSessionExpired(): void {
    this.authService.logout();
    this.router.navigate([`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.MAGIC_LINK_LOGIN}`], { queryParams: { session: 'expired' } });
  }
}
