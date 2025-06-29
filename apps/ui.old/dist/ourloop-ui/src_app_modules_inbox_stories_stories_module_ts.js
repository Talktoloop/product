"use strict";
(self["webpackChunkourloop_ui"] = self["webpackChunkourloop_ui"] || []).push([["src_app_modules_inbox_stories_stories_module_ts"],{

/***/ 58862:
/*!************************************************************************************************!*\
  !*** ./src/app/modules/inbox/stories/items-per-page-select/items-per-page-select.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsPerPageSelectComponent": () => (/* binding */ ItemsPerPageSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/core/services/ui/ui.service */ 21428);
/* harmony import */ var _pagination_pagination_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pagination/pagination.service */ 59096);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_directives_click_outside_click_outside_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/directives/click-outside/click-outside.directive */ 15741);
/* harmony import */ var _shared_directives_stop_event_stop_event_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/directives/stop-event/stop-event.directive */ 18299);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/button/button.component */ 90042);
/* harmony import */ var _shared_icons_expand_more_icon_expand_more_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/icons/expand-more-icon/expand-more-icon.component */ 50061);
/* harmony import */ var _shared_components_selectors_select_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/selectors/select/select.component */ 34058);
/* harmony import */ var _shared_components_selectors_select_option_select_option_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/selectors/select-option/select-option.component */ 51194);












function ItemsPerPageSelectComponent_loop_select_7_loop_select_option_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "loop-select-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("clicked", function ItemsPerPageSelectComponent_loop_select_7_loop_select_option_1_Template_loop_select_option_clicked_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const value_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r4.handleOptionClick(value_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", value_r3, " ");
  }
}
function ItemsPerPageSelectComponent_loop_select_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "loop-select", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ItemsPerPageSelectComponent_loop_select_7_loop_select_option_1_Template, 2, 1, "loop-select-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("fullWidth", true)("showHeader", false)("showSuffix", false)("sourceEl", _r0)("sourceWidth", _r0.clientWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.itemsPerPageValues)("ngForTrackBy", ctx_r1.trackByFn);
  }
}
class ItemsPerPageSelectComponent {
  get itemsPerPage() {
    return this.paginationService.itemsPerPage;
  }
  get itemsPerPageValues() {
    return this.paginationService.itemsPerPageValues;
  }
  constructor(ui, paginationService) {
    this.ui = ui;
    this.paginationService = paginationService;
    this.dropDownOpen = false;
    this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.UntypedFormControl();
    this.itemsPerPageChanged$ = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
  }
  handleOutsideClick() {
    this.dropDownOpen = false;
  }
  handleOptionClick(value) {
    this.control.setValue(value);
    this.dropDownOpen = false;
    this.itemsPerPageChanged$.emit(this.control.value);
  }
  handleSelectorOpenClick() {
    this.dropDownOpen = !this.dropDownOpen;
  }
  trackByFn(_, sort) {
    return sort;
  }
  static #_ = this.ɵfac = function ItemsPerPageSelectComponent_Factory(t) {
    return new (t || ItemsPerPageSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_app_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_0__.UIService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_1__.PaginationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: ItemsPerPageSelectComponent,
    selectors: [["app-items-per-page-select"]],
    outputs: {
      itemsPerPageChanged$: "itemsPerPageChanged$"
    },
    decls: 8,
    vars: 5,
    consts: [["cy", "sort-picker", 1, "sort-picker-container", 3, "appClickOutside"], [1, "sort-picker"], ["sortPicker", ""], ["variant", "secondary", "mode", "v3", 3, "appStopEvent", "clicked"], [1, "flex-center", "font-1125", "font-bold", "text"], ["appDropdown", "", 3, "fullWidth", "showHeader", "showSuffix", "sourceEl", "sourceWidth", 4, "ngIf"], ["appDropdown", "", 3, "fullWidth", "showHeader", "showSuffix", "sourceEl", "sourceWidth"], [3, "clicked", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "clicked"]],
    template: function ItemsPerPageSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("appClickOutside", function ItemsPerPageSelectComponent_Template_div_appClickOutside_0_listener() {
          return ctx.handleOutsideClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1, 2)(3, "app-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("clicked", function ItemsPerPageSelectComponent_Template_app_button_clicked_3_listener() {
          return ctx.handleSelectorOpenClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "app-expand-more-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, ItemsPerPageSelectComponent_loop_select_7_Template, 2, 7, "loop-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("appStopEvent", "click");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.itemsPerPage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("expand-rotated", ctx.dropDownOpen ? 180 : 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.dropDownOpen);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_directives_click_outside_click_outside_directive__WEBPACK_IMPORTED_MODULE_2__.ClickOutsideDirective, _shared_directives_stop_event_stop_event_directive__WEBPACK_IMPORTED_MODULE_3__.StopEventDirective, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__.ButtonComponent, _shared_icons_expand_more_icon_expand_more_icon_component__WEBPACK_IMPORTED_MODULE_5__.ExpandMoreIconComponent, _shared_components_selectors_select_select_component__WEBPACK_IMPORTED_MODULE_6__.SelectComponent, _shared_components_selectors_select_option_select_option_component__WEBPACK_IMPORTED_MODULE_7__.SelectOptionComponent],
    styles: ["[_nghost-%COMP%] {\n  max-height: 24px;\n  min-width: 81px;\n}\n[_nghost-%COMP%]:hover   .text[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\n.sort-picker[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  width: 46px;\n}\n.sort-picker__prefix-text[_ngcontent-%COMP%] {\n  color: #1a1a1a;\n  font-size: 1.125rem;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-height: normal;\n  margin: 0.875rem 0.625rem 0.938rem 0;\n  text-align: left;\n}\n\nloop-select[_ngcontent-%COMP%] {\n  position: relative;\n  top: -275px;\n}\n\n[_nghost-%COMP%]     .select__header {\n  padding: 0 0 0.063rem;\n}\n[_nghost-%COMP%]     .select-option {\n  padding: 1.25rem 0.313rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW1zLXBlci1wYWdlLXNlbGVjdC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFIRjtBQU1JO0VBQ0UsMEJBQUE7QUFKTjs7QUFTQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFORjtBQVFFO0VBQ0UsY0NrRlE7RURqRlIsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FBTko7O0FBVUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFQRjs7QUFXRTtFQUNFLHFCQUFBO0FBUko7QUFXRTtFQUNFLHlCQUFBO0FBVEoiLCJmaWxlIjoiaXRlbXMtcGVyLXBhZ2Utc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcbkBpbXBvcnQgJ21peGlucyc7XG5AaW1wb3J0ICdsb29wLWRlc2lnbi1zeXN0ZW0vY29sb3JzJztcblxuOmhvc3Qge1xuICBtYXgtaGVpZ2h0OiAyNHB4O1xuICBtaW4td2lkdGg6IDgxcHg7IC8vVE9ETzogZmlndXJlIG91dCB3aHkgcG9wcGVyLmpzIG5vdCB3b3JraW5nIGNvcnJlY3RseVxuXG4gICY6aG92ZXIge1xuICAgIC50ZXh0IHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbiAgfVxufVxuXG4uc29ydC1waWNrZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNDZweDtcblxuICAmX19wcmVmaXgtdGV4dCB7XG4gICAgY29sb3I6ICRkYXJrLWdyZXk7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBtYXJnaW46IDAuODc1cmVtIDAuNjI1cmVtIDAuOTM4cmVtIDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxufVxuXG5sb29wLXNlbGVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjc1cHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCB7XG4gIC5zZWxlY3RfX2hlYWRlciB7XG4gICAgcGFkZGluZzogMCAwIDAuMDYzcmVtO1xuICB9XG5cbiAgLnNlbGVjdC1vcHRpb24ge1xuICAgIHBhZGRpbmc6IDEuMjVyZW0gMC4zMTNyZW07XG4gIH1cbn1cbiIsIiRzdGFuZGFyZEZvbnRGYW1pbHk6ICdOb3RvIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRjb250ZW50LXRvcC1wYWRkaW5nOiAzcmVtO1xuJHBvc3QtbGlzdC1iZzogI2RhZGFkYTtcbiR3aGl0ZTogI2ZmZmZmZjtcbiRwb3N0LXByZXZpZXctYmc6IHdoaXRlO1xuJGxpZ2h0LWdyYXktYmc6ICNmNGY0ZjQ7XG4kcG9zdC1wcmV2aWV3LXBhZGRpbmctbGVmdDogMi4zNDRyZW07XG4kcG9zdC1wcmV2aWV3LXBhZGRpbmctcmlnaHQ6IDEuMDYzcmVtO1xuJHBvc3QtcHJldmlldy1wYWRkaW5nOiAyLjVyZW0gJHBvc3QtcHJldmlldy1wYWRkaW5nLXJpZ2h0IDEuMjVyZW0gJHBvc3QtcHJldmlldy1wYWRkaW5nLWxlZnQ7XG4kcG9zdC1wcmV2aWV3LXBhZGRpbmctbW9iaWxlOiAxcmVtIDFyZW0gMC41cmVtIDFyZW07XG4kcG9zdC1wYWRkaW5nLWJvdHRvbTogMXJlbTtcbiRwb3N0LXByZXZpZXctZ3V0dGVyOiAycHg7XG4kcG9zdC1oaWdobGlnaHQtY29sb3I6ICM1NzBmODU7XG4kY29sb3ItcHVycGxlLTkwOiAjMzExMzVlO1xuJGNvbG9yLXB1cnBsZS02MDogIzk4OGFhZTtcbiRjb2xvci1wdXJwbGUtNTA6ICM5ODg5YWY7XG4kY29sb3ItcHVycGxlLTEwOiAjZjVmM2Y3O1xuJGNvbG9yLXB1cnBsZS1saWdodDogIzRiMzViYztcbiRjb2xvci1wdXJwbGUtdmVyeS1saWdodDogIzg2NmFiMDtcbiRjb2xvci1wdXJwbGUtc3RlcHBlcjogIzRhMmI3YTtcbiRjb2xvci1ncmVlbi0xMDA6ICMwNTI4MDQ7XG4kY29sb3ItZ3JlZW4tOTA6ICMwZDNkMGI7XG4kY29sb3ItZ3JlZW4tODA6ICMxZjZiMWU7XG4kY29sb3ItZ3JlZW4tNzA6ICMzNThhMzQ7XG4kY29sb3ItZ3JlZW4tNjA6ICM2ZDlhNmU7XG4kY29sb3ItZ3JlZW4tNTA6ICM4OWE4OGY7XG4kY29sb3ItZ3JlZW4tNDA6ICM5ZmM4YTY7XG4kY29sb3ItZ3JlZW4tMzA6ICNhYWQ2YjM7XG4kY29sb3ItZ3JlZW4tMjA6ICNjOWU5ZDE7XG4kY29sb3ItZ3JlZW4tMTA6ICNmM2Y3ZjM7XG4kY29sb3ItZ3JlZW4tc3RlcHBlcjogIzEwN0Q3OTtcbiRjb2xvci1ncmVlbi1tZWRpdW06ICNhZGRhYWY7XG4kY29sb3ItZ3JlZW4tbGlnaHQ6ICMzQUIwOTg7XG4kY29sb3ItZ3JlZW4tdmVyeS1saWdodDogI0VERkZGQztcbiRncmV5LTE6ICNkNmQwZGY7XG4kc3VwcG9ydC0wMTogI2RhMWUyODtcbiRlcnJvcjogI2VlMjMyZjtcbiR0ZXh0LWJsYWNrOiAjMTYxNjE2O1xuJHRleHQtc2Vjb25kYXJ5OiAjMzkzOTM5O1xuJHRleHQtZ3JheWVkOiAjNTI1MjUyO1xuJHRleHQtZ3JheWVkODA6ICM4ZjhiOGI7XG4kdGV4dC1ncmF5LWNhdDogIzZkNzI3ODtcbiR1aS1iYWNrZ3JvdW5kLWdyYXk6ICNmOGY4Zjk7XG4kYm9yZGVyOiAjZThlN2VhO1xuJGVudGl0eS1ib3JkZXItY29sb3I6ICMxYzBmMzAyMTtcbiRsb2FkaW5nLWJnOiByZ2IoMCAwIDAgLyAxOCUpO1xuJHN1cHBvcnQtMDQ6ICMwMDQzY2U7XG4kbG9vcC11c2VybmFtZTogIzE5ODAzODtcbiRsb29wLWFjdGl2ZS1jdXJyZW50LXVzZXI6ICMyNGExNDg7XG4kd2FybS1ncmF5LTEwLWNvbG9yOiAjZjdmM2YyO1xuJHdhcm0tZ3JheS0yMC1jb2xvcjogI2U1ZTBkZjtcbiRoZWFkaW5nLTEtY29sb3I6ICMxYzBmMzA7XG4kaGVhZGluZy0yLWNvbG9yOiAjMzIwNzRkO1xuJGhlYWRpbmctMy1jb2xvcjogIzJmMjczNTtcbiRtb2JpbGUtaWNvbi1jb2xvcjogIzFjMGYzMDtcbiRzdGF0ZS1kaXNhYmxlZC0wMjogI2M2YzZjNjtcbiRsaW5rLTAyOiAjNTYwMWIyO1xuJGhlYWRlci1wdXJwbGU6ICMzMTEzNWU7XG4kaGVhZGVyLWdyZWVuOiAjMTA3ZDc5O1xuJHB1cnBsZS1saWdodDogI2NiYzRkNztcbiRwdXJwbGUtYmFja2dyb3VuZC1saWdodDogI2RjZDVlNztcbiRsb29wLWludGVyYWN0aXZlLTAxOiAjMTA3ZDc5O1xuJGxvb3AtaW50ZXJhY3RpdmUtMDEtb3BhY2l0eTogcmdiYSgxNiwgMTI1LCAxMjEsIDAuMyk7XG4kZmlsdGVycy1ncmVlbjogIzA1Njc2Mztcbi8vIEJyZWFrcG9pbnRzXG5cbiRicmVha3BvaW50LXM6IDM3NXB4O1xuJGJyZWFrcG9pbnQtc206IDQyMHB4O1xuJGJyZWFrcG9pbnQtbWQ6IDc2OHB4O1xuJGJyZWFrcG9pbnQtbGc6IDEwODBweDtcbiRicmVha3BvaW50LXhsOiAxMjc1cHg7XG5cbiRicmVha3BvaW50LW1kLXYyOiA4MjBweDtcblxuJGhlYWRlci1oZWlnaHQ6IDQuMzc1cmVtO1xuJGhlYWRlci1oZWlnaHQtdjI6IDQuMzc1cmVtO1xuJHN0YXRlLXNlbGVjdGVkLXVpOiAjZTBlMGUwO1xuJGMtbGVmdC1wYWRkaW5nOiAxLjVyZW07XG4kbWVudS1hY3RpdmUtY29sb3I6ICMzQUIwOTg7XG4kbWVudS1ob3Zlci1jb2xvcjogIzNBQjA5ODtcbiR0YWItaW5hY3RpdmUtY29sb3I6ICM4OWFmOTM7XG4kbGluZS1jb2xvcjogI2QwZGZkMjtcbiRib3JkZXItZ3JheTogI2NjY2NjYztcbiR0ZXh0LWdyYXk6ICM4MDgwODA7XG4kYmFzZS1jb250YWluZXItd2lkdGg6IDgxLjEyNHJlbTtcbiRoZWFkZXItdW5kZXJsaW5lLWhlaWdodDogMC4zMTNyZW07XG5cbi8vIE1vZGVyYXRvciByZXZpZXcgc2VjdGlvbnNcbiRmb290ZXItaGVpZ2h0OiA0cmVtO1xuJHRvcGJhci1oZWlnaHQ6IDEwLjVyZW07XG4kc3RlcHBlci1oZWlnaHQ6IDYuN3JlbTtcblxuLy8gTmV3IFN0b3J5IGZsb3cgLyBzdG9yeSBkZXRhaWxzIHZhcmlhYmxlc1xuJGdyZXk6ICM2NTY1NjU7XG4kbGlnaHQtZ3JleS0yOiAjYjFiNGI2O1xuJGxpZ2h0LWdyZXktMzogI2I0YjRiNDtcbiRsaWdodC1ncmV5LTQ6ICNjZmQzZDg7XG4kbGlnaHQtZ3JleS01OiAjZDllMGU3O1xuJGxpZ2h0LWdyZXktNjogI2YxZjJmMjtcbiRsaWdodC1ncmV5LTc6ICNjNGM0YzQ7XG4kbGlnaHQtZ3JleS04OiAjZTllOWU5O1xuJGxpZ2h0LWdyZXktOTogI2U2ZWFlZDtcbiRsaWdoLWdyZXktc2VwYXJhdG9yOiAjYzBjMGMwO1xuJGRhcmstZ3JleTogIzFhMWExYTtcbiRkYXJrLWdyZXktNTA6IHJnYigyNiwgMjYsIDI2LCAwLjUpO1xuJGJvcmRlci1ncmV5OiAjYzdjZGQ0O1xuJGxpZ2h0LXB1cnBsZTogI2VhZWFlYTtcbiRpbnB1dC1kaXNhYmxlZC1iZzogI2Y0ZjZmODtcbiRlcnJvci0yOiAjZGUyMjJkO1xuJGRhbmdlcjogI2M5MzA0ZDtcbiRwcmV2aW91cy1waWxsLWNvbG9yOiAjNzE4ZDZmO1xuJHRvb2x0aXAtZ3JleTogI2FiYWJhYjtcbiRsaWdodC1ncmVlbjogI2NmZTVlNDY2O1xuXG4kZmlsdGVycy1tb2RhbC1oZWFkZXItemluZGV4OiAxMDAwMDtcbiRtb2RhbC16aW5kZXg6IDk5OTk7XG4kbG9jYXRpb24tb3ZlcmxheS16aW5kZXg6IDkwMDE7XG4kaGVhZGVyLWFzaWRlLXppbmRleDogODAwMjtcbiRoZWFkZXItYXNpZGUtYmFja2dyb3VuZC16aW5kZXg6IDgwMDE7XG4kaGVhZGVyLXppbmRleDogODAwMDtcbiRuYXZpZ2F0aW9uLXppbmRleDogODAwMDtcbiRwYWdlLWxvYWRpbmctemluZGV4OiA3MDAxO1xuJHRvb2x0aXAtemluZGV4OiA3MDAwO1xuJG5ldy1zdG9yeS1jb250ZW50LXN0YXRlLXppbmRleDogNTAwO1xuJGZpbHRlci1kcm9wZG93bi16aW5kZXg6IDEwMDtcbiRtb2RhbC10b3AtaW5kaWNhdG9yLXppbmRleDogNTE7XG4kbW9kYWwtdG9wLWluZGljYXRvci1iYWNrZ3JvdW5kLXppbmRleDogNTE7XG4kY2hhcnQtemluZGV4OiAxO1xuJGNoYXJ0LWNvbnRyb2wtemluZGV4OiAyO1xuXG4kc2xpZGUtdG9nZ2xlLWRpc2FibGVkLW9wdGlvbi1iYWNrZ3JvdW5kOiAjZGRkZGRkO1xuXG4kdG9hc3QtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiR0b2FzdC1pbmZvLXRpdGxlLWNvbG9yOiAjNDk0OTQ5O1xuJHRvYXN0LWluZm8tbWVzc2FnZS1jb2xvcjogIzQyMmMwMDtcbiR0b2FzdC1pbmZvLWJ1dHRvbi1jb2xvcjogIzZjNGU5OTtcblxuJHRvYXN0LXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogI2Q5ZWVlZDtcbiR0b2FzdC1zdWNjZXNzLXRpdGxlLWNvbG9yOiAjMDA0NTQyO1xuJHRvYXN0LXN1Y2Nlc3MtbWVzc2FnZS1jb2xvcjogIzAxMzIzMDtcbiR0b2FzdC1zdWNjZXNzLWJ1dHRvbi1jb2xvcjogIzAxNjk2NTtcblxuJHRvYXN0LXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogI2ZmZjFkNTtcbiR0b2FzdC13YXJuaW5nLXRpdGxlLWNvbG9yOiAjNmI0NzAwO1xuJHRvYXN0LXdhcm5pbmctbWVzc2FnZS1jb2xvcjogIzQyMmMwMDtcbiR0b2FzdC13YXJuaW5nLWJ1dHRvbi1jb2xvcjogI2NjOGYxNDtcblxuJHRvYXN0LWVycm9yLWJhY2tncm91bmQtY29sb3I6ICNmNWQ1ZGI7XG4kdG9hc3QtZXJyb3ItdGl0bGUtY29sb3I6ICM3MzAwMTU7XG4kdG9hc3QtZXJyb3ItbWVzc2FnZS1jb2xvcjogIzQ1MDYxMTtcbiR0b2FzdC1lcnJvci1zdWNjZXNzLWNvbG9yOiAjZDllZWVkO1xuJHRvYXN0LWVycm9yLWJ1dHRvbi1jb2xvcjogI2IyMWQzOTtcblxuJHRvYXN0LWNsb3NlLWJ1dHRvbi1jb2xvcjogIzczMDAxNTtcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9pbmJveC9zdG9yaWVzL2l0ZW1zLXBlci1wYWdlLXNlbGVjdC9pdGVtcy1wZXItcGFnZS1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFIRjtBQU1JO0VBQ0UsMEJBQUE7QUFKTjs7QUFTQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFORjtBQVFFO0VBQ0UsY0NrRlE7RURqRlIsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FBTko7O0FBVUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFQRjs7QUFXRTtFQUNFLHFCQUFBO0FBUko7QUFXRTtFQUNFLHlCQUFBO0FBVEo7QUFDQSxvME9BQW8wTyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICdtaXhpbnMnO1xuQGltcG9ydCAnbG9vcC1kZXNpZ24tc3lzdGVtL2NvbG9ycyc7XG5cbjpob3N0IHtcbiAgbWF4LWhlaWdodDogMjRweDtcbiAgbWluLXdpZHRoOiA4MXB4OyAvL1RPRE86IGZpZ3VyZSBvdXQgd2h5IHBvcHBlci5qcyBub3Qgd29ya2luZyBjb3JyZWN0bHlcblxuICAmOmhvdmVyIHtcbiAgICAudGV4dCB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG4gIH1cbn1cblxuLnNvcnQtcGlja2VyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDQ2cHg7XG5cbiAgJl9fcHJlZml4LXRleHQge1xuICAgIGNvbG9yOiAkZGFyay1ncmV5O1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgbWFyZ2luOiAwLjg3NXJlbSAwLjYyNXJlbSAwLjkzOHJlbSAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbn1cblxubG9vcC1zZWxlY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTI3NXB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAge1xuICAuc2VsZWN0X19oZWFkZXIge1xuICAgIHBhZGRpbmc6IDAgMCAwLjA2M3JlbTtcbiAgfVxuXG4gIC5zZWxlY3Qtb3B0aW9uIHtcbiAgICBwYWRkaW5nOiAxLjI1cmVtIDAuMzEzcmVtO1xuICB9XG59XG4iLCIkc3RhbmRhcmRGb250RmFtaWx5OiAnTm90byBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4kY29udGVudC10b3AtcGFkZGluZzogM3JlbTtcbiRwb3N0LWxpc3QtYmc6ICNkYWRhZGE7XG4kd2hpdGU6ICNmZmZmZmY7XG4kcG9zdC1wcmV2aWV3LWJnOiB3aGl0ZTtcbiRsaWdodC1ncmF5LWJnOiAjZjRmNGY0O1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLWxlZnQ6IDIuMzQ0cmVtO1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLXJpZ2h0OiAxLjA2M3JlbTtcbiRwb3N0LXByZXZpZXctcGFkZGluZzogMi41cmVtICRwb3N0LXByZXZpZXctcGFkZGluZy1yaWdodCAxLjI1cmVtICRwb3N0LXByZXZpZXctcGFkZGluZy1sZWZ0O1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLW1vYmlsZTogMXJlbSAxcmVtIDAuNXJlbSAxcmVtO1xuJHBvc3QtcGFkZGluZy1ib3R0b206IDFyZW07XG4kcG9zdC1wcmV2aWV3LWd1dHRlcjogMnB4O1xuJHBvc3QtaGlnaGxpZ2h0LWNvbG9yOiAjNTcwZjg1O1xuJGNvbG9yLXB1cnBsZS05MDogIzMxMTM1ZTtcbiRjb2xvci1wdXJwbGUtNjA6ICM5ODhhYWU7XG4kY29sb3ItcHVycGxlLTUwOiAjOTg4OWFmO1xuJGNvbG9yLXB1cnBsZS0xMDogI2Y1ZjNmNztcbiRjb2xvci1wdXJwbGUtbGlnaHQ6ICM0YjM1YmM7XG4kY29sb3ItcHVycGxlLXZlcnktbGlnaHQ6ICM4NjZhYjA7XG4kY29sb3ItcHVycGxlLXN0ZXBwZXI6ICM0YTJiN2E7XG4kY29sb3ItZ3JlZW4tMTAwOiAjMDUyODA0O1xuJGNvbG9yLWdyZWVuLTkwOiAjMGQzZDBiO1xuJGNvbG9yLWdyZWVuLTgwOiAjMWY2YjFlO1xuJGNvbG9yLWdyZWVuLTcwOiAjMzU4YTM0O1xuJGNvbG9yLWdyZWVuLTYwOiAjNmQ5YTZlO1xuJGNvbG9yLWdyZWVuLTUwOiAjODlhODhmO1xuJGNvbG9yLWdyZWVuLTQwOiAjOWZjOGE2O1xuJGNvbG9yLWdyZWVuLTMwOiAjYWFkNmIzO1xuJGNvbG9yLWdyZWVuLTIwOiAjYzllOWQxO1xuJGNvbG9yLWdyZWVuLTEwOiAjZjNmN2YzO1xuJGNvbG9yLWdyZWVuLXN0ZXBwZXI6ICMxMDdENzk7XG4kY29sb3ItZ3JlZW4tbWVkaXVtOiAjYWRkYWFmO1xuJGNvbG9yLWdyZWVuLWxpZ2h0OiAjM0FCMDk4O1xuJGNvbG9yLWdyZWVuLXZlcnktbGlnaHQ6ICNFREZGRkM7XG4kZ3JleS0xOiAjZDZkMGRmO1xuJHN1cHBvcnQtMDE6ICNkYTFlMjg7XG4kZXJyb3I6ICNlZTIzMmY7XG4kdGV4dC1ibGFjazogIzE2MTYxNjtcbiR0ZXh0LXNlY29uZGFyeTogIzM5MzkzOTtcbiR0ZXh0LWdyYXllZDogIzUyNTI1MjtcbiR0ZXh0LWdyYXllZDgwOiAjOGY4YjhiO1xuJHRleHQtZ3JheS1jYXQ6ICM2ZDcyNzg7XG4kdWktYmFja2dyb3VuZC1ncmF5OiAjZjhmOGY5O1xuJGJvcmRlcjogI2U4ZTdlYTtcbiRlbnRpdHktYm9yZGVyLWNvbG9yOiAjMWMwZjMwMjE7XG4kbG9hZGluZy1iZzogcmdiKDAgMCAwIC8gMTglKTtcbiRzdXBwb3J0LTA0OiAjMDA0M2NlO1xuJGxvb3AtdXNlcm5hbWU6ICMxOTgwMzg7XG4kbG9vcC1hY3RpdmUtY3VycmVudC11c2VyOiAjMjRhMTQ4O1xuJHdhcm0tZ3JheS0xMC1jb2xvcjogI2Y3ZjNmMjtcbiR3YXJtLWdyYXktMjAtY29sb3I6ICNlNWUwZGY7XG4kaGVhZGluZy0xLWNvbG9yOiAjMWMwZjMwO1xuJGhlYWRpbmctMi1jb2xvcjogIzMyMDc0ZDtcbiRoZWFkaW5nLTMtY29sb3I6ICMyZjI3MzU7XG4kbW9iaWxlLWljb24tY29sb3I6ICMxYzBmMzA7XG4kc3RhdGUtZGlzYWJsZWQtMDI6ICNjNmM2YzY7XG4kbGluay0wMjogIzU2MDFiMjtcbiRoZWFkZXItcHVycGxlOiAjMzExMzVlO1xuJGhlYWRlci1ncmVlbjogIzEwN2Q3OTtcbiRwdXJwbGUtbGlnaHQ6ICNjYmM0ZDc7XG4kcHVycGxlLWJhY2tncm91bmQtbGlnaHQ6ICNkY2Q1ZTc7XG4kbG9vcC1pbnRlcmFjdGl2ZS0wMTogIzEwN2Q3OTtcbiRsb29wLWludGVyYWN0aXZlLTAxLW9wYWNpdHk6IHJnYmEoMTYsIDEyNSwgMTIxLCAwLjMpO1xuJGZpbHRlcnMtZ3JlZW46ICMwNTY3NjM7XG4vLyBCcmVha3BvaW50c1xuXG4kYnJlYWtwb2ludC1zOiAzNzVweDtcbiRicmVha3BvaW50LXNtOiA0MjBweDtcbiRicmVha3BvaW50LW1kOiA3NjhweDtcbiRicmVha3BvaW50LWxnOiAxMDgwcHg7XG4kYnJlYWtwb2ludC14bDogMTI3NXB4O1xuXG4kYnJlYWtwb2ludC1tZC12MjogODIwcHg7XG5cbiRoZWFkZXItaGVpZ2h0OiA0LjM3NXJlbTtcbiRoZWFkZXItaGVpZ2h0LXYyOiA0LjM3NXJlbTtcbiRzdGF0ZS1zZWxlY3RlZC11aTogI2UwZTBlMDtcbiRjLWxlZnQtcGFkZGluZzogMS41cmVtO1xuJG1lbnUtYWN0aXZlLWNvbG9yOiAjM0FCMDk4O1xuJG1lbnUtaG92ZXItY29sb3I6ICMzQUIwOTg7XG4kdGFiLWluYWN0aXZlLWNvbG9yOiAjODlhZjkzO1xuJGxpbmUtY29sb3I6ICNkMGRmZDI7XG4kYm9yZGVyLWdyYXk6ICNjY2NjY2M7XG4kdGV4dC1ncmF5OiAjODA4MDgwO1xuJGJhc2UtY29udGFpbmVyLXdpZHRoOiA4MS4xMjRyZW07XG4kaGVhZGVyLXVuZGVybGluZS1oZWlnaHQ6IDAuMzEzcmVtO1xuXG4vLyBNb2RlcmF0b3IgcmV2aWV3IHNlY3Rpb25zXG4kZm9vdGVyLWhlaWdodDogNHJlbTtcbiR0b3BiYXItaGVpZ2h0OiAxMC41cmVtO1xuJHN0ZXBwZXItaGVpZ2h0OiA2LjdyZW07XG5cbi8vIE5ldyBTdG9yeSBmbG93IC8gc3RvcnkgZGV0YWlscyB2YXJpYWJsZXNcbiRncmV5OiAjNjU2NTY1O1xuJGxpZ2h0LWdyZXktMjogI2IxYjRiNjtcbiRsaWdodC1ncmV5LTM6ICNiNGI0YjQ7XG4kbGlnaHQtZ3JleS00OiAjY2ZkM2Q4O1xuJGxpZ2h0LWdyZXktNTogI2Q5ZTBlNztcbiRsaWdodC1ncmV5LTY6ICNmMWYyZjI7XG4kbGlnaHQtZ3JleS03OiAjYzRjNGM0O1xuJGxpZ2h0LWdyZXktODogI2U5ZTllOTtcbiRsaWdodC1ncmV5LTk6ICNlNmVhZWQ7XG4kbGlnaC1ncmV5LXNlcGFyYXRvcjogI2MwYzBjMDtcbiRkYXJrLWdyZXk6ICMxYTFhMWE7XG4kZGFyay1ncmV5LTUwOiByZ2IoMjYsIDI2LCAyNiwgMC41KTtcbiRib3JkZXItZ3JleTogI2M3Y2RkNDtcbiRsaWdodC1wdXJwbGU6ICNlYWVhZWE7XG4kaW5wdXQtZGlzYWJsZWQtYmc6ICNmNGY2Zjg7XG4kZXJyb3ItMjogI2RlMjIyZDtcbiRkYW5nZXI6ICNjOTMwNGQ7XG4kcHJldmlvdXMtcGlsbC1jb2xvcjogIzcxOGQ2ZjtcbiR0b29sdGlwLWdyZXk6ICNhYmFiYWI7XG4kbGlnaHQtZ3JlZW46ICNjZmU1ZTQ2NjtcblxuJGZpbHRlcnMtbW9kYWwtaGVhZGVyLXppbmRleDogMTAwMDA7XG4kbW9kYWwtemluZGV4OiA5OTk5O1xuJGxvY2F0aW9uLW92ZXJsYXktemluZGV4OiA5MDAxO1xuJGhlYWRlci1hc2lkZS16aW5kZXg6IDgwMDI7XG4kaGVhZGVyLWFzaWRlLWJhY2tncm91bmQtemluZGV4OiA4MDAxO1xuJGhlYWRlci16aW5kZXg6IDgwMDA7XG4kbmF2aWdhdGlvbi16aW5kZXg6IDgwMDA7XG4kcGFnZS1sb2FkaW5nLXppbmRleDogNzAwMTtcbiR0b29sdGlwLXppbmRleDogNzAwMDtcbiRuZXctc3RvcnktY29udGVudC1zdGF0ZS16aW5kZXg6IDUwMDtcbiRmaWx0ZXItZHJvcGRvd24temluZGV4OiAxMDA7XG4kbW9kYWwtdG9wLWluZGljYXRvci16aW5kZXg6IDUxO1xuJG1vZGFsLXRvcC1pbmRpY2F0b3ItYmFja2dyb3VuZC16aW5kZXg6IDUxO1xuJGNoYXJ0LXppbmRleDogMTtcbiRjaGFydC1jb250cm9sLXppbmRleDogMjtcblxuJHNsaWRlLXRvZ2dsZS1kaXNhYmxlZC1vcHRpb24tYmFja2dyb3VuZDogI2RkZGRkZDtcblxuJHRvYXN0LWluZm8tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4kdG9hc3QtaW5mby10aXRsZS1jb2xvcjogIzQ5NDk0OTtcbiR0b2FzdC1pbmZvLW1lc3NhZ2UtY29sb3I6ICM0MjJjMDA7XG4kdG9hc3QtaW5mby1idXR0b24tY29sb3I6ICM2YzRlOTk7XG5cbiR0b2FzdC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6ICNkOWVlZWQ7XG4kdG9hc3Qtc3VjY2Vzcy10aXRsZS1jb2xvcjogIzAwNDU0MjtcbiR0b2FzdC1zdWNjZXNzLW1lc3NhZ2UtY29sb3I6ICMwMTMyMzA7XG4kdG9hc3Qtc3VjY2Vzcy1idXR0b24tY29sb3I6ICMwMTY5NjU7XG5cbiR0b2FzdC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6ICNmZmYxZDU7XG4kdG9hc3Qtd2FybmluZy10aXRsZS1jb2xvcjogIzZiNDcwMDtcbiR0b2FzdC13YXJuaW5nLW1lc3NhZ2UtY29sb3I6ICM0MjJjMDA7XG4kdG9hc3Qtd2FybmluZy1idXR0b24tY29sb3I6ICNjYzhmMTQ7XG5cbiR0b2FzdC1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiAjZjVkNWRiO1xuJHRvYXN0LWVycm9yLXRpdGxlLWNvbG9yOiAjNzMwMDE1O1xuJHRvYXN0LWVycm9yLW1lc3NhZ2UtY29sb3I6ICM0NTA2MTE7XG4kdG9hc3QtZXJyb3Itc3VjY2Vzcy1jb2xvcjogI2Q5ZWVlZDtcbiR0b2FzdC1lcnJvci1idXR0b24tY29sb3I6ICNiMjFkMzk7XG5cbiR0b2FzdC1jbG9zZS1idXR0b24tY29sb3I6ICM3MzAwMTU7XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 89076:
/*!**************************************************************************!*\
  !*** ./src/app/modules/inbox/stories/pagination/pagination.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationComponent": () => (/* binding */ PaginationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/core/services/api/model/channel.enum */ 92128);
/* harmony import */ var _pagination_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination.service */ 59096);
/* harmony import */ var _stories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stories.service */ 3539);
/* harmony import */ var _selection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selection.service */ 98432);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/checkbox/checkbox.component */ 85994);
/* harmony import */ var _items_per_page_select_items_per_page_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../items-per-page-select/items-per-page-select.component */ 58862);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _shared_pipes_channel_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/pipes/channel.pipe */ 21466);











function PaginationComponent_div_0_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "channel");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, ctx_r3.channelType).toLowerCase(), ")");
  }
}
function PaginationComponent_div_0_ng_container_7_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 12);
  }
}
const _c0 = function (a0) {
  return {
    count: a0
  };
};
function PaginationComponent_div_0_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PaginationComponent_div_0_ng_container_7_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r7.onRejectStories());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PaginationComponent_div_0_ng_container_7_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r9.onAssignSelectedStories());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, PaginationComponent_div_0_ng_container_7_div_9_Template, 1, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](4, 3, "pagination.reject", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](9, _c0, ctx_r4.selectedItemsLength)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](8, 6, "pagination.assignModerators", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](11, _c0, ctx_r4.selectedItemsLength)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r4.mobile);
  }
}
const _c1 = function (a0, a1, a2) {
  return {
    firstVisibleItemNumber: a0,
    lastVisibleItemNumber: a1,
    totalItems: a2
  };
};
function PaginationComponent_div_0_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PaginationComponent_div_0_ng_container_8_Template_div_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r10.onPreviousPageClicked());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PaginationComponent_div_0_ng_container_8_Template_div_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r12.onNextPageClicked());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, "pagination.info", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction3"](4, _c1, ctx_r5.firstVisibleItemNumber, ctx_r5.lastVisibleItemNumber, ctx_r5.totalItems)), " ");
  }
}
function PaginationComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2)(1, "app-checkbox", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("changed", function PaginationComponent_div_0_Template_app_checkbox_changed_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r13.onSelectAllChanged());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, PaginationComponent_div_0_span_5_Template, 3, 3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, PaginationComponent_div_0_ng_container_7_Template, 10, 13, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, PaginationComponent_div_0_ng_container_8_Template, 7, 8, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("mobile", ctx_r0.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r0.allSelected)("v2", true)("alwaysRenderCheckmark", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 9, ctx_r0.allSelected ? "pagination.deselectAll" : "pagination.selectAll"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.channelType);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.selectedItemsLength > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.mobile);
  }
}
function PaginationComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 16)(1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "app-items-per-page-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("itemsPerPageChanged$", function PaginationComponent_ng_template_1_Template_app_items_per_page_select_itemsPerPageChanged__4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r15.onItemsPerPageChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 20)(10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PaginationComponent_ng_template_1_Template_div_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r17.onPreviousPageClicked());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PaginationComponent_ng_template_1_Template_div_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r18.onNextPageClicked());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 2, "pagination.itemsPerPage"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](7, 4, "pagination.info", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction3"](7, _c1, ctx_r2.firstVisibleItemNumber, ctx_r2.lastVisibleItemNumber, ctx_r2.totalItems)), " ");
  }
}
class PaginationComponent {
  constructor(paginationService, storiesService, selectionService) {
    this.paginationService = paginationService;
    this.storiesService = storiesService;
    this.selectionService = selectionService;
    this.header = true;
    this.selectAllChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.rejectSelectedStories = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.assignSelectedStories = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
  }
  get totalItems() {
    return this.paginationService.totalItems;
  }
  get firstVisibleItemNumber() {
    const firstItem = 1;
    return firstItem + this.paginationService.itemsPerPage * (this.paginationService.currentPage - 1);
  }
  get lastVisibleItemNumber() {
    const maxLastVisibleItemNumber = this.paginationService.currentPage * this.paginationService.itemsPerPage;
    if (maxLastVisibleItemNumber <= this.paginationService.totalItems) {
      return maxLastVisibleItemNumber;
    }
    return this.paginationService.totalItems;
  }
  ngOnInit() {
    if (!this.header) {
      return;
    }
    this.selectionService.selectedItems$.subscribe(selectedItems => {
      this.selectedItemsLength = selectedItems.length;
      const channelTypes = [...new Set(selectedItems.map(item => item.channel))];
      if (channelTypes.length === 1 && channelTypes[0] === _app_core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_CONSTANTS.IVRR) {
        this.channelType = channelTypes[0];
      } else if (channelTypes.length > 0 && channelTypes.every(channelType => _app_core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_0__.TEXT_CHANNELS.includes(channelType))) {
        this.channelType = _app_core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_CONSTANTS.TEXT;
      } else {
        this.channelType = null;
      }
      this.selectionService.selectedChannel = this.channelType;
    });
  }
  onPreviousPageClicked() {
    if (this.paginationService.goToPreviousPage()) {
      this.storiesService.loadPage(this.paginationService.currentPage, this.paginationService.itemsPerPage);
    }
  }
  onNextPageClicked() {
    if (this.paginationService.goToNextPage()) {
      this.storiesService.loadPage(this.paginationService.currentPage, this.paginationService.itemsPerPage);
    }
  }
  onItemsPerPageChanged(value) {
    this.paginationService.setPreviousState();
    this.paginationService.itemsPerPage = value;
    this.storiesService.loadPage(this.paginationService.currentPage, this.paginationService.itemsPerPage);
  }
  onSelectAllChanged() {
    this.allSelected = !this.allSelected;
    this.selectAllChanged.emit(this.allSelected);
  }
  onRejectStories() {
    this.rejectSelectedStories.emit();
  }
  onAssignSelectedStories() {
    this.assignSelectedStories.emit();
  }
  static #_ = this.ɵfac = function PaginationComponent_Factory(t) {
    return new (t || PaginationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_pagination_service__WEBPACK_IMPORTED_MODULE_1__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_stories_service__WEBPACK_IMPORTED_MODULE_2__.StoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_selection_service__WEBPACK_IMPORTED_MODULE_3__.SelectionService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: PaginationComponent,
    selectors: [["app-pagination"]],
    inputs: {
      header: "header",
      mobile: "mobile"
    },
    outputs: {
      selectAllChanged: "selectAllChanged",
      rejectSelectedStories: "rejectSelectedStories",
      assignSelectedStories: "assignSelectedStories"
    },
    decls: 3,
    vars: 2,
    consts: [["class", "header", 3, "mobile", 4, "ngIf", "ngIfElse"], ["footerTemplate", ""], [1, "header"], [3, "checked", "v2", "alwaysRenderCheckmark", "changed"], [1, "text"], [4, "ngIf"], [1, "pagination-info"], [1, "reject-button", 3, "click"], ["src", "assets/icons/trashcan.svg"], [1, "assign-moderator-button", 3, "click"], ["src", "assets/icons/personal-info_icon_mobile.svg", "height", "20", "width", "20"], ["class", "vertical-divider", 4, "ngIf"], [1, "vertical-divider"], [1, "arrow", 3, "click"], ["src", "assets/icons/arrow-left.svg"], ["src", "assets/icons/arrow-right.svg"], [1, "divided"], [1, "items-per-page"], [3, "itemsPerPageChanged$"], [1, "divider"], [1, "arrows"]],
    template: function PaginationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, PaginationComponent_div_0_Template, 9, 11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, PaginationComponent_ng_template_1_Template, 14, 11, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.header)("ngIfElse", _r1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__.CheckboxComponent, _items_per_page_select_items_per_page_select_component__WEBPACK_IMPORTED_MODULE_5__.ItemsPerPageSelectComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe, _shared_pipes_channel_pipe__WEBPACK_IMPORTED_MODULE_6__.ChannelPipe],
    styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  color: #656565;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 16px;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\nhtml:not([dir=rtl])[_nghost-%COMP%]   .header[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .header[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\nhtml[dir=rtl][_nghost-%COMP%]   .header[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .header[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.header.mobile[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  height: 54px;\n  padding-left: 16px;\n  border-bottom: 2px solid #dbdbdb;\n  width: 100%;\n}\nhtml:not([dir=rtl])[_nghost-%COMP%]   .header.mobile[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .header.mobile[_ngcontent-%COMP%] {\n  margin-left: 0px;\n}\nhtml[dir=rtl][_nghost-%COMP%]   .header.mobile[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .header.mobile[_ngcontent-%COMP%] {\n  margin-right: 0px;\n}\n.header[_ngcontent-%COMP%]   .pagination-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.header[_ngcontent-%COMP%]   .pagination-info[_ngcontent-%COMP%]   .reject-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  border: none;\n  background: transparent;\n  color: #b21d39;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 24px;\n}\n.header[_ngcontent-%COMP%]   .pagination-info[_ngcontent-%COMP%]   .reject-button[_ngcontent-%COMP%]:hover, .header[_ngcontent-%COMP%]   .pagination-info[_ngcontent-%COMP%]   .reject-button[_ngcontent-%COMP%]:focus {\n  text-decoration: underline;\n}\n.header[_ngcontent-%COMP%]   .pagination-info[_ngcontent-%COMP%]   .assign-moderator-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  border: none;\n  background: transparent;\n  color: #26695c;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 24px;\n}\n.header[_ngcontent-%COMP%]   .pagination-info[_ngcontent-%COMP%]   .assign-moderator-button[_ngcontent-%COMP%]:hover, .header[_ngcontent-%COMP%]   .pagination-info[_ngcontent-%COMP%]   .assign-moderator-button[_ngcontent-%COMP%]:focus {\n  text-decoration: underline;\n}\n.header[_ngcontent-%COMP%]   .pagination-info[_ngcontent-%COMP%]   .vertical-divider[_ngcontent-%COMP%] {\n  border-left: 1px solid #dbdbdb;\n  height: 24px;\n  margin: 0 8px;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.arrow[_ngcontent-%COMP%]:hover {\n  border-radius: 16px;\n  background: #d9eeed;\n}\n.arrow[_ngcontent-%COMP%]:focus {\n  border-radius: 16px;\n  background: #d9eeed;\n  box-shadow: 0px 0px 8px 0px #2072ec;\n}\n.arrow[_ngcontent-%COMP%]:active {\n  border-radius: 16px;\n  background: #a1d4d2;\n}\n.arrow[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 8px 9.5px;\n  margin: 4px;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n\n.divided[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  width: 100%;\n}\n.divided[_ngcontent-%COMP%]   .items-per-page[_ngcontent-%COMP%] {\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.divided[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  border-bottom: 1px solid #dbdbdb;\n  margin: 5px;\n}\n\n.text[_ngcontent-%COMP%]:hover, .text[_ngcontent-%COMP%]:focus {\n  text-decoration: underline;\n}\n\n.arrows[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2luYXRpb24uY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9zdHlsZXMvbG9vcC1kZXNpZ24tc3lzdGVtLXYyL19jb2xvcnMuc2NzcyIsIi4uLy4uLy4uLy4uL3N0eWxlcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxXQUFBO0VBQ0EsY0N1Q1k7RUR0Q1osZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFGRjs7QUFLQTtFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBSEY7QUU4QkU7RUEwQ0ksaUJGeEVpQjtBQUd2QjtBRWlDRTtFQXdDSSxrQkY1RWlCO0FBTXZCO0FBREU7RUFFRSx5QkNvQlU7RURuQlYsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0FBRUo7QUVpQkU7RUEwQ0ksZ0JGbEVtQjtBQVV6QjtBRW9CRTtFQXdDSSxpQkZ0RW1CO0FBYXpCO0FBTEU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFPSjtBQUxJO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQ29CZ0I7RURuQmhCLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBT047QUFMTTtFQUVFLDBCQUFBO0FBTVI7QUFGSTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0N0Q1c7RUR1Q1gsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFJTjtBQUhJO0VBRUksMEJBQUE7QUFJUjtBQUFJO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUVOOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFBRjtBQUVFO0VBQ0UsbUJBQUE7RUFDQSxtQkN0RGM7QURzRGxCO0FBR0U7RUFDRSxtQkFBQTtFQUNBLG1CQzNEYztFRDREZCxtQ0FBQTtBQURKO0FBSUU7RUFDRSxtQkFBQTtFQUNBLG1CQ2hFYztBRDhEbEI7QUFLRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQUhKOztBQU9BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUpGO0FBTUU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFKSjtBQU9FO0VBQ0UsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtBQUxKOztBQVVFO0VBRUUsMEJBQUE7QUFSSjs7QUFZQTtFQUNFLGFBQUE7QUFURiIsImZpbGUiOiJwYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnbG9vcC1kZXNpZ24tc3lzdGVtLXYyL2NvbG9ycyc7XG5AaW1wb3J0ICdtaXhpbnMnO1xuXG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogJG5ldXRyYWwtNTAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuXG4uaGVhZGVyIHtcbiAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoMTZweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAmLm1vYmlsZSB7XG4gICAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoMHB4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmV1dHJhbC0wMDA7XG4gICAgaGVpZ2h0OiA1NHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJG5ldXRyYWwtMTAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnBhZ2luYXRpb24taW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLnJlamVjdC1idXR0b24ge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDRweDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6ICRkZXN0cnVjdGl2ZS1yZWQtNTAwO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuXG4gICAgICAmOmhvdmVyLFxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5hc3NpZ24tbW9kZXJhdG9yLWJ1dHRvbiB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogNHB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogJGxvb3AtZ3JlZW4tNTAwO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICY6aG92ZXIsXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnZlcnRpY2FsLWRpdmlkZXIge1xuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAkbmV1dHJhbC0xMDA7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICBtYXJnaW46IDAgOHB4O1xuICAgIH1cbiAgfVxufVxuXG4uYXJyb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAmOmhvdmVyIHtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIGJhY2tncm91bmQ6ICRhY3Rpb24tdGVhbC0xMDA7XG4gIH1cblxuICAmOmZvY3VzIHtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIGJhY2tncm91bmQ6ICRhY3Rpb24tdGVhbC0xMDA7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggMHB4ICMyMDcyZWM7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBiYWNrZ3JvdW5kOiAkYWN0aW9uLXRlYWwtMjAwO1xuICB9XG5cbiAgaW1nIHtcbiAgICBwYWRkaW5nOiA4cHggOS41cHg7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLmRpdmlkZWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMjRweDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLml0ZW1zLXBlci1wYWdlIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDRweDtcbiAgfVxuXG4gIC5kaXZpZGVyIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRuZXV0cmFsLTEwMDtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxufVxuXG4udGV4dCB7XG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG59XG5cbi5hcnJvd3Mge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuIiwiLy8vLyBCcmFuZCBjb2xvcnNcbi8vIFByaW1hcnlcbiRsb29wLXB1cnBsZS0xMDA6ICNlYWU2ZjA7XG4kbG9vcC1wdXJwbGUtMjAwOiAjZDZkMGRmO1xuJGxvb3AtcHVycGxlLTMwMDogI2JhYWJkMDtcbiRsb29wLXB1cnBsZS00MDA6ICM4NjZhYjA7XG4kbG9vcC1wdXJwbGUtNTAwOiAjNmM0ZTk5O1xuJGxvb3AtcHVycGxlLTYwMDogIzRhMmI3YTtcbiRsb29wLXB1cnBsZS03MDA6ICMzMTEzNWU7XG4kbG9vcC1wdXJwbGUtODAwOiAjMjYxMDQ3O1xuXG5cbi8vIEdyZWVuc1xuJGxvb3AtZ3JlZW4tMTAwOiAjZTZmMGU5O1xuJGxvb3AtZ3JlZW4tMjAwOiAjYzBkOWNlO1xuJGxvb3AtZ3JlZW4tMzAwOiAjOTNiOWIwO1xuJGxvb3AtZ3JlZW4tNDAwOiAjNTM4YzgwO1xuJGxvb3AtZ3JlZW4tNTAwOiAjMjY2OTVjO1xuJGxvb3AtZ3JlZW4tNjAwOiAjMDA0NzNkO1xuJGxvb3AtZ3JlZW4tNzAwOiAjMDAzMjJiO1xuJGxvb3AtZ3JlZW4tODAwOiAjMDAyMTFjO1xuXG4vLyBFeGFtcGxlOlxuLy8gbWFwLmdldCgkbG9vcC1wdXJwbGVzLCAnNjAwJyk7XG5cbi8vIEFjdGlvblxuJGFjdGlvbi10ZWFsLTEwMDogI2Q5ZWVlZDtcbiRhY3Rpb24tdGVhbC0yMDA6ICNhMWQ0ZDI7XG4kYWN0aW9uLXRlYWwtMzAwOiAjNjliYmI4O1xuJGFjdGlvbi10ZWFsLTQwMDogIzAwODU3ZDtcbiRhY3Rpb24tdGVhbC01MDA6ICMwMTY5NjU7XG4kYWN0aW9uLXRlYWwtNjAwOiAjMDA1NzU0O1xuJGFjdGlvbi10ZWFsLTcwMDogIzAwNDU0MjtcbiRhY3Rpb24tdGVhbC04MDA6ICMwMTMyMzA7XG5cbi8vIEV4YW1wbGU6XG4vLyBtYXAuZ2V0KCRhY3Rpb24tdGVhbHMsICc2MDAnKTtcblxuLy8gTmV1dHJhbFxuJG5ldXRyYWwtMDAwOiAjZmZmZmZmO1xuJG5ldXRyYWwtMDUwOiAjZjFmMmYyO1xuJG5ldXRyYWwtMTAwOiAjZGJkYmRiO1xuJG5ldXRyYWwtMzAwOiAjYjZiNmI2O1xuJG5ldXRyYWwtNDAwOiAjOTI5MjkyO1xuJG5ldXRyYWwtNTAwOiAjNjU2NTY1O1xuJG5ldXRyYWwtNzAwOiAjNDk0OTQ5O1xuJG5ldXRyYWwtODAwOiAjMWExYTFhO1xuXG4vLyBFeGFtcGxlOlxuLy8gbWFwLmdldCgkbmV1dHJhbHMsICc2MDAnKTtcblxuLy8vLyBTZW1hbnRpYyBDb2xvcnNcbi8vIERhbmdlclxuJGRlc3RydWN0aXZlLXJlZC0xMDA6ICNmNWQ1ZGI7XG4kZGVzdHJ1Y3RpdmUtcmVkLTIwMDogI2VkYTFhZjtcbiRkZXN0cnVjdGl2ZS1yZWQtMzAwOiAjZTM2ZDgzO1xuJGRlc3RydWN0aXZlLXJlZC00MDA6ICNjMjMwNGI7XG4kZGVzdHJ1Y3RpdmUtcmVkLTUwMDogI2IyMWQzOTtcbiRkZXN0cnVjdGl2ZS1yZWQtNjAwOiAjOGMxMTI4O1xuJGRlc3RydWN0aXZlLXJlZC03MDA6ICM3MzAwMTU7XG4kZGVzdHJ1Y3RpdmUtcmVkLTgwMDogIzQ1MDYxMTtcblxuLy8gQWxlcnRcbiRhbGVydC1nb2xkLTEwMDogI2ZmZjFkNTtcbiRhbGVydC1nb2xkLTIwMDogI2Y3ZGE5ZTtcbiRhbGVydC1nb2xkLTMwMDogI2Y4YzQ1YjtcbiRhbGVydC1nb2xkLTQwMDogI2U4YWIzMTtcbiRhbGVydC1nb2xkLTUwMDogI2NjOGYxNDtcbiRhbGVydC1nb2xkLTYwMDogI2NjOGYxNDtcbiRhbGVydC1nb2xkLTcwMDogIzZiNDcwMDtcbiRhbGVydC1nb2xkLTgwMDogIzQyMmMwMDtcblxuLy8gRW1waGFzaXNcbiRlbXBoYXNpcy1ibHVlLTEwMDogI2Q5ZThmZjtcbiRlbXBoYXNpcy1ibHVlLTIwMDogI2E4Y2JmZjtcbiRlbXBoYXNpcy1ibHVlLTMwMDogIzgwYjJmZjtcbiRlbXBoYXNpcy1ibHVlLTQwMDogIzUzOTdmYztcbiRlbXBoYXNpcy1ibHVlLTUwMDogIzIwNzJlYztcbiRlbXBoYXNpcy1ibHVlLTYwMDogIzA0NTZkMTtcbiRlbXBoYXNpcy1ibHVlLTcwMDogIzAwM2M5NjtcbiRlbXBoYXNpcy1ibHVlLTgwMDogIzAwMWQ0NztcblxuJGxvb3AtcHVycGxlczogKFxuICAnMTAwJzogJGxvb3AtcHVycGxlLTEwMCxcbiAgJzIwMCc6ICRsb29wLXB1cnBsZS0yMDAsXG4gICczMDAnOiAkbG9vcC1wdXJwbGUtMzAwLFxuICAnNDAwJzogJGxvb3AtcHVycGxlLTQwMCxcbiAgJzUwMCc6ICRsb29wLXB1cnBsZS01MDAsXG4gICc2MDAnOiAkbG9vcC1wdXJwbGUtNjAwLFxuICAnNzAwJzogJGxvb3AtcHVycGxlLTcwMCxcbiAgJzgwMCc6ICRsb29wLXB1cnBsZS04MDAsXG4pO1xuXG4kbG9vcC1ncmVlbnM6IChcbiAgJzEwMCc6ICRsb29wLWdyZWVuLTEwMCxcbiAgJzIwMCc6ICRsb29wLWdyZWVuLTIwMCxcbiAgJzMwMCc6ICRsb29wLWdyZWVuLTMwMCxcbiAgJzQwMCc6ICRsb29wLWdyZWVuLTQwMCxcbiAgJzUwMCc6ICRsb29wLWdyZWVuLTUwMCxcbiAgJzYwMCc6ICRsb29wLWdyZWVuLTYwMCxcbiAgJzcwMCc6ICRsb29wLWdyZWVuLTcwMCxcbiAgJzgwMCc6ICRsb29wLWdyZWVuLTgwMCxcbik7XG5cbiRhY3Rpb24tdGVhbHM6IChcbiAgJzEwMCc6ICRhY3Rpb24tdGVhbC0xMDAsXG4gICcyMDAnOiAkYWN0aW9uLXRlYWwtMjAwLFxuICAnMzAwJzogJGFjdGlvbi10ZWFsLTMwMCxcbiAgJzQwMCc6ICRhY3Rpb24tdGVhbC00MDAsXG4gICc1MDAnOiAkYWN0aW9uLXRlYWwtNTAwLFxuICAnNjAwJzogJGFjdGlvbi10ZWFsLTYwMCxcbiAgJzcwMCc6ICRhY3Rpb24tdGVhbC03MDAsXG4gICc4MDAnOiAkYWN0aW9uLXRlYWwtODAwLFxuKTtcblxuJG5ldXRyYWxzOiAoXG4gICcwMDAnOiAkbmV1dHJhbC0wMDAsXG4gICcwNTAnOiAkbmV1dHJhbC0wNTAsXG4gICcxMDAnOiAkbmV1dHJhbC0xMDAsXG4gICczMDAnOiAkbmV1dHJhbC0zMDAsXG4gICc0MDAnOiAkbmV1dHJhbC00MDAsXG4gICc1MDAnOiAkbmV1dHJhbC01MDAsXG4gICc3MDAnOiAkbmV1dHJhbC03MDAsXG4gICc4MDAnOiAkbmV1dHJhbC04MDAsXG4pO1xuXG4kZGVzdHJ1Y3RpdmUtcmVkczogKFxuICAnMTAwJzogJGRlc3RydWN0aXZlLXJlZC0xMDAsXG4gICcyMDAnOiAkZGVzdHJ1Y3RpdmUtcmVkLTIwMCxcbiAgJzMwMCc6ICRkZXN0cnVjdGl2ZS1yZWQtMzAwLFxuICAnNDAwJzogJGRlc3RydWN0aXZlLXJlZC00MDAsXG4gICc1MDAnOiAkZGVzdHJ1Y3RpdmUtcmVkLTUwMCxcbiAgJzYwMCc6ICRkZXN0cnVjdGl2ZS1yZWQtNjAwLFxuICAnNzAwJzogJGRlc3RydWN0aXZlLXJlZC03MDAsXG4gICc4MDAnOiAkZGVzdHJ1Y3RpdmUtcmVkLTgwMCxcbik7XG5cbiRhbGVydC1nb2xkczogKFxuICAnMTAwJzogJGFsZXJ0LWdvbGQtMTAwLFxuICAnMjAwJzogJGFsZXJ0LWdvbGQtMjAwLFxuICAnMzAwJzogJGFsZXJ0LWdvbGQtMzAwLFxuICAnNDAwJzogJGFsZXJ0LWdvbGQtNDAwLFxuICAnNTAwJzogJGFsZXJ0LWdvbGQtNTAwLFxuICAnNjAwJzogJGFsZXJ0LWdvbGQtNjAwLFxuICAnNzAwJzogJGFsZXJ0LWdvbGQtNzAwLFxuICAnODAwJzogJGFsZXJ0LWdvbGQtODAwLFxuKTtcblxuJGVtcGhhc2lzLWJsdWVzOiAoXG4gICcxMDAnOiAkZW1waGFzaXMtYmx1ZS0xMDAsXG4gICcyMDAnOiAkZW1waGFzaXMtYmx1ZS0yMDAsXG4gICczMDAnOiAkZW1waGFzaXMtYmx1ZS0zMDAsXG4gICc0MDAnOiAkZW1waGFzaXMtYmx1ZS00MDAsXG4gICc1MDAnOiAkZW1waGFzaXMtYmx1ZS01MDAsXG4gICc2MDAnOiAkZW1waGFzaXMtYmx1ZS02MDAsXG4gICc3MDAnOiAkZW1waGFzaXMtYmx1ZS03MDAsXG4gICc4MDAnOiAkZW1waGFzaXMtYmx1ZS04MDAsXG4pO1xuXG4kbG9vcC10aGVtZXM6IChcbiAgJ3ByaW1hcnknOiAkbG9vcC1ncmVlbnMsXG4gICdhY3Rpb24nOiAkYWN0aW9uLXRlYWxzLFxuICAnbmV1dHJhbCc6ICRuZXV0cmFscyxcbiAgJ2Rhbmdlcic6ICRkZXN0cnVjdGl2ZS1yZWRzLFxuICAnYWxlcnQnOiAkYWxlcnQtZ29sZHMsXG4gICdlbXBoYXNpcyc6ICRlbXBoYXNpcy1ibHVlcyxcbik7IiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIGZsZXgtZ2FwKCRnYXAsICRnbG9iYWw6IGZhbHNlKSB7XG4gIG1hcmdpbi10b3A6ICgtJGdhcCk7XG4gIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCgtJGdhcCksICRnbG9iYWwpO1xuXG4gID4gKiB7XG4gICAgbWFyZ2luLXRvcDogJGdhcDtcbiAgICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgkZ2FwLCAkZ2xvYmFsKTtcbiAgfVxufVxuXG5AbWl4aW4gYmFzZS1jb250YWluZXIoJGNvbnRlbnQtd2lkdGgpIHtcbiAgJGRlc2t0b3AtcGFkZGluZzogMnJlbTtcbiAgbWF4LXdpZHRoOiBjYWxjKCN7JGNvbnRlbnQtd2lkdGh9ICsgKCN7JGRlc2t0b3AtcGFkZGluZ30pKTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MnJlbSkge1xuICAgIEBpbmNsdWRlIHBhZGRpbmctbGVmdCgkZGVza3RvcC1wYWRkaW5nLCB0cnVlKTtcbiAgICBAaW5jbHVkZSBwYWRkaW5nLXJpZ2h0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICB9XG59XG5cbkBtaXhpbiBjZW50ZXJBYnNvbHV0ZUVsZW1lbnQge1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5AbWl4aW4gb25seS1sdHItZ2xvYmFsIHtcbiAgaHRtbDpub3QoW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bC1nbG9iYWwge1xuICBodG1sW2Rpcj0ncnRsJ10gJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktbHRyIHtcbiAgOmhvc3QtY29udGV4dChodG1sOm5vdChbZGlyPSdydGwnXSkpICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bCB7XG4gIDpob3N0LWNvbnRleHQoaHRtbFtkaXI9J3J0bCddKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gcnRsLXZhbHVlKCRwcm9wZXJ0eSwgJGx0ci12YWx1ZSwgJHJ0bC12YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGx0ci12YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHJ0bC12YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHJ0bC1wcm9wZXJ0eSgkbHRyLXByb3BlcnR5LCAkcnRsLXByb3BlcnR5LCAkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpZiAkZ2xvYmFsID09IHRydWUge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyLWdsb2JhbCB7XG4gICAgICAjeyRsdHItcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwtZ2xvYmFsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bCB7XG4gICAgICAjeyRydGwtcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXJnaW4tbGVmdCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLWxlZnQsIG1hcmdpbi1yaWdodCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBtYXJnaW4tcmlnaHQoJG1hcmdpbiwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KG1hcmdpbi1yaWdodCwgbWFyZ2luLWxlZnQsICRtYXJnaW4sICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZygkcGFkZGluZ1RvcCwgJHBhZGRpbmdSaWdodCwgJHBhZGRpbmdCb3R0b20sICRwYWRkaW5nTGVmdCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgcGFkZGluZy10b3A6ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZ1JpZ2h0LCAkZ2xvYmFsKTtcbiAgcGFkZGluZy1ib3R0b206ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZ0xlZnQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1sZWZ0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLXJpZ2h0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiB0ZXh0LWFsaWduLWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRleHQtYWxpZ24sIGxlZnQsIHJpZ2h0LCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGxlZnQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobGVmdCwgcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiByaWdodCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShyaWdodCwgbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRyYW5zbGF0ZVhZKCR2YWx1ZVgsICR2YWx1ZVksICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZSh0cmFuc2Zvcm0sIHRyYW5zbGF0ZSgkdmFsdWVYLCAkdmFsdWVZKSwgdHJhbnNsYXRlKC0kdmFsdWVYLCAkdmFsdWVZKSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItbGVmdCwgYm9yZGVyLXJpZ2h0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1yaWdodCwgYm9yZGVyLWxlZnQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCBib3JkZXItdG9wLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtbGVmdC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBmbG9hdC1sZWZ0KCRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZShmbG9hdCwgbGVmdCwgcmlnaHQsICRnbG9iYWw6IGZhbHNlKTtcbn1cblxuQG1peGluIGZsb2F0LXJpZ2h0IHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCByaWdodCwgbGVmdCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gc21hbGwtZGVza3RvcC1vbmx5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LWxnKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQteGwgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtYW5kLXRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc21hbGwtbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtcyAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LW1kIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtdXAge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gZGlzYWJsZS1zY3JvbGxiYXIge1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9pbmJveC9zdG9yaWVzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3R5bGVzL2xvb3AtZGVzaWduLXN5c3RlbS12Mi9fY29sb3JzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3N0eWxlcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxXQUFBO0VBQ0EsY0N1Q1k7RUR0Q1osZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFGRjs7QUFLQTtFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBSEY7QUU4QkU7RUEwQ0ksaUJGeEVpQjtBQUd2QjtBRWlDRTtFQXdDSSxrQkY1RWlCO0FBTXZCO0FBREU7RUFFRSx5QkNvQlU7RURuQlYsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0FBRUo7QUVpQkU7RUEwQ0ksZ0JGbEVtQjtBQVV6QjtBRW9CRTtFQXdDSSxpQkZ0RW1CO0FBYXpCO0FBTEU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFPSjtBQUxJO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQ29CZ0I7RURuQmhCLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBT047QUFMTTtFQUVFLDBCQUFBO0FBTVI7QUFGSTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0N0Q1c7RUR1Q1gsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFJTjtBQUhJO0VBRUksMEJBQUE7QUFJUjtBQUFJO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUVOOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFBRjtBQUVFO0VBQ0UsbUJBQUE7RUFDQSxtQkN0RGM7QURzRGxCO0FBR0U7RUFDRSxtQkFBQTtFQUNBLG1CQzNEYztFRDREZCxtQ0FBQTtBQURKO0FBSUU7RUFDRSxtQkFBQTtFQUNBLG1CQ2hFYztBRDhEbEI7QUFLRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQUhKOztBQU9BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUpGO0FBTUU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFKSjtBQU9FO0VBQ0UsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtBQUxKOztBQVVFO0VBRUUsMEJBQUE7QUFSSjs7QUFZQTtFQUNFLGFBQUE7QUFURjtBQUNBLG9oZ0JBQW9oZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdsb29wLWRlc2lnbi1zeXN0ZW0tdjIvY29sb3JzJztcbkBpbXBvcnQgJ21peGlucyc7XG5cbjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAkbmV1dHJhbC01MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi5oZWFkZXIge1xuICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgxNnB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICYubW9iaWxlIHtcbiAgICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgwcHgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRuZXV0cmFsLTAwMDtcbiAgICBoZWlnaHQ6IDU0cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkbmV1dHJhbC0xMDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAucGFnaW5hdGlvbi1pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAucmVqZWN0LWJ1dHRvbiB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogNHB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogJGRlc3RydWN0aXZlLXJlZC01MDA7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG5cbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFzc2lnbi1tb2RlcmF0b3ItYnV0dG9uIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA0cHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGNvbG9yOiAkbG9vcC1ncmVlbi01MDA7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgJjpob3ZlcixcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudmVydGljYWwtZGl2aWRlciB7XG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICRuZXV0cmFsLTEwMDtcbiAgICAgIGhlaWdodDogMjRweDtcbiAgICAgIG1hcmdpbjogMCA4cHg7XG4gICAgfVxuICB9XG59XG5cbi5hcnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICY6aG92ZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgYmFja2dyb3VuZDogJGFjdGlvbi10ZWFsLTEwMDtcbiAgfVxuXG4gICY6Zm9jdXMge1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgYmFja2dyb3VuZDogJGFjdGlvbi10ZWFsLTEwMDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAwcHggIzIwNzJlYztcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIGJhY2tncm91bmQ6ICRhY3Rpb24tdGVhbC0yMDA7XG4gIH1cblxuICBpbWcge1xuICAgIHBhZGRpbmc6IDhweCA5LjVweDtcbiAgICBtYXJnaW46IDRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4uZGl2aWRlZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAyNHB4O1xuICB3aWR0aDogMTAwJTtcblxuICAuaXRlbXMtcGVyLXBhZ2Uge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNHB4O1xuICB9XG5cbiAgLmRpdmlkZXIge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJG5ldXRyYWwtMTAwO1xuICAgIG1hcmdpbjogNXB4O1xuICB9XG59XG5cbi50ZXh0IHtcbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbn1cblxuLmFycm93cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4iLCIvLy8vIEJyYW5kIGNvbG9yc1xuLy8gUHJpbWFyeVxuJGxvb3AtcHVycGxlLTEwMDogI2VhZTZmMDtcbiRsb29wLXB1cnBsZS0yMDA6ICNkNmQwZGY7XG4kbG9vcC1wdXJwbGUtMzAwOiAjYmFhYmQwO1xuJGxvb3AtcHVycGxlLTQwMDogIzg2NmFiMDtcbiRsb29wLXB1cnBsZS01MDA6ICM2YzRlOTk7XG4kbG9vcC1wdXJwbGUtNjAwOiAjNGEyYjdhO1xuJGxvb3AtcHVycGxlLTcwMDogIzMxMTM1ZTtcbiRsb29wLXB1cnBsZS04MDA6ICMyNjEwNDc7XG5cblxuLy8gR3JlZW5zXG4kbG9vcC1ncmVlbi0xMDA6ICNlNmYwZTk7XG4kbG9vcC1ncmVlbi0yMDA6ICNjMGQ5Y2U7XG4kbG9vcC1ncmVlbi0zMDA6ICM5M2I5YjA7XG4kbG9vcC1ncmVlbi00MDA6ICM1MzhjODA7XG4kbG9vcC1ncmVlbi01MDA6ICMyNjY5NWM7XG4kbG9vcC1ncmVlbi02MDA6ICMwMDQ3M2Q7XG4kbG9vcC1ncmVlbi03MDA6ICMwMDMyMmI7XG4kbG9vcC1ncmVlbi04MDA6ICMwMDIxMWM7XG5cbi8vIEV4YW1wbGU6XG4vLyBtYXAuZ2V0KCRsb29wLXB1cnBsZXMsICc2MDAnKTtcblxuLy8gQWN0aW9uXG4kYWN0aW9uLXRlYWwtMTAwOiAjZDllZWVkO1xuJGFjdGlvbi10ZWFsLTIwMDogI2ExZDRkMjtcbiRhY3Rpb24tdGVhbC0zMDA6ICM2OWJiYjg7XG4kYWN0aW9uLXRlYWwtNDAwOiAjMDA4NTdkO1xuJGFjdGlvbi10ZWFsLTUwMDogIzAxNjk2NTtcbiRhY3Rpb24tdGVhbC02MDA6ICMwMDU3NTQ7XG4kYWN0aW9uLXRlYWwtNzAwOiAjMDA0NTQyO1xuJGFjdGlvbi10ZWFsLTgwMDogIzAxMzIzMDtcblxuLy8gRXhhbXBsZTpcbi8vIG1hcC5nZXQoJGFjdGlvbi10ZWFscywgJzYwMCcpO1xuXG4vLyBOZXV0cmFsXG4kbmV1dHJhbC0wMDA6ICNmZmZmZmY7XG4kbmV1dHJhbC0wNTA6ICNmMWYyZjI7XG4kbmV1dHJhbC0xMDA6ICNkYmRiZGI7XG4kbmV1dHJhbC0zMDA6ICNiNmI2YjY7XG4kbmV1dHJhbC00MDA6ICM5MjkyOTI7XG4kbmV1dHJhbC01MDA6ICM2NTY1NjU7XG4kbmV1dHJhbC03MDA6ICM0OTQ5NDk7XG4kbmV1dHJhbC04MDA6ICMxYTFhMWE7XG5cbi8vIEV4YW1wbGU6XG4vLyBtYXAuZ2V0KCRuZXV0cmFscywgJzYwMCcpO1xuXG4vLy8vIFNlbWFudGljIENvbG9yc1xuLy8gRGFuZ2VyXG4kZGVzdHJ1Y3RpdmUtcmVkLTEwMDogI2Y1ZDVkYjtcbiRkZXN0cnVjdGl2ZS1yZWQtMjAwOiAjZWRhMWFmO1xuJGRlc3RydWN0aXZlLXJlZC0zMDA6ICNlMzZkODM7XG4kZGVzdHJ1Y3RpdmUtcmVkLTQwMDogI2MyMzA0YjtcbiRkZXN0cnVjdGl2ZS1yZWQtNTAwOiAjYjIxZDM5O1xuJGRlc3RydWN0aXZlLXJlZC02MDA6ICM4YzExMjg7XG4kZGVzdHJ1Y3RpdmUtcmVkLTcwMDogIzczMDAxNTtcbiRkZXN0cnVjdGl2ZS1yZWQtODAwOiAjNDUwNjExO1xuXG4vLyBBbGVydFxuJGFsZXJ0LWdvbGQtMTAwOiAjZmZmMWQ1O1xuJGFsZXJ0LWdvbGQtMjAwOiAjZjdkYTllO1xuJGFsZXJ0LWdvbGQtMzAwOiAjZjhjNDViO1xuJGFsZXJ0LWdvbGQtNDAwOiAjZThhYjMxO1xuJGFsZXJ0LWdvbGQtNTAwOiAjY2M4ZjE0O1xuJGFsZXJ0LWdvbGQtNjAwOiAjY2M4ZjE0O1xuJGFsZXJ0LWdvbGQtNzAwOiAjNmI0NzAwO1xuJGFsZXJ0LWdvbGQtODAwOiAjNDIyYzAwO1xuXG4vLyBFbXBoYXNpc1xuJGVtcGhhc2lzLWJsdWUtMTAwOiAjZDllOGZmO1xuJGVtcGhhc2lzLWJsdWUtMjAwOiAjYThjYmZmO1xuJGVtcGhhc2lzLWJsdWUtMzAwOiAjODBiMmZmO1xuJGVtcGhhc2lzLWJsdWUtNDAwOiAjNTM5N2ZjO1xuJGVtcGhhc2lzLWJsdWUtNTAwOiAjMjA3MmVjO1xuJGVtcGhhc2lzLWJsdWUtNjAwOiAjMDQ1NmQxO1xuJGVtcGhhc2lzLWJsdWUtNzAwOiAjMDAzYzk2O1xuJGVtcGhhc2lzLWJsdWUtODAwOiAjMDAxZDQ3O1xuXG4kbG9vcC1wdXJwbGVzOiAoXG4gICcxMDAnOiAkbG9vcC1wdXJwbGUtMTAwLFxuICAnMjAwJzogJGxvb3AtcHVycGxlLTIwMCxcbiAgJzMwMCc6ICRsb29wLXB1cnBsZS0zMDAsXG4gICc0MDAnOiAkbG9vcC1wdXJwbGUtNDAwLFxuICAnNTAwJzogJGxvb3AtcHVycGxlLTUwMCxcbiAgJzYwMCc6ICRsb29wLXB1cnBsZS02MDAsXG4gICc3MDAnOiAkbG9vcC1wdXJwbGUtNzAwLFxuICAnODAwJzogJGxvb3AtcHVycGxlLTgwMCxcbik7XG5cbiRsb29wLWdyZWVuczogKFxuICAnMTAwJzogJGxvb3AtZ3JlZW4tMTAwLFxuICAnMjAwJzogJGxvb3AtZ3JlZW4tMjAwLFxuICAnMzAwJzogJGxvb3AtZ3JlZW4tMzAwLFxuICAnNDAwJzogJGxvb3AtZ3JlZW4tNDAwLFxuICAnNTAwJzogJGxvb3AtZ3JlZW4tNTAwLFxuICAnNjAwJzogJGxvb3AtZ3JlZW4tNjAwLFxuICAnNzAwJzogJGxvb3AtZ3JlZW4tNzAwLFxuICAnODAwJzogJGxvb3AtZ3JlZW4tODAwLFxuKTtcblxuJGFjdGlvbi10ZWFsczogKFxuICAnMTAwJzogJGFjdGlvbi10ZWFsLTEwMCxcbiAgJzIwMCc6ICRhY3Rpb24tdGVhbC0yMDAsXG4gICczMDAnOiAkYWN0aW9uLXRlYWwtMzAwLFxuICAnNDAwJzogJGFjdGlvbi10ZWFsLTQwMCxcbiAgJzUwMCc6ICRhY3Rpb24tdGVhbC01MDAsXG4gICc2MDAnOiAkYWN0aW9uLXRlYWwtNjAwLFxuICAnNzAwJzogJGFjdGlvbi10ZWFsLTcwMCxcbiAgJzgwMCc6ICRhY3Rpb24tdGVhbC04MDAsXG4pO1xuXG4kbmV1dHJhbHM6IChcbiAgJzAwMCc6ICRuZXV0cmFsLTAwMCxcbiAgJzA1MCc6ICRuZXV0cmFsLTA1MCxcbiAgJzEwMCc6ICRuZXV0cmFsLTEwMCxcbiAgJzMwMCc6ICRuZXV0cmFsLTMwMCxcbiAgJzQwMCc6ICRuZXV0cmFsLTQwMCxcbiAgJzUwMCc6ICRuZXV0cmFsLTUwMCxcbiAgJzcwMCc6ICRuZXV0cmFsLTcwMCxcbiAgJzgwMCc6ICRuZXV0cmFsLTgwMCxcbik7XG5cbiRkZXN0cnVjdGl2ZS1yZWRzOiAoXG4gICcxMDAnOiAkZGVzdHJ1Y3RpdmUtcmVkLTEwMCxcbiAgJzIwMCc6ICRkZXN0cnVjdGl2ZS1yZWQtMjAwLFxuICAnMzAwJzogJGRlc3RydWN0aXZlLXJlZC0zMDAsXG4gICc0MDAnOiAkZGVzdHJ1Y3RpdmUtcmVkLTQwMCxcbiAgJzUwMCc6ICRkZXN0cnVjdGl2ZS1yZWQtNTAwLFxuICAnNjAwJzogJGRlc3RydWN0aXZlLXJlZC02MDAsXG4gICc3MDAnOiAkZGVzdHJ1Y3RpdmUtcmVkLTcwMCxcbiAgJzgwMCc6ICRkZXN0cnVjdGl2ZS1yZWQtODAwLFxuKTtcblxuJGFsZXJ0LWdvbGRzOiAoXG4gICcxMDAnOiAkYWxlcnQtZ29sZC0xMDAsXG4gICcyMDAnOiAkYWxlcnQtZ29sZC0yMDAsXG4gICczMDAnOiAkYWxlcnQtZ29sZC0zMDAsXG4gICc0MDAnOiAkYWxlcnQtZ29sZC00MDAsXG4gICc1MDAnOiAkYWxlcnQtZ29sZC01MDAsXG4gICc2MDAnOiAkYWxlcnQtZ29sZC02MDAsXG4gICc3MDAnOiAkYWxlcnQtZ29sZC03MDAsXG4gICc4MDAnOiAkYWxlcnQtZ29sZC04MDAsXG4pO1xuXG4kZW1waGFzaXMtYmx1ZXM6IChcbiAgJzEwMCc6ICRlbXBoYXNpcy1ibHVlLTEwMCxcbiAgJzIwMCc6ICRlbXBoYXNpcy1ibHVlLTIwMCxcbiAgJzMwMCc6ICRlbXBoYXNpcy1ibHVlLTMwMCxcbiAgJzQwMCc6ICRlbXBoYXNpcy1ibHVlLTQwMCxcbiAgJzUwMCc6ICRlbXBoYXNpcy1ibHVlLTUwMCxcbiAgJzYwMCc6ICRlbXBoYXNpcy1ibHVlLTYwMCxcbiAgJzcwMCc6ICRlbXBoYXNpcy1ibHVlLTcwMCxcbiAgJzgwMCc6ICRlbXBoYXNpcy1ibHVlLTgwMCxcbik7XG5cbiRsb29wLXRoZW1lczogKFxuICAncHJpbWFyeSc6ICRsb29wLWdyZWVucyxcbiAgJ2FjdGlvbic6ICRhY3Rpb24tdGVhbHMsXG4gICduZXV0cmFsJzogJG5ldXRyYWxzLFxuICAnZGFuZ2VyJzogJGRlc3RydWN0aXZlLXJlZHMsXG4gICdhbGVydCc6ICRhbGVydC1nb2xkcyxcbiAgJ2VtcGhhc2lzJzogJGVtcGhhc2lzLWJsdWVzLFxuKTsiLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AbWl4aW4gZmxleC1nYXAoJGdhcCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgbWFyZ2luLXRvcDogKC0kZ2FwKTtcbiAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoKC0kZ2FwKSwgJGdsb2JhbCk7XG5cbiAgPiAqIHtcbiAgICBtYXJnaW4tdG9wOiAkZ2FwO1xuICAgIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCRnYXAsICRnbG9iYWwpO1xuICB9XG59XG5cbkBtaXhpbiBiYXNlLWNvbnRhaW5lcigkY29udGVudC13aWR0aCkge1xuICAkZGVza3RvcC1wYWRkaW5nOiAycmVtO1xuICBtYXgtd2lkdGg6IGNhbGMoI3skY29udGVudC13aWR0aH0gKyAoI3skZGVza3RvcC1wYWRkaW5nfSkpO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQycmVtKSB7XG4gICAgQGluY2x1ZGUgcGFkZGluZy1sZWZ0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICAgIEBpbmNsdWRlIHBhZGRpbmctcmlnaHQoJGRlc2t0b3AtcGFkZGluZywgdHJ1ZSk7XG4gIH1cbn1cblxuQG1peGluIGNlbnRlckFic29sdXRlRWxlbWVudCB7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbkBtaXhpbiBvbmx5LWx0ci1nbG9iYWwge1xuICBodG1sOm5vdChbZGlyPSdydGwnXSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsLWdsb2JhbCB7XG4gIGh0bWxbZGlyPSdydGwnXSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1sdHIge1xuICA6aG9zdC1jb250ZXh0KGh0bWw6bm90KFtkaXI9J3J0bCddKSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsIHtcbiAgOmhvc3QtY29udGV4dChodG1sW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBydGwtdmFsdWUoJHByb3BlcnR5LCAkbHRyLXZhbHVlLCAkcnRsLXZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaWYgJGdsb2JhbCA9PSB0cnVlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ci1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsLWdsb2JhbCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRydGwtdmFsdWU7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ciB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRsdHItdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gcnRsLXByb3BlcnR5KCRsdHItcHJvcGVydHksICRydGwtcHJvcGVydHksICR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcnRsLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skbHRyLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hcmdpbi1sZWZ0KCRtYXJnaW4sICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShtYXJnaW4tbGVmdCwgbWFyZ2luLXJpZ2h0LCAkbWFyZ2luLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIG1hcmdpbi1yaWdodCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLXJpZ2h0LCBtYXJnaW4tbGVmdCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nKCRwYWRkaW5nVG9wLCAkcGFkZGluZ1JpZ2h0LCAkcGFkZGluZ0JvdHRvbSwgJHBhZGRpbmdMZWZ0LCAkZ2xvYmFsOiBmYWxzZSkge1xuICBwYWRkaW5nLXRvcDogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nUmlnaHQsICRnbG9iYWwpO1xuICBwYWRkaW5nLWJvdHRvbTogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nTGVmdCwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLWxlZnQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmctcmlnaHQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRleHQtYWxpZ24tbGVmdCgkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUodGV4dC1hbGlnbiwgbGVmdCwgcmlnaHQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShsZWZ0LCByaWdodCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHJpZ2h0LCBsZWZ0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gdHJhbnNsYXRlWFkoJHZhbHVlWCwgJHZhbHVlWSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRyYW5zZm9ybSwgdHJhbnNsYXRlKCR2YWx1ZVgsICR2YWx1ZVkpLCB0cmFuc2xhdGUoLSR2YWx1ZVgsICR2YWx1ZVkpLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1sZWZ0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1sZWZ0LCBib3JkZXItcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItcmlnaHQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXJpZ2h0LCBib3JkZXItbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsIGJvcmRlci10b3AtbGVmdC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItdG9wLWxlZnQtcmFkaXVzLCBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGZsb2F0LWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCBsZWZ0LCByaWdodCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gZmxvYXQtcmlnaHQge1xuICBAaW5jbHVkZSBydGwtdmFsdWUoZmxvYXQsIHJpZ2h0LCBsZWZ0LCAkZ2xvYmFsOiBmYWxzZSk7XG59XG5cbkBtaXhpbiBzbWFsbC1kZXNrdG9wLW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbGcpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC14bCAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1hbmQtdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbGcgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBzbWFsbC1tb2JpbGUtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1zIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbWQgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0YWJsZXQtb25seSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS11cCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBkaXNhYmxlLXNjcm9sbGJhciB7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 59096:
/*!************************************************************************!*\
  !*** ./src/app/modules/inbox/stories/pagination/pagination.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationService": () => (/* binding */ PaginationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class PaginationService {
  constructor() {
    this.currentPage = 1;
    this.itemsPerPage = null;
    this.itemsPerPageValues = [10, 15, 20, 50];
  }
  init(data) {
    this.metaData = data.meta;
    this.totalItems = data.meta.totalItems;
    this.totalPages = data.meta.totalPages;
    this.currentPage = data.meta.currentPage;
    this.itemsPerPage = data.meta.itemsPerPage;
    this.itemCount = this.itemCount;
  }
  restoreStateAfterError() {
    this.currentPage = this.previousCurrentPage ?? this.metaData.currentPage;
    this.itemsPerPage = this.previousItemsPerPage ?? this.metaData.itemsPerPage;
  }
  goToPreviousPage() {
    this.setPreviousState();
    if (this.currentPage > 1) {
      this.currentPage -= 1;
      return true;
    }
    return false;
  }
  goToNextPage() {
    this.setPreviousState();
    if (this.currentPage + 1 <= this.totalPages) {
      this.currentPage += 1;
      return true;
    }
    return false;
  }
  setPreviousState() {
    this.previousCurrentPage = this.currentPage;
    this.previousItemsPerPage = this.itemsPerPage;
  }
  static #_ = this.ɵfac = function PaginationService_Factory(t) {
    return new (t || PaginationService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: PaginationService,
    factory: PaginationService.ɵfac
  });
}

/***/ }),

/***/ 98432:
/*!***********************************************************************!*\
  !*** ./src/app/modules/inbox/stories/pagination/selection.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectionService": () => (/* binding */ SelectionService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class SelectionService {
  constructor() {
    this.selectedItems$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
  }
  get selectedItems() {
    return this.selectedItems$.getValue();
  }
  get firstSelectedItem() {
    return this.selectedItems[0];
  }
  get selectedChannel() {
    return this._selectedChannel;
  }
  set selectedChannel(value) {
    this._selectedChannel = value;
  }
  changeSelection(item) {
    if (item.selected) {
      this.addSelectedItem(item);
    } else {
      this.removeSelectedItem(item);
    }
  }
  addSelectedItem(item) {
    const newSelectedItemsList = [...this.selectedItems, item];
    this.selectedItems$.next(newSelectedItemsList);
  }
  removeSelectedItem(item) {
    const newSelectedItemsList = this.selectedItems.filter(x => x.id !== item.id);
    this.selectedItems$.next(newSelectedItemsList);
  }
  static #_ = this.ɵfac = function SelectionService_Factory(t) {
    return new (t || SelectionService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: SelectionService,
    factory: SelectionService.ɵfac
  });
}

/***/ }),

/***/ 43899:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/inbox/stories/stories-list/stories-columns.const.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storiesColumns": () => (/* binding */ storiesColumns)
/* harmony export */ });
/* harmony import */ var _shared_inbox_table_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/inbox-table.model */ 15860);

