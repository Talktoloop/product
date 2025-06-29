"use strict";
(self["webpackChunkourloop_ui"] = self["webpackChunkourloop_ui"] || []).push([["default-src_app_core_services_statistics_statistics_service_ts-src_app_shared_components_char-343cbe"],{

/***/ 42243:
/*!****************************************************************!*\
  !*** ./src/app/core/services/statistics/statistics.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatisticsService": () => (/* binding */ StatisticsService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _app_core_services_api_api_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/core/services/api/api-base */ 20127);
/* harmony import */ var _app_shared_utils_prepare_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/utils/prepare-url */ 95817);
/* harmony import */ var _core_services_api_endpoints_statistics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/api/endpoints.statistics */ 32449);
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config.service */ 41665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);







class StatisticsService extends _app_core_services_api_api_base__WEBPACK_IMPORTED_MODULE_0__.ApiService {
  constructor(http) {
    super();
    this.http = http;
  }
  getRepliesStatistics(payload) {
    return this.http.get(this.getRequestUrl(_core_services_api_endpoints_statistics__WEBPACK_IMPORTED_MODULE_2__.statisticsEndpoints.getRepliesStatistics), this.getParams(payload));
  }
  getStoriesAndRepliesByCategory(payload) {
    return this.http.get(this.getRequestUrl(_core_services_api_endpoints_statistics__WEBPACK_IMPORTED_MODULE_2__.statisticsEndpoints.getStoriesAndRepliesByCategory), this.getParams(payload));
  }
  getOpenPostsTimeline(payload) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
    Object.keys(payload).filter(k => k !== 'type').forEach(element => params = params.set(element, payload[element]));
    return this.http.get(this.getRequestUrl(_core_services_api_endpoints_statistics__WEBPACK_IMPORTED_MODULE_2__.statisticsEndpoints.getOpenPostsTimeline), {
      params
    });
  }
  getAverageResponseTimePerCategory(payload) {
    return this.http.get(this.getRequestUrl(_core_services_api_endpoints_statistics__WEBPACK_IMPORTED_MODULE_2__.statisticsEndpoints.getAverageResponseTimePerCategory), this.getParams(payload));
  }
  getStoriesPerThematicArea(payload) {
    return this.http.get(this.getRequestUrl(_core_services_api_endpoints_statistics__WEBPACK_IMPORTED_MODULE_2__.statisticsEndpoints.getStoriesPerThematicArea), this.getParams(payload));
  }
  getDifficultyBreakdown(payload) {
    return this.http.get(this.getRequestUrl(_core_services_api_endpoints_statistics__WEBPACK_IMPORTED_MODULE_2__.statisticsEndpoints.getDifficultyBreakdown), this.getParams(payload));
  }
  getAgeGenderBreakdown(payload) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
    Object.keys(payload).filter(k => k !== 'type').forEach(element => params = params.set(element, payload[element]));
    return this.http.get(this.getRequestUrl(_core_services_api_endpoints_statistics__WEBPACK_IMPORTED_MODULE_2__.statisticsEndpoints.getAgeGenderBreakdown), {
      params
    });
  }
  // CASES
  getCasesTimeline(payload) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
    Object.keys(payload).filter(k => k !== 'type').forEach(element => params = params.set(element, payload[element]));
    return this.http.get(this.getRequestUrl(_core_services_api_endpoints_statistics__WEBPACK_IMPORTED_MODULE_2__.statisticsEndpoints.getCasesTimeline), {
      params
    });
  }
  getTypeOfCasesAccountability(payload) {
    return this.http.get(this.getRequestUrl(_core_services_api_endpoints_statistics__WEBPACK_IMPORTED_MODULE_2__.statisticsEndpoints.getTypeOfCasesAccountability), this.getParams(payload));
  }
  getCasesReceived(payload) {
    return this.http.get(this.getRequestUrl(_core_services_api_endpoints_statistics__WEBPACK_IMPORTED_MODULE_2__.statisticsEndpoints.getCasesReceived), this.getParams(payload));
  }
  getAverageTimeTakenPerCaseType(payload) {
    return this.http.get(this.getRequestUrl(_core_services_api_endpoints_statistics__WEBPACK_IMPORTED_MODULE_2__.statisticsEndpoints.getAverageTimeTakenPerCaseType), this.getParams(payload));
  }
  getWhatTypeOfPeopleReferredToAssistanceReceivedIt(payload) {
    return this.http.get(this.getRequestUrl(_core_services_api_endpoints_statistics__WEBPACK_IMPORTED_MODULE_2__.statisticsEndpoints.getWhatTypeOfPeopleReferredToAssistanceReceivedIt), this.getParams(payload));
  }
  getHowResponsiveWeAre(payload) {
    return this.http.get(this.getRequestUrl(_core_services_api_endpoints_statistics__WEBPACK_IMPORTED_MODULE_2__.statisticsEndpoints.getHowResponsiveWeAre), this.getParams(payload));
  }
  getWhatTypeOfOrganizationReceivingAllegation(payload) {
    return this.http.get(this.getRequestUrl(_core_services_api_endpoints_statistics__WEBPACK_IMPORTED_MODULE_2__.statisticsEndpoints.getWhatTypeOfOrganizationReceivingAllegation), this.getParams(payload));
  }
  getSurvivorAge(payload) {
    return this.http.get(this.getRequestUrl(_core_services_api_endpoints_statistics__WEBPACK_IMPORTED_MODULE_2__.statisticsEndpoints.getSurvivorAge), this.getParams(payload));
  }
  getSurvivorGender(payload) {
    return this.http.get(this.getRequestUrl(_core_services_api_endpoints_statistics__WEBPACK_IMPORTED_MODULE_2__.statisticsEndpoints.getSurvivorGender), this.getParams(payload));
  }
  getWhoIsSharingSensitiveStories(payload) {
    return this.http.get(this.getRequestUrl(_core_services_api_endpoints_statistics__WEBPACK_IMPORTED_MODULE_2__.statisticsEndpoints.getWhoIsSharingSensitiveStories), this.getParams(payload));
  }
  getOutcomesOfInvestigation(payload) {
    return this.http.get(this.getRequestUrl(_core_services_api_endpoints_statistics__WEBPACK_IMPORTED_MODULE_2__.statisticsEndpoints.getOutcomesOfInvestigation), this.getParams(payload));
  }
  getOpenStoriesSignedUrl(filters) {
    const fullUrl = (0,_app_shared_utils_prepare_url__WEBPACK_IMPORTED_MODULE_1__.prepareUrl)(_config_config_service__WEBPACK_IMPORTED_MODULE_3__.CONFIG.apiUrl, _core_services_api_endpoints_statistics__WEBPACK_IMPORTED_MODULE_2__.statisticsEndpoints.getOpenStatsMetabaseEmbeddLink);
    return this.http.get(fullUrl, {
      params: filters ? this.prepareParams(filters) : {}
    });
  }
  getSensitiveStoriesSignedUrl(filters) {
    const fullUrl = (0,_app_shared_utils_prepare_url__WEBPACK_IMPORTED_MODULE_1__.prepareUrl)(_config_config_service__WEBPACK_IMPORTED_MODULE_3__.CONFIG.apiUrl, _core_services_api_endpoints_statistics__WEBPACK_IMPORTED_MODULE_2__.statisticsEndpoints.getSensitiveStatsMetabaseEmbeddLink);
    return this.http.get(fullUrl, {
      params: filters ? this.prepareParams(filters) : {}
    });
  }
  getParams(payload) {
    return {
      params: this.prepareParams(payload)
    };
  }
  prepareParams(payload) {
    if (!payload) {
      return {};
    }
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
    Object.keys(payload).forEach(element => params = params.set(element, payload[element]));
    return params;
  }
  static #_ = this.ɵfac = function StatisticsService_Factory(t) {
    return new (t || StatisticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: StatisticsService,
    factory: StatisticsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3249:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/statistics/anonymous-data/anonymous-data.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnonymousDataComponent": () => (/* binding */ AnonymousDataComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 38699);


class AnonymousDataComponent {
  static #_ = this.ɵfac = function AnonymousDataComponent_Factory(t) {
    return new (t || AnonymousDataComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AnonymousDataComponent,
    selectors: [["loop-chart-anonymous-data"]],
    decls: 5,
    vars: 3,
    consts: [[1, "anonymize"], [1, "anonymize-block"], [1, "anonymize-block-text"]],
    template: function AnonymousDataComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "statisticsCases.noAnonymousData"));
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    styles: ["[_nghost-%COMP%] {\n  top: 0;\n  left: 0;\n  z-index: 2;\n  width: 100%;\n  height: calc(100% - 60px);\n  display: block;\n  margin-top: 60px;\n  position: absolute;\n}\n\n.anonymize[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.anonymize-block[_ngcontent-%COMP%] {\n  max-width: calc(100% - 12rem);\n  margin: 2.0625rem;\n  margin-top: -30px;\n  padding: 0.625rem 1rem;\n  border-radius: 100px;\n  background-color: #656565;\n  text-align: center;\n}\n@media (max-width: 767.9px) {\n  .anonymize-block[_ngcontent-%COMP%] {\n    max-width: calc(100% - 4.125rem);\n  }\n}\n.anonymize-block-text[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 1rem;\n  line-height: 1.36rem;\n}\n@media (max-width: 767.9px) {\n  .anonymize-block-text[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    line-height: 1.021rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFub255bW91cy1kYXRhLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vc3R5bGVzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBREY7QUFFRTtFQUNFLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBQUo7QUM2SkU7RURwS0E7SUFTSSxnQ0FBQTtFQUVKO0FBQ0Y7QUFESTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFHTjtBQ21KRTtFRHpKRTtJQUtJLGtCQUFBO0lBQ0EscUJBQUE7RUFLTjtBQUNGIiwiZmlsZSI6ImFub255bW91cy1kYXRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnbWl4aW5zJztcblxuOmhvc3Qge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYW5vbnltaXplIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICYtYmxvY2sge1xuICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMiAqIDZyZW0pO1xuICAgIG1hcmdpbjogMi4wNjI1cmVtO1xuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xuICAgIHBhZGRpbmc6IDAuNjI1cmVtIDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY1NjU2NTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyICogMi4wNjI1cmVtKTtcbiAgICB9XG4gICAgJi10ZXh0IHtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMzZyZW07XG4gICAgICBAaW5jbHVkZSBtb2JpbGUtb25seSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMDIxcmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIGZsZXgtZ2FwKCRnYXAsICRnbG9iYWw6IGZhbHNlKSB7XG4gIG1hcmdpbi10b3A6ICgtJGdhcCk7XG4gIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCgtJGdhcCksICRnbG9iYWwpO1xuXG4gID4gKiB7XG4gICAgbWFyZ2luLXRvcDogJGdhcDtcbiAgICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgkZ2FwLCAkZ2xvYmFsKTtcbiAgfVxufVxuXG5AbWl4aW4gYmFzZS1jb250YWluZXIoJGNvbnRlbnQtd2lkdGgpIHtcbiAgJGRlc2t0b3AtcGFkZGluZzogMnJlbTtcbiAgbWF4LXdpZHRoOiBjYWxjKCN7JGNvbnRlbnQtd2lkdGh9ICsgKCN7JGRlc2t0b3AtcGFkZGluZ30pKTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MnJlbSkge1xuICAgIEBpbmNsdWRlIHBhZGRpbmctbGVmdCgkZGVza3RvcC1wYWRkaW5nLCB0cnVlKTtcbiAgICBAaW5jbHVkZSBwYWRkaW5nLXJpZ2h0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICB9XG59XG5cbkBtaXhpbiBjZW50ZXJBYnNvbHV0ZUVsZW1lbnQge1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5AbWl4aW4gb25seS1sdHItZ2xvYmFsIHtcbiAgaHRtbDpub3QoW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bC1nbG9iYWwge1xuICBodG1sW2Rpcj0ncnRsJ10gJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktbHRyIHtcbiAgOmhvc3QtY29udGV4dChodG1sOm5vdChbZGlyPSdydGwnXSkpICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bCB7XG4gIDpob3N0LWNvbnRleHQoaHRtbFtkaXI9J3J0bCddKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gcnRsLXZhbHVlKCRwcm9wZXJ0eSwgJGx0ci12YWx1ZSwgJHJ0bC12YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGx0ci12YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHJ0bC12YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHJ0bC1wcm9wZXJ0eSgkbHRyLXByb3BlcnR5LCAkcnRsLXByb3BlcnR5LCAkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpZiAkZ2xvYmFsID09IHRydWUge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyLWdsb2JhbCB7XG4gICAgICAjeyRsdHItcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwtZ2xvYmFsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bCB7XG4gICAgICAjeyRydGwtcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXJnaW4tbGVmdCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLWxlZnQsIG1hcmdpbi1yaWdodCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBtYXJnaW4tcmlnaHQoJG1hcmdpbiwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KG1hcmdpbi1yaWdodCwgbWFyZ2luLWxlZnQsICRtYXJnaW4sICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZygkcGFkZGluZ1RvcCwgJHBhZGRpbmdSaWdodCwgJHBhZGRpbmdCb3R0b20sICRwYWRkaW5nTGVmdCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgcGFkZGluZy10b3A6ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZ1JpZ2h0LCAkZ2xvYmFsKTtcbiAgcGFkZGluZy1ib3R0b206ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZ0xlZnQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1sZWZ0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLXJpZ2h0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiB0ZXh0LWFsaWduLWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRleHQtYWxpZ24sIGxlZnQsIHJpZ2h0LCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGxlZnQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobGVmdCwgcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiByaWdodCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShyaWdodCwgbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRyYW5zbGF0ZVhZKCR2YWx1ZVgsICR2YWx1ZVksICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZSh0cmFuc2Zvcm0sIHRyYW5zbGF0ZSgkdmFsdWVYLCAkdmFsdWVZKSwgdHJhbnNsYXRlKC0kdmFsdWVYLCAkdmFsdWVZKSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItbGVmdCwgYm9yZGVyLXJpZ2h0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1yaWdodCwgYm9yZGVyLWxlZnQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCBib3JkZXItdG9wLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtbGVmdC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBmbG9hdC1sZWZ0KCRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZShmbG9hdCwgbGVmdCwgcmlnaHQsICRnbG9iYWw6IGZhbHNlKTtcbn1cblxuQG1peGluIGZsb2F0LXJpZ2h0IHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCByaWdodCwgbGVmdCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gc21hbGwtZGVza3RvcC1vbmx5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LWxnKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQteGwgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtYW5kLXRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc21hbGwtbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtcyAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LW1kIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtdXAge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gZGlzYWJsZS1zY3JvbGxiYXIge1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zdGF0aXN0aWNzL2Fub255bW91cy1kYXRhL2Fub255bW91cy1kYXRhLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUVFO0VBQ0UsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQzZKRTtFRHBLQTtJQVNJLGdDQUFBO0VBRUo7QUFDRjtBQURJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQUdOO0FDbUpFO0VEekpFO0lBS0ksa0JBQUE7SUFDQSxxQkFBQTtFQUtOO0FBQ0Y7QUFDQSxnb1FBQWdvUSIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ21peGlucyc7XG5cbjpob3N0IHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2MHB4KTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmFub255bWl6ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAmLWJsb2NrIHtcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIgKiA2cmVtKTtcbiAgICBtYXJnaW46IDIuMDYyNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICBwYWRkaW5nOiAwLjYyNXJlbSAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NTY1NjU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIEBpbmNsdWRlIG1vYmlsZS1vbmx5IHtcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMiAqIDIuMDYyNXJlbSk7XG4gICAgfVxuICAgICYtdGV4dCB7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjM2cmVtO1xuICAgICAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjAyMXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbkBtaXhpbiBmbGV4LWdhcCgkZ2FwLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBtYXJnaW4tdG9wOiAoLSRnYXApO1xuICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgoLSRnYXApLCAkZ2xvYmFsKTtcblxuICA+ICoge1xuICAgIG1hcmdpbi10b3A6ICRnYXA7XG4gICAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoJGdhcCwgJGdsb2JhbCk7XG4gIH1cbn1cblxuQG1peGluIGJhc2UtY29udGFpbmVyKCRjb250ZW50LXdpZHRoKSB7XG4gICRkZXNrdG9wLXBhZGRpbmc6IDJyZW07XG4gIG1heC13aWR0aDogY2FsYygjeyRjb250ZW50LXdpZHRofSArICgjeyRkZXNrdG9wLXBhZGRpbmd9KSk7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDJyZW0pIHtcbiAgICBAaW5jbHVkZSBwYWRkaW5nLWxlZnQoJGRlc2t0b3AtcGFkZGluZywgdHJ1ZSk7XG4gICAgQGluY2x1ZGUgcGFkZGluZy1yaWdodCgkZGVza3RvcC1wYWRkaW5nLCB0cnVlKTtcbiAgfVxufVxuXG5AbWl4aW4gY2VudGVyQWJzb2x1dGVFbGVtZW50IHtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcblxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuQG1peGluIG9ubHktbHRyLWdsb2JhbCB7XG4gIGh0bWw6bm90KFtkaXI9J3J0bCddKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1ydGwtZ2xvYmFsIHtcbiAgaHRtbFtkaXI9J3J0bCddICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LWx0ciB7XG4gIDpob3N0LWNvbnRleHQoaHRtbDpub3QoW2Rpcj0ncnRsJ10pKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1ydGwge1xuICA6aG9zdC1jb250ZXh0KGh0bWxbZGlyPSdydGwnXSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHJ0bC12YWx1ZSgkcHJvcGVydHksICRsdHItdmFsdWUsICRydGwtdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpZiAkZ2xvYmFsID09IHRydWUge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyLWdsb2JhbCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRsdHItdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwtZ2xvYmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHJ0bC12YWx1ZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGx0ci12YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRydGwtdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBydGwtcHJvcGVydHkoJGx0ci1wcm9wZXJ0eSwgJHJ0bC1wcm9wZXJ0eSwgJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaWYgJGdsb2JhbCA9PSB0cnVlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ci1nbG9iYWwge1xuICAgICAgI3skbHRyLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsLWdsb2JhbCB7XG4gICAgICAjeyRydGwtcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ciB7XG4gICAgICAjeyRsdHItcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwge1xuICAgICAgI3skcnRsLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWFyZ2luLWxlZnQoJG1hcmdpbiwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KG1hcmdpbi1sZWZ0LCBtYXJnaW4tcmlnaHQsICRtYXJnaW4sICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gbWFyZ2luLXJpZ2h0KCRtYXJnaW4sICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShtYXJnaW4tcmlnaHQsIG1hcmdpbi1sZWZ0LCAkbWFyZ2luLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmcoJHBhZGRpbmdUb3AsICRwYWRkaW5nUmlnaHQsICRwYWRkaW5nQm90dG9tLCAkcGFkZGluZ0xlZnQsICRnbG9iYWw6IGZhbHNlKSB7XG4gIHBhZGRpbmctdG9wOiAkcGFkZGluZ1RvcDtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctcmlnaHQsIHBhZGRpbmctbGVmdCwgJHBhZGRpbmdSaWdodCwgJGdsb2JhbCk7XG4gIHBhZGRpbmctYm90dG9tOiAkcGFkZGluZ1RvcDtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctbGVmdCwgcGFkZGluZy1yaWdodCwgJHBhZGRpbmdMZWZ0LCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmctbGVmdCgkcGFkZGluZywgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctbGVmdCwgcGFkZGluZy1yaWdodCwgJHBhZGRpbmcsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1yaWdodCgkcGFkZGluZywgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctcmlnaHQsIHBhZGRpbmctbGVmdCwgJHBhZGRpbmcsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gdGV4dC1hbGlnbi1sZWZ0KCRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZSh0ZXh0LWFsaWduLCBsZWZ0LCByaWdodCwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBsZWZ0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGxlZnQsIHJpZ2h0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcmlnaHQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocmlnaHQsIGxlZnQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiB0cmFuc2xhdGVYWSgkdmFsdWVYLCAkdmFsdWVZLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUodHJhbnNmb3JtLCB0cmFuc2xhdGUoJHZhbHVlWCwgJHZhbHVlWSksIHRyYW5zbGF0ZSgtJHZhbHVlWCwgJHZhbHVlWSksICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWxlZnQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWxlZnQsIGJvcmRlci1yaWdodCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1yaWdodCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItcmlnaHQsIGJvcmRlci1sZWZ0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMsIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItdG9wLXJpZ2h0LXJhZGl1cywgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItdG9wLWxlZnQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci10b3AtbGVmdC1yYWRpdXMsIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gZmxvYXQtbGVmdCgkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUoZmxvYXQsIGxlZnQsIHJpZ2h0LCAkZ2xvYmFsOiBmYWxzZSk7XG59XG5cbkBtaXhpbiBmbG9hdC1yaWdodCB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZShmbG9hdCwgcmlnaHQsIGxlZnQsICRnbG9iYWw6IGZhbHNlKTtcbn1cblxuQG1peGluIHNtYWxsLWRlc2t0b3Atb25seSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1sZykgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXhsIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLWFuZC10YWJsZXQtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZyAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtYWxsLW1vYmlsZS1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXMgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1tZCAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1kKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbGcpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLXVwIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1kKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGRpc2FibGUtc2Nyb2xsYmFyIHtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 21046:
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/components/charts/bar-stacked-chart/bar-stacked-chart.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarStackedChartComponent": () => (/* binding */ BarStackedChartComponent)
/* harmony export */ });
/* harmony import */ var _app_shared_components_charts_base_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/components/charts/base-chart.component */ 94579);
/* harmony import */ var _app_shared_utils_chart_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/utils/chart.utils */ 71816);
/* harmony import */ var _shared_components_charts_config_defaults_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/charts/config/defaults.config */ 73167);
/* harmony import */ var _shared_components_charts_utils_chart_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components/charts/utils/chart.utils */ 23928);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var _config_bar_stacked_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/bar-stacked.config */ 32592);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/core/services/ui/ui.service */ 21428);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _core_services_filters_filters_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/filters/filters.service */ 86631);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-echarts */ 31548);
/* harmony import */ var _modules_statistics_anonymous_data_anonymous_data_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../modules/statistics/anonymous-data/anonymous-data.component */ 3249);














function BarStackedChartComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("chartInit", function BarStackedChartComponent_div_2_Template_div_chartInit_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.onChartInit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](ctx_r0.heightClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("horizontal", ctx_r0.horizontal);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("options", ctx_r0.chartOption);
  }
}
function BarStackedChartComponent_loop_chart_anonymous_data_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "loop-chart-anonymous-data");
  }
}
class BarStackedChartComponent extends _app_shared_components_charts_base_chart_component__WEBPACK_IMPORTED_MODULE_0__.BaseChartComponent {
  set data(value) {
    if (value?.[0]?.type) {
      value.map(stack => stack.code = stack.type);
    }
    this._data = value;
    this.selectLegendOptionsBasedOnFilters(this.filtersService.userFilters);
    this.data && this.refreshSeries(this.mapToSeries(this.data));
  }
  get data() {
    return this._data;
  }
  constructor(ui, translateService, filtersService) {
    super(ui, _config_bar_stacked_config__WEBPACK_IMPORTED_MODULE_5__.chartConfig, filtersService);
    this.ui = ui;
    this.translateService = translateService;
    this.filtersService = filtersService;
    this.horizontal = false;
    this.title$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
    this.unit = 'stories';
    this.labelSettings = this.ui.mobileView ? {
      fontSize: 10,
      lineHeight: 15
    } : {
      fontSize: 14,
      lineHeight: 20
    };
    this.barDefaults = {
      type: 'bar',
      barGap: '4%',
      barCategoryGap: this.ui.mobileView ? '3' : '20'
    };
    this.chartId = Math.floor(1000 + Math.random() * 9000);
  }
  getShorterStackName(stackName) {
    const words = stackName.split(' ');
    const shorterWords = [];
    words.forEach(word => {
      let shorterWord = word;
      const wordLengthPx = (0,_app_shared_utils_chart_utils__WEBPACK_IMPORTED_MODULE_1__.getTextWidth)(word, 'normal 10px Noto Sans');
      const averageLetterLengthPx = wordLengthPx / word.length;
      const maxLetterCapacity = Math.trunc(this.labelWidth / averageLetterLengthPx) - 2;
      if (word.length > maxLetterCapacity) {
        shorterWord = word.slice(0, maxLetterCapacity) + '.';
      }
      shorterWords.push(shorterWord);
    });
    return shorterWords.join(' ');
  }
  onChartInit($event) {
    this.setTitle();
    this.resizeObservable$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.fromEvent)(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.subscribe(evt => {
      this.echartsInstance.updateLabelLayout();
      this.resizeLabels();
      this.setLabelWidth();
    });
    super.onChartInit($event);
    this.chartDefaultOption.color = this.data[0].isAnonymousData ? _shared_components_charts_config_defaults_config__WEBPACK_IMPORTED_MODULE_2__.colorsSad : this.settings.colorPalette;
    this.echartsInstance?.on('mouseover', e => {
      this.echartsInstance.dispatchAction({
        type: 'highlight',
        seriesIndex: e.seriesIndex,
        dataIndex: e.dataIndex
      });
      this.echartsInstance?.setOption({
        xAxis: {
          axisLabel: {
            rich: {
              [e.name]: {
                ...this.labelSettings,
                fontWeight: 600,
                color: '#1a1a1a'
              }
            }
          }
        }
      }, {
        lazyUpdate: true,
        silent: true
      });
    });
    this.echartsInstance.on('mouseout', e => {
      this.echartsInstance?.setOption({
        xAxis: {
          axisLabel: {
            rich: {
              [e.name]: {
                ...this.labelSettings,
                fontWeight: 400,
                color: '#1A1A1A'
              }
            }
          }
        }
      }, {
        lazyUpdate: true,
        silent: true
      });
    });
    this.setLabelWidth();
  }
  mapToSeries(data) {
    const series = [];
    const barStyle = {
      borderRadius: [4, 4, 0, 0],
      borderWidth: 0.5,
      borderColor: 'white'
    };
    let isCalculated = {};
    let stackValue = {};
    let lastSelected = {};
    data.forEach((v, i) => {
      const entity = {
        ...this.barDefaults,
        stack: 'all',
        name: v.code,
        data: v.values.map(value => ({
          value,
          itemStyle: {
            ...barStyle,
            borderColor: !!value ? barStyle.borderColor : 'transparent',
            borderRadius: 0
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
          }
        })),
        label: {
          show: true,
          position: 'top',
          formatter: params => {
            if (!this.echartsInstance) {
              return;
            }
            const selectedCategories = this.echartsInstance.getOption()?.legend[0].selected;
            selectedCategories.closedCases = undefined;
            if (Object.getOwnPropertyNames(lastSelected).length > 0 && Object.getOwnPropertyNames(selectedCategories).length > 0 && JSON.stringify(lastSelected) !== JSON.stringify(selectedCategories)) {
              isCalculated = {};
              stackValue = {};
              setTimeout(() => this.echartsInstance.resize(), 0);
            }
            selectedCategories[params.seriesName] === true && (0,_shared_components_charts_utils_chart_utils__WEBPACK_IMPORTED_MODULE_3__.addValueToDataIndexSum)(stackValue, isCalculated, params);
            lastSelected = selectedCategories;
            const onlySelectedCategories = Object.entries(selectedCategories).filter(category => !!category[1]);
            const lastSelectedCategoryObject = onlySelectedCategories[onlySelectedCategories?.length - 1];
            if (lastSelectedCategoryObject) {
              return lastSelectedCategoryObject[0] === params.seriesName ? stackValue[params.dataIndex] : '';
            }
            return '';
          },
          color: '#31135e',
          fontWeight: 600
        }
      };
      series.push(entity);
    });
    (0,_app_shared_utils_chart_utils__WEBPACK_IMPORTED_MODULE_1__.roundTopItems)(data, series, barStyle.borderRadius);
    return series;
  }
  setup() {
    const xAxisOptions = {
      ...(this.settings.xAxis || {
        showAxis: true,
        showLabels: true,
        showPointer: true,
        showPointerLabel: false
      })
    };
    const options = {
      xAxis: {
        show: xAxisOptions.showAxis,
        axisLabel: {
          show: xAxisOptions.showLabels,
          interval: 0,
          lineHeight: this.ui.mobileView ? 15 : 24,
          overflow: 'break',
          ellipsis: '.',
          lineOverflow: 'truncate',
          rich: {},
          formatter: value => {
            return this.formatLabelValue(this.getStackName(value), value);
          }
        },
        axisPointer: {
          show: xAxisOptions.showPointer,
          triggerTooltip: true,
          type: 'none',
          animation: false
        },
        data: this.settings.stacks
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
            y: size.viewSize[1] - (size.viewSize[1] - rect.y) - 50
          } : {
            x: point[0] - size.contentSize[0] / 2,
            y: 0
          };
          const items = this.data[0].values.length;
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
          if (this.ui.mobileView && !Array.isArray(params)) {
            const item = params;
            params = [];
            params.push(item);
          }
          const index = Array.isArray(params) ? params[0]?.dataIndex : params.dataIndex;
          const items = this.data[0].values.length;
          const extraClass = index > items - 3 ? 'tooltip--right' : index < 2 ? 'tooltip--left' : '';
          let content = `<div class="stats-tooltip ${extraClass}">
            <div><span class="axis-label ${Array.isArray(params) ? 'hide-mobile' : ''}">${this.getStackName(params[0]?.name || params?.name)}</span></div><div>`;
          if (Array.isArray(params)) {
            params.forEach(p => {
              content += p.value !== null ? `<p><span class="content"><span>${this.getCategoryName(p.seriesName)}</span><span>${p.value} ${this.translateService.instant(`global.unitsLong.${this.unit}`)}</span></span></p>` : '';
            });
          } else {
            content += params.value !== null ? `<p><span class="content"><span>${this.getCategoryName(params.seriesName)}</span><span>${params.value} ${this.translateService.instant(`global.unitsLong.${this.unit}`)}</span></span></p>` : '';
          }
          content += '</div></div>';
          return content;
        }
      },
      series: [...this.mapToSeries(this.data)],
      aria: {
        decal: {
          show: !!this.settings.decals,
          decals: this.settings.decals
        }
      }
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
          top: '5%',
          width: '90%',
          left: '0%',
          right: '5%'
        },
        legend: {
          left: '0',
          bottom: '0',
          textStyle: {
            fontSize: 12
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
              show: false,
              margin: 7,
              fontSize: 10,
              fontWeight: 600,
              padding: [0, 2, 0, 2]
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
          left: '-20',
          width: '100%',
          top: '15%'
        },
        legend: {
          left: '0%',
          top: 0,
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
              show: false,
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
    return this.translateService.instant(`${this.settings.categoryTranslationPrefix}${name}`);
  }
  getStackName(name) {
    return this.translateService.instant(`${this.settings.stackTranslationPrefix}${name}`);
  }
  formatLabelValue(value, extraCSS) {
    const capitalizeFirstLetter = name => name[0].toUpperCase() + name.slice(1);
    if (this.ui.mobileView) {
      value = this.getShorterStackName(value);
      if (value.length > 20 && this.heightClass !== 'very-high') {
        this.heightClass = 'high';
      }
      if (value.split(' ').length > 5) {
        this.heightClass = 'very-high';
      }
    }
    extraCSS = extraCSS.replace(/\./g, '');
    return extraCSS ? `{${extraCSS}|${capitalizeFirstLetter(value)}}` : capitalizeFirstLetter(value);
  }
  getStacksValues() {
    const stacksValues = [];
    this.data[0]?.values.forEach(_ => stacksValues.push(0));
    this.data?.forEach(stack => stack.values.forEach((value, index) => stacksValues[index] += value));
    return stacksValues;
  }
  setLabelWidth() {
    const chartWidth = this.echartsInstance.getWidth();
    const numberOfStacks = this.settings.stacks.length;
    const numberOfGaps = numberOfStacks - 1;
    const gapWidthInPercentage = 3;
    const gapsWidth = chartWidth * (numberOfGaps * gapWidthInPercentage / 100);
    const stacksWidth = chartWidth - gapsWidth;
    const stackWidth = stacksWidth / numberOfStacks - 2;
    this.labelWidth = stackWidth;
    const config = {
      xAxis: {
        axisLabel: {
          width: stackWidth
        }
      }
    };
    setTimeout(() => {
      this.echartsInstance?.setOption(config, {
        lazyUpdate: true,
        silent: true
      });
    }, 0);
  }
  resizeLabels() {
    const settings = {
      xAxis: {
        axisLabel: {
          ...this.labelSettings
        }
      }
    };
    this.echartsInstance?.setOption(settings, {
      lazyUpdate: true,
      silent: true
    });
  }
  ngOnDestroy() {
    this.resizeSubscription$?.unsubscribe();
    super.ngOnDestroy();
  }
  setTitle() {
    const translatedTitle = this.translateService.instant(this.settings?.title);
    this.chartValuesSum$.subscribe(value => {
      value = value || this.chartValuesSum$.getValue();
      this.title$.next(translatedTitle.replace('{{value}}', value ? value : ''));
    });
  }
  static #_ = this.ɵfac = function BarStackedChartComponent_Factory(t) {
    return new (t || BarStackedChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_6__.UIService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_filters_filters_service__WEBPACK_IMPORTED_MODULE_7__.FiltersService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: BarStackedChartComponent,
    selectors: [["loop-chart-bar-stacked"]],
    inputs: {
      data: "data",
      settings: "settings",
      unit: "unit"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]],
    decls: 4,
    vars: 5,
    consts: [[1, "chart-subtitle", 3, "innerHTML"], ["echarts", "", "class", "base-chart", 3, "options", "class", "horizontal", "chartInit", 4, "ngIf"], [4, "ngIf"], ["echarts", "", 1, "base-chart", 3, "options", "chartInit"]],
    template: function BarStackedChartComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, BarStackedChartComponent_div_2_Template, 1, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, BarStackedChartComponent_loop_chart_anonymous_data_3_Template, 1, 0, "loop-chart-anonymous-data", 2);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 3, ctx.title$), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.chartOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.data == null ? null : ctx.data[0] == null ? null : ctx.data[0].isAnonymousData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, ngx_echarts__WEBPACK_IMPORTED_MODULE_14__.NgxEchartsDirective, _modules_statistics_anonymous_data_anonymous_data_component__WEBPACK_IMPORTED_MODULE_8__.AnonymousDataComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe],
    styles: [".base-chart[_ngcontent-%COMP%] {\n  height: 370px;\n}\n@media (max-width: 767.9px) {\n  .base-chart[_ngcontent-%COMP%] {\n    height: 350px;\n  }\n  .base-chart.high[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n}\n@media screen and (max-width: 767.9px) and (max-width: 340px) {\n  .base-chart.high[_ngcontent-%COMP%] {\n    height: 440px;\n  }\n}\n@media (max-width: 767.9px) {\n  .base-chart.very-high[_ngcontent-%COMP%] {\n    height: 420px;\n  }\n}\n@media screen and (max-width: 767.9px) and (max-width: 340px) {\n  .base-chart.very-high[_ngcontent-%COMP%] {\n    height: 460px;\n  }\n}\n.base-chart.horizontal[_ngcontent-%COMP%] {\n  height: 320px;\n}\n@media (min-width: 768px) {\n  .base-chart.horizontal[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhci1zdGFja2VkLWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vc3R5bGVzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7QUFERjtBQ3FMRTtFRHJMRjtJQUdJLGFBQUE7RUFDRjtFQUFFO0lBQ0UsYUFBQTtFQUVKO0FBQ0Y7QUFGTTtFQUZGO0lBR0ksYUFBQTtFQUtOO0FBQ0Y7QUN3S0U7RUQzS0U7SUFDRSxhQUFBO0VBTUo7QUFDRjtBQU5NO0VBRkY7SUFHSSxhQUFBO0VBU047QUFDRjtBQUxFO0VBQ0UsYUFBQTtBQU9KO0FDdUtFO0VEL0tBO0lBSUksYUFBQTtFQVFKO0FBQ0YiLCJmaWxlIjoiYmFyLXN0YWNrZWQtY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdtaXhpbnMnO1xuXG4uYmFzZS1jaGFydCB7XG4gIGhlaWdodDogMzcwcHg7XG4gIEBpbmNsdWRlIG1vYmlsZS1vbmx5IHtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICYuaGlnaCB7XG4gICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzQwcHgpIHtcbiAgICAgICAgaGVpZ2h0OiA0NDBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi52ZXJ5LWhpZ2gge1xuICAgICAgaGVpZ2h0OiA0MjBweDtcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM0MHB4KSB7XG4gICAgICAgIGhlaWdodDogNDYwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5ob3Jpem9udGFsIHtcbiAgICBoZWlnaHQ6IDMyMHB4O1xuXG4gICAgQGluY2x1ZGUgbW9iaWxlLXVwIHtcbiAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AbWl4aW4gZmxleC1nYXAoJGdhcCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgbWFyZ2luLXRvcDogKC0kZ2FwKTtcbiAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoKC0kZ2FwKSwgJGdsb2JhbCk7XG5cbiAgPiAqIHtcbiAgICBtYXJnaW4tdG9wOiAkZ2FwO1xuICAgIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCRnYXAsICRnbG9iYWwpO1xuICB9XG59XG5cbkBtaXhpbiBiYXNlLWNvbnRhaW5lcigkY29udGVudC13aWR0aCkge1xuICAkZGVza3RvcC1wYWRkaW5nOiAycmVtO1xuICBtYXgtd2lkdGg6IGNhbGMoI3skY29udGVudC13aWR0aH0gKyAoI3skZGVza3RvcC1wYWRkaW5nfSkpO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQycmVtKSB7XG4gICAgQGluY2x1ZGUgcGFkZGluZy1sZWZ0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICAgIEBpbmNsdWRlIHBhZGRpbmctcmlnaHQoJGRlc2t0b3AtcGFkZGluZywgdHJ1ZSk7XG4gIH1cbn1cblxuQG1peGluIGNlbnRlckFic29sdXRlRWxlbWVudCB7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbkBtaXhpbiBvbmx5LWx0ci1nbG9iYWwge1xuICBodG1sOm5vdChbZGlyPSdydGwnXSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsLWdsb2JhbCB7XG4gIGh0bWxbZGlyPSdydGwnXSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1sdHIge1xuICA6aG9zdC1jb250ZXh0KGh0bWw6bm90KFtkaXI9J3J0bCddKSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsIHtcbiAgOmhvc3QtY29udGV4dChodG1sW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBydGwtdmFsdWUoJHByb3BlcnR5LCAkbHRyLXZhbHVlLCAkcnRsLXZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaWYgJGdsb2JhbCA9PSB0cnVlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ci1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsLWdsb2JhbCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRydGwtdmFsdWU7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ciB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRsdHItdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gcnRsLXByb3BlcnR5KCRsdHItcHJvcGVydHksICRydGwtcHJvcGVydHksICR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcnRsLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skbHRyLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hcmdpbi1sZWZ0KCRtYXJnaW4sICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShtYXJnaW4tbGVmdCwgbWFyZ2luLXJpZ2h0LCAkbWFyZ2luLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIG1hcmdpbi1yaWdodCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLXJpZ2h0LCBtYXJnaW4tbGVmdCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nKCRwYWRkaW5nVG9wLCAkcGFkZGluZ1JpZ2h0LCAkcGFkZGluZ0JvdHRvbSwgJHBhZGRpbmdMZWZ0LCAkZ2xvYmFsOiBmYWxzZSkge1xuICBwYWRkaW5nLXRvcDogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nUmlnaHQsICRnbG9iYWwpO1xuICBwYWRkaW5nLWJvdHRvbTogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nTGVmdCwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLWxlZnQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmctcmlnaHQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRleHQtYWxpZ24tbGVmdCgkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUodGV4dC1hbGlnbiwgbGVmdCwgcmlnaHQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShsZWZ0LCByaWdodCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHJpZ2h0LCBsZWZ0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gdHJhbnNsYXRlWFkoJHZhbHVlWCwgJHZhbHVlWSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRyYW5zZm9ybSwgdHJhbnNsYXRlKCR2YWx1ZVgsICR2YWx1ZVkpLCB0cmFuc2xhdGUoLSR2YWx1ZVgsICR2YWx1ZVkpLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1sZWZ0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1sZWZ0LCBib3JkZXItcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItcmlnaHQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXJpZ2h0LCBib3JkZXItbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsIGJvcmRlci10b3AtbGVmdC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItdG9wLWxlZnQtcmFkaXVzLCBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGZsb2F0LWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCBsZWZ0LCByaWdodCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gZmxvYXQtcmlnaHQge1xuICBAaW5jbHVkZSBydGwtdmFsdWUoZmxvYXQsIHJpZ2h0LCBsZWZ0LCAkZ2xvYmFsOiBmYWxzZSk7XG59XG5cbkBtaXhpbiBzbWFsbC1kZXNrdG9wLW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbGcpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC14bCAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1hbmQtdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbGcgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBzbWFsbC1tb2JpbGUtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1zIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbWQgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0YWJsZXQtb25seSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS11cCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBkaXNhYmxlLXNjcm9sbGJhciB7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2hhcnRzL2Jhci1zdGFja2VkLWNoYXJ0L2Jhci1zdGFja2VkLWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtBQURGO0FDcUxFO0VEckxGO0lBR0ksYUFBQTtFQUNGO0VBQUU7SUFDRSxhQUFBO0VBRUo7QUFDRjtBQUZNO0VBRkY7SUFHSSxhQUFBO0VBS047QUFDRjtBQ3dLRTtFRDNLRTtJQUNFLGFBQUE7RUFNSjtBQUNGO0FBTk07RUFGRjtJQUdJLGFBQUE7RUFTTjtBQUNGO0FBTEU7RUFDRSxhQUFBO0FBT0o7QUN1S0U7RUQvS0E7SUFJSSxhQUFBO0VBUUo7QUFDRjtBQUNBLG9nUEFBb2dQIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnbWl4aW5zJztcblxuLmJhc2UtY2hhcnQge1xuICBoZWlnaHQ6IDM3MHB4O1xuICBAaW5jbHVkZSBtb2JpbGUtb25seSB7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgICAmLmhpZ2gge1xuICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM0MHB4KSB7XG4gICAgICAgIGhlaWdodDogNDQwcHg7XG4gICAgICB9XG4gICAgfVxuICAgICYudmVyeS1oaWdoIHtcbiAgICAgIGhlaWdodDogNDIwcHg7XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNDBweCkge1xuICAgICAgICBoZWlnaHQ6IDQ2MHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYuaG9yaXpvbnRhbCB7XG4gICAgaGVpZ2h0OiAzMjBweDtcblxuICAgIEBpbmNsdWRlIG1vYmlsZS11cCB7XG4gICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIGZsZXgtZ2FwKCRnYXAsICRnbG9iYWw6IGZhbHNlKSB7XG4gIG1hcmdpbi10b3A6ICgtJGdhcCk7XG4gIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCgtJGdhcCksICRnbG9iYWwpO1xuXG4gID4gKiB7XG4gICAgbWFyZ2luLXRvcDogJGdhcDtcbiAgICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgkZ2FwLCAkZ2xvYmFsKTtcbiAgfVxufVxuXG5AbWl4aW4gYmFzZS1jb250YWluZXIoJGNvbnRlbnQtd2lkdGgpIHtcbiAgJGRlc2t0b3AtcGFkZGluZzogMnJlbTtcbiAgbWF4LXdpZHRoOiBjYWxjKCN7JGNvbnRlbnQtd2lkdGh9ICsgKCN7JGRlc2t0b3AtcGFkZGluZ30pKTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MnJlbSkge1xuICAgIEBpbmNsdWRlIHBhZGRpbmctbGVmdCgkZGVza3RvcC1wYWRkaW5nLCB0cnVlKTtcbiAgICBAaW5jbHVkZSBwYWRkaW5nLXJpZ2h0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICB9XG59XG5cbkBtaXhpbiBjZW50ZXJBYnNvbHV0ZUVsZW1lbnQge1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5AbWl4aW4gb25seS1sdHItZ2xvYmFsIHtcbiAgaHRtbDpub3QoW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bC1nbG9iYWwge1xuICBodG1sW2Rpcj0ncnRsJ10gJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktbHRyIHtcbiAgOmhvc3QtY29udGV4dChodG1sOm5vdChbZGlyPSdydGwnXSkpICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bCB7XG4gIDpob3N0LWNvbnRleHQoaHRtbFtkaXI9J3J0bCddKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gcnRsLXZhbHVlKCRwcm9wZXJ0eSwgJGx0ci12YWx1ZSwgJHJ0bC12YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGx0ci12YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHJ0bC12YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHJ0bC1wcm9wZXJ0eSgkbHRyLXByb3BlcnR5LCAkcnRsLXByb3BlcnR5LCAkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpZiAkZ2xvYmFsID09IHRydWUge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyLWdsb2JhbCB7XG4gICAgICAjeyRsdHItcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwtZ2xvYmFsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bCB7XG4gICAgICAjeyRydGwtcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXJnaW4tbGVmdCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLWxlZnQsIG1hcmdpbi1yaWdodCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBtYXJnaW4tcmlnaHQoJG1hcmdpbiwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KG1hcmdpbi1yaWdodCwgbWFyZ2luLWxlZnQsICRtYXJnaW4sICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZygkcGFkZGluZ1RvcCwgJHBhZGRpbmdSaWdodCwgJHBhZGRpbmdCb3R0b20sICRwYWRkaW5nTGVmdCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgcGFkZGluZy10b3A6ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZ1JpZ2h0LCAkZ2xvYmFsKTtcbiAgcGFkZGluZy1ib3R0b206ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZ0xlZnQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1sZWZ0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLXJpZ2h0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiB0ZXh0LWFsaWduLWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRleHQtYWxpZ24sIGxlZnQsIHJpZ2h0LCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGxlZnQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobGVmdCwgcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiByaWdodCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShyaWdodCwgbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRyYW5zbGF0ZVhZKCR2YWx1ZVgsICR2YWx1ZVksICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZSh0cmFuc2Zvcm0sIHRyYW5zbGF0ZSgkdmFsdWVYLCAkdmFsdWVZKSwgdHJhbnNsYXRlKC0kdmFsdWVYLCAkdmFsdWVZKSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItbGVmdCwgYm9yZGVyLXJpZ2h0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1yaWdodCwgYm9yZGVyLWxlZnQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCBib3JkZXItdG9wLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtbGVmdC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBmbG9hdC1sZWZ0KCRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZShmbG9hdCwgbGVmdCwgcmlnaHQsICRnbG9iYWw6IGZhbHNlKTtcbn1cblxuQG1peGluIGZsb2F0LXJpZ2h0IHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCByaWdodCwgbGVmdCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gc21hbGwtZGVza3RvcC1vbmx5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LWxnKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQteGwgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtYW5kLXRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc21hbGwtbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtcyAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LW1kIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtdXAge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gZGlzYWJsZS1zY3JvbGxiYXIge1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 23564:
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/charts/bar-stacked-chart/bar-stacked-chart.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarStackedChartModule": () => (/* binding */ BarStackedChartModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-echarts */ 31548);
/* harmony import */ var _modules_statistics_anonymous_data_anonymous_data_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../modules/statistics/anonymous-data/anonymous-data.component */ 3249);
/* harmony import */ var _bar_stacked_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bar-stacked-chart.component */ 21046);
/* harmony import */ var _horizontal_bar_stacked_horizontal_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./horizontal/bar-stacked-horizontal-chart.component */ 15650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);







class BarStackedChartModule {
  static #_ = this.ɵfac = function BarStackedChartModule_Factory(t) {
    return new (t || BarStackedChartModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: BarStackedChartModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_5__.NgxEchartsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BarStackedChartModule, {
    declarations: [_bar_stacked_chart_component__WEBPACK_IMPORTED_MODULE_1__.BarStackedChartComponent, _horizontal_bar_stacked_horizontal_chart_component__WEBPACK_IMPORTED_MODULE_2__.BarStackedHorizontalChartComponent, _modules_statistics_anonymous_data_anonymous_data_component__WEBPACK_IMPORTED_MODULE_0__.AnonymousDataComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_5__.NgxEchartsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule],
    exports: [_bar_stacked_chart_component__WEBPACK_IMPORTED_MODULE_1__.BarStackedChartComponent, _horizontal_bar_stacked_horizontal_chart_component__WEBPACK_IMPORTED_MODULE_2__.BarStackedHorizontalChartComponent]
  });
})();

/***/ }),

/***/ 15650:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/shared/components/charts/bar-stacked-chart/horizontal/bar-stacked-horizontal-chart.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarStackedHorizontalChartComponent": () => (/* binding */ BarStackedHorizontalChartComponent)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_chart_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/chart.utils */ 71816);
/* harmony import */ var _config_defaults_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/defaults.config */ 73167);
/* harmony import */ var _bar_stacked_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bar-stacked-chart.component */ 21046);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-echarts */ 31548);
/* harmony import */ var _modules_statistics_anonymous_data_anonymous_data_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../modules/statistics/anonymous-data/anonymous-data.component */ 3249);








function BarStackedHorizontalChartComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("chartInit", function BarStackedHorizontalChartComponent_div_2_Template_div_chartInit_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.onChartInit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r0.heightClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("horizontal", ctx_r0.horizontal);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx_r0.chartOption);
  }
}
function BarStackedHorizontalChartComponent_loop_chart_anonymous_data_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "loop-chart-anonymous-data");
  }
}
class BarStackedHorizontalChartComponent extends _bar_stacked_chart_component__WEBPACK_IMPORTED_MODULE_3__.BarStackedChartComponent {
  constructor() {
    super(...arguments);
    this.horizontal = true;
    this.labelSetup = this.ui.mobileView ? {
      fontSize: 10,
      lineHeight: 15
    } : {
      fontSize: 14,
      lineHeight: 20
    };
  }
  onChartInit($event) {
    super.onChartInit($event);
    this.echartsInstance?.on('mouseover', e => {
      this.echartsInstance.dispatchAction({
        type: 'highlight',
        seriesIndex: e.seriesIndex,
        dataIndex: e.dataIndex
      });
      const normalizedName = e.name.replace(/\./g, '');
      this.echartsInstance?.setOption({
        yAxis: {
          axisLabel: {
            rich: {
              [normalizedName]: {
                ...this.labelSetup,
                fontWeight: 600,
                color: '#1a1a1a'
              }
            }
          }
        }
      }, {
        lazyUpdate: true,
        silent: true
      });
    });
    this.chartDefaultOption.color = this.data[0].isAnonymousData ? _config_defaults_config__WEBPACK_IMPORTED_MODULE_2__.colorsSad : this.settings.colorPalette;
    this.echartsInstance.on('mouseout', e => {
      const normalizedName = e.name.replace(/\./g, '');
      this.echartsInstance?.setOption({
        yAxis: {
          axisLabel: {
            rich: {
              [normalizedName]: {
                ...this.labelSetup,
                fontWeight: 400,
                color: '#656565'
              }
            }
          }
        }
      }, {
        lazyUpdate: true,
        silent: true
      });
    });
  }
  setup() {
    super.setup();
    const yAxisOptions = {
      ...(this.settings.yAxis || {
        showAxis: true,
        showLabels: true,
        showPointer: true,
        showPointerLabel: true
      })
    };
    const options = {
      grid: {
        left: '0%'
      },
      yAxis: {
        type: 'category',
        show: yAxisOptions.showAxis,
        inverse: true,
        axisLabel: {
          show: yAxisOptions.showLabels,
          interval: 0,
          width: 110,
          fontSize: 14,
          lineHeight: 20,
          overflow: 'break',
          ellipsis: '.',
          lineOverflow: 'truncate',
          rich: {
            dupa: {
              color: 'red'
            }
          },
          formatter: value => {
            return this.formatLabelValue(this.getStackName(value), value);
          }
        },
        axisPointer: {
          show: yAxisOptions.showPointer,
          triggerTooltip: true,
          type: 'none',
          animation: false,
          label: {
            show: false
          }
        },
        axisTick: {
          show: false
        },
        nameTextStyle: {
          inverse: true
        },
        data: this.settings.stacks
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
            y: point[1] - size.contentSize[1] - 50
          };
          x = x + size.contentSize[0] / 3;
          return [x, y];
        },
        formatter: params => {
          if (this.ui.mobileView && !Array.isArray(params)) {
            const item = params;
            params = [];
            params.push(item);
          }
          const extraClass = 'tooltip--left';
          let content = `<div class='stats-tooltip ${extraClass}'>
            <div><span class='axis-label ${Array.isArray(params) ? 'hide-mobile' : ''}'>${this.getStackName(params[0]?.name || params?.name)}</span></div><div>`;
          if (Array.isArray(params)) {
            params.forEach(p => {
              content += p.value !== null ? `<p><span class='content'><span>${this.getCategoryName(p.seriesName)}</span><span>${p.value} ${this.translateService.instant(`global.unitsLong.${this.unit}`)}</span></span></p>` : '';
            });
          } else {
            content += params.value !== null ? `<p><span class='content'><span>${this.getCategoryName(params.seriesName)}</span><span>${params.value} ${this.translateService.instant(`global.unitsLong.${this.unit}`)}</span></span></p>` : '';
          }
          content += '</div></div>';
          return content;
        }
      }
    };
    const newOptions = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.merge)(this.chartDefaultOption, options);
    newOptions.xAxis = {
      type: 'value',
      show: false,
      max: value => value.max + 0.2 * value.max,
      splitLine: {
        show: false
      }
    };
    this.chartOption = newOptions;
    this.echartsInstance && this.reprocessChartOptions();
  }
  reprocessChartOptions() {
    super.reprocessChartOptions();
    let options = {};
    options = {
      grid: {
        top: this.ui.mobileView ? '0' : '20%',
        left: '10%',
        width: '90%',
        bottom: this.ui.mobileView ? '30%' : '0',
        containLabel: true,
        height: 'auto'
      }
    };
    if (this.ui.mobileView) {
      options = {
        ...options,
        yAxis: {
          offset: 20,
          axisLabel: {
            fontSize: 10
          },
          splitLine: {
            show: false
          }
        },
        xAxis: {
          show: true,
          axisLine: {
            show: false
          },
          splitLine: {
            show: true
          },
          axisLabel: {
            fontSize: 10
          }
        }
      };
    } else {
      options = {
        ...options,
        yAxis: {
          offset: 20,
          show: true,
          splitLine: {
            show: false
          }
        },
        xAxis: {
          show: false
        }
      };
    }
    setTimeout(() => {
      this.echartsInstance?.setOption(options, {
        lazyUpdate: true,
        silent: true
      });
      this.echartsInstanceWithOptionReady$.next(null);
      this.refreshSeries(this.mapToSeries(this.data));
    }, 1);
  }
  mapToSeries(data) {
    const series = super.mapToSeries(data);
    series.forEach(s => {
      s.label.position = 'right';
      s.barWidth = this.ui.mobileView ? 34 : 56;
      s.barCategoryGap = this.ui.mobileView ? '10' : '19';
      s.barGap = this.ui.mobileView ? '10' : '19';
    });
    (0,_utils_chart_utils__WEBPACK_IMPORTED_MODULE_1__.roundTopItems)(data, series, [0, 4, 4, 0]);
    return series;
  }
  static #_ = this.ɵfac = /*@__PURE__*/function () {
    let ɵBarStackedHorizontalChartComponent_BaseFactory;
    return function BarStackedHorizontalChartComponent_Factory(t) {
      return (ɵBarStackedHorizontalChartComponent_BaseFactory || (ɵBarStackedHorizontalChartComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](BarStackedHorizontalChartComponent)))(t || BarStackedHorizontalChartComponent);
    };
  }();
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: BarStackedHorizontalChartComponent,
    selectors: [["loop-chart-bar-stacked-horizontal"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
    decls: 4,
    vars: 5,
    consts: [[1, "chart-subtitle", 3, "innerHTML"], ["echarts", "", "class", "base-chart", 3, "options", "class", "horizontal", "chartInit", 4, "ngIf"], [4, "ngIf"], ["echarts", "", 1, "base-chart", 3, "options", "chartInit"]],
    template: function BarStackedHorizontalChartComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, BarStackedHorizontalChartComponent_div_2_Template, 1, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, BarStackedHorizontalChartComponent_loop_chart_anonymous_data_3_Template, 1, 0, "loop-chart-anonymous-data", 2);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 3, ctx.title$), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.chartOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.data == null ? null : ctx.data[0] == null ? null : ctx.data[0].isAnonymousData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, ngx_echarts__WEBPACK_IMPORTED_MODULE_7__.NgxEchartsDirective, _modules_statistics_anonymous_data_anonymous_data_component__WEBPACK_IMPORTED_MODULE_4__.AnonymousDataComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
    styles: [".base-chart[_ngcontent-%COMP%] {\n  height: 370px;\n}\n@media (max-width: 767.9px) {\n  .base-chart[_ngcontent-%COMP%] {\n    height: 350px;\n  }\n  .base-chart.high[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n}\n@media screen and (max-width: 767.9px) and (max-width: 340px) {\n  .base-chart.high[_ngcontent-%COMP%] {\n    height: 440px;\n  }\n}\n@media (max-width: 767.9px) {\n  .base-chart.very-high[_ngcontent-%COMP%] {\n    height: 420px;\n  }\n}\n@media screen and (max-width: 767.9px) and (max-width: 340px) {\n  .base-chart.very-high[_ngcontent-%COMP%] {\n    height: 460px;\n  }\n}\n.base-chart.horizontal[_ngcontent-%COMP%] {\n  height: 320px;\n}\n@media (min-width: 768px) {\n  .base-chart.horizontal[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhci1zdGFja2VkLWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vc3R5bGVzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7QUFERjtBQ3FMRTtFRHJMRjtJQUdJLGFBQUE7RUFDRjtFQUFFO0lBQ0UsYUFBQTtFQUVKO0FBQ0Y7QUFGTTtFQUZGO0lBR0ksYUFBQTtFQUtOO0FBQ0Y7QUN3S0U7RUQzS0U7SUFDRSxhQUFBO0VBTUo7QUFDRjtBQU5NO0VBRkY7SUFHSSxhQUFBO0VBU047QUFDRjtBQUxFO0VBQ0UsYUFBQTtBQU9KO0FDdUtFO0VEL0tBO0lBSUksYUFBQTtFQVFKO0FBQ0YiLCJmaWxlIjoiYmFyLXN0YWNrZWQtY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdtaXhpbnMnO1xuXG4uYmFzZS1jaGFydCB7XG4gIGhlaWdodDogMzcwcHg7XG4gIEBpbmNsdWRlIG1vYmlsZS1vbmx5IHtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICYuaGlnaCB7XG4gICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzQwcHgpIHtcbiAgICAgICAgaGVpZ2h0OiA0NDBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi52ZXJ5LWhpZ2gge1xuICAgICAgaGVpZ2h0OiA0MjBweDtcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM0MHB4KSB7XG4gICAgICAgIGhlaWdodDogNDYwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5ob3Jpem9udGFsIHtcbiAgICBoZWlnaHQ6IDMyMHB4O1xuXG4gICAgQGluY2x1ZGUgbW9iaWxlLXVwIHtcbiAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AbWl4aW4gZmxleC1nYXAoJGdhcCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgbWFyZ2luLXRvcDogKC0kZ2FwKTtcbiAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoKC0kZ2FwKSwgJGdsb2JhbCk7XG5cbiAgPiAqIHtcbiAgICBtYXJnaW4tdG9wOiAkZ2FwO1xuICAgIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCRnYXAsICRnbG9iYWwpO1xuICB9XG59XG5cbkBtaXhpbiBiYXNlLWNvbnRhaW5lcigkY29udGVudC13aWR0aCkge1xuICAkZGVza3RvcC1wYWRkaW5nOiAycmVtO1xuICBtYXgtd2lkdGg6IGNhbGMoI3skY29udGVudC13aWR0aH0gKyAoI3skZGVza3RvcC1wYWRkaW5nfSkpO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQycmVtKSB7XG4gICAgQGluY2x1ZGUgcGFkZGluZy1sZWZ0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICAgIEBpbmNsdWRlIHBhZGRpbmctcmlnaHQoJGRlc2t0b3AtcGFkZGluZywgdHJ1ZSk7XG4gIH1cbn1cblxuQG1peGluIGNlbnRlckFic29sdXRlRWxlbWVudCB7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbkBtaXhpbiBvbmx5LWx0ci1nbG9iYWwge1xuICBodG1sOm5vdChbZGlyPSdydGwnXSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsLWdsb2JhbCB7XG4gIGh0bWxbZGlyPSdydGwnXSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1sdHIge1xuICA6aG9zdC1jb250ZXh0KGh0bWw6bm90KFtkaXI9J3J0bCddKSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsIHtcbiAgOmhvc3QtY29udGV4dChodG1sW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBydGwtdmFsdWUoJHByb3BlcnR5LCAkbHRyLXZhbHVlLCAkcnRsLXZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaWYgJGdsb2JhbCA9PSB0cnVlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ci1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsLWdsb2JhbCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRydGwtdmFsdWU7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ciB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRsdHItdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gcnRsLXByb3BlcnR5KCRsdHItcHJvcGVydHksICRydGwtcHJvcGVydHksICR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcnRsLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skbHRyLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hcmdpbi1sZWZ0KCRtYXJnaW4sICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShtYXJnaW4tbGVmdCwgbWFyZ2luLXJpZ2h0LCAkbWFyZ2luLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIG1hcmdpbi1yaWdodCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLXJpZ2h0LCBtYXJnaW4tbGVmdCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nKCRwYWRkaW5nVG9wLCAkcGFkZGluZ1JpZ2h0LCAkcGFkZGluZ0JvdHRvbSwgJHBhZGRpbmdMZWZ0LCAkZ2xvYmFsOiBmYWxzZSkge1xuICBwYWRkaW5nLXRvcDogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nUmlnaHQsICRnbG9iYWwpO1xuICBwYWRkaW5nLWJvdHRvbTogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nTGVmdCwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLWxlZnQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmctcmlnaHQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRleHQtYWxpZ24tbGVmdCgkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUodGV4dC1hbGlnbiwgbGVmdCwgcmlnaHQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShsZWZ0LCByaWdodCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHJpZ2h0LCBsZWZ0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gdHJhbnNsYXRlWFkoJHZhbHVlWCwgJHZhbHVlWSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRyYW5zZm9ybSwgdHJhbnNsYXRlKCR2YWx1ZVgsICR2YWx1ZVkpLCB0cmFuc2xhdGUoLSR2YWx1ZVgsICR2YWx1ZVkpLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1sZWZ0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1sZWZ0LCBib3JkZXItcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItcmlnaHQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXJpZ2h0LCBib3JkZXItbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsIGJvcmRlci10b3AtbGVmdC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItdG9wLWxlZnQtcmFkaXVzLCBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGZsb2F0LWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCBsZWZ0LCByaWdodCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gZmxvYXQtcmlnaHQge1xuICBAaW5jbHVkZSBydGwtdmFsdWUoZmxvYXQsIHJpZ2h0LCBsZWZ0LCAkZ2xvYmFsOiBmYWxzZSk7XG59XG5cbkBtaXhpbiBzbWFsbC1kZXNrdG9wLW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbGcpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC14bCAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1hbmQtdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbGcgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBzbWFsbC1tb2JpbGUtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1zIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbWQgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0YWJsZXQtb25seSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS11cCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBkaXNhYmxlLXNjcm9sbGJhciB7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2hhcnRzL2Jhci1zdGFja2VkLWNoYXJ0L2Jhci1zdGFja2VkLWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtBQURGO0FDcUxFO0VEckxGO0lBR0ksYUFBQTtFQUNGO0VBQUU7SUFDRSxhQUFBO0VBRUo7QUFDRjtBQUZNO0VBRkY7SUFHSSxhQUFBO0VBS047QUFDRjtBQ3dLRTtFRDNLRTtJQUNFLGFBQUE7RUFNSjtBQUNGO0FBTk07RUFGRjtJQUdJLGFBQUE7RUFTTjtBQUNGO0FBTEU7RUFDRSxhQUFBO0FBT0o7QUN1S0U7RUQvS0E7SUFJSSxhQUFBO0VBUUo7QUFDRjtBQUNBLG9nUEFBb2dQIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnbWl4aW5zJztcblxuLmJhc2UtY2hhcnQge1xuICBoZWlnaHQ6IDM3MHB4O1xuICBAaW5jbHVkZSBtb2JpbGUtb25seSB7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgICAmLmhpZ2gge1xuICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM0MHB4KSB7XG4gICAgICAgIGhlaWdodDogNDQwcHg7XG4gICAgICB9XG4gICAgfVxuICAgICYudmVyeS1oaWdoIHtcbiAgICAgIGhlaWdodDogNDIwcHg7XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNDBweCkge1xuICAgICAgICBoZWlnaHQ6IDQ2MHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYuaG9yaXpvbnRhbCB7XG4gICAgaGVpZ2h0OiAzMjBweDtcblxuICAgIEBpbmNsdWRlIG1vYmlsZS11cCB7XG4gICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIGZsZXgtZ2FwKCRnYXAsICRnbG9iYWw6IGZhbHNlKSB7XG4gIG1hcmdpbi10b3A6ICgtJGdhcCk7XG4gIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCgtJGdhcCksICRnbG9iYWwpO1xuXG4gID4gKiB7XG4gICAgbWFyZ2luLXRvcDogJGdhcDtcbiAgICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgkZ2FwLCAkZ2xvYmFsKTtcbiAgfVxufVxuXG5AbWl4aW4gYmFzZS1jb250YWluZXIoJGNvbnRlbnQtd2lkdGgpIHtcbiAgJGRlc2t0b3AtcGFkZGluZzogMnJlbTtcbiAgbWF4LXdpZHRoOiBjYWxjKCN7JGNvbnRlbnQtd2lkdGh9ICsgKCN7JGRlc2t0b3AtcGFkZGluZ30pKTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MnJlbSkge1xuICAgIEBpbmNsdWRlIHBhZGRpbmctbGVmdCgkZGVza3RvcC1wYWRkaW5nLCB0cnVlKTtcbiAgICBAaW5jbHVkZSBwYWRkaW5nLXJpZ2h0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICB9XG59XG5cbkBtaXhpbiBjZW50ZXJBYnNvbHV0ZUVsZW1lbnQge1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5AbWl4aW4gb25seS1sdHItZ2xvYmFsIHtcbiAgaHRtbDpub3QoW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bC1nbG9iYWwge1xuICBodG1sW2Rpcj0ncnRsJ10gJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktbHRyIHtcbiAgOmhvc3QtY29udGV4dChodG1sOm5vdChbZGlyPSdydGwnXSkpICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bCB7XG4gIDpob3N0LWNvbnRleHQoaHRtbFtkaXI9J3J0bCddKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gcnRsLXZhbHVlKCRwcm9wZXJ0eSwgJGx0ci12YWx1ZSwgJHJ0bC12YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGx0ci12YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHJ0bC12YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHJ0bC1wcm9wZXJ0eSgkbHRyLXByb3BlcnR5LCAkcnRsLXByb3BlcnR5LCAkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpZiAkZ2xvYmFsID09IHRydWUge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyLWdsb2JhbCB7XG4gICAgICAjeyRsdHItcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwtZ2xvYmFsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bCB7XG4gICAgICAjeyRydGwtcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXJnaW4tbGVmdCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLWxlZnQsIG1hcmdpbi1yaWdodCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBtYXJnaW4tcmlnaHQoJG1hcmdpbiwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KG1hcmdpbi1yaWdodCwgbWFyZ2luLWxlZnQsICRtYXJnaW4sICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZygkcGFkZGluZ1RvcCwgJHBhZGRpbmdSaWdodCwgJHBhZGRpbmdCb3R0b20sICRwYWRkaW5nTGVmdCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgcGFkZGluZy10b3A6ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZ1JpZ2h0LCAkZ2xvYmFsKTtcbiAgcGFkZGluZy1ib3R0b206ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZ0xlZnQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1sZWZ0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLXJpZ2h0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiB0ZXh0LWFsaWduLWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRleHQtYWxpZ24sIGxlZnQsIHJpZ2h0LCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGxlZnQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobGVmdCwgcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiByaWdodCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShyaWdodCwgbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRyYW5zbGF0ZVhZKCR2YWx1ZVgsICR2YWx1ZVksICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZSh0cmFuc2Zvcm0sIHRyYW5zbGF0ZSgkdmFsdWVYLCAkdmFsdWVZKSwgdHJhbnNsYXRlKC0kdmFsdWVYLCAkdmFsdWVZKSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItbGVmdCwgYm9yZGVyLXJpZ2h0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1yaWdodCwgYm9yZGVyLWxlZnQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCBib3JkZXItdG9wLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtbGVmdC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBmbG9hdC1sZWZ0KCRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZShmbG9hdCwgbGVmdCwgcmlnaHQsICRnbG9iYWw6IGZhbHNlKTtcbn1cblxuQG1peGluIGZsb2F0LXJpZ2h0IHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCByaWdodCwgbGVmdCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gc21hbGwtZGVza3RvcC1vbmx5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LWxnKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQteGwgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtYW5kLXRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc21hbGwtbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtcyAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LW1kIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtdXAge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gZGlzYWJsZS1zY3JvbGxiYXIge1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 94579:
/*!******************************************************************!*\
  !*** ./src/app/shared/components/charts/base-chart.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseChartComponent": () => (/* binding */ BaseChartComponent)
/* harmony export */ });
/* harmony import */ var _shared_types_story_category_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/types/story-category.type */ 98529);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ 70697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/services/ui/ui.service */ 21428);
/* harmony import */ var _core_services_filters_filters_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/filters/filters.service */ 86631);








class BaseChartComponent extends _base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
  get seriesNamesArr() {
    return this.echartsInstance?.getOption()?.series?.map(s => ({
      ...s,
      selected: true
    }));
  }
  constructor(ui, chartDefaultOption, filtersService) {
    super();
    this.ui = ui;
    this.filtersService = filtersService;
    this.chartValuesSum$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
    this.chartDefaultOption = {};
    this.chartOption = null;
    this.echartsInstanceWithOptionReady$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.chartDefaultOption = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(chartDefaultOption);
    this.echartsInstanceWithOptionReady$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe(() => this.selectLegendOptionsBasedOnFilters(this.filtersService.userFilters));
    this.ui.uiClicked$.subscribe(() => this.hideTooltip());
  }
  ngOnChanges(changes) {
    if (changes.data && this._data) {
      this.setup();
    }
  }
  onScroll() {
    this.hideTooltip();
  }
  onWindowResize() {
    this.onResize();
  }
  /**
   * Function called on every window resize.
   * Override/Add code only when really needed to execute something on every resize,
   * otherwise use reproccessChartOptions()
   *
   */
  onResize() {
    if (!this.echartsInstance) {
      return;
    }
    this.echartsInstance.resize();
    // text overflow: break works only when width for title is set...
    // so need to calculate it dynamically
    const options = {
      title: {
        textStyle: {
          width: this.echartsInstance?.getWidth() * 0.9
        }
      }
    };
    setTimeout(() => {
      this.echartsInstance?.setOption(options, {
        lazyUpdate: true,
        silent: true
      });
    }, 1);
  }
  selectLegendOptionsBasedOnFilters(filters) {
    !this._existingSeriesNames && (this._existingSeriesNames = this.seriesNamesArr);
    if (this.echartsInstance) {
      const newStoryTypes = this._existingSeriesNames.reduce((prev, next) => ({
        ...prev,
        [next.name]: next.selected
      }), {});
      if (filters?.type) {
        const selectedTypes = filters.type.map(t => _shared_types_story_category_type__WEBPACK_IMPORTED_MODULE_0__.StoryCategoryMapping[t]);
        Object.keys(newStoryTypes).forEach(key => newStoryTypes[key] = this.isStoryTypeOption(key) ? false : this.getSensitiveOrRepliesValue(key));
        selectedTypes.forEach(type => newStoryTypes[type] = true);
      } else {
        this._existingSeriesNames.forEach(seriesName => newStoryTypes[seriesName.name] = true);
      }
      this.echartsInstance?.setOption({
        legend: {
          selected: newStoryTypes,
          animation: false
        }
      }, {
        lazyUpdate: true,
        silent: true
      });
      this.setNewExistingItems();
      this.getChartSum();
    }
  }
  setNewExistingItems() {
    const selectedStoryTypes = this.echartsInstance?.getOption()?.legend[0].selected;
    Object.keys(selectedStoryTypes).forEach(key => {
      const foundExistingSeriesName = this._existingSeriesNames.find(sn => sn.name === key);
      foundExistingSeriesName && (foundExistingSeriesName.selected = selectedStoryTypes[key]);
    });
  }
  getSensitiveOrRepliesValue(key) {
    const foundSeriesName = this._existingSeriesNames.find(sn => sn.name === key);
    if (this._existingSeriesNames.every(sn => sn.selected)) {
      return false;
    } else {
      if (this.lastClickedLegendOption?.name === key) {
        foundSeriesName.selected = this.lastClickedLegendOption.selected;
        return foundSeriesName.selected;
      }
    }
    return foundSeriesName.selected;
  }
  isStoryTypeOption(type) {
    return type !== 'sensitive' && type !== 'comments';
  }
  onChartInit(ecInstance) {
    this.getChartSum();
    this.echartsInstance = ecInstance;
    this.reprocessChartOptions();
    this.onResize();
    this.ui.mobileView$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroyed$)).subscribe(() => this.reprocessChartOptions());
    this.echartsInstance.on('legendselectchanged', params => {
      this.lastClickedLegendOption = {
        name: params.name,
        selected: params.selected[params.name]
      };
      const paramsCopy = {
        name: `${params.name}`,
        selected: Object.assign({}, {
          ...params.selected
        })
      };
      let currentUnselecting = false;
      let itemsSelected = 0;
      let itemsUnselected = 0;
      Object.keys(paramsCopy.selected).forEach(key => {
        if (!!paramsCopy.selected[key]) {
          itemsSelected++;
        } else {
          itemsUnselected++;
        }
        if (key === paramsCopy.name && !paramsCopy.selected[key]) {
          currentUnselecting = true;
        }
      });
      if (itemsSelected === 0) {
        // SELECT ALL
        Object.keys(paramsCopy.selected).forEach(key => {
          paramsCopy.selected[key] = true;
        });
      } else if (itemsUnselected === 1 && currentUnselecting) {
        // SELECT SINGLE ONE
        Object.keys(paramsCopy.selected).forEach(key => {
          paramsCopy.selected[key] = key === paramsCopy.name;
        });
      } else {
        // ADD CURRENT TO SELECTION
        Object.keys(paramsCopy.selected).forEach(key => {
          if (key === paramsCopy.name) {
            paramsCopy.selected[key] = params.selected[key];
          }
        });
      }
      this.echartsInstance?.setOption({
        legend: {
          selected: paramsCopy.selected,
          animation: false
        },
        tooltip: {
          zindex: 7000
        }
      }, {
        lazyUpdate: true,
        silent: true
      });
      this.setChartSelectedCategoriesValuesSum(paramsCopy.selected);
      this.legendselectchanged(paramsCopy.selected);
    });
  }
  /**
   * Method called on echarts legendselectchanged after custom reverse selection logic
   *
   * @param selected new selected object
   */
  legendselectchanged(selected) {
    // TODO
  }
  /**
   * Function is executed on breakpoints.
   * Overrides options for mobile/desktop.
   */
  reprocessChartOptions() {
    if (!this.chartOption) {
      return;
    }
    if (this.ui.mobileView) {} else {}
  }
  /**
   * Function refresh series object in chart
   * @param data series object
   */
  refreshSeries(data) {
    setTimeout(() => this.echartsInstance?.setOption({
      series: [...data]
    }, {
      lazyUpdate: true,
      silent: true
    }), 1);
  }
  ngOnDestroy() {
    this.echartsInstance?.dispose();
    this.echartsInstance = null;
    super.ngOnDestroy();
  }
  hideTooltip() {
    this.echartsInstance?.dispatchAction({
      type: 'hideTip'
    });
  }
  getChartSum() {
    let sum = 0;
    // If data is object with properties (f.e. it has 'gender' and 'age' keys with arrays under them)
    if (!Array.isArray(this._data) && typeof this._data === 'object') {
      Object.keys(this._data).forEach(key => {
        this._data[key].forEach(category => category?.values?.forEach(value => {
          if (!isNaN(value)) {
            sum += value;
          } else {
            return;
          }
        }));
        this.chartValuesSum$.next(sum);
      });
    } else {
      if (this._data.length) {
        this._data.forEach(category => category?.values?.forEach(value => {
          if (!isNaN(value)) {
            sum += value;
          } else {
            return;
          }
        }));
        this.chartValuesSum$.next(sum);
      }
    }
  }
  setChartSelectedCategoriesValuesSum(selected) {
    let chartSelectedSum = 0;
    Object.entries(selected)?.forEach(selected => {
      if (selected[1]) {
        let categorySum = 0;
        if (!Array.isArray(this._data) && typeof this._data === 'object') {
          Object.keys(this._data).some(key => {
            const foundCategory = this._data[key].find(category => category.code === selected[0]);
            if (foundCategory) {
              foundCategory.values.forEach(categoryValue => categorySum += categoryValue);
              chartSelectedSum += categorySum;
              return true;
            }
          });
        } else {
          const foundCategory = this._data.find(category => category.code === selected[0]);
          if (foundCategory) {
            foundCategory.values.forEach(categoryValue => categorySum += categoryValue);
            chartSelectedSum += categorySum;
          }
        }
      }
    });
    this.chartValuesSum$.next(chartSelectedSum);
  }
  static #_ = this.ɵfac = function BaseChartComponent_Factory(t) {
    return new (t || BaseChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_3__.UIService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"]('chartDefaultOption'), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_filters_filters_service__WEBPACK_IMPORTED_MODULE_4__.FiltersService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: BaseChartComponent,
    selectors: [["ng-component"]],
    hostBindings: function BaseChartComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("scroll", function BaseChartComponent_scroll_HostBindingHandler($event) {
          return ctx.onScroll($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresolveWindow"])("resize", function BaseChartComponent_resize_HostBindingHandler($event) {
          return ctx.onWindowResize($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresolveWindow"]);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"]],
    decls: 0,
    vars: 0,
    template: function BaseChartComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
}

/***/ }),

/***/ 32592:
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/charts/config/bar-stacked.config.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chartConfig": () => (/* binding */ chartConfig)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defaults_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaults.config */ 73167);


const chartConfig = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.merge)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(_defaults_config__WEBPACK_IMPORTED_MODULE_1__.chartDefaults), {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    selectedMode: 'multiple',
    left: '0%',
    top: '50',
    textStyle: {
      fontSize: 16
    },
    icon: 'circle'
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
    show: true,
    scale: true,
    type: 'value',
    boundaryGap: ['0%', '10%']
  },
  color: _defaults_config__WEBPACK_IMPORTED_MODULE_1__.colors
});

/***/ }),

/***/ 73167:
/*!********************************************************************!*\
  !*** ./src/app/shared/components/charts/config/defaults.config.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chartDefaults": () => (/* binding */ chartDefaults),
/* harmony export */   "colors": () => (/* binding */ colors),
/* harmony export */   "colorsSad": () => (/* binding */ colorsSad),
/* harmony export */   "colorsSecondary": () => (/* binding */ colorsSecondary),
/* harmony export */   "colorsSecondaryExtended": () => (/* binding */ colorsSecondaryExtended),
/* harmony export */   "colorsThird": () => (/* binding */ colorsThird),
/* harmony export */   "qualityColors": () => (/* binding */ qualityColors)
/* harmony export */ });
const colors = ['#3ab098', '#87afd3', '#ecb320', '#2072ec', '#c9304d', '#4b35bc', '#107d79'];
const colorsSecondary = ['#7B61FF', '#87AFD3', '#2072EC', '#ECB320', '#31135E'];
const colorsSad = ['#f2f2f2', '#d9d9d9', '#ececec', '#e6e6e6'];
const colorsSecondaryExtended = ['#366181', '#232a75', '#cbc4e5', '#ecb320', '#2072ec', '#94dccd'];
const colorsThird = ['#3ab098', '#ECB320', '#C9304D', '#A6E5D9'];
const qualityColors = ['#3ab098', '#ECB320', '#C9304D'];
const chartDefaults = {
  xAxis: {
    offset: 1,
    axisLine: {
      lineStyle: {
        color: '#1A1A1A'
      }
    }
  },
  textStyle: {
    fontFamily: 'Noto Sans'
  },
  title: {
    left: '0',
    top: '0',
    right: 0,
    textStyle: {
      color: '#1a1a1a',
      overflow: 'break',
      fontSize: 24
    }
  },
  tooltip: {
    padding: 0,
    borderWidth: 0,
    borderRadius: 8,
    backgroundColor: 'rgba(38,38,38,1)'
  },
  legend: {
    textStyle: {
      color: '#1A1A1A'
    }
  }
};

/***/ }),

/***/ 13408:
/*!********************************************************************!*\
  !*** ./src/app/shared/components/charts/config/timeline.config.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chartConfig": () => (/* binding */ chartConfig)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defaults_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaults.config */ 73167);


const chartConfig = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.merge)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(_defaults_config__WEBPACK_IMPORTED_MODULE_1__.chartDefaults), {
  legend: {
    selectedMode: 'multiple',
    left: '0%',
    top: '50',
    icon: 'circle',
    itemWidth: 14,
    itemHeight: 14,
    textStyle: {
      verticalAlign: 'middle'
    }
  },
  backgroundColor: 'white',
  grid: {
    height: 216,
    top: 110,
    width: '100%',
    left: '0%',
    containLabel: true,
    tooltip: {
      axisPointer: {
        snap: true
      }
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: true,
    offset: 0,
    scale: false,
    silent: true,
    splitLine: {
      show: true,
      lineStyle: {
        width: 10,
        color: 'white'
      }
    },
    splitArea: {
      show: true,
      interval: 'auto',
      areaStyle: {
        color: ['#f4f4f4']
      }
    },
    axisTick: {
      alignWithLabel: true,
      show: false
    },
    axisLine: {
      onZero: false,
      lineStyle: {
        color: '#464648'
      }
    },
    axisLabel: {
      padding: 16
    }
  },
  yAxis: {
    show: false,
    scale: true,
    silent: true,
    min: 0.1,
    boundaryGap: ['0%', '10%'],
    splitLine: {
      show: false
    }
  },
  axisTick: {
    alignWithLabel: true
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
      snap: true,
      shadowStyle: {
        shadowOffsetX: 0
      }
    }
  },
  color: _defaults_config__WEBPACK_IMPORTED_MODULE_1__.colors
});

/***/ }),

/***/ 36724:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/components/charts/text-boxes/text-boxes.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextBoxesComponent": () => (/* binding */ TextBoxesComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_charts_config_defaults_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/components/charts/config/defaults.config */ 73167);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _directives_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../directives/tooltip/tooltip.directive */ 33020);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 38699);





