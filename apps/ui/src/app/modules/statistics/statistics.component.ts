import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { STATISTICS_ROUTES } from '@app/app-routing.props';
import { StatisticsCountService } from '@app/modules/statistics/statistics-count.service';
import { ProfileService } from '@core/services/api/profile/profile.service';
import { StoryService } from '@core/services/api/story/story.service';
import { FiltersService } from '@core/services/filters/filters.service';
import { TranslateService } from '@ngx-translate/core';
import { BaseComponent } from '@shared/components/base.component';
import { casesFiltersConfig, openStoriesFiltersConfig } from '@shared/components/filters-section-v2/filters.config';
import { prepareFilterDataFromSessionStorage } from '@shared/utils/filters.utils';
import { environment } from '@env/environment';
import { forkJoin } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

export interface ICount {
  count: number;
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent extends BaseComponent implements OnInit {
  statisticsRoutes = [
    {
      name: this.translateService.instant('statistics.navigation.stories'),
      path: STATISTICS_ROUTES.OPEN_STORIES,
      exact: false,
      count: 0,
    },
    {
      name: this.translateService.instant('statistics.navigation.cases'),
      path: STATISTICS_ROUTES.SENSITIVE_CASES,
      exact: false,
      count: 0,
    },
  ];
  isCases = false;

  constructor(
    private translateService: TranslateService,
    private router: Router,
    private storyService: StoryService,
    private cd: ChangeDetectorRef,
    private filterService: FiltersService,
    private statisticsCountService: StatisticsCountService,
    private profileService: ProfileService,
  ) {
    super();
    let previousRoute = null;
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroyed$),
      )
      .subscribe((eventEnd: NavigationEnd) => {
        if (eventEnd.urlAfterRedirects !== previousRoute) {
          this.isCases = eventEnd.url.split('/')[2] === STATISTICS_ROUTES.SENSITIVE_CASES;
          this.refreshCounts();
        }
        previousRoute = eventEnd.urlAfterRedirects;
      });
  }

  ngOnInit(): void {
    // Statistics temporarily hidden for non-admins — redirect to landing page.
    // To re-enable for all, remove the if-block and restore the navbar/mobile-nav links.
    if (!this.profileService.isAdmin) {
      window.location.href = environment.landingPageUrl;
      return;
    }

    this.filterService.filtersChanged$.pipe(takeUntil(this.destroyed$)).subscribe(() => this.refreshCounts());
  }

  refreshCounts(): void {
    forkJoin([
      this.storyService.openStoriesCount(prepareFilterDataFromSessionStorage(openStoriesFiltersConfig)),
      this.storyService.casesCount(prepareFilterDataFromSessionStorage(casesFiltersConfig)),
    ])
      .pipe(takeUntil(this.destroyed$))
      .subscribe((val) => {
        this.statisticsCountService.count.next({ stories: val[0]?.count, cases: val[1]?.count });
        this.statisticsRoutes = [
          ...this.statisticsRoutes.map((r) => ({
            ...r,
            count: (r.path === STATISTICS_ROUTES.OPEN_STORIES ? val[0] : val[1])?.count,
          })),
        ];
        this.cd.detectChanges();
      });
  }
}
