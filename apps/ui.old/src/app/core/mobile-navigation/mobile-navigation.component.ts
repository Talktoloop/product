import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationStart, Router, RouterEvent } from '@angular/router';
import { MAIN_ROUTES } from '@app/app-routing.props';
import { navigationSvg } from '@core/mobile-navigation/navigation.svg';
import { ProfileService } from '@core/services/api/profile/profile.service';
import { UIService } from '@core/services/ui/ui.service';
import { environmentUtil } from '@shared/utils/environment';

@Component({
  selector: 'app-mobile-navigation',
  templateUrl: './mobile-navigation.component.html',
  styleUrls: ['./mobile-navigation.component.scss'],
})
export class MobileNavigationComponent implements OnInit {
  readonly document = document;
  readonly MAIN_ROUTES = MAIN_ROUTES;
  currentRoute: string;
  newStoryMobileButtonBlackList: string[] = [MAIN_ROUTES.NEW_STORY, MAIN_ROUTES.INBOX, MAIN_ROUTES.OUTBOX];
  isProhibitedOnThisRoute: boolean;
  isRouteWithNewStoryButtonHidden: boolean;
  navigationSvg = this.sanitizer.bypassSecurityTrustHtml(navigationSvg);
  preloadInProgress: boolean;

  constructor(public profileService: ProfileService, public ui: UIService, private router: Router, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.disableNavigationOnNewStoryRoute();
    document.documentElement.style.setProperty('--navigationleft', 'white');
    document.documentElement.style.setProperty('--navigationright', 'white');
  }

  private disableNavigationOnNewStoryRoute(): void {
    let isInitial = true;

    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        const mobileNavigationBlacklist = ['/new-story', '/pending-recording/record'];

        this.currentRoute = event.url.split('/')[1];
        if (this.currentRoute === MAIN_ROUTES.STORIES) {
          document.documentElement.style.setProperty('--navigationright', 'white');
          document.documentElement.style.setProperty('--navigationleft', '#d6d0df'); //$loop-purple-200
        } else if (this.currentRoute === MAIN_ROUTES.STATISTICS) {
          document.documentElement.style.setProperty('--navigationleft', 'white');
          document.documentElement.style.setProperty('--navigationright', '#d6d0df'); //$loop-purple-200
        } else {
          document.documentElement.style.setProperty('--navigationleft', 'white');
          document.documentElement.style.setProperty('--navigationright', 'white');
        }
        this.isProhibitedOnThisRoute = mobileNavigationBlacklist.includes(event.url) || event.url.includes(mobileNavigationBlacklist[1]);
        this.isRouteWithNewStoryButtonHidden = this.newStoryMobileButtonBlackList.includes(event.url.substring(1).split('/')[0]);

        if (!this.profileService.isAdmin && isInitial) {
          this.preloadInProgress = true;
          isInitial = false;
        } else {
          this.preloadInProgress = false;
        }
      }
    });
  }

  shouldDisplayNewStoryButton(isMobileView: boolean, isAdmin: boolean, isTabletView: boolean): boolean {
    const isModeratorMobileView = isMobileView && isAdmin;
    return (!this.isProhibitedOnThisRoute && !this.isRouteWithNewStoryButtonHidden && isModeratorMobileView) || isTabletView;
  }

  isTestingEnv(): boolean {
    return environmentUtil.isLocal || environmentUtil.isDevelopment || environmentUtil.isStaging;
  }
}
