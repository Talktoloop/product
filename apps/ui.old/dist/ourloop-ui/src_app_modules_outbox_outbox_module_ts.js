"use strict";
(self["webpackChunkourloop_ui"] = self["webpackChunkourloop_ui"] || []).push([["src_app_modules_outbox_outbox_module_ts"],{

/***/ 74734:
/*!**********************************************************!*\
  !*** ./src/app/modules/outbox/outbox-filters.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutboxFiltersService": () => (/* binding */ OutboxFiltersService)
/* harmony export */ });
/* harmony import */ var _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/app-routing.props */ 18854);
/* harmony import */ var _app_modules_outbox_pending_recording_pending_recording_list_pending_recording_filters_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/modules/outbox/pending-recording/pending-recording-list/pending-recording-filters.config */ 10651);
/* harmony import */ var _shared_utils_filters_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/utils/filters.utils */ 65197);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_services_locales_supported_languages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/services/locales/supported-languages.service */ 90423);







class OutboxFiltersService {
  constructor(languageService) {
    this.languageService = languageService;
    this.filters$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.resetFilters$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.metaChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.outboxRoutes = [];
    this.languages = [];
    this.fetchLanguageDirectory();
  }
  ngOnDestroy() {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }
  updateItemsMeta(value) {
    this.metaChange$.next(value);
    this.updateOtherItemsMeta(value);
  }
  getCurrentOutboxFilterTab() {
    return this.currentOutboxFilterTab;
  }
  setCurrentOutboxFilterTab(value) {
    this.currentOutboxFilterTab = value;
  }
  updateFilters(value) {
    this.filters$.next(value);
    if (!value) {
      this.activeFiltersObject = value;
    }
  }
  getActiveFiltersObject() {
    return this.activeFiltersObject;
  }
  mapForm(form) {
    return {
      ...form.value
    };
  }
  setOutboxRoutes(value = []) {
    this.outboxRoutes = value;
  }
  updateOtherItemsMeta(value) {
    const otherRoutes = this.outboxRoutes.filter(route => route.path !== value.path && !route.blocked);
    otherRoutes.forEach(nav => {
      this.fetchDataForMeta(nav.path);
    });
  }
  fetchDataForMeta(path) {
    const filters = (0,_shared_utils_filters_utils__WEBPACK_IMPORTED_MODULE_2__.prepareFilterDataFromSessionStorage)(_app_modules_outbox_pending_recording_pending_recording_list_pending_recording_filters_config__WEBPACK_IMPORTED_MODULE_1__.pendingRecordingFiltersConfig);
    switch (path) {
      case _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.OUTBOX_ROUTES.PENDING_RECORDING:
        // TODO
        break;
      case _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.OUTBOX_ROUTES.IN_PROGRESS:
        // TODO
        break;
      case _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.OUTBOX_ROUTES.Archive:
        // TODO
        break;
    }
  }
  fetchLanguageDirectory() {
    this.languageService.getSupportedLanguages().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroyed$)).subscribe(data => this.languages = data);
  }
  static #_ = this.ɵfac = function OutboxFiltersService_Factory(t) {
    return new (t || OutboxFiltersService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_app_core_services_locales_supported_languages_service__WEBPACK_IMPORTED_MODULE_3__.SupportedLanguagesService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: OutboxFiltersService,
    factory: OutboxFiltersService.ɵfac
  });
}

/***/ }),

/***/ 61835:
/*!*********************************************************!*\
  !*** ./src/app/modules/outbox/outbox-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutboxRoutingModule": () => (/* binding */ OutboxRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/app-routing.props */ 18854);
