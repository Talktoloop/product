"use strict";
(self["webpackChunkourloop_ui"] = self["webpackChunkourloop_ui"] || []).push([["src_app_modules_outbox_in-progress_in-progress_module_ts"],{

/***/ 67315:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/outbox/in-progress/in-progress-list/in-progress-columns.const.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inProgressColumns": () => (/* binding */ inProgressColumns)
/* harmony export */ });
/* harmony import */ var _shared_outbox_table_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/outbox-table.model */ 50424);

const inProgressColumns = [new _shared_outbox_table_model__WEBPACK_IMPORTED_MODULE_0__.OutboxTable('datetime', 'admin.table.dateTime'), new _shared_outbox_table_model__WEBPACK_IMPORTED_MODULE_0__.OutboxTable('categories', 'admin.table.storyType'), new _shared_outbox_table_model__WEBPACK_IMPORTED_MODULE_0__.OutboxTable('language', 'admin.table.language'), new _shared_outbox_table_model__WEBPACK_IMPORTED_MODULE_0__.OutboxTable('country', 'admin.table.country'), new _shared_outbox_table_model__WEBPACK_IMPORTED_MODULE_0__.OutboxTable('channel', 'admin.table.channel'), new _shared_outbox_table_model__WEBPACK_IMPORTED_MODULE_0__.OutboxTable('status', 'admin.table.status')];

/***/ }),

/***/ 65744:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/outbox/in-progress/in-progress-list/in-progress-list.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InProgressListComponent": () => (/* binding */ InProgressListComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/legacy-table */ 96538);
/* harmony import */ var _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/app-routing.props */ 18854);
/* harmony import */ var _app_modules_outbox_in_progress_in_progress_list_in_progress_columns_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/modules/outbox/in-progress/in-progress-list/in-progress-columns.const */ 67315);
/* harmony import */ var _app_modules_outbox_outbox_filter_tab_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/modules/outbox/outbox-filter-tab.enum */ 89943);
/* harmony import */ var _app_modules_outbox_outbox_filter_outbox_filter_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/outbox/outbox-filter/outbox-filter.model */ 58247);
/* harmony import */ var _app_modules_outbox_pending_recording_pending_recording_list_pending_recording_filters_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/outbox/pending-recording/pending-recording-list/pending-recording-filters.config */ 10651);
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/components/base.component */ 70697);
/* harmony import */ var _shared_components_mobile_table_mobile_table_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/components/mobile-table/mobile-table.model */ 63277);
/* harmony import */ var _shared_utils_filters_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/utils/filters.utils */ 65197);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/services/ui/ui.service */ 21428);
/* harmony import */ var _shared_utils_data_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/utils/data.utils */ 9417);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_services_filters_filters_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/services/filters/filters.service */ 86631);
/* harmony import */ var _core_services_api_comment_comment_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/services/api/comment/comment.service */ 42075);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _app_modules_outbox_outbox_filters_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/modules/outbox/outbox-filters.service */ 74734);
/* harmony import */ var _core_services_locales_supported_languages_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @core/services/locales/supported-languages.service */ 90423);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-infinite-scroll */ 47364);
/* harmony import */ var _shared_components_mobile_table_mobile_table_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/components/mobile-table/mobile-table.component */ 20026);
/* harmony import */ var _shared_components_mobile_table_mobile_cell_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/components/mobile-table/mobile-cell.directive */ 34890);
/* harmony import */ var _shared_components_sort_sort_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/components/sort/sort.component */ 3963);
/* harmony import */ var _shared_components_filters_section_v2_filter_section_v2_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/components/filters-section-v2/filter-section-v2.component */ 54791);
/* harmony import */ var _inbox_stories_story_details_shared_divider_divider_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../inbox/stories/story-details/shared/divider/divider.component */ 49696);




























function InProgressListComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "div", 10);
  }
}
function InProgressListComponent_ng_container_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind2"](2, 1, element_r13.createdAt, ctx_r6.DATE_FORMAT), " ");
  }
}
function InProgressListComponent_ng_container_7_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const element_r14 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r7.dataUtils.getCategories(element_r14.categories), " ");
  }
}
function InProgressListComponent_ng_container_7_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const element_r15 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r8.dataUtils.getLanguage(element_r15.language), " ");
  }
}
function InProgressListComponent_ng_container_7_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const element_r16 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r9.dataUtils.getCountry(element_r16.country), " ");
  }
}
function InProgressListComponent_ng_container_7_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const element_r17 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r10.dataUtils.getChannel(element_r17.channel), " ");
  }
}
function InProgressListComponent_ng_container_7_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const element_r18 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("src", ctx_r11.dataUtils.getStoryStatusImage(element_r18.status), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 2, ctx_r11.dataUtils.getCommentStatus(element_r18.status)), " ");
  }
}
function InProgressListComponent_ng_container_7_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "app-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }
}
function InProgressListComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "app-mobile-table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("actionClick", function InProgressListComponent_ng_container_7_Template_app_mobile_table_actionClick_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r20.onActionClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, InProgressListComponent_ng_container_7_ng_container_2_Template, 3, 4, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, InProgressListComponent_ng_container_7_ng_container_3_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, InProgressListComponent_ng_container_7_ng_container_4_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, InProgressListComponent_ng_container_7_ng_container_5_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, InProgressListComponent_ng_container_7_ng_container_6_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, InProgressListComponent_ng_container_7_ng_container_7_Template, 6, 4, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, InProgressListComponent_ng_container_7_ng_container_8_Template, 2, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("itemsInRow", 1)("actions", ctx_r1.listActions)("list", ctx_r1.listElements)("columns", ctx_r1.columns);
  }
}
function InProgressListComponent_ng_template_8_th_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r22.getColumnHeader("datetime"));
  }
}
function InProgressListComponent_ng_template_8_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r36 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind2"](2, 1, element_r36.createdAt, ctx_r23.DATE_FORMAT));
  }
}
function InProgressListComponent_ng_template_8_th_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r24.getColumnHeader("categories"));
  }
}
function InProgressListComponent_ng_template_8_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r37 = ctx.$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r25.dataUtils.getCategories(element_r37.categories), " ");
  }
}
function InProgressListComponent_ng_template_8_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r26.getColumnHeader("language"));
  }
}
function InProgressListComponent_ng_template_8_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r38 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r27.dataUtils.getLanguage(element_r38.language));
  }
}
function InProgressListComponent_ng_template_8_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r28.getColumnHeader("country"));
  }
}
function InProgressListComponent_ng_template_8_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r39 = ctx.$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r29.dataUtils.getCountry(element_r39.country));
  }
}
function InProgressListComponent_ng_template_8_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r30.getColumnHeader("channel"));
  }
}
function InProgressListComponent_ng_template_8_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r40 = ctx.$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r31.dataUtils.getChannel(element_r40.channel));
  }
}
function InProgressListComponent_ng_template_8_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r32.getColumnHeader("status"));
  }
}
function InProgressListComponent_ng_template_8_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 28)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const element_r41 = ctx.$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("src", ctx_r33.dataUtils.getStoryStatusImage(element_r41.status), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 2, ctx_r33.dataUtils.getCommentStatus(element_r41.status)), " ");
  }
}
function InProgressListComponent_ng_template_8_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "tr", 30);
  }
}
function InProgressListComponent_ng_template_8_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function InProgressListComponent_ng_template_8_tr_20_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r44);
      const row_r42 = restoredCtx.$implicit;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r43.rowClicked(row_r42));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function InProgressListComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](1, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, InProgressListComponent_ng_template_8_th_2_Template, 2, 1, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, InProgressListComponent_ng_template_8_td_3_Template, 3, 4, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](4, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, InProgressListComponent_ng_template_8_th_5_Template, 2, 1, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, InProgressListComponent_ng_template_8_td_6_Template, 2, 1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](7, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, InProgressListComponent_ng_template_8_th_8_Template, 2, 1, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, InProgressListComponent_ng_template_8_td_9_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](10, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](11, InProgressListComponent_ng_template_8_th_11_Template, 2, 1, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](12, InProgressListComponent_ng_template_8_td_12_Template, 2, 1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](13, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](14, InProgressListComponent_ng_template_8_th_14_Template, 2, 1, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](15, InProgressListComponent_ng_template_8_td_15_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](16, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](17, InProgressListComponent_ng_template_8_th_17_Template, 2, 1, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](18, InProgressListComponent_ng_template_8_td_18_Template, 6, 4, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](19, InProgressListComponent_ng_template_8_tr_19_Template, 1, 0, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](20, InProgressListComponent_ng_template_8_tr_20_Template, 1, 0, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("dataSource", ctx_r3.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("matHeaderRowDef", ctx_r3.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("matRowDefColumns", ctx_r3.displayedColumns);
  }
}
function InProgressListComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 32)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](3, 1, "outbox.table.loading"), " ");
  }
}
function InProgressListComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 33)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](3, 1, "admin.comment.noMoreComments"), " ");
  }
}
class InProgressListComponent extends _shared_components_base_component__WEBPACK_IMPORTED_MODULE_5__.BaseComponent {
  constructor(ui, dataUtils, router, filtersService, commentService, translateService, outboxFiltersService, languageService) {
    super();
    this.ui = ui;
    this.dataUtils = dataUtils;
    this.router = router;
    this.filtersService = filtersService;
    this.commentService = commentService;
    this.translateService = translateService;
    this.outboxFiltersService = outboxFiltersService;
    this.languageService = languageService;
    this.columns = _app_modules_outbox_in_progress_in_progress_list_in_progress_columns_const__WEBPACK_IMPORTED_MODULE_1__.inProgressColumns;
    this.displayedColumns = this.columns.map(column => column.key);
    this.listActions = [new _shared_components_mobile_table_mobile_table_model__WEBPACK_IMPORTED_MODULE_6__.MobileTableAction(this.translateService.instant('comment.previewReply'))];
    this.DATE_FORMAT = 'dd/MM/yy h:mm a';
    this.filtersConfig$ = new rxjs__WEBPACK_IMPORTED_MODULE_20__.BehaviorSubject(null);
    this.currentPage = 1;
    this.listLimit = 15;
    this.loading = false;
    this.noMoreItems = false;
    this.listElements = [];
    this.sortElements = ['desc', 'asc'];
    this.activeSort = this.sortElements[0];
    this.filters = {};
    if (this.outboxFiltersService.getCurrentOutboxFilterTab() !== _app_modules_outbox_outbox_filter_tab_enum__WEBPACK_IMPORTED_MODULE_2__.OUTBOX_FILTER_TAB.SCHEDULED) {
      this.outboxFiltersService.setCurrentOutboxFilterTab(_app_modules_outbox_outbox_filter_tab_enum__WEBPACK_IMPORTED_MODULE_2__.OUTBOX_FILTER_TAB.SCHEDULED);
    }
  }
  static prepareSingleFilterData(config, languages) {
    switch (config.internalName) {
      case _app_modules_outbox_outbox_filter_outbox_filter_model__WEBPACK_IMPORTED_MODULE_3__.OutboxPendingFilters.TARGET_LANGUAGE:
        config.data = {
          data: languages,
          titleKey: ''
        };
        break;
      case _app_modules_outbox_outbox_filter_outbox_filter_model__WEBPACK_IMPORTED_MODULE_3__.OutboxPendingFilters.CHANNEL:
        config.data = {
          data: (0,_shared_utils_filters_utils__WEBPACK_IMPORTED_MODULE_7__.prepareChannelFilterOptions)(),
          titleKey: ''
        };
        break;
    }
    return config;
  }
  ngOnInit() {
    this.fetchData();
    this.filtersConfig$.next(_app_modules_outbox_pending_recording_pending_recording_list_pending_recording_filters_config__WEBPACK_IMPORTED_MODULE_4__.pendingRecordingFiltersConfig);
    this.prepareFiltersData();
    this.filtersService.filtersChanged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.takeUntil)(this.destroyed$)).subscribe(() => {
      this.currentPage = 1;
      this.fetchData();
    });
  }
  getColumnHeader(column) {
    const translation = this.columns.find(element => element.key === column)?.label;
    return translation ? this.translateService.instant(translation) : 'Unknown';
  }
  onScroll() {
    if (this.loading || this.noMoreItems) {
      return;
    }
    this.loadMoreData();
  }
  rowClicked(item) {
    this.navigateToRecordDetails(item.id);
  }
  onActionClick(callback) {
    if (callback.action === this.listActions[0]) {
      this.navigateToRecordDetails(callback.element.id);
    }
  }
  sortChange(sort) {
    this.activeSort = sort;
    this.currentPage = 1;
    this.fetchData();
  }
  navigateToRecordDetails(itemId) {
    const extras = {
      queryParams: {
        inProgress: true
      }
    };
    this.router.navigate([_app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.MAIN_ROUTES.OUTBOX, _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.OUTBOX_ROUTES.PENDING_RECORDING, 'record', itemId], extras);
  }
  loadMoreData() {
    this.currentPage++;
    this.fetchData();
  }
  fetchData() {
    this.loading = true;
    this.filters = (0,_shared_utils_filters_utils__WEBPACK_IMPORTED_MODULE_7__.prepareFilterDataFromSessionStorage)(_app_modules_outbox_pending_recording_pending_recording_list_pending_recording_filters_config__WEBPACK_IMPORTED_MODULE_4__.pendingRecordingFiltersConfig);
    this.commentService.getScheduledRecordingComments(this.filters, this.currentPage, this.listLimit, this.activeSort).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.takeUntil)(this.destroyed$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.finalize)(() => this.loading = false)).subscribe(data => {
      this.listElements = this.currentPage === 1 ? data.items : this.listElements.concat(data.items);
      this.dataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_23__.MatLegacyTableDataSource(this.listElements);
      this.verifyTotalItems(data.meta.totalItems);
    });
  }
  verifyTotalItems(totalItems) {
    this.noMoreItems = this.listElements.length === totalItems;
  }
  prepareFiltersData() {
    (0,_shared_utils_filters_utils__WEBPACK_IMPORTED_MODULE_7__.prepareLanguageFilterOptions)(this.languageService).subscribe(languages => this.filtersConfig$.next(_app_modules_outbox_pending_recording_pending_recording_list_pending_recording_filters_config__WEBPACK_IMPORTED_MODULE_4__.pendingRecordingFiltersConfig.map(config => InProgressListComponent.prepareSingleFilterData(config, languages))));
  }
  static #_ = this.ɵfac = function InProgressListComponent_Factory(t) {
    return new (t || InProgressListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_8__.UIService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_shared_utils_data_utils__WEBPACK_IMPORTED_MODULE_9__.DataUtils), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_24__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_services_filters_filters_service__WEBPACK_IMPORTED_MODULE_10__.FiltersService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_services_api_comment_comment_service__WEBPACK_IMPORTED_MODULE_11__.CommentService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_app_modules_outbox_outbox_filters_service__WEBPACK_IMPORTED_MODULE_12__.OutboxFiltersService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_services_locales_supported_languages_service__WEBPACK_IMPORTED_MODULE_13__.SupportedLanguagesService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
    type: InProgressListComponent,
    selectors: [["ng-component"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵInheritDefinitionFeature"]],
    decls: 13,
    vars: 14,
    consts: [[1, "pending-recording-list__filters", "outbox__filters", 3, "config", "showAllStoriesButton"], [1, "outbox-list-container"], [1, "outbox-list-container__nav"], [3, "sortElements", "activeSort", "sortChange$"], ["class", "outbox-separator", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["desktopTable", ""], ["infiniteScroll", "", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "fromRoot", "scrolled"], ["class", "outbox-list-container__loading", 4, "ngIf"], ["class", "outbox-list-container__no-more-results", 4, "ngIf"], [1, "outbox-separator"], [3, "itemsInRow", "actions", "list", "columns", "actionClick"], [4, "loopMobileCell"], [1, "status"], [3, "src", "alt"], ["mat-table", "", 1, "outbox-table", "in-progress-table", 3, "dataSource"], ["matColumnDef", "datetime"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "categories"], ["mat-cell", "", "class", "no-wrap", 4, "matCellDef"], ["matColumnDef", "language"], ["matColumnDef", "country"], ["matColumnDef", "channel"], ["matColumnDef", "status"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 1, "no-wrap"], ["mat-header-row", ""], ["mat-row", "", 3, "click"], [1, "outbox-list-container__loading"], [1, "outbox-list-container__no-more-results"]],
    template: function InProgressListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "loop-filter-section-v2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 2)(5, "loop-sort", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("sortChange$", function InProgressListComponent_Template_loop_sort_sortChange__5_listener($event) {
          return ctx.sortChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, InProgressListComponent_div_6_Template, 1, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, InProgressListComponent_ng_container_7_Template, 9, 4, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, InProgressListComponent_ng_template_8_Template, 21, 3, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("scrolled", function InProgressListComponent_Template_div_scrolled_10_listener() {
          return ctx.onScroll();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](11, InProgressListComponent_div_11_Template, 4, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](12, InProgressListComponent_div_12_Template, 4, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](1, 12, ctx.filtersConfig$))("showAllStoriesButton", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("sortElements", ctx.sortElements)("activeSort", ctx.activeSort);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx.ui.mobileView);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.ui.mobileView)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("infiniteScrollDistance", 1)("infiniteScrollThrottle", 500)("fromRoot", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.noMoreItems);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_26__.NgIf, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_27__.InfiniteScrollDirective, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_23__.MatLegacyTable, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_23__.MatLegacyHeaderCellDef, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_23__.MatLegacyHeaderRowDef, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_23__.MatLegacyColumnDef, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_23__.MatLegacyCellDef, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_23__.MatLegacyRowDef, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_23__.MatLegacyHeaderCell, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_23__.MatLegacyCell, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_23__.MatLegacyHeaderRow, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_23__.MatLegacyRow, _shared_components_mobile_table_mobile_table_component__WEBPACK_IMPORTED_MODULE_14__.MobileTableComponent, _shared_components_mobile_table_mobile_cell_directive__WEBPACK_IMPORTED_MODULE_15__.MobileCellDirective, _shared_components_sort_sort_component__WEBPACK_IMPORTED_MODULE_16__.SortComponent, _shared_components_filters_section_v2_filter_section_v2_component__WEBPACK_IMPORTED_MODULE_17__.FilterSectionV2Component, _inbox_stories_story_details_shared_divider_divider_component__WEBPACK_IMPORTED_MODULE_18__.DividerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_26__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_26__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslatePipe],
    styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\n.in-progress-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%] {\n  height: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluLXByb2dyZXNzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7O0FBR0U7RUFDRSxZQUFBO0FBQUoiLCJmaWxlIjoiaW4tcHJvZ3Jlc3MtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbi1wcm9ncmVzcy10YWJsZSB7XG4gIC5tYXQtcm93IHtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9vdXRib3gvaW4tcHJvZ3Jlc3MvaW4tcHJvZ3Jlc3MtbGlzdC9pbi1wcm9ncmVzcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUdFO0VBQ0UsWUFBQTtBQUFKO0FBQ0EsNGFBQTRhIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmluLXByb2dyZXNzLXRhYmxlIHtcbiAgLm1hdC1yb3cge1xuICAgIGhlaWdodDogNzBweDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 71739:
/*!**************************************************************************!*\
  !*** ./src/app/modules/outbox/in-progress/in-progress-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InProgressRoutingModule": () => (/* binding */ InProgressRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _in_progress_list_in_progress_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./in-progress-list/in-progress-list.component */ 65744);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _in_progress_list_in_progress_list_component__WEBPACK_IMPORTED_MODULE_0__.InProgressListComponent,
  data: {
    title: 'outboxInProgress'
  }
}];
class InProgressRoutingModule {
  static #_ = this.ɵfac = function InProgressRoutingModule_Factory(t) {
    return new (t || InProgressRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: InProgressRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](InProgressRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 90437:
/*!******************************************************************!*\
  !*** ./src/app/modules/outbox/in-progress/in-progress.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InProgressModule": () => (/* binding */ InProgressModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _app_modules_inbox_stories_story_details_shared_shared_story_details_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/modules/inbox/stories/story-details/shared/shared-story-details.module */ 54633);
/* harmony import */ var _app_modules_outbox_in_progress_in_progress_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/modules/outbox/in-progress/in-progress-routing.module */ 71739);
/* harmony import */ var _app_modules_outbox_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/modules/outbox/shared/shared.module */ 70863);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/shared.module */ 44466);
/* harmony import */ var _shared_components_filters_section_v2_filter_section_v2_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/components/filters-section-v2/filter-section-v2.module */ 69417);
/* harmony import */ var _shared_utils_data_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/utils/data.utils */ 9417);
/* harmony import */ var _in_progress_list_in_progress_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./in-progress-list/in-progress-list.component */ 65744);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);