function TextBoxesComponent_ng_container_5_div_1_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r3.value == null ? null : item_r3.value.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, "global.unitsLong." + item_r3.value.unit));
  }
}
function TextBoxesComponent_ng_container_5_div_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r3.value == null ? null : item_r3.value.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, item_r3.value.value <= 1 ? "statisticsCases.averageTimeToCompleteStep.dayTo" : "statisticsCases.averageTimeToCompleteStep.daysTo"), "");
  }
}
function TextBoxesComponent_ng_container_5_div_1_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, item_r3.code), " ");
  }
}
const _c0 = function (a0) {
  return {
    item: a0
  };
};
const _c1 = function () {
  return [0, 36];
};
const _c2 = function (a0) {
  return {
    backgroundColor: a0
  };
};
function TextBoxesComponent_ng_container_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TextBoxesComponent_ng_container_5_div_1_p_1_Template, 5, 4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TextBoxesComponent_ng_container_5_div_1_ng_template_2_Template, 5, 4, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TextBoxesComponent_ng_container_5_div_1_p_4_Template, 3, 3, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const item_r3 = ctx_r13.$implicit;
    const i_r4 = ctx_r13.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tooltipContent", _r1)("tooltipContentContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c0, item_r3))("tooltipPlacement", "bottom")("tooltipOffset", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](15, _c1))("lockTooltipMobile", false)("showTooltip", !ctx_r5.openStoriesMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.openStoriesMode)("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r5.openStoriesMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c2, ctx_r5.openStoriesMode ? ctx_r5.color[i_r4] : item_r3.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r5.openStoriesMode ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 11, item_r3.translation) : "", " ");
  }
}
function TextBoxesComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TextBoxesComponent_ng_container_5_div_1_Template, 9, 18, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r3.average !== null);
  }
}
const _c3 = function (a0, a1) {
  return {
    casesCount: a0,
    value: a1
  };
};
function TextBoxesComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13)(1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r14 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 3, item_r14.code));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 5, item_r14.extraData == null ? null : item_r14.extraData.tooltipContentKey, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](10, _c3, (item_r14.extraData == null ? null : item_r14.extraData.numberOfCases) || 0, (item_r14.extraData == null ? null : item_r14.extraData.averageTime) || 0)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 8, item_r14.extraData == null ? null : item_r14.extraData.tooltipFooterKey), " ");
  }
}
const _c4 = ["*"];
class TextBoxesComponent {
  constructor() {
    this.color = _shared_components_charts_config_defaults_config__WEBPACK_IMPORTED_MODULE_0__.colors;
    this.openStoriesMode = true;
  }
  qualityColor(item) {
    const avg = item.average;
    if (avg < 2) {
      return this.color[0];
    } else if (avg >= 2 && avg < 7) {
      return this.color[1];
    } else {
      return this.color[2];
    }
  }
  static #_ = this.ɵfac = function TextBoxesComponent_Factory(t) {
    return new (t || TextBoxesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: TextBoxesComponent,
    selectors: [["loop-chart-text-boxes"]],
    inputs: {
      data: "data",
      title: "title",
      color: "color",
      openStoriesMode: "openStoriesMode"
    },
    ngContentSelectors: _c4,
    decls: 8,
    vars: 4,
    consts: [[1, "d-flex", "block-container"], [4, "ngFor", "ngForOf"], ["tooltipContent", ""], ["class", "block-item", "appTooltip", "", 3, "tooltipContent", "tooltipContentContext", "tooltipPlacement", "tooltipOffset", "lockTooltipMobile", "showTooltip", 4, "ngIf"], ["appTooltip", "", 1, "block-item", 3, "tooltipContent", "tooltipContentContext", "tooltipPlacement", "tooltipOffset", "lockTooltipMobile", "showTooltip"], ["class", "value", 4, "ngIf", "ngIfElse"], ["casesValue", ""], ["class", "block-item__title", 4, "ngIf"], [1, "legend"], [1, "circle", 3, "ngStyle"], [1, "value"], [1, "d-block", "unit"], [1, "block-item__title"], [1, "average-time-taken-to-complete-step-hover"], [1, "average-time-taken-to-complete-step-hover__title"], [1, "average-time-taken-to-complete-step-hover__content"], [1, "average-time-taken-to-complete-step-hover__footer"]],
    template: function TextBoxesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TextBoxesComponent_ng_container_5_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TextBoxesComponent_ng_template_6_Template, 10, 13, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("cases", !ctx.openStoriesMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.data);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _directives_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_1__.TooltipDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
    styles: [".average-time-taken-to-complete-step-hover {\n  display: flex;\n  flex-direction: column;\n}\n  .average-time-taken-to-complete-step-hover__title {\n  font-size: 1.125rem;\n  font-weight: bold;\n  color: white;\n}\n  .average-time-taken-to-complete-step-hover__content {\n  display: flex;\n  padding: 1.25rem 0 0.625rem;\n  font-size: 1rem;\n  color: white;\n}\n  .average-time-taken-to-complete-step-hover__footer {\n  font-size: 1rem;\n  color: #ababab;\n}\n\n.legend[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #1a1a1a;\n  margin-top: 0.7rem;\n  word-break: break-all;\n}\n@media (max-width: 767.9px) {\n  .legend[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    margin-top: 0.2rem;\n  }\n}\n.legend[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  width: 0.75rem;\n  height: 0.75rem;\n  border-radius: 50%;\n  display: inline-block;\n}\nhtml:not([dir=rtl])[_nghost-%COMP%]   .legend[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .legend[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  margin-right: 0.625rem;\n}\nhtml[dir=rtl][_nghost-%COMP%]   .legend[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .legend[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  margin-left: 0.625rem;\n}\n\n.block-container[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n@media (min-width: 768px) {\n  .block-container[_ngcontent-%COMP%] {\n    margin-top: -0.6rem;\n  }\n  html:not([dir=rtl])[_nghost-%COMP%]   .block-container[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .block-container[_ngcontent-%COMP%] {\n    margin-left: -0.6rem;\n  }\n  html[dir=rtl][_nghost-%COMP%]   .block-container[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .block-container[_ngcontent-%COMP%] {\n    margin-right: -0.6rem;\n  }\n  .block-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    margin-top: 0.6rem;\n  }\n  html:not([dir=rtl])[_nghost-%COMP%]   .block-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .block-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    margin-left: 0.6rem;\n  }\n  html[dir=rtl][_nghost-%COMP%]   .block-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .block-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    margin-right: 0.6rem;\n  }\n}\n@media (max-width: 767.9px) {\n  .block-container[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n}\n.block-container[_ngcontent-%COMP%]   .block-item[_ngcontent-%COMP%] {\n  min-width: 11rem;\n  min-height: 9.438rem;\n  padding: 1.875rem;\n  border-radius: 8px;\n  border: solid 1px #e9e9e9;\n  flex: 0 0 15.6%;\n}\n@media (max-width: 767.9px) {\n  .block-container[_ngcontent-%COMP%]   .block-item[_ngcontent-%COMP%] {\n    flex: 0 0 48.5%;\n    margin-bottom: 0.625rem;\n    min-width: 47%;\n    min-height: 6rem;\n    padding: 1rem;\n  }\n}\n.block-container[_ngcontent-%COMP%]   .block-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 2.188rem;\n  color: #31135e;\n  font-weight: 600;\n}\n@media (max-width: 767.9px) {\n  .block-container[_ngcontent-%COMP%]   .block-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n    font-size: 1.625rem;\n  }\n}\n.block-container[_ngcontent-%COMP%]   .block-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%] {\n  margin-top: 0.7rem;\n  font-size: 1.25rem;\n  word-break: break-all;\n  text-transform: capitalize;\n}\n@media (max-width: 767.9px) {\n  .block-container[_ngcontent-%COMP%]   .block-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n    margin-top: 0;\n  }\n}\n\n.cases[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0.938rem;\n}\n.cases[_ngcontent-%COMP%]   .block-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 8.438rem;\n  min-height: 8.938rem;\n  transition: 0.2s;\n}\n@media (min-width: 768px) {\n  .cases[_ngcontent-%COMP%]   .block-item[_ngcontent-%COMP%] {\n    min-width: 12.188rem;\n    min-height: 12.188rem;\n  }\n}\n.cases[_ngcontent-%COMP%]   .block-item__title[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.375rem 0 0.813rem;\n}\n@media (min-width: 768px) {\n  .cases[_ngcontent-%COMP%]   .block-item__title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    padding: 0.625rem 0 0.938rem;\n  }\n}\n.cases[_ngcontent-%COMP%]   .block-item[_ngcontent-%COMP%]:hover {\n  background-color: #e9e9e9;\n}\n.cases[_ngcontent-%COMP%]   .legend[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n.cases[_ngcontent-%COMP%]   .legend[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 0.313rem;\n  border-radius: 8px;\n}\nhtml:not([dir=rtl])[_nghost-%COMP%]   .cases[_ngcontent-%COMP%]   .legend[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .cases[_ngcontent-%COMP%]   .legend[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\nhtml[dir=rtl][_nghost-%COMP%]   .cases[_ngcontent-%COMP%]   .legend[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .cases[_ngcontent-%COMP%]   .legend[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n@media (min-width: 768px) {\n  .cases[_ngcontent-%COMP%]   .legend[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n    height: 0.375rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQtYm94ZXMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vc3R5bGVzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUhKO0FBS0k7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUhOO0FBTUk7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUpOO0FBT0k7RUFDRSxlQUFBO0VBQ0EsY0N3RlM7QUQ3RmY7O0FBVUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFQRjtBRThKRTtFRjNKRjtJQU9JLGtCQUFBO0lBQ0Esa0JBQUE7RUFORjtBQUNGO0FBUUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFOSjtBRUtFO0VBMENJLHNCRnhDb0I7QUFKMUI7QUVRRTtFQXdDSSxxQkY1Q29CO0FBRDFCOztBQUtBO0VBQ0UsZUFBQTtBQUZGO0FFb0pFO0VGbkpGO0lFN0NFLG1CQUFBO0VGZ0RBO0VFVEE7SUEwQ0ksb0JBaEZpQjtFRmtEckI7RUVOQTtJQXdDSSxxQkFwRmlCO0VGcURyQjtFRW5EQTtJQUNFLGtCRjRDa0I7RUFTcEI7RUVsQkE7SUEwQ0ksbUJGakNnQjtFQVlwQjtFRWZBO0lBd0NJLG9CRnJDZ0I7RUFlcEI7QUFDRjtBRW9IRTtFRnZJRjtJQU9JLDhCQUFBO0VBZ0JGO0FBQ0Y7QUFkRTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBZ0JKO0FFdUdFO0VGN0hBO0lBUUksZUFBQTtJQUNBLHVCQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtFQWtCSjtBQUNGO0FBaEJJO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFrQk47QUV5RkU7RUY5R0U7SUFLSSxtQkFBQTtFQW9CTjtBQUNGO0FBbEJNO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7QUFvQlI7QUU4RUU7RUZ0R0k7SUFNSSxtQkFBQTtJQUNBLGFBQUE7RUFzQlI7QUFDRjs7QUFmRTtFQUNFLHVCQUFBO0FBa0JKO0FBZkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFpQko7QUV5RUU7RUYvRkE7SUFRSSxvQkFBQTtJQUNBLHFCQUFBO0VBa0JKO0FBQ0Y7QUFoQkk7RUFDRSxrQkFBQTtFQUNBLDRCQUFBO0FBa0JOO0FFK0RFO0VGbkZFO0lBS0ksZUFBQTtJQUNBLDRCQUFBO0VBbUJOO0FBQ0Y7QUFoQkk7RUFDRSx5QkN2QlM7QUR5Q2Y7QUFkRTtFQUNFLGdCQUFBO0FBZ0JKO0FBZEk7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtBQWVOO0FFM0dFO0VBMENJLGVGaURzQjtBQW1CNUI7QUV4R0U7RUF3Q0ksY0Y2Q3NCO0FBc0I1QjtBRXdDRTtFRmpFRTtJQU9JLGdCQUFBO0VBc0JOO0FBQ0YiLCJmaWxlIjoidGV4dC1ib3hlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ21peGlucyc7XG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG46Om5nLWRlZXAge1xuICAuYXZlcmFnZS10aW1lLXRha2VuLXRvLWNvbXBsZXRlLXN0ZXAtaG92ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICZfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAmX19jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBwYWRkaW5nOiAxLjI1cmVtIDAgMC42MjVyZW07XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgJl9fZm9vdGVyIHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGNvbG9yOiAkdG9vbHRpcC1ncmV5O1xuICAgIH1cbiAgfVxufVxuXG4ubGVnZW5kIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogIzFhMWExYTtcbiAgbWFyZ2luLXRvcDogMC43cmVtO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG5cbiAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjJyZW07XG4gIH1cblxuICAuY2lyY2xlIHtcbiAgICB3aWR0aDogMC43NXJlbTtcbiAgICBoZWlnaHQ6IDAuNzVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBAaW5jbHVkZSBtYXJnaW4tcmlnaHQoMC42MjVyZW0pO1xuICB9XG59XG5cbi5ibG9jay1jb250YWluZXIge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIEBpbmNsdWRlIG1vYmlsZS11cCB7XG4gICAgQGluY2x1ZGUgZmxleC1nYXAoMC42cmVtKTtcbiAgfVxuXG4gIEBpbmNsdWRlIG1vYmlsZS1vbmx5IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAuYmxvY2staXRlbSB7XG4gICAgbWluLXdpZHRoOiAxMXJlbTtcbiAgICBtaW4taGVpZ2h0OiA5LjQzOHJlbTtcbiAgICBwYWRkaW5nOiAxLjg3NXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2U5ZTllOTtcbiAgICBmbGV4OiAwIDAgMTUuNiU7XG4gICAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgICAgZmxleDogMCAwIDQ4LjUlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XG4gICAgICBtaW4td2lkdGg6IDQ3JTtcbiAgICAgIG1pbi1oZWlnaHQ6IDZyZW07XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuICAgIH1cblxuICAgIC52YWx1ZSB7XG4gICAgICBmb250LXNpemU6IDIuMTg4cmVtO1xuICAgICAgY29sb3I6ICMzMTEzNWU7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgICAgICBmb250LXNpemU6IDEuNjI1cmVtO1xuICAgICAgfVxuXG4gICAgICAudW5pdCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDAuN3JlbTtcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICBAaW5jbHVkZSBtb2JpbGUtb25seSB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5jYXNlcyB7XG4gIGgzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjkzOHJlbTtcbiAgfVxuXG4gIC5ibG9jay1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLXdpZHRoOiA4LjQzOHJlbTtcbiAgICBtaW4taGVpZ2h0OiA4LjkzOHJlbTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuXG4gICAgQGluY2x1ZGUgbW9iaWxlLXVwIHtcbiAgICAgIG1pbi13aWR0aDogMTIuMTg4cmVtO1xuICAgICAgbWluLWhlaWdodDogMTIuMTg4cmVtO1xuICAgIH1cblxuICAgICZfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAgMC44MTNyZW07XG5cbiAgICAgIEBpbmNsdWRlIG1vYmlsZS11cCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgcGFkZGluZzogMC42MjVyZW0gMCAwLjkzOHJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmV5LTg7XG4gICAgfVxuICB9XG5cbiAgLmxlZ2VuZCB7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcblxuICAgIC5jaXJjbGUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDAuMzEzcmVtO1xuICAgICAgQGluY2x1ZGUgbWFyZ2luLXJpZ2h0KDApO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuXG4gICAgICBAaW5jbHVkZSBtb2JpbGUtdXAge1xuICAgICAgICBoZWlnaHQ6IDAuMzc1cmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiJHN0YW5kYXJkRm9udEZhbWlseTogJ05vdG8gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGNvbnRlbnQtdG9wLXBhZGRpbmc6IDNyZW07XG4kcG9zdC1saXN0LWJnOiAjZGFkYWRhO1xuJHdoaXRlOiAjZmZmZmZmO1xuJHBvc3QtcHJldmlldy1iZzogd2hpdGU7XG4kbGlnaHQtZ3JheS1iZzogI2Y0ZjRmNDtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1sZWZ0OiAyLjM0NHJlbTtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1yaWdodDogMS4wNjNyZW07XG4kcG9zdC1wcmV2aWV3LXBhZGRpbmc6IDIuNXJlbSAkcG9zdC1wcmV2aWV3LXBhZGRpbmctcmlnaHQgMS4yNXJlbSAkcG9zdC1wcmV2aWV3LXBhZGRpbmctbGVmdDtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1tb2JpbGU6IDFyZW0gMXJlbSAwLjVyZW0gMXJlbTtcbiRwb3N0LXBhZGRpbmctYm90dG9tOiAxcmVtO1xuJHBvc3QtcHJldmlldy1ndXR0ZXI6IDJweDtcbiRwb3N0LWhpZ2hsaWdodC1jb2xvcjogIzU3MGY4NTtcbiRjb2xvci1wdXJwbGUtOTA6ICMzMTEzNWU7XG4kY29sb3ItcHVycGxlLTYwOiAjOTg4YWFlO1xuJGNvbG9yLXB1cnBsZS01MDogIzk4ODlhZjtcbiRjb2xvci1wdXJwbGUtMTA6ICNmNWYzZjc7XG4kY29sb3ItcHVycGxlLWxpZ2h0OiAjNGIzNWJjO1xuJGNvbG9yLXB1cnBsZS12ZXJ5LWxpZ2h0OiAjODY2YWIwO1xuJGNvbG9yLXB1cnBsZS1zdGVwcGVyOiAjNGEyYjdhO1xuJGNvbG9yLWdyZWVuLTEwMDogIzA1MjgwNDtcbiRjb2xvci1ncmVlbi05MDogIzBkM2QwYjtcbiRjb2xvci1ncmVlbi04MDogIzFmNmIxZTtcbiRjb2xvci1ncmVlbi03MDogIzM1OGEzNDtcbiRjb2xvci1ncmVlbi02MDogIzZkOWE2ZTtcbiRjb2xvci1ncmVlbi01MDogIzg5YTg4ZjtcbiRjb2xvci1ncmVlbi00MDogIzlmYzhhNjtcbiRjb2xvci1ncmVlbi0zMDogI2FhZDZiMztcbiRjb2xvci1ncmVlbi0yMDogI2M5ZTlkMTtcbiRjb2xvci1ncmVlbi0xMDogI2YzZjdmMztcbiRjb2xvci1ncmVlbi1zdGVwcGVyOiAjMTA3RDc5O1xuJGNvbG9yLWdyZWVuLW1lZGl1bTogI2FkZGFhZjtcbiRjb2xvci1ncmVlbi1saWdodDogIzNBQjA5ODtcbiRjb2xvci1ncmVlbi12ZXJ5LWxpZ2h0OiAjRURGRkZDO1xuJGdyZXktMTogI2Q2ZDBkZjtcbiRzdXBwb3J0LTAxOiAjZGExZTI4O1xuJGVycm9yOiAjZWUyMzJmO1xuJHRleHQtYmxhY2s6ICMxNjE2MTY7XG4kdGV4dC1zZWNvbmRhcnk6ICMzOTM5Mzk7XG4kdGV4dC1ncmF5ZWQ6ICM1MjUyNTI7XG4kdGV4dC1ncmF5ZWQ4MDogIzhmOGI4YjtcbiR0ZXh0LWdyYXktY2F0OiAjNmQ3Mjc4O1xuJHVpLWJhY2tncm91bmQtZ3JheTogI2Y4ZjhmOTtcbiRib3JkZXI6ICNlOGU3ZWE7XG4kZW50aXR5LWJvcmRlci1jb2xvcjogIzFjMGYzMDIxO1xuJGxvYWRpbmctYmc6IHJnYigwIDAgMCAvIDE4JSk7XG4kc3VwcG9ydC0wNDogIzAwNDNjZTtcbiRsb29wLXVzZXJuYW1lOiAjMTk4MDM4O1xuJGxvb3AtYWN0aXZlLWN1cnJlbnQtdXNlcjogIzI0YTE0ODtcbiR3YXJtLWdyYXktMTAtY29sb3I6ICNmN2YzZjI7XG4kd2FybS1ncmF5LTIwLWNvbG9yOiAjZTVlMGRmO1xuJGhlYWRpbmctMS1jb2xvcjogIzFjMGYzMDtcbiRoZWFkaW5nLTItY29sb3I6ICMzMjA3NGQ7XG4kaGVhZGluZy0zLWNvbG9yOiAjMmYyNzM1O1xuJG1vYmlsZS1pY29uLWNvbG9yOiAjMWMwZjMwO1xuJHN0YXRlLWRpc2FibGVkLTAyOiAjYzZjNmM2O1xuJGxpbmstMDI6ICM1NjAxYjI7XG4kaGVhZGVyLXB1cnBsZTogIzMxMTM1ZTtcbiRoZWFkZXItZ3JlZW46ICMxMDdkNzk7XG4kcHVycGxlLWxpZ2h0OiAjY2JjNGQ3O1xuJHB1cnBsZS1iYWNrZ3JvdW5kLWxpZ2h0OiAjZGNkNWU3O1xuJGxvb3AtaW50ZXJhY3RpdmUtMDE6ICMxMDdkNzk7XG4kbG9vcC1pbnRlcmFjdGl2ZS0wMS1vcGFjaXR5OiByZ2JhKDE2LCAxMjUsIDEyMSwgMC4zKTtcbiRmaWx0ZXJzLWdyZWVuOiAjMDU2NzYzO1xuLy8gQnJlYWtwb2ludHNcblxuJGJyZWFrcG9pbnQtczogMzc1cHg7XG4kYnJlYWtwb2ludC1zbTogNDIwcHg7XG4kYnJlYWtwb2ludC1tZDogNzY4cHg7XG4kYnJlYWtwb2ludC1sZzogMTA4MHB4O1xuJGJyZWFrcG9pbnQteGw6IDEyNzVweDtcblxuJGJyZWFrcG9pbnQtbWQtdjI6IDgyMHB4O1xuXG4kaGVhZGVyLWhlaWdodDogNC4zNzVyZW07XG4kaGVhZGVyLWhlaWdodC12MjogNC4zNzVyZW07XG4kc3RhdGUtc2VsZWN0ZWQtdWk6ICNlMGUwZTA7XG4kYy1sZWZ0LXBhZGRpbmc6IDEuNXJlbTtcbiRtZW51LWFjdGl2ZS1jb2xvcjogIzNBQjA5ODtcbiRtZW51LWhvdmVyLWNvbG9yOiAjM0FCMDk4O1xuJHRhYi1pbmFjdGl2ZS1jb2xvcjogIzg5YWY5MztcbiRsaW5lLWNvbG9yOiAjZDBkZmQyO1xuJGJvcmRlci1ncmF5OiAjY2NjY2NjO1xuJHRleHQtZ3JheTogIzgwODA4MDtcbiRiYXNlLWNvbnRhaW5lci13aWR0aDogODEuMTI0cmVtO1xuJGhlYWRlci11bmRlcmxpbmUtaGVpZ2h0OiAwLjMxM3JlbTtcblxuLy8gTW9kZXJhdG9yIHJldmlldyBzZWN0aW9uc1xuJGZvb3Rlci1oZWlnaHQ6IDRyZW07XG4kdG9wYmFyLWhlaWdodDogMTAuNXJlbTtcbiRzdGVwcGVyLWhlaWdodDogNi43cmVtO1xuXG4vLyBOZXcgU3RvcnkgZmxvdyAvIHN0b3J5IGRldGFpbHMgdmFyaWFibGVzXG4kZ3JleTogIzY1NjU2NTtcbiRsaWdodC1ncmV5LTI6ICNiMWI0YjY7XG4kbGlnaHQtZ3JleS0zOiAjYjRiNGI0O1xuJGxpZ2h0LWdyZXktNDogI2NmZDNkODtcbiRsaWdodC1ncmV5LTU6ICNkOWUwZTc7XG4kbGlnaHQtZ3JleS02OiAjZjFmMmYyO1xuJGxpZ2h0LWdyZXktNzogI2M0YzRjNDtcbiRsaWdodC1ncmV5LTg6ICNlOWU5ZTk7XG4kbGlnaHQtZ3JleS05OiAjZTZlYWVkO1xuJGxpZ2gtZ3JleS1zZXBhcmF0b3I6ICNjMGMwYzA7XG4kZGFyay1ncmV5OiAjMWExYTFhO1xuJGRhcmstZ3JleS01MDogcmdiKDI2LCAyNiwgMjYsIDAuNSk7XG4kYm9yZGVyLWdyZXk6ICNjN2NkZDQ7XG4kbGlnaHQtcHVycGxlOiAjZWFlYWVhO1xuJGlucHV0LWRpc2FibGVkLWJnOiAjZjRmNmY4O1xuJGVycm9yLTI6ICNkZTIyMmQ7XG4kZGFuZ2VyOiAjYzkzMDRkO1xuJHByZXZpb3VzLXBpbGwtY29sb3I6ICM3MThkNmY7XG4kdG9vbHRpcC1ncmV5OiAjYWJhYmFiO1xuJGxpZ2h0LWdyZWVuOiAjY2ZlNWU0NjY7XG5cbiRmaWx0ZXJzLW1vZGFsLWhlYWRlci16aW5kZXg6IDEwMDAwO1xuJG1vZGFsLXppbmRleDogOTk5OTtcbiRsb2NhdGlvbi1vdmVybGF5LXppbmRleDogOTAwMTtcbiRoZWFkZXItYXNpZGUtemluZGV4OiA4MDAyO1xuJGhlYWRlci1hc2lkZS1iYWNrZ3JvdW5kLXppbmRleDogODAwMTtcbiRoZWFkZXItemluZGV4OiA4MDAwO1xuJG5hdmlnYXRpb24temluZGV4OiA4MDAwO1xuJHBhZ2UtbG9hZGluZy16aW5kZXg6IDcwMDE7XG4kdG9vbHRpcC16aW5kZXg6IDcwMDA7XG4kbmV3LXN0b3J5LWNvbnRlbnQtc3RhdGUtemluZGV4OiA1MDA7XG4kZmlsdGVyLWRyb3Bkb3duLXppbmRleDogMTAwO1xuJG1vZGFsLXRvcC1pbmRpY2F0b3ItemluZGV4OiA1MTtcbiRtb2RhbC10b3AtaW5kaWNhdG9yLWJhY2tncm91bmQtemluZGV4OiA1MTtcbiRjaGFydC16aW5kZXg6IDE7XG4kY2hhcnQtY29udHJvbC16aW5kZXg6IDI7XG5cbiRzbGlkZS10b2dnbGUtZGlzYWJsZWQtb3B0aW9uLWJhY2tncm91bmQ6ICNkZGRkZGQ7XG5cbiR0b2FzdC1pbmZvLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuJHRvYXN0LWluZm8tdGl0bGUtY29sb3I6ICM0OTQ5NDk7XG4kdG9hc3QtaW5mby1tZXNzYWdlLWNvbG9yOiAjNDIyYzAwO1xuJHRvYXN0LWluZm8tYnV0dG9uLWNvbG9yOiAjNmM0ZTk5O1xuXG4kdG9hc3Qtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiAjZDllZWVkO1xuJHRvYXN0LXN1Y2Nlc3MtdGl0bGUtY29sb3I6ICMwMDQ1NDI7XG4kdG9hc3Qtc3VjY2Vzcy1tZXNzYWdlLWNvbG9yOiAjMDEzMjMwO1xuJHRvYXN0LXN1Y2Nlc3MtYnV0dG9uLWNvbG9yOiAjMDE2OTY1O1xuXG4kdG9hc3Qtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMWQ1O1xuJHRvYXN0LXdhcm5pbmctdGl0bGUtY29sb3I6ICM2YjQ3MDA7XG4kdG9hc3Qtd2FybmluZy1tZXNzYWdlLWNvbG9yOiAjNDIyYzAwO1xuJHRvYXN0LXdhcm5pbmctYnV0dG9uLWNvbG9yOiAjY2M4ZjE0O1xuXG4kdG9hc3QtZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogI2Y1ZDVkYjtcbiR0b2FzdC1lcnJvci10aXRsZS1jb2xvcjogIzczMDAxNTtcbiR0b2FzdC1lcnJvci1tZXNzYWdlLWNvbG9yOiAjNDUwNjExO1xuJHRvYXN0LWVycm9yLXN1Y2Nlc3MtY29sb3I6ICNkOWVlZWQ7XG4kdG9hc3QtZXJyb3ItYnV0dG9uLWNvbG9yOiAjYjIxZDM5O1xuXG4kdG9hc3QtY2xvc2UtYnV0dG9uLWNvbG9yOiAjNzMwMDE1O1xuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIGZsZXgtZ2FwKCRnYXAsICRnbG9iYWw6IGZhbHNlKSB7XG4gIG1hcmdpbi10b3A6ICgtJGdhcCk7XG4gIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCgtJGdhcCksICRnbG9iYWwpO1xuXG4gID4gKiB7XG4gICAgbWFyZ2luLXRvcDogJGdhcDtcbiAgICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgkZ2FwLCAkZ2xvYmFsKTtcbiAgfVxufVxuXG5AbWl4aW4gYmFzZS1jb250YWluZXIoJGNvbnRlbnQtd2lkdGgpIHtcbiAgJGRlc2t0b3AtcGFkZGluZzogMnJlbTtcbiAgbWF4LXdpZHRoOiBjYWxjKCN7JGNvbnRlbnQtd2lkdGh9ICsgKCN7JGRlc2t0b3AtcGFkZGluZ30pKTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MnJlbSkge1xuICAgIEBpbmNsdWRlIHBhZGRpbmctbGVmdCgkZGVza3RvcC1wYWRkaW5nLCB0cnVlKTtcbiAgICBAaW5jbHVkZSBwYWRkaW5nLXJpZ2h0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICB9XG59XG5cbkBtaXhpbiBjZW50ZXJBYnNvbHV0ZUVsZW1lbnQge1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5AbWl4aW4gb25seS1sdHItZ2xvYmFsIHtcbiAgaHRtbDpub3QoW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bC1nbG9iYWwge1xuICBodG1sW2Rpcj0ncnRsJ10gJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktbHRyIHtcbiAgOmhvc3QtY29udGV4dChodG1sOm5vdChbZGlyPSdydGwnXSkpICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bCB7XG4gIDpob3N0LWNvbnRleHQoaHRtbFtkaXI9J3J0bCddKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gcnRsLXZhbHVlKCRwcm9wZXJ0eSwgJGx0ci12YWx1ZSwgJHJ0bC12YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGx0ci12YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHJ0bC12YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHJ0bC1wcm9wZXJ0eSgkbHRyLXByb3BlcnR5LCAkcnRsLXByb3BlcnR5LCAkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpZiAkZ2xvYmFsID09IHRydWUge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyLWdsb2JhbCB7XG4gICAgICAjeyRsdHItcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwtZ2xvYmFsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bCB7XG4gICAgICAjeyRydGwtcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXJnaW4tbGVmdCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLWxlZnQsIG1hcmdpbi1yaWdodCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBtYXJnaW4tcmlnaHQoJG1hcmdpbiwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KG1hcmdpbi1yaWdodCwgbWFyZ2luLWxlZnQsICRtYXJnaW4sICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZygkcGFkZGluZ1RvcCwgJHBhZGRpbmdSaWdodCwgJHBhZGRpbmdCb3R0b20sICRwYWRkaW5nTGVmdCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgcGFkZGluZy10b3A6ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZ1JpZ2h0LCAkZ2xvYmFsKTtcbiAgcGFkZGluZy1ib3R0b206ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZ0xlZnQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1sZWZ0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLXJpZ2h0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiB0ZXh0LWFsaWduLWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRleHQtYWxpZ24sIGxlZnQsIHJpZ2h0LCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGxlZnQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobGVmdCwgcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiByaWdodCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShyaWdodCwgbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRyYW5zbGF0ZVhZKCR2YWx1ZVgsICR2YWx1ZVksICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZSh0cmFuc2Zvcm0sIHRyYW5zbGF0ZSgkdmFsdWVYLCAkdmFsdWVZKSwgdHJhbnNsYXRlKC0kdmFsdWVYLCAkdmFsdWVZKSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItbGVmdCwgYm9yZGVyLXJpZ2h0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1yaWdodCwgYm9yZGVyLWxlZnQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCBib3JkZXItdG9wLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtbGVmdC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBmbG9hdC1sZWZ0KCRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZShmbG9hdCwgbGVmdCwgcmlnaHQsICRnbG9iYWw6IGZhbHNlKTtcbn1cblxuQG1peGluIGZsb2F0LXJpZ2h0IHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCByaWdodCwgbGVmdCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gc21hbGwtZGVza3RvcC1vbmx5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LWxnKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQteGwgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtYW5kLXRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc21hbGwtbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtcyAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LW1kIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtdXAge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gZGlzYWJsZS1zY3JvbGxiYXIge1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2hhcnRzL3RleHQtYm94ZXMvdGV4dC1ib3hlcy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3R5bGVzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUhKO0FBS0k7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUhOO0FBTUk7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUpOO0FBT0k7RUFDRSxlQUFBO0VBQ0EsY0N3RlM7QUQ3RmY7O0FBVUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFQRjtBRThKRTtFRjNKRjtJQU9JLGtCQUFBO0lBQ0Esa0JBQUE7RUFORjtBQUNGO0FBUUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFOSjtBRUtFO0VBMENJLHNCRnhDb0I7QUFKMUI7QUVRRTtFQXdDSSxxQkY1Q29CO0FBRDFCOztBQUtBO0VBQ0UsZUFBQTtBQUZGO0FFb0pFO0VGbkpGO0lFN0NFLG1CQUFBO0VGZ0RBO0VFVEE7SUEwQ0ksb0JBaEZpQjtFRmtEckI7RUVOQTtJQXdDSSxxQkFwRmlCO0VGcURyQjtFRW5EQTtJQUNFLGtCRjRDa0I7RUFTcEI7RUVsQkE7SUEwQ0ksbUJGakNnQjtFQVlwQjtFRWZBO0lBd0NJLG9CRnJDZ0I7RUFlcEI7QUFDRjtBRW9IRTtFRnZJRjtJQU9JLDhCQUFBO0VBZ0JGO0FBQ0Y7QUFkRTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBZ0JKO0FFdUdFO0VGN0hBO0lBUUksZUFBQTtJQUNBLHVCQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtFQWtCSjtBQUNGO0FBaEJJO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFrQk47QUV5RkU7RUY5R0U7SUFLSSxtQkFBQTtFQW9CTjtBQUNGO0FBbEJNO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7QUFvQlI7QUU4RUU7RUZ0R0k7SUFNSSxtQkFBQTtJQUNBLGFBQUE7RUFzQlI7QUFDRjs7QUFmRTtFQUNFLHVCQUFBO0FBa0JKO0FBZkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFpQko7QUV5RUU7RUYvRkE7SUFRSSxvQkFBQTtJQUNBLHFCQUFBO0VBa0JKO0FBQ0Y7QUFoQkk7RUFDRSxrQkFBQTtFQUNBLDRCQUFBO0FBa0JOO0FFK0RFO0VGbkZFO0lBS0ksZUFBQTtJQUNBLDRCQUFBO0VBbUJOO0FBQ0Y7QUFoQkk7RUFDRSx5QkN2QlM7QUR5Q2Y7QUFkRTtFQUNFLGdCQUFBO0FBZ0JKO0FBZEk7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtBQWVOO0FFM0dFO0VBMENJLGVGaURzQjtBQW1CNUI7QUV4R0U7RUF3Q0ksY0Y2Q3NCO0FBc0I1QjtBRXdDRTtFRmpFRTtJQU9JLGdCQUFBO0VBc0JOO0FBQ0Y7QUFDQSxnMWlCQUFnMWlCIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnbWl4aW5zJztcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbjo6bmctZGVlcCB7XG4gIC5hdmVyYWdlLXRpbWUtdGFrZW4tdG8tY29tcGxldGUtc3RlcC1ob3ZlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgJl9fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgICZfX2NvbnRlbnQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHBhZGRpbmc6IDEuMjVyZW0gMCAwLjYyNXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAmX19mb290ZXIge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgY29sb3I6ICR0b29sdGlwLWdyZXk7XG4gICAgfVxuICB9XG59XG5cbi5sZWdlbmQge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjMWExYTFhO1xuICBtYXJnaW4tdG9wOiAwLjdyZW07XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcblxuICBAaW5jbHVkZSBtb2JpbGUtb25seSB7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIG1hcmdpbi10b3A6IDAuMnJlbTtcbiAgfVxuXG4gIC5jaXJjbGUge1xuICAgIHdpZHRoOiAwLjc1cmVtO1xuICAgIGhlaWdodDogMC43NXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIEBpbmNsdWRlIG1hcmdpbi1yaWdodCgwLjYyNXJlbSk7XG4gIH1cbn1cblxuLmJsb2NrLWNvbnRhaW5lciB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgQGluY2x1ZGUgbW9iaWxlLXVwIHtcbiAgICBAaW5jbHVkZSBmbGV4LWdhcCgwLjZyZW0pO1xuICB9XG5cbiAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5ibG9jay1pdGVtIHtcbiAgICBtaW4td2lkdGg6IDExcmVtO1xuICAgIG1pbi1oZWlnaHQ6IDkuNDM4cmVtO1xuICAgIHBhZGRpbmc6IDEuODc1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZTllOWU5O1xuICAgIGZsZXg6IDAgMCAxNS42JTtcbiAgICBAaW5jbHVkZSBtb2JpbGUtb25seSB7XG4gICAgICBmbGV4OiAwIDAgNDguNSU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcbiAgICAgIG1pbi13aWR0aDogNDclO1xuICAgICAgbWluLWhlaWdodDogNnJlbTtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgfVxuXG4gICAgLnZhbHVlIHtcbiAgICAgIGZvbnQtc2l6ZTogMi4xODhyZW07XG4gICAgICBjb2xvcjogIzMxMTM1ZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBAaW5jbHVkZSBtb2JpbGUtb25seSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS42MjVyZW07XG4gICAgICB9XG5cbiAgICAgIC51bml0IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMC43cmVtO1xuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZS1vbmx5IHtcbiAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmNhc2VzIHtcbiAgaDMge1xuICAgIG1hcmdpbi1ib3R0b206IDAuOTM4cmVtO1xuICB9XG5cbiAgLmJsb2NrLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4td2lkdGg6IDguNDM4cmVtO1xuICAgIG1pbi1oZWlnaHQ6IDguOTM4cmVtO1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG5cbiAgICBAaW5jbHVkZSBtb2JpbGUtdXAge1xuICAgICAgbWluLXdpZHRoOiAxMi4xODhyZW07XG4gICAgICBtaW4taGVpZ2h0OiAxMi4xODhyZW07XG4gICAgfVxuXG4gICAgJl9fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgcGFkZGluZzogMC4zNzVyZW0gMCAwLjgxM3JlbTtcblxuICAgICAgQGluY2x1ZGUgbW9iaWxlLXVwIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBwYWRkaW5nOiAwLjYyNXJlbSAwIDAuOTM4cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyZXktODtcbiAgICB9XG4gIH1cblxuICAubGVnZW5kIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuXG4gICAgLmNpcmNsZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMC4zMTNyZW07XG4gICAgICBAaW5jbHVkZSBtYXJnaW4tcmlnaHQoMCk7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG5cbiAgICAgIEBpbmNsdWRlIG1vYmlsZS11cCB7XG4gICAgICAgIGhlaWdodDogMC4zNzVyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIkc3RhbmRhcmRGb250RmFtaWx5OiAnTm90byBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4kY29udGVudC10b3AtcGFkZGluZzogM3JlbTtcbiRwb3N0LWxpc3QtYmc6ICNkYWRhZGE7XG4kd2hpdGU6ICNmZmZmZmY7XG4kcG9zdC1wcmV2aWV3LWJnOiB3aGl0ZTtcbiRsaWdodC1ncmF5LWJnOiAjZjRmNGY0O1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLWxlZnQ6IDIuMzQ0cmVtO1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLXJpZ2h0OiAxLjA2M3JlbTtcbiRwb3N0LXByZXZpZXctcGFkZGluZzogMi41cmVtICRwb3N0LXByZXZpZXctcGFkZGluZy1yaWdodCAxLjI1cmVtICRwb3N0LXByZXZpZXctcGFkZGluZy1sZWZ0O1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLW1vYmlsZTogMXJlbSAxcmVtIDAuNXJlbSAxcmVtO1xuJHBvc3QtcGFkZGluZy1ib3R0b206IDFyZW07XG4kcG9zdC1wcmV2aWV3LWd1dHRlcjogMnB4O1xuJHBvc3QtaGlnaGxpZ2h0LWNvbG9yOiAjNTcwZjg1O1xuJGNvbG9yLXB1cnBsZS05MDogIzMxMTM1ZTtcbiRjb2xvci1wdXJwbGUtNjA6ICM5ODhhYWU7XG4kY29sb3ItcHVycGxlLTUwOiAjOTg4OWFmO1xuJGNvbG9yLXB1cnBsZS0xMDogI2Y1ZjNmNztcbiRjb2xvci1wdXJwbGUtbGlnaHQ6ICM0YjM1YmM7XG4kY29sb3ItcHVycGxlLXZlcnktbGlnaHQ6ICM4NjZhYjA7XG4kY29sb3ItcHVycGxlLXN0ZXBwZXI6ICM0YTJiN2E7XG4kY29sb3ItZ3JlZW4tMTAwOiAjMDUyODA0O1xuJGNvbG9yLWdyZWVuLTkwOiAjMGQzZDBiO1xuJGNvbG9yLWdyZWVuLTgwOiAjMWY2YjFlO1xuJGNvbG9yLWdyZWVuLTcwOiAjMzU4YTM0O1xuJGNvbG9yLWdyZWVuLTYwOiAjNmQ5YTZlO1xuJGNvbG9yLWdyZWVuLTUwOiAjODlhODhmO1xuJGNvbG9yLWdyZWVuLTQwOiAjOWZjOGE2O1xuJGNvbG9yLWdyZWVuLTMwOiAjYWFkNmIzO1xuJGNvbG9yLWdyZWVuLTIwOiAjYzllOWQxO1xuJGNvbG9yLWdyZWVuLTEwOiAjZjNmN2YzO1xuJGNvbG9yLWdyZWVuLXN0ZXBwZXI6ICMxMDdENzk7XG4kY29sb3ItZ3JlZW4tbWVkaXVtOiAjYWRkYWFmO1xuJGNvbG9yLWdyZWVuLWxpZ2h0OiAjM0FCMDk4O1xuJGNvbG9yLWdyZWVuLXZlcnktbGlnaHQ6ICNFREZGRkM7XG4kZ3JleS0xOiAjZDZkMGRmO1xuJHN1cHBvcnQtMDE6ICNkYTFlMjg7XG4kZXJyb3I6ICNlZTIzMmY7XG4kdGV4dC1ibGFjazogIzE2MTYxNjtcbiR0ZXh0LXNlY29uZGFyeTogIzM5MzkzOTtcbiR0ZXh0LWdyYXllZDogIzUyNTI1MjtcbiR0ZXh0LWdyYXllZDgwOiAjOGY4YjhiO1xuJHRleHQtZ3JheS1jYXQ6ICM2ZDcyNzg7XG4kdWktYmFja2dyb3VuZC1ncmF5OiAjZjhmOGY5O1xuJGJvcmRlcjogI2U4ZTdlYTtcbiRlbnRpdHktYm9yZGVyLWNvbG9yOiAjMWMwZjMwMjE7XG4kbG9hZGluZy1iZzogcmdiKDAgMCAwIC8gMTglKTtcbiRzdXBwb3J0LTA0OiAjMDA0M2NlO1xuJGxvb3AtdXNlcm5hbWU6ICMxOTgwMzg7XG4kbG9vcC1hY3RpdmUtY3VycmVudC11c2VyOiAjMjRhMTQ4O1xuJHdhcm0tZ3JheS0xMC1jb2xvcjogI2Y3ZjNmMjtcbiR3YXJtLWdyYXktMjAtY29sb3I6ICNlNWUwZGY7XG4kaGVhZGluZy0xLWNvbG9yOiAjMWMwZjMwO1xuJGhlYWRpbmctMi1jb2xvcjogIzMyMDc0ZDtcbiRoZWFkaW5nLTMtY29sb3I6ICMyZjI3MzU7XG4kbW9iaWxlLWljb24tY29sb3I6ICMxYzBmMzA7XG4kc3RhdGUtZGlzYWJsZWQtMDI6ICNjNmM2YzY7XG4kbGluay0wMjogIzU2MDFiMjtcbiRoZWFkZXItcHVycGxlOiAjMzExMzVlO1xuJGhlYWRlci1ncmVlbjogIzEwN2Q3OTtcbiRwdXJwbGUtbGlnaHQ6ICNjYmM0ZDc7XG4kcHVycGxlLWJhY2tncm91bmQtbGlnaHQ6ICNkY2Q1ZTc7XG4kbG9vcC1pbnRlcmFjdGl2ZS0wMTogIzEwN2Q3OTtcbiRsb29wLWludGVyYWN0aXZlLTAxLW9wYWNpdHk6IHJnYmEoMTYsIDEyNSwgMTIxLCAwLjMpO1xuJGZpbHRlcnMtZ3JlZW46ICMwNTY3NjM7XG4vLyBCcmVha3BvaW50c1xuXG4kYnJlYWtwb2ludC1zOiAzNzVweDtcbiRicmVha3BvaW50LXNtOiA0MjBweDtcbiRicmVha3BvaW50LW1kOiA3NjhweDtcbiRicmVha3BvaW50LWxnOiAxMDgwcHg7XG4kYnJlYWtwb2ludC14bDogMTI3NXB4O1xuXG4kYnJlYWtwb2ludC1tZC12MjogODIwcHg7XG5cbiRoZWFkZXItaGVpZ2h0OiA0LjM3NXJlbTtcbiRoZWFkZXItaGVpZ2h0LXYyOiA0LjM3NXJlbTtcbiRzdGF0ZS1zZWxlY3RlZC11aTogI2UwZTBlMDtcbiRjLWxlZnQtcGFkZGluZzogMS41cmVtO1xuJG1lbnUtYWN0aXZlLWNvbG9yOiAjM0FCMDk4O1xuJG1lbnUtaG92ZXItY29sb3I6ICMzQUIwOTg7XG4kdGFiLWluYWN0aXZlLWNvbG9yOiAjODlhZjkzO1xuJGxpbmUtY29sb3I6ICNkMGRmZDI7XG4kYm9yZGVyLWdyYXk6ICNjY2NjY2M7XG4kdGV4dC1ncmF5OiAjODA4MDgwO1xuJGJhc2UtY29udGFpbmVyLXdpZHRoOiA4MS4xMjRyZW07XG4kaGVhZGVyLXVuZGVybGluZS1oZWlnaHQ6IDAuMzEzcmVtO1xuXG4vLyBNb2RlcmF0b3IgcmV2aWV3IHNlY3Rpb25zXG4kZm9vdGVyLWhlaWdodDogNHJlbTtcbiR0b3BiYXItaGVpZ2h0OiAxMC41cmVtO1xuJHN0ZXBwZXItaGVpZ2h0OiA2LjdyZW07XG5cbi8vIE5ldyBTdG9yeSBmbG93IC8gc3RvcnkgZGV0YWlscyB2YXJpYWJsZXNcbiRncmV5OiAjNjU2NTY1O1xuJGxpZ2h0LWdyZXktMjogI2IxYjRiNjtcbiRsaWdodC1ncmV5LTM6ICNiNGI0YjQ7XG4kbGlnaHQtZ3JleS00OiAjY2ZkM2Q4O1xuJGxpZ2h0LWdyZXktNTogI2Q5ZTBlNztcbiRsaWdodC1ncmV5LTY6ICNmMWYyZjI7XG4kbGlnaHQtZ3JleS03OiAjYzRjNGM0O1xuJGxpZ2h0LWdyZXktODogI2U5ZTllOTtcbiRsaWdodC1ncmV5LTk6ICNlNmVhZWQ7XG4kbGlnaC1ncmV5LXNlcGFyYXRvcjogI2MwYzBjMDtcbiRkYXJrLWdyZXk6ICMxYTFhMWE7XG4kZGFyay1ncmV5LTUwOiByZ2IoMjYsIDI2LCAyNiwgMC41KTtcbiRib3JkZXItZ3JleTogI2M3Y2RkNDtcbiRsaWdodC1wdXJwbGU6ICNlYWVhZWE7XG4kaW5wdXQtZGlzYWJsZWQtYmc6ICNmNGY2Zjg7XG4kZXJyb3ItMjogI2RlMjIyZDtcbiRkYW5nZXI6ICNjOTMwNGQ7XG4kcHJldmlvdXMtcGlsbC1jb2xvcjogIzcxOGQ2ZjtcbiR0b29sdGlwLWdyZXk6ICNhYmFiYWI7XG4kbGlnaHQtZ3JlZW46ICNjZmU1ZTQ2NjtcblxuJGZpbHRlcnMtbW9kYWwtaGVhZGVyLXppbmRleDogMTAwMDA7XG4kbW9kYWwtemluZGV4OiA5OTk5O1xuJGxvY2F0aW9uLW92ZXJsYXktemluZGV4OiA5MDAxO1xuJGhlYWRlci1hc2lkZS16aW5kZXg6IDgwMDI7XG4kaGVhZGVyLWFzaWRlLWJhY2tncm91bmQtemluZGV4OiA4MDAxO1xuJGhlYWRlci16aW5kZXg6IDgwMDA7XG4kbmF2aWdhdGlvbi16aW5kZXg6IDgwMDA7XG4kcGFnZS1sb2FkaW5nLXppbmRleDogNzAwMTtcbiR0b29sdGlwLXppbmRleDogNzAwMDtcbiRuZXctc3RvcnktY29udGVudC1zdGF0ZS16aW5kZXg6IDUwMDtcbiRmaWx0ZXItZHJvcGRvd24temluZGV4OiAxMDA7XG4kbW9kYWwtdG9wLWluZGljYXRvci16aW5kZXg6IDUxO1xuJG1vZGFsLXRvcC1pbmRpY2F0b3ItYmFja2dyb3VuZC16aW5kZXg6IDUxO1xuJGNoYXJ0LXppbmRleDogMTtcbiRjaGFydC1jb250cm9sLXppbmRleDogMjtcblxuJHNsaWRlLXRvZ2dsZS1kaXNhYmxlZC1vcHRpb24tYmFja2dyb3VuZDogI2RkZGRkZDtcblxuJHRvYXN0LWluZm8tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4kdG9hc3QtaW5mby10aXRsZS1jb2xvcjogIzQ5NDk0OTtcbiR0b2FzdC1pbmZvLW1lc3NhZ2UtY29sb3I6ICM0MjJjMDA7XG4kdG9hc3QtaW5mby1idXR0b24tY29sb3I6ICM2YzRlOTk7XG5cbiR0b2FzdC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6ICNkOWVlZWQ7XG4kdG9hc3Qtc3VjY2Vzcy10aXRsZS1jb2xvcjogIzAwNDU0MjtcbiR0b2FzdC1zdWNjZXNzLW1lc3NhZ2UtY29sb3I6ICMwMTMyMzA7XG4kdG9hc3Qtc3VjY2Vzcy1idXR0b24tY29sb3I6ICMwMTY5NjU7XG5cbiR0b2FzdC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6ICNmZmYxZDU7XG4kdG9hc3Qtd2FybmluZy10aXRsZS1jb2xvcjogIzZiNDcwMDtcbiR0b2FzdC13YXJuaW5nLW1lc3NhZ2UtY29sb3I6ICM0MjJjMDA7XG4kdG9hc3Qtd2FybmluZy1idXR0b24tY29sb3I6ICNjYzhmMTQ7XG5cbiR0b2FzdC1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiAjZjVkNWRiO1xuJHRvYXN0LWVycm9yLXRpdGxlLWNvbG9yOiAjNzMwMDE1O1xuJHRvYXN0LWVycm9yLW1lc3NhZ2UtY29sb3I6ICM0NTA2MTE7XG4kdG9hc3QtZXJyb3Itc3VjY2Vzcy1jb2xvcjogI2Q5ZWVlZDtcbiR0b2FzdC1lcnJvci1idXR0b24tY29sb3I6ICNiMjFkMzk7XG5cbiR0b2FzdC1jbG9zZS1idXR0b24tY29sb3I6ICM3MzAwMTU7XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AbWl4aW4gZmxleC1nYXAoJGdhcCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgbWFyZ2luLXRvcDogKC0kZ2FwKTtcbiAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoKC0kZ2FwKSwgJGdsb2JhbCk7XG5cbiAgPiAqIHtcbiAgICBtYXJnaW4tdG9wOiAkZ2FwO1xuICAgIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCRnYXAsICRnbG9iYWwpO1xuICB9XG59XG5cbkBtaXhpbiBiYXNlLWNvbnRhaW5lcigkY29udGVudC13aWR0aCkge1xuICAkZGVza3RvcC1wYWRkaW5nOiAycmVtO1xuICBtYXgtd2lkdGg6IGNhbGMoI3skY29udGVudC13aWR0aH0gKyAoI3skZGVza3RvcC1wYWRkaW5nfSkpO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQycmVtKSB7XG4gICAgQGluY2x1ZGUgcGFkZGluZy1sZWZ0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICAgIEBpbmNsdWRlIHBhZGRpbmctcmlnaHQoJGRlc2t0b3AtcGFkZGluZywgdHJ1ZSk7XG4gIH1cbn1cblxuQG1peGluIGNlbnRlckFic29sdXRlRWxlbWVudCB7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbkBtaXhpbiBvbmx5LWx0ci1nbG9iYWwge1xuICBodG1sOm5vdChbZGlyPSdydGwnXSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsLWdsb2JhbCB7XG4gIGh0bWxbZGlyPSdydGwnXSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1sdHIge1xuICA6aG9zdC1jb250ZXh0KGh0bWw6bm90KFtkaXI9J3J0bCddKSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsIHtcbiAgOmhvc3QtY29udGV4dChodG1sW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBydGwtdmFsdWUoJHByb3BlcnR5LCAkbHRyLXZhbHVlLCAkcnRsLXZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaWYgJGdsb2JhbCA9PSB0cnVlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ci1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsLWdsb2JhbCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRydGwtdmFsdWU7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ciB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRsdHItdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gcnRsLXByb3BlcnR5KCRsdHItcHJvcGVydHksICRydGwtcHJvcGVydHksICR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcnRsLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skbHRyLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hcmdpbi1sZWZ0KCRtYXJnaW4sICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShtYXJnaW4tbGVmdCwgbWFyZ2luLXJpZ2h0LCAkbWFyZ2luLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIG1hcmdpbi1yaWdodCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLXJpZ2h0LCBtYXJnaW4tbGVmdCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nKCRwYWRkaW5nVG9wLCAkcGFkZGluZ1JpZ2h0LCAkcGFkZGluZ0JvdHRvbSwgJHBhZGRpbmdMZWZ0LCAkZ2xvYmFsOiBmYWxzZSkge1xuICBwYWRkaW5nLXRvcDogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nUmlnaHQsICRnbG9iYWwpO1xuICBwYWRkaW5nLWJvdHRvbTogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nTGVmdCwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLWxlZnQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmctcmlnaHQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRleHQtYWxpZ24tbGVmdCgkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUodGV4dC1hbGlnbiwgbGVmdCwgcmlnaHQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShsZWZ0LCByaWdodCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHJpZ2h0LCBsZWZ0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gdHJhbnNsYXRlWFkoJHZhbHVlWCwgJHZhbHVlWSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRyYW5zZm9ybSwgdHJhbnNsYXRlKCR2YWx1ZVgsICR2YWx1ZVkpLCB0cmFuc2xhdGUoLSR2YWx1ZVgsICR2YWx1ZVkpLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1sZWZ0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1sZWZ0LCBib3JkZXItcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItcmlnaHQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXJpZ2h0LCBib3JkZXItbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsIGJvcmRlci10b3AtbGVmdC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItdG9wLWxlZnQtcmFkaXVzLCBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGZsb2F0LWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCBsZWZ0LCByaWdodCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gZmxvYXQtcmlnaHQge1xuICBAaW5jbHVkZSBydGwtdmFsdWUoZmxvYXQsIHJpZ2h0LCBsZWZ0LCAkZ2xvYmFsOiBmYWxzZSk7XG59XG5cbkBtaXhpbiBzbWFsbC1kZXNrdG9wLW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbGcpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC14bCAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1hbmQtdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbGcgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBzbWFsbC1tb2JpbGUtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1zIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbWQgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0YWJsZXQtb25seSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS11cCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBkaXNhYmxlLXNjcm9sbGJhciB7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 72228:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/charts/text-boxes/text-boxes.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextBoxesModule": () => (/* binding */ TextBoxesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _directives_tooltip_tooltip_directive_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../directives/tooltip/tooltip.directive.module */ 84898);
/* harmony import */ var _text_boxes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text-boxes.component */ 36724);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





class TextBoxesModule {
  static #_ = this.ɵfac = function TextBoxesModule_Factory(t) {
    return new (t || TextBoxesModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: TextBoxesModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _directives_tooltip_tooltip_directive_module__WEBPACK_IMPORTED_MODULE_0__.TooltipDirectiveModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TextBoxesModule, {
    declarations: [_text_boxes_component__WEBPACK_IMPORTED_MODULE_1__.TextBoxesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _directives_tooltip_tooltip_directive_module__WEBPACK_IMPORTED_MODULE_0__.TooltipDirectiveModule],
    exports: [_text_boxes_component__WEBPACK_IMPORTED_MODULE_1__.TextBoxesComponent]
  });
})();

/***/ }),