/* harmony import */ var _outbox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./outbox.component */ 78397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [{
  path: '',
  component: _outbox_component__WEBPACK_IMPORTED_MODULE_1__.OutboxComponent,
  data: {
    title: 'outbox'
  },
  children: [{
    path: '',
    redirectTo: _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.OUTBOX_ROUTES.PENDING_RECORDING,
    pathMatch: 'full'
  }, {
    path: _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.OUTBOX_ROUTES.PENDING_RECORDING,
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modules_new-story-v2_components_country-section_country-section_module_ts-src-2cf67f"), __webpack_require__.e("default-src_app_shared_components_post_post-preview_post-preview_module_ts-src_app_shared_enu-861e3b"), __webpack_require__.e("default-src_app_modules_new-story-v2_modals_new-story-modals_module_ts"), __webpack_require__.e("default-src_app_shared_components_filters-section-v2_filter-section-v2_module_ts"), __webpack_require__.e("default-src_app_shared_components_textarea-v2_textarea-v2_module_ts-src_app_shared_icons_arro-bfc337"), __webpack_require__.e("default-src_app_shared_components_new-story-radio_new-story-radio_module_ts-src_app_shared_ic-1f382a"), __webpack_require__.e("default-src_app_modules_inbox_stories_story-details_shared_shared-story-details_module_ts-src-f1fafe"), __webpack_require__.e("default-src_app_modules_inbox_shared_components_form-section_form-section_module_ts-src_app_m-f24dce"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_outbox_pending-recording_pending-recording_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pending-recording/pending-recording.module */ 6526)).then(m => m.PendingRecordingModule)
  }, {
    path: _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.OUTBOX_ROUTES.IN_PROGRESS,
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modules_new-story-v2_components_country-section_country-section_module_ts-src-2cf67f"), __webpack_require__.e("default-src_app_shared_components_post_post-preview_post-preview_module_ts-src_app_shared_enu-861e3b"), __webpack_require__.e("default-src_app_modules_new-story-v2_modals_new-story-modals_module_ts"), __webpack_require__.e("default-src_app_shared_components_filters-section-v2_filter-section-v2_module_ts"), __webpack_require__.e("default-src_app_shared_components_textarea-v2_textarea-v2_module_ts-src_app_shared_icons_arro-bfc337"), __webpack_require__.e("default-src_app_shared_components_new-story-radio_new-story-radio_module_ts-src_app_shared_ic-1f382a"), __webpack_require__.e("default-src_app_modules_inbox_stories_story-details_shared_shared-story-details_module_ts-src-f1fafe"), __webpack_require__.e("default-src_app_modules_inbox_shared_components_form-section_form-section_module_ts-src_app_m-f24dce"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_outbox_in-progress_in-progress_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./in-progress/in-progress.module */ 90437)).then(m => m.InProgressModule)
  }, {
    path: _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.OUTBOX_ROUTES.Archive,
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_outbox_archive_archive_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./archive/archive.module */ 79721)).then(m => m.ArchiveModule)
  }]
}];
class OutboxRoutingModule {
  static #_ = this.ɵfac = function OutboxRoutingModule_Factory(t) {
    return new (t || OutboxRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: OutboxRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](OutboxRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 78397:
/*!****************************************************!*\
  !*** ./src/app/modules/outbox/outbox.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutboxComponent": () => (/* binding */ OutboxComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/app-routing.props */ 18854);
/* harmony import */ var _app_shared_components_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/components/base.component */ 70697);
/* harmony import */ var _app_shared_consts_set_max_width__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/consts/set-max-width */ 74757);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _outbox_filters_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./outbox-filters.service */ 74734);
/* harmony import */ var _admin_services_admin_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin/services/admin-data.service */ 1499);
/* harmony import */ var _core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/ui/ui.service */ 21428);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_inbox_outbox_styler_inbox_outbox_styler_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/components/inbox-outbox-styler/inbox-outbox-styler.component */ 19879);
/* harmony import */ var _shared_components_subnavigation_bar_subnavigation_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/subnavigation-bar/subnavigation-bar.component */ 91117);