class InProgressModule {
  static #_ = this.ɵfac = function InProgressModule_Factory(t) {
    return new (t || InProgressModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: InProgressModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    providers: [_shared_utils_data_utils__WEBPACK_IMPORTED_MODULE_5__.DataUtils],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _app_modules_outbox_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedOutboxModule, _shared_components_filters_section_v2_filter_section_v2_module__WEBPACK_IMPORTED_MODULE_4__.FilterSectionV2Module, _app_modules_outbox_in_progress_in_progress_routing_module__WEBPACK_IMPORTED_MODULE_1__.InProgressRoutingModule, _app_modules_inbox_stories_story_details_shared_shared_story_details_module__WEBPACK_IMPORTED_MODULE_0__.SharedStoryDetailsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](InProgressModule, {
    declarations: [_in_progress_list_in_progress_list_component__WEBPACK_IMPORTED_MODULE_6__.InProgressListComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _app_modules_outbox_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedOutboxModule, _shared_components_filters_section_v2_filter_section_v2_module__WEBPACK_IMPORTED_MODULE_4__.FilterSectionV2Module, _app_modules_outbox_in_progress_in_progress_routing_module__WEBPACK_IMPORTED_MODULE_1__.InProgressRoutingModule, _app_modules_inbox_stories_story_details_shared_shared_story_details_module__WEBPACK_IMPORTED_MODULE_0__.SharedStoryDetailsModule]
  });
})();

