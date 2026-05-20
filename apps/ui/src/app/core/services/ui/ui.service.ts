import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ElementRef, Injectable } from '@angular/core';
import { BREAKPOINTS } from '@shared/utils/breakpoints';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UIService {
  private destroyed$ = new Subject();
  scrollingDown$ = new BehaviorSubject(false);
  uiUpdated$ = new Subject();
  mobileView$ = new BehaviorSubject(false);
  mobileView = false;
  tabletView$ = new BehaviorSubject(false);
  tabletView = false;
  desktopView$ = new BehaviorSubject(false);
  desktopView = false;

  routeLoading = false;
  globalLoading = false;
  locationOverlayShown = false;

  animationStart: boolean;

  lastScrollTop$ = new BehaviorSubject<number>(0);
  uiClicked$ = new Subject<MouseEvent>();
  clearMenu$ = new Subject<ElementRef>();

  constructor(private observer: BreakpointObserver) {
    this.observeScrollingDown();
    this.observer
      .observe([BREAKPOINTS.MOBILE_MAX, BREAKPOINTS.TABLET_MIN, BREAKPOINTS.TABLET_MIN_MAX, BREAKPOINTS.DESKTOP_MIN])
      .pipe(takeUntil(this.destroyed$))
      .subscribe((state: BreakpointState) => {
        this.processBreakpointsState(state);
      });
  }

  private observeScrollingDown(): void {
    fromEvent(window, 'scroll').subscribe(() => {
      const scrollTop = document.documentElement.scrollTop;
      this.lastScrollTop$.next(scrollTop);
      if (Math.abs(this.lastScrollTop$.getValue() - scrollTop) < 1) {
        this.lastScrollTop$.next(scrollTop);
        return;
      }
      this.scrollingDown$.next(
        (scrollTop > this.lastScrollTop$.getValue() && scrollTop > 0) || window.innerHeight + window.scrollY >= document.body.offsetHeight,
      );
    });
  }

  private processBreakpointsState(state: BreakpointState): void {
    this.mobileView = state.breakpoints[BREAKPOINTS.MOBILE_MAX];
    this.tabletView = state.breakpoints[BREAKPOINTS.TABLET_MIN_MAX];
    this.desktopView = state.breakpoints[BREAKPOINTS.DESKTOP_MIN];
    this.tabletView$.next(this.tabletView);
    this.mobileView$.next(this.mobileView);
    this.desktopView$.next(this.desktopView);
  }

  get isWindowScrolled(): boolean {
    return window.pageYOffset > 0;
  }

  showLocationOverlay(): void {
    this.locationOverlayShown = true;
    this.uiUpdated$.next(true);
  }

  hideLocationOverlay(): void {
    this.locationOverlayShown = false;
    this.uiUpdated$.next(true);
  }

  addBodyClass(className: string): void {
    document.getElementsByTagName('body')[0].classList.add(className);
    this.uiUpdated$.next(true);
  }

  removeBodyClass(className: string): void {
    document.getElementsByTagName('body')[0].classList.remove(className);
    this.uiUpdated$.next(true);
  }

  addHtmlClass(className: string): void {
    document.getElementsByTagName('html')[0].classList.add(className);
    this.uiUpdated$.next(true);
  }

  removeHtmlClass(className: string): void {
    document.getElementsByTagName('html')[0].classList.remove(className);
    this.uiUpdated$.next(true);
  }

  removeFromDOM(element: Element): void {
    element?.parentElement?.removeChild(element);
  }

  getBoldPhrase(phrase: string, fullText: string): string {
    const searchPhrase = new RegExp(phrase, 'gi');
    return fullText?.replace(
      searchPhrase,
      `<span class="phrase">${fullText?.slice(fullText?.search(searchPhrase), phrase?.length)}</span>`,
    );
  }

  clearTooltips() {
    const chartTooltip = document.getElementsByClassName('stats-tooltip')?.item(0);
    const appTooltip = document.getElementsByTagName('app-tooltip')?.item(0);
    this.removeFromDOM(chartTooltip);
    this.removeFromDOM(appTooltip);
  }
}

export enum PANEL_CONTENT {
  STORY_DETAILS = 1,
  FILTERS = 2,
}

export interface IPanelContent {
  type: PANEL_CONTENT;
  payload: any;
}
