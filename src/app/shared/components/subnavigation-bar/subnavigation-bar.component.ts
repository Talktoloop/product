import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UIService } from '@app/core/services/ui/ui.service';
import { merge } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { BaseComponent } from '../base.component';
import { SubNavigationRoute } from './subnavigation.model';

@Component({
  selector: 'loop-subnavigation-bar',
  templateUrl: './subnavigation-bar.component.html',
  styleUrls: ['./subnavigation-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubnavigationBarComponent extends BaseComponent implements OnInit {
  isExpanded = false;
  activeRoute: SubNavigationRoute;

  @Input () statisticsBeta = false;

  @Input() set routes(values: SubNavigationRoute[]) {
    this._routes = values;

    if (this.routes.length > 1 && this.ui.mobileView && this._isFirstRoutesFetch) {
      this.isExpanded = false;
    }

    this.sortRoutesWithoutActiveAsFirst();
    this._isFirstRoutesFetch = false;
  }

  get routes(): SubNavigationRoute[] {
    return this._routes;
  }

  _routes: SubNavigationRoute[];
  _isFirstRoutesFetch = true;

  constructor(public ui: UIService, private router: Router, private cd: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
    console.log(this.statisticsBeta)
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroyed$),
      )
      .subscribe(() => {
        this.sortRoutesWithoutActiveAsFirst();
      });

    merge(this.ui.mobileView$, this.ui.desktopView$)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => this.cd.detectChanges());
  }

  toogle(event: Event, isFirst: boolean): void {
    if (isFirst) {
      event.stopPropagation();
      event.preventDefault();

      this.isExpanded = !this.isExpanded;
    } else {
      this.isExpanded = false;
    }
  }

  sortRoutesWithoutActiveAsFirst(): void {
    if (this.ui.mobileView) {
      const active = (this.routes || []).find((route: SubNavigationRoute) => this.router.url.includes(route?.path));
      this.activeRoute = active;

      const routes = this.routes.filter((route) => route !== this.activeRoute);
      routes.unshift(this.activeRoute);
      this._routes = routes;
    }
  }
}
