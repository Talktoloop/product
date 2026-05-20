import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AUTH_ROUTES, INBOX_ROUTES, MAIN_ROUTES } from '@app/app-routing.props';
import { environmentUtil } from '@app/shared/utils/environment';
import { MENU_LINKS } from '@core/header/header.constants';
import { getHeaderLinkTranslationKey } from '@core/header/header.utils';
import { ProfileService } from '@core/services/api/profile/profile.service';
import { FiltersService } from '@core/services/filters/filters.service';
import { PANEL_CONTENT, UIService } from '@core/services/ui/ui.service';
import { BaseComponent } from '@shared/components/base.component';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends BaseComponent implements OnInit, AfterViewInit, OnDestroy {
  readonly environmentUtil = environmentUtil;
  readonly menuLinks = MENU_LINKS;
  readonly MAIN_ROUTES = MAIN_ROUTES;
  private readonly topBannerKey = 'TAML';
  searchFooter;
  Object = Object;
  menuActive = false;
  filtersActive = false;
  searchActive = false;
  modalOpened = false;
  isInUserSection = false;
  windowScrolled = false;
  asideMenuOpen = false;
  isScrollingDown: boolean;
  panelTypes = PANEL_CONTENT;
  inboxRoutes = INBOX_ROUTES;
  showHeader$: Observable<boolean>;
  topNotificationClosed = !!this.cookieService.get(this.topBannerKey);

  @ViewChild('header') headerElementRef: ElementRef;

  constructor(
    public profileService: ProfileService,
    public ui: UIService,
    public filtersService: FiltersService,
    private router: Router,
    private cd: ChangeDetectorRef,
    private cookieService: CookieService,
  ) {
    super();
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroyed$),
      )
      .subscribe(() => {
        this.closeAllMenus();
        this.updateIconsActiveness();
      });
    this.setupHeaderVisibility();
  }

  ngOnInit(): void {
    this.updateIconsActiveness();
    this.ui.uiUpdated$.pipe(takeUntil(this.destroyed$)).subscribe(() => {
      this.cd.markForCheck();
    });
  }

  ngAfterViewInit(): void {
    const sidebarFooter = document.getElementsByClassName('bx--side-nav__footer');
    if (sidebarFooter && sidebarFooter.length) {
      // eslint-disable-next-line
      for (let i = 0; i < sidebarFooter.length; i++) {
        sidebarFooter[i].addEventListener('click', this.menuCloseListener.bind(this), false);
      }
    }
    this.hideHeaderOnScrollDown();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if (this.ui.isWindowScrolled !== this.windowScrolled) {
      this.windowScrolled = this.ui.isWindowScrolled;
      this.cd.markForCheck();
    }
  }

  menuCloseListener(): void {
    this.closeAllMenus();
  }

  closeAllMenus(): void {
    this.menuActive = false;
    this.filtersActive = false;
    this.searchActive = false;
  }

  updateIconsActiveness(): void {
    this.isInUserSection =
      this.router.url.indexOf(`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.MAGIC_LINK_LOGIN}`) > -1;
    this.cd.markForCheck();
  }

  // Temporary hiding header with this method for new story v2
  // TODO: OL-570 create new header
  setupHeaderVisibility(): void {
    this.showHeader$ = this.router.events.pipe(
      filter((ev) => ev instanceof NavigationEnd),
      map(
        (ev: NavigationEnd) =>
          !ev.url.startsWith(`/${MAIN_ROUTES.NEW_STORY}`) &&
          // !ev.url.startsWith(`/${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.MAGIC_LINK_LOGIN}`) &&
          !ev.url.startsWith(`/${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.MAGIC_LINK_SENT}`) &&
          !ev.url.startsWith(`/${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.REGISTER}`) &&
          !ev.url.startsWith(`/${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.REGISTER_ORGANIZATION}`) &&
          !ev.url.startsWith(`/${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.ACCEPT_TERMS}`) &&
          !ev.url.startsWith(`/${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.CREATE_ORGANIZATION}`) &&
          !ev.url.startsWith(`/${MAIN_ROUTES.MAGIC_LINK}`) &&
          !ev.url.startsWith(`/${MAIN_ROUTES.LOGIN}`)
      ),
    );
  }

  handleHamburgerClick(): void {
    this.asideMenuOpen = !this.asideMenuOpen;
    if (this.asideMenuOpen) {
      this.ui.addBodyClass('overflow-hidden');
    } else {
      this.ui.removeBodyClass('overflow-hidden');
    }
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    this.ui.scrollingDown$.unsubscribe();
    this.filtersService.lastSearch = '';
  }

  getHeaderRouteCode(linkKey: string): string {
    return getHeaderLinkTranslationKey(linkKey);
  }

  private hideHeaderOnScrollDown() {
    this.ui.scrollingDown$.subscribe((isScrollingDown: boolean) => {
      this.isScrollingDown = isScrollingDown;
    });
  }
}
