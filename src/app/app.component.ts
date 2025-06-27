import { Component, HostListener, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { UserLanguageService } from '@core/services/locales/user-language.service';
import { UIService } from '@core/services/ui/ui.service';
import { environment } from '@env/environment';
import { TranslateService } from '@ngx-translate/core';
import { slideAnimation } from '@shared/animations/slide.animation';
import { BaseComponent } from '@shared/components/base.component';
import { Environment } from '@shared/enums/environment.enum';
import { findActiveTopLevelRouteConfig } from '@shared/utils/router-config.utils';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { filter, take, takeUntil } from 'rxjs/operators';
import { AUTH_ROUTES, INBOX_ROUTES, MAIN_ROUTES } from './app-routing.props';
import { IUserProfileAPI } from './core/services/api/model/response/user-profile.model';
import { ProfileService } from './core/services/api/profile/profile.service';
import { GlobalTitleService } from './shared/services/global-title.service';
import { PosthogService } from './shared/services/posthog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideAnimation],
  providers: [GlobalTitleService],
})
export class AppComponent extends BaseComponent implements OnDestroy {
  Environment = Environment;
  title = 'ourloop-ui';
  showing = false;
  isNewStoryUrl: boolean;
  isMagicLinkUrl: boolean;
  loadingRoutes = [
    `/${MAIN_ROUTES.INBOX}/${INBOX_ROUTES.STORIES}`,
    `/${MAIN_ROUTES.INBOX}/${INBOX_ROUTES.REPLIES}`,
    `/${MAIN_ROUTES.STORIES}`,
  ];

  constructor(
    public ui: UIService,
    private globalTitleService: GlobalTitleService,
    private googleAnalyticsService: GoogleAnalyticsService,
    private profileService: ProfileService,
    private router: Router,
    private translateService: TranslateService,
    private userLanguageService: UserLanguageService,
    private route: ActivatedRoute,
    private posthogService: PosthogService
  ) {
    super();
    this.translateService.setDefaultLang(environment.translations.defaultLanguage);
    this.translateService.use(this.userLanguageService.getLanguage());

    this.watchMobileViewChange();
    this.watchNavigationStartEvents();
    this.watchNavigationEndEvents();

    this.translateService.onDefaultLangChange.pipe(take(1), takeUntil(this.destroyed$)).subscribe(() => {
      this.setPageTitle();
    });
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    this.ui.uiClicked$.next(event);
  }

  private watchMobileViewChange(): void {
    this.ui.mobileView$.pipe(takeUntil(this.destroyed$)).subscribe((isMobile) => {
      if (isMobile) {
        this.ui.addBodyClass('loop-mobile');
      } else {
        this.ui.removeBodyClass('loop-mobile');
      }
    });
  }

  private watchNavigationEndEvents(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroyed$),
      )
      .subscribe((event: NavigationEnd) => {
        this.ui.routeLoading = false;
        this.isNewStoryUrl = event.url.startsWith(`/${MAIN_ROUTES.NEW_STORY}`);
        this.isMagicLinkUrl =
          event.url.startsWith(`/${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.MAGIC_LINK_LOGIN}`) ||
          event.url.startsWith(`/${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.MAGIC_LINK_SENT}`) ||
          event.url.startsWith(`/${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.REGISTER}`) ||
          event.url.startsWith(`/${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.REGISTER_ORGANIZATION}`) ||
          event.url.startsWith(`/${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.ACCEPT_TERMS}`) ||
          event.url.startsWith(`/${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.CREATE_ORGANIZATION}`) ||
          event.url.startsWith(`/${MAIN_ROUTES.MAGIC_LINK}`) ||
          event.url.startsWith(`/${MAIN_ROUTES.LOGIN}`);

        this.setPageTitle();
        this.posthogService.trackPageView();
        this.setGoogleAnaliticsPage(event);
      });
  }

  private watchNavigationStartEvents(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationStart),
        takeUntil(this.destroyed$),
      )
      .subscribe((ev: NavigationStart) => {
        if (this.loadingRoutes.indexOf(ev.url) > -1) {
          this.ui.routeLoading = true;
        }
      });
  }

  private setPageTitle(): void {
    this.globalTitleService.setTitle(this.getNestedRouteTitles().join(' | '));
  }

  private getNestedRouteTitles(): string[] {
    let currentRoute = this.router.routerState.root.firstChild;
    const titles: string[] = [];

    while (currentRoute) {
      if (currentRoute.snapshot.routeConfig.data?.title) {
        this.translateService
          .get(`routes.${currentRoute.snapshot.routeConfig.data?.title}`)
          .pipe(take(1))
          .subscribe((title) => {
            titles.push(title);
          });
      }
      currentRoute = currentRoute.firstChild;
    }

    if (!titles.length) {
      titles.push('TalkToLoop');
    }

    return titles;
  }

  private getLastRouteTitle(): string {
    let currentRoute = this.router.routerState.root.firstChild;

    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;
    }

    return currentRoute.snapshot.data?.title || 'unknown';
  }

  private setGoogleAnaliticsPage(event: NavigationEnd): void {
    const fetchedUserProfile = this.profileService.userProfile;
    const routeConfig = findActiveTopLevelRouteConfig(this.router, event.url.substring(1).split('/')?.shift());

    if (fetchedUserProfile) {
      // If user logged in, set analytics
      this.setAnalyticsPageView(fetchedUserProfile, event);
    } else {
      if (routeConfig?.canActivate) {
        // If activated route is guarded by canActivate and user is not logged in try to get userProfile
        this.profileService
          .getProfile()
          .pipe(take(1))
          .subscribe(
            (user: IUserProfileAPI) => this.setAnalyticsPageView(user, event),
            () => this.setAnalyticsPageView({ user: 'anonymous' } as any, event),
          );
      } else {
        // If user is not logged in and activated route doesn't need log-in check
        this.setAnalyticsPageView({ user: 'anonymous' } as any, event);
      }
    }
  }

  private setAnalyticsPageView(user: IUserProfileAPI, event: NavigationEnd): void {
    this.googleAnalyticsService.pageView(event.url, this.getLastRouteTitle(), undefined, {
      user: {
        nickname: user.nickname,
        email: user.email,
        id: user.id,
      },
    });
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
