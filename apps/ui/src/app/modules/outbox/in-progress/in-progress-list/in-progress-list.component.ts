import { Component, OnInit } from '@angular/core';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { NavigationExtras, Router } from '@angular/router';
import { MAIN_ROUTES, OUTBOX_ROUTES } from '@app/app-routing.props';
import { inProgressColumns } from '@app/modules/outbox/in-progress/in-progress-list/in-progress-columns.const';
import { OUTBOX_FILTER_TAB } from '@app/modules/outbox/outbox-filter-tab.enum';
import { OutboxPendingFilters } from '@app/modules/outbox/outbox-filter/outbox-filter.model';
import { IGetOutboxFiltersAPI, OutboxFiltersService } from '@app/modules/outbox/outbox-filters.service';
import { pendingRecordingFiltersConfig } from '@app/modules/outbox/pending-recording/pending-recording-list/pending-recording-filters.config';
import { OutboxTable } from '@app/modules/outbox/shared/outbox-table.model';
import { CommentService } from '@core/services/api/comment/comment.service';
import { IBaseEntityDN } from '@core/services/api/model/response/base-entity.model';
import { IBasePaginatedAPI } from '@core/services/api/model/response/base-paginated-api.model';
import { IModeratorStoryBrief } from '@core/services/api/model/response/get-stories-moderator.model';
import { IScheduledRecordComment } from '@core/services/api/model/response/scheduled-record-comments.model';
import { FiltersService } from '@core/services/filters/filters.service';
import { SupportedLanguagesService } from '@core/services/locales/supported-languages.service';
import { UIService } from '@core/services/ui/ui.service';
import { TranslateService } from '@ngx-translate/core';
import { BaseComponent } from '@shared/components/base.component';
import { IFilterV2 } from '@shared/components/filters-section-v2/filter.model';
import { CheckboxFilterData } from '@shared/components/filters-section-v2/filters-controls-data.model';
import { MobileTableAction, MobileTableActionCallback } from '@shared/components/mobile-table/mobile-table.model';
import { DataUtils } from '@shared/utils/data.utils';
import {
  prepareChannelFilterOptions,
  prepareFilterDataFromSessionStorage,
  prepareLanguageFilterOptions,
} from '@shared/utils/filters.utils';
import { BehaviorSubject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: './in-progress-list.component.html',
  styleUrls: ['./in-progress-list.component.scss'],
})
export class InProgressListComponent extends BaseComponent implements OnInit {
  dataSource: MatTableDataSource<IScheduledRecordComment>;
  columns: OutboxTable[] = inProgressColumns;
  displayedColumns: string[] = this.columns.map((column: OutboxTable) => column.key);
  listActions: MobileTableAction<any>[] = [new MobileTableAction(this.translateService.instant('comment.previewReply'))];
  DATE_FORMAT = 'dd/MM/yy h:mm a';
  filtersConfig$ = new BehaviorSubject<IFilterV2<OutboxPendingFilters>[]>(null);
  currentPage = 1;
  listLimit = 15;
  loading = false;
  noMoreItems = false;
  listElements: IScheduledRecordComment[] = [];
  sortElements: string[] = ['desc', 'asc'];
  activeSort: string = this.sortElements[0];
  filters: IGetOutboxFiltersAPI = {};

  constructor(
    public ui: UIService,
    public dataUtils: DataUtils,
    private router: Router,
    private filtersService: FiltersService,
    private commentService: CommentService,
    private translateService: TranslateService,
    private outboxFiltersService: OutboxFiltersService,
    private languageService: SupportedLanguagesService,
  ) {
    super();

    if (this.outboxFiltersService.getCurrentOutboxFilterTab() !== OUTBOX_FILTER_TAB.SCHEDULED) {
      this.outboxFiltersService.setCurrentOutboxFilterTab(OUTBOX_FILTER_TAB.SCHEDULED);
    }
  }

  private static prepareSingleFilterData(
    config: IFilterV2<OutboxPendingFilters>,
    languages: IBaseEntityDN[],
  ): IFilterV2<OutboxPendingFilters> {
    switch (config.internalName) {
      case OutboxPendingFilters.TARGET_LANGUAGE:
        config.data = { data: languages, titleKey: '' } as CheckboxFilterData;
        break;
      case OutboxPendingFilters.CHANNEL:
        config.data = { data: prepareChannelFilterOptions(), titleKey: '' };
        break;
    }
    return config;
  }

  ngOnInit(): void {
    this.fetchData();

    this.filtersConfig$.next(pendingRecordingFiltersConfig);
    this.prepareFiltersData();

    this.filtersService.filtersChanged$.pipe(takeUntil(this.destroyed$)).subscribe(() => {
      this.currentPage = 1;
      this.fetchData();
    });
  }

  getColumnHeader(column: string): string {
    const translation = this.columns.find((element: OutboxTable) => element.key === column)?.label;

    return translation ? this.translateService.instant(translation) : 'Unknown';
  }

  onScroll(): void {
    if (this.loading || this.noMoreItems) {
      return;
    }

    this.loadMoreData();
  }

  rowClicked(item: IModeratorStoryBrief): void {
    this.navigateToRecordDetails(item.id);
  }

  onActionClick(callback: MobileTableActionCallback<any>): void {
    if (callback.action === this.listActions[0]) {
      this.navigateToRecordDetails(callback.element.id);
    }
  }

  sortChange(sort: string): void {
    this.activeSort = sort;
    this.currentPage = 1;
    this.fetchData();
  }

  private navigateToRecordDetails(itemId: string): void {
    const extras: NavigationExtras = {
      queryParams: {
        inProgress: true,
      },
    };
    this.router.navigate([MAIN_ROUTES.OUTBOX, OUTBOX_ROUTES.PENDING_RECORDING, 'record', itemId], extras);
  }

  private loadMoreData(): void {
    this.currentPage++;
    this.fetchData();
  }

  private fetchData(): void {
    this.loading = true;

    this.filters = prepareFilterDataFromSessionStorage(pendingRecordingFiltersConfig);

    this.commentService
      .getScheduledRecordingComments(this.filters, this.currentPage, this.listLimit, this.activeSort)
      .pipe(
        takeUntil(this.destroyed$),
        finalize(() => (this.loading = false)),
      )
      .subscribe((data: IBasePaginatedAPI<IScheduledRecordComment>) => {
        this.listElements = this.currentPage === 1 ? data.items : this.listElements.concat(data.items);
        this.dataSource = new MatTableDataSource(this.listElements);
        this.verifyTotalItems(data.meta.totalItems);
      });
  }

  private verifyTotalItems(totalItems: number): void {
    this.noMoreItems = this.listElements.length === totalItems;
  }

  private prepareFiltersData(): void {
    prepareLanguageFilterOptions(this.languageService).subscribe((languages) =>
      this.filtersConfig$.next(
        pendingRecordingFiltersConfig.map((config) => InProgressListComponent.prepareSingleFilterData(config, languages)),
      ),
    );
  }
}