/***/ }),

/***/ 9417:
/*!********************************************!*\
  !*** ./src/app/shared/utils/data.utils.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataUtils": () => (/* binding */ DataUtils)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 38699);


class DataUtils {
  constructor(translateService) {
    this.translateService = translateService;
    this.getCategories = categories => {
      let translatedString = '';
      categories.forEach((category, index) => {
        const translatedCategory = this.translateService.instant(`category.${category}`);
        translatedString += index !== 0 ? `, ${translatedCategory}` : translatedCategory;
      });
      return translatedString;
    };
  }
  getLanguage(languageCode) {
    return languageCode ? this.translateService.instant(`languages.${languageCode}`) : '-';
  }
  getCountry(countryCode) {
    return countryCode ? this.translateService.instant(`country_name.${countryCode}`) : '-';
  }
  getChannel(channelCode) {
    return this.translateService.instant(`filtersV2.channel.${channelCode}`);
  }
  getStoryStatus(status) {
    return `story.status.${status}`;
  }
  getCommentStatus(status) {
    return `comment.status.${status}`;
  }
  getStoryStatusImage(status) {
    if (status) {
      return `assets/icons/story-status/${status}.svg`;
    }
  }
  static #_ = this.ɵfac = function DataUtils_Factory(t) {
    return new (t || DataUtils)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: DataUtils,
    factory: DataUtils.ɵfac
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_modules_outbox_in-progress_in-progress_module_ts.js.map