const _c0 = ["subNavigationBar"];
function OutboxComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "loop-subnavigation-bar", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routes", ctx_r0.outboxRoutes);
  }
}
class OutboxComponent extends _app_shared_components_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
  constructor(translateService, router, outboxFilterService, adminDataService, ui) {
    super();
    this.translateService = translateService;
    this.router = router;
    this.outboxFilterService = outboxFilterService;
    this.adminDataService = adminDataService;
    this.ui = ui;
    this.outboxRoutes = [];
    this.isMainListPath = false;
    this.setMaxWidthPaths = [`/${_app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.MAIN_ROUTES.OUTBOX}/${_app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.OUTBOX_ROUTES.IN_PROGRESS}`, `/${_app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.MAIN_ROUTES.OUTBOX}/${_app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.OUTBOX_ROUTES.PENDING_RECORDING}`];
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroyed$)).subscribe(event => {
      this.setMaxWidth = this.setMaxWidthPaths.includes(event.url) || !!this.setMaxWidthPaths.find(path => event.url.startsWith(`${path}?`)) && !!_app_shared_consts_set_max_width__WEBPACK_IMPORTED_MODULE_2__.SET_MAX_WIDTH_ALLOWED_QUERY_PARAMS.find(queryParam => event.url.includes(queryParam));
    });
  }
  ngOnInit() {
    this.getOutboxSectionsQuantity();
    this.setFiltersVisibility();
  }
  generateRoutes() {
    this.outboxRoutes = [];
    for (const route in _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.OUTBOX_ROUTES) {
      if (Object.prototype.hasOwnProperty.call(_app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.OUTBOX_ROUTES, route)) {
        const newRoute = {
          name: this.translateService.instant(`outbox.navigation.${_app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.OUTBOX_ROUTES[route]}`),
          path: _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.OUTBOX_ROUTES[route],
          exact: false,
          count: this.getRouteQuantity(_app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.OUTBOX_ROUTES[route]) || null,
          blocked: _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.OUTBOX_ROUTES[route] === 'archive'
        };
        this.outboxRoutes.push(newRoute);
      }
    }
    this.outboxFilterService.setOutboxRoutes(this.outboxRoutes);
  }
  getOutboxSectionsQuantity() {
    // TODO
    this.adminDataService.downloadOutgoingQuantity();
    this.adminDataService.outgoingQuantityData$.subscribe(quantityData => {
      if (quantityData) {
        this.generateRoutes();
      }
    });
  }
  getRouteQuantity(route) {
    switch (route) {
      case _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.OUTBOX_ROUTES.PENDING_RECORDING:
        return this.adminDataService.outgoingQuantityData$?.value?.numberOfPendingRecordingComments || 0;
      case _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.OUTBOX_ROUTES.IN_PROGRESS:
        return this.adminDataService.outgoingQuantityData$?.value?.numberOfScheduledComments || 0;
      // case OUTBOX_ROUTES.Archive:
      //   return this.outboxSectionsQuantity?.value || 0;
      default:
        return null;
    }
  }
  setFiltersVisibility() {
    const checkIsMainListPath = () => {
      const lastUrlFragment = this.router.url.split('/').pop();
      return lastUrlFragment.startsWith(_app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.OUTBOX_ROUTES.PENDING_RECORDING) || lastUrlFragment.startsWith(_app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.OUTBOX_ROUTES.IN_PROGRESS) || lastUrlFragment.startsWith(_app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.OUTBOX_ROUTES.Archive);
    };
    this.isMainListPath = checkIsMainListPath();
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroyed$)).subscribe(() => this.isMainListPath = checkIsMainListPath());
  }
  static #_ = this.ɵfac = function OutboxComponent_Factory(t) {
    return new (t || OutboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_outbox_filters_service__WEBPACK_IMPORTED_MODULE_3__.OutboxFiltersService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_admin_services_admin_data_service__WEBPACK_IMPORTED_MODULE_4__.AdminDataService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_5__.UIService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: OutboxComponent,
    selectors: [["app-outbox"]],
    viewQuery: function OutboxComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.subNavigationBar = _t.first);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
    decls: 5,
    vars: 5,
    consts: [[1, "outbox"], [4, "ngIf"], [1, "outbox__content-wrapper"], [3, "routes"], ["subNavigationBar", ""]],
    template: function OutboxComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-inbox-outbox-styler")(1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, OutboxComponent_ng_container_2_Template, 3, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isMainListPath);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("max-width", ctx.setMaxWidth)("padding-sides", ctx.isMainListPath || ctx.ui.tabletView || ctx.ui.desktopView);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_components_inbox_outbox_styler_inbox_outbox_styler_component__WEBPACK_IMPORTED_MODULE_6__.InboxOutboxStylerComponent, _shared_components_subnavigation_bar_subnavigation_bar_component__WEBPACK_IMPORTED_MODULE_7__.SubnavigationBarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterOutlet],
    styles: ["[_nghost-%COMP%]     loop-filter-section-v2 .filters-section {\n  max-width: 850px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm91dGJveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHTTtFQUNFLGdCQUFBO0FBRlIiLCJmaWxlIjoib3V0Ym94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICA6Om5nLWRlZXAge1xuICAgIGxvb3AtZmlsdGVyLXNlY3Rpb24tdjIge1xuICAgICAgLmZpbHRlcnMtc2VjdGlvbiB7XG4gICAgICAgIG1heC13aWR0aDogODUwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9vdXRib3gvb3V0Ym94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdNO0VBQ0UsZ0JBQUE7QUFGUjtBQUNBLHdhQUF3YSIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgOjpuZy1kZWVwIHtcbiAgICBsb29wLWZpbHRlci1zZWN0aW9uLXYyIHtcbiAgICAgIC5maWx0ZXJzLXNlY3Rpb24ge1xuICAgICAgICBtYXgtd2lkdGg6IDg1MHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 74418:
/*!*************************************************!*\
  !*** ./src/app/modules/outbox/outbox.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutboxModule": () => (/* binding */ OutboxModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _app_shared_components_subnavigation_bar_subnavigation_bar_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/components/subnavigation-bar/subnavigation-bar.module */ 38709);
