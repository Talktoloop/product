"use strict";
(self["webpackChunkourloop_ui"] = self["webpackChunkourloop_ui"] || []).push([["src_app_modules_statistics_open-stories_open-stories_module_ts"],{

/***/ 27337:
/*!********************************************************************************!*\
  !*** ./src/app/modules/statistics/open-stories/open-stories-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpenStoriesRoutingModule": () => (/* binding */ OpenStoriesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _open_stories_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./open-stories.component */ 4430);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _open_stories_component__WEBPACK_IMPORTED_MODULE_0__.OpenStoriesComponent,
  data: {
    title: 'openStories'
  }
}];
class OpenStoriesRoutingModule {
  static #_ = this.ɵfac = function OpenStoriesRoutingModule_Factory(t) {
    return new (t || OpenStoriesRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: OpenStoriesRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OpenStoriesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 4430:
/*!***************************************************************************!*\
  !*** ./src/app/modules/statistics/open-stories/open-stories.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpenStoriesComponent": () => (/* binding */ OpenStoriesComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/components/base.component */ 70697);
/* harmony import */ var _shared_components_filters_section_v2_filters_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/components/filters-section-v2/filters.config */ 83985);
/* harmony import */ var _shared_utils_filters_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/utils/filters.utils */ 65197);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_services_statistics_statistics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/statistics/statistics.service */ 42243);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _core_services_filters_filters_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/filters/filters.service */ 86631);
/* harmony import */ var _shared_components_filters_section_v2_filter_section_v2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/filters-section-v2/filter-section-v2.component */ 54791);
// import { left, Placement } from '@popperjs/core';












function OpenStoriesComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "loop-filter-section-v2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("filtersChanged", function OpenStoriesComponent_ng_container_1_Template_loop_filter_section_v2_filtersChanged_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.fetchMetabaseUrl($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const config_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("config", config_r2)("showAllStoriesButton", false);
  }
}
function OpenStoriesComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "iframe", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r1.iframeURL, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeResourceUrl"])("frameBorder", 0);
  }
}
class OpenStoriesComponent extends _shared_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(statisticsService,
  // public statisticsCountService: StatisticsCountService,
  // public ui: UIService,
  sanitizer, http, datePipe, filtersService) {
    super();
    this.statisticsService = statisticsService;
    this.sanitizer = sanitizer;
    this.http = http;
    this.datePipe = datePipe;
    this.filtersService = filtersService;
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
    this.filtersConfig$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(null);
  }
  ngAfterViewInit() {
    this.fetchMetabaseUrl();
  }
  fetchMetabaseUrl() {
    this.statisticsService.getOpenStoriesSignedUrl((0,_shared_utils_filters_utils__WEBPACK_IMPORTED_MODULE_2__.prepareFilterDataFromSessionStorage)(_shared_components_filters_section_v2_filters_config__WEBPACK_IMPORTED_MODULE_1__.openStoriesFiltersConfig)).subscribe(data => {
      this.baseMetabaseUrl = data.url;
      this.iframeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseMetabaseUrl);
    });
  }
  ngOnInit() {
    this.fetchMetabaseUrl();
    this.filteringData = this.prepareFromTo();
    this.filtersService.filtersChanged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroyed$)).subscribe(() => this.refreshData(this.filtersService.userFilters));
    (0,_shared_utils_filters_utils__WEBPACK_IMPORTED_MODULE_2__.prepareStoriesFilterData)(this.destroyed$, this.filtersService, this.filtersConfig$);
    this.refreshData((0,_shared_utils_filters_utils__WEBPACK_IMPORTED_MODULE_2__.prepareFilterDataFromSessionStorage)(_shared_components_filters_section_v2_filters_config__WEBPACK_IMPORTED_MODULE_1__.openStoriesFiltersConfig));
  }
  prepareFromTo() {
    const to = this.datePipe.transform(new Date(), 'yyyy-MM');
    const fromDate = new Date();
    const monthsInYearExcluded = 11;
    fromDate.setMonth(fromDate.getMonth() - monthsInYearExcluded);
    const from = this.datePipe.transform(fromDate, 'yyyy-MM');
    return {
      from,
      to
    };
  }
  prepareFilteringData(filterData) {
    Object.keys(filterData).forEach(key => !filterData[key] && delete filterData[key]);
    return filterData;
  }
  refreshData(filterData) {
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
  static #_ = this.ɵfac = function OpenStoriesComponent_Factory(t) {
    return new (t || OpenStoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_statistics_statistics_service__WEBPACK_IMPORTED_MODULE_3__.StatisticsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_filters_filters_service__WEBPACK_IMPORTED_MODULE_4__.FiltersService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: OpenStoriesComponent,
    selectors: [["app-open-stories"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
    decls: 4,
    vars: 4,
    consts: [[1, "stats-container"], [4, "ngIf"], [3, "config", "showAllStoriesButton", "filtersChanged"], ["width", "100%", "height", "2000px", "allowtransparency", "", 3, "src", "frameBorder"]],
    template: function OpenStoriesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, OpenStoriesComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, OpenStoriesComponent_ng_container_3_Template, 2, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, ctx.filtersConfig$));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.iframeURL);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _shared_components_filters_section_v2_filter_section_v2_component__WEBPACK_IMPORTED_MODULE_5__.FilterSectionV2Component, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcGVuLXN0b3JpZXMuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zdGF0aXN0aWNzL29wZW4tc3Rvcmllcy9vcGVuLXN0b3JpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRLQUE0SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 94970:
/*!************************************************************************!*\
  !*** ./src/app/modules/statistics/open-stories/open-stories.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpenStoriesModule": () => (/* binding */ OpenStoriesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _app_shared_components_charts_bar_groupped_chart_bar_groupped_chart_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/components/charts/bar-groupped-chart/bar-groupped-chart.module */ 21502);
/* harmony import */ var _app_shared_components_charts_bar_stacked_chart_bar_stacked_chart_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/components/charts/bar-stacked-chart/bar-stacked-chart.module */ 23564);
/* harmony import */ var _app_shared_components_charts_bar_stacked_multi_chart_bar_stacked_multi_chart_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/components/charts/bar-stacked-multi-chart/bar-stacked-multi-chart.module */ 70368);
/* harmony import */ var _app_shared_components_charts_text_boxes_text_boxes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/components/charts/text-boxes/text-boxes.module */ 72228);
/* harmony import */ var _app_shared_components_charts_text_grid_text_grid_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/components/charts/text-grid/text-grid.module */ 61098);
/* harmony import */ var _app_shared_components_charts_wave_timeline_chart_wave_timeline_chart_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/components/charts/wave-timeline-chart/wave-timeline-chart.module */ 33635);
/* harmony import */ var _app_shared_components_download_button_download_button_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/components/download-button/download-button.module */ 84021);
/* harmony import */ var _app_shared_components_info_link_info_link_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/components/info-link/info-link.module */ 83710);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _shared_components_filters_section_v2_filter_section_v2_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/components/filters-section-v2/filter-section-v2.module */ 69417);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-echarts */ 31548);
/* harmony import */ var _shared_directives_tooltip_tooltip_directive_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/directives/tooltip/tooltip.directive.module */ 84898);
/* harmony import */ var _open_stories_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./open-stories-routing.module */ 27337);
/* harmony import */ var _open_stories_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./open-stories.component */ 4430);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
















class OpenStoriesModule {
  static #_ = this.ɵfac = function OpenStoriesModule_Factory(t) {
    return new (t || OpenStoriesModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
    type: OpenStoriesModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _open_stories_routing_module__WEBPACK_IMPORTED_MODULE_10__.OpenStoriesRoutingModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_14__.NgxEchartsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule, _app_shared_components_info_link_info_link_module__WEBPACK_IMPORTED_MODULE_7__.InfoLinkModule, _app_shared_components_charts_text_grid_text_grid_module__WEBPACK_IMPORTED_MODULE_4__.TextGridModule, _app_shared_components_charts_wave_timeline_chart_wave_timeline_chart_module__WEBPACK_IMPORTED_MODULE_5__.WaveTimelineChartModule, _app_shared_components_charts_bar_groupped_chart_bar_groupped_chart_module__WEBPACK_IMPORTED_MODULE_0__.BarGrouppedChartModule, _app_shared_components_charts_text_boxes_text_boxes_module__WEBPACK_IMPORTED_MODULE_3__.TextBoxesModule, _app_shared_components_charts_bar_stacked_chart_bar_stacked_chart_module__WEBPACK_IMPORTED_MODULE_1__.BarStackedChartModule, _app_shared_components_charts_bar_stacked_multi_chart_bar_stacked_multi_chart_module__WEBPACK_IMPORTED_MODULE_2__.BarStackedMultiChartModule, _shared_directives_tooltip_tooltip_directive_module__WEBPACK_IMPORTED_MODULE_9__.TooltipDirectiveModule, _shared_components_filters_section_v2_filter_section_v2_module__WEBPACK_IMPORTED_MODULE_8__.FilterSectionV2Module, _app_shared_components_download_button_download_button_module__WEBPACK_IMPORTED_MODULE_6__.DownloadButtonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](OpenStoriesModule, {
    declarations: [_open_stories_component__WEBPACK_IMPORTED_MODULE_11__.OpenStoriesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _open_stories_routing_module__WEBPACK_IMPORTED_MODULE_10__.OpenStoriesRoutingModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_14__.NgxEchartsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule, _app_shared_components_info_link_info_link_module__WEBPACK_IMPORTED_MODULE_7__.InfoLinkModule, _app_shared_components_charts_text_grid_text_grid_module__WEBPACK_IMPORTED_MODULE_4__.TextGridModule, _app_shared_components_charts_wave_timeline_chart_wave_timeline_chart_module__WEBPACK_IMPORTED_MODULE_5__.WaveTimelineChartModule, _app_shared_components_charts_bar_groupped_chart_bar_groupped_chart_module__WEBPACK_IMPORTED_MODULE_0__.BarGrouppedChartModule, _app_shared_components_charts_text_boxes_text_boxes_module__WEBPACK_IMPORTED_MODULE_3__.TextBoxesModule, _app_shared_components_charts_bar_stacked_chart_bar_stacked_chart_module__WEBPACK_IMPORTED_MODULE_1__.BarStackedChartModule, _app_shared_components_charts_bar_stacked_multi_chart_bar_stacked_multi_chart_module__WEBPACK_IMPORTED_MODULE_2__.BarStackedMultiChartModule, _shared_directives_tooltip_tooltip_directive_module__WEBPACK_IMPORTED_MODULE_9__.TooltipDirectiveModule, _shared_components_filters_section_v2_filter_section_v2_module__WEBPACK_IMPORTED_MODULE_8__.FilterSectionV2Module, _app_shared_components_download_button_download_button_module__WEBPACK_IMPORTED_MODULE_6__.DownloadButtonModule]
  });
})();

/***/ }),

/***/ 10825:
/*!*********************************************************************************************!*\
  !*** ./src/app/shared/components/charts/bar-groupped-chart/bar-groupped-chart.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarGrouppedChartComponent": () => (/* binding */ BarGrouppedChartComponent)
/* harmony export */ });
/* harmony import */ var _app_shared_components_charts_base_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/components/charts/base-chart.component */ 94579);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_bar_groupped_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/bar-groupped.config */ 75983);
/* harmony import */ var _config_defaults_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/defaults.config */ 73167);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/services/ui/ui.service */ 21428);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _core_services_filters_filters_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/filters/filters.service */ 86631);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-echarts */ 31548);










function BarGrouppedChartComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("chartInit", function BarGrouppedChartComponent_div_3_Template_div_chartInit_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onChartInit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx_r0.chartOption);
  }
}
class BarGrouppedChartComponent extends _app_shared_components_charts_base_chart_component__WEBPACK_IMPORTED_MODULE_0__.BaseChartComponent {
  set data(values) {
    this._data = values;
    this.data && this.refreshSeries(this.mapToSeries(this.data));
  }
  get data() {
    return this._data;
  }
  get chartSeries() {
    return this.echartsInstance?.getOption()?.series;
  }
  constructor(ui, translateService, filtersService) {
    super(ui, _config_bar_groupped_config__WEBPACK_IMPORTED_MODULE_2__.chartConfig, filtersService);
    this.ui = ui;
    this.translateService = translateService;
    this.filtersService = filtersService;
    this.integrateFiltersWithLegend = false;
    this.unit = 'stories';
    this.seriesNames = [this.translateService.instant('statistics.storiesAndReplies.storyType'), this.translateService.instant('statistics.storiesAndReplies.repliesCommunity'), this.translateService.instant('statistics.storiesAndReplies.repliesOrganization')];
  }
  mapToSeries(data) {
    const series = [];
    const barDefaults = {
      type: 'bar',
      barMaxWidth: 45,
      barMinWidth: 10,
      barGap: '5%',
      barCategoryGap: '8'
    };
    const barStyle = {
      borderRadius: [4, 4, 0, 0],
      borderWidth: 1,
      borderColor: 'white'
    };
    const pData = [[], [], []];
    data.forEach((d, i) => {
      const itemStyle = {
        ...barStyle,
        color: _config_defaults_config__WEBPACK_IMPORTED_MODULE_3__.colors[i]
      };
      pData[0].push({
        value: d.stories[0],
        itemStyle: {
          ...itemStyle,
          borderColor: !!d.stories[0] ? 'white' : 'transparent'
        },
        name: d.code
      });
      pData[1].push({
        value: d.replies[0],
        itemStyle: {
          ...itemStyle,
          borderColor: !!d.replies[0] ? 'white' : 'transparent',
          borderRadius: !!d.replies[1] ? 0 : [4, 4, 0, 0]
        },
        name: d.code
      });
      pData[2].push({
        value: d.replies[1],
        itemStyle: {
          ...itemStyle,
          borderColor: !!d.replies[1] ? 'white' : 'transparent'
        },
        name: d.code
      });
    });
    let entity = {
      ...barDefaults,
      stack: 'one',
      name: this.seriesNames[0],
      data: pData[0],
      label: {
        show: true,
        position: 'top',
        formatter: params => {
          return params.value > 0 && !this.ui.mobileView ? params.value : '';
        },
        color: '#31135e',
        fontWeight: 600
      },
      itemStyle: {
        color: 'gray'
      }
    };
    series.push(entity);
    entity = {
      ...barDefaults,
      stack: 'two',
      name: this.seriesNames[1],
      data: pData[1],
      label: {
        show: false
      },
      itemStyle: {
        color: 'gray'
      }
    };
    series.push(entity);
    entity = {
      ...barDefaults,
      stack: 'two',
      name: this.seriesNames[2],
      data: pData[2],
      label: {
        show: true,
        position: 'top',
        formatter: params => {
          const value = params.value + (pData[1]?.[params.dataIndex]?.value || 0);
          return value > 0 && !this.ui.mobileView ? value : '';
        },
        color: '#31135e',
        fontWeight: 600
      },
      itemStyle: {
        color: 'gray'
      }
    };
    series.push(entity);
    return series;
  }
  setup() {
    const options = {
      xAxis: {
        data: this._data.map(e => e.code),
        axisLabel: {
          show: true,
          interval: 0,
          formatter: (value, index) => {
            return this.getCategoryName(value);
          },
          overflow: 'truncate',
          ellipsis: '.'
        },
        axisPointer: {
          show: true,
          triggerTooltip: true,
          type: 'none',
          animation: false,
          label: {
            show: true,
            formatter: (value, index) => {
              return `${this.getCategoryName(value.value)}`;
            },
            backgroundColor: 'white',
            borderColor: 'transparent'
          }
        }
      },
      legend: {
        itemWidth: 14,
        itemHeight: 14,
        textStyle: {
          padding: 2
        },
        data: [{
          name: this.seriesNames[0],
          icon: 'image://assets/statistics/legend/solid.svg'
        }, {
          name: this.seriesNames[1],
          icon: 'image://assets/statistics/legend/dashed-rotated.svg'
        }, {
          name: this.seriesNames[2],
          icon: 'image://assets/statistics/legend/dashed-vertical.svg'
        }]
      },
      aria: {
        decal: {
          show: true,
          decals: [{
            symbol: 'none'
          }, {
            symbol: 'line',
            dashArrayX: [1, 1],
            dashArrayY: [7, 2],
            rotation: 45,
            color: 'white',
            symbolSize: 20
          }, {
            symbol: 'line',
            dashArrayX: [1, 1],
            dashArrayY: [7, 2],
            rotation: 1.56,
            color: 'white',
            symbolSize: 20
          }]
        }
      },
      tooltip: {
        position: (point, params, dom, rect, size) => {
          // eslint-disable-next-line
          let {
            x,
            y
          } = rect ? {
            x: point[0] - size.contentSize[0] / 2,
            y: size.viewSize[1] - (size.viewSize[1] - rect.y) - 50
          } : {
            x: point[0] - size.contentSize[0] / 2,
            y: 20
          };
          const items = this._data.length;
          const index = Array.isArray(params) ? params[0]?.dataIndex : params.dataIndex;
          // TODO: verify when filters integrated
          if (index > items - 3) {
            x = x - size.contentSize[0] / 3;
          }
          if (index < 2) {
            x = x + size.contentSize[0] / 3;
          }
          return [x, y];
        },
        formatter: params => {
          const index = Array.isArray(params) ? params[0]?.dataIndex : params.dataIndex;
          const items = this._data.length;
          const extraClass = index > items - 3 ? 'tooltip--right' : index < 2 ? 'tooltip--left' : '';
          let content = `<div class="stats-tooltip ${extraClass}">
            <div><span class="axis-label ${Array.isArray(params) ? 'hide-mobile' : ''}">${this.getCategoryName(params[0]?.name || params?.name)}</span></div><div>`;
          const getSeriesName = name => {
            return name === this.translateService.instant('statistics.storiesAndReplies.storyType') ? this.translateService.instant('statistics.storiesAndReplies.totalStories') : name;
          };
          if (Array.isArray(params)) {
            params.forEach(p => {
              content += `<p><span class="content"><span>${getSeriesName(p.seriesName)}</span><span>${p.value} ${this.translateService.instant(`global.unitsLong.${this.unit}`)}</span></span></p>`;
            });
          } else {
            content += `<p><span class="content">${params.data?.value} ${getSeriesName(params.seriesName).toLowerCase()}</span></p>`;
          }
          content += '</div></div>';
          return content;
        }
      },
      series: [...this.mapToSeries(this._data)]
    };
    this.chartOption = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.merge)(this.chartDefaultOption, options);
    this.echartsInstance && this.reprocessChartOptions();
  }
  reprocessChartOptions() {
    super.reprocessChartOptions();
    let options = {};
    if (this.ui.mobileView) {
      options = {
        grid: {
          top: '5%',
          width: '90%',
          left: '0%',
          right: '5%'
        },
        legend: {
          left: '0',
          bottom: '0',
          itemGap: 10,
          textStyle: {
            fontSize: 12
          }
        },
        title: {
          textStyle: {
            fontSize: 18
          }
        },
        xAxis: {
          axisLabel: {
            padding: 4,
            backgroundColor: 'transparent',
            fontSize: 10,
            width: window.innerWidth < 450 ? 35 : 60
          },
          axisPointer: {
            label: {
              color: '#1a1a1a',
              margin: 7,
              fontSize: 10,
              fontWeight: 600
            }
          }
        },
        yAxis: {
          show: true,
          splitLine: {
            show: true
          }
        }
      };
    } else {
      options = {
        grid: {
          height: 256,
          left: '0',
          width: '100%',
          top: '15%'
        },
        title: {
          textStyle: {
            fontSize: 24
          }
        },
        legend: {
          left: '0%',
          top: '0',
          itemGap: 20,
          textStyle: {
            fontSize: 16
          }
        },
        xAxis: {
          axisLabel: {
            padding: 9,
            backgroundColor: 'transparent',
            fontSize: 14,
            width: 120
          },
          axisPointer: {
            label: {
              color: '#1a1a1a',
              margin: 12,
              fontSize: 16,
              fontWeight: 600
            }
          }
        },
        yAxis: {
          show: false,
          splitLine: {
            show: false
          }
        }
      };
    }
    setTimeout(() => {
      this.echartsInstance?.setOption(options, {
        lazyUpdate: true,
        silent: true
      });
    }, 1);
  }
  getCategoryName(name) {
    return this.translateService.instant(`category.${name}`);
  }
  static #_ = this.ɵfac = function BarGrouppedChartComponent_Factory(t) {
    return new (t || BarGrouppedChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_4__.UIService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_filters_filters_service__WEBPACK_IMPORTED_MODULE_5__.FiltersService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: BarGrouppedChartComponent,
    selectors: [["loop-chart-bar-groupped"]],
    inputs: {
      integrateFiltersWithLegend: "integrateFiltersWithLegend",
      unit: "unit",
      titleTKey: "titleTKey",
      data: "data"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
    decls: 4,
    vars: 4,
    consts: [[1, "chart-subtitle"], ["echarts", "", "class", "base-chart", 3, "options", "chartInit", 4, "ngIf"], ["echarts", "", 1, "base-chart", 3, "options", "chartInit"]],
    template: function BarGrouppedChartComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, BarGrouppedChartComponent_div_3_Template, 1, 1, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, ctx.titleTKey));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.chartOption);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, ngx_echarts__WEBPACK_IMPORTED_MODULE_9__.NgxEchartsDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
    styles: [".base-chart[_ngcontent-%COMP%] {\n  height: 360px;\n  padding: 2px;\n}\n@media (max-width: 767.9px) {\n  .base-chart[_ngcontent-%COMP%] {\n    height: 355px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhci1ncm91cHBlZC1jaGFydC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3N0eWxlcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQURGO0FDb0xFO0VEckxGO0lBS0ksYUFBQTtFQUFGO0FBQ0YiLCJmaWxlIjoiYmFyLWdyb3VwcGVkLWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnbWl4aW5zJztcblxuLmJhc2UtY2hhcnQge1xuICBoZWlnaHQ6IDM2MHB4O1xuICBwYWRkaW5nOiAycHg7XG5cbiAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgIGhlaWdodDogMzU1cHg7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbkBtaXhpbiBmbGV4LWdhcCgkZ2FwLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBtYXJnaW4tdG9wOiAoLSRnYXApO1xuICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgoLSRnYXApLCAkZ2xvYmFsKTtcblxuICA+ICoge1xuICAgIG1hcmdpbi10b3A6ICRnYXA7XG4gICAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoJGdhcCwgJGdsb2JhbCk7XG4gIH1cbn1cblxuQG1peGluIGJhc2UtY29udGFpbmVyKCRjb250ZW50LXdpZHRoKSB7XG4gICRkZXNrdG9wLXBhZGRpbmc6IDJyZW07XG4gIG1heC13aWR0aDogY2FsYygjeyRjb250ZW50LXdpZHRofSArICgjeyRkZXNrdG9wLXBhZGRpbmd9KSk7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDJyZW0pIHtcbiAgICBAaW5jbHVkZSBwYWRkaW5nLWxlZnQoJGRlc2t0b3AtcGFkZGluZywgdHJ1ZSk7XG4gICAgQGluY2x1ZGUgcGFkZGluZy1yaWdodCgkZGVza3RvcC1wYWRkaW5nLCB0cnVlKTtcbiAgfVxufVxuXG5AbWl4aW4gY2VudGVyQWJzb2x1dGVFbGVtZW50IHtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcblxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuQG1peGluIG9ubHktbHRyLWdsb2JhbCB7XG4gIGh0bWw6bm90KFtkaXI9J3J0bCddKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1ydGwtZ2xvYmFsIHtcbiAgaHRtbFtkaXI9J3J0bCddICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LWx0ciB7XG4gIDpob3N0LWNvbnRleHQoaHRtbDpub3QoW2Rpcj0ncnRsJ10pKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1ydGwge1xuICA6aG9zdC1jb250ZXh0KGh0bWxbZGlyPSdydGwnXSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHJ0bC12YWx1ZSgkcHJvcGVydHksICRsdHItdmFsdWUsICRydGwtdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpZiAkZ2xvYmFsID09IHRydWUge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyLWdsb2JhbCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRsdHItdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwtZ2xvYmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHJ0bC12YWx1ZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGx0ci12YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRydGwtdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBydGwtcHJvcGVydHkoJGx0ci1wcm9wZXJ0eSwgJHJ0bC1wcm9wZXJ0eSwgJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaWYgJGdsb2JhbCA9PSB0cnVlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ci1nbG9iYWwge1xuICAgICAgI3skbHRyLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsLWdsb2JhbCB7XG4gICAgICAjeyRydGwtcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ciB7XG4gICAgICAjeyRsdHItcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwge1xuICAgICAgI3skcnRsLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWFyZ2luLWxlZnQoJG1hcmdpbiwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KG1hcmdpbi1sZWZ0LCBtYXJnaW4tcmlnaHQsICRtYXJnaW4sICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gbWFyZ2luLXJpZ2h0KCRtYXJnaW4sICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShtYXJnaW4tcmlnaHQsIG1hcmdpbi1sZWZ0LCAkbWFyZ2luLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmcoJHBhZGRpbmdUb3AsICRwYWRkaW5nUmlnaHQsICRwYWRkaW5nQm90dG9tLCAkcGFkZGluZ0xlZnQsICRnbG9iYWw6IGZhbHNlKSB7XG4gIHBhZGRpbmctdG9wOiAkcGFkZGluZ1RvcDtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctcmlnaHQsIHBhZGRpbmctbGVmdCwgJHBhZGRpbmdSaWdodCwgJGdsb2JhbCk7XG4gIHBhZGRpbmctYm90dG9tOiAkcGFkZGluZ1RvcDtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctbGVmdCwgcGFkZGluZy1yaWdodCwgJHBhZGRpbmdMZWZ0LCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmctbGVmdCgkcGFkZGluZywgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctbGVmdCwgcGFkZGluZy1yaWdodCwgJHBhZGRpbmcsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1yaWdodCgkcGFkZGluZywgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctcmlnaHQsIHBhZGRpbmctbGVmdCwgJHBhZGRpbmcsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gdGV4dC1hbGlnbi1sZWZ0KCRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZSh0ZXh0LWFsaWduLCBsZWZ0LCByaWdodCwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBsZWZ0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGxlZnQsIHJpZ2h0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcmlnaHQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocmlnaHQsIGxlZnQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiB0cmFuc2xhdGVYWSgkdmFsdWVYLCAkdmFsdWVZLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUodHJhbnNmb3JtLCB0cmFuc2xhdGUoJHZhbHVlWCwgJHZhbHVlWSksIHRyYW5zbGF0ZSgtJHZhbHVlWCwgJHZhbHVlWSksICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWxlZnQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWxlZnQsIGJvcmRlci1yaWdodCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1yaWdodCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItcmlnaHQsIGJvcmRlci1sZWZ0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMsIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItdG9wLXJpZ2h0LXJhZGl1cywgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItdG9wLWxlZnQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci10b3AtbGVmdC1yYWRpdXMsIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gZmxvYXQtbGVmdCgkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUoZmxvYXQsIGxlZnQsIHJpZ2h0LCAkZ2xvYmFsOiBmYWxzZSk7XG59XG5cbkBtaXhpbiBmbG9hdC1yaWdodCB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZShmbG9hdCwgcmlnaHQsIGxlZnQsICRnbG9iYWw6IGZhbHNlKTtcbn1cblxuQG1peGluIHNtYWxsLWRlc2t0b3Atb25seSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1sZykgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXhsIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLWFuZC10YWJsZXQtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZyAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtYWxsLW1vYmlsZS1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXMgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1tZCAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1kKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbGcpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLXVwIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1kKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGRpc2FibGUtc2Nyb2xsYmFyIHtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2hhcnRzL2Jhci1ncm91cHBlZC1jaGFydC9iYXItZ3JvdXBwZWQtY2hhcnQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3N0eWxlcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQURGO0FDb0xFO0VEckxGO0lBS0ksYUFBQTtFQUFGO0FBQ0Y7QUFDQSxnNE5BQWc0TiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ21peGlucyc7XG5cbi5iYXNlLWNoYXJ0IHtcbiAgaGVpZ2h0OiAzNjBweDtcbiAgcGFkZGluZzogMnB4O1xuXG4gIEBpbmNsdWRlIG1vYmlsZS1vbmx5IHtcbiAgICBoZWlnaHQ6IDM1NXB4O1xuICB9XG59XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AbWl4aW4gZmxleC1nYXAoJGdhcCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgbWFyZ2luLXRvcDogKC0kZ2FwKTtcbiAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoKC0kZ2FwKSwgJGdsb2JhbCk7XG5cbiAgPiAqIHtcbiAgICBtYXJnaW4tdG9wOiAkZ2FwO1xuICAgIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCRnYXAsICRnbG9iYWwpO1xuICB9XG59XG5cbkBtaXhpbiBiYXNlLWNvbnRhaW5lcigkY29udGVudC13aWR0aCkge1xuICAkZGVza3RvcC1wYWRkaW5nOiAycmVtO1xuICBtYXgtd2lkdGg6IGNhbGMoI3skY29udGVudC13aWR0aH0gKyAoI3skZGVza3RvcC1wYWRkaW5nfSkpO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQycmVtKSB7XG4gICAgQGluY2x1ZGUgcGFkZGluZy1sZWZ0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICAgIEBpbmNsdWRlIHBhZGRpbmctcmlnaHQoJGRlc2t0b3AtcGFkZGluZywgdHJ1ZSk7XG4gIH1cbn1cblxuQG1peGluIGNlbnRlckFic29sdXRlRWxlbWVudCB7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbkBtaXhpbiBvbmx5LWx0ci1nbG9iYWwge1xuICBodG1sOm5vdChbZGlyPSdydGwnXSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsLWdsb2JhbCB7XG4gIGh0bWxbZGlyPSdydGwnXSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1sdHIge1xuICA6aG9zdC1jb250ZXh0KGh0bWw6bm90KFtkaXI9J3J0bCddKSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsIHtcbiAgOmhvc3QtY29udGV4dChodG1sW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBydGwtdmFsdWUoJHByb3BlcnR5LCAkbHRyLXZhbHVlLCAkcnRsLXZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaWYgJGdsb2JhbCA9PSB0cnVlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ci1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsLWdsb2JhbCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRydGwtdmFsdWU7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ciB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRsdHItdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gcnRsLXByb3BlcnR5KCRsdHItcHJvcGVydHksICRydGwtcHJvcGVydHksICR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcnRsLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skbHRyLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hcmdpbi1sZWZ0KCRtYXJnaW4sICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShtYXJnaW4tbGVmdCwgbWFyZ2luLXJpZ2h0LCAkbWFyZ2luLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIG1hcmdpbi1yaWdodCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLXJpZ2h0LCBtYXJnaW4tbGVmdCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nKCRwYWRkaW5nVG9wLCAkcGFkZGluZ1JpZ2h0LCAkcGFkZGluZ0JvdHRvbSwgJHBhZGRpbmdMZWZ0LCAkZ2xvYmFsOiBmYWxzZSkge1xuICBwYWRkaW5nLXRvcDogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nUmlnaHQsICRnbG9iYWwpO1xuICBwYWRkaW5nLWJvdHRvbTogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nTGVmdCwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLWxlZnQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmctcmlnaHQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRleHQtYWxpZ24tbGVmdCgkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUodGV4dC1hbGlnbiwgbGVmdCwgcmlnaHQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShsZWZ0LCByaWdodCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHJpZ2h0LCBsZWZ0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gdHJhbnNsYXRlWFkoJHZhbHVlWCwgJHZhbHVlWSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRyYW5zZm9ybSwgdHJhbnNsYXRlKCR2YWx1ZVgsICR2YWx1ZVkpLCB0cmFuc2xhdGUoLSR2YWx1ZVgsICR2YWx1ZVkpLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1sZWZ0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1sZWZ0LCBib3JkZXItcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItcmlnaHQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXJpZ2h0LCBib3JkZXItbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsIGJvcmRlci10b3AtbGVmdC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItdG9wLWxlZnQtcmFkaXVzLCBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGZsb2F0LWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCBsZWZ0LCByaWdodCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gZmxvYXQtcmlnaHQge1xuICBAaW5jbHVkZSBydGwtdmFsdWUoZmxvYXQsIHJpZ2h0LCBsZWZ0LCAkZ2xvYmFsOiBmYWxzZSk7XG59XG5cbkBtaXhpbiBzbWFsbC1kZXNrdG9wLW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbGcpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC14bCAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1hbmQtdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbGcgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBzbWFsbC1tb2JpbGUtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1zIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbWQgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0YWJsZXQtb25seSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS11cCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBkaXNhYmxlLXNjcm9sbGJhciB7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 21502:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/charts/bar-groupped-chart/bar-groupped-chart.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarGrouppedChartModule": () => (/* binding */ BarGrouppedChartModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-echarts */ 31548);
/* harmony import */ var _bar_groupped_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bar-groupped-chart.component */ 10825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);





