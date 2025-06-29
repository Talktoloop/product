"use strict";
(self["webpackChunkourloop_ui"] = self["webpackChunkourloop_ui"] || []).push([["common"],{

/***/ 44060:
/*!********************************************************!*\
  !*** ./src/app/modules/inbox/inbox-filter-tab.enum.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INBOX_FILTER_TAB": () => (/* binding */ INBOX_FILTER_TAB)
/* harmony export */ });
var INBOX_FILTER_TAB;
(function (INBOX_FILTER_TAB) {
  INBOX_FILTER_TAB["STORIES"] = "stories";
  INBOX_FILTER_TAB["REPLIES"] = "replies";
  INBOX_FILTER_TAB["REQUESTS"] = "requests";
  INBOX_FILTER_TAB["REJECTIONS"] = "rejections";
})(INBOX_FILTER_TAB || (INBOX_FILTER_TAB = {}));

/***/ }),

/***/ 15860:
/*!***********************************************************!*\
  !*** ./src/app/modules/inbox/shared/inbox-table.model.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InboxTable": () => (/* binding */ InboxTable)
/* harmony export */ });
class InboxTable {
  constructor(key, label) {
    this.key = key;
    this.label = label;
  }
}

/***/ }),

/***/ 89943:
/*!**********************************************************!*\
  !*** ./src/app/modules/outbox/outbox-filter-tab.enum.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OUTBOX_FILTER_TAB": () => (/* binding */ OUTBOX_FILTER_TAB)
/* harmony export */ });
var OUTBOX_FILTER_TAB;
(function (OUTBOX_FILTER_TAB) {
  OUTBOX_FILTER_TAB["PENDING_RECORDING"] = "pending-recording";
  OUTBOX_FILTER_TAB["SCHEDULED"] = "scheduled";
  OUTBOX_FILTER_TAB["REJECTED"] = "rejected";
})(OUTBOX_FILTER_TAB || (OUTBOX_FILTER_TAB = {}));

/***/ }),

/***/ 50424:
/*!*************************************************************!*\
  !*** ./src/app/modules/outbox/shared/outbox-table.model.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutboxTable": () => (/* binding */ OutboxTable)
/* harmony export */ });
class OutboxTable {
  constructor(key, label) {
    this.key = key;
    this.label = label;
  }
}

/***/ })

}]);
//# sourceMappingURL=common.js.map