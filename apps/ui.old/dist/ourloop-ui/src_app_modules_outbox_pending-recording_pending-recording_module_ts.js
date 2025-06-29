"use strict";
(self["webpackChunkourloop_ui"] = self["webpackChunkourloop_ui"] || []).push([["src_app_modules_outbox_pending-recording_pending-recording_module_ts"],{

/***/ 82700:
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/outbox/pending-recording/pending-recording-list/pending-recording-columns.const.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pendingRecordingColumns": () => (/* binding */ pendingRecordingColumns)
/* harmony export */ });
/* harmony import */ var _shared_outbox_table_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/outbox-table.model */ 50424);

const pendingRecordingColumns = [new _shared_outbox_table_model__WEBPACK_IMPORTED_MODULE_0__.OutboxTable('datetime', 'outbox.table.dateTime'), new _shared_outbox_table_model__WEBPACK_IMPORTED_MODULE_0__.OutboxTable('content', 'outbox.table.reply'), new _shared_outbox_table_model__WEBPACK_IMPORTED_MODULE_0__.OutboxTable('authorNickname', 'outbox.table.moderator'), new _shared_outbox_table_model__WEBPACK_IMPORTED_MODULE_0__.OutboxTable('targetLanguage', 'outbox.table.targetLanguage')];

/***/ }),

/***/ 83831:
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/outbox/pending-recording/pending-recording-list/pending-recording-list.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PendingRecordingListComponent": () => (/* binding */ PendingRecordingListComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/legacy-table */ 96538);
/* harmony import */ var _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/app-routing.props */ 18854);
/* harmony import */ var _app_modules_outbox_outbox_filter_outbox_filter_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/modules/outbox/outbox-filter/outbox-filter.model */ 58247);
/* harmony import */ var _app_modules_outbox_pending_recording_pending_recording_list_pending_recording_filters_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/modules/outbox/pending-recording/pending-recording-list/pending-recording-filters.config */ 10651);
/* harmony import */ var _app_shared_components_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/components/base.component */ 70697);
/* harmony import */ var _app_shared_components_mobile_table_mobile_table_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/components/mobile-table/mobile-table.model */ 63277);
/* harmony import */ var _shared_utils_filters_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/utils/filters.utils */ 65197);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _outbox_filter_tab_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../outbox-filter-tab.enum */ 89943);
/* harmony import */ var _pending_recording_columns_const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pending-recording-columns.const */ 82700);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/core/services/ui/ui.service */ 21428);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_services_api_comment_comment_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/services/api/comment/comment.service */ 42075);
/* harmony import */ var _outbox_filters_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../outbox-filters.service */ 74734);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _core_services_locales_supported_languages_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/services/locales/supported-languages.service */ 90423);
/* harmony import */ var _core_services_filters_filters_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/services/filters/filters.service */ 86631);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-infinite-scroll */ 47364);
/* harmony import */ var _shared_components_mobile_table_mobile_table_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/components/mobile-table/mobile-table.component */ 20026);
/* harmony import */ var _shared_components_mobile_table_mobile_cell_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/components/mobile-table/mobile-cell.directive */ 34890);
/* harmony import */ var _shared_components_sort_sort_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/components/sort/sort.component */ 3963);
/* harmony import */ var _shared_components_filters_section_v2_filter_section_v2_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/components/filters-section-v2/filter-section-v2.component */ 54791);
/* harmony import */ var _inbox_stories_story_details_shared_divider_divider_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../inbox/stories/story-details/shared/divider/divider.component */ 49696);



























function PendingRecordingListComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "div", 10);
  }
}
function PendingRecordingListComponent_ng_container_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](2, 1, element_r11.createdAt, ctx_r6.DATE_FORMAT), " ");
  }
}
function PendingRecordingListComponent_ng_container_7_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", element_r12.content, " ");
  }
}
function PendingRecordingListComponent_ng_container_7_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", element_r13.storyPublishedBy, " ");
  }
}
function PendingRecordingListComponent_ng_container_7_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", element_r14.storyLanguage ? _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "languages." + element_r14.storyLanguage) : "-", " ");
  }
}
function PendingRecordingListComponent_ng_container_7_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "app-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
  }
}
function PendingRecordingListComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "app-mobile-table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("actionClick", function PendingRecordingListComponent_ng_container_7_Template_app_mobile_table_actionClick_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r16.onActionClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, PendingRecordingListComponent_ng_container_7_ng_container_2_Template, 3, 4, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, PendingRecordingListComponent_ng_container_7_ng_container_3_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, PendingRecordingListComponent_ng_container_7_ng_container_4_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, PendingRecordingListComponent_ng_container_7_ng_container_5_Template, 3, 3, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, PendingRecordingListComponent_ng_container_7_ng_container_6_Template, 2, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("itemsInRow", 1)("actions", ctx_r1.listActions)("list", ctx_r1.listElements)("columns", ctx_r1.columns);
  }
}
function PendingRecordingListComponent_ng_template_8_th_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r18.getColumnHeader("datetime"));
  }
}
function PendingRecordingListComponent_ng_template_8_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r28 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](2, 1, element_r28.createdAt, ctx_r19.DATE_FORMAT));
  }
}
function PendingRecordingListComponent_ng_template_8_th_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r20.getColumnHeader("content"));
  }
}
function PendingRecordingListComponent_ng_template_8_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](element_r29.content);
  }
}
function PendingRecordingListComponent_ng_template_8_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r22.getColumnHeader("authorNickname"));
  }
}
function PendingRecordingListComponent_ng_template_8_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](element_r30.storyPublishedBy);
  }
}
function PendingRecordingListComponent_ng_template_8_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r24.getColumnHeader("targetLanguage"));
  }
}
function PendingRecordingListComponent_ng_template_8_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](element_r31.storyLanguage ? _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "languages." + element_r31.storyLanguage) : "-");
  }
}
function PendingRecordingListComponent_ng_template_8_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "tr", 26);
  }
}
function PendingRecordingListComponent_ng_template_8_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function PendingRecordingListComponent_ng_template_8_tr_14_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r34);
      const row_r32 = restoredCtx.$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r33.rowClicked(row_r32));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function PendingRecordingListComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](1, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, PendingRecordingListComponent_ng_template_8_th_2_Template, 2, 1, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, PendingRecordingListComponent_ng_template_8_td_3_Template, 3, 4, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](4, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, PendingRecordingListComponent_ng_template_8_th_5_Template, 2, 1, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, PendingRecordingListComponent_ng_template_8_td_6_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](7, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, PendingRecordingListComponent_ng_template_8_th_8_Template, 2, 1, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, PendingRecordingListComponent_ng_template_8_td_9_Template, 2, 1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](10, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](11, PendingRecordingListComponent_ng_template_8_th_11_Template, 2, 1, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](12, PendingRecordingListComponent_ng_template_8_td_12_Template, 3, 3, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](13, PendingRecordingListComponent_ng_template_8_tr_13_Template, 1, 0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](14, PendingRecordingListComponent_ng_template_8_tr_14_Template, 1, 0, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dataSource", ctx_r3.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("matHeaderRowDef", ctx_r3.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("matRowDefColumns", ctx_r3.displayedColumns);
  }
}
function PendingRecordingListComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 28)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 1, "outbox.table.loading"), " ");
  }
}
function PendingRecordingListComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 29)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 1, "admin.comment.noMoreComments"), " ");
  }
}
class PendingRecordingListComponent extends _app_shared_components_base_component__WEBPACK_IMPORTED_MODULE_3__.BaseComponent {
  constructor(ui, router, commentService, outboxFiltersService, translateService, languageService, filtersService) {
    super();
    this.ui = ui;
    this.router = router;
    this.commentService = commentService;
    this.outboxFiltersService = outboxFiltersService;
    this.translateService = translateService;
    this.languageService = languageService;
    this.filtersService = filtersService;
    this.columns = _pending_recording_columns_const__WEBPACK_IMPORTED_MODULE_7__.pendingRecordingColumns;
    this.displayedColumns = this.columns.map(column => column.key);
    this.listActions = [new _app_shared_components_mobile_table_mobile_table_model__WEBPACK_IMPORTED_MODULE_4__.MobileTableAction('global.recordReply')];
    this.DATE_FORMAT = 'dd/MM/yy h:mm a';
    this.filtersConfig$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.BehaviorSubject(null);
    this.currentPage = 1;
    this.listLimit = 15;
    this.loading = false;
    this.noMoreItems = false;
    this.listElements = [];
    this.sortElements = ['desc', 'asc'];
    this.activeSort = this.sortElements[0];
    this.filters = {};
    if (this.outboxFiltersService.getCurrentOutboxFilterTab() !== _outbox_filter_tab_enum__WEBPACK_IMPORTED_MODULE_6__.OUTBOX_FILTER_TAB.PENDING_RECORDING) {
      this.outboxFiltersService.setCurrentOutboxFilterTab(_outbox_filter_tab_enum__WEBPACK_IMPORTED_MODULE_6__.OUTBOX_FILTER_TAB.PENDING_RECORDING);
    }
  }
  ngOnInit() {
    this.fetchData();
    this.filtersConfig$.next(_app_modules_outbox_pending_recording_pending_recording_list_pending_recording_filters_config__WEBPACK_IMPORTED_MODULE_2__.pendingRecordingFiltersConfig);
    this.prepareFiltersData();
    this.filtersService.filtersChanged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.takeUntil)(this.destroyed$)).subscribe(() => {
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
    this.router.navigate([_app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.MAIN_ROUTES.OUTBOX, _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.OUTBOX_ROUTES.PENDING_RECORDING, 'record', itemId]);
  }
  loadMoreData() {
    this.currentPage++;
    this.fetchData();
  }
  fetchData() {
    this.loading = true;
    this.filters = (0,_shared_utils_filters_utils__WEBPACK_IMPORTED_MODULE_5__.prepareFilterDataFromSessionStorage)(_app_modules_outbox_pending_recording_pending_recording_list_pending_recording_filters_config__WEBPACK_IMPORTED_MODULE_2__.pendingRecordingFiltersConfig);
    this.commentService.getPendingRecordingComments(this.filters, this.currentPage, this.listLimit, this.activeSort).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.takeUntil)(this.destroyed$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.finalize)(() => this.loading = false)).subscribe(data => {
      this.listElements = this.currentPage === 1 ? data.items : this.listElements.concat(data.items);
      this.dataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_22__.MatLegacyTableDataSource(this.listElements);
      this.verifyTotalItems(data.meta.totalItems);
      // this.outboxFiltersService.updateItemsMeta
    });
  }

  verifyTotalItems(totalItems) {
    this.noMoreItems = this.listElements.length === totalItems;
  }
  prepareFiltersData() {
    (0,_shared_utils_filters_utils__WEBPACK_IMPORTED_MODULE_5__.prepareLanguageFilterOptions)(this.languageService).subscribe(languages => this.filtersConfig$.next(_app_modules_outbox_pending_recording_pending_recording_list_pending_recording_filters_config__WEBPACK_IMPORTED_MODULE_2__.pendingRecordingFiltersConfig.map(config => this.prepareSingleFilterData(config, languages))));
  }
  prepareSingleFilterData(config, languages) {
    switch (config.internalName) {
      case _app_modules_outbox_outbox_filter_outbox_filter_model__WEBPACK_IMPORTED_MODULE_1__.OutboxPendingFilters.TARGET_LANGUAGE:
        config.data = {
          data: languages,
          titleKey: ''
        };
        break;
      case _app_modules_outbox_outbox_filter_outbox_filter_model__WEBPACK_IMPORTED_MODULE_1__.OutboxPendingFilters.CHANNEL:
        config.data = {
          data: (0,_shared_utils_filters_utils__WEBPACK_IMPORTED_MODULE_5__.prepareChannelFilterOptions)(),
          titleKey: ''
        };
        break;
    }
    return config;
  }
  static #_ = this.ɵfac = function PendingRecordingListComponent_Factory(t) {
    return new (t || PendingRecordingListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_app_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_8__.UIService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_services_api_comment_comment_service__WEBPACK_IMPORTED_MODULE_9__.CommentService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_outbox_filters_service__WEBPACK_IMPORTED_MODULE_10__.OutboxFiltersService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_services_locales_supported_languages_service__WEBPACK_IMPORTED_MODULE_11__.SupportedLanguagesService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_services_filters_filters_service__WEBPACK_IMPORTED_MODULE_12__.FiltersService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
    type: PendingRecordingListComponent,
    selectors: [["app-pending-recording-list"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵInheritDefinitionFeature"]],
    decls: 13,
    vars: 14,
    consts: [[1, "pending-recording-list__filters", "outbox__filters", 3, "config", "showAllStoriesButton"], [1, "outbox-list-container"], [1, "outbox-list-container__nav"], [3, "sortElements", "activeSort", "sortChange$"], ["class", "outbox-separator", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["desktopTable", ""], ["infiniteScroll", "", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "fromRoot", "scrolled"], ["class", "outbox-list-container__loading", 4, "ngIf"], ["class", "outbox-list-container__no-more-results", 4, "ngIf"], [1, "outbox-separator"], [3, "itemsInRow", "actions", "list", "columns", "actionClick"], [4, "loopMobileCell"], ["mat-table", "", 1, "outbox-table", "pending-recording-table", 3, "dataSource"], ["matColumnDef", "datetime"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "content"], ["mat-cell", "", "class", "no-wrap", 4, "matCellDef"], ["matColumnDef", "authorNickname"], ["matColumnDef", "targetLanguage"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 1, "no-wrap"], ["mat-header-row", ""], ["mat-row", "", 3, "click"], [1, "outbox-list-container__loading"], [1, "outbox-list-container__no-more-results"]],
    template: function PendingRecordingListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "loop-filter-section-v2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 2)(5, "loop-sort", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("sortChange$", function PendingRecordingListComponent_Template_loop_sort_sortChange__5_listener($event) {
          return ctx.sortChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, PendingRecordingListComponent_div_6_Template, 1, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, PendingRecordingListComponent_ng_container_7_Template, 7, 4, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, PendingRecordingListComponent_ng_template_8_Template, 15, 3, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("scrolled", function PendingRecordingListComponent_Template_div_scrolled_10_listener() {
          return ctx.onScroll();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](11, PendingRecordingListComponent_div_11_Template, 4, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](12, PendingRecordingListComponent_div_12_Template, 4, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](1, 12, ctx.filtersConfig$))("showAllStoriesButton", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("sortElements", ctx.sortElements)("activeSort", ctx.activeSort);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx.ui.mobileView);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.ui.mobileView)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("infiniteScrollDistance", 1)("infiniteScrollThrottle", 500)("fromRoot", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.noMoreItems);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_25__.NgIf, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_26__.InfiniteScrollDirective, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_22__.MatLegacyTable, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_22__.MatLegacyHeaderCellDef, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_22__.MatLegacyHeaderRowDef, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_22__.MatLegacyColumnDef, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_22__.MatLegacyCellDef, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_22__.MatLegacyRowDef, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_22__.MatLegacyHeaderCell, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_22__.MatLegacyCell, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_22__.MatLegacyHeaderRow, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_22__.MatLegacyRow, _shared_components_mobile_table_mobile_table_component__WEBPACK_IMPORTED_MODULE_13__.MobileTableComponent, _shared_components_mobile_table_mobile_cell_directive__WEBPACK_IMPORTED_MODULE_14__.MobileCellDirective, _shared_components_sort_sort_component__WEBPACK_IMPORTED_MODULE_15__.SortComponent, _shared_components_filters_section_v2_filter_section_v2_component__WEBPACK_IMPORTED_MODULE_16__.FilterSectionV2Component, _inbox_stories_story_details_shared_divider_divider_component__WEBPACK_IMPORTED_MODULE_17__.DividerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_25__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_25__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslatePipe],
    styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\n.pending-recording-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%] {\n  height: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlbmRpbmctcmVjb3JkaW5nLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7O0FBR0U7RUFDRSxZQUFBO0FBQUoiLCJmaWxlIjoicGVuZGluZy1yZWNvcmRpbmctbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wZW5kaW5nLXJlY29yZGluZy10YWJsZSB7XG4gIC5tYXQtcm93IHtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9vdXRib3gvcGVuZGluZy1yZWNvcmRpbmcvcGVuZGluZy1yZWNvcmRpbmctbGlzdC9wZW5kaW5nLXJlY29yZGluZy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUdFO0VBQ0UsWUFBQTtBQUFKO0FBQ0Esb2NBQW9jIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBlbmRpbmctcmVjb3JkaW5nLXRhYmxlIHtcbiAgLm1hdC1yb3cge1xuICAgIGhlaWdodDogNzBweDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 22358:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/outbox/pending-recording/pending-recording-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PendingRecordingRoutingModule": () => (/* binding */ PendingRecordingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/app-routing.props */ 18854);
/* harmony import */ var _pending_recording_list_pending_recording_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pending-recording-list/pending-recording-list.component */ 83831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [{
  path: '',
  component: _pending_recording_list_pending_recording_list_component__WEBPACK_IMPORTED_MODULE_1__.PendingRecordingListComponent,
  data: {
    title: 'outboxPendingRecording'
  }
}, {
  path: _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.OUTBOX_PENDING_RECORD_ROUTES.RECORD,
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_outbox_pending-recording_pending-record-details_pending-record-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pending-record-details/pending-record-details.module */ 26720)).then(m => m.PendingRecordDetailsModule)
}];
class PendingRecordingRoutingModule {
  static #_ = this.ɵfac = function PendingRecordingRoutingModule_Factory(t) {
    return new (t || PendingRecordingRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: PendingRecordingRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PendingRecordingRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 6526:
/*!******************************************************************************!*\
  !*** ./src/app/modules/outbox/pending-recording/pending-recording.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PendingRecordingModule": () => (/* binding */ PendingRecordingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _app_modules_inbox_stories_story_details_shared_shared_story_details_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/modules/inbox/stories/story-details/shared/shared-story-details.module */ 54633);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/shared.module */ 44466);