class BarGrouppedChartModule {
  static #_ = this.ɵfac = function BarGrouppedChartModule_Factory(t) {
    return new (t || BarGrouppedChartModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: BarGrouppedChartModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_3__.NgxEchartsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BarGrouppedChartModule, {
    declarations: [_bar_groupped_chart_component__WEBPACK_IMPORTED_MODULE_0__.BarGrouppedChartComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_3__.NgxEchartsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule],
    exports: [_bar_groupped_chart_component__WEBPACK_IMPORTED_MODULE_0__.BarGrouppedChartComponent]
  });
})();

/***/ }),

/***/ 72417:
/*!*******************************************************************************************************!*\
  !*** ./src/app/shared/components/charts/bar-stacked-multi-chart/bar-stacked-multi-chart.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarStackedMultiChartComponent": () => (/* binding */ BarStackedMultiChartComponent)
/* harmony export */ });
/* harmony import */ var _app_shared_components_charts_base_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/components/charts/base-chart.component */ 94579);
/* harmony import */ var _app_shared_components_charts_config_bar_stacked_multi_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/components/charts/config/bar-stacked-multi.config */ 72182);
/* harmony import */ var _shared_components_charts_utils_chart_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/charts/utils/chart.utils */ 23928);
/* harmony import */ var _shared_utils_chart_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/utils/chart.utils */ 71816);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core/services/ui/ui.service */ 21428);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _core_services_filters_filters_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/filters/filters.service */ 86631);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-echarts */ 31548);
/* harmony import */ var _switch_switch_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../switch/switch.component */ 46755);












