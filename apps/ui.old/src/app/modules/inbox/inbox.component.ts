import { AdminDataService } from '@admin/services/admin-data.service';

import { Component, OnInit, ViewChild } from '@angular/core';

import { NavigationEnd, Router } from '@angular/router';

import { INBOX_ROUTES, MAIN_ROUTES } from '@app/app-routing.props';

import { InboxFilters, inboxFiltersConfig, SensitiveFilters } from '@app/modules/inbox/inbox-filters.config';

import { InboxFiltersService } from '@app/modules/inbox/inbox-filters.service';

import { ISupportedLanguage } from '@core/services/api/meta-data/model/supported-language.model';

import { IBaseEntityDN } from '@core/services/api/model/response/base-entity.model';

import { FiltersService } from '@core/services/filters/filters.service';

import { SupportedLanguagesService } from '@core/services/locales/supported-languages.service';

import { UIService } from '@core/services/ui/ui.service';

import { TranslateService } from '@ngx-translate/core';

import { BaseComponent } from '@shared/components/base.component';

import { IFilterV2 } from '@shared/components/filters-section-v2/filter.model';

import { CheckboxFilterData } from '@shared/components/filters-section-v2/filters-controls-data.model';

import { SubnavigationBarComponent } from '@shared/components/subnavigation-bar/subnavigation-bar.component';

import { SubNavigationRoute } from '@shared/components/subnavigation-bar/subnavigation.model';

import { prepareFilterDataFromSessionStorage, prepareStoryStatusFilterOptions } from '@shared/utils/filters.utils';

import { BehaviorSubject, Observable } from 'rxjs';

import { filter, map, take, takeUntil } from 'rxjs/operators';

import { SET_MAX_WIDTH_ALLOWED_QUERY_PARAMS } from '@app/shared/consts/set-max-width';
import { ChannelFilters } from '../outbox/outbox-filter/outbox-filter.model';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
  providers: [InboxFiltersService],
})
export class InboxComponent extends BaseComponent implements OnInit {
  inboxRoutes: SubNavigationRoute[] = [];
  setMaxWidth: boolean;
  filtersConfig$ = new BehaviorSubject<IFilterV2<InboxFilters>[]>(null);

  @ViewChild('subNavigationBar') subNavigationBar: SubnavigationBarComponent;
  isFiltersVisible = false;

  private setMaxWidthPaths = [`/${MAIN_ROUTES.INBOX}/${INBOX_ROUTES.REPLIES}`, `/${MAIN_ROUTES.INBOX}/${INBOX_ROUTES.STORIES}`];

  constructor(
    private translateService: TranslateService,
    private adminDataService: AdminDataService,
    private router: Router,
    private inboxFilterService: InboxFiltersService,
    private languageService: SupportedLanguagesService,
    public ui: UIService,
    private filtersService: FiltersService,
  ) {
    super();

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroyed$),
      )
      .subscribe((event: NavigationEnd) => {
        this.isFiltersVisible = event.url.split('/').length <= 3;
        this.setMaxWidth =
          this.setMaxWidthPaths.includes(event.url) ||
          (!!this.setMaxWidthPaths.find((path) => event.url.startsWith(`${path}?`)) &&
            !!SET_MAX_WIDTH_ALLOWED_QUERY_PARAMS.find((queryParam) => event.url.includes(queryParam)));
      });
  }

  ngOnInit(): void {
    this.getInboxSectionsQuantity();
    this.watchFiltersChange();

    this.filtersConfig$.next(inboxFiltersConfig);
    this.prepareFiltersData();
  }

  private watchFiltersChange(): void {
    this.filtersService.filtersChanged$.pipe(takeUntil(this.destroyed$)).subscribe(() => this.getInboxSectionsQuantity());
  }

  private generateRoutes(): void {
    this.inboxRoutes = [];

    for (const route in INBOX_ROUTES) {
      if (Object.prototype.hasOwnProperty.call(INBOX_ROUTES, route)) {
        // TODO temporary action to block
        const blocked = route.toLowerCase() !== INBOX_ROUTES.STORIES && route.toLowerCase() !== INBOX_ROUTES.REPLIES;

        const newRoute: SubNavigationRoute = {
          name: this.translateService.instant(`inbox.navigation.${INBOX_ROUTES[route]}`),
          path: INBOX_ROUTES[route],
          exact: false,
          count: this.getRouteQuantity(INBOX_ROUTES[route]),
          blocked,
          inbox: true,
        };

        this.inboxRoutes.push(newRoute);
      }
    }

    this.inboxFilterService.setInboxRoutes(this.inboxRoutes);
  }

  private getInboxSectionsQuantity(): void {
    this.adminDataService.downloadPendingQuantity(prepareFilterDataFromSessionStorage(inboxFiltersConfig));
    this.adminDataService.quantityData$.subscribe((quantityData) => {
      if (quantityData) {
        this.generateRoutes();
      }
    });
  }

  private getRouteQuantity(route: string): number {
    switch (route) {
      case INBOX_ROUTES.STORIES:
        return this.adminDataService.quantityData$.getValue().numberOfStories;
      case INBOX_ROUTES.REPLIES:
        return this.adminDataService.quantityData$.getValue().numberOfComments;
      default:
        return null;
    }
  }

  private prepareFiltersData(): void {
    this.prepareLanguagesOptions().subscribe((languages) =>
      this.filtersConfig$.next(inboxFiltersConfig.map((config) => this.prepareSingleFilterData(config, languages))),
    );
  }

  private prepareSingleFilterData(config: IFilterV2<InboxFilters>, languages: IBaseEntityDN[]): IFilterV2<InboxFilters> {
    switch (config.internalName) {
      case InboxFilters.LANGUAGE:
        config.data = { data: languages, titleKey: '' } as CheckboxFilterData;
        break;
      case InboxFilters.CHANNEL:
        config.data = { data: this.prepareChannelOptions(), titleKey: '' };
        break;
      case InboxFilters.STATUS:
        config.data = { data: prepareStoryStatusFilterOptions(), titleKey: '' };
        break;
      case InboxFilters.SENSITIVE:
        config.data = { data: this.prepareStorySensitiveFilterOptions(), titleKey: '' };
    }
    return config;
  }

  private prepareChannelOptions(): IBaseEntityDN[] {
    return ChannelFilters.map(({ id, name }) => ({
      id: `${id}`,
      checked: false,
      code: `filtersV2.channel.${name}`,
      name: name,
      content: '',
    }));
  }

  private prepareStorySensitiveFilterOptions(): IBaseEntityDN[] {
    return SensitiveFilters.map(({ id, name }) => ({
      id: `${id}`,
      checked: false,
      code: name,
      name: name,
      content: '',
    }))
  }

  private prepareLanguagesOptions(): Observable<IBaseEntityDN[]> {
    return this.languageService.getSupportedLanguages().pipe(
      take(1),
      map((languages) => languages.sort((a, b) => a.language.localeCompare(b.language))),
      map((languages: ISupportedLanguage[]) => {
        const languageList = [];

        for (const language of languages) {
          languageList.push({
            code: `languages.${language.language}`,
            id: `${language.id}`,
            checked: false,
            name: language.language,
            content: '',
          } as IBaseEntityDN);
        }

        return languageList;
      }),
    );
  }
}
