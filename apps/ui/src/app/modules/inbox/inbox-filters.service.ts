import { Injectable, OnDestroy } from '@angular/core';
import { INBOX_ROUTES } from '@app/app-routing.props';
import { CommentService } from '@app/core/services/api/comment/comment.service';
import { ISupportedLanguage } from '@app/core/services/api/meta-data/model/supported-language.model';
import { IBasePaginatedAPI } from '@app/core/services/api/model/response/base-paginated-api.model';
import { IModeratorCommentBrief } from '@app/core/services/api/model/response/get-comments-moderator.model';
import { IModeratorStoryBrief } from '@app/core/services/api/model/response/get-stories-moderator.model';
import { StoryService } from '@app/core/services/api/story/story.service';
import { SupportedLanguagesService } from '@app/core/services/locales/supported-languages.service';
import { inboxFiltersConfig } from '@app/modules/inbox/inbox-filters.config';
import { SubNavigationRoute, SubNavigationRouteCountChange } from '@app/shared/components/subnavigation-bar/subnavigation.model';
import { prepareFilterDataFromSessionStorage } from '@shared/utils/filters.utils';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { INBOX_FILTER_TAB } from './inbox-filter-tab.enum';

export interface IGetPendingStoriesFiltersAPI {
  channel?: string[];
  country?: string[];
  language?: string[];
  inboxSearchText?: string
}

@Injectable()
export class InboxFiltersService implements OnDestroy {
  filters$ = new Subject<IGetPendingStoriesFiltersAPI>();
  metaChange$ = new Subject<SubNavigationRouteCountChange>();

  private activeFiltersObject: IGetPendingStoriesFiltersAPI;
  private currentInboxFilterTab: INBOX_FILTER_TAB;
  private destroyed$ = new Subject<void>();
  private inboxRoutes: SubNavigationRoute[] = [];
  private languages: ISupportedLanguage[] = [];

  constructor(
    private languageService: SupportedLanguagesService,
    private storyService: StoryService,
    private commentService: CommentService,
  ) {
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

  getCurrentInboxFilterTab(): INBOX_FILTER_TAB {
    return this.currentInboxFilterTab;
  }

  setCurrentInboxFilterTab(value: INBOX_FILTER_TAB): void {
    this.currentInboxFilterTab = value;
  }

  setInboxRoutes(value: SubNavigationRoute[] = []): void {
    this.inboxRoutes = value;
  }

  private updateOtherItemsMeta(value: SubNavigationRouteCountChange): void {
    const otherRoutes = this.inboxRoutes.filter((route: SubNavigationRoute) => route.path !== value.path && !route.blocked);

    otherRoutes.forEach((nav: SubNavigationRoute) => {
      this.fetchDataForMeta(nav.path as INBOX_ROUTES);
    });
  }

  private fetchDataForMeta(path: INBOX_ROUTES): void {
    const filters = prepareFilterDataFromSessionStorage(inboxFiltersConfig);

    switch (path) {
      case INBOX_ROUTES.REPLIES:
        this.fetchRepliesMeta(filters);
        break;
      case INBOX_ROUTES.STORIES:
        this.fetchStoriesMeta(filters);
        break;
    }
  }

  private fetchLanguageDirectory(): void {
    this.languageService
      .getSupportedLanguages()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data: ISupportedLanguage[]) => (this.languages = data));
  }

  private fetchStoriesMeta(filters: IGetPendingStoriesFiltersAPI): void {
    this.storyService
      .getPostsModerator(filters, 1, 1, 'desc')
      .pipe(takeUntil(this.destroyed$), take(1))
      .subscribe((data: IBasePaginatedAPI<IModeratorStoryBrief>) =>
        this.metaChange$.next({ path: INBOX_ROUTES.STORIES, count: data.meta.totalItems }),
      );
  }

  private fetchRepliesMeta(filters: IGetPendingStoriesFiltersAPI): void {
    this.commentService
      .getCommentsModerator(filters, 1, 1, 'desc')
      .pipe(takeUntil(this.destroyed$), take(1))
      .subscribe((data: IBasePaginatedAPI<IModeratorCommentBrief>) =>
        this.metaChange$.next({ path: INBOX_ROUTES.REPLIES, count: data.meta.totalItems }),
      );
  }
}
