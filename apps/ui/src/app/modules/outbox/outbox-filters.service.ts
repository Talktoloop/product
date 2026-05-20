import { Injectable, OnDestroy } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { OUTBOX_ROUTES } from '@app/app-routing.props';
import { ISupportedLanguage } from '@app/core/services/api/meta-data/model/supported-language.model';
import { SupportedLanguagesService } from '@app/core/services/locales/supported-languages.service';
import { pendingRecordingFiltersConfig } from '@app/modules/outbox/pending-recording/pending-recording-list/pending-recording-filters.config';
import { SubNavigationRoute, SubNavigationRouteCountChange } from '@app/shared/components/subnavigation-bar/subnavigation.model';
import { prepareFilterDataFromSessionStorage } from '@shared/utils/filters.utils';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { OUTBOX_FILTER_TAB } from './outbox-filter-tab.enum';

export interface IGetOutboxFiltersAPI {
  channel?: string[];
  country?: string[];
  targetLanguage?: string[];
}

@Injectable()
export class OutboxFiltersService implements OnDestroy {
  filters$ = new Subject<IGetOutboxFiltersAPI>();
  resetFilters$ = new Subject<void>();
  metaChange$ = new Subject<SubNavigationRouteCountChange>();

  private activeFiltersObject: IGetOutboxFiltersAPI;
  private currentOutboxFilterTab: OUTBOX_FILTER_TAB;
  private destroyed$ = new Subject<void>();
  private outboxRoutes: SubNavigationRoute[] = [];
  private languages: ISupportedLanguage[] = [];

  constructor(private languageService: SupportedLanguagesService) {
    this.fetchLanguageDirectory();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }

  updateItemsMeta(value: SubNavigationRouteCountChange): void {
    this.metaChange$.next(value);

    this.updateOtherItemsMeta(value);
  }

  getCurrentOutboxFilterTab(): OUTBOX_FILTER_TAB {
    return this.currentOutboxFilterTab;
  }

  setCurrentOutboxFilterTab(value: OUTBOX_FILTER_TAB): void {
    this.currentOutboxFilterTab = value;
  }

  updateFilters(value?: IGetOutboxFiltersAPI): void {
    this.filters$.next(value);

    if (!value) {
      this.activeFiltersObject = value;
    }
  }

  getActiveFiltersObject(): IGetOutboxFiltersAPI {
    return this.activeFiltersObject;
  }

  mapForm(form: UntypedFormGroup): IGetOutboxFiltersAPI {
    return { ...form.value } as IGetOutboxFiltersAPI;
  }

  setOutboxRoutes(value: SubNavigationRoute[] = []): void {
    this.outboxRoutes = value;
  }

  private updateOtherItemsMeta(value: SubNavigationRouteCountChange): void {
    const otherRoutes = this.outboxRoutes.filter((route: SubNavigationRoute) => route.path !== value.path && !route.blocked);

    otherRoutes.forEach((nav: SubNavigationRoute) => {
      this.fetchDataForMeta(nav.path);
    });
  }

  private fetchDataForMeta(path: string): void {
    const filters = prepareFilterDataFromSessionStorage(pendingRecordingFiltersConfig);

    switch (path) {
      case OUTBOX_ROUTES.PENDING_RECORDING:
        // TODO
        break;
      case OUTBOX_ROUTES.IN_PROGRESS:
        // TODO
        break;
      case OUTBOX_ROUTES.Archive:
        // TODO
        break;
    }
  }

  private fetchLanguageDirectory(): void {
    this.languageService
      .getSupportedLanguages()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data: ISupportedLanguage[]) => (this.languages = data));
  }
}
