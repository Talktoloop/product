"use strict";
(self["webpackChunkourloop_ui"] = self["webpackChunkourloop_ui"] || []).push([["src_app_modules_inbox_stories_story-details_stories-details_module_ts"],{

/***/ 23795:
/*!************************************************************************!*\
  !*** ./src/app/modules/inbox/stories/story-details-routes.resolver.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoryDetailsRoutesResolver": () => (/* binding */ StoryDetailsRoutesResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 38699);



class StoryDetailsRoutesResolver {
  constructor(translateService) {
    this.translateService = translateService;
  }
  resolve() {
    const steps = [{
      title: this.translateService.instant(`story.details.step.review`),
      path: ['./', 'review']
    }];
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(steps);
  }
  static #_ = this.ɵfac = function StoryDetailsRoutesResolver_Factory(t) {
    return new (t || StoryDetailsRoutesResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: StoryDetailsRoutesResolver,
    factory: StoryDetailsRoutesResolver.ɵfac
  });
}

/***/ }),

/***/ 21038:
/*!*****************************************************************!*\
  !*** ./src/app/modules/inbox/stories/story-details.resolver.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoryDetailsResolver": () => (/* binding */ StoryDetailsResolver)
/* harmony export */ });
/* harmony import */ var _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/app-routing.props */ 18854);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_services_api_meta_data_meta_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/api/meta-data/meta-data.service */ 56401);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_services_api_story_story_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/api/story/story.service */ 95138);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 38699);









class StoryDetailsResolver {
  constructor(metaDataService, router, storyService, toastr, translateService) {
    this.metaDataService = metaDataService;
    this.router = router;
    this.storyService = storyService;
    this.toastr = toastr;
    this.translateService = translateService;
  }
  resolve(route) {
    const id = route.parent.params['id'];
    const channel = route.parent.params['channel'];
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.combineLatest)([this.storyService.getStoryModerator(id, channel), this.metaDataService.organisations$, this.metaDataService.thematicAreas$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(([story, organisations, thematics]) => ({
      story,
      organisations,
      thematics
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      this.toastr.error(this.translateService.instant(`story.toast.errors.failedToLoad`), this.translateService.instant('story.toast.errors.failedToLoadSubtitle'));
      this.router.navigate([_app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.MAIN_ROUTES.INBOX, _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.INBOX_ROUTES.STORIES]);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(error);
    }));
  }
  static #_ = this.ɵfac = function StoryDetailsResolver_Factory(t) {
    return new (t || StoryDetailsResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_core_services_api_meta_data_meta_data_service__WEBPACK_IMPORTED_MODULE_1__.MetaDataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_core_services_api_story_story_service__WEBPACK_IMPORTED_MODULE_2__.StoryService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: StoryDetailsResolver,
    factory: StoryDetailsResolver.ɵfac
  });
}

/***/ }),

/***/ 78181:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/inbox/stories/story-details/shared/story-review-global/story-review-global.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoryReviewGlobalComponent": () => (/* binding */ StoryReviewGlobalComponent)
/* harmony export */ });
/* harmony import */ var _app_shared_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/components/base.component */ 70697);
/* harmony import */ var _app_shared_loop_design_system_components_banner_banner_theme_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/loop-design-system/components/banner/banner-theme.enum */ 41894);
/* harmony import */ var _shared_loop_design_system_components_loop_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/loop-design-system/components/loop-icon */ 22214);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _story_details_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../story-details.service */ 70341);






class StoryReviewGlobalComponent extends _app_shared_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(storyDetailsService) {
    super();
    this.storyDetailsService = storyDetailsService;
    this.submittingError = false;
    this.BannerTheme = _app_shared_loop_design_system_components_banner_banner_theme_enum__WEBPACK_IMPORTED_MODULE_1__.BannerTheme;
    this.LoopIcon = _shared_loop_design_system_components_loop_icon__WEBPACK_IMPORTED_MODULE_2__["default"];
    this.watchFormSubmitError();
  }
  watchFormSubmitError() {
    this.storyDetailsService.reviewSubmitError$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroyed$)).subscribe(value => {
      this.submittingError = value;
    });
  }
  static #_ = this.ɵfac = function StoryReviewGlobalComponent_Factory(t) {
    return new (t || StoryReviewGlobalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_story_details_service__WEBPACK_IMPORTED_MODULE_3__.StoryDetailsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: StoryReviewGlobalComponent,
    selectors: [["ng-component"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
    decls: 0,
    vars: 0,
    template: function StoryReviewGlobalComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
}

/***/ }),

/***/ 21014:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/inbox/stories/story-details/stories-details-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoriesDetailsRoutingModule": () => (/* binding */ StoriesDetailsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/app-routing.props */ 18854);
/* harmony import */ var _story_details_routes_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../story-details-routes.resolver */ 23795);
/* harmony import */ var _story_details_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../story-details.resolver */ 21038);
/* harmony import */ var _story_details_story_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./story-details/story-details.component */ 37270);
/* harmony import */ var _story_review_story_review_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./story-review/story-review.component */ 95589);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);








const routes = [{
  path: '',
  component: _story_details_story_details_component__WEBPACK_IMPORTED_MODULE_3__.StoryDetailsComponent,
  resolve: {
    steps: _story_details_routes_resolver__WEBPACK_IMPORTED_MODULE_1__.StoryDetailsRoutesResolver
  },
  children: [{
    path: _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.INBOX_STORY_ROUTES.STORY_REVIEW,
    component: _story_review_story_review_component__WEBPACK_IMPORTED_MODULE_4__.StoryReviewComponent,
    data: {
      title: 'reviewStory'
    },
    resolve: {
      data: _story_details_resolver__WEBPACK_IMPORTED_MODULE_2__.StoryDetailsResolver
    }
  }]
}];
class StoriesDetailsRoutingModule {
  static #_ = this.ɵfac = function StoriesDetailsRoutingModule_Factory(t) {
    return new (t || StoriesDetailsRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: StoriesDetailsRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    providers: [_story_details_resolver__WEBPACK_IMPORTED_MODULE_2__.StoryDetailsResolver, _story_details_routes_resolver__WEBPACK_IMPORTED_MODULE_1__.StoryDetailsRoutesResolver],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](StoriesDetailsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 47857:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/inbox/stories/story-details/stories-details.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoriesDetailsModule": () => (/* binding */ StoriesDetailsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _app_shared_components_route_stepper_route_stepper_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/components/route-stepper/route-stepper.module */ 40049);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/shared.module */ 44466);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ 39743);
/* harmony import */ var _stories_details_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stories-details-routing.module */ 21014);
/* harmony import */ var _story_details_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./story-details.service */ 70341);
/* harmony import */ var _story_details_story_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./story-details/story-details.component */ 37270);
/* harmony import */ var _story_review_story_review_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./story-review/story-review.module */ 12704);
/* harmony import */ var _story_translate_story_translate_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./story-translate/story-translate.module */ 36335);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);











class StoriesDetailsModule {
  static #_ = this.ɵfac = function StoriesDetailsModule_Factory(t) {
    return new (t || StoriesDetailsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: StoriesDetailsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    providers: [_story_details_service__WEBPACK_IMPORTED_MODULE_4__.StoryDetailsService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _app_shared_components_route_stepper_route_stepper_module__WEBPACK_IMPORTED_MODULE_0__.RouteStepperModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedInboxModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _stories_details_routing_module__WEBPACK_IMPORTED_MODULE_3__.StoriesDetailsRoutingModule, _story_review_story_review_module__WEBPACK_IMPORTED_MODULE_6__.StoryReviewModule, _story_translate_story_translate_module__WEBPACK_IMPORTED_MODULE_7__.StoryTranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](StoriesDetailsModule, {
    declarations: [_story_details_story_details_component__WEBPACK_IMPORTED_MODULE_5__.StoryDetailsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _app_shared_components_route_stepper_route_stepper_module__WEBPACK_IMPORTED_MODULE_0__.RouteStepperModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedInboxModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _stories_details_routing_module__WEBPACK_IMPORTED_MODULE_3__.StoriesDetailsRoutingModule, _story_review_story_review_module__WEBPACK_IMPORTED_MODULE_6__.StoryReviewModule, _story_translate_story_translate_module__WEBPACK_IMPORTED_MODULE_7__.StoryTranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule]
  });
})();

/***/ }),

/***/ 37270:
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/inbox/stories/story-details/story-details/story-details.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoryDetailsComponent": () => (/* binding */ StoryDetailsComponent)
/* harmony export */ });
/* harmony import */ var _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/app-routing.props */ 18854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_components_route_stepper_route_stepper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/components/route-stepper/route-stepper.component */ 89193);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 38699);





