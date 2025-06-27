import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MAIN_ROUTES } from '@app/app-routing.props';
import { COMMENT_TYPE } from '@core/services/api/comment/comment.service';
import { IStory } from '@core/services/api/model/story.model';
import { StoryService, STORY_TYPE } from '@core/services/api/story/story.service';
import { FiltersService } from '@core/services/filters/filters.service';
import { UIService } from '@core/services/ui/ui.service';
import { TranslateService } from '@ngx-translate/core';
import { openStoriesFiltersConfig } from '@shared/components/filters-section-v2/filters.config';
import { prepareFilterDataFromSessionStorage, normalizeURLParams } from '@shared/utils/filters.utils';
import { sortByBoolean } from '@shared/utils/sorting';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  emptyLoads = 0;
  cachedData = [];
  emptyState = false;
  dismissingFilter = false;
  listLoaded = new Subject();
  todayMS = new Date().valueOf();
  limit$ = new BehaviorSubject(10);
  scrollPos$ = new BehaviorSubject(0);
  isError$ = new BehaviorSubject(false);
  dataStream$ = new BehaviorSubject<Array<IStory>>(new Array<IStory>());
  loading$ = new Subject<boolean>();
  loading = false;
  currentPage$ = new BehaviorSubject(1);
  totalCount$ = new BehaviorSubject(null);
  lastVisitedId$ = new BehaviorSubject(null);
  noMoreStories$ = new BehaviorSubject(false);
  sortElements$ = new BehaviorSubject(['desc', 'asc', 'upvoted']);
  activeSort$ = new BehaviorSubject(this.sortElements$.getValue()[0]);
  type: STORY_TYPE | COMMENT_TYPE = STORY_TYPE.NEW;
  removedObject$ = new BehaviorSubject<string>(null);
  lastStoryOpened$ = new BehaviorSubject<{ storyId: string; index: number } | null>(null);

  constructor(
    private filtersService: FiltersService,
    private ui: UIService,
    private router: Router,
    private storyService: StoryService,
    private toastr: ToastrService,
    private translateService: TranslateService,
  ) {
    normalizeURLParams();

    setTimeout(() => {
      const url = new URL(window.location.href);
      const params = new URLSearchParams(url.search);

      const updatedParams: any = {};
      params.forEach((value, key) => {
        updatedParams[key] = value;
      });

      this.router.navigate([], {
        queryParams: updatedParams,
        queryParamsHandling: 'merge',
        replaceUrl: true,
      });
    }, 50);

    setTimeout(() => {
      this.filtersService.initUserFilters(prepareFilterDataFromSessionStorage(openStoriesFiltersConfig));
    }, 100);

    this.filtersService.filtersChanged$.pipe().subscribe(() => {
      if (this.router.url.includes(MAIN_ROUTES.STORIES)) {
        this.resetState();
      }
    });
    this.loading$.subscribe((isLoading) => {
      this.loading = isLoading;
    });
  }

  resetState(): void {
    this.cachedData = [];
    this.lastVisitedId$.next(null);
    this.scrollPos$.next(0);
    this.currentPage$.next(1);
    this.noMoreStories$.next(false);
    this.isError$.next(false);
    this.totalCount$.next(null);
    this.todayMS = new Date().valueOf();
    this.emptyLoads = 0;
    this.emptyState = false;
    this.dataStream$.next([]);
    this.dismissingFilter = false;
    this.dataStream$.next(null);
    this.loadItems();
  }

  sortChange(sort: string): void {
    this.activeSort$.next(sort);
    this.resetState();
  }

  loadItems(): void {
    let shouldStop = false;
    this.loading$.next(true);
    this.loading$.subscribe((isLoading) => {
      if (isLoading) {
        shouldStop = true;
      }
    });

    this.storyService
      .getStories(this.currentPage$.getValue(), this.limit$.getValue(), this.activeSort$.getValue(), this.filtersService.userFilters)
      .pipe(
        map((response) => {
          this.totalCount$.next(response.meta.totalItems);
          this.filtersService.currentStoriesCount = this.totalCount$.getValue();
          response.items.forEach((item) => {
            item.organisations = sortByBoolean(item.organisations, 'replied');
          });

          return response.items;
        }),
      )
      .subscribe(
        (items) => {
          if (shouldStop) {
            return;
          }
          if (this.currentPage$.getValue() === 1) {
            this.listLoaded.next(true);
          }

          const uniqueMap = new Map();
          const allItems = this.cachedData.concat(items);
          allItems.forEach((item) => {
            if (!uniqueMap.has(item.id)) {
              uniqueMap.set(item.id, item);
            }
          });
          this.cachedData = Array.from(uniqueMap.values());
          this.loading$.next(false);
          this.listLoaded.next(true);
          this.dataStream$.next(this.cachedData);
          this.noMoreStories$.next(this.cachedData.length === this.totalCount$.getValue());
          this.emptinessRefresh();
        },
        () => {
          this.loading$.next(false);
          this.isError$.next(true);
          this.toastr.error(this.translateService.instant(`error.generic.title`), this.translateService.instant('error.generic.subtitle'));
        },
      );
  }

  onScroll(): void {
    if (this.loading || this.noMoreStories$.getValue() || this.isError$.getValue()) {
      return;
    }
    this.loadMoreData();
  }

  emptinessRefresh(): void {
    if (this.cachedData?.length === 0) {
      this.emptyState = true;
    } else {
      if (this.cachedData.length < this.limit$.getValue() && this.emptyLoads < 6) {
        this.onScroll();
      }
    }
  }

  protected loadMoreData(): void {
    this.currentPage$.next(this.currentPage$.getValue() + 1);
    this.loadItems();
  }

  onPostPreviewClicked(storyId: string) {
    this.lastVisitedId$.next(storyId);
    this.scrollPos$.next(this.ui.lastScrollTop$.getValue());
  }

  deleteElement(processedStoryId: string) {
    this.dataStream$.next(this.dataStream$.getValue().filter((story: IStory) => story.id !== processedStoryId));
  }
}