/* harmony import */ var _shared_components_filters_section_v2_filter_section_v2_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/filters-section-v2/filter-section-v2.module */ 69417);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 70863);
/* harmony import */ var _pending_recording_list_pending_recording_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pending-recording-list/pending-recording-list.component */ 83831);
/* harmony import */ var _pending_recording_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pending-recording-routing.module */ 22358);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);








class PendingRecordingModule {
  static #_ = this.ɵfac = function PendingRecordingModule_Factory(t) {
    return new (t || PendingRecordingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: PendingRecordingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedOutboxModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _pending_recording_routing_module__WEBPACK_IMPORTED_MODULE_5__.PendingRecordingRoutingModule, _shared_components_filters_section_v2_filter_section_v2_module__WEBPACK_IMPORTED_MODULE_2__.FilterSectionV2Module, _app_modules_inbox_stories_story_details_shared_shared_story_details_module__WEBPACK_IMPORTED_MODULE_0__.SharedStoryDetailsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PendingRecordingModule, {
    declarations: [_pending_recording_list_pending_recording_list_component__WEBPACK_IMPORTED_MODULE_4__.PendingRecordingListComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedOutboxModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _pending_recording_routing_module__WEBPACK_IMPORTED_MODULE_5__.PendingRecordingRoutingModule, _shared_components_filters_section_v2_filter_section_v2_module__WEBPACK_IMPORTED_MODULE_2__.FilterSectionV2Module, _app_modules_inbox_stories_story_details_shared_shared_story_details_module__WEBPACK_IMPORTED_MODULE_0__.SharedStoryDetailsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_modules_outbox_pending-recording_pending-recording_module_ts.js.map