import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MAIN_ROUTES, OUTBOX_ROUTES } from '@app/app-routing.props';
import { BaseComponent } from '@app/shared/components/base.component';
import { SubnavigationBarComponent } from '@app/shared/components/subnavigation-bar/subnavigation-bar.component';
import { SubNavigationRoute } from '@app/shared/components/subnavigation-bar/subnavigation.model';
import { SET_MAX_WIDTH_ALLOWED_QUERY_PARAMS } from '@app/shared/consts/set-max-width';
import { UIService } from '@core/services/ui/ui.service';
import { TranslateService } from '@ngx-translate/core';
import { filter, takeUntil } from 'rxjs/operators';
import { OutboxFiltersService } from './outbox-filters.service';
import { AdminDataService } from '../admin/services/admin-data.service';

@Component({
  selector: 'app-outbox',
  templateUrl: './outbox.component.html',
  styleUrls: ['./outbox.component.scss'],
})
export class OutboxComponent extends BaseComponent implements OnInit {
  @ViewChild('subNavigationBar') subNavigationBar: SubnavigationBarComponent;
  outboxRoutes: SubNavigationRoute[] = [];
  isMainListPath = false;
  setMaxWidth: boolean;

  private outboxSectionsQuantity: any;
  private setMaxWidthPaths = [
    `/${MAIN_ROUTES.OUTBOX}/${OUTBOX_ROUTES.IN_PROGRESS}`,
    `/${MAIN_ROUTES.OUTBOX}/${OUTBOX_ROUTES.PENDING_RECORDING}`,
  ];

  constructor(
    private translateService: TranslateService,
    private router: Router,
    private outboxFilterService: OutboxFiltersService,
    private adminDataService: AdminDataService,
    public ui: UIService,
  ) {
    super();
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroyed$),
      )
      .subscribe((event: NavigationEnd) => {
        this.setMaxWidth =
          this.setMaxWidthPaths.includes(event.url) ||
          (!!this.setMaxWidthPaths.find((path) => event.url.startsWith(`${path}?`)) &&
            !!SET_MAX_WIDTH_ALLOWED_QUERY_PARAMS.find((queryParam) => event.url.includes(queryParam)));
      });
  }

  ngOnInit(): void {
    this.getOutboxSectionsQuantity();
    this.setFiltersVisibility();
  }

  private generateRoutes(): void {
    this.outboxRoutes = [];

    for (const route in OUTBOX_ROUTES) {
      if (Object.prototype.hasOwnProperty.call(OUTBOX_ROUTES, route)) {
        const newRoute: SubNavigationRoute = {
          name: this.translateService.instant(`outbox.navigation.${OUTBOX_ROUTES[route]}`),
          path: OUTBOX_ROUTES[route],
          exact: false,
          count: this.getRouteQuantity(OUTBOX_ROUTES[route]) || null,
          blocked: OUTBOX_ROUTES[route] === 'archive',
        };

        this.outboxRoutes.push(newRoute);
      }
    }

    this.outboxFilterService.setOutboxRoutes(this.outboxRoutes);
  }

  private getOutboxSectionsQuantity(): void {
    // TODO
    this.adminDataService.downloadOutgoingQuantity()
    this.adminDataService.outgoingQuantityData$.subscribe((quantityData) => {
      if (quantityData) {
        this.generateRoutes();
      }
    });
  }

  private getRouteQuantity(route: string): number {
    switch (route) {
      case OUTBOX_ROUTES.PENDING_RECORDING:
        return this.adminDataService.outgoingQuantityData$?.value?.numberOfPendingRecordingComments || 0;
      case OUTBOX_ROUTES.IN_PROGRESS:
        return this.adminDataService.outgoingQuantityData$?.value?.numberOfScheduledComments || 0;
      // case OUTBOX_ROUTES.Archive:
      //   return this.outboxSectionsQuantity?.value || 0;
      default:
        return null;
    }
  }

  private setFiltersVisibility(): void {
    const checkIsMainListPath = () => {
      const lastUrlFragment = this.router.url.split('/').pop();
      return (
        lastUrlFragment.startsWith(OUTBOX_ROUTES.PENDING_RECORDING) ||
        lastUrlFragment.startsWith(OUTBOX_ROUTES.IN_PROGRESS) ||
        lastUrlFragment.startsWith(OUTBOX_ROUTES.Archive)
      );
    };

    this.isMainListPath = checkIsMainListPath();

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroyed$),
      )
      .subscribe(() => (this.isMainListPath = checkIsMainListPath()));
  }
}
