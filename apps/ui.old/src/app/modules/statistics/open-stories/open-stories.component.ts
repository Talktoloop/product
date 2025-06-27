import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  // IAgeGenderBreakdown,
  // IDifficultyBreakdown,
  IGetStatisticsFiltersAPI,
} from '@app/core/services/statistics/model/statistics-filters.model';
// import { UIService } from '@app/core/services/ui/ui.service';
// import { StatisticsCountService } from '@app/modules/statistics/statistics-count.service';
// import { ITextBox } from '@app/shared/components/charts/text-boxes/text-boxes.component';
// import { ITextGrid } from '@app/shared/components/charts/text-grid/text-grid.component';
// import { getTimeWithUnit } from '@app/shared/utils/hours-converter';
import { FiltersService } from '@core/services/filters/filters.service';
import { StatisticsService } from '@core/services/statistics/statistics.service';
// import { left, Placement } from '@popperjs/core';
import { BaseComponent } from '@shared/components/base.component';
// import { colors } from '@shared/components/charts/config/defaults.config';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IFilterV2 } from '@shared/components/filters-section-v2/filter.model';
import { openStoriesFiltersConfig, StoriesFilters } from '@shared/components/filters-section-v2/filters.config';
import { prepareFilterDataFromSessionStorage, prepareStoriesFilterData } from '@shared/utils/filters.utils';
import { BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-open-stories',
  templateUrl: './open-stories.component.html',
  styleUrls: ['./open-stories.component.scss'],
})
export class OpenStoriesComponent extends BaseComponent implements OnInit, AfterViewInit {
  iframeURL: SafeResourceUrl;
  filteringData: IGetStatisticsFiltersAPI;
  // postTimeline: IPostTimeline[];
  // barChart: IStoriesRepliesGroupped[];
  // repliesChartData: ITextGrid;
  // responseTimeChartData: ITextBox[];
  // storiesPerThematicArea: IThematicStacked[];
  // storiesPerThematicAreaSettings: IStackedChartSettings = {
  //   title: 'statistics.thematicArea.title',
  //   stackTranslationPrefix: 'thematic.',
  //   categoryTranslationPrefix: 'category.',
  //   stacks: ['health', 'foodSecurity', 'wash', 'shelter', 'education', 'protection', 'governance', 'crossCutting'],
  //   colorPalette: colors,
  // };
  // difficultyBreakdown: IDifficultyBreakdown[];
  // difficultyBreakdownChartData: ITextGrid;
  // ageGenderBreakdown: IAgeGenderBreakdown;

  // tooltipPlacement: Placement = left;
  // tooltipPadding = '1.25rem 1.563rem';
  // tooltipWidth = '29rem';
  // tooltipDelay = 100;
  // lockTooltipMobile = false;
  // tooltipOffset = [0, 15];

  filtersConfig$ = new BehaviorSubject<IFilterV2<StoriesFilters>[]>(null);

  constructor(
    private statisticsService: StatisticsService,
    // public statisticsCountService: StatisticsCountService,
    // public ui: UIService,
    private sanitizer: DomSanitizer,
    private http: HttpClient,
    private datePipe: DatePipe,
    private filtersService: FiltersService,
  ) // private storyService: StoryService,
  {
    super();
  }

  baseMetabaseUrl: string;

  ngAfterViewInit() {
    this.fetchMetabaseUrl();
  }

  private fetchMetabaseUrl() {
    this.statisticsService.getOpenStoriesSignedUrl(prepareFilterDataFromSessionStorage(openStoriesFiltersConfig)).subscribe((data) => {
      this.baseMetabaseUrl = data.url;

      this.iframeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseMetabaseUrl);
    });
  }

  ngOnInit(): void {
    this.fetchMetabaseUrl();
    this.filteringData = this.prepareFromTo();
    this.filtersService.filtersChanged$.pipe(takeUntil(this.destroyed$)).subscribe(() => this.refreshData(this.filtersService.userFilters));

    prepareStoriesFilterData(this.destroyed$, this.filtersService, this.filtersConfig$);

    this.refreshData(prepareFilterDataFromSessionStorage(openStoriesFiltersConfig));
  }

  private prepareFromTo(): { from: string; to: string } {
    const to = this.datePipe.transform(new Date(), 'yyyy-MM');
    const fromDate = new Date();
    const monthsInYearExcluded = 11;
    fromDate.setMonth(fromDate.getMonth() - monthsInYearExcluded);
    const from = this.datePipe.transform(fromDate, 'yyyy-MM');
    return { from, to };
  }

  private prepareFilteringData(filterData: IGetStatisticsFiltersAPI): IGetStatisticsFiltersAPI {
    Object.keys(filterData).forEach((key) => !filterData[key] && delete filterData[key]);
    return filterData;
  }

  refreshData(filterData?: IGetStatisticsFiltersAPI): void {
    this.filteringData = filterData ? this.prepareFilteringData(filterData) : {};
    this.filtersService.initUserFilters(this.filteringData);
    //   this.statisticsService
    //     .getOpenPostsTimeline({
    //       ...this.filteringData,
    //       ...this.prepareFromTo(),
    //     })
    //     .pipe(takeUntil(this.destroyed$))
    //     .subscribe((r) => {
    //       this.postTimeline = r;
    //     });
    //   this.statisticsService
    //     .getRepliesStatistics(this.filteringData)
    //     .pipe(takeUntil(this.destroyed$))
    //     .subscribe((r) => {
    //       const avgRespTime = getTimeWithUnit(r.avgResponseTime);
    //       this.repliesChartData = {
    //         summary: [
    //           {
    //             value: r.percentOfStoriesWithResponded,
    //             unit: '%',
    //             text: 'statistics.replies.summary.text1',
    //           },
    //           {
    //             value: r.percentOfStoriesWithOrganisationResponded,
    //             unit: '%',
    //             text: 'statistics.replies.summary.text2',
    //           },
    //         ],
    //         table: [
    //           {
    //             header: 'statistics.replies.table.header1',
    //             value: avgRespTime.value,
    //             text: `global.unitsLong.${avgRespTime.unit}`,
    //           },
    //           {
    //             header: 'statistics.replies.table.header2',
    //             value: r.countOfFeedbacks,
    //             text: 'statistics.replies.units.stories',
    //           },
    //           {
    //             header: 'statistics.replies.table.header3',
    //             value: r.countOfResponses,
    //             text: 'statistics.replies.units.replies',
    //           },
    //           {
    //             header: 'statistics.replies.table.header4',
    //             value: r.uniqueAuthors,
    //             text: 'statistics.replies.units.authors',
    //           },
    //           {
    //             header: 'statistics.replies.table.header5',
    //             value: r.countOfTaggedOrganisation,
    //             text: 'statistics.replies.units.organizations',
    //           },
    //         ],
    //       };
    //     });

    //   this.statisticsService
    //     .getStoriesAndRepliesByCategory(this.filteringData)
    //     .pipe(takeUntil(this.destroyed$))
    //     .subscribe((r) => {
    //       this.barChart = r;
    //     });

    //   this.statisticsService
    //     .getAverageResponseTimePerCategory(this.filteringData)
    //     .pipe(
    //       takeUntil(this.destroyed$),
    //       map((v) =>
    //         v.map((d) => ({
    //           ...d,
    //           value: getTimeWithUnit(d.average),
    //           translation: `category.${d.code}`,
    //         })),
    //       ),
    //     )
    //     .subscribe((r) => {
    //       this.responseTimeChartData = r;
    //     });

    //   this.statisticsService
    //     .getStoriesPerThematicArea(this.filteringData)
    //     .pipe(takeUntil(this.destroyed$))
    //     .subscribe((r) => {
    //       this.storiesPerThematicArea = r;
    //     });

    //   this.statisticsService
    //     .getDifficultyBreakdown(this.filteringData)
    //     .pipe(takeUntil(this.destroyed$))
    //     .subscribe((r) => {
    //       this.difficultyBreakdown = r;
    //       this.difficultyBreakdownChartData = {
    //         table: this.difficultyBreakdown.map((d) => ({
    //           header: `statistics.difficulty.${d.code}`,
    //           value: d.count,
    //           text: 'statistics.difficulty.units.stories',
    //           extraText: `(${d.percent}%)`,
    //         })),
    //       };
    //     });

    //   this.statisticsService
    //     .getAgeGenderBreakdown(this.filteringData)
    //     .pipe(takeUntil(this.destroyed$))
    //     .subscribe((r) => {
    //       this.ageGenderBreakdown = r;
    //     });
  }
}