class StoryDetailsComponent {
  constructor(activatedRoute, router) {
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.steps = [];
    this.backUrl = `/${_app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.MAIN_ROUTES.INBOX}/${_app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.INBOX_ROUTES.STORIES}`;
    if (!this.router.url.includes(_app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.INBOX_STORY_ROUTES.STORY_TRANSLATE) && !this.router.url.includes(_app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.INBOX_STORY_ROUTES.STORY_REVIEW)) {
      this.router.navigate([this.activatedRoute.snapshot.routeConfig.children?.[0].path], {
        relativeTo: this.activatedRoute
      });
    }
  }
  ngOnInit() {
    this.steps = this.activatedRoute.snapshot.data.steps;
  }
  static #_ = this.ɵfac = function StoryDetailsComponent_Factory(t) {
    return new (t || StoryDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: StoryDetailsComponent,
    selectors: [["app-story-details"]],
    decls: 8,
    vars: 5,
    consts: [[1, "details-container"], [1, "details-header"], [1, "details-header__back-arrow", 3, "routerLink"], ["src", "assets/icons/arrow_previous_green.svg", 1, "arrow-image"], [3, "steps"]],
    template: function StoryDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-route-stepper", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx.backUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 3, "header.topBar.backToInbox"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("steps", ctx.steps);
      }
    },
    dependencies: [_shared_components_route_stepper_route_stepper_component__WEBPACK_IMPORTED_MODULE_1__.RouteStepperComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
    styles: [".details-container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 78.625rem;\n  width: 100%;\n}\n\n.details-header[_ngcontent-%COMP%] {\n  border-bottom: 0.063rem solid #cfd3d8;\n  margin-bottom: 1.25rem;\n  padding: 1rem 1.5rem;\n}\n@media (min-width: 768px) {\n  .details-header[_ngcontent-%COMP%] {\n    border-bottom: none;\n    margin-bottom: 0rem;\n    padding: 2.75rem 0 2.9375rem;\n  }\n}\n.details-header__back-arrow[_ngcontent-%COMP%] {\n  align-items: center;\n  color: #056763;\n  display: flex;\n  font-family: Noto Sans;\n  font-size: 0.875rem;\n  font-style: normal;\n  font-weight: 600;\n  gap: 0.625rem;\n  letter-spacing: 0em;\n  text-decoration: none;\n}\n@media (min-width: 768px) {\n  .details-header__back-arrow[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n  }\n}\n.details-header__back-arrow[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0;\n}\nhtml:not([dir=rtl])[_nghost-%COMP%]   .details-header__back-arrow[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .details-header__back-arrow[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n}\nhtml[dir=rtl][_nghost-%COMP%]   .details-header__back-arrow[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .details-header__back-arrow[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3J5LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvX21peGlucy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2xvb3AtZGVzaWduLXN5c3RlbS9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBSkY7O0FBT0E7RUFDRSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFKRjtBQ3lMRTtFRHhMRjtJQU1JLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSw0QkFBQTtFQUhGO0FBQ0Y7QUFLRTtFQUNFLG1CQUFBO0VBQ0EsY0VyQmE7RUZzQmIsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFISjtBQ3NLRTtFRDdLQTtJQWFJLG1CQUFBO0VBRko7QUFDRjtBQUlJO0VBQ0UsU0FBQTtBQUZOO0FDS0U7RUEwQ0kscUJENUNzQjtBQUE1QjtBQ1FFO0VBd0NJLG9CRGhEc0I7QUFHNUIiLCJmaWxlIjoic3RvcnktZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2xvb3AtZGVzaWduLXN5c3RlbS9jb2xvcnMnO1xuQGltcG9ydCAnbG9vcC1kZXNpZ24tc3lzdGVtL2hlbHBlcnMnO1xuQGltcG9ydCAnbWl4aW5zJztcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbi5kZXRhaWxzLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDc4LjYyNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kZXRhaWxzLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDAuMDYzcmVtIHNvbGlkICRsaWdodC1ncmV5LTQ7XG4gIG1hcmdpbi1ib3R0b206IHB4VG9SZW0oMjApO1xuICBwYWRkaW5nOiBweFRvUmVtKDE2KSBweFRvUmVtKDI0KTtcblxuICBAaW5jbHVkZSBtb2JpbGUtdXAge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgbWFyZ2luLWJvdHRvbTogcHhUb1JlbSgwKTtcbiAgICBwYWRkaW5nOiBweFRvUmVtKDQ0KSAwIHB4VG9SZW0oNDcpO1xuICB9XG5cbiAgJl9fYmFjay1hcnJvdyB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogJGxvb3AtZ3JlZW4tMTI1O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1mYW1pbHk6IE5vdG8gU2FucztcbiAgICBmb250LXNpemU6IHB4VG9SZW0oMTQpO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGdhcDogcHhUb1JlbSgxMCk7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICBAaW5jbHVkZSBtb2JpbGUtdXAge1xuICAgICAgZm9udC1zaXplOiBweFRvUmVtKDE4KTtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgQGluY2x1ZGUgbWFyZ2luLXJpZ2h0KDAuMjVyZW0pO1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIGZsZXgtZ2FwKCRnYXAsICRnbG9iYWw6IGZhbHNlKSB7XG4gIG1hcmdpbi10b3A6ICgtJGdhcCk7XG4gIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCgtJGdhcCksICRnbG9iYWwpO1xuXG4gID4gKiB7XG4gICAgbWFyZ2luLXRvcDogJGdhcDtcbiAgICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgkZ2FwLCAkZ2xvYmFsKTtcbiAgfVxufVxuXG5AbWl4aW4gYmFzZS1jb250YWluZXIoJGNvbnRlbnQtd2lkdGgpIHtcbiAgJGRlc2t0b3AtcGFkZGluZzogMnJlbTtcbiAgbWF4LXdpZHRoOiBjYWxjKCN7JGNvbnRlbnQtd2lkdGh9ICsgKCN7JGRlc2t0b3AtcGFkZGluZ30pKTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MnJlbSkge1xuICAgIEBpbmNsdWRlIHBhZGRpbmctbGVmdCgkZGVza3RvcC1wYWRkaW5nLCB0cnVlKTtcbiAgICBAaW5jbHVkZSBwYWRkaW5nLXJpZ2h0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICB9XG59XG5cbkBtaXhpbiBjZW50ZXJBYnNvbHV0ZUVsZW1lbnQge1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5AbWl4aW4gb25seS1sdHItZ2xvYmFsIHtcbiAgaHRtbDpub3QoW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bC1nbG9iYWwge1xuICBodG1sW2Rpcj0ncnRsJ10gJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktbHRyIHtcbiAgOmhvc3QtY29udGV4dChodG1sOm5vdChbZGlyPSdydGwnXSkpICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bCB7XG4gIDpob3N0LWNvbnRleHQoaHRtbFtkaXI9J3J0bCddKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gcnRsLXZhbHVlKCRwcm9wZXJ0eSwgJGx0ci12YWx1ZSwgJHJ0bC12YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGx0ci12YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHJ0bC12YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHJ0bC1wcm9wZXJ0eSgkbHRyLXByb3BlcnR5LCAkcnRsLXByb3BlcnR5LCAkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpZiAkZ2xvYmFsID09IHRydWUge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyLWdsb2JhbCB7XG4gICAgICAjeyRsdHItcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwtZ2xvYmFsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bCB7XG4gICAgICAjeyRydGwtcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXJnaW4tbGVmdCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLWxlZnQsIG1hcmdpbi1yaWdodCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBtYXJnaW4tcmlnaHQoJG1hcmdpbiwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KG1hcmdpbi1yaWdodCwgbWFyZ2luLWxlZnQsICRtYXJnaW4sICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZygkcGFkZGluZ1RvcCwgJHBhZGRpbmdSaWdodCwgJHBhZGRpbmdCb3R0b20sICRwYWRkaW5nTGVmdCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgcGFkZGluZy10b3A6ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZ1JpZ2h0LCAkZ2xvYmFsKTtcbiAgcGFkZGluZy1ib3R0b206ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZ0xlZnQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1sZWZ0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLXJpZ2h0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiB0ZXh0LWFsaWduLWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRleHQtYWxpZ24sIGxlZnQsIHJpZ2h0LCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGxlZnQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobGVmdCwgcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiByaWdodCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShyaWdodCwgbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRyYW5zbGF0ZVhZKCR2YWx1ZVgsICR2YWx1ZVksICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZSh0cmFuc2Zvcm0sIHRyYW5zbGF0ZSgkdmFsdWVYLCAkdmFsdWVZKSwgdHJhbnNsYXRlKC0kdmFsdWVYLCAkdmFsdWVZKSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItbGVmdCwgYm9yZGVyLXJpZ2h0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1yaWdodCwgYm9yZGVyLWxlZnQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCBib3JkZXItdG9wLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtbGVmdC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBmbG9hdC1sZWZ0KCRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZShmbG9hdCwgbGVmdCwgcmlnaHQsICRnbG9iYWw6IGZhbHNlKTtcbn1cblxuQG1peGluIGZsb2F0LXJpZ2h0IHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCByaWdodCwgbGVmdCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gc21hbGwtZGVza3RvcC1vbmx5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LWxnKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQteGwgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtYW5kLXRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc21hbGwtbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtcyAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LW1kIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtdXAge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gZGlzYWJsZS1zY3JvbGxiYXIge1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiIsIi8vLyBodHRwczovL3d3dy5maWdtYS5jb20vZmlsZS9Hbm0wMnFUOGxMMVhFdnRNRk9SNlJML0xvb3AtMjAyMS1GZWF0dXJlLURldmVsb3BtZW50P25vZGUtaWQ9NCUzQTMwMFxuXG4vLy8gVGhpcyBpcyB0aGUgbWFpbiBjb2xvdXIgZm9yIGFsbCB0aGUgZWxlbWVudHMuIEl0IGlzIHVzZWQgdG8gY3JlYXRlIGFsbCBvZiB0aGUgaW5wdXQgZmllbGRzLCBmb3IgaWNvbnMgZXRjXG4kbG9vcC1ncmVlbi0xMjU6ICMwNTY3NjM7XG4kbG9vcC1ncmVlbi0xMDA6ICMxMDdkNzk7XG4kbG9vcC1ncmVlbi01MDogIzg3YmViYztcbiRsb29wLWdyZWVuLTI1OiAjYzNkZmRkO1xuJGxvb3AtZ3JlZW4tNTogI2YzZjhmODtcblxuLy8vIFVzZWQgaW4gbmF2aWdhdGlvbiBhbmQgYXMgc2Vjb25kYXJ5IGVsZW1lbnQgY29sb3VycyBvbiBidXR0b25zIGFuZCBsaW5rc1xuJGxvb3AtcHVycGxlLTEyNTogIzI2MTA0NztcbiRsb29wLXB1cnBsZS0xMDA6ICMzMTEzNWU7XG4kbG9vcC1wdXJwbGUtNzU6ICM0NjI0Nzg7XG4kbG9vcC1wdXJwbGUtNjA6ICM4NjZhYjA7XG4kbG9vcC1wdXJwbGUtNTA6ICM4YTdiYTE7XG4kbG9vcC1wdXJwbGUtNDA6ICNlYWU2ZjA7XG4kbG9vcC1wdXJwbGUtMjU6ICNjYmM0ZDc7XG4kbG9vcC1wdXJwbGUtNTogI2Y1ZjNmNztcblxuLy8vIFVzZWQgYXMgYmFja2dyb3VuZCBmb3IgZGlzYWJsZWQgbGFiZWxzIGFuZCBmaWVsZHMgYXMgd2VsbCBhcyBmb3IgdGFnc1xuJGxpZ2h0LWdyZXk6ICNlZWVlZWU7XG5cbi8vLyBHcmV5c2NhbGVcbiRncmV5LTEwMDogIzAwMDAwMDtcbiRncmV5LTUwOiB0cmFuc3BhcmVudGl6ZSgkZ3JleS0xMDAsIDEgLSAwLjUpO1xuJGdyZXktMjU6IHRyYW5zcGFyZW50aXplKCRncmV5LTEwMCwgMSAtIDAuMjUpO1xuJGdyZXktNTogdHJhbnNwYXJlbnRpemUoJGdyZXktMTAwLCAxIC0gMC4wNSk7XG5cbi8vLyBub3RpZmljYXRpb25zLCBzdGF0dXMsIGNhdGVnb3JpZXNcbi8vLyB3YXJuaW5nLCBhbGVydFxuJGRhbmdlci1yZWQ6ICNlZTIzMmY7XG4vLy8gb2ssIGFjY2VwdGVkLCBmaW5pc2hlZFxuJHllcy1ncmVlbjogIzFkYjA0Njtcbi8vLyBwZW5kaW5nXG4kbG9vcC15ZWxsb3c6ICNlY2IzMjA7XG5cbi8vLyBoaWdobGlnaHQgY29sb3Vyc1xuJHB1cnBsZS1oaWdobGlnaHQ6ICM2ZjAxZTU7XG4kcHVycGxlLWhpZ2hsaWdodC0wMjU6IHJnYmEoMTExLCAxLCAyMjksIDAuMjUpO1xuJGxvb3AtcGluazogI2VmNDdhMjtcbiRsb29wLXBpbmstMDI1OiByZ2JhKDIzOSwgNzEsIDE2MiwgMC4yNSk7XG4kbGlnaHQtYmx1ZTogIzIwZDNlYztcbiRsaWdodC1ibHVlLTAyNTogcmdiYSgzMiwgMjExLCAyMzYsIDAuMjUpO1xuJGxvb3AtYmx1ZTogIzIwNzJlYztcbiRsb29wLWJsdWUtMDI1OiByZ2JhKDMyLCAxMTQsIDIzNiwgMC4yNSk7XG4kZ3JlZW4tMjogI2MzZWMyMDtcbiRncmVlbi0yLTAyNTogcmdiYSgxOTUsIDIzNiwgMzIsIDAuMjUpO1xuJGxvb3Atb3JhbmdlOiAjZTk4MDIwO1xuJGxvb3Atb3JhbmdlLTAyNTogcmdiYSgyMzMsIDEyOCwgMzIsIDAuMjUpO1xuXG4vLy8gU3BhY2Vyc1xuJGdyYXktbGluZS1jb2xvcjogI2Q2ZDBkZjtcblxuJGxvb3AtcmVkLWRhcms6ICNjOTMwNGQ7XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9pbmJveC9zdG9yaWVzL3N0b3J5LWRldGFpbHMvc3RvcnktZGV0YWlscy9zdG9yeS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9zdHlsZXMvX21peGlucy5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9zdHlsZXMvbG9vcC1kZXNpZ24tc3lzdGVtL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUFKRjs7QUFPQTtFQUNFLHFDQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUpGO0FDeUxFO0VEeExGO0lBTUksbUJBQUE7SUFDQSxtQkFBQTtJQUNBLDRCQUFBO0VBSEY7QUFDRjtBQUtFO0VBQ0UsbUJBQUE7RUFDQSxjRXJCYTtFRnNCYixhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUhKO0FDc0tFO0VEN0tBO0lBYUksbUJBQUE7RUFGSjtBQUNGO0FBSUk7RUFDRSxTQUFBO0FBRk47QUNLRTtFQTBDSSxxQkQ1Q3NCO0FBQTVCO0FDUUU7RUF3Q0ksb0JEaERzQjtBQUc1QjtBQUNBLDQ2VUFBNDZVIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnbG9vcC1kZXNpZ24tc3lzdGVtL2NvbG9ycyc7XG5AaW1wb3J0ICdsb29wLWRlc2lnbi1zeXN0ZW0vaGVscGVycyc7XG5AaW1wb3J0ICdtaXhpbnMnO1xuQGltcG9ydCAndmFyaWFibGVzJztcblxuLmRldGFpbHMtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogNzguNjI1cmVtO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRldGFpbHMtaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMC4wNjNyZW0gc29saWQgJGxpZ2h0LWdyZXktNDtcbiAgbWFyZ2luLWJvdHRvbTogcHhUb1JlbSgyMCk7XG4gIHBhZGRpbmc6IHB4VG9SZW0oMTYpIHB4VG9SZW0oMjQpO1xuXG4gIEBpbmNsdWRlIG1vYmlsZS11cCB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBtYXJnaW4tYm90dG9tOiBweFRvUmVtKDApO1xuICAgIHBhZGRpbmc6IHB4VG9SZW0oNDQpIDAgcHhUb1JlbSg0Nyk7XG4gIH1cblxuICAmX19iYWNrLWFycm93IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiAkbG9vcC1ncmVlbi0xMjU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LWZhbWlseTogTm90byBTYW5zO1xuICAgIGZvbnQtc2l6ZTogcHhUb1JlbSgxNCk7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZ2FwOiBweFRvUmVtKDEwKTtcbiAgICBsZXR0ZXItc3BhY2luZzogMGVtO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgIEBpbmNsdWRlIG1vYmlsZS11cCB7XG4gICAgICBmb250LXNpemU6IHB4VG9SZW0oMTgpO1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBAaW5jbHVkZSBtYXJnaW4tcmlnaHQoMC4yNXJlbSk7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AbWl4aW4gZmxleC1nYXAoJGdhcCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgbWFyZ2luLXRvcDogKC0kZ2FwKTtcbiAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoKC0kZ2FwKSwgJGdsb2JhbCk7XG5cbiAgPiAqIHtcbiAgICBtYXJnaW4tdG9wOiAkZ2FwO1xuICAgIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCRnYXAsICRnbG9iYWwpO1xuICB9XG59XG5cbkBtaXhpbiBiYXNlLWNvbnRhaW5lcigkY29udGVudC13aWR0aCkge1xuICAkZGVza3RvcC1wYWRkaW5nOiAycmVtO1xuICBtYXgtd2lkdGg6IGNhbGMoI3skY29udGVudC13aWR0aH0gKyAoI3skZGVza3RvcC1wYWRkaW5nfSkpO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQycmVtKSB7XG4gICAgQGluY2x1ZGUgcGFkZGluZy1sZWZ0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICAgIEBpbmNsdWRlIHBhZGRpbmctcmlnaHQoJGRlc2t0b3AtcGFkZGluZywgdHJ1ZSk7XG4gIH1cbn1cblxuQG1peGluIGNlbnRlckFic29sdXRlRWxlbWVudCB7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbkBtaXhpbiBvbmx5LWx0ci1nbG9iYWwge1xuICBodG1sOm5vdChbZGlyPSdydGwnXSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsLWdsb2JhbCB7XG4gIGh0bWxbZGlyPSdydGwnXSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1sdHIge1xuICA6aG9zdC1jb250ZXh0KGh0bWw6bm90KFtkaXI9J3J0bCddKSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsIHtcbiAgOmhvc3QtY29udGV4dChodG1sW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBydGwtdmFsdWUoJHByb3BlcnR5LCAkbHRyLXZhbHVlLCAkcnRsLXZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaWYgJGdsb2JhbCA9PSB0cnVlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ci1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsLWdsb2JhbCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRydGwtdmFsdWU7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ciB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRsdHItdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gcnRsLXByb3BlcnR5KCRsdHItcHJvcGVydHksICRydGwtcHJvcGVydHksICR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcnRsLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skbHRyLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hcmdpbi1sZWZ0KCRtYXJnaW4sICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShtYXJnaW4tbGVmdCwgbWFyZ2luLXJpZ2h0LCAkbWFyZ2luLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIG1hcmdpbi1yaWdodCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLXJpZ2h0LCBtYXJnaW4tbGVmdCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nKCRwYWRkaW5nVG9wLCAkcGFkZGluZ1JpZ2h0LCAkcGFkZGluZ0JvdHRvbSwgJHBhZGRpbmdMZWZ0LCAkZ2xvYmFsOiBmYWxzZSkge1xuICBwYWRkaW5nLXRvcDogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nUmlnaHQsICRnbG9iYWwpO1xuICBwYWRkaW5nLWJvdHRvbTogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nTGVmdCwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLWxlZnQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmctcmlnaHQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRleHQtYWxpZ24tbGVmdCgkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUodGV4dC1hbGlnbiwgbGVmdCwgcmlnaHQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShsZWZ0LCByaWdodCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHJpZ2h0LCBsZWZ0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gdHJhbnNsYXRlWFkoJHZhbHVlWCwgJHZhbHVlWSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRyYW5zZm9ybSwgdHJhbnNsYXRlKCR2YWx1ZVgsICR2YWx1ZVkpLCB0cmFuc2xhdGUoLSR2YWx1ZVgsICR2YWx1ZVkpLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1sZWZ0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1sZWZ0LCBib3JkZXItcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItcmlnaHQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXJpZ2h0LCBib3JkZXItbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsIGJvcmRlci10b3AtbGVmdC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItdG9wLWxlZnQtcmFkaXVzLCBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGZsb2F0LWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCBsZWZ0LCByaWdodCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gZmxvYXQtcmlnaHQge1xuICBAaW5jbHVkZSBydGwtdmFsdWUoZmxvYXQsIHJpZ2h0LCBsZWZ0LCAkZ2xvYmFsOiBmYWxzZSk7XG59XG5cbkBtaXhpbiBzbWFsbC1kZXNrdG9wLW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbGcpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC14bCAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1hbmQtdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbGcgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBzbWFsbC1tb2JpbGUtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1zIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbWQgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0YWJsZXQtb25seSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS11cCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBkaXNhYmxlLXNjcm9sbGJhciB7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIiwiLy8vIGh0dHBzOi8vd3d3LmZpZ21hLmNvbS9maWxlL0dubTAycVQ4bEwxWEV2dE1GT1I2UkwvTG9vcC0yMDIxLUZlYXR1cmUtRGV2ZWxvcG1lbnQ/bm9kZS1pZD00JTNBMzAwXG5cbi8vLyBUaGlzIGlzIHRoZSBtYWluIGNvbG91ciBmb3IgYWxsIHRoZSBlbGVtZW50cy4gSXQgaXMgdXNlZCB0byBjcmVhdGUgYWxsIG9mIHRoZSBpbnB1dCBmaWVsZHMsIGZvciBpY29ucyBldGNcbiRsb29wLWdyZWVuLTEyNTogIzA1Njc2MztcbiRsb29wLWdyZWVuLTEwMDogIzEwN2Q3OTtcbiRsb29wLWdyZWVuLTUwOiAjODdiZWJjO1xuJGxvb3AtZ3JlZW4tMjU6ICNjM2RmZGQ7XG4kbG9vcC1ncmVlbi01OiAjZjNmOGY4O1xuXG4vLy8gVXNlZCBpbiBuYXZpZ2F0aW9uIGFuZCBhcyBzZWNvbmRhcnkgZWxlbWVudCBjb2xvdXJzIG9uIGJ1dHRvbnMgYW5kIGxpbmtzXG4kbG9vcC1wdXJwbGUtMTI1OiAjMjYxMDQ3O1xuJGxvb3AtcHVycGxlLTEwMDogIzMxMTM1ZTtcbiRsb29wLXB1cnBsZS03NTogIzQ2MjQ3ODtcbiRsb29wLXB1cnBsZS02MDogIzg2NmFiMDtcbiRsb29wLXB1cnBsZS01MDogIzhhN2JhMTtcbiRsb29wLXB1cnBsZS00MDogI2VhZTZmMDtcbiRsb29wLXB1cnBsZS0yNTogI2NiYzRkNztcbiRsb29wLXB1cnBsZS01OiAjZjVmM2Y3O1xuXG4vLy8gVXNlZCBhcyBiYWNrZ3JvdW5kIGZvciBkaXNhYmxlZCBsYWJlbHMgYW5kIGZpZWxkcyBhcyB3ZWxsIGFzIGZvciB0YWdzXG4kbGlnaHQtZ3JleTogI2VlZWVlZTtcblxuLy8vIEdyZXlzY2FsZVxuJGdyZXktMTAwOiAjMDAwMDAwO1xuJGdyZXktNTA6IHRyYW5zcGFyZW50aXplKCRncmV5LTEwMCwgMSAtIDAuNSk7XG4kZ3JleS0yNTogdHJhbnNwYXJlbnRpemUoJGdyZXktMTAwLCAxIC0gMC4yNSk7XG4kZ3JleS01OiB0cmFuc3BhcmVudGl6ZSgkZ3JleS0xMDAsIDEgLSAwLjA1KTtcblxuLy8vIG5vdGlmaWNhdGlvbnMsIHN0YXR1cywgY2F0ZWdvcmllc1xuLy8vIHdhcm5pbmcsIGFsZXJ0XG4kZGFuZ2VyLXJlZDogI2VlMjMyZjtcbi8vLyBvaywgYWNjZXB0ZWQsIGZpbmlzaGVkXG4keWVzLWdyZWVuOiAjMWRiMDQ2O1xuLy8vIHBlbmRpbmdcbiRsb29wLXllbGxvdzogI2VjYjMyMDtcblxuLy8vIGhpZ2hsaWdodCBjb2xvdXJzXG4kcHVycGxlLWhpZ2hsaWdodDogIzZmMDFlNTtcbiRwdXJwbGUtaGlnaGxpZ2h0LTAyNTogcmdiYSgxMTEsIDEsIDIyOSwgMC4yNSk7XG4kbG9vcC1waW5rOiAjZWY0N2EyO1xuJGxvb3AtcGluay0wMjU6IHJnYmEoMjM5LCA3MSwgMTYyLCAwLjI1KTtcbiRsaWdodC1ibHVlOiAjMjBkM2VjO1xuJGxpZ2h0LWJsdWUtMDI1OiByZ2JhKDMyLCAyMTEsIDIzNiwgMC4yNSk7XG4kbG9vcC1ibHVlOiAjMjA3MmVjO1xuJGxvb3AtYmx1ZS0wMjU6IHJnYmEoMzIsIDExNCwgMjM2LCAwLjI1KTtcbiRncmVlbi0yOiAjYzNlYzIwO1xuJGdyZWVuLTItMDI1OiByZ2JhKDE5NSwgMjM2LCAzMiwgMC4yNSk7XG4kbG9vcC1vcmFuZ2U6ICNlOTgwMjA7XG4kbG9vcC1vcmFuZ2UtMDI1OiByZ2JhKDIzMywgMTI4LCAzMiwgMC4yNSk7XG5cbi8vLyBTcGFjZXJzXG4kZ3JheS1saW5lLWNvbG9yOiAjZDZkMGRmO1xuXG4kbG9vcC1yZWQtZGFyazogI2M5MzA0ZDtcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 37087:
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/inbox/stories/story-details/story-review/story-review-messenger-whatsapp-wrapper/story-review-messenger-whatsapp-desktop/story-review-messenger-whatsapp-desktop.component.ts ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoryReviewMessengerWhatsappDesktopComponent": () => (/* binding */ StoryReviewMessengerWhatsappDesktopComponent)
/* harmony export */ });
/* harmony import */ var _app_core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/core/services/api/model/channel.enum */ 92128);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _shared_story_review_global_story_review_global_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/story-review-global/story-review-global.component */ 78181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _story_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../story-details.service */ 70341);
/* harmony import */ var _app_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/services/ui/ui.service */ 21428);
/* harmony import */ var _app_core_services_fixed_positioning_fixed_positioning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/services/fixed-positioning/fixed-positioning */ 75060);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_divider_divider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/divider/divider.component */ 49696);
/* harmony import */ var _shared_review_header_review_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/review-header/review-header.component */ 35713);
/* harmony import */ var _shared_story_content_story_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/story-content/story-content.component */ 55627);
/* harmony import */ var _shared_story_details_tabs_story_details_tabs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/story-details-tabs/story-details-tabs.component */ 88241);
/* harmony import */ var _shared_story_header_story_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/story-header/story-header.component */ 11198);
/* harmony import */ var _shared_story_information_story_information_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/story-information/story-information.component */ 47968);
/* harmony import */ var _shared_story_review_action_buttons_story_review_action_buttons_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/story-review-action-buttons/story-review-action-buttons.component */ 31283);
/* harmony import */ var _shared_story_review_form_story_review_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/story-review-form/story-review-form.component */ 31584);
/* harmony import */ var _admin_components_conversation_conversation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../admin/components/conversation/conversation.component */ 58821);
/* harmony import */ var _shared_loop_design_system_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../shared/loop-design-system/components/banner/banner.component */ 5581);
/* harmony import */ var _shared_components_case_manager_note_case_manager_note_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shared/components/case-manager-note/case-manager-note.component */ 45202);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 38699);




















const _c0 = ["storyReviewContainer"];
const _c1 = ["storyDetails"];
function StoryReviewMessengerWhatsappDesktopComponent_app_case_manager_note_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "app-case-manager-note", 16);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("note", ctx_r2.storyDetailsService.getCaseManagerNote());
  }
}
function StoryReviewMessengerWhatsappDesktopComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "loop-banner", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("bannerTheme", ctx_r3.BannerTheme.ERROR)("prefixIcon", ctx_r3.LoopIcon.Name.Info)("text", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 3, "story.details.review.form.toast.error.reviewError"));
  }
}
class StoryReviewMessengerWhatsappDesktopComponent extends _shared_story_review_global_story_review_global_component__WEBPACK_IMPORTED_MODULE_1__.StoryReviewGlobalComponent {
  constructor(storyDetailsService, ui, fixedPositioning, renderer) {
    super(storyDetailsService);
    this.ui = ui;
    this.fixedPositioning = fixedPositioning;
    this.renderer = renderer;
    this.CHANNEL_CONSTANTS = _app_core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_CONSTANTS;
    //translation keys
    this.reviewTabs = ['story.details.review.tabs.storyPreview'];
    this.rightSectionTabs = ['story.details.review.tabs.review', 'story.details.review.tabs.storyInformation'];
  }
  ngOnInit() {
    let reviewConversationTab = 'story.details.review.tabs.smsConversation';
    if (this.storyDetailsService.story.channel === _app_core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_CONSTANTS.MESSENGER) {
      reviewConversationTab = 'story.details.review.tabs.messengerConversation';
    } else if (this.storyDetailsService.story.channel === _app_core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_CONSTANTS.WHATSAPP) {
      reviewConversationTab = 'story.details.review.tabs.whatsAppConversation';
    } else if (this.storyDetailsService.story.channel === _app_core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_CONSTANTS.TELEGRAM) {
      reviewConversationTab = 'story.details.review.tabs.telegramConversation';
    }
    this.reviewTabs.unshift(reviewConversationTab);
  }
  ngAfterViewInit() {
    const isMobileView = this.ui.mobileView$.getValue();
    if (!isMobileView) {
      this.setDynamicHeight();
    }
    this.enableFixedPositioning();
  }
  enableFixedPositioning() {
    this.fixedElementData = {
      containerElement: this.storyReviewContainerElement.nativeElement,
      documentTopPadding: 70,
      fixedElement: this.storyDetailsElement.nativeElement,
      fixedElementPadding: 32
    };
    this.ui.mobileView$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this.destroyed$)).subscribe(isMobile => {
      setTimeout(() => this.fixedPositioning.positionFixedElement(this.fixedElementData, isMobile), 0);
    });
  }
  onWindowScroll() {
    this.fixedPositioning.positionFixedElement(this.fixedElementData, this.ui.mobileView$.getValue() || this.ui.tabletView$.getValue());
  }
  onWindowResize() {
    this.fixedPositioning.positionFixedElement(this.fixedElementData, this.ui.mobileView$.getValue() || this.ui.tabletView$.getValue());
  }
  setDynamicHeight() {
    const windowHeight = window.innerHeight;
    const calculatedHeight = windowHeight * 0.8;
    this.renderer.setStyle(this.storyDetailsElement.nativeElement, 'height', 'auto');
    this.renderer.setStyle(this.storyDetailsElement.nativeElement, 'max-height', `${calculatedHeight}px`);
    this.renderer.setStyle(this.storyDetailsElement.nativeElement, 'overflow-y', 'auto');
  }
  static #_ = this.ɵfac = function StoryReviewMessengerWhatsappDesktopComponent_Factory(t) {
    return new (t || StoryReviewMessengerWhatsappDesktopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_story_details_service__WEBPACK_IMPORTED_MODULE_2__.StoryDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_app_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_3__.UIService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_app_core_services_fixed_positioning_fixed_positioning__WEBPACK_IMPORTED_MODULE_4__.FixedPositioning), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_16__.Renderer2));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
    type: StoryReviewMessengerWhatsappDesktopComponent,
    selectors: [["app-story-review-messenger-whatsapp-desktop"]],
    viewQuery: function StoryReviewMessengerWhatsappDesktopComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.storyReviewContainerElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.storyDetailsElement = _t.first);
      }
    },
    hostBindings: function StoryReviewMessengerWhatsappDesktopComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("scroll", function StoryReviewMessengerWhatsappDesktopComponent_scroll_HostBindingHandler($event) {
          return ctx.onWindowScroll($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresolveWindow"])("resize", function StoryReviewMessengerWhatsappDesktopComponent_resize_HostBindingHandler($event) {
          return ctx.onWindowResize($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresolveWindow"]);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵInheritDefinitionFeature"]],
    decls: 26,
    vars: 14,
    consts: [[1, "story-review"], [3, "title", "subTitle"], [1, "story-review__details-container"], ["storyReviewContainer", ""], [1, "story-review__left-container"], ["storyDetails", ""], [1, "background"], [3, "note", 4, "ngIf"], [1, "story-details-tabs__header", 3, "tabs"], ["firstTab", ""], [3, "id", "storyMessages", "contactAccepted", "channel", "switchPinMessageToStory$"], ["secondTab", ""], [1, "full-width__divider"], [1, "story-review__right-container"], [1, "d-block", "mt-1"], ["class", "story-review__validation-banner", 4, "ngIf"], [3, "note"], [1, "story-review__validation-banner"], [3, "bannerTheme", "prefixIcon", "text"]],
    template: function StoryReviewMessengerWhatsappDesktopComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "app-review-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div", 2, 3)(6, "div", 4, 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](9, "app-story-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](10, StoryReviewMessengerWhatsappDesktopComponent_app_case_manager_note_10_Template, 1, 1, "app-case-manager-note", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "app-story-details-tabs", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](12, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "app-conversation", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("switchPinMessageToStory$", function StoryReviewMessengerWhatsappDesktopComponent_Template_app_conversation_switchPinMessageToStory__13_listener($event) {
          return ctx.storyDetailsService.switchPinMessageToStory($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](14, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](15, "app-story-content")(16, "app-divider", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "div", 13)(18, "div", 6)(19, "app-story-details-tabs", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](20, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](21, "app-story-review-form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](22, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](23, "app-story-information");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](24, "app-story-review-action-buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](25, StoryReviewMessengerWhatsappDesktopComponent_div_25_Template, 3, 5, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 10, "story.details.review.other.header.title"))("subTitle", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 12, "story.details.review.other.header.subTitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.storyDetailsService.getCaseManagerNote());
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("tabs", ctx.reviewTabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("id", ctx.storyDetailsService.story.id)("storyMessages", ctx.storyDetailsService.story.messages)("contactAccepted", ctx.storyDetailsService.story.contactAccepted)("channel", ctx.storyDetailsService.story.channel);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("tabs", ctx.rightSectionTabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.submittingError);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _shared_divider_divider_component__WEBPACK_IMPORTED_MODULE_5__.DividerComponent, _shared_review_header_review_header_component__WEBPACK_IMPORTED_MODULE_6__.ReviewHeaderComponent, _shared_story_content_story_content_component__WEBPACK_IMPORTED_MODULE_7__.StoryContentComponent, _shared_story_details_tabs_story_details_tabs_component__WEBPACK_IMPORTED_MODULE_8__.StoryDetailsTabsComponent, _shared_story_header_story_header_component__WEBPACK_IMPORTED_MODULE_9__.StoryHeaderComponent, _shared_story_information_story_information_component__WEBPACK_IMPORTED_MODULE_10__.StoryInformationComponent, _shared_story_review_action_buttons_story_review_action_buttons_component__WEBPACK_IMPORTED_MODULE_11__.StoryReviewActionButtonsComponent, _shared_story_review_form_story_review_form_component__WEBPACK_IMPORTED_MODULE_12__.StoryReviewFormComponent, _admin_components_conversation_conversation_component__WEBPACK_IMPORTED_MODULE_13__.ConversationComponent, _shared_loop_design_system_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_14__.BannerComponent, _shared_components_case_manager_note_case_manager_note_component__WEBPACK_IMPORTED_MODULE_15__.CaseManagerNoteComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yeS1yZXZpZXctbWVzc2VuZ2VyLXdoYXRzYXBwLWRlc2t0b3AuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9pbmJveC9zdG9yaWVzL3N0b3J5LWRldGFpbHMvc3RvcnktcmV2aWV3L3N0b3J5LXJldmlldy1tZXNzZW5nZXItd2hhdHNhcHAtd3JhcHBlci9zdG9yeS1yZXZpZXctbWVzc2VuZ2VyLXdoYXRzYXBwLWRlc2t0b3Avc3RvcnktcmV2aWV3LW1lc3Nlbmdlci13aGF0c2FwcC1kZXNrdG9wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnTkFBZ04iLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6430:
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/inbox/stories/story-details/story-review/story-review-messenger-whatsapp-wrapper/story-review-messenger-whatsapp-mobile/story-review-messenger-whatsapp-mobile.component.ts ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoryReviewMessengerWhatsappMobileComponent": () => (/* binding */ StoryReviewMessengerWhatsappMobileComponent)
/* harmony export */ });
/* harmony import */ var _app_core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/core/services/api/model/channel.enum */ 92128);
/* harmony import */ var _shared_story_review_global_story_review_global_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/story-review-global/story-review-global.component */ 78181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _story_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../story-details.service */ 70341);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_divider_divider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/divider/divider.component */ 49696);
/* harmony import */ var _shared_review_header_review_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/review-header/review-header.component */ 35713);
/* harmony import */ var _shared_story_content_story_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/story-content/story-content.component */ 55627);
/* harmony import */ var _shared_story_details_tabs_story_details_tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/story-details-tabs/story-details-tabs.component */ 88241);
/* harmony import */ var _shared_story_header_story_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/story-header/story-header.component */ 11198);
/* harmony import */ var _shared_story_information_story_information_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/story-information/story-information.component */ 47968);
/* harmony import */ var _shared_story_review_action_buttons_story_review_action_buttons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/story-review-action-buttons/story-review-action-buttons.component */ 31283);
/* harmony import */ var _shared_story_review_form_story_review_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/story-review-form/story-review-form.component */ 31584);
/* harmony import */ var _admin_components_conversation_conversation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../admin/components/conversation/conversation.component */ 58821);
/* harmony import */ var _shared_loop_design_system_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../shared/loop-design-system/components/banner/banner.component */ 5581);
/* harmony import */ var _shared_components_case_manager_note_case_manager_note_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/components/case-manager-note/case-manager-note.component */ 45202);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 38699);

















