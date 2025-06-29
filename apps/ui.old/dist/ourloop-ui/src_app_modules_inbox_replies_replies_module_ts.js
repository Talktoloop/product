"use strict";
(self["webpackChunkourloop_ui"] = self["webpackChunkourloop_ui"] || []).push([["src_app_modules_inbox_replies_replies_module_ts"],{

/***/ 68467:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/inbox/replies/replies-list/replies-columns.const.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "repliesColumns": () => (/* binding */ repliesColumns)
/* harmony export */ });
/* harmony import */ var _shared_inbox_table_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/inbox-table.model */ 15860);

const repliesColumns = [new _shared_inbox_table_model__WEBPACK_IMPORTED_MODULE_0__.InboxTable('datetime', 'inbox.table.dateTime'), new _shared_inbox_table_model__WEBPACK_IMPORTED_MODULE_0__.InboxTable('country', 'inbox.table.country'), new _shared_inbox_table_model__WEBPACK_IMPORTED_MODULE_0__.InboxTable('language', 'inbox.table.language'), new _shared_inbox_table_model__WEBPACK_IMPORTED_MODULE_0__.InboxTable('channel', 'inbox.table.channel')];

/***/ }),

/***/ 78797:
/*!******************************************************************************!*\
  !*** ./src/app/modules/inbox/replies/replies-list/replies-list.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepliesListComponent": () => (/* binding */ RepliesListComponent)
/* harmony export */ });
/* harmony import */ var _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/app-routing.props */ 18854);
/* harmony import */ var _app_shared_components_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/components/base.component */ 70697);
/* harmony import */ var _app_shared_components_mobile_table_mobile_table_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/components/mobile-table/mobile-table.model */ 63277);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _replies_columns_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./replies-columns.const */ 68467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/services/ui/ui.service */ 21428);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_modules_inbox_replies_replies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/inbox/replies/replies.service */ 7097);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-infinite-scroll */ 47364);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/legacy-table */ 96538);
/* harmony import */ var _shared_components_mobile_table_mobile_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/mobile-table/mobile-table.component */ 20026);
/* harmony import */ var _shared_components_mobile_table_mobile_cell_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/mobile-table/mobile-cell.directive */ 34890);
/* harmony import */ var _shared_pipes_channel_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/pipes/channel.pipe */ 21466);
















function RepliesListComponent_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](2, 1, element_r9.createdAt, ctx_r5.DATE_FORMAT), " ");
  }
}
function RepliesListComponent_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "country_name." + element_r10.country), " ");
  }
}
function RepliesListComponent_ng_container_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", element_r11.language ? _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "languages." + element_r11.language) : "-", " ");
  }
}
function RepliesListComponent_ng_container_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "channel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, element_r12.channel), " ");
  }
}
function RepliesListComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "app-mobile-table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("actionClick", function RepliesListComponent_ng_container_1_Template_app_mobile_table_actionClick_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r13.onActionClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, RepliesListComponent_ng_container_1_ng_container_3_Template, 3, 4, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, RepliesListComponent_ng_container_1_ng_container_4_Template, 3, 3, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, RepliesListComponent_ng_container_1_ng_container_5_Template, 3, 3, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, RepliesListComponent_ng_container_1_ng_container_6_Template, 3, 3, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("itemsInRow", 2)("actions", ctx_r0.listActions)("list", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 4, ctx_r0.repliesService.listElements$))("columns", ctx_r0.columns);
  }
}
function RepliesListComponent_ng_template_2_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r15.getColumnHeader("datetime"));
  }
}
function RepliesListComponent_ng_template_2_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r25 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](2, 1, element_r25.createdAt, ctx_r16.DATE_FORMAT));
  }
}
function RepliesListComponent_ng_template_2_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "filters.country"));
  }
}
function RepliesListComponent_ng_template_2_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "country_name." + element_r26.country));
  }
}
function RepliesListComponent_ng_template_2_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r19.getColumnHeader("language"));
  }
}
function RepliesListComponent_ng_template_2_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](element_r27.language ? _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "languages." + element_r27.language) : "-");
  }
}
function RepliesListComponent_ng_template_2_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r21.getColumnHeader("channel"));
  }
}
function RepliesListComponent_ng_template_2_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "channel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, element_r28.channel));
  }
}
function RepliesListComponent_ng_template_2_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 19);
  }
}
function RepliesListComponent_ng_template_2_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RepliesListComponent_ng_template_2_tr_15_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r31);
      const row_r29 = restoredCtx.$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r30.rowClicked(row_r29));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r29 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("lastVisitedId", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 2, ctx_r24.repliesService.lastVisitedId$) === row_r29.id);
  }
}
function RepliesListComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](2, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, RepliesListComponent_ng_template_2_th_3_Template, 2, 1, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, RepliesListComponent_ng_template_2_td_4_Template, 3, 4, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](5, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, RepliesListComponent_ng_template_2_th_6_Template, 3, 3, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, RepliesListComponent_ng_template_2_td_7_Template, 3, 3, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](8, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, RepliesListComponent_ng_template_2_th_9_Template, 2, 1, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, RepliesListComponent_ng_template_2_td_10_Template, 3, 3, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](11, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, RepliesListComponent_ng_template_2_th_12_Template, 2, 1, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, RepliesListComponent_ng_template_2_td_13_Template, 3, 3, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, RepliesListComponent_ng_template_2_tr_14_Template, 1, 0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, RepliesListComponent_ng_template_2_tr_15_Template, 2, 4, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 3, ctx_r2.repliesService.dataSource$));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matRowDefColumns", ctx_r2.displayedColumns);
  }
}
function RepliesListComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 21)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "inbox.table.loading"), " ");
  }
}
function RepliesListComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 22)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "storiesList.text.noMoreStories"), " ");
  }
}
class RepliesListComponent extends _app_shared_components_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
  constructor(ui, router, repliesService, translateService, route, cdRef) {
    super();
    this.ui = ui;
    this.router = router;
    this.repliesService = repliesService;
    this.translateService = translateService;
    this.route = route;
    this.cdRef = cdRef;
    this.columns = _replies_columns_const__WEBPACK_IMPORTED_MODULE_3__.repliesColumns;
    this.displayedColumns = this.columns.map(column => column.key);
    this.listActions = [new _app_shared_components_mobile_table_mobile_table_model__WEBPACK_IMPORTED_MODULE_2__.MobileTableAction('inbox.table.actions.review')];
    this.DATE_FORMAT = 'dd/MM/yy h:mm a';
  }
  getColumnHeader(column) {
    const translation = this.columns.find(element => element.key === column)?.label;
    return translation ? this.translateService.instant(translation) : 'Unknown';
  }
  rowClicked(item) {
    this.repliesService.lastVisitedId$.next(item.id);
    this.repliesService.scrollPos$.next(this.ui.lastScrollTop$.getValue());
    this.router.navigateByUrl(`${_app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.MAIN_ROUTES.INBOX}/${_app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.INBOX_ROUTES.REPLIES}/${item.id}`);
  }
  onActionClick(callback) {
    this.repliesService.lastVisitedId$.next(callback.element.id);
    this.repliesService.scrollPos$.next(this.ui.lastScrollTop$.getValue());
    if (callback.action === this.listActions[0]) {
      this.router.navigate([_app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.MAIN_ROUTES.INBOX, _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.INBOX_ROUTES.REPLIES, callback.element.id]);
    }
  }
  ngAfterViewInit() {
    const animationDelay = 1000;
    this.processedReplyId = this.route.snapshot.queryParamMap.get('processedReplyId');
    this.repliesService.loading$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroyed$)).subscribe(loading => {
      this.loading = loading;
      this.cdRef.detectChanges();
    });
    if (this.repliesService.lastVisitedId$.getValue()) {
      setTimeout(() => {
        window.scrollTo(0, this.repliesService.scrollPos$.getValue());
      });
      setTimeout(() => {
        this.repliesService.deleteElement(this.processedReplyId);
      }, animationDelay);
    }
    this.deleteLastVisitedId = setTimeout(() => {
      this.repliesService.lastVisitedId$.next(null);
    }, animationDelay);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    if (this.deleteLastVisitedId) {
      clearTimeout(this.deleteLastVisitedId);
    }
  }
  static #_ = this.ɵfac = function RepliesListComponent_Factory(t) {
    return new (t || RepliesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_4__.UIService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_modules_inbox_replies_replies_service__WEBPACK_IMPORTED_MODULE_5__.RepliesService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: RepliesListComponent,
    selectors: [["app-replies-list"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]],
    decls: 7,
    vars: 7,
    consts: [[1, "inbox-list-container"], [4, "ngIf", "ngIfElse"], ["desktopTable", ""], ["infiniteScroll", "", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "fromRoot", "scrolled"], ["class", "inbox-list-container__loading", 4, "ngIf"], ["class", "inbox-list-container__no-more-results", 4, "ngIf"], [3, "itemsInRow", "actions", "list", "columns", "actionClick"], [4, "loopMobileCell"], ["mat-table", "", 1, "inbox-table", "replies-table", 3, "dataSource"], ["matColumnDef", "datetime"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "country"], ["matColumnDef", "language"], ["matColumnDef", "channel"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "lastVisitedId", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"], [1, "inbox-list-container__loading"], [1, "inbox-list-container__no-more-results"]],
    template: function RepliesListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, RepliesListComponent_ng_container_1_Template, 7, 6, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, RepliesListComponent_ng_template_2_Template, 16, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("scrolled", function RepliesListComponent_Template_div_scrolled_4_listener() {
          return ctx.repliesService.onRepliesScroll();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, RepliesListComponent_div_5_Template, 4, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, RepliesListComponent_div_6_Template, 4, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.ui.mobileView)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("infiniteScrollDistance", 1)("infiniteScrollThrottle", 500)("fromRoot", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.repliesService.noMoreItems$);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_14__.InfiniteScrollDirective, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_15__.MatLegacyTable, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_15__.MatLegacyHeaderCellDef, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_15__.MatLegacyHeaderRowDef, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_15__.MatLegacyColumnDef, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_15__.MatLegacyCellDef, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_15__.MatLegacyRowDef, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_15__.MatLegacyHeaderCell, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_15__.MatLegacyCell, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_15__.MatLegacyHeaderRow, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_15__.MatLegacyRow, _shared_components_mobile_table_mobile_table_component__WEBPACK_IMPORTED_MODULE_6__.MobileTableComponent, _shared_components_mobile_table_mobile_cell_directive__WEBPACK_IMPORTED_MODULE_7__.MobileCellDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe, _shared_pipes_channel_pipe__WEBPACK_IMPORTED_MODULE_8__.ChannelPipe],
    styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcGxpZXMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRiIsImZpbGUiOiJyZXBsaWVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9pbmJveC9yZXBsaWVzL3JlcGxpZXMtbGlzdC9yZXBsaWVzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7QUFDQSw0U0FBNFMiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 66359:
/*!*****************************************************************!*\
  !*** ./src/app/modules/inbox/replies/replies-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepliesRoutingModule": () => (/* binding */ RepliesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/app-routing.props */ 18854);
/* harmony import */ var _replies_list_replies_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./replies-list/replies-list.component */ 78797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [{
  path: '',
  component: _replies_list_replies_list_component__WEBPACK_IMPORTED_MODULE_1__.RepliesListComponent,
  data: {
    title: 'inboxReplies'
  },
  pathMatch: 'prefix'
}, {
  path: _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.INBOX_REPLY_ROUTES.REPLY,
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_services_fixed-positioning_fixed-positioning_ts-src_app_shared_component-246e65"), __webpack_require__.e("src_app_modules_inbox_replies_reply-details_reply-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./reply-details/reply-details.module */ 94222)).then(m => m.ReplyDetailsModule),
  pathMatch: 'prefix'
}];
class RepliesRoutingModule {
  static #_ = this.ɵfac = function RepliesRoutingModule_Factory(t) {
    return new (t || RepliesRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: RepliesRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RepliesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 36280:
/*!*********************************************************!*\
  !*** ./src/app/modules/inbox/replies/replies.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepliesModule": () => (/* binding */ RepliesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _app_modules_inbox_replies_replies_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/modules/inbox/replies/replies.service */ 7097);
/* harmony import */ var _app_shared_components_inline_loading_inline_loading_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/components/inline-loading/inline-loading.module */ 80812);
/* harmony import */ var _app_shared_components_skeleton_text_skeleton_text_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/components/skeleton-text/skeleton-text.module */ 81298);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/shared.module */ 44466);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ 39743);
/* harmony import */ var _replies_list_replies_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./replies-list/replies-list.component */ 78797);
/* harmony import */ var _replies_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./replies-routing.module */ 66359);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);









class RepliesModule {
  static #_ = this.ɵfac = function RepliesModule_Factory(t) {
    return new (t || RepliesModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: RepliesModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    providers: [_app_modules_inbox_replies_replies_service__WEBPACK_IMPORTED_MODULE_0__.RepliesService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _app_shared_components_inline_loading_inline_loading_module__WEBPACK_IMPORTED_MODULE_1__.InlineLoadingModule, _replies_routing_module__WEBPACK_IMPORTED_MODULE_6__.RepliesRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedInboxModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _app_shared_components_skeleton_text_skeleton_text_module__WEBPACK_IMPORTED_MODULE_2__.SkeletonTextModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](RepliesModule, {
    declarations: [_replies_list_replies_list_component__WEBPACK_IMPORTED_MODULE_5__.RepliesListComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _app_shared_components_inline_loading_inline_loading_module__WEBPACK_IMPORTED_MODULE_1__.InlineLoadingModule, _replies_routing_module__WEBPACK_IMPORTED_MODULE_6__.RepliesRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedInboxModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _app_shared_components_skeleton_text_skeleton_text_module__WEBPACK_IMPORTED_MODULE_2__.SkeletonTextModule]
  });
})();

/***/ }),

/***/ 7097:
/*!**********************************************************!*\
  !*** ./src/app/modules/inbox/replies/replies.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepliesService": () => (/* binding */ RepliesService)
/* harmony export */ });
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-table */ 96538);
/* harmony import */ var _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/app-routing.props */ 18854);
/* harmony import */ var _app_modules_inbox_inbox_filter_tab_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/modules/inbox/inbox-filter-tab.enum */ 44060);
/* harmony import */ var _app_modules_inbox_inbox_filters_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/modules/inbox/inbox-filters.config */ 4268);
/* harmony import */ var _shared_utils_filters_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/utils/filters.utils */ 65197);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_services_api_comment_comment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/api/comment/comment.service */ 42075);
/* harmony import */ var _app_modules_inbox_inbox_filters_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/inbox/inbox-filters.service */ 41078);
/* harmony import */ var _core_services_filters_filters_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/filters/filters.service */ 86631);












class RepliesService {
  sortChange(sort) {
    this.activeSort$.next(sort);
    this.scrollPos$.next(0);
    this.currentPage = 1;
    this.fetchData();
  }
  onRepliesScroll() {
    if (this.loading$.getValue() || this.noMoreItems$.getValue()) {
      return;
    }
    this.loadMoreData();
  }
  constructor(router, commentService, inboxFiltersService, filtersService) {
    this.router = router;
    this.commentService = commentService;
    this.inboxFiltersService = inboxFiltersService;
    this.filtersService = filtersService;
    this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(false);
    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.sortElements = ['desc', 'asc'];
    this.currentPage = 1;
    this.listLimit = 15;
    this.filters = {};
    this.scrollPos$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(0);
    this.activeSort$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(this.sortElements[0]);
    this.listElements$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(null);
    this.dataSource$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(null);
    this.lastVisitedId$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(null);
    this.noMoreItems$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(false);
    if (this.inboxFiltersService.getCurrentInboxFilterTab() !== _app_modules_inbox_inbox_filter_tab_enum__WEBPACK_IMPORTED_MODULE_1__.INBOX_FILTER_TAB.REPLIES) {
      this.inboxFiltersService.setCurrentInboxFilterTab(_app_modules_inbox_inbox_filter_tab_enum__WEBPACK_IMPORTED_MODULE_1__.INBOX_FILTER_TAB.REPLIES);
    }
    this.filtersService.filtersChanged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroyed$)).subscribe(() => {
      this.currentPage = 1;
      if (this.router.url.includes(`${_app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.MAIN_ROUTES.INBOX}/${_app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.INBOX_ROUTES.REPLIES}`)) {
        this.fetchData();
      }
    });
    this.fetchData();
    this.watchFiltersChange();
  }
  fetchData() {
    this.loading$.next(true);
    this.filters = (0,_shared_utils_filters_utils__WEBPACK_IMPORTED_MODULE_3__.prepareFilterDataFromSessionStorage)(_app_modules_inbox_inbox_filters_config__WEBPACK_IMPORTED_MODULE_2__.inboxFiltersConfig);
    this.commentService.getCommentsModerator(this.filters, this.currentPage, this.listLimit, this.activeSort$.getValue()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroyed$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.finalize)(() => this.loading$.next(false))).subscribe(data => {
      this.listElements$.next(this.currentPage === 1 ? data.items : this.listElements$.getValue().concat(data.items));
      this.dataSource$.next(new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_11__.MatLegacyTableDataSource(this.listElements$.getValue()));
      this.verifyTotalItems(data.meta.totalItems);
    });
  }
  loadMoreData() {
    this.currentPage++;
    this.fetchData();
  }
  verifyTotalItems(totalItems) {
    this.noMoreItems$.next(this.listElements$.getValue().length === totalItems);
  }
  watchFiltersChange() {
    this.inboxFiltersService.filters$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroyed$)).subscribe(filters => {
      this.scrollPos$.next(0);
      this.filters = filters;
      this.currentPage = 1;
      this.fetchData();
    });
  }
  deleteElement(processedReplyId) {
    this.listElements$.next(this.listElements$.getValue().filter(comment => comment.id !== processedReplyId));
    this.dataSource$.next(new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_11__.MatLegacyTableDataSource(this.listElements$.getValue()));
  }
  static #_ = this.ɵfac = function RepliesService_Factory(t) {
    return new (t || RepliesService)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_core_services_api_comment_comment_service__WEBPACK_IMPORTED_MODULE_4__.CommentService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_app_modules_inbox_inbox_filters_service__WEBPACK_IMPORTED_MODULE_5__.InboxFiltersService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_core_services_filters_filters_service__WEBPACK_IMPORTED_MODULE_6__.FiltersService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({
    token: RepliesService,
    factory: RepliesService.ɵfac
  });
}

/***/ }),

/***/ 63277:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/mobile-table/mobile-table.model.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileTableAction": () => (/* binding */ MobileTableAction),
/* harmony export */   "MobileTableActionCallback": () => (/* binding */ MobileTableActionCallback)
/* harmony export */ });
class MobileTableAction {
  constructor(label, isPrimaryButtonStyle = true) {
    this.label = label;
    this.isPrimaryButtonStyle = isPrimaryButtonStyle;
  }
}
class MobileTableActionCallback {
  constructor(action, element) {
    this.action = action;
    this.element = element;
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_modules_inbox_replies_replies_module_ts.js.map