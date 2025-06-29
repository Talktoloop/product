"use strict";
(self["webpackChunkourloop_ui"] = self["webpackChunkourloop_ui"] || []).push([["src_app_modules_outbox_archive_archive_module_ts"],{

/***/ 83837:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/outbox/archive/archive-list/archive-list.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArchiveListComponent": () => (/* binding */ ArchiveListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class ArchiveListComponent {
  static #_ = this.ɵfac = function ArchiveListComponent_Factory(t) {
    return new (t || ArchiveListComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ArchiveListComponent,
    selectors: [["ng-component"]],
    decls: 2,
    vars: 0,
    template: function ArchiveListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "rejected-list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcmNoaXZlLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9vdXRib3gvYXJjaGl2ZS9hcmNoaXZlLWxpc3QvYXJjaGl2ZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw0S0FBNEsiLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 62019:
/*!******************************************************************!*\
  !*** ./src/app/modules/outbox/archive/archive-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArchiveRoutingModule": () => (/* binding */ ArchiveRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _archive_list_archive_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./archive-list/archive-list.component */ 83837);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _archive_list_archive_list_component__WEBPACK_IMPORTED_MODULE_0__.ArchiveListComponent,
  data: {
    title: 'outboxRejected'
  }
}];
class ArchiveRoutingModule {
  static #_ = this.ɵfac = function ArchiveRoutingModule_Factory(t) {
    return new (t || ArchiveRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ArchiveRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ArchiveRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 79721:
/*!**********************************************************!*\
  !*** ./src/app/modules/outbox/archive/archive.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArchiveModule": () => (/* binding */ ArchiveModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _app_modules_outbox_archive_archive_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/modules/outbox/archive/archive-routing.module */ 62019);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/shared.module */ 44466);
/* harmony import */ var _archive_list_archive_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./archive-list/archive-list.component */ 83837);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);





class ArchiveModule {
  static #_ = this.ɵfac = function ArchiveModule_Factory(t) {
    return new (t || ArchiveModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: ArchiveModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _app_modules_outbox_archive_archive_routing_module__WEBPACK_IMPORTED_MODULE_0__.ArchiveRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ArchiveModule, {
    declarations: [_archive_list_archive_list_component__WEBPACK_IMPORTED_MODULE_2__.ArchiveListComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _app_modules_outbox_archive_archive_routing_module__WEBPACK_IMPORTED_MODULE_0__.ArchiveRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_modules_outbox_archive_archive_module_ts.js.map