/***/ 53863:
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/charts/text-grid/text-grid.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextGridComponent": () => (/* binding */ TextGridComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);



function TextGridComponent_ng_container_2_div_1_p_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r4.value, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, item_r4.unit), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, item_r4.text), "");
  }
}
function TextGridComponent_ng_container_2_div_1_p_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 12);
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r7.getSecondaryHeaderText(item_r4.text, item_r4.value), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function TextGridComponent_ng_container_2_div_1_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TextGridComponent_ng_container_2_div_1_p_1_ng_container_1_Template, 7, 7, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TextGridComponent_ng_container_2_div_1_p_1_ng_template_2_Template, 1, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.variant === "primary")("ngIfElse", _r6);
  }
}
function TextGridComponent_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TextGridComponent_ng_container_2_div_1_p_1_Template, 4, 2, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.variant);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.data.summary);
  }
}
function TextGridComponent_ng_container_2_p_3_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r10.value, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, item_r10.text), "\u00A0");
  }
}
function TextGridComponent_ng_container_2_p_3_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r10.customContent, "\u00A0");
  }
}
function TextGridComponent_ng_container_2_p_3_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10.extraText);
  }
}
function TextGridComponent_ng_container_2_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 13)(1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TextGridComponent_ng_container_2_p_3_ng_container_7_Template, 5, 4, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TextGridComponent_ng_container_2_p_3_ng_template_8_Template, 2, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TextGridComponent_ng_container_2_p_3_span_10_Template, 2, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("last-nb", !ctx_r2.hasBottomBorder(i_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("pb-0h", !!item_r10.customContent)("heading-spacer", ctx_r2.extraHeadingSpace);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 10, item_r10.header));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r10.customContent)("ngIfElse", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r10.extraText);
  }
}
function TextGridComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TextGridComponent_ng_container_2_div_1_Template, 2, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TextGridComponent_ng_container_2_p_3_Template, 11, 12, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.data == null ? null : ctx_r0.data.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.variant);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](4, 3, ctx_r0.data == null ? null : ctx_r0.data.table, 0, ctx_r0.MAX_ITEMS));
  }
}
const _c0 = function (a0) {
  return {
    value: a0
  };
};
class TextGridComponent {
  constructor(translateService) {
    this.translateService = translateService;
    this.MAX_ITEMS = 7;
    this.variant = 'primary';
    this.extraHeadingSpace = false;
  }
  getSecondaryHeaderText(text, value) {
    return this.translateService.instant(text, {
      value
    }).replace(value, `<span class="highlight">${value}</span>`);
  }
  hasBottomBorder(index) {
    let length = this.data?.table.length;
    length > this.MAX_ITEMS && (length = this.MAX_ITEMS);
    const isEven = length % 2 === 0;
    return isEven ? index < length - 2 : index < length - 1;
  }
  static #_ = this.ɵfac = function TextGridComponent_Factory(t) {
    return new (t || TextGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TextGridComponent,
    selectors: [["loop-chart-text-grid"]],
    inputs: {
      data: "data",
      chartTitle: "chartTitle",
      variant: "variant",
      extraHeadingSpace: "extraHeadingSpace"
    },
    decls: 3,
    vars: 7,
    consts: [[3, "innerHtml"], [4, "ngIf"], ["class", "summary", 3, "ngClass", 4, "ngIf"], [1, "table", 3, "ngClass"], ["class", "table-item", 3, "last-nb", 4, "ngFor", "ngForOf"], [1, "summary", 3, "ngClass"], ["class", "summary-item", 4, "ngFor", "ngForOf"], [1, "summary-item"], [4, "ngIf", "ngIfElse"], ["secondary", ""], [1, "value"], [1, "description"], [3, "innerHTML"], [1, "table-item"], [1, "heading"], [1, "extra-character"], ["customText", ""], ["class", "extra-text", 4, "ngIf"], [1, "value__text"], [1, "extra-text"]],
    template: function TextGridComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TextGridComponent_ng_container_2_Template, 5, 7, "ng-container", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 2, ctx.chartTitle, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.data == null ? null : ctx.data.table[0] == null ? null : ctx.data.table[0].headerValue)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.SlicePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    styles: [".summary[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1.875rem;\n}\n.summary[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: #31135e;\n  font-weight: 600;\n  font-size: 1rem;\n}\n.summary[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n@media (max-width: 767.9px) {\n  .summary[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%], .summary[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n}\n\n.table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.table[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 0 50%;\n  flex-direction: column;\n  padding: 1.25rem 0;\n  border-bottom: 1px solid #e9e9e9;\n  max-width: 50%;\n  word-break: break-word;\n  justify-content: flex-start;\n}\n@media (max-width: 767.9px) {\n  .table[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    padding: 0.625rem 0.625rem 0.625rem 0;\n    max-width: 100%;\n    flex: 1 0 100%;\n    flex-direction: row;\n  }\n  .table[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n.table[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: #31135e;\n  font-weight: 600;\n  font-size: 1.25rem;\n}\n@media (max-width: 767.9px) {\n  .table[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n}\n.table[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .extra-text[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: 600;\n  color: #4d4d4d;\n}\n.table[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  display: inline-flex;\n}\n@media (max-width: 767.9px) {\n  .table[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n}\n.table[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  color: #656565;\n  display: flex;\n  font-size: 1rem;\n  justify-content: flex-start;\n  line-height: 1.5;\n}\n@media (max-width: 767.9px) {\n  .table[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n    flex: 0 0 60%;\n  }\n}\n@media (min-width: 768px) {\n  html:not([dir=rtl])[_nghost-%COMP%]   .table[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(odd), html:not([dir=rtl])   [_nghost-%COMP%]   .table[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(odd) {\n    border-right: 1px solid #e9e9e9;\n  }\n  html[dir=rtl][_nghost-%COMP%]   .table[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(odd), html[dir=rtl]   [_nghost-%COMP%]   .table[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(odd) {\n    border-left: 1px solid #e9e9e9;\n  }\n  html:not([dir=rtl])[_nghost-%COMP%]   .table[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(odd), html:not([dir=rtl])   [_nghost-%COMP%]   .table[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(odd) {\n    padding-right: 1.25rem;\n  }\n  html[dir=rtl][_nghost-%COMP%]   .table[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(odd), html[dir=rtl]   [_nghost-%COMP%]   .table[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(odd) {\n    padding-left: 1.25rem;\n  }\n  html:not([dir=rtl])[_nghost-%COMP%]   .table[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(even), html:not([dir=rtl])   [_nghost-%COMP%]   .table[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(even) {\n    padding-left: 1.25rem;\n  }\n  html[dir=rtl][_nghost-%COMP%]   .table[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(even), html[dir=rtl]   [_nghost-%COMP%]   .table[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(even) {\n    padding-right: 1.25rem;\n  }\n  .table[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(1), .table[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(2) {\n    border-top: 1px solid #e9e9e9;\n  }\n  .table[_ngcontent-%COMP%]    > .last-nb[_ngcontent-%COMP%] {\n    border-bottom: none;\n  }\n}\n@media (max-width: 767.9px) {\n  .table[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n}\n\n.extra-character[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.table.secondary[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 2.188rem;\n}\n.table.secondary[_ngcontent-%COMP%]   .value__text[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.25rem;\n  text-transform: capitalize;\n}\n.table.secondary[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(3)   .value[_ngcontent-%COMP%], .table.secondary[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(4)   .value[_ngcontent-%COMP%] {\n  font-size: 1.25rem !important;\n}\n.table.secondary[_ngcontent-%COMP%]   .table-item[_ngcontent-%COMP%] {\n  line-height: 1.25;\n  padding-right: 0.5rem;\n}\n@media (min-width: 768px) {\n  .table.secondary[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(3), .table.secondary[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(4) {\n    border-bottom: none;\n  }\n}\n@media (max-width: 767.9px) {\n  .table.secondary[_ngcontent-%COMP%]   .extra-character[_ngcontent-%COMP%] {\n    display: contents;\n  }\n}\n\n  .highlight {\n  font-weight: 600;\n  color: #31135e;\n}\n\n@media (min-width: 768px) {\n  .heading-spacer[_ngcontent-%COMP%] {\n    margin-bottom: 0.938rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQtZ3JpZC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCIuLi8uLi8uLi8uLi9zdHlsZXMvX21peGlucy5zY3NzIiwiLi4vLi4vLi4vLi4vc3R5bGVzL2xvb3AtZGVzaWduLXN5c3RlbS9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUhGO0FBSUU7RUFDRSxjQ0ljO0VESGQsZ0JBQUE7RUFDQSxlQUFBO0FBRko7QUFJRTtFQUNFLGVBQUE7QUFGSjtBRTJLRTtFRnJLRTs7SUFFRSxtQkFBQTtFQUhKO0FBQ0Y7O0FBT0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQUpGO0FBTUU7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FBSko7QUVzSkU7RUYxSkE7SUFXSSxxQ0FBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7RUFISjtFQUlJO0lBQ0UsVUFBQTtFQUZOO0FBQ0Y7QUFLSTtFQUNFLGNDckNZO0VEc0NaLGdCQUFBO0VBQ0Esa0JBQUE7QUFITjtBRXNJRTtFRnRJRTtJQUtJLG1CQUFBO0VBRE47QUFDRjtBQUdNO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFEUjtBQUlJO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0FBRk47QUV3SEU7RUZ4SEU7SUFJSSxtQkFBQTtFQUFOO0FBQ0Y7QUFHSTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7QUFETjtBRTRHRTtFRmhIRTtJQVFJLG1CQUFBO0lBQ0EsYUFBQTtFQUFOO0FBQ0Y7QUVrSEU7RUF6SkE7SUEwQ0ksK0JGR3NCO0VBRjFCO0VFckNBO0lBd0NJLDhCRkRzQjtFQUMxQjtFRTlDQTtJQTBDSSxzQkZJdUI7RUFHM0I7RUUzQ0E7SUF3Q0kscUJBQUE7RUZNSjtFRXBEQTtJQTBDSSxxQkZRc0I7RUFLMUI7RUVqREE7SUF3Q0ksc0JGSXNCO0VBUTFCO0VBTEU7O0lBRUUsNkJBQUE7RUFPSjtFQUpFO0lBQ0UsbUJBQUE7RUFNSjtBQUNGO0FFMkVFO0VGN0VFO0lBQ0UsbUJBQUE7RUFLSjtBQUNGOztBQURBO0VBQ0UsYUFBQTtBQUlGOztBQUFFO0VBQ0UsbUJBQUE7QUFHSjtBQUZJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUFJTjtBQUVJOztFQUNFLDZCQUFBO0FBQ047QUFHRTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7QUFESjtBRTZERTtFRnhERTs7SUFFRSxtQkFBQTtFQUZKO0FBQ0Y7QUUyQ0U7RUZ0Q0U7SUFDRSxpQkFBQTtFQUZKO0FBQ0Y7O0FBT0U7RUFDRSxnQkFBQTtFQUNBLGNHL0ljO0FIMklsQjs7QUU2Q0U7RUZyQ0Y7SUFFSSx1QkFBQTtFQUxGO0FBQ0YiLCJmaWxlIjoidGV4dC1ncmlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnbWl4aW5zJztcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICdsb29wLWRlc2lnbi1zeXN0ZW0vY29sb3JzJztcblxuLnN1bW1hcnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiAxLjg3NXJlbTtcbiAgLnZhbHVlIHtcbiAgICBjb2xvcjogJGNvbG9yLXB1cnBsZS05MDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuICAuZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuXG4gIEBpbmNsdWRlIG1vYmlsZS1vbmx5IHtcbiAgICAudmFsdWUsXG4gICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgfVxuICB9XG59XG5cbi50YWJsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICA+ICoge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMSAwIDUwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDEuMjVyZW0gMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZTllOTtcbiAgICBtYXgtd2lkdGg6IDUwJTtcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblxuICAgIEBpbmNsdWRlIG1vYmlsZS1vbmx5IHtcbiAgICAgIHBhZGRpbmc6IDAuNjI1cmVtIDAuNjI1cmVtIDAuNjI1cmVtIDA7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBmbGV4OiAxIDAgMTAwJTtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAudmFsdWUge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC52YWx1ZSB7XG4gICAgICBjb2xvcjogJGNvbG9yLXB1cnBsZS05MDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICBAaW5jbHVkZSBtb2JpbGUtb25seSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICB9XG5cbiAgICAgIC5leHRyYS10ZXh0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogIzRkNGQ0ZDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5oZWFkaW5nIHtcbiAgICAgIGNvbG9yOiAjNjU2NTY1O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG5cbiAgICAgIEBpbmNsdWRlIG1vYmlsZS1vbmx5IHtcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgZmxleDogMCAwIDYwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAaW5jbHVkZSBtb2JpbGUtdXAge1xuICAgID4gKjpudGgtY2hpbGQob2RkKSB7XG4gICAgICBAaW5jbHVkZSBib3JkZXItcmlnaHQoMXB4IHNvbGlkICNlOWU5ZTkpO1xuICAgICAgQGluY2x1ZGUgcGFkZGluZy1yaWdodCgxLjI1cmVtKTtcbiAgICB9XG5cbiAgICA+ICo6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgIEBpbmNsdWRlIHBhZGRpbmctbGVmdCgxLjI1cmVtKTtcbiAgICB9XG5cbiAgICA+ICo6bnRoLWNoaWxkKDEpLFxuICAgID4gKjpudGgtY2hpbGQoMikge1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOWU5ZTk7XG4gICAgfVxuXG4gICAgPiAubGFzdC1uYiB7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cbiAgfVxuXG4gIEBpbmNsdWRlIG1vYmlsZS1vbmx5IHtcbiAgICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4uZXh0cmEtY2hhcmFjdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRhYmxlLnNlY29uZGFyeSB7XG4gIC52YWx1ZSB7XG4gICAgZm9udC1zaXplOiAyLjE4OHJlbTtcbiAgICAmX190ZXh0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgfVxuICB9XG5cbiAgPiAqOm50aC1jaGlsZCgzKSxcbiAgPiAqOm50aC1jaGlsZCg0KSB7XG4gICAgLnZhbHVlIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIC50YWJsZS1pdGVtIHtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gIH1cblxuICBAaW5jbHVkZSBtb2JpbGUtdXAge1xuICAgID4gKjpudGgtY2hpbGQoMyksXG4gICAgPiAqOm50aC1jaGlsZCg0KSB7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cbiAgfVxuICBAaW5jbHVkZSBtb2JpbGUtb25seSB7XG4gICAgLmV4dHJhLWNoYXJhY3RlciB7XG4gICAgICBkaXNwbGF5OiBjb250ZW50cztcbiAgICB9XG4gIH1cbn1cblxuOjpuZy1kZWVwIHtcbiAgLmhpZ2hsaWdodCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogJGxvb3AtcHVycGxlLTEwMDtcbiAgfVxufVxuXG4uaGVhZGluZy1zcGFjZXIge1xuICBAaW5jbHVkZSBtb2JpbGUtdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDAuOTM4cmVtO1xuICB9XG59XG4iLCIkc3RhbmRhcmRGb250RmFtaWx5OiAnTm90byBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4kY29udGVudC10b3AtcGFkZGluZzogM3JlbTtcbiRwb3N0LWxpc3QtYmc6ICNkYWRhZGE7XG4kd2hpdGU6ICNmZmZmZmY7XG4kcG9zdC1wcmV2aWV3LWJnOiB3aGl0ZTtcbiRsaWdodC1ncmF5LWJnOiAjZjRmNGY0O1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLWxlZnQ6IDIuMzQ0cmVtO1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLXJpZ2h0OiAxLjA2M3JlbTtcbiRwb3N0LXByZXZpZXctcGFkZGluZzogMi41cmVtICRwb3N0LXByZXZpZXctcGFkZGluZy1yaWdodCAxLjI1cmVtICRwb3N0LXByZXZpZXctcGFkZGluZy1sZWZ0O1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLW1vYmlsZTogMXJlbSAxcmVtIDAuNXJlbSAxcmVtO1xuJHBvc3QtcGFkZGluZy1ib3R0b206IDFyZW07XG4kcG9zdC1wcmV2aWV3LWd1dHRlcjogMnB4O1xuJHBvc3QtaGlnaGxpZ2h0LWNvbG9yOiAjNTcwZjg1O1xuJGNvbG9yLXB1cnBsZS05MDogIzMxMTM1ZTtcbiRjb2xvci1wdXJwbGUtNjA6ICM5ODhhYWU7XG4kY29sb3ItcHVycGxlLTUwOiAjOTg4OWFmO1xuJGNvbG9yLXB1cnBsZS0xMDogI2Y1ZjNmNztcbiRjb2xvci1wdXJwbGUtbGlnaHQ6ICM0YjM1YmM7XG4kY29sb3ItcHVycGxlLXZlcnktbGlnaHQ6ICM4NjZhYjA7XG4kY29sb3ItcHVycGxlLXN0ZXBwZXI6ICM0YTJiN2E7XG4kY29sb3ItZ3JlZW4tMTAwOiAjMDUyODA0O1xuJGNvbG9yLWdyZWVuLTkwOiAjMGQzZDBiO1xuJGNvbG9yLWdyZWVuLTgwOiAjMWY2YjFlO1xuJGNvbG9yLWdyZWVuLTcwOiAjMzU4YTM0O1xuJGNvbG9yLWdyZWVuLTYwOiAjNmQ5YTZlO1xuJGNvbG9yLWdyZWVuLTUwOiAjODlhODhmO1xuJGNvbG9yLWdyZWVuLTQwOiAjOWZjOGE2O1xuJGNvbG9yLWdyZWVuLTMwOiAjYWFkNmIzO1xuJGNvbG9yLWdyZWVuLTIwOiAjYzllOWQxO1xuJGNvbG9yLWdyZWVuLTEwOiAjZjNmN2YzO1xuJGNvbG9yLWdyZWVuLXN0ZXBwZXI6ICMxMDdENzk7XG4kY29sb3ItZ3JlZW4tbWVkaXVtOiAjYWRkYWFmO1xuJGNvbG9yLWdyZWVuLWxpZ2h0OiAjM0FCMDk4O1xuJGNvbG9yLWdyZWVuLXZlcnktbGlnaHQ6ICNFREZGRkM7XG4kZ3JleS0xOiAjZDZkMGRmO1xuJHN1cHBvcnQtMDE6ICNkYTFlMjg7XG4kZXJyb3I6ICNlZTIzMmY7XG4kdGV4dC1ibGFjazogIzE2MTYxNjtcbiR0ZXh0LXNlY29uZGFyeTogIzM5MzkzOTtcbiR0ZXh0LWdyYXllZDogIzUyNTI1MjtcbiR0ZXh0LWdyYXllZDgwOiAjOGY4YjhiO1xuJHRleHQtZ3JheS1jYXQ6ICM2ZDcyNzg7XG4kdWktYmFja2dyb3VuZC1ncmF5OiAjZjhmOGY5O1xuJGJvcmRlcjogI2U4ZTdlYTtcbiRlbnRpdHktYm9yZGVyLWNvbG9yOiAjMWMwZjMwMjE7XG4kbG9hZGluZy1iZzogcmdiKDAgMCAwIC8gMTglKTtcbiRzdXBwb3J0LTA0OiAjMDA0M2NlO1xuJGxvb3AtdXNlcm5hbWU6ICMxOTgwMzg7XG4kbG9vcC1hY3RpdmUtY3VycmVudC11c2VyOiAjMjRhMTQ4O1xuJHdhcm0tZ3JheS0xMC1jb2xvcjogI2Y3ZjNmMjtcbiR3YXJtLWdyYXktMjAtY29sb3I6ICNlNWUwZGY7XG4kaGVhZGluZy0xLWNvbG9yOiAjMWMwZjMwO1xuJGhlYWRpbmctMi1jb2xvcjogIzMyMDc0ZDtcbiRoZWFkaW5nLTMtY29sb3I6ICMyZjI3MzU7XG4kbW9iaWxlLWljb24tY29sb3I6ICMxYzBmMzA7XG4kc3RhdGUtZGlzYWJsZWQtMDI6ICNjNmM2YzY7XG4kbGluay0wMjogIzU2MDFiMjtcbiRoZWFkZXItcHVycGxlOiAjMzExMzVlO1xuJGhlYWRlci1ncmVlbjogIzEwN2Q3OTtcbiRwdXJwbGUtbGlnaHQ6ICNjYmM0ZDc7XG4kcHVycGxlLWJhY2tncm91bmQtbGlnaHQ6ICNkY2Q1ZTc7XG4kbG9vcC1pbnRlcmFjdGl2ZS0wMTogIzEwN2Q3OTtcbiRsb29wLWludGVyYWN0aXZlLTAxLW9wYWNpdHk6IHJnYmEoMTYsIDEyNSwgMTIxLCAwLjMpO1xuJGZpbHRlcnMtZ3JlZW46ICMwNTY3NjM7XG4vLyBCcmVha3BvaW50c1xuXG4kYnJlYWtwb2ludC1zOiAzNzVweDtcbiRicmVha3BvaW50LXNtOiA0MjBweDtcbiRicmVha3BvaW50LW1kOiA3NjhweDtcbiRicmVha3BvaW50LWxnOiAxMDgwcHg7XG4kYnJlYWtwb2ludC14bDogMTI3NXB4O1xuXG4kYnJlYWtwb2ludC1tZC12MjogODIwcHg7XG5cbiRoZWFkZXItaGVpZ2h0OiA0LjM3NXJlbTtcbiRoZWFkZXItaGVpZ2h0LXYyOiA0LjM3NXJlbTtcbiRzdGF0ZS1zZWxlY3RlZC11aTogI2UwZTBlMDtcbiRjLWxlZnQtcGFkZGluZzogMS41cmVtO1xuJG1lbnUtYWN0aXZlLWNvbG9yOiAjM0FCMDk4O1xuJG1lbnUtaG92ZXItY29sb3I6ICMzQUIwOTg7XG4kdGFiLWluYWN0aXZlLWNvbG9yOiAjODlhZjkzO1xuJGxpbmUtY29sb3I6ICNkMGRmZDI7XG4kYm9yZGVyLWdyYXk6ICNjY2NjY2M7XG4kdGV4dC1ncmF5OiAjODA4MDgwO1xuJGJhc2UtY29udGFpbmVyLXdpZHRoOiA4MS4xMjRyZW07XG4kaGVhZGVyLXVuZGVybGluZS1oZWlnaHQ6IDAuMzEzcmVtO1xuXG4vLyBNb2RlcmF0b3IgcmV2aWV3IHNlY3Rpb25zXG4kZm9vdGVyLWhlaWdodDogNHJlbTtcbiR0b3BiYXItaGVpZ2h0OiAxMC41cmVtO1xuJHN0ZXBwZXItaGVpZ2h0OiA2LjdyZW07XG5cbi8vIE5ldyBTdG9yeSBmbG93IC8gc3RvcnkgZGV0YWlscyB2YXJpYWJsZXNcbiRncmV5OiAjNjU2NTY1O1xuJGxpZ2h0LWdyZXktMjogI2IxYjRiNjtcbiRsaWdodC1ncmV5LTM6ICNiNGI0YjQ7XG4kbGlnaHQtZ3JleS00OiAjY2ZkM2Q4O1xuJGxpZ2h0LWdyZXktNTogI2Q5ZTBlNztcbiRsaWdodC1ncmV5LTY6ICNmMWYyZjI7XG4kbGlnaHQtZ3JleS03OiAjYzRjNGM0O1xuJGxpZ2h0LWdyZXktODogI2U5ZTllOTtcbiRsaWdodC1ncmV5LTk6ICNlNmVhZWQ7XG4kbGlnaC1ncmV5LXNlcGFyYXRvcjogI2MwYzBjMDtcbiRkYXJrLWdyZXk6ICMxYTFhMWE7XG4kZGFyay1ncmV5LTUwOiByZ2IoMjYsIDI2LCAyNiwgMC41KTtcbiRib3JkZXItZ3JleTogI2M3Y2RkNDtcbiRsaWdodC1wdXJwbGU6ICNlYWVhZWE7XG4kaW5wdXQtZGlzYWJsZWQtYmc6ICNmNGY2Zjg7XG4kZXJyb3ItMjogI2RlMjIyZDtcbiRkYW5nZXI6ICNjOTMwNGQ7XG4kcHJldmlvdXMtcGlsbC1jb2xvcjogIzcxOGQ2ZjtcbiR0b29sdGlwLWdyZXk6ICNhYmFiYWI7XG4kbGlnaHQtZ3JlZW46ICNjZmU1ZTQ2NjtcblxuJGZpbHRlcnMtbW9kYWwtaGVhZGVyLXppbmRleDogMTAwMDA7XG4kbW9kYWwtemluZGV4OiA5OTk5O1xuJGxvY2F0aW9uLW92ZXJsYXktemluZGV4OiA5MDAxO1xuJGhlYWRlci1hc2lkZS16aW5kZXg6IDgwMDI7XG4kaGVhZGVyLWFzaWRlLWJhY2tncm91bmQtemluZGV4OiA4MDAxO1xuJGhlYWRlci16aW5kZXg6IDgwMDA7XG4kbmF2aWdhdGlvbi16aW5kZXg6IDgwMDA7XG4kcGFnZS1sb2FkaW5nLXppbmRleDogNzAwMTtcbiR0b29sdGlwLXppbmRleDogNzAwMDtcbiRuZXctc3RvcnktY29udGVudC1zdGF0ZS16aW5kZXg6IDUwMDtcbiRmaWx0ZXItZHJvcGRvd24temluZGV4OiAxMDA7XG4kbW9kYWwtdG9wLWluZGljYXRvci16aW5kZXg6IDUxO1xuJG1vZGFsLXRvcC1pbmRpY2F0b3ItYmFja2dyb3VuZC16aW5kZXg6IDUxO1xuJGNoYXJ0LXppbmRleDogMTtcbiRjaGFydC1jb250cm9sLXppbmRleDogMjtcblxuJHNsaWRlLXRvZ2dsZS1kaXNhYmxlZC1vcHRpb24tYmFja2dyb3VuZDogI2RkZGRkZDtcblxuJHRvYXN0LWluZm8tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4kdG9hc3QtaW5mby10aXRsZS1jb2xvcjogIzQ5NDk0OTtcbiR0b2FzdC1pbmZvLW1lc3NhZ2UtY29sb3I6ICM0MjJjMDA7XG4kdG9hc3QtaW5mby1idXR0b24tY29sb3I6ICM2YzRlOTk7XG5cbiR0b2FzdC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6ICNkOWVlZWQ7XG4kdG9hc3Qtc3VjY2Vzcy10aXRsZS1jb2xvcjogIzAwNDU0MjtcbiR0b2FzdC1zdWNjZXNzLW1lc3NhZ2UtY29sb3I6ICMwMTMyMzA7XG4kdG9hc3Qtc3VjY2Vzcy1idXR0b24tY29sb3I6ICMwMTY5NjU7XG5cbiR0b2FzdC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6ICNmZmYxZDU7XG4kdG9hc3Qtd2FybmluZy10aXRsZS1jb2xvcjogIzZiNDcwMDtcbiR0b2FzdC13YXJuaW5nLW1lc3NhZ2UtY29sb3I6ICM0MjJjMDA7XG4kdG9hc3Qtd2FybmluZy1idXR0b24tY29sb3I6ICNjYzhmMTQ7XG5cbiR0b2FzdC1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiAjZjVkNWRiO1xuJHRvYXN0LWVycm9yLXRpdGxlLWNvbG9yOiAjNzMwMDE1O1xuJHRvYXN0LWVycm9yLW1lc3NhZ2UtY29sb3I6ICM0NTA2MTE7XG4kdG9hc3QtZXJyb3Itc3VjY2Vzcy1jb2xvcjogI2Q5ZWVlZDtcbiR0b2FzdC1lcnJvci1idXR0b24tY29sb3I6ICNiMjFkMzk7XG5cbiR0b2FzdC1jbG9zZS1idXR0b24tY29sb3I6ICM3MzAwMTU7XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AbWl4aW4gZmxleC1nYXAoJGdhcCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgbWFyZ2luLXRvcDogKC0kZ2FwKTtcbiAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoKC0kZ2FwKSwgJGdsb2JhbCk7XG5cbiAgPiAqIHtcbiAgICBtYXJnaW4tdG9wOiAkZ2FwO1xuICAgIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCRnYXAsICRnbG9iYWwpO1xuICB9XG59XG5cbkBtaXhpbiBiYXNlLWNvbnRhaW5lcigkY29udGVudC13aWR0aCkge1xuICAkZGVza3RvcC1wYWRkaW5nOiAycmVtO1xuICBtYXgtd2lkdGg6IGNhbGMoI3skY29udGVudC13aWR0aH0gKyAoI3skZGVza3RvcC1wYWRkaW5nfSkpO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQycmVtKSB7XG4gICAgQGluY2x1ZGUgcGFkZGluZy1sZWZ0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICAgIEBpbmNsdWRlIHBhZGRpbmctcmlnaHQoJGRlc2t0b3AtcGFkZGluZywgdHJ1ZSk7XG4gIH1cbn1cblxuQG1peGluIGNlbnRlckFic29sdXRlRWxlbWVudCB7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbkBtaXhpbiBvbmx5LWx0ci1nbG9iYWwge1xuICBodG1sOm5vdChbZGlyPSdydGwnXSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsLWdsb2JhbCB7XG4gIGh0bWxbZGlyPSdydGwnXSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1sdHIge1xuICA6aG9zdC1jb250ZXh0KGh0bWw6bm90KFtkaXI9J3J0bCddKSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsIHtcbiAgOmhvc3QtY29udGV4dChodG1sW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBydGwtdmFsdWUoJHByb3BlcnR5LCAkbHRyLXZhbHVlLCAkcnRsLXZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaWYgJGdsb2JhbCA9PSB0cnVlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ci1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsLWdsb2JhbCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRydGwtdmFsdWU7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ciB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRsdHItdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gcnRsLXByb3BlcnR5KCRsdHItcHJvcGVydHksICRydGwtcHJvcGVydHksICR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcnRsLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skbHRyLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hcmdpbi1sZWZ0KCRtYXJnaW4sICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShtYXJnaW4tbGVmdCwgbWFyZ2luLXJpZ2h0LCAkbWFyZ2luLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIG1hcmdpbi1yaWdodCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLXJpZ2h0LCBtYXJnaW4tbGVmdCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nKCRwYWRkaW5nVG9wLCAkcGFkZGluZ1JpZ2h0LCAkcGFkZGluZ0JvdHRvbSwgJHBhZGRpbmdMZWZ0LCAkZ2xvYmFsOiBmYWxzZSkge1xuICBwYWRkaW5nLXRvcDogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nUmlnaHQsICRnbG9iYWwpO1xuICBwYWRkaW5nLWJvdHRvbTogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nTGVmdCwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLWxlZnQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmctcmlnaHQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRleHQtYWxpZ24tbGVmdCgkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUodGV4dC1hbGlnbiwgbGVmdCwgcmlnaHQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShsZWZ0LCByaWdodCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHJpZ2h0LCBsZWZ0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gdHJhbnNsYXRlWFkoJHZhbHVlWCwgJHZhbHVlWSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRyYW5zZm9ybSwgdHJhbnNsYXRlKCR2YWx1ZVgsICR2YWx1ZVkpLCB0cmFuc2xhdGUoLSR2YWx1ZVgsICR2YWx1ZVkpLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1sZWZ0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1sZWZ0LCBib3JkZXItcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItcmlnaHQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXJpZ2h0LCBib3JkZXItbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsIGJvcmRlci10b3AtbGVmdC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItdG9wLWxlZnQtcmFkaXVzLCBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGZsb2F0LWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCBsZWZ0LCByaWdodCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gZmxvYXQtcmlnaHQge1xuICBAaW5jbHVkZSBydGwtdmFsdWUoZmxvYXQsIHJpZ2h0LCBsZWZ0LCAkZ2xvYmFsOiBmYWxzZSk7XG59XG5cbkBtaXhpbiBzbWFsbC1kZXNrdG9wLW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbGcpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC14bCAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1hbmQtdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbGcgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBzbWFsbC1tb2JpbGUtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1zIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbWQgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0YWJsZXQtb25seSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS11cCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBkaXNhYmxlLXNjcm9sbGJhciB7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIiwiLy8vIGh0dHBzOi8vd3d3LmZpZ21hLmNvbS9maWxlL0dubTAycVQ4bEwxWEV2dE1GT1I2UkwvTG9vcC0yMDIxLUZlYXR1cmUtRGV2ZWxvcG1lbnQ/bm9kZS1pZD00JTNBMzAwXG5cbi8vLyBUaGlzIGlzIHRoZSBtYWluIGNvbG91ciBmb3IgYWxsIHRoZSBlbGVtZW50cy4gSXQgaXMgdXNlZCB0byBjcmVhdGUgYWxsIG9mIHRoZSBpbnB1dCBmaWVsZHMsIGZvciBpY29ucyBldGNcbiRsb29wLWdyZWVuLTEyNTogIzA1Njc2MztcbiRsb29wLWdyZWVuLTEwMDogIzEwN2Q3OTtcbiRsb29wLWdyZWVuLTUwOiAjODdiZWJjO1xuJGxvb3AtZ3JlZW4tMjU6ICNjM2RmZGQ7XG4kbG9vcC1ncmVlbi01OiAjZjNmOGY4O1xuXG4vLy8gVXNlZCBpbiBuYXZpZ2F0aW9uIGFuZCBhcyBzZWNvbmRhcnkgZWxlbWVudCBjb2xvdXJzIG9uIGJ1dHRvbnMgYW5kIGxpbmtzXG4kbG9vcC1wdXJwbGUtMTI1OiAjMjYxMDQ3O1xuJGxvb3AtcHVycGxlLTEwMDogIzMxMTM1ZTtcbiRsb29wLXB1cnBsZS03NTogIzQ2MjQ3ODtcbiRsb29wLXB1cnBsZS02MDogIzg2NmFiMDtcbiRsb29wLXB1cnBsZS01MDogIzhhN2JhMTtcbiRsb29wLXB1cnBsZS00MDogI2VhZTZmMDtcbiRsb29wLXB1cnBsZS0yNTogI2NiYzRkNztcbiRsb29wLXB1cnBsZS01OiAjZjVmM2Y3O1xuXG4vLy8gVXNlZCBhcyBiYWNrZ3JvdW5kIGZvciBkaXNhYmxlZCBsYWJlbHMgYW5kIGZpZWxkcyBhcyB3ZWxsIGFzIGZvciB0YWdzXG4kbGlnaHQtZ3JleTogI2VlZWVlZTtcblxuLy8vIEdyZXlzY2FsZVxuJGdyZXktMTAwOiAjMDAwMDAwO1xuJGdyZXktNTA6IHRyYW5zcGFyZW50aXplKCRncmV5LTEwMCwgMSAtIDAuNSk7XG4kZ3JleS0yNTogdHJhbnNwYXJlbnRpemUoJGdyZXktMTAwLCAxIC0gMC4yNSk7XG4kZ3JleS01OiB0cmFuc3BhcmVudGl6ZSgkZ3JleS0xMDAsIDEgLSAwLjA1KTtcblxuLy8vIG5vdGlmaWNhdGlvbnMsIHN0YXR1cywgY2F0ZWdvcmllc1xuLy8vIHdhcm5pbmcsIGFsZXJ0XG4kZGFuZ2VyLXJlZDogI2VlMjMyZjtcbi8vLyBvaywgYWNjZXB0ZWQsIGZpbmlzaGVkXG4keWVzLWdyZWVuOiAjMWRiMDQ2O1xuLy8vIHBlbmRpbmdcbiRsb29wLXllbGxvdzogI2VjYjMyMDtcblxuLy8vIGhpZ2hsaWdodCBjb2xvdXJzXG4kcHVycGxlLWhpZ2hsaWdodDogIzZmMDFlNTtcbiRwdXJwbGUtaGlnaGxpZ2h0LTAyNTogcmdiYSgxMTEsIDEsIDIyOSwgMC4yNSk7XG4kbG9vcC1waW5rOiAjZWY0N2EyO1xuJGxvb3AtcGluay0wMjU6IHJnYmEoMjM5LCA3MSwgMTYyLCAwLjI1KTtcbiRsaWdodC1ibHVlOiAjMjBkM2VjO1xuJGxpZ2h0LWJsdWUtMDI1OiByZ2JhKDMyLCAyMTEsIDIzNiwgMC4yNSk7XG4kbG9vcC1ibHVlOiAjMjA3MmVjO1xuJGxvb3AtYmx1ZS0wMjU6IHJnYmEoMzIsIDExNCwgMjM2LCAwLjI1KTtcbiRncmVlbi0yOiAjYzNlYzIwO1xuJGdyZWVuLTItMDI1OiByZ2JhKDE5NSwgMjM2LCAzMiwgMC4yNSk7XG4kbG9vcC1vcmFuZ2U6ICNlOTgwMjA7XG4kbG9vcC1vcmFuZ2UtMDI1OiByZ2JhKDIzMywgMTI4LCAzMiwgMC4yNSk7XG5cbi8vLyBTcGFjZXJzXG4kZ3JheS1saW5lLWNvbG9yOiAjZDZkMGRmO1xuXG4kbG9vcC1yZWQtZGFyazogI2M5MzA0ZDtcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2hhcnRzL3RleHQtZ3JpZC90ZXh0LWdyaWQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3N0eWxlcy9fbWl4aW5zLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3N0eWxlcy9sb29wLWRlc2lnbi1zeXN0ZW0vX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFIRjtBQUlFO0VBQ0UsY0NJYztFREhkLGdCQUFBO0VBQ0EsZUFBQTtBQUZKO0FBSUU7RUFDRSxlQUFBO0FBRko7QUUyS0U7RUZyS0U7O0lBRUUsbUJBQUE7RUFISjtBQUNGOztBQU9BO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFKRjtBQU1FO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQUpKO0FFc0pFO0VGMUpBO0lBV0kscUNBQUE7SUFDQSxlQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBO0VBSEo7RUFJSTtJQUNFLFVBQUE7RUFGTjtBQUNGO0FBS0k7RUFDRSxjQ3JDWTtFRHNDWixnQkFBQTtFQUNBLGtCQUFBO0FBSE47QUVzSUU7RUZ0SUU7SUFLSSxtQkFBQTtFQUROO0FBQ0Y7QUFHTTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRFI7QUFJSTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBQUZOO0FFd0hFO0VGeEhFO0lBSUksbUJBQUE7RUFBTjtBQUNGO0FBR0k7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FBRE47QUU0R0U7RUZoSEU7SUFRSSxtQkFBQTtJQUNBLGFBQUE7RUFBTjtBQUNGO0FFa0hFO0VBekpBO0lBMENJLCtCRkdzQjtFQUYxQjtFRXJDQTtJQXdDSSw4QkZEc0I7RUFDMUI7RUU5Q0E7SUEwQ0ksc0JGSXVCO0VBRzNCO0VFM0NBO0lBd0NJLHFCQUFBO0VGTUo7RUVwREE7SUEwQ0kscUJGUXNCO0VBSzFCO0VFakRBO0lBd0NJLHNCRklzQjtFQVExQjtFQUxFOztJQUVFLDZCQUFBO0VBT0o7RUFKRTtJQUNFLG1CQUFBO0VBTUo7QUFDRjtBRTJFRTtFRjdFRTtJQUNFLG1CQUFBO0VBS0o7QUFDRjs7QUFEQTtFQUNFLGFBQUE7QUFJRjs7QUFBRTtFQUNFLG1CQUFBO0FBR0o7QUFGSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBSU47QUFFSTs7RUFDRSw2QkFBQTtBQUNOO0FBR0U7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0FBREo7QUU2REU7RUZ4REU7O0lBRUUsbUJBQUE7RUFGSjtBQUNGO0FFMkNFO0VGdENFO0lBQ0UsaUJBQUE7RUFGSjtBQUNGOztBQU9FO0VBQ0UsZ0JBQUE7RUFDQSxjRy9JYztBSDJJbEI7O0FFNkNFO0VGckNGO0lBRUksdUJBQUE7RUFMRjtBQUNGO0FBQ0EsNHFuQkFBNHFuQiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ21peGlucyc7XG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuQGltcG9ydCAnbG9vcC1kZXNpZ24tc3lzdGVtL2NvbG9ycyc7XG5cbi5zdW1tYXJ5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWJvdHRvbTogMS44NzVyZW07XG4gIC52YWx1ZSB7XG4gICAgY29sb3I6ICRjb2xvci1wdXJwbGUtOTA7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbiAgLmRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cblxuICBAaW5jbHVkZSBtb2JpbGUtb25seSB7XG4gICAgLnZhbHVlLFxuICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIH1cbiAgfVxufVxuXG4udGFibGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgPiAqIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDEgMCA1MCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAxLjI1cmVtIDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWU5ZTk7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cbiAgICBAaW5jbHVkZSBtb2JpbGUtb25seSB7XG4gICAgICBwYWRkaW5nOiAwLjYyNXJlbSAwLjYyNXJlbSAwLjYyNXJlbSAwO1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgZmxleDogMSAwIDEwMCU7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgLnZhbHVlIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudmFsdWUge1xuICAgICAgY29sb3I6ICRjb2xvci1wdXJwbGUtOTA7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgfVxuXG4gICAgICAuZXh0cmEtdGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6ICM0ZDRkNGQ7XG4gICAgICB9XG4gICAgfVxuICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIEBpbmNsdWRlIG1vYmlsZS1vbmx5IHtcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaGVhZGluZyB7XG4gICAgICBjb2xvcjogIzY1NjU2NTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICBsaW5lLWhlaWdodDogMS41O1xuXG4gICAgICBAaW5jbHVkZSBtb2JpbGUtb25seSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIGZsZXg6IDAgMCA2MCU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQGluY2x1ZGUgbW9iaWxlLXVwIHtcbiAgICA+ICo6bnRoLWNoaWxkKG9kZCkge1xuICAgICAgQGluY2x1ZGUgYm9yZGVyLXJpZ2h0KDFweCBzb2xpZCAjZTllOWU5KTtcbiAgICAgIEBpbmNsdWRlIHBhZGRpbmctcmlnaHQoMS4yNXJlbSk7XG4gICAgfVxuXG4gICAgPiAqOm50aC1jaGlsZChldmVuKSB7XG4gICAgICBAaW5jbHVkZSBwYWRkaW5nLWxlZnQoMS4yNXJlbSk7XG4gICAgfVxuXG4gICAgPiAqOm50aC1jaGlsZCgxKSxcbiAgICA+ICo6bnRoLWNoaWxkKDIpIHtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTllOWU5O1xuICAgIH1cblxuICAgID4gLmxhc3QtbmIge1xuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB9XG4gIH1cblxuICBAaW5jbHVkZSBtb2JpbGUtb25seSB7XG4gICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLmV4dHJhLWNoYXJhY3RlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50YWJsZS5zZWNvbmRhcnkge1xuICAudmFsdWUge1xuICAgIGZvbnQtc2l6ZTogMi4xODhyZW07XG4gICAgJl9fdGV4dCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIH1cbiAgfVxuXG4gID4gKjpudGgtY2hpbGQoMyksXG4gID4gKjpudGgtY2hpbGQoNCkge1xuICAgIC52YWx1ZSB7XG4gICAgICBmb250LXNpemU6IDEuMjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAudGFibGUtaXRlbSB7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICB9XG5cbiAgQGluY2x1ZGUgbW9iaWxlLXVwIHtcbiAgICA+ICo6bnRoLWNoaWxkKDMpLFxuICAgID4gKjpudGgtY2hpbGQoNCkge1xuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB9XG4gIH1cbiAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgIC5leHRyYS1jaGFyYWN0ZXIge1xuICAgICAgZGlzcGxheTogY29udGVudHM7XG4gICAgfVxuICB9XG59XG5cbjo6bmctZGVlcCB7XG4gIC5oaWdobGlnaHQge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICRsb29wLXB1cnBsZS0xMDA7XG4gIH1cbn1cblxuLmhlYWRpbmctc3BhY2VyIHtcbiAgQGluY2x1ZGUgbW9iaWxlLXVwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjkzOHJlbTtcbiAgfVxufVxuIiwiJHN0YW5kYXJkRm9udEZhbWlseTogJ05vdG8gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGNvbnRlbnQtdG9wLXBhZGRpbmc6IDNyZW07XG4kcG9zdC1saXN0LWJnOiAjZGFkYWRhO1xuJHdoaXRlOiAjZmZmZmZmO1xuJHBvc3QtcHJldmlldy1iZzogd2hpdGU7XG4kbGlnaHQtZ3JheS1iZzogI2Y0ZjRmNDtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1sZWZ0OiAyLjM0NHJlbTtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1yaWdodDogMS4wNjNyZW07XG4kcG9zdC1wcmV2aWV3LXBhZGRpbmc6IDIuNXJlbSAkcG9zdC1wcmV2aWV3LXBhZGRpbmctcmlnaHQgMS4yNXJlbSAkcG9zdC1wcmV2aWV3LXBhZGRpbmctbGVmdDtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1tb2JpbGU6IDFyZW0gMXJlbSAwLjVyZW0gMXJlbTtcbiRwb3N0LXBhZGRpbmctYm90dG9tOiAxcmVtO1xuJHBvc3QtcHJldmlldy1ndXR0ZXI6IDJweDtcbiRwb3N0LWhpZ2hsaWdodC1jb2xvcjogIzU3MGY4NTtcbiRjb2xvci1wdXJwbGUtOTA6ICMzMTEzNWU7XG4kY29sb3ItcHVycGxlLTYwOiAjOTg4YWFlO1xuJGNvbG9yLXB1cnBsZS01MDogIzk4ODlhZjtcbiRjb2xvci1wdXJwbGUtMTA6ICNmNWYzZjc7XG4kY29sb3ItcHVycGxlLWxpZ2h0OiAjNGIzNWJjO1xuJGNvbG9yLXB1cnBsZS12ZXJ5LWxpZ2h0OiAjODY2YWIwO1xuJGNvbG9yLXB1cnBsZS1zdGVwcGVyOiAjNGEyYjdhO1xuJGNvbG9yLWdyZWVuLTEwMDogIzA1MjgwNDtcbiRjb2xvci1ncmVlbi05MDogIzBkM2QwYjtcbiRjb2xvci1ncmVlbi04MDogIzFmNmIxZTtcbiRjb2xvci1ncmVlbi03MDogIzM1OGEzNDtcbiRjb2xvci1ncmVlbi02MDogIzZkOWE2ZTtcbiRjb2xvci1ncmVlbi01MDogIzg5YTg4ZjtcbiRjb2xvci1ncmVlbi00MDogIzlmYzhhNjtcbiRjb2xvci1ncmVlbi0zMDogI2FhZDZiMztcbiRjb2xvci1ncmVlbi0yMDogI2M5ZTlkMTtcbiRjb2xvci1ncmVlbi0xMDogI2YzZjdmMztcbiRjb2xvci1ncmVlbi1zdGVwcGVyOiAjMTA3RDc5O1xuJGNvbG9yLWdyZWVuLW1lZGl1bTogI2FkZGFhZjtcbiRjb2xvci1ncmVlbi1saWdodDogIzNBQjA5ODtcbiRjb2xvci1ncmVlbi12ZXJ5LWxpZ2h0OiAjRURGRkZDO1xuJGdyZXktMTogI2Q2ZDBkZjtcbiRzdXBwb3J0LTAxOiAjZGExZTI4O1xuJGVycm9yOiAjZWUyMzJmO1xuJHRleHQtYmxhY2s6ICMxNjE2MTY7XG4kdGV4dC1zZWNvbmRhcnk6ICMzOTM5Mzk7XG4kdGV4dC1ncmF5ZWQ6ICM1MjUyNTI7XG4kdGV4dC1ncmF5ZWQ4MDogIzhmOGI4YjtcbiR0ZXh0LWdyYXktY2F0OiAjNmQ3Mjc4O1xuJHVpLWJhY2tncm91bmQtZ3JheTogI2Y4ZjhmOTtcbiRib3JkZXI6ICNlOGU3ZWE7XG4kZW50aXR5LWJvcmRlci1jb2xvcjogIzFjMGYzMDIxO1xuJGxvYWRpbmctYmc6IHJnYigwIDAgMCAvIDE4JSk7XG4kc3VwcG9ydC0wNDogIzAwNDNjZTtcbiRsb29wLXVzZXJuYW1lOiAjMTk4MDM4O1xuJGxvb3AtYWN0aXZlLWN1cnJlbnQtdXNlcjogIzI0YTE0ODtcbiR3YXJtLWdyYXktMTAtY29sb3I6ICNmN2YzZjI7XG4kd2FybS1ncmF5LTIwLWNvbG9yOiAjZTVlMGRmO1xuJGhlYWRpbmctMS1jb2xvcjogIzFjMGYzMDtcbiRoZWFkaW5nLTItY29sb3I6ICMzMjA3NGQ7XG4kaGVhZGluZy0zLWNvbG9yOiAjMmYyNzM1O1xuJG1vYmlsZS1pY29uLWNvbG9yOiAjMWMwZjMwO1xuJHN0YXRlLWRpc2FibGVkLTAyOiAjYzZjNmM2O1xuJGxpbmstMDI6ICM1NjAxYjI7XG4kaGVhZGVyLXB1cnBsZTogIzMxMTM1ZTtcbiRoZWFkZXItZ3JlZW46ICMxMDdkNzk7XG4kcHVycGxlLWxpZ2h0OiAjY2JjNGQ3O1xuJHB1cnBsZS1iYWNrZ3JvdW5kLWxpZ2h0OiAjZGNkNWU3O1xuJGxvb3AtaW50ZXJhY3RpdmUtMDE6ICMxMDdkNzk7XG4kbG9vcC1pbnRlcmFjdGl2ZS0wMS1vcGFjaXR5OiByZ2JhKDE2LCAxMjUsIDEyMSwgMC4zKTtcbiRmaWx0ZXJzLWdyZWVuOiAjMDU2NzYzO1xuLy8gQnJlYWtwb2ludHNcblxuJGJyZWFrcG9pbnQtczogMzc1cHg7XG4kYnJlYWtwb2ludC1zbTogNDIwcHg7XG4kYnJlYWtwb2ludC1tZDogNzY4cHg7XG4kYnJlYWtwb2ludC1sZzogMTA4MHB4O1xuJGJyZWFrcG9pbnQteGw6IDEyNzVweDtcblxuJGJyZWFrcG9pbnQtbWQtdjI6IDgyMHB4O1xuXG4kaGVhZGVyLWhlaWdodDogNC4zNzVyZW07XG4kaGVhZGVyLWhlaWdodC12MjogNC4zNzVyZW07XG4kc3RhdGUtc2VsZWN0ZWQtdWk6ICNlMGUwZTA7XG4kYy1sZWZ0LXBhZGRpbmc6IDEuNXJlbTtcbiRtZW51LWFjdGl2ZS1jb2xvcjogIzNBQjA5ODtcbiRtZW51LWhvdmVyLWNvbG9yOiAjM0FCMDk4O1xuJHRhYi1pbmFjdGl2ZS1jb2xvcjogIzg5YWY5MztcbiRsaW5lLWNvbG9yOiAjZDBkZmQyO1xuJGJvcmRlci1ncmF5OiAjY2NjY2NjO1xuJHRleHQtZ3JheTogIzgwODA4MDtcbiRiYXNlLWNvbnRhaW5lci13aWR0aDogODEuMTI0cmVtO1xuJGhlYWRlci11bmRlcmxpbmUtaGVpZ2h0OiAwLjMxM3JlbTtcblxuLy8gTW9kZXJhdG9yIHJldmlldyBzZWN0aW9uc1xuJGZvb3Rlci1oZWlnaHQ6IDRyZW07XG4kdG9wYmFyLWhlaWdodDogMTAuNXJlbTtcbiRzdGVwcGVyLWhlaWdodDogNi43cmVtO1xuXG4vLyBOZXcgU3RvcnkgZmxvdyAvIHN0b3J5IGRldGFpbHMgdmFyaWFibGVzXG4kZ3JleTogIzY1NjU2NTtcbiRsaWdodC1ncmV5LTI6ICNiMWI0YjY7XG4kbGlnaHQtZ3JleS0zOiAjYjRiNGI0O1xuJGxpZ2h0LWdyZXktNDogI2NmZDNkODtcbiRsaWdodC1ncmV5LTU6ICNkOWUwZTc7XG4kbGlnaHQtZ3JleS02OiAjZjFmMmYyO1xuJGxpZ2h0LWdyZXktNzogI2M0YzRjNDtcbiRsaWdodC1ncmV5LTg6ICNlOWU5ZTk7XG4kbGlnaHQtZ3JleS05OiAjZTZlYWVkO1xuJGxpZ2gtZ3JleS1zZXBhcmF0b3I6ICNjMGMwYzA7XG4kZGFyay1ncmV5OiAjMWExYTFhO1xuJGRhcmstZ3JleS01MDogcmdiKDI2LCAyNiwgMjYsIDAuNSk7XG4kYm9yZGVyLWdyZXk6ICNjN2NkZDQ7XG4kbGlnaHQtcHVycGxlOiAjZWFlYWVhO1xuJGlucHV0LWRpc2FibGVkLWJnOiAjZjRmNmY4O1xuJGVycm9yLTI6ICNkZTIyMmQ7XG4kZGFuZ2VyOiAjYzkzMDRkO1xuJHByZXZpb3VzLXBpbGwtY29sb3I6ICM3MThkNmY7XG4kdG9vbHRpcC1ncmV5OiAjYWJhYmFiO1xuJGxpZ2h0LWdyZWVuOiAjY2ZlNWU0NjY7XG5cbiRmaWx0ZXJzLW1vZGFsLWhlYWRlci16aW5kZXg6IDEwMDAwO1xuJG1vZGFsLXppbmRleDogOTk5OTtcbiRsb2NhdGlvbi1vdmVybGF5LXppbmRleDogOTAwMTtcbiRoZWFkZXItYXNpZGUtemluZGV4OiA4MDAyO1xuJGhlYWRlci1hc2lkZS1iYWNrZ3JvdW5kLXppbmRleDogODAwMTtcbiRoZWFkZXItemluZGV4OiA4MDAwO1xuJG5hdmlnYXRpb24temluZGV4OiA4MDAwO1xuJHBhZ2UtbG9hZGluZy16aW5kZXg6IDcwMDE7XG4kdG9vbHRpcC16aW5kZXg6IDcwMDA7XG4kbmV3LXN0b3J5LWNvbnRlbnQtc3RhdGUtemluZGV4OiA1MDA7XG4kZmlsdGVyLWRyb3Bkb3duLXppbmRleDogMTAwO1xuJG1vZGFsLXRvcC1pbmRpY2F0b3ItemluZGV4OiA1MTtcbiRtb2RhbC10b3AtaW5kaWNhdG9yLWJhY2tncm91bmQtemluZGV4OiA1MTtcbiRjaGFydC16aW5kZXg6IDE7XG4kY2hhcnQtY29udHJvbC16aW5kZXg6IDI7XG5cbiRzbGlkZS10b2dnbGUtZGlzYWJsZWQtb3B0aW9uLWJhY2tncm91bmQ6ICNkZGRkZGQ7XG5cbiR0b2FzdC1pbmZvLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuJHRvYXN0LWluZm8tdGl0bGUtY29sb3I6ICM0OTQ5NDk7XG4kdG9hc3QtaW5mby1tZXNzYWdlLWNvbG9yOiAjNDIyYzAwO1xuJHRvYXN0LWluZm8tYnV0dG9uLWNvbG9yOiAjNmM0ZTk5O1xuXG4kdG9hc3Qtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiAjZDllZWVkO1xuJHRvYXN0LXN1Y2Nlc3MtdGl0bGUtY29sb3I6ICMwMDQ1NDI7XG4kdG9hc3Qtc3VjY2Vzcy1tZXNzYWdlLWNvbG9yOiAjMDEzMjMwO1xuJHRvYXN0LXN1Y2Nlc3MtYnV0dG9uLWNvbG9yOiAjMDE2OTY1O1xuXG4kdG9hc3Qtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMWQ1O1xuJHRvYXN0LXdhcm5pbmctdGl0bGUtY29sb3I6ICM2YjQ3MDA7XG4kdG9hc3Qtd2FybmluZy1tZXNzYWdlLWNvbG9yOiAjNDIyYzAwO1xuJHRvYXN0LXdhcm5pbmctYnV0dG9uLWNvbG9yOiAjY2M4ZjE0O1xuXG4kdG9hc3QtZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogI2Y1ZDVkYjtcbiR0b2FzdC1lcnJvci10aXRsZS1jb2xvcjogIzczMDAxNTtcbiR0b2FzdC1lcnJvci1tZXNzYWdlLWNvbG9yOiAjNDUwNjExO1xuJHRvYXN0LWVycm9yLXN1Y2Nlc3MtY29sb3I6ICNkOWVlZWQ7XG4kdG9hc3QtZXJyb3ItYnV0dG9uLWNvbG9yOiAjYjIxZDM5O1xuXG4kdG9hc3QtY2xvc2UtYnV0dG9uLWNvbG9yOiAjNzMwMDE1O1xuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIGZsZXgtZ2FwKCRnYXAsICRnbG9iYWw6IGZhbHNlKSB7XG4gIG1hcmdpbi10b3A6ICgtJGdhcCk7XG4gIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCgtJGdhcCksICRnbG9iYWwpO1xuXG4gID4gKiB7XG4gICAgbWFyZ2luLXRvcDogJGdhcDtcbiAgICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgkZ2FwLCAkZ2xvYmFsKTtcbiAgfVxufVxuXG5AbWl4aW4gYmFzZS1jb250YWluZXIoJGNvbnRlbnQtd2lkdGgpIHtcbiAgJGRlc2t0b3AtcGFkZGluZzogMnJlbTtcbiAgbWF4LXdpZHRoOiBjYWxjKCN7JGNvbnRlbnQtd2lkdGh9ICsgKCN7JGRlc2t0b3AtcGFkZGluZ30pKTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MnJlbSkge1xuICAgIEBpbmNsdWRlIHBhZGRpbmctbGVmdCgkZGVza3RvcC1wYWRkaW5nLCB0cnVlKTtcbiAgICBAaW5jbHVkZSBwYWRkaW5nLXJpZ2h0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICB9XG59XG5cbkBtaXhpbiBjZW50ZXJBYnNvbHV0ZUVsZW1lbnQge1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5AbWl4aW4gb25seS1sdHItZ2xvYmFsIHtcbiAgaHRtbDpub3QoW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bC1nbG9iYWwge1xuICBodG1sW2Rpcj0ncnRsJ10gJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktbHRyIHtcbiAgOmhvc3QtY29udGV4dChodG1sOm5vdChbZGlyPSdydGwnXSkpICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bCB7XG4gIDpob3N0LWNvbnRleHQoaHRtbFtkaXI9J3J0bCddKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gcnRsLXZhbHVlKCRwcm9wZXJ0eSwgJGx0ci12YWx1ZSwgJHJ0bC12YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGx0ci12YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHJ0bC12YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHJ0bC1wcm9wZXJ0eSgkbHRyLXByb3BlcnR5LCAkcnRsLXByb3BlcnR5LCAkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpZiAkZ2xvYmFsID09IHRydWUge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyLWdsb2JhbCB7XG4gICAgICAjeyRsdHItcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwtZ2xvYmFsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bCB7XG4gICAgICAjeyRydGwtcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXJnaW4tbGVmdCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLWxlZnQsIG1hcmdpbi1yaWdodCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBtYXJnaW4tcmlnaHQoJG1hcmdpbiwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KG1hcmdpbi1yaWdodCwgbWFyZ2luLWxlZnQsICRtYXJnaW4sICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZygkcGFkZGluZ1RvcCwgJHBhZGRpbmdSaWdodCwgJHBhZGRpbmdCb3R0b20sICRwYWRkaW5nTGVmdCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgcGFkZGluZy10b3A6ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZ1JpZ2h0LCAkZ2xvYmFsKTtcbiAgcGFkZGluZy1ib3R0b206ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZ0xlZnQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1sZWZ0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLXJpZ2h0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiB0ZXh0LWFsaWduLWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRleHQtYWxpZ24sIGxlZnQsIHJpZ2h0LCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGxlZnQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobGVmdCwgcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiByaWdodCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShyaWdodCwgbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRyYW5zbGF0ZVhZKCR2YWx1ZVgsICR2YWx1ZVksICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZSh0cmFuc2Zvcm0sIHRyYW5zbGF0ZSgkdmFsdWVYLCAkdmFsdWVZKSwgdHJhbnNsYXRlKC0kdmFsdWVYLCAkdmFsdWVZKSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItbGVmdCwgYm9yZGVyLXJpZ2h0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1yaWdodCwgYm9yZGVyLWxlZnQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCBib3JkZXItdG9wLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtbGVmdC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBmbG9hdC1sZWZ0KCRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZShmbG9hdCwgbGVmdCwgcmlnaHQsICRnbG9iYWw6IGZhbHNlKTtcbn1cblxuQG1peGluIGZsb2F0LXJpZ2h0IHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCByaWdodCwgbGVmdCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gc21hbGwtZGVza3RvcC1vbmx5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LWxnKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQteGwgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtYW5kLXRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc21hbGwtbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtcyAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LW1kIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtdXAge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gZGlzYWJsZS1zY3JvbGxiYXIge1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiIsIi8vLyBodHRwczovL3d3dy5maWdtYS5jb20vZmlsZS9Hbm0wMnFUOGxMMVhFdnRNRk9SNlJML0xvb3AtMjAyMS1GZWF0dXJlLURldmVsb3BtZW50P25vZGUtaWQ9NCUzQTMwMFxuXG4vLy8gVGhpcyBpcyB0aGUgbWFpbiBjb2xvdXIgZm9yIGFsbCB0aGUgZWxlbWVudHMuIEl0IGlzIHVzZWQgdG8gY3JlYXRlIGFsbCBvZiB0aGUgaW5wdXQgZmllbGRzLCBmb3IgaWNvbnMgZXRjXG4kbG9vcC1ncmVlbi0xMjU6ICMwNTY3NjM7XG4kbG9vcC1ncmVlbi0xMDA6ICMxMDdkNzk7XG4kbG9vcC1ncmVlbi01MDogIzg3YmViYztcbiRsb29wLWdyZWVuLTI1OiAjYzNkZmRkO1xuJGxvb3AtZ3JlZW4tNTogI2YzZjhmODtcblxuLy8vIFVzZWQgaW4gbmF2aWdhdGlvbiBhbmQgYXMgc2Vjb25kYXJ5IGVsZW1lbnQgY29sb3VycyBvbiBidXR0b25zIGFuZCBsaW5rc1xuJGxvb3AtcHVycGxlLTEyNTogIzI2MTA0NztcbiRsb29wLXB1cnBsZS0xMDA6ICMzMTEzNWU7XG4kbG9vcC1wdXJwbGUtNzU6ICM0NjI0Nzg7XG4kbG9vcC1wdXJwbGUtNjA6ICM4NjZhYjA7XG4kbG9vcC1wdXJwbGUtNTA6ICM4YTdiYTE7XG4kbG9vcC1wdXJwbGUtNDA6ICNlYWU2ZjA7XG4kbG9vcC1wdXJwbGUtMjU6ICNjYmM0ZDc7XG4kbG9vcC1wdXJwbGUtNTogI2Y1ZjNmNztcblxuLy8vIFVzZWQgYXMgYmFja2dyb3VuZCBmb3IgZGlzYWJsZWQgbGFiZWxzIGFuZCBmaWVsZHMgYXMgd2VsbCBhcyBmb3IgdGFnc1xuJGxpZ2h0LWdyZXk6ICNlZWVlZWU7XG5cbi8vLyBHcmV5c2NhbGVcbiRncmV5LTEwMDogIzAwMDAwMDtcbiRncmV5LTUwOiB0cmFuc3BhcmVudGl6ZSgkZ3JleS0xMDAsIDEgLSAwLjUpO1xuJGdyZXktMjU6IHRyYW5zcGFyZW50aXplKCRncmV5LTEwMCwgMSAtIDAuMjUpO1xuJGdyZXktNTogdHJhbnNwYXJlbnRpemUoJGdyZXktMTAwLCAxIC0gMC4wNSk7XG5cbi8vLyBub3RpZmljYXRpb25zLCBzdGF0dXMsIGNhdGVnb3JpZXNcbi8vLyB3YXJuaW5nLCBhbGVydFxuJGRhbmdlci1yZWQ6ICNlZTIzMmY7XG4vLy8gb2ssIGFjY2VwdGVkLCBmaW5pc2hlZFxuJHllcy1ncmVlbjogIzFkYjA0Njtcbi8vLyBwZW5kaW5nXG4kbG9vcC15ZWxsb3c6ICNlY2IzMjA7XG5cbi8vLyBoaWdobGlnaHQgY29sb3Vyc1xuJHB1cnBsZS1oaWdobGlnaHQ6ICM2ZjAxZTU7XG4kcHVycGxlLWhpZ2hsaWdodC0wMjU6IHJnYmEoMTExLCAxLCAyMjksIDAuMjUpO1xuJGxvb3AtcGluazogI2VmNDdhMjtcbiRsb29wLXBpbmstMDI1OiByZ2JhKDIzOSwgNzEsIDE2MiwgMC4yNSk7XG4kbGlnaHQtYmx1ZTogIzIwZDNlYztcbiRsaWdodC1ibHVlLTAyNTogcmdiYSgzMiwgMjExLCAyMzYsIDAuMjUpO1xuJGxvb3AtYmx1ZTogIzIwNzJlYztcbiRsb29wLWJsdWUtMDI1OiByZ2JhKDMyLCAxMTQsIDIzNiwgMC4yNSk7XG4kZ3JlZW4tMjogI2MzZWMyMDtcbiRncmVlbi0yLTAyNTogcmdiYSgxOTUsIDIzNiwgMzIsIDAuMjUpO1xuJGxvb3Atb3JhbmdlOiAjZTk4MDIwO1xuJGxvb3Atb3JhbmdlLTAyNTogcmdiYSgyMzMsIDEyOCwgMzIsIDAuMjUpO1xuXG4vLy8gU3BhY2Vyc1xuJGdyYXktbGluZS1jb2xvcjogI2Q2ZDBkZjtcblxuJGxvb3AtcmVkLWRhcms6ICNjOTMwNGQ7XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 61098:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/charts/text-grid/text-grid.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextGridModule": () => (/* binding */ TextGridModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _text_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-grid.component */ 53863);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




class TextGridModule {
  static #_ = this.ɵfac = function TextGridModule_Factory(t) {
    return new (t || TextGridModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: TextGridModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TextGridModule, {
    declarations: [_text_grid_component__WEBPACK_IMPORTED_MODULE_0__.TextGridComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule],
    exports: [_text_grid_component__WEBPACK_IMPORTED_MODULE_0__.TextGridComponent]
  });
})();

/***/ }),