function BarStackedMultiChartComponent_loop_switch_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "loop-switch", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("clicked", function BarStackedMultiChartComponent_loop_switch_4_Template_loop_switch_clicked_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.chartSwitchClicked());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("options", ctx_r0.switchOptions)("selected", ctx_r0.visibleData);
  }
}
function BarStackedMultiChartComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("chartInit", function BarStackedMultiChartComponent_div_6_Template_div_chartInit_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r4.onChartInit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("options", ctx_r1.chartOption);
  }
}
class BarStackedMultiChartComponent extends _app_shared_components_charts_base_chart_component__WEBPACK_IMPORTED_MODULE_0__.BaseChartComponent {
  set data(value) {
    this._data = value;
    this.selectLegendOptionsBasedOnFilters(this.filtersService.userFilters);
    this.data && this.refreshSeries(this.mapToSeries(this.data));
  }
  get data() {
    return this._data;
  }
  constructor(ui, translateService, filtersService) {
    super(ui, _app_shared_components_charts_config_bar_stacked_multi_config__WEBPACK_IMPORTED_MODULE_1__.chartConfig, filtersService);
    this.ui = ui;
    this.translateService = translateService;
    this.filtersService = filtersService;
    this.unit = 'stories';
    this.visibleData = 'all';
    this.switchOptions = [{
      code: 'age',
      text: this.translateService.instant('global.age')
    }, {
      code: 'gender',
      text: this.translateService.instant('global.gender')
    }];
  }
  onChartInit($event) {
    super.onChartInit($event);
    this.echartsInstance?.on('mouseover', e => {
      this.echartsInstance.dispatchAction({
        type: 'highlight',
        seriesIndex: e.seriesIndex,
        dataIndex: e.dataIndex
      });
    });
  }
  mapToSeries(dataRaw) {
    let isCalculated = {};
    let stackValue = {};
    let lastSelected = {};
    const series = [];
    const barDefaults = {
      type: 'bar',
      barMinWidth: 10,
      barCategoryGap: '8'
    };
    const barStyle = {
      borderRadius: [4, 4, 0, 0],
      borderWidth: 0.5,
      borderColor: 'white'
    };
    const data = [...(0,lodash__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(dataRaw.age)];
    dataRaw.gender.forEach((g, i) => {
      data[i].values.push(null);
      data[i].values.push(...g.values);
    });
    data.forEach((v, i) => {
      const entity = {
        ...barDefaults,
        stack: 'all',
        name: v.code,
        data: this.getVisibleValuesOnly(v.values).map((value, index) => {
          return {
            value,
            itemStyle: {
              borderRadius: 0,
              borderColor: !!value ? barStyle.borderColor : 'transparent'
            },
            blur: {
              itemStyle: {
                opacity: 0.6
              }
            },
            emphasis: {
              focus: 'item',
              itemStyle: {
                opacity: 1
              }
            },
            label: {
              show: true,
              position: 'top',
              formatter: params => {
                const selectedCategories = this.echartsInstance.getOption()?.legend[0].selected;
                selectedCategories.closedCases = undefined;
                if (Object.getOwnPropertyNames(lastSelected).length > 0 && Object.getOwnPropertyNames(selectedCategories).length > 0 && JSON.stringify(lastSelected) !== JSON.stringify(selectedCategories)) {
                  isCalculated = {};
                  stackValue = {};
                  setTimeout(() => this.echartsInstance.resize(), 0);
                }
                selectedCategories[params.seriesName] === true && (0,_shared_components_charts_utils_chart_utils__WEBPACK_IMPORTED_MODULE_2__.addValueToDataIndexSum)(stackValue, isCalculated, params);
                lastSelected = selectedCategories;
                const onlySelectedCategories = Object.entries(selectedCategories).filter(category => !!category[1]);
                const lastSelectedCategoryObject = onlySelectedCategories[onlySelectedCategories?.length - 1];
                if (lastSelectedCategoryObject) {
                  return lastSelectedCategoryObject[0] === params.seriesName ? stackValue[params.dataIndex] : '';
                }
                return '';
              },
              color: '#31135e',
              fontWeight: 600,
              rich: {}
            }
          };
        })
      };
      series.push(entity);
    });
    (0,_shared_utils_chart_utils__WEBPACK_IMPORTED_MODULE_3__.roundTopItems)(data, series, barStyle.borderRadius);
    return series;
  }
  setup() {
    const options = {
      xAxis: {
        axisLabel: {
          show: true,
          interval: 0,
          formatter: (value, index) => {
            return this.formatLabelValue(this.getAgeGenderName(value));
          },
          align: 'center',
          overflow: 'none'
        },
        axisPointer: {
          show: true,
          triggerTooltip: true,
          interval: 0,
          type: 'none',
          animation: false,
          label: {
            show: true,
            color: '#1a1a1a',
            formatter: value => {
              return `${this.formatLabelValue(this.getAgeGenderName(value.value))}`;
            },
            backgroundColor: 'white',
            borderColor: 'transparent'
          }
        },
        data: this.getDataArray()
      },
      legend: {
        formatter: name => {
          return this.getCategoryName(name);
        }
      },
      tooltip: {
        position: (point, params, dom, rect, size) => {
          // eslint-disable-next-line
          let {
            x,
            y
          } = rect ? {
            x: point[0] - size.contentSize[0] / 2,
            y: size.viewSize[1] - (size.viewSize[1] - rect.y) - 60
          } : {
            x: point[0] - size.contentSize[0] / 2,
            y: -20
          };
          const items = this.getItemsLength();
          const index = Array.isArray(params) ? params[0]?.dataIndex : params.dataIndex;
          // TODO: verify when filters integrated
          if (index > items - 2) {
            x = x - size.contentSize[0] / 3;
          }
          if (index < 2) {
            x = x + size.contentSize[0] / 3;
          }
          return [x, y];
        },
        formatter: params => {
          const index = Array.isArray(params) ? params[0]?.dataIndex : params.dataIndex;
          if (index === 5) {
            return '';
          }
          const items = this.getItemsLength();
          const extraClass = index > items - 2 ? 'tooltip--right' : index < 2 ? 'tooltip--left' : '';
          let content = `<div class="stats-tooltip ${extraClass}">
            <div><span class="axis-label ${Array.isArray(params) ? 'hide-mobile' : ''}">${this.getAgeGenderName(params[0]?.name || params?.name)}</span></div><div>`;
          if (Array.isArray(params)) {
            params.forEach(p => {
              content += `<p><span class="content"><span>${this.getCategoryName(p.seriesName)}</span><span>${p.value} ${this.translateService.instant(`global.unitsLong.${this.unit}`)}</span></span></p>`;
            });
          } else {
            content += `<p><span class="content"><span>${this.getCategoryName(params.seriesName)}</span><span>${params.value} ${this.translateService.instant(`global.unitsLong.${this.unit}`)}</span></span></p>`;
          }
          content += '</div></div>';
          return content;
        }
      },
      series: [...this.mapToSeries(this._data)]
    };
    this.chartOption = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.merge)(this.chartDefaultOption, options);
    this.echartsInstance && this.reprocessChartOptions();
  }
  reprocessChartOptions() {
    super.reprocessChartOptions();
    let options = {};
    if (this.ui.mobileView) {
      options = {
        grid: {
          top: 70,
          width: '90%',
          left: '0%',
          right: '5%',
          height: 256
        },
        legend: {
          left: '0',
          bottom: '2%',
          textStyle: {
            fontSize: 12
          }
        },
        title: {
          textStyle: {
            fontSize: 18
          }
        },
        xAxis: {
          axisLabel: {
            padding: 4,
            backgroundColor: 'transparent',
            fontSize: 10
          },
          axisPointer: {
            label: {
              margin: 7,
              fontSize: 10,
              fontWeight: 600
            }
          }
        },
        yAxis: {
          show: true,
          splitLine: {
            show: true
          }
        }
      };
      this.visibleData = 'age';
      this.updateDataBasedOnVisibility();
    } else {
      options = {
        grid: {
          height: 256,
          left: 0,
          right: 0,
          width: '100%',
          top: '20%'
        },
        title: {
          textStyle: {
            fontSize: 24
          }
        },
        legend: {
          left: '0%',
          top: '0',
          textStyle: {
            fontSize: 16
          }
        },
        xAxis: {
          axisLabel: {
            padding: 8,
            backgroundColor: 'transparent',
            fontSize: 14
          },
          axisPointer: {
            label: {
              margin: 11,
              fontSize: 16,
              fontWeight: 600
            }
          }
        },
        yAxis: {
          show: false,
          splitLine: {
            show: false
          }
        }
      };
      this.visibleData = 'all';
      this.updateDataBasedOnVisibility();
    }
    setTimeout(() => {
      this.echartsInstance?.setOption(options, {
        lazyUpdate: true,
        silent: true
      });
      this.echartsInstanceWithOptionReady$.next(null);
    }, 1);
  }
  getCategoryName(name) {
    return this.translateService.instant(`category.${name}`);
  }
  getAgeGenderName(name) {
    return !name ? '' : this.translateService.instant(`statistics.ageGender.${name}`);
  }
  formatLabelValue(value) {
    const shouldBreak = window.innerWidth < 571;
    let val = value;
    if (Number.isInteger(Number(value.split('-')[0]))) {
      return value;
    }
    if (shouldBreak) {
      val = val.replace('-', ' ');
      const valArray = val.split(' ');
      if (valArray.length > 1) {
        val = valArray.map(v => `${v.length > 5 ? v.substr(0, 4) + '.' : v}`).join(' \n');
      } else if (valArray[0].length > 6) {
        val = `${valArray[0].substr(0, 5)}.`;
      }
    } else if (val.length > 9) {
      val = val.split(' ').join(' \n');
    }
    return val;
  }
  getDataArray() {
    return this.getVisibleValuesOnly(['1417', '1829', '3059', '60', 'na', '', 'female', 'male', 'nonBinary', 'na']);
  }
  chartSwitchClicked() {
    this.visibleData = this.visibleData === 'age' ? 'gender' : 'age';
    this.updateDataBasedOnVisibility();
  }
  updateDataBasedOnVisibility() {
    const options = {
      xAxis: {
        data: this.getDataArray()
      },
      series: [...this.mapToSeries(this._data)]
    };
    this.echartsInstance && setTimeout(() => this.echartsInstance?.setOption(options, {
      lazyUpdate: true,
      silent: true
    }), 1);
  }
  getVisibleValuesOnly(values) {
    let startIndex = 0;
    let endIndex = values.length;
    if (this.visibleData === 'age') {
      endIndex = 5;
    } else if (this.visibleData === 'gender') {
      startIndex = 6;
    }
    return values.slice(startIndex, endIndex);
  }
  getItemsLength() {
    const ageLength = this._data.age[0].values.length;
    const genderLength = this._data.gender[0].values.length;
    const items = this.visibleData === 'all' ? ageLength + genderLength : this.visibleData === 'age' ? ageLength : genderLength;
    return items;
  }
  static #_ = this.ɵfac = function BarStackedMultiChartComponent_Factory(t) {
    return new (t || BarStackedMultiChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_app_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_5__.UIService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_filters_filters_service__WEBPACK_IMPORTED_MODULE_6__.FiltersService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: BarStackedMultiChartComponent,
    selectors: [["loop-chart-bar-stacked-multi"]],
    inputs: {
      unit: "unit",
      titleTKey: "titleTKey",
      data: "data"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
    decls: 7,
    vars: 7,
    consts: [[1, "chart-subtitle"], [1, "p-rel"], [3, "options", "selected", "clicked", 4, "ngIf"], ["echarts", "", "class", "base-chart", 3, "options", "chartInit", 4, "ngIf"], [3, "options", "selected", "clicked"], ["echarts", "", 1, "base-chart", 3, "options", "chartInit"]],
    template: function BarStackedMultiChartComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, BarStackedMultiChartComponent_loop_switch_4_Template, 1, 2, "loop-switch", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, BarStackedMultiChartComponent_div_6_Template, 1, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 3, ctx.titleTKey));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 5, ctx.ui.mobileView$));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.chartOption);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, ngx_echarts__WEBPACK_IMPORTED_MODULE_11__.NgxEchartsDirective, _switch_switch_component__WEBPACK_IMPORTED_MODULE_7__.SwitchComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
    styles: [".base-chart[_ngcontent-%COMP%] {\n  height: 325px;\n}\n@media (max-width: 767.9px) {\n  .base-chart[_ngcontent-%COMP%] {\n    height: 410px;\n  }\n}\n\nloop-switch[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhci1zdGFja2VkLW11bHRpLWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vc3R5bGVzL19taXhpbnMuc2NzcyIsIi4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxhQUFBO0FBRkY7QUNxTEU7RURwTEY7SUFJSSxhQUFBO0VBREY7QUFDRjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFVFa0hxQjtBRm5IdkIiLCJmaWxlIjoiYmFyLXN0YWNrZWQtbXVsdGktY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdtaXhpbnMnO1xuQGltcG9ydCAndmFyaWFibGVzJztcblxuLmJhc2UtY2hhcnQge1xuICBoZWlnaHQ6IDMyNXB4O1xuXG4gIEBpbmNsdWRlIG1vYmlsZS1vbmx5IHtcbiAgICBoZWlnaHQ6IDQxMHB4O1xuICB9XG59XG5cbmxvb3Atc3dpdGNoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6ICRjaGFydC1jb250cm9sLXppbmRleDtcbn1cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbkBtaXhpbiBmbGV4LWdhcCgkZ2FwLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBtYXJnaW4tdG9wOiAoLSRnYXApO1xuICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgoLSRnYXApLCAkZ2xvYmFsKTtcblxuICA+ICoge1xuICAgIG1hcmdpbi10b3A6ICRnYXA7XG4gICAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoJGdhcCwgJGdsb2JhbCk7XG4gIH1cbn1cblxuQG1peGluIGJhc2UtY29udGFpbmVyKCRjb250ZW50LXdpZHRoKSB7XG4gICRkZXNrdG9wLXBhZGRpbmc6IDJyZW07XG4gIG1heC13aWR0aDogY2FsYygjeyRjb250ZW50LXdpZHRofSArICgjeyRkZXNrdG9wLXBhZGRpbmd9KSk7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDJyZW0pIHtcbiAgICBAaW5jbHVkZSBwYWRkaW5nLWxlZnQoJGRlc2t0b3AtcGFkZGluZywgdHJ1ZSk7XG4gICAgQGluY2x1ZGUgcGFkZGluZy1yaWdodCgkZGVza3RvcC1wYWRkaW5nLCB0cnVlKTtcbiAgfVxufVxuXG5AbWl4aW4gY2VudGVyQWJzb2x1dGVFbGVtZW50IHtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcblxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuQG1peGluIG9ubHktbHRyLWdsb2JhbCB7XG4gIGh0bWw6bm90KFtkaXI9J3J0bCddKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1ydGwtZ2xvYmFsIHtcbiAgaHRtbFtkaXI9J3J0bCddICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LWx0ciB7XG4gIDpob3N0LWNvbnRleHQoaHRtbDpub3QoW2Rpcj0ncnRsJ10pKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1ydGwge1xuICA6aG9zdC1jb250ZXh0KGh0bWxbZGlyPSdydGwnXSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHJ0bC12YWx1ZSgkcHJvcGVydHksICRsdHItdmFsdWUsICRydGwtdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpZiAkZ2xvYmFsID09IHRydWUge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyLWdsb2JhbCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRsdHItdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwtZ2xvYmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHJ0bC12YWx1ZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGx0ci12YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRydGwtdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBydGwtcHJvcGVydHkoJGx0ci1wcm9wZXJ0eSwgJHJ0bC1wcm9wZXJ0eSwgJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaWYgJGdsb2JhbCA9PSB0cnVlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ci1nbG9iYWwge1xuICAgICAgI3skbHRyLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsLWdsb2JhbCB7XG4gICAgICAjeyRydGwtcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ciB7XG4gICAgICAjeyRsdHItcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwge1xuICAgICAgI3skcnRsLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWFyZ2luLWxlZnQoJG1hcmdpbiwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KG1hcmdpbi1sZWZ0LCBtYXJnaW4tcmlnaHQsICRtYXJnaW4sICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gbWFyZ2luLXJpZ2h0KCRtYXJnaW4sICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShtYXJnaW4tcmlnaHQsIG1hcmdpbi1sZWZ0LCAkbWFyZ2luLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmcoJHBhZGRpbmdUb3AsICRwYWRkaW5nUmlnaHQsICRwYWRkaW5nQm90dG9tLCAkcGFkZGluZ0xlZnQsICRnbG9iYWw6IGZhbHNlKSB7XG4gIHBhZGRpbmctdG9wOiAkcGFkZGluZ1RvcDtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctcmlnaHQsIHBhZGRpbmctbGVmdCwgJHBhZGRpbmdSaWdodCwgJGdsb2JhbCk7XG4gIHBhZGRpbmctYm90dG9tOiAkcGFkZGluZ1RvcDtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctbGVmdCwgcGFkZGluZy1yaWdodCwgJHBhZGRpbmdMZWZ0LCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmctbGVmdCgkcGFkZGluZywgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctbGVmdCwgcGFkZGluZy1yaWdodCwgJHBhZGRpbmcsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1yaWdodCgkcGFkZGluZywgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctcmlnaHQsIHBhZGRpbmctbGVmdCwgJHBhZGRpbmcsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gdGV4dC1hbGlnbi1sZWZ0KCRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZSh0ZXh0LWFsaWduLCBsZWZ0LCByaWdodCwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBsZWZ0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGxlZnQsIHJpZ2h0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcmlnaHQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocmlnaHQsIGxlZnQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiB0cmFuc2xhdGVYWSgkdmFsdWVYLCAkdmFsdWVZLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUodHJhbnNmb3JtLCB0cmFuc2xhdGUoJHZhbHVlWCwgJHZhbHVlWSksIHRyYW5zbGF0ZSgtJHZhbHVlWCwgJHZhbHVlWSksICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWxlZnQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWxlZnQsIGJvcmRlci1yaWdodCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1yaWdodCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItcmlnaHQsIGJvcmRlci1sZWZ0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMsIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItdG9wLXJpZ2h0LXJhZGl1cywgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItdG9wLWxlZnQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci10b3AtbGVmdC1yYWRpdXMsIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gZmxvYXQtbGVmdCgkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUoZmxvYXQsIGxlZnQsIHJpZ2h0LCAkZ2xvYmFsOiBmYWxzZSk7XG59XG5cbkBtaXhpbiBmbG9hdC1yaWdodCB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZShmbG9hdCwgcmlnaHQsIGxlZnQsICRnbG9iYWw6IGZhbHNlKTtcbn1cblxuQG1peGluIHNtYWxsLWRlc2t0b3Atb25seSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1sZykgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXhsIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLWFuZC10YWJsZXQtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZyAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtYWxsLW1vYmlsZS1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXMgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1tZCAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1kKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbGcpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLXVwIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1kKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGRpc2FibGUtc2Nyb2xsYmFyIHtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iLCIkc3RhbmRhcmRGb250RmFtaWx5OiAnTm90byBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4kY29udGVudC10b3AtcGFkZGluZzogM3JlbTtcbiRwb3N0LWxpc3QtYmc6ICNkYWRhZGE7XG4kd2hpdGU6ICNmZmZmZmY7XG4kcG9zdC1wcmV2aWV3LWJnOiB3aGl0ZTtcbiRsaWdodC1ncmF5LWJnOiAjZjRmNGY0O1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLWxlZnQ6IDIuMzQ0cmVtO1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLXJpZ2h0OiAxLjA2M3JlbTtcbiRwb3N0LXByZXZpZXctcGFkZGluZzogMi41cmVtICRwb3N0LXByZXZpZXctcGFkZGluZy1yaWdodCAxLjI1cmVtICRwb3N0LXByZXZpZXctcGFkZGluZy1sZWZ0O1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLW1vYmlsZTogMXJlbSAxcmVtIDAuNXJlbSAxcmVtO1xuJHBvc3QtcGFkZGluZy1ib3R0b206IDFyZW07XG4kcG9zdC1wcmV2aWV3LWd1dHRlcjogMnB4O1xuJHBvc3QtaGlnaGxpZ2h0LWNvbG9yOiAjNTcwZjg1O1xuJGNvbG9yLXB1cnBsZS05MDogIzMxMTM1ZTtcbiRjb2xvci1wdXJwbGUtNjA6ICM5ODhhYWU7XG4kY29sb3ItcHVycGxlLTUwOiAjOTg4OWFmO1xuJGNvbG9yLXB1cnBsZS0xMDogI2Y1ZjNmNztcbiRjb2xvci1wdXJwbGUtbGlnaHQ6ICM0YjM1YmM7XG4kY29sb3ItcHVycGxlLXZlcnktbGlnaHQ6ICM4NjZhYjA7XG4kY29sb3ItcHVycGxlLXN0ZXBwZXI6ICM0YTJiN2E7XG4kY29sb3ItZ3JlZW4tMTAwOiAjMDUyODA0O1xuJGNvbG9yLWdyZWVuLTkwOiAjMGQzZDBiO1xuJGNvbG9yLWdyZWVuLTgwOiAjMWY2YjFlO1xuJGNvbG9yLWdyZWVuLTcwOiAjMzU4YTM0O1xuJGNvbG9yLWdyZWVuLTYwOiAjNmQ5YTZlO1xuJGNvbG9yLWdyZWVuLTUwOiAjODlhODhmO1xuJGNvbG9yLWdyZWVuLTQwOiAjOWZjOGE2O1xuJGNvbG9yLWdyZWVuLTMwOiAjYWFkNmIzO1xuJGNvbG9yLWdyZWVuLTIwOiAjYzllOWQxO1xuJGNvbG9yLWdyZWVuLTEwOiAjZjNmN2YzO1xuJGNvbG9yLWdyZWVuLXN0ZXBwZXI6ICMxMDdENzk7XG4kY29sb3ItZ3JlZW4tbWVkaXVtOiAjYWRkYWFmO1xuJGNvbG9yLWdyZWVuLWxpZ2h0OiAjM0FCMDk4O1xuJGNvbG9yLWdyZWVuLXZlcnktbGlnaHQ6ICNFREZGRkM7XG4kZ3JleS0xOiAjZDZkMGRmO1xuJHN1cHBvcnQtMDE6ICNkYTFlMjg7XG4kZXJyb3I6ICNlZTIzMmY7XG4kdGV4dC1ibGFjazogIzE2MTYxNjtcbiR0ZXh0LXNlY29uZGFyeTogIzM5MzkzOTtcbiR0ZXh0LWdyYXllZDogIzUyNTI1MjtcbiR0ZXh0LWdyYXllZDgwOiAjOGY4YjhiO1xuJHRleHQtZ3JheS1jYXQ6ICM2ZDcyNzg7XG4kdWktYmFja2dyb3VuZC1ncmF5OiAjZjhmOGY5O1xuJGJvcmRlcjogI2U4ZTdlYTtcbiRlbnRpdHktYm9yZGVyLWNvbG9yOiAjMWMwZjMwMjE7XG4kbG9hZGluZy1iZzogcmdiKDAgMCAwIC8gMTglKTtcbiRzdXBwb3J0LTA0OiAjMDA0M2NlO1xuJGxvb3AtdXNlcm5hbWU6ICMxOTgwMzg7XG4kbG9vcC1hY3RpdmUtY3VycmVudC11c2VyOiAjMjRhMTQ4O1xuJHdhcm0tZ3JheS0xMC1jb2xvcjogI2Y3ZjNmMjtcbiR3YXJtLWdyYXktMjAtY29sb3I6ICNlNWUwZGY7XG4kaGVhZGluZy0xLWNvbG9yOiAjMWMwZjMwO1xuJGhlYWRpbmctMi1jb2xvcjogIzMyMDc0ZDtcbiRoZWFkaW5nLTMtY29sb3I6ICMyZjI3MzU7XG4kbW9iaWxlLWljb24tY29sb3I6ICMxYzBmMzA7XG4kc3RhdGUtZGlzYWJsZWQtMDI6ICNjNmM2YzY7XG4kbGluay0wMjogIzU2MDFiMjtcbiRoZWFkZXItcHVycGxlOiAjMzExMzVlO1xuJGhlYWRlci1ncmVlbjogIzEwN2Q3OTtcbiRwdXJwbGUtbGlnaHQ6ICNjYmM0ZDc7XG4kcHVycGxlLWJhY2tncm91bmQtbGlnaHQ6ICNkY2Q1ZTc7XG4kbG9vcC1pbnRlcmFjdGl2ZS0wMTogIzEwN2Q3OTtcbiRsb29wLWludGVyYWN0aXZlLTAxLW9wYWNpdHk6IHJnYmEoMTYsIDEyNSwgMTIxLCAwLjMpO1xuJGZpbHRlcnMtZ3JlZW46ICMwNTY3NjM7XG4vLyBCcmVha3BvaW50c1xuXG4kYnJlYWtwb2ludC1zOiAzNzVweDtcbiRicmVha3BvaW50LXNtOiA0MjBweDtcbiRicmVha3BvaW50LW1kOiA3NjhweDtcbiRicmVha3BvaW50LWxnOiAxMDgwcHg7XG4kYnJlYWtwb2ludC14bDogMTI3NXB4O1xuXG4kYnJlYWtwb2ludC1tZC12MjogODIwcHg7XG5cbiRoZWFkZXItaGVpZ2h0OiA0LjM3NXJlbTtcbiRoZWFkZXItaGVpZ2h0LXYyOiA0LjM3NXJlbTtcbiRzdGF0ZS1zZWxlY3RlZC11aTogI2UwZTBlMDtcbiRjLWxlZnQtcGFkZGluZzogMS41cmVtO1xuJG1lbnUtYWN0aXZlLWNvbG9yOiAjM0FCMDk4O1xuJG1lbnUtaG92ZXItY29sb3I6ICMzQUIwOTg7XG4kdGFiLWluYWN0aXZlLWNvbG9yOiAjODlhZjkzO1xuJGxpbmUtY29sb3I6ICNkMGRmZDI7XG4kYm9yZGVyLWdyYXk6ICNjY2NjY2M7XG4kdGV4dC1ncmF5OiAjODA4MDgwO1xuJGJhc2UtY29udGFpbmVyLXdpZHRoOiA4MS4xMjRyZW07XG4kaGVhZGVyLXVuZGVybGluZS1oZWlnaHQ6IDAuMzEzcmVtO1xuXG4vLyBNb2RlcmF0b3IgcmV2aWV3IHNlY3Rpb25zXG4kZm9vdGVyLWhlaWdodDogNHJlbTtcbiR0b3BiYXItaGVpZ2h0OiAxMC41cmVtO1xuJHN0ZXBwZXItaGVpZ2h0OiA2LjdyZW07XG5cbi8vIE5ldyBTdG9yeSBmbG93IC8gc3RvcnkgZGV0YWlscyB2YXJpYWJsZXNcbiRncmV5OiAjNjU2NTY1O1xuJGxpZ2h0LWdyZXktMjogI2IxYjRiNjtcbiRsaWdodC1ncmV5LTM6ICNiNGI0YjQ7XG4kbGlnaHQtZ3JleS00OiAjY2ZkM2Q4O1xuJGxpZ2h0LWdyZXktNTogI2Q5ZTBlNztcbiRsaWdodC1ncmV5LTY6ICNmMWYyZjI7XG4kbGlnaHQtZ3JleS03OiAjYzRjNGM0O1xuJGxpZ2h0LWdyZXktODogI2U5ZTllOTtcbiRsaWdodC1ncmV5LTk6ICNlNmVhZWQ7XG4kbGlnaC1ncmV5LXNlcGFyYXRvcjogI2MwYzBjMDtcbiRkYXJrLWdyZXk6ICMxYTFhMWE7XG4kZGFyay1ncmV5LTUwOiByZ2IoMjYsIDI2LCAyNiwgMC41KTtcbiRib3JkZXItZ3JleTogI2M3Y2RkNDtcbiRsaWdodC1wdXJwbGU6ICNlYWVhZWE7XG4kaW5wdXQtZGlzYWJsZWQtYmc6ICNmNGY2Zjg7XG4kZXJyb3ItMjogI2RlMjIyZDtcbiRkYW5nZXI6ICNjOTMwNGQ7XG4kcHJldmlvdXMtcGlsbC1jb2xvcjogIzcxOGQ2ZjtcbiR0b29sdGlwLWdyZXk6ICNhYmFiYWI7XG4kbGlnaHQtZ3JlZW46ICNjZmU1ZTQ2NjtcblxuJGZpbHRlcnMtbW9kYWwtaGVhZGVyLXppbmRleDogMTAwMDA7XG4kbW9kYWwtemluZGV4OiA5OTk5O1xuJGxvY2F0aW9uLW92ZXJsYXktemluZGV4OiA5MDAxO1xuJGhlYWRlci1hc2lkZS16aW5kZXg6IDgwMDI7XG4kaGVhZGVyLWFzaWRlLWJhY2tncm91bmQtemluZGV4OiA4MDAxO1xuJGhlYWRlci16aW5kZXg6IDgwMDA7XG4kbmF2aWdhdGlvbi16aW5kZXg6IDgwMDA7XG4kcGFnZS1sb2FkaW5nLXppbmRleDogNzAwMTtcbiR0b29sdGlwLXppbmRleDogNzAwMDtcbiRuZXctc3RvcnktY29udGVudC1zdGF0ZS16aW5kZXg6IDUwMDtcbiRmaWx0ZXItZHJvcGRvd24temluZGV4OiAxMDA7XG4kbW9kYWwtdG9wLWluZGljYXRvci16aW5kZXg6IDUxO1xuJG1vZGFsLXRvcC1pbmRpY2F0b3ItYmFja2dyb3VuZC16aW5kZXg6IDUxO1xuJGNoYXJ0LXppbmRleDogMTtcbiRjaGFydC1jb250cm9sLXppbmRleDogMjtcblxuJHNsaWRlLXRvZ2dsZS1kaXNhYmxlZC1vcHRpb24tYmFja2dyb3VuZDogI2RkZGRkZDtcblxuJHRvYXN0LWluZm8tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4kdG9hc3QtaW5mby10aXRsZS1jb2xvcjogIzQ5NDk0OTtcbiR0b2FzdC1pbmZvLW1lc3NhZ2UtY29sb3I6ICM0MjJjMDA7XG4kdG9hc3QtaW5mby1idXR0b24tY29sb3I6ICM2YzRlOTk7XG5cbiR0b2FzdC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6ICNkOWVlZWQ7XG4kdG9hc3Qtc3VjY2Vzcy10aXRsZS1jb2xvcjogIzAwNDU0MjtcbiR0b2FzdC1zdWNjZXNzLW1lc3NhZ2UtY29sb3I6ICMwMTMyMzA7XG4kdG9hc3Qtc3VjY2Vzcy1idXR0b24tY29sb3I6ICMwMTY5NjU7XG5cbiR0b2FzdC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6ICNmZmYxZDU7XG4kdG9hc3Qtd2FybmluZy10aXRsZS1jb2xvcjogIzZiNDcwMDtcbiR0b2FzdC13YXJuaW5nLW1lc3NhZ2UtY29sb3I6ICM0MjJjMDA7XG4kdG9hc3Qtd2FybmluZy1idXR0b24tY29sb3I6ICNjYzhmMTQ7XG5cbiR0b2FzdC1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiAjZjVkNWRiO1xuJHRvYXN0LWVycm9yLXRpdGxlLWNvbG9yOiAjNzMwMDE1O1xuJHRvYXN0LWVycm9yLW1lc3NhZ2UtY29sb3I6ICM0NTA2MTE7XG4kdG9hc3QtZXJyb3Itc3VjY2Vzcy1jb2xvcjogI2Q5ZWVlZDtcbiR0b2FzdC1lcnJvci1idXR0b24tY29sb3I6ICNiMjFkMzk7XG5cbiR0b2FzdC1jbG9zZS1idXR0b24tY29sb3I6ICM3MzAwMTU7XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2hhcnRzL2Jhci1zdGFja2VkLW11bHRpLWNoYXJ0L2Jhci1zdGFja2VkLW11bHRpLWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9zdHlsZXMvX21peGlucy5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsYUFBQTtBQUZGO0FDcUxFO0VEcExGO0lBSUksYUFBQTtFQURGO0FBQ0Y7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVRWtIcUI7QUZuSHZCO0FBQ0Esd3laQUF3eVoiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdtaXhpbnMnO1xuQGltcG9ydCAndmFyaWFibGVzJztcblxuLmJhc2UtY2hhcnQge1xuICBoZWlnaHQ6IDMyNXB4O1xuXG4gIEBpbmNsdWRlIG1vYmlsZS1vbmx5IHtcbiAgICBoZWlnaHQ6IDQxMHB4O1xuICB9XG59XG5cbmxvb3Atc3dpdGNoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6ICRjaGFydC1jb250cm9sLXppbmRleDtcbn1cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbkBtaXhpbiBmbGV4LWdhcCgkZ2FwLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBtYXJnaW4tdG9wOiAoLSRnYXApO1xuICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgoLSRnYXApLCAkZ2xvYmFsKTtcblxuICA+ICoge1xuICAgIG1hcmdpbi10b3A6ICRnYXA7XG4gICAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoJGdhcCwgJGdsb2JhbCk7XG4gIH1cbn1cblxuQG1peGluIGJhc2UtY29udGFpbmVyKCRjb250ZW50LXdpZHRoKSB7XG4gICRkZXNrdG9wLXBhZGRpbmc6IDJyZW07XG4gIG1heC13aWR0aDogY2FsYygjeyRjb250ZW50LXdpZHRofSArICgjeyRkZXNrdG9wLXBhZGRpbmd9KSk7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDJyZW0pIHtcbiAgICBAaW5jbHVkZSBwYWRkaW5nLWxlZnQoJGRlc2t0b3AtcGFkZGluZywgdHJ1ZSk7XG4gICAgQGluY2x1ZGUgcGFkZGluZy1yaWdodCgkZGVza3RvcC1wYWRkaW5nLCB0cnVlKTtcbiAgfVxufVxuXG5AbWl4aW4gY2VudGVyQWJzb2x1dGVFbGVtZW50IHtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcblxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuQG1peGluIG9ubHktbHRyLWdsb2JhbCB7XG4gIGh0bWw6bm90KFtkaXI9J3J0bCddKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1ydGwtZ2xvYmFsIHtcbiAgaHRtbFtkaXI9J3J0bCddICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LWx0ciB7XG4gIDpob3N0LWNvbnRleHQoaHRtbDpub3QoW2Rpcj0ncnRsJ10pKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1ydGwge1xuICA6aG9zdC1jb250ZXh0KGh0bWxbZGlyPSdydGwnXSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHJ0bC12YWx1ZSgkcHJvcGVydHksICRsdHItdmFsdWUsICRydGwtdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpZiAkZ2xvYmFsID09IHRydWUge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyLWdsb2JhbCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRsdHItdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwtZ2xvYmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHJ0bC12YWx1ZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGx0ci12YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRydGwtdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBydGwtcHJvcGVydHkoJGx0ci1wcm9wZXJ0eSwgJHJ0bC1wcm9wZXJ0eSwgJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaWYgJGdsb2JhbCA9PSB0cnVlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ci1nbG9iYWwge1xuICAgICAgI3skbHRyLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsLWdsb2JhbCB7XG4gICAgICAjeyRydGwtcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ciB7XG4gICAgICAjeyRsdHItcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwge1xuICAgICAgI3skcnRsLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWFyZ2luLWxlZnQoJG1hcmdpbiwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KG1hcmdpbi1sZWZ0LCBtYXJnaW4tcmlnaHQsICRtYXJnaW4sICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gbWFyZ2luLXJpZ2h0KCRtYXJnaW4sICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShtYXJnaW4tcmlnaHQsIG1hcmdpbi1sZWZ0LCAkbWFyZ2luLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmcoJHBhZGRpbmdUb3AsICRwYWRkaW5nUmlnaHQsICRwYWRkaW5nQm90dG9tLCAkcGFkZGluZ0xlZnQsICRnbG9iYWw6IGZhbHNlKSB7XG4gIHBhZGRpbmctdG9wOiAkcGFkZGluZ1RvcDtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctcmlnaHQsIHBhZGRpbmctbGVmdCwgJHBhZGRpbmdSaWdodCwgJGdsb2JhbCk7XG4gIHBhZGRpbmctYm90dG9tOiAkcGFkZGluZ1RvcDtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctbGVmdCwgcGFkZGluZy1yaWdodCwgJHBhZGRpbmdMZWZ0LCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmctbGVmdCgkcGFkZGluZywgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctbGVmdCwgcGFkZGluZy1yaWdodCwgJHBhZGRpbmcsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1yaWdodCgkcGFkZGluZywgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctcmlnaHQsIHBhZGRpbmctbGVmdCwgJHBhZGRpbmcsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gdGV4dC1hbGlnbi1sZWZ0KCRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZSh0ZXh0LWFsaWduLCBsZWZ0LCByaWdodCwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBsZWZ0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGxlZnQsIHJpZ2h0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcmlnaHQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocmlnaHQsIGxlZnQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiB0cmFuc2xhdGVYWSgkdmFsdWVYLCAkdmFsdWVZLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUodHJhbnNmb3JtLCB0cmFuc2xhdGUoJHZhbHVlWCwgJHZhbHVlWSksIHRyYW5zbGF0ZSgtJHZhbHVlWCwgJHZhbHVlWSksICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWxlZnQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWxlZnQsIGJvcmRlci1yaWdodCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1yaWdodCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItcmlnaHQsIGJvcmRlci1sZWZ0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMsIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItdG9wLXJpZ2h0LXJhZGl1cywgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItdG9wLWxlZnQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci10b3AtbGVmdC1yYWRpdXMsIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gZmxvYXQtbGVmdCgkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUoZmxvYXQsIGxlZnQsIHJpZ2h0LCAkZ2xvYmFsOiBmYWxzZSk7XG59XG5cbkBtaXhpbiBmbG9hdC1yaWdodCB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZShmbG9hdCwgcmlnaHQsIGxlZnQsICRnbG9iYWw6IGZhbHNlKTtcbn1cblxuQG1peGluIHNtYWxsLWRlc2t0b3Atb25seSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1sZykgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXhsIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLWFuZC10YWJsZXQtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZyAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtYWxsLW1vYmlsZS1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXMgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1tZCAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1kKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbGcpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLXVwIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1kKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGRpc2FibGUtc2Nyb2xsYmFyIHtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iLCIkc3RhbmRhcmRGb250RmFtaWx5OiAnTm90byBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4kY29udGVudC10b3AtcGFkZGluZzogM3JlbTtcbiRwb3N0LWxpc3QtYmc6ICNkYWRhZGE7XG4kd2hpdGU6ICNmZmZmZmY7XG4kcG9zdC1wcmV2aWV3LWJnOiB3aGl0ZTtcbiRsaWdodC1ncmF5LWJnOiAjZjRmNGY0O1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLWxlZnQ6IDIuMzQ0cmVtO1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLXJpZ2h0OiAxLjA2M3JlbTtcbiRwb3N0LXByZXZpZXctcGFkZGluZzogMi41cmVtICRwb3N0LXByZXZpZXctcGFkZGluZy1yaWdodCAxLjI1cmVtICRwb3N0LXByZXZpZXctcGFkZGluZy1sZWZ0O1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLW1vYmlsZTogMXJlbSAxcmVtIDAuNXJlbSAxcmVtO1xuJHBvc3QtcGFkZGluZy1ib3R0b206IDFyZW07XG4kcG9zdC1wcmV2aWV3LWd1dHRlcjogMnB4O1xuJHBvc3QtaGlnaGxpZ2h0LWNvbG9yOiAjNTcwZjg1O1xuJGNvbG9yLXB1cnBsZS05MDogIzMxMTM1ZTtcbiRjb2xvci1wdXJwbGUtNjA6ICM5ODhhYWU7XG4kY29sb3ItcHVycGxlLTUwOiAjOTg4OWFmO1xuJGNvbG9yLXB1cnBsZS0xMDogI2Y1ZjNmNztcbiRjb2xvci1wdXJwbGUtbGlnaHQ6ICM0YjM1YmM7XG4kY29sb3ItcHVycGxlLXZlcnktbGlnaHQ6ICM4NjZhYjA7XG4kY29sb3ItcHVycGxlLXN0ZXBwZXI6ICM0YTJiN2E7XG4kY29sb3ItZ3JlZW4tMTAwOiAjMDUyODA0O1xuJGNvbG9yLWdyZWVuLTkwOiAjMGQzZDBiO1xuJGNvbG9yLWdyZWVuLTgwOiAjMWY2YjFlO1xuJGNvbG9yLWdyZWVuLTcwOiAjMzU4YTM0O1xuJGNvbG9yLWdyZWVuLTYwOiAjNmQ5YTZlO1xuJGNvbG9yLWdyZWVuLTUwOiAjODlhODhmO1xuJGNvbG9yLWdyZWVuLTQwOiAjOWZjOGE2O1xuJGNvbG9yLWdyZWVuLTMwOiAjYWFkNmIzO1xuJGNvbG9yLWdyZWVuLTIwOiAjYzllOWQxO1xuJGNvbG9yLWdyZWVuLTEwOiAjZjNmN2YzO1xuJGNvbG9yLWdyZWVuLXN0ZXBwZXI6ICMxMDdENzk7XG4kY29sb3ItZ3JlZW4tbWVkaXVtOiAjYWRkYWFmO1xuJGNvbG9yLWdyZWVuLWxpZ2h0OiAjM0FCMDk4O1xuJGNvbG9yLWdyZWVuLXZlcnktbGlnaHQ6ICNFREZGRkM7XG4kZ3JleS0xOiAjZDZkMGRmO1xuJHN1cHBvcnQtMDE6ICNkYTFlMjg7XG4kZXJyb3I6ICNlZTIzMmY7XG4kdGV4dC1ibGFjazogIzE2MTYxNjtcbiR0ZXh0LXNlY29uZGFyeTogIzM5MzkzOTtcbiR0ZXh0LWdyYXllZDogIzUyNTI1MjtcbiR0ZXh0LWdyYXllZDgwOiAjOGY4YjhiO1xuJHRleHQtZ3JheS1jYXQ6ICM2ZDcyNzg7XG4kdWktYmFja2dyb3VuZC1ncmF5OiAjZjhmOGY5O1xuJGJvcmRlcjogI2U4ZTdlYTtcbiRlbnRpdHktYm9yZGVyLWNvbG9yOiAjMWMwZjMwMjE7XG4kbG9hZGluZy1iZzogcmdiKDAgMCAwIC8gMTglKTtcbiRzdXBwb3J0LTA0OiAjMDA0M2NlO1xuJGxvb3AtdXNlcm5hbWU6ICMxOTgwMzg7XG4kbG9vcC1hY3RpdmUtY3VycmVudC11c2VyOiAjMjRhMTQ4O1xuJHdhcm0tZ3JheS0xMC1jb2xvcjogI2Y3ZjNmMjtcbiR3YXJtLWdyYXktMjAtY29sb3I6ICNlNWUwZGY7XG4kaGVhZGluZy0xLWNvbG9yOiAjMWMwZjMwO1xuJGhlYWRpbmctMi1jb2xvcjogIzMyMDc0ZDtcbiRoZWFkaW5nLTMtY29sb3I6ICMyZjI3MzU7XG4kbW9iaWxlLWljb24tY29sb3I6ICMxYzBmMzA7XG4kc3RhdGUtZGlzYWJsZWQtMDI6ICNjNmM2YzY7XG4kbGluay0wMjogIzU2MDFiMjtcbiRoZWFkZXItcHVycGxlOiAjMzExMzVlO1xuJGhlYWRlci1ncmVlbjogIzEwN2Q3OTtcbiRwdXJwbGUtbGlnaHQ6ICNjYmM0ZDc7XG4kcHVycGxlLWJhY2tncm91bmQtbGlnaHQ6ICNkY2Q1ZTc7XG4kbG9vcC1pbnRlcmFjdGl2ZS0wMTogIzEwN2Q3OTtcbiRsb29wLWludGVyYWN0aXZlLTAxLW9wYWNpdHk6IHJnYmEoMTYsIDEyNSwgMTIxLCAwLjMpO1xuJGZpbHRlcnMtZ3JlZW46ICMwNTY3NjM7XG4vLyBCcmVha3BvaW50c1xuXG4kYnJlYWtwb2ludC1zOiAzNzVweDtcbiRicmVha3BvaW50LXNtOiA0MjBweDtcbiRicmVha3BvaW50LW1kOiA3NjhweDtcbiRicmVha3BvaW50LWxnOiAxMDgwcHg7XG4kYnJlYWtwb2ludC14bDogMTI3NXB4O1xuXG4kYnJlYWtwb2ludC1tZC12MjogODIwcHg7XG5cbiRoZWFkZXItaGVpZ2h0OiA0LjM3NXJlbTtcbiRoZWFkZXItaGVpZ2h0LXYyOiA0LjM3NXJlbTtcbiRzdGF0ZS1zZWxlY3RlZC11aTogI2UwZTBlMDtcbiRjLWxlZnQtcGFkZGluZzogMS41cmVtO1xuJG1lbnUtYWN0aXZlLWNvbG9yOiAjM0FCMDk4O1xuJG1lbnUtaG92ZXItY29sb3I6ICMzQUIwOTg7XG4kdGFiLWluYWN0aXZlLWNvbG9yOiAjODlhZjkzO1xuJGxpbmUtY29sb3I6ICNkMGRmZDI7XG4kYm9yZGVyLWdyYXk6ICNjY2NjY2M7XG4kdGV4dC1ncmF5OiAjODA4MDgwO1xuJGJhc2UtY29udGFpbmVyLXdpZHRoOiA4MS4xMjRyZW07XG4kaGVhZGVyLXVuZGVybGluZS1oZWlnaHQ6IDAuMzEzcmVtO1xuXG4vLyBNb2RlcmF0b3IgcmV2aWV3IHNlY3Rpb25zXG4kZm9vdGVyLWhlaWdodDogNHJlbTtcbiR0b3BiYXItaGVpZ2h0OiAxMC41cmVtO1xuJHN0ZXBwZXItaGVpZ2h0OiA2LjdyZW07XG5cbi8vIE5ldyBTdG9yeSBmbG93IC8gc3RvcnkgZGV0YWlscyB2YXJpYWJsZXNcbiRncmV5OiAjNjU2NTY1O1xuJGxpZ2h0LWdyZXktMjogI2IxYjRiNjtcbiRsaWdodC1ncmV5LTM6ICNiNGI0YjQ7XG4kbGlnaHQtZ3JleS00OiAjY2ZkM2Q4O1xuJGxpZ2h0LWdyZXktNTogI2Q5ZTBlNztcbiRsaWdodC1ncmV5LTY6ICNmMWYyZjI7XG4kbGlnaHQtZ3JleS03OiAjYzRjNGM0O1xuJGxpZ2h0LWdyZXktODogI2U5ZTllOTtcbiRsaWdodC1ncmV5LTk6ICNlNmVhZWQ7XG4kbGlnaC1ncmV5LXNlcGFyYXRvcjogI2MwYzBjMDtcbiRkYXJrLWdyZXk6ICMxYTFhMWE7XG4kZGFyay1ncmV5LTUwOiByZ2IoMjYsIDI2LCAyNiwgMC41KTtcbiRib3JkZXItZ3JleTogI2M3Y2RkNDtcbiRsaWdodC1wdXJwbGU6ICNlYWVhZWE7XG4kaW5wdXQtZGlzYWJsZWQtYmc6ICNmNGY2Zjg7XG4kZXJyb3ItMjogI2RlMjIyZDtcbiRkYW5nZXI6ICNjOTMwNGQ7XG4kcHJldmlvdXMtcGlsbC1jb2xvcjogIzcxOGQ2ZjtcbiR0b29sdGlwLWdyZXk6ICNhYmFiYWI7XG4kbGlnaHQtZ3JlZW46ICNjZmU1ZTQ2NjtcblxuJGZpbHRlcnMtbW9kYWwtaGVhZGVyLXppbmRleDogMTAwMDA7XG4kbW9kYWwtemluZGV4OiA5OTk5O1xuJGxvY2F0aW9uLW92ZXJsYXktemluZGV4OiA5MDAxO1xuJGhlYWRlci1hc2lkZS16aW5kZXg6IDgwMDI7XG4kaGVhZGVyLWFzaWRlLWJhY2tncm91bmQtemluZGV4OiA4MDAxO1xuJGhlYWRlci16aW5kZXg6IDgwMDA7XG4kbmF2aWdhdGlvbi16aW5kZXg6IDgwMDA7XG4kcGFnZS1sb2FkaW5nLXppbmRleDogNzAwMTtcbiR0b29sdGlwLXppbmRleDogNzAwMDtcbiRuZXctc3RvcnktY29udGVudC1zdGF0ZS16aW5kZXg6IDUwMDtcbiRmaWx0ZXItZHJvcGRvd24temluZGV4OiAxMDA7XG4kbW9kYWwtdG9wLWluZGljYXRvci16aW5kZXg6IDUxO1xuJG1vZGFsLXRvcC1pbmRpY2F0b3ItYmFja2dyb3VuZC16aW5kZXg6IDUxO1xuJGNoYXJ0LXppbmRleDogMTtcbiRjaGFydC1jb250cm9sLXppbmRleDogMjtcblxuJHNsaWRlLXRvZ2dsZS1kaXNhYmxlZC1vcHRpb24tYmFja2dyb3VuZDogI2RkZGRkZDtcblxuJHRvYXN0LWluZm8tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4kdG9hc3QtaW5mby10aXRsZS1jb2xvcjogIzQ5NDk0OTtcbiR0b2FzdC1pbmZvLW1lc3NhZ2UtY29sb3I6ICM0MjJjMDA7XG4kdG9hc3QtaW5mby1idXR0b24tY29sb3I6ICM2YzRlOTk7XG5cbiR0b2FzdC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6ICNkOWVlZWQ7XG4kdG9hc3Qtc3VjY2Vzcy10aXRsZS1jb2xvcjogIzAwNDU0MjtcbiR0b2FzdC1zdWNjZXNzLW1lc3NhZ2UtY29sb3I6ICMwMTMyMzA7XG4kdG9hc3Qtc3VjY2Vzcy1idXR0b24tY29sb3I6ICMwMTY5NjU7XG5cbiR0b2FzdC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6ICNmZmYxZDU7XG4kdG9hc3Qtd2FybmluZy10aXRsZS1jb2xvcjogIzZiNDcwMDtcbiR0b2FzdC13YXJuaW5nLW1lc3NhZ2UtY29sb3I6ICM0MjJjMDA7XG4kdG9hc3Qtd2FybmluZy1idXR0b24tY29sb3I6ICNjYzhmMTQ7XG5cbiR0b2FzdC1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiAjZjVkNWRiO1xuJHRvYXN0LWVycm9yLXRpdGxlLWNvbG9yOiAjNzMwMDE1O1xuJHRvYXN0LWVycm9yLW1lc3NhZ2UtY29sb3I6ICM0NTA2MTE7XG4kdG9hc3QtZXJyb3Itc3VjY2Vzcy1jb2xvcjogI2Q5ZWVlZDtcbiR0b2FzdC1lcnJvci1idXR0b24tY29sb3I6ICNiMjFkMzk7XG5cbiR0b2FzdC1jbG9zZS1idXR0b24tY29sb3I6ICM3MzAwMTU7XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 70368:
/*!****************************************************************************************************!*\
  !*** ./src/app/shared/components/charts/bar-stacked-multi-chart/bar-stacked-multi-chart.module.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarStackedMultiChartModule": () => (/* binding */ BarStackedMultiChartModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _shared_components_switch_switch_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/components/switch/switch.module */ 46074);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-echarts */ 31548);