/* harmony import */ var _app_shared_pipes_country_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/pipes/country.pipe */ 17174);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/shared.module */ 44466);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _outbox_filters_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./outbox-filters.service */ 74734);
/* harmony import */ var _outbox_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./outbox-routing.module */ 61835);
/* harmony import */ var _outbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./outbox.component */ 78397);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ 70863);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);










class OutboxModule {
  static #_ = this.ɵfac = function OutboxModule_Factory(t) {
    return new (t || OutboxModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: OutboxModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    providers: [_outbox_filters_service__WEBPACK_IMPORTED_MODULE_3__.OutboxFiltersService, _app_shared_pipes_country_pipe__WEBPACK_IMPORTED_MODULE_1__.CountryPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedOutboxModule, _app_shared_components_subnavigation_bar_subnavigation_bar_module__WEBPACK_IMPORTED_MODULE_0__.SubnavigationBarModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _outbox_routing_module__WEBPACK_IMPORTED_MODULE_4__.OutboxRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](OutboxModule, {
    declarations: [_outbox_component__WEBPACK_IMPORTED_MODULE_5__.OutboxComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedOutboxModule, _app_shared_components_subnavigation_bar_subnavigation_bar_module__WEBPACK_IMPORTED_MODULE_0__.SubnavigationBarModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _outbox_routing_module__WEBPACK_IMPORTED_MODULE_4__.OutboxRoutingModule]
  });
})();

/***/ }),

/***/ 10651:
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/outbox/pending-recording/pending-recording-list/pending-recording-filters.config.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pendingRecordingFiltersConfig": () => (/* binding */ pendingRecordingFiltersConfig)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_modules_outbox_outbox_filter_outbox_filter_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/modules/outbox/outbox-filter/outbox-filter.model */ 58247);
/* harmony import */ var _shared_components_filters_section_v2_filter_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/components/filters-section-v2/filter.model */ 86791);
/* harmony import */ var _shared_components_filters_section_v2_filters_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/filters-section-v2/filters.config */ 83985);




const pendingRecordingFiltersConfig = [{
  // --------------------- SEARCH TEXT ---------------------
  translationKey: 'filtersV2.searchText.label',
  internalName: _app_modules_outbox_outbox_filter_outbox_filter_model__WEBPACK_IMPORTED_MODULE_0__.OutboxPendingFilters.SEARCH_TEXT,
  filterFormConfig: {
    outboxSearchText: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null)
  },
  type: _shared_components_filters_section_v2_filter_model__WEBPACK_IMPORTED_MODULE_1__.FilterType.SEARCH_TEXT,
  sessionStorageKey: 'outboxSearchText',
  mapValue: data => data
}, {
  // --------------------- LANGUAGE ---------------------
  translationKey: 'inbox.filters.labels.targetLanguage',
  internalName: _app_modules_outbox_outbox_filter_outbox_filter_model__WEBPACK_IMPORTED_MODULE_0__.OutboxPendingFilters.TARGET_LANGUAGE,
  filterFormConfig: {
    language: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null)
  },
  type: _shared_components_filters_section_v2_filter_model__WEBPACK_IMPORTED_MODULE_1__.FilterType.CHECKBOX,
  sessionStorageKey: 'targetLanguage',
  mapValueToStorage: (languagesIds, data) => JSON.stringify((languagesIds || []).map(languageId => ({
    id: languageId,
    name: data.data.find(languageData => languageData.id === languageId.toString())?.name
  }))),
  mapValueFromStorage: (key, value, mapToFormData) => ({
    language: value?.map(singleValue => mapToFormData ? singleValue.id : singleValue.name)
  }),
  mapValue: data => data.map(singleData => singleData.id)
}, {
  // --------------------- COUNTRY ---------------------
  translationKey: 'inbox.filters.labels.country',
  internalName: _app_modules_outbox_outbox_filter_outbox_filter_model__WEBPACK_IMPORTED_MODULE_0__.OutboxPendingFilters.COUNTRY,
  filterFormConfig: {
    country: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null)
  },
  type: _shared_components_filters_section_v2_filter_model__WEBPACK_IMPORTED_MODULE_1__.FilterType.AUTOCOMPLETE,
  autocompleteType: _shared_components_filters_section_v2_filters_config__WEBPACK_IMPORTED_MODULE_2__.AutocompleteType.COUNTRY,
  singleValueTitlePrefix: 'country_name.',
  sessionStorageKey: 'country'
}, {
  // --------------------- CHANNEL ---------------------
  translationKey: 'inbox.filters.labels.channel',
  internalName: _app_modules_outbox_outbox_filter_outbox_filter_model__WEBPACK_IMPORTED_MODULE_0__.OutboxPendingFilters.CHANNEL,
  filterFormConfig: {
    channel: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null)
  },
  type: _shared_components_filters_section_v2_filter_model__WEBPACK_IMPORTED_MODULE_1__.FilterType.CHECKBOX,
  sessionStorageKey: 'channel',
  mapValueToStorage: (channelIds, data) => JSON.stringify((channelIds || []).map(channelId => ({
    id: channelId,
    name: data.data.find(channelData => channelData.id === channelId.toString())?.name
  }))),
  mapValueFromStorage: (key, value, mapToFormData) => ({
    channel: value?.map(singleValue => mapToFormData ? singleValue.id : singleValue.name)
  }),
  mapValue: data => data.map(singleData => singleData.id)
}];

