import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@app/core/services/api/api-base';
import { genericRetryStrategy } from '@app/core/services/api/generic-retry-strategy';
import { ProfileService } from '@core/services/api/profile/profile.service';
import { AuthService } from '@core/services/auth/auth.service';
import { ConfigService } from '@core/services/config/config.service';
import { SupportedLanguagesService } from '@core/services/locales/supported-languages.service';
import { of, Subject, throwError } from 'rxjs';
import { catchError, concatMap, finalize, flatMap, map, retryWhen, take, takeUntil, tap, timeout } from 'rxjs/operators';
import { AUTH_ROUTES, MAIN_ROUTES } from './app-routing.props';

@Injectable()
export class AppPreinitService extends ApiService implements OnDestroy {
  private readonly maxTimeout = 5000;
  destroyed$ = new Subject();
  constructor(
    private router: Router,
    private authService: AuthService,
    private profileService: ProfileService,
    private languageService: SupportedLanguagesService,
    private configService: ConfigService,
  ) {
    super();
  }

  preInit(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.configService
        .loadAppConfig()
        .pipe(
          retryWhen(genericRetryStrategy()),
          tap(() => this.authService.initialise()),
          catchError((e) => {
            reject(e);
            throw e;
          }),
          concatMap(() =>
            this.languageService.getAllLanguages().pipe(
              take(1),
              retryWhen(genericRetryStrategy()),
              takeUntil(this.destroyed$),
              flatMap(() => {
                if (!this.authService.hasPreviousUserData()) {
                  this.authService.clearCognitoData();
                  return of(true);
                }

                return this.authService.refreshCurrentUserSession().pipe(
                  flatMap(() => this.profileService.getProfile()),
                  catchError((err) => {
                    this.authService.logout();
                    this.router.navigate([`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.MAGIC_LINK_LOGIN}`], {
                      queryParams: { session: 'expired' },
                    });
                    return throwError('Unauthorized');
                  }),
                );
              }),
              timeout(this.maxTimeout),
              map((result) => {
                resolve();
                return of(result);
              }),
              finalize(() => {
                if (!this.languageService.allLanguages?.length) {
                  this.languageService.useOnlyDefaultLanguage();
                }
                resolve();
              }),
            ),
          ),
          concatMap(() =>
            this.languageService.getSupportedLanguages().pipe(
              take(1),
              retryWhen(genericRetryStrategy()),
              takeUntil(this.destroyed$),
              flatMap(() => {
                if (!this.authService.hasPreviousUserData()) {
                  this.authService.clearCognitoData();
                  return of(true);
                }

                return this.authService.refreshCurrentUserSession().pipe(
                  flatMap(() => this.profileService.getProfile()),
                  catchError((err) => {
                    this.authService.logout();
                    this.router.navigate([`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.MAGIC_LINK_LOGIN}`], {
                      queryParams: { session: 'expired' },
                    });
                    return throwError('Unauthorized');
                  }),
                );
              }),
              timeout(this.maxTimeout),
              map((result) => {
                resolve();
                return of(result);
              }),
              finalize(() => {
                if (!this.languageService.supportedLanguages?.length) {
                  this.languageService.useOnlyDefaultLanguage();
                }
                resolve();
              }),
            ),
          ),
        )
        .subscribe();
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }
}