/* harmony import */ var _bar_stacked_multi_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bar-stacked-multi-chart.component */ 72417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);






class BarStackedMultiChartModule {
  static #_ = this.ɵfac = function BarStackedMultiChartModule_Factory(t) {
    return new (t || BarStackedMultiChartModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: BarStackedMultiChartModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_4__.NgxEchartsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _shared_components_switch_switch_module__WEBPACK_IMPORTED_MODULE_0__.SwitchModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BarStackedMultiChartModule, {
    declarations: [_bar_stacked_multi_chart_component__WEBPACK_IMPORTED_MODULE_1__.BarStackedMultiChartComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_4__.NgxEchartsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _shared_components_switch_switch_module__WEBPACK_IMPORTED_MODULE_0__.SwitchModule],
    exports: [_bar_stacked_multi_chart_component__WEBPACK_IMPORTED_MODULE_1__.BarStackedMultiChartComponent]
  });
})();

/***/ }),

/***/ 75983:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/charts/config/bar-groupped.config.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chartConfig": () => (/* binding */ chartConfig)
/* harmony export */ });
/* harmony import */ var _app_shared_components_charts_config_defaults_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/components/charts/config/defaults.config */ 73167);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


const chartConfig = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.merge)((0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(_app_shared_components_charts_config_defaults_config__WEBPACK_IMPORTED_MODULE_0__.chartDefaults), {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    icon: 'circle',
    selectedMode: false
  },
  grid: {
    height: 256,
    left: '0',
    width: '100%',
    top: '128',
    containLabel: true,
    tooltip: {
      axisPointer: {
        animation: false
      }
    }
  },
  xAxis: {
    interval: 1,
    boundaryGap: true,
    type: 'category',
    axisTick: {
      show: false
    }
  },
  yAxis: {
    show: false,
    type: 'value',
    scale: true,
    boundaryGap: ['0%', '10%']
  }
});

/***/ }),

/***/ 72182:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/components/charts/config/bar-stacked-multi.config.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chartConfig": () => (/* binding */ chartConfig)
/* harmony export */ });
/* harmony import */ var _app_shared_components_charts_config_bar_stacked_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/components/charts/config/bar-stacked.config */ 32592);
/* harmony import */ var _app_shared_components_charts_config_defaults_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/components/charts/config/defaults.config */ 73167);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



const chartConfig = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.merge)((0,lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(_app_shared_components_charts_config_defaults_config__WEBPACK_IMPORTED_MODULE_1__.chartDefaults), (0,lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(_app_shared_components_charts_config_bar_stacked_config__WEBPACK_IMPORTED_MODULE_0__.chartConfig));

/***/ }),

/***/ 46755:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/switch/switch.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwitchComponent": () => (/* binding */ SwitchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);



function SwitchComponent_button_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r1.selected === option_r2.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r2.text);
  }
}
function SwitchComponent_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitchComponent_button_0_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.switchClicked($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SwitchComponent_button_0_span_1_Template, 2, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.options);
  }
}
class SwitchComponent {
  constructor() {
    this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  switchClicked($event) {
    $event?.preventDefault();
    this.clicked.emit();
  }
  static #_ = this.ɵfac = function SwitchComponent_Factory(t) {
    return new (t || SwitchComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SwitchComponent,
    selectors: [["loop-switch"]],
    inputs: {
      options: "options",
      selected: "selected"
    },
    outputs: {
      clicked: "clicked"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "btn-switch", 3, "click", 4, "ngIf"], [1, "btn-switch", 3, "click"], [3, "active", 4, "ngFor", "ngForOf"]],
    template: function SwitchComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SwitchComponent_button_0_Template, 2, 1, "button", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.options);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    styles: ["[_nghost-%COMP%] {\n  -webkit-tap-highlight-color: transparent;\n}\n\n.btn-switch[_ngcontent-%COMP%] {\n  border-radius: 100px;\n  background-color: #d6d0df;\n  border: none;\n  padding: 0.7rem;\n  cursor: pointer;\n}\n.btn-switch[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.7rem;\n  border-radius: 100px;\n  color: #31135e;\n  font-weight: 400;\n}\n.btn-switch[_ngcontent-%COMP%]    > span.active[_ngcontent-%COMP%] {\n  font-weight: 600;\n  background-color: white;\n  transition: background-color 0.3s linear;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXRjaC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCIuLi8uLi8uLi9zdHlsZXMvbG9vcC1kZXNpZ24tc3lzdGVtL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHdDQUFBO0FBREY7O0FBSUE7RUFDRSxvQkFBQTtFQUNBLHlCQzBCTztFRHpCUCxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFERjtBQUdFO0VBQ0UsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNFTGM7RUZNZCxnQkFBQTtBQURKO0FBR0k7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0NBQUE7QUFETiIsImZpbGUiOiJzd2l0Y2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuQGltcG9ydCAnbG9vcC1kZXNpZ24tc3lzdGVtL2NvbG9ycyc7XG46aG9zdCB7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5idG4tc3dpdGNoIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRncmV5LTE7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMC43cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgPiBzcGFuIHtcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuN3JlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBjb2xvcjogJGxvb3AtcHVycGxlLTEwMDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgJi5hY3RpdmUge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGxpbmVhcjtcbiAgICB9XG4gIH1cbn1cbiIsIiRzdGFuZGFyZEZvbnRGYW1pbHk6ICdOb3RvIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRjb250ZW50LXRvcC1wYWRkaW5nOiAzcmVtO1xuJHBvc3QtbGlzdC1iZzogI2RhZGFkYTtcbiR3aGl0ZTogI2ZmZmZmZjtcbiRwb3N0LXByZXZpZXctYmc6IHdoaXRlO1xuJGxpZ2h0LWdyYXktYmc6ICNmNGY0ZjQ7XG4kcG9zdC1wcmV2aWV3LXBhZGRpbmctbGVmdDogMi4zNDRyZW07XG4kcG9zdC1wcmV2aWV3LXBhZGRpbmctcmlnaHQ6IDEuMDYzcmVtO1xuJHBvc3QtcHJldmlldy1wYWRkaW5nOiAyLjVyZW0gJHBvc3QtcHJldmlldy1wYWRkaW5nLXJpZ2h0IDEuMjVyZW0gJHBvc3QtcHJldmlldy1wYWRkaW5nLWxlZnQ7XG4kcG9zdC1wcmV2aWV3LXBhZGRpbmctbW9iaWxlOiAxcmVtIDFyZW0gMC41cmVtIDFyZW07XG4kcG9zdC1wYWRkaW5nLWJvdHRvbTogMXJlbTtcbiRwb3N0LXByZXZpZXctZ3V0dGVyOiAycHg7XG4kcG9zdC1oaWdobGlnaHQtY29sb3I6ICM1NzBmODU7XG4kY29sb3ItcHVycGxlLTkwOiAjMzExMzVlO1xuJGNvbG9yLXB1cnBsZS02MDogIzk4OGFhZTtcbiRjb2xvci1wdXJwbGUtNTA6ICM5ODg5YWY7XG4kY29sb3ItcHVycGxlLTEwOiAjZjVmM2Y3O1xuJGNvbG9yLXB1cnBsZS1saWdodDogIzRiMzViYztcbiRjb2xvci1wdXJwbGUtdmVyeS1saWdodDogIzg2NmFiMDtcbiRjb2xvci1wdXJwbGUtc3RlcHBlcjogIzRhMmI3YTtcbiRjb2xvci1ncmVlbi0xMDA6ICMwNTI4MDQ7XG4kY29sb3ItZ3JlZW4tOTA6ICMwZDNkMGI7XG4kY29sb3ItZ3JlZW4tODA6ICMxZjZiMWU7XG4kY29sb3ItZ3JlZW4tNzA6ICMzNThhMzQ7XG4kY29sb3ItZ3JlZW4tNjA6ICM2ZDlhNmU7XG4kY29sb3ItZ3JlZW4tNTA6ICM4OWE4OGY7XG4kY29sb3ItZ3JlZW4tNDA6ICM5ZmM4YTY7XG4kY29sb3ItZ3JlZW4tMzA6ICNhYWQ2YjM7XG4kY29sb3ItZ3JlZW4tMjA6ICNjOWU5ZDE7XG4kY29sb3ItZ3JlZW4tMTA6ICNmM2Y3ZjM7XG4kY29sb3ItZ3JlZW4tc3RlcHBlcjogIzEwN0Q3OTtcbiRjb2xvci1ncmVlbi1tZWRpdW06ICNhZGRhYWY7XG4kY29sb3ItZ3JlZW4tbGlnaHQ6ICMzQUIwOTg7XG4kY29sb3ItZ3JlZW4tdmVyeS1saWdodDogI0VERkZGQztcbiRncmV5LTE6ICNkNmQwZGY7XG4kc3VwcG9ydC0wMTogI2RhMWUyODtcbiRlcnJvcjogI2VlMjMyZjtcbiR0ZXh0LWJsYWNrOiAjMTYxNjE2O1xuJHRleHQtc2Vjb25kYXJ5OiAjMzkzOTM5O1xuJHRleHQtZ3JheWVkOiAjNTI1MjUyO1xuJHRleHQtZ3JheWVkODA6ICM4ZjhiOGI7XG4kdGV4dC1ncmF5LWNhdDogIzZkNzI3ODtcbiR1aS1iYWNrZ3JvdW5kLWdyYXk6ICNmOGY4Zjk7XG4kYm9yZGVyOiAjZThlN2VhO1xuJGVudGl0eS1ib3JkZXItY29sb3I6ICMxYzBmMzAyMTtcbiRsb2FkaW5nLWJnOiByZ2IoMCAwIDAgLyAxOCUpO1xuJHN1cHBvcnQtMDQ6ICMwMDQzY2U7XG4kbG9vcC11c2VybmFtZTogIzE5ODAzODtcbiRsb29wLWFjdGl2ZS1jdXJyZW50LXVzZXI6ICMyNGExNDg7XG4kd2FybS1ncmF5LTEwLWNvbG9yOiAjZjdmM2YyO1xuJHdhcm0tZ3JheS0yMC1jb2xvcjogI2U1ZTBkZjtcbiRoZWFkaW5nLTEtY29sb3I6ICMxYzBmMzA7XG4kaGVhZGluZy0yLWNvbG9yOiAjMzIwNzRkO1xuJGhlYWRpbmctMy1jb2xvcjogIzJmMjczNTtcbiRtb2JpbGUtaWNvbi1jb2xvcjogIzFjMGYzMDtcbiRzdGF0ZS1kaXNhYmxlZC0wMjogI2M2YzZjNjtcbiRsaW5rLTAyOiAjNTYwMWIyO1xuJGhlYWRlci1wdXJwbGU6ICMzMTEzNWU7XG4kaGVhZGVyLWdyZWVuOiAjMTA3ZDc5O1xuJHB1cnBsZS1saWdodDogI2NiYzRkNztcbiRwdXJwbGUtYmFja2dyb3VuZC1saWdodDogI2RjZDVlNztcbiRsb29wLWludGVyYWN0aXZlLTAxOiAjMTA3ZDc5O1xuJGxvb3AtaW50ZXJhY3RpdmUtMDEtb3BhY2l0eTogcmdiYSgxNiwgMTI1LCAxMjEsIDAuMyk7XG4kZmlsdGVycy1ncmVlbjogIzA1Njc2Mztcbi8vIEJyZWFrcG9pbnRzXG5cbiRicmVha3BvaW50LXM6IDM3NXB4O1xuJGJyZWFrcG9pbnQtc206IDQyMHB4O1xuJGJyZWFrcG9pbnQtbWQ6IDc2OHB4O1xuJGJyZWFrcG9pbnQtbGc6IDEwODBweDtcbiRicmVha3BvaW50LXhsOiAxMjc1cHg7XG5cbiRicmVha3BvaW50LW1kLXYyOiA4MjBweDtcblxuJGhlYWRlci1oZWlnaHQ6IDQuMzc1cmVtO1xuJGhlYWRlci1oZWlnaHQtdjI6IDQuMzc1cmVtO1xuJHN0YXRlLXNlbGVjdGVkLXVpOiAjZTBlMGUwO1xuJGMtbGVmdC1wYWRkaW5nOiAxLjVyZW07XG4kbWVudS1hY3RpdmUtY29sb3I6ICMzQUIwOTg7XG4kbWVudS1ob3Zlci1jb2xvcjogIzNBQjA5ODtcbiR0YWItaW5hY3RpdmUtY29sb3I6ICM4OWFmOTM7XG4kbGluZS1jb2xvcjogI2QwZGZkMjtcbiRib3JkZXItZ3JheTogI2NjY2NjYztcbiR0ZXh0LWdyYXk6ICM4MDgwODA7XG4kYmFzZS1jb250YWluZXItd2lkdGg6IDgxLjEyNHJlbTtcbiRoZWFkZXItdW5kZXJsaW5lLWhlaWdodDogMC4zMTNyZW07XG5cbi8vIE1vZGVyYXRvciByZXZpZXcgc2VjdGlvbnNcbiRmb290ZXItaGVpZ2h0OiA0cmVtO1xuJHRvcGJhci1oZWlnaHQ6IDEwLjVyZW07XG4kc3RlcHBlci1oZWlnaHQ6IDYuN3JlbTtcblxuLy8gTmV3IFN0b3J5IGZsb3cgLyBzdG9yeSBkZXRhaWxzIHZhcmlhYmxlc1xuJGdyZXk6ICM2NTY1NjU7XG4kbGlnaHQtZ3JleS0yOiAjYjFiNGI2O1xuJGxpZ2h0LWdyZXktMzogI2I0YjRiNDtcbiRsaWdodC1ncmV5LTQ6ICNjZmQzZDg7XG4kbGlnaHQtZ3JleS01OiAjZDllMGU3O1xuJGxpZ2h0LWdyZXktNjogI2YxZjJmMjtcbiRsaWdodC1ncmV5LTc6ICNjNGM0YzQ7XG4kbGlnaHQtZ3JleS04OiAjZTllOWU5O1xuJGxpZ2h0LWdyZXktOTogI2U2ZWFlZDtcbiRsaWdoLWdyZXktc2VwYXJhdG9yOiAjYzBjMGMwO1xuJGRhcmstZ3JleTogIzFhMWExYTtcbiRkYXJrLWdyZXktNTA6IHJnYigyNiwgMjYsIDI2LCAwLjUpO1xuJGJvcmRlci1ncmV5OiAjYzdjZGQ0O1xuJGxpZ2h0LXB1cnBsZTogI2VhZWFlYTtcbiRpbnB1dC1kaXNhYmxlZC1iZzogI2Y0ZjZmODtcbiRlcnJvci0yOiAjZGUyMjJkO1xuJGRhbmdlcjogI2M5MzA0ZDtcbiRwcmV2aW91cy1waWxsLWNvbG9yOiAjNzE4ZDZmO1xuJHRvb2x0aXAtZ3JleTogI2FiYWJhYjtcbiRsaWdodC1ncmVlbjogI2NmZTVlNDY2O1xuXG4kZmlsdGVycy1tb2RhbC1oZWFkZXItemluZGV4OiAxMDAwMDtcbiRtb2RhbC16aW5kZXg6IDk5OTk7XG4kbG9jYXRpb24tb3ZlcmxheS16aW5kZXg6IDkwMDE7XG4kaGVhZGVyLWFzaWRlLXppbmRleDogODAwMjtcbiRoZWFkZXItYXNpZGUtYmFja2dyb3VuZC16aW5kZXg6IDgwMDE7XG4kaGVhZGVyLXppbmRleDogODAwMDtcbiRuYXZpZ2F0aW9uLXppbmRleDogODAwMDtcbiRwYWdlLWxvYWRpbmctemluZGV4OiA3MDAxO1xuJHRvb2x0aXAtemluZGV4OiA3MDAwO1xuJG5ldy1zdG9yeS1jb250ZW50LXN0YXRlLXppbmRleDogNTAwO1xuJGZpbHRlci1kcm9wZG93bi16aW5kZXg6IDEwMDtcbiRtb2RhbC10b3AtaW5kaWNhdG9yLXppbmRleDogNTE7XG4kbW9kYWwtdG9wLWluZGljYXRvci1iYWNrZ3JvdW5kLXppbmRleDogNTE7XG4kY2hhcnQtemluZGV4OiAxO1xuJGNoYXJ0LWNvbnRyb2wtemluZGV4OiAyO1xuXG4kc2xpZGUtdG9nZ2xlLWRpc2FibGVkLW9wdGlvbi1iYWNrZ3JvdW5kOiAjZGRkZGRkO1xuXG4kdG9hc3QtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiR0b2FzdC1pbmZvLXRpdGxlLWNvbG9yOiAjNDk0OTQ5O1xuJHRvYXN0LWluZm8tbWVzc2FnZS1jb2xvcjogIzQyMmMwMDtcbiR0b2FzdC1pbmZvLWJ1dHRvbi1jb2xvcjogIzZjNGU5OTtcblxuJHRvYXN0LXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogI2Q5ZWVlZDtcbiR0b2FzdC1zdWNjZXNzLXRpdGxlLWNvbG9yOiAjMDA0NTQyO1xuJHRvYXN0LXN1Y2Nlc3MtbWVzc2FnZS1jb2xvcjogIzAxMzIzMDtcbiR0b2FzdC1zdWNjZXNzLWJ1dHRvbi1jb2xvcjogIzAxNjk2NTtcblxuJHRvYXN0LXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogI2ZmZjFkNTtcbiR0b2FzdC13YXJuaW5nLXRpdGxlLWNvbG9yOiAjNmI0NzAwO1xuJHRvYXN0LXdhcm5pbmctbWVzc2FnZS1jb2xvcjogIzQyMmMwMDtcbiR0b2FzdC13YXJuaW5nLWJ1dHRvbi1jb2xvcjogI2NjOGYxNDtcblxuJHRvYXN0LWVycm9yLWJhY2tncm91bmQtY29sb3I6ICNmNWQ1ZGI7XG4kdG9hc3QtZXJyb3ItdGl0bGUtY29sb3I6ICM3MzAwMTU7XG4kdG9hc3QtZXJyb3ItbWVzc2FnZS1jb2xvcjogIzQ1MDYxMTtcbiR0b2FzdC1lcnJvci1zdWNjZXNzLWNvbG9yOiAjZDllZWVkO1xuJHRvYXN0LWVycm9yLWJ1dHRvbi1jb2xvcjogI2IyMWQzOTtcblxuJHRvYXN0LWNsb3NlLWJ1dHRvbi1jb2xvcjogIzczMDAxNTtcbiIsIi8vLyBodHRwczovL3d3dy5maWdtYS5jb20vZmlsZS9Hbm0wMnFUOGxMMVhFdnRNRk9SNlJML0xvb3AtMjAyMS1GZWF0dXJlLURldmVsb3BtZW50P25vZGUtaWQ9NCUzQTMwMFxuXG4vLy8gVGhpcyBpcyB0aGUgbWFpbiBjb2xvdXIgZm9yIGFsbCB0aGUgZWxlbWVudHMuIEl0IGlzIHVzZWQgdG8gY3JlYXRlIGFsbCBvZiB0aGUgaW5wdXQgZmllbGRzLCBmb3IgaWNvbnMgZXRjXG4kbG9vcC1ncmVlbi0xMjU6ICMwNTY3NjM7XG4kbG9vcC1ncmVlbi0xMDA6ICMxMDdkNzk7XG4kbG9vcC1ncmVlbi01MDogIzg3YmViYztcbiRsb29wLWdyZWVuLTI1OiAjYzNkZmRkO1xuJGxvb3AtZ3JlZW4tNTogI2YzZjhmODtcblxuLy8vIFVzZWQgaW4gbmF2aWdhdGlvbiBhbmQgYXMgc2Vjb25kYXJ5IGVsZW1lbnQgY29sb3VycyBvbiBidXR0b25zIGFuZCBsaW5rc1xuJGxvb3AtcHVycGxlLTEyNTogIzI2MTA0NztcbiRsb29wLXB1cnBsZS0xMDA6ICMzMTEzNWU7XG4kbG9vcC1wdXJwbGUtNzU6ICM0NjI0Nzg7XG4kbG9vcC1wdXJwbGUtNjA6ICM4NjZhYjA7XG4kbG9vcC1wdXJwbGUtNTA6ICM4YTdiYTE7XG4kbG9vcC1wdXJwbGUtNDA6ICNlYWU2ZjA7XG4kbG9vcC1wdXJwbGUtMjU6ICNjYmM0ZDc7XG4kbG9vcC1wdXJwbGUtNTogI2Y1ZjNmNztcblxuLy8vIFVzZWQgYXMgYmFja2dyb3VuZCBmb3IgZGlzYWJsZWQgbGFiZWxzIGFuZCBmaWVsZHMgYXMgd2VsbCBhcyBmb3IgdGFnc1xuJGxpZ2h0LWdyZXk6ICNlZWVlZWU7XG5cbi8vLyBHcmV5c2NhbGVcbiRncmV5LTEwMDogIzAwMDAwMDtcbiRncmV5LTUwOiB0cmFuc3BhcmVudGl6ZSgkZ3JleS0xMDAsIDEgLSAwLjUpO1xuJGdyZXktMjU6IHRyYW5zcGFyZW50aXplKCRncmV5LTEwMCwgMSAtIDAuMjUpO1xuJGdyZXktNTogdHJhbnNwYXJlbnRpemUoJGdyZXktMTAwLCAxIC0gMC4wNSk7XG5cbi8vLyBub3RpZmljYXRpb25zLCBzdGF0dXMsIGNhdGVnb3JpZXNcbi8vLyB3YXJuaW5nLCBhbGVydFxuJGRhbmdlci1yZWQ6ICNlZTIzMmY7XG4vLy8gb2ssIGFjY2VwdGVkLCBmaW5pc2hlZFxuJHllcy1ncmVlbjogIzFkYjA0Njtcbi8vLyBwZW5kaW5nXG4kbG9vcC15ZWxsb3c6ICNlY2IzMjA7XG5cbi8vLyBoaWdobGlnaHQgY29sb3Vyc1xuJHB1cnBsZS1oaWdobGlnaHQ6ICM2ZjAxZTU7XG4kcHVycGxlLWhpZ2hsaWdodC0wMjU6IHJnYmEoMTExLCAxLCAyMjksIDAuMjUpO1xuJGxvb3AtcGluazogI2VmNDdhMjtcbiRsb29wLXBpbmstMDI1OiByZ2JhKDIzOSwgNzEsIDE2MiwgMC4yNSk7XG4kbGlnaHQtYmx1ZTogIzIwZDNlYztcbiRsaWdodC1ibHVlLTAyNTogcmdiYSgzMiwgMjExLCAyMzYsIDAuMjUpO1xuJGxvb3AtYmx1ZTogIzIwNzJlYztcbiRsb29wLWJsdWUtMDI1OiByZ2JhKDMyLCAxMTQsIDIzNiwgMC4yNSk7XG4kZ3JlZW4tMjogI2MzZWMyMDtcbiRncmVlbi0yLTAyNTogcmdiYSgxOTUsIDIzNiwgMzIsIDAuMjUpO1xuJGxvb3Atb3JhbmdlOiAjZTk4MDIwO1xuJGxvb3Atb3JhbmdlLTAyNTogcmdiYSgyMzMsIDEyOCwgMzIsIDAuMjUpO1xuXG4vLy8gU3BhY2Vyc1xuJGdyYXktbGluZS1jb2xvcjogI2Q2ZDBkZjtcblxuJGxvb3AtcmVkLWRhcms6ICNjOTMwNGQ7XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3dpdGNoL3N3aXRjaC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3R5bGVzL2xvb3AtZGVzaWduLXN5c3RlbS9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx3Q0FBQTtBQURGOztBQUlBO0VBQ0Usb0JBQUE7RUFDQSx5QkMwQk87RUR6QlAsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBREY7QUFHRTtFQUNFLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjRUxjO0VGTWQsZ0JBQUE7QUFESjtBQUdJO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdDQUFBO0FBRE47QUFDQSxvL1JBQW8vUiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICdsb29wLWRlc2lnbi1zeXN0ZW0vY29sb3JzJztcbjpob3N0IHtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmJ0bi1zd2l0Y2gge1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXktMTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwLjdyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICA+IHNwYW4ge1xuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC43cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIGNvbG9yOiAkbG9vcC1wdXJwbGUtMTAwO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgbGluZWFyO1xuICAgIH1cbiAgfVxufVxuIiwiJHN0YW5kYXJkRm9udEZhbWlseTogJ05vdG8gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGNvbnRlbnQtdG9wLXBhZGRpbmc6IDNyZW07XG4kcG9zdC1saXN0LWJnOiAjZGFkYWRhO1xuJHdoaXRlOiAjZmZmZmZmO1xuJHBvc3QtcHJldmlldy1iZzogd2hpdGU7XG4kbGlnaHQtZ3JheS1iZzogI2Y0ZjRmNDtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1sZWZ0OiAyLjM0NHJlbTtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1yaWdodDogMS4wNjNyZW07XG4kcG9zdC1wcmV2aWV3LXBhZGRpbmc6IDIuNXJlbSAkcG9zdC1wcmV2aWV3LXBhZGRpbmctcmlnaHQgMS4yNXJlbSAkcG9zdC1wcmV2aWV3LXBhZGRpbmctbGVmdDtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1tb2JpbGU6IDFyZW0gMXJlbSAwLjVyZW0gMXJlbTtcbiRwb3N0LXBhZGRpbmctYm90dG9tOiAxcmVtO1xuJHBvc3QtcHJldmlldy1ndXR0ZXI6IDJweDtcbiRwb3N0LWhpZ2hsaWdodC1jb2xvcjogIzU3MGY4NTtcbiRjb2xvci1wdXJwbGUtOTA6ICMzMTEzNWU7XG4kY29sb3ItcHVycGxlLTYwOiAjOTg4YWFlO1xuJGNvbG9yLXB1cnBsZS01MDogIzk4ODlhZjtcbiRjb2xvci1wdXJwbGUtMTA6ICNmNWYzZjc7XG4kY29sb3ItcHVycGxlLWxpZ2h0OiAjNGIzNWJjO1xuJGNvbG9yLXB1cnBsZS12ZXJ5LWxpZ2h0OiAjODY2YWIwO1xuJGNvbG9yLXB1cnBsZS1zdGVwcGVyOiAjNGEyYjdhO1xuJGNvbG9yLWdyZWVuLTEwMDogIzA1MjgwNDtcbiRjb2xvci1ncmVlbi05MDogIzBkM2QwYjtcbiRjb2xvci1ncmVlbi04MDogIzFmNmIxZTtcbiRjb2xvci1ncmVlbi03MDogIzM1OGEzNDtcbiRjb2xvci1ncmVlbi02MDogIzZkOWE2ZTtcbiRjb2xvci1ncmVlbi01MDogIzg5YTg4ZjtcbiRjb2xvci1ncmVlbi00MDogIzlmYzhhNjtcbiRjb2xvci1ncmVlbi0zMDogI2FhZDZiMztcbiRjb2xvci1ncmVlbi0yMDogI2M5ZTlkMTtcbiRjb2xvci1ncmVlbi0xMDogI2YzZjdmMztcbiRjb2xvci1ncmVlbi1zdGVwcGVyOiAjMTA3RDc5O1xuJGNvbG9yLWdyZWVuLW1lZGl1bTogI2FkZGFhZjtcbiRjb2xvci1ncmVlbi1saWdodDogIzNBQjA5ODtcbiRjb2xvci1ncmVlbi12ZXJ5LWxpZ2h0OiAjRURGRkZDO1xuJGdyZXktMTogI2Q2ZDBkZjtcbiRzdXBwb3J0LTAxOiAjZGExZTI4O1xuJGVycm9yOiAjZWUyMzJmO1xuJHRleHQtYmxhY2s6ICMxNjE2MTY7XG4kdGV4dC1zZWNvbmRhcnk6ICMzOTM5Mzk7XG4kdGV4dC1ncmF5ZWQ6ICM1MjUyNTI7XG4kdGV4dC1ncmF5ZWQ4MDogIzhmOGI4YjtcbiR0ZXh0LWdyYXktY2F0OiAjNmQ3Mjc4O1xuJHVpLWJhY2tncm91bmQtZ3JheTogI2Y4ZjhmOTtcbiRib3JkZXI6ICNlOGU3ZWE7XG4kZW50aXR5LWJvcmRlci1jb2xvcjogIzFjMGYzMDIxO1xuJGxvYWRpbmctYmc6IHJnYigwIDAgMCAvIDE4JSk7XG4kc3VwcG9ydC0wNDogIzAwNDNjZTtcbiRsb29wLXVzZXJuYW1lOiAjMTk4MDM4O1xuJGxvb3AtYWN0aXZlLWN1cnJlbnQtdXNlcjogIzI0YTE0ODtcbiR3YXJtLWdyYXktMTAtY29sb3I6ICNmN2YzZjI7XG4kd2FybS1ncmF5LTIwLWNvbG9yOiAjZTVlMGRmO1xuJGhlYWRpbmctMS1jb2xvcjogIzFjMGYzMDtcbiRoZWFkaW5nLTItY29sb3I6ICMzMjA3NGQ7XG4kaGVhZGluZy0zLWNvbG9yOiAjMmYyNzM1O1xuJG1vYmlsZS1pY29uLWNvbG9yOiAjMWMwZjMwO1xuJHN0YXRlLWRpc2FibGVkLTAyOiAjYzZjNmM2O1xuJGxpbmstMDI6ICM1NjAxYjI7XG4kaGVhZGVyLXB1cnBsZTogIzMxMTM1ZTtcbiRoZWFkZXItZ3JlZW46ICMxMDdkNzk7XG4kcHVycGxlLWxpZ2h0OiAjY2JjNGQ3O1xuJHB1cnBsZS1iYWNrZ3JvdW5kLWxpZ2h0OiAjZGNkNWU3O1xuJGxvb3AtaW50ZXJhY3RpdmUtMDE6ICMxMDdkNzk7XG4kbG9vcC1pbnRlcmFjdGl2ZS0wMS1vcGFjaXR5OiByZ2JhKDE2LCAxMjUsIDEyMSwgMC4zKTtcbiRmaWx0ZXJzLWdyZWVuOiAjMDU2NzYzO1xuLy8gQnJlYWtwb2ludHNcblxuJGJyZWFrcG9pbnQtczogMzc1cHg7XG4kYnJlYWtwb2ludC1zbTogNDIwcHg7XG4kYnJlYWtwb2ludC1tZDogNzY4cHg7XG4kYnJlYWtwb2ludC1sZzogMTA4MHB4O1xuJGJyZWFrcG9pbnQteGw6IDEyNzVweDtcblxuJGJyZWFrcG9pbnQtbWQtdjI6IDgyMHB4O1xuXG4kaGVhZGVyLWhlaWdodDogNC4zNzVyZW07XG4kaGVhZGVyLWhlaWdodC12MjogNC4zNzVyZW07XG4kc3RhdGUtc2VsZWN0ZWQtdWk6ICNlMGUwZTA7XG4kYy1sZWZ0LXBhZGRpbmc6IDEuNXJlbTtcbiRtZW51LWFjdGl2ZS1jb2xvcjogIzNBQjA5ODtcbiRtZW51LWhvdmVyLWNvbG9yOiAjM0FCMDk4O1xuJHRhYi1pbmFjdGl2ZS1jb2xvcjogIzg5YWY5MztcbiRsaW5lLWNvbG9yOiAjZDBkZmQyO1xuJGJvcmRlci1ncmF5OiAjY2NjY2NjO1xuJHRleHQtZ3JheTogIzgwODA4MDtcbiRiYXNlLWNvbnRhaW5lci13aWR0aDogODEuMTI0cmVtO1xuJGhlYWRlci11bmRlcmxpbmUtaGVpZ2h0OiAwLjMxM3JlbTtcblxuLy8gTW9kZXJhdG9yIHJldmlldyBzZWN0aW9uc1xuJGZvb3Rlci1oZWlnaHQ6IDRyZW07XG4kdG9wYmFyLWhlaWdodDogMTAuNXJlbTtcbiRzdGVwcGVyLWhlaWdodDogNi43cmVtO1xuXG4vLyBOZXcgU3RvcnkgZmxvdyAvIHN0b3J5IGRldGFpbHMgdmFyaWFibGVzXG4kZ3JleTogIzY1NjU2NTtcbiRsaWdodC1ncmV5LTI6ICNiMWI0YjY7XG4kbGlnaHQtZ3JleS0zOiAjYjRiNGI0O1xuJGxpZ2h0LWdyZXktNDogI2NmZDNkODtcbiRsaWdodC1ncmV5LTU6ICNkOWUwZTc7XG4kbGlnaHQtZ3JleS02OiAjZjFmMmYyO1xuJGxpZ2h0LWdyZXktNzogI2M0YzRjNDtcbiRsaWdodC1ncmV5LTg6ICNlOWU5ZTk7XG4kbGlnaHQtZ3JleS05OiAjZTZlYWVkO1xuJGxpZ2gtZ3JleS1zZXBhcmF0b3I6ICNjMGMwYzA7XG4kZGFyay1ncmV5OiAjMWExYTFhO1xuJGRhcmstZ3JleS01MDogcmdiKDI2LCAyNiwgMjYsIDAuNSk7XG4kYm9yZGVyLWdyZXk6ICNjN2NkZDQ7XG4kbGlnaHQtcHVycGxlOiAjZWFlYWVhO1xuJGlucHV0LWRpc2FibGVkLWJnOiAjZjRmNmY4O1xuJGVycm9yLTI6ICNkZTIyMmQ7XG4kZGFuZ2VyOiAjYzkzMDRkO1xuJHByZXZpb3VzLXBpbGwtY29sb3I6ICM3MThkNmY7XG4kdG9vbHRpcC1ncmV5OiAjYWJhYmFiO1xuJGxpZ2h0LWdyZWVuOiAjY2ZlNWU0NjY7XG5cbiRmaWx0ZXJzLW1vZGFsLWhlYWRlci16aW5kZXg6IDEwMDAwO1xuJG1vZGFsLXppbmRleDogOTk5OTtcbiRsb2NhdGlvbi1vdmVybGF5LXppbmRleDogOTAwMTtcbiRoZWFkZXItYXNpZGUtemluZGV4OiA4MDAyO1xuJGhlYWRlci1hc2lkZS1iYWNrZ3JvdW5kLXppbmRleDogODAwMTtcbiRoZWFkZXItemluZGV4OiA4MDAwO1xuJG5hdmlnYXRpb24temluZGV4OiA4MDAwO1xuJHBhZ2UtbG9hZGluZy16aW5kZXg6IDcwMDE7XG4kdG9vbHRpcC16aW5kZXg6IDcwMDA7XG4kbmV3LXN0b3J5LWNvbnRlbnQtc3RhdGUtemluZGV4OiA1MDA7XG4kZmlsdGVyLWRyb3Bkb3duLXppbmRleDogMTAwO1xuJG1vZGFsLXRvcC1pbmRpY2F0b3ItemluZGV4OiA1MTtcbiRtb2RhbC10b3AtaW5kaWNhdG9yLWJhY2tncm91bmQtemluZGV4OiA1MTtcbiRjaGFydC16aW5kZXg6IDE7XG4kY2hhcnQtY29udHJvbC16aW5kZXg6IDI7XG5cbiRzbGlkZS10b2dnbGUtZGlzYWJsZWQtb3B0aW9uLWJhY2tncm91bmQ6ICNkZGRkZGQ7XG5cbiR0b2FzdC1pbmZvLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuJHRvYXN0LWluZm8tdGl0bGUtY29sb3I6ICM0OTQ5NDk7XG4kdG9hc3QtaW5mby1tZXNzYWdlLWNvbG9yOiAjNDIyYzAwO1xuJHRvYXN0LWluZm8tYnV0dG9uLWNvbG9yOiAjNmM0ZTk5O1xuXG4kdG9hc3Qtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiAjZDllZWVkO1xuJHRvYXN0LXN1Y2Nlc3MtdGl0bGUtY29sb3I6ICMwMDQ1NDI7XG4kdG9hc3Qtc3VjY2Vzcy1tZXNzYWdlLWNvbG9yOiAjMDEzMjMwO1xuJHRvYXN0LXN1Y2Nlc3MtYnV0dG9uLWNvbG9yOiAjMDE2OTY1O1xuXG4kdG9hc3Qtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMWQ1O1xuJHRvYXN0LXdhcm5pbmctdGl0bGUtY29sb3I6ICM2YjQ3MDA7XG4kdG9hc3Qtd2FybmluZy1tZXNzYWdlLWNvbG9yOiAjNDIyYzAwO1xuJHRvYXN0LXdhcm5pbmctYnV0dG9uLWNvbG9yOiAjY2M4ZjE0O1xuXG4kdG9hc3QtZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogI2Y1ZDVkYjtcbiR0b2FzdC1lcnJvci10aXRsZS1jb2xvcjogIzczMDAxNTtcbiR0b2FzdC1lcnJvci1tZXNzYWdlLWNvbG9yOiAjNDUwNjExO1xuJHRvYXN0LWVycm9yLXN1Y2Nlc3MtY29sb3I6ICNkOWVlZWQ7XG4kdG9hc3QtZXJyb3ItYnV0dG9uLWNvbG9yOiAjYjIxZDM5O1xuXG4kdG9hc3QtY2xvc2UtYnV0dG9uLWNvbG9yOiAjNzMwMDE1O1xuIiwiLy8vIGh0dHBzOi8vd3d3LmZpZ21hLmNvbS9maWxlL0dubTAycVQ4bEwxWEV2dE1GT1I2UkwvTG9vcC0yMDIxLUZlYXR1cmUtRGV2ZWxvcG1lbnQ/bm9kZS1pZD00JTNBMzAwXG5cbi8vLyBUaGlzIGlzIHRoZSBtYWluIGNvbG91ciBmb3IgYWxsIHRoZSBlbGVtZW50cy4gSXQgaXMgdXNlZCB0byBjcmVhdGUgYWxsIG9mIHRoZSBpbnB1dCBmaWVsZHMsIGZvciBpY29ucyBldGNcbiRsb29wLWdyZWVuLTEyNTogIzA1Njc2MztcbiRsb29wLWdyZWVuLTEwMDogIzEwN2Q3OTtcbiRsb29wLWdyZWVuLTUwOiAjODdiZWJjO1xuJGxvb3AtZ3JlZW4tMjU6ICNjM2RmZGQ7XG4kbG9vcC1ncmVlbi01OiAjZjNmOGY4O1xuXG4vLy8gVXNlZCBpbiBuYXZpZ2F0aW9uIGFuZCBhcyBzZWNvbmRhcnkgZWxlbWVudCBjb2xvdXJzIG9uIGJ1dHRvbnMgYW5kIGxpbmtzXG4kbG9vcC1wdXJwbGUtMTI1OiAjMjYxMDQ3O1xuJGxvb3AtcHVycGxlLTEwMDogIzMxMTM1ZTtcbiRsb29wLXB1cnBsZS03NTogIzQ2MjQ3ODtcbiRsb29wLXB1cnBsZS02MDogIzg2NmFiMDtcbiRsb29wLXB1cnBsZS01MDogIzhhN2JhMTtcbiRsb29wLXB1cnBsZS00MDogI2VhZTZmMDtcbiRsb29wLXB1cnBsZS0yNTogI2NiYzRkNztcbiRsb29wLXB1cnBsZS01OiAjZjVmM2Y3O1xuXG4vLy8gVXNlZCBhcyBiYWNrZ3JvdW5kIGZvciBkaXNhYmxlZCBsYWJlbHMgYW5kIGZpZWxkcyBhcyB3ZWxsIGFzIGZvciB0YWdzXG4kbGlnaHQtZ3JleTogI2VlZWVlZTtcblxuLy8vIEdyZXlzY2FsZVxuJGdyZXktMTAwOiAjMDAwMDAwO1xuJGdyZXktNTA6IHRyYW5zcGFyZW50aXplKCRncmV5LTEwMCwgMSAtIDAuNSk7XG4kZ3JleS0yNTogdHJhbnNwYXJlbnRpemUoJGdyZXktMTAwLCAxIC0gMC4yNSk7XG4kZ3JleS01OiB0cmFuc3BhcmVudGl6ZSgkZ3JleS0xMDAsIDEgLSAwLjA1KTtcblxuLy8vIG5vdGlmaWNhdGlvbnMsIHN0YXR1cywgY2F0ZWdvcmllc1xuLy8vIHdhcm5pbmcsIGFsZXJ0XG4kZGFuZ2VyLXJlZDogI2VlMjMyZjtcbi8vLyBvaywgYWNjZXB0ZWQsIGZpbmlzaGVkXG4keWVzLWdyZWVuOiAjMWRiMDQ2O1xuLy8vIHBlbmRpbmdcbiRsb29wLXllbGxvdzogI2VjYjMyMDtcblxuLy8vIGhpZ2hsaWdodCBjb2xvdXJzXG4kcHVycGxlLWhpZ2hsaWdodDogIzZmMDFlNTtcbiRwdXJwbGUtaGlnaGxpZ2h0LTAyNTogcmdiYSgxMTEsIDEsIDIyOSwgMC4yNSk7XG4kbG9vcC1waW5rOiAjZWY0N2EyO1xuJGxvb3AtcGluay0wMjU6IHJnYmEoMjM5LCA3MSwgMTYyLCAwLjI1KTtcbiRsaWdodC1ibHVlOiAjMjBkM2VjO1xuJGxpZ2h0LWJsdWUtMDI1OiByZ2JhKDMyLCAyMTEsIDIzNiwgMC4yNSk7XG4kbG9vcC1ibHVlOiAjMjA3MmVjO1xuJGxvb3AtYmx1ZS0wMjU6IHJnYmEoMzIsIDExNCwgMjM2LCAwLjI1KTtcbiRncmVlbi0yOiAjYzNlYzIwO1xuJGdyZWVuLTItMDI1OiByZ2JhKDE5NSwgMjM2LCAzMiwgMC4yNSk7XG4kbG9vcC1vcmFuZ2U6ICNlOTgwMjA7XG4kbG9vcC1vcmFuZ2UtMDI1OiByZ2JhKDIzMywgMTI4LCAzMiwgMC4yNSk7XG5cbi8vLyBTcGFjZXJzXG4kZ3JheS1saW5lLWNvbG9yOiAjZDZkMGRmO1xuXG4kbG9vcC1yZWQtZGFyazogI2M5MzA0ZDtcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 46074:
/*!***********************************************************!*\
  !*** ./src/app/shared/components/switch/switch.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwitchModule": () => (/* binding */ SwitchModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _switch_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switch.component */ 46755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class SwitchModule {
  static #_ = this.ɵfac = function SwitchModule_Factory(t) {
    return new (t || SwitchModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: SwitchModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SwitchModule, {
    declarations: [_switch_component__WEBPACK_IMPORTED_MODULE_0__.SwitchComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_switch_component__WEBPACK_IMPORTED_MODULE_0__.SwitchComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_modules_statistics_open-stories_open-stories_module_ts.js.map