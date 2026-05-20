import { Component, OnInit } from '@angular/core';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { Router } from '@angular/router';
import { MAIN_ROUTES, OUTBOX_ROUTES } from '@app/app-routing.props';
import { IModeratorStoryBrief } from '@app/core/services/api/model/response/get-stories-moderator.model';
import { IPendingRecordComment } from '@app/core/services/api/model/response/pending-record-comments.model';
import { UIService } from '@app/core/services/ui/ui.service';
import { OutboxPendingFilters } from '@app/modules/outbox/outbox-filter/outbox-filter.model';
import { pendingRecordingFiltersConfig } from '@app/modules/outbox/pending-recording/pending-recording-list/pending-recording-filters.config';
import { BaseComponent } from '@app/shared/components/base.component';
import { MobileTableAction, MobileTableActionCallback } from '@app/shared/components/mobile-table/mobile-table.model';
import { CommentService } from '@core/services/api/comment/comment.service';
import { IBaseEntityDN } from '@core/services/api/model/response/base-entity.model';
import { IBasePaginatedAPI } from '@core/services/api/model/response/base-paginated-api.model';
import { FiltersService } from '@core/services/filters/filters.service';
import { SupportedLanguagesService } from '@core/services/locales/supported-languages.service';
import { TranslateService } from '@ngx-translate/core';
import { IFilterV2 } from '@shared/components/filters-section-v2/filter.model';
import { CheckboxFilterData } from '@shared/components/filters-section-v2/filters-controls-data.model';
import {
  prepareChannelFilterOptions,
  prepareFilterDataFromSessionStorage,
  prepareLanguageFilterOptions,
} from '@shared/utils/filters.utils';
import { BehaviorSubject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { OUTBOX_FILTER_TAB } from '../../outbox-filter-tab.enum';
import { IGetOutboxFiltersAPI, OutboxFiltersService } from '../../outbox-filters.service';
import { OutboxTable } from '../../shared/outbox-table.model';
import { pendingRecordingColumns } from './pending-recording-columns.const';

@Component({
  selector: 'app-pending-recording-list',
  templateUrl: './pending-recording-list.component.html',
  styleUrls: ['./pending-recording-list.component.scss'],
})
export class PendingRecordingListComponent extends BaseComponent implements OnInit {
  dataSource: MatTableDataSource<IPendingRecordComment>;
  columns: OutboxTable[] = pendingRecordingColumns;
  displayedColumns: string[] = this.columns.map((column: OutboxTable) => column.key);
  listActions: MobileTableAction<any>[] = [new MobileTableAction('global.recordReply')];
  DATE_FORMAT = 'dd/MM/yy h:mm a';

  filtersConfig$ = new BehaviorSubject<IFilterV2<OutboxPendingFilters>[]>(null);

  currentPage = 1;
  listLimit = 15;
  loading = false;
  noMoreItems = false;
  listElements: IPendingRecordComment[] = [];
  sortElements: string[] = ['desc', 'asc'];
  activeSort: string = this.sortElements[0];
  filters: IGetOutboxFiltersAPI = {};

  constructor(
    public ui: UIService,
    private router: Router,
    private commentService: CommentService,
    private outboxFiltersService: OutboxFiltersService,
    private translateService: TranslateService,
    private languageService: SupportedLanguagesService,
    private filtersService: FiltersService,
  ) {
    super();

    if (this.outboxFiltersService.getCurrentOutboxFilterTab() !== OUTBOX_FILTER_TAB.PENDING_RECORDING) {
      this.outboxFiltersService.setCurrentOutboxFilterTab(OUTBOX_FILTER_TAB.PENDING_RECORDING);
    }
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
    this.router.navigate([MAIN_ROUTES.OUTBOX, OUTBOX_ROUTES.PENDING_RECORDING, 'record', itemId]);
  }

  private loadMoreData(): void {
    this.currentPage++;
    this.fetchData();
  }

  private fetchData(): void {
    this.loading = true;

    this.filters = prepareFilterDataFromSessionStorage(pendingRecordingFiltersConfig);

    this.commentService
      .getPendingRecordingComments(this.filters, this.currentPage, this.listLimit, this.activeSort)
      .pipe(
        takeUntil(this.destroyed$),
        finalize(() => (this.loading = false)),
      )
      .subscribe((data: IBasePaginatedAPI<IPendingRecordComment>) => {
        this.listElements = this.currentPage === 1 ? data.items : this.listElements.concat(data.items);
        this.dataSource = new MatTableDataSource(this.listElements);
        this.verifyTotalItems(data.meta.totalItems);
        // this.outboxFiltersService.updateItemsMeta
      });
  }

  private verifyTotalItems(totalItems: number): void {
    this.noMoreItems = this.listElements.length === totalItems;
  }

  private prepareFiltersData(): void {
    prepareLanguageFilterOptions(this.languageService).subscribe((languages) =>
      this.filtersConfig$.next(pendingRecordingFiltersConfig.map((config) => this.prepareSingleFilterData(config, languages))),
    );
  }

  private prepareSingleFilterData(config: IFilterV2<OutboxPendingFilters>, languages: IBaseEntityDN[]): IFilterV2<OutboxPendingFilters> {
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
}
