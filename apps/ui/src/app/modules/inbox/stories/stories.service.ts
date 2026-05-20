import { Injectable } from '@angular/core';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { Router } from '@angular/router';
import { INBOX_ROUTES, MAIN_ROUTES } from '@app/app-routing.props';
import { UIService } from '@app/core/services/ui/ui.service';
import { inboxFiltersConfig } from '@app/modules/inbox/inbox-filters.config';
import { IGetPendingStoriesFiltersAPI } from '@app/modules/inbox/inbox-filters.service';
import { IBasePaginatedAPI } from '@core/services/api/model/response/base-paginated-api.model';
import { IModeratorStoryBrief } from '@core/services/api/model/response/get-stories-moderator.model';
import { StoryService } from '@core/services/api/story/story.service';
import { FiltersService } from '@core/services/filters/filters.service';
import { TranslateService } from '@ngx-translate/core';
import { MobileTableAction, MobileTableDataRow } from '@shared/components/mobile-table/mobile-table.model';
import { prepareFilterDataFromSessionStorage } from '@shared/utils/filters.utils';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { PaginationService } from './pagination/pagination.service';

@Injectable()
export class StoriesService {
  dataSource$ = new BehaviorSubject(null);
  currentPage = 1;
  listLimit = 50;
  scrollPos$ = new BehaviorSubject(0);
  isLoading$ = new BehaviorSubject(true);
  noMoreItems$ = new BehaviorSubject(false);
  listElements$ = new BehaviorSubject(new Array<IModeratorStoryBrief>());
  sortElements$ = new BehaviorSubject(new Array<string>());
  activeSort$ = new BehaviorSubject(null);
  filters: IGetPendingStoriesFiltersAPI = {};
  lastVisitedId$ = new BehaviorSubject(null);
  constructor(
    private router: Router,
    private storyService: StoryService,
    private translateService: TranslateService,
    private filtersService: FiltersService,
    private paginationService: PaginationService,
    private uiService: UIService,
  ) {
    this.filtersService.filtersChanged$.pipe().subscribe(() => {
      this.currentPage = 1;
      if (this.router.url.includes(`${MAIN_ROUTES.INBOX}/${INBOX_ROUTES.STORIES}`)) {
        this.fetchData();
      }
    });

    this.fetchData();
  }

  onScroll(): void {
    if (this.isLoading$.getValue() || this.noMoreItems$.getValue()) {
      return;
    }

    this.loadMoreData();
  }

  sortChange(sort: string): void {
    this.activeSort$.next(sort);
    this.currentPage = 1;
    this.fetchData();
  }

  setNewListItems(items: IModeratorStoryBrief[], totalItems: number, overrideExistingItems = false): void {
    const newItems = this.prepareListElementsWithCustomAction(items);
    this.listElements$.next(
      overrideExistingItems ? newItems : this.currentPage === 1 ? newItems : this.listElements$.getValue().concat(newItems),
    );
    this.dataSource$.next(new MatTableDataSource(this.listElements$.getValue()));
    !overrideExistingItems && this.verifyTotalItems(totalItems);
  }

  loadPage(page: number, limit: number): void {
    this.currentPage = page;
    this.listLimit = limit;
    this.fetchData();
  }

  private loadMoreData(): void {
    this.currentPage++;
    this.fetchData();
  }

  private fetchData(): void {
    this.isLoading$.next(true);
    this.paginationService.currentPage = this.currentPage;
    this.paginationService.itemsPerPage = this.listLimit;
    this.filters = prepareFilterDataFromSessionStorage(inboxFiltersConfig);

    this.storyService
      .getPostsModerator(this.filters, this.currentPage, this.listLimit, this.activeSort$.getValue() || 'desc')
      .pipe(finalize(() => this.isLoading$.next(false)))
      .subscribe({
        next: (data: IBasePaginatedAPI<IModeratorStoryBrief>) => {
          this.paginationService.init(data);
          this.setNewListItems(data.items, data.meta.totalItems, !this.uiService.mobileView);
        },
        error: () => this.paginationService.restoreStateAfterError(),
      });
  }

  private prepareListElementsWithCustomAction(items: IModeratorStoryBrief[]): MobileTableDataRow<IModeratorStoryBrief>[] {
    return items.map((item) => ({
      ...item,
      customActions: [new MobileTableAction('inbox.table.actions.review')],
    })) as MobileTableDataRow<IModeratorStoryBrief>[];
  }

  private verifyTotalItems(totalItems: number): void {
    this.noMoreItems$.next(this.listElements$.getValue().length === totalItems);
  }

  deleteElement(processedStoryId: string) {
    this.listElements$.next(this.listElements$.getValue().filter((story: IModeratorStoryBrief) => story.id !== processedStoryId));
    this.dataSource$.next(new MatTableDataSource(this.listElements$.getValue()));
  }
}
