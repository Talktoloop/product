import { Injectable } from '@angular/core';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { Router } from '@angular/router';
import { INBOX_ROUTES, MAIN_ROUTES } from '@app/app-routing.props';
import { INBOX_FILTER_TAB } from '@app/modules/inbox/inbox-filter-tab.enum';
import { inboxFiltersConfig } from '@app/modules/inbox/inbox-filters.config';
import { IGetPendingStoriesFiltersAPI, InboxFiltersService } from '@app/modules/inbox/inbox-filters.service';
import { CommentService } from '@core/services/api/comment/comment.service';
import { IBasePaginatedAPI } from '@core/services/api/model/response/base-paginated-api.model';
import { IModeratorCommentBrief } from '@core/services/api/model/response/get-comments-moderator.model';
import { FiltersService } from '@core/services/filters/filters.service';
import { MobileTableDataRow } from '@shared/components/mobile-table/mobile-table.model';
import { prepareFilterDataFromSessionStorage } from '@shared/utils/filters.utils';
import { BehaviorSubject, Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';

@Injectable()
export class RepliesService {
  loading$ = new BehaviorSubject(false);
  destroyed$ = new Subject();
  sortElements: string[] = ['desc', 'asc'];
  currentPage = 1;
  listLimit = 15;
  filters = {};
  scrollPos$ = new BehaviorSubject(0);
  activeSort$ = new BehaviorSubject<string>(this.sortElements[0]);
  listElements$ = new BehaviorSubject<MobileTableDataRow<IModeratorCommentBrief>[]>(null);
  dataSource$ = new BehaviorSubject(<MatTableDataSource<IModeratorCommentBrief>>null);
  lastVisitedId$ = new BehaviorSubject(null);
  noMoreItems$ = new BehaviorSubject(false);

  sortChange(sort: string): void {
    this.activeSort$.next(sort);
    this.scrollPos$.next(0);
    this.currentPage = 1;
    this.fetchData();
  }

  onRepliesScroll() {
    if (this.loading$.getValue() || this.noMoreItems$.getValue()) {
      return;
    }

    this.loadMoreData();
  }

  constructor(
    private router: Router,
    private commentService: CommentService,
    private inboxFiltersService: InboxFiltersService,
    private filtersService: FiltersService,
  ) {
    if (this.inboxFiltersService.getCurrentInboxFilterTab() !== INBOX_FILTER_TAB.REPLIES) {
      this.inboxFiltersService.setCurrentInboxFilterTab(INBOX_FILTER_TAB.REPLIES);
    }
    this.filtersService.filtersChanged$.pipe(takeUntil(this.destroyed$)).subscribe(() => {
      this.currentPage = 1;
      if (this.router.url.includes(`${MAIN_ROUTES.INBOX}/${INBOX_ROUTES.REPLIES}`)) {
        this.fetchData();
      }
    });

    this.fetchData();
    this.watchFiltersChange();
  }

  private fetchData(): void {
    this.loading$.next(true);

    this.filters = prepareFilterDataFromSessionStorage(inboxFiltersConfig);

    this.commentService
      .getCommentsModerator(this.filters, this.currentPage, this.listLimit, this.activeSort$.getValue())
      .pipe(
        takeUntil(this.destroyed$),
        finalize(() => this.loading$.next(false)),
      )
      .subscribe((data: IBasePaginatedAPI<IModeratorCommentBrief>) => {
        this.listElements$.next(this.currentPage === 1 ? data.items : this.listElements$.getValue().concat(data.items));
        this.dataSource$.next(new MatTableDataSource(this.listElements$.getValue()));
        this.verifyTotalItems(data.meta.totalItems);
      });
  }

  private loadMoreData(): void {
    this.currentPage++;
    this.fetchData();
  }

  private verifyTotalItems(totalItems: number): void {
    this.noMoreItems$.next(this.listElements$.getValue().length === totalItems);
  }

  private watchFiltersChange(): void {
    this.inboxFiltersService.filters$.pipe(takeUntil(this.destroyed$)).subscribe((filters: IGetPendingStoriesFiltersAPI) => {
      this.scrollPos$.next(0);
      this.filters = filters;
      this.currentPage = 1;
      this.fetchData();
    });
  }

  deleteElement(processedReplyId: string) {
    this.listElements$.next(this.listElements$.getValue().filter((comment: IModeratorCommentBrief) => comment.id !== processedReplyId));
    this.dataSource$.next(new MatTableDataSource(this.listElements$.getValue()));
  }
}