function StoryReviewMessengerWhatsappMobileComponent_app_case_manager_note_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-case-manager-note", 13);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("note", ctx_r0.storyDetailsService.getCaseManagerNote());
  }
}
function StoryReviewMessengerWhatsappMobileComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 14)(1, "loop-banner", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("close$", function StoryReviewMessengerWhatsappMobileComponent_div_23_Template_loop_banner_close__1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.submittingError = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("bannerTheme", ctx_r1.BannerTheme.ERROR)("prefixIcon", ctx_r1.LoopIcon.Name.Info)("text", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 3, "story.details.review.form.toast.error.reviewError"));
  }
}
class StoryReviewMessengerWhatsappMobileComponent extends _shared_story_review_global_story_review_global_component__WEBPACK_IMPORTED_MODULE_1__.StoryReviewGlobalComponent {
  constructor(storyDetailsService) {
    super(storyDetailsService);
    this.CHANNEL_CONSTANTS = _app_core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_CONSTANTS;
    //translation keys
    this.leftSectionTabs = ['story.details.review.tabs.storyPreview'];
    this.rightSectionTabs = ['story.details.review.tabs.review', 'story.details.review.tabs.storyInformation'];
  }
  ngOnInit() {
    let reviewConversationTab = 'story.details.review.tabs.smsConversation';
    if (this.storyDetailsService.story.channel === _app_core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_CONSTANTS.MESSENGER) {
      reviewConversationTab = 'story.details.review.tabs.messengerConversation';
    } else if (this.storyDetailsService.story.channel === _app_core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_CONSTANTS.WHATSAPP) {
      reviewConversationTab = 'story.details.review.tabs.whatsAppConversation';
    } else if (this.storyDetailsService.story.channel === _app_core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_CONSTANTS.TELEGRAM) {
      reviewConversationTab = 'story.details.review.tabs.telegramConversation';
    }
    this.leftSectionTabs.unshift(reviewConversationTab);
  }
  static #_ = this.ɵfac = function StoryReviewMessengerWhatsappMobileComponent_Factory(t) {
    return new (t || StoryReviewMessengerWhatsappMobileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_story_details_service__WEBPACK_IMPORTED_MODULE_2__.StoryDetailsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
    type: StoryReviewMessengerWhatsappMobileComponent,
    selectors: [["app-story-review-messenger-whatsapp-mobile"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵInheritDefinitionFeature"]],
    decls: 24,
    vars: 14,
    consts: [[1, "story-review"], [3, "title", "subTitle"], [1, "story-review__details-container"], [1, "story-review__left-container"], [1, "background"], [1, "full-width__divider", "mb-1"], [1, "story-details-tabs__header", 3, "tabs"], ["firstTab", ""], [3, "id", "storyMessages", "contactAccepted", "channel", "switchPinMessageToStory$"], ["secondTab", ""], [1, "story-review__right-container"], [3, "note", 4, "ngIf"], ["class", "story-review__validation-banner", 4, "ngIf"], [3, "note"], [1, "story-review__validation-banner"], [3, "bannerTheme", "prefixIcon", "text", "close$"]],
    template: function StoryReviewMessengerWhatsappMobileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "app-review-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "app-story-header")(8, "app-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "app-story-details-tabs", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "app-conversation", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("switchPinMessageToStory$", function StoryReviewMessengerWhatsappMobileComponent_Template_app_conversation_switchPinMessageToStory__11_listener($event) {
          return ctx.storyDetailsService.switchPinMessageToStory($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](12, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](13, "app-story-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 10)(15, "div", 4)(16, "app-story-details-tabs", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](17, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](18, "app-story-review-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](19, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](20, "app-story-information");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](21, "app-story-review-action-buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](22, StoryReviewMessengerWhatsappMobileComponent_app_case_manager_note_22_Template, 1, 1, "app-case-manager-note", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](23, StoryReviewMessengerWhatsappMobileComponent_div_23_Template, 3, 5, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 10, "story.details.review.other.header.title"))("subTitle", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 12, "story.details.review.other.header.subTitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("tabs", ctx.leftSectionTabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("id", ctx.storyDetailsService.story.id)("storyMessages", ctx.storyDetailsService.story.messages)("contactAccepted", ctx.storyDetailsService.story.contactAccepted)("channel", ctx.storyDetailsService.story.channel);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("tabs", ctx.rightSectionTabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.storyDetailsService.getCaseManagerNote());
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.submittingError);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _shared_divider_divider_component__WEBPACK_IMPORTED_MODULE_3__.DividerComponent, _shared_review_header_review_header_component__WEBPACK_IMPORTED_MODULE_4__.ReviewHeaderComponent, _shared_story_content_story_content_component__WEBPACK_IMPORTED_MODULE_5__.StoryContentComponent, _shared_story_details_tabs_story_details_tabs_component__WEBPACK_IMPORTED_MODULE_6__.StoryDetailsTabsComponent, _shared_story_header_story_header_component__WEBPACK_IMPORTED_MODULE_7__.StoryHeaderComponent, _shared_story_information_story_information_component__WEBPACK_IMPORTED_MODULE_8__.StoryInformationComponent, _shared_story_review_action_buttons_story_review_action_buttons_component__WEBPACK_IMPORTED_MODULE_9__.StoryReviewActionButtonsComponent, _shared_story_review_form_story_review_form_component__WEBPACK_IMPORTED_MODULE_10__.StoryReviewFormComponent, _admin_components_conversation_conversation_component__WEBPACK_IMPORTED_MODULE_11__.ConversationComponent, _shared_loop_design_system_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_12__.BannerComponent, _shared_components_case_manager_note_case_manager_note_component__WEBPACK_IMPORTED_MODULE_13__.CaseManagerNoteComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yeS1yZXZpZXctbWVzc2VuZ2VyLXdoYXRzYXBwLW1vYmlsZS5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9pbmJveC9zdG9yaWVzL3N0b3J5LWRldGFpbHMvc3RvcnktcmV2aWV3L3N0b3J5LXJldmlldy1tZXNzZW5nZXItd2hhdHNhcHAtd3JhcHBlci9zdG9yeS1yZXZpZXctbWVzc2VuZ2VyLXdoYXRzYXBwLW1vYmlsZS9zdG9yeS1yZXZpZXctbWVzc2VuZ2VyLXdoYXRzYXBwLW1vYmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNE1BQTRNIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 37538:
/*!***************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/inbox/stories/story-details/story-review/story-review-messenger-whatsapp-wrapper/story-review-messenger-whatsapp-wrapper.component.ts ***!
  \***************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoryReviewMessengerWhatsappWrapperComponent": () => (/* binding */ StoryReviewMessengerWhatsappWrapperComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/core/services/ui/ui.service */ 21428);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _story_review_messenger_whatsapp_desktop_story_review_messenger_whatsapp_desktop_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./story-review-messenger-whatsapp-desktop/story-review-messenger-whatsapp-desktop.component */ 37087);
/* harmony import */ var _story_review_messenger_whatsapp_mobile_story_review_messenger_whatsapp_mobile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./story-review-messenger-whatsapp-mobile/story-review-messenger-whatsapp-mobile.component */ 6430);





function StoryReviewMessengerWhatsappWrapperComponent_app_story_review_messenger_whatsapp_mobile_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-story-review-messenger-whatsapp-mobile");
  }
}
function StoryReviewMessengerWhatsappWrapperComponent_app_story_review_messenger_whatsapp_desktop_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-story-review-messenger-whatsapp-desktop");
  }
}
class StoryReviewMessengerWhatsappWrapperComponent {
  constructor(ui) {
    this.ui = ui;
  }
  static #_ = this.ɵfac = function StoryReviewMessengerWhatsappWrapperComponent_Factory(t) {
    return new (t || StoryReviewMessengerWhatsappWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_0__.UIService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: StoryReviewMessengerWhatsappWrapperComponent,
    selectors: [["app-story-review-messenger-whatsapp-wrapper"]],
    decls: 3,
    vars: 2,
    consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"]],
    template: function StoryReviewMessengerWhatsappWrapperComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, StoryReviewMessengerWhatsappWrapperComponent_app_story_review_messenger_whatsapp_mobile_1_Template, 1, 0, "app-story-review-messenger-whatsapp-mobile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, StoryReviewMessengerWhatsappWrapperComponent_app_story_review_messenger_whatsapp_desktop_2_Template, 1, 0, "app-story-review-messenger-whatsapp-desktop", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", ctx.ui.mobileView);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchDefault, _story_review_messenger_whatsapp_desktop_story_review_messenger_whatsapp_desktop_component__WEBPACK_IMPORTED_MODULE_1__.StoryReviewMessengerWhatsappDesktopComponent, _story_review_messenger_whatsapp_mobile_story_review_messenger_whatsapp_mobile_component__WEBPACK_IMPORTED_MODULE_2__.StoryReviewMessengerWhatsappMobileComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yeS1yZXZpZXctbWVzc2VuZ2VyLXdoYXRzYXBwLXdyYXBwZXIuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9pbmJveC9zdG9yaWVzL3N0b3J5LWRldGFpbHMvc3RvcnktcmV2aWV3L3N0b3J5LXJldmlldy1tZXNzZW5nZXItd2hhdHNhcHAtd3JhcHBlci9zdG9yeS1yZXZpZXctbWVzc2VuZ2VyLXdoYXRzYXBwLXdyYXBwZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdOQUFnTiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 46237:
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/inbox/stories/story-details/story-review/story-review-voice-wrapper/story-review-voice-desktop/story-review-voice-desktop.component.ts ***!
  \****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoryReviewVoiceDesktopComponent": () => (/* binding */ StoryReviewVoiceDesktopComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _shared_story_review_global_story_review_global_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/story-review-global/story-review-global.component */ 78181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _story_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../story-details.service */ 70341);
/* harmony import */ var _app_core_services_api_ivrr_ivrr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/services/api/ivrr/ivrr */ 99418);
/* harmony import */ var _app_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/services/ui/ui.service */ 21428);
/* harmony import */ var _app_core_services_fixed_positioning_fixed_positioning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/services/fixed-positioning/fixed-positioning */ 75060);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_divider_divider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/divider/divider.component */ 49696);
/* harmony import */ var _shared_review_header_review_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/review-header/review-header.component */ 35713);
/* harmony import */ var _shared_story_content_story_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/story-content/story-content.component */ 55627);
/* harmony import */ var _shared_story_details_tabs_story_details_tabs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/story-details-tabs/story-details-tabs.component */ 88241);
/* harmony import */ var _shared_story_header_story_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/story-header/story-header.component */ 11198);
/* harmony import */ var _shared_story_information_story_information_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/story-information/story-information.component */ 47968);
/* harmony import */ var _shared_story_review_action_buttons_story_review_action_buttons_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/story-review-action-buttons/story-review-action-buttons.component */ 31283);
/* harmony import */ var _shared_story_review_form_story_review_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/story-review-form/story-review-form.component */ 31584);
/* harmony import */ var _shared_story_author_history_story_author_history_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/story-author-history/story-author-history.component */ 81100);
/* harmony import */ var _shared_components_audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shared/components/audio-player/audio-player.component */ 77200);
/* harmony import */ var _shared_loop_design_system_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../shared/loop-design-system/components/banner/banner.component */ 5581);
/* harmony import */ var _shared_components_case_manager_note_case_manager_note_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @shared/components/case-manager-note/case-manager-note.component */ 45202);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 38699);





















const _c0 = ["storyReviewContainer"];
const _c1 = ["storyDetails"];
function StoryReviewVoiceDesktopComponent_app_case_manager_note_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "app-case-manager-note", 18);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("note", ctx_r2.storyDetailsService.getCaseManagerNote());
  }
}
function StoryReviewVoiceDesktopComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 19)(1, "loop-banner", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("close$", function StoryReviewVoiceDesktopComponent_div_25_Template_loop_banner_close__1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r4.submittingError = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("bannerTheme", ctx_r3.BannerTheme.ERROR)("prefixIcon", ctx_r3.LoopIcon.Name.Info)("text", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 3, "story.details.review.form.toast.error.reviewError"));
  }
}
class StoryReviewVoiceDesktopComponent extends _shared_story_review_global_story_review_global_component__WEBPACK_IMPORTED_MODULE_0__.StoryReviewGlobalComponent {
  constructor(storyDetailsService, ivrrService, ui, fixedPositioning, renderer) {
    super(storyDetailsService);
    this.ivrrService = ivrrService;
    this.ui = ui;
    this.fixedPositioning = fixedPositioning;
    this.renderer = renderer;
    this.rightSectionTabs = ['story.details.review.tabs.review', 'story.details.review.tabs.storyInformation', 'story.details.review.tabs.authorHistory'];
  }
  ngOnInit() {
    this.setAudioToTranscribe();
  }
  setAudioToTranscribe() {
    const s3FileId = this.storyDetailsService.story.calls.find(call => call.isStory).s3FileId;
    this.audioSrc$ = this.ivrrService.getSignedUrlForS3Audio(s3FileId);
  }
  ngAfterViewInit() {
    const isMobileView = this.ui.mobileView$.getValue();
    if (!isMobileView) {
      this.setDynamicHeight();
    }
    this.enableFixedPositioning();
  }
  enableFixedPositioning() {
    this.fixedElementData = {
      containerElement: this.storyReviewContainerElement.nativeElement,
      documentTopPadding: 70,
      fixedElement: this.storyDetailsElement.nativeElement,
      fixedElementPadding: 32
    };
    this.ui.mobileView$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.takeUntil)(this.destroyed$)).subscribe(isMobile => {
      setTimeout(() => this.fixedPositioning.positionFixedElement(this.fixedElementData, isMobile), 0);
    });
  }
  onWindowScroll() {
    this.fixedPositioning.positionFixedElement(this.fixedElementData, this.ui.mobileView$.getValue() || this.ui.tabletView$.getValue());
  }
  onWindowResize() {
    this.fixedPositioning.positionFixedElement(this.fixedElementData, this.ui.mobileView$.getValue() || this.ui.tabletView$.getValue());
  }
  setDynamicHeight() {
    const windowHeight = window.innerHeight;
    const calculatedHeight = windowHeight * 0.8;
    this.renderer.setStyle(this.storyDetailsElement.nativeElement, 'height', 'auto');
    this.renderer.setStyle(this.storyDetailsElement.nativeElement, 'max-height', `${calculatedHeight}px`);
    this.renderer.setStyle(this.storyDetailsElement.nativeElement, 'overflow-y', 'auto');
  }
  static #_ = this.ɵfac = function StoryReviewVoiceDesktopComponent_Factory(t) {
    return new (t || StoryReviewVoiceDesktopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_story_details_service__WEBPACK_IMPORTED_MODULE_1__.StoryDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_app_core_services_api_ivrr_ivrr__WEBPACK_IMPORTED_MODULE_2__.IVRRService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_app_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_3__.UIService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_app_core_services_fixed_positioning_fixed_positioning__WEBPACK_IMPORTED_MODULE_4__.FixedPositioning), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_17__.Renderer2));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({
    type: StoryReviewVoiceDesktopComponent,
    selectors: [["app-story-review-voice-desktop"]],
    viewQuery: function StoryReviewVoiceDesktopComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.storyReviewContainerElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.storyDetailsElement = _t.first);
      }
    },
    hostBindings: function StoryReviewVoiceDesktopComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("scroll", function StoryReviewVoiceDesktopComponent_scroll_HostBindingHandler($event) {
          return ctx.onWindowScroll($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresolveWindow"])("resize", function StoryReviewVoiceDesktopComponent_resize_HostBindingHandler($event) {
          return ctx.onWindowResize($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresolveWindow"]);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵInheritDefinitionFeature"]],
    decls: 26,
    vars: 14,
    consts: [[1, "story-review"], [3, "title", "subTitle"], [1, "story-review__details-container"], ["storyReviewContainer", ""], [1, "story-review__left-container"], [1, "background"], ["storyDetails", ""], [1, "full-width__divider"], [3, "note", 4, "ngIf"], [1, "audio-player", "ivrr-step__top-player", 3, "isEscapeButtonEnable", "audioSrc"], [1, "story-review__right-container"], [1, "story-details-tabs__header", 3, "tabs"], ["firstTab", ""], [1, "d-block", "mt-1"], ["secondTab", ""], ["thirdTab", ""], [3, "otherStoriesSameRecipient"], ["class", "story-review__validation-banner", 4, "ngIf"], [3, "note"], [1, "story-review__validation-banner"], [3, "bannerTheme", "prefixIcon", "text", "close$"]],
    template: function StoryReviewVoiceDesktopComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "app-review-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "div", 2, 3)(6, "div", 4)(7, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](9, "app-story-header")(10, "app-divider", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](11, StoryReviewVoiceDesktopComponent_app_case_manager_note_11_Template, 1, 1, "app-case-manager-note", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](12, "app-audio-player", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](14, "app-story-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "div", 10)(16, "div", 5)(17, "app-story-details-tabs", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](18, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](19, "app-story-review-form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](20, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](21, "app-story-information");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](22, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](23, "app-story-author-history", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](24, "app-story-review-action-buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](25, StoryReviewVoiceDesktopComponent_div_25_Template, 3, 5, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 8, "story.details.review.other.header.title"))("subTitle", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](3, 10, "story.details.review.other.header.subTitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.storyDetailsService.getCaseManagerNote());
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("isEscapeButtonEnable", true)("audioSrc", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](13, 12, ctx.audioSrc$));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("tabs", ctx.rightSectionTabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("otherStoriesSameRecipient", ctx.storyDetailsService.story.otherStoriesSameRecipient);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.submittingError);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _shared_divider_divider_component__WEBPACK_IMPORTED_MODULE_5__.DividerComponent, _shared_review_header_review_header_component__WEBPACK_IMPORTED_MODULE_6__.ReviewHeaderComponent, _shared_story_content_story_content_component__WEBPACK_IMPORTED_MODULE_7__.StoryContentComponent, _shared_story_details_tabs_story_details_tabs_component__WEBPACK_IMPORTED_MODULE_8__.StoryDetailsTabsComponent, _shared_story_header_story_header_component__WEBPACK_IMPORTED_MODULE_9__.StoryHeaderComponent, _shared_story_information_story_information_component__WEBPACK_IMPORTED_MODULE_10__.StoryInformationComponent, _shared_story_review_action_buttons_story_review_action_buttons_component__WEBPACK_IMPORTED_MODULE_11__.StoryReviewActionButtonsComponent, _shared_story_review_form_story_review_form_component__WEBPACK_IMPORTED_MODULE_12__.StoryReviewFormComponent, _shared_story_author_history_story_author_history_component__WEBPACK_IMPORTED_MODULE_13__.StoryAuthorHistoryComponent, _shared_components_audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_14__.AudioPlayerComponent, _shared_loop_design_system_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_15__.BannerComponent, _shared_components_case_manager_note_case_manager_note_component__WEBPACK_IMPORTED_MODULE_16__.CaseManagerNoteComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yeS1yZXZpZXctdm9pY2UtZGVza3RvcC5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9pbmJveC9zdG9yaWVzL3N0b3J5LWRldGFpbHMvc3RvcnktcmV2aWV3L3N0b3J5LXJldmlldy12b2ljZS13cmFwcGVyL3N0b3J5LXJldmlldy12b2ljZS1kZXNrdG9wL3N0b3J5LXJldmlldy12b2ljZS1kZXNrdG9wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw0TEFBNEwiLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 12983:
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/inbox/stories/story-details/story-review/story-review-voice-wrapper/story-review-voice-mobile/story-review-voice-mobile.component.ts ***!
  \**************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoryReviewVoiceMobileComponent": () => (/* binding */ StoryReviewVoiceMobileComponent)
/* harmony export */ });
/* harmony import */ var _shared_story_review_global_story_review_global_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/story-review-global/story-review-global.component */ 78181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _story_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../story-details.service */ 70341);
/* harmony import */ var _app_core_services_api_ivrr_ivrr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/services/api/ivrr/ivrr */ 99418);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_review_header_review_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/review-header/review-header.component */ 35713);
/* harmony import */ var _shared_story_content_story_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/story-content/story-content.component */ 55627);
/* harmony import */ var _shared_story_details_tabs_story_details_tabs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/story-details-tabs/story-details-tabs.component */ 88241);
/* harmony import */ var _shared_story_header_story_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/story-header/story-header.component */ 11198);
/* harmony import */ var _shared_story_information_story_information_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/story-information/story-information.component */ 47968);
/* harmony import */ var _shared_story_review_action_buttons_story_review_action_buttons_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/story-review-action-buttons/story-review-action-buttons.component */ 31283);
/* harmony import */ var _shared_story_review_form_story_review_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/story-review-form/story-review-form.component */ 31584);
/* harmony import */ var _shared_story_author_history_story_author_history_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/story-author-history/story-author-history.component */ 81100);
/* harmony import */ var _shared_components_audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/components/audio-player/audio-player.component */ 77200);
/* harmony import */ var _shared_loop_design_system_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../shared/loop-design-system/components/banner/banner.component */ 5581);
/* harmony import */ var _shared_components_case_manager_note_case_manager_note_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/components/case-manager-note/case-manager-note.component */ 45202);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 38699);

















function StoryReviewVoiceMobileComponent_app_case_manager_note_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-case-manager-note", 15);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("note", ctx_r0.storyDetailsService.getCaseManagerNote());
  }
}
function StoryReviewVoiceMobileComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 16)(1, "loop-banner", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("close$", function StoryReviewVoiceMobileComponent_div_22_Template_loop_banner_close__1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.submittingError = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("bannerTheme", ctx_r1.BannerTheme.ERROR)("prefixIcon", ctx_r1.LoopIcon.Name.Info)("text", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 3, "story.details.review.form.toast.error.reviewError"));
  }
}
class StoryReviewVoiceMobileComponent extends _shared_story_review_global_story_review_global_component__WEBPACK_IMPORTED_MODULE_0__.StoryReviewGlobalComponent {
  constructor(storyDetailsService, ivrrService) {
    super(storyDetailsService);
    this.ivrrService = ivrrService;
    //translation keys
    this.rightSectionTabs = ['story.details.review.tabs.review', 'story.details.review.tabs.storyInformation', 'story.details.review.tabs.authorHistory'];
  }
  ngOnInit() {
    this.setAudioToTranscribe();
  }
  setAudioToTranscribe() {
    const s3FileId = this.storyDetailsService.story.calls.find(call => call.isStory).s3FileId;
    this.audioSrc$ = this.ivrrService.getSignedUrlForS3Audio(s3FileId);
  }
  static #_ = this.ɵfac = function StoryReviewVoiceMobileComponent_Factory(t) {
    return new (t || StoryReviewVoiceMobileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_story_details_service__WEBPACK_IMPORTED_MODULE_1__.StoryDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_app_core_services_api_ivrr_ivrr__WEBPACK_IMPORTED_MODULE_2__.IVRRService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
    type: StoryReviewVoiceMobileComponent,
    selectors: [["app-story-review-voice-mobile"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵInheritDefinitionFeature"]],
    decls: 23,
    vars: 14,
    consts: [[1, "story-review"], [3, "title", "subTitle"], [1, "story-review__details-container"], [1, "story-review__left-container"], [1, "background"], [1, "audio-player", "ivrr-step__top-player", 3, "isEscapeButtonEnable", "audioSrc"], [1, "story-review__right-container"], [1, "story-details-tabs__header", 3, "tabs"], ["firstTab", ""], [1, "d-block", "mt-1"], ["secondTab", ""], ["thirdTab", ""], [3, "otherStoriesSameRecipient"], [3, "note", 4, "ngIf"], ["class", "story-review__validation-banner", 4, "ngIf"], [3, "note"], [1, "story-review__validation-banner"], [3, "bannerTheme", "prefixIcon", "text", "close$"]],
    template: function StoryReviewVoiceMobileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "app-review-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "app-story-header")(8, "app-audio-player", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "app-story-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 6)(12, "div", 4)(13, "app-story-details-tabs", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](14, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "app-story-review-form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](16, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](17, "app-story-information");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](18, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](19, "app-story-author-history", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](20, "app-story-review-action-buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](21, StoryReviewVoiceMobileComponent_app_case_manager_note_21_Template, 1, 1, "app-case-manager-note", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](22, StoryReviewVoiceMobileComponent_div_22_Template, 3, 5, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 8, "story.details.review.other.header.title"))("subTitle", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 10, "story.details.review.other.header.subTitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("isEscapeButtonEnable", true)("audioSrc", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](9, 12, ctx.audioSrc$));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("tabs", ctx.rightSectionTabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("otherStoriesSameRecipient", ctx.storyDetailsService.story.otherStoriesSameRecipient);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.storyDetailsService.getCaseManagerNote());
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.submittingError);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _shared_review_header_review_header_component__WEBPACK_IMPORTED_MODULE_3__.ReviewHeaderComponent, _shared_story_content_story_content_component__WEBPACK_IMPORTED_MODULE_4__.StoryContentComponent, _shared_story_details_tabs_story_details_tabs_component__WEBPACK_IMPORTED_MODULE_5__.StoryDetailsTabsComponent, _shared_story_header_story_header_component__WEBPACK_IMPORTED_MODULE_6__.StoryHeaderComponent, _shared_story_information_story_information_component__WEBPACK_IMPORTED_MODULE_7__.StoryInformationComponent, _shared_story_review_action_buttons_story_review_action_buttons_component__WEBPACK_IMPORTED_MODULE_8__.StoryReviewActionButtonsComponent, _shared_story_review_form_story_review_form_component__WEBPACK_IMPORTED_MODULE_9__.StoryReviewFormComponent, _shared_story_author_history_story_author_history_component__WEBPACK_IMPORTED_MODULE_10__.StoryAuthorHistoryComponent, _shared_components_audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_11__.AudioPlayerComponent, _shared_loop_design_system_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_12__.BannerComponent, _shared_components_case_manager_note_case_manager_note_component__WEBPACK_IMPORTED_MODULE_13__.CaseManagerNoteComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe],
    styles: [".audio-player[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3J5LXJldmlldy12b2ljZS1tb2JpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0FBQ0YiLCJmaWxlIjoic3RvcnktcmV2aWV3LXZvaWNlLW1vYmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdWRpby1wbGF5ZXIge1xuICBtYXJnaW46IDA7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9pbmJveC9zdG9yaWVzL3N0b3J5LWRldGFpbHMvc3RvcnktcmV2aWV3L3N0b3J5LXJldmlldy12b2ljZS13cmFwcGVyL3N0b3J5LXJldmlldy12b2ljZS1tb2JpbGUvc3RvcnktcmV2aWV3LXZvaWNlLW1vYmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7QUFDRjtBQUNBLHdWQUF3ViIsInNvdXJjZXNDb250ZW50IjpbIi5hdWRpby1wbGF5ZXIge1xuICBtYXJnaW46IDA7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 54930:
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/inbox/stories/story-details/story-review/story-review-voice-wrapper/story-review-voice-wrapper.component.ts ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoryReviewVoiceWrapperComponent": () => (/* binding */ StoryReviewVoiceWrapperComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/core/services/ui/ui.service */ 21428);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _story_review_voice_desktop_story_review_voice_desktop_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./story-review-voice-desktop/story-review-voice-desktop.component */ 46237);
/* harmony import */ var _story_review_voice_mobile_story_review_voice_mobile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./story-review-voice-mobile/story-review-voice-mobile.component */ 12983);





function StoryReviewVoiceWrapperComponent_app_story_review_voice_mobile_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-story-review-voice-mobile");
  }
}
function StoryReviewVoiceWrapperComponent_app_story_review_voice_desktop_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-story-review-voice-desktop");
  }
}
class StoryReviewVoiceWrapperComponent {
  constructor(ui) {
    this.ui = ui;
  }
  static #_ = this.ɵfac = function StoryReviewVoiceWrapperComponent_Factory(t) {
    return new (t || StoryReviewVoiceWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_0__.UIService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: StoryReviewVoiceWrapperComponent,
    selectors: [["app-story-review-voice-wrapper"]],
    decls: 3,
    vars: 2,
    consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"]],
    template: function StoryReviewVoiceWrapperComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, StoryReviewVoiceWrapperComponent_app_story_review_voice_mobile_1_Template, 1, 0, "app-story-review-voice-mobile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, StoryReviewVoiceWrapperComponent_app_story_review_voice_desktop_2_Template, 1, 0, "app-story-review-voice-desktop", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", ctx.ui.mobileView);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchDefault, _story_review_voice_desktop_story_review_voice_desktop_component__WEBPACK_IMPORTED_MODULE_1__.StoryReviewVoiceDesktopComponent, _story_review_voice_mobile_story_review_voice_mobile_component__WEBPACK_IMPORTED_MODULE_2__.StoryReviewVoiceMobileComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yeS1yZXZpZXctdm9pY2Utd3JhcHBlci5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9pbmJveC9zdG9yaWVzL3N0b3J5LWRldGFpbHMvc3RvcnktcmV2aWV3L3N0b3J5LXJldmlldy12b2ljZS13cmFwcGVyL3N0b3J5LXJldmlldy12b2ljZS13cmFwcGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw0TEFBNEwiLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 45651:
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/inbox/stories/story-details/story-review/story-review-web-wrapper/story-review-web-desktop/story-review-web-desktop.component.ts ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoryReviewWebDesktopComponent": () => (/* binding */ StoryReviewWebDesktopComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _shared_story_review_global_story_review_global_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/story-review-global/story-review-global.component */ 78181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _story_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../story-details.service */ 70341);
/* harmony import */ var _app_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/services/ui/ui.service */ 21428);
/* harmony import */ var _app_core_services_fixed_positioning_fixed_positioning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/services/fixed-positioning/fixed-positioning */ 75060);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_divider_divider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/divider/divider.component */ 49696);
/* harmony import */ var _shared_review_header_review_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/review-header/review-header.component */ 35713);
/* harmony import */ var _shared_story_content_story_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/story-content/story-content.component */ 55627);
/* harmony import */ var _shared_story_details_tabs_story_details_tabs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/story-details-tabs/story-details-tabs.component */ 88241);
/* harmony import */ var _shared_story_header_story_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/story-header/story-header.component */ 11198);
/* harmony import */ var _shared_story_information_story_information_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/story-information/story-information.component */ 47968);
/* harmony import */ var _shared_story_review_action_buttons_story_review_action_buttons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/story-review-action-buttons/story-review-action-buttons.component */ 31283);
/* harmony import */ var _shared_story_review_form_story_review_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/story-review-form/story-review-form.component */ 31584);
/* harmony import */ var _shared_loop_design_system_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../shared/loop-design-system/components/banner/banner.component */ 5581);
/* harmony import */ var _shared_components_case_manager_note_case_manager_note_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/components/case-manager-note/case-manager-note.component */ 45202);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 38699);


















const _c0 = ["storyReviewContainer"];
const _c1 = ["storyDetails"];
function StoryReviewWebDesktopComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 15)(1, "loop-banner", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("close$", function StoryReviewWebDesktopComponent_div_4_Template_loop_banner_close__1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r4.submittingError = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("bannerTheme", ctx_r0.BannerTheme.ERROR)("prefixIcon", ctx_r0.LoopIcon.Name.Info)("text", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 3, "story.details.review.form.toast.error.reviewError"));
  }
}
function StoryReviewWebDesktopComponent_app_case_manager_note_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-case-manager-note", 17);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("note", ctx_r3.storyDetailsService.getCaseManagerNote());
  }
}
class StoryReviewWebDesktopComponent extends _shared_story_review_global_story_review_global_component__WEBPACK_IMPORTED_MODULE_0__.StoryReviewGlobalComponent {
  constructor(storyDetailsService, ui, fixedPositioning, renderer) {
    super(storyDetailsService);
    this.ui = ui;
    this.fixedPositioning = fixedPositioning;
    this.renderer = renderer;
    this.rightSectionTabs = ['story.details.review.tabs.review', 'story.details.review.tabs.storyInformation'];
  }
  ngAfterViewInit() {
    const isMobileView = this.ui.mobileView$.getValue();
    if (!isMobileView) {
      this.setDynamicHeight();
    }
    this.enableFixedPositioning();
  }
  enableFixedPositioning() {
    this.fixedElementData = {
      containerElement: this.storyReviewContainerElement.nativeElement,
      documentTopPadding: 70,
      fixedElement: this.storyDetailsElement.nativeElement,
      fixedElementPadding: 32
    };
    this.ui.mobileView$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.destroyed$)).subscribe(isMobile => {
      setTimeout(() => this.fixedPositioning.positionFixedElement(this.fixedElementData, isMobile), 0);
    });
  }
  onWindowScroll() {
    this.fixedPositioning.positionFixedElement(this.fixedElementData, this.ui.mobileView$.getValue() || this.ui.tabletView$.getValue());
  }
  onWindowResize() {
    this.fixedPositioning.positionFixedElement(this.fixedElementData, this.ui.mobileView$.getValue() || this.ui.tabletView$.getValue());
  }
  setDynamicHeight() {
    const windowHeight = window.innerHeight;
    const calculatedHeight = windowHeight * 0.8;
    this.renderer.setStyle(this.storyDetailsElement.nativeElement, 'height', 'auto');
    this.renderer.setStyle(this.storyDetailsElement.nativeElement, 'max-height', `${calculatedHeight}px`);
    this.renderer.setStyle(this.storyDetailsElement.nativeElement, 'overflow-y', 'auto');
  }
  static #_ = this.ɵfac = function StoryReviewWebDesktopComponent_Factory(t) {
    return new (t || StoryReviewWebDesktopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_story_details_service__WEBPACK_IMPORTED_MODULE_1__.StoryDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_app_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_2__.UIService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_app_core_services_fixed_positioning_fixed_positioning__WEBPACK_IMPORTED_MODULE_3__.FixedPositioning), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.Renderer2));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
    type: StoryReviewWebDesktopComponent,
    selectors: [["app-story-review-web-desktop"]],
    viewQuery: function StoryReviewWebDesktopComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.storyReviewContainerElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.storyDetailsElement = _t.first);
      }
    },
    hostBindings: function StoryReviewWebDesktopComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("scroll", function StoryReviewWebDesktopComponent_scroll_HostBindingHandler($event) {
          return ctx.onWindowScroll($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresolveWindow"])("resize", function StoryReviewWebDesktopComponent_resize_HostBindingHandler($event) {
          return ctx.onWindowResize($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresolveWindow"]);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵInheritDefinitionFeature"]],
    decls: 22,
    vars: 9,
    consts: [[1, "story-review"], [3, "title", "subTitle"], ["class", "story-review__validation-banner", 4, "ngIf"], [1, "story-review__details-container"], ["storyReviewContainer", ""], [1, "story-review__left-container"], [1, "background"], ["storyDetails", ""], [1, "full-width__divider"], [3, "note", 4, "ngIf"], [1, "story-review__right-container"], [1, "story-details-tabs__header", 3, "tabs"], ["firstTab", ""], [1, "d-block", "mt-1"], ["secondTab", ""], [1, "story-review__validation-banner"], [3, "bannerTheme", "prefixIcon", "text", "close$"], [3, "note"]],
    template: function StoryReviewWebDesktopComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "app-review-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, StoryReviewWebDesktopComponent_div_4_Template, 3, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 3, 4)(7, "div", 5)(8, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "app-story-header")(11, "app-divider", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, StoryReviewWebDesktopComponent_app_case_manager_note_12_Template, 1, 1, "app-case-manager-note", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](13, "app-story-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 10)(15, "div", 6)(16, "app-story-details-tabs", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](17, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](18, "app-story-review-form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](19, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](20, "app-story-information");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](21, "app-story-review-action-buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 5, "story.details.review.other.header.title"))("subTitle", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 7, "story.details.review.other.header.subTitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.submittingError);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.storyDetailsService.getCaseManagerNote());
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("tabs", ctx.rightSectionTabs);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _shared_divider_divider_component__WEBPACK_IMPORTED_MODULE_4__.DividerComponent, _shared_review_header_review_header_component__WEBPACK_IMPORTED_MODULE_5__.ReviewHeaderComponent, _shared_story_content_story_content_component__WEBPACK_IMPORTED_MODULE_6__.StoryContentComponent, _shared_story_details_tabs_story_details_tabs_component__WEBPACK_IMPORTED_MODULE_7__.StoryDetailsTabsComponent, _shared_story_header_story_header_component__WEBPACK_IMPORTED_MODULE_8__.StoryHeaderComponent, _shared_story_information_story_information_component__WEBPACK_IMPORTED_MODULE_9__.StoryInformationComponent, _shared_story_review_action_buttons_story_review_action_buttons_component__WEBPACK_IMPORTED_MODULE_10__.StoryReviewActionButtonsComponent, _shared_story_review_form_story_review_form_component__WEBPACK_IMPORTED_MODULE_11__.StoryReviewFormComponent, _shared_loop_design_system_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_12__.BannerComponent, _shared_components_case_manager_note_case_manager_note_component__WEBPACK_IMPORTED_MODULE_13__.CaseManagerNoteComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yeS1yZXZpZXctd2ViLWRlc2t0b3AuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9pbmJveC9zdG9yaWVzL3N0b3J5LWRldGFpbHMvc3RvcnktcmV2aWV3L3N0b3J5LXJldmlldy13ZWItd3JhcHBlci9zdG9yeS1yZXZpZXctd2ViLWRlc2t0b3Avc3RvcnktcmV2aWV3LXdlYi1kZXNrdG9wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw0TEFBNEwiLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 1558:
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/inbox/stories/story-details/story-review/story-review-web-wrapper/story-review-web-mobile/story-review-web-mobile.component.ts ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoryReviewWebMobileComponent": () => (/* binding */ StoryReviewWebMobileComponent)
/* harmony export */ });
/* harmony import */ var _shared_story_review_global_story_review_global_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/story-review-global/story-review-global.component */ 78181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _story_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../story-details.service */ 70341);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_review_header_review_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/review-header/review-header.component */ 35713);
/* harmony import */ var _shared_story_content_story_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/story-content/story-content.component */ 55627);
/* harmony import */ var _shared_story_details_tabs_story_details_tabs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/story-details-tabs/story-details-tabs.component */ 88241);
/* harmony import */ var _shared_story_header_story_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/story-header/story-header.component */ 11198);
/* harmony import */ var _shared_story_information_story_information_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/story-information/story-information.component */ 47968);
/* harmony import */ var _shared_story_review_action_buttons_story_review_action_buttons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/story-review-action-buttons/story-review-action-buttons.component */ 31283);
/* harmony import */ var _shared_story_review_form_story_review_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/story-review-form/story-review-form.component */ 31584);
/* harmony import */ var _shared_loop_design_system_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../shared/loop-design-system/components/banner/banner.component */ 5581);
/* harmony import */ var _shared_components_case_manager_note_case_manager_note_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/components/case-manager-note/case-manager-note.component */ 45202);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 38699);














function StoryReviewWebMobileComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 12)(1, "loop-banner", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("close$", function StoryReviewWebMobileComponent_div_4_Template_loop_banner_close__1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.submittingError = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("bannerTheme", ctx_r0.BannerTheme.ERROR)("prefixIcon", ctx_r0.LoopIcon.Name.Info)("text", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 3, "story.details.review.form.toast.error.reviewError"));
  }
}
function StoryReviewWebMobileComponent_app_case_manager_note_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-case-manager-note", 14);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("note", ctx_r1.storyDetailsService.getCaseManagerNote());
  }
}
class StoryReviewWebMobileComponent extends _shared_story_review_global_story_review_global_component__WEBPACK_IMPORTED_MODULE_0__.StoryReviewGlobalComponent {
  constructor(storyDetailsService) {
    super(storyDetailsService);
    //translation keys
    this.rightSectionTabs = ['story.details.review.tabs.review', 'story.details.review.tabs.storyInformation'];
  }
  static #_ = this.ɵfac = function StoryReviewWebMobileComponent_Factory(t) {
    return new (t || StoryReviewWebMobileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_story_details_service__WEBPACK_IMPORTED_MODULE_1__.StoryDetailsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: StoryReviewWebMobileComponent,
    selectors: [["app-story-review-web-mobile"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]],
    decls: 19,
    vars: 9,
    consts: [[1, "story-review"], [3, "title", "subTitle"], ["class", "story-review__validation-banner", 4, "ngIf"], [1, "story-review__details-container"], [1, "story-review__left-container"], [1, "background"], [1, "story-review__right-container"], [1, "story-details-tabs__header", 3, "tabs"], ["firstTab", ""], [1, "d-block", "mt-1"], ["secondTab", ""], [3, "note", 4, "ngIf"], [1, "story-review__validation-banner"], [3, "bannerTheme", "prefixIcon", "text", "close$"], [3, "note"]],
    template: function StoryReviewWebMobileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "app-review-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, StoryReviewWebMobileComponent_div_4_Template, 3, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "app-story-header")(9, "app-story-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 6)(11, "div", 5)(12, "app-story-details-tabs", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](13, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "app-story-review-form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](15, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "app-story-information");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](17, "app-story-review-action-buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, StoryReviewWebMobileComponent_app_case_manager_note_18_Template, 1, 1, "app-case-manager-note", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 5, "story.details.review.other.header.title"))("subTitle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 7, "story.details.review.other.header.subTitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.submittingError);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("tabs", ctx.rightSectionTabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.storyDetailsService.getCaseManagerNote());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _shared_review_header_review_header_component__WEBPACK_IMPORTED_MODULE_2__.ReviewHeaderComponent, _shared_story_content_story_content_component__WEBPACK_IMPORTED_MODULE_3__.StoryContentComponent, _shared_story_details_tabs_story_details_tabs_component__WEBPACK_IMPORTED_MODULE_4__.StoryDetailsTabsComponent, _shared_story_header_story_header_component__WEBPACK_IMPORTED_MODULE_5__.StoryHeaderComponent, _shared_story_information_story_information_component__WEBPACK_IMPORTED_MODULE_6__.StoryInformationComponent, _shared_story_review_action_buttons_story_review_action_buttons_component__WEBPACK_IMPORTED_MODULE_7__.StoryReviewActionButtonsComponent, _shared_story_review_form_story_review_form_component__WEBPACK_IMPORTED_MODULE_8__.StoryReviewFormComponent, _shared_loop_design_system_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_9__.BannerComponent, _shared_components_case_manager_note_case_manager_note_component__WEBPACK_IMPORTED_MODULE_10__.CaseManagerNoteComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yeS1yZXZpZXctd2ViLW1vYmlsZS5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9pbmJveC9zdG9yaWVzL3N0b3J5LWRldGFpbHMvc3RvcnktcmV2aWV3L3N0b3J5LXJldmlldy13ZWItd3JhcHBlci9zdG9yeS1yZXZpZXctd2ViLW1vYmlsZS9zdG9yeS1yZXZpZXctd2ViLW1vYmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0xBQXdMIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 53665:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/inbox/stories/story-details/story-review/story-review-web-wrapper/story-review-web-wrapper.component.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoryReviewWebWrapperComponent": () => (/* binding */ StoryReviewWebWrapperComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/core/services/ui/ui.service */ 21428);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _story_review_web_desktop_story_review_web_desktop_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./story-review-web-desktop/story-review-web-desktop.component */ 45651);
/* harmony import */ var _story_review_web_mobile_story_review_web_mobile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./story-review-web-mobile/story-review-web-mobile.component */ 1558);





function StoryReviewWebWrapperComponent_app_story_review_web_mobile_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-story-review-web-mobile");
  }
}
function StoryReviewWebWrapperComponent_app_story_review_web_desktop_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-story-review-web-desktop");
  }
}
class StoryReviewWebWrapperComponent {
  constructor(ui) {
    this.ui = ui;
  }
  static #_ = this.ɵfac = function StoryReviewWebWrapperComponent_Factory(t) {
    return new (t || StoryReviewWebWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_0__.UIService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: StoryReviewWebWrapperComponent,
    selectors: [["app-story-review-web-wrapper"]],
    decls: 3,
    vars: 2,
    consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"]],
    template: function StoryReviewWebWrapperComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, StoryReviewWebWrapperComponent_app_story_review_web_mobile_1_Template, 1, 0, "app-story-review-web-mobile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, StoryReviewWebWrapperComponent_app_story_review_web_desktop_2_Template, 1, 0, "app-story-review-web-desktop", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", ctx.ui.mobileView);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchDefault, _story_review_web_desktop_story_review_web_desktop_component__WEBPACK_IMPORTED_MODULE_1__.StoryReviewWebDesktopComponent, _story_review_web_mobile_story_review_web_mobile_component__WEBPACK_IMPORTED_MODULE_2__.StoryReviewWebMobileComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yeS1yZXZpZXctd2ViLXdyYXBwZXIuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9pbmJveC9zdG9yaWVzL3N0b3J5LWRldGFpbHMvc3RvcnktcmV2aWV3L3N0b3J5LXJldmlldy13ZWItd3JhcHBlci9zdG9yeS1yZXZpZXctd2ViLXdyYXBwZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRMQUE0TCIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 95589:
/*!********************************************************************************************!*\
  !*** ./src/app/modules/inbox/stories/story-details/story-review/story-review.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoryReviewComponent": () => (/* binding */ StoryReviewComponent)
/* harmony export */ });
/* harmony import */ var _app_core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/core/services/api/model/channel.enum */ 92128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _story_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../story-details.service */ 70341);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _story_translate_story_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../story-translate/story-translate.component */ 75814);
/* harmony import */ var _story_review_messenger_whatsapp_wrapper_story_review_messenger_whatsapp_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./story-review-messenger-whatsapp-wrapper/story-review-messenger-whatsapp-wrapper.component */ 37538);
/* harmony import */ var _story_review_voice_wrapper_story_review_voice_wrapper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./story-review-voice-wrapper/story-review-voice-wrapper.component */ 54930);
/* harmony import */ var _story_review_web_wrapper_story_review_web_wrapper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./story-review-web-wrapper/story-review-web-wrapper.component */ 53665);









function StoryReviewComponent_app_story_review_web_wrapper_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-story-review-web-wrapper");
  }
}
function StoryReviewComponent_app_story_review_voice_wrapper_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-story-review-voice-wrapper");
  }
}
function StoryReviewComponent_app_story_review_messenger_whatsapp_wrapper_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-story-review-messenger-whatsapp-wrapper");
  }
}
class StoryReviewComponent {
  constructor(storyDetailsService, activatedRoute) {
    this.storyDetailsService = storyDetailsService;
    this.activatedRoute = activatedRoute;
    this.CHANNEL_CONSTANTS = _app_core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_CONSTANTS;
  }
  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    this.activatedRoute.data.subscribe(data => {
      this.storyDetailsService.story = data.data.story;
      this.storyDetailsService.thematics = data.data.thematics;
    });
  }
  static #_ = this.ɵfac = function StoryReviewComponent_Factory(t) {
    return new (t || StoryReviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_story_details_service__WEBPACK_IMPORTED_MODULE_1__.StoryDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: StoryReviewComponent,
    selectors: [["app-story-review"]],
    decls: 5,
    vars: 3,
    consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"]],
    template: function StoryReviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, StoryReviewComponent_app_story_review_web_wrapper_1_Template, 1, 0, "app-story-review-web-wrapper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, StoryReviewComponent_app_story_review_voice_wrapper_2_Template, 1, 0, "app-story-review-voice-wrapper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, StoryReviewComponent_app_story_review_messenger_whatsapp_wrapper_3_Template, 1, 0, "app-story-review-messenger-whatsapp-wrapper", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-story-translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitch", ctx.storyDetailsService == null ? null : ctx.storyDetailsService.story == null ? null : ctx.storyDetailsService.story.channel);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", ctx.CHANNEL_CONSTANTS.WEB);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", ctx.CHANNEL_CONSTANTS.IVRR);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgSwitchDefault, _story_translate_story_translate_component__WEBPACK_IMPORTED_MODULE_2__.StoryTranslateComponent, _story_review_messenger_whatsapp_wrapper_story_review_messenger_whatsapp_wrapper_component__WEBPACK_IMPORTED_MODULE_3__.StoryReviewMessengerWhatsappWrapperComponent, _story_review_voice_wrapper_story_review_voice_wrapper_component__WEBPACK_IMPORTED_MODULE_4__.StoryReviewVoiceWrapperComponent, _story_review_web_wrapper_story_review_web_wrapper_component__WEBPACK_IMPORTED_MODULE_5__.StoryReviewWebWrapperComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yeS1yZXZpZXcuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9pbmJveC9zdG9yaWVzL3N0b3J5LWRldGFpbHMvc3RvcnktcmV2aWV3L3N0b3J5LXJldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNEtBQTRLIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 12704:
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/inbox/stories/story-details/story-review/story-review.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoryReviewModule": () => (/* binding */ StoryReviewModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_modules_admin_components_conversation_conversation_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/modules/admin/components/conversation/conversation.module */ 10214);
/* harmony import */ var _app_shared_components_audio_player_audio_player_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/components/audio-player/audio-player.module */ 94277);
/* harmony import */ var _app_shared_loop_design_system_components_banner_banner_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/loop-design-system/components/banner/banner.module */ 83110);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _shared_components_case_manager_note_case_manager_note_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components/case-manager-note/case-manager-note.module */ 86033);
/* harmony import */ var _shared_shared_story_details_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared-story-details.module */ 54633);
/* harmony import */ var _story_review_messenger_whatsapp_wrapper_story_review_messenger_whatsapp_desktop_story_review_messenger_whatsapp_desktop_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./story-review-messenger-whatsapp-wrapper/story-review-messenger-whatsapp-desktop/story-review-messenger-whatsapp-desktop.component */ 37087);
/* harmony import */ var _story_review_messenger_whatsapp_wrapper_story_review_messenger_whatsapp_mobile_story_review_messenger_whatsapp_mobile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./story-review-messenger-whatsapp-wrapper/story-review-messenger-whatsapp-mobile/story-review-messenger-whatsapp-mobile.component */ 6430);
/* harmony import */ var _story_review_messenger_whatsapp_wrapper_story_review_messenger_whatsapp_wrapper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./story-review-messenger-whatsapp-wrapper/story-review-messenger-whatsapp-wrapper.component */ 37538);
/* harmony import */ var _story_review_voice_wrapper_story_review_voice_desktop_story_review_voice_desktop_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./story-review-voice-wrapper/story-review-voice-desktop/story-review-voice-desktop.component */ 46237);
/* harmony import */ var _story_review_voice_wrapper_story_review_voice_mobile_story_review_voice_mobile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./story-review-voice-wrapper/story-review-voice-mobile/story-review-voice-mobile.component */ 12983);
/* harmony import */ var _story_review_voice_wrapper_story_review_voice_wrapper_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./story-review-voice-wrapper/story-review-voice-wrapper.component */ 54930);
/* harmony import */ var _story_review_web_wrapper_story_review_web_desktop_story_review_web_desktop_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./story-review-web-wrapper/story-review-web-desktop/story-review-web-desktop.component */ 45651);
/* harmony import */ var _story_review_web_wrapper_story_review_web_mobile_story_review_web_mobile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./story-review-web-wrapper/story-review-web-mobile/story-review-web-mobile.component */ 1558);
/* harmony import */ var _story_review_web_wrapper_story_review_web_wrapper_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./story-review-web-wrapper/story-review-web-wrapper.component */ 53665);
/* harmony import */ var _story_review_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./story-review.component */ 95589);
/* harmony import */ var _story_translate_story_translate_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../story-translate/story-translate.module */ 36335);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 22560);




















class StoryReviewModule {
  static #_ = this.ɵfac = function StoryReviewModule_Factory(t) {
    return new (t || StoryReviewModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
    type: StoryReviewModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, _shared_shared_story_details_module__WEBPACK_IMPORTED_MODULE_4__.SharedStoryDetailsModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule, _app_shared_components_audio_player_audio_player_module__WEBPACK_IMPORTED_MODULE_1__.AudioPlayerModule, _app_modules_admin_components_conversation_conversation_module__WEBPACK_IMPORTED_MODULE_0__.ConversationModule, _app_shared_loop_design_system_components_banner_banner_module__WEBPACK_IMPORTED_MODULE_2__.BannerModule, _shared_components_case_manager_note_case_manager_note_module__WEBPACK_IMPORTED_MODULE_3__.CaseManagerNoteModule, _story_translate_story_translate_module__WEBPACK_IMPORTED_MODULE_15__.StoryTranslateModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](StoryReviewModule, {
    declarations: [_story_review_component__WEBPACK_IMPORTED_MODULE_14__.StoryReviewComponent, _story_review_messenger_whatsapp_wrapper_story_review_messenger_whatsapp_desktop_story_review_messenger_whatsapp_desktop_component__WEBPACK_IMPORTED_MODULE_5__.StoryReviewMessengerWhatsappDesktopComponent, _story_review_messenger_whatsapp_wrapper_story_review_messenger_whatsapp_mobile_story_review_messenger_whatsapp_mobile_component__WEBPACK_IMPORTED_MODULE_6__.StoryReviewMessengerWhatsappMobileComponent, _story_review_messenger_whatsapp_wrapper_story_review_messenger_whatsapp_wrapper_component__WEBPACK_IMPORTED_MODULE_7__.StoryReviewMessengerWhatsappWrapperComponent, _story_review_voice_wrapper_story_review_voice_desktop_story_review_voice_desktop_component__WEBPACK_IMPORTED_MODULE_8__.StoryReviewVoiceDesktopComponent, _story_review_voice_wrapper_story_review_voice_mobile_story_review_voice_mobile_component__WEBPACK_IMPORTED_MODULE_9__.StoryReviewVoiceMobileComponent, _story_review_voice_wrapper_story_review_voice_wrapper_component__WEBPACK_IMPORTED_MODULE_10__.StoryReviewVoiceWrapperComponent, _story_review_web_wrapper_story_review_web_desktop_story_review_web_desktop_component__WEBPACK_IMPORTED_MODULE_11__.StoryReviewWebDesktopComponent, _story_review_web_wrapper_story_review_web_mobile_story_review_web_mobile_component__WEBPACK_IMPORTED_MODULE_12__.StoryReviewWebMobileComponent, _story_review_web_wrapper_story_review_web_wrapper_component__WEBPACK_IMPORTED_MODULE_13__.StoryReviewWebWrapperComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, _shared_shared_story_details_module__WEBPACK_IMPORTED_MODULE_4__.SharedStoryDetailsModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule, _app_shared_components_audio_player_audio_player_module__WEBPACK_IMPORTED_MODULE_1__.AudioPlayerModule, _app_modules_admin_components_conversation_conversation_module__WEBPACK_IMPORTED_MODULE_0__.ConversationModule, _app_shared_loop_design_system_components_banner_banner_module__WEBPACK_IMPORTED_MODULE_2__.BannerModule, _shared_components_case_manager_note_case_manager_note_module__WEBPACK_IMPORTED_MODULE_3__.CaseManagerNoteModule, _story_translate_story_translate_module__WEBPACK_IMPORTED_MODULE_15__.StoryTranslateModule],
    exports: [_story_review_component__WEBPACK_IMPORTED_MODULE_14__.StoryReviewComponent, _story_review_messenger_whatsapp_wrapper_story_review_messenger_whatsapp_desktop_story_review_messenger_whatsapp_desktop_component__WEBPACK_IMPORTED_MODULE_5__.StoryReviewMessengerWhatsappDesktopComponent, _story_review_messenger_whatsapp_wrapper_story_review_messenger_whatsapp_mobile_story_review_messenger_whatsapp_mobile_component__WEBPACK_IMPORTED_MODULE_6__.StoryReviewMessengerWhatsappMobileComponent, _story_review_messenger_whatsapp_wrapper_story_review_messenger_whatsapp_wrapper_component__WEBPACK_IMPORTED_MODULE_7__.StoryReviewMessengerWhatsappWrapperComponent, _story_review_voice_wrapper_story_review_voice_desktop_story_review_voice_desktop_component__WEBPACK_IMPORTED_MODULE_8__.StoryReviewVoiceDesktopComponent, _story_review_voice_wrapper_story_review_voice_mobile_story_review_voice_mobile_component__WEBPACK_IMPORTED_MODULE_9__.StoryReviewVoiceMobileComponent, _story_review_voice_wrapper_story_review_voice_wrapper_component__WEBPACK_IMPORTED_MODULE_10__.StoryReviewVoiceWrapperComponent, _story_review_web_wrapper_story_review_web_desktop_story_review_web_desktop_component__WEBPACK_IMPORTED_MODULE_11__.StoryReviewWebDesktopComponent, _story_review_web_wrapper_story_review_web_mobile_story_review_web_mobile_component__WEBPACK_IMPORTED_MODULE_12__.StoryReviewWebMobileComponent, _story_review_web_wrapper_story_review_web_wrapper_component__WEBPACK_IMPORTED_MODULE_13__.StoryReviewWebWrapperComponent]
  });
})();

/***/ }),

/***/ 16946:
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/inbox/stories/story-details/story-translate/story-translate-desktop/story-translate-desktop.component.ts ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoryTranslateDesktopComponent": () => (/* binding */ StoryTranslateDesktopComponent)
/* harmony export */ });
/* harmony import */ var _shared_story_translate_global_story_translate_global_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/story-translate-global/story-translate-global.component */ 17151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_content_translation_step_content_translation_step_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/content-translation-step/content-translation-step.component */ 51548);
/* harmony import */ var _shared_components_post_translation_controller_post_translation_controller_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/post-translation-controller/post-translation-controller.component */ 71974);
/* harmony import */ var _shared_divider_divider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/divider/divider.component */ 49696);
/* harmony import */ var _shared_story_translate_action_buttons_story_translate_action_buttons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/story-translate-action-buttons/story-translate-action-buttons.component */ 20995);







function StoryTranslateDesktopComponent_app_post_translation_controller_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-post-translation-controller", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("deleteTranslation", function StoryTranslateDesktopComponent_app_post_translation_controller_4_Template_app_post_translation_controller_deleteTranslation_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.deleteTranslation($event));
    })("languagesChanged", function StoryTranslateDesktopComponent_app_post_translation_controller_4_Template_app_post_translation_controller_languagesChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.updatedLanguages($event));
    })("retryTranslation", function StoryTranslateDesktopComponent_app_post_translation_controller_4_Template_app_post_translation_controller_retryTranslation_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.retryTranslation($event));
    })("verifyTranslation", function StoryTranslateDesktopComponent_app_post_translation_controller_4_Template_app_post_translation_controller_verifyTranslation_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.verifyTranslation($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("initialTranslations", ctx_r0.translations)("originalLanguage", ctx_r0.storyDetailsService.story.language)("processing", ctx_r0.processing)("selectedLanguage", ctx_r0.targetLanguage)("selectedLanguageContent", ctx_r0.translatedText);
  }
}
function StoryTranslateDesktopComponent_app_content_translation_step_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-content-translation-step", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submitTranslation", function StoryTranslateDesktopComponent_app_content_translation_step_5_Template_app_content_translation_step_submitTranslation_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.submitTranslation());
    })("targetLanguageChange", function StoryTranslateDesktopComponent_app_content_translation_step_5_Template_app_content_translation_step_targetLanguageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.targetLanguage = $event);
    })("translatedTextChange", function StoryTranslateDesktopComponent_app_content_translation_step_5_Template_app_content_translation_step_translatedTextChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.translatedText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("atLeastOneTranslated", ctx_r1.atLeastOneTranslated)("languagesOptions", ctx_r1.translationOptions)("originalLanguage", ctx_r1.storyDetailsService.story.language)("processing", ctx_r1.processing)("targetLanguage", ctx_r1.targetLanguage)("translatedText", ctx_r1.translatedText);
  }
}
class StoryTranslateDesktopComponent extends _shared_story_translate_global_story_translate_global_component__WEBPACK_IMPORTED_MODULE_0__.StoryTranslateGlobalComponent {
  static #_ = this.ɵfac = /*@__PURE__*/function () {
    let ɵStoryTranslateDesktopComponent_BaseFactory;
    return function StoryTranslateDesktopComponent_Factory(t) {
      return (ɵStoryTranslateDesktopComponent_BaseFactory || (ɵStoryTranslateDesktopComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](StoryTranslateDesktopComponent)))(t || StoryTranslateDesktopComponent);
    };
  }();
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: StoryTranslateDesktopComponent,
    selectors: [["app-story-translate-desktop"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
    decls: 8,
    vars: 2,
    consts: [[1, "story-translate"], [1, "story-translate__details-container", "parent-container"], [1, "story-translate__right-container"], [1, "background"], [3, "initialTranslations", "originalLanguage", "processing", "selectedLanguage", "selectedLanguageContent", "deleteTranslation", "languagesChanged", "retryTranslation", "verifyTranslation", 4, "ngIf"], [3, "atLeastOneTranslated", "languagesOptions", "originalLanguage", "processing", "targetLanguage", "translatedText", "submitTranslation", "targetLanguageChange", "translatedTextChange", 4, "ngIf"], [1, "full-width__divider", "pt-2"], [3, "initialTranslations", "originalLanguage", "processing", "selectedLanguage", "selectedLanguageContent", "deleteTranslation", "languagesChanged", "retryTranslation", "verifyTranslation"], [3, "atLeastOneTranslated", "languagesOptions", "originalLanguage", "processing", "targetLanguage", "translatedText", "submitTranslation", "targetLanguageChange", "translatedTextChange"]],
    template: function StoryTranslateDesktopComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, StoryTranslateDesktopComponent_app_post_translation_controller_4_Template, 1, 5, "app-post-translation-controller", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, StoryTranslateDesktopComponent_app_content_translation_step_5_Template, 1, 6, "app-content-translation-step", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "app-divider", 6)(7, "app-story-translate-action-buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.storyDetailsService.story);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.storyDetailsService.story && !ctx.allTranslated);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_components_content_translation_step_content_translation_step_component__WEBPACK_IMPORTED_MODULE_1__.ContentTranslationStepComponent, _shared_components_post_translation_controller_post_translation_controller_component__WEBPACK_IMPORTED_MODULE_2__.PostTranslationControllerComponent, _shared_divider_divider_component__WEBPACK_IMPORTED_MODULE_3__.DividerComponent, _shared_story_translate_action_buttons_story_translate_action_buttons_component__WEBPACK_IMPORTED_MODULE_4__.StoryTranslateActionButtonsComponent],
    styles: [".parent-container[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 30px;\n}\n\n.story-translate__right-container[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.story-translate__right-container[_ngcontent-%COMP%]   .translation-container[_ngcontent-%COMP%] {\n  background: white;\n  display: flex;\n  flex-direction: column;\n}\n\n.audio-container[_ngcontent-%COMP%] {\n  background: white;\n  padding: 2rem 2rem 0;\n}\n@media (max-width: 767.9px) {\n  .audio-container[_ngcontent-%COMP%] {\n    padding: 1rem 1rem 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3J5LXRyYW5zbGF0ZS1kZXNrdG9wLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUtBO0VBT0UsaUJBQUE7QUFSRjtBQUVFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFBSjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUFIRjtBQ3NLRTtFRHJLRjtJQUtJLG9CQUFBO0VBRkY7QUFDRiIsImZpbGUiOiJzdG9yeS10cmFuc2xhdGUtZGVza3RvcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2xvb3AtZGVzaWduLXN5c3RlbS9oZWxwZXJzJztcbkBpbXBvcnQgJ21peGlucyc7XG5cbi5wYXJlbnQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnN0b3J5LXRyYW5zbGF0ZV9fcmlnaHQtY29udGFpbmVyIHtcbiAgLnRyYW5zbGF0aW9uLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5hdWRpby1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogcHhUb1JlbSgzMikgcHhUb1JlbSgzMikgMDtcblxuICBAaW5jbHVkZSBtb2JpbGUtb25seSB7XG4gICAgcGFkZGluZzogcHhUb1JlbSgxNikgcHhUb1JlbSgxNikgMDtcbiAgfVxufVxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIGZsZXgtZ2FwKCRnYXAsICRnbG9iYWw6IGZhbHNlKSB7XG4gIG1hcmdpbi10b3A6ICgtJGdhcCk7XG4gIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCgtJGdhcCksICRnbG9iYWwpO1xuXG4gID4gKiB7XG4gICAgbWFyZ2luLXRvcDogJGdhcDtcbiAgICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgkZ2FwLCAkZ2xvYmFsKTtcbiAgfVxufVxuXG5AbWl4aW4gYmFzZS1jb250YWluZXIoJGNvbnRlbnQtd2lkdGgpIHtcbiAgJGRlc2t0b3AtcGFkZGluZzogMnJlbTtcbiAgbWF4LXdpZHRoOiBjYWxjKCN7JGNvbnRlbnQtd2lkdGh9ICsgKCN7JGRlc2t0b3AtcGFkZGluZ30pKTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MnJlbSkge1xuICAgIEBpbmNsdWRlIHBhZGRpbmctbGVmdCgkZGVza3RvcC1wYWRkaW5nLCB0cnVlKTtcbiAgICBAaW5jbHVkZSBwYWRkaW5nLXJpZ2h0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICB9XG59XG5cbkBtaXhpbiBjZW50ZXJBYnNvbHV0ZUVsZW1lbnQge1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5AbWl4aW4gb25seS1sdHItZ2xvYmFsIHtcbiAgaHRtbDpub3QoW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bC1nbG9iYWwge1xuICBodG1sW2Rpcj0ncnRsJ10gJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktbHRyIHtcbiAgOmhvc3QtY29udGV4dChodG1sOm5vdChbZGlyPSdydGwnXSkpICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bCB7XG4gIDpob3N0LWNvbnRleHQoaHRtbFtkaXI9J3J0bCddKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gcnRsLXZhbHVlKCRwcm9wZXJ0eSwgJGx0ci12YWx1ZSwgJHJ0bC12YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGx0ci12YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHJ0bC12YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHJ0bC1wcm9wZXJ0eSgkbHRyLXByb3BlcnR5LCAkcnRsLXByb3BlcnR5LCAkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpZiAkZ2xvYmFsID09IHRydWUge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyLWdsb2JhbCB7XG4gICAgICAjeyRsdHItcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwtZ2xvYmFsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bCB7XG4gICAgICAjeyRydGwtcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXJnaW4tbGVmdCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLWxlZnQsIG1hcmdpbi1yaWdodCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBtYXJnaW4tcmlnaHQoJG1hcmdpbiwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KG1hcmdpbi1yaWdodCwgbWFyZ2luLWxlZnQsICRtYXJnaW4sICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZygkcGFkZGluZ1RvcCwgJHBhZGRpbmdSaWdodCwgJHBhZGRpbmdCb3R0b20sICRwYWRkaW5nTGVmdCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgcGFkZGluZy10b3A6ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZ1JpZ2h0LCAkZ2xvYmFsKTtcbiAgcGFkZGluZy1ib3R0b206ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZ0xlZnQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1sZWZ0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLXJpZ2h0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiB0ZXh0LWFsaWduLWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRleHQtYWxpZ24sIGxlZnQsIHJpZ2h0LCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGxlZnQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobGVmdCwgcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiByaWdodCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShyaWdodCwgbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRyYW5zbGF0ZVhZKCR2YWx1ZVgsICR2YWx1ZVksICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZSh0cmFuc2Zvcm0sIHRyYW5zbGF0ZSgkdmFsdWVYLCAkdmFsdWVZKSwgdHJhbnNsYXRlKC0kdmFsdWVYLCAkdmFsdWVZKSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItbGVmdCwgYm9yZGVyLXJpZ2h0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1yaWdodCwgYm9yZGVyLWxlZnQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCBib3JkZXItdG9wLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtbGVmdC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBmbG9hdC1sZWZ0KCRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZShmbG9hdCwgbGVmdCwgcmlnaHQsICRnbG9iYWw6IGZhbHNlKTtcbn1cblxuQG1peGluIGZsb2F0LXJpZ2h0IHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCByaWdodCwgbGVmdCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gc21hbGwtZGVza3RvcC1vbmx5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LWxnKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQteGwgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtYW5kLXRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc21hbGwtbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtcyAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LW1kIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtdXAge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gZGlzYWJsZS1zY3JvbGxiYXIge1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9pbmJveC9zdG9yaWVzL3N0b3J5LWRldGFpbHMvc3RvcnktdHJhbnNsYXRlL3N0b3J5LXRyYW5zbGF0ZS1kZXNrdG9wL3N0b3J5LXRyYW5zbGF0ZS1kZXNrdG9wLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBS0E7RUFPRSxpQkFBQTtBQVJGO0FBRUU7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUFKOztBQU1BO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQUhGO0FDc0tFO0VEcktGO0lBS0ksb0JBQUE7RUFGRjtBQUNGO0FBQ0EsZzlPQUFnOU8iLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdsb29wLWRlc2lnbi1zeXN0ZW0vaGVscGVycyc7XG5AaW1wb3J0ICdtaXhpbnMnO1xuXG4ucGFyZW50LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5zdG9yeS10cmFuc2xhdGVfX3JpZ2h0LWNvbnRhaW5lciB7XG4gIC50cmFuc2xhdGlvbi1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uYXVkaW8tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IHB4VG9SZW0oMzIpIHB4VG9SZW0oMzIpIDA7XG5cbiAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgIHBhZGRpbmc6IHB4VG9SZW0oMTYpIHB4VG9SZW0oMTYpIDA7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbkBtaXhpbiBmbGV4LWdhcCgkZ2FwLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBtYXJnaW4tdG9wOiAoLSRnYXApO1xuICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgoLSRnYXApLCAkZ2xvYmFsKTtcblxuICA+ICoge1xuICAgIG1hcmdpbi10b3A6ICRnYXA7XG4gICAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoJGdhcCwgJGdsb2JhbCk7XG4gIH1cbn1cblxuQG1peGluIGJhc2UtY29udGFpbmVyKCRjb250ZW50LXdpZHRoKSB7XG4gICRkZXNrdG9wLXBhZGRpbmc6IDJyZW07XG4gIG1heC13aWR0aDogY2FsYygjeyRjb250ZW50LXdpZHRofSArICgjeyRkZXNrdG9wLXBhZGRpbmd9KSk7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDJyZW0pIHtcbiAgICBAaW5jbHVkZSBwYWRkaW5nLWxlZnQoJGRlc2t0b3AtcGFkZGluZywgdHJ1ZSk7XG4gICAgQGluY2x1ZGUgcGFkZGluZy1yaWdodCgkZGVza3RvcC1wYWRkaW5nLCB0cnVlKTtcbiAgfVxufVxuXG5AbWl4aW4gY2VudGVyQWJzb2x1dGVFbGVtZW50IHtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcblxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuQG1peGluIG9ubHktbHRyLWdsb2JhbCB7XG4gIGh0bWw6bm90KFtkaXI9J3J0bCddKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1ydGwtZ2xvYmFsIHtcbiAgaHRtbFtkaXI9J3J0bCddICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LWx0ciB7XG4gIDpob3N0LWNvbnRleHQoaHRtbDpub3QoW2Rpcj0ncnRsJ10pKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1ydGwge1xuICA6aG9zdC1jb250ZXh0KGh0bWxbZGlyPSdydGwnXSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHJ0bC12YWx1ZSgkcHJvcGVydHksICRsdHItdmFsdWUsICRydGwtdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpZiAkZ2xvYmFsID09IHRydWUge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyLWdsb2JhbCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRsdHItdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwtZ2xvYmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHJ0bC12YWx1ZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGx0ci12YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRydGwtdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBydGwtcHJvcGVydHkoJGx0ci1wcm9wZXJ0eSwgJHJ0bC1wcm9wZXJ0eSwgJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaWYgJGdsb2JhbCA9PSB0cnVlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ci1nbG9iYWwge1xuICAgICAgI3skbHRyLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsLWdsb2JhbCB7XG4gICAgICAjeyRydGwtcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ciB7XG4gICAgICAjeyRsdHItcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwge1xuICAgICAgI3skcnRsLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWFyZ2luLWxlZnQoJG1hcmdpbiwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KG1hcmdpbi1sZWZ0LCBtYXJnaW4tcmlnaHQsICRtYXJnaW4sICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gbWFyZ2luLXJpZ2h0KCRtYXJnaW4sICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShtYXJnaW4tcmlnaHQsIG1hcmdpbi1sZWZ0LCAkbWFyZ2luLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmcoJHBhZGRpbmdUb3AsICRwYWRkaW5nUmlnaHQsICRwYWRkaW5nQm90dG9tLCAkcGFkZGluZ0xlZnQsICRnbG9iYWw6IGZhbHNlKSB7XG4gIHBhZGRpbmctdG9wOiAkcGFkZGluZ1RvcDtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctcmlnaHQsIHBhZGRpbmctbGVmdCwgJHBhZGRpbmdSaWdodCwgJGdsb2JhbCk7XG4gIHBhZGRpbmctYm90dG9tOiAkcGFkZGluZ1RvcDtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctbGVmdCwgcGFkZGluZy1yaWdodCwgJHBhZGRpbmdMZWZ0LCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmctbGVmdCgkcGFkZGluZywgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctbGVmdCwgcGFkZGluZy1yaWdodCwgJHBhZGRpbmcsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1yaWdodCgkcGFkZGluZywgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctcmlnaHQsIHBhZGRpbmctbGVmdCwgJHBhZGRpbmcsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gdGV4dC1hbGlnbi1sZWZ0KCRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZSh0ZXh0LWFsaWduLCBsZWZ0LCByaWdodCwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBsZWZ0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGxlZnQsIHJpZ2h0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcmlnaHQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocmlnaHQsIGxlZnQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiB0cmFuc2xhdGVYWSgkdmFsdWVYLCAkdmFsdWVZLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUodHJhbnNmb3JtLCB0cmFuc2xhdGUoJHZhbHVlWCwgJHZhbHVlWSksIHRyYW5zbGF0ZSgtJHZhbHVlWCwgJHZhbHVlWSksICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWxlZnQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWxlZnQsIGJvcmRlci1yaWdodCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1yaWdodCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItcmlnaHQsIGJvcmRlci1sZWZ0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMsIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItdG9wLXJpZ2h0LXJhZGl1cywgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItdG9wLWxlZnQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci10b3AtbGVmdC1yYWRpdXMsIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gZmxvYXQtbGVmdCgkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUoZmxvYXQsIGxlZnQsIHJpZ2h0LCAkZ2xvYmFsOiBmYWxzZSk7XG59XG5cbkBtaXhpbiBmbG9hdC1yaWdodCB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZShmbG9hdCwgcmlnaHQsIGxlZnQsICRnbG9iYWw6IGZhbHNlKTtcbn1cblxuQG1peGluIHNtYWxsLWRlc2t0b3Atb25seSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1sZykgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXhsIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLWFuZC10YWJsZXQtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZyAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtYWxsLW1vYmlsZS1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXMgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1tZCAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1kKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbGcpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLXVwIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1kKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGRpc2FibGUtc2Nyb2xsYmFyIHtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 61509:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/inbox/stories/story-details/story-translate/story-translate-mobile/story-translate-mobile.component.ts ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoryTranslateMobileComponent": () => (/* binding */ StoryTranslateMobileComponent)
/* harmony export */ });
/* harmony import */ var _shared_story_translate_global_story_translate_global_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/story-translate-global/story-translate-global.component */ 17151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_content_translation_step_content_translation_step_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/content-translation-step/content-translation-step.component */ 51548);
/* harmony import */ var _shared_components_post_translation_controller_post_translation_controller_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/post-translation-controller/post-translation-controller.component */ 71974);
/* harmony import */ var _shared_story_translate_action_buttons_story_translate_action_buttons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/story-translate-action-buttons/story-translate-action-buttons.component */ 20995);






function StoryTranslateMobileComponent_app_post_translation_controller_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-post-translation-controller", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("deleteTranslation", function StoryTranslateMobileComponent_app_post_translation_controller_5_Template_app_post_translation_controller_deleteTranslation_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.deleteTranslation($event));
    })("languagesChanged", function StoryTranslateMobileComponent_app_post_translation_controller_5_Template_app_post_translation_controller_languagesChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.updatedLanguages($event));
    })("retryTranslation", function StoryTranslateMobileComponent_app_post_translation_controller_5_Template_app_post_translation_controller_retryTranslation_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.retryTranslation($event));
    })("verifyTranslation", function StoryTranslateMobileComponent_app_post_translation_controller_5_Template_app_post_translation_controller_verifyTranslation_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.verifyTranslation($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("initialTranslations", ctx_r0.translations)("originalLanguage", ctx_r0.storyDetailsService.story.language)("processing", ctx_r0.processing)("selectedLanguage", ctx_r0.targetLanguage)("selectedLanguageContent", ctx_r0.translatedText);
  }
}
function StoryTranslateMobileComponent_app_content_translation_step_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-content-translation-step", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("submitTranslation", function StoryTranslateMobileComponent_app_content_translation_step_6_Template_app_content_translation_step_submitTranslation_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.submitTranslation());
    })("targetLanguageChange", function StoryTranslateMobileComponent_app_content_translation_step_6_Template_app_content_translation_step_targetLanguageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.targetLanguage = $event);
    })("translatedTextChange", function StoryTranslateMobileComponent_app_content_translation_step_6_Template_app_content_translation_step_translatedTextChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.translatedText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("atLeastOneTranslated", ctx_r1.atLeastOneTranslated)("languagesOptions", ctx_r1.translationOptions)("originalLanguage", ctx_r1.storyDetailsService.story.language)("processing", ctx_r1.processing)("targetLanguage", ctx_r1.targetLanguage)("translatedText", ctx_r1.translatedText);
  }
}
class StoryTranslateMobileComponent extends _shared_story_translate_global_story_translate_global_component__WEBPACK_IMPORTED_MODULE_0__.StoryTranslateGlobalComponent {
  constructor() {
    super(...arguments);
    //translation keys
    this.rightSectionTabs = ['story.details.translate.tabs.translation', 'story.details.review.tabs.storyInformation'];
  }
  static #_ = this.ɵfac = /*@__PURE__*/function () {
    let ɵStoryTranslateMobileComponent_BaseFactory;
    return function StoryTranslateMobileComponent_Factory(t) {
      return (ɵStoryTranslateMobileComponent_BaseFactory || (ɵStoryTranslateMobileComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](StoryTranslateMobileComponent)))(t || StoryTranslateMobileComponent);
    };
  }();
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: StoryTranslateMobileComponent,
    selectors: [["app-story-translate-mobile"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
    decls: 8,
    vars: 2,
    consts: [[1, "story-translate"], [1, "story-translate__details-container", "parent-container"], [1, "story-translate__right-container"], [1, "background"], [1, "translation-container"], [3, "initialTranslations", "originalLanguage", "processing", "selectedLanguage", "selectedLanguageContent", "deleteTranslation", "languagesChanged", "retryTranslation", "verifyTranslation", 4, "ngIf"], [3, "atLeastOneTranslated", "languagesOptions", "originalLanguage", "processing", "targetLanguage", "translatedText", "submitTranslation", "targetLanguageChange", "translatedTextChange", 4, "ngIf"], [3, "initialTranslations", "originalLanguage", "processing", "selectedLanguage", "selectedLanguageContent", "deleteTranslation", "languagesChanged", "retryTranslation", "verifyTranslation"], [3, "atLeastOneTranslated", "languagesOptions", "originalLanguage", "processing", "targetLanguage", "translatedText", "submitTranslation", "targetLanguageChange", "translatedTextChange"]],
    template: function StoryTranslateMobileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, StoryTranslateMobileComponent_app_post_translation_controller_5_Template, 1, 5, "app-post-translation-controller", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, StoryTranslateMobileComponent_app_content_translation_step_6_Template, 1, 6, "app-content-translation-step", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "app-story-translate-action-buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.storyDetailsService.story);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.storyDetailsService.story && !ctx.allTranslated);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_components_content_translation_step_content_translation_step_component__WEBPACK_IMPORTED_MODULE_1__.ContentTranslationStepComponent, _shared_components_post_translation_controller_post_translation_controller_component__WEBPACK_IMPORTED_MODULE_2__.PostTranslationControllerComponent, _shared_story_translate_action_buttons_story_translate_action_buttons_component__WEBPACK_IMPORTED_MODULE_3__.StoryTranslateActionButtonsComponent],
    styles: ["[_nghost-%COMP%]     .no-top-margin {\n  margin-top: 0;\n}\n\n.story-translate__right-container[_ngcontent-%COMP%]   .translation-container[_ngcontent-%COMP%] {\n  background: white;\n  display: flex;\n  flex-direction: column;\n}\n\n.parent-container[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3J5LXRyYW5zbGF0ZS1tb2JpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0k7RUFDRSxhQUFBO0FBSk47O0FBVUU7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQVBKOztBQVdBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBUkYiLCJmaWxlIjoic3RvcnktdHJhbnNsYXRlLW1vYmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2xvb3AtZGVzaWduLXN5c3RlbS9oZWxwZXJzJztcbkBpbXBvcnQgJ21peGlucyc7XG5cbjpob3N0IHtcbiAgOjpuZy1kZWVwIHtcbiAgICAubm8tdG9wLW1hcmdpbiB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cbiAgfVxufVxuXG4uc3RvcnktdHJhbnNsYXRlX19yaWdodC1jb250YWluZXIge1xuICAudHJhbnNsYXRpb24tY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cblxuLnBhcmVudC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9pbmJveC9zdG9yaWVzL3N0b3J5LWRldGFpbHMvc3RvcnktdHJhbnNsYXRlL3N0b3J5LXRyYW5zbGF0ZS1tb2JpbGUvc3RvcnktdHJhbnNsYXRlLW1vYmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLSTtFQUNFLGFBQUE7QUFKTjs7QUFVRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBUEo7O0FBV0E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFSRjtBQUNBLGcyQkFBZzJCIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnbG9vcC1kZXNpZ24tc3lzdGVtL2hlbHBlcnMnO1xuQGltcG9ydCAnbWl4aW5zJztcblxuOmhvc3Qge1xuICA6Om5nLWRlZXAge1xuICAgIC5uby10b3AtbWFyZ2luIHtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxuICB9XG59XG5cbi5zdG9yeS10cmFuc2xhdGVfX3JpZ2h0LWNvbnRhaW5lciB7XG4gIC50cmFuc2xhdGlvbi1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuXG4ucGFyZW50LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 75814:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/inbox/stories/story-details/story-translate/story-translate.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoryTranslateComponent": () => (/* binding */ StoryTranslateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/core/services/ui/ui.service */ 21428);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _story_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../story-details.service */ 70341);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _story_translate_mobile_story_translate_mobile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./story-translate-mobile/story-translate-mobile.component */ 61509);
/* harmony import */ var _story_translate_desktop_story_translate_desktop_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./story-translate-desktop/story-translate-desktop.component */ 16946);









function StoryTranslateComponent_app_story_translate_mobile_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-story-translate-mobile");
  }
}
function StoryTranslateComponent_app_story_translate_desktop_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-story-translate-desktop");
  }
}
class StoryTranslateComponent {
  constructor(ui, activatedRoute, router, storyDetailsService, toastr, translateService) {
    this.ui = ui;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.storyDetailsService = storyDetailsService;
    this.toastr = toastr;
    this.translateService = translateService;
  }
  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.storyDetailsService.story = data.data.story;
    });
  }
  static #_ = this.ɵfac = function StoryTranslateComponent_Factory(t) {
    return new (t || StoryTranslateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_0__.UIService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_story_details_service__WEBPACK_IMPORTED_MODULE_1__.StoryDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: StoryTranslateComponent,
    selectors: [["app-story-translate"]],
    decls: 3,
    vars: 2,
    consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"]],
    template: function StoryTranslateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, StoryTranslateComponent_app_story_translate_mobile_1_Template, 1, 0, "app-story-translate-mobile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, StoryTranslateComponent_app_story_translate_desktop_2_Template, 1, 0, "app-story-translate-desktop", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", ctx.ui.mobileView);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgSwitchDefault, _story_translate_mobile_story_translate_mobile_component__WEBPACK_IMPORTED_MODULE_2__.StoryTranslateMobileComponent, _story_translate_desktop_story_translate_desktop_component__WEBPACK_IMPORTED_MODULE_3__.StoryTranslateDesktopComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yeS10cmFuc2xhdGUuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9pbmJveC9zdG9yaWVzL3N0b3J5LWRldGFpbHMvc3RvcnktdHJhbnNsYXRlL3N0b3J5LXRyYW5zbGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0xBQWdMIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 36335:
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/inbox/stories/story-details/story-translate/story-translate.module.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoryTranslateModule": () => (/* binding */ StoryTranslateModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _app_modules_admin_components_conversation_conversation_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/modules/admin/components/conversation/conversation.module */ 10214);
/* harmony import */ var _app_modules_inbox_shared_components_content_translation_step_content_translation_step_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/modules/inbox/shared/components/content-translation-step/content-translation-step.module */ 10479);
/* harmony import */ var _app_modules_inbox_shared_components_post_translation_controller_post_translation_controller_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/modules/inbox/shared/components/post-translation-controller/post-translation-controller.module */ 25115);
/* harmony import */ var _app_shared_components_audio_player_audio_player_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/components/audio-player/audio-player.module */ 94277);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _shared_shared_story_details_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared-story-details.module */ 54633);
/* harmony import */ var _story_translate_desktop_story_translate_desktop_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./story-translate-desktop/story-translate-desktop.component */ 16946);
/* harmony import */ var _story_translate_mobile_story_translate_mobile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./story-translate-mobile/story-translate-mobile.component */ 61509);
/* harmony import */ var _story_translate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./story-translate.component */ 75814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);











class StoryTranslateModule {
  static #_ = this.ɵfac = function StoryTranslateModule_Factory(t) {
    return new (t || StoryTranslateModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: StoryTranslateModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_app_shared_components_audio_player_audio_player_module__WEBPACK_IMPORTED_MODULE_3__.AudioPlayerModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _app_modules_inbox_shared_components_content_translation_step_content_translation_step_module__WEBPACK_IMPORTED_MODULE_1__.ContentTranslationStepModule, _app_modules_admin_components_conversation_conversation_module__WEBPACK_IMPORTED_MODULE_0__.ConversationModule, _app_modules_inbox_shared_components_post_translation_controller_post_translation_controller_module__WEBPACK_IMPORTED_MODULE_2__.PostTranslationControllerModule, _shared_shared_story_details_module__WEBPACK_IMPORTED_MODULE_4__.SharedStoryDetailsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](StoryTranslateModule, {
    declarations: [_story_translate_component__WEBPACK_IMPORTED_MODULE_7__.StoryTranslateComponent, _story_translate_mobile_story_translate_mobile_component__WEBPACK_IMPORTED_MODULE_6__.StoryTranslateMobileComponent, _story_translate_desktop_story_translate_desktop_component__WEBPACK_IMPORTED_MODULE_5__.StoryTranslateDesktopComponent],
    imports: [_app_shared_components_audio_player_audio_player_module__WEBPACK_IMPORTED_MODULE_3__.AudioPlayerModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _app_modules_inbox_shared_components_content_translation_step_content_translation_step_module__WEBPACK_IMPORTED_MODULE_1__.ContentTranslationStepModule, _app_modules_admin_components_conversation_conversation_module__WEBPACK_IMPORTED_MODULE_0__.ConversationModule, _app_modules_inbox_shared_components_post_translation_controller_post_translation_controller_module__WEBPACK_IMPORTED_MODULE_2__.PostTranslationControllerModule, _shared_shared_story_details_module__WEBPACK_IMPORTED_MODULE_4__.SharedStoryDetailsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule],
    exports: [_story_translate_component__WEBPACK_IMPORTED_MODULE_7__.StoryTranslateComponent, _story_translate_mobile_story_translate_mobile_component__WEBPACK_IMPORTED_MODULE_6__.StoryTranslateMobileComponent, _story_translate_desktop_story_translate_desktop_component__WEBPACK_IMPORTED_MODULE_5__.StoryTranslateDesktopComponent]
  });
})();

/***/ }),

/***/ 45202:
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/case-manager-note/case-manager-note.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaseManagerNoteComponent": () => (/* binding */ CaseManagerNoteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);


class CaseManagerNoteComponent {
  constructor() {
    this.DATE_FORMAT = 'dd/MM/yy h:mm a';
  }
  static #_ = this.ɵfac = function CaseManagerNoteComponent_Factory(t) {
    return new (t || CaseManagerNoteComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CaseManagerNoteComponent,
    selectors: [["app-case-manager-note"]],
    inputs: {
      note: "note"
    },
    decls: 8,
    vars: 6,
    consts: [[1, "case-manager-note"], [1, "case-manager-note-name"], [1, "case-manager-note-date"], [1, "case-manager-note-text"]],
    template: function CaseManagerNoteComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.note.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 3, ctx.note.date, ctx.DATE_FORMAT), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.note.text, " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
    styles: ["[_nghost-%COMP%] {\n  display: block;\n  font-weight: 400;\n  line-height: 1.5rem;\n  color: #1a1a1a;\n  border-radius: 0.5rem;\n  padding: 2.25rem 1.5rem;\n  border: 1px solid #656565;\n}\n@media (max-width: 1079.9px) {\n  [_nghost-%COMP%] {\n    padding: 2.125rem 1.375rem;\n  }\n}\n[_nghost-%COMP%]   .case-manager-note-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.25rem;\n  margin-bottom: 0.75rem;\n}\n@media (max-width: 1079.9px) {\n  [_nghost-%COMP%]   .case-manager-note-name[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n    margin-bottom: 0.625rem;\n  }\n}\n[_nghost-%COMP%]   .case-manager-note-date[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #656565;\n  margin-bottom: 1.5rem;\n}\n@media (max-width: 1079.9px) {\n  [_nghost-%COMP%]   .case-manager-note-date[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n    margin-bottom: 1.375rem;\n  }\n}\n[_nghost-%COMP%]   .case-manager-note-text[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n@media (max-width: 1079.9px) {\n  [_nghost-%COMP%]   .case-manager-note-text[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc2UtbWFuYWdlci1ub3RlLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vc3R5bGVzL2xvb3AtZGVzaWduLXN5c3RlbS12Mi9fY29sb3JzLnNjc3MiLCIuLi8uLi8uLi9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQ3VDWTtFRHRDWixxQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUFGRjtBRW1LRTtFRnhLRjtJQVNJLDBCQUFBO0VBQUY7QUFDRjtBQUVJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBQU47QUV5SkU7RUY1SkU7SUFLSSxtQkFBQTtJQUNBLHVCQUFBO0VBRU47QUFDRjtBQUFJO0VBQ0UsZUFBQTtFQUNBLGNDa0JRO0VEakJSLHFCQUFBO0FBRU47QUU4SUU7RUZuSkU7SUFLSSxtQkFBQTtJQUNBLHVCQUFBO0VBSU47QUFDRjtBQUZJO0VBQ0UsbUJBQUE7QUFJTjtBRXFJRTtFRjFJRTtJQUdJLGVBQUE7RUFNTjtBQUNGIiwiZmlsZSI6ImNhc2UtbWFuYWdlci1ub3RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnbG9vcC1kZXNpZ24tc3lzdGVtLXYyL2NvbG9ycyc7XG5AaW1wb3J0ICdtaXhpbnMnO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xuICBjb2xvcjogJG5ldXRyYWwtODAwO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIHBhZGRpbmc6IDIuMjVyZW0gMS41cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAkbmV1dHJhbC01MDA7XG4gIEBpbmNsdWRlIG1vYmlsZS1hbmQtdGFibGV0LW9ubHkge1xuICAgIHBhZGRpbmc6IDIuMTI1cmVtIDEuMzc1cmVtO1xuICB9XG4gIC5jYXNlLW1hbmFnZXItbm90ZSB7XG4gICAgJi1uYW1lIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICAgICAgQGluY2x1ZGUgbW9iaWxlLWFuZC10YWJsZXQtb25seSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xuICAgICAgfVxuICAgIH1cbiAgICAmLWRhdGUge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgY29sb3I6ICRuZXV0cmFsLTUwMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICAgIEBpbmNsdWRlIG1vYmlsZS1hbmQtdGFibGV0LW9ubHkge1xuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjM3NXJlbTtcbiAgICAgIH1cbiAgICB9XG4gICAgJi10ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgICBAaW5jbHVkZSBtb2JpbGUtYW5kLXRhYmxldC1vbmx5IHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy8vLyBCcmFuZCBjb2xvcnNcbi8vIFByaW1hcnlcbiRsb29wLXB1cnBsZS0xMDA6ICNlYWU2ZjA7XG4kbG9vcC1wdXJwbGUtMjAwOiAjZDZkMGRmO1xuJGxvb3AtcHVycGxlLTMwMDogI2JhYWJkMDtcbiRsb29wLXB1cnBsZS00MDA6ICM4NjZhYjA7XG4kbG9vcC1wdXJwbGUtNTAwOiAjNmM0ZTk5O1xuJGxvb3AtcHVycGxlLTYwMDogIzRhMmI3YTtcbiRsb29wLXB1cnBsZS03MDA6ICMzMTEzNWU7XG4kbG9vcC1wdXJwbGUtODAwOiAjMjYxMDQ3O1xuXG5cbi8vIEdyZWVuc1xuJGxvb3AtZ3JlZW4tMTAwOiAjZTZmMGU5O1xuJGxvb3AtZ3JlZW4tMjAwOiAjYzBkOWNlO1xuJGxvb3AtZ3JlZW4tMzAwOiAjOTNiOWIwO1xuJGxvb3AtZ3JlZW4tNDAwOiAjNTM4YzgwO1xuJGxvb3AtZ3JlZW4tNTAwOiAjMjY2OTVjO1xuJGxvb3AtZ3JlZW4tNjAwOiAjMDA0NzNkO1xuJGxvb3AtZ3JlZW4tNzAwOiAjMDAzMjJiO1xuJGxvb3AtZ3JlZW4tODAwOiAjMDAyMTFjO1xuXG4vLyBFeGFtcGxlOlxuLy8gbWFwLmdldCgkbG9vcC1wdXJwbGVzLCAnNjAwJyk7XG5cbi8vIEFjdGlvblxuJGFjdGlvbi10ZWFsLTEwMDogI2Q5ZWVlZDtcbiRhY3Rpb24tdGVhbC0yMDA6ICNhMWQ0ZDI7XG4kYWN0aW9uLXRlYWwtMzAwOiAjNjliYmI4O1xuJGFjdGlvbi10ZWFsLTQwMDogIzAwODU3ZDtcbiRhY3Rpb24tdGVhbC01MDA6ICMwMTY5NjU7XG4kYWN0aW9uLXRlYWwtNjAwOiAjMDA1NzU0O1xuJGFjdGlvbi10ZWFsLTcwMDogIzAwNDU0MjtcbiRhY3Rpb24tdGVhbC04MDA6ICMwMTMyMzA7XG5cbi8vIEV4YW1wbGU6XG4vLyBtYXAuZ2V0KCRhY3Rpb24tdGVhbHMsICc2MDAnKTtcblxuLy8gTmV1dHJhbFxuJG5ldXRyYWwtMDAwOiAjZmZmZmZmO1xuJG5ldXRyYWwtMDUwOiAjZjFmMmYyO1xuJG5ldXRyYWwtMTAwOiAjZGJkYmRiO1xuJG5ldXRyYWwtMzAwOiAjYjZiNmI2O1xuJG5ldXRyYWwtNDAwOiAjOTI5MjkyO1xuJG5ldXRyYWwtNTAwOiAjNjU2NTY1O1xuJG5ldXRyYWwtNzAwOiAjNDk0OTQ5O1xuJG5ldXRyYWwtODAwOiAjMWExYTFhO1xuXG4vLyBFeGFtcGxlOlxuLy8gbWFwLmdldCgkbmV1dHJhbHMsICc2MDAnKTtcblxuLy8vLyBTZW1hbnRpYyBDb2xvcnNcbi8vIERhbmdlclxuJGRlc3RydWN0aXZlLXJlZC0xMDA6ICNmNWQ1ZGI7XG4kZGVzdHJ1Y3RpdmUtcmVkLTIwMDogI2VkYTFhZjtcbiRkZXN0cnVjdGl2ZS1yZWQtMzAwOiAjZTM2ZDgzO1xuJGRlc3RydWN0aXZlLXJlZC00MDA6ICNjMjMwNGI7XG4kZGVzdHJ1Y3RpdmUtcmVkLTUwMDogI2IyMWQzOTtcbiRkZXN0cnVjdGl2ZS1yZWQtNjAwOiAjOGMxMTI4O1xuJGRlc3RydWN0aXZlLXJlZC03MDA6ICM3MzAwMTU7XG4kZGVzdHJ1Y3RpdmUtcmVkLTgwMDogIzQ1MDYxMTtcblxuLy8gQWxlcnRcbiRhbGVydC1nb2xkLTEwMDogI2ZmZjFkNTtcbiRhbGVydC1nb2xkLTIwMDogI2Y3ZGE5ZTtcbiRhbGVydC1nb2xkLTMwMDogI2Y4YzQ1YjtcbiRhbGVydC1nb2xkLTQwMDogI2U4YWIzMTtcbiRhbGVydC1nb2xkLTUwMDogI2NjOGYxNDtcbiRhbGVydC1nb2xkLTYwMDogI2NjOGYxNDtcbiRhbGVydC1nb2xkLTcwMDogIzZiNDcwMDtcbiRhbGVydC1nb2xkLTgwMDogIzQyMmMwMDtcblxuLy8gRW1waGFzaXNcbiRlbXBoYXNpcy1ibHVlLTEwMDogI2Q5ZThmZjtcbiRlbXBoYXNpcy1ibHVlLTIwMDogI2E4Y2JmZjtcbiRlbXBoYXNpcy1ibHVlLTMwMDogIzgwYjJmZjtcbiRlbXBoYXNpcy1ibHVlLTQwMDogIzUzOTdmYztcbiRlbXBoYXNpcy1ibHVlLTUwMDogIzIwNzJlYztcbiRlbXBoYXNpcy1ibHVlLTYwMDogIzA0NTZkMTtcbiRlbXBoYXNpcy1ibHVlLTcwMDogIzAwM2M5NjtcbiRlbXBoYXNpcy1ibHVlLTgwMDogIzAwMWQ0NztcblxuJGxvb3AtcHVycGxlczogKFxuICAnMTAwJzogJGxvb3AtcHVycGxlLTEwMCxcbiAgJzIwMCc6ICRsb29wLXB1cnBsZS0yMDAsXG4gICczMDAnOiAkbG9vcC1wdXJwbGUtMzAwLFxuICAnNDAwJzogJGxvb3AtcHVycGxlLTQwMCxcbiAgJzUwMCc6ICRsb29wLXB1cnBsZS01MDAsXG4gICc2MDAnOiAkbG9vcC1wdXJwbGUtNjAwLFxuICAnNzAwJzogJGxvb3AtcHVycGxlLTcwMCxcbiAgJzgwMCc6ICRsb29wLXB1cnBsZS04MDAsXG4pO1xuXG4kbG9vcC1ncmVlbnM6IChcbiAgJzEwMCc6ICRsb29wLWdyZWVuLTEwMCxcbiAgJzIwMCc6ICRsb29wLWdyZWVuLTIwMCxcbiAgJzMwMCc6ICRsb29wLWdyZWVuLTMwMCxcbiAgJzQwMCc6ICRsb29wLWdyZWVuLTQwMCxcbiAgJzUwMCc6ICRsb29wLWdyZWVuLTUwMCxcbiAgJzYwMCc6ICRsb29wLWdyZWVuLTYwMCxcbiAgJzcwMCc6ICRsb29wLWdyZWVuLTcwMCxcbiAgJzgwMCc6ICRsb29wLWdyZWVuLTgwMCxcbik7XG5cbiRhY3Rpb24tdGVhbHM6IChcbiAgJzEwMCc6ICRhY3Rpb24tdGVhbC0xMDAsXG4gICcyMDAnOiAkYWN0aW9uLXRlYWwtMjAwLFxuICAnMzAwJzogJGFjdGlvbi10ZWFsLTMwMCxcbiAgJzQwMCc6ICRhY3Rpb24tdGVhbC00MDAsXG4gICc1MDAnOiAkYWN0aW9uLXRlYWwtNTAwLFxuICAnNjAwJzogJGFjdGlvbi10ZWFsLTYwMCxcbiAgJzcwMCc6ICRhY3Rpb24tdGVhbC03MDAsXG4gICc4MDAnOiAkYWN0aW9uLXRlYWwtODAwLFxuKTtcblxuJG5ldXRyYWxzOiAoXG4gICcwMDAnOiAkbmV1dHJhbC0wMDAsXG4gICcwNTAnOiAkbmV1dHJhbC0wNTAsXG4gICcxMDAnOiAkbmV1dHJhbC0xMDAsXG4gICczMDAnOiAkbmV1dHJhbC0zMDAsXG4gICc0MDAnOiAkbmV1dHJhbC00MDAsXG4gICc1MDAnOiAkbmV1dHJhbC01MDAsXG4gICc3MDAnOiAkbmV1dHJhbC03MDAsXG4gICc4MDAnOiAkbmV1dHJhbC04MDAsXG4pO1xuXG4kZGVzdHJ1Y3RpdmUtcmVkczogKFxuICAnMTAwJzogJGRlc3RydWN0aXZlLXJlZC0xMDAsXG4gICcyMDAnOiAkZGVzdHJ1Y3RpdmUtcmVkLTIwMCxcbiAgJzMwMCc6ICRkZXN0cnVjdGl2ZS1yZWQtMzAwLFxuICAnNDAwJzogJGRlc3RydWN0aXZlLXJlZC00MDAsXG4gICc1MDAnOiAkZGVzdHJ1Y3RpdmUtcmVkLTUwMCxcbiAgJzYwMCc6ICRkZXN0cnVjdGl2ZS1yZWQtNjAwLFxuICAnNzAwJzogJGRlc3RydWN0aXZlLXJlZC03MDAsXG4gICc4MDAnOiAkZGVzdHJ1Y3RpdmUtcmVkLTgwMCxcbik7XG5cbiRhbGVydC1nb2xkczogKFxuICAnMTAwJzogJGFsZXJ0LWdvbGQtMTAwLFxuICAnMjAwJzogJGFsZXJ0LWdvbGQtMjAwLFxuICAnMzAwJzogJGFsZXJ0LWdvbGQtMzAwLFxuICAnNDAwJzogJGFsZXJ0LWdvbGQtNDAwLFxuICAnNTAwJzogJGFsZXJ0LWdvbGQtNTAwLFxuICAnNjAwJzogJGFsZXJ0LWdvbGQtNjAwLFxuICAnNzAwJzogJGFsZXJ0LWdvbGQtNzAwLFxuICAnODAwJzogJGFsZXJ0LWdvbGQtODAwLFxuKTtcblxuJGVtcGhhc2lzLWJsdWVzOiAoXG4gICcxMDAnOiAkZW1waGFzaXMtYmx1ZS0xMDAsXG4gICcyMDAnOiAkZW1waGFzaXMtYmx1ZS0yMDAsXG4gICczMDAnOiAkZW1waGFzaXMtYmx1ZS0zMDAsXG4gICc0MDAnOiAkZW1waGFzaXMtYmx1ZS00MDAsXG4gICc1MDAnOiAkZW1waGFzaXMtYmx1ZS01MDAsXG4gICc2MDAnOiAkZW1waGFzaXMtYmx1ZS02MDAsXG4gICc3MDAnOiAkZW1waGFzaXMtYmx1ZS03MDAsXG4gICc4MDAnOiAkZW1waGFzaXMtYmx1ZS04MDAsXG4pO1xuXG4kbG9vcC10aGVtZXM6IChcbiAgJ3ByaW1hcnknOiAkbG9vcC1ncmVlbnMsXG4gICdhY3Rpb24nOiAkYWN0aW9uLXRlYWxzLFxuICAnbmV1dHJhbCc6ICRuZXV0cmFscyxcbiAgJ2Rhbmdlcic6ICRkZXN0cnVjdGl2ZS1yZWRzLFxuICAnYWxlcnQnOiAkYWxlcnQtZ29sZHMsXG4gICdlbXBoYXNpcyc6ICRlbXBoYXNpcy1ibHVlcyxcbik7IiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIGZsZXgtZ2FwKCRnYXAsICRnbG9iYWw6IGZhbHNlKSB7XG4gIG1hcmdpbi10b3A6ICgtJGdhcCk7XG4gIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCgtJGdhcCksICRnbG9iYWwpO1xuXG4gID4gKiB7XG4gICAgbWFyZ2luLXRvcDogJGdhcDtcbiAgICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgkZ2FwLCAkZ2xvYmFsKTtcbiAgfVxufVxuXG5AbWl4aW4gYmFzZS1jb250YWluZXIoJGNvbnRlbnQtd2lkdGgpIHtcbiAgJGRlc2t0b3AtcGFkZGluZzogMnJlbTtcbiAgbWF4LXdpZHRoOiBjYWxjKCN7JGNvbnRlbnQtd2lkdGh9ICsgKCN7JGRlc2t0b3AtcGFkZGluZ30pKTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MnJlbSkge1xuICAgIEBpbmNsdWRlIHBhZGRpbmctbGVmdCgkZGVza3RvcC1wYWRkaW5nLCB0cnVlKTtcbiAgICBAaW5jbHVkZSBwYWRkaW5nLXJpZ2h0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICB9XG59XG5cbkBtaXhpbiBjZW50ZXJBYnNvbHV0ZUVsZW1lbnQge1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5AbWl4aW4gb25seS1sdHItZ2xvYmFsIHtcbiAgaHRtbDpub3QoW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bC1nbG9iYWwge1xuICBodG1sW2Rpcj0ncnRsJ10gJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktbHRyIHtcbiAgOmhvc3QtY29udGV4dChodG1sOm5vdChbZGlyPSdydGwnXSkpICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bCB7XG4gIDpob3N0LWNvbnRleHQoaHRtbFtkaXI9J3J0bCddKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gcnRsLXZhbHVlKCRwcm9wZXJ0eSwgJGx0ci12YWx1ZSwgJHJ0bC12YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGx0ci12YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHJ0bC12YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHJ0bC1wcm9wZXJ0eSgkbHRyLXByb3BlcnR5LCAkcnRsLXByb3BlcnR5LCAkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpZiAkZ2xvYmFsID09IHRydWUge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyLWdsb2JhbCB7XG4gICAgICAjeyRsdHItcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwtZ2xvYmFsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bCB7XG4gICAgICAjeyRydGwtcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXJnaW4tbGVmdCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLWxlZnQsIG1hcmdpbi1yaWdodCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBtYXJnaW4tcmlnaHQoJG1hcmdpbiwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KG1hcmdpbi1yaWdodCwgbWFyZ2luLWxlZnQsICRtYXJnaW4sICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZygkcGFkZGluZ1RvcCwgJHBhZGRpbmdSaWdodCwgJHBhZGRpbmdCb3R0b20sICRwYWRkaW5nTGVmdCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgcGFkZGluZy10b3A6ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZ1JpZ2h0LCAkZ2xvYmFsKTtcbiAgcGFkZGluZy1ib3R0b206ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZ0xlZnQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1sZWZ0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLXJpZ2h0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiB0ZXh0LWFsaWduLWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRleHQtYWxpZ24sIGxlZnQsIHJpZ2h0LCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGxlZnQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobGVmdCwgcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiByaWdodCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShyaWdodCwgbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRyYW5zbGF0ZVhZKCR2YWx1ZVgsICR2YWx1ZVksICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZSh0cmFuc2Zvcm0sIHRyYW5zbGF0ZSgkdmFsdWVYLCAkdmFsdWVZKSwgdHJhbnNsYXRlKC0kdmFsdWVYLCAkdmFsdWVZKSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItbGVmdCwgYm9yZGVyLXJpZ2h0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1yaWdodCwgYm9yZGVyLWxlZnQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCBib3JkZXItdG9wLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtbGVmdC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBmbG9hdC1sZWZ0KCRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZShmbG9hdCwgbGVmdCwgcmlnaHQsICRnbG9iYWw6IGZhbHNlKTtcbn1cblxuQG1peGluIGZsb2F0LXJpZ2h0IHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCByaWdodCwgbGVmdCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gc21hbGwtZGVza3RvcC1vbmx5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LWxnKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQteGwgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtYW5kLXRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc21hbGwtbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtcyAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LW1kIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtdXAge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gZGlzYWJsZS1zY3JvbGxiYXIge1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2FzZS1tYW5hZ2VyLW5vdGUvY2FzZS1tYW5hZ2VyLW5vdGUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3N0eWxlcy9sb29wLWRlc2lnbi1zeXN0ZW0tdjIvX2NvbG9ycy5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQ3VDWTtFRHRDWixxQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUFGRjtBRW1LRTtFRnhLRjtJQVNJLDBCQUFBO0VBQUY7QUFDRjtBQUVJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBQU47QUV5SkU7RUY1SkU7SUFLSSxtQkFBQTtJQUNBLHVCQUFBO0VBRU47QUFDRjtBQUFJO0VBQ0UsZUFBQTtFQUNBLGNDa0JRO0VEakJSLHFCQUFBO0FBRU47QUU4SUU7RUZuSkU7SUFLSSxtQkFBQTtJQUNBLHVCQUFBO0VBSU47QUFDRjtBQUZJO0VBQ0UsbUJBQUE7QUFJTjtBRXFJRTtFRjFJRTtJQUdJLGVBQUE7RUFNTjtBQUNGO0FBQ0Esd3dhQUF3d2EiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdsb29wLWRlc2lnbi1zeXN0ZW0tdjIvY29sb3JzJztcbkBpbXBvcnQgJ21peGlucyc7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gIGNvbG9yOiAkbmV1dHJhbC04MDA7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgcGFkZGluZzogMi4yNXJlbSAxLjVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICRuZXV0cmFsLTUwMDtcbiAgQGluY2x1ZGUgbW9iaWxlLWFuZC10YWJsZXQtb25seSB7XG4gICAgcGFkZGluZzogMi4xMjVyZW0gMS4zNzVyZW07XG4gIH1cbiAgLmNhc2UtbWFuYWdlci1ub3RlIHtcbiAgICAmLW5hbWUge1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gICAgICBAaW5jbHVkZSBtb2JpbGUtYW5kLXRhYmxldC1vbmx5IHtcbiAgICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XG4gICAgICB9XG4gICAgfVxuICAgICYtZGF0ZSB7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBjb2xvcjogJG5ldXRyYWwtNTAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgICAgQGluY2x1ZGUgbW9iaWxlLWFuZC10YWJsZXQtb25seSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuMzc1cmVtO1xuICAgICAgfVxuICAgIH1cbiAgICAmLXRleHQge1xuICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICAgIEBpbmNsdWRlIG1vYmlsZS1hbmQtdGFibGV0LW9ubHkge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvLy8vIEJyYW5kIGNvbG9yc1xuLy8gUHJpbWFyeVxuJGxvb3AtcHVycGxlLTEwMDogI2VhZTZmMDtcbiRsb29wLXB1cnBsZS0yMDA6ICNkNmQwZGY7XG4kbG9vcC1wdXJwbGUtMzAwOiAjYmFhYmQwO1xuJGxvb3AtcHVycGxlLTQwMDogIzg2NmFiMDtcbiRsb29wLXB1cnBsZS01MDA6ICM2YzRlOTk7XG4kbG9vcC1wdXJwbGUtNjAwOiAjNGEyYjdhO1xuJGxvb3AtcHVycGxlLTcwMDogIzMxMTM1ZTtcbiRsb29wLXB1cnBsZS04MDA6ICMyNjEwNDc7XG5cblxuLy8gR3JlZW5zXG4kbG9vcC1ncmVlbi0xMDA6ICNlNmYwZTk7XG4kbG9vcC1ncmVlbi0yMDA6ICNjMGQ5Y2U7XG4kbG9vcC1ncmVlbi0zMDA6ICM5M2I5YjA7XG4kbG9vcC1ncmVlbi00MDA6ICM1MzhjODA7XG4kbG9vcC1ncmVlbi01MDA6ICMyNjY5NWM7XG4kbG9vcC1ncmVlbi02MDA6ICMwMDQ3M2Q7XG4kbG9vcC1ncmVlbi03MDA6ICMwMDMyMmI7XG4kbG9vcC1ncmVlbi04MDA6ICMwMDIxMWM7XG5cbi8vIEV4YW1wbGU6XG4vLyBtYXAuZ2V0KCRsb29wLXB1cnBsZXMsICc2MDAnKTtcblxuLy8gQWN0aW9uXG4kYWN0aW9uLXRlYWwtMTAwOiAjZDllZWVkO1xuJGFjdGlvbi10ZWFsLTIwMDogI2ExZDRkMjtcbiRhY3Rpb24tdGVhbC0zMDA6ICM2OWJiYjg7XG4kYWN0aW9uLXRlYWwtNDAwOiAjMDA4NTdkO1xuJGFjdGlvbi10ZWFsLTUwMDogIzAxNjk2NTtcbiRhY3Rpb24tdGVhbC02MDA6ICMwMDU3NTQ7XG4kYWN0aW9uLXRlYWwtNzAwOiAjMDA0NTQyO1xuJGFjdGlvbi10ZWFsLTgwMDogIzAxMzIzMDtcblxuLy8gRXhhbXBsZTpcbi8vIG1hcC5nZXQoJGFjdGlvbi10ZWFscywgJzYwMCcpO1xuXG4vLyBOZXV0cmFsXG4kbmV1dHJhbC0wMDA6ICNmZmZmZmY7XG4kbmV1dHJhbC0wNTA6ICNmMWYyZjI7XG4kbmV1dHJhbC0xMDA6ICNkYmRiZGI7XG4kbmV1dHJhbC0zMDA6ICNiNmI2YjY7XG4kbmV1dHJhbC00MDA6ICM5MjkyOTI7XG4kbmV1dHJhbC01MDA6ICM2NTY1NjU7XG4kbmV1dHJhbC03MDA6ICM0OTQ5NDk7XG4kbmV1dHJhbC04MDA6ICMxYTFhMWE7XG5cbi8vIEV4YW1wbGU6XG4vLyBtYXAuZ2V0KCRuZXV0cmFscywgJzYwMCcpO1xuXG4vLy8vIFNlbWFudGljIENvbG9yc1xuLy8gRGFuZ2VyXG4kZGVzdHJ1Y3RpdmUtcmVkLTEwMDogI2Y1ZDVkYjtcbiRkZXN0cnVjdGl2ZS1yZWQtMjAwOiAjZWRhMWFmO1xuJGRlc3RydWN0aXZlLXJlZC0zMDA6ICNlMzZkODM7XG4kZGVzdHJ1Y3RpdmUtcmVkLTQwMDogI2MyMzA0YjtcbiRkZXN0cnVjdGl2ZS1yZWQtNTAwOiAjYjIxZDM5O1xuJGRlc3RydWN0aXZlLXJlZC02MDA6ICM4YzExMjg7XG4kZGVzdHJ1Y3RpdmUtcmVkLTcwMDogIzczMDAxNTtcbiRkZXN0cnVjdGl2ZS1yZWQtODAwOiAjNDUwNjExO1xuXG4vLyBBbGVydFxuJGFsZXJ0LWdvbGQtMTAwOiAjZmZmMWQ1O1xuJGFsZXJ0LWdvbGQtMjAwOiAjZjdkYTllO1xuJGFsZXJ0LWdvbGQtMzAwOiAjZjhjNDViO1xuJGFsZXJ0LWdvbGQtNDAwOiAjZThhYjMxO1xuJGFsZXJ0LWdvbGQtNTAwOiAjY2M4ZjE0O1xuJGFsZXJ0LWdvbGQtNjAwOiAjY2M4ZjE0O1xuJGFsZXJ0LWdvbGQtNzAwOiAjNmI0NzAwO1xuJGFsZXJ0LWdvbGQtODAwOiAjNDIyYzAwO1xuXG4vLyBFbXBoYXNpc1xuJGVtcGhhc2lzLWJsdWUtMTAwOiAjZDllOGZmO1xuJGVtcGhhc2lzLWJsdWUtMjAwOiAjYThjYmZmO1xuJGVtcGhhc2lzLWJsdWUtMzAwOiAjODBiMmZmO1xuJGVtcGhhc2lzLWJsdWUtNDAwOiAjNTM5N2ZjO1xuJGVtcGhhc2lzLWJsdWUtNTAwOiAjMjA3MmVjO1xuJGVtcGhhc2lzLWJsdWUtNjAwOiAjMDQ1NmQxO1xuJGVtcGhhc2lzLWJsdWUtNzAwOiAjMDAzYzk2O1xuJGVtcGhhc2lzLWJsdWUtODAwOiAjMDAxZDQ3O1xuXG4kbG9vcC1wdXJwbGVzOiAoXG4gICcxMDAnOiAkbG9vcC1wdXJwbGUtMTAwLFxuICAnMjAwJzogJGxvb3AtcHVycGxlLTIwMCxcbiAgJzMwMCc6ICRsb29wLXB1cnBsZS0zMDAsXG4gICc0MDAnOiAkbG9vcC1wdXJwbGUtNDAwLFxuICAnNTAwJzogJGxvb3AtcHVycGxlLTUwMCxcbiAgJzYwMCc6ICRsb29wLXB1cnBsZS02MDAsXG4gICc3MDAnOiAkbG9vcC1wdXJwbGUtNzAwLFxuICAnODAwJzogJGxvb3AtcHVycGxlLTgwMCxcbik7XG5cbiRsb29wLWdyZWVuczogKFxuICAnMTAwJzogJGxvb3AtZ3JlZW4tMTAwLFxuICAnMjAwJzogJGxvb3AtZ3JlZW4tMjAwLFxuICAnMzAwJzogJGxvb3AtZ3JlZW4tMzAwLFxuICAnNDAwJzogJGxvb3AtZ3JlZW4tNDAwLFxuICAnNTAwJzogJGxvb3AtZ3JlZW4tNTAwLFxuICAnNjAwJzogJGxvb3AtZ3JlZW4tNjAwLFxuICAnNzAwJzogJGxvb3AtZ3JlZW4tNzAwLFxuICAnODAwJzogJGxvb3AtZ3JlZW4tODAwLFxuKTtcblxuJGFjdGlvbi10ZWFsczogKFxuICAnMTAwJzogJGFjdGlvbi10ZWFsLTEwMCxcbiAgJzIwMCc6ICRhY3Rpb24tdGVhbC0yMDAsXG4gICczMDAnOiAkYWN0aW9uLXRlYWwtMzAwLFxuICAnNDAwJzogJGFjdGlvbi10ZWFsLTQwMCxcbiAgJzUwMCc6ICRhY3Rpb24tdGVhbC01MDAsXG4gICc2MDAnOiAkYWN0aW9uLXRlYWwtNjAwLFxuICAnNzAwJzogJGFjdGlvbi10ZWFsLTcwMCxcbiAgJzgwMCc6ICRhY3Rpb24tdGVhbC04MDAsXG4pO1xuXG4kbmV1dHJhbHM6IChcbiAgJzAwMCc6ICRuZXV0cmFsLTAwMCxcbiAgJzA1MCc6ICRuZXV0cmFsLTA1MCxcbiAgJzEwMCc6ICRuZXV0cmFsLTEwMCxcbiAgJzMwMCc6ICRuZXV0cmFsLTMwMCxcbiAgJzQwMCc6ICRuZXV0cmFsLTQwMCxcbiAgJzUwMCc6ICRuZXV0cmFsLTUwMCxcbiAgJzcwMCc6ICRuZXV0cmFsLTcwMCxcbiAgJzgwMCc6ICRuZXV0cmFsLTgwMCxcbik7XG5cbiRkZXN0cnVjdGl2ZS1yZWRzOiAoXG4gICcxMDAnOiAkZGVzdHJ1Y3RpdmUtcmVkLTEwMCxcbiAgJzIwMCc6ICRkZXN0cnVjdGl2ZS1yZWQtMjAwLFxuICAnMzAwJzogJGRlc3RydWN0aXZlLXJlZC0zMDAsXG4gICc0MDAnOiAkZGVzdHJ1Y3RpdmUtcmVkLTQwMCxcbiAgJzUwMCc6ICRkZXN0cnVjdGl2ZS1yZWQtNTAwLFxuICAnNjAwJzogJGRlc3RydWN0aXZlLXJlZC02MDAsXG4gICc3MDAnOiAkZGVzdHJ1Y3RpdmUtcmVkLTcwMCxcbiAgJzgwMCc6ICRkZXN0cnVjdGl2ZS1yZWQtODAwLFxuKTtcblxuJGFsZXJ0LWdvbGRzOiAoXG4gICcxMDAnOiAkYWxlcnQtZ29sZC0xMDAsXG4gICcyMDAnOiAkYWxlcnQtZ29sZC0yMDAsXG4gICczMDAnOiAkYWxlcnQtZ29sZC0zMDAsXG4gICc0MDAnOiAkYWxlcnQtZ29sZC00MDAsXG4gICc1MDAnOiAkYWxlcnQtZ29sZC01MDAsXG4gICc2MDAnOiAkYWxlcnQtZ29sZC02MDAsXG4gICc3MDAnOiAkYWxlcnQtZ29sZC03MDAsXG4gICc4MDAnOiAkYWxlcnQtZ29sZC04MDAsXG4pO1xuXG4kZW1waGFzaXMtYmx1ZXM6IChcbiAgJzEwMCc6ICRlbXBoYXNpcy1ibHVlLTEwMCxcbiAgJzIwMCc6ICRlbXBoYXNpcy1ibHVlLTIwMCxcbiAgJzMwMCc6ICRlbXBoYXNpcy1ibHVlLTMwMCxcbiAgJzQwMCc6ICRlbXBoYXNpcy1ibHVlLTQwMCxcbiAgJzUwMCc6ICRlbXBoYXNpcy1ibHVlLTUwMCxcbiAgJzYwMCc6ICRlbXBoYXNpcy1ibHVlLTYwMCxcbiAgJzcwMCc6ICRlbXBoYXNpcy1ibHVlLTcwMCxcbiAgJzgwMCc6ICRlbXBoYXNpcy1ibHVlLTgwMCxcbik7XG5cbiRsb29wLXRoZW1lczogKFxuICAncHJpbWFyeSc6ICRsb29wLWdyZWVucyxcbiAgJ2FjdGlvbic6ICRhY3Rpb24tdGVhbHMsXG4gICduZXV0cmFsJzogJG5ldXRyYWxzLFxuICAnZGFuZ2VyJzogJGRlc3RydWN0aXZlLXJlZHMsXG4gICdhbGVydCc6ICRhbGVydC1nb2xkcyxcbiAgJ2VtcGhhc2lzJzogJGVtcGhhc2lzLWJsdWVzLFxuKTsiLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AbWl4aW4gZmxleC1nYXAoJGdhcCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgbWFyZ2luLXRvcDogKC0kZ2FwKTtcbiAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoKC0kZ2FwKSwgJGdsb2JhbCk7XG5cbiAgPiAqIHtcbiAgICBtYXJnaW4tdG9wOiAkZ2FwO1xuICAgIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCRnYXAsICRnbG9iYWwpO1xuICB9XG59XG5cbkBtaXhpbiBiYXNlLWNvbnRhaW5lcigkY29udGVudC13aWR0aCkge1xuICAkZGVza3RvcC1wYWRkaW5nOiAycmVtO1xuICBtYXgtd2lkdGg6IGNhbGMoI3skY29udGVudC13aWR0aH0gKyAoI3skZGVza3RvcC1wYWRkaW5nfSkpO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQycmVtKSB7XG4gICAgQGluY2x1ZGUgcGFkZGluZy1sZWZ0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICAgIEBpbmNsdWRlIHBhZGRpbmctcmlnaHQoJGRlc2t0b3AtcGFkZGluZywgdHJ1ZSk7XG4gIH1cbn1cblxuQG1peGluIGNlbnRlckFic29sdXRlRWxlbWVudCB7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbkBtaXhpbiBvbmx5LWx0ci1nbG9iYWwge1xuICBodG1sOm5vdChbZGlyPSdydGwnXSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsLWdsb2JhbCB7XG4gIGh0bWxbZGlyPSdydGwnXSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1sdHIge1xuICA6aG9zdC1jb250ZXh0KGh0bWw6bm90KFtkaXI9J3J0bCddKSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsIHtcbiAgOmhvc3QtY29udGV4dChodG1sW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBydGwtdmFsdWUoJHByb3BlcnR5LCAkbHRyLXZhbHVlLCAkcnRsLXZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaWYgJGdsb2JhbCA9PSB0cnVlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ci1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsLWdsb2JhbCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRydGwtdmFsdWU7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ciB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRsdHItdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gcnRsLXByb3BlcnR5KCRsdHItcHJvcGVydHksICRydGwtcHJvcGVydHksICR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcnRsLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skbHRyLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hcmdpbi1sZWZ0KCRtYXJnaW4sICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShtYXJnaW4tbGVmdCwgbWFyZ2luLXJpZ2h0LCAkbWFyZ2luLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIG1hcmdpbi1yaWdodCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLXJpZ2h0LCBtYXJnaW4tbGVmdCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nKCRwYWRkaW5nVG9wLCAkcGFkZGluZ1JpZ2h0LCAkcGFkZGluZ0JvdHRvbSwgJHBhZGRpbmdMZWZ0LCAkZ2xvYmFsOiBmYWxzZSkge1xuICBwYWRkaW5nLXRvcDogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nUmlnaHQsICRnbG9iYWwpO1xuICBwYWRkaW5nLWJvdHRvbTogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nTGVmdCwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLWxlZnQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmctcmlnaHQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRleHQtYWxpZ24tbGVmdCgkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUodGV4dC1hbGlnbiwgbGVmdCwgcmlnaHQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShsZWZ0LCByaWdodCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHJpZ2h0LCBsZWZ0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gdHJhbnNsYXRlWFkoJHZhbHVlWCwgJHZhbHVlWSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRyYW5zZm9ybSwgdHJhbnNsYXRlKCR2YWx1ZVgsICR2YWx1ZVkpLCB0cmFuc2xhdGUoLSR2YWx1ZVgsICR2YWx1ZVkpLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1sZWZ0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1sZWZ0LCBib3JkZXItcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItcmlnaHQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXJpZ2h0LCBib3JkZXItbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsIGJvcmRlci10b3AtbGVmdC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItdG9wLWxlZnQtcmFkaXVzLCBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGZsb2F0LWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCBsZWZ0LCByaWdodCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gZmxvYXQtcmlnaHQge1xuICBAaW5jbHVkZSBydGwtdmFsdWUoZmxvYXQsIHJpZ2h0LCBsZWZ0LCAkZ2xvYmFsOiBmYWxzZSk7XG59XG5cbkBtaXhpbiBzbWFsbC1kZXNrdG9wLW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbGcpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC14bCAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1hbmQtdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbGcgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBzbWFsbC1tb2JpbGUtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1zIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbWQgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0YWJsZXQtb25seSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS11cCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBkaXNhYmxlLXNjcm9sbGJhciB7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 86033:
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/case-manager-note/case-manager-note.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaseManagerNoteModule": () => (/* binding */ CaseManagerNoteModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_case_manager_note_case_manager_note_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/components/case-manager-note/case-manager-note.component */ 45202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class CaseManagerNoteModule {
  static #_ = this.ɵfac = function CaseManagerNoteModule_Factory(t) {
    return new (t || CaseManagerNoteModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: CaseManagerNoteModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CaseManagerNoteModule, {
    declarations: [_shared_components_case_manager_note_case_manager_note_component__WEBPACK_IMPORTED_MODULE_0__.CaseManagerNoteComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_shared_components_case_manager_note_case_manager_note_component__WEBPACK_IMPORTED_MODULE_0__.CaseManagerNoteComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_modules_inbox_stories_story-details_stories-details_module_ts.js.map