/***/ 23928:
/*!***************************************************************!*\
  !*** ./src/app/shared/components/charts/utils/chart.utils.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addValueToDataIndexSum": () => (/* binding */ addValueToDataIndexSum)
/* harmony export */ });
const addValueToDataIndexSum = (stackValue, isCalculated, params) => {
  const valueId = params.dataIndex + '-' + params.seriesIndex;
  if (!isCalculated[valueId]) {
    !stackValue[params.dataIndex] && (stackValue[params.dataIndex] = 0);
    stackValue[params.dataIndex] += params.value;
    isCalculated[valueId] = true;
  }
};

/***/ }),

/***/ 36064:
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/components/charts/wave-timeline-chart/wave-timeline-chart.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WaveTimelineChartComponent": () => (/* binding */ WaveTimelineChartComponent)
/* harmony export */ });
/* harmony import */ var _app_shared_components_charts_config_defaults_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/components/charts/config/defaults.config */ 73167);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-chart.component */ 94579);
/* harmony import */ var _config_timeline_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/timeline.config */ 13408);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/services/ui/ui.service */ 21428);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _core_services_filters_filters_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/filters/filters.service */ 86631);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-echarts */ 31548);










const _c0 = function () {
  return {
    renderer: "canvas"
  };
};
function WaveTimelineChartComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("chartInit", function WaveTimelineChartComponent_div_3_Template_div_chartInit_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onChartInit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx_r0.chartOption)("initOpts", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](2, _c0));
  }
}
class WaveTimelineChartComponent extends _base_chart_component__WEBPACK_IMPORTED_MODULE_2__.BaseChartComponent {
  set data(value) {
    this._data = value;
    this.selectLegendOptionsBasedOnFilters(this.filtersService.userFilters);
  }
  get data() {
    return this._data;
  }
  constructor(ui, translateService, filtersService) {
    super(ui, _config_timeline_config__WEBPACK_IMPORTED_MODULE_3__.chartConfig, filtersService);
    this.ui = ui;
    this.translateService = translateService;
    this.filtersService = filtersService;
    this.palette = _app_shared_components_charts_config_defaults_config__WEBPACK_IMPORTED_MODULE_0__.colors;
    this.unit = 'stories';
    this.isXLabel = false;
  }
  onChartInit(ec) {
    super.onChartInit(ec);
    this.echartsInstance.on('legendselectchanged', params => {
      setTimeout(() => {
        this.echartsInstance?.setOption({
          legend: {
            ...this.prepareLegendData(this.chartOption.series)
          }
        }, {
          lazyUpdate: true,
          silent: true
        });
      }, 1);
    });
  }
  setup() {
    const seriesData = this.mapToSeries(this._data);
    const mobileDefaultLabel = {
      color: '#656565',
      fontWeight: 'normal',
      fontSize: 12,
      borderRadius: 100,
      backgroundColor: '#e6eaed',
      padding: [4, 6, 4, 6]
    };
    const options = {
      xAxis: {
        splitNumber: 12,
        interval: 1,
        axisLabel: {
          interval: 0,
          formatter: (value, index) => {
            if (this.ui.mobileView && index !== 0 && index !== 11) {
              return '';
            }
            return `{${this.ui.mobileView ? 'mobile' : 'desktop'}|${this.translateService.instant(`filtersV2.monthFull.${this.getMonth(value)}`).substr(0, 3).toLowerCase()}${this.ui.mobileView ? ' ' + value.split('-')[0] : ''}}`;
          },
          rich: {
            desktop: {
              color: '#656565',
              fontSize: 14,
              padding: 16
            },
            mobile: {
              ...mobileDefaultLabel,
              fontWeight: 500
            }
          }
        },
        axisPointer: {
          animation: false,
          label: {
            show: true,
            formatter: params => {
              const value = params.value;
              return `${this.translateService.instant(`filtersV2.monthFull.${this.getMonth(value)}`).substr(0, 3).toLowerCase()}${this.ui.mobileView ? ' ' + value.split('-')[0] : ''}`;
            },
            backgroundColor: '#E6EAED',
            borderColor: 'white'
          }
        }
      },
      legend: {
        ...this.prepareLegendData(seriesData),
        formatter: name => {
          return this.getCategoryName(name);
        }
      },
      tooltip: {
        position: (point, params, _dom, _rect, size) => {
          // eslint-disable-next-line
          let {
            x,
            y
          } = {
            x: point[0] - size.contentSize[0] / 2,
            y: (this.ui.mobileView ? 60 : 100) - size.contentSize[1]
          };
          const months = this._data?.[0].values.length;
          // TODO: verify corner values tooltip placement when filters integrated
          if (params[0].dataIndex > months - 3) {
            x = x - size.contentSize[0] / 3;
          }
          if (params[0].dataIndex < 2) {
            x = x + size.contentSize[0] / 3;
          }
          return [x, y];
        },
        formatter: params => {
          const months = this._data?.[0].values.length;
          const extraClass = params[0].dataIndex > months - 3 ? 'tooltip--right' : params[0].dataIndex < 2 ? 'tooltip--left' : '';
          let content = `<div class="stats-tooltip ${extraClass}">
              <div><span class="axis-label hide-mobile">${this.getMonth(params[0].axisValue)}</span></div><div>`;
          params.forEach(p => {
            content += `<p><span class="custom-marker-1" style="background-color:${p.color};"></span> <span class="content"><span>${this.getCategoryName(p.seriesName)}</span><span>${p.value[1].toString() === '0.1' ? '0' : p.value[1]} ${this.translateService.instant(`global.unitsLong.${this.unit}`)}</span></p>`;
          });
          content += '</div></div>';
          return content;
        }
      },
      series: [...seriesData],
      color: this.palette
    };
    this.chartOption = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.merge)(this.chartDefaultOption, options);
    this.echartsInstance && this.reprocessChartOptions();
  }
  mapToSeries(data) {
    const series = [];
    const lineDefaults = {
      type: 'line',
      smooth: 0.6,
      symbol: 'none',
      animation: true,
      animationDuration: 100,
      showSymbol: false
    };
    data.forEach(d => {
      const values = d.values.map(v => {
        const copy = [...v];
        if (v[1].toString() === '0') {
          copy[1] = 0.1;
        }
        return copy;
      });
      let entity = {
        ...lineDefaults,
        data: values,
        name: d.code
      };
      const interactionStyles = {
        blur: {
          areaStyle: {
            opacity: 0.2
          }
        },
        emphasis: {
          focus: 'series',
          areaStyle: {
            opacity: 0.85
          },
          blurScope: 'global'
        }
      };
      if (d.code === this.dashedSeries.name) {
        entity = {
          ...entity,
          silent: true,
          lineStyle: {
            color: this.dashedSeries.color,
            width: 2,
            type: 'dashed'
          },
          blur: {
            areaStyle: {
              opacity: 0.2
            }
          },
          emphasis: {
            focus: 'series',
            areaStyle: {
              opacity: 0.85
            },
            blurScope: 'global'
          },
          areaStyle: {
            color: 'transparent'
          }
        };
      } else {
        entity = {
          ...entity,
          silent: true,
          blur: {
            areaStyle: {
              opacity: 0.2
            }
          },
          emphasis: {
            focus: 'series',
            areaStyle: {
              opacity: 0.85
            },
            blurScope: 'global'
          },
          areaStyle: {},
          lineStyle: {
            width: 0
          }
        };
      }
      series.push(entity);
    });
    return series;
  }
  reprocessChartOptions() {
    super.reprocessChartOptions();
    const series = this.chartOption?.series;
    let options = {};
    if (this.ui.mobileView) {
      series.forEach(serie => {
        serie.symbol = 'circle';
        serie.symbolSize = 10;
      });
      options = {
        grid: {
          top: 0,
          width: '90%',
          left: '0%',
          right: '5%'
        },
        legend: {
          left: '0',
          bottom: '2%',
          textStyle: {
            fontSize: 12
          }
        },
        xAxis: {
          axisLabel: {
            padding: 0,
            backgroundColor: 'transparent',
            fontSize: 12
          },
          splitArea: {
            show: true,
            interval: 'auto',
            areaStyle: {
              color: ['#f4f4f4', 'white']
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              width: 0,
              color: 'white'
            }
          },
          axisPointer: {
            label: {
              show: true,
              color: '#191919',
              fontWeight: 'bold',
              fontSize: 12,
              margin: 8,
              borderRadius: 16,
              padding: [4, 6, 4, 6]
            }
          }
        },
        series: [...series],
        tooltip: {
          axisPointer: {
            type: 'line'
          }
        }
      };
    } else {
      series.forEach(serie => {
        serie.symbol = 'none';
        serie.symbolSize = 10;
      });
      options = {
        grid: {
          top: '19%',
          width: '100%',
          left: '0%'
        },
        xAxis: {
          splitArea: {
            show: true,
            interval: 'auto',
            areaStyle: {
              color: ['#f4f4f4']
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              width: 10,
              color: 'white'
            }
          },
          axisPointer: {
            label: {
              show: true,
              color: '#1A1A1A',
              fontWeight: 'bold',
              fontSize: 16,
              margin: 36,
              borderRadius: 16,
              padding: [4, 8, 4, 8]
            }
          }
        },
        series: [...series],
        tooltip: {
          axisPointer: {
            type: 'shadow',
            shadowStyle: {
              color: '#e5e5e5',
              opacity: 0.3
            }
          }
        },
        legend: {
          left: '0%',
          top: '0',
          textStyle: {
            fontSize: 16
          }
        }
      };
    }
    setTimeout(() => {
      this.echartsInstance?.setOption(options, {
        lazyUpdate: true,
        silent: true
      });
      this.echartsInstanceWithOptionReady$.next(null);
    }, 1);
  }
  /**
   * Function used to add one or many custom icons to legend.
   * It sets custom icon selected/unselected on change
   *
   * @param seriesData series
   * @returns new legend data with current icons
   */
  prepareLegendData(seriesData) {
    const legend = this.echartsInstance?.getOption().legend[0];
    const customSelected = !legend ? true : Object.keys(legend.selected).some((e, i) => {
      return e === this.dashedSeries.name && legend.selected[e];
    });
    const getLegendIcon = (name, selected) => {
      const defaultIcon = 'circle';
      if (!this.dashedSeries) {
        return defaultIcon;
      }
      return name === this.dashedSeries.name ? selected ? `image://assets/statistics/legend/${this.dashedSeries.icon}-dashed.svg` : `image://assets/statistics/legend/${this.dashedSeries.icon}-dashed-unselected.svg` : defaultIcon;
    };
    return {
      data: [...seriesData.map(d => ({
        name: d.name,
        icon: getLegendIcon(d.name, customSelected)
      }))]
    };
  }
  selectLegendOptionsBasedOnFilters(filters) {
    super.selectLegendOptionsBasedOnFilters(filters);
    setTimeout(() => {
      this.echartsInstance?.setOption({
        legend: {
          ...this.prepareLegendData(this.chartOption.series)
        }
      }, {
        lazyUpdate: true,
        silent: true
      });
    }, 1);
  }
  getMonth(data) {
    const date = new Date(data);
    const month = date.toLocaleString('en-US', {
      month: 'long'
    });
    return month;
  }
  getCategoryName(name) {
    return this.translateService.instant(`${this.legendTPrefix}.${name}`);
  }
  static #_ = this.ɵfac = function WaveTimelineChartComponent_Factory(t) {
    return new (t || WaveTimelineChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_4__.UIService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_filters_filters_service__WEBPACK_IMPORTED_MODULE_5__.FiltersService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: WaveTimelineChartComponent,
    selectors: [["loop-chart-wave-timeline"]],
    inputs: {
      titleTKey: "titleTKey",
      legendTPrefix: "legendTPrefix",
      palette: "palette",
      dashedSeries: "dashedSeries",
      unit: "unit",
      data: "data"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
    decls: 4,
    vars: 4,
    consts: [[1, "chart-subtitle"], ["echarts", "", "class", "base-chart", 3, "options", "initOpts", "chartInit", 4, "ngIf"], ["echarts", "", 1, "base-chart", 3, "options", "initOpts", "chartInit"]],
    template: function WaveTimelineChartComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, WaveTimelineChartComponent_div_3_Template, 1, 3, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, ctx.titleTKey));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.chartOption);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, ngx_echarts__WEBPACK_IMPORTED_MODULE_9__.NgxEchartsDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
    styles: [".base-chart[_ngcontent-%COMP%] {\n  height: 315px;\n}\n@media (max-width: 767.9px) {\n  .base-chart[_ngcontent-%COMP%] {\n    height: 320px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhdmUtdGltZWxpbmUtY2hhcnQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtBQURGO0FDcUxFO0VEckxGO0lBSUksYUFBQTtFQUFGO0FBQ0YiLCJmaWxlIjoid2F2ZS10aW1lbGluZS1jaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ21peGlucyc7XG5cbi5iYXNlLWNoYXJ0IHtcbiAgaGVpZ2h0OiAzMTVweDtcblxuICBAaW5jbHVkZSBtb2JpbGUtb25seSB7XG4gICAgaGVpZ2h0OiAzMjBweDtcbiAgfVxufVxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIGZsZXgtZ2FwKCRnYXAsICRnbG9iYWw6IGZhbHNlKSB7XG4gIG1hcmdpbi10b3A6ICgtJGdhcCk7XG4gIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCgtJGdhcCksICRnbG9iYWwpO1xuXG4gID4gKiB7XG4gICAgbWFyZ2luLXRvcDogJGdhcDtcbiAgICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgkZ2FwLCAkZ2xvYmFsKTtcbiAgfVxufVxuXG5AbWl4aW4gYmFzZS1jb250YWluZXIoJGNvbnRlbnQtd2lkdGgpIHtcbiAgJGRlc2t0b3AtcGFkZGluZzogMnJlbTtcbiAgbWF4LXdpZHRoOiBjYWxjKCN7JGNvbnRlbnQtd2lkdGh9ICsgKCN7JGRlc2t0b3AtcGFkZGluZ30pKTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MnJlbSkge1xuICAgIEBpbmNsdWRlIHBhZGRpbmctbGVmdCgkZGVza3RvcC1wYWRkaW5nLCB0cnVlKTtcbiAgICBAaW5jbHVkZSBwYWRkaW5nLXJpZ2h0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICB9XG59XG5cbkBtaXhpbiBjZW50ZXJBYnNvbHV0ZUVsZW1lbnQge1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5AbWl4aW4gb25seS1sdHItZ2xvYmFsIHtcbiAgaHRtbDpub3QoW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bC1nbG9iYWwge1xuICBodG1sW2Rpcj0ncnRsJ10gJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktbHRyIHtcbiAgOmhvc3QtY29udGV4dChodG1sOm5vdChbZGlyPSdydGwnXSkpICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bCB7XG4gIDpob3N0LWNvbnRleHQoaHRtbFtkaXI9J3J0bCddKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gcnRsLXZhbHVlKCRwcm9wZXJ0eSwgJGx0ci12YWx1ZSwgJHJ0bC12YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGx0ci12YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHJ0bC12YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHJ0bC1wcm9wZXJ0eSgkbHRyLXByb3BlcnR5LCAkcnRsLXByb3BlcnR5LCAkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpZiAkZ2xvYmFsID09IHRydWUge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyLWdsb2JhbCB7XG4gICAgICAjeyRsdHItcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwtZ2xvYmFsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bCB7XG4gICAgICAjeyRydGwtcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXJnaW4tbGVmdCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLWxlZnQsIG1hcmdpbi1yaWdodCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBtYXJnaW4tcmlnaHQoJG1hcmdpbiwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KG1hcmdpbi1yaWdodCwgbWFyZ2luLWxlZnQsICRtYXJnaW4sICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZygkcGFkZGluZ1RvcCwgJHBhZGRpbmdSaWdodCwgJHBhZGRpbmdCb3R0b20sICRwYWRkaW5nTGVmdCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgcGFkZGluZy10b3A6ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZ1JpZ2h0LCAkZ2xvYmFsKTtcbiAgcGFkZGluZy1ib3R0b206ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZ0xlZnQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1sZWZ0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLXJpZ2h0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiB0ZXh0LWFsaWduLWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRleHQtYWxpZ24sIGxlZnQsIHJpZ2h0LCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGxlZnQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobGVmdCwgcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiByaWdodCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShyaWdodCwgbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRyYW5zbGF0ZVhZKCR2YWx1ZVgsICR2YWx1ZVksICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZSh0cmFuc2Zvcm0sIHRyYW5zbGF0ZSgkdmFsdWVYLCAkdmFsdWVZKSwgdHJhbnNsYXRlKC0kdmFsdWVYLCAkdmFsdWVZKSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItbGVmdCwgYm9yZGVyLXJpZ2h0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1yaWdodCwgYm9yZGVyLWxlZnQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCBib3JkZXItdG9wLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtbGVmdC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBmbG9hdC1sZWZ0KCRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZShmbG9hdCwgbGVmdCwgcmlnaHQsICRnbG9iYWw6IGZhbHNlKTtcbn1cblxuQG1peGluIGZsb2F0LXJpZ2h0IHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCByaWdodCwgbGVmdCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gc21hbGwtZGVza3RvcC1vbmx5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LWxnKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQteGwgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtYW5kLXRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc21hbGwtbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtcyAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LW1kIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtdXAge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gZGlzYWJsZS1zY3JvbGxiYXIge1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2hhcnRzL3dhdmUtdGltZWxpbmUtY2hhcnQvd2F2ZS10aW1lbGluZS1jaGFydC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3R5bGVzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7QUFERjtBQ3FMRTtFRHJMRjtJQUlJLGFBQUE7RUFBRjtBQUNGO0FBQ0EsZzJOQUFnMk4iLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdtaXhpbnMnO1xuXG4uYmFzZS1jaGFydCB7XG4gIGhlaWdodDogMzE1cHg7XG5cbiAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgIGhlaWdodDogMzIwcHg7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbkBtaXhpbiBmbGV4LWdhcCgkZ2FwLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBtYXJnaW4tdG9wOiAoLSRnYXApO1xuICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgoLSRnYXApLCAkZ2xvYmFsKTtcblxuICA+ICoge1xuICAgIG1hcmdpbi10b3A6ICRnYXA7XG4gICAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoJGdhcCwgJGdsb2JhbCk7XG4gIH1cbn1cblxuQG1peGluIGJhc2UtY29udGFpbmVyKCRjb250ZW50LXdpZHRoKSB7XG4gICRkZXNrdG9wLXBhZGRpbmc6IDJyZW07XG4gIG1heC13aWR0aDogY2FsYygjeyRjb250ZW50LXdpZHRofSArICgjeyRkZXNrdG9wLXBhZGRpbmd9KSk7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDJyZW0pIHtcbiAgICBAaW5jbHVkZSBwYWRkaW5nLWxlZnQoJGRlc2t0b3AtcGFkZGluZywgdHJ1ZSk7XG4gICAgQGluY2x1ZGUgcGFkZGluZy1yaWdodCgkZGVza3RvcC1wYWRkaW5nLCB0cnVlKTtcbiAgfVxufVxuXG5AbWl4aW4gY2VudGVyQWJzb2x1dGVFbGVtZW50IHtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcblxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuQG1peGluIG9ubHktbHRyLWdsb2JhbCB7XG4gIGh0bWw6bm90KFtkaXI9J3J0bCddKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1ydGwtZ2xvYmFsIHtcbiAgaHRtbFtkaXI9J3J0bCddICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LWx0ciB7XG4gIDpob3N0LWNvbnRleHQoaHRtbDpub3QoW2Rpcj0ncnRsJ10pKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1ydGwge1xuICA6aG9zdC1jb250ZXh0KGh0bWxbZGlyPSdydGwnXSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHJ0bC12YWx1ZSgkcHJvcGVydHksICRsdHItdmFsdWUsICRydGwtdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpZiAkZ2xvYmFsID09IHRydWUge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyLWdsb2JhbCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRsdHItdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwtZ2xvYmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHJ0bC12YWx1ZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGx0ci12YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRydGwtdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBydGwtcHJvcGVydHkoJGx0ci1wcm9wZXJ0eSwgJHJ0bC1wcm9wZXJ0eSwgJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaWYgJGdsb2JhbCA9PSB0cnVlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ci1nbG9iYWwge1xuICAgICAgI3skbHRyLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsLWdsb2JhbCB7XG4gICAgICAjeyRydGwtcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ciB7XG4gICAgICAjeyRsdHItcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwge1xuICAgICAgI3skcnRsLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWFyZ2luLWxlZnQoJG1hcmdpbiwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KG1hcmdpbi1sZWZ0LCBtYXJnaW4tcmlnaHQsICRtYXJnaW4sICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gbWFyZ2luLXJpZ2h0KCRtYXJnaW4sICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShtYXJnaW4tcmlnaHQsIG1hcmdpbi1sZWZ0LCAkbWFyZ2luLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmcoJHBhZGRpbmdUb3AsICRwYWRkaW5nUmlnaHQsICRwYWRkaW5nQm90dG9tLCAkcGFkZGluZ0xlZnQsICRnbG9iYWw6IGZhbHNlKSB7XG4gIHBhZGRpbmctdG9wOiAkcGFkZGluZ1RvcDtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctcmlnaHQsIHBhZGRpbmctbGVmdCwgJHBhZGRpbmdSaWdodCwgJGdsb2JhbCk7XG4gIHBhZGRpbmctYm90dG9tOiAkcGFkZGluZ1RvcDtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctbGVmdCwgcGFkZGluZy1yaWdodCwgJHBhZGRpbmdMZWZ0LCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmctbGVmdCgkcGFkZGluZywgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctbGVmdCwgcGFkZGluZy1yaWdodCwgJHBhZGRpbmcsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1yaWdodCgkcGFkZGluZywgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctcmlnaHQsIHBhZGRpbmctbGVmdCwgJHBhZGRpbmcsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gdGV4dC1hbGlnbi1sZWZ0KCRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZSh0ZXh0LWFsaWduLCBsZWZ0LCByaWdodCwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBsZWZ0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGxlZnQsIHJpZ2h0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcmlnaHQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocmlnaHQsIGxlZnQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiB0cmFuc2xhdGVYWSgkdmFsdWVYLCAkdmFsdWVZLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUodHJhbnNmb3JtLCB0cmFuc2xhdGUoJHZhbHVlWCwgJHZhbHVlWSksIHRyYW5zbGF0ZSgtJHZhbHVlWCwgJHZhbHVlWSksICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWxlZnQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWxlZnQsIGJvcmRlci1yaWdodCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1yaWdodCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItcmlnaHQsIGJvcmRlci1sZWZ0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMsIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItdG9wLXJpZ2h0LXJhZGl1cywgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItdG9wLWxlZnQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci10b3AtbGVmdC1yYWRpdXMsIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gZmxvYXQtbGVmdCgkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUoZmxvYXQsIGxlZnQsIHJpZ2h0LCAkZ2xvYmFsOiBmYWxzZSk7XG59XG5cbkBtaXhpbiBmbG9hdC1yaWdodCB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZShmbG9hdCwgcmlnaHQsIGxlZnQsICRnbG9iYWw6IGZhbHNlKTtcbn1cblxuQG1peGluIHNtYWxsLWRlc2t0b3Atb25seSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1sZykgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXhsIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLWFuZC10YWJsZXQtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZyAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtYWxsLW1vYmlsZS1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXMgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1tZCAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1kKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbGcpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLXVwIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1kKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGRpc2FibGUtc2Nyb2xsYmFyIHtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 33635:
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/charts/wave-timeline-chart/wave-timeline-chart.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WaveTimelineChartModule": () => (/* binding */ WaveTimelineChartModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-echarts */ 31548);
/* harmony import */ var _wave_timeline_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wave-timeline-chart.component */ 36064);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);





class WaveTimelineChartModule {
  static #_ = this.ɵfac = function WaveTimelineChartModule_Factory(t) {
    return new (t || WaveTimelineChartModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: WaveTimelineChartModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_3__.NgxEchartsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WaveTimelineChartModule, {
    declarations: [_wave_timeline_chart_component__WEBPACK_IMPORTED_MODULE_0__.WaveTimelineChartComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_3__.NgxEchartsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule],
    exports: [_wave_timeline_chart_component__WEBPACK_IMPORTED_MODULE_0__.WaveTimelineChartComponent]
  });
})();

/***/ }),

/***/ 71816:
/*!*********************************************!*\
  !*** ./src/app/shared/utils/chart.utils.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTextWidth": () => (/* binding */ getTextWidth),
/* harmony export */   "roundTopItems": () => (/* binding */ roundTopItems)
/* harmony export */ });
const canvas = document.createElement('canvas');
const roundTopItems = (data, series, borderRadius) => {
  const values = series[0].data;
  const roundedArray = new Array(values.length);
  for (let i = data.length - 1; i >= 0; i--) {
    series[i].data.forEach((value, index) => {
      if (value.value > 0 && !roundedArray[index]) {
        roundedArray[index] = true;
        series[i].data[index].itemStyle.borderRadius = borderRadius;
      }
    });
  }
};
const getTextWidth = (text, font) => {
  const context = canvas.getContext('2d');
  context.font = font;
  const metrics = context.measureText(text);
  return metrics.width;
};

/***/ })

}]);
//# sourceMappingURL=default-src_app_core_services_statistics_statistics_service_ts-src_app_shared_components_char-343cbe.js.map