const storiesColumns = [new _shared_inbox_table_model__WEBPACK_IMPORTED_MODULE_0__.InboxTable('recording', '')];

/***/ }),

/***/ 95540:
/*!******************************************************************************!*\
  !*** ./src/app/modules/inbox/stories/stories-list/stories-list.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoriesListComponent": () => (/* binding */ StoriesListComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/app-routing.props */ 18854);
/* harmony import */ var _app_modules_inbox_inbox_filter_tab_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/modules/inbox/inbox-filter-tab.enum */ 44060);
/* harmony import */ var _app_modules_inbox_shared_components_reject_modal_reject_form_reject_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/modules/inbox/shared/components/reject-modal/reject-form/reject-form.component */ 25166);
/* harmony import */ var _app_modules_inbox_stories_stories_list_stories_columns_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/inbox/stories/stories-list/stories-columns.const */ 43899);
/* harmony import */ var _core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/api/model/channel.enum */ 92128);
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/components/base.component */ 70697);
/* harmony import */ var _shared_components_mobile_table_mobile_table_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/components/mobile-table/mobile-table.model */ 63277);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _shared_components_assign_moderator_modal_assign_moderator_form_assign_moderator_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/assign-moderator-modal/assign-moderator-form/assign-moderator-form.component */ 61042);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/services/ui/ui.service */ 21428);
/* harmony import */ var _app_modules_inbox_stories_stories_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/modules/inbox/stories/stories.service */ 3539);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _app_modules_inbox_inbox_filters_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/modules/inbox/inbox-filters.service */ 41078);
/* harmony import */ var _core_services_modal_modal_v2_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/services/modal/modal-v2.service */ 12151);
/* harmony import */ var _app_modules_inbox_stories_story_details_story_details_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/modules/inbox/stories/story-details/story-details.service */ 70341);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _core_services_api_story_story_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @core/services/api/story/story.service */ 95138);
/* harmony import */ var _app_shared_components_audio_player_audio_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/shared/components/audio-player/audio.service */ 48350);
/* harmony import */ var _pagination_selection_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../pagination/selection.service */ 98432);
/* harmony import */ var _app_core_services_filters_filters_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/core/services/filters/filters.service */ 86631);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-infinite-scroll */ 47364);
/* harmony import */ var _shared_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/components/checkbox/checkbox.component */ 85994);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/legacy-table */ 96538);
/* harmony import */ var _shared_components_mobile_table_mobile_table_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/components/mobile-table/mobile-table.component */ 20026);
/* harmony import */ var _shared_components_mobile_table_mobile_cell_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/components/mobile-table/mobile-cell.directive */ 34890);
/* harmony import */ var _shared_components_audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @shared/components/audio-player/audio-player.component */ 77200);
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../pagination/pagination.component */ 89076);
/* harmony import */ var _shared_pipes_channel_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../shared/pipes/channel.pipe */ 21466);
/* harmony import */ var _shared_pipes_country_flag_src_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../shared/pipes/country-flag-src.pipe */ 20593);
/* harmony import */ var _shared_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @shared/pipes/duration.pipe */ 94088);
/* harmony import */ var _shared_pipes_channel_image_src_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../shared/pipes/channel-image-src.pipe */ 89757);
/* harmony import */ var _shared_pipes_word_count_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../shared/pipes/word-count.pipe */ 64723);




































const _c0 = ["mobileSelection"];
function StoriesListComponent_ng_container_1_ng_container_6_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](1, "app-audio-player", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("isSimplePlayer", true)("s3FileId", element_r10.s3FileId);
  }
}
function StoriesListComponent_ng_container_1_ng_container_6_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](element_r10.content);
  }
}
function StoriesListComponent_ng_container_1_ng_container_6_img_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](0, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](1, "countryFlagSrc");
  }
  if (rf & 2) {
    const element_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](1, 1, element_r10.country), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsanitizeUrl"]);
  }
}
function StoriesListComponent_ng_container_1_ng_container_6_span_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](2, 2, "inbox.table.assignedTo"), " ", element_r10.moderatorName, " ");
  }
}
function StoriesListComponent_ng_container_1_ng_container_6_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainer"](0, 36);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](3);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngTemplateOutlet", _r6);
  }
}
function StoriesListComponent_ng_container_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "div", 15)(5, "app-checkbox", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function StoriesListComponent_ng_container_1_ng_container_6_Template_app_checkbox_click_5_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r22);
      const element_r10 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx_r21.onCheckboxClicked($event, element_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](6, StoriesListComponent_ng_container_1_ng_container_6_div_6_Template, 2, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](7, StoriesListComponent_ng_container_1_ng_container_6_ng_template_7_Template, 2, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](9, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function StoriesListComponent_ng_container_1_ng_container_6_Template_img_click_9_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r22);
      const element_r10 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx_r23.handleRejectClick($event, element_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function StoriesListComponent_ng_container_1_ng_container_6_Template_div_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r22);
      const element_r10 = restoredCtx.$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx_r24.rowClicked(element_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](11, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](12, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](16, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](17, StoriesListComponent_ng_container_1_ng_container_6_img_17_Template, 2, 3, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](20, "div", 25)(21, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](22, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](23, "channelImageSrc");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](25, "channel");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](26, " \u00B7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](30, "\u00B7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](31, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](33, "duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](34, "wordCount");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](35, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](36, StoriesListComponent_ng_container_1_ng_container_6_span_36_Template, 3, 4, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](37, StoriesListComponent_ng_container_1_ng_container_6_ng_container_37_Template, 1, 1, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](8);
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
    let tmp_13_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("checked", element_r10.selected)("disabled", ctx_r9.disableChannel(element_r10))("v2", true)("alwaysRenderCheckmark", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", element_r10.channel === ctx_r9.CHANNEL_CONSTANTS.IVRR)("ngIfElse", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("src", ctx_r9.getStatusImage(element_r10.status), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](15, 16, ctx_r9.getStoryStatus(element_r10.status)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", element_r10.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind2"](19, 18, element_r10.createdAt, ctx_r9.DATE_FORMAT), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](23, 21, element_r10.channel), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](25, 23, element_r10.channel), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate1"](" ", element_r10.language ? _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](29, 25, "languages." + element_r10.language) : "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate1"](" ", element_r10.channel === ctx_r9.CHANNEL_CONSTANTS.IVRR ? _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind2"](33, 27, element_r10.recordingDuration, true) : _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](34, 30, (tmp_13_0 = element_r10.numberOfWords) !== null && tmp_13_0 !== undefined ? tmp_13_0 : ""), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", element_r10.moderatorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", element_r10.isSensitive);
  }
}
function StoriesListComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](1, "div", 7, 8)(3, "app-pagination", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("selectAllChanged", function StoriesListComponent_ng_container_1_Template_app_pagination_selectAllChanged_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx_r25.onSelectAllChanged($event));
    })("rejectSelectedStories", function StoriesListComponent_ng_container_1_Template_app_pagination_rejectSelectedStories_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r26);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx_r27.onRejectSelectedStories());
    })("assignSelectedStories", function StoriesListComponent_ng_container_1_Template_app_pagination_assignSelectedStories_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r26);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx_r28.onAssignSelectedStories());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](4, "app-mobile-table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("actionClick", function StoriesListComponent_ng_container_1_Template_app_mobile_table_actionClick_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r26);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx_r29.onActionClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](6, StoriesListComponent_ng_container_1_ng_container_6_Template, 38, 32, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("storyServiceData", true)("header", true)("mobile", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("columns", ctx_r0.columns)("itemsInRow", 1)("list", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](5, 9, ctx_r0.storiesService.listElements$))("additionalRowClassCondition", ctx_r0.mobileRowAdditionalClassCondition)("showCustomActions", false)("noPadding", true);
  }
}
function StoriesListComponent_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 41)(1, "app-pagination", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("selectAllChanged", function StoriesListComponent_ng_template_2_div_0_Template_app_pagination_selectAllChanged_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx_r34.onSelectAllChanged($event));
    })("rejectSelectedStories", function StoriesListComponent_ng_template_2_div_0_Template_app_pagination_rejectSelectedStories_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r35);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx_r36.onRejectSelectedStories());
    })("assignSelectedStories", function StoriesListComponent_ng_template_2_div_0_Template_app_pagination_assignSelectedStories_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r35);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx_r37.onAssignSelectedStories());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("storyServiceData", true)("header", true);
  }
}
function StoriesListComponent_ng_template_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 43)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](3, 1, "inbox.table.loading"), " ");
  }
}
function StoriesListComponent_ng_template_2_table_4_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"]("");
  }
}
function StoriesListComponent_ng_template_2_table_4_td_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](1, "app-audio-player", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("isSimplePlayer", true)("s3FileId", element_r42.s3FileId);
  }
}
function StoriesListComponent_ng_template_2_table_4_td_4_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](element_r42.content);
  }
}
function StoriesListComponent_ng_template_2_table_4_td_4_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainer"](0, 36);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](4);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngTemplateOutlet", _r6);
  }
}
function StoriesListComponent_ng_template_2_table_4_td_4_img_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](0, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](1, "countryFlagSrc");
  }
  if (rf & 2) {
    const element_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](1, 1, element_r42.country), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsanitizeUrl"]);
  }
}
function StoriesListComponent_ng_template_2_table_4_td_4_span_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](2, 2, "inbox.table.assignedTo"), " ", element_r42.moderatorName, " ");
  }
}
function StoriesListComponent_ng_template_2_table_4_td_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "td", 51)(1, "div", 13)(2, "div", 14)(3, "div", 15)(4, "app-checkbox", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function StoriesListComponent_ng_template_2_table_4_td_4_Template_app_checkbox_click_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r54);
      const element_r42 = restoredCtx.$implicit;
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx_r53.onCheckboxClicked($event, element_r42));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](5, StoriesListComponent_ng_template_2_table_4_td_4_div_5_Template, 2, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](6, StoriesListComponent_ng_template_2_table_4_td_4_ng_template_6_Template, 2, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](9, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](13, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function StoriesListComponent_ng_template_2_table_4_td_4_Template_img_click_13_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r54);
      const element_r42 = restoredCtx.$implicit;
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx_r55.handleRejectClick($event, element_r42));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](14, "div", 52)(15, "div", 25)(16, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](17, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](18, "channelImageSrc");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](20, "channel");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](21, " \u00B7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](25, "\u00B7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](26, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](28, "duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](29, "wordCount");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](30, StoriesListComponent_ng_template_2_table_4_td_4_ng_container_30_Template, 1, 1, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](31, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](32, StoriesListComponent_ng_template_2_table_4_td_4_img_32_Template, 2, 3, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](35, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](36, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](37, StoriesListComponent_ng_template_2_table_4_td_4_span_37_Template, 3, 4, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const element_r42 = ctx.$implicit;
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](7);
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](3);
    let tmp_14_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵclassProp"]("selected", element_r42.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵclassProp"]("selected", element_r42.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("checked", element_r42.selected)("disabled", ctx_r39.disableChannel(element_r42))("v2", true)("alwaysRenderCheckmark", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", element_r42.channel === ctx_r39.CHANNEL_CONSTANTS.IVRR)("ngIfElse", _r44);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("src", ctx_r39.getStatusImage(element_r42.status), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](12, 22, ctx_r39.getStoryStatus(element_r42.status)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵclassProp"]("selected", element_r42.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](18, 24, element_r42.channel), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](20, 26, element_r42.channel), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate1"](" ", element_r42.language ? _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](24, 28, "languages." + element_r42.language) : "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate1"](" ", element_r42.channel === ctx_r39.CHANNEL_CONSTANTS.IVRR ? _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind2"](28, 30, element_r42.recordingDuration, true) : _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](29, 33, (tmp_14_0 = element_r42.numberOfWords) !== null && tmp_14_0 !== undefined ? tmp_14_0 : ""), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", element_r42.isSensitive);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", element_r42.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind2"](35, 35, element_r42.createdAt, ctx_r39.DATE_FORMAT), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", element_r42.moderatorName);
  }
}
function StoriesListComponent_ng_template_2_table_4_tr_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](0, "tr", 53);
  }
}
function StoriesListComponent_ng_template_2_table_4_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "tr", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function StoriesListComponent_ng_template_2_table_4_tr_6_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r58);
      const row_r56 = restoredCtx.$implicit;
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx_r57.rowClicked(row_r56));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r56 = ctx.$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵclassProp"]("rejected", row_r56.isRejected)("lastVisitedId", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](1, 4, ctx_r41.storiesService.lastVisitedId$) === row_r56.id);
  }
}
function StoriesListComponent_ng_template_2_table_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "table", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerStart"](2, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](3, StoriesListComponent_ng_template_2_table_4_th_3_Template, 2, 1, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](4, StoriesListComponent_ng_template_2_table_4_td_4_Template, 38, 38, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](5, StoriesListComponent_ng_template_2_table_4_tr_5_Template, 1, 0, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](6, StoriesListComponent_ng_template_2_table_4_tr_6_Template, 2, 6, "tr", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](1, 3, ctx_r32.storiesService.dataSource$));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("matHeaderRowDef", ctx_r32.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("matRowDefColumns", ctx_r32.displayedColumns);
  }
}
function StoriesListComponent_ng_template_2_app_pagination_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](0, "app-pagination", 55);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("totalItems", 100)("header", false);
  }
}
function StoriesListComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](0, StoriesListComponent_ng_template_2_div_0_Template, 2, 2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](2, StoriesListComponent_ng_template_2_div_2_Template, 4, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](4, StoriesListComponent_ng_template_2_table_4_Template, 7, 5, "table", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](6, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](7, StoriesListComponent_ng_template_2_app_pagination_7_Template, 1, 2, "app-pagination", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](1, 4, ctx_r2.storiesService.isLoading$) === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](3, 6, ctx_r2.storiesService.isLoading$));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](5, 8, ctx_r2.storiesService.isLoading$) === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](8, 10, ctx_r2.storiesService.isLoading$) === false);
  }
}
function StoriesListComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("scrolled", function StoriesListComponent_div_4_Template_div_scrolled_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r60);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx_r59.storiesService.onScroll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("infiniteScrollDistance", 1)("infiniteScrollThrottle", 500)("fromRoot", true);
  }
}
function StoriesListComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 43)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](3, 1, "inbox.table.loading"), " ");
  }
}
function StoriesListComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 57)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](3, 1, "storiesList.text.noMoreStories"), " ");
  }
}
function StoriesListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](0, "\u00B7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](2, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](4, 1, "inbox.storiesList.sensitive"), " ");
  }
}
class StoriesListComponent extends _shared_components_base_component__WEBPACK_IMPORTED_MODULE_5__.BaseComponent {
  constructor(ui, storiesService, router, route, translateService, inboxFiltersService, modalService, storyDetailsService, toastr, storyService, audioService, selectionService, filtersService) {
    super();
    this.ui = ui;
    this.storiesService = storiesService;
    this.router = router;
    this.route = route;
    this.translateService = translateService;
    this.inboxFiltersService = inboxFiltersService;
    this.modalService = modalService;
    this.storyDetailsService = storyDetailsService;
    this.toastr = toastr;
    this.storyService = storyService;
    this.audioService = audioService;
    this.selectionService = selectionService;
    this.filtersService = filtersService;
    this.DATE_FORMAT = 'dd/MM/yy h:mm a';
    this.columns = _app_modules_inbox_stories_stories_list_stories_columns_const__WEBPACK_IMPORTED_MODULE_3__.storiesColumns;
    this.listActions = [new _shared_components_mobile_table_mobile_table_model__WEBPACK_IMPORTED_MODULE_6__.MobileTableAction('inbox.table.actions.review')];
    this.displayedColumns = this.columns.filter(column => column.key !== 'empty').map(column => column.key);
    this.CHANNEL_CONSTANTS = _core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_4__.CHANNEL_CONSTANTS;
    if (this.inboxFiltersService.getCurrentInboxFilterTab() !== _app_modules_inbox_inbox_filter_tab_enum__WEBPACK_IMPORTED_MODULE_1__.INBOX_FILTER_TAB.STORIES) {
      this.inboxFiltersService.setCurrentInboxFilterTab(_app_modules_inbox_inbox_filter_tab_enum__WEBPACK_IMPORTED_MODULE_1__.INBOX_FILTER_TAB.STORIES);
    }
  }
  ngOnInit() {
    this.filtersService.filtersChanged$.subscribe(() => {
      this.selectionService.selectedItems$.next([]);
    });
  }
  onWindowScroll() {
    if (!this.ui.mobileView) {
      return;
    }
    const selectionShowBreakpoint = 100;
    this.mobileSelection.nativeElement.style.display = window.scrollY >= selectionShowBreakpoint ? 'flex' : 'none';
  }
  get selectedChannel() {
    return this.selectionService.selectedChannel;
  }
  disableChannel(element) {
    if (!this.selectedChannel) {
      return false;
    }
    if (this.selectedChannel === _core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_4__.CHANNEL_CONSTANTS.IVRR) {
      return element.channel !== _core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_4__.CHANNEL_CONSTANTS.IVRR;
    } else {
      return !_core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_4__.TEXT_CHANNELS.includes(element.channel);
    }
  }
  getStoryTypes(types, elipsis) {
    const translated = (types || []).map(type => this.translateService.instant(`category.${type}`)).join(', ');
    return elipsis && translated.length > elipsis ? `${translated.substring(0, elipsis - 3)}...` : translated;
  }
  getStatusImage(storyStatus) {
    if (storyStatus) {
      return `assets/icons/story-status/${storyStatus}.svg`;
    }
  }
  getStoryStatus(status) {
    return `story.status.${status}`;
  }
  getColumnHeader(column) {
    const translation = this.columns.find(element => element.key === column)?.label;
    return translation ? this.translateService.instant(translation) : 'Unknown';
  }
  rowClicked(item) {
    this.storiesService.lastVisitedId$.next(item.id);
    this.storiesService.scrollPos$.next(this.ui.lastScrollTop$.getValue());
    const step = 'review';
    this.navigateToStoryDetailsStepper(step, item.channel, item.id);
  }
  onActionClick(callback) {
    if (callback.action === (callback.element.customActions?.[0] || this.listActions[0])) {
      this.storiesService.lastVisitedId$.next(callback.element.id);
      this.storiesService.scrollPos$.next(this.ui.lastScrollTop$.getValue());
      const step = 'review';
      this.navigateToStoryDetailsStepper(step, callback.element.channel, callback.element.id);
    }
  }
  navigateToStoryDetailsStepper(step, channel, storeId) {
    this.router.navigate([_app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.MAIN_ROUTES.INBOX, _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.INBOX_ROUTES.STORIES, 'story', channel, storeId, step]).then();
  }
  ngAfterViewInit() {
    setTimeout(() => {
      const animationDelay = 1000;
      this.processedStoryId = this.route.snapshot.queryParamMap.get('processedStoryId');
      if (this.storiesService.lastVisitedId$.getValue()) {
        setTimeout(() => {
          window.scrollTo(0, this.storiesService.scrollPos$.getValue());
        });
        setTimeout(() => {
          this.storiesService.deleteElement(this.processedStoryId);
        }, animationDelay);
      } else {
        const activeSort = this.storiesService.activeSort$.getValue();
        if (!!activeSort) {
          this.storiesService.sortChange(activeSort);
        }
      }
      this.deleteLastVisitedId = setTimeout(() => {
        this.storiesService.lastVisitedId$.next(null);
      }, animationDelay);
    }, 0);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    if (this.deleteLastVisitedId) {
      clearTimeout(this.deleteLastVisitedId);
    }
  }
  handleRejectClick(event, story) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.audioService.stopAudio();
    const modal = this.modalService.open(_app_modules_inbox_shared_components_reject_modal_reject_form_reject_form_component__WEBPACK_IMPORTED_MODULE_2__.InboxRejectFormComponent, {
      hasAuthor: false,
      type: 'story',
      channel: story.channel,
      languageCode: story.language,
      contactIsNotAccepted: false,
      simpleRejectForVoice: story.channel === _core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_4__.CHANNEL_CONSTANTS.IVRR,
      multiple: false
    });
    modal.confirm.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.takeUntil)(this.destroyed$)).subscribe(payload => this.rejectStory(payload, story.id));
  }
  mobileRowAdditionalClassCondition(element) {
    return element.isRejected ? 'rejected' : null;
  }
  onCheckboxClicked(event, element) {
    event.preventDefault();
    event.stopImmediatePropagation();
    if (this.disableChannel(element)) {
      return;
    }
    element.selected = !element.selected;
    this.selectionService.changeSelection(element);
  }
  onSelectAllChanged(selectAll) {
    const newSelectedItems = this.storiesService.listElements$.getValue();
    if (!selectAll) {
      newSelectedItems.forEach(item => item.selected = false);
    } else {
      newSelectedItems.forEach(item => {
        if (item.isRejected) {
          return;
        }
        const selectByChannel = this.selectedChannel ?? (newSelectedItems[0].channel === _core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_4__.CHANNEL_CONSTANTS.IVRR ? newSelectedItems[0].channel : _core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_4__.CHANNEL_CONSTANTS.TEXT);
        if (selectByChannel === _core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_4__.CHANNEL_CONSTANTS.IVRR && item.channel === selectByChannel || selectByChannel === _core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_4__.CHANNEL_CONSTANTS.TEXT && _core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_4__.TEXT_CHANNELS.includes(item.channel)) {
          item.selected = true;
        }
      });
    }
    this.storiesService.dataSource$.next(new _angular_material_table__WEBPACK_IMPORTED_MODULE_30__.MatTableDataSource(newSelectedItems));
    this.selectionService.selectedItems$.next(newSelectedItems.filter(item => item.selected));
  }
  onRejectSelectedStories() {
    this.audioService.stopAudio();
    const modal = this.modalService.open(_app_modules_inbox_shared_components_reject_modal_reject_form_reject_form_component__WEBPACK_IMPORTED_MODULE_2__.InboxRejectFormComponent, {
      hasAuthor: false,
      type: 'story',
      channel: this.selectedChannel,
      languageCode: this.selectionService.firstSelectedItem.language,
      contactIsNotAccepted: false,
      simpleRejectForVoice: this.selectedChannel === _core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_4__.CHANNEL_CONSTANTS.IVRR,
      multiple: true,
      selectedItems: this.selectionService.selectedItems
    });
    modal.confirm.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.takeUntil)(this.destroyed$)).subscribe(payload => this.rejectMultipleStories(payload));
  }
  onAssignSelectedStories() {
    this.audioService.stopAudio();
    const modal = this.modalService.open(_shared_components_assign_moderator_modal_assign_moderator_form_assign_moderator_form_component__WEBPACK_IMPORTED_MODULE_7__.AssignModeratorFormComponent, {
      hasAuthor: false,
      type: 'story',
      channel: this.selectedChannel,
      languageCode: this.selectionService.firstSelectedItem.language,
      contactIsNotAccepted: false,
      simpleRejectForVoice: this.selectedChannel === _core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_4__.CHANNEL_CONSTANTS.IVRR,
      multiple: true,
      selectedItems: this.selectionService.selectedItems
    });
    modal.confirm.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.takeUntil)(this.destroyed$)).subscribe(payload => this.assignMultipleStories(payload));
  }
  rejectStory(payload, storyId) {
    const handleResponseError = () => {
      this.storyDetailsService.backToStoriesListWithoutStory(storyId);
      this.toastr.error(this.translateService.instant(`admin.story.toast.rejected.error.title`), this.translateService.instant('admin.story.toast.rejected.error.subtitle'));
    };
    this.storyService.rejectStoryModerator(storyId, payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.takeUntil)(this.destroyed$)).subscribe(res => {
      if (res.success) {
        const loadedStories = this.storiesService.listElements$.getValue();
        const foundRejectedStoryIndex = loadedStories.findIndex(story => story.id === storyId);
        if (foundRejectedStoryIndex >= 0) {
          loadedStories[foundRejectedStoryIndex].isRejected = true;
        }
        this.storiesService.setNewListItems(loadedStories, null, true);
      } else {
        handleResponseError();
      }
    }, () => {
      handleResponseError();
    });
  }
  rejectMultipleStories(payload) {
    const handleResponseError = () => {
      this.toastr.error(this.translateService.instant(`admin.story.toast.rejected.error.title`), this.translateService.instant('admin.story.toast.rejected.error.subtitle'));
    };
    const selectedItems = this.selectionService.selectedItems$.getValue();
    this.storyService.rejectStoriesModerator({
      storiesToReject: selectedItems.map(item => {
        return {
          reasonIds: payload.reasonIds,
          reasonTexts: payload.reasonTexts,
          rationale: payload.rationale,
          notificationLanguage: item.language,
          storyId: item.id
        };
      })
    }).subscribe(res => {
      const loadedStories = this.storiesService.listElements$.getValue();
      res.rejectedStoryIds.forEach(rejectedStoryId => {
        const foundRejectedStoryIndex = loadedStories.findIndex(story => story.id === rejectedStoryId);
        if (foundRejectedStoryIndex >= 0) {
          loadedStories[foundRejectedStoryIndex].isRejected = true;
          loadedStories[foundRejectedStoryIndex].selected = false;
        }
      });
      this.storiesService.setNewListItems(loadedStories, null, true);
      this.selectionService.selectedItems$.next([]);
    }, () => {
      handleResponseError();
    });
  }
  assignMultipleStories(payload) {
    const {
      assignedItems,
      moderatorId
    } = payload;
    this.storyService.assignStoryToModerators({
      id: moderatorId,
      storyIds: assignedItems
    }).subscribe({
      next: response => this.handleSuccessfulAssignment(response),
      error: () => this.handleAssignmentError()
    });
  }
  handleSuccessfulAssignment(response) {
    const {
      assignedModerator,
      assignedStoriesIds
    } = response;
    const isMultipleStories = assignedStoriesIds.length > 1;
    const storyCountLabel = isMultipleStories ? 'Stories' : 'Story';
    const translationParams = {
      nickname: assignedModerator.nickname,
      storyCount: storyCountLabel
    };
    const successTitle = this.translateService.instant('admin.story.toast.assignedToModerator.success.title', translationParams);
    const successSubtitle = this.translateService.instant('admin.story.toast.assignedToModerator.success.subtitle', translationParams);
    this.toastr.success(successSubtitle, successTitle);
    const updatedStories = this.updateAssignedStories(assignedStoriesIds, assignedModerator.nickname);
    this.storiesService.setNewListItems(updatedStories, null, true);
    this.selectionService.selectedItems$.next([]);
  }
  handleAssignmentError() {
    this.toastr.error(this.translateService.instant(`admin.story.toast.assignedToModerator.error.title`), this.translateService.instant(`admin.story.toast.assignedToModerator.error.subtitle`));
  }
  updateAssignedStories(assignedStoryIds, moderatorName) {
    const loadedStories = this.storiesService.listElements$.getValue();
    assignedStoryIds.forEach(storyId => {
      const storyIndex = loadedStories.findIndex(story => story.id === storyId);
      if (storyIndex >= 0) {
        Object.assign(loadedStories[storyIndex], {
          moderatorName,
          selected: false
        });
      }
    });
    return loadedStories;
  }
  static #_ = this.ɵfac = function StoriesListComponent_Factory(t) {
    return new (t || StoriesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_8__.UIService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_modules_inbox_stories_stories_service__WEBPACK_IMPORTED_MODULE_9__.StoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_31__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_31__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_modules_inbox_inbox_filters_service__WEBPACK_IMPORTED_MODULE_10__.InboxFiltersService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_core_services_modal_modal_v2_service__WEBPACK_IMPORTED_MODULE_11__.ModalServiceV2), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_modules_inbox_stories_story_details_story_details_service__WEBPACK_IMPORTED_MODULE_12__.StoryDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_33__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_core_services_api_story_story_service__WEBPACK_IMPORTED_MODULE_13__.StoryService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_shared_components_audio_player_audio_service__WEBPACK_IMPORTED_MODULE_14__.AudioService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_pagination_selection_service__WEBPACK_IMPORTED_MODULE_15__.SelectionService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_core_services_filters_filters_service__WEBPACK_IMPORTED_MODULE_16__.FiltersService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineComponent"]({
    type: StoriesListComponent,
    selectors: [["app-stories-list"]],
    viewQuery: function StoriesListComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵloadQuery"]()) && (ctx.mobileSelection = _t.first);
      }
    },
    hostBindings: function StoriesListComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("scroll", function StoriesListComponent_scroll_HostBindingHandler() {
          return ctx.onWindowScroll();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresolveWindow"]);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵInheritDefinitionFeature"]],
    decls: 11,
    vars: 9,
    consts: [[1, "inbox-list-container"], [4, "ngIf", "ngIfElse"], ["desktopTable", ""], ["infiniteScroll", "", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "fromRoot", "scrolled", 4, "ngIf"], ["class", "inbox-list-container__loading", 4, "ngIf"], ["class", "inbox-list-container__no-more-results", 4, "ngIf"], ["sensitiveTag", ""], [1, "selection"], ["mobileSelection", ""], [3, "storyServiceData", "header", "mobile", "selectAllChanged", "rejectSelectedStories", "assignSelectedStories"], [3, "columns", "itemsInRow", "list", "additionalRowClassCondition", "showCustomActions", "noPadding", "actionClick"], [4, "loopMobileCell"], [1, "item"], [1, "header"], [1, "main"], [1, "content"], [3, "checked", "disabled", "v2", "alwaysRenderCheckmark", "click"], ["class", "audio-player", 4, "ngIf", "ngIfElse"], ["otherChannelTemplate", ""], ["src", "assets/icons/trash.svg", 1, "trash", 3, "click"], [1, "footer", 3, "click"], [1, "status"], [3, "src"], [1, "date"], ["class", "flag", "loading", "lazy", 3, "src", 4, "ngIf"], [1, "description"], [1, "channel"], ["loading", "lazy", 1, "channel-icon", 3, "src"], [1, "length"], ["class", "assigned-to-tag", 4, "ngIf"], [3, "ngTemplateOutlet", 4, "ngIf"], [1, "audio-player"], [3, "isSimplePlayer", "s3FileId"], [1, "story-content"], ["loading", "lazy", 1, "flag", 3, "src"], [1, "assigned-to-tag"], [3, "ngTemplateOutlet"], ["class", "table-header", 4, "ngIf"], ["mat-table", "", "class", "inbox-table", 3, "dataSource", 4, "ngIf"], [1, "table-footer"], [3, "totalItems", "header", 4, "ngIf"], [1, "table-header"], [3, "storyServiceData", "header", "selectAllChanged", "rejectSelectedStories", "assignSelectedStories"], [1, "inbox-list-container__loading"], ["mat-table", "", 1, "inbox-table", 3, "dataSource"], ["matColumnDef", "recording"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "item", 3, "selected", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "rejected", "lastVisitedId", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 1, "item"], [1, "footer"], ["mat-header-row", ""], ["mat-row", "", 3, "click"], [3, "totalItems", "header"], ["infiniteScroll", "", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "fromRoot", "scrolled"], [1, "inbox-list-container__no-more-results"], [1, "sensitive-tag"], ["src", "assets/icons/lock.svg"]],
    template: function StoriesListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](1, StoriesListComponent_ng_container_1_Template, 7, 11, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](2, StoriesListComponent_ng_template_2_Template, 9, 12, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](4, StoriesListComponent_div_4_Template, 1, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](5, StoriesListComponent_div_5_Template, 4, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](7, StoriesListComponent_div_7_Template, 4, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](9, StoriesListComponent_ng_template_9_Template, 5, 3, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx.ui.mobileView)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx.ui.mobileView);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](6, 5, ctx.ui.mobileView && ctx.storiesService.isLoading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](8, 7, ctx.storiesService.noMoreItems$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_34__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_34__.NgTemplateOutlet, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_35__.InfiniteScrollDirective, _shared_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_17__.CheckboxComponent, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_36__.MatLegacyTable, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_36__.MatLegacyHeaderCellDef, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_36__.MatLegacyHeaderRowDef, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_36__.MatLegacyColumnDef, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_36__.MatLegacyCellDef, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_36__.MatLegacyRowDef, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_36__.MatLegacyHeaderCell, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_36__.MatLegacyCell, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_36__.MatLegacyHeaderRow, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_36__.MatLegacyRow, _shared_components_mobile_table_mobile_table_component__WEBPACK_IMPORTED_MODULE_18__.MobileTableComponent, _shared_components_mobile_table_mobile_cell_directive__WEBPACK_IMPORTED_MODULE_19__.MobileCellDirective, _shared_components_audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_20__.AudioPlayerComponent, _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_21__.PaginationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_34__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_34__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__.TranslatePipe, _shared_pipes_channel_pipe__WEBPACK_IMPORTED_MODULE_22__.ChannelPipe, _shared_pipes_country_flag_src_pipe__WEBPACK_IMPORTED_MODULE_23__.CountryFlagSrcPipe, _shared_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_24__.DurationPipe, _shared_pipes_channel_image_src_pipe__WEBPACK_IMPORTED_MODULE_25__.ChannelImageSrcPipe, _shared_pipes_word_count_pipe__WEBPACK_IMPORTED_MODULE_26__.WordCountPipe],
    styles: ["[_nghost-%COMP%]     .mat-row.rejected {\n  pointer-events: none;\n  opacity: 0.4;\n}\n[_nghost-%COMP%]     .mobile-table-item.rejected {\n  pointer-events: none;\n  opacity: 0.4;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%]:last-of-type, td.mat-cell[_ngcontent-%COMP%]:last-of-type, td.mat-footer-cell[_ngcontent-%COMP%]:last-of-type, th.mat-header-cell[_ngcontent-%COMP%]:first-of-type, td.mat-cell[_ngcontent-%COMP%]:first-of-type, td.mat-footer-cell[_ngcontent-%COMP%]:first-of-type {\n  padding-right: 0;\n  padding-left: 0;\n}\n\ntr.mat-header-row[_ngcontent-%COMP%] {\n  height: 0;\n}\n\n.selection[_ngcontent-%COMP%] {\n  width: 100%;\n  position: fixed;\n  top: 65px;\n  z-index: 1;\n  display: none;\n}\n\n.item[_ngcontent-%COMP%] {\n  color: #656565;\n  border: 2px solid transparent;\n}\n.item[_ngcontent-%COMP%]:hover   .footer[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]:active   .footer[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]:focus   .footer[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n@media (min-width: 768px) {\n  .item[_ngcontent-%COMP%]   .trash[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n  .item[_ngcontent-%COMP%]:hover   .trash[_ngcontent-%COMP%] {\n    visibility: visible;\n    cursor: pointer;\n  }\n}\n.item.selected[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  background-color: #f3f7f3;\n  border: 2px solid #6d9a6e;\n  color: #6d9a6e;\n  transition: background-color 0.2s, border 0.2s, color 0.2s;\n}\n.item.selected[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.item[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  box-sizing: border-box;\n  border-bottom: 1px solid #dbdbdb;\n}\n.item[_ngcontent-%COMP%]   .header.selected[_ngcontent-%COMP%] {\n  border-color: #6d9a6e;\n  transition: border-color 0.2s;\n}\n@media (max-width: 767.9px) {\n  .item[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n    justify-content: center;\n    padding: 12px 16px 8px 16px;\n  }\n}\n.item[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .trash[_ngcontent-%COMP%]:hover {\n  border-radius: 16px;\n  background-color: #f5d5db;\n}\n.item[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .trash[_ngcontent-%COMP%]:focus {\n  border-radius: 16px;\n  background-color: #f5d5db;\n  box-shadow: 0px 0px 8px 0px #2072ec;\n}\n.item[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .trash[_ngcontent-%COMP%]:active {\n  border-radius: 16px;\n  background-color: #eda1af;\n}\n@media (max-width: 767.9px) {\n  .item[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .trash[_ngcontent-%COMP%] {\n    height: 20px;\n    width: 20px;\n  }\n}\n.item[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.item[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 7px;\n  width: 480px;\n  font-size: 16px;\n  line-height: 24px;\n}\n@media (max-width: 767.9px) {\n  .item[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    width: 100%;\n    white-space: normal;\n    overflow: auto;\n    font-size: 14px;\n    line-height: 20px;\n    gap: 0;\n    align-items: flex-start;\n  }\n}\n.item[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .story-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: initial;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n}\n@media (max-width: 767.9px) {\n  .item[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .story-content[_ngcontent-%COMP%] {\n    -webkit-line-clamp: 3;\n  }\n}\n.item[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  line-height: 20px;\n  min-width: 200px;\n  margin-right: 32px;\n}\nhtml:not([dir=rtl])[_nghost-%COMP%]   .item[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .item[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n}\nhtml[dir=rtl][_nghost-%COMP%]   .item[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .item[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 0.25rem;\n}\n.item[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 16px 12px 56px;\n  box-sizing: border-box;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 16px;\n}\n@media (max-width: 767.9px) {\n  .item[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n    padding: 8px 16px 12px 16px;\n    flex-direction: column;\n    gap: 8px;\n  }\n  html:not([dir=rtl])[_nghost-%COMP%]   .item[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .item[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n    margin-left: 32px;\n  }\n  html[dir=rtl][_nghost-%COMP%]   .item[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .item[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n    margin-right: 32px;\n  }\n}\n.item[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n@media (max-width: 767.9px) {\n  .item[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 16px;\n  }\n}\n.item[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .channel[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.item[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .channel[_ngcontent-%COMP%]   .channel-icon.selected[_ngcontent-%COMP%] {\n  filter: brightness(0) saturate(100%) invert(33%) sepia(30%) saturate(1075%) hue-rotate(222deg) brightness(92%) contrast(84%);\n}\n.item[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n@media (max-width: 767.9px) {\n  .item[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 16px;\n    gap: 4px;\n  }\n}\n.item[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  opacity: 0.5;\n}\n.item[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  min-width: 106px;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.table-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  height: 32px;\n  margin: 16px 0 8px 0;\n  width: 100%;\n}\n\n.table-footer[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.mat-column-status[_ngcontent-%COMP%] {\n  flex-wrap: nowrap !important;\n}\n\n.reject-button[_ngcontent-%COMP%] {\n  outline: 0;\n  border: 0;\n  background-color: transparent;\n  font-size: 1rem;\n  font-weight: 700;\n  line-height: 1.5rem;\n  color: #b21d39;\n  cursor: pointer;\n}\n.reject-button[_ngcontent-%COMP%]:hover, .reject-button[_ngcontent-%COMP%]:focus {\n  text-decoration: underline;\n}\n\n.voice-actions--mobile[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n}\n\n.audio-player[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n@media (max-width: 767.9px) {\n  .audio-player[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n\n.story-content[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.sensitive-tag[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0px 8px;\n  align-items: center;\n  gap: 4px;\n  border-radius: 100px;\n  background-color: #f5d5db;\n  font-size: 12px;\n  line-height: 16px;\n  color: #8c1128;\n}\n@media (max-width: 767.9px) {\n  .sensitive-tag[_ngcontent-%COMP%] {\n    display: flex;\n    padding: 0px 4px;\n    align-items: center;\n    gap: 2px;\n  }\n  .sensitive-tag[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 8px;\n    height: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JpZXMtbGlzdC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3N0eWxlcy9sb29wLWRlc2lnbi1zeXN0ZW0tdjIvX2NvbG9ycy5zY3NzIiwiLi4vLi4vLi4vLi4vc3R5bGVzL19taXhpbnMuc2NzcyIsIi4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0k7RUFDRSxvQkFBQTtFQUNBLFlBQUE7QUFOTjtBQVNJO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0FBUE47O0FBWUE7Ozs7OztFQU1FLGdCQUFBO0VBQ0EsZUFBQTtBQVRGOztBQVlBO0VBQ0UsU0FBQTtBQVRGOztBQVlBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFURjs7QUFZQTtFQUNFLGNDRVk7RUREWiw2QkFBQTtBQVRGO0FBY0k7RUFDRSxVQUFBO0FBWk47QUU4SkU7RUY3SUU7SUFDRSxrQkFBQTtFQWRKO0VBa0JJO0lBQ0UsbUJBQUE7SUFDQSxlQUFBO0VBaEJOO0FBQ0Y7QUFvQkU7RUFDRSxrQkFBQTtFQUNBLHlCR3ZDYTtFSHdDYix5QkFBQTtFQUNBLGNHOUNhO0VIK0NiLDBEQUFBO0FBbEJKO0FBb0JJO0VBQ0UsVUFBQTtBQWxCTjtBQXNCRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtBQXBCSjtBQXNCSTtFQUNFLHFCRy9EVztFSGdFWCw2QkFBQTtBQXBCTjtBRW1IRTtFRnpHQTtJQWFJLHVCQUFBO0lBQ0EsMkJBQUE7RUFuQko7QUFDRjtBQXNCTTtFQUNFLG1CQUFBO0VBQ0EseUJDN0NjO0FEeUJ0QjtBQXVCTTtFQUNFLG1CQUFBO0VBQ0EseUJDbERjO0VEbURkLG1DQUFBO0FBckJSO0FBd0JNO0VBQ0UsbUJBQUE7RUFDQSx5QkN2RGM7QURpQ3RCO0FFZ0dFO0VGeEZFO0lBa0JJLFlBQUE7SUFDQSxXQUFBO0VBdEJOO0FBQ0Y7QUF5Qkk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FBdkJOO0FBd0JNO0VBQ0UsYUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBdEJSO0FFOEVFO0VGN0RJO0lBUUksV0FBQTtJQUNBLG1CQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLE1BQUE7SUFDQSx1QkFBQTtFQXJCUjtBQUNGO0FBdUJRO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0FBckJWO0FFMkRFO0VGNUNNO0lBU0kscUJBQUE7RUFwQlY7QUFDRjtBQXdCTTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUF0QlI7QUUvRkU7RUEwQ0kscUJGOEUwQjtBQXRCaEM7QUU1RkU7RUF3Q0ksb0JGMEUwQjtBQW5CaEM7QUF5QkU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBdkJKO0FFOEJFO0VGZkE7SUFXSSwyQkFBQTtJQUNBLHNCQUFBO0lBQ0EsUUFBQTtFQXRCSjtFRXJIQTtJQTBDSSxpQkZrR3FCO0VBcEJ6QjtFRWxIQTtJQXdDSSxrQkY4RnFCO0VBakJ6QjtBQUNGO0FBbUJJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUFqQk47QUVXRTtFRkVFO0lBT0ksZUFBQTtJQUNBLGlCQUFBO0VBaEJOO0FBQ0Y7QUFrQk07RUFDRSxhQUFBO0VBQ0EsUUFBQTtBQWhCUjtBQWtCUTtFQUNFLDRIQUFBO0FBaEJWO0FBcUJJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQW5CTjtBRVBFO0VGdUJFO0lBTUksZUFBQTtJQUNBLGlCQUFBO0lBQ0EsUUFBQTtFQWxCTjtBQUNGO0FBb0JNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBbEJSO0FBcUJNO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFuQlI7O0FBeUJBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQXRCRjs7QUF5QkE7RUFDRSxlQUFBO0FBdEJGOztBQXlCQTtFQUNFLDRCQUFBO0FBdEJGOztBQXlCQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNHeEd5QjtFSHlHekIsZUFBQTtBQXRCRjtBQXdCRTtFQUVFLDBCQUFBO0FBdkJKOztBQTJCQTtFQUNFLG1CQUFBO0FBeEJGOztBQTJCQTtFQUNFLGFBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7QUF4QkY7QUVoRUU7RUZxRkY7SUFNSSxXQUFBO0lBQ0EsdUJBQUE7RUF2QkY7QUFDRjs7QUEwQkE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUF2QkY7O0FBMEJBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkM5T29CO0VEK09wQixlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQzVPb0I7QURxTnRCO0FFeEZFO0VGc0dGO0lBWUksYUFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxRQUFBO0VBdEJGO0VBd0JFO0lBQ0UsVUFBQTtJQUNBLFdBQUE7RUF0Qko7QUFDRiIsImZpbGUiOiJzdG9yaWVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdsb29wLWRlc2lnbi1zeXN0ZW0vaGVscGVycyc7XG5AaW1wb3J0ICdtaXhpbnMnO1xuQGltcG9ydCAndmFyaWFibGVzJztcbkBpbXBvcnQgJ2xvb3AtZGVzaWduLXN5c3RlbS12Mi9jb2xvcnMnO1xuXG46aG9zdCB7XG4gIDo6bmctZGVlcCB7XG4gICAgLm1hdC1yb3cucmVqZWN0ZWQge1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgfVxuXG4gICAgLm1vYmlsZS10YWJsZS1pdGVtLnJlamVjdGVkIHtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgb3BhY2l0eTogMC40O1xuICAgIH1cbiAgfVxufVxuXG50aC5tYXQtaGVhZGVyLWNlbGw6bGFzdC1vZi10eXBlLFxudGQubWF0LWNlbGw6bGFzdC1vZi10eXBlLFxudGQubWF0LWZvb3Rlci1jZWxsOmxhc3Qtb2YtdHlwZSxcbnRoLm1hdC1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlLFxudGQubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSxcbnRkLm1hdC1mb290ZXItY2VsbDpmaXJzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG50ci5tYXQtaGVhZGVyLXJvdyB7XG4gIGhlaWdodDogMDtcbn1cblxuLnNlbGVjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNjVweDtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLml0ZW0ge1xuICBjb2xvcjogJG5ldXRyYWwtNTAwO1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcblxuICAmOmhvdmVyLFxuICAmOmFjdGl2ZSxcbiAgJjpmb2N1cyB7XG4gICAgLmZvb3RlciAuZGF0ZSAuZmxhZyB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuXG4gIEBpbmNsdWRlIG1vYmlsZS11cCB7XG4gICAgLnRyYXNoIHtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIC50cmFzaCB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLnNlbGVjdGVkIHtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyZWVuLTEwO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRjb2xvci1ncmVlbi02MDtcbiAgICBjb2xvcjogJGNvbG9yLWdyZWVuLTYwO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycywgYm9yZGVyIDAuMnMsIGNvbG9yIDAuMnM7XG5cbiAgICAuZm9vdGVyIC5kYXRlIC5mbGFnIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG5cbiAgLmhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbmV1dHJhbC0xMDA7XG5cbiAgICAmLnNlbGVjdGVkIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLWdyZWVuLTYwO1xuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnM7XG4gICAgfVxuICAgIEBpbmNsdWRlIG1vYmlsZS1vbmx5IHtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgcGFkZGluZzogMTJweCAxNnB4IDhweCAxNnB4O1xuICAgIH1cblxuICAgIC50cmFzaCB7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRlc3RydWN0aXZlLXJlZC0xMDA7XG4gICAgICB9XG5cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGVzdHJ1Y3RpdmUtcmVkLTEwMDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggMHB4ICMyMDcyZWM7XG4gICAgICB9XG5cbiAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRlc3RydWN0aXZlLXJlZC0yMDA7XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIG1vYmlsZS1vbmx5IHtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWFpbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAuY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogN3B4O1xuICAgICAgICB3aWR0aDogNDgwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG5cbiAgICAgICAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIGdhcDogMDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdG9yeS1jb250ZW50IHtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBpbml0aWFsO1xuICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuXG4gICAgICAgICAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuc3RhdHVzIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgQGluY2x1ZGUgbWFyZ2luLXJpZ2h0KHB4VG9SZW0oNCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmZvb3RlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMTJweCAxNnB4IDEycHggNTZweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuXG4gICAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgICAgcGFkZGluZzogOHB4IDE2cHggMTJweCAxNnB4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoMzJweCk7XG4gICAgfVxuXG4gICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA4cHg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgIEBpbmNsdWRlIG1vYmlsZS1vbmx5IHtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgIH1cblxuICAgICAgLmNoYW5uZWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDRweDtcblxuICAgICAgICAuY2hhbm5lbC1pY29uLnNlbGVjdGVkIHtcbiAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDMzJSkgc2VwaWEoMzAlKSBzYXR1cmF0ZSgxMDc1JSkgaHVlLXJvdGF0ZSgyMjJkZWcpIGJyaWdodG5lc3MoOTIlKSBjb250cmFzdCg4NCUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRhdGUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcblxuICAgICAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICBnYXA6IDRweDtcbiAgICAgIH1cblxuICAgICAgLmZsYWcge1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICB9XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBtaW4td2lkdGg6IDEwNnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udGFibGUtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBtYXJnaW46IDE2cHggMCA4cHggMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50YWJsZS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5tYXQtY29sdW1uLXN0YXR1cyB7XG4gIGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7XG59XG5cbi5yZWplY3QtYnV0dG9uIHtcbiAgb3V0bGluZTogMDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiBweFRvUmVtKDE2KTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IHB4VG9SZW0oMjQpO1xuICBjb2xvcjogJHRvYXN0LWVycm9yLWJ1dHRvbi1jb2xvcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG59XG5cbi52b2ljZS1hY3Rpb25zLS1tb2JpbGUge1xuICBtYXJnaW4tdG9wOiBweFRvUmVtKDIwKTtcbn1cblxuLmF1ZGlvLXBsYXllciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIEBpbmNsdWRlIG1vYmlsZS1vbmx5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuXG4uc3RvcnktY29udGVudCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uc2Vuc2l0aXZlLXRhZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDBweCA4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRlc3RydWN0aXZlLXJlZC0xMDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGNvbG9yOiAkZGVzdHJ1Y3RpdmUtcmVkLTYwMDtcblxuICBAaW5jbHVkZSBtb2JpbGUtb25seSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAwcHggNHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAycHg7XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDhweDtcbiAgICAgIGhlaWdodDogOHB4O1xuICAgIH1cbiAgfVxufVxuIiwiLy8vLyBCcmFuZCBjb2xvcnNcbi8vIFByaW1hcnlcbiRsb29wLXB1cnBsZS0xMDA6ICNlYWU2ZjA7XG4kbG9vcC1wdXJwbGUtMjAwOiAjZDZkMGRmO1xuJGxvb3AtcHVycGxlLTMwMDogI2JhYWJkMDtcbiRsb29wLXB1cnBsZS00MDA6ICM4NjZhYjA7XG4kbG9vcC1wdXJwbGUtNTAwOiAjNmM0ZTk5O1xuJGxvb3AtcHVycGxlLTYwMDogIzRhMmI3YTtcbiRsb29wLXB1cnBsZS03MDA6ICMzMTEzNWU7XG4kbG9vcC1wdXJwbGUtODAwOiAjMjYxMDQ3O1xuXG5cbi8vIEdyZWVuc1xuJGxvb3AtZ3JlZW4tMTAwOiAjZTZmMGU5O1xuJGxvb3AtZ3JlZW4tMjAwOiAjYzBkOWNlO1xuJGxvb3AtZ3JlZW4tMzAwOiAjOTNiOWIwO1xuJGxvb3AtZ3JlZW4tNDAwOiAjNTM4YzgwO1xuJGxvb3AtZ3JlZW4tNTAwOiAjMjY2OTVjO1xuJGxvb3AtZ3JlZW4tNjAwOiAjMDA0NzNkO1xuJGxvb3AtZ3JlZW4tNzAwOiAjMDAzMjJiO1xuJGxvb3AtZ3JlZW4tODAwOiAjMDAyMTFjO1xuXG4vLyBFeGFtcGxlOlxuLy8gbWFwLmdldCgkbG9vcC1wdXJwbGVzLCAnNjAwJyk7XG5cbi8vIEFjdGlvblxuJGFjdGlvbi10ZWFsLTEwMDogI2Q5ZWVlZDtcbiRhY3Rpb24tdGVhbC0yMDA6ICNhMWQ0ZDI7XG4kYWN0aW9uLXRlYWwtMzAwOiAjNjliYmI4O1xuJGFjdGlvbi10ZWFsLTQwMDogIzAwODU3ZDtcbiRhY3Rpb24tdGVhbC01MDA6ICMwMTY5NjU7XG4kYWN0aW9uLXRlYWwtNjAwOiAjMDA1NzU0O1xuJGFjdGlvbi10ZWFsLTcwMDogIzAwNDU0MjtcbiRhY3Rpb24tdGVhbC04MDA6ICMwMTMyMzA7XG5cbi8vIEV4YW1wbGU6XG4vLyBtYXAuZ2V0KCRhY3Rpb24tdGVhbHMsICc2MDAnKTtcblxuLy8gTmV1dHJhbFxuJG5ldXRyYWwtMDAwOiAjZmZmZmZmO1xuJG5ldXRyYWwtMDUwOiAjZjFmMmYyO1xuJG5ldXRyYWwtMTAwOiAjZGJkYmRiO1xuJG5ldXRyYWwtMzAwOiAjYjZiNmI2O1xuJG5ldXRyYWwtNDAwOiAjOTI5MjkyO1xuJG5ldXRyYWwtNTAwOiAjNjU2NTY1O1xuJG5ldXRyYWwtNzAwOiAjNDk0OTQ5O1xuJG5ldXRyYWwtODAwOiAjMWExYTFhO1xuXG4vLyBFeGFtcGxlOlxuLy8gbWFwLmdldCgkbmV1dHJhbHMsICc2MDAnKTtcblxuLy8vLyBTZW1hbnRpYyBDb2xvcnNcbi8vIERhbmdlclxuJGRlc3RydWN0aXZlLXJlZC0xMDA6ICNmNWQ1ZGI7XG4kZGVzdHJ1Y3RpdmUtcmVkLTIwMDogI2VkYTFhZjtcbiRkZXN0cnVjdGl2ZS1yZWQtMzAwOiAjZTM2ZDgzO1xuJGRlc3RydWN0aXZlLXJlZC00MDA6ICNjMjMwNGI7XG4kZGVzdHJ1Y3RpdmUtcmVkLTUwMDogI2IyMWQzOTtcbiRkZXN0cnVjdGl2ZS1yZWQtNjAwOiAjOGMxMTI4O1xuJGRlc3RydWN0aXZlLXJlZC03MDA6ICM3MzAwMTU7XG4kZGVzdHJ1Y3RpdmUtcmVkLTgwMDogIzQ1MDYxMTtcblxuLy8gQWxlcnRcbiRhbGVydC1nb2xkLTEwMDogI2ZmZjFkNTtcbiRhbGVydC1nb2xkLTIwMDogI2Y3ZGE5ZTtcbiRhbGVydC1nb2xkLTMwMDogI2Y4YzQ1YjtcbiRhbGVydC1nb2xkLTQwMDogI2U4YWIzMTtcbiRhbGVydC1nb2xkLTUwMDogI2NjOGYxNDtcbiRhbGVydC1nb2xkLTYwMDogI2NjOGYxNDtcbiRhbGVydC1nb2xkLTcwMDogIzZiNDcwMDtcbiRhbGVydC1nb2xkLTgwMDogIzQyMmMwMDtcblxuLy8gRW1waGFzaXNcbiRlbXBoYXNpcy1ibHVlLTEwMDogI2Q5ZThmZjtcbiRlbXBoYXNpcy1ibHVlLTIwMDogI2E4Y2JmZjtcbiRlbXBoYXNpcy1ibHVlLTMwMDogIzgwYjJmZjtcbiRlbXBoYXNpcy1ibHVlLTQwMDogIzUzOTdmYztcbiRlbXBoYXNpcy1ibHVlLTUwMDogIzIwNzJlYztcbiRlbXBoYXNpcy1ibHVlLTYwMDogIzA0NTZkMTtcbiRlbXBoYXNpcy1ibHVlLTcwMDogIzAwM2M5NjtcbiRlbXBoYXNpcy1ibHVlLTgwMDogIzAwMWQ0NztcblxuJGxvb3AtcHVycGxlczogKFxuICAnMTAwJzogJGxvb3AtcHVycGxlLTEwMCxcbiAgJzIwMCc6ICRsb29wLXB1cnBsZS0yMDAsXG4gICczMDAnOiAkbG9vcC1wdXJwbGUtMzAwLFxuICAnNDAwJzogJGxvb3AtcHVycGxlLTQwMCxcbiAgJzUwMCc6ICRsb29wLXB1cnBsZS01MDAsXG4gICc2MDAnOiAkbG9vcC1wdXJwbGUtNjAwLFxuICAnNzAwJzogJGxvb3AtcHVycGxlLTcwMCxcbiAgJzgwMCc6ICRsb29wLXB1cnBsZS04MDAsXG4pO1xuXG4kbG9vcC1ncmVlbnM6IChcbiAgJzEwMCc6ICRsb29wLWdyZWVuLTEwMCxcbiAgJzIwMCc6ICRsb29wLWdyZWVuLTIwMCxcbiAgJzMwMCc6ICRsb29wLWdyZWVuLTMwMCxcbiAgJzQwMCc6ICRsb29wLWdyZWVuLTQwMCxcbiAgJzUwMCc6ICRsb29wLWdyZWVuLTUwMCxcbiAgJzYwMCc6ICRsb29wLWdyZWVuLTYwMCxcbiAgJzcwMCc6ICRsb29wLWdyZWVuLTcwMCxcbiAgJzgwMCc6ICRsb29wLWdyZWVuLTgwMCxcbik7XG5cbiRhY3Rpb24tdGVhbHM6IChcbiAgJzEwMCc6ICRhY3Rpb24tdGVhbC0xMDAsXG4gICcyMDAnOiAkYWN0aW9uLXRlYWwtMjAwLFxuICAnMzAwJzogJGFjdGlvbi10ZWFsLTMwMCxcbiAgJzQwMCc6ICRhY3Rpb24tdGVhbC00MDAsXG4gICc1MDAnOiAkYWN0aW9uLXRlYWwtNTAwLFxuICAnNjAwJzogJGFjdGlvbi10ZWFsLTYwMCxcbiAgJzcwMCc6ICRhY3Rpb24tdGVhbC03MDAsXG4gICc4MDAnOiAkYWN0aW9uLXRlYWwtODAwLFxuKTtcblxuJG5ldXRyYWxzOiAoXG4gICcwMDAnOiAkbmV1dHJhbC0wMDAsXG4gICcwNTAnOiAkbmV1dHJhbC0wNTAsXG4gICcxMDAnOiAkbmV1dHJhbC0xMDAsXG4gICczMDAnOiAkbmV1dHJhbC0zMDAsXG4gICc0MDAnOiAkbmV1dHJhbC00MDAsXG4gICc1MDAnOiAkbmV1dHJhbC01MDAsXG4gICc3MDAnOiAkbmV1dHJhbC03MDAsXG4gICc4MDAnOiAkbmV1dHJhbC04MDAsXG4pO1xuXG4kZGVzdHJ1Y3RpdmUtcmVkczogKFxuICAnMTAwJzogJGRlc3RydWN0aXZlLXJlZC0xMDAsXG4gICcyMDAnOiAkZGVzdHJ1Y3RpdmUtcmVkLTIwMCxcbiAgJzMwMCc6ICRkZXN0cnVjdGl2ZS1yZWQtMzAwLFxuICAnNDAwJzogJGRlc3RydWN0aXZlLXJlZC00MDAsXG4gICc1MDAnOiAkZGVzdHJ1Y3RpdmUtcmVkLTUwMCxcbiAgJzYwMCc6ICRkZXN0cnVjdGl2ZS1yZWQtNjAwLFxuICAnNzAwJzogJGRlc3RydWN0aXZlLXJlZC03MDAsXG4gICc4MDAnOiAkZGVzdHJ1Y3RpdmUtcmVkLTgwMCxcbik7XG5cbiRhbGVydC1nb2xkczogKFxuICAnMTAwJzogJGFsZXJ0LWdvbGQtMTAwLFxuICAnMjAwJzogJGFsZXJ0LWdvbGQtMjAwLFxuICAnMzAwJzogJGFsZXJ0LWdvbGQtMzAwLFxuICAnNDAwJzogJGFsZXJ0LWdvbGQtNDAwLFxuICAnNTAwJzogJGFsZXJ0LWdvbGQtNTAwLFxuICAnNjAwJzogJGFsZXJ0LWdvbGQtNjAwLFxuICAnNzAwJzogJGFsZXJ0LWdvbGQtNzAwLFxuICAnODAwJzogJGFsZXJ0LWdvbGQtODAwLFxuKTtcblxuJGVtcGhhc2lzLWJsdWVzOiAoXG4gICcxMDAnOiAkZW1waGFzaXMtYmx1ZS0xMDAsXG4gICcyMDAnOiAkZW1waGFzaXMtYmx1ZS0yMDAsXG4gICczMDAnOiAkZW1waGFzaXMtYmx1ZS0zMDAsXG4gICc0MDAnOiAkZW1waGFzaXMtYmx1ZS00MDAsXG4gICc1MDAnOiAkZW1waGFzaXMtYmx1ZS01MDAsXG4gICc2MDAnOiAkZW1waGFzaXMtYmx1ZS02MDAsXG4gICc3MDAnOiAkZW1waGFzaXMtYmx1ZS03MDAsXG4gICc4MDAnOiAkZW1waGFzaXMtYmx1ZS04MDAsXG4pO1xuXG4kbG9vcC10aGVtZXM6IChcbiAgJ3ByaW1hcnknOiAkbG9vcC1ncmVlbnMsXG4gICdhY3Rpb24nOiAkYWN0aW9uLXRlYWxzLFxuICAnbmV1dHJhbCc6ICRuZXV0cmFscyxcbiAgJ2Rhbmdlcic6ICRkZXN0cnVjdGl2ZS1yZWRzLFxuICAnYWxlcnQnOiAkYWxlcnQtZ29sZHMsXG4gICdlbXBoYXNpcyc6ICRlbXBoYXNpcy1ibHVlcyxcbik7IiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIGZsZXgtZ2FwKCRnYXAsICRnbG9iYWw6IGZhbHNlKSB7XG4gIG1hcmdpbi10b3A6ICgtJGdhcCk7XG4gIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCgtJGdhcCksICRnbG9iYWwpO1xuXG4gID4gKiB7XG4gICAgbWFyZ2luLXRvcDogJGdhcDtcbiAgICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgkZ2FwLCAkZ2xvYmFsKTtcbiAgfVxufVxuXG5AbWl4aW4gYmFzZS1jb250YWluZXIoJGNvbnRlbnQtd2lkdGgpIHtcbiAgJGRlc2t0b3AtcGFkZGluZzogMnJlbTtcbiAgbWF4LXdpZHRoOiBjYWxjKCN7JGNvbnRlbnQtd2lkdGh9ICsgKCN7JGRlc2t0b3AtcGFkZGluZ30pKTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MnJlbSkge1xuICAgIEBpbmNsdWRlIHBhZGRpbmctbGVmdCgkZGVza3RvcC1wYWRkaW5nLCB0cnVlKTtcbiAgICBAaW5jbHVkZSBwYWRkaW5nLXJpZ2h0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICB9XG59XG5cbkBtaXhpbiBjZW50ZXJBYnNvbHV0ZUVsZW1lbnQge1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5AbWl4aW4gb25seS1sdHItZ2xvYmFsIHtcbiAgaHRtbDpub3QoW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bC1nbG9iYWwge1xuICBodG1sW2Rpcj0ncnRsJ10gJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktbHRyIHtcbiAgOmhvc3QtY29udGV4dChodG1sOm5vdChbZGlyPSdydGwnXSkpICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bCB7XG4gIDpob3N0LWNvbnRleHQoaHRtbFtkaXI9J3J0bCddKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gcnRsLXZhbHVlKCRwcm9wZXJ0eSwgJGx0ci12YWx1ZSwgJHJ0bC12YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGx0ci12YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHJ0bC12YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHJ0bC1wcm9wZXJ0eSgkbHRyLXByb3BlcnR5LCAkcnRsLXByb3BlcnR5LCAkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpZiAkZ2xvYmFsID09IHRydWUge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyLWdsb2JhbCB7XG4gICAgICAjeyRsdHItcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwtZ2xvYmFsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bCB7XG4gICAgICAjeyRydGwtcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXJnaW4tbGVmdCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLWxlZnQsIG1hcmdpbi1yaWdodCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBtYXJnaW4tcmlnaHQoJG1hcmdpbiwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KG1hcmdpbi1yaWdodCwgbWFyZ2luLWxlZnQsICRtYXJnaW4sICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZygkcGFkZGluZ1RvcCwgJHBhZGRpbmdSaWdodCwgJHBhZGRpbmdCb3R0b20sICRwYWRkaW5nTGVmdCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgcGFkZGluZy10b3A6ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZ1JpZ2h0LCAkZ2xvYmFsKTtcbiAgcGFkZGluZy1ib3R0b206ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZ0xlZnQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1sZWZ0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLXJpZ2h0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiB0ZXh0LWFsaWduLWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRleHQtYWxpZ24sIGxlZnQsIHJpZ2h0LCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGxlZnQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobGVmdCwgcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiByaWdodCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShyaWdodCwgbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRyYW5zbGF0ZVhZKCR2YWx1ZVgsICR2YWx1ZVksICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZSh0cmFuc2Zvcm0sIHRyYW5zbGF0ZSgkdmFsdWVYLCAkdmFsdWVZKSwgdHJhbnNsYXRlKC0kdmFsdWVYLCAkdmFsdWVZKSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItbGVmdCwgYm9yZGVyLXJpZ2h0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1yaWdodCwgYm9yZGVyLWxlZnQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCBib3JkZXItdG9wLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtbGVmdC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBmbG9hdC1sZWZ0KCRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZShmbG9hdCwgbGVmdCwgcmlnaHQsICRnbG9iYWw6IGZhbHNlKTtcbn1cblxuQG1peGluIGZsb2F0LXJpZ2h0IHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCByaWdodCwgbGVmdCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gc21hbGwtZGVza3RvcC1vbmx5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LWxnKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQteGwgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtYW5kLXRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc21hbGwtbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtcyAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LW1kIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtdXAge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gZGlzYWJsZS1zY3JvbGxiYXIge1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiIsIiRzdGFuZGFyZEZvbnRGYW1pbHk6ICdOb3RvIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRjb250ZW50LXRvcC1wYWRkaW5nOiAzcmVtO1xuJHBvc3QtbGlzdC1iZzogI2RhZGFkYTtcbiR3aGl0ZTogI2ZmZmZmZjtcbiRwb3N0LXByZXZpZXctYmc6IHdoaXRlO1xuJGxpZ2h0LWdyYXktYmc6ICNmNGY0ZjQ7XG4kcG9zdC1wcmV2aWV3LXBhZGRpbmctbGVmdDogMi4zNDRyZW07XG4kcG9zdC1wcmV2aWV3LXBhZGRpbmctcmlnaHQ6IDEuMDYzcmVtO1xuJHBvc3QtcHJldmlldy1wYWRkaW5nOiAyLjVyZW0gJHBvc3QtcHJldmlldy1wYWRkaW5nLXJpZ2h0IDEuMjVyZW0gJHBvc3QtcHJldmlldy1wYWRkaW5nLWxlZnQ7XG4kcG9zdC1wcmV2aWV3LXBhZGRpbmctbW9iaWxlOiAxcmVtIDFyZW0gMC41cmVtIDFyZW07XG4kcG9zdC1wYWRkaW5nLWJvdHRvbTogMXJlbTtcbiRwb3N0LXByZXZpZXctZ3V0dGVyOiAycHg7XG4kcG9zdC1oaWdobGlnaHQtY29sb3I6ICM1NzBmODU7XG4kY29sb3ItcHVycGxlLTkwOiAjMzExMzVlO1xuJGNvbG9yLXB1cnBsZS02MDogIzk4OGFhZTtcbiRjb2xvci1wdXJwbGUtNTA6ICM5ODg5YWY7XG4kY29sb3ItcHVycGxlLTEwOiAjZjVmM2Y3O1xuJGNvbG9yLXB1cnBsZS1saWdodDogIzRiMzViYztcbiRjb2xvci1wdXJwbGUtdmVyeS1saWdodDogIzg2NmFiMDtcbiRjb2xvci1wdXJwbGUtc3RlcHBlcjogIzRhMmI3YTtcbiRjb2xvci1ncmVlbi0xMDA6ICMwNTI4MDQ7XG4kY29sb3ItZ3JlZW4tOTA6ICMwZDNkMGI7XG4kY29sb3ItZ3JlZW4tODA6ICMxZjZiMWU7XG4kY29sb3ItZ3JlZW4tNzA6ICMzNThhMzQ7XG4kY29sb3ItZ3JlZW4tNjA6ICM2ZDlhNmU7XG4kY29sb3ItZ3JlZW4tNTA6ICM4OWE4OGY7XG4kY29sb3ItZ3JlZW4tNDA6ICM5ZmM4YTY7XG4kY29sb3ItZ3JlZW4tMzA6ICNhYWQ2YjM7XG4kY29sb3ItZ3JlZW4tMjA6ICNjOWU5ZDE7XG4kY29sb3ItZ3JlZW4tMTA6ICNmM2Y3ZjM7XG4kY29sb3ItZ3JlZW4tc3RlcHBlcjogIzEwN0Q3OTtcbiRjb2xvci1ncmVlbi1tZWRpdW06ICNhZGRhYWY7XG4kY29sb3ItZ3JlZW4tbGlnaHQ6ICMzQUIwOTg7XG4kY29sb3ItZ3JlZW4tdmVyeS1saWdodDogI0VERkZGQztcbiRncmV5LTE6ICNkNmQwZGY7XG4kc3VwcG9ydC0wMTogI2RhMWUyODtcbiRlcnJvcjogI2VlMjMyZjtcbiR0ZXh0LWJsYWNrOiAjMTYxNjE2O1xuJHRleHQtc2Vjb25kYXJ5OiAjMzkzOTM5O1xuJHRleHQtZ3JheWVkOiAjNTI1MjUyO1xuJHRleHQtZ3JheWVkODA6ICM4ZjhiOGI7XG4kdGV4dC1ncmF5LWNhdDogIzZkNzI3ODtcbiR1aS1iYWNrZ3JvdW5kLWdyYXk6ICNmOGY4Zjk7XG4kYm9yZGVyOiAjZThlN2VhO1xuJGVudGl0eS1ib3JkZXItY29sb3I6ICMxYzBmMzAyMTtcbiRsb2FkaW5nLWJnOiByZ2IoMCAwIDAgLyAxOCUpO1xuJHN1cHBvcnQtMDQ6ICMwMDQzY2U7XG4kbG9vcC11c2VybmFtZTogIzE5ODAzODtcbiRsb29wLWFjdGl2ZS1jdXJyZW50LXVzZXI6ICMyNGExNDg7XG4kd2FybS1ncmF5LTEwLWNvbG9yOiAjZjdmM2YyO1xuJHdhcm0tZ3JheS0yMC1jb2xvcjogI2U1ZTBkZjtcbiRoZWFkaW5nLTEtY29sb3I6ICMxYzBmMzA7XG4kaGVhZGluZy0yLWNvbG9yOiAjMzIwNzRkO1xuJGhlYWRpbmctMy1jb2xvcjogIzJmMjczNTtcbiRtb2JpbGUtaWNvbi1jb2xvcjogIzFjMGYzMDtcbiRzdGF0ZS1kaXNhYmxlZC0wMjogI2M2YzZjNjtcbiRsaW5rLTAyOiAjNTYwMWIyO1xuJGhlYWRlci1wdXJwbGU6ICMzMTEzNWU7XG4kaGVhZGVyLWdyZWVuOiAjMTA3ZDc5O1xuJHB1cnBsZS1saWdodDogI2NiYzRkNztcbiRwdXJwbGUtYmFja2dyb3VuZC1saWdodDogI2RjZDVlNztcbiRsb29wLWludGVyYWN0aXZlLTAxOiAjMTA3ZDc5O1xuJGxvb3AtaW50ZXJhY3RpdmUtMDEtb3BhY2l0eTogcmdiYSgxNiwgMTI1LCAxMjEsIDAuMyk7XG4kZmlsdGVycy1ncmVlbjogIzA1Njc2Mztcbi8vIEJyZWFrcG9pbnRzXG5cbiRicmVha3BvaW50LXM6IDM3NXB4O1xuJGJyZWFrcG9pbnQtc206IDQyMHB4O1xuJGJyZWFrcG9pbnQtbWQ6IDc2OHB4O1xuJGJyZWFrcG9pbnQtbGc6IDEwODBweDtcbiRicmVha3BvaW50LXhsOiAxMjc1cHg7XG5cbiRicmVha3BvaW50LW1kLXYyOiA4MjBweDtcblxuJGhlYWRlci1oZWlnaHQ6IDQuMzc1cmVtO1xuJGhlYWRlci1oZWlnaHQtdjI6IDQuMzc1cmVtO1xuJHN0YXRlLXNlbGVjdGVkLXVpOiAjZTBlMGUwO1xuJGMtbGVmdC1wYWRkaW5nOiAxLjVyZW07XG4kbWVudS1hY3RpdmUtY29sb3I6ICMzQUIwOTg7XG4kbWVudS1ob3Zlci1jb2xvcjogIzNBQjA5ODtcbiR0YWItaW5hY3RpdmUtY29sb3I6ICM4OWFmOTM7XG4kbGluZS1jb2xvcjogI2QwZGZkMjtcbiRib3JkZXItZ3JheTogI2NjY2NjYztcbiR0ZXh0LWdyYXk6ICM4MDgwODA7XG4kYmFzZS1jb250YWluZXItd2lkdGg6IDgxLjEyNHJlbTtcbiRoZWFkZXItdW5kZXJsaW5lLWhlaWdodDogMC4zMTNyZW07XG5cbi8vIE1vZGVyYXRvciByZXZpZXcgc2VjdGlvbnNcbiRmb290ZXItaGVpZ2h0OiA0cmVtO1xuJHRvcGJhci1oZWlnaHQ6IDEwLjVyZW07XG4kc3RlcHBlci1oZWlnaHQ6IDYuN3JlbTtcblxuLy8gTmV3IFN0b3J5IGZsb3cgLyBzdG9yeSBkZXRhaWxzIHZhcmlhYmxlc1xuJGdyZXk6ICM2NTY1NjU7XG4kbGlnaHQtZ3JleS0yOiAjYjFiNGI2O1xuJGxpZ2h0LWdyZXktMzogI2I0YjRiNDtcbiRsaWdodC1ncmV5LTQ6ICNjZmQzZDg7XG4kbGlnaHQtZ3JleS01OiAjZDllMGU3O1xuJGxpZ2h0LWdyZXktNjogI2YxZjJmMjtcbiRsaWdodC1ncmV5LTc6ICNjNGM0YzQ7XG4kbGlnaHQtZ3JleS04OiAjZTllOWU5O1xuJGxpZ2h0LWdyZXktOTogI2U2ZWFlZDtcbiRsaWdoLWdyZXktc2VwYXJhdG9yOiAjYzBjMGMwO1xuJGRhcmstZ3JleTogIzFhMWExYTtcbiRkYXJrLWdyZXktNTA6IHJnYigyNiwgMjYsIDI2LCAwLjUpO1xuJGJvcmRlci1ncmV5OiAjYzdjZGQ0O1xuJGxpZ2h0LXB1cnBsZTogI2VhZWFlYTtcbiRpbnB1dC1kaXNhYmxlZC1iZzogI2Y0ZjZmODtcbiRlcnJvci0yOiAjZGUyMjJkO1xuJGRhbmdlcjogI2M5MzA0ZDtcbiRwcmV2aW91cy1waWxsLWNvbG9yOiAjNzE4ZDZmO1xuJHRvb2x0aXAtZ3JleTogI2FiYWJhYjtcbiRsaWdodC1ncmVlbjogI2NmZTVlNDY2O1xuXG4kZmlsdGVycy1tb2RhbC1oZWFkZXItemluZGV4OiAxMDAwMDtcbiRtb2RhbC16aW5kZXg6IDk5OTk7XG4kbG9jYXRpb24tb3ZlcmxheS16aW5kZXg6IDkwMDE7XG4kaGVhZGVyLWFzaWRlLXppbmRleDogODAwMjtcbiRoZWFkZXItYXNpZGUtYmFja2dyb3VuZC16aW5kZXg6IDgwMDE7XG4kaGVhZGVyLXppbmRleDogODAwMDtcbiRuYXZpZ2F0aW9uLXppbmRleDogODAwMDtcbiRwYWdlLWxvYWRpbmctemluZGV4OiA3MDAxO1xuJHRvb2x0aXAtemluZGV4OiA3MDAwO1xuJG5ldy1zdG9yeS1jb250ZW50LXN0YXRlLXppbmRleDogNTAwO1xuJGZpbHRlci1kcm9wZG93bi16aW5kZXg6IDEwMDtcbiRtb2RhbC10b3AtaW5kaWNhdG9yLXppbmRleDogNTE7XG4kbW9kYWwtdG9wLWluZGljYXRvci1iYWNrZ3JvdW5kLXppbmRleDogNTE7XG4kY2hhcnQtemluZGV4OiAxO1xuJGNoYXJ0LWNvbnRyb2wtemluZGV4OiAyO1xuXG4kc2xpZGUtdG9nZ2xlLWRpc2FibGVkLW9wdGlvbi1iYWNrZ3JvdW5kOiAjZGRkZGRkO1xuXG4kdG9hc3QtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiR0b2FzdC1pbmZvLXRpdGxlLWNvbG9yOiAjNDk0OTQ5O1xuJHRvYXN0LWluZm8tbWVzc2FnZS1jb2xvcjogIzQyMmMwMDtcbiR0b2FzdC1pbmZvLWJ1dHRvbi1jb2xvcjogIzZjNGU5OTtcblxuJHRvYXN0LXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogI2Q5ZWVlZDtcbiR0b2FzdC1zdWNjZXNzLXRpdGxlLWNvbG9yOiAjMDA0NTQyO1xuJHRvYXN0LXN1Y2Nlc3MtbWVzc2FnZS1jb2xvcjogIzAxMzIzMDtcbiR0b2FzdC1zdWNjZXNzLWJ1dHRvbi1jb2xvcjogIzAxNjk2NTtcblxuJHRvYXN0LXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogI2ZmZjFkNTtcbiR0b2FzdC13YXJuaW5nLXRpdGxlLWNvbG9yOiAjNmI0NzAwO1xuJHRvYXN0LXdhcm5pbmctbWVzc2FnZS1jb2xvcjogIzQyMmMwMDtcbiR0b2FzdC13YXJuaW5nLWJ1dHRvbi1jb2xvcjogI2NjOGYxNDtcblxuJHRvYXN0LWVycm9yLWJhY2tncm91bmQtY29sb3I6ICNmNWQ1ZGI7XG4kdG9hc3QtZXJyb3ItdGl0bGUtY29sb3I6ICM3MzAwMTU7XG4kdG9hc3QtZXJyb3ItbWVzc2FnZS1jb2xvcjogIzQ1MDYxMTtcbiR0b2FzdC1lcnJvci1zdWNjZXNzLWNvbG9yOiAjZDllZWVkO1xuJHRvYXN0LWVycm9yLWJ1dHRvbi1jb2xvcjogI2IyMWQzOTtcblxuJHRvYXN0LWNsb3NlLWJ1dHRvbi1jb2xvcjogIzczMDAxNTtcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9pbmJveC9zdG9yaWVzL3N0b3JpZXMtbGlzdC9zdG9yaWVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3N0eWxlcy9sb29wLWRlc2lnbi1zeXN0ZW0tdjIvX2NvbG9ycy5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9zdHlsZXMvX21peGlucy5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9JO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0FBTk47QUFTSTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtBQVBOOztBQVlBOzs7Ozs7RUFNRSxnQkFBQTtFQUNBLGVBQUE7QUFURjs7QUFZQTtFQUNFLFNBQUE7QUFURjs7QUFZQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBVEY7O0FBWUE7RUFDRSxjQ0VZO0VERFosNkJBQUE7QUFURjtBQWNJO0VBQ0UsVUFBQTtBQVpOO0FFOEpFO0VGN0lFO0lBQ0Usa0JBQUE7RUFkSjtFQWtCSTtJQUNFLG1CQUFBO0lBQ0EsZUFBQTtFQWhCTjtBQUNGO0FBb0JFO0VBQ0Usa0JBQUE7RUFDQSx5Qkd2Q2E7RUh3Q2IseUJBQUE7RUFDQSxjRzlDYTtFSCtDYiwwREFBQTtBQWxCSjtBQW9CSTtFQUNFLFVBQUE7QUFsQk47QUFzQkU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QUFwQko7QUFzQkk7RUFDRSxxQkcvRFc7RUhnRVgsNkJBQUE7QUFwQk47QUVtSEU7RUZ6R0E7SUFhSSx1QkFBQTtJQUNBLDJCQUFBO0VBbkJKO0FBQ0Y7QUFzQk07RUFDRSxtQkFBQTtFQUNBLHlCQzdDYztBRHlCdEI7QUF1Qk07RUFDRSxtQkFBQTtFQUNBLHlCQ2xEYztFRG1EZCxtQ0FBQTtBQXJCUjtBQXdCTTtFQUNFLG1CQUFBO0VBQ0EseUJDdkRjO0FEaUN0QjtBRWdHRTtFRnhGRTtJQWtCSSxZQUFBO0lBQ0EsV0FBQTtFQXRCTjtBQUNGO0FBeUJJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQXZCTjtBQXdCTTtFQUNFLGFBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQXRCUjtBRThFRTtFRjdESTtJQVFJLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxNQUFBO0lBQ0EsdUJBQUE7RUFyQlI7QUFDRjtBQXVCUTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQXJCVjtBRTJERTtFRjVDTTtJQVNJLHFCQUFBO0VBcEJWO0FBQ0Y7QUF3Qk07RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBdEJSO0FFL0ZFO0VBMENJLHFCRjhFMEI7QUF0QmhDO0FFNUZFO0VBd0NJLG9CRjBFMEI7QUFuQmhDO0FBeUJFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQXZCSjtBRThCRTtFRmZBO0lBV0ksMkJBQUE7SUFDQSxzQkFBQTtJQUNBLFFBQUE7RUF0Qko7RUVySEE7SUEwQ0ksaUJGa0dxQjtFQXBCekI7RUVsSEE7SUF3Q0ksa0JGOEZxQjtFQWpCekI7QUFDRjtBQW1CSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FBakJOO0FFV0U7RUZFRTtJQU9JLGVBQUE7SUFDQSxpQkFBQTtFQWhCTjtBQUNGO0FBa0JNO0VBQ0UsYUFBQTtFQUNBLFFBQUE7QUFoQlI7QUFrQlE7RUFDRSw0SEFBQTtBQWhCVjtBQXFCSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFuQk47QUVQRTtFRnVCRTtJQU1JLGVBQUE7SUFDQSxpQkFBQTtJQUNBLFFBQUE7RUFsQk47QUFDRjtBQW9CTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQWxCUjtBQXFCTTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBbkJSOztBQXlCQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsZUFBQTtBQXRCRjs7QUF5QkE7RUFDRSw0QkFBQTtBQXRCRjs7QUF5QkE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjR3hHeUI7RUh5R3pCLGVBQUE7QUF0QkY7QUF3QkU7RUFFRSwwQkFBQTtBQXZCSjs7QUEyQkE7RUFDRSxtQkFBQTtBQXhCRjs7QUEyQkE7RUFDRSxhQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0FBeEJGO0FFaEVFO0VGcUZGO0lBTUksV0FBQTtJQUNBLHVCQUFBO0VBdkJGO0FBQ0Y7O0FBMEJBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBdkJGOztBQTBCQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLG9CQUFBO0VBQ0EseUJDOU9vQjtFRCtPcEIsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0M1T29CO0FEcU50QjtBRXhGRTtFRnNHRjtJQVlJLGFBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsUUFBQTtFQXRCRjtFQXdCRTtJQUNFLFVBQUE7SUFDQSxXQUFBO0VBdEJKO0FBQ0Y7QUFDQSxvNTNCQUFvNTNCIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnbG9vcC1kZXNpZ24tc3lzdGVtL2hlbHBlcnMnO1xuQGltcG9ydCAnbWl4aW5zJztcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICdsb29wLWRlc2lnbi1zeXN0ZW0tdjIvY29sb3JzJztcblxuOmhvc3Qge1xuICA6Om5nLWRlZXAge1xuICAgIC5tYXQtcm93LnJlamVjdGVkIHtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgb3BhY2l0eTogMC40O1xuICAgIH1cblxuICAgIC5tb2JpbGUtdGFibGUtaXRlbS5yZWplY3RlZCB7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICB9XG4gIH1cbn1cblxudGgubWF0LWhlYWRlci1jZWxsOmxhc3Qtb2YtdHlwZSxcbnRkLm1hdC1jZWxsOmxhc3Qtb2YtdHlwZSxcbnRkLm1hdC1mb290ZXItY2VsbDpsYXN0LW9mLXR5cGUsXG50aC5tYXQtaGVhZGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSxcbnRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUsXG50ZC5tYXQtZm9vdGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxudHIubWF0LWhlYWRlci1yb3cge1xuICBoZWlnaHQ6IDA7XG59XG5cbi5zZWxlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDY1cHg7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5pdGVtIHtcbiAgY29sb3I6ICRuZXV0cmFsLTUwMDtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG5cbiAgJjpob3ZlcixcbiAgJjphY3RpdmUsXG4gICY6Zm9jdXMge1xuICAgIC5mb290ZXIgLmRhdGUgLmZsYWcge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cblxuICBAaW5jbHVkZSBtb2JpbGUtdXAge1xuICAgIC50cmFzaCB7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAudHJhc2gge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5zZWxlY3RlZCB7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmVlbi0xMDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkY29sb3ItZ3JlZW4tNjA7XG4gICAgY29sb3I6ICRjb2xvci1ncmVlbi02MDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMsIGJvcmRlciAwLjJzLCBjb2xvciAwLjJzO1xuXG4gICAgLmZvb3RlciAuZGF0ZSAuZmxhZyB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuXG4gIC5oZWFkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJG5ldXRyYWwtMTAwO1xuXG4gICAgJi5zZWxlY3RlZCB7XG4gICAgICBib3JkZXItY29sb3I6ICRjb2xvci1ncmVlbi02MDtcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzO1xuICAgIH1cbiAgICBAaW5jbHVkZSBtb2JpbGUtb25seSB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDEycHggMTZweCA4cHggMTZweDtcbiAgICB9XG5cbiAgICAudHJhc2gge1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkZXN0cnVjdGl2ZS1yZWQtMTAwO1xuICAgICAgfVxuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRlc3RydWN0aXZlLXJlZC0xMDA7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDBweCAjMjA3MmVjO1xuICAgICAgfVxuXG4gICAgICAmOmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkZXN0cnVjdGl2ZS1yZWQtMjAwO1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBtb2JpbGUtb25seSB7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1haW4ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLmNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDdweDtcbiAgICAgICAgd2lkdGg6IDQ4MHB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZS1vbmx5IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICBnYXA6IDA7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cblxuICAgICAgICAuc3RvcnktY29udGVudCB7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogaW5pdGlhbDtcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XG4gICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcblxuICAgICAgICAgIEBpbmNsdWRlIG1vYmlsZS1vbmx5IHtcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnN0YXR1cyB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMzJweDtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIEBpbmNsdWRlIG1hcmdpbi1yaWdodChweFRvUmVtKDQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5mb290ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDEycHggMTZweCAxMnB4IDU2cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcblxuICAgIEBpbmNsdWRlIG1vYmlsZS1vbmx5IHtcbiAgICAgIHBhZGRpbmc6IDhweCAxNnB4IDEycHggMTZweDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBnYXA6IDhweDtcbiAgICAgIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KDMycHgpO1xuICAgIH1cblxuICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICBAaW5jbHVkZSBtb2JpbGUtb25seSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIC5jaGFubmVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZ2FwOiA0cHg7XG5cbiAgICAgICAgLmNoYW5uZWwtaWNvbi5zZWxlY3RlZCB7XG4gICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDApIHNhdHVyYXRlKDEwMCUpIGludmVydCgzMyUpIHNlcGlhKDMwJSkgc2F0dXJhdGUoMTA3NSUpIGh1ZS1yb3RhdGUoMjIyZGVnKSBicmlnaHRuZXNzKDkyJSkgY29udHJhc3QoODQlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5kYXRlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA4cHg7XG5cbiAgICAgIEBpbmNsdWRlIG1vYmlsZS1vbmx5IHtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgZ2FwOiA0cHg7XG4gICAgICB9XG5cbiAgICAgIC5mbGFnIHtcbiAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgfVxuXG4gICAgICBzcGFuIHtcbiAgICAgICAgbWluLXdpZHRoOiAxMDZweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnRhYmxlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGhlaWdodDogMzJweDtcbiAgbWFyZ2luOiAxNnB4IDAgOHB4IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGFibGUtZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4ubWF0LWNvbHVtbi1zdGF0dXMge1xuICBmbGV4LXdyYXA6IG5vd3JhcCAhaW1wb3J0YW50O1xufVxuXG4ucmVqZWN0LWJ1dHRvbiB7XG4gIG91dGxpbmU6IDA7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogcHhUb1JlbSgxNik7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiBweFRvUmVtKDI0KTtcbiAgY29sb3I6ICR0b2FzdC1lcnJvci1idXR0b24tY29sb3I7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxufVxuXG4udm9pY2UtYWN0aW9ucy0tbW9iaWxlIHtcbiAgbWFyZ2luLXRvcDogcHhUb1JlbSgyMCk7XG59XG5cbi5hdWRpby1wbGF5ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBAaW5jbHVkZSBtb2JpbGUtb25seSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cblxuLnN0b3J5LWNvbnRlbnQge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnNlbnNpdGl2ZS10YWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwcHggOHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRkZXN0cnVjdGl2ZS1yZWQtMTAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBjb2xvcjogJGRlc3RydWN0aXZlLXJlZC02MDA7XG5cbiAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMHB4IDRweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMnB4O1xuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiA4cHg7XG4gICAgICBoZWlnaHQ6IDhweDtcbiAgICB9XG4gIH1cbn1cbiIsIi8vLy8gQnJhbmQgY29sb3JzXG4vLyBQcmltYXJ5XG4kbG9vcC1wdXJwbGUtMTAwOiAjZWFlNmYwO1xuJGxvb3AtcHVycGxlLTIwMDogI2Q2ZDBkZjtcbiRsb29wLXB1cnBsZS0zMDA6ICNiYWFiZDA7XG4kbG9vcC1wdXJwbGUtNDAwOiAjODY2YWIwO1xuJGxvb3AtcHVycGxlLTUwMDogIzZjNGU5OTtcbiRsb29wLXB1cnBsZS02MDA6ICM0YTJiN2E7XG4kbG9vcC1wdXJwbGUtNzAwOiAjMzExMzVlO1xuJGxvb3AtcHVycGxlLTgwMDogIzI2MTA0NztcblxuXG4vLyBHcmVlbnNcbiRsb29wLWdyZWVuLTEwMDogI2U2ZjBlOTtcbiRsb29wLWdyZWVuLTIwMDogI2MwZDljZTtcbiRsb29wLWdyZWVuLTMwMDogIzkzYjliMDtcbiRsb29wLWdyZWVuLTQwMDogIzUzOGM4MDtcbiRsb29wLWdyZWVuLTUwMDogIzI2Njk1YztcbiRsb29wLWdyZWVuLTYwMDogIzAwNDczZDtcbiRsb29wLWdyZWVuLTcwMDogIzAwMzIyYjtcbiRsb29wLWdyZWVuLTgwMDogIzAwMjExYztcblxuLy8gRXhhbXBsZTpcbi8vIG1hcC5nZXQoJGxvb3AtcHVycGxlcywgJzYwMCcpO1xuXG4vLyBBY3Rpb25cbiRhY3Rpb24tdGVhbC0xMDA6ICNkOWVlZWQ7XG4kYWN0aW9uLXRlYWwtMjAwOiAjYTFkNGQyO1xuJGFjdGlvbi10ZWFsLTMwMDogIzY5YmJiODtcbiRhY3Rpb24tdGVhbC00MDA6ICMwMDg1N2Q7XG4kYWN0aW9uLXRlYWwtNTAwOiAjMDE2OTY1O1xuJGFjdGlvbi10ZWFsLTYwMDogIzAwNTc1NDtcbiRhY3Rpb24tdGVhbC03MDA6ICMwMDQ1NDI7XG4kYWN0aW9uLXRlYWwtODAwOiAjMDEzMjMwO1xuXG4vLyBFeGFtcGxlOlxuLy8gbWFwLmdldCgkYWN0aW9uLXRlYWxzLCAnNjAwJyk7XG5cbi8vIE5ldXRyYWxcbiRuZXV0cmFsLTAwMDogI2ZmZmZmZjtcbiRuZXV0cmFsLTA1MDogI2YxZjJmMjtcbiRuZXV0cmFsLTEwMDogI2RiZGJkYjtcbiRuZXV0cmFsLTMwMDogI2I2YjZiNjtcbiRuZXV0cmFsLTQwMDogIzkyOTI5MjtcbiRuZXV0cmFsLTUwMDogIzY1NjU2NTtcbiRuZXV0cmFsLTcwMDogIzQ5NDk0OTtcbiRuZXV0cmFsLTgwMDogIzFhMWExYTtcblxuLy8gRXhhbXBsZTpcbi8vIG1hcC5nZXQoJG5ldXRyYWxzLCAnNjAwJyk7XG5cbi8vLy8gU2VtYW50aWMgQ29sb3JzXG4vLyBEYW5nZXJcbiRkZXN0cnVjdGl2ZS1yZWQtMTAwOiAjZjVkNWRiO1xuJGRlc3RydWN0aXZlLXJlZC0yMDA6ICNlZGExYWY7XG4kZGVzdHJ1Y3RpdmUtcmVkLTMwMDogI2UzNmQ4MztcbiRkZXN0cnVjdGl2ZS1yZWQtNDAwOiAjYzIzMDRiO1xuJGRlc3RydWN0aXZlLXJlZC01MDA6ICNiMjFkMzk7XG4kZGVzdHJ1Y3RpdmUtcmVkLTYwMDogIzhjMTEyODtcbiRkZXN0cnVjdGl2ZS1yZWQtNzAwOiAjNzMwMDE1O1xuJGRlc3RydWN0aXZlLXJlZC04MDA6ICM0NTA2MTE7XG5cbi8vIEFsZXJ0XG4kYWxlcnQtZ29sZC0xMDA6ICNmZmYxZDU7XG4kYWxlcnQtZ29sZC0yMDA6ICNmN2RhOWU7XG4kYWxlcnQtZ29sZC0zMDA6ICNmOGM0NWI7XG4kYWxlcnQtZ29sZC00MDA6ICNlOGFiMzE7XG4kYWxlcnQtZ29sZC01MDA6ICNjYzhmMTQ7XG4kYWxlcnQtZ29sZC02MDA6ICNjYzhmMTQ7XG4kYWxlcnQtZ29sZC03MDA6ICM2YjQ3MDA7XG4kYWxlcnQtZ29sZC04MDA6ICM0MjJjMDA7XG5cbi8vIEVtcGhhc2lzXG4kZW1waGFzaXMtYmx1ZS0xMDA6ICNkOWU4ZmY7XG4kZW1waGFzaXMtYmx1ZS0yMDA6ICNhOGNiZmY7XG4kZW1waGFzaXMtYmx1ZS0zMDA6ICM4MGIyZmY7XG4kZW1waGFzaXMtYmx1ZS00MDA6ICM1Mzk3ZmM7XG4kZW1waGFzaXMtYmx1ZS01MDA6ICMyMDcyZWM7XG4kZW1waGFzaXMtYmx1ZS02MDA6ICMwNDU2ZDE7XG4kZW1waGFzaXMtYmx1ZS03MDA6ICMwMDNjOTY7XG4kZW1waGFzaXMtYmx1ZS04MDA6ICMwMDFkNDc7XG5cbiRsb29wLXB1cnBsZXM6IChcbiAgJzEwMCc6ICRsb29wLXB1cnBsZS0xMDAsXG4gICcyMDAnOiAkbG9vcC1wdXJwbGUtMjAwLFxuICAnMzAwJzogJGxvb3AtcHVycGxlLTMwMCxcbiAgJzQwMCc6ICRsb29wLXB1cnBsZS00MDAsXG4gICc1MDAnOiAkbG9vcC1wdXJwbGUtNTAwLFxuICAnNjAwJzogJGxvb3AtcHVycGxlLTYwMCxcbiAgJzcwMCc6ICRsb29wLXB1cnBsZS03MDAsXG4gICc4MDAnOiAkbG9vcC1wdXJwbGUtODAwLFxuKTtcblxuJGxvb3AtZ3JlZW5zOiAoXG4gICcxMDAnOiAkbG9vcC1ncmVlbi0xMDAsXG4gICcyMDAnOiAkbG9vcC1ncmVlbi0yMDAsXG4gICczMDAnOiAkbG9vcC1ncmVlbi0zMDAsXG4gICc0MDAnOiAkbG9vcC1ncmVlbi00MDAsXG4gICc1MDAnOiAkbG9vcC1ncmVlbi01MDAsXG4gICc2MDAnOiAkbG9vcC1ncmVlbi02MDAsXG4gICc3MDAnOiAkbG9vcC1ncmVlbi03MDAsXG4gICc4MDAnOiAkbG9vcC1ncmVlbi04MDAsXG4pO1xuXG4kYWN0aW9uLXRlYWxzOiAoXG4gICcxMDAnOiAkYWN0aW9uLXRlYWwtMTAwLFxuICAnMjAwJzogJGFjdGlvbi10ZWFsLTIwMCxcbiAgJzMwMCc6ICRhY3Rpb24tdGVhbC0zMDAsXG4gICc0MDAnOiAkYWN0aW9uLXRlYWwtNDAwLFxuICAnNTAwJzogJGFjdGlvbi10ZWFsLTUwMCxcbiAgJzYwMCc6ICRhY3Rpb24tdGVhbC02MDAsXG4gICc3MDAnOiAkYWN0aW9uLXRlYWwtNzAwLFxuICAnODAwJzogJGFjdGlvbi10ZWFsLTgwMCxcbik7XG5cbiRuZXV0cmFsczogKFxuICAnMDAwJzogJG5ldXRyYWwtMDAwLFxuICAnMDUwJzogJG5ldXRyYWwtMDUwLFxuICAnMTAwJzogJG5ldXRyYWwtMTAwLFxuICAnMzAwJzogJG5ldXRyYWwtMzAwLFxuICAnNDAwJzogJG5ldXRyYWwtNDAwLFxuICAnNTAwJzogJG5ldXRyYWwtNTAwLFxuICAnNzAwJzogJG5ldXRyYWwtNzAwLFxuICAnODAwJzogJG5ldXRyYWwtODAwLFxuKTtcblxuJGRlc3RydWN0aXZlLXJlZHM6IChcbiAgJzEwMCc6ICRkZXN0cnVjdGl2ZS1yZWQtMTAwLFxuICAnMjAwJzogJGRlc3RydWN0aXZlLXJlZC0yMDAsXG4gICczMDAnOiAkZGVzdHJ1Y3RpdmUtcmVkLTMwMCxcbiAgJzQwMCc6ICRkZXN0cnVjdGl2ZS1yZWQtNDAwLFxuICAnNTAwJzogJGRlc3RydWN0aXZlLXJlZC01MDAsXG4gICc2MDAnOiAkZGVzdHJ1Y3RpdmUtcmVkLTYwMCxcbiAgJzcwMCc6ICRkZXN0cnVjdGl2ZS1yZWQtNzAwLFxuICAnODAwJzogJGRlc3RydWN0aXZlLXJlZC04MDAsXG4pO1xuXG4kYWxlcnQtZ29sZHM6IChcbiAgJzEwMCc6ICRhbGVydC1nb2xkLTEwMCxcbiAgJzIwMCc6ICRhbGVydC1nb2xkLTIwMCxcbiAgJzMwMCc6ICRhbGVydC1nb2xkLTMwMCxcbiAgJzQwMCc6ICRhbGVydC1nb2xkLTQwMCxcbiAgJzUwMCc6ICRhbGVydC1nb2xkLTUwMCxcbiAgJzYwMCc6ICRhbGVydC1nb2xkLTYwMCxcbiAgJzcwMCc6ICRhbGVydC1nb2xkLTcwMCxcbiAgJzgwMCc6ICRhbGVydC1nb2xkLTgwMCxcbik7XG5cbiRlbXBoYXNpcy1ibHVlczogKFxuICAnMTAwJzogJGVtcGhhc2lzLWJsdWUtMTAwLFxuICAnMjAwJzogJGVtcGhhc2lzLWJsdWUtMjAwLFxuICAnMzAwJzogJGVtcGhhc2lzLWJsdWUtMzAwLFxuICAnNDAwJzogJGVtcGhhc2lzLWJsdWUtNDAwLFxuICAnNTAwJzogJGVtcGhhc2lzLWJsdWUtNTAwLFxuICAnNjAwJzogJGVtcGhhc2lzLWJsdWUtNjAwLFxuICAnNzAwJzogJGVtcGhhc2lzLWJsdWUtNzAwLFxuICAnODAwJzogJGVtcGhhc2lzLWJsdWUtODAwLFxuKTtcblxuJGxvb3AtdGhlbWVzOiAoXG4gICdwcmltYXJ5JzogJGxvb3AtZ3JlZW5zLFxuICAnYWN0aW9uJzogJGFjdGlvbi10ZWFscyxcbiAgJ25ldXRyYWwnOiAkbmV1dHJhbHMsXG4gICdkYW5nZXInOiAkZGVzdHJ1Y3RpdmUtcmVkcyxcbiAgJ2FsZXJ0JzogJGFsZXJ0LWdvbGRzLFxuICAnZW1waGFzaXMnOiAkZW1waGFzaXMtYmx1ZXMsXG4pOyIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbkBtaXhpbiBmbGV4LWdhcCgkZ2FwLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBtYXJnaW4tdG9wOiAoLSRnYXApO1xuICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgoLSRnYXApLCAkZ2xvYmFsKTtcblxuICA+ICoge1xuICAgIG1hcmdpbi10b3A6ICRnYXA7XG4gICAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoJGdhcCwgJGdsb2JhbCk7XG4gIH1cbn1cblxuQG1peGluIGJhc2UtY29udGFpbmVyKCRjb250ZW50LXdpZHRoKSB7XG4gICRkZXNrdG9wLXBhZGRpbmc6IDJyZW07XG4gIG1heC13aWR0aDogY2FsYygjeyRjb250ZW50LXdpZHRofSArICgjeyRkZXNrdG9wLXBhZGRpbmd9KSk7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDJyZW0pIHtcbiAgICBAaW5jbHVkZSBwYWRkaW5nLWxlZnQoJGRlc2t0b3AtcGFkZGluZywgdHJ1ZSk7XG4gICAgQGluY2x1ZGUgcGFkZGluZy1yaWdodCgkZGVza3RvcC1wYWRkaW5nLCB0cnVlKTtcbiAgfVxufVxuXG5AbWl4aW4gY2VudGVyQWJzb2x1dGVFbGVtZW50IHtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcblxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuQG1peGluIG9ubHktbHRyLWdsb2JhbCB7XG4gIGh0bWw6bm90KFtkaXI9J3J0bCddKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1ydGwtZ2xvYmFsIHtcbiAgaHRtbFtkaXI9J3J0bCddICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LWx0ciB7XG4gIDpob3N0LWNvbnRleHQoaHRtbDpub3QoW2Rpcj0ncnRsJ10pKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1ydGwge1xuICA6aG9zdC1jb250ZXh0KGh0bWxbZGlyPSdydGwnXSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHJ0bC12YWx1ZSgkcHJvcGVydHksICRsdHItdmFsdWUsICRydGwtdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpZiAkZ2xvYmFsID09IHRydWUge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyLWdsb2JhbCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRsdHItdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwtZ2xvYmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHJ0bC12YWx1ZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGx0ci12YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRydGwtdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBydGwtcHJvcGVydHkoJGx0ci1wcm9wZXJ0eSwgJHJ0bC1wcm9wZXJ0eSwgJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaWYgJGdsb2JhbCA9PSB0cnVlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ci1nbG9iYWwge1xuICAgICAgI3skbHRyLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsLWdsb2JhbCB7XG4gICAgICAjeyRydGwtcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ciB7XG4gICAgICAjeyRsdHItcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwge1xuICAgICAgI3skcnRsLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWFyZ2luLWxlZnQoJG1hcmdpbiwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KG1hcmdpbi1sZWZ0LCBtYXJnaW4tcmlnaHQsICRtYXJnaW4sICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gbWFyZ2luLXJpZ2h0KCRtYXJnaW4sICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShtYXJnaW4tcmlnaHQsIG1hcmdpbi1sZWZ0LCAkbWFyZ2luLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmcoJHBhZGRpbmdUb3AsICRwYWRkaW5nUmlnaHQsICRwYWRkaW5nQm90dG9tLCAkcGFkZGluZ0xlZnQsICRnbG9iYWw6IGZhbHNlKSB7XG4gIHBhZGRpbmctdG9wOiAkcGFkZGluZ1RvcDtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctcmlnaHQsIHBhZGRpbmctbGVmdCwgJHBhZGRpbmdSaWdodCwgJGdsb2JhbCk7XG4gIHBhZGRpbmctYm90dG9tOiAkcGFkZGluZ1RvcDtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctbGVmdCwgcGFkZGluZy1yaWdodCwgJHBhZGRpbmdMZWZ0LCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmctbGVmdCgkcGFkZGluZywgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctbGVmdCwgcGFkZGluZy1yaWdodCwgJHBhZGRpbmcsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1yaWdodCgkcGFkZGluZywgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctcmlnaHQsIHBhZGRpbmctbGVmdCwgJHBhZGRpbmcsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gdGV4dC1hbGlnbi1sZWZ0KCRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZSh0ZXh0LWFsaWduLCBsZWZ0LCByaWdodCwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBsZWZ0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGxlZnQsIHJpZ2h0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcmlnaHQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocmlnaHQsIGxlZnQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiB0cmFuc2xhdGVYWSgkdmFsdWVYLCAkdmFsdWVZLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUodHJhbnNmb3JtLCB0cmFuc2xhdGUoJHZhbHVlWCwgJHZhbHVlWSksIHRyYW5zbGF0ZSgtJHZhbHVlWCwgJHZhbHVlWSksICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWxlZnQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWxlZnQsIGJvcmRlci1yaWdodCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1yaWdodCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItcmlnaHQsIGJvcmRlci1sZWZ0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMsIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItdG9wLXJpZ2h0LXJhZGl1cywgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItdG9wLWxlZnQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci10b3AtbGVmdC1yYWRpdXMsIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gZmxvYXQtbGVmdCgkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUoZmxvYXQsIGxlZnQsIHJpZ2h0LCAkZ2xvYmFsOiBmYWxzZSk7XG59XG5cbkBtaXhpbiBmbG9hdC1yaWdodCB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZShmbG9hdCwgcmlnaHQsIGxlZnQsICRnbG9iYWw6IGZhbHNlKTtcbn1cblxuQG1peGluIHNtYWxsLWRlc2t0b3Atb25seSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1sZykgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXhsIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLWFuZC10YWJsZXQtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZyAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtYWxsLW1vYmlsZS1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXMgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1tZCAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1kKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbGcpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLXVwIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1kKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGRpc2FibGUtc2Nyb2xsYmFyIHtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iLCIkc3RhbmRhcmRGb250RmFtaWx5OiAnTm90byBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4kY29udGVudC10b3AtcGFkZGluZzogM3JlbTtcbiRwb3N0LWxpc3QtYmc6ICNkYWRhZGE7XG4kd2hpdGU6ICNmZmZmZmY7XG4kcG9zdC1wcmV2aWV3LWJnOiB3aGl0ZTtcbiRsaWdodC1ncmF5LWJnOiAjZjRmNGY0O1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLWxlZnQ6IDIuMzQ0cmVtO1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLXJpZ2h0OiAxLjA2M3JlbTtcbiRwb3N0LXByZXZpZXctcGFkZGluZzogMi41cmVtICRwb3N0LXByZXZpZXctcGFkZGluZy1yaWdodCAxLjI1cmVtICRwb3N0LXByZXZpZXctcGFkZGluZy1sZWZ0O1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLW1vYmlsZTogMXJlbSAxcmVtIDAuNXJlbSAxcmVtO1xuJHBvc3QtcGFkZGluZy1ib3R0b206IDFyZW07XG4kcG9zdC1wcmV2aWV3LWd1dHRlcjogMnB4O1xuJHBvc3QtaGlnaGxpZ2h0LWNvbG9yOiAjNTcwZjg1O1xuJGNvbG9yLXB1cnBsZS05MDogIzMxMTM1ZTtcbiRjb2xvci1wdXJwbGUtNjA6ICM5ODhhYWU7XG4kY29sb3ItcHVycGxlLTUwOiAjOTg4OWFmO1xuJGNvbG9yLXB1cnBsZS0xMDogI2Y1ZjNmNztcbiRjb2xvci1wdXJwbGUtbGlnaHQ6ICM0YjM1YmM7XG4kY29sb3ItcHVycGxlLXZlcnktbGlnaHQ6ICM4NjZhYjA7XG4kY29sb3ItcHVycGxlLXN0ZXBwZXI6ICM0YTJiN2E7XG4kY29sb3ItZ3JlZW4tMTAwOiAjMDUyODA0O1xuJGNvbG9yLWdyZWVuLTkwOiAjMGQzZDBiO1xuJGNvbG9yLWdyZWVuLTgwOiAjMWY2YjFlO1xuJGNvbG9yLWdyZWVuLTcwOiAjMzU4YTM0O1xuJGNvbG9yLWdyZWVuLTYwOiAjNmQ5YTZlO1xuJGNvbG9yLWdyZWVuLTUwOiAjODlhODhmO1xuJGNvbG9yLWdyZWVuLTQwOiAjOWZjOGE2O1xuJGNvbG9yLWdyZWVuLTMwOiAjYWFkNmIzO1xuJGNvbG9yLWdyZWVuLTIwOiAjYzllOWQxO1xuJGNvbG9yLWdyZWVuLTEwOiAjZjNmN2YzO1xuJGNvbG9yLWdyZWVuLXN0ZXBwZXI6ICMxMDdENzk7XG4kY29sb3ItZ3JlZW4tbWVkaXVtOiAjYWRkYWFmO1xuJGNvbG9yLWdyZWVuLWxpZ2h0OiAjM0FCMDk4O1xuJGNvbG9yLWdyZWVuLXZlcnktbGlnaHQ6ICNFREZGRkM7XG4kZ3JleS0xOiAjZDZkMGRmO1xuJHN1cHBvcnQtMDE6ICNkYTFlMjg7XG4kZXJyb3I6ICNlZTIzMmY7XG4kdGV4dC1ibGFjazogIzE2MTYxNjtcbiR0ZXh0LXNlY29uZGFyeTogIzM5MzkzOTtcbiR0ZXh0LWdyYXllZDogIzUyNTI1MjtcbiR0ZXh0LWdyYXllZDgwOiAjOGY4YjhiO1xuJHRleHQtZ3JheS1jYXQ6ICM2ZDcyNzg7XG4kdWktYmFja2dyb3VuZC1ncmF5OiAjZjhmOGY5O1xuJGJvcmRlcjogI2U4ZTdlYTtcbiRlbnRpdHktYm9yZGVyLWNvbG9yOiAjMWMwZjMwMjE7XG4kbG9hZGluZy1iZzogcmdiKDAgMCAwIC8gMTglKTtcbiRzdXBwb3J0LTA0OiAjMDA0M2NlO1xuJGxvb3AtdXNlcm5hbWU6ICMxOTgwMzg7XG4kbG9vcC1hY3RpdmUtY3VycmVudC11c2VyOiAjMjRhMTQ4O1xuJHdhcm0tZ3JheS0xMC1jb2xvcjogI2Y3ZjNmMjtcbiR3YXJtLWdyYXktMjAtY29sb3I6ICNlNWUwZGY7XG4kaGVhZGluZy0xLWNvbG9yOiAjMWMwZjMwO1xuJGhlYWRpbmctMi1jb2xvcjogIzMyMDc0ZDtcbiRoZWFkaW5nLTMtY29sb3I6ICMyZjI3MzU7XG4kbW9iaWxlLWljb24tY29sb3I6ICMxYzBmMzA7XG4kc3RhdGUtZGlzYWJsZWQtMDI6ICNjNmM2YzY7XG4kbGluay0wMjogIzU2MDFiMjtcbiRoZWFkZXItcHVycGxlOiAjMzExMzVlO1xuJGhlYWRlci1ncmVlbjogIzEwN2Q3OTtcbiRwdXJwbGUtbGlnaHQ6ICNjYmM0ZDc7XG4kcHVycGxlLWJhY2tncm91bmQtbGlnaHQ6ICNkY2Q1ZTc7XG4kbG9vcC1pbnRlcmFjdGl2ZS0wMTogIzEwN2Q3OTtcbiRsb29wLWludGVyYWN0aXZlLTAxLW9wYWNpdHk6IHJnYmEoMTYsIDEyNSwgMTIxLCAwLjMpO1xuJGZpbHRlcnMtZ3JlZW46ICMwNTY3NjM7XG4vLyBCcmVha3BvaW50c1xuXG4kYnJlYWtwb2ludC1zOiAzNzVweDtcbiRicmVha3BvaW50LXNtOiA0MjBweDtcbiRicmVha3BvaW50LW1kOiA3NjhweDtcbiRicmVha3BvaW50LWxnOiAxMDgwcHg7XG4kYnJlYWtwb2ludC14bDogMTI3NXB4O1xuXG4kYnJlYWtwb2ludC1tZC12MjogODIwcHg7XG5cbiRoZWFkZXItaGVpZ2h0OiA0LjM3NXJlbTtcbiRoZWFkZXItaGVpZ2h0LXYyOiA0LjM3NXJlbTtcbiRzdGF0ZS1zZWxlY3RlZC11aTogI2UwZTBlMDtcbiRjLWxlZnQtcGFkZGluZzogMS41cmVtO1xuJG1lbnUtYWN0aXZlLWNvbG9yOiAjM0FCMDk4O1xuJG1lbnUtaG92ZXItY29sb3I6ICMzQUIwOTg7XG4kdGFiLWluYWN0aXZlLWNvbG9yOiAjODlhZjkzO1xuJGxpbmUtY29sb3I6ICNkMGRmZDI7XG4kYm9yZGVyLWdyYXk6ICNjY2NjY2M7XG4kdGV4dC1ncmF5OiAjODA4MDgwO1xuJGJhc2UtY29udGFpbmVyLXdpZHRoOiA4MS4xMjRyZW07XG4kaGVhZGVyLXVuZGVybGluZS1oZWlnaHQ6IDAuMzEzcmVtO1xuXG4vLyBNb2RlcmF0b3IgcmV2aWV3IHNlY3Rpb25zXG4kZm9vdGVyLWhlaWdodDogNHJlbTtcbiR0b3BiYXItaGVpZ2h0OiAxMC41cmVtO1xuJHN0ZXBwZXItaGVpZ2h0OiA2LjdyZW07XG5cbi8vIE5ldyBTdG9yeSBmbG93IC8gc3RvcnkgZGV0YWlscyB2YXJpYWJsZXNcbiRncmV5OiAjNjU2NTY1O1xuJGxpZ2h0LWdyZXktMjogI2IxYjRiNjtcbiRsaWdodC1ncmV5LTM6ICNiNGI0YjQ7XG4kbGlnaHQtZ3JleS00OiAjY2ZkM2Q4O1xuJGxpZ2h0LWdyZXktNTogI2Q5ZTBlNztcbiRsaWdodC1ncmV5LTY6ICNmMWYyZjI7XG4kbGlnaHQtZ3JleS03OiAjYzRjNGM0O1xuJGxpZ2h0LWdyZXktODogI2U5ZTllOTtcbiRsaWdodC1ncmV5LTk6ICNlNmVhZWQ7XG4kbGlnaC1ncmV5LXNlcGFyYXRvcjogI2MwYzBjMDtcbiRkYXJrLWdyZXk6ICMxYTFhMWE7XG4kZGFyay1ncmV5LTUwOiByZ2IoMjYsIDI2LCAyNiwgMC41KTtcbiRib3JkZXItZ3JleTogI2M3Y2RkNDtcbiRsaWdodC1wdXJwbGU6ICNlYWVhZWE7XG4kaW5wdXQtZGlzYWJsZWQtYmc6ICNmNGY2Zjg7XG4kZXJyb3ItMjogI2RlMjIyZDtcbiRkYW5nZXI6ICNjOTMwNGQ7XG4kcHJldmlvdXMtcGlsbC1jb2xvcjogIzcxOGQ2ZjtcbiR0b29sdGlwLWdyZXk6ICNhYmFiYWI7XG4kbGlnaHQtZ3JlZW46ICNjZmU1ZTQ2NjtcblxuJGZpbHRlcnMtbW9kYWwtaGVhZGVyLXppbmRleDogMTAwMDA7XG4kbW9kYWwtemluZGV4OiA5OTk5O1xuJGxvY2F0aW9uLW92ZXJsYXktemluZGV4OiA5MDAxO1xuJGhlYWRlci1hc2lkZS16aW5kZXg6IDgwMDI7XG4kaGVhZGVyLWFzaWRlLWJhY2tncm91bmQtemluZGV4OiA4MDAxO1xuJGhlYWRlci16aW5kZXg6IDgwMDA7XG4kbmF2aWdhdGlvbi16aW5kZXg6IDgwMDA7XG4kcGFnZS1sb2FkaW5nLXppbmRleDogNzAwMTtcbiR0b29sdGlwLXppbmRleDogNzAwMDtcbiRuZXctc3RvcnktY29udGVudC1zdGF0ZS16aW5kZXg6IDUwMDtcbiRmaWx0ZXItZHJvcGRvd24temluZGV4OiAxMDA7XG4kbW9kYWwtdG9wLWluZGljYXRvci16aW5kZXg6IDUxO1xuJG1vZGFsLXRvcC1pbmRpY2F0b3ItYmFja2dyb3VuZC16aW5kZXg6IDUxO1xuJGNoYXJ0LXppbmRleDogMTtcbiRjaGFydC1jb250cm9sLXppbmRleDogMjtcblxuJHNsaWRlLXRvZ2dsZS1kaXNhYmxlZC1vcHRpb24tYmFja2dyb3VuZDogI2RkZGRkZDtcblxuJHRvYXN0LWluZm8tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4kdG9hc3QtaW5mby10aXRsZS1jb2xvcjogIzQ5NDk0OTtcbiR0b2FzdC1pbmZvLW1lc3NhZ2UtY29sb3I6ICM0MjJjMDA7XG4kdG9hc3QtaW5mby1idXR0b24tY29sb3I6ICM2YzRlOTk7XG5cbiR0b2FzdC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6ICNkOWVlZWQ7XG4kdG9hc3Qtc3VjY2Vzcy10aXRsZS1jb2xvcjogIzAwNDU0MjtcbiR0b2FzdC1zdWNjZXNzLW1lc3NhZ2UtY29sb3I6ICMwMTMyMzA7XG4kdG9hc3Qtc3VjY2Vzcy1idXR0b24tY29sb3I6ICMwMTY5NjU7XG5cbiR0b2FzdC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6ICNmZmYxZDU7XG4kdG9hc3Qtd2FybmluZy10aXRsZS1jb2xvcjogIzZiNDcwMDtcbiR0b2FzdC13YXJuaW5nLW1lc3NhZ2UtY29sb3I6ICM0MjJjMDA7XG4kdG9hc3Qtd2FybmluZy1idXR0b24tY29sb3I6ICNjYzhmMTQ7XG5cbiR0b2FzdC1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiAjZjVkNWRiO1xuJHRvYXN0LWVycm9yLXRpdGxlLWNvbG9yOiAjNzMwMDE1O1xuJHRvYXN0LWVycm9yLW1lc3NhZ2UtY29sb3I6ICM0NTA2MTE7XG4kdG9hc3QtZXJyb3Itc3VjY2Vzcy1jb2xvcjogI2Q5ZWVlZDtcbiR0b2FzdC1lcnJvci1idXR0b24tY29sb3I6ICNiMjFkMzk7XG5cbiR0b2FzdC1jbG9zZS1idXR0b24tY29sb3I6ICM3MzAwMTU7XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 90029:
/*!*****************************************************************!*\
  !*** ./src/app/modules/inbox/stories/stories-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoriesRoutingModule": () => (/* binding */ StoriesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/app-routing.props */ 18854);
/* harmony import */ var _stories_list_stories_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stories-list/stories-list.component */ 95540);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [{
  path: '',
  component: _stories_list_stories_list_component__WEBPACK_IMPORTED_MODULE_1__.StoriesListComponent,
  data: {
    title: 'inboxStories'
  }
}, {
  path: _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.INBOX_STORY_ROUTES.STORY,
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_services_fixed-positioning_fixed-positioning_ts-src_app_shared_component-246e65"), __webpack_require__.e("src_app_modules_inbox_stories_story-details_stories-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./story-details/stories-details.module */ 47857)).then(m => m.StoriesDetailsModule)
}];
class StoriesRoutingModule {
  static #_ = this.ɵfac = function StoriesRoutingModule_Factory(t) {
    return new (t || StoriesRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: StoriesRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](StoriesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 46745:
/*!*********************************************************!*\
  !*** ./src/app/modules/inbox/stories/stories.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoriesModule": () => (/* binding */ StoriesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _app_modules_inbox_stories_stories_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/modules/inbox/stories/stories.service */ 3539);
/* harmony import */ var _app_modules_inbox_stories_story_details_shared_shared_story_details_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/modules/inbox/stories/story-details/shared/shared-story-details.module */ 54633);
/* harmony import */ var _app_shared_components_button_button_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/components/button/button.module */ 82024);
/* harmony import */ var _app_shared_components_selectors_select_option_select_option_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/components/selectors/select-option/select-option.module */ 51233);
/* harmony import */ var _app_shared_components_selectors_select_select_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/components/selectors/select/select.module */ 70131);
/* harmony import */ var _app_shared_components_sort_sort_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/components/sort/sort.module */ 16933);
/* harmony import */ var _app_shared_icons_expand_more_icon_expand_more_icon_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/icons/expand-more-icon/expand-more-icon.module */ 14390);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/shared.module */ 44466);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _shared_components_audio_player_audio_player_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/components/audio-player/audio-player.module */ 94277);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-infinite-scroll */ 47364);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ 39743);
/* harmony import */ var _items_per_page_select_items_per_page_select_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./items-per-page-select/items-per-page-select.component */ 58862);
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pagination/pagination.component */ 89076);
/* harmony import */ var _pagination_pagination_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pagination/pagination.service */ 59096);
/* harmony import */ var _pagination_selection_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pagination/selection.service */ 98432);
/* harmony import */ var _stories_list_stories_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./stories-list/stories-list.component */ 95540);
/* harmony import */ var _stories_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./stories-routing.module */ 90029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 22560);




















class StoriesModule {
  static #_ = this.ɵfac = function StoriesModule_Factory(t) {
    return new (t || StoriesModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
    type: StoriesModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
    providers: [_app_modules_inbox_stories_stories_service__WEBPACK_IMPORTED_MODULE_0__.StoriesService, _pagination_pagination_service__WEBPACK_IMPORTED_MODULE_12__.PaginationService, _pagination_selection_service__WEBPACK_IMPORTED_MODULE_13__.SelectionService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_18__.InfiniteScrollModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__.SharedInboxModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule, _app_shared_components_sort_sort_module__WEBPACK_IMPORTED_MODULE_5__.SortModule, _stories_routing_module__WEBPACK_IMPORTED_MODULE_15__.StoriesRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule, _app_modules_inbox_stories_story_details_shared_shared_story_details_module__WEBPACK_IMPORTED_MODULE_1__.SharedStoryDetailsModule, _shared_components_audio_player_audio_player_module__WEBPACK_IMPORTED_MODULE_8__.AudioPlayerModule, _app_shared_components_button_button_module__WEBPACK_IMPORTED_MODULE_2__.ButtonModule, _app_shared_icons_expand_more_icon_expand_more_icon_module__WEBPACK_IMPORTED_MODULE_6__.ExpandMoreIconModule, _app_shared_components_selectors_select_select_module__WEBPACK_IMPORTED_MODULE_4__.SelectModule, _app_shared_components_selectors_select_option_select_option_module__WEBPACK_IMPORTED_MODULE_3__.SelectOptionModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](StoriesModule, {
    declarations: [_stories_list_stories_list_component__WEBPACK_IMPORTED_MODULE_14__.StoriesListComponent, _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_11__.PaginationComponent, _items_per_page_select_items_per_page_select_component__WEBPACK_IMPORTED_MODULE_10__.ItemsPerPageSelectComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_18__.InfiniteScrollModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__.SharedInboxModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule, _app_shared_components_sort_sort_module__WEBPACK_IMPORTED_MODULE_5__.SortModule, _stories_routing_module__WEBPACK_IMPORTED_MODULE_15__.StoriesRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule, _app_modules_inbox_stories_story_details_shared_shared_story_details_module__WEBPACK_IMPORTED_MODULE_1__.SharedStoryDetailsModule, _shared_components_audio_player_audio_player_module__WEBPACK_IMPORTED_MODULE_8__.AudioPlayerModule, _app_shared_components_button_button_module__WEBPACK_IMPORTED_MODULE_2__.ButtonModule, _app_shared_icons_expand_more_icon_expand_more_icon_module__WEBPACK_IMPORTED_MODULE_6__.ExpandMoreIconModule, _app_shared_components_selectors_select_select_module__WEBPACK_IMPORTED_MODULE_4__.SelectModule, _app_shared_components_selectors_select_option_select_option_module__WEBPACK_IMPORTED_MODULE_3__.SelectOptionModule]
  });
})();