/***/ }),

/***/ 70863:
/*!********************************************************!*\
  !*** ./src/app/modules/outbox/shared/shared.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedOutboxModule": () => (/* binding */ SharedOutboxModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/legacy-table */ 96538);
/* harmony import */ var _app_shared_components_mobile_table_mobile_table_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/components/mobile-table/mobile-table.module */ 3873);
/* harmony import */ var _app_shared_components_pills_pills_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/components/pills/pills.module */ 68401);
/* harmony import */ var _app_shared_components_sort_sort_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/components/sort/sort.module */ 16933);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _shared_components_inbox_outbox_styler_inbox_outbox_styler_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components/inbox-outbox-styler/inbox-outbox-styler.module */ 85598);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-infinite-scroll */ 47364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);










class SharedOutboxModule {
  static #_ = this.ɵfac = function SharedOutboxModule_Factory(t) {
    return new (t || SharedOutboxModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: SharedOutboxModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_shared_components_inbox_outbox_styler_inbox_outbox_styler_module__WEBPACK_IMPORTED_MODULE_3__.InboxOutboxStylerModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__.InfiniteScrollModule, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_8__.MatLegacyTableModule, _app_shared_components_mobile_table_mobile_table_module__WEBPACK_IMPORTED_MODULE_0__.MobileTableModule, _app_shared_components_pills_pills_module__WEBPACK_IMPORTED_MODULE_1__.PillsModule, _app_shared_components_sort_sort_module__WEBPACK_IMPORTED_MODULE_2__.SortModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _shared_components_inbox_outbox_styler_inbox_outbox_styler_module__WEBPACK_IMPORTED_MODULE_3__.InboxOutboxStylerModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__.InfiniteScrollModule, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_8__.MatLegacyTableModule, _app_shared_components_mobile_table_mobile_table_module__WEBPACK_IMPORTED_MODULE_0__.MobileTableModule, _app_shared_components_pills_pills_module__WEBPACK_IMPORTED_MODULE_1__.PillsModule, _app_shared_components_sort_sort_module__WEBPACK_IMPORTED_MODULE_2__.SortModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SharedOutboxModule, {
    imports: [_shared_components_inbox_outbox_styler_inbox_outbox_styler_module__WEBPACK_IMPORTED_MODULE_3__.InboxOutboxStylerModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__.InfiniteScrollModule, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_8__.MatLegacyTableModule, _app_shared_components_mobile_table_mobile_table_module__WEBPACK_IMPORTED_MODULE_0__.MobileTableModule, _app_shared_components_pills_pills_module__WEBPACK_IMPORTED_MODULE_1__.PillsModule, _app_shared_components_sort_sort_module__WEBPACK_IMPORTED_MODULE_2__.SortModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule],
    exports: [_shared_components_inbox_outbox_styler_inbox_outbox_styler_module__WEBPACK_IMPORTED_MODULE_3__.InboxOutboxStylerModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__.InfiniteScrollModule, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_8__.MatLegacyTableModule, _app_shared_components_mobile_table_mobile_table_module__WEBPACK_IMPORTED_MODULE_0__.MobileTableModule, _app_shared_components_pills_pills_module__WEBPACK_IMPORTED_MODULE_1__.PillsModule, _app_shared_components_sort_sort_module__WEBPACK_IMPORTED_MODULE_2__.SortModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_modules_outbox_outbox_module_ts.js.map