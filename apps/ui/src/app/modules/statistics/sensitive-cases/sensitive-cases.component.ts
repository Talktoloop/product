import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core'; // OnInit
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IGetStatisticsCasesFiltersAPI, IGetStatisticsFiltersAPI } from '@app/core/services/statistics/model/statistics-filters.model';
import { StatisticsService } from '@app/core/services/statistics/statistics.service';
import { BaseComponent } from '@app/shared/components/base.component';
// import { UIService } from '@app/core/services/ui/ui.service';
// import { StatisticsCountService } from '@app/modules/statistics/statistics-count.service';
// import { IExtraSummary } from '@app/shared/components/charts/bar-stacked-by-step-chart/bar-stacked-by-step-chart.component';
// import { colorsSad, colorsSecondary, colorsThird, qualityColors } from '@app/shared/components/charts/config/defaults.config';
// import { ITextGrid } from '@app/shared/components/charts/text-grid/text-grid.component';
import { IGetStoriesFiltersAPI } from '@core/services/api/model/request/get-story.model';
import { FiltersService } from '@core/services/filters/filters.service';
// import { TranslateService } from '@ngx-translate/core';
// import { left, Placement } from '@popperjs/core';
import { IFilterV2 } from '@shared/components/filters-section-v2/filter.model';
import {
  CheckboxFilterData,
  CheckboxListFilterData,
  CheckboxTabsFilterData,
} from '@shared/components/filters-section-v2/filters-controls-data.model';
import { CasesFilters, casesFiltersConfig } from '@shared/components/filters-section-v2/filters.config';
import { prepareFilterDataFromSessionStorage } from '@shared/utils/filters.utils';
// import { getTimeWithUnit } from '@shared/utils/hours-converter';
import { cloneDeep } from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-sensitive-cases',
  templateUrl: './sensitive-cases.component.html',
  styleUrls: ['./sensitive-cases.component.scss'],
})
export class SensitiveCasesComponent extends BaseComponent implements OnInit {
  // implements OnInit
  iframeURL: SafeResourceUrl;
  // qualityColors = qualityColors;
  private filteringData: IGetStatisticsFiltersAPI;
  // postTimeline: IPostTimeline[];
  // timelinePalette = colorsSecondary;
  // sadPalette = colorsSad;
  // casesReceived: ITextGrid;
  // averageTimeTaken: ITextGrid;
  // outcomesOfInvestigation: ITextGrid;
  // outcomesOfInvestigationForChartData: ITextGrid;
  // tooltipPlacement: Placement = left;
  // tooltipPadding = '1.25rem 1.563rem';
  // tooltipWidth = '29rem';
  // tooltipDelay = 100;
  // lockTooltipMobile = false;
  // tooltipOffset = [0, 15];
  // casesInAccountabilityProcess: IStackData[];
  // casesInAccountabilityProcessSettings: IStackedChartSettings = {
  //   title: 'statisticsCases.whatTypeOfCasesInAccountabilityProcess.title',
  //   stackTranslationPrefix: 'statisticsCases.whatTypeOfCasesInAccountabilityProcess.stack.',
  //   categoryTranslationPrefix: 'statisticsCases.whatTypeOfCasesInAccountabilityProcess.category.',
  //   stacks: ['processAndRefer', 'respondToAReferal', 'assessWhetherToInvestigate', 'ongoingInvestigation', 'informingAuthorOfOutcome'],
  //   colorPalette: this.timelinePalette,
  //   titleLineLength: IStackedChartLetterLineLength.Right,
  // };
  // whatTypeOfPeopleReferredToAssistanceReceivedIt: IStackData[];
  // whatTypeOfPeopleReferredToAssistanceReceivedItSettings: IStackedChartSettings = {
  //   title: 'statisticsCases.whatTypeOfPeopleReferredToAssistanceReceivedIt.title',
  //   stackTranslationPrefix: 'statisticsCases.whatTypeOfPeopleReferredToAssistanceReceivedIt.stack.',
  //   categoryTranslationPrefix: 'statisticsCases.whatTypeOfPeopleReferredToAssistanceReceivedIt.category.',
  //   stacks: ['yes', 'yesLongerTerm', 'yesServiceWereAllreadyInPlace', 'noAssistanceOfferedButNotReceived', 'noAssistanceNotRendered'],
  //   colorPalette: this.timelinePalette,
  // };
  // howResponsiveWeAreByStepSettings: IStackedChartSettings = {
  //   title: 'statisticsCases.howResponsiveWeAreByStep.title',
  //   stackTranslationPrefix: 'statisticsCases.howResponsiveWeAreByStep.stack.',
  //   categoryTranslationPrefix: 'statisticsCases.howResponsiveWeAreByStep.category.',
  //   stacks: ['processAndRefer', 'respondToAReferral', 'assessWhetherToInvestigate', 'ongoingInvestigation', 'informingAuthorOfOutcome'],
  //   colorPalette: colorsThird,
  //   xAxis: {
  //     showAxis: false,
  //     showLabels: false,
  //     showPointer: true,
  //     showPointerLabel: false,
  //   },
  // };
  // howResponsiveWeAreByStep: {
  //   bars: IStackedTimeline[];
  //   extraSummary: IExtraSummary;
  // };

  // whatTypeOfOrganizationReceivingAllegation: IStackData[];
  // whatTypeOfOrganizationReceivingAllegationSettings: IStackedChartSettings = {
  //   title: 'statisticsCases.whatTypeOfOrganizationReceivingAllegation.title',
  //   stackTranslationPrefix: 'statisticsCases.whatTypeOfOrganizationReceivingAllegation.stack.',
  //   categoryTranslationPrefix: 'statisticsCases.whatTypeOfOrganizationReceivingAllegation.category.',
  //   stacks: [
  //     'governmentAuthorities',
  //     'nationalArmedForces',
  //     'privateSector',
  //     'nationalCommunityBasedOrganisation',
  //     'communityMember',
  //     'internationalOrganisation',
  //     'other',
  //   ],
  //   colorPalette: this.timelinePalette,
  // };
  // survivorAge: IStackData[];
  // survivorAgeSettings: IStackedChartSettings = {
  //   title: 'statisticsCases.survivorAge.title',
  //   stackTranslationPrefix: 'statisticsCases.survivorAge.stack.',
  //   categoryTranslationPrefix: 'statisticsCases.survivorAge.category.',
  //   stacks: ['0', '1', '2', '3', '4', '5', '6'],
  //   colorPalette: this.timelinePalette,
  // };
  // survivorGender: IStackData[];
  // survivorGenderSettings: IStackedChartSettings = {
  //   title: 'statisticsCases.survivorGender.title',
  //   stackTranslationPrefix: '',
  //   categoryTranslationPrefix: 'statisticsCases.survivorAge.category.',
  //   stacks: ['gender.female', 'gender.male', 'gender.nonBinary', 'statistics.ageGender.na'],
  //   colorPalette: this.timelinePalette,
  //   yAxis: {
  //     showAxis: true,
  //     showLabels: true,
  //     showPointer: true,
  //     showPointerLabel: false,
  //   },
  // };
  // whoIsSharingSensitiveStories: IStackData[];
  // whoIsSharingSensitiveStoriesSettings: IStackedChartSettings = {
  //   title: 'statisticsCases.whoIsSharingSensitiveStories.title',
  //   stackTranslationPrefix: 'statisticsCases.whoIsSharingSensitiveStories.stack.',
  //   categoryTranslationPrefix: 'statisticsCases.whoIsSharingSensitiveStories.category.',
  //   stacks: ['survivor', 'witness', 'orgPersonnel', 'friendOrRelativeOfSurvivor', 'other'],
  //   colorPalette: this.timelinePalette,
  // };

  filtersConfig$ = new BehaviorSubject<IFilterV2<CasesFilters>[]>(null);

  constructor(
    private statisticsService: StatisticsService,
    // public statisticsCountService: StatisticsCountService,
    // public ui: UIService,
    private datePipe: DatePipe,
    // private translateService: TranslateService,
    private filtersService: FiltersService,
    private sanitizer: DomSanitizer,
    private http: HttpClient,
  ) {
    super();

  }

  baseMetabaseUrl: string;

  populateIFrame() {
    this.statisticsService.getSensitiveStoriesSignedUrl(prepareFilterDataFromSessionStorage(casesFiltersConfig)).subscribe((data) => {
      this.baseMetabaseUrl = data.url;

      this.iframeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseMetabaseUrl);
    });
  }

  ngOnInit(): void {
    this.populateIFrame();
    this.refreshData(prepareFilterDataFromSessionStorage(casesFiltersConfig));
    this.filtersService.filtersChanged$.pipe(takeUntil(this.destroyed$)).subscribe(() => {
      this.refreshData(this.filtersService.userFilters);
      this.populateIFrame();
    });

    this.filtersService.casesFiltersData$.pipe(take(1), takeUntil(this.destroyed$)).subscribe((filtersData) => {
      this.filtersConfig$.next(
        cloneDeep(casesFiltersConfig).map((singleConfig) => {
          switch (singleConfig.internalName) {
            case CasesFilters.CASE_TYPE:
              return {
                ...singleConfig,
                data: { data: filtersData.caseType, titleKey: 'caseTypes.label' } as CheckboxFilterData,
              };
            case CasesFilters.LOCATION:
              return { ...singleConfig, data: { data: filtersData.countries } as CheckboxFilterData };
            case CasesFilters.DEMOGRAPHIC:
              return {
                ...singleConfig,
                data: [
                  {
                    data: filtersData.ages,
                    translationKey: 'filtersV2.age.label',
                    controlName: 'casesAge',
                  },
                  {
                    data: filtersData.genders,
                    translationKey: 'filtersV2.gender.label',
                    controlName: 'casesGender',
                  },
                  // {
                  //   data: filtersData.disability,
                  //   translationKey: 'filtersV2.disability.label',
                  //   controlName: 'casesDifficulty',
                  // },
                ] as CheckboxTabsFilterData,
              };
            case CasesFilters.ORGANISATION_TYPE:
              return {
                ...singleConfig,
                data: { data: filtersData.organisationType, titleKey: 'organisationType.label' } as CheckboxFilterData,
              };
            // case CasesFilters.THEMATIC_AREA:
            //   return {
            //     ...singleConfig,
            //     data: { data: filtersData.thematic } as CheckboxListFilterData,
            //   };
            // case CasesFilters.OUTCOMES_OF_INVESTIGATION:
            //   return {
            //     ...singleConfig,
            //     data: { data: filtersData.caseType, titleKey: 'outcomesOfInvestigation.label' } as CheckboxFilterData,
            //   };
            case CasesFilters.ASSISTANCE_REFERRED:
              return {
                ...singleConfig,
                data: {
                  data: filtersData.referredForAssistance,
                  titleKey: 'assistanceReferred.label',
                } as CheckboxFilterData,
              };
            default:
              return singleConfig;
          }
        }),
      );
    });
  }

  // openPdf(): void {
  //   window.open('assets/statistics/files/pdf-sector-recommended-timelines.pdf', '_blank');
  // }

  private prepareFilteringData(filterData: IGetStoriesFiltersAPI): IGetStatisticsFiltersAPI {
    Object.keys(filterData).forEach((key) => !filterData[key] && delete filterData[key]);
    return filterData;
  }

  protected refreshData(filterData?: IGetStatisticsCasesFiltersAPI): void {
    this.filteringData = filterData ? this.prepareFilteringData(filterData) : null;
    // const filters = filterData || {};

    // this.statisticsService
    //   .getCasesTimeline({ ...filters, ...this.prepareFromTo() })
    //   .pipe(takeUntil(this.destroyed$))
    //   .subscribe((r) => (this.postTimeline = r));

    //   this.statisticsService
    //     .getHowResponsiveWeAre(filters)
    //     .pipe(takeUntil(this.destroyed$))
    //     .subscribe((r) => {
    //       this.howResponsiveWeAreByStep = {
    //         bars: [
    //           ...r.steps.map((s) => ({ code: s.type, type: s.type, values: s.values })),
    //           { code: 'closedCases', values: [null, null, null, null, null], type: 'closedCases' },
    //         ],
    //         extraSummary: {
    //           code: 'closedCases',
    //           value: r.closedCases,
    //           index: 3,
    //         },
    //       };
    //     });

    //   this.statisticsService
    //     .getAverageTimeTakenPerCaseType(filters)
    //     .pipe(takeUntil(this.destroyed$))
    //     .subscribe((r) => {
    //       this.averageTimeTaken = {
    //         table: [
    //           ...r.map((item) => ({
    //             header: `statisticsCases.averageTimeByCase.types.${item.type}`,
    //             customContent: `${getTimeWithUnit(item.average).value} ${this.translateService.instant(
    //               'global.unitsLong.' + getTimeWithUnit(item.average).unit,
    //             )}
    //            ${this.translateService.instant('statisticsCases.averageTimeByCase.onAverageToClose')} ${
    //               item.count
    //             } ${this.translateService.instant('global.unitsLong.cases')}`,
    //           })),
    //         ],
    //       };
    //     });

    //   this.statisticsService
    //     .getTypeOfCasesAccountability(filterData)
    //     .pipe(takeUntil(this.destroyed$))
    //     .subscribe((r) => (this.casesInAccountabilityProcess = r));

    //   this.statisticsService
    //     .getOutcomesOfInvestigation(filters)
    //     .pipe(takeUntil(this.destroyed$))
    //     .subscribe((r) => {
    //       this.outcomesOfInvestigation = {
    //         table: [
    //           ...Object.keys(r)
    //             .filter((key) => key !== 'completedInvestigations')
    //             .map((key) => ({
    //               header: `statisticsCases.outcomesOfInvestigation.types.${key}`,
    //               text: 'global.unitsLong.investigations',
    //               value: r[key],
    //               headerValue: r['completedInvestigations'],
    //             })),
    //         ],
    //       };
    //     });

    //   this.statisticsService
    //     .getWhatTypeOfPeopleReferredToAssistanceReceivedIt(filterData)
    //     .pipe(takeUntil(this.destroyed$))
    //     .subscribe((r) => (this.whatTypeOfPeopleReferredToAssistanceReceivedIt = r));

    //   this.statisticsService
    //     .getWhatTypeOfOrganizationReceivingAllegation(filterData)
    //     .pipe(takeUntil(this.destroyed$))
    //     .subscribe((r) => (this.whatTypeOfOrganizationReceivingAllegation = r));

    //   this.statisticsService
    //     .getSurvivorAge(filterData)
    //     .pipe(takeUntil(this.destroyed$))
    //     .subscribe((r) => (this.survivorAge = r));

    //   this.statisticsService
    //     .getSurvivorGender(filters)
    //     .pipe(takeUntil(this.destroyed$))
    //     .subscribe((r) => (this.survivorGender = r));

    //   this.statisticsService
    //     .getWhoIsSharingSensitiveStories(filters)
    //     .pipe(takeUntil(this.destroyed$))
    //     .subscribe((r) => (this.whoIsSharingSensitiveStories = r));
    // }

    // private prepareColorBasedOnData(data: number, key: string): string {
    //   const defaultCheck = data < 2 ? qualityColors[0] : data < 7 ? qualityColors[1] : qualityColors[2];

    //   switch (key) {
    //     case 'processAndRefer':
    //       return defaultCheck;
    //     case 'respondToReferral':
    //       return defaultCheck;
    //     case 'assessWhetherToInvestigate':
    //       return data < 42 ? qualityColors[0] : data < 90 ? qualityColors[1] : qualityColors[2]; // less than 6 weeks, between 6 weeks and 3 months, above 3 months
    //     case 'completeInvestigation':
    //       return data < 90 ? qualityColors[0] : data < 730 ? qualityColors[1] : qualityColors[2]; // less than 3 months, between 3 months and 2 years, above 2 years
    //     case 'informTheAuthorOfOutcome':
    //       return data < 2 ? qualityColors[0] : qualityColors[1];
    //     case 'closeCase':
    //       return qualityColors[2];
    //   }
  }

  // getHowResponsiveWeAreInfoLink(): string {
  //   const translationString = this.translateService.instant('statisticsCases.howResponsiveWeAreByStep.infoIcon.content');
  //   return translationString.replace(
  //     '{{infoLink}}',
  //     `<a href="${this.translateService.instant(
  //       '/assets/documents/statistic-cases-help.pdf',
  //     )}" target="_blank">${this.translateService.instant('statisticsCases.howResponsiveWeAreByStep.infoIcon.seeHere')}</a>`,
  //   );
  // }

  // private prepareFromTo(): { from: string; to: string } {
  //   const to = this.datePipe.transform(new Date(), 'yyyy-MM');
  //   const fromDate = new Date();
  //   const monthsInYearExcluded = 11;
  //   fromDate.setMonth(fromDate.getMonth() - monthsInYearExcluded);
  //   const from = this.datePipe.transform(fromDate, 'yyyy-MM');
  //   return { from, to };
  // }
}