/***/ }),

/***/ 3539:
/*!**********************************************************!*\
  !*** ./src/app/modules/inbox/stories/stories.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoriesService": () => (/* binding */ StoriesService)
/* harmony export */ });
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-table */ 96538);
/* harmony import */ var _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/app-routing.props */ 18854);
/* harmony import */ var _app_modules_inbox_inbox_filters_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/modules/inbox/inbox-filters.config */ 4268);
/* harmony import */ var _shared_components_mobile_table_mobile_table_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/mobile-table/mobile-table.model */ 63277);
/* harmony import */ var _shared_utils_filters_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/utils/filters.utils */ 65197);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_services_api_story_story_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/api/story/story.service */ 95138);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _core_services_filters_filters_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/filters/filters.service */ 86631);
/* harmony import */ var _pagination_pagination_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pagination/pagination.service */ 59096);
/* harmony import */ var _app_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/core/services/ui/ui.service */ 21428);














class StoriesService {
  constructor(router, storyService, translateService, filtersService, paginationService, uiService) {
    this.router = router;
    this.storyService = storyService;
    this.translateService = translateService;
    this.filtersService = filtersService;
    this.paginationService = paginationService;
    this.uiService = uiService;
    this.dataSource$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(null);
    this.currentPage = 1;
    this.listLimit = 50;
    this.scrollPos$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(0);
    this.isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(true);
    this.noMoreItems$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(false);
    this.listElements$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(new Array());
    this.sortElements$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(new Array());
    this.activeSort$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(null);
    this.filters = {};
    this.lastVisitedId$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(null);
    this.filtersService.filtersChanged$.pipe().subscribe(() => {
      this.currentPage = 1;
      if (this.router.url.includes(`${_app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.MAIN_ROUTES.INBOX}/${_app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.INBOX_ROUTES.STORIES}`)) {
        this.fetchData();
      }
    });
    this.fetchData();
  }
  onScroll() {
    if (this.isLoading$.getValue() || this.noMoreItems$.getValue()) {
      return;
    }
    this.loadMoreData();
  }
  sortChange(sort) {
    this.activeSort$.next(sort);
    this.currentPage = 1;
    this.fetchData();
  }
  setNewListItems(items, totalItems, overrideExistingItems = false) {
    const newItems = this.prepareListElementsWithCustomAction(items);
    this.listElements$.next(overrideExistingItems ? newItems : this.currentPage === 1 ? newItems : this.listElements$.getValue().concat(newItems));
    this.dataSource$.next(new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_9__.MatLegacyTableDataSource(this.listElements$.getValue()));
    !overrideExistingItems && this.verifyTotalItems(totalItems);
  }
  loadPage(page, limit) {
    this.currentPage = page;
    this.listLimit = limit;
    this.fetchData();
  }
  loadMoreData() {
    this.currentPage++;
    this.fetchData();
  }
  fetchData() {
    this.isLoading$.next(true);
    this.paginationService.currentPage = this.currentPage;
    this.paginationService.itemsPerPage = this.listLimit;
    this.filters = (0,_shared_utils_filters_utils__WEBPACK_IMPORTED_MODULE_3__.prepareFilterDataFromSessionStorage)(_app_modules_inbox_inbox_filters_config__WEBPACK_IMPORTED_MODULE_1__.inboxFiltersConfig);
    this.storyService.getPostsModerator(this.filters, this.currentPage, this.listLimit, this.activeSort$.getValue() || 'desc').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.finalize)(() => this.isLoading$.next(false))).subscribe({
      next: data => {
        this.paginationService.init(data);
        this.setNewListItems(data.items, data.meta.totalItems, !this.uiService.mobileView);
      },
      error: () => this.paginationService.restoreStateAfterError()
    });
  }
  prepareListElementsWithCustomAction(items) {
    return items.map(item => ({
      ...item,
      customActions: [new _shared_components_mobile_table_mobile_table_model__WEBPACK_IMPORTED_MODULE_2__.MobileTableAction('inbox.table.actions.review')]
    }));
  }
  verifyTotalItems(totalItems) {
    this.noMoreItems$.next(this.listElements$.getValue().length === totalItems);
  }
  deleteElement(processedStoryId) {
    this.listElements$.next(this.listElements$.getValue().filter(story => story.id !== processedStoryId));
    this.dataSource$.next(new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_9__.MatLegacyTableDataSource(this.listElements$.getValue()));
  }
  static #_ = this.ɵfac = function StoriesService_Factory(t) {
    return new (t || StoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_core_services_api_story_story_service__WEBPACK_IMPORTED_MODULE_4__.StoryService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_core_services_filters_filters_service__WEBPACK_IMPORTED_MODULE_5__.FiltersService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_6__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_app_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_7__.UIService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
    token: StoriesService,
    factory: StoriesService.ɵfac
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_modules_inbox_stories_stories_module_ts.js.map