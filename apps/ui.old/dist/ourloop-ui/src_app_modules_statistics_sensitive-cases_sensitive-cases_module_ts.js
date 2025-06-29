"use strict";
(self["webpackChunkourloop_ui"] = self["webpackChunkourloop_ui"] || []).push([["src_app_modules_statistics_sensitive-cases_sensitive-cases_module_ts"],{

/***/ 95256:
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/statistics/sensitive-cases/accountability-process/accountability-process.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountabilityProcessComponent": () => (/* binding */ AccountabilityProcessComponent)
/* harmony export */ });
/* harmony import */ var _see_process_see_process_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./see-process/see-process-modal.component */ 94075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_services_modal_modal_v2_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/modal/modal-v2.service */ 12151);
/* harmony import */ var _shared_icons_add_icon_add_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/icons/add-icon/add-icon.component */ 85581);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/button/button.component */ 90042);
/* harmony import */ var _shared_icons_close_icon_close_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/icons/close-icon/close-icon.component */ 61414);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slider/slider.component */ 15507);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 38699);









function AccountabilityProcessComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2)(1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "app-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("clicked", function AccountabilityProcessComponent_div_0_Template_app_button_clicked_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.handleSeeProcessClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "loop-slider");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "app-close-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AccountabilityProcessComponent_div_0_Template_app_close_icon_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.visibilityChange(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 3, "statisticsCases.accountabilityProcess.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 5, "statisticsCases.accountabilityProcess.description"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 7, "statisticsCases.accountabilityProcess.stepByStepBtn"), " ");
  }
}
function AccountabilityProcessComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 10)(1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "app-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("clicked", function AccountabilityProcessComponent_ng_template_1_Template_app_button_clicked_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.visibilityChange(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "app-add-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, "statisticsCases.accountabilityProcess.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 4, "statisticsCases.accountabilityProcess.seeMore"), " ");
  }
}
class AccountabilityProcessComponent {
  constructor(cdr, modalService) {
    this.cdr = cdr;
    this.modalService = modalService;
    this.visible = true;
  }
  visibilityChange(value) {
    this.visible = value;
    this.cdr.detectChanges();
  }
  handleSeeProcessClick() {
    this.modalService.open(_see_process_see_process_modal_component__WEBPACK_IMPORTED_MODULE_0__.SeeProcessModalComponent);
  }
  static #_ = this.ɵfac = function AccountabilityProcessComponent_Factory(t) {
    return new (t || AccountabilityProcessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_modal_modal_v2_service__WEBPACK_IMPORTED_MODULE_1__.ModalServiceV2));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: AccountabilityProcessComponent,
    selectors: [["loop-accountability-process"]],
    decls: 3,
    vars: 2,
    consts: [["class", "accountability-process", 4, "ngIf", "ngIfElse"], ["invisible", ""], [1, "accountability-process"], [1, "accountability-process__title"], [1, "accountability-process__wrapper"], [1, "accountability-process__description"], [1, "accountability-process__description-text"], ["variant", "secondary", "mode", "v2", 1, "accountability-process__more-button", "main", 3, "clicked"], [1, "accountability-process__slider"], [1, "accountability-process__close-icon", 3, "click"], [1, "accountability-process--hidden"], ["variant", "secondary", "mode", "v2", 1, "accountability-process__more-button", 3, "clicked"], [1, "mr-0625"]],
    template: function AccountabilityProcessComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, AccountabilityProcessComponent_div_0_Template, 15, 9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AccountabilityProcessComponent_ng_template_1_Template, 8, 6, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.visible)("ngIfElse", _r1);
      }
    },
    dependencies: [_shared_icons_add_icon_add_icon_component__WEBPACK_IMPORTED_MODULE_2__.AddIconComponent, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__.ButtonComponent, _shared_icons_close_icon_close_icon_component__WEBPACK_IMPORTED_MODULE_4__.CloseIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _slider_slider_component__WEBPACK_IMPORTED_MODULE_5__.SliderComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
    styles: ["[_nghost-%COMP%] {\n  display: flex;\n  width: 100%;\n  margin: 1.25rem 0 0.313rem;\n}\n@media (min-width: 768px) {\n  [_nghost-%COMP%] {\n    margin: 1.25rem 0 3.125rem;\n  }\n}\n[_nghost-%COMP%]   .accountability-process__more-button[_ngcontent-%COMP%]     button {\n  padding: 0.781rem 2rem;\n}\n@media (min-width: 768px) {\n  [_nghost-%COMP%]   .accountability-process__more-button[_ngcontent-%COMP%]     button {\n    padding: 1.094rem 2.875rem;\n  }\n}\n[_nghost-%COMP%]   .accountability-process__more-button[_ngcontent-%COMP%]     button .content {\n  font-size: 1.125rem;\n}\n[_nghost-%COMP%]   *[_ngcontent-%COMP%] {\n  line-height: normal;\n}\n\n.accountability-process[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  position: relative;\n  padding: 1.25rem 1.25rem 1.875rem 1.25rem;\n  background-color: white;\n}\n@media (max-width: 767.9px) {\n  .accountability-process[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n}\n@media (min-width: 768px) {\n  .accountability-process[_ngcontent-%COMP%] {\n    padding: 3.125rem 3.125rem 3.75rem;\n    border-radius: 0.5rem;\n  }\n}\n.accountability-process__close-icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0.938rem;\n  color: #b4b4b4;\n  cursor: pointer;\n  transition: 0.2s;\n}\nhtml:not([dir=rtl])[_nghost-%COMP%]   .accountability-process__close-icon[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .accountability-process__close-icon[_ngcontent-%COMP%] {\n  right: 0.938rem;\n}\nhtml[dir=rtl][_nghost-%COMP%]   .accountability-process__close-icon[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .accountability-process__close-icon[_ngcontent-%COMP%] {\n  left: 0.938rem;\n}\n@media (min-width: 768px) {\n  .accountability-process__close-icon[_ngcontent-%COMP%] {\n    top: 2.188rem;\n  }\n  html:not([dir=rtl])[_nghost-%COMP%]   .accountability-process__close-icon[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .accountability-process__close-icon[_ngcontent-%COMP%] {\n    right: 2.188rem;\n  }\n  html[dir=rtl][_nghost-%COMP%]   .accountability-process__close-icon[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .accountability-process__close-icon[_ngcontent-%COMP%] {\n    left: 2.188rem;\n  }\n}\n.accountability-process__close-icon[_ngcontent-%COMP%]:hover {\n  color: #31135e;\n}\n.accountability-process__wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n@media (min-width: 768px) {\n  .accountability-process__wrapper[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n.accountability-process__description[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  position: relative;\n  order: 2;\n}\n@media (max-width: 767.9px) {\n  .accountability-process__description[_ngcontent-%COMP%] {\n    border-top: 1px solid #e9e9e9;\n    text-align: center;\n  }\n  .accountability-process__description[_ngcontent-%COMP%]   .accountability-process__more-button[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n@media (min-width: 768px) {\n  .accountability-process__description[_ngcontent-%COMP%] {\n    order: 1;\n  }\n}\n@media (min-width: 768px) {\n  html:not([dir=rtl])[_nghost-%COMP%]   .accountability-process__description[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .accountability-process__description[_ngcontent-%COMP%] {\n    padding-right: 3.125rem;\n  }\n  html[dir=rtl][_nghost-%COMP%]   .accountability-process__description[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .accountability-process__description[_ngcontent-%COMP%] {\n    padding-left: 3.125rem;\n  }\n  .accountability-process__description[_ngcontent-%COMP%]:after {\n    content: \"\";\n    display: block;\n    max-height: 21.875rem;\n    height: calc(100% + 1rem);\n    width: 1px;\n    position: absolute;\n    top: -1rem;\n    background-color: #e9e9e9;\n  }\n  html:not([dir=rtl])[_nghost-%COMP%]   .accountability-process__description[_ngcontent-%COMP%]:after, html:not([dir=rtl])   [_nghost-%COMP%]   .accountability-process__description[_ngcontent-%COMP%]:after {\n    right: 0;\n  }\n  html[dir=rtl][_nghost-%COMP%]   .accountability-process__description[_ngcontent-%COMP%]:after, html[dir=rtl]   [_nghost-%COMP%]   .accountability-process__description[_ngcontent-%COMP%]:after {\n    left: 0;\n  }\n}\n.accountability-process__description-text[_ngcontent-%COMP%] {\n  padding-top: 1.875rem;\n  font-size: 0.875rem;\n}\n@media (min-width: 768px) {\n  .accountability-process__description-text[_ngcontent-%COMP%] {\n    max-width: 31.125rem;\n    font-size: 1rem;\n  }\n}\n.accountability-process__description[_ngcontent-%COMP%]   .accountability-process__more-button[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.accountability-process__slider[_ngcontent-%COMP%] {\n  flex: 1;\n  order: 1;\n}\n@media (min-width: 768px) {\n  .accountability-process__slider[_ngcontent-%COMP%] {\n    order: 2;\n    max-width: 50%;\n  }\n}\n.accountability-process__title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: bold;\n}\n@media (min-width: 768px) {\n  .accountability-process__title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n.accountability-process--hidden[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  padding: 1.25rem 1.25rem 1.875rem 1.25rem;\n  background-color: white;\n}\n@media (min-width: 768px) {\n  .accountability-process--hidden[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: center;\n    padding: 2.063rem 3.125rem;\n  }\n}\n.accountability-process__more-button[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n@media (max-width: 767.9px) {\n  .accountability-process__more-button[_ngcontent-%COMP%] {\n    margin-top: 1.25rem;\n  }\n}\n@media (min-width: 768px) {\n  .accountability-process__more-button.main[_ngcontent-%COMP%] {\n    margin-top: 1.875rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnRhYmlsaXR5LXByb2Nlc3MuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9zdHlsZXMvX21peGlucy5zY3NzIiwiLi4vLi4vLi4vLi4vc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUFGRjtBQytMRTtFRGhNRjtJQU1JLDBCQUFBO0VBREY7QUFDRjtBQUlJO0VBQ0Usc0JBQUE7QUFGTjtBQ3VMRTtFRHRMRTtJQUlJLDBCQUFBO0VBRE47QUFDRjtBQUdNO0VBQ0UsbUJBQUE7QUFEUjtBQU1FO0VBQ0UsbUJBQUE7QUFKSjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsdUJBQUE7QUFMRjtBQ3VKRTtFRHhKRjtJQVNJLG1CQUFBO0VBSkY7QUFDRjtBQzhKRTtFRHBLRjtJQWFJLGtDQUFBO0lBQ0EscUJBQUE7RUFIRjtBQUNGO0FBS0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUVBLGNFd0NXO0VGdkNYLGVBQUE7RUFDQSxnQkFBQTtBQUpKO0FDWEU7RUEwQ0ksZUQ5QmE7QUFFbkI7QUNSRTtFQXdDSSxjRGxDYTtBQUtuQjtBQ3dJRTtFRG5KQTtJQVlJLGFBQUE7RUFHSjtFQ3JCQTtJQTBDSSxlRHZCZTtFQUtuQjtFQ2xCQTtJQXdDSSxjRDNCZTtFQVFuQjtBQUNGO0FBTkk7RUFDRSxjRXBEWTtBRjREbEI7QUFKRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFNSjtBQ3FIRTtFRDlIQTtJQU1JLG1CQUFBO0VBT0o7QUFDRjtBQUpFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQU1KO0FDNkZFO0VEeEdBO0lBUUksNkJBQUE7SUFDQSxrQkFBQTtFQU9KO0VBTEk7SUFDRSxzQkFBQTtFQU9OO0FBQ0Y7QUNnR0U7RURwSEE7SUFpQkksUUFBQTtFQU9KO0FBQ0Y7QUMyRkU7RUF6SkE7SUEwQ0ksdUJEZ0J1QjtFQVEzQjtFQzVEQTtJQXdDSSxzQkRZdUI7RUFXM0I7RUFUSTtJQUNFLFdBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSx5QkFBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7SUFFQSx5QkVYTztFRnFCYjtFQy9FQTtJQTBDSSxRRDBCaUI7RUFjckI7RUM1RUE7SUF3Q0ksT0RzQmlCO0VBaUJyQjtBQUNGO0FBYkk7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FBZU47QUMrREU7RURoRkU7SUFLSSxvQkFBQTtJQUNBLGVBQUE7RUFnQk47QUFDRjtBQWJJO0VBQ0UsdUJBQUE7RUFBQSxrQkFBQTtBQWVOO0FBWEU7RUFDRSxPQUFBO0VBQ0EsUUFBQTtBQWFKO0FDa0RFO0VEakVBO0lBS0ksUUFBQTtJQUNBLGNBQUE7RUFjSjtBQUNGO0FBWEU7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FBYUo7QUN3Q0U7RUR2REE7SUFLSSxpQkFBQTtFQWNKO0FBQ0Y7QUFYRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLHlDQUFBO0VBQ0EsdUJBQUE7QUFhSjtBQzJCRTtFRDlDQTtJQVNJLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSwwQkFBQTtFQWNKO0FBQ0Y7QUFYRTtFQUNFLG1CQUFBO0FBYUo7QUNLRTtFRG5CQTtJQUlJLG1CQUFBO0VBY0o7QUFDRjtBQ1lFO0VEeEJFO0lBRUksb0JBQUE7RUFjTjtBQUNGIiwiZmlsZSI6ImFjY291bnRhYmlsaXR5LXByb2Nlc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdtaXhpbnMnO1xuQGltcG9ydCAndmFyaWFibGVzJztcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxLjI1cmVtIDAgMC4zMTNyZW07XG5cbiAgQGluY2x1ZGUgbW9iaWxlLXVwIHtcbiAgICBtYXJnaW46IDEuMjVyZW0gMCAzLjEyNXJlbTtcbiAgfVxuXG4gIC5hY2NvdW50YWJpbGl0eS1wcm9jZXNzX19tb3JlLWJ1dHRvbiB7XG4gICAgOjpuZy1kZWVwIGJ1dHRvbiB7XG4gICAgICBwYWRkaW5nOiAwLjc4MXJlbSAycmVtO1xuXG4gICAgICBAaW5jbHVkZSBtb2JpbGUtdXAge1xuICAgICAgICBwYWRkaW5nOiAxLjA5NHJlbSAyLjg3NXJlbTtcbiAgICAgIH1cblxuICAgICAgLmNvbnRlbnQge1xuICAgICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICoge1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIH1cbn1cblxuLmFjY291bnRhYmlsaXR5LXByb2Nlc3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxLjI1cmVtIDEuMjVyZW0gMS44NzVyZW0gMS4yNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbiAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICBAaW5jbHVkZSBtb2JpbGUtdXAge1xuICAgIHBhZGRpbmc6IDMuMTI1cmVtIDMuMTI1cmVtIDMuNzVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICB9XG5cbiAgJl9fY2xvc2UtaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDAuOTM4cmVtO1xuICAgIEBpbmNsdWRlIHJpZ2h0KDAuOTM4cmVtKTtcbiAgICBjb2xvcjogJGxpZ2h0LWdyZXktMztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC4ycztcblxuICAgIEBpbmNsdWRlIG1vYmlsZS11cCB7XG4gICAgICB0b3A6IDIuMTg4cmVtO1xuICAgICAgQGluY2x1ZGUgcmlnaHQoMi4xODhyZW0pO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICRjb2xvci1wdXJwbGUtOTA7XG4gICAgfVxuICB9XG5cbiAgJl9fd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgQGluY2x1ZGUgbW9iaWxlLXVwIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgfVxuICB9XG5cbiAgJl9fZGVzY3JpcHRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4OiAxO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvcmRlcjogMjtcblxuICAgIEBpbmNsdWRlIG1vYmlsZS1vbmx5IHtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkbGlnaHQtZ3JleS04O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAuYWNjb3VudGFiaWxpdHktcHJvY2Vzc19fbW9yZS1idXR0b24ge1xuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIEBpbmNsdWRlIG1vYmlsZS11cCB7XG4gICAgICBvcmRlcjogMTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtb2JpbGUtdXAge1xuICAgICAgQGluY2x1ZGUgcGFkZGluZy1yaWdodCgzLjEyNXJlbSk7XG5cbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1heC1oZWlnaHQ6IDIxLjg3NXJlbTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAxcmVtKTtcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC0xcmVtO1xuICAgICAgICBAaW5jbHVkZSByaWdodCgwKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyZXktODtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLXRleHQge1xuICAgICAgcGFkZGluZy10b3A6IDEuODc1cmVtO1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcblxuICAgICAgQGluY2x1ZGUgbW9iaWxlLXVwIHtcbiAgICAgICAgbWF4LXdpZHRoOiAzMS4xMjVyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYWNjb3VudGFiaWxpdHktcHJvY2Vzc19fbW9yZS1idXR0b24ge1xuICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIH1cbiAgfVxuXG4gICZfX3NsaWRlciB7XG4gICAgZmxleDogMTtcbiAgICBvcmRlcjogMTtcblxuICAgIEBpbmNsdWRlIG1vYmlsZS11cCB7XG4gICAgICBvcmRlcjogMjtcbiAgICAgIG1heC13aWR0aDogNTAlO1xuICAgIH1cbiAgfVxuXG4gICZfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgQGluY2x1ZGUgbW9iaWxlLXVwIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIH1cbiAgfVxuXG4gICYtLWhpZGRlbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxLjI1cmVtIDEuMjVyZW0gMS44NzVyZW0gMS4yNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuICAgIEBpbmNsdWRlIG1vYmlsZS11cCB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDIuMDYzcmVtIDMuMTI1cmVtO1xuICAgIH1cbiAgfVxuXG4gICZfX21vcmUtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuXG4gICAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgICAgbWFyZ2luLXRvcDogMS4yNXJlbTtcbiAgICB9XG5cbiAgICAmLm1haW4ge1xuICAgICAgQGluY2x1ZGUgbW9iaWxlLXVwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMS44NzVyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AbWl4aW4gZmxleC1nYXAoJGdhcCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgbWFyZ2luLXRvcDogKC0kZ2FwKTtcbiAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoKC0kZ2FwKSwgJGdsb2JhbCk7XG5cbiAgPiAqIHtcbiAgICBtYXJnaW4tdG9wOiAkZ2FwO1xuICAgIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCRnYXAsICRnbG9iYWwpO1xuICB9XG59XG5cbkBtaXhpbiBiYXNlLWNvbnRhaW5lcigkY29udGVudC13aWR0aCkge1xuICAkZGVza3RvcC1wYWRkaW5nOiAycmVtO1xuICBtYXgtd2lkdGg6IGNhbGMoI3skY29udGVudC13aWR0aH0gKyAoI3skZGVza3RvcC1wYWRkaW5nfSkpO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQycmVtKSB7XG4gICAgQGluY2x1ZGUgcGFkZGluZy1sZWZ0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICAgIEBpbmNsdWRlIHBhZGRpbmctcmlnaHQoJGRlc2t0b3AtcGFkZGluZywgdHJ1ZSk7XG4gIH1cbn1cblxuQG1peGluIGNlbnRlckFic29sdXRlRWxlbWVudCB7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbkBtaXhpbiBvbmx5LWx0ci1nbG9iYWwge1xuICBodG1sOm5vdChbZGlyPSdydGwnXSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsLWdsb2JhbCB7XG4gIGh0bWxbZGlyPSdydGwnXSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1sdHIge1xuICA6aG9zdC1jb250ZXh0KGh0bWw6bm90KFtkaXI9J3J0bCddKSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsIHtcbiAgOmhvc3QtY29udGV4dChodG1sW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBydGwtdmFsdWUoJHByb3BlcnR5LCAkbHRyLXZhbHVlLCAkcnRsLXZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaWYgJGdsb2JhbCA9PSB0cnVlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ci1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsLWdsb2JhbCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRydGwtdmFsdWU7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ciB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRsdHItdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gcnRsLXByb3BlcnR5KCRsdHItcHJvcGVydHksICRydGwtcHJvcGVydHksICR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcnRsLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skbHRyLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hcmdpbi1sZWZ0KCRtYXJnaW4sICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShtYXJnaW4tbGVmdCwgbWFyZ2luLXJpZ2h0LCAkbWFyZ2luLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIG1hcmdpbi1yaWdodCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLXJpZ2h0LCBtYXJnaW4tbGVmdCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nKCRwYWRkaW5nVG9wLCAkcGFkZGluZ1JpZ2h0LCAkcGFkZGluZ0JvdHRvbSwgJHBhZGRpbmdMZWZ0LCAkZ2xvYmFsOiBmYWxzZSkge1xuICBwYWRkaW5nLXRvcDogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nUmlnaHQsICRnbG9iYWwpO1xuICBwYWRkaW5nLWJvdHRvbTogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nTGVmdCwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLWxlZnQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmctcmlnaHQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRleHQtYWxpZ24tbGVmdCgkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUodGV4dC1hbGlnbiwgbGVmdCwgcmlnaHQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShsZWZ0LCByaWdodCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHJpZ2h0LCBsZWZ0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gdHJhbnNsYXRlWFkoJHZhbHVlWCwgJHZhbHVlWSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRyYW5zZm9ybSwgdHJhbnNsYXRlKCR2YWx1ZVgsICR2YWx1ZVkpLCB0cmFuc2xhdGUoLSR2YWx1ZVgsICR2YWx1ZVkpLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1sZWZ0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1sZWZ0LCBib3JkZXItcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItcmlnaHQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXJpZ2h0LCBib3JkZXItbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsIGJvcmRlci10b3AtbGVmdC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItdG9wLWxlZnQtcmFkaXVzLCBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGZsb2F0LWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCBsZWZ0LCByaWdodCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gZmxvYXQtcmlnaHQge1xuICBAaW5jbHVkZSBydGwtdmFsdWUoZmxvYXQsIHJpZ2h0LCBsZWZ0LCAkZ2xvYmFsOiBmYWxzZSk7XG59XG5cbkBtaXhpbiBzbWFsbC1kZXNrdG9wLW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbGcpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC14bCAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1hbmQtdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbGcgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBzbWFsbC1tb2JpbGUtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1zIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbWQgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0YWJsZXQtb25seSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS11cCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBkaXNhYmxlLXNjcm9sbGJhciB7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIiwiJHN0YW5kYXJkRm9udEZhbWlseTogJ05vdG8gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGNvbnRlbnQtdG9wLXBhZGRpbmc6IDNyZW07XG4kcG9zdC1saXN0LWJnOiAjZGFkYWRhO1xuJHdoaXRlOiAjZmZmZmZmO1xuJHBvc3QtcHJldmlldy1iZzogd2hpdGU7XG4kbGlnaHQtZ3JheS1iZzogI2Y0ZjRmNDtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1sZWZ0OiAyLjM0NHJlbTtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1yaWdodDogMS4wNjNyZW07XG4kcG9zdC1wcmV2aWV3LXBhZGRpbmc6IDIuNXJlbSAkcG9zdC1wcmV2aWV3LXBhZGRpbmctcmlnaHQgMS4yNXJlbSAkcG9zdC1wcmV2aWV3LXBhZGRpbmctbGVmdDtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1tb2JpbGU6IDFyZW0gMXJlbSAwLjVyZW0gMXJlbTtcbiRwb3N0LXBhZGRpbmctYm90dG9tOiAxcmVtO1xuJHBvc3QtcHJldmlldy1ndXR0ZXI6IDJweDtcbiRwb3N0LWhpZ2hsaWdodC1jb2xvcjogIzU3MGY4NTtcbiRjb2xvci1wdXJwbGUtOTA6ICMzMTEzNWU7XG4kY29sb3ItcHVycGxlLTYwOiAjOTg4YWFlO1xuJGNvbG9yLXB1cnBsZS01MDogIzk4ODlhZjtcbiRjb2xvci1wdXJwbGUtMTA6ICNmNWYzZjc7XG4kY29sb3ItcHVycGxlLWxpZ2h0OiAjNGIzNWJjO1xuJGNvbG9yLXB1cnBsZS12ZXJ5LWxpZ2h0OiAjODY2YWIwO1xuJGNvbG9yLXB1cnBsZS1zdGVwcGVyOiAjNGEyYjdhO1xuJGNvbG9yLWdyZWVuLTEwMDogIzA1MjgwNDtcbiRjb2xvci1ncmVlbi05MDogIzBkM2QwYjtcbiRjb2xvci1ncmVlbi04MDogIzFmNmIxZTtcbiRjb2xvci1ncmVlbi03MDogIzM1OGEzNDtcbiRjb2xvci1ncmVlbi02MDogIzZkOWE2ZTtcbiRjb2xvci1ncmVlbi01MDogIzg5YTg4ZjtcbiRjb2xvci1ncmVlbi00MDogIzlmYzhhNjtcbiRjb2xvci1ncmVlbi0zMDogI2FhZDZiMztcbiRjb2xvci1ncmVlbi0yMDogI2M5ZTlkMTtcbiRjb2xvci1ncmVlbi0xMDogI2YzZjdmMztcbiRjb2xvci1ncmVlbi1zdGVwcGVyOiAjMTA3RDc5O1xuJGNvbG9yLWdyZWVuLW1lZGl1bTogI2FkZGFhZjtcbiRjb2xvci1ncmVlbi1saWdodDogIzNBQjA5ODtcbiRjb2xvci1ncmVlbi12ZXJ5LWxpZ2h0OiAjRURGRkZDO1xuJGdyZXktMTogI2Q2ZDBkZjtcbiRzdXBwb3J0LTAxOiAjZGExZTI4O1xuJGVycm9yOiAjZWUyMzJmO1xuJHRleHQtYmxhY2s6ICMxNjE2MTY7XG4kdGV4dC1zZWNvbmRhcnk6ICMzOTM5Mzk7XG4kdGV4dC1ncmF5ZWQ6ICM1MjUyNTI7XG4kdGV4dC1ncmF5ZWQ4MDogIzhmOGI4YjtcbiR0ZXh0LWdyYXktY2F0OiAjNmQ3Mjc4O1xuJHVpLWJhY2tncm91bmQtZ3JheTogI2Y4ZjhmOTtcbiRib3JkZXI6ICNlOGU3ZWE7XG4kZW50aXR5LWJvcmRlci1jb2xvcjogIzFjMGYzMDIxO1xuJGxvYWRpbmctYmc6IHJnYigwIDAgMCAvIDE4JSk7XG4kc3VwcG9ydC0wNDogIzAwNDNjZTtcbiRsb29wLXVzZXJuYW1lOiAjMTk4MDM4O1xuJGxvb3AtYWN0aXZlLWN1cnJlbnQtdXNlcjogIzI0YTE0ODtcbiR3YXJtLWdyYXktMTAtY29sb3I6ICNmN2YzZjI7XG4kd2FybS1ncmF5LTIwLWNvbG9yOiAjZTVlMGRmO1xuJGhlYWRpbmctMS1jb2xvcjogIzFjMGYzMDtcbiRoZWFkaW5nLTItY29sb3I6ICMzMjA3NGQ7XG4kaGVhZGluZy0zLWNvbG9yOiAjMmYyNzM1O1xuJG1vYmlsZS1pY29uLWNvbG9yOiAjMWMwZjMwO1xuJHN0YXRlLWRpc2FibGVkLTAyOiAjYzZjNmM2O1xuJGxpbmstMDI6ICM1NjAxYjI7XG4kaGVhZGVyLXB1cnBsZTogIzMxMTM1ZTtcbiRoZWFkZXItZ3JlZW46ICMxMDdkNzk7XG4kcHVycGxlLWxpZ2h0OiAjY2JjNGQ3O1xuJHB1cnBsZS1iYWNrZ3JvdW5kLWxpZ2h0OiAjZGNkNWU3O1xuJGxvb3AtaW50ZXJhY3RpdmUtMDE6ICMxMDdkNzk7XG4kbG9vcC1pbnRlcmFjdGl2ZS0wMS1vcGFjaXR5OiByZ2JhKDE2LCAxMjUsIDEyMSwgMC4zKTtcbiRmaWx0ZXJzLWdyZWVuOiAjMDU2NzYzO1xuLy8gQnJlYWtwb2ludHNcblxuJGJyZWFrcG9pbnQtczogMzc1cHg7XG4kYnJlYWtwb2ludC1zbTogNDIwcHg7XG4kYnJlYWtwb2ludC1tZDogNzY4cHg7XG4kYnJlYWtwb2ludC1sZzogMTA4MHB4O1xuJGJyZWFrcG9pbnQteGw6IDEyNzVweDtcblxuJGJyZWFrcG9pbnQtbWQtdjI6IDgyMHB4O1xuXG4kaGVhZGVyLWhlaWdodDogNC4zNzVyZW07XG4kaGVhZGVyLWhlaWdodC12MjogNC4zNzVyZW07XG4kc3RhdGUtc2VsZWN0ZWQtdWk6ICNlMGUwZTA7XG4kYy1sZWZ0LXBhZGRpbmc6IDEuNXJlbTtcbiRtZW51LWFjdGl2ZS1jb2xvcjogIzNBQjA5ODtcbiRtZW51LWhvdmVyLWNvbG9yOiAjM0FCMDk4O1xuJHRhYi1pbmFjdGl2ZS1jb2xvcjogIzg5YWY5MztcbiRsaW5lLWNvbG9yOiAjZDBkZmQyO1xuJGJvcmRlci1ncmF5OiAjY2NjY2NjO1xuJHRleHQtZ3JheTogIzgwODA4MDtcbiRiYXNlLWNvbnRhaW5lci13aWR0aDogODEuMTI0cmVtO1xuJGhlYWRlci11bmRlcmxpbmUtaGVpZ2h0OiAwLjMxM3JlbTtcblxuLy8gTW9kZXJhdG9yIHJldmlldyBzZWN0aW9uc1xuJGZvb3Rlci1oZWlnaHQ6IDRyZW07XG4kdG9wYmFyLWhlaWdodDogMTAuNXJlbTtcbiRzdGVwcGVyLWhlaWdodDogNi43cmVtO1xuXG4vLyBOZXcgU3RvcnkgZmxvdyAvIHN0b3J5IGRldGFpbHMgdmFyaWFibGVzXG4kZ3JleTogIzY1NjU2NTtcbiRsaWdodC1ncmV5LTI6ICNiMWI0YjY7XG4kbGlnaHQtZ3JleS0zOiAjYjRiNGI0O1xuJGxpZ2h0LWdyZXktNDogI2NmZDNkODtcbiRsaWdodC1ncmV5LTU6ICNkOWUwZTc7XG4kbGlnaHQtZ3JleS02OiAjZjFmMmYyO1xuJGxpZ2h0LWdyZXktNzogI2M0YzRjNDtcbiRsaWdodC1ncmV5LTg6ICNlOWU5ZTk7XG4kbGlnaHQtZ3JleS05OiAjZTZlYWVkO1xuJGxpZ2gtZ3JleS1zZXBhcmF0b3I6ICNjMGMwYzA7XG4kZGFyay1ncmV5OiAjMWExYTFhO1xuJGRhcmstZ3JleS01MDogcmdiKDI2LCAyNiwgMjYsIDAuNSk7XG4kYm9yZGVyLWdyZXk6ICNjN2NkZDQ7XG4kbGlnaHQtcHVycGxlOiAjZWFlYWVhO1xuJGlucHV0LWRpc2FibGVkLWJnOiAjZjRmNmY4O1xuJGVycm9yLTI6ICNkZTIyMmQ7XG4kZGFuZ2VyOiAjYzkzMDRkO1xuJHByZXZpb3VzLXBpbGwtY29sb3I6ICM3MThkNmY7XG4kdG9vbHRpcC1ncmV5OiAjYWJhYmFiO1xuJGxpZ2h0LWdyZWVuOiAjY2ZlNWU0NjY7XG5cbiRmaWx0ZXJzLW1vZGFsLWhlYWRlci16aW5kZXg6IDEwMDAwO1xuJG1vZGFsLXppbmRleDogOTk5OTtcbiRsb2NhdGlvbi1vdmVybGF5LXppbmRleDogOTAwMTtcbiRoZWFkZXItYXNpZGUtemluZGV4OiA4MDAyO1xuJGhlYWRlci1hc2lkZS1iYWNrZ3JvdW5kLXppbmRleDogODAwMTtcbiRoZWFkZXItemluZGV4OiA4MDAwO1xuJG5hdmlnYXRpb24temluZGV4OiA4MDAwO1xuJHBhZ2UtbG9hZGluZy16aW5kZXg6IDcwMDE7XG4kdG9vbHRpcC16aW5kZXg6IDcwMDA7XG4kbmV3LXN0b3J5LWNvbnRlbnQtc3RhdGUtemluZGV4OiA1MDA7XG4kZmlsdGVyLWRyb3Bkb3duLXppbmRleDogMTAwO1xuJG1vZGFsLXRvcC1pbmRpY2F0b3ItemluZGV4OiA1MTtcbiRtb2RhbC10b3AtaW5kaWNhdG9yLWJhY2tncm91bmQtemluZGV4OiA1MTtcbiRjaGFydC16aW5kZXg6IDE7XG4kY2hhcnQtY29udHJvbC16aW5kZXg6IDI7XG5cbiRzbGlkZS10b2dnbGUtZGlzYWJsZWQtb3B0aW9uLWJhY2tncm91bmQ6ICNkZGRkZGQ7XG5cbiR0b2FzdC1pbmZvLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuJHRvYXN0LWluZm8tdGl0bGUtY29sb3I6ICM0OTQ5NDk7XG4kdG9hc3QtaW5mby1tZXNzYWdlLWNvbG9yOiAjNDIyYzAwO1xuJHRvYXN0LWluZm8tYnV0dG9uLWNvbG9yOiAjNmM0ZTk5O1xuXG4kdG9hc3Qtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiAjZDllZWVkO1xuJHRvYXN0LXN1Y2Nlc3MtdGl0bGUtY29sb3I6ICMwMDQ1NDI7XG4kdG9hc3Qtc3VjY2Vzcy1tZXNzYWdlLWNvbG9yOiAjMDEzMjMwO1xuJHRvYXN0LXN1Y2Nlc3MtYnV0dG9uLWNvbG9yOiAjMDE2OTY1O1xuXG4kdG9hc3Qtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMWQ1O1xuJHRvYXN0LXdhcm5pbmctdGl0bGUtY29sb3I6ICM2YjQ3MDA7XG4kdG9hc3Qtd2FybmluZy1tZXNzYWdlLWNvbG9yOiAjNDIyYzAwO1xuJHRvYXN0LXdhcm5pbmctYnV0dG9uLWNvbG9yOiAjY2M4ZjE0O1xuXG4kdG9hc3QtZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogI2Y1ZDVkYjtcbiR0b2FzdC1lcnJvci10aXRsZS1jb2xvcjogIzczMDAxNTtcbiR0b2FzdC1lcnJvci1tZXNzYWdlLWNvbG9yOiAjNDUwNjExO1xuJHRvYXN0LWVycm9yLXN1Y2Nlc3MtY29sb3I6ICNkOWVlZWQ7XG4kdG9hc3QtZXJyb3ItYnV0dG9uLWNvbG9yOiAjYjIxZDM5O1xuXG4kdG9hc3QtY2xvc2UtYnV0dG9uLWNvbG9yOiAjNzMwMDE1O1xuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zdGF0aXN0aWNzL3NlbnNpdGl2ZS1jYXNlcy9hY2NvdW50YWJpbGl0eS1wcm9jZXNzL2FjY291bnRhYmlsaXR5LXByb2Nlc3MuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3N0eWxlcy9fbWl4aW5zLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FBRkY7QUMrTEU7RURoTUY7SUFNSSwwQkFBQTtFQURGO0FBQ0Y7QUFJSTtFQUNFLHNCQUFBO0FBRk47QUN1TEU7RUR0TEU7SUFJSSwwQkFBQTtFQUROO0FBQ0Y7QUFHTTtFQUNFLG1CQUFBO0FBRFI7QUFNRTtFQUNFLG1CQUFBO0FBSko7O0FBUUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLHVCQUFBO0FBTEY7QUN1SkU7RUR4SkY7SUFTSSxtQkFBQTtFQUpGO0FBQ0Y7QUM4SkU7RURwS0Y7SUFhSSxrQ0FBQTtJQUNBLHFCQUFBO0VBSEY7QUFDRjtBQUtFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFFQSxjRXdDVztFRnZDWCxlQUFBO0VBQ0EsZ0JBQUE7QUFKSjtBQ1hFO0VBMENJLGVEOUJhO0FBRW5CO0FDUkU7RUF3Q0ksY0RsQ2E7QUFLbkI7QUN3SUU7RURuSkE7SUFZSSxhQUFBO0VBR0o7RUNyQkE7SUEwQ0ksZUR2QmU7RUFLbkI7RUNsQkE7SUF3Q0ksY0QzQmU7RUFRbkI7QUFDRjtBQU5JO0VBQ0UsY0VwRFk7QUY0RGxCO0FBSkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBTUo7QUNxSEU7RUQ5SEE7SUFNSSxtQkFBQTtFQU9KO0FBQ0Y7QUFKRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFNSjtBQzZGRTtFRHhHQTtJQVFJLDZCQUFBO0lBQ0Esa0JBQUE7RUFPSjtFQUxJO0lBQ0Usc0JBQUE7RUFPTjtBQUNGO0FDZ0dFO0VEcEhBO0lBaUJJLFFBQUE7RUFPSjtBQUNGO0FDMkZFO0VBekpBO0lBMENJLHVCRGdCdUI7RUFRM0I7RUM1REE7SUF3Q0ksc0JEWXVCO0VBVzNCO0VBVEk7SUFDRSxXQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0lBQ0EseUJBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0lBRUEseUJFWE87RUZxQmI7RUMvRUE7SUEwQ0ksUUQwQmlCO0VBY3JCO0VDNUVBO0lBd0NJLE9Ec0JpQjtFQWlCckI7QUFDRjtBQWJJO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtBQWVOO0FDK0RFO0VEaEZFO0lBS0ksb0JBQUE7SUFDQSxlQUFBO0VBZ0JOO0FBQ0Y7QUFiSTtFQUNFLHVCQUFBO0VBQUEsa0JBQUE7QUFlTjtBQVhFO0VBQ0UsT0FBQTtFQUNBLFFBQUE7QUFhSjtBQ2tERTtFRGpFQTtJQUtJLFFBQUE7SUFDQSxjQUFBO0VBY0o7QUFDRjtBQVhFO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQWFKO0FDd0NFO0VEdkRBO0lBS0ksaUJBQUE7RUFjSjtBQUNGO0FBWEU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSx5Q0FBQTtFQUNBLHVCQUFBO0FBYUo7QUMyQkU7RUQ5Q0E7SUFTSSxtQkFBQTtJQUNBLG1CQUFBO0lBQ0EsMEJBQUE7RUFjSjtBQUNGO0FBWEU7RUFDRSxtQkFBQTtBQWFKO0FDS0U7RURuQkE7SUFJSSxtQkFBQTtFQWNKO0FBQ0Y7QUNZRTtFRHhCRTtJQUVJLG9CQUFBO0VBY047QUFDRjtBQUVBLHc1a0JBQXc1a0IiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdtaXhpbnMnO1xuQGltcG9ydCAndmFyaWFibGVzJztcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxLjI1cmVtIDAgMC4zMTNyZW07XG5cbiAgQGluY2x1ZGUgbW9iaWxlLXVwIHtcbiAgICBtYXJnaW46IDEuMjVyZW0gMCAzLjEyNXJlbTtcbiAgfVxuXG4gIC5hY2NvdW50YWJpbGl0eS1wcm9jZXNzX19tb3JlLWJ1dHRvbiB7XG4gICAgOjpuZy1kZWVwIGJ1dHRvbiB7XG4gICAgICBwYWRkaW5nOiAwLjc4MXJlbSAycmVtO1xuXG4gICAgICBAaW5jbHVkZSBtb2JpbGUtdXAge1xuICAgICAgICBwYWRkaW5nOiAxLjA5NHJlbSAyLjg3NXJlbTtcbiAgICAgIH1cblxuICAgICAgLmNvbnRlbnQge1xuICAgICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICoge1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIH1cbn1cblxuLmFjY291bnRhYmlsaXR5LXByb2Nlc3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxLjI1cmVtIDEuMjVyZW0gMS44NzVyZW0gMS4yNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbiAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICBAaW5jbHVkZSBtb2JpbGUtdXAge1xuICAgIHBhZGRpbmc6IDMuMTI1cmVtIDMuMTI1cmVtIDMuNzVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICB9XG5cbiAgJl9fY2xvc2UtaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDAuOTM4cmVtO1xuICAgIEBpbmNsdWRlIHJpZ2h0KDAuOTM4cmVtKTtcbiAgICBjb2xvcjogJGxpZ2h0LWdyZXktMztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC4ycztcblxuICAgIEBpbmNsdWRlIG1vYmlsZS11cCB7XG4gICAgICB0b3A6IDIuMTg4cmVtO1xuICAgICAgQGluY2x1ZGUgcmlnaHQoMi4xODhyZW0pO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICRjb2xvci1wdXJwbGUtOTA7XG4gICAgfVxuICB9XG5cbiAgJl9fd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgQGluY2x1ZGUgbW9iaWxlLXVwIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgfVxuICB9XG5cbiAgJl9fZGVzY3JpcHRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4OiAxO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvcmRlcjogMjtcblxuICAgIEBpbmNsdWRlIG1vYmlsZS1vbmx5IHtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkbGlnaHQtZ3JleS04O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAuYWNjb3VudGFiaWxpdHktcHJvY2Vzc19fbW9yZS1idXR0b24ge1xuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIEBpbmNsdWRlIG1vYmlsZS11cCB7XG4gICAgICBvcmRlcjogMTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtb2JpbGUtdXAge1xuICAgICAgQGluY2x1ZGUgcGFkZGluZy1yaWdodCgzLjEyNXJlbSk7XG5cbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1heC1oZWlnaHQ6IDIxLjg3NXJlbTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAxcmVtKTtcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC0xcmVtO1xuICAgICAgICBAaW5jbHVkZSByaWdodCgwKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyZXktODtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLXRleHQge1xuICAgICAgcGFkZGluZy10b3A6IDEuODc1cmVtO1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcblxuICAgICAgQGluY2x1ZGUgbW9iaWxlLXVwIHtcbiAgICAgICAgbWF4LXdpZHRoOiAzMS4xMjVyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYWNjb3VudGFiaWxpdHktcHJvY2Vzc19fbW9yZS1idXR0b24ge1xuICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIH1cbiAgfVxuXG4gICZfX3NsaWRlciB7XG4gICAgZmxleDogMTtcbiAgICBvcmRlcjogMTtcblxuICAgIEBpbmNsdWRlIG1vYmlsZS11cCB7XG4gICAgICBvcmRlcjogMjtcbiAgICAgIG1heC13aWR0aDogNTAlO1xuICAgIH1cbiAgfVxuXG4gICZfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgQGluY2x1ZGUgbW9iaWxlLXVwIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIH1cbiAgfVxuXG4gICYtLWhpZGRlbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxLjI1cmVtIDEuMjVyZW0gMS44NzVyZW0gMS4yNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuICAgIEBpbmNsdWRlIG1vYmlsZS11cCB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDIuMDYzcmVtIDMuMTI1cmVtO1xuICAgIH1cbiAgfVxuXG4gICZfX21vcmUtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuXG4gICAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgICAgbWFyZ2luLXRvcDogMS4yNXJlbTtcbiAgICB9XG5cbiAgICAmLm1haW4ge1xuICAgICAgQGluY2x1ZGUgbW9iaWxlLXVwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMS44NzVyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AbWl4aW4gZmxleC1nYXAoJGdhcCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgbWFyZ2luLXRvcDogKC0kZ2FwKTtcbiAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoKC0kZ2FwKSwgJGdsb2JhbCk7XG5cbiAgPiAqIHtcbiAgICBtYXJnaW4tdG9wOiAkZ2FwO1xuICAgIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCRnYXAsICRnbG9iYWwpO1xuICB9XG59XG5cbkBtaXhpbiBiYXNlLWNvbnRhaW5lcigkY29udGVudC13aWR0aCkge1xuICAkZGVza3RvcC1wYWRkaW5nOiAycmVtO1xuICBtYXgtd2lkdGg6IGNhbGMoI3skY29udGVudC13aWR0aH0gKyAoI3skZGVza3RvcC1wYWRkaW5nfSkpO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQycmVtKSB7XG4gICAgQGluY2x1ZGUgcGFkZGluZy1sZWZ0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICAgIEBpbmNsdWRlIHBhZGRpbmctcmlnaHQoJGRlc2t0b3AtcGFkZGluZywgdHJ1ZSk7XG4gIH1cbn1cblxuQG1peGluIGNlbnRlckFic29sdXRlRWxlbWVudCB7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbkBtaXhpbiBvbmx5LWx0ci1nbG9iYWwge1xuICBodG1sOm5vdChbZGlyPSdydGwnXSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsLWdsb2JhbCB7XG4gIGh0bWxbZGlyPSdydGwnXSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1sdHIge1xuICA6aG9zdC1jb250ZXh0KGh0bWw6bm90KFtkaXI9J3J0bCddKSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsIHtcbiAgOmhvc3QtY29udGV4dChodG1sW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBydGwtdmFsdWUoJHByb3BlcnR5LCAkbHRyLXZhbHVlLCAkcnRsLXZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaWYgJGdsb2JhbCA9PSB0cnVlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ci1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsLWdsb2JhbCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRydGwtdmFsdWU7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ciB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRsdHItdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gcnRsLXByb3BlcnR5KCRsdHItcHJvcGVydHksICRydGwtcHJvcGVydHksICR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcnRsLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skbHRyLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hcmdpbi1sZWZ0KCRtYXJnaW4sICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShtYXJnaW4tbGVmdCwgbWFyZ2luLXJpZ2h0LCAkbWFyZ2luLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIG1hcmdpbi1yaWdodCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLXJpZ2h0LCBtYXJnaW4tbGVmdCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nKCRwYWRkaW5nVG9wLCAkcGFkZGluZ1JpZ2h0LCAkcGFkZGluZ0JvdHRvbSwgJHBhZGRpbmdMZWZ0LCAkZ2xvYmFsOiBmYWxzZSkge1xuICBwYWRkaW5nLXRvcDogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nUmlnaHQsICRnbG9iYWwpO1xuICBwYWRkaW5nLWJvdHRvbTogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nTGVmdCwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLWxlZnQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmctcmlnaHQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRleHQtYWxpZ24tbGVmdCgkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUodGV4dC1hbGlnbiwgbGVmdCwgcmlnaHQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShsZWZ0LCByaWdodCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHJpZ2h0LCBsZWZ0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gdHJhbnNsYXRlWFkoJHZhbHVlWCwgJHZhbHVlWSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRyYW5zZm9ybSwgdHJhbnNsYXRlKCR2YWx1ZVgsICR2YWx1ZVkpLCB0cmFuc2xhdGUoLSR2YWx1ZVgsICR2YWx1ZVkpLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1sZWZ0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1sZWZ0LCBib3JkZXItcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItcmlnaHQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXJpZ2h0LCBib3JkZXItbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsIGJvcmRlci10b3AtbGVmdC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItdG9wLWxlZnQtcmFkaXVzLCBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGZsb2F0LWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCBsZWZ0LCByaWdodCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gZmxvYXQtcmlnaHQge1xuICBAaW5jbHVkZSBydGwtdmFsdWUoZmxvYXQsIHJpZ2h0LCBsZWZ0LCAkZ2xvYmFsOiBmYWxzZSk7XG59XG5cbkBtaXhpbiBzbWFsbC1kZXNrdG9wLW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbGcpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC14bCAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1hbmQtdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbGcgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBzbWFsbC1tb2JpbGUtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1zIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbWQgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0YWJsZXQtb25seSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS11cCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBkaXNhYmxlLXNjcm9sbGJhciB7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIiwiJHN0YW5kYXJkRm9udEZhbWlseTogJ05vdG8gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGNvbnRlbnQtdG9wLXBhZGRpbmc6IDNyZW07XG4kcG9zdC1saXN0LWJnOiAjZGFkYWRhO1xuJHdoaXRlOiAjZmZmZmZmO1xuJHBvc3QtcHJldmlldy1iZzogd2hpdGU7XG4kbGlnaHQtZ3JheS1iZzogI2Y0ZjRmNDtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1sZWZ0OiAyLjM0NHJlbTtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1yaWdodDogMS4wNjNyZW07XG4kcG9zdC1wcmV2aWV3LXBhZGRpbmc6IDIuNXJlbSAkcG9zdC1wcmV2aWV3LXBhZGRpbmctcmlnaHQgMS4yNXJlbSAkcG9zdC1wcmV2aWV3LXBhZGRpbmctbGVmdDtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1tb2JpbGU6IDFyZW0gMXJlbSAwLjVyZW0gMXJlbTtcbiRwb3N0LXBhZGRpbmctYm90dG9tOiAxcmVtO1xuJHBvc3QtcHJldmlldy1ndXR0ZXI6IDJweDtcbiRwb3N0LWhpZ2hsaWdodC1jb2xvcjogIzU3MGY4NTtcbiRjb2xvci1wdXJwbGUtOTA6ICMzMTEzNWU7XG4kY29sb3ItcHVycGxlLTYwOiAjOTg4YWFlO1xuJGNvbG9yLXB1cnBsZS01MDogIzk4ODlhZjtcbiRjb2xvci1wdXJwbGUtMTA6ICNmNWYzZjc7XG4kY29sb3ItcHVycGxlLWxpZ2h0OiAjNGIzNWJjO1xuJGNvbG9yLXB1cnBsZS12ZXJ5LWxpZ2h0OiAjODY2YWIwO1xuJGNvbG9yLXB1cnBsZS1zdGVwcGVyOiAjNGEyYjdhO1xuJGNvbG9yLWdyZWVuLTEwMDogIzA1MjgwNDtcbiRjb2xvci1ncmVlbi05MDogIzBkM2QwYjtcbiRjb2xvci1ncmVlbi04MDogIzFmNmIxZTtcbiRjb2xvci1ncmVlbi03MDogIzM1OGEzNDtcbiRjb2xvci1ncmVlbi02MDogIzZkOWE2ZTtcbiRjb2xvci1ncmVlbi01MDogIzg5YTg4ZjtcbiRjb2xvci1ncmVlbi00MDogIzlmYzhhNjtcbiRjb2xvci1ncmVlbi0zMDogI2FhZDZiMztcbiRjb2xvci1ncmVlbi0yMDogI2M5ZTlkMTtcbiRjb2xvci1ncmVlbi0xMDogI2YzZjdmMztcbiRjb2xvci1ncmVlbi1zdGVwcGVyOiAjMTA3RDc5O1xuJGNvbG9yLWdyZWVuLW1lZGl1bTogI2FkZGFhZjtcbiRjb2xvci1ncmVlbi1saWdodDogIzNBQjA5ODtcbiRjb2xvci1ncmVlbi12ZXJ5LWxpZ2h0OiAjRURGRkZDO1xuJGdyZXktMTogI2Q2ZDBkZjtcbiRzdXBwb3J0LTAxOiAjZGExZTI4O1xuJGVycm9yOiAjZWUyMzJmO1xuJHRleHQtYmxhY2s6ICMxNjE2MTY7XG4kdGV4dC1zZWNvbmRhcnk6ICMzOTM5Mzk7XG4kdGV4dC1ncmF5ZWQ6ICM1MjUyNTI7XG4kdGV4dC1ncmF5ZWQ4MDogIzhmOGI4YjtcbiR0ZXh0LWdyYXktY2F0OiAjNmQ3Mjc4O1xuJHVpLWJhY2tncm91bmQtZ3JheTogI2Y4ZjhmOTtcbiRib3JkZXI6ICNlOGU3ZWE7XG4kZW50aXR5LWJvcmRlci1jb2xvcjogIzFjMGYzMDIxO1xuJGxvYWRpbmctYmc6IHJnYigwIDAgMCAvIDE4JSk7XG4kc3VwcG9ydC0wNDogIzAwNDNjZTtcbiRsb29wLXVzZXJuYW1lOiAjMTk4MDM4O1xuJGxvb3AtYWN0aXZlLWN1cnJlbnQtdXNlcjogIzI0YTE0ODtcbiR3YXJtLWdyYXktMTAtY29sb3I6ICNmN2YzZjI7XG4kd2FybS1ncmF5LTIwLWNvbG9yOiAjZTVlMGRmO1xuJGhlYWRpbmctMS1jb2xvcjogIzFjMGYzMDtcbiRoZWFkaW5nLTItY29sb3I6ICMzMjA3NGQ7XG4kaGVhZGluZy0zLWNvbG9yOiAjMmYyNzM1O1xuJG1vYmlsZS1pY29uLWNvbG9yOiAjMWMwZjMwO1xuJHN0YXRlLWRpc2FibGVkLTAyOiAjYzZjNmM2O1xuJGxpbmstMDI6ICM1NjAxYjI7XG4kaGVhZGVyLXB1cnBsZTogIzMxMTM1ZTtcbiRoZWFkZXItZ3JlZW46ICMxMDdkNzk7XG4kcHVycGxlLWxpZ2h0OiAjY2JjNGQ3O1xuJHB1cnBsZS1iYWNrZ3JvdW5kLWxpZ2h0OiAjZGNkNWU3O1xuJGxvb3AtaW50ZXJhY3RpdmUtMDE6ICMxMDdkNzk7XG4kbG9vcC1pbnRlcmFjdGl2ZS0wMS1vcGFjaXR5OiByZ2JhKDE2LCAxMjUsIDEyMSwgMC4zKTtcbiRmaWx0ZXJzLWdyZWVuOiAjMDU2NzYzO1xuLy8gQnJlYWtwb2ludHNcblxuJGJyZWFrcG9pbnQtczogMzc1cHg7XG4kYnJlYWtwb2ludC1zbTogNDIwcHg7XG4kYnJlYWtwb2ludC1tZDogNzY4cHg7XG4kYnJlYWtwb2ludC1sZzogMTA4MHB4O1xuJGJyZWFrcG9pbnQteGw6IDEyNzVweDtcblxuJGJyZWFrcG9pbnQtbWQtdjI6IDgyMHB4O1xuXG4kaGVhZGVyLWhlaWdodDogNC4zNzVyZW07XG4kaGVhZGVyLWhlaWdodC12MjogNC4zNzVyZW07XG4kc3RhdGUtc2VsZWN0ZWQtdWk6ICNlMGUwZTA7XG4kYy1sZWZ0LXBhZGRpbmc6IDEuNXJlbTtcbiRtZW51LWFjdGl2ZS1jb2xvcjogIzNBQjA5ODtcbiRtZW51LWhvdmVyLWNvbG9yOiAjM0FCMDk4O1xuJHRhYi1pbmFjdGl2ZS1jb2xvcjogIzg5YWY5MztcbiRsaW5lLWNvbG9yOiAjZDBkZmQyO1xuJGJvcmRlci1ncmF5OiAjY2NjY2NjO1xuJHRleHQtZ3JheTogIzgwODA4MDtcbiRiYXNlLWNvbnRhaW5lci13aWR0aDogODEuMTI0cmVtO1xuJGhlYWRlci11bmRlcmxpbmUtaGVpZ2h0OiAwLjMxM3JlbTtcblxuLy8gTW9kZXJhdG9yIHJldmlldyBzZWN0aW9uc1xuJGZvb3Rlci1oZWlnaHQ6IDRyZW07XG4kdG9wYmFyLWhlaWdodDogMTAuNXJlbTtcbiRzdGVwcGVyLWhlaWdodDogNi43cmVtO1xuXG4vLyBOZXcgU3RvcnkgZmxvdyAvIHN0b3J5IGRldGFpbHMgdmFyaWFibGVzXG4kZ3JleTogIzY1NjU2NTtcbiRsaWdodC1ncmV5LTI6ICNiMWI0YjY7XG4kbGlnaHQtZ3JleS0zOiAjYjRiNGI0O1xuJGxpZ2h0LWdyZXktNDogI2NmZDNkODtcbiRsaWdodC1ncmV5LTU6ICNkOWUwZTc7XG4kbGlnaHQtZ3JleS02OiAjZjFmMmYyO1xuJGxpZ2h0LWdyZXktNzogI2M0YzRjNDtcbiRsaWdodC1ncmV5LTg6ICNlOWU5ZTk7XG4kbGlnaHQtZ3JleS05OiAjZTZlYWVkO1xuJGxpZ2gtZ3JleS1zZXBhcmF0b3I6ICNjMGMwYzA7XG4kZGFyay1ncmV5OiAjMWExYTFhO1xuJGRhcmstZ3JleS01MDogcmdiKDI2LCAyNiwgMjYsIDAuNSk7XG4kYm9yZGVyLWdyZXk6ICNjN2NkZDQ7XG4kbGlnaHQtcHVycGxlOiAjZWFlYWVhO1xuJGlucHV0LWRpc2FibGVkLWJnOiAjZjRmNmY4O1xuJGVycm9yLTI6ICNkZTIyMmQ7XG4kZGFuZ2VyOiAjYzkzMDRkO1xuJHByZXZpb3VzLXBpbGwtY29sb3I6ICM3MThkNmY7XG4kdG9vbHRpcC1ncmV5OiAjYWJhYmFiO1xuJGxpZ2h0LWdyZWVuOiAjY2ZlNWU0NjY7XG5cbiRmaWx0ZXJzLW1vZGFsLWhlYWRlci16aW5kZXg6IDEwMDAwO1xuJG1vZGFsLXppbmRleDogOTk5OTtcbiRsb2NhdGlvbi1vdmVybGF5LXppbmRleDogOTAwMTtcbiRoZWFkZXItYXNpZGUtemluZGV4OiA4MDAyO1xuJGhlYWRlci1hc2lkZS1iYWNrZ3JvdW5kLXppbmRleDogODAwMTtcbiRoZWFkZXItemluZGV4OiA4MDAwO1xuJG5hdmlnYXRpb24temluZGV4OiA4MDAwO1xuJHBhZ2UtbG9hZGluZy16aW5kZXg6IDcwMDE7XG4kdG9vbHRpcC16aW5kZXg6IDcwMDA7XG4kbmV3LXN0b3J5LWNvbnRlbnQtc3RhdGUtemluZGV4OiA1MDA7XG4kZmlsdGVyLWRyb3Bkb3duLXppbmRleDogMTAwO1xuJG1vZGFsLXRvcC1pbmRpY2F0b3ItemluZGV4OiA1MTtcbiRtb2RhbC10b3AtaW5kaWNhdG9yLWJhY2tncm91bmQtemluZGV4OiA1MTtcbiRjaGFydC16aW5kZXg6IDE7XG4kY2hhcnQtY29udHJvbC16aW5kZXg6IDI7XG5cbiRzbGlkZS10b2dnbGUtZGlzYWJsZWQtb3B0aW9uLWJhY2tncm91bmQ6ICNkZGRkZGQ7XG5cbiR0b2FzdC1pbmZvLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuJHRvYXN0LWluZm8tdGl0bGUtY29sb3I6ICM0OTQ5NDk7XG4kdG9hc3QtaW5mby1tZXNzYWdlLWNvbG9yOiAjNDIyYzAwO1xuJHRvYXN0LWluZm8tYnV0dG9uLWNvbG9yOiAjNmM0ZTk5O1xuXG4kdG9hc3Qtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiAjZDllZWVkO1xuJHRvYXN0LXN1Y2Nlc3MtdGl0bGUtY29sb3I6ICMwMDQ1NDI7XG4kdG9hc3Qtc3VjY2Vzcy1tZXNzYWdlLWNvbG9yOiAjMDEzMjMwO1xuJHRvYXN0LXN1Y2Nlc3MtYnV0dG9uLWNvbG9yOiAjMDE2OTY1O1xuXG4kdG9hc3Qtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMWQ1O1xuJHRvYXN0LXdhcm5pbmctdGl0bGUtY29sb3I6ICM2YjQ3MDA7XG4kdG9hc3Qtd2FybmluZy1tZXNzYWdlLWNvbG9yOiAjNDIyYzAwO1xuJHRvYXN0LXdhcm5pbmctYnV0dG9uLWNvbG9yOiAjY2M4ZjE0O1xuXG4kdG9hc3QtZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogI2Y1ZDVkYjtcbiR0b2FzdC1lcnJvci10aXRsZS1jb2xvcjogIzczMDAxNTtcbiR0b2FzdC1lcnJvci1tZXNzYWdlLWNvbG9yOiAjNDUwNjExO1xuJHRvYXN0LWVycm9yLXN1Y2Nlc3MtY29sb3I6ICNkOWVlZWQ7XG4kdG9hc3QtZXJyb3ItYnV0dG9uLWNvbG9yOiAjYjIxZDM5O1xuXG4kdG9hc3QtY2xvc2UtYnV0dG9uLWNvbG9yOiAjNzMwMDE1O1xuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 94075:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/statistics/sensitive-cases/accountability-process/see-process/see-process-modal.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeeProcessModalComponent": () => (/* binding */ SeeProcessModalComponent)
/* harmony export */ });
/* harmony import */ var _new_story_v2_modals_modal_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../new-story-v2/modals/modal.base */ 39654);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/components/button/button.component */ 90042);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_modal_v2_modal_v2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/modal-v2/modal-v2.component */ 91255);






function SeeProcessModalComponent_div_19_ng_container_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function SeeProcessModalComponent_div_19_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SeeProcessModalComponent_div_19_ng_container_4_ng_container_2_Template, 2, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const paragraph_r4 = ctx.$implicit;
    const j_r5 = ctx.index;
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("no-padding", paragraph_r4[j_r5 + 1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r3.getParagraphTranslation(i_r2, j_r5, paragraph_r4), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", paragraph_r4[j_r5 + 1]);
  }
}
function SeeProcessModalComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SeeProcessModalComponent_div_19_ng_container_4_Template, 3, 4, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const __r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", i_r2 + 1, ". ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, "statisticsCases.accountabilityProcess.seeProcess.list." + (i_r2 + 1) + ".title"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", __r1);
  }
}
class SeeProcessModalComponent extends _new_story_v2_modals_modal_base__WEBPACK_IMPORTED_MODULE_0__.ModalBase {
  constructor(close$, translate) {
    super(close$);
    this.translate = translate;
    this.translationsSectionsParagraphs = [['firstParagraph', 'secondParagraph'], ['firstParagraph', 'secondParagraph'], ['firstParagraph'], ['firstParagraph', 'secondParagraph'], ['firstParagraph'], ['firstParagraph'], ['firstParagraph', 'secondParagraph'], ['firstParagraph', 'secondParagraph'], ['firstParagraph']];
    this.homeLinkIndexes = {
      i: 0,
      j: 0
    };
    this.hereLinkIndexes = {
      i: 1,
      j: 0
    };
  }
  getParagraphTranslation(i, j, paragraph) {
    const translationKey = `statisticsCases.accountabilityProcess.seeProcess.list.${i + 1}.${paragraph}`;
    if (i === this.homeLinkIndexes.i && j === this.homeLinkIndexes.j) {
      return this.translate.instant(translationKey, {
        homeLink: `<a class="link bold" href="${window.location.origin}">${window.location.origin}</a>`
      });
    } else if (i === this.hereLinkIndexes.i && j === this.hereLinkIndexes.j) {
      return this.translate.instant(translationKey, {
        hereLink: `<a class="link bold" href="${window.location.origin}">${this.translate.instant('global.here').toLowerCase()}</a>`
      });
    } else {
      return this.translate.instant(translationKey);
    }
  }
  static #_ = this.ɵfac = function SeeProcessModalComponent_Factory(t) {
    return new (t || SeeProcessModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"]('close$'), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: SeeProcessModalComponent,
    selectors: [["loop-see-process-modal"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
    decls: 24,
    vars: 19,
    consts: [[1, "title", "bold"], [1, "no-padding"], [4, "ngFor", "ngForOf"], ["action-buttons", ""], ["mode", "v2", 3, "clicked"], [1, "bold"], [3, "innerHTML"], [4, "ngIf"]],
    template: function SeeProcessModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "loop-modal")(1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, SeeProcessModalComponent_div_19_Template, 5, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 3)(21, "app-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("clicked", function SeeProcessModalComponent_Template_app_button_clicked_21_listener() {
          return ctx.onModalClose();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 7, "statisticsCases.accountabilityProcess.seeProcess.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 9, "statisticsCases.accountabilityProcess.seeProcess.firstParagraph"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 11, "statisticsCases.accountabilityProcess.seeProcess.secondParagraph"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 13, "statisticsCases.accountabilityProcess.seeProcess.thirdParagraph"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 15, "statisticsCases.accountabilityProcess.seeProcess.fourthParagraph"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.translationsSectionsParagraphs);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 17, "newStoryV2.modals.ok"));
      }
    },
    dependencies: [_shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_1__.ButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_components_modal_v2_modal_v2_component__WEBPACK_IMPORTED_MODULE_2__.ModalV2Component, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
    styles: ["[_nghost-%COMP%] {\n  font-size: 1rem;\n}\n@media (min-width: 768px) {\n  [_nghost-%COMP%] {\n    font-size: 1.25rem;\n  }\n}\n[_nghost-%COMP%]   *[_ngcontent-%COMP%] {\n  line-height: normal;\n}\n[_nghost-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n[_nghost-%COMP%]   p[_ngcontent-%COMP%]:not(.no-padding) {\n  padding-bottom: 1.875rem;\n}\n@media (min-width: 768px) {\n  [_nghost-%COMP%]   p[_ngcontent-%COMP%]:not(.no-padding) {\n    padding-bottom: 2.5rem;\n  }\n}\n[_nghost-%COMP%]   span[_ngcontent-%COMP%]:not(.title) {\n  padding-bottom: 0.938rem;\n}\n[_nghost-%COMP%]     .link {\n  color: #107d79 !important;\n  text-decoration: underline;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  padding-bottom: 1.25rem;\n}\n@media (min-width: 768px) {\n  .title[_ngcontent-%COMP%] {\n    font-size: 2.188rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlZS1wcm9jZXNzLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGVBQUE7QUFGRjtBQ2lNRTtFRGhNRjtJQUlJLGtCQUFBO0VBREY7QUFDRjtBQUdFO0VBQ0UsbUJBQUE7QUFESjtBQUlFO0VBQ0UsYUFBQTtBQUZKO0FBS0U7RUFDRSxrQkFBQTtBQUhKO0FBTUU7RUFDRSx3QkFBQTtBQUpKO0FDZ0xFO0VEN0tBO0lBSUksc0JBQUE7RUFISjtBQUNGO0FBTUU7RUFDRSx3QkFBQTtBQUpKO0FBUUk7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FBTk47O0FBV0E7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0FBUkY7QUMrSkU7RUR6SkY7SUFLSSxtQkFBQTtFQVBGO0FBQ0YiLCJmaWxlIjoic2VlLXByb2Nlc3MtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdtaXhpbnMnO1xuQGltcG9ydCAndmFyaWFibGVzJztcblxuOmhvc3Qge1xuICBmb250LXNpemU6IDFyZW07XG5cbiAgQGluY2x1ZGUgbW9iaWxlLXVwIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cblxuICAqIHtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICB9XG5cbiAgc3BhbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgfVxuXG4gIHA6bm90KC5uby1wYWRkaW5nKSB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuODc1cmVtO1xuXG4gICAgQGluY2x1ZGUgbW9iaWxlLXVwIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyLjVyZW07XG4gICAgfVxuICB9XG5cbiAgc3Bhbjpub3QoLnRpdGxlKSB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuOTM4cmVtO1xuICB9XG5cbiAgOjpuZy1kZWVwIHtcbiAgICAubGluayB7XG4gICAgICBjb2xvcjogJGxvb3AtaW50ZXJhY3RpdmUtMDEgIWltcG9ydGFudDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbiAgfVxufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDEuMjVyZW07XG5cbiAgQGluY2x1ZGUgbW9iaWxlLXVwIHtcbiAgICBmb250LXNpemU6IDIuMTg4cmVtO1xuICB9XG59XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AbWl4aW4gZmxleC1nYXAoJGdhcCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgbWFyZ2luLXRvcDogKC0kZ2FwKTtcbiAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoKC0kZ2FwKSwgJGdsb2JhbCk7XG5cbiAgPiAqIHtcbiAgICBtYXJnaW4tdG9wOiAkZ2FwO1xuICAgIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCRnYXAsICRnbG9iYWwpO1xuICB9XG59XG5cbkBtaXhpbiBiYXNlLWNvbnRhaW5lcigkY29udGVudC13aWR0aCkge1xuICAkZGVza3RvcC1wYWRkaW5nOiAycmVtO1xuICBtYXgtd2lkdGg6IGNhbGMoI3skY29udGVudC13aWR0aH0gKyAoI3skZGVza3RvcC1wYWRkaW5nfSkpO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQycmVtKSB7XG4gICAgQGluY2x1ZGUgcGFkZGluZy1sZWZ0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICAgIEBpbmNsdWRlIHBhZGRpbmctcmlnaHQoJGRlc2t0b3AtcGFkZGluZywgdHJ1ZSk7XG4gIH1cbn1cblxuQG1peGluIGNlbnRlckFic29sdXRlRWxlbWVudCB7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbkBtaXhpbiBvbmx5LWx0ci1nbG9iYWwge1xuICBodG1sOm5vdChbZGlyPSdydGwnXSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsLWdsb2JhbCB7XG4gIGh0bWxbZGlyPSdydGwnXSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1sdHIge1xuICA6aG9zdC1jb250ZXh0KGh0bWw6bm90KFtkaXI9J3J0bCddKSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsIHtcbiAgOmhvc3QtY29udGV4dChodG1sW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBydGwtdmFsdWUoJHByb3BlcnR5LCAkbHRyLXZhbHVlLCAkcnRsLXZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaWYgJGdsb2JhbCA9PSB0cnVlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ci1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsLWdsb2JhbCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRydGwtdmFsdWU7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ciB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRsdHItdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gcnRsLXByb3BlcnR5KCRsdHItcHJvcGVydHksICRydGwtcHJvcGVydHksICR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcnRsLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skbHRyLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hcmdpbi1sZWZ0KCRtYXJnaW4sICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShtYXJnaW4tbGVmdCwgbWFyZ2luLXJpZ2h0LCAkbWFyZ2luLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIG1hcmdpbi1yaWdodCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLXJpZ2h0LCBtYXJnaW4tbGVmdCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nKCRwYWRkaW5nVG9wLCAkcGFkZGluZ1JpZ2h0LCAkcGFkZGluZ0JvdHRvbSwgJHBhZGRpbmdMZWZ0LCAkZ2xvYmFsOiBmYWxzZSkge1xuICBwYWRkaW5nLXRvcDogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nUmlnaHQsICRnbG9iYWwpO1xuICBwYWRkaW5nLWJvdHRvbTogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nTGVmdCwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLWxlZnQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmctcmlnaHQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRleHQtYWxpZ24tbGVmdCgkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUodGV4dC1hbGlnbiwgbGVmdCwgcmlnaHQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShsZWZ0LCByaWdodCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHJpZ2h0LCBsZWZ0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gdHJhbnNsYXRlWFkoJHZhbHVlWCwgJHZhbHVlWSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRyYW5zZm9ybSwgdHJhbnNsYXRlKCR2YWx1ZVgsICR2YWx1ZVkpLCB0cmFuc2xhdGUoLSR2YWx1ZVgsICR2YWx1ZVkpLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1sZWZ0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1sZWZ0LCBib3JkZXItcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItcmlnaHQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXJpZ2h0LCBib3JkZXItbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsIGJvcmRlci10b3AtbGVmdC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItdG9wLWxlZnQtcmFkaXVzLCBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGZsb2F0LWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCBsZWZ0LCByaWdodCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gZmxvYXQtcmlnaHQge1xuICBAaW5jbHVkZSBydGwtdmFsdWUoZmxvYXQsIHJpZ2h0LCBsZWZ0LCAkZ2xvYmFsOiBmYWxzZSk7XG59XG5cbkBtaXhpbiBzbWFsbC1kZXNrdG9wLW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbGcpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC14bCAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1hbmQtdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbGcgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBzbWFsbC1tb2JpbGUtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1zIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbWQgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0YWJsZXQtb25seSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS11cCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBkaXNhYmxlLXNjcm9sbGJhciB7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zdGF0aXN0aWNzL3NlbnNpdGl2ZS1jYXNlcy9hY2NvdW50YWJpbGl0eS1wcm9jZXNzL3NlZS1wcm9jZXNzL3NlZS1wcm9jZXNzLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsZUFBQTtBQUZGO0FDaU1FO0VEaE1GO0lBSUksa0JBQUE7RUFERjtBQUNGO0FBR0U7RUFDRSxtQkFBQTtBQURKO0FBSUU7RUFDRSxhQUFBO0FBRko7QUFLRTtFQUNFLGtCQUFBO0FBSEo7QUFNRTtFQUNFLHdCQUFBO0FBSko7QUNnTEU7RUQ3S0E7SUFJSSxzQkFBQTtFQUhKO0FBQ0Y7QUFNRTtFQUNFLHdCQUFBO0FBSko7QUFRSTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUFOTjs7QUFXQTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7QUFSRjtBQytKRTtFRHpKRjtJQUtJLG1CQUFBO0VBUEY7QUFDRjtBQUNBLGc1UEFBZzVQIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnbWl4aW5zJztcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbjpob3N0IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuXG4gIEBpbmNsdWRlIG1vYmlsZS11cCB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG5cbiAgKiB7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgfVxuXG4gIHNwYW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cblxuICBwOm5vdCgubm8tcGFkZGluZykge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjg3NXJlbTtcblxuICAgIEBpbmNsdWRlIG1vYmlsZS11cCB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xuICAgIH1cbiAgfVxuXG4gIHNwYW46bm90KC50aXRsZSkge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjkzOHJlbTtcbiAgfVxuXG4gIDo6bmctZGVlcCB7XG4gICAgLmxpbmsge1xuICAgICAgY29sb3I6ICRsb29wLWludGVyYWN0aXZlLTAxICFpbXBvcnRhbnQ7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG4gIH1cbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xuXG4gIEBpbmNsdWRlIG1vYmlsZS11cCB7XG4gICAgZm9udC1zaXplOiAyLjE4OHJlbTtcbiAgfVxufVxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIGZsZXgtZ2FwKCRnYXAsICRnbG9iYWw6IGZhbHNlKSB7XG4gIG1hcmdpbi10b3A6ICgtJGdhcCk7XG4gIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCgtJGdhcCksICRnbG9iYWwpO1xuXG4gID4gKiB7XG4gICAgbWFyZ2luLXRvcDogJGdhcDtcbiAgICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgkZ2FwLCAkZ2xvYmFsKTtcbiAgfVxufVxuXG5AbWl4aW4gYmFzZS1jb250YWluZXIoJGNvbnRlbnQtd2lkdGgpIHtcbiAgJGRlc2t0b3AtcGFkZGluZzogMnJlbTtcbiAgbWF4LXdpZHRoOiBjYWxjKCN7JGNvbnRlbnQtd2lkdGh9ICsgKCN7JGRlc2t0b3AtcGFkZGluZ30pKTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MnJlbSkge1xuICAgIEBpbmNsdWRlIHBhZGRpbmctbGVmdCgkZGVza3RvcC1wYWRkaW5nLCB0cnVlKTtcbiAgICBAaW5jbHVkZSBwYWRkaW5nLXJpZ2h0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICB9XG59XG5cbkBtaXhpbiBjZW50ZXJBYnNvbHV0ZUVsZW1lbnQge1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5AbWl4aW4gb25seS1sdHItZ2xvYmFsIHtcbiAgaHRtbDpub3QoW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bC1nbG9iYWwge1xuICBodG1sW2Rpcj0ncnRsJ10gJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktbHRyIHtcbiAgOmhvc3QtY29udGV4dChodG1sOm5vdChbZGlyPSdydGwnXSkpICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bCB7XG4gIDpob3N0LWNvbnRleHQoaHRtbFtkaXI9J3J0bCddKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gcnRsLXZhbHVlKCRwcm9wZXJ0eSwgJGx0ci12YWx1ZSwgJHJ0bC12YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGx0ci12YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHJ0bC12YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHJ0bC1wcm9wZXJ0eSgkbHRyLXByb3BlcnR5LCAkcnRsLXByb3BlcnR5LCAkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpZiAkZ2xvYmFsID09IHRydWUge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyLWdsb2JhbCB7XG4gICAgICAjeyRsdHItcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwtZ2xvYmFsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bCB7XG4gICAgICAjeyRydGwtcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXJnaW4tbGVmdCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLWxlZnQsIG1hcmdpbi1yaWdodCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBtYXJnaW4tcmlnaHQoJG1hcmdpbiwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KG1hcmdpbi1yaWdodCwgbWFyZ2luLWxlZnQsICRtYXJnaW4sICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZygkcGFkZGluZ1RvcCwgJHBhZGRpbmdSaWdodCwgJHBhZGRpbmdCb3R0b20sICRwYWRkaW5nTGVmdCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgcGFkZGluZy10b3A6ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZ1JpZ2h0LCAkZ2xvYmFsKTtcbiAgcGFkZGluZy1ib3R0b206ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZ0xlZnQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1sZWZ0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLXJpZ2h0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiB0ZXh0LWFsaWduLWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRleHQtYWxpZ24sIGxlZnQsIHJpZ2h0LCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGxlZnQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobGVmdCwgcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiByaWdodCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShyaWdodCwgbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRyYW5zbGF0ZVhZKCR2YWx1ZVgsICR2YWx1ZVksICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZSh0cmFuc2Zvcm0sIHRyYW5zbGF0ZSgkdmFsdWVYLCAkdmFsdWVZKSwgdHJhbnNsYXRlKC0kdmFsdWVYLCAkdmFsdWVZKSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItbGVmdCwgYm9yZGVyLXJpZ2h0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1yaWdodCwgYm9yZGVyLWxlZnQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCBib3JkZXItdG9wLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtbGVmdC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBmbG9hdC1sZWZ0KCRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZShmbG9hdCwgbGVmdCwgcmlnaHQsICRnbG9iYWw6IGZhbHNlKTtcbn1cblxuQG1peGluIGZsb2F0LXJpZ2h0IHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCByaWdodCwgbGVmdCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gc21hbGwtZGVza3RvcC1vbmx5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LWxnKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQteGwgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtYW5kLXRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc21hbGwtbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtcyAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LW1kIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtdXAge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gZGlzYWJsZS1zY3JvbGxiYXIge1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 15507:
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/statistics/sensitive-cases/accountability-process/slider/slider.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliderComponent": () => (/* binding */ SliderComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/components/base.component */ 70697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_services_locales_rtl_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/services/locales/rtl.service */ 53822);
/* harmony import */ var _core_services_locales_user_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/services/locales/user-language.service */ 86188);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_icons_expand_more_icon_expand_more_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/icons/expand-more-icon/expand-more-icon.component */ 50061);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 38699);








const _c0 = ["viewport"];
const _c1 = ["wrapper"];
const _c2 = ["sliderTrack"];
function SliderComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const slide_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", _r2.clientWidth, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("src", "assets/icons/statistics-cases/", slide_r5.iconName, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 6, "statisticsCases.accountabilityProcess.slider." + slide_r5.titleTranslationKey + ".title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 8, slide_r5.titleTranslationKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 10, slide_r5.descriptionTranslationKey));
  }
}
const SLIDER_TRANSITION_TIME = 400;
class SliderComponent extends _shared_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(cdr, rtlService, userLanguageService) {
    super();
    this.cdr = cdr;
    this.rtlService = rtlService;
    this.userLanguageService = userLanguageService;
    this.renderedSlides = [sliderOptions[sliderOptions.length - 1], ...sliderOptions];
    this.currSlide = 1;
    this.sliderOptions = sliderOptions;
    this.isRtl = false;
  }
  checkRtl() {
    const oldRtl = this.isRtl;
    this.isRtl = this.rtlService.isRtlLanguage(this.userLanguageService.getLanguage());
    if (this.isRtl !== oldRtl) {
      this.translateX = -this.translateX;
      this.cdr.detectChanges();
    }
  }
  ngOnInit() {
    this.checkRtl();
    this.userLanguageService.languageChanged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroyed$)).subscribe(() => this.checkRtl());
  }
  ngAfterViewInit() {
    setTimeout(() => this.runResizeCalculations(), 1);
  }
  runResizeCalculations() {
    this.wrapperWidth = this.wrapper.nativeElement.clientWidth;
    this.translateX = this.isRtl ? this.viewport.nativeElement.clientWidth : -this.viewport.nativeElement.clientWidth;
    this.cdr.detectChanges();
  }
  changeSlide(next = true) {
    const width = this.viewport.nativeElement.clientWidth;
    this.sliderTrack.nativeElement.style.transition = '0.3s';
    this.translateX = next ? this.isRtl ? 2 * width : -(2 * width) : 0;
    this.animating = true;
    this.cdr.detectChanges();
    setTimeout(() => {
      this.sliderTrack.nativeElement.style.transition = undefined;
      this.translateX = this.isRtl ? width : -width;
      this.renderedSlides = this.renderedSlides.map(slide => this.getNextSliderOption(slide, next ? 1 : -1));
      this.currSlide = this.renderedSlides[1].order;
      this.animating = false;
      this.cdr.detectChanges();
    }, SLIDER_TRANSITION_TIME);
  }
  getNextSliderOption(oldSlide, difference) {
    const orderSum = oldSlide.order + difference;
    let newOrder;
    if (orderSum > sliderOptions.length) {
      newOrder = 1;
    } else {
      newOrder = orderSum === 0 ? sliderOptions.length : orderSum;
    }
    return sliderOptions.find(opt => opt.order === newOrder);
  }
  onResize() {
    setTimeout(() => this.runResizeCalculations(), 50);
  }
  static #_ = this.ɵfac = function SliderComponent_Factory(t) {
    return new (t || SliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_locales_rtl_service__WEBPACK_IMPORTED_MODULE_1__.RtlService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_locales_user_language_service__WEBPACK_IMPORTED_MODULE_2__.UserLanguageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SliderComponent,
    selectors: [["loop-slider"]],
    viewQuery: function SliderComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.viewport = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.wrapper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sliderTrack = _t.first);
      }
    },
    hostBindings: function SliderComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resize", function SliderComponent_resize_HostBindingHandler() {
          return ctx.onResize();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
    decls: 16,
    vars: 14,
    consts: [[1, "slider"], [1, "d-flex", "slider-track-wrapper"], ["wrapper", ""], [1, "arrow", "left", 3, "click"], ["arrow", ""], [3, "rotate", "rtl"], [1, "slider__viewport"], ["viewport", ""], [1, "slider__track"], ["sliderTrack", ""], ["class", "slider__item", 3, "width", 4, "ngFor", "ngForOf"], [1, "arrow", "right", 3, "click"], [1, "slider__counter"], [1, "slider__counter-number"], [1, "slider__item"], [3, "src", "alt"], [1, "bold"]],
    template: function SliderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1, 2)(3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SliderComponent_Template_div_click_3_listener() {
          return ctx.changeSlide(false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-expand-more-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6, 7)(8, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, SliderComponent_div_10_Template, 9, 12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SliderComponent_Template_div_click_11_listener() {
          return ctx.changeSlide();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "app-expand-more-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 12)(14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", ctx.animating);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rotate", 90)("rtl", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", ctx.wrapperWidth - 2 * _r1.clientWidth, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("transform", "translateX(" + ctx.translateX + "px)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.renderedSlides);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", ctx.animating);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rotate", -90)("rtl", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.isRtl ? ctx.sliderOptions.length + "/" + ctx.currSlide : ctx.currSlide + "/" + ctx.sliderOptions.length, " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _shared_icons_expand_more_icon_expand_more_icon_component__WEBPACK_IMPORTED_MODULE_3__.ExpandMoreIconComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
    styles: ["[_nghost-%COMP%]   *[_ngcontent-%COMP%] {\n  line-height: normal;\n}\n\n.slider[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n@media (max-width: 767.9px) {\n  .slider[_ngcontent-%COMP%] {\n    padding-top: 2.5rem;\n  }\n}\n@media (min-width: 768px) {\n  .slider[_ngcontent-%COMP%] {\n    padding: 0 2.5rem 0 4.375rem;\n  }\n}\n.slider__viewport[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n.slider__track[_ngcontent-%COMP%] {\n  display: flex;\n}\n.slider__track[_ngcontent-%COMP%]   .slider__item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0 1rem;\n}\n.slider__track[_ngcontent-%COMP%]   .slider__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 70px;\n  width: auto;\n  margin: 0 auto;\n}\n@media (min-width: 768px) {\n  .slider__track[_ngcontent-%COMP%]   .slider__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 80px;\n  }\n}\n.slider__track[_ngcontent-%COMP%]   .slider__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #31135e;\n}\n.slider__track[_ngcontent-%COMP%]   .slider__item[_ngcontent-%COMP%]   span.bold[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  padding: 1.25rem 0 0.625rem;\n}\n@media (min-width: 768px) {\n  .slider__track[_ngcontent-%COMP%]   .slider__item[_ngcontent-%COMP%]   span.bold[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n}\n.slider[_ngcontent-%COMP%]   .slider-track-wrapper[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n@media (max-width: 767.9px) {\n  .slider[_ngcontent-%COMP%]   .slider-track-wrapper[_ngcontent-%COMP%] {\n    padding-bottom: 2rem;\n  }\n}\n.slider__counter[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: auto;\n  margin-bottom: 2.5rem;\n}\n@media (min-width: 768px) {\n  .slider__counter[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n}\n.slider__counter-number[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #e6eaed;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6.25rem;\n  color: black;\n  font-size: 0.875rem;\n}\n@media (min-width: 768px) {\n  .slider__counter-number[_ngcontent-%COMP%] {\n    line-height: 1.5rem;\n  }\n}\n.slider[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 1.875rem;\n  height: 1.875rem;\n  margin: auto;\n  border-radius: 50%;\n  background-color: rgba(207, 229, 228, 0.4);\n  transition: background-color 0.2s;\n  color: #107d79;\n  cursor: pointer;\n}\n.slider[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]:hover {\n  background-color: #107d79;\n  color: white;\n}\n.slider[_ngcontent-%COMP%]   .arrow.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWRlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fbWl4aW5zLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlFO0VBQ0UsbUJBQUE7QUFISjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFKRjtBQzZLRTtFRDlLRjtJQVFJLG1CQUFBO0VBSEY7QUFDRjtBQ29MRTtFRDFMRjtJQVlJLDRCQUFBO0VBRkY7QUFDRjtBQUlFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUZKO0FBS0U7RUFDRSxhQUFBO0FBSEo7QUFLSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBSE47QUFLTTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFIUjtBQ3lKRTtFRHpKSTtJQU1JLGdCQUFBO0VBRlI7QUFDRjtBQUtNO0VBQ0Usa0JBQUE7RUFDQSxjRXpDVTtBRnNDbEI7QUFLUTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7QUFIVjtBQzRJRTtFRDNJTTtJQUtJLGtCQUFBO0VBRlY7QUFDRjtBQVFFO0VBQ0UsZ0JBQUE7QUFOSjtBQ3dIRTtFRG5IQTtJQUlJLG9CQUFBO0VBTEo7QUFDRjtBQVFFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQU5KO0FDeUhFO0VEdkhBO0lBT0ksbUJBQUE7RUFMSjtBQUNGO0FBT0k7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCRVdTO0VGVlQsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUxOO0FDMEdFO0VEN0dFO0lBV0ksbUJBQUE7RUFKTjtBQUNGO0FBUUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBDRUVVO0VGRFYsaUNBQUE7RUFDQSxjRW5Ea0I7RUZvRGxCLGVBQUE7QUFOSjtBQVFJO0VBQ0UseUJFdkRnQjtFRndEaEIsWUFBQTtBQU5OO0FBU0k7RUFDRSxvQkFBQTtBQVBOIiwiZmlsZSI6InNsaWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICdtaXhpbnMnO1xuXG46aG9zdCB7XG4gICoge1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIH1cbn1cblxuLnNsaWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIEBpbmNsdWRlIG1vYmlsZS1vbmx5IHtcbiAgICBwYWRkaW5nLXRvcDogMi41cmVtO1xuICB9XG5cbiAgQGluY2x1ZGUgbW9iaWxlLXVwIHtcbiAgICBwYWRkaW5nOiAwIDIuNXJlbSAwIDQuMzc1cmVtO1xuICB9XG5cbiAgJl9fdmlld3BvcnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgJl9fdHJhY2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAuc2xpZGVyX19pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgcGFkZGluZzogMCAxcmVtO1xuXG4gICAgICBpbWcge1xuICAgICAgICBtYXgtaGVpZ2h0OiA3MHB4O1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICAgICAgQGluY2x1ZGUgbW9iaWxlLXVwIHtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA4MHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItcHVycGxlLTkwO1xuXG4gICAgICAgICYuYm9sZCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICAgICAgICBwYWRkaW5nOiAxLjI1cmVtIDAgMC42MjVyZW07XG5cbiAgICAgICAgICBAaW5jbHVkZSBtb2JpbGUtdXAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zbGlkZXItdHJhY2std3JhcHBlciB7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcblxuICAgIEBpbmNsdWRlIG1vYmlsZS1vbmx5IHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgIH1cbiAgfVxuXG4gICZfX2NvdW50ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG5cbiAgICBAaW5jbHVkZSBtb2JpbGUtdXAge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB9XG5cbiAgICAmLW51bWJlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyZXktOTtcbiAgICAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogNi4yNXJlbTtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG5cbiAgICAgIEBpbmNsdWRlIG1vYmlsZS11cCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmFycm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEuODc1cmVtO1xuICAgIGhlaWdodDogMS44NzVyZW07XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JlZW47XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuICAgIGNvbG9yOiAkbG9vcC1pbnRlcmFjdGl2ZS0wMTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsb29wLWludGVyYWN0aXZlLTAxO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgICYuZGlzYWJsZWQge1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AbWl4aW4gZmxleC1nYXAoJGdhcCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgbWFyZ2luLXRvcDogKC0kZ2FwKTtcbiAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoKC0kZ2FwKSwgJGdsb2JhbCk7XG5cbiAgPiAqIHtcbiAgICBtYXJnaW4tdG9wOiAkZ2FwO1xuICAgIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCRnYXAsICRnbG9iYWwpO1xuICB9XG59XG5cbkBtaXhpbiBiYXNlLWNvbnRhaW5lcigkY29udGVudC13aWR0aCkge1xuICAkZGVza3RvcC1wYWRkaW5nOiAycmVtO1xuICBtYXgtd2lkdGg6IGNhbGMoI3skY29udGVudC13aWR0aH0gKyAoI3skZGVza3RvcC1wYWRkaW5nfSkpO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQycmVtKSB7XG4gICAgQGluY2x1ZGUgcGFkZGluZy1sZWZ0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICAgIEBpbmNsdWRlIHBhZGRpbmctcmlnaHQoJGRlc2t0b3AtcGFkZGluZywgdHJ1ZSk7XG4gIH1cbn1cblxuQG1peGluIGNlbnRlckFic29sdXRlRWxlbWVudCB7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbkBtaXhpbiBvbmx5LWx0ci1nbG9iYWwge1xuICBodG1sOm5vdChbZGlyPSdydGwnXSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsLWdsb2JhbCB7XG4gIGh0bWxbZGlyPSdydGwnXSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1sdHIge1xuICA6aG9zdC1jb250ZXh0KGh0bWw6bm90KFtkaXI9J3J0bCddKSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsIHtcbiAgOmhvc3QtY29udGV4dChodG1sW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBydGwtdmFsdWUoJHByb3BlcnR5LCAkbHRyLXZhbHVlLCAkcnRsLXZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaWYgJGdsb2JhbCA9PSB0cnVlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ci1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsLWdsb2JhbCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRydGwtdmFsdWU7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ciB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRsdHItdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gcnRsLXByb3BlcnR5KCRsdHItcHJvcGVydHksICRydGwtcHJvcGVydHksICR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcnRsLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skbHRyLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hcmdpbi1sZWZ0KCRtYXJnaW4sICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShtYXJnaW4tbGVmdCwgbWFyZ2luLXJpZ2h0LCAkbWFyZ2luLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIG1hcmdpbi1yaWdodCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLXJpZ2h0LCBtYXJnaW4tbGVmdCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nKCRwYWRkaW5nVG9wLCAkcGFkZGluZ1JpZ2h0LCAkcGFkZGluZ0JvdHRvbSwgJHBhZGRpbmdMZWZ0LCAkZ2xvYmFsOiBmYWxzZSkge1xuICBwYWRkaW5nLXRvcDogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nUmlnaHQsICRnbG9iYWwpO1xuICBwYWRkaW5nLWJvdHRvbTogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nTGVmdCwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLWxlZnQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmctcmlnaHQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRleHQtYWxpZ24tbGVmdCgkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUodGV4dC1hbGlnbiwgbGVmdCwgcmlnaHQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShsZWZ0LCByaWdodCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHJpZ2h0LCBsZWZ0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gdHJhbnNsYXRlWFkoJHZhbHVlWCwgJHZhbHVlWSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRyYW5zZm9ybSwgdHJhbnNsYXRlKCR2YWx1ZVgsICR2YWx1ZVkpLCB0cmFuc2xhdGUoLSR2YWx1ZVgsICR2YWx1ZVkpLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1sZWZ0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1sZWZ0LCBib3JkZXItcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItcmlnaHQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXJpZ2h0LCBib3JkZXItbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsIGJvcmRlci10b3AtbGVmdC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItdG9wLWxlZnQtcmFkaXVzLCBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGZsb2F0LWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCBsZWZ0LCByaWdodCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gZmxvYXQtcmlnaHQge1xuICBAaW5jbHVkZSBydGwtdmFsdWUoZmxvYXQsIHJpZ2h0LCBsZWZ0LCAkZ2xvYmFsOiBmYWxzZSk7XG59XG5cbkBtaXhpbiBzbWFsbC1kZXNrdG9wLW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbGcpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC14bCAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1hbmQtdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbGcgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBzbWFsbC1tb2JpbGUtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1zIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbWQgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0YWJsZXQtb25seSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS11cCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBkaXNhYmxlLXNjcm9sbGJhciB7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIiwiJHN0YW5kYXJkRm9udEZhbWlseTogJ05vdG8gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGNvbnRlbnQtdG9wLXBhZGRpbmc6IDNyZW07XG4kcG9zdC1saXN0LWJnOiAjZGFkYWRhO1xuJHdoaXRlOiAjZmZmZmZmO1xuJHBvc3QtcHJldmlldy1iZzogd2hpdGU7XG4kbGlnaHQtZ3JheS1iZzogI2Y0ZjRmNDtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1sZWZ0OiAyLjM0NHJlbTtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1yaWdodDogMS4wNjNyZW07XG4kcG9zdC1wcmV2aWV3LXBhZGRpbmc6IDIuNXJlbSAkcG9zdC1wcmV2aWV3LXBhZGRpbmctcmlnaHQgMS4yNXJlbSAkcG9zdC1wcmV2aWV3LXBhZGRpbmctbGVmdDtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1tb2JpbGU6IDFyZW0gMXJlbSAwLjVyZW0gMXJlbTtcbiRwb3N0LXBhZGRpbmctYm90dG9tOiAxcmVtO1xuJHBvc3QtcHJldmlldy1ndXR0ZXI6IDJweDtcbiRwb3N0LWhpZ2hsaWdodC1jb2xvcjogIzU3MGY4NTtcbiRjb2xvci1wdXJwbGUtOTA6ICMzMTEzNWU7XG4kY29sb3ItcHVycGxlLTYwOiAjOTg4YWFlO1xuJGNvbG9yLXB1cnBsZS01MDogIzk4ODlhZjtcbiRjb2xvci1wdXJwbGUtMTA6ICNmNWYzZjc7XG4kY29sb3ItcHVycGxlLWxpZ2h0OiAjNGIzNWJjO1xuJGNvbG9yLXB1cnBsZS12ZXJ5LWxpZ2h0OiAjODY2YWIwO1xuJGNvbG9yLXB1cnBsZS1zdGVwcGVyOiAjNGEyYjdhO1xuJGNvbG9yLWdyZWVuLTEwMDogIzA1MjgwNDtcbiRjb2xvci1ncmVlbi05MDogIzBkM2QwYjtcbiRjb2xvci1ncmVlbi04MDogIzFmNmIxZTtcbiRjb2xvci1ncmVlbi03MDogIzM1OGEzNDtcbiRjb2xvci1ncmVlbi02MDogIzZkOWE2ZTtcbiRjb2xvci1ncmVlbi01MDogIzg5YTg4ZjtcbiRjb2xvci1ncmVlbi00MDogIzlmYzhhNjtcbiRjb2xvci1ncmVlbi0zMDogI2FhZDZiMztcbiRjb2xvci1ncmVlbi0yMDogI2M5ZTlkMTtcbiRjb2xvci1ncmVlbi0xMDogI2YzZjdmMztcbiRjb2xvci1ncmVlbi1zdGVwcGVyOiAjMTA3RDc5O1xuJGNvbG9yLWdyZWVuLW1lZGl1bTogI2FkZGFhZjtcbiRjb2xvci1ncmVlbi1saWdodDogIzNBQjA5ODtcbiRjb2xvci1ncmVlbi12ZXJ5LWxpZ2h0OiAjRURGRkZDO1xuJGdyZXktMTogI2Q2ZDBkZjtcbiRzdXBwb3J0LTAxOiAjZGExZTI4O1xuJGVycm9yOiAjZWUyMzJmO1xuJHRleHQtYmxhY2s6ICMxNjE2MTY7XG4kdGV4dC1zZWNvbmRhcnk6ICMzOTM5Mzk7XG4kdGV4dC1ncmF5ZWQ6ICM1MjUyNTI7XG4kdGV4dC1ncmF5ZWQ4MDogIzhmOGI4YjtcbiR0ZXh0LWdyYXktY2F0OiAjNmQ3Mjc4O1xuJHVpLWJhY2tncm91bmQtZ3JheTogI2Y4ZjhmOTtcbiRib3JkZXI6ICNlOGU3ZWE7XG4kZW50aXR5LWJvcmRlci1jb2xvcjogIzFjMGYzMDIxO1xuJGxvYWRpbmctYmc6IHJnYigwIDAgMCAvIDE4JSk7XG4kc3VwcG9ydC0wNDogIzAwNDNjZTtcbiRsb29wLXVzZXJuYW1lOiAjMTk4MDM4O1xuJGxvb3AtYWN0aXZlLWN1cnJlbnQtdXNlcjogIzI0YTE0ODtcbiR3YXJtLWdyYXktMTAtY29sb3I6ICNmN2YzZjI7XG4kd2FybS1ncmF5LTIwLWNvbG9yOiAjZTVlMGRmO1xuJGhlYWRpbmctMS1jb2xvcjogIzFjMGYzMDtcbiRoZWFkaW5nLTItY29sb3I6ICMzMjA3NGQ7XG4kaGVhZGluZy0zLWNvbG9yOiAjMmYyNzM1O1xuJG1vYmlsZS1pY29uLWNvbG9yOiAjMWMwZjMwO1xuJHN0YXRlLWRpc2FibGVkLTAyOiAjYzZjNmM2O1xuJGxpbmstMDI6ICM1NjAxYjI7XG4kaGVhZGVyLXB1cnBsZTogIzMxMTM1ZTtcbiRoZWFkZXItZ3JlZW46ICMxMDdkNzk7XG4kcHVycGxlLWxpZ2h0OiAjY2JjNGQ3O1xuJHB1cnBsZS1iYWNrZ3JvdW5kLWxpZ2h0OiAjZGNkNWU3O1xuJGxvb3AtaW50ZXJhY3RpdmUtMDE6ICMxMDdkNzk7XG4kbG9vcC1pbnRlcmFjdGl2ZS0wMS1vcGFjaXR5OiByZ2JhKDE2LCAxMjUsIDEyMSwgMC4zKTtcbiRmaWx0ZXJzLWdyZWVuOiAjMDU2NzYzO1xuLy8gQnJlYWtwb2ludHNcblxuJGJyZWFrcG9pbnQtczogMzc1cHg7XG4kYnJlYWtwb2ludC1zbTogNDIwcHg7XG4kYnJlYWtwb2ludC1tZDogNzY4cHg7XG4kYnJlYWtwb2ludC1sZzogMTA4MHB4O1xuJGJyZWFrcG9pbnQteGw6IDEyNzVweDtcblxuJGJyZWFrcG9pbnQtbWQtdjI6IDgyMHB4O1xuXG4kaGVhZGVyLWhlaWdodDogNC4zNzVyZW07XG4kaGVhZGVyLWhlaWdodC12MjogNC4zNzVyZW07XG4kc3RhdGUtc2VsZWN0ZWQtdWk6ICNlMGUwZTA7XG4kYy1sZWZ0LXBhZGRpbmc6IDEuNXJlbTtcbiRtZW51LWFjdGl2ZS1jb2xvcjogIzNBQjA5ODtcbiRtZW51LWhvdmVyLWNvbG9yOiAjM0FCMDk4O1xuJHRhYi1pbmFjdGl2ZS1jb2xvcjogIzg5YWY5MztcbiRsaW5lLWNvbG9yOiAjZDBkZmQyO1xuJGJvcmRlci1ncmF5OiAjY2NjY2NjO1xuJHRleHQtZ3JheTogIzgwODA4MDtcbiRiYXNlLWNvbnRhaW5lci13aWR0aDogODEuMTI0cmVtO1xuJGhlYWRlci11bmRlcmxpbmUtaGVpZ2h0OiAwLjMxM3JlbTtcblxuLy8gTW9kZXJhdG9yIHJldmlldyBzZWN0aW9uc1xuJGZvb3Rlci1oZWlnaHQ6IDRyZW07XG4kdG9wYmFyLWhlaWdodDogMTAuNXJlbTtcbiRzdGVwcGVyLWhlaWdodDogNi43cmVtO1xuXG4vLyBOZXcgU3RvcnkgZmxvdyAvIHN0b3J5IGRldGFpbHMgdmFyaWFibGVzXG4kZ3JleTogIzY1NjU2NTtcbiRsaWdodC1ncmV5LTI6ICNiMWI0YjY7XG4kbGlnaHQtZ3JleS0zOiAjYjRiNGI0O1xuJGxpZ2h0LWdyZXktNDogI2NmZDNkODtcbiRsaWdodC1ncmV5LTU6ICNkOWUwZTc7XG4kbGlnaHQtZ3JleS02OiAjZjFmMmYyO1xuJGxpZ2h0LWdyZXktNzogI2M0YzRjNDtcbiRsaWdodC1ncmV5LTg6ICNlOWU5ZTk7XG4kbGlnaHQtZ3JleS05OiAjZTZlYWVkO1xuJGxpZ2gtZ3JleS1zZXBhcmF0b3I6ICNjMGMwYzA7XG4kZGFyay1ncmV5OiAjMWExYTFhO1xuJGRhcmstZ3JleS01MDogcmdiKDI2LCAyNiwgMjYsIDAuNSk7XG4kYm9yZGVyLWdyZXk6ICNjN2NkZDQ7XG4kbGlnaHQtcHVycGxlOiAjZWFlYWVhO1xuJGlucHV0LWRpc2FibGVkLWJnOiAjZjRmNmY4O1xuJGVycm9yLTI6ICNkZTIyMmQ7XG4kZGFuZ2VyOiAjYzkzMDRkO1xuJHByZXZpb3VzLXBpbGwtY29sb3I6ICM3MThkNmY7XG4kdG9vbHRpcC1ncmV5OiAjYWJhYmFiO1xuJGxpZ2h0LWdyZWVuOiAjY2ZlNWU0NjY7XG5cbiRmaWx0ZXJzLW1vZGFsLWhlYWRlci16aW5kZXg6IDEwMDAwO1xuJG1vZGFsLXppbmRleDogOTk5OTtcbiRsb2NhdGlvbi1vdmVybGF5LXppbmRleDogOTAwMTtcbiRoZWFkZXItYXNpZGUtemluZGV4OiA4MDAyO1xuJGhlYWRlci1hc2lkZS1iYWNrZ3JvdW5kLXppbmRleDogODAwMTtcbiRoZWFkZXItemluZGV4OiA4MDAwO1xuJG5hdmlnYXRpb24temluZGV4OiA4MDAwO1xuJHBhZ2UtbG9hZGluZy16aW5kZXg6IDcwMDE7XG4kdG9vbHRpcC16aW5kZXg6IDcwMDA7XG4kbmV3LXN0b3J5LWNvbnRlbnQtc3RhdGUtemluZGV4OiA1MDA7XG4kZmlsdGVyLWRyb3Bkb3duLXppbmRleDogMTAwO1xuJG1vZGFsLXRvcC1pbmRpY2F0b3ItemluZGV4OiA1MTtcbiRtb2RhbC10b3AtaW5kaWNhdG9yLWJhY2tncm91bmQtemluZGV4OiA1MTtcbiRjaGFydC16aW5kZXg6IDE7XG4kY2hhcnQtY29udHJvbC16aW5kZXg6IDI7XG5cbiRzbGlkZS10b2dnbGUtZGlzYWJsZWQtb3B0aW9uLWJhY2tncm91bmQ6ICNkZGRkZGQ7XG5cbiR0b2FzdC1pbmZvLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuJHRvYXN0LWluZm8tdGl0bGUtY29sb3I6ICM0OTQ5NDk7XG4kdG9hc3QtaW5mby1tZXNzYWdlLWNvbG9yOiAjNDIyYzAwO1xuJHRvYXN0LWluZm8tYnV0dG9uLWNvbG9yOiAjNmM0ZTk5O1xuXG4kdG9hc3Qtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiAjZDllZWVkO1xuJHRvYXN0LXN1Y2Nlc3MtdGl0bGUtY29sb3I6ICMwMDQ1NDI7XG4kdG9hc3Qtc3VjY2Vzcy1tZXNzYWdlLWNvbG9yOiAjMDEzMjMwO1xuJHRvYXN0LXN1Y2Nlc3MtYnV0dG9uLWNvbG9yOiAjMDE2OTY1O1xuXG4kdG9hc3Qtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMWQ1O1xuJHRvYXN0LXdhcm5pbmctdGl0bGUtY29sb3I6ICM2YjQ3MDA7XG4kdG9hc3Qtd2FybmluZy1tZXNzYWdlLWNvbG9yOiAjNDIyYzAwO1xuJHRvYXN0LXdhcm5pbmctYnV0dG9uLWNvbG9yOiAjY2M4ZjE0O1xuXG4kdG9hc3QtZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogI2Y1ZDVkYjtcbiR0b2FzdC1lcnJvci10aXRsZS1jb2xvcjogIzczMDAxNTtcbiR0b2FzdC1lcnJvci1tZXNzYWdlLWNvbG9yOiAjNDUwNjExO1xuJHRvYXN0LWVycm9yLXN1Y2Nlc3MtY29sb3I6ICNkOWVlZWQ7XG4kdG9hc3QtZXJyb3ItYnV0dG9uLWNvbG9yOiAjYjIxZDM5O1xuXG4kdG9hc3QtY2xvc2UtYnV0dG9uLWNvbG9yOiAjNzMwMDE1O1xuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zdGF0aXN0aWNzL3NlbnNpdGl2ZS1jYXNlcy9hY2NvdW50YWJpbGl0eS1wcm9jZXNzL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3N0eWxlcy9fbWl4aW5zLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUU7RUFDRSxtQkFBQTtBQUhKOztBQU9BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUpGO0FDNktFO0VEOUtGO0lBUUksbUJBQUE7RUFIRjtBQUNGO0FDb0xFO0VEMUxGO0lBWUksNEJBQUE7RUFGRjtBQUNGO0FBSUU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBRko7QUFLRTtFQUNFLGFBQUE7QUFISjtBQUtJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFITjtBQUtNO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUhSO0FDeUpFO0VEekpJO0lBTUksZ0JBQUE7RUFGUjtBQUNGO0FBS007RUFDRSxrQkFBQTtFQUNBLGNFekNVO0FGc0NsQjtBQUtRO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtBQUhWO0FDNElFO0VEM0lNO0lBS0ksa0JBQUE7RUFGVjtBQUNGO0FBUUU7RUFDRSxnQkFBQTtBQU5KO0FDd0hFO0VEbkhBO0lBSUksb0JBQUE7RUFMSjtBQUNGO0FBUUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBTko7QUN5SEU7RUR2SEE7SUFPSSxtQkFBQTtFQUxKO0FBQ0Y7QUFPSTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJFV1M7RUZWVCx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBTE47QUMwR0U7RUQ3R0U7SUFXSSxtQkFBQTtFQUpOO0FBQ0Y7QUFRRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMENFRVU7RUZEVixpQ0FBQTtFQUNBLGNFbkRrQjtFRm9EbEIsZUFBQTtBQU5KO0FBUUk7RUFDRSx5QkV2RGdCO0VGd0RoQixZQUFBO0FBTk47QUFTSTtFQUNFLG9CQUFBO0FBUE47QUFDQSx3N2dCQUF3N2dCIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcbkBpbXBvcnQgJ21peGlucyc7XG5cbjpob3N0IHtcbiAgKiB7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgfVxufVxuXG4uc2xpZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgIHBhZGRpbmctdG9wOiAyLjVyZW07XG4gIH1cblxuICBAaW5jbHVkZSBtb2JpbGUtdXAge1xuICAgIHBhZGRpbmc6IDAgMi41cmVtIDAgNC4zNzVyZW07XG4gIH1cblxuICAmX192aWV3cG9ydCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAmX190cmFjayB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC5zbGlkZXJfX2l0ZW0ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAwIDFyZW07XG5cbiAgICAgIGltZyB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDcwcHg7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcblxuICAgICAgICBAaW5jbHVkZSBtb2JpbGUtdXAge1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDgwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3BhbiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICRjb2xvci1wdXJwbGUtOTA7XG5cbiAgICAgICAgJi5ib2xkIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgICAgICAgIHBhZGRpbmc6IDEuMjVyZW0gMCAwLjYyNXJlbTtcblxuICAgICAgICAgIEBpbmNsdWRlIG1vYmlsZS11cCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnNsaWRlci10cmFjay13cmFwcGVyIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuXG4gICAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgfVxuICB9XG5cbiAgJl9fY291bnRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcblxuICAgIEBpbmNsdWRlIG1vYmlsZS11cCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIH1cblxuICAgICYtbnVtYmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JleS05O1xuICAgICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiA2LjI1cmVtO1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcblxuICAgICAgQGluY2x1ZGUgbW9iaWxlLXVwIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYXJyb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMS44NzVyZW07XG4gICAgaGVpZ2h0OiAxLjg3NXJlbTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmVlbjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG4gICAgY29sb3I6ICRsb29wLWludGVyYWN0aXZlLTAxO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxvb3AtaW50ZXJhY3RpdmUtMDE7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgJi5kaXNhYmxlZCB7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbkBtaXhpbiBmbGV4LWdhcCgkZ2FwLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBtYXJnaW4tdG9wOiAoLSRnYXApO1xuICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgoLSRnYXApLCAkZ2xvYmFsKTtcblxuICA+ICoge1xuICAgIG1hcmdpbi10b3A6ICRnYXA7XG4gICAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoJGdhcCwgJGdsb2JhbCk7XG4gIH1cbn1cblxuQG1peGluIGJhc2UtY29udGFpbmVyKCRjb250ZW50LXdpZHRoKSB7XG4gICRkZXNrdG9wLXBhZGRpbmc6IDJyZW07XG4gIG1heC13aWR0aDogY2FsYygjeyRjb250ZW50LXdpZHRofSArICgjeyRkZXNrdG9wLXBhZGRpbmd9KSk7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDJyZW0pIHtcbiAgICBAaW5jbHVkZSBwYWRkaW5nLWxlZnQoJGRlc2t0b3AtcGFkZGluZywgdHJ1ZSk7XG4gICAgQGluY2x1ZGUgcGFkZGluZy1yaWdodCgkZGVza3RvcC1wYWRkaW5nLCB0cnVlKTtcbiAgfVxufVxuXG5AbWl4aW4gY2VudGVyQWJzb2x1dGVFbGVtZW50IHtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcblxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuQG1peGluIG9ubHktbHRyLWdsb2JhbCB7XG4gIGh0bWw6bm90KFtkaXI9J3J0bCddKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1ydGwtZ2xvYmFsIHtcbiAgaHRtbFtkaXI9J3J0bCddICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LWx0ciB7XG4gIDpob3N0LWNvbnRleHQoaHRtbDpub3QoW2Rpcj0ncnRsJ10pKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1ydGwge1xuICA6aG9zdC1jb250ZXh0KGh0bWxbZGlyPSdydGwnXSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHJ0bC12YWx1ZSgkcHJvcGVydHksICRsdHItdmFsdWUsICRydGwtdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpZiAkZ2xvYmFsID09IHRydWUge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyLWdsb2JhbCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRsdHItdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwtZ2xvYmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHJ0bC12YWx1ZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGx0ci12YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRydGwtdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBydGwtcHJvcGVydHkoJGx0ci1wcm9wZXJ0eSwgJHJ0bC1wcm9wZXJ0eSwgJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaWYgJGdsb2JhbCA9PSB0cnVlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ci1nbG9iYWwge1xuICAgICAgI3skbHRyLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsLWdsb2JhbCB7XG4gICAgICAjeyRydGwtcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ciB7XG4gICAgICAjeyRsdHItcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwge1xuICAgICAgI3skcnRsLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWFyZ2luLWxlZnQoJG1hcmdpbiwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KG1hcmdpbi1sZWZ0LCBtYXJnaW4tcmlnaHQsICRtYXJnaW4sICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gbWFyZ2luLXJpZ2h0KCRtYXJnaW4sICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShtYXJnaW4tcmlnaHQsIG1hcmdpbi1sZWZ0LCAkbWFyZ2luLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmcoJHBhZGRpbmdUb3AsICRwYWRkaW5nUmlnaHQsICRwYWRkaW5nQm90dG9tLCAkcGFkZGluZ0xlZnQsICRnbG9iYWw6IGZhbHNlKSB7XG4gIHBhZGRpbmctdG9wOiAkcGFkZGluZ1RvcDtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctcmlnaHQsIHBhZGRpbmctbGVmdCwgJHBhZGRpbmdSaWdodCwgJGdsb2JhbCk7XG4gIHBhZGRpbmctYm90dG9tOiAkcGFkZGluZ1RvcDtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctbGVmdCwgcGFkZGluZy1yaWdodCwgJHBhZGRpbmdMZWZ0LCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmctbGVmdCgkcGFkZGluZywgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctbGVmdCwgcGFkZGluZy1yaWdodCwgJHBhZGRpbmcsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1yaWdodCgkcGFkZGluZywgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctcmlnaHQsIHBhZGRpbmctbGVmdCwgJHBhZGRpbmcsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gdGV4dC1hbGlnbi1sZWZ0KCRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZSh0ZXh0LWFsaWduLCBsZWZ0LCByaWdodCwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBsZWZ0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGxlZnQsIHJpZ2h0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcmlnaHQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocmlnaHQsIGxlZnQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiB0cmFuc2xhdGVYWSgkdmFsdWVYLCAkdmFsdWVZLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUodHJhbnNmb3JtLCB0cmFuc2xhdGUoJHZhbHVlWCwgJHZhbHVlWSksIHRyYW5zbGF0ZSgtJHZhbHVlWCwgJHZhbHVlWSksICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWxlZnQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWxlZnQsIGJvcmRlci1yaWdodCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1yaWdodCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItcmlnaHQsIGJvcmRlci1sZWZ0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMsIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItdG9wLXJpZ2h0LXJhZGl1cywgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItdG9wLWxlZnQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci10b3AtbGVmdC1yYWRpdXMsIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gZmxvYXQtbGVmdCgkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUoZmxvYXQsIGxlZnQsIHJpZ2h0LCAkZ2xvYmFsOiBmYWxzZSk7XG59XG5cbkBtaXhpbiBmbG9hdC1yaWdodCB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZShmbG9hdCwgcmlnaHQsIGxlZnQsICRnbG9iYWw6IGZhbHNlKTtcbn1cblxuQG1peGluIHNtYWxsLWRlc2t0b3Atb25seSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1sZykgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXhsIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLWFuZC10YWJsZXQtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZyAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtYWxsLW1vYmlsZS1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXMgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1tZCAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1kKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbGcpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLXVwIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1kKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGRpc2FibGUtc2Nyb2xsYmFyIHtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iLCIkc3RhbmRhcmRGb250RmFtaWx5OiAnTm90byBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4kY29udGVudC10b3AtcGFkZGluZzogM3JlbTtcbiRwb3N0LWxpc3QtYmc6ICNkYWRhZGE7XG4kd2hpdGU6ICNmZmZmZmY7XG4kcG9zdC1wcmV2aWV3LWJnOiB3aGl0ZTtcbiRsaWdodC1ncmF5LWJnOiAjZjRmNGY0O1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLWxlZnQ6IDIuMzQ0cmVtO1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLXJpZ2h0OiAxLjA2M3JlbTtcbiRwb3N0LXByZXZpZXctcGFkZGluZzogMi41cmVtICRwb3N0LXByZXZpZXctcGFkZGluZy1yaWdodCAxLjI1cmVtICRwb3N0LXByZXZpZXctcGFkZGluZy1sZWZ0O1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLW1vYmlsZTogMXJlbSAxcmVtIDAuNXJlbSAxcmVtO1xuJHBvc3QtcGFkZGluZy1ib3R0b206IDFyZW07XG4kcG9zdC1wcmV2aWV3LWd1dHRlcjogMnB4O1xuJHBvc3QtaGlnaGxpZ2h0LWNvbG9yOiAjNTcwZjg1O1xuJGNvbG9yLXB1cnBsZS05MDogIzMxMTM1ZTtcbiRjb2xvci1wdXJwbGUtNjA6ICM5ODhhYWU7XG4kY29sb3ItcHVycGxlLTUwOiAjOTg4OWFmO1xuJGNvbG9yLXB1cnBsZS0xMDogI2Y1ZjNmNztcbiRjb2xvci1wdXJwbGUtbGlnaHQ6ICM0YjM1YmM7XG4kY29sb3ItcHVycGxlLXZlcnktbGlnaHQ6ICM4NjZhYjA7XG4kY29sb3ItcHVycGxlLXN0ZXBwZXI6ICM0YTJiN2E7XG4kY29sb3ItZ3JlZW4tMTAwOiAjMDUyODA0O1xuJGNvbG9yLWdyZWVuLTkwOiAjMGQzZDBiO1xuJGNvbG9yLWdyZWVuLTgwOiAjMWY2YjFlO1xuJGNvbG9yLWdyZWVuLTcwOiAjMzU4YTM0O1xuJGNvbG9yLWdyZWVuLTYwOiAjNmQ5YTZlO1xuJGNvbG9yLWdyZWVuLTUwOiAjODlhODhmO1xuJGNvbG9yLWdyZWVuLTQwOiAjOWZjOGE2O1xuJGNvbG9yLWdyZWVuLTMwOiAjYWFkNmIzO1xuJGNvbG9yLWdyZWVuLTIwOiAjYzllOWQxO1xuJGNvbG9yLWdyZWVuLTEwOiAjZjNmN2YzO1xuJGNvbG9yLWdyZWVuLXN0ZXBwZXI6ICMxMDdENzk7XG4kY29sb3ItZ3JlZW4tbWVkaXVtOiAjYWRkYWFmO1xuJGNvbG9yLWdyZWVuLWxpZ2h0OiAjM0FCMDk4O1xuJGNvbG9yLWdyZWVuLXZlcnktbGlnaHQ6ICNFREZGRkM7XG4kZ3JleS0xOiAjZDZkMGRmO1xuJHN1cHBvcnQtMDE6ICNkYTFlMjg7XG4kZXJyb3I6ICNlZTIzMmY7XG4kdGV4dC1ibGFjazogIzE2MTYxNjtcbiR0ZXh0LXNlY29uZGFyeTogIzM5MzkzOTtcbiR0ZXh0LWdyYXllZDogIzUyNTI1MjtcbiR0ZXh0LWdyYXllZDgwOiAjOGY4YjhiO1xuJHRleHQtZ3JheS1jYXQ6ICM2ZDcyNzg7XG4kdWktYmFja2dyb3VuZC1ncmF5OiAjZjhmOGY5O1xuJGJvcmRlcjogI2U4ZTdlYTtcbiRlbnRpdHktYm9yZGVyLWNvbG9yOiAjMWMwZjMwMjE7XG4kbG9hZGluZy1iZzogcmdiKDAgMCAwIC8gMTglKTtcbiRzdXBwb3J0LTA0OiAjMDA0M2NlO1xuJGxvb3AtdXNlcm5hbWU6ICMxOTgwMzg7XG4kbG9vcC1hY3RpdmUtY3VycmVudC11c2VyOiAjMjRhMTQ4O1xuJHdhcm0tZ3JheS0xMC1jb2xvcjogI2Y3ZjNmMjtcbiR3YXJtLWdyYXktMjAtY29sb3I6ICNlNWUwZGY7XG4kaGVhZGluZy0xLWNvbG9yOiAjMWMwZjMwO1xuJGhlYWRpbmctMi1jb2xvcjogIzMyMDc0ZDtcbiRoZWFkaW5nLTMtY29sb3I6ICMyZjI3MzU7XG4kbW9iaWxlLWljb24tY29sb3I6ICMxYzBmMzA7XG4kc3RhdGUtZGlzYWJsZWQtMDI6ICNjNmM2YzY7XG4kbGluay0wMjogIzU2MDFiMjtcbiRoZWFkZXItcHVycGxlOiAjMzExMzVlO1xuJGhlYWRlci1ncmVlbjogIzEwN2Q3OTtcbiRwdXJwbGUtbGlnaHQ6ICNjYmM0ZDc7XG4kcHVycGxlLWJhY2tncm91bmQtbGlnaHQ6ICNkY2Q1ZTc7XG4kbG9vcC1pbnRlcmFjdGl2ZS0wMTogIzEwN2Q3OTtcbiRsb29wLWludGVyYWN0aXZlLTAxLW9wYWNpdHk6IHJnYmEoMTYsIDEyNSwgMTIxLCAwLjMpO1xuJGZpbHRlcnMtZ3JlZW46ICMwNTY3NjM7XG4vLyBCcmVha3BvaW50c1xuXG4kYnJlYWtwb2ludC1zOiAzNzVweDtcbiRicmVha3BvaW50LXNtOiA0MjBweDtcbiRicmVha3BvaW50LW1kOiA3NjhweDtcbiRicmVha3BvaW50LWxnOiAxMDgwcHg7XG4kYnJlYWtwb2ludC14bDogMTI3NXB4O1xuXG4kYnJlYWtwb2ludC1tZC12MjogODIwcHg7XG5cbiRoZWFkZXItaGVpZ2h0OiA0LjM3NXJlbTtcbiRoZWFkZXItaGVpZ2h0LXYyOiA0LjM3NXJlbTtcbiRzdGF0ZS1zZWxlY3RlZC11aTogI2UwZTBlMDtcbiRjLWxlZnQtcGFkZGluZzogMS41cmVtO1xuJG1lbnUtYWN0aXZlLWNvbG9yOiAjM0FCMDk4O1xuJG1lbnUtaG92ZXItY29sb3I6ICMzQUIwOTg7XG4kdGFiLWluYWN0aXZlLWNvbG9yOiAjODlhZjkzO1xuJGxpbmUtY29sb3I6ICNkMGRmZDI7XG4kYm9yZGVyLWdyYXk6ICNjY2NjY2M7XG4kdGV4dC1ncmF5OiAjODA4MDgwO1xuJGJhc2UtY29udGFpbmVyLXdpZHRoOiA4MS4xMjRyZW07XG4kaGVhZGVyLXVuZGVybGluZS1oZWlnaHQ6IDAuMzEzcmVtO1xuXG4vLyBNb2RlcmF0b3IgcmV2aWV3IHNlY3Rpb25zXG4kZm9vdGVyLWhlaWdodDogNHJlbTtcbiR0b3BiYXItaGVpZ2h0OiAxMC41cmVtO1xuJHN0ZXBwZXItaGVpZ2h0OiA2LjdyZW07XG5cbi8vIE5ldyBTdG9yeSBmbG93IC8gc3RvcnkgZGV0YWlscyB2YXJpYWJsZXNcbiRncmV5OiAjNjU2NTY1O1xuJGxpZ2h0LWdyZXktMjogI2IxYjRiNjtcbiRsaWdodC1ncmV5LTM6ICNiNGI0YjQ7XG4kbGlnaHQtZ3JleS00OiAjY2ZkM2Q4O1xuJGxpZ2h0LWdyZXktNTogI2Q5ZTBlNztcbiRsaWdodC1ncmV5LTY6ICNmMWYyZjI7XG4kbGlnaHQtZ3JleS03OiAjYzRjNGM0O1xuJGxpZ2h0LWdyZXktODogI2U5ZTllOTtcbiRsaWdodC1ncmV5LTk6ICNlNmVhZWQ7XG4kbGlnaC1ncmV5LXNlcGFyYXRvcjogI2MwYzBjMDtcbiRkYXJrLWdyZXk6ICMxYTFhMWE7XG4kZGFyay1ncmV5LTUwOiByZ2IoMjYsIDI2LCAyNiwgMC41KTtcbiRib3JkZXItZ3JleTogI2M3Y2RkNDtcbiRsaWdodC1wdXJwbGU6ICNlYWVhZWE7XG4kaW5wdXQtZGlzYWJsZWQtYmc6ICNmNGY2Zjg7XG4kZXJyb3ItMjogI2RlMjIyZDtcbiRkYW5nZXI6ICNjOTMwNGQ7XG4kcHJldmlvdXMtcGlsbC1jb2xvcjogIzcxOGQ2ZjtcbiR0b29sdGlwLWdyZXk6ICNhYmFiYWI7XG4kbGlnaHQtZ3JlZW46ICNjZmU1ZTQ2NjtcblxuJGZpbHRlcnMtbW9kYWwtaGVhZGVyLXppbmRleDogMTAwMDA7XG4kbW9kYWwtemluZGV4OiA5OTk5O1xuJGxvY2F0aW9uLW92ZXJsYXktemluZGV4OiA5MDAxO1xuJGhlYWRlci1hc2lkZS16aW5kZXg6IDgwMDI7XG4kaGVhZGVyLWFzaWRlLWJhY2tncm91bmQtemluZGV4OiA4MDAxO1xuJGhlYWRlci16aW5kZXg6IDgwMDA7XG4kbmF2aWdhdGlvbi16aW5kZXg6IDgwMDA7XG4kcGFnZS1sb2FkaW5nLXppbmRleDogNzAwMTtcbiR0b29sdGlwLXppbmRleDogNzAwMDtcbiRuZXctc3RvcnktY29udGVudC1zdGF0ZS16aW5kZXg6IDUwMDtcbiRmaWx0ZXItZHJvcGRvd24temluZGV4OiAxMDA7XG4kbW9kYWwtdG9wLWluZGljYXRvci16aW5kZXg6IDUxO1xuJG1vZGFsLXRvcC1pbmRpY2F0b3ItYmFja2dyb3VuZC16aW5kZXg6IDUxO1xuJGNoYXJ0LXppbmRleDogMTtcbiRjaGFydC1jb250cm9sLXppbmRleDogMjtcblxuJHNsaWRlLXRvZ2dsZS1kaXNhYmxlZC1vcHRpb24tYmFja2dyb3VuZDogI2RkZGRkZDtcblxuJHRvYXN0LWluZm8tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4kdG9hc3QtaW5mby10aXRsZS1jb2xvcjogIzQ5NDk0OTtcbiR0b2FzdC1pbmZvLW1lc3NhZ2UtY29sb3I6ICM0MjJjMDA7XG4kdG9hc3QtaW5mby1idXR0b24tY29sb3I6ICM2YzRlOTk7XG5cbiR0b2FzdC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6ICNkOWVlZWQ7XG4kdG9hc3Qtc3VjY2Vzcy10aXRsZS1jb2xvcjogIzAwNDU0MjtcbiR0b2FzdC1zdWNjZXNzLW1lc3NhZ2UtY29sb3I6ICMwMTMyMzA7XG4kdG9hc3Qtc3VjY2Vzcy1idXR0b24tY29sb3I6ICMwMTY5NjU7XG5cbiR0b2FzdC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6ICNmZmYxZDU7XG4kdG9hc3Qtd2FybmluZy10aXRsZS1jb2xvcjogIzZiNDcwMDtcbiR0b2FzdC13YXJuaW5nLW1lc3NhZ2UtY29sb3I6ICM0MjJjMDA7XG4kdG9hc3Qtd2FybmluZy1idXR0b24tY29sb3I6ICNjYzhmMTQ7XG5cbiR0b2FzdC1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiAjZjVkNWRiO1xuJHRvYXN0LWVycm9yLXRpdGxlLWNvbG9yOiAjNzMwMDE1O1xuJHRvYXN0LWVycm9yLW1lc3NhZ2UtY29sb3I6ICM0NTA2MTE7XG4kdG9hc3QtZXJyb3Itc3VjY2Vzcy1jb2xvcjogI2Q5ZWVlZDtcbiR0b2FzdC1lcnJvci1idXR0b24tY29sb3I6ICNiMjFkMzk7XG5cbiR0b2FzdC1jbG9zZS1idXR0b24tY29sb3I6ICM3MzAwMTU7XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}
const sliderOptions = [{
  order: 1,
  iconName: 'submit_story',
  titleTranslationKey: 'statisticsCases.accountabilityProcess.slider.submitStory.title',
  descriptionTranslationKey: 'statisticsCases.accountabilityProcess.slider.submitStory.description'
}, {
  order: 2,
  iconName: 'moderator_review',
  titleTranslationKey: 'statisticsCases.accountabilityProcess.slider.moderatorReview.title',
  descriptionTranslationKey: 'statisticsCases.accountabilityProcess.slider.moderatorReview.description'
}, {
  order: 3,
  iconName: 'case_manager_review',
  titleTranslationKey: 'statisticsCases.accountabilityProcess.slider.caseManagerReview.title',
  descriptionTranslationKey: 'statisticsCases.accountabilityProcess.slider.caseManagerReview.description'
}, {
  order: 4,
  iconName: 'story-case',
  titleTranslationKey: 'statisticsCases.accountabilityProcess.slider.storyCase.title',
  descriptionTranslationKey: 'statisticsCases.accountabilityProcess.slider.storyCase.description'
}, {
  order: 5,
  iconName: 'process_and_refer',
  titleTranslationKey: 'statisticsCases.processAndRefer',
  descriptionTranslationKey: 'statisticsCases.accountabilityProcess.slider.processAndRefer.description'
}, {
  order: 6,
  iconName: 'response_to_referral',
  titleTranslationKey: 'statisticsCases.responseToReferral',
  descriptionTranslationKey: 'statisticsCases.accountabilityProcess.slider.responseToReferral.description'
}, {
  order: 7,
  iconName: 'decision_to_investigate',
  titleTranslationKey: 'statisticsCases.decisionToInvestigate',
  descriptionTranslationKey: 'statisticsCases.accountabilityProcess.slider.decisionToInvestigate.description'
}, {
  order: 8,
  iconName: 'investigation',
  titleTranslationKey: 'statisticsCases.investigation',
  descriptionTranslationKey: 'statisticsCases.accountabilityProcess.slider.investigation.description'
}, {
  order: 9,
  iconName: 'author_informed',
  titleTranslationKey: 'statisticsCases.accountabilityProcess.slider.authorInformed.title',
  descriptionTranslationKey: 'statisticsCases.accountabilityProcess.slider.authorInformed.description'
}];

/***/ }),

/***/ 21497:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/statistics/sensitive-cases/sensitive-cases-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SensitiveCasesRoutingModule": () => (/* binding */ SensitiveCasesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _sensitive_cases_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sensitive-cases.component */ 57386);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _sensitive_cases_component__WEBPACK_IMPORTED_MODULE_0__.SensitiveCasesComponent,
  data: {
    title: 'sensitiveCases'
  }
}];
class SensitiveCasesRoutingModule {
  static #_ = this.ɵfac = function SensitiveCasesRoutingModule_Factory(t) {
    return new (t || SensitiveCasesRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: SensitiveCasesRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SensitiveCasesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 57386:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/statistics/sensitive-cases/sensitive-cases.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SensitiveCasesComponent": () => (/* binding */ SensitiveCasesComponent)
/* harmony export */ });
/* harmony import */ var _app_shared_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/components/base.component */ 70697);
/* harmony import */ var _shared_components_filters_section_v2_filters_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/components/filters-section-v2/filters.config */ 83985);
/* harmony import */ var _shared_utils_filters_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/utils/filters.utils */ 65197);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_services_statistics_statistics_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/services/statistics/statistics.service */ 42243);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _core_services_filters_filters_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/filters/filters.service */ 86631);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _shared_components_filters_section_v2_filter_section_v2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/filters-section-v2/filter-section-v2.component */ 54791);



// import { getTimeWithUnit } from '@shared/utils/hours-converter';










function SensitiveCasesComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "loop-filter-section-v2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("filtersChanged", function SensitiveCasesComponent_ng_container_1_Template_loop_filter_section_v2_filtersChanged_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.populateIFrame($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const config_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("config", config_r2)("showAllStoriesButton", false);
  }
}
function SensitiveCasesComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "iframe", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r1.iframeURL, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeResourceUrl"])("frameBorder", 0);
  }
}
class SensitiveCasesComponent extends _app_shared_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(statisticsService,
  // public statisticsCountService: StatisticsCountService,
  // public ui: UIService,
  datePipe,
  // private translateService: TranslateService,
  filtersService, sanitizer, http) {
    super();
    this.statisticsService = statisticsService;
    this.datePipe = datePipe;
    this.filtersService = filtersService;
    this.sanitizer = sanitizer;
    this.http = http;
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
    this.filtersConfig$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(null);
  }
  populateIFrame() {
    this.statisticsService.getSensitiveStoriesSignedUrl((0,_shared_utils_filters_utils__WEBPACK_IMPORTED_MODULE_2__.prepareFilterDataFromSessionStorage)(_shared_components_filters_section_v2_filters_config__WEBPACK_IMPORTED_MODULE_1__.casesFiltersConfig)).subscribe(data => {
      this.baseMetabaseUrl = data.url;
      this.iframeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseMetabaseUrl);
    });
  }
  ngOnInit() {
    this.populateIFrame();
    this.refreshData((0,_shared_utils_filters_utils__WEBPACK_IMPORTED_MODULE_2__.prepareFilterDataFromSessionStorage)(_shared_components_filters_section_v2_filters_config__WEBPACK_IMPORTED_MODULE_1__.casesFiltersConfig));
    this.filtersService.filtersChanged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroyed$)).subscribe(() => this.refreshData(this.filtersService.userFilters));
    this.filtersService.casesFiltersData$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroyed$)).subscribe(filtersData => {
      this.filtersConfig$.next((0,lodash__WEBPACK_IMPORTED_MODULE_3__.cloneDeep)(_shared_components_filters_section_v2_filters_config__WEBPACK_IMPORTED_MODULE_1__.casesFiltersConfig).map(singleConfig => {
        switch (singleConfig.internalName) {
          case _shared_components_filters_section_v2_filters_config__WEBPACK_IMPORTED_MODULE_1__.CasesFilters.CASE_TYPE:
            return {
              ...singleConfig,
              data: {
                data: filtersData.caseType,
                titleKey: 'caseTypes.label'
              }
            };
          case _shared_components_filters_section_v2_filters_config__WEBPACK_IMPORTED_MODULE_1__.CasesFilters.LOCATION:
            return {
              ...singleConfig,
              data: {
                data: filtersData.countries
              }
            };
          case _shared_components_filters_section_v2_filters_config__WEBPACK_IMPORTED_MODULE_1__.CasesFilters.DEMOGRAPHIC:
            return {
              ...singleConfig,
              data: [{
                data: filtersData.ages,
                translationKey: 'filtersV2.age.label',
                controlName: 'casesAge'
              }, {
                data: filtersData.genders,
                translationKey: 'filtersV2.gender.label',
                controlName: 'casesGender'
              }
              // {
              //   data: filtersData.disability,
              //   translationKey: 'filtersV2.disability.label',
              //   controlName: 'casesDifficulty',
              // },
              ]
            };

          case _shared_components_filters_section_v2_filters_config__WEBPACK_IMPORTED_MODULE_1__.CasesFilters.ORGANISATION_TYPE:
            return {
              ...singleConfig,
              data: {
                data: filtersData.organisationType,
                titleKey: 'organisationType.label'
              }
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
          case _shared_components_filters_section_v2_filters_config__WEBPACK_IMPORTED_MODULE_1__.CasesFilters.ASSISTANCE_REFERRED:
            return {
              ...singleConfig,
              data: {
                data: filtersData.referredForAssistance,
                titleKey: 'assistanceReferred.label'
              }
            };
          default:
            return singleConfig;
        }
      }));
    });
  }
  // openPdf(): void {
  //   window.open('assets/statistics/files/pdf-sector-recommended-timelines.pdf', '_blank');
  // }
  prepareFilteringData(filterData) {
    Object.keys(filterData).forEach(key => !filterData[key] && delete filterData[key]);
    return filterData;
  }
  refreshData(filterData) {
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
  static #_ = this.ɵfac = function SensitiveCasesComponent_Factory(t) {
    return new (t || SensitiveCasesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_core_services_statistics_statistics_service__WEBPACK_IMPORTED_MODULE_4__.StatisticsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_filters_filters_service__WEBPACK_IMPORTED_MODULE_5__.FiltersService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: SensitiveCasesComponent,
    selectors: [["app-sensitive-cases"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
    decls: 4,
    vars: 4,
    consts: [[1, "stats-container"], [4, "ngIf"], [3, "config", "showAllStoriesButton", "filtersChanged"], ["width", "100%", "height", "2000px", "allowtransparency", "", 3, "src", "frameBorder"]],
    template: function SensitiveCasesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SensitiveCasesComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, SensitiveCasesComponent_ng_container_3_Template, 2, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 2, ctx.filtersConfig$));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.iframeURL);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _shared_components_filters_section_v2_filter_section_v2_component__WEBPACK_IMPORTED_MODULE_6__.FilterSectionV2Component, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZW5zaXRpdmUtY2FzZXMuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zdGF0aXN0aWNzL3NlbnNpdGl2ZS1jYXNlcy9zZW5zaXRpdmUtY2FzZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdMQUFnTCIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 35351:
/*!******************************************************************************!*\
  !*** ./src/app/modules/statistics/sensitive-cases/sensitive-cases.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SensitiveCasesModule": () => (/* binding */ SensitiveCasesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _app_shared_components_charts_text_grid_text_grid_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/components/charts/text-grid/text-grid.module */ 61098);
/* harmony import */ var _app_shared_components_charts_wave_timeline_chart_wave_timeline_chart_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/components/charts/wave-timeline-chart/wave-timeline-chart.module */ 33635);
/* harmony import */ var _app_shared_components_info_link_info_link_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/components/info-link/info-link.module */ 83710);
/* harmony import */ var _app_shared_directives_tooltip_tooltip_directive_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/directives/tooltip/tooltip.directive.module */ 84898);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _shared_components_filters_section_v2_filter_section_v2_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/components/filters-section-v2/filter-section-v2.module */ 69417);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-echarts */ 31548);
/* harmony import */ var _shared_components_button_button_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/button/button.module */ 82024);
/* harmony import */ var _shared_components_charts_bar_stacked_by_step_chart_bar_stacked_by_step_chart_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/charts/bar-stacked-by-step-chart/bar-stacked-by-step-chart.module */ 2137);
/* harmony import */ var _shared_components_charts_bar_stacked_chart_bar_stacked_chart_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/charts/bar-stacked-chart/bar-stacked-chart.module */ 23564);
/* harmony import */ var _shared_components_charts_text_boxes_text_boxes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/charts/text-boxes/text-boxes.module */ 72228);
/* harmony import */ var _shared_components_modal_v2_modal_v2_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/modal-v2/modal-v2.module */ 30869);
/* harmony import */ var _shared_icons_add_icon_add_icon_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/icons/add-icon/add-icon.module */ 47432);
/* harmony import */ var _shared_icons_close_icon_close_icon_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/icons/close-icon/close-icon.module */ 96958);
/* harmony import */ var _shared_icons_expand_more_icon_expand_more_icon_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/icons/expand-more-icon/expand-more-icon.module */ 14390);
/* harmony import */ var _shared_icons_pdf_icon_pdf_icon_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/icons/pdf-icon/pdf-icon.module */ 34811);
/* harmony import */ var _accountability_process_accountability_process_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./accountability-process/accountability-process.component */ 95256);
/* harmony import */ var _accountability_process_see_process_see_process_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./accountability-process/see-process/see-process-modal.component */ 94075);
/* harmony import */ var _accountability_process_slider_slider_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./accountability-process/slider/slider.component */ 15507);
/* harmony import */ var _sensitive_cases_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sensitive-cases-routing.module */ 21497);
/* harmony import */ var _sensitive_cases_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sensitive-cases.component */ 57386);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 22560);























class SensitiveCasesModule {
  static #_ = this.ɵfac = function SensitiveCasesModule_Factory(t) {
    return new (t || SensitiveCasesModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({
    type: SensitiveCasesModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({
    imports: [_shared_icons_add_icon_add_icon_module__WEBPACK_IMPORTED_MODULE_10__.AddIconModule, _shared_components_charts_bar_stacked_by_step_chart_bar_stacked_by_step_chart_module__WEBPACK_IMPORTED_MODULE_6__.BarStackedByStepChartModule, _shared_components_charts_bar_stacked_chart_bar_stacked_chart_module__WEBPACK_IMPORTED_MODULE_7__.BarStackedChartModule, _shared_components_button_button_module__WEBPACK_IMPORTED_MODULE_5__.ButtonModule, _shared_components_button_button_module__WEBPACK_IMPORTED_MODULE_5__.ButtonModule, _shared_icons_close_icon_close_icon_module__WEBPACK_IMPORTED_MODULE_11__.CloseIconModule, _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _shared_icons_expand_more_icon_expand_more_icon_module__WEBPACK_IMPORTED_MODULE_12__.ExpandMoreIconModule, _app_shared_components_info_link_info_link_module__WEBPACK_IMPORTED_MODULE_2__.InfoLinkModule, _shared_components_modal_v2_modal_v2_module__WEBPACK_IMPORTED_MODULE_9__.ModalV2Module, ngx_echarts__WEBPACK_IMPORTED_MODULE_21__.NgxEchartsModule, _shared_icons_pdf_icon_pdf_icon_module__WEBPACK_IMPORTED_MODULE_13__.PdfIconModule, _sensitive_cases_routing_module__WEBPACK_IMPORTED_MODULE_17__.SensitiveCasesRoutingModule, _shared_components_charts_text_boxes_text_boxes_module__WEBPACK_IMPORTED_MODULE_8__.TextBoxesModule, _app_shared_components_charts_text_grid_text_grid_module__WEBPACK_IMPORTED_MODULE_0__.TextGridModule, _app_shared_directives_tooltip_tooltip_directive_module__WEBPACK_IMPORTED_MODULE_3__.TooltipDirectiveModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslateModule, _app_shared_components_charts_wave_timeline_chart_wave_timeline_chart_module__WEBPACK_IMPORTED_MODULE_1__.WaveTimelineChartModule, _shared_components_filters_section_v2_filter_section_v2_module__WEBPACK_IMPORTED_MODULE_4__.FilterSectionV2Module]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](SensitiveCasesModule, {
    declarations: [_sensitive_cases_component__WEBPACK_IMPORTED_MODULE_18__.SensitiveCasesComponent, _accountability_process_accountability_process_component__WEBPACK_IMPORTED_MODULE_14__.AccountabilityProcessComponent, _accountability_process_slider_slider_component__WEBPACK_IMPORTED_MODULE_16__.SliderComponent, _accountability_process_see_process_see_process_modal_component__WEBPACK_IMPORTED_MODULE_15__.SeeProcessModalComponent],
    imports: [_shared_icons_add_icon_add_icon_module__WEBPACK_IMPORTED_MODULE_10__.AddIconModule, _shared_components_charts_bar_stacked_by_step_chart_bar_stacked_by_step_chart_module__WEBPACK_IMPORTED_MODULE_6__.BarStackedByStepChartModule, _shared_components_charts_bar_stacked_chart_bar_stacked_chart_module__WEBPACK_IMPORTED_MODULE_7__.BarStackedChartModule, _shared_components_button_button_module__WEBPACK_IMPORTED_MODULE_5__.ButtonModule, _shared_components_button_button_module__WEBPACK_IMPORTED_MODULE_5__.ButtonModule, _shared_icons_close_icon_close_icon_module__WEBPACK_IMPORTED_MODULE_11__.CloseIconModule, _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _shared_icons_expand_more_icon_expand_more_icon_module__WEBPACK_IMPORTED_MODULE_12__.ExpandMoreIconModule, _app_shared_components_info_link_info_link_module__WEBPACK_IMPORTED_MODULE_2__.InfoLinkModule, _shared_components_modal_v2_modal_v2_module__WEBPACK_IMPORTED_MODULE_9__.ModalV2Module, ngx_echarts__WEBPACK_IMPORTED_MODULE_21__.NgxEchartsModule, _shared_icons_pdf_icon_pdf_icon_module__WEBPACK_IMPORTED_MODULE_13__.PdfIconModule, _sensitive_cases_routing_module__WEBPACK_IMPORTED_MODULE_17__.SensitiveCasesRoutingModule, _shared_components_charts_text_boxes_text_boxes_module__WEBPACK_IMPORTED_MODULE_8__.TextBoxesModule, _app_shared_components_charts_text_grid_text_grid_module__WEBPACK_IMPORTED_MODULE_0__.TextGridModule, _app_shared_directives_tooltip_tooltip_directive_module__WEBPACK_IMPORTED_MODULE_3__.TooltipDirectiveModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslateModule, _app_shared_components_charts_wave_timeline_chart_wave_timeline_chart_module__WEBPACK_IMPORTED_MODULE_1__.WaveTimelineChartModule, _shared_components_filters_section_v2_filter_section_v2_module__WEBPACK_IMPORTED_MODULE_4__.FilterSectionV2Module],
    exports: [_sensitive_cases_component__WEBPACK_IMPORTED_MODULE_18__.SensitiveCasesComponent]
  });
})();

/***/ }),

/***/ 46616:
/*!***********************************************************************************************************!*\
  !*** ./src/app/shared/components/charts/bar-stacked-by-step-chart/bar-stacked-by-step-chart.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarStackedByStepChartComponent": () => (/* binding */ BarStackedByStepChartComponent)
/* harmony export */ });
/* harmony import */ var _app_shared_components_charts_bar_stacked_chart_bar_stacked_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/components/charts/bar-stacked-chart/bar-stacked-chart.component */ 21046);
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @popperjs/core */ 18843);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/services/ui/ui.service */ 21428);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _app_core_services_filters_filters_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/services/filters/filters.service */ 86631);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-echarts */ 31548);
/* harmony import */ var _directives_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../directives/tooltip/tooltip.directive */ 33020);










function BarStackedByStepChartComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("chartInit", function BarStackedByStepChartComponent_div_3_Template_div_chartInit_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.onChartInit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx_r0.chartOption);
  }
}
function BarStackedByStepChartComponent_div_4_div_1_div_1_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 13);
  }
}
function BarStackedByStepChartComponent_div_4_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BarStackedByStepChartComponent_div_4_div_1_div_1_img_1_Template, 1, 0, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(i_r9 % 2));
  }
}
function BarStackedByStepChartComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BarStackedByStepChartComponent_div_4_div_1_div_1_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.settings.stacks);
  }
}
function BarStackedByStepChartComponent_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background", ctx_r5.getBackgroundGradient());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("blurred", ctx_r5.seriesHovered);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", ctx_r5.settings.colorPalette[ctx_r5.extraSummary.index]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r5.getCategoryName(ctx_r5.extraSummary.code), ": ", ctx_r5.extraSummary.value, "");
  }
}
function BarStackedByStepChartComponent_div_4_div_4_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19)(1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 22)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "p", 22)(17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const stack_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 6, "statisticsCases.howResponsiveWeAreByStep.tooltip." + stack_r11 + ".title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 8, "statisticsCases.howResponsiveWeAreByStep.tooltip." + stack_r11 + ".content"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 10, "statisticsCases.howResponsiveWeAreByStep.tooltip.overdueAfter"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 12, "statisticsCases.howResponsiveWeAreByStep.tooltip." + stack_r11 + ".overdueAfter"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 14, "statisticsCases.howResponsiveWeAreByStep.tooltip.unresponsiveAfter"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](22, 16, "statisticsCases.howResponsiveWeAreByStep.tooltip." + stack_r11 + ".unresponsiveAfter"));
  }
}
function BarStackedByStepChartComponent_div_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BarStackedByStepChartComponent_div_4_div_4_Template_span_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17);
      const i_r12 = restoredCtx.index;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.stackClicked(i_r12));
    })("mouseenter", function BarStackedByStepChartComponent_div_4_div_4_Template_span_mouseenter_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17);
      const i_r12 = restoredCtx.index;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r18.stackClicked(i_r12));
    })("mouseleave", function BarStackedByStepChartComponent_div_4_div_4_Template_span_mouseleave_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17);
      const i_r12 = restoredCtx.index;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.stackMouseLeave(i_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, BarStackedByStepChartComponent_div_4_div_4_ng_template_4_Template, 23, 18, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stack_r11 = ctx.$implicit;
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r6.getStackName(stack_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tooltipOffset", ctx_r6.tooltipOffset)("tooltipPlacement", ctx_r6.tooltipPlacement)("tooltipPadding", ctx_r6.tooltipPadding)("tooltipDelay", ctx_r6.tooltipDelay)("lockTooltipMobile", ctx_r6.lockTooltipMobile)("maxWidth", ctx_r6.tooltipWidth)("tooltipContent", _r13);
  }
}
function BarStackedByStepChartComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BarStackedByStepChartComponent_div_4_div_1_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, BarStackedByStepChartComponent_div_4_div_2_Template, 3, 8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, BarStackedByStepChartComponent_div_4_div_4_Template, 6, 8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.summaryVisible && (ctx_r1.extraSummary == null ? null : ctx_r1.extraSummary.value) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.summaryVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.settings.stacks);
  }
}
class BarStackedByStepChartComponent extends _app_shared_components_charts_bar_stacked_chart_bar_stacked_chart_component__WEBPACK_IMPORTED_MODULE_0__.BarStackedChartComponent {
  set data(value) {
    this._data = value;
    this.selectLegendOptionsBasedOnFilters(this.filtersService.userFilters);
    this.data && this.refreshSeries(this.mapToSeries(this.data));
  }
  get data() {
    return this._data;
  }
  constructor(ui, translateService, filtersService, cd) {
    super(ui, translateService, filtersService);
    this.ui = ui;
    this.translateService = translateService;
    this.filtersService = filtersService;
    this.cd = cd;
    this.CUSTOM_DRAW_INIT_DELAY = 1000;
    this.seriesHovered = false;
    this.summaryVisible = true;
    this.unit = 'cases';
    this.tooltipPlacement = _popperjs_core__WEBPACK_IMPORTED_MODULE_6__.bottom;
    this.tooltipPadding = '1.25rem 1.563rem';
    this.tooltipWidth = '29rem';
    this.tooltipDelay = 50;
    this.lockTooltipMobile = false;
    this.tooltipOffset = [0, 15];
    this.barDefaults = {
      type: 'bar',
      barMinWidth: 10,
      barCategoryGap: '20%'
    };
  }
  setup() {
    super.setup();
    if (this.settings?.colorPalette) {
      this.chartOption.color = this.settings?.colorPalette;
    }
    this.chartOption.legend = {
      selectedMode: 'multiple',
      itemWidth: 14,
      itemHeight: 14,
      formatter: name => {
        return this.getCategoryName(name);
      },
      data: [...this.data.map(d => ({
        name: d.code,
        icon: d.code === this.extraSummary.code ? 'image://assets/statistics/legend/primary-dashed.svg' : 'circle'
      }))]
    };
  }
  onChartInit(echarts) {
    super.onChartInit(echarts);
    echarts?.on('mouseover', e => {
      this.seriesHovered = true;
      this.echartsInstance.dispatchAction({
        type: 'highlight',
        seriesIndex: e.seriesIndex,
        dataIndex: e.dataIndex
      });
      this.drawCustomElements();
    });
    echarts?.on('mouseout', e => {
      this.seriesHovered = false;
      this.drawCustomElements();
    });
    // Draw custom elements after chart is rendered and animated (needed for correct height calculation)
    // Additional redraws later in case of slow device or chart animation
    for (let i = 1; i < 4; i++) {
      setTimeout(() => this.drawCustomElements(), this.CUSTOM_DRAW_INIT_DELAY * i);
    }
  }
  legendselectchanged(selected) {
    this.summaryVisible = selected.closedCases;
    this.drawCustomElements(400, true);
    this.cd.detectChanges();
  }
  reprocessChartOptions() {
    super.reprocessChartOptions();
    this.drawCustomElements(this.CUSTOM_DRAW_INIT_DELAY);
    let options;
    if (this.ui.mobileView) {
      options = {
        grid: {
          height: 300,
          top: 20,
          width: '100%',
          left: '0%',
          right: '0%'
        },
        legend: {
          show: false
        },
        yAxis: {
          show: false,
          min: 0
        }
      };
    } else {
      options = {
        grid: {
          height: 310,
          left: '0',
          width: '100%',
          top: 40
        },
        legend: {
          show: true
        },
        yAxis: {
          show: false,
          min: 0
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
   * Function draws custom elements on charts -
   * arrows between bars, lines
   *
   * @param delay delay of draw
   * @param secondRedraw set to true to perform additional redraw 1.5*CUSTOM_DRAW_INIT_DELAY (case for chart animation)
   */
  drawCustomElements(delay = 10, secondRedraw = false) {
    if (!this.echartsInstance) {
      return;
    }
    const getGraphicsOptions = () => {
      const chartWidth = this.echartsInstance.getZr().getWidth();
      const items = {};
      const elements = [];
      this.echartsInstance.getZr().handler.storage.getDisplayList().filter(element => {
        return element.name === 'item';
      }).map(el => {
        if (!Array.isArray(items[el.parent.id])) {
          items[el.parent.id] = [];
        }
        items[el.parent.id].push(el);
      });
      const lineWidth = 10;
      const lineDetailed = Object.keys(items)[0];
      items[lineDetailed]?.sort((a, b) => a.id - b.id);
      items[lineDetailed]?.forEach((element, index) => {
        const {
          x,
          y,
          width,
          height
        } = element.shape;
        let gapSize = (chartWidth - lineDetailed.length * width) / lineDetailed.length / 4 - lineWidth;
        gapSize -= 2;
        if (this.ui.mobileView) {
          gapSize = gapSize / 2 - 1;
        }
        if (index < items[lineDetailed]?.length - 1 && this.getStacksValues()[index + 1] > 0) {
          elements.push({
            type: 'polyline',
            x: 0,
            y: 0,
            z: 1,
            $action: 'replace',
            shape: {
              points: [[x + width + gapSize, y - 2], [x + width + gapSize + lineWidth, y - 2], [x + width + gapSize + lineWidth, y + height + 2], [x + width + gapSize, y + height + 2]]
            },
            style: {
              lineWidth: 1,
              stroke: '#DFDBDB'
            }
          }, {
            type: 'image',
            $action: 'replace',
            x: x + width + gapSize + lineWidth - 12,
            y: y + height / 2 - 20,
            z: 9,
            style: {
              image: `assets/statistics/icons/arrow-right-white_bg.png`
            }
          }, {
            type: 'image',
            $action: 'replace',
            x: x + width + gapSize + lineWidth - 10,
            y: y + height / 2 - 10,
            z: 10,
            style: {
              image: `assets/statistics/icons/arrow-right${this.seriesHovered ? '-hover' : ''}.svg`
            }
          });
        }
      });
      return {
        graphic: {
          elements: [...(0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(elements)]
        }
      };
    };
    if (this.redrawTimeout) {
      clearTimeout(this.redrawTimeout);
    }
    this.redrawTimeout = setTimeout(() => {
      try {
        this.echartsInstance?.setOption(getGraphicsOptions(), {
          replaceMerge: 'graphic',
          lazyUpdate: true
        });
        secondRedraw && this.drawCustomElements(this.CUSTOM_DRAW_INIT_DELAY * 1.5);
      } catch (e) {}
    }, delay);
  }
  stackClicked(stack) {
    const chartWidth = this.echartsInstance?.getZr()?.getWidth();
    const itemsCount = this.data?.[0]?.values?.length;
    try {
      // This throws when all legend bars are disabled
      // It means that extraSummary only is selected
      const el = this.echartsInstance.getZr().handler.storage.getDisplayList().filter(element => {
        return element.name === 'item';
      })[0];
      const elWidth = el.shape.width;
      setTimeout(() => this.echartsInstance.dispatchAction({
        type: 'showTip',
        x: chartWidth / itemsCount * (stack + 1) - elWidth / 2 - 15,
        y: 65
      }), 1);
    } catch (_e) {
      // Do nothing, we can't display tooltip
    }
  }
  stackMouseLeave(_index) {
    setTimeout(() => this.echartsInstance.dispatchAction({
      type: 'hideTip'
    }), 1);
  }
  onResize() {
    super.onResize();
    this.drawCustomElements();
  }
  getBackgroundGradient() {
    return `repeating-linear-gradient(
      45deg,
      ${this.settings.colorPalette[0]},
      ${this.settings.colorPalette[0]} 2px,
      ${this.settings.colorPalette[this.extraSummary?.index]} 3px,
      ${this.settings.colorPalette[this.extraSummary?.index]} 6px
    )`;
  }
  static #_ = this.ɵfac = function BarStackedByStepChartComponent_Factory(t) {
    return new (t || BarStackedByStepChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_app_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_2__.UIService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_app_core_services_filters_filters_service__WEBPACK_IMPORTED_MODULE_3__.FiltersService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: BarStackedByStepChartComponent,
    selectors: [["loop-chart-bar-stacked-by-step"]],
    inputs: {
      settings: "settings",
      unit: "unit",
      data: "data",
      extraSummary: "extraSummary"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
    decls: 5,
    vars: 5,
    consts: [[1, "chart-subtitle"], ["echarts", "", "class", "base-chart", 3, "options", "chartInit", 4, "ngIf"], ["class", "chart-extra", 4, "ngIf"], ["echarts", "", 1, "base-chart", 3, "options", "chartInit"], [1, "chart-extra"], ["class", "chart-x-axis", 4, "ngIf"], ["class", "chart-summary", 3, "blurred", "background", 4, "ngIf"], [1, "chart-x-axis", "draw-axis"], ["class", "axis-item axis-flex", 4, "ngFor", "ngForOf"], [1, "chart-x-axis"], ["class", "axis-item", 4, "ngFor", "ngForOf"], [1, "axis-item"], ["src", "assets/statistics/icons/arrow-down.svg", 4, "ngIf"], ["src", "assets/statistics/icons/arrow-down.svg"], [1, "chart-summary"], [1, "axis-item", "axis-flex"], [1, "legend-label", 3, "click", "mouseenter", "mouseleave"], ["appTooltip", "", "src", "assets/icons/info-circle.svg", 1, "info-circle--legend", 3, "tooltipOffset", "tooltipPlacement", "tooltipPadding", "tooltipDelay", "lockTooltipMobile", "maxWidth", "tooltipContent"], ["tooltipContent", ""], [1, "axis-tooltip"], [1, "tooltip-title"], [1, "tooltip-content"], [1, "tooltip-details"]],
    template: function BarStackedByStepChartComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, BarStackedByStepChartComponent_div_3_Template, 1, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, BarStackedByStepChartComponent_div_4_Template, 5, 3, "div", 2);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 3, ctx.settings.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.chartOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.chartOption);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, ngx_echarts__WEBPACK_IMPORTED_MODULE_9__.NgxEchartsDirective, _directives_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__.TooltipDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
    styles: [".base-chart[_ngcontent-%COMP%] {\n  height: 370px;\n}\n@media (max-width: 767.9px) {\n  .base-chart[_ngcontent-%COMP%] {\n    height: 350px;\n  }\n}\n\n.chart-extra[_ngcontent-%COMP%] {\n  margin: 0 2% 0 4%;\n}\n.chart-extra[_ngcontent-%COMP%]   .chart-summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 0;\n  border-radius: 8px;\n  opacity: 0.9;\n  cursor: pointer;\n  transition: 0.2s opacity linear;\n}\n.chart-extra[_ngcontent-%COMP%]   .chart-summary[_ngcontent-%COMP%]:hover, .chart-extra[_ngcontent-%COMP%]   .chart-summary[_ngcontent-%COMP%]   .hover[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.chart-extra[_ngcontent-%COMP%]   .chart-summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-radius: 100px;\n  padding: 10px 15px;\n  color: #31135e;\n  font-weight: 600;\n}\n.chart-extra[_ngcontent-%COMP%]   .chart-summary.blurred[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.chart-extra[_ngcontent-%COMP%]   .chart-x-axis[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex: 1 0 20%;\n  justify-content: space-between;\n  padding-top: 10px;\n  margin-top: 10px;\n  padding-bottom: 16px;\n}\n.chart-extra[_ngcontent-%COMP%]   .chart-x-axis.draw-axis[_ngcontent-%COMP%] {\n  border-top: 1px solid #1a1a1a;\n}\n.chart-extra[_ngcontent-%COMP%]   .chart-x-axis[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n  max-width: 165px;\n}\n.chart-extra[_ngcontent-%COMP%]   .chart-x-axis[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]   .legend-label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 22px;\n  text-align: center;\n  color: #656565;\n  cursor: pointer;\n  padding: 4px 18px;\n  margin-bottom: 15px;\n}\n@media (max-width: 767.9px) {\n  .chart-extra[_ngcontent-%COMP%]   .chart-x-axis[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]   .legend-label[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 14px;\n    padding: 2px 8px;\n  }\n}\n.chart-extra[_ngcontent-%COMP%]   .chart-x-axis[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]   .legend-label[_ngcontent-%COMP%]:hover, .chart-extra[_ngcontent-%COMP%]   .chart-x-axis[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]   .legend-label.hover[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a1a1a;\n  background: #e6eaed;\n  border-radius: 100px;\n}\n.chart-extra[_ngcontent-%COMP%]   .chart-x-axis[_ngcontent-%COMP%]   .axis-flex[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n}\n@media (max-width: 767.9px) {\n  .chart-extra[_ngcontent-%COMP%]   .chart-x-axis[_ngcontent-%COMP%]   .axis-flex[_ngcontent-%COMP%] {\n    word-break: break-all;\n  }\n}\n.chart-extra[_ngcontent-%COMP%]   .chart-x-axis[_ngcontent-%COMP%]   .info-circle--legend[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n}\n\n.axis-tooltip[_ngcontent-%COMP%]   .tooltip-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1.125rem;\n  color: #ffffff;\n  margin-bottom: 20px;\n}\n.axis-tooltip[_ngcontent-%COMP%]   .tooltip-content[_ngcontent-%COMP%], .axis-tooltip[_ngcontent-%COMP%]   .tooltip-details[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #ffffff;\n  display: flex;\n  justify-content: space-between;\n}\n.axis-tooltip[_ngcontent-%COMP%]   .tooltip-content[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.axis-tooltip[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  height: 1px;\n  border-top: 1px solid #3e3e3e;\n  border-bottom: none;\n  border-left: none;\n  border-right: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhci1zdGFja2VkLWJ5LXN0ZXAtY2hhcnQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtBQURGO0FDcUxFO0VEckxGO0lBSUksYUFBQTtFQUFGO0FBQ0Y7O0FBR0E7RUFDRSxpQkFBQTtBQUFGO0FBRUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUFBSjtBQUVJOztFQUVFLFVBQUE7QUFBTjtBQUdJO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUROO0FBSUk7RUFDRSxZQUFBO0FBRk47QUFNRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUpKO0FBTUk7RUFDRSw2QkFBQTtBQUpOO0FBT0k7RUFDRSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUxOO0FBT007RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUxSO0FDeUhFO0VEN0hJO0lBWUksZUFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUFKUjtBQUNGO0FBS1E7RUFFRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBSlY7QUFTSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFQTjtBQ3NHRTtFRG5HRTtJQU9JLHFCQUFBO0VBTk47QUFDRjtBQVNJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBUE47O0FBYUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBVko7QUFhRTs7RUFFRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFYSjtBQWNFO0VBQ0UsbUJBQUE7QUFaSjtBQWVFO0VBQ0UsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBYkoiLCJmaWxlIjoiYmFyLXN0YWNrZWQtYnktc3RlcC1jaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ21peGlucyc7XG5cbi5iYXNlLWNoYXJ0IHtcbiAgaGVpZ2h0OiAzNzBweDtcblxuICBAaW5jbHVkZSBtb2JpbGUtb25seSB7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgfVxufVxuXG4uY2hhcnQtZXh0cmEge1xuICBtYXJnaW46IDAgMiUgMCA0JTtcblxuICAuY2hhcnQtc3VtbWFyeSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIG9wYWNpdHkgbGluZWFyO1xuXG4gICAgJjpob3ZlcixcbiAgICAuaG92ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICBzcGFuIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgICAgY29sb3I6ICMzMTEzNWU7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cblxuICAgICYuYmx1cnJlZCB7XG4gICAgICBvcGFjaXR5OiAwLjc7XG4gICAgfVxuICB9XG5cbiAgLmNoYXJ0LXgtYXhpcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXg6IDEgMCAyMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG5cbiAgICAmLmRyYXctYXhpcyB7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzFhMWExYTtcbiAgICB9XG5cbiAgICA+ICoge1xuICAgICAgZmxleDogMTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1heC13aWR0aDogMTY1cHg7XG5cbiAgICAgIC5sZWdlbmQtbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogIzY1NjU2NTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwYWRkaW5nOiA0cHggMThweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcblxuICAgICAgICBAaW5jbHVkZSBtb2JpbGUtb25seSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDJweCA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgJjpob3ZlcixcbiAgICAgICAgJi5ob3ZlciB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBjb2xvcjogIzFhMWExYTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTZlYWVkO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmF4aXMtZmxleCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIEBpbmNsdWRlIG1vYmlsZS1vbmx5IHtcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pbmZvLWNpcmNsZS0tbGVnZW5kIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgIH1cbiAgfVxufVxuXG4uYXhpcy10b29sdGlwIHtcbiAgLnRvb2x0aXAtdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgLnRvb2x0aXAtY29udGVudCxcbiAgLnRvb2x0aXAtZGV0YWlscyB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC50b29sdGlwLWNvbnRlbnQge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICBociB7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzZTNlM2U7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbkBtaXhpbiBmbGV4LWdhcCgkZ2FwLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBtYXJnaW4tdG9wOiAoLSRnYXApO1xuICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgoLSRnYXApLCAkZ2xvYmFsKTtcblxuICA+ICoge1xuICAgIG1hcmdpbi10b3A6ICRnYXA7XG4gICAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoJGdhcCwgJGdsb2JhbCk7XG4gIH1cbn1cblxuQG1peGluIGJhc2UtY29udGFpbmVyKCRjb250ZW50LXdpZHRoKSB7XG4gICRkZXNrdG9wLXBhZGRpbmc6IDJyZW07XG4gIG1heC13aWR0aDogY2FsYygjeyRjb250ZW50LXdpZHRofSArICgjeyRkZXNrdG9wLXBhZGRpbmd9KSk7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDJyZW0pIHtcbiAgICBAaW5jbHVkZSBwYWRkaW5nLWxlZnQoJGRlc2t0b3AtcGFkZGluZywgdHJ1ZSk7XG4gICAgQGluY2x1ZGUgcGFkZGluZy1yaWdodCgkZGVza3RvcC1wYWRkaW5nLCB0cnVlKTtcbiAgfVxufVxuXG5AbWl4aW4gY2VudGVyQWJzb2x1dGVFbGVtZW50IHtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcblxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuQG1peGluIG9ubHktbHRyLWdsb2JhbCB7XG4gIGh0bWw6bm90KFtkaXI9J3J0bCddKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1ydGwtZ2xvYmFsIHtcbiAgaHRtbFtkaXI9J3J0bCddICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LWx0ciB7XG4gIDpob3N0LWNvbnRleHQoaHRtbDpub3QoW2Rpcj0ncnRsJ10pKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1ydGwge1xuICA6aG9zdC1jb250ZXh0KGh0bWxbZGlyPSdydGwnXSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHJ0bC12YWx1ZSgkcHJvcGVydHksICRsdHItdmFsdWUsICRydGwtdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpZiAkZ2xvYmFsID09IHRydWUge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyLWdsb2JhbCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRsdHItdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwtZ2xvYmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHJ0bC12YWx1ZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGx0ci12YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRydGwtdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBydGwtcHJvcGVydHkoJGx0ci1wcm9wZXJ0eSwgJHJ0bC1wcm9wZXJ0eSwgJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaWYgJGdsb2JhbCA9PSB0cnVlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ci1nbG9iYWwge1xuICAgICAgI3skbHRyLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsLWdsb2JhbCB7XG4gICAgICAjeyRydGwtcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ciB7XG4gICAgICAjeyRsdHItcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwge1xuICAgICAgI3skcnRsLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWFyZ2luLWxlZnQoJG1hcmdpbiwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KG1hcmdpbi1sZWZ0LCBtYXJnaW4tcmlnaHQsICRtYXJnaW4sICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gbWFyZ2luLXJpZ2h0KCRtYXJnaW4sICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShtYXJnaW4tcmlnaHQsIG1hcmdpbi1sZWZ0LCAkbWFyZ2luLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmcoJHBhZGRpbmdUb3AsICRwYWRkaW5nUmlnaHQsICRwYWRkaW5nQm90dG9tLCAkcGFkZGluZ0xlZnQsICRnbG9iYWw6IGZhbHNlKSB7XG4gIHBhZGRpbmctdG9wOiAkcGFkZGluZ1RvcDtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctcmlnaHQsIHBhZGRpbmctbGVmdCwgJHBhZGRpbmdSaWdodCwgJGdsb2JhbCk7XG4gIHBhZGRpbmctYm90dG9tOiAkcGFkZGluZ1RvcDtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctbGVmdCwgcGFkZGluZy1yaWdodCwgJHBhZGRpbmdMZWZ0LCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmctbGVmdCgkcGFkZGluZywgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctbGVmdCwgcGFkZGluZy1yaWdodCwgJHBhZGRpbmcsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1yaWdodCgkcGFkZGluZywgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctcmlnaHQsIHBhZGRpbmctbGVmdCwgJHBhZGRpbmcsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gdGV4dC1hbGlnbi1sZWZ0KCRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZSh0ZXh0LWFsaWduLCBsZWZ0LCByaWdodCwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBsZWZ0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGxlZnQsIHJpZ2h0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcmlnaHQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocmlnaHQsIGxlZnQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiB0cmFuc2xhdGVYWSgkdmFsdWVYLCAkdmFsdWVZLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUodHJhbnNmb3JtLCB0cmFuc2xhdGUoJHZhbHVlWCwgJHZhbHVlWSksIHRyYW5zbGF0ZSgtJHZhbHVlWCwgJHZhbHVlWSksICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWxlZnQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWxlZnQsIGJvcmRlci1yaWdodCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1yaWdodCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItcmlnaHQsIGJvcmRlci1sZWZ0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMsIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItdG9wLXJpZ2h0LXJhZGl1cywgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItdG9wLWxlZnQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci10b3AtbGVmdC1yYWRpdXMsIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gZmxvYXQtbGVmdCgkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUoZmxvYXQsIGxlZnQsIHJpZ2h0LCAkZ2xvYmFsOiBmYWxzZSk7XG59XG5cbkBtaXhpbiBmbG9hdC1yaWdodCB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZShmbG9hdCwgcmlnaHQsIGxlZnQsICRnbG9iYWw6IGZhbHNlKTtcbn1cblxuQG1peGluIHNtYWxsLWRlc2t0b3Atb25seSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1sZykgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXhsIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLWFuZC10YWJsZXQtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZyAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtYWxsLW1vYmlsZS1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXMgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1tZCAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1kKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbGcpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLXVwIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1kKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGRpc2FibGUtc2Nyb2xsYmFyIHtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2hhcnRzL2Jhci1zdGFja2VkLWJ5LXN0ZXAtY2hhcnQvYmFyLXN0YWNrZWQtYnktc3RlcC1jaGFydC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3R5bGVzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7QUFERjtBQ3FMRTtFRHJMRjtJQUlJLGFBQUE7RUFBRjtBQUNGOztBQUdBO0VBQ0UsaUJBQUE7QUFBRjtBQUVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0FBQUo7QUFFSTs7RUFFRSxVQUFBO0FBQU47QUFHSTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFETjtBQUlJO0VBQ0UsWUFBQTtBQUZOO0FBTUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFKSjtBQU1JO0VBQ0UsNkJBQUE7QUFKTjtBQU9JO0VBQ0UsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFMTjtBQU9NO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFMUjtBQ3lIRTtFRDdISTtJQVlJLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0VBSlI7QUFDRjtBQUtRO0VBRUUsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUpWO0FBU0k7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBUE47QUNzR0U7RURuR0U7SUFPSSxxQkFBQTtFQU5OO0FBQ0Y7QUFTSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVBOOztBQWFFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQVZKO0FBYUU7O0VBRUUsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBWEo7QUFjRTtFQUNFLG1CQUFBO0FBWko7QUFlRTtFQUNFLFdBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQWJKO0FBQ0Esb2lXQUFvaVciLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdtaXhpbnMnO1xuXG4uYmFzZS1jaGFydCB7XG4gIGhlaWdodDogMzcwcHg7XG5cbiAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgIGhlaWdodDogMzUwcHg7XG4gIH1cbn1cblxuLmNoYXJ0LWV4dHJhIHtcbiAgbWFyZ2luOiAwIDIlIDAgNCU7XG5cbiAgLmNoYXJ0LXN1bW1hcnkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBvcGFjaXR5IGxpbmVhcjtcblxuICAgICY6aG92ZXIsXG4gICAgLmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgIGNvbG9yOiAjMzExMzVlO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICAmLmJsdXJyZWQge1xuICAgICAgb3BhY2l0eTogMC43O1xuICAgIH1cbiAgfVxuXG4gIC5jaGFydC14LWF4aXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4OiAxIDAgMjAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuXG4gICAgJi5kcmF3LWF4aXMge1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMxYTFhMWE7XG4gICAgfVxuXG4gICAgPiAqIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXgtd2lkdGg6IDE2NXB4O1xuXG4gICAgICAubGVnZW5kLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICM2NTY1NjU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcGFkZGluZzogNHB4IDE4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG5cbiAgICAgICAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICAgICAgICBwYWRkaW5nOiAycHggOHB4O1xuICAgICAgICB9XG4gICAgICAgICY6aG92ZXIsXG4gICAgICAgICYuaG92ZXIge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgY29sb3I6ICMxYTFhMWE7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2U2ZWFlZDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5heGlzLWZsZXgge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICBAaW5jbHVkZSBtb2JpbGUtb25seSB7XG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaW5mby1jaXJjbGUtLWxlZ2VuZCB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB3aWR0aDogMThweDtcbiAgICAgIGhlaWdodDogMThweDtcbiAgICB9XG4gIH1cbn1cblxuLmF4aXMtdG9vbHRpcCB7XG4gIC50b29sdGlwLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC50b29sdGlwLWNvbnRlbnQsXG4gIC50b29sdGlwLWRldGFpbHMge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAudG9vbHRpcC1jb250ZW50IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgaHIge1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjM2UzZTNlO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG59XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AbWl4aW4gZmxleC1nYXAoJGdhcCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgbWFyZ2luLXRvcDogKC0kZ2FwKTtcbiAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoKC0kZ2FwKSwgJGdsb2JhbCk7XG5cbiAgPiAqIHtcbiAgICBtYXJnaW4tdG9wOiAkZ2FwO1xuICAgIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCRnYXAsICRnbG9iYWwpO1xuICB9XG59XG5cbkBtaXhpbiBiYXNlLWNvbnRhaW5lcigkY29udGVudC13aWR0aCkge1xuICAkZGVza3RvcC1wYWRkaW5nOiAycmVtO1xuICBtYXgtd2lkdGg6IGNhbGMoI3skY29udGVudC13aWR0aH0gKyAoI3skZGVza3RvcC1wYWRkaW5nfSkpO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQycmVtKSB7XG4gICAgQGluY2x1ZGUgcGFkZGluZy1sZWZ0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICAgIEBpbmNsdWRlIHBhZGRpbmctcmlnaHQoJGRlc2t0b3AtcGFkZGluZywgdHJ1ZSk7XG4gIH1cbn1cblxuQG1peGluIGNlbnRlckFic29sdXRlRWxlbWVudCB7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbkBtaXhpbiBvbmx5LWx0ci1nbG9iYWwge1xuICBodG1sOm5vdChbZGlyPSdydGwnXSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsLWdsb2JhbCB7XG4gIGh0bWxbZGlyPSdydGwnXSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1sdHIge1xuICA6aG9zdC1jb250ZXh0KGh0bWw6bm90KFtkaXI9J3J0bCddKSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsIHtcbiAgOmhvc3QtY29udGV4dChodG1sW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBydGwtdmFsdWUoJHByb3BlcnR5LCAkbHRyLXZhbHVlLCAkcnRsLXZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaWYgJGdsb2JhbCA9PSB0cnVlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ci1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsLWdsb2JhbCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRydGwtdmFsdWU7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ciB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRsdHItdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gcnRsLXByb3BlcnR5KCRsdHItcHJvcGVydHksICRydGwtcHJvcGVydHksICR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcnRsLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skbHRyLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hcmdpbi1sZWZ0KCRtYXJnaW4sICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShtYXJnaW4tbGVmdCwgbWFyZ2luLXJpZ2h0LCAkbWFyZ2luLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIG1hcmdpbi1yaWdodCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLXJpZ2h0LCBtYXJnaW4tbGVmdCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nKCRwYWRkaW5nVG9wLCAkcGFkZGluZ1JpZ2h0LCAkcGFkZGluZ0JvdHRvbSwgJHBhZGRpbmdMZWZ0LCAkZ2xvYmFsOiBmYWxzZSkge1xuICBwYWRkaW5nLXRvcDogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nUmlnaHQsICRnbG9iYWwpO1xuICBwYWRkaW5nLWJvdHRvbTogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nTGVmdCwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLWxlZnQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmctcmlnaHQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRleHQtYWxpZ24tbGVmdCgkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUodGV4dC1hbGlnbiwgbGVmdCwgcmlnaHQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShsZWZ0LCByaWdodCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHJpZ2h0LCBsZWZ0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gdHJhbnNsYXRlWFkoJHZhbHVlWCwgJHZhbHVlWSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRyYW5zZm9ybSwgdHJhbnNsYXRlKCR2YWx1ZVgsICR2YWx1ZVkpLCB0cmFuc2xhdGUoLSR2YWx1ZVgsICR2YWx1ZVkpLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1sZWZ0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1sZWZ0LCBib3JkZXItcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItcmlnaHQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXJpZ2h0LCBib3JkZXItbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsIGJvcmRlci10b3AtbGVmdC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItdG9wLWxlZnQtcmFkaXVzLCBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGZsb2F0LWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCBsZWZ0LCByaWdodCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gZmxvYXQtcmlnaHQge1xuICBAaW5jbHVkZSBydGwtdmFsdWUoZmxvYXQsIHJpZ2h0LCBsZWZ0LCAkZ2xvYmFsOiBmYWxzZSk7XG59XG5cbkBtaXhpbiBzbWFsbC1kZXNrdG9wLW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbGcpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC14bCAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1hbmQtdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbGcgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBzbWFsbC1tb2JpbGUtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1zIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbWQgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0YWJsZXQtb25seSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS11cCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBkaXNhYmxlLXNjcm9sbGJhciB7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2137:
/*!********************************************************************************************************!*\
  !*** ./src/app/shared/components/charts/bar-stacked-by-step-chart/bar-stacked-by-step-chart.module.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarStackedByStepChartModule": () => (/* binding */ BarStackedByStepChartModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _app_shared_directives_tooltip_tooltip_directive_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/directives/tooltip/tooltip.directive.module */ 84898);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-echarts */ 31548);
/* harmony import */ var _bar_stacked_by_step_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bar-stacked-by-step-chart.component */ 46616);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);






class BarStackedByStepChartModule {
  static #_ = this.ɵfac = function BarStackedByStepChartModule_Factory(t) {
    return new (t || BarStackedByStepChartModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: BarStackedByStepChartModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_4__.NgxEchartsModule, _app_shared_directives_tooltip_tooltip_directive_module__WEBPACK_IMPORTED_MODULE_0__.TooltipDirectiveModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BarStackedByStepChartModule, {
    declarations: [_bar_stacked_by_step_chart_component__WEBPACK_IMPORTED_MODULE_1__.BarStackedByStepChartComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_4__.NgxEchartsModule, _app_shared_directives_tooltip_tooltip_directive_module__WEBPACK_IMPORTED_MODULE_0__.TooltipDirectiveModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule],
    exports: [_bar_stacked_by_step_chart_component__WEBPACK_IMPORTED_MODULE_1__.BarStackedByStepChartComponent]
  });
})();

/***/ }),

/***/ 65615:
/*!*************************************************************!*\
  !*** ./src/app/shared/icons/pdf-icon/pdf-icon.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PdfIconComponent": () => (/* binding */ PdfIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class PdfIconComponent {
  static #_ = this.ɵfac = function PdfIconComponent_Factory(t) {
    return new (t || PdfIconComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PdfIconComponent,
    selectors: [["app-pdf-icon"]],
    decls: 2,
    vars: 0,
    consts: [["width", "18", "height", "21", "viewBox", "0 0 18 21", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M4 0.5C2.90575 0.5 2 1.40575 2 2.5V7.5C0.895 7.5 0 8.395 0 9.5V14.5C0 15.605 0.895 16.5 2 16.5V18.5C2 19.5943 2.90575 20.5 4 20.5H16C17.0943 20.5 18 19.5943 18 18.5V5.5L13 0.5H4ZM4 2.5H12V6.5H16V7.5H4V2.5ZM2 9.5H3.5C4.328 9.5 5 10.172 5 11C5 11.828 4.328 12.5 3.5 12.5H3V14.5H2V9.5ZM11 9.5H14V10.5H12V11.5H13.5996V12.5H12V14.5H11V9.5ZM6 9.52344H7.62891C9.21091 9.52344 10 10.4749 10 11.6289V12.4004C10 13.5684 9.20923 14.5 7.61523 14.5H6V9.52344ZM3 10.5V11.5H3.5C3.776 11.5 4 11.276 4 11C4 10.724 3.776 10.5 3.5 10.5H3ZM7 10.5234V13.5H7.61523C8.24723 13.5 9 13.3084 9 12.4004V11.6289C9 10.7149 8.25491 10.5234 7.62891 10.5234H7ZM4 16.5H16V18.5H4V16.5Z", "fill", "currentColor"]],
    template: function PdfIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 34811:
/*!**********************************************************!*\
  !*** ./src/app/shared/icons/pdf-icon/pdf-icon.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PdfIconModule": () => (/* binding */ PdfIconModule)
/* harmony export */ });
/* harmony import */ var _pdf_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pdf-icon.component */ 65615);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class PdfIconModule {
  static #_ = this.ɵfac = function PdfIconModule_Factory(t) {
    return new (t || PdfIconModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: PdfIconModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PdfIconModule, {
    declarations: [_pdf_icon_component__WEBPACK_IMPORTED_MODULE_0__.PdfIconComponent],
    exports: [_pdf_icon_component__WEBPACK_IMPORTED_MODULE_0__.PdfIconComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_modules_statistics_sensitive-cases_sensitive-cases_module_ts.js.map