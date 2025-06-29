"use strict";
(self["webpackChunkourloop_ui"] = self["webpackChunkourloop_ui"] || []).push([["default-src_app_shared_components_story-with-comments_story-with-comments_module_ts"],{

/***/ 1914:
/*!************************************************************************************************************!*\
  !*** ./src/app/shared/components/additional-story-info-section/additional-story-info-section.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdditionalStoryInfoSectionComponent": () => (/* binding */ AdditionalStoryInfoSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

const _c0 = ["*"];
class AdditionalStoryInfoSectionComponent {
  static #_ = this.ɵfac = function AdditionalStoryInfoSectionComponent_Factory(t) {
    return new (t || AdditionalStoryInfoSectionComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AdditionalStoryInfoSectionComponent,
    selectors: [["app-additional-story-info-section"]],
    inputs: {
      heading: "heading"
    },
    ngContentSelectors: _c0,
    decls: 4,
    vars: 1,
    consts: [[1, "additional-story-info-section"], [1, "additional-story-info-section__heading"]],
    template: function AdditionalStoryInfoSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.heading);
      }
    },
    styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.additional-story-info-section__heading[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1.875rem;\n  color: #656565;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZGl0aW9uYWwtc3RvcnktaW5mby1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7QUFERjs7QUFLRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0NrRkc7QURwRlAiLCJmaWxlIjoiYWRkaXRpb25hbC1zdG9yeS1pbmZvLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvYXBwL3N0eWxlcy92YXJpYWJsZXMnO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYWRkaXRpb25hbC1zdG9yeS1pbmZvLXNlY3Rpb24ge1xuICAmX19oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMS44NzVyZW07XG4gICAgY29sb3I6ICRncmV5O1xuICB9XG59XG4iLCIkc3RhbmRhcmRGb250RmFtaWx5OiAnTm90byBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4kY29udGVudC10b3AtcGFkZGluZzogM3JlbTtcbiRwb3N0LWxpc3QtYmc6ICNkYWRhZGE7XG4kd2hpdGU6ICNmZmZmZmY7XG4kcG9zdC1wcmV2aWV3LWJnOiB3aGl0ZTtcbiRsaWdodC1ncmF5LWJnOiAjZjRmNGY0O1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLWxlZnQ6IDIuMzQ0cmVtO1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLXJpZ2h0OiAxLjA2M3JlbTtcbiRwb3N0LXByZXZpZXctcGFkZGluZzogMi41cmVtICRwb3N0LXByZXZpZXctcGFkZGluZy1yaWdodCAxLjI1cmVtICRwb3N0LXByZXZpZXctcGFkZGluZy1sZWZ0O1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLW1vYmlsZTogMXJlbSAxcmVtIDAuNXJlbSAxcmVtO1xuJHBvc3QtcGFkZGluZy1ib3R0b206IDFyZW07XG4kcG9zdC1wcmV2aWV3LWd1dHRlcjogMnB4O1xuJHBvc3QtaGlnaGxpZ2h0LWNvbG9yOiAjNTcwZjg1O1xuJGNvbG9yLXB1cnBsZS05MDogIzMxMTM1ZTtcbiRjb2xvci1wdXJwbGUtNjA6ICM5ODhhYWU7XG4kY29sb3ItcHVycGxlLTUwOiAjOTg4OWFmO1xuJGNvbG9yLXB1cnBsZS0xMDogI2Y1ZjNmNztcbiRjb2xvci1wdXJwbGUtbGlnaHQ6ICM0YjM1YmM7XG4kY29sb3ItcHVycGxlLXZlcnktbGlnaHQ6ICM4NjZhYjA7XG4kY29sb3ItcHVycGxlLXN0ZXBwZXI6ICM0YTJiN2E7XG4kY29sb3ItZ3JlZW4tMTAwOiAjMDUyODA0O1xuJGNvbG9yLWdyZWVuLTkwOiAjMGQzZDBiO1xuJGNvbG9yLWdyZWVuLTgwOiAjMWY2YjFlO1xuJGNvbG9yLWdyZWVuLTcwOiAjMzU4YTM0O1xuJGNvbG9yLWdyZWVuLTYwOiAjNmQ5YTZlO1xuJGNvbG9yLWdyZWVuLTUwOiAjODlhODhmO1xuJGNvbG9yLWdyZWVuLTQwOiAjOWZjOGE2O1xuJGNvbG9yLWdyZWVuLTMwOiAjYWFkNmIzO1xuJGNvbG9yLWdyZWVuLTIwOiAjYzllOWQxO1xuJGNvbG9yLWdyZWVuLTEwOiAjZjNmN2YzO1xuJGNvbG9yLWdyZWVuLXN0ZXBwZXI6ICMxMDdENzk7XG4kY29sb3ItZ3JlZW4tbWVkaXVtOiAjYWRkYWFmO1xuJGNvbG9yLWdyZWVuLWxpZ2h0OiAjM0FCMDk4O1xuJGNvbG9yLWdyZWVuLXZlcnktbGlnaHQ6ICNFREZGRkM7XG4kZ3JleS0xOiAjZDZkMGRmO1xuJHN1cHBvcnQtMDE6ICNkYTFlMjg7XG4kZXJyb3I6ICNlZTIzMmY7XG4kdGV4dC1ibGFjazogIzE2MTYxNjtcbiR0ZXh0LXNlY29uZGFyeTogIzM5MzkzOTtcbiR0ZXh0LWdyYXllZDogIzUyNTI1MjtcbiR0ZXh0LWdyYXllZDgwOiAjOGY4YjhiO1xuJHRleHQtZ3JheS1jYXQ6ICM2ZDcyNzg7XG4kdWktYmFja2dyb3VuZC1ncmF5OiAjZjhmOGY5O1xuJGJvcmRlcjogI2U4ZTdlYTtcbiRlbnRpdHktYm9yZGVyLWNvbG9yOiAjMWMwZjMwMjE7XG4kbG9hZGluZy1iZzogcmdiKDAgMCAwIC8gMTglKTtcbiRzdXBwb3J0LTA0OiAjMDA0M2NlO1xuJGxvb3AtdXNlcm5hbWU6ICMxOTgwMzg7XG4kbG9vcC1hY3RpdmUtY3VycmVudC11c2VyOiAjMjRhMTQ4O1xuJHdhcm0tZ3JheS0xMC1jb2xvcjogI2Y3ZjNmMjtcbiR3YXJtLWdyYXktMjAtY29sb3I6ICNlNWUwZGY7XG4kaGVhZGluZy0xLWNvbG9yOiAjMWMwZjMwO1xuJGhlYWRpbmctMi1jb2xvcjogIzMyMDc0ZDtcbiRoZWFkaW5nLTMtY29sb3I6ICMyZjI3MzU7XG4kbW9iaWxlLWljb24tY29sb3I6ICMxYzBmMzA7XG4kc3RhdGUtZGlzYWJsZWQtMDI6ICNjNmM2YzY7XG4kbGluay0wMjogIzU2MDFiMjtcbiRoZWFkZXItcHVycGxlOiAjMzExMzVlO1xuJGhlYWRlci1ncmVlbjogIzEwN2Q3OTtcbiRwdXJwbGUtbGlnaHQ6ICNjYmM0ZDc7XG4kcHVycGxlLWJhY2tncm91bmQtbGlnaHQ6ICNkY2Q1ZTc7XG4kbG9vcC1pbnRlcmFjdGl2ZS0wMTogIzEwN2Q3OTtcbiRsb29wLWludGVyYWN0aXZlLTAxLW9wYWNpdHk6IHJnYmEoMTYsIDEyNSwgMTIxLCAwLjMpO1xuJGZpbHRlcnMtZ3JlZW46ICMwNTY3NjM7XG4vLyBCcmVha3BvaW50c1xuXG4kYnJlYWtwb2ludC1zOiAzNzVweDtcbiRicmVha3BvaW50LXNtOiA0MjBweDtcbiRicmVha3BvaW50LW1kOiA3NjhweDtcbiRicmVha3BvaW50LWxnOiAxMDgwcHg7XG4kYnJlYWtwb2ludC14bDogMTI3NXB4O1xuXG4kYnJlYWtwb2ludC1tZC12MjogODIwcHg7XG5cbiRoZWFkZXItaGVpZ2h0OiA0LjM3NXJlbTtcbiRoZWFkZXItaGVpZ2h0LXYyOiA0LjM3NXJlbTtcbiRzdGF0ZS1zZWxlY3RlZC11aTogI2UwZTBlMDtcbiRjLWxlZnQtcGFkZGluZzogMS41cmVtO1xuJG1lbnUtYWN0aXZlLWNvbG9yOiAjM0FCMDk4O1xuJG1lbnUtaG92ZXItY29sb3I6ICMzQUIwOTg7XG4kdGFiLWluYWN0aXZlLWNvbG9yOiAjODlhZjkzO1xuJGxpbmUtY29sb3I6ICNkMGRmZDI7XG4kYm9yZGVyLWdyYXk6ICNjY2NjY2M7XG4kdGV4dC1ncmF5OiAjODA4MDgwO1xuJGJhc2UtY29udGFpbmVyLXdpZHRoOiA4MS4xMjRyZW07XG4kaGVhZGVyLXVuZGVybGluZS1oZWlnaHQ6IDAuMzEzcmVtO1xuXG4vLyBNb2RlcmF0b3IgcmV2aWV3IHNlY3Rpb25zXG4kZm9vdGVyLWhlaWdodDogNHJlbTtcbiR0b3BiYXItaGVpZ2h0OiAxMC41cmVtO1xuJHN0ZXBwZXItaGVpZ2h0OiA2LjdyZW07XG5cbi8vIE5ldyBTdG9yeSBmbG93IC8gc3RvcnkgZGV0YWlscyB2YXJpYWJsZXNcbiRncmV5OiAjNjU2NTY1O1xuJGxpZ2h0LWdyZXktMjogI2IxYjRiNjtcbiRsaWdodC1ncmV5LTM6ICNiNGI0YjQ7XG4kbGlnaHQtZ3JleS00OiAjY2ZkM2Q4O1xuJGxpZ2h0LWdyZXktNTogI2Q5ZTBlNztcbiRsaWdodC1ncmV5LTY6ICNmMWYyZjI7XG4kbGlnaHQtZ3JleS03OiAjYzRjNGM0O1xuJGxpZ2h0LWdyZXktODogI2U5ZTllOTtcbiRsaWdodC1ncmV5LTk6ICNlNmVhZWQ7XG4kbGlnaC1ncmV5LXNlcGFyYXRvcjogI2MwYzBjMDtcbiRkYXJrLWdyZXk6ICMxYTFhMWE7XG4kZGFyay1ncmV5LTUwOiByZ2IoMjYsIDI2LCAyNiwgMC41KTtcbiRib3JkZXItZ3JleTogI2M3Y2RkNDtcbiRsaWdodC1wdXJwbGU6ICNlYWVhZWE7XG4kaW5wdXQtZGlzYWJsZWQtYmc6ICNmNGY2Zjg7XG4kZXJyb3ItMjogI2RlMjIyZDtcbiRkYW5nZXI6ICNjOTMwNGQ7XG4kcHJldmlvdXMtcGlsbC1jb2xvcjogIzcxOGQ2ZjtcbiR0b29sdGlwLWdyZXk6ICNhYmFiYWI7XG4kbGlnaHQtZ3JlZW46ICNjZmU1ZTQ2NjtcblxuJGZpbHRlcnMtbW9kYWwtaGVhZGVyLXppbmRleDogMTAwMDA7XG4kbW9kYWwtemluZGV4OiA5OTk5O1xuJGxvY2F0aW9uLW92ZXJsYXktemluZGV4OiA5MDAxO1xuJGhlYWRlci1hc2lkZS16aW5kZXg6IDgwMDI7XG4kaGVhZGVyLWFzaWRlLWJhY2tncm91bmQtemluZGV4OiA4MDAxO1xuJGhlYWRlci16aW5kZXg6IDgwMDA7XG4kbmF2aWdhdGlvbi16aW5kZXg6IDgwMDA7XG4kcGFnZS1sb2FkaW5nLXppbmRleDogNzAwMTtcbiR0b29sdGlwLXppbmRleDogNzAwMDtcbiRuZXctc3RvcnktY29udGVudC1zdGF0ZS16aW5kZXg6IDUwMDtcbiRmaWx0ZXItZHJvcGRvd24temluZGV4OiAxMDA7XG4kbW9kYWwtdG9wLWluZGljYXRvci16aW5kZXg6IDUxO1xuJG1vZGFsLXRvcC1pbmRpY2F0b3ItYmFja2dyb3VuZC16aW5kZXg6IDUxO1xuJGNoYXJ0LXppbmRleDogMTtcbiRjaGFydC1jb250cm9sLXppbmRleDogMjtcblxuJHNsaWRlLXRvZ2dsZS1kaXNhYmxlZC1vcHRpb24tYmFja2dyb3VuZDogI2RkZGRkZDtcblxuJHRvYXN0LWluZm8tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4kdG9hc3QtaW5mby10aXRsZS1jb2xvcjogIzQ5NDk0OTtcbiR0b2FzdC1pbmZvLW1lc3NhZ2UtY29sb3I6ICM0MjJjMDA7XG4kdG9hc3QtaW5mby1idXR0b24tY29sb3I6ICM2YzRlOTk7XG5cbiR0b2FzdC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6ICNkOWVlZWQ7XG4kdG9hc3Qtc3VjY2Vzcy10aXRsZS1jb2xvcjogIzAwNDU0MjtcbiR0b2FzdC1zdWNjZXNzLW1lc3NhZ2UtY29sb3I6ICMwMTMyMzA7XG4kdG9hc3Qtc3VjY2Vzcy1idXR0b24tY29sb3I6ICMwMTY5NjU7XG5cbiR0b2FzdC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6ICNmZmYxZDU7XG4kdG9hc3Qtd2FybmluZy10aXRsZS1jb2xvcjogIzZiNDcwMDtcbiR0b2FzdC13YXJuaW5nLW1lc3NhZ2UtY29sb3I6ICM0MjJjMDA7XG4kdG9hc3Qtd2FybmluZy1idXR0b24tY29sb3I6ICNjYzhmMTQ7XG5cbiR0b2FzdC1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiAjZjVkNWRiO1xuJHRvYXN0LWVycm9yLXRpdGxlLWNvbG9yOiAjNzMwMDE1O1xuJHRvYXN0LWVycm9yLW1lc3NhZ2UtY29sb3I6ICM0NTA2MTE7XG4kdG9hc3QtZXJyb3Itc3VjY2Vzcy1jb2xvcjogI2Q5ZWVlZDtcbiR0b2FzdC1lcnJvci1idXR0b24tY29sb3I6ICNiMjFkMzk7XG5cbiR0b2FzdC1jbG9zZS1idXR0b24tY29sb3I6ICM3MzAwMTU7XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWRkaXRpb25hbC1zdG9yeS1pbmZvLXNlY3Rpb24vYWRkaXRpb25hbC1zdG9yeS1pbmZvLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0FBREY7O0FBS0U7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNDa0ZHO0FEcEZQO0FBQ0EsbzVNQUFvNU0iLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvYXBwL3N0eWxlcy92YXJpYWJsZXMnO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYWRkaXRpb25hbC1zdG9yeS1pbmZvLXNlY3Rpb24ge1xuICAmX19oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMS44NzVyZW07XG4gICAgY29sb3I6ICRncmV5O1xuICB9XG59XG4iLCIkc3RhbmRhcmRGb250RmFtaWx5OiAnTm90byBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4kY29udGVudC10b3AtcGFkZGluZzogM3JlbTtcbiRwb3N0LWxpc3QtYmc6ICNkYWRhZGE7XG4kd2hpdGU6ICNmZmZmZmY7XG4kcG9zdC1wcmV2aWV3LWJnOiB3aGl0ZTtcbiRsaWdodC1ncmF5LWJnOiAjZjRmNGY0O1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLWxlZnQ6IDIuMzQ0cmVtO1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLXJpZ2h0OiAxLjA2M3JlbTtcbiRwb3N0LXByZXZpZXctcGFkZGluZzogMi41cmVtICRwb3N0LXByZXZpZXctcGFkZGluZy1yaWdodCAxLjI1cmVtICRwb3N0LXByZXZpZXctcGFkZGluZy1sZWZ0O1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLW1vYmlsZTogMXJlbSAxcmVtIDAuNXJlbSAxcmVtO1xuJHBvc3QtcGFkZGluZy1ib3R0b206IDFyZW07XG4kcG9zdC1wcmV2aWV3LWd1dHRlcjogMnB4O1xuJHBvc3QtaGlnaGxpZ2h0LWNvbG9yOiAjNTcwZjg1O1xuJGNvbG9yLXB1cnBsZS05MDogIzMxMTM1ZTtcbiRjb2xvci1wdXJwbGUtNjA6ICM5ODhhYWU7XG4kY29sb3ItcHVycGxlLTUwOiAjOTg4OWFmO1xuJGNvbG9yLXB1cnBsZS0xMDogI2Y1ZjNmNztcbiRjb2xvci1wdXJwbGUtbGlnaHQ6ICM0YjM1YmM7XG4kY29sb3ItcHVycGxlLXZlcnktbGlnaHQ6ICM4NjZhYjA7XG4kY29sb3ItcHVycGxlLXN0ZXBwZXI6ICM0YTJiN2E7XG4kY29sb3ItZ3JlZW4tMTAwOiAjMDUyODA0O1xuJGNvbG9yLWdyZWVuLTkwOiAjMGQzZDBiO1xuJGNvbG9yLWdyZWVuLTgwOiAjMWY2YjFlO1xuJGNvbG9yLWdyZWVuLTcwOiAjMzU4YTM0O1xuJGNvbG9yLWdyZWVuLTYwOiAjNmQ5YTZlO1xuJGNvbG9yLWdyZWVuLTUwOiAjODlhODhmO1xuJGNvbG9yLWdyZWVuLTQwOiAjOWZjOGE2O1xuJGNvbG9yLWdyZWVuLTMwOiAjYWFkNmIzO1xuJGNvbG9yLWdyZWVuLTIwOiAjYzllOWQxO1xuJGNvbG9yLWdyZWVuLTEwOiAjZjNmN2YzO1xuJGNvbG9yLWdyZWVuLXN0ZXBwZXI6ICMxMDdENzk7XG4kY29sb3ItZ3JlZW4tbWVkaXVtOiAjYWRkYWFmO1xuJGNvbG9yLWdyZWVuLWxpZ2h0OiAjM0FCMDk4O1xuJGNvbG9yLWdyZWVuLXZlcnktbGlnaHQ6ICNFREZGRkM7XG4kZ3JleS0xOiAjZDZkMGRmO1xuJHN1cHBvcnQtMDE6ICNkYTFlMjg7XG4kZXJyb3I6ICNlZTIzMmY7XG4kdGV4dC1ibGFjazogIzE2MTYxNjtcbiR0ZXh0LXNlY29uZGFyeTogIzM5MzkzOTtcbiR0ZXh0LWdyYXllZDogIzUyNTI1MjtcbiR0ZXh0LWdyYXllZDgwOiAjOGY4YjhiO1xuJHRleHQtZ3JheS1jYXQ6ICM2ZDcyNzg7XG4kdWktYmFja2dyb3VuZC1ncmF5OiAjZjhmOGY5O1xuJGJvcmRlcjogI2U4ZTdlYTtcbiRlbnRpdHktYm9yZGVyLWNvbG9yOiAjMWMwZjMwMjE7XG4kbG9hZGluZy1iZzogcmdiKDAgMCAwIC8gMTglKTtcbiRzdXBwb3J0LTA0OiAjMDA0M2NlO1xuJGxvb3AtdXNlcm5hbWU6ICMxOTgwMzg7XG4kbG9vcC1hY3RpdmUtY3VycmVudC11c2VyOiAjMjRhMTQ4O1xuJHdhcm0tZ3JheS0xMC1jb2xvcjogI2Y3ZjNmMjtcbiR3YXJtLWdyYXktMjAtY29sb3I6ICNlNWUwZGY7XG4kaGVhZGluZy0xLWNvbG9yOiAjMWMwZjMwO1xuJGhlYWRpbmctMi1jb2xvcjogIzMyMDc0ZDtcbiRoZWFkaW5nLTMtY29sb3I6ICMyZjI3MzU7XG4kbW9iaWxlLWljb24tY29sb3I6ICMxYzBmMzA7XG4kc3RhdGUtZGlzYWJsZWQtMDI6ICNjNmM2YzY7XG4kbGluay0wMjogIzU2MDFiMjtcbiRoZWFkZXItcHVycGxlOiAjMzExMzVlO1xuJGhlYWRlci1ncmVlbjogIzEwN2Q3OTtcbiRwdXJwbGUtbGlnaHQ6ICNjYmM0ZDc7XG4kcHVycGxlLWJhY2tncm91bmQtbGlnaHQ6ICNkY2Q1ZTc7XG4kbG9vcC1pbnRlcmFjdGl2ZS0wMTogIzEwN2Q3OTtcbiRsb29wLWludGVyYWN0aXZlLTAxLW9wYWNpdHk6IHJnYmEoMTYsIDEyNSwgMTIxLCAwLjMpO1xuJGZpbHRlcnMtZ3JlZW46ICMwNTY3NjM7XG4vLyBCcmVha3BvaW50c1xuXG4kYnJlYWtwb2ludC1zOiAzNzVweDtcbiRicmVha3BvaW50LXNtOiA0MjBweDtcbiRicmVha3BvaW50LW1kOiA3NjhweDtcbiRicmVha3BvaW50LWxnOiAxMDgwcHg7XG4kYnJlYWtwb2ludC14bDogMTI3NXB4O1xuXG4kYnJlYWtwb2ludC1tZC12MjogODIwcHg7XG5cbiRoZWFkZXItaGVpZ2h0OiA0LjM3NXJlbTtcbiRoZWFkZXItaGVpZ2h0LXYyOiA0LjM3NXJlbTtcbiRzdGF0ZS1zZWxlY3RlZC11aTogI2UwZTBlMDtcbiRjLWxlZnQtcGFkZGluZzogMS41cmVtO1xuJG1lbnUtYWN0aXZlLWNvbG9yOiAjM0FCMDk4O1xuJG1lbnUtaG92ZXItY29sb3I6ICMzQUIwOTg7XG4kdGFiLWluYWN0aXZlLWNvbG9yOiAjODlhZjkzO1xuJGxpbmUtY29sb3I6ICNkMGRmZDI7XG4kYm9yZGVyLWdyYXk6ICNjY2NjY2M7XG4kdGV4dC1ncmF5OiAjODA4MDgwO1xuJGJhc2UtY29udGFpbmVyLXdpZHRoOiA4MS4xMjRyZW07XG4kaGVhZGVyLXVuZGVybGluZS1oZWlnaHQ6IDAuMzEzcmVtO1xuXG4vLyBNb2RlcmF0b3IgcmV2aWV3IHNlY3Rpb25zXG4kZm9vdGVyLWhlaWdodDogNHJlbTtcbiR0b3BiYXItaGVpZ2h0OiAxMC41cmVtO1xuJHN0ZXBwZXItaGVpZ2h0OiA2LjdyZW07XG5cbi8vIE5ldyBTdG9yeSBmbG93IC8gc3RvcnkgZGV0YWlscyB2YXJpYWJsZXNcbiRncmV5OiAjNjU2NTY1O1xuJGxpZ2h0LWdyZXktMjogI2IxYjRiNjtcbiRsaWdodC1ncmV5LTM6ICNiNGI0YjQ7XG4kbGlnaHQtZ3JleS00OiAjY2ZkM2Q4O1xuJGxpZ2h0LWdyZXktNTogI2Q5ZTBlNztcbiRsaWdodC1ncmV5LTY6ICNmMWYyZjI7XG4kbGlnaHQtZ3JleS03OiAjYzRjNGM0O1xuJGxpZ2h0LWdyZXktODogI2U5ZTllOTtcbiRsaWdodC1ncmV5LTk6ICNlNmVhZWQ7XG4kbGlnaC1ncmV5LXNlcGFyYXRvcjogI2MwYzBjMDtcbiRkYXJrLWdyZXk6ICMxYTFhMWE7XG4kZGFyay1ncmV5LTUwOiByZ2IoMjYsIDI2LCAyNiwgMC41KTtcbiRib3JkZXItZ3JleTogI2M3Y2RkNDtcbiRsaWdodC1wdXJwbGU6ICNlYWVhZWE7XG4kaW5wdXQtZGlzYWJsZWQtYmc6ICNmNGY2Zjg7XG4kZXJyb3ItMjogI2RlMjIyZDtcbiRkYW5nZXI6ICNjOTMwNGQ7XG4kcHJldmlvdXMtcGlsbC1jb2xvcjogIzcxOGQ2ZjtcbiR0b29sdGlwLWdyZXk6ICNhYmFiYWI7XG4kbGlnaHQtZ3JlZW46ICNjZmU1ZTQ2NjtcblxuJGZpbHRlcnMtbW9kYWwtaGVhZGVyLXppbmRleDogMTAwMDA7XG4kbW9kYWwtemluZGV4OiA5OTk5O1xuJGxvY2F0aW9uLW92ZXJsYXktemluZGV4OiA5MDAxO1xuJGhlYWRlci1hc2lkZS16aW5kZXg6IDgwMDI7XG4kaGVhZGVyLWFzaWRlLWJhY2tncm91bmQtemluZGV4OiA4MDAxO1xuJGhlYWRlci16aW5kZXg6IDgwMDA7XG4kbmF2aWdhdGlvbi16aW5kZXg6IDgwMDA7XG4kcGFnZS1sb2FkaW5nLXppbmRleDogNzAwMTtcbiR0b29sdGlwLXppbmRleDogNzAwMDtcbiRuZXctc3RvcnktY29udGVudC1zdGF0ZS16aW5kZXg6IDUwMDtcbiRmaWx0ZXItZHJvcGRvd24temluZGV4OiAxMDA7XG4kbW9kYWwtdG9wLWluZGljYXRvci16aW5kZXg6IDUxO1xuJG1vZGFsLXRvcC1pbmRpY2F0b3ItYmFja2dyb3VuZC16aW5kZXg6IDUxO1xuJGNoYXJ0LXppbmRleDogMTtcbiRjaGFydC1jb250cm9sLXppbmRleDogMjtcblxuJHNsaWRlLXRvZ2dsZS1kaXNhYmxlZC1vcHRpb24tYmFja2dyb3VuZDogI2RkZGRkZDtcblxuJHRvYXN0LWluZm8tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4kdG9hc3QtaW5mby10aXRsZS1jb2xvcjogIzQ5NDk0OTtcbiR0b2FzdC1pbmZvLW1lc3NhZ2UtY29sb3I6ICM0MjJjMDA7XG4kdG9hc3QtaW5mby1idXR0b24tY29sb3I6ICM2YzRlOTk7XG5cbiR0b2FzdC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6ICNkOWVlZWQ7XG4kdG9hc3Qtc3VjY2Vzcy10aXRsZS1jb2xvcjogIzAwNDU0MjtcbiR0b2FzdC1zdWNjZXNzLW1lc3NhZ2UtY29sb3I6ICMwMTMyMzA7XG4kdG9hc3Qtc3VjY2Vzcy1idXR0b24tY29sb3I6ICMwMTY5NjU7XG5cbiR0b2FzdC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6ICNmZmYxZDU7XG4kdG9hc3Qtd2FybmluZy10aXRsZS1jb2xvcjogIzZiNDcwMDtcbiR0b2FzdC13YXJuaW5nLW1lc3NhZ2UtY29sb3I6ICM0MjJjMDA7XG4kdG9hc3Qtd2FybmluZy1idXR0b24tY29sb3I6ICNjYzhmMTQ7XG5cbiR0b2FzdC1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiAjZjVkNWRiO1xuJHRvYXN0LWVycm9yLXRpdGxlLWNvbG9yOiAjNzMwMDE1O1xuJHRvYXN0LWVycm9yLW1lc3NhZ2UtY29sb3I6ICM0NTA2MTE7XG4kdG9hc3QtZXJyb3Itc3VjY2Vzcy1jb2xvcjogI2Q5ZWVlZDtcbiR0b2FzdC1lcnJvci1idXR0b24tY29sb3I6ICNiMjFkMzk7XG5cbiR0b2FzdC1jbG9zZS1idXR0b24tY29sb3I6ICM3MzAwMTU7XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 80149:
/*!*********************************************************************************************************!*\
  !*** ./src/app/shared/components/additional-story-info-section/additional-story-info-section.module.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdditionalStoryInfoSectionModule": () => (/* binding */ AdditionalStoryInfoSectionModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _additional_story_info_section_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./additional-story-info-section.component */ 1914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class AdditionalStoryInfoSectionModule {
  static #_ = this.ɵfac = function AdditionalStoryInfoSectionModule_Factory(t) {
    return new (t || AdditionalStoryInfoSectionModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AdditionalStoryInfoSectionModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdditionalStoryInfoSectionModule, {
    declarations: [_additional_story_info_section_component__WEBPACK_IMPORTED_MODULE_0__.AdditionalStoryInfoSectionComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_additional_story_info_section_component__WEBPACK_IMPORTED_MODULE_0__.AdditionalStoryInfoSectionComponent]
  });
})();

/***/ }),

/***/ 49928:
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/additional-story-info/additional-story-info.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdditionalStoryInfoComponent": () => (/* binding */ AdditionalStoryInfoComponent)
/* harmony export */ });
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/types */ 69165);
/* harmony import */ var _shared_types_difficulty_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/types/difficulty.type */ 48707);
/* harmony import */ var _shared_types_story_category_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/types/story-category.type */ 98529);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _core_services_api_meta_data_meta_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/api/meta-data/meta-data.service */ 56401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _card2_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../card2/card.component */ 58272);
/* harmony import */ var _additional_story_info_section_additional_story_info_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../additional-story-info-section/additional-story-info-section.component */ 1914);
/* harmony import */ var _pills_pill_pill_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pills/pill/pill.component */ 32358);
/* harmony import */ var _story_category_icon_story_category_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../story-category-icon/story-category-icon.component */ 10668);












function AdditionalStoryInfoComponent_app_pill_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-pill", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-story-category-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const type_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("bigPadding", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("category", type_r2.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 3, type_r2.name));
  }
}
function AdditionalStoryInfoComponent_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.placeholderValue, " ");
  }
}
class AdditionalStoryInfoComponent {
  constructor(translateService, metaDataService) {
    this.translateService = translateService;
    this.metaDataService = metaDataService;
    this.placeholderValue = '-';
  }
  get storyTypes() {
    if (this.story?.isSensitive) {
      return [{
        name: `category.sensitive`,
        category: _shared_types_story_category_type__WEBPACK_IMPORTED_MODULE_2__.StoryCategory.SENSITIVE
      }];
    }
    return this.story?.categories?.map(cat => ({
      name: `category.${cat.code}`,
      category: _shared_types_story_category_type__WEBPACK_IMPORTED_MODULE_2__.StoryCategoryMapping[cat.id]
    }));
  }
  get storyAge() {
    const age = _shared_types__WEBPACK_IMPORTED_MODULE_0__.AGE_MAPPING[this.story?.age];
    return age ?? this.placeholderValue;
  }
  get storyGender() {
    const gender = _shared_types__WEBPACK_IMPORTED_MODULE_0__.GENDER_MAPPING[this.story?.gender];
    return gender ?? this.placeholderValue;
  }
  get disabilities() {
    const disabilities = this.story?.difficulties.map(difficulty => this.translateService.instant(_shared_types_difficulty_type__WEBPACK_IMPORTED_MODULE_1__.DIFFICULTY_TRANSLATE_MAPPING[difficulty.id]));
    return disabilities?.length ? disabilities.join(', ') : this.placeholderValue;
  }
  get storyChannel() {
    if (this.story?.channel) {
      return this.translateService.instant('filtersV2.channel.' + this.story?.channel);
    } else {
      return '-';
    }
  }
  get thematicAreas() {
    return this.metaDataService.thematicAreas$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(thematicOptions => {
      const ids = this.story?.thematics || [];
      const children = thematicOptions.reduce((acc, area) => [...acc, ...area.children], []);
      return children.filter(option => ids.includes(Number(option.id))).map(option => this.translateService.instant(option.code)).join(', ') || this.placeholderValue;
    }));
  }
  static #_ = this.ɵfac = function AdditionalStoryInfoComponent_Factory(t) {
    return new (t || AdditionalStoryInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_api_meta_data_meta_data_service__WEBPACK_IMPORTED_MODULE_3__.MetaDataService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: AdditionalStoryInfoComponent,
    selectors: [["app-additional-story-info"]],
    inputs: {
      story: "story",
      flat: "flat",
      noPadding: "noPadding"
    },
    decls: 32,
    vars: 36,
    consts: [[1, "additional-story-info", 3, "flat", "noPadding"], [1, "additional-story-info__heading"], [3, "heading"], [1, "additional-story-info__types"], ["variant", "new", "theme", "outlined-purple", "customContent", "true", "prefixIcon", "true", "bold", "true", 3, "bigPadding", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "additional-story-info__info"], ["variant", "new", "theme", "outlined-purple", "customContent", "true", "prefixIcon", "true", "bold", "true", 3, "bigPadding"], ["prefixIcon", "", 3, "category"]],
    template: function AdditionalStoryInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "loop-card", 0)(1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "app-additional-story-info-section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, AdditionalStoryInfoComponent_app_pill_7_Template, 5, 5, "app-pill", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, AdditionalStoryInfoComponent_p_8_Template, 2, 1, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "app-additional-story-info-section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "app-additional-story-info-section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "app-additional-story-info-section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "app-additional-story-info-section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "app-additional-story-info-section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](31, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("flat", ctx.flat)("noPadding", ctx.noPadding);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 16, "story.details.storyInformation.heading"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("heading", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 18, "story.details.storyInformation.type.label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.storyTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !(ctx.storyTypes == null ? null : ctx.storyTypes.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("heading", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](10, 20, "story.details.storyInformation.age.label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 22, ctx.storyAge));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("heading", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](15, 24, "story.details.storyInformation.gender.label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](18, 26, ctx.storyGender));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("heading", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](20, 28, "story.details.storyInformation.disability.label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.disabilities);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("heading", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](24, 30, "story.details.storyInformation.sentBy.label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.storyChannel);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("heading", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](28, 32, "story.details.storyInformation.thematic.label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](31, 34, ctx.thematicAreas));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _card2_card_component__WEBPACK_IMPORTED_MODULE_4__.CardComponent, _additional_story_info_section_additional_story_info_section_component__WEBPACK_IMPORTED_MODULE_5__.AdditionalStoryInfoSectionComponent, _pills_pill_pill_component__WEBPACK_IMPORTED_MODULE_6__.PillComponent, _story_category_icon_story_category_icon_component__WEBPACK_IMPORTED_MODULE_7__.StoryCategoryIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
    styles: [".additional-story-info__heading[_ngcontent-%COMP%] {\n  line-height: 1.688rem;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #000000;\n  margin-bottom: 1.563rem;\n}\n.additional-story-info[_ngcontent-%COMP%]   app-additional-story-info-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.875rem;\n}\n.additional-story-info[_ngcontent-%COMP%]   app-additional-story-info-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.additional-story-info__types[_ngcontent-%COMP%] {\n  padding-top: 0.625rem;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: -0.625rem;\n}\nhtml:not([dir=rtl])[_nghost-%COMP%]   .additional-story-info__types[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .additional-story-info__types[_ngcontent-%COMP%] {\n  margin-left: -0.625rem;\n}\nhtml[dir=rtl][_nghost-%COMP%]   .additional-story-info__types[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .additional-story-info__types[_ngcontent-%COMP%] {\n  margin-right: -0.625rem;\n}\n.additional-story-info__types[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-top: 0.625rem;\n}\nhtml:not([dir=rtl])[_nghost-%COMP%]   .additional-story-info__types[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .additional-story-info__types[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-left: 0.625rem;\n}\nhtml[dir=rtl][_nghost-%COMP%]   .additional-story-info__types[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .additional-story-info__types[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 0.625rem;\n}\n.additional-story-info__info[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  line-height: normal;\n}\n@media (max-width: 767.9px) {\n  .additional-story-info__info[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZGl0aW9uYWwtc3RvcnktaW5mby5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL3N0eWxlcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUFGSjtBQUtFO0VBQ0UsdUJBQUE7QUFISjtBQUtJO0VBQ0UsZ0JBQUE7QUFITjtBQU9FO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQ25CRixxQkFBQTtBRGVGO0FDd0JFO0VBMENJLHNCQWhGaUI7QURpQnZCO0FDMkJFO0VBd0NJLHVCQXBGaUI7QURvQnZCO0FDbEJFO0VBQ0Usb0JEZ0JrQjtBQUl0QjtBQ2VFO0VBMENJLHFCRDdEZ0I7QUFPdEI7QUNrQkU7RUF3Q0ksc0JEakVnQjtBQVV0QjtBQVBFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQVNKO0FDa0pFO0VEN0pBO0lBS0ksZUFBQTtFQVVKO0FBQ0YiLCJmaWxlIjoiYWRkaXRpb25hbC1zdG9yeS1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL2FwcC9zdHlsZXMvbWl4aW5zJztcblxuLmFkZGl0aW9uYWwtc3RvcnktaW5mbyB7XG4gICZfX2hlYWRpbmcge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY4OHJlbTtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjU2M3JlbTtcbiAgfVxuXG4gIGFwcC1hZGRpdGlvbmFsLXN0b3J5LWluZm8tc2VjdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS44NzVyZW07XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gIH1cblxuICAmX190eXBlcyB7XG4gICAgcGFkZGluZy10b3A6IDAuNjI1cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIEBpbmNsdWRlIGZsZXgtZ2FwKDAuNjI1cmVtKTtcbiAgfVxuXG4gICZfX2luZm8ge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuXG4gICAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIGZsZXgtZ2FwKCRnYXAsICRnbG9iYWw6IGZhbHNlKSB7XG4gIG1hcmdpbi10b3A6ICgtJGdhcCk7XG4gIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCgtJGdhcCksICRnbG9iYWwpO1xuXG4gID4gKiB7XG4gICAgbWFyZ2luLXRvcDogJGdhcDtcbiAgICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgkZ2FwLCAkZ2xvYmFsKTtcbiAgfVxufVxuXG5AbWl4aW4gYmFzZS1jb250YWluZXIoJGNvbnRlbnQtd2lkdGgpIHtcbiAgJGRlc2t0b3AtcGFkZGluZzogMnJlbTtcbiAgbWF4LXdpZHRoOiBjYWxjKCN7JGNvbnRlbnQtd2lkdGh9ICsgKCN7JGRlc2t0b3AtcGFkZGluZ30pKTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MnJlbSkge1xuICAgIEBpbmNsdWRlIHBhZGRpbmctbGVmdCgkZGVza3RvcC1wYWRkaW5nLCB0cnVlKTtcbiAgICBAaW5jbHVkZSBwYWRkaW5nLXJpZ2h0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICB9XG59XG5cbkBtaXhpbiBjZW50ZXJBYnNvbHV0ZUVsZW1lbnQge1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5AbWl4aW4gb25seS1sdHItZ2xvYmFsIHtcbiAgaHRtbDpub3QoW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bC1nbG9iYWwge1xuICBodG1sW2Rpcj0ncnRsJ10gJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktbHRyIHtcbiAgOmhvc3QtY29udGV4dChodG1sOm5vdChbZGlyPSdydGwnXSkpICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bCB7XG4gIDpob3N0LWNvbnRleHQoaHRtbFtkaXI9J3J0bCddKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gcnRsLXZhbHVlKCRwcm9wZXJ0eSwgJGx0ci12YWx1ZSwgJHJ0bC12YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGx0ci12YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHJ0bC12YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHJ0bC1wcm9wZXJ0eSgkbHRyLXByb3BlcnR5LCAkcnRsLXByb3BlcnR5LCAkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpZiAkZ2xvYmFsID09IHRydWUge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyLWdsb2JhbCB7XG4gICAgICAjeyRsdHItcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwtZ2xvYmFsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bCB7XG4gICAgICAjeyRydGwtcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXJnaW4tbGVmdCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLWxlZnQsIG1hcmdpbi1yaWdodCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBtYXJnaW4tcmlnaHQoJG1hcmdpbiwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KG1hcmdpbi1yaWdodCwgbWFyZ2luLWxlZnQsICRtYXJnaW4sICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZygkcGFkZGluZ1RvcCwgJHBhZGRpbmdSaWdodCwgJHBhZGRpbmdCb3R0b20sICRwYWRkaW5nTGVmdCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgcGFkZGluZy10b3A6ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZ1JpZ2h0LCAkZ2xvYmFsKTtcbiAgcGFkZGluZy1ib3R0b206ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZ0xlZnQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1sZWZ0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLXJpZ2h0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiB0ZXh0LWFsaWduLWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRleHQtYWxpZ24sIGxlZnQsIHJpZ2h0LCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGxlZnQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobGVmdCwgcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiByaWdodCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShyaWdodCwgbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRyYW5zbGF0ZVhZKCR2YWx1ZVgsICR2YWx1ZVksICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZSh0cmFuc2Zvcm0sIHRyYW5zbGF0ZSgkdmFsdWVYLCAkdmFsdWVZKSwgdHJhbnNsYXRlKC0kdmFsdWVYLCAkdmFsdWVZKSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItbGVmdCwgYm9yZGVyLXJpZ2h0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1yaWdodCwgYm9yZGVyLWxlZnQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCBib3JkZXItdG9wLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtbGVmdC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBmbG9hdC1sZWZ0KCRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZShmbG9hdCwgbGVmdCwgcmlnaHQsICRnbG9iYWw6IGZhbHNlKTtcbn1cblxuQG1peGluIGZsb2F0LXJpZ2h0IHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCByaWdodCwgbGVmdCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gc21hbGwtZGVza3RvcC1vbmx5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LWxnKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQteGwgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtYW5kLXRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc21hbGwtbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtcyAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LW1kIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtdXAge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gZGlzYWJsZS1zY3JvbGxiYXIge1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWRkaXRpb25hbC1zdG9yeS1pbmZvL2FkZGl0aW9uYWwtc3RvcnktaW5mby5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3R5bGVzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQUZKO0FBS0U7RUFDRSx1QkFBQTtBQUhKO0FBS0k7RUFDRSxnQkFBQTtBQUhOO0FBT0U7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VDbkJGLHFCQUFBO0FEZUY7QUN3QkU7RUEwQ0ksc0JBaEZpQjtBRGlCdkI7QUMyQkU7RUF3Q0ksdUJBcEZpQjtBRG9CdkI7QUNsQkU7RUFDRSxvQkRnQmtCO0FBSXRCO0FDZUU7RUEwQ0kscUJEN0RnQjtBQU90QjtBQ2tCRTtFQXdDSSxzQkRqRWdCO0FBVXRCO0FBUEU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBU0o7QUNrSkU7RUQ3SkE7SUFLSSxlQUFBO0VBVUo7QUFDRjtBQUNBLGc0UEFBZzRQIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL2FwcC9zdHlsZXMvbWl4aW5zJztcblxuLmFkZGl0aW9uYWwtc3RvcnktaW5mbyB7XG4gICZfX2hlYWRpbmcge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY4OHJlbTtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjU2M3JlbTtcbiAgfVxuXG4gIGFwcC1hZGRpdGlvbmFsLXN0b3J5LWluZm8tc2VjdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS44NzVyZW07XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gIH1cblxuICAmX190eXBlcyB7XG4gICAgcGFkZGluZy10b3A6IDAuNjI1cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIEBpbmNsdWRlIGZsZXgtZ2FwKDAuNjI1cmVtKTtcbiAgfVxuXG4gICZfX2luZm8ge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuXG4gICAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIGZsZXgtZ2FwKCRnYXAsICRnbG9iYWw6IGZhbHNlKSB7XG4gIG1hcmdpbi10b3A6ICgtJGdhcCk7XG4gIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCgtJGdhcCksICRnbG9iYWwpO1xuXG4gID4gKiB7XG4gICAgbWFyZ2luLXRvcDogJGdhcDtcbiAgICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgkZ2FwLCAkZ2xvYmFsKTtcbiAgfVxufVxuXG5AbWl4aW4gYmFzZS1jb250YWluZXIoJGNvbnRlbnQtd2lkdGgpIHtcbiAgJGRlc2t0b3AtcGFkZGluZzogMnJlbTtcbiAgbWF4LXdpZHRoOiBjYWxjKCN7JGNvbnRlbnQtd2lkdGh9ICsgKCN7JGRlc2t0b3AtcGFkZGluZ30pKTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MnJlbSkge1xuICAgIEBpbmNsdWRlIHBhZGRpbmctbGVmdCgkZGVza3RvcC1wYWRkaW5nLCB0cnVlKTtcbiAgICBAaW5jbHVkZSBwYWRkaW5nLXJpZ2h0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICB9XG59XG5cbkBtaXhpbiBjZW50ZXJBYnNvbHV0ZUVsZW1lbnQge1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5AbWl4aW4gb25seS1sdHItZ2xvYmFsIHtcbiAgaHRtbDpub3QoW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bC1nbG9iYWwge1xuICBodG1sW2Rpcj0ncnRsJ10gJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktbHRyIHtcbiAgOmhvc3QtY29udGV4dChodG1sOm5vdChbZGlyPSdydGwnXSkpICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bCB7XG4gIDpob3N0LWNvbnRleHQoaHRtbFtkaXI9J3J0bCddKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gcnRsLXZhbHVlKCRwcm9wZXJ0eSwgJGx0ci12YWx1ZSwgJHJ0bC12YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGx0ci12YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHJ0bC12YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHJ0bC1wcm9wZXJ0eSgkbHRyLXByb3BlcnR5LCAkcnRsLXByb3BlcnR5LCAkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpZiAkZ2xvYmFsID09IHRydWUge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyLWdsb2JhbCB7XG4gICAgICAjeyRsdHItcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwtZ2xvYmFsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bCB7XG4gICAgICAjeyRydGwtcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXJnaW4tbGVmdCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLWxlZnQsIG1hcmdpbi1yaWdodCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBtYXJnaW4tcmlnaHQoJG1hcmdpbiwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KG1hcmdpbi1yaWdodCwgbWFyZ2luLWxlZnQsICRtYXJnaW4sICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZygkcGFkZGluZ1RvcCwgJHBhZGRpbmdSaWdodCwgJHBhZGRpbmdCb3R0b20sICRwYWRkaW5nTGVmdCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgcGFkZGluZy10b3A6ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZ1JpZ2h0LCAkZ2xvYmFsKTtcbiAgcGFkZGluZy1ib3R0b206ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZ0xlZnQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1sZWZ0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLXJpZ2h0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiB0ZXh0LWFsaWduLWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRleHQtYWxpZ24sIGxlZnQsIHJpZ2h0LCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGxlZnQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobGVmdCwgcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiByaWdodCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShyaWdodCwgbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRyYW5zbGF0ZVhZKCR2YWx1ZVgsICR2YWx1ZVksICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZSh0cmFuc2Zvcm0sIHRyYW5zbGF0ZSgkdmFsdWVYLCAkdmFsdWVZKSwgdHJhbnNsYXRlKC0kdmFsdWVYLCAkdmFsdWVZKSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItbGVmdCwgYm9yZGVyLXJpZ2h0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1yaWdodCwgYm9yZGVyLWxlZnQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCBib3JkZXItdG9wLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtbGVmdC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBmbG9hdC1sZWZ0KCRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZShmbG9hdCwgbGVmdCwgcmlnaHQsICRnbG9iYWw6IGZhbHNlKTtcbn1cblxuQG1peGluIGZsb2F0LXJpZ2h0IHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCByaWdodCwgbGVmdCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gc21hbGwtZGVza3RvcC1vbmx5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LWxnKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQteGwgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtYW5kLXRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc21hbGwtbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtcyAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LW1kIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtdXAge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gZGlzYWJsZS1zY3JvbGxiYXIge1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 50950:
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/components/additional-story-info/additional-story-info.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdditionalStoryInfoModule": () => (/* binding */ AdditionalStoryInfoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _additional_story_info_section_additional_story_info_section_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../additional-story-info-section/additional-story-info-section.module */ 80149);
/* harmony import */ var _card2_card_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card2/card.module */ 39106);
/* harmony import */ var _pills_pills_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pills/pills.module */ 68401);
/* harmony import */ var _story_category_icon_story_type_icon_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../story-category-icon/story-type-icon.module */ 28966);
/* harmony import */ var _additional_story_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./additional-story-info.component */ 49928);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);









class AdditionalStoryInfoModule {
  static #_ = this.ɵfac = function AdditionalStoryInfoModule_Factory(t) {
    return new (t || AdditionalStoryInfoModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AdditionalStoryInfoModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _card2_card_module__WEBPACK_IMPORTED_MODULE_2__.CardModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _additional_story_info_section_additional_story_info_section_module__WEBPACK_IMPORTED_MODULE_1__.AdditionalStoryInfoSectionModule, _pills_pills_module__WEBPACK_IMPORTED_MODULE_3__.PillsModule, _story_category_icon_story_type_icon_module__WEBPACK_IMPORTED_MODULE_4__.StoryTypeIconModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AdditionalStoryInfoModule, {
    declarations: [_additional_story_info_component__WEBPACK_IMPORTED_MODULE_5__.AdditionalStoryInfoComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _card2_card_module__WEBPACK_IMPORTED_MODULE_2__.CardModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _additional_story_info_section_additional_story_info_section_module__WEBPACK_IMPORTED_MODULE_1__.AdditionalStoryInfoSectionModule, _pills_pills_module__WEBPACK_IMPORTED_MODULE_3__.PillsModule, _story_category_icon_story_type_icon_module__WEBPACK_IMPORTED_MODULE_4__.StoryTypeIconModule],
    exports: [_additional_story_info_component__WEBPACK_IMPORTED_MODULE_5__.AdditionalStoryInfoComponent]
  });
})();

/***/ }),

/***/ 57315:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/comment/comment-list/comment-list.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentListComponent": () => (/* binding */ CommentListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_shared_enums_comment_status_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/enums/comment-status.enum */ 43949);
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/components/base.component */ 70697);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _core_services_api_comment_comment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/api/comment/comment.service */ 42075);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _inline_loading_inline_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../inline-loading/inline-loading.component */ 26264);
/* harmony import */ var _single_comment_single_comment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../single-comment/single-comment.component */ 8879);










function CommentListComponent_app_inline_loading_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-inline-loading", 2);
  }
}
function CommentListComponent_div_1_app_single_comment_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-single-comment", 5);
  }
  if (rf & 2) {
    const comment_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("forceExpanded", ctx_r3.forceExpanded)("showReplyForm", ctx_r3.showReplyForm)("comment", comment_r4)("storyId", ctx_r3.id);
  }
}
function CommentListComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CommentListComponent_div_1_app_single_comment_1_Template, 1, 4, "app-single-comment", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const comments_r2 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", comments_r2)("ngForTrackBy", ctx_r1.trackByFunction);
  }
}
class CommentListComponent extends _shared_components_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
  constructor(commentService, cd) {
    super();
    this.commentService = commentService;
    this.cd = cd;
    this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.showReplyForm = true;
    this.forceExpanded = false;
    this.todayMS = new Date().valueOf();
    this.comments$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable();
    this.loadedBool = false;
  }
  ngOnChanges(changes) {
    if (this.id && changes?.id.previousValue !== this.id) {
      this.loadedBool = false;
      this.comments$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
      this.loaded.emit(-1);
      this.commentService.getComments(this.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroyed$)).subscribe(res => {
        res.forEach(item => {
          item.authorNickname = item.authorNickname || item.user?.nickname;
          item.children?.forEach(child => {
            child.authorNickname = child.authorNickname || child.user?.nickname;
          });
        });
        this.comments$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(res);
        this.loadedBool = true;
        this.loaded.emit(this.calculateCommentsCount(res));
        this.initialized = true;
        this.cd.markForCheck();
      });
    }
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  get commentsLoaded() {
    return this.loadedBool;
  }
  trackByFunction(i, item) {
    return item.id;
  }
  calculateCommentsCount(comments) {
    return comments.filter(comment => comment.status !== _app_shared_enums_comment_status_enum__WEBPACK_IMPORTED_MODULE_0__.COMMENT_STATUS.PENDING_REVIEW).reduce((sum, comment) => sum + 1 + (comment.children.filter(subComment => subComment.status !== _app_shared_enums_comment_status_enum__WEBPACK_IMPORTED_MODULE_0__.COMMENT_STATUS.PENDING_REVIEW)?.length || 0), 0);
  }
  static #_ = this.ɵfac = function CommentListComponent_Factory(t) {
    return new (t || CommentListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_api_comment_comment_service__WEBPACK_IMPORTED_MODULE_2__.CommentService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: CommentListComponent,
    selectors: [["app-comment-list"]],
    inputs: {
      id: "id",
      showReplyForm: "showReplyForm",
      forceExpanded: "forceExpanded"
    },
    outputs: {
      loaded: "loaded"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]],
    decls: 3,
    vars: 4,
    consts: [["class", "flex-center inline-loader", 4, "ngIf"], ["class", "comments-wrapper", 4, "ngIf"], [1, "flex-center", "inline-loader"], [1, "comments-wrapper"], [3, "forceExpanded", "showReplyForm", "comment", "storyId", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "forceExpanded", "showReplyForm", "comment", "storyId"]],
    template: function CommentListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CommentListComponent_app_inline_loading_0_Template, 1, 0, "app-inline-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CommentListComponent_div_1_Template, 2, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.commentsLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, ctx.comments$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _inline_loading_inline_loading_component__WEBPACK_IMPORTED_MODULE_3__.InlineLoadingComponent, _single_comment_single_comment_component__WEBPACK_IMPORTED_MODULE_4__.SingleCommentComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tZW50LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29tbWVudC9jb21tZW50LWxpc3QvY29tbWVudC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw0S0FBNEsiLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 84609:
/*!*******************************************************************************!*\
  !*** ./src/app/shared/components/comment/comment-list/comment-list.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentListModule": () => (/* binding */ CommentListModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _inline_loading_inline_loading_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../inline-loading/inline-loading.module */ 80812);
/* harmony import */ var _single_comment_single_comment_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../single-comment/single-comment.module */ 29420);
/* harmony import */ var _comment_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comment-list.component */ 57315);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);





class CommentListModule {
  static #_ = this.ɵfac = function CommentListModule_Factory(t) {
    return new (t || CommentListModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: CommentListModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _inline_loading_inline_loading_module__WEBPACK_IMPORTED_MODULE_0__.InlineLoadingModule, _single_comment_single_comment_module__WEBPACK_IMPORTED_MODULE_1__.SingleCommentModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CommentListModule, {
    declarations: [_comment_list_component__WEBPACK_IMPORTED_MODULE_2__.CommentListComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _inline_loading_inline_loading_module__WEBPACK_IMPORTED_MODULE_0__.InlineLoadingModule, _single_comment_single_comment_module__WEBPACK_IMPORTED_MODULE_1__.SingleCommentModule],
    exports: [_comment_list_component__WEBPACK_IMPORTED_MODULE_2__.CommentListComponent]
  });
})();

/***/ }),

/***/ 59674:
/*!*************************************************************************************************!*\
  !*** ./src/app/shared/components/comment/partials/comment-actions/comment-actions.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentActionsComponent": () => (/* binding */ CommentActionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../button/button.component */ 90042);
/* harmony import */ var _icons_reply_icon_reply_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../icons/reply-icon/reply-icon.component */ 47616);
/* harmony import */ var _upvote_upvote_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../upvote/upvote.component */ 6577);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 38699);







function CommentActionsComponent_app_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("clicked", function CommentActionsComponent_app_button_2_Template_app_button_clicked_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.handleReplyClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-reply-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("noPadding", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 2, ctx_r0.isReplyFormShown ? "comments.reply.hideReplyForm" : "comments.reply.reply"));
  }
}
function CommentActionsComponent_ng_container_4_app_upvote_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-upvote", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("upvoteClicked", function CommentActionsComponent_ng_container_4_app_upvote_4_Template_app_upvote_upvoteClicked_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.handleUpvoteClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("voted", ctx_r4.voted)("votes", ctx_r4.votes);
  }
}
function CommentActionsComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CommentActionsComponent_ng_container_4_app_upvote_4_Template, 1, 2, "app-upvote", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, ctx_r1.upvoteLabelKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.votes !== null);
  }
}
class CommentActionsComponent {
  constructor() {
    this.isReplyEnable = true;
    this.isUpVoteEnable = true;
    this.replyClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.upvoteClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  }
  get upvoteLabelKey() {
    return this.voted ? 'global.upvoted' : 'global.upvote';
  }
  handleReplyClick() {
    this.replyClick.emit();
  }
  handleUpvoteClick() {
    this.upvoteClick.emit();
  }
  static #_ = this.ɵfac = function CommentActionsComponent_Factory(t) {
    return new (t || CommentActionsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CommentActionsComponent,
    selectors: [["app-comment-actions"]],
    inputs: {
      isReplyEnable: "isReplyEnable",
      isUpVoteEnable: "isUpVoteEnable",
      isReplyFormShown: "isReplyFormShown",
      voted: "voted",
      votes: "votes"
    },
    outputs: {
      replyClick: "replyClick",
      upvoteClick: "upvoteClick"
    },
    decls: 5,
    vars: 2,
    consts: [[1, "comments-action", "d-flex-space-between", "d-flex-space-between-center"], ["class", "comments-action__reply", "variant", "link-2", 3, "noPadding", "clicked", 4, "ngIf"], [1, "comments-action__upvote", "flex-center-right"], [4, "ngIf"], ["variant", "link-2", 1, "comments-action__reply", 3, "noPadding", "clicked"], [1, "mr-0938"], [3, "voted", "votes", "upvoteClicked", 4, "ngIf"], [3, "voted", "votes", "upvoteClicked"]],
    template: function CommentActionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CommentActionsComponent_app_button_2_Template, 5, 4, "app-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CommentActionsComponent_ng_container_4_Template, 5, 4, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isReplyEnable);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isUpVoteEnable);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _button_button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent, _icons_reply_icon_reply_icon_component__WEBPACK_IMPORTED_MODULE_1__.ReplyIconComponent, _upvote_upvote_component__WEBPACK_IMPORTED_MODULE_2__.UpvoteComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
    styles: ["html:not([dir=rtl])[_nghost-%COMP%]   .comments-action[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .comments-action[_ngcontent-%COMP%] {\n  margin-right: -1.08rem;\n}\nhtml[dir=rtl][_nghost-%COMP%]   .comments-action[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .comments-action[_ngcontent-%COMP%] {\n  margin-left: -1.08rem;\n}\n.comments-action__reply[_ngcontent-%COMP%]     .content {\n  font-size: 1.125rem;\n}\nhtml:not([dir=rtl])[_nghost-%COMP%]   .comments-action__reply[_ngcontent-%COMP%]     .content > * + *, html:not([dir=rtl])   [_nghost-%COMP%]   .comments-action__reply[_ngcontent-%COMP%]     .content > * + * {\n  margin-left: 0.625rem;\n}\nhtml[dir=rtl][_nghost-%COMP%]   .comments-action__reply[_ngcontent-%COMP%]     .content > * + *, html[dir=rtl]   [_nghost-%COMP%]   .comments-action__reply[_ngcontent-%COMP%]     .content > * + * {\n  margin-right: 0.625rem;\n}\n.comments-action__upvote[_ngcontent-%COMP%] {\n  color: #656565;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fbWl4aW5zLnNjc3MiLCJjb21tZW50LWFjdGlvbnMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDRTtFQTBDSSxzQkNoRmtCO0FBRnhCO0FEOENFO0VBd0NJLHFCQ3BGa0I7QUFDeEI7QUFFTTtFQUNFLG1CQUFBO0FBQVI7QURrQ0U7RUEwQ0kscUJDekV5QjtBQUEvQjtBRHFDRTtFQXdDSSxzQkM3RXlCO0FBRy9CO0FBR0U7RUFDRSxjQzJFRztBRDVFUCIsImZpbGUiOiJjb21tZW50LWFjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AbWl4aW4gZmxleC1nYXAoJGdhcCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgbWFyZ2luLXRvcDogKC0kZ2FwKTtcbiAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoKC0kZ2FwKSwgJGdsb2JhbCk7XG5cbiAgPiAqIHtcbiAgICBtYXJnaW4tdG9wOiAkZ2FwO1xuICAgIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCRnYXAsICRnbG9iYWwpO1xuICB9XG59XG5cbkBtaXhpbiBiYXNlLWNvbnRhaW5lcigkY29udGVudC13aWR0aCkge1xuICAkZGVza3RvcC1wYWRkaW5nOiAycmVtO1xuICBtYXgtd2lkdGg6IGNhbGMoI3skY29udGVudC13aWR0aH0gKyAoI3skZGVza3RvcC1wYWRkaW5nfSkpO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQycmVtKSB7XG4gICAgQGluY2x1ZGUgcGFkZGluZy1sZWZ0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICAgIEBpbmNsdWRlIHBhZGRpbmctcmlnaHQoJGRlc2t0b3AtcGFkZGluZywgdHJ1ZSk7XG4gIH1cbn1cblxuQG1peGluIGNlbnRlckFic29sdXRlRWxlbWVudCB7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbkBtaXhpbiBvbmx5LWx0ci1nbG9iYWwge1xuICBodG1sOm5vdChbZGlyPSdydGwnXSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsLWdsb2JhbCB7XG4gIGh0bWxbZGlyPSdydGwnXSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1sdHIge1xuICA6aG9zdC1jb250ZXh0KGh0bWw6bm90KFtkaXI9J3J0bCddKSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsIHtcbiAgOmhvc3QtY29udGV4dChodG1sW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBydGwtdmFsdWUoJHByb3BlcnR5LCAkbHRyLXZhbHVlLCAkcnRsLXZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaWYgJGdsb2JhbCA9PSB0cnVlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ci1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsLWdsb2JhbCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRydGwtdmFsdWU7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ciB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRsdHItdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gcnRsLXByb3BlcnR5KCRsdHItcHJvcGVydHksICRydGwtcHJvcGVydHksICR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcnRsLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skbHRyLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hcmdpbi1sZWZ0KCRtYXJnaW4sICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShtYXJnaW4tbGVmdCwgbWFyZ2luLXJpZ2h0LCAkbWFyZ2luLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIG1hcmdpbi1yaWdodCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLXJpZ2h0LCBtYXJnaW4tbGVmdCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nKCRwYWRkaW5nVG9wLCAkcGFkZGluZ1JpZ2h0LCAkcGFkZGluZ0JvdHRvbSwgJHBhZGRpbmdMZWZ0LCAkZ2xvYmFsOiBmYWxzZSkge1xuICBwYWRkaW5nLXRvcDogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nUmlnaHQsICRnbG9iYWwpO1xuICBwYWRkaW5nLWJvdHRvbTogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nTGVmdCwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLWxlZnQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmctcmlnaHQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRleHQtYWxpZ24tbGVmdCgkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUodGV4dC1hbGlnbiwgbGVmdCwgcmlnaHQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShsZWZ0LCByaWdodCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHJpZ2h0LCBsZWZ0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gdHJhbnNsYXRlWFkoJHZhbHVlWCwgJHZhbHVlWSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRyYW5zZm9ybSwgdHJhbnNsYXRlKCR2YWx1ZVgsICR2YWx1ZVkpLCB0cmFuc2xhdGUoLSR2YWx1ZVgsICR2YWx1ZVkpLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1sZWZ0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1sZWZ0LCBib3JkZXItcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItcmlnaHQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXJpZ2h0LCBib3JkZXItbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsIGJvcmRlci10b3AtbGVmdC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItdG9wLWxlZnQtcmFkaXVzLCBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGZsb2F0LWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCBsZWZ0LCByaWdodCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gZmxvYXQtcmlnaHQge1xuICBAaW5jbHVkZSBydGwtdmFsdWUoZmxvYXQsIHJpZ2h0LCBsZWZ0LCAkZ2xvYmFsOiBmYWxzZSk7XG59XG5cbkBtaXhpbiBzbWFsbC1kZXNrdG9wLW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbGcpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC14bCAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1hbmQtdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbGcgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBzbWFsbC1tb2JpbGUtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1zIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbWQgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0YWJsZXQtb25seSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS11cCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBkaXNhYmxlLXNjcm9sbGJhciB7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIiwiQGltcG9ydCAnbWl4aW5zJztcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbi5jb21tZW50cy1hY3Rpb24ge1xuICBAaW5jbHVkZSBtYXJnaW4tcmlnaHQoLTEuMDhyZW0pO1xuICAmX19yZXBseSB7XG4gICAgOjpuZy1kZWVwIHtcbiAgICAgIC5jb250ZW50IHtcbiAgICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcblxuICAgICAgICA+ICogKyAqIHtcbiAgICAgICAgICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgwLjYyNXJlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmX191cHZvdGUge1xuICAgIGNvbG9yOiAkZ3JleTtcbiAgfVxufVxuIiwiJHN0YW5kYXJkRm9udEZhbWlseTogJ05vdG8gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGNvbnRlbnQtdG9wLXBhZGRpbmc6IDNyZW07XG4kcG9zdC1saXN0LWJnOiAjZGFkYWRhO1xuJHdoaXRlOiAjZmZmZmZmO1xuJHBvc3QtcHJldmlldy1iZzogd2hpdGU7XG4kbGlnaHQtZ3JheS1iZzogI2Y0ZjRmNDtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1sZWZ0OiAyLjM0NHJlbTtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1yaWdodDogMS4wNjNyZW07XG4kcG9zdC1wcmV2aWV3LXBhZGRpbmc6IDIuNXJlbSAkcG9zdC1wcmV2aWV3LXBhZGRpbmctcmlnaHQgMS4yNXJlbSAkcG9zdC1wcmV2aWV3LXBhZGRpbmctbGVmdDtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1tb2JpbGU6IDFyZW0gMXJlbSAwLjVyZW0gMXJlbTtcbiRwb3N0LXBhZGRpbmctYm90dG9tOiAxcmVtO1xuJHBvc3QtcHJldmlldy1ndXR0ZXI6IDJweDtcbiRwb3N0LWhpZ2hsaWdodC1jb2xvcjogIzU3MGY4NTtcbiRjb2xvci1wdXJwbGUtOTA6ICMzMTEzNWU7XG4kY29sb3ItcHVycGxlLTYwOiAjOTg4YWFlO1xuJGNvbG9yLXB1cnBsZS01MDogIzk4ODlhZjtcbiRjb2xvci1wdXJwbGUtMTA6ICNmNWYzZjc7XG4kY29sb3ItcHVycGxlLWxpZ2h0OiAjNGIzNWJjO1xuJGNvbG9yLXB1cnBsZS12ZXJ5LWxpZ2h0OiAjODY2YWIwO1xuJGNvbG9yLXB1cnBsZS1zdGVwcGVyOiAjNGEyYjdhO1xuJGNvbG9yLWdyZWVuLTEwMDogIzA1MjgwNDtcbiRjb2xvci1ncmVlbi05MDogIzBkM2QwYjtcbiRjb2xvci1ncmVlbi04MDogIzFmNmIxZTtcbiRjb2xvci1ncmVlbi03MDogIzM1OGEzNDtcbiRjb2xvci1ncmVlbi02MDogIzZkOWE2ZTtcbiRjb2xvci1ncmVlbi01MDogIzg5YTg4ZjtcbiRjb2xvci1ncmVlbi00MDogIzlmYzhhNjtcbiRjb2xvci1ncmVlbi0zMDogI2FhZDZiMztcbiRjb2xvci1ncmVlbi0yMDogI2M5ZTlkMTtcbiRjb2xvci1ncmVlbi0xMDogI2YzZjdmMztcbiRjb2xvci1ncmVlbi1zdGVwcGVyOiAjMTA3RDc5O1xuJGNvbG9yLWdyZWVuLW1lZGl1bTogI2FkZGFhZjtcbiRjb2xvci1ncmVlbi1saWdodDogIzNBQjA5ODtcbiRjb2xvci1ncmVlbi12ZXJ5LWxpZ2h0OiAjRURGRkZDO1xuJGdyZXktMTogI2Q2ZDBkZjtcbiRzdXBwb3J0LTAxOiAjZGExZTI4O1xuJGVycm9yOiAjZWUyMzJmO1xuJHRleHQtYmxhY2s6ICMxNjE2MTY7XG4kdGV4dC1zZWNvbmRhcnk6ICMzOTM5Mzk7XG4kdGV4dC1ncmF5ZWQ6ICM1MjUyNTI7XG4kdGV4dC1ncmF5ZWQ4MDogIzhmOGI4YjtcbiR0ZXh0LWdyYXktY2F0OiAjNmQ3Mjc4O1xuJHVpLWJhY2tncm91bmQtZ3JheTogI2Y4ZjhmOTtcbiRib3JkZXI6ICNlOGU3ZWE7XG4kZW50aXR5LWJvcmRlci1jb2xvcjogIzFjMGYzMDIxO1xuJGxvYWRpbmctYmc6IHJnYigwIDAgMCAvIDE4JSk7XG4kc3VwcG9ydC0wNDogIzAwNDNjZTtcbiRsb29wLXVzZXJuYW1lOiAjMTk4MDM4O1xuJGxvb3AtYWN0aXZlLWN1cnJlbnQtdXNlcjogIzI0YTE0ODtcbiR3YXJtLWdyYXktMTAtY29sb3I6ICNmN2YzZjI7XG4kd2FybS1ncmF5LTIwLWNvbG9yOiAjZTVlMGRmO1xuJGhlYWRpbmctMS1jb2xvcjogIzFjMGYzMDtcbiRoZWFkaW5nLTItY29sb3I6ICMzMjA3NGQ7XG4kaGVhZGluZy0zLWNvbG9yOiAjMmYyNzM1O1xuJG1vYmlsZS1pY29uLWNvbG9yOiAjMWMwZjMwO1xuJHN0YXRlLWRpc2FibGVkLTAyOiAjYzZjNmM2O1xuJGxpbmstMDI6ICM1NjAxYjI7XG4kaGVhZGVyLXB1cnBsZTogIzMxMTM1ZTtcbiRoZWFkZXItZ3JlZW46ICMxMDdkNzk7XG4kcHVycGxlLWxpZ2h0OiAjY2JjNGQ3O1xuJHB1cnBsZS1iYWNrZ3JvdW5kLWxpZ2h0OiAjZGNkNWU3O1xuJGxvb3AtaW50ZXJhY3RpdmUtMDE6ICMxMDdkNzk7XG4kbG9vcC1pbnRlcmFjdGl2ZS0wMS1vcGFjaXR5OiByZ2JhKDE2LCAxMjUsIDEyMSwgMC4zKTtcbiRmaWx0ZXJzLWdyZWVuOiAjMDU2NzYzO1xuLy8gQnJlYWtwb2ludHNcblxuJGJyZWFrcG9pbnQtczogMzc1cHg7XG4kYnJlYWtwb2ludC1zbTogNDIwcHg7XG4kYnJlYWtwb2ludC1tZDogNzY4cHg7XG4kYnJlYWtwb2ludC1sZzogMTA4MHB4O1xuJGJyZWFrcG9pbnQteGw6IDEyNzVweDtcblxuJGJyZWFrcG9pbnQtbWQtdjI6IDgyMHB4O1xuXG4kaGVhZGVyLWhlaWdodDogNC4zNzVyZW07XG4kaGVhZGVyLWhlaWdodC12MjogNC4zNzVyZW07XG4kc3RhdGUtc2VsZWN0ZWQtdWk6ICNlMGUwZTA7XG4kYy1sZWZ0LXBhZGRpbmc6IDEuNXJlbTtcbiRtZW51LWFjdGl2ZS1jb2xvcjogIzNBQjA5ODtcbiRtZW51LWhvdmVyLWNvbG9yOiAjM0FCMDk4O1xuJHRhYi1pbmFjdGl2ZS1jb2xvcjogIzg5YWY5MztcbiRsaW5lLWNvbG9yOiAjZDBkZmQyO1xuJGJvcmRlci1ncmF5OiAjY2NjY2NjO1xuJHRleHQtZ3JheTogIzgwODA4MDtcbiRiYXNlLWNvbnRhaW5lci13aWR0aDogODEuMTI0cmVtO1xuJGhlYWRlci11bmRlcmxpbmUtaGVpZ2h0OiAwLjMxM3JlbTtcblxuLy8gTW9kZXJhdG9yIHJldmlldyBzZWN0aW9uc1xuJGZvb3Rlci1oZWlnaHQ6IDRyZW07XG4kdG9wYmFyLWhlaWdodDogMTAuNXJlbTtcbiRzdGVwcGVyLWhlaWdodDogNi43cmVtO1xuXG4vLyBOZXcgU3RvcnkgZmxvdyAvIHN0b3J5IGRldGFpbHMgdmFyaWFibGVzXG4kZ3JleTogIzY1NjU2NTtcbiRsaWdodC1ncmV5LTI6ICNiMWI0YjY7XG4kbGlnaHQtZ3JleS0zOiAjYjRiNGI0O1xuJGxpZ2h0LWdyZXktNDogI2NmZDNkODtcbiRsaWdodC1ncmV5LTU6ICNkOWUwZTc7XG4kbGlnaHQtZ3JleS02OiAjZjFmMmYyO1xuJGxpZ2h0LWdyZXktNzogI2M0YzRjNDtcbiRsaWdodC1ncmV5LTg6ICNlOWU5ZTk7XG4kbGlnaHQtZ3JleS05OiAjZTZlYWVkO1xuJGxpZ2gtZ3JleS1zZXBhcmF0b3I6ICNjMGMwYzA7XG4kZGFyay1ncmV5OiAjMWExYTFhO1xuJGRhcmstZ3JleS01MDogcmdiKDI2LCAyNiwgMjYsIDAuNSk7XG4kYm9yZGVyLWdyZXk6ICNjN2NkZDQ7XG4kbGlnaHQtcHVycGxlOiAjZWFlYWVhO1xuJGlucHV0LWRpc2FibGVkLWJnOiAjZjRmNmY4O1xuJGVycm9yLTI6ICNkZTIyMmQ7XG4kZGFuZ2VyOiAjYzkzMDRkO1xuJHByZXZpb3VzLXBpbGwtY29sb3I6ICM3MThkNmY7XG4kdG9vbHRpcC1ncmV5OiAjYWJhYmFiO1xuJGxpZ2h0LWdyZWVuOiAjY2ZlNWU0NjY7XG5cbiRmaWx0ZXJzLW1vZGFsLWhlYWRlci16aW5kZXg6IDEwMDAwO1xuJG1vZGFsLXppbmRleDogOTk5OTtcbiRsb2NhdGlvbi1vdmVybGF5LXppbmRleDogOTAwMTtcbiRoZWFkZXItYXNpZGUtemluZGV4OiA4MDAyO1xuJGhlYWRlci1hc2lkZS1iYWNrZ3JvdW5kLXppbmRleDogODAwMTtcbiRoZWFkZXItemluZGV4OiA4MDAwO1xuJG5hdmlnYXRpb24temluZGV4OiA4MDAwO1xuJHBhZ2UtbG9hZGluZy16aW5kZXg6IDcwMDE7XG4kdG9vbHRpcC16aW5kZXg6IDcwMDA7XG4kbmV3LXN0b3J5LWNvbnRlbnQtc3RhdGUtemluZGV4OiA1MDA7XG4kZmlsdGVyLWRyb3Bkb3duLXppbmRleDogMTAwO1xuJG1vZGFsLXRvcC1pbmRpY2F0b3ItemluZGV4OiA1MTtcbiRtb2RhbC10b3AtaW5kaWNhdG9yLWJhY2tncm91bmQtemluZGV4OiA1MTtcbiRjaGFydC16aW5kZXg6IDE7XG4kY2hhcnQtY29udHJvbC16aW5kZXg6IDI7XG5cbiRzbGlkZS10b2dnbGUtZGlzYWJsZWQtb3B0aW9uLWJhY2tncm91bmQ6ICNkZGRkZGQ7XG5cbiR0b2FzdC1pbmZvLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuJHRvYXN0LWluZm8tdGl0bGUtY29sb3I6ICM0OTQ5NDk7XG4kdG9hc3QtaW5mby1tZXNzYWdlLWNvbG9yOiAjNDIyYzAwO1xuJHRvYXN0LWluZm8tYnV0dG9uLWNvbG9yOiAjNmM0ZTk5O1xuXG4kdG9hc3Qtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiAjZDllZWVkO1xuJHRvYXN0LXN1Y2Nlc3MtdGl0bGUtY29sb3I6ICMwMDQ1NDI7XG4kdG9hc3Qtc3VjY2Vzcy1tZXNzYWdlLWNvbG9yOiAjMDEzMjMwO1xuJHRvYXN0LXN1Y2Nlc3MtYnV0dG9uLWNvbG9yOiAjMDE2OTY1O1xuXG4kdG9hc3Qtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMWQ1O1xuJHRvYXN0LXdhcm5pbmctdGl0bGUtY29sb3I6ICM2YjQ3MDA7XG4kdG9hc3Qtd2FybmluZy1tZXNzYWdlLWNvbG9yOiAjNDIyYzAwO1xuJHRvYXN0LXdhcm5pbmctYnV0dG9uLWNvbG9yOiAjY2M4ZjE0O1xuXG4kdG9hc3QtZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogI2Y1ZDVkYjtcbiR0b2FzdC1lcnJvci10aXRsZS1jb2xvcjogIzczMDAxNTtcbiR0b2FzdC1lcnJvci1tZXNzYWdlLWNvbG9yOiAjNDUwNjExO1xuJHRvYXN0LWVycm9yLXN1Y2Nlc3MtY29sb3I6ICNkOWVlZWQ7XG4kdG9hc3QtZXJyb3ItYnV0dG9uLWNvbG9yOiAjYjIxZDM5O1xuXG4kdG9hc3QtY2xvc2UtYnV0dG9uLWNvbG9yOiAjNzMwMDE1O1xuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3R5bGVzL19taXhpbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29tbWVudC9wYXJ0aWFscy9jb21tZW50LWFjdGlvbnMvY29tbWVudC1hY3Rpb25zLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDRTtFQTBDSSxzQkNoRmtCO0FBRnhCO0FEOENFO0VBd0NJLHFCQ3BGa0I7QUFDeEI7QUFFTTtFQUNFLG1CQUFBO0FBQVI7QURrQ0U7RUEwQ0kscUJDekV5QjtBQUEvQjtBRHFDRTtFQXdDSSxzQkM3RXlCO0FBRy9CO0FBR0U7RUFDRSxjQzJFRztBRDVFUDtBQUNBLDQ5WkFBNDlaIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIGZsZXgtZ2FwKCRnYXAsICRnbG9iYWw6IGZhbHNlKSB7XG4gIG1hcmdpbi10b3A6ICgtJGdhcCk7XG4gIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCgtJGdhcCksICRnbG9iYWwpO1xuXG4gID4gKiB7XG4gICAgbWFyZ2luLXRvcDogJGdhcDtcbiAgICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgkZ2FwLCAkZ2xvYmFsKTtcbiAgfVxufVxuXG5AbWl4aW4gYmFzZS1jb250YWluZXIoJGNvbnRlbnQtd2lkdGgpIHtcbiAgJGRlc2t0b3AtcGFkZGluZzogMnJlbTtcbiAgbWF4LXdpZHRoOiBjYWxjKCN7JGNvbnRlbnQtd2lkdGh9ICsgKCN7JGRlc2t0b3AtcGFkZGluZ30pKTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MnJlbSkge1xuICAgIEBpbmNsdWRlIHBhZGRpbmctbGVmdCgkZGVza3RvcC1wYWRkaW5nLCB0cnVlKTtcbiAgICBAaW5jbHVkZSBwYWRkaW5nLXJpZ2h0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICB9XG59XG5cbkBtaXhpbiBjZW50ZXJBYnNvbHV0ZUVsZW1lbnQge1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5AbWl4aW4gb25seS1sdHItZ2xvYmFsIHtcbiAgaHRtbDpub3QoW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bC1nbG9iYWwge1xuICBodG1sW2Rpcj0ncnRsJ10gJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktbHRyIHtcbiAgOmhvc3QtY29udGV4dChodG1sOm5vdChbZGlyPSdydGwnXSkpICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bCB7XG4gIDpob3N0LWNvbnRleHQoaHRtbFtkaXI9J3J0bCddKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gcnRsLXZhbHVlKCRwcm9wZXJ0eSwgJGx0ci12YWx1ZSwgJHJ0bC12YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGx0ci12YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHJ0bC12YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHJ0bC1wcm9wZXJ0eSgkbHRyLXByb3BlcnR5LCAkcnRsLXByb3BlcnR5LCAkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpZiAkZ2xvYmFsID09IHRydWUge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyLWdsb2JhbCB7XG4gICAgICAjeyRsdHItcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwtZ2xvYmFsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bCB7XG4gICAgICAjeyRydGwtcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXJnaW4tbGVmdCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLWxlZnQsIG1hcmdpbi1yaWdodCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBtYXJnaW4tcmlnaHQoJG1hcmdpbiwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KG1hcmdpbi1yaWdodCwgbWFyZ2luLWxlZnQsICRtYXJnaW4sICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZygkcGFkZGluZ1RvcCwgJHBhZGRpbmdSaWdodCwgJHBhZGRpbmdCb3R0b20sICRwYWRkaW5nTGVmdCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgcGFkZGluZy10b3A6ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZ1JpZ2h0LCAkZ2xvYmFsKTtcbiAgcGFkZGluZy1ib3R0b206ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZ0xlZnQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1sZWZ0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLXJpZ2h0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiB0ZXh0LWFsaWduLWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRleHQtYWxpZ24sIGxlZnQsIHJpZ2h0LCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGxlZnQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobGVmdCwgcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiByaWdodCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShyaWdodCwgbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRyYW5zbGF0ZVhZKCR2YWx1ZVgsICR2YWx1ZVksICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZSh0cmFuc2Zvcm0sIHRyYW5zbGF0ZSgkdmFsdWVYLCAkdmFsdWVZKSwgdHJhbnNsYXRlKC0kdmFsdWVYLCAkdmFsdWVZKSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItbGVmdCwgYm9yZGVyLXJpZ2h0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1yaWdodCwgYm9yZGVyLWxlZnQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCBib3JkZXItdG9wLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtbGVmdC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBmbG9hdC1sZWZ0KCRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZShmbG9hdCwgbGVmdCwgcmlnaHQsICRnbG9iYWw6IGZhbHNlKTtcbn1cblxuQG1peGluIGZsb2F0LXJpZ2h0IHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCByaWdodCwgbGVmdCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gc21hbGwtZGVza3RvcC1vbmx5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LWxnKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQteGwgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtYW5kLXRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc21hbGwtbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtcyAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LW1kIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtdXAge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gZGlzYWJsZS1zY3JvbGxiYXIge1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ21peGlucyc7XG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG4uY29tbWVudHMtYWN0aW9uIHtcbiAgQGluY2x1ZGUgbWFyZ2luLXJpZ2h0KC0xLjA4cmVtKTtcbiAgJl9fcmVwbHkge1xuICAgIDo6bmctZGVlcCB7XG4gICAgICAuY29udGVudCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG5cbiAgICAgICAgPiAqICsgKiB7XG4gICAgICAgICAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoMC42MjVyZW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJl9fdXB2b3RlIHtcbiAgICBjb2xvcjogJGdyZXk7XG4gIH1cbn1cbiIsIiRzdGFuZGFyZEZvbnRGYW1pbHk6ICdOb3RvIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRjb250ZW50LXRvcC1wYWRkaW5nOiAzcmVtO1xuJHBvc3QtbGlzdC1iZzogI2RhZGFkYTtcbiR3aGl0ZTogI2ZmZmZmZjtcbiRwb3N0LXByZXZpZXctYmc6IHdoaXRlO1xuJGxpZ2h0LWdyYXktYmc6ICNmNGY0ZjQ7XG4kcG9zdC1wcmV2aWV3LXBhZGRpbmctbGVmdDogMi4zNDRyZW07XG4kcG9zdC1wcmV2aWV3LXBhZGRpbmctcmlnaHQ6IDEuMDYzcmVtO1xuJHBvc3QtcHJldmlldy1wYWRkaW5nOiAyLjVyZW0gJHBvc3QtcHJldmlldy1wYWRkaW5nLXJpZ2h0IDEuMjVyZW0gJHBvc3QtcHJldmlldy1wYWRkaW5nLWxlZnQ7XG4kcG9zdC1wcmV2aWV3LXBhZGRpbmctbW9iaWxlOiAxcmVtIDFyZW0gMC41cmVtIDFyZW07XG4kcG9zdC1wYWRkaW5nLWJvdHRvbTogMXJlbTtcbiRwb3N0LXByZXZpZXctZ3V0dGVyOiAycHg7XG4kcG9zdC1oaWdobGlnaHQtY29sb3I6ICM1NzBmODU7XG4kY29sb3ItcHVycGxlLTkwOiAjMzExMzVlO1xuJGNvbG9yLXB1cnBsZS02MDogIzk4OGFhZTtcbiRjb2xvci1wdXJwbGUtNTA6ICM5ODg5YWY7XG4kY29sb3ItcHVycGxlLTEwOiAjZjVmM2Y3O1xuJGNvbG9yLXB1cnBsZS1saWdodDogIzRiMzViYztcbiRjb2xvci1wdXJwbGUtdmVyeS1saWdodDogIzg2NmFiMDtcbiRjb2xvci1wdXJwbGUtc3RlcHBlcjogIzRhMmI3YTtcbiRjb2xvci1ncmVlbi0xMDA6ICMwNTI4MDQ7XG4kY29sb3ItZ3JlZW4tOTA6ICMwZDNkMGI7XG4kY29sb3ItZ3JlZW4tODA6ICMxZjZiMWU7XG4kY29sb3ItZ3JlZW4tNzA6ICMzNThhMzQ7XG4kY29sb3ItZ3JlZW4tNjA6ICM2ZDlhNmU7XG4kY29sb3ItZ3JlZW4tNTA6ICM4OWE4OGY7XG4kY29sb3ItZ3JlZW4tNDA6ICM5ZmM4YTY7XG4kY29sb3ItZ3JlZW4tMzA6ICNhYWQ2YjM7XG4kY29sb3ItZ3JlZW4tMjA6ICNjOWU5ZDE7XG4kY29sb3ItZ3JlZW4tMTA6ICNmM2Y3ZjM7XG4kY29sb3ItZ3JlZW4tc3RlcHBlcjogIzEwN0Q3OTtcbiRjb2xvci1ncmVlbi1tZWRpdW06ICNhZGRhYWY7XG4kY29sb3ItZ3JlZW4tbGlnaHQ6ICMzQUIwOTg7XG4kY29sb3ItZ3JlZW4tdmVyeS1saWdodDogI0VERkZGQztcbiRncmV5LTE6ICNkNmQwZGY7XG4kc3VwcG9ydC0wMTogI2RhMWUyODtcbiRlcnJvcjogI2VlMjMyZjtcbiR0ZXh0LWJsYWNrOiAjMTYxNjE2O1xuJHRleHQtc2Vjb25kYXJ5OiAjMzkzOTM5O1xuJHRleHQtZ3JheWVkOiAjNTI1MjUyO1xuJHRleHQtZ3JheWVkODA6ICM4ZjhiOGI7XG4kdGV4dC1ncmF5LWNhdDogIzZkNzI3ODtcbiR1aS1iYWNrZ3JvdW5kLWdyYXk6ICNmOGY4Zjk7XG4kYm9yZGVyOiAjZThlN2VhO1xuJGVudGl0eS1ib3JkZXItY29sb3I6ICMxYzBmMzAyMTtcbiRsb2FkaW5nLWJnOiByZ2IoMCAwIDAgLyAxOCUpO1xuJHN1cHBvcnQtMDQ6ICMwMDQzY2U7XG4kbG9vcC11c2VybmFtZTogIzE5ODAzODtcbiRsb29wLWFjdGl2ZS1jdXJyZW50LXVzZXI6ICMyNGExNDg7XG4kd2FybS1ncmF5LTEwLWNvbG9yOiAjZjdmM2YyO1xuJHdhcm0tZ3JheS0yMC1jb2xvcjogI2U1ZTBkZjtcbiRoZWFkaW5nLTEtY29sb3I6ICMxYzBmMzA7XG4kaGVhZGluZy0yLWNvbG9yOiAjMzIwNzRkO1xuJGhlYWRpbmctMy1jb2xvcjogIzJmMjczNTtcbiRtb2JpbGUtaWNvbi1jb2xvcjogIzFjMGYzMDtcbiRzdGF0ZS1kaXNhYmxlZC0wMjogI2M2YzZjNjtcbiRsaW5rLTAyOiAjNTYwMWIyO1xuJGhlYWRlci1wdXJwbGU6ICMzMTEzNWU7XG4kaGVhZGVyLWdyZWVuOiAjMTA3ZDc5O1xuJHB1cnBsZS1saWdodDogI2NiYzRkNztcbiRwdXJwbGUtYmFja2dyb3VuZC1saWdodDogI2RjZDVlNztcbiRsb29wLWludGVyYWN0aXZlLTAxOiAjMTA3ZDc5O1xuJGxvb3AtaW50ZXJhY3RpdmUtMDEtb3BhY2l0eTogcmdiYSgxNiwgMTI1LCAxMjEsIDAuMyk7XG4kZmlsdGVycy1ncmVlbjogIzA1Njc2Mztcbi8vIEJyZWFrcG9pbnRzXG5cbiRicmVha3BvaW50LXM6IDM3NXB4O1xuJGJyZWFrcG9pbnQtc206IDQyMHB4O1xuJGJyZWFrcG9pbnQtbWQ6IDc2OHB4O1xuJGJyZWFrcG9pbnQtbGc6IDEwODBweDtcbiRicmVha3BvaW50LXhsOiAxMjc1cHg7XG5cbiRicmVha3BvaW50LW1kLXYyOiA4MjBweDtcblxuJGhlYWRlci1oZWlnaHQ6IDQuMzc1cmVtO1xuJGhlYWRlci1oZWlnaHQtdjI6IDQuMzc1cmVtO1xuJHN0YXRlLXNlbGVjdGVkLXVpOiAjZTBlMGUwO1xuJGMtbGVmdC1wYWRkaW5nOiAxLjVyZW07XG4kbWVudS1hY3RpdmUtY29sb3I6ICMzQUIwOTg7XG4kbWVudS1ob3Zlci1jb2xvcjogIzNBQjA5ODtcbiR0YWItaW5hY3RpdmUtY29sb3I6ICM4OWFmOTM7XG4kbGluZS1jb2xvcjogI2QwZGZkMjtcbiRib3JkZXItZ3JheTogI2NjY2NjYztcbiR0ZXh0LWdyYXk6ICM4MDgwODA7XG4kYmFzZS1jb250YWluZXItd2lkdGg6IDgxLjEyNHJlbTtcbiRoZWFkZXItdW5kZXJsaW5lLWhlaWdodDogMC4zMTNyZW07XG5cbi8vIE1vZGVyYXRvciByZXZpZXcgc2VjdGlvbnNcbiRmb290ZXItaGVpZ2h0OiA0cmVtO1xuJHRvcGJhci1oZWlnaHQ6IDEwLjVyZW07XG4kc3RlcHBlci1oZWlnaHQ6IDYuN3JlbTtcblxuLy8gTmV3IFN0b3J5IGZsb3cgLyBzdG9yeSBkZXRhaWxzIHZhcmlhYmxlc1xuJGdyZXk6ICM2NTY1NjU7XG4kbGlnaHQtZ3JleS0yOiAjYjFiNGI2O1xuJGxpZ2h0LWdyZXktMzogI2I0YjRiNDtcbiRsaWdodC1ncmV5LTQ6ICNjZmQzZDg7XG4kbGlnaHQtZ3JleS01OiAjZDllMGU3O1xuJGxpZ2h0LWdyZXktNjogI2YxZjJmMjtcbiRsaWdodC1ncmV5LTc6ICNjNGM0YzQ7XG4kbGlnaHQtZ3JleS04OiAjZTllOWU5O1xuJGxpZ2h0LWdyZXktOTogI2U2ZWFlZDtcbiRsaWdoLWdyZXktc2VwYXJhdG9yOiAjYzBjMGMwO1xuJGRhcmstZ3JleTogIzFhMWExYTtcbiRkYXJrLWdyZXktNTA6IHJnYigyNiwgMjYsIDI2LCAwLjUpO1xuJGJvcmRlci1ncmV5OiAjYzdjZGQ0O1xuJGxpZ2h0LXB1cnBsZTogI2VhZWFlYTtcbiRpbnB1dC1kaXNhYmxlZC1iZzogI2Y0ZjZmODtcbiRlcnJvci0yOiAjZGUyMjJkO1xuJGRhbmdlcjogI2M5MzA0ZDtcbiRwcmV2aW91cy1waWxsLWNvbG9yOiAjNzE4ZDZmO1xuJHRvb2x0aXAtZ3JleTogI2FiYWJhYjtcbiRsaWdodC1ncmVlbjogI2NmZTVlNDY2O1xuXG4kZmlsdGVycy1tb2RhbC1oZWFkZXItemluZGV4OiAxMDAwMDtcbiRtb2RhbC16aW5kZXg6IDk5OTk7XG4kbG9jYXRpb24tb3ZlcmxheS16aW5kZXg6IDkwMDE7XG4kaGVhZGVyLWFzaWRlLXppbmRleDogODAwMjtcbiRoZWFkZXItYXNpZGUtYmFja2dyb3VuZC16aW5kZXg6IDgwMDE7XG4kaGVhZGVyLXppbmRleDogODAwMDtcbiRuYXZpZ2F0aW9uLXppbmRleDogODAwMDtcbiRwYWdlLWxvYWRpbmctemluZGV4OiA3MDAxO1xuJHRvb2x0aXAtemluZGV4OiA3MDAwO1xuJG5ldy1zdG9yeS1jb250ZW50LXN0YXRlLXppbmRleDogNTAwO1xuJGZpbHRlci1kcm9wZG93bi16aW5kZXg6IDEwMDtcbiRtb2RhbC10b3AtaW5kaWNhdG9yLXppbmRleDogNTE7XG4kbW9kYWwtdG9wLWluZGljYXRvci1iYWNrZ3JvdW5kLXppbmRleDogNTE7XG4kY2hhcnQtemluZGV4OiAxO1xuJGNoYXJ0LWNvbnRyb2wtemluZGV4OiAyO1xuXG4kc2xpZGUtdG9nZ2xlLWRpc2FibGVkLW9wdGlvbi1iYWNrZ3JvdW5kOiAjZGRkZGRkO1xuXG4kdG9hc3QtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiR0b2FzdC1pbmZvLXRpdGxlLWNvbG9yOiAjNDk0OTQ5O1xuJHRvYXN0LWluZm8tbWVzc2FnZS1jb2xvcjogIzQyMmMwMDtcbiR0b2FzdC1pbmZvLWJ1dHRvbi1jb2xvcjogIzZjNGU5OTtcblxuJHRvYXN0LXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogI2Q5ZWVlZDtcbiR0b2FzdC1zdWNjZXNzLXRpdGxlLWNvbG9yOiAjMDA0NTQyO1xuJHRvYXN0LXN1Y2Nlc3MtbWVzc2FnZS1jb2xvcjogIzAxMzIzMDtcbiR0b2FzdC1zdWNjZXNzLWJ1dHRvbi1jb2xvcjogIzAxNjk2NTtcblxuJHRvYXN0LXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogI2ZmZjFkNTtcbiR0b2FzdC13YXJuaW5nLXRpdGxlLWNvbG9yOiAjNmI0NzAwO1xuJHRvYXN0LXdhcm5pbmctbWVzc2FnZS1jb2xvcjogIzQyMmMwMDtcbiR0b2FzdC13YXJuaW5nLWJ1dHRvbi1jb2xvcjogI2NjOGYxNDtcblxuJHRvYXN0LWVycm9yLWJhY2tncm91bmQtY29sb3I6ICNmNWQ1ZGI7XG4kdG9hc3QtZXJyb3ItdGl0bGUtY29sb3I6ICM3MzAwMTU7XG4kdG9hc3QtZXJyb3ItbWVzc2FnZS1jb2xvcjogIzQ1MDYxMTtcbiR0b2FzdC1lcnJvci1zdWNjZXNzLWNvbG9yOiAjZDllZWVkO1xuJHRvYXN0LWVycm9yLWJ1dHRvbi1jb2xvcjogI2IyMWQzOTtcblxuJHRvYXN0LWNsb3NlLWJ1dHRvbi1jb2xvcjogIzczMDAxNTtcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 82666:
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/comment/partials/comment-actions/comment-actions.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentActionsModule": () => (/* binding */ CommentActionsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _shared_components_button_button_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/components/button/button.module */ 82024);
/* harmony import */ var _shared_components_upvote_upvote_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/components/upvote/upvote.module */ 23312);
/* harmony import */ var _shared_icons_reply_icon_reply_icon_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/icons/reply-icon/reply-icon.module */ 64891);
/* harmony import */ var _comment_actions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comment-actions.component */ 59674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);







class CommentActionsModule {
  static #_ = this.ɵfac = function CommentActionsModule_Factory(t) {
    return new (t || CommentActionsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: CommentActionsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _shared_components_button_button_module__WEBPACK_IMPORTED_MODULE_0__.ButtonModule, _shared_icons_reply_icon_reply_icon_module__WEBPACK_IMPORTED_MODULE_2__.ReplyIconModule, _shared_components_upvote_upvote_module__WEBPACK_IMPORTED_MODULE_1__.UpvoteModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CommentActionsModule, {
    declarations: [_comment_actions_component__WEBPACK_IMPORTED_MODULE_3__.CommentActionsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _shared_components_button_button_module__WEBPACK_IMPORTED_MODULE_0__.ButtonModule, _shared_icons_reply_icon_reply_icon_module__WEBPACK_IMPORTED_MODULE_2__.ReplyIconModule, _shared_components_upvote_upvote_module__WEBPACK_IMPORTED_MODULE_1__.UpvoteModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule],
    exports: [_comment_actions_component__WEBPACK_IMPORTED_MODULE_3__.CommentActionsComponent]
  });
})();

/***/ }),

/***/ 8879:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/comment/single-comment/single-comment.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleCommentComponent": () => (/* binding */ SingleCommentComponent)
/* harmony export */ });
/* harmony import */ var _app_shared_enums_comment_status_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/enums/comment-status.enum */ 43949);
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/components/base.component */ 70697);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_services_api_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/services/api/profile/profile.service */ 58230);
/* harmony import */ var _core_services_api_comment_comment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/api/comment/comment.service */ 42075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _post_partials_reply_form_reply_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../post/partials/reply-form/reply-form.component */ 84409);
/* harmony import */ var _single_reply_single_reply_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../single-reply/single-reply.component */ 84946);
/* harmony import */ var _card2_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../card2/card.component */ 58272);











function SingleCommentComponent_app_single_reply_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-single-reply", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SingleCommentComponent_app_single_reply_1_Template_app_single_reply_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.isVisibleForAdmin(ctx_r3.comment) && ctx_r3.handlePendingReviewCommentClick());
    })("reply", function SingleCommentComponent_app_single_reply_1_Template_app_single_reply_reply_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r5.replyFormSwitch());
    })("upvote", function SingleCommentComponent_app_single_reply_1_Template_app_single_reply_upvote_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r6.upvote($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", ctx_r0.getNgStyleForComment(ctx_r0.comment))("comment", ctx_r0.comment)("isReplyEnable", ctx_r0.isReplyEnabled(ctx_r0.comment))("isUpVoteEnable", ctx_r0.isUpVoteEnabled(ctx_r0.comment))("isReplyFormShown", ctx_r0.replyFormShown)("showReply", ctx_r0.showReplyForm)("voted", ctx_r0.voted.indexOf(ctx_r0.comment.id) > -1)("votes", ctx_r0.votes[ctx_r0.comment.id]);
  }
}
function SingleCommentComponent_loop_card_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "loop-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-reply-form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("commentId", ctx_r1.commentId)("focus", true);
  }
}
function SingleCommentComponent_ng_container_5_app_single_reply_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-single-reply", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SingleCommentComponent_ng_container_5_app_single_reply_1_Template_app_single_reply_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const subcomment_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r10.isVisibleForAdmin(subcomment_r7) && ctx_r10.handlePendingReviewCommentReplyClick(subcomment_r7));
    })("reply", function SingleCommentComponent_ng_container_5_app_single_reply_1_Template_app_single_reply_reply_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r13.replyFormSwitch());
    })("upvote", function SingleCommentComponent_ng_container_5_app_single_reply_1_Template_app_single_reply_upvote_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r14.upvote($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subcomment_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", ctx_r9.getNgStyleForComment(subcomment_r7))("comment", subcomment_r7)("isReplyEnable", ctx_r9.isReplyEnabled(subcomment_r7))("isUpVoteEnable", ctx_r9.isUpVoteEnabled(subcomment_r7))("showReply", false)("voted", ctx_r9.voted.indexOf(subcomment_r7.id) > -1)("votes", ctx_r9.votes[subcomment_r7.id]);
  }
}
function SingleCommentComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SingleCommentComponent_ng_container_5_app_single_reply_1_Template, 1, 7, "app-single-reply", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const subcomment_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.isVisibleForAdmin(subcomment_r7) || ctx_r2.isVisibleForNonAdmin(subcomment_r7));
  }
}
class SingleCommentComponent extends _shared_components_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
  constructor(cd, profileService, commentService, router) {
    super();
    this.cd = cd;
    this.profileService = profileService;
    this.commentService = commentService;
    this.router = router;
    this.forceExpanded = false;
    this.showActions = true;
    this.showChildren = true;
    this.showReplyForm = true;
    this.voted = [];
    this.votes = {};
    this.voting = false;
    this.replyFormShown = false;
    this.COMMENT_STATUS = _app_shared_enums_comment_status_enum__WEBPACK_IMPORTED_MODULE_0__.COMMENT_STATUS;
  }
  handlePendingReviewCommentClick() {
    if (this.comment.status === 'pending_review') {
      this.router.navigate([`/inbox/replies/${this.comment.id}/review-and-translate`]);
    }
  }
  handlePendingReviewCommentReplyClick(subcomment) {
    if (subcomment.status === 'pending_review') {
      this.router.navigate([`/inbox/replies/${subcomment.id}/review-and-translate`]);
    }
  }
  isVisibleForAdmin(comment) {
    return this.profileService.isAdmin && [_app_shared_enums_comment_status_enum__WEBPACK_IMPORTED_MODULE_0__.COMMENT_STATUS.PENDING_REVIEW, _app_shared_enums_comment_status_enum__WEBPACK_IMPORTED_MODULE_0__.COMMENT_STATUS.PUBLISHED, _app_shared_enums_comment_status_enum__WEBPACK_IMPORTED_MODULE_0__.COMMENT_STATUS.PUBLISHED_AND_PENDING_CALL].includes(comment.status);
  }
  isVisibleForNonAdmin(comment) {
    return !this.profileService.isAdmin && [_app_shared_enums_comment_status_enum__WEBPACK_IMPORTED_MODULE_0__.COMMENT_STATUS.PUBLISHED, _app_shared_enums_comment_status_enum__WEBPACK_IMPORTED_MODULE_0__.COMMENT_STATUS.PUBLISHED_AND_PENDING_CALL].includes(comment.status);
  }
  getNgStyleForComment(comment) {
    return comment.status === _app_shared_enums_comment_status_enum__WEBPACK_IMPORTED_MODULE_0__.COMMENT_STATUS.PENDING_REVIEW ? {
      opacity: '0.4'
    } : {
      opacity: '1'
    };
  }
  isReplyEnabled(comment) {
    return comment.status !== _app_shared_enums_comment_status_enum__WEBPACK_IMPORTED_MODULE_0__.COMMENT_STATUS.PENDING_REVIEW;
  }
  isUpVoteEnabled(comment) {
    return comment.status !== _app_shared_enums_comment_status_enum__WEBPACK_IMPORTED_MODULE_0__.COMMENT_STATUS.PENDING_REVIEW;
  }
  ngOnChanges() {
    this.commentId = {
      id: this.storyId,
      parentCommentId: this.comment?.id
    };
    if (this.comment && !this.initialized) {
      if (this.commentService.hasUserVoted(this.comment?.id)) {
        this.voted.push(this.comment?.id);
      }
      this.votes[this.comment.id] = this.comment.votes;
      this.comment.children?.forEach(child => {
        this.votes[child.id] = child.votes || 0;
      });
      this.initialized = true;
    }
  }
  upvote($event) {
    if (!this.showActions || this.voting) {
      return;
    }
    this.voting = true;
    if (this.voted.indexOf($event) === -1) {
      this.voted.push($event);
      this.votes[$event]++;
      this.commentService.voteComment($event).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroyed$)).subscribe(res => {
        this.voting = false;
        if (!res.success) {
          this.votes[$event]--;
        } else {
          this.commentService.setUserVoted($event, true);
        }
        this.cd.detectChanges();
      }, () => {
        this.voting = false;
        this.votes[$event]--;
        this.voted.splice(this.voted.indexOf($event), 1);
        this.cd.detectChanges();
      });
    } else {
      this.voted.splice(this.voted.indexOf($event), 1);
      this.votes[$event]--;
      this.commentService.unvoteComment($event).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroyed$)).subscribe(res => {
        this.voting = false;
        if (!res.success) {
          this.votes[$event]++;
          this.voted.push($event);
        } else {
          this.commentService.setUserVoted($event, false);
        }
        this.cd.detectChanges();
      }, () => {
        this.voting = false;
        this.votes[$event]++;
        this.voted.push($event);
        this.cd.detectChanges();
      });
    }
  }
  replyFormSwitch() {
    if (!this.showReplyForm) {
      this.replyFormShown = false;
      return;
    }
    this.replyFormShown = !this.replyFormShown;
  }
  trackByFunction(i, item) {
    return item.id;
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  static #_ = this.ɵfac = function SingleCommentComponent_Factory(t) {
    return new (t || SingleCommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_core_services_api_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_api_comment_comment_service__WEBPACK_IMPORTED_MODULE_3__.CommentService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: SingleCommentComponent,
    selectors: [["app-single-comment"]],
    inputs: {
      comment: "comment",
      forceExpanded: "forceExpanded",
      showActions: "showActions",
      showChildren: "showChildren",
      showReplyForm: "showReplyForm",
      storyId: "storyId"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]],
    decls: 6,
    vars: 4,
    consts: [[1, "comment"], [3, "ngStyle", "comment", "isReplyEnable", "isUpVoteEnable", "isReplyFormShown", "showReply", "voted", "votes", "click", "reply", "upvote", 4, "ngIf"], [1, "comment-replies"], ["class", "comment-replies__reply", 4, "ngIf"], [1, "comment-replies__list"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle", "comment", "isReplyEnable", "isUpVoteEnable", "isReplyFormShown", "showReply", "voted", "votes", "click", "reply", "upvote"], [1, "comment-replies__reply"], [3, "commentId", "focus"], ["class", "comment-replies__reply", 3, "ngStyle", "comment", "isReplyEnable", "isUpVoteEnable", "showReply", "voted", "votes", "click", "reply", "upvote", 4, "ngIf"], [1, "comment-replies__reply", 3, "ngStyle", "comment", "isReplyEnable", "isUpVoteEnable", "showReply", "voted", "votes", "click", "reply", "upvote"]],
    template: function SingleCommentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SingleCommentComponent_app_single_reply_1_Template, 1, 8, "app-single-reply", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, SingleCommentComponent_loop_card_3_Template, 2, 2, "loop-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, SingleCommentComponent_ng_container_5_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isVisibleForAdmin(ctx.comment) || ctx.isVisibleForNonAdmin(ctx.comment));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.replyFormShown && ctx.showReplyForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.comment.children)("ngForTrackBy", ctx.trackByFunction);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgStyle, _post_partials_reply_form_reply_form_component__WEBPACK_IMPORTED_MODULE_4__.ReplyFormComponent, _single_reply_single_reply_component__WEBPACK_IMPORTED_MODULE_5__.SingleReplyComponent, _card2_card_component__WEBPACK_IMPORTED_MODULE_6__.CardComponent],
    styles: [".comment-entity[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.comment-entity__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 0.5rem;\n}\n.comment-entity[_ngcontent-%COMP%]     .post-author {\n  margin-bottom: 0.5rem;\n}\n\n.content[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  padding: 0.5rem;\n}\n\n.comment-actions[_ngcontent-%COMP%]     button.bx--accordion__heading {\n  background-color: white;\n  border-bottom: 1px solid rgba(28, 15, 48, 0.1294117647);\n}\n.comment-actions[_ngcontent-%COMP%]     .bx--accordion {\n  background: transparent;\n  position: relative;\n}\n.comment-actions[_ngcontent-%COMP%]     .bx--accordion__content {\n  padding-top: 0;\n  padding-bottom: 0;\n  position: relative;\n}\nhtml:not([dir=rtl])[_nghost-%COMP%]   .comment-actions[_ngcontent-%COMP%]     .bx--accordion__content, html:not([dir=rtl])   [_nghost-%COMP%]   .comment-actions[_ngcontent-%COMP%]     .bx--accordion__content {\n  padding-right: 0;\n}\nhtml[dir=rtl][_nghost-%COMP%]   .comment-actions[_ngcontent-%COMP%]     .bx--accordion__content, html[dir=rtl]   [_nghost-%COMP%]   .comment-actions[_ngcontent-%COMP%]     .bx--accordion__content {\n  padding-left: 0;\n}\nhtml:not([dir=rtl])[_nghost-%COMP%]   .comment-actions[_ngcontent-%COMP%]     .bx--accordion__arrow, html:not([dir=rtl])   [_nghost-%COMP%]   .comment-actions[_ngcontent-%COMP%]     .bx--accordion__arrow {\n  margin-right: 1.5rem;\n}\nhtml[dir=rtl][_nghost-%COMP%]   .comment-actions[_ngcontent-%COMP%]     .bx--accordion__arrow, html[dir=rtl]   [_nghost-%COMP%]   .comment-actions[_ngcontent-%COMP%]     .bx--accordion__arrow {\n  margin-left: 1.5rem;\n}\n.comment-actions[_ngcontent-%COMP%]     .bx--accordion__item {\n  border-top: none;\n}\n.comment-actions[_ngcontent-%COMP%]     .bx--accordion__item:last-child {\n  border-bottom: none;\n}\n\n.reply-thread[_ngcontent-%COMP%] {\n  color: #570f85;\n  position: absolute;\n  top: 0.5rem;\n  z-index: 1;\n  font-size: 0.75rem;\n  text-decoration: none;\n}\nhtml:not([dir=rtl])[_nghost-%COMP%]   .reply-thread[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .reply-thread[_ngcontent-%COMP%] {\n  left: 1.5rem;\n}\nhtml[dir=rtl][_nghost-%COMP%]   .reply-thread[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .reply-thread[_ngcontent-%COMP%] {\n  right: 1.5rem;\n}\nhtml:not([dir=rtl])[_nghost-%COMP%]   .reply-thread[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .reply-thread[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\nhtml[dir=rtl][_nghost-%COMP%]   .reply-thread[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .reply-thread[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.comment-reply-form-conainer[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 1rem 1rem 0 1rem;\n  border-bottom: 1px solid rgba(28, 15, 48, 0.1294117647);\n  position: relative;\n}\n\nhtml:not([dir=rtl])[_nghost-%COMP%]   .no-bl[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .no-bl[_ngcontent-%COMP%] {\n  border-left: none !important;\n}\nhtml[dir=rtl][_nghost-%COMP%]   .no-bl[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .no-bl[_ngcontent-%COMP%] {\n  border-right: none !important;\n}\n\n.subcomment-entity[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.subcomment[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n.subcomment[_ngcontent-%COMP%]   .subcomment__icon[_ngcontent-%COMP%] {\n  color: #107d79;\n  width: 1rem;\n  margin-top: -0.5rem;\n  align-items: center;\n}\nhtml:not([dir=rtl])[_nghost-%COMP%]   .subcomment[_ngcontent-%COMP%]   .subcomment__icon[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .subcomment[_ngcontent-%COMP%]   .subcomment__icon[_ngcontent-%COMP%] {\n  margin-right: 0.75rem;\n}\nhtml[dir=rtl][_nghost-%COMP%]   .subcomment[_ngcontent-%COMP%]   .subcomment__icon[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .subcomment[_ngcontent-%COMP%]   .subcomment__icon[_ngcontent-%COMP%] {\n  margin-left: 0.75rem;\n}\nhtml:not([dir=rtl])[_nghost-%COMP%]   .subcomment[_ngcontent-%COMP%]   .subcomment__icon[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .subcomment[_ngcontent-%COMP%]   .subcomment__icon[_ngcontent-%COMP%] {\n  margin-left: -0.5rem;\n}\nhtml[dir=rtl][_nghost-%COMP%]   .subcomment[_ngcontent-%COMP%]   .subcomment__icon[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .subcomment[_ngcontent-%COMP%]   .subcomment__icon[_ngcontent-%COMP%] {\n  margin-right: -0.5rem;\n}\n.subcomment__header[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.comment-replies[_ngcontent-%COMP%] {\n  margin-top: 0.938rem;\n}\n.comment-replies__reply[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 1rem;\n  position: relative;\n}\nhtml:not([dir=rtl])[_nghost-%COMP%]   .comment-replies__reply[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .comment-replies__reply[_ngcontent-%COMP%] {\n  margin-left: 2.5rem;\n}\nhtml[dir=rtl][_nghost-%COMP%]   .comment-replies__reply[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .comment-replies__reply[_ngcontent-%COMP%] {\n  margin-right: 2.5rem;\n}\n.comment-replies__reply[_ngcontent-%COMP%]:before {\n  display: block;\n  content: \" \";\n  height: calc(100% + 1rem);\n  position: absolute;\n  width: 0.125rem;\n  background-color: #b1b4b6;\n}\nhtml:not([dir=rtl])[_nghost-%COMP%]   .comment-replies__reply[_ngcontent-%COMP%]:before, html:not([dir=rtl])   [_nghost-%COMP%]   .comment-replies__reply[_ngcontent-%COMP%]:before {\n  left: calc(-2.5rem / 2);\n}\nhtml[dir=rtl][_nghost-%COMP%]   .comment-replies__reply[_ngcontent-%COMP%]:before, html[dir=rtl]   [_nghost-%COMP%]   .comment-replies__reply[_ngcontent-%COMP%]:before {\n  right: calc(-2.5rem / 2);\n}\n.comment-replies__reply[_ngcontent-%COMP%]:last-of-type:before {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmdsZS1jb21tZW50LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vc3R5bGVzL19taXhpbnMuc2NzcyIsIi4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCIuLi8uLi8uLi8uLi9zdHlsZXMvbG9vcC1kZXNpZ24tc3lzdGVtL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLHVCQUFBO0FBSkY7QUFNRTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBSko7QUFRSTtFQUNFLHFCQUFBO0FBTk47O0FBV0E7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUFSRjs7QUFhSTtFQUNFLHVCQUFBO0VBQ0EsdURBQUE7QUFWTjtBQWFJO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtBQVhOO0FBYU07RUFFRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVpSO0FDYUU7RUEwQ0ksZ0JEOUN5QjtBQU4vQjtBQ2dCRTtFQXdDSSxlRGxEeUI7QUFIL0I7QUNPRTtFQTBDSSxvQkR2Q3dCO0FBUDlCO0FDVUU7RUF3Q0ksbUJEM0N3QjtBQUo5QjtBQU9NO0VBQ0UsZ0JBQUE7QUFMUjtBQU9RO0VBQ0UsbUJBQUE7QUFMVjs7QUFZQTtFQUNFLGNFaERxQjtFRmlEckIsa0JBQUE7RUFFQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFWRjtBQ2RFO0VBMENJLFlEdEJVO0FBSGhCO0FDWEU7RUF3Q0ksYUQxQlU7QUFBaEI7QUNwQkU7RUEwQ0ksaUJEZm9CO0FBSjFCO0FDakJFO0VBd0NJLGdCRG5Cb0I7QUFEMUI7O0FBS0E7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdURBQUE7RUFDQSxrQkFBQTtBQUZGOztBQ2pDRTtFQTBDSSw0QkRIaUI7QUFGdkI7QUMvQkU7RUF3Q0ksNkJEUGlCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLGNHeEZhO0VIeUZiLFdBQUE7RUFDQSxtQkFBQTtFQUdBLG1CQUFBO0FBREo7QUN0REU7RUEwQ0kscUJEV29CO0FBSTFCO0FDbkRFO0VBd0NJLG9CRE9vQjtBQU8xQjtBQzVERTtFQTBDSSxvQkRZbUI7QUFTekI7QUN6REU7RUF3Q0kscUJEUW1CO0FBWXpCO0FBUkU7RUFDRSxhQUFBO0FBVUo7O0FBTkE7RUFDRSxvQkFBQTtBQVNGO0FBUEU7RUFHRSxjQUFBO0VBRUEsbUJBSGdCO0VBSWhCLGtCQUFBO0FBTUo7QUM5RUU7RUEwQ0ksbUJEeUJZO0FBY2xCO0FDM0VFO0VBd0NJLG9CRHFCWTtBQWlCbEI7QUFWSTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkU1QlM7QUZ3Q2Y7QUM1RkU7RUEwQ0ksdUJEdUNjO0FBY3BCO0FDekZFO0VBd0NJLHdCRG1DYztBQWlCcEI7QUFiTTtFQUNFLFlBQUE7QUFlUiIsImZpbGUiOiJzaW5nbGUtY29tbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICdtaXhpbnMnO1xuQGltcG9ydCAnbG9vcC1kZXNpZ24tc3lzdGVtL2NvbG9ycyc7XG5AaW1wb3J0ICdsb29wLWRlc2lnbi1zeXN0ZW0vaGVscGVycyc7XG5cbi5jb21tZW50LWVudGl0eSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG4gICZfX2FjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIH1cblxuICA6Om5nLWRlZXAge1xuICAgIC5wb3N0LWF1dGhvciB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgfVxuICB9XG59XG5cbi5jb250ZW50IHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG4uY29tbWVudC1hY3Rpb25zIHtcbiAgOjpuZy1kZWVwIHtcbiAgICBidXR0b24uYngtLWFjY29yZGlvbl9faGVhZGluZyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZW50aXR5LWJvcmRlci1jb2xvcjtcbiAgICB9XG5cbiAgICAuYngtLWFjY29yZGlvbiB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgJl9fY29udGVudCB7XG4gICAgICAgIEBpbmNsdWRlIHBhZGRpbmctcmlnaHQoMCk7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAmX19hcnJvdyB7XG4gICAgICAgIEBpbmNsdWRlIG1hcmdpbi1yaWdodCgxLjVyZW0pO1xuICAgICAgfVxuXG4gICAgICAmX19pdGVtIHtcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnJlcGx5LXRocmVhZCB7XG4gIGNvbG9yOiAkcG9zdC1oaWdobGlnaHQtY29sb3I7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgQGluY2x1ZGUgbGVmdCgxLjVyZW0pO1xuICB0b3A6IDAuNXJlbTtcbiAgei1pbmRleDogMTtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgc3ZnIHtcbiAgICBAaW5jbHVkZSBtYXJnaW4tcmlnaHQoNXB4KTtcbiAgfVxufVxuXG4uY29tbWVudC1yZXBseS1mb3JtLWNvbmFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDFyZW0gMXJlbSAwIDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZW50aXR5LWJvcmRlci1jb2xvcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubm8tYmwge1xuICBAaW5jbHVkZSBib3JkZXItbGVmdChub25lICFpbXBvcnRhbnQpO1xufVxuXG4uc3ViY29tbWVudC1lbnRpdHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zdWJjb21tZW50IHtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xuXG4gIC5zdWJjb21tZW50X19pY29uIHtcbiAgICBjb2xvcjogJGxvb3AtZ3JlZW4tMTAwO1xuICAgIHdpZHRoOiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IC0wLjVyZW07XG4gICAgQGluY2x1ZGUgbWFyZ2luLXJpZ2h0KDAuNzVyZW0pO1xuICAgIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KC0wLjVyZW0pO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAmX19oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cblxuLmNvbW1lbnQtcmVwbGllcyB7XG4gIG1hcmdpbi10b3A6IDAuOTM4cmVtO1xuXG4gICZfX3JlcGx5IHtcbiAgICAkbWFyZ2luLWxlZnQ6IDIuNXJlbTtcbiAgICAkbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgkbWFyZ2luLWxlZnQpO1xuICAgIG1hcmdpbi1ib3R0b206ICRtYXJnaW4tYm90dG9tO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6YmVmb3JlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgY29udGVudDogJyAnO1xuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAjeyRtYXJnaW4tYm90dG9tfSk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMC4xMjVyZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JleS0yO1xuICAgICAgQGluY2x1ZGUgbGVmdChjYWxjKC0jeyRtYXJnaW4tbGVmdH0gLyAyKSk7XG4gICAgfVxuXG4gICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AbWl4aW4gZmxleC1nYXAoJGdhcCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgbWFyZ2luLXRvcDogKC0kZ2FwKTtcbiAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoKC0kZ2FwKSwgJGdsb2JhbCk7XG5cbiAgPiAqIHtcbiAgICBtYXJnaW4tdG9wOiAkZ2FwO1xuICAgIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCRnYXAsICRnbG9iYWwpO1xuICB9XG59XG5cbkBtaXhpbiBiYXNlLWNvbnRhaW5lcigkY29udGVudC13aWR0aCkge1xuICAkZGVza3RvcC1wYWRkaW5nOiAycmVtO1xuICBtYXgtd2lkdGg6IGNhbGMoI3skY29udGVudC13aWR0aH0gKyAoI3skZGVza3RvcC1wYWRkaW5nfSkpO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQycmVtKSB7XG4gICAgQGluY2x1ZGUgcGFkZGluZy1sZWZ0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICAgIEBpbmNsdWRlIHBhZGRpbmctcmlnaHQoJGRlc2t0b3AtcGFkZGluZywgdHJ1ZSk7XG4gIH1cbn1cblxuQG1peGluIGNlbnRlckFic29sdXRlRWxlbWVudCB7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbkBtaXhpbiBvbmx5LWx0ci1nbG9iYWwge1xuICBodG1sOm5vdChbZGlyPSdydGwnXSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsLWdsb2JhbCB7XG4gIGh0bWxbZGlyPSdydGwnXSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1sdHIge1xuICA6aG9zdC1jb250ZXh0KGh0bWw6bm90KFtkaXI9J3J0bCddKSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsIHtcbiAgOmhvc3QtY29udGV4dChodG1sW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBydGwtdmFsdWUoJHByb3BlcnR5LCAkbHRyLXZhbHVlLCAkcnRsLXZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaWYgJGdsb2JhbCA9PSB0cnVlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ci1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsLWdsb2JhbCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRydGwtdmFsdWU7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ciB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRsdHItdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gcnRsLXByb3BlcnR5KCRsdHItcHJvcGVydHksICRydGwtcHJvcGVydHksICR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcnRsLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skbHRyLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hcmdpbi1sZWZ0KCRtYXJnaW4sICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShtYXJnaW4tbGVmdCwgbWFyZ2luLXJpZ2h0LCAkbWFyZ2luLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIG1hcmdpbi1yaWdodCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLXJpZ2h0LCBtYXJnaW4tbGVmdCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nKCRwYWRkaW5nVG9wLCAkcGFkZGluZ1JpZ2h0LCAkcGFkZGluZ0JvdHRvbSwgJHBhZGRpbmdMZWZ0LCAkZ2xvYmFsOiBmYWxzZSkge1xuICBwYWRkaW5nLXRvcDogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nUmlnaHQsICRnbG9iYWwpO1xuICBwYWRkaW5nLWJvdHRvbTogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nTGVmdCwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLWxlZnQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmctcmlnaHQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRleHQtYWxpZ24tbGVmdCgkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUodGV4dC1hbGlnbiwgbGVmdCwgcmlnaHQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShsZWZ0LCByaWdodCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHJpZ2h0LCBsZWZ0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gdHJhbnNsYXRlWFkoJHZhbHVlWCwgJHZhbHVlWSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRyYW5zZm9ybSwgdHJhbnNsYXRlKCR2YWx1ZVgsICR2YWx1ZVkpLCB0cmFuc2xhdGUoLSR2YWx1ZVgsICR2YWx1ZVkpLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1sZWZ0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1sZWZ0LCBib3JkZXItcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItcmlnaHQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXJpZ2h0LCBib3JkZXItbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsIGJvcmRlci10b3AtbGVmdC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItdG9wLWxlZnQtcmFkaXVzLCBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGZsb2F0LWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCBsZWZ0LCByaWdodCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gZmxvYXQtcmlnaHQge1xuICBAaW5jbHVkZSBydGwtdmFsdWUoZmxvYXQsIHJpZ2h0LCBsZWZ0LCAkZ2xvYmFsOiBmYWxzZSk7XG59XG5cbkBtaXhpbiBzbWFsbC1kZXNrdG9wLW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbGcpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC14bCAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1hbmQtdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbGcgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBzbWFsbC1tb2JpbGUtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1zIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbWQgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0YWJsZXQtb25seSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS11cCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBkaXNhYmxlLXNjcm9sbGJhciB7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIiwiJHN0YW5kYXJkRm9udEZhbWlseTogJ05vdG8gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGNvbnRlbnQtdG9wLXBhZGRpbmc6IDNyZW07XG4kcG9zdC1saXN0LWJnOiAjZGFkYWRhO1xuJHdoaXRlOiAjZmZmZmZmO1xuJHBvc3QtcHJldmlldy1iZzogd2hpdGU7XG4kbGlnaHQtZ3JheS1iZzogI2Y0ZjRmNDtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1sZWZ0OiAyLjM0NHJlbTtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1yaWdodDogMS4wNjNyZW07XG4kcG9zdC1wcmV2aWV3LXBhZGRpbmc6IDIuNXJlbSAkcG9zdC1wcmV2aWV3LXBhZGRpbmctcmlnaHQgMS4yNXJlbSAkcG9zdC1wcmV2aWV3LXBhZGRpbmctbGVmdDtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1tb2JpbGU6IDFyZW0gMXJlbSAwLjVyZW0gMXJlbTtcbiRwb3N0LXBhZGRpbmctYm90dG9tOiAxcmVtO1xuJHBvc3QtcHJldmlldy1ndXR0ZXI6IDJweDtcbiRwb3N0LWhpZ2hsaWdodC1jb2xvcjogIzU3MGY4NTtcbiRjb2xvci1wdXJwbGUtOTA6ICMzMTEzNWU7XG4kY29sb3ItcHVycGxlLTYwOiAjOTg4YWFlO1xuJGNvbG9yLXB1cnBsZS01MDogIzk4ODlhZjtcbiRjb2xvci1wdXJwbGUtMTA6ICNmNWYzZjc7XG4kY29sb3ItcHVycGxlLWxpZ2h0OiAjNGIzNWJjO1xuJGNvbG9yLXB1cnBsZS12ZXJ5LWxpZ2h0OiAjODY2YWIwO1xuJGNvbG9yLXB1cnBsZS1zdGVwcGVyOiAjNGEyYjdhO1xuJGNvbG9yLWdyZWVuLTEwMDogIzA1MjgwNDtcbiRjb2xvci1ncmVlbi05MDogIzBkM2QwYjtcbiRjb2xvci1ncmVlbi04MDogIzFmNmIxZTtcbiRjb2xvci1ncmVlbi03MDogIzM1OGEzNDtcbiRjb2xvci1ncmVlbi02MDogIzZkOWE2ZTtcbiRjb2xvci1ncmVlbi01MDogIzg5YTg4ZjtcbiRjb2xvci1ncmVlbi00MDogIzlmYzhhNjtcbiRjb2xvci1ncmVlbi0zMDogI2FhZDZiMztcbiRjb2xvci1ncmVlbi0yMDogI2M5ZTlkMTtcbiRjb2xvci1ncmVlbi0xMDogI2YzZjdmMztcbiRjb2xvci1ncmVlbi1zdGVwcGVyOiAjMTA3RDc5O1xuJGNvbG9yLWdyZWVuLW1lZGl1bTogI2FkZGFhZjtcbiRjb2xvci1ncmVlbi1saWdodDogIzNBQjA5ODtcbiRjb2xvci1ncmVlbi12ZXJ5LWxpZ2h0OiAjRURGRkZDO1xuJGdyZXktMTogI2Q2ZDBkZjtcbiRzdXBwb3J0LTAxOiAjZGExZTI4O1xuJGVycm9yOiAjZWUyMzJmO1xuJHRleHQtYmxhY2s6ICMxNjE2MTY7XG4kdGV4dC1zZWNvbmRhcnk6ICMzOTM5Mzk7XG4kdGV4dC1ncmF5ZWQ6ICM1MjUyNTI7XG4kdGV4dC1ncmF5ZWQ4MDogIzhmOGI4YjtcbiR0ZXh0LWdyYXktY2F0OiAjNmQ3Mjc4O1xuJHVpLWJhY2tncm91bmQtZ3JheTogI2Y4ZjhmOTtcbiRib3JkZXI6ICNlOGU3ZWE7XG4kZW50aXR5LWJvcmRlci1jb2xvcjogIzFjMGYzMDIxO1xuJGxvYWRpbmctYmc6IHJnYigwIDAgMCAvIDE4JSk7XG4kc3VwcG9ydC0wNDogIzAwNDNjZTtcbiRsb29wLXVzZXJuYW1lOiAjMTk4MDM4O1xuJGxvb3AtYWN0aXZlLWN1cnJlbnQtdXNlcjogIzI0YTE0ODtcbiR3YXJtLWdyYXktMTAtY29sb3I6ICNmN2YzZjI7XG4kd2FybS1ncmF5LTIwLWNvbG9yOiAjZTVlMGRmO1xuJGhlYWRpbmctMS1jb2xvcjogIzFjMGYzMDtcbiRoZWFkaW5nLTItY29sb3I6ICMzMjA3NGQ7XG4kaGVhZGluZy0zLWNvbG9yOiAjMmYyNzM1O1xuJG1vYmlsZS1pY29uLWNvbG9yOiAjMWMwZjMwO1xuJHN0YXRlLWRpc2FibGVkLTAyOiAjYzZjNmM2O1xuJGxpbmstMDI6ICM1NjAxYjI7XG4kaGVhZGVyLXB1cnBsZTogIzMxMTM1ZTtcbiRoZWFkZXItZ3JlZW46ICMxMDdkNzk7XG4kcHVycGxlLWxpZ2h0OiAjY2JjNGQ3O1xuJHB1cnBsZS1iYWNrZ3JvdW5kLWxpZ2h0OiAjZGNkNWU3O1xuJGxvb3AtaW50ZXJhY3RpdmUtMDE6ICMxMDdkNzk7XG4kbG9vcC1pbnRlcmFjdGl2ZS0wMS1vcGFjaXR5OiByZ2JhKDE2LCAxMjUsIDEyMSwgMC4zKTtcbiRmaWx0ZXJzLWdyZWVuOiAjMDU2NzYzO1xuLy8gQnJlYWtwb2ludHNcblxuJGJyZWFrcG9pbnQtczogMzc1cHg7XG4kYnJlYWtwb2ludC1zbTogNDIwcHg7XG4kYnJlYWtwb2ludC1tZDogNzY4cHg7XG4kYnJlYWtwb2ludC1sZzogMTA4MHB4O1xuJGJyZWFrcG9pbnQteGw6IDEyNzVweDtcblxuJGJyZWFrcG9pbnQtbWQtdjI6IDgyMHB4O1xuXG4kaGVhZGVyLWhlaWdodDogNC4zNzVyZW07XG4kaGVhZGVyLWhlaWdodC12MjogNC4zNzVyZW07XG4kc3RhdGUtc2VsZWN0ZWQtdWk6ICNlMGUwZTA7XG4kYy1sZWZ0LXBhZGRpbmc6IDEuNXJlbTtcbiRtZW51LWFjdGl2ZS1jb2xvcjogIzNBQjA5ODtcbiRtZW51LWhvdmVyLWNvbG9yOiAjM0FCMDk4O1xuJHRhYi1pbmFjdGl2ZS1jb2xvcjogIzg5YWY5MztcbiRsaW5lLWNvbG9yOiAjZDBkZmQyO1xuJGJvcmRlci1ncmF5OiAjY2NjY2NjO1xuJHRleHQtZ3JheTogIzgwODA4MDtcbiRiYXNlLWNvbnRhaW5lci13aWR0aDogODEuMTI0cmVtO1xuJGhlYWRlci11bmRlcmxpbmUtaGVpZ2h0OiAwLjMxM3JlbTtcblxuLy8gTW9kZXJhdG9yIHJldmlldyBzZWN0aW9uc1xuJGZvb3Rlci1oZWlnaHQ6IDRyZW07XG4kdG9wYmFyLWhlaWdodDogMTAuNXJlbTtcbiRzdGVwcGVyLWhlaWdodDogNi43cmVtO1xuXG4vLyBOZXcgU3RvcnkgZmxvdyAvIHN0b3J5IGRldGFpbHMgdmFyaWFibGVzXG4kZ3JleTogIzY1NjU2NTtcbiRsaWdodC1ncmV5LTI6ICNiMWI0YjY7XG4kbGlnaHQtZ3JleS0zOiAjYjRiNGI0O1xuJGxpZ2h0LWdyZXktNDogI2NmZDNkODtcbiRsaWdodC1ncmV5LTU6ICNkOWUwZTc7XG4kbGlnaHQtZ3JleS02OiAjZjFmMmYyO1xuJGxpZ2h0LWdyZXktNzogI2M0YzRjNDtcbiRsaWdodC1ncmV5LTg6ICNlOWU5ZTk7XG4kbGlnaHQtZ3JleS05OiAjZTZlYWVkO1xuJGxpZ2gtZ3JleS1zZXBhcmF0b3I6ICNjMGMwYzA7XG4kZGFyay1ncmV5OiAjMWExYTFhO1xuJGRhcmstZ3JleS01MDogcmdiKDI2LCAyNiwgMjYsIDAuNSk7XG4kYm9yZGVyLWdyZXk6ICNjN2NkZDQ7XG4kbGlnaHQtcHVycGxlOiAjZWFlYWVhO1xuJGlucHV0LWRpc2FibGVkLWJnOiAjZjRmNmY4O1xuJGVycm9yLTI6ICNkZTIyMmQ7XG4kZGFuZ2VyOiAjYzkzMDRkO1xuJHByZXZpb3VzLXBpbGwtY29sb3I6ICM3MThkNmY7XG4kdG9vbHRpcC1ncmV5OiAjYWJhYmFiO1xuJGxpZ2h0LWdyZWVuOiAjY2ZlNWU0NjY7XG5cbiRmaWx0ZXJzLW1vZGFsLWhlYWRlci16aW5kZXg6IDEwMDAwO1xuJG1vZGFsLXppbmRleDogOTk5OTtcbiRsb2NhdGlvbi1vdmVybGF5LXppbmRleDogOTAwMTtcbiRoZWFkZXItYXNpZGUtemluZGV4OiA4MDAyO1xuJGhlYWRlci1hc2lkZS1iYWNrZ3JvdW5kLXppbmRleDogODAwMTtcbiRoZWFkZXItemluZGV4OiA4MDAwO1xuJG5hdmlnYXRpb24temluZGV4OiA4MDAwO1xuJHBhZ2UtbG9hZGluZy16aW5kZXg6IDcwMDE7XG4kdG9vbHRpcC16aW5kZXg6IDcwMDA7XG4kbmV3LXN0b3J5LWNvbnRlbnQtc3RhdGUtemluZGV4OiA1MDA7XG4kZmlsdGVyLWRyb3Bkb3duLXppbmRleDogMTAwO1xuJG1vZGFsLXRvcC1pbmRpY2F0b3ItemluZGV4OiA1MTtcbiRtb2RhbC10b3AtaW5kaWNhdG9yLWJhY2tncm91bmQtemluZGV4OiA1MTtcbiRjaGFydC16aW5kZXg6IDE7XG4kY2hhcnQtY29udHJvbC16aW5kZXg6IDI7XG5cbiRzbGlkZS10b2dnbGUtZGlzYWJsZWQtb3B0aW9uLWJhY2tncm91bmQ6ICNkZGRkZGQ7XG5cbiR0b2FzdC1pbmZvLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuJHRvYXN0LWluZm8tdGl0bGUtY29sb3I6ICM0OTQ5NDk7XG4kdG9hc3QtaW5mby1tZXNzYWdlLWNvbG9yOiAjNDIyYzAwO1xuJHRvYXN0LWluZm8tYnV0dG9uLWNvbG9yOiAjNmM0ZTk5O1xuXG4kdG9hc3Qtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiAjZDllZWVkO1xuJHRvYXN0LXN1Y2Nlc3MtdGl0bGUtY29sb3I6ICMwMDQ1NDI7XG4kdG9hc3Qtc3VjY2Vzcy1tZXNzYWdlLWNvbG9yOiAjMDEzMjMwO1xuJHRvYXN0LXN1Y2Nlc3MtYnV0dG9uLWNvbG9yOiAjMDE2OTY1O1xuXG4kdG9hc3Qtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMWQ1O1xuJHRvYXN0LXdhcm5pbmctdGl0bGUtY29sb3I6ICM2YjQ3MDA7XG4kdG9hc3Qtd2FybmluZy1tZXNzYWdlLWNvbG9yOiAjNDIyYzAwO1xuJHRvYXN0LXdhcm5pbmctYnV0dG9uLWNvbG9yOiAjY2M4ZjE0O1xuXG4kdG9hc3QtZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogI2Y1ZDVkYjtcbiR0b2FzdC1lcnJvci10aXRsZS1jb2xvcjogIzczMDAxNTtcbiR0b2FzdC1lcnJvci1tZXNzYWdlLWNvbG9yOiAjNDUwNjExO1xuJHRvYXN0LWVycm9yLXN1Y2Nlc3MtY29sb3I6ICNkOWVlZWQ7XG4kdG9hc3QtZXJyb3ItYnV0dG9uLWNvbG9yOiAjYjIxZDM5O1xuXG4kdG9hc3QtY2xvc2UtYnV0dG9uLWNvbG9yOiAjNzMwMDE1O1xuIiwiLy8vIGh0dHBzOi8vd3d3LmZpZ21hLmNvbS9maWxlL0dubTAycVQ4bEwxWEV2dE1GT1I2UkwvTG9vcC0yMDIxLUZlYXR1cmUtRGV2ZWxvcG1lbnQ/bm9kZS1pZD00JTNBMzAwXG5cbi8vLyBUaGlzIGlzIHRoZSBtYWluIGNvbG91ciBmb3IgYWxsIHRoZSBlbGVtZW50cy4gSXQgaXMgdXNlZCB0byBjcmVhdGUgYWxsIG9mIHRoZSBpbnB1dCBmaWVsZHMsIGZvciBpY29ucyBldGNcbiRsb29wLWdyZWVuLTEyNTogIzA1Njc2MztcbiRsb29wLWdyZWVuLTEwMDogIzEwN2Q3OTtcbiRsb29wLWdyZWVuLTUwOiAjODdiZWJjO1xuJGxvb3AtZ3JlZW4tMjU6ICNjM2RmZGQ7XG4kbG9vcC1ncmVlbi01OiAjZjNmOGY4O1xuXG4vLy8gVXNlZCBpbiBuYXZpZ2F0aW9uIGFuZCBhcyBzZWNvbmRhcnkgZWxlbWVudCBjb2xvdXJzIG9uIGJ1dHRvbnMgYW5kIGxpbmtzXG4kbG9vcC1wdXJwbGUtMTI1OiAjMjYxMDQ3O1xuJGxvb3AtcHVycGxlLTEwMDogIzMxMTM1ZTtcbiRsb29wLXB1cnBsZS03NTogIzQ2MjQ3ODtcbiRsb29wLXB1cnBsZS02MDogIzg2NmFiMDtcbiRsb29wLXB1cnBsZS01MDogIzhhN2JhMTtcbiRsb29wLXB1cnBsZS00MDogI2VhZTZmMDtcbiRsb29wLXB1cnBsZS0yNTogI2NiYzRkNztcbiRsb29wLXB1cnBsZS01OiAjZjVmM2Y3O1xuXG4vLy8gVXNlZCBhcyBiYWNrZ3JvdW5kIGZvciBkaXNhYmxlZCBsYWJlbHMgYW5kIGZpZWxkcyBhcyB3ZWxsIGFzIGZvciB0YWdzXG4kbGlnaHQtZ3JleTogI2VlZWVlZTtcblxuLy8vIEdyZXlzY2FsZVxuJGdyZXktMTAwOiAjMDAwMDAwO1xuJGdyZXktNTA6IHRyYW5zcGFyZW50aXplKCRncmV5LTEwMCwgMSAtIDAuNSk7XG4kZ3JleS0yNTogdHJhbnNwYXJlbnRpemUoJGdyZXktMTAwLCAxIC0gMC4yNSk7XG4kZ3JleS01OiB0cmFuc3BhcmVudGl6ZSgkZ3JleS0xMDAsIDEgLSAwLjA1KTtcblxuLy8vIG5vdGlmaWNhdGlvbnMsIHN0YXR1cywgY2F0ZWdvcmllc1xuLy8vIHdhcm5pbmcsIGFsZXJ0XG4kZGFuZ2VyLXJlZDogI2VlMjMyZjtcbi8vLyBvaywgYWNjZXB0ZWQsIGZpbmlzaGVkXG4keWVzLWdyZWVuOiAjMWRiMDQ2O1xuLy8vIHBlbmRpbmdcbiRsb29wLXllbGxvdzogI2VjYjMyMDtcblxuLy8vIGhpZ2hsaWdodCBjb2xvdXJzXG4kcHVycGxlLWhpZ2hsaWdodDogIzZmMDFlNTtcbiRwdXJwbGUtaGlnaGxpZ2h0LTAyNTogcmdiYSgxMTEsIDEsIDIyOSwgMC4yNSk7XG4kbG9vcC1waW5rOiAjZWY0N2EyO1xuJGxvb3AtcGluay0wMjU6IHJnYmEoMjM5LCA3MSwgMTYyLCAwLjI1KTtcbiRsaWdodC1ibHVlOiAjMjBkM2VjO1xuJGxpZ2h0LWJsdWUtMDI1OiByZ2JhKDMyLCAyMTEsIDIzNiwgMC4yNSk7XG4kbG9vcC1ibHVlOiAjMjA3MmVjO1xuJGxvb3AtYmx1ZS0wMjU6IHJnYmEoMzIsIDExNCwgMjM2LCAwLjI1KTtcbiRncmVlbi0yOiAjYzNlYzIwO1xuJGdyZWVuLTItMDI1OiByZ2JhKDE5NSwgMjM2LCAzMiwgMC4yNSk7XG4kbG9vcC1vcmFuZ2U6ICNlOTgwMjA7XG4kbG9vcC1vcmFuZ2UtMDI1OiByZ2JhKDIzMywgMTI4LCAzMiwgMC4yNSk7XG5cbi8vLyBTcGFjZXJzXG4kZ3JheS1saW5lLWNvbG9yOiAjZDZkMGRmO1xuXG4kbG9vcC1yZWQtZGFyazogI2M5MzA0ZDtcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29tbWVudC9zaW5nbGUtY29tbWVudC9zaW5nbGUtY29tbWVudC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3R5bGVzL19taXhpbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3R5bGVzL2xvb3AtZGVzaWduLXN5c3RlbS9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSx1QkFBQTtBQUpGO0FBTUU7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUpKO0FBUUk7RUFDRSxxQkFBQTtBQU5OOztBQVdBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBUkY7O0FBYUk7RUFDRSx1QkFBQTtFQUNBLHVEQUFBO0FBVk47QUFhSTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7QUFYTjtBQWFNO0VBRUUsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFaUjtBQ2FFO0VBMENJLGdCRDlDeUI7QUFOL0I7QUNnQkU7RUF3Q0ksZURsRHlCO0FBSC9CO0FDT0U7RUEwQ0ksb0JEdkN3QjtBQVA5QjtBQ1VFO0VBd0NJLG1CRDNDd0I7QUFKOUI7QUFPTTtFQUNFLGdCQUFBO0FBTFI7QUFPUTtFQUNFLG1CQUFBO0FBTFY7O0FBWUE7RUFDRSxjRWhEcUI7RUZpRHJCLGtCQUFBO0VBRUEsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBVkY7QUNkRTtFQTBDSSxZRHRCVTtBQUhoQjtBQ1hFO0VBd0NJLGFEMUJVO0FBQWhCO0FDcEJFO0VBMENJLGlCRGZvQjtBQUoxQjtBQ2pCRTtFQXdDSSxnQkRuQm9CO0FBRDFCOztBQUtBO0VBQ0UsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLHVEQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUNqQ0U7RUEwQ0ksNEJESGlCO0FBRnZCO0FDL0JFO0VBd0NJLDZCRFBpQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSxjR3hGYTtFSHlGYixXQUFBO0VBQ0EsbUJBQUE7RUFHQSxtQkFBQTtBQURKO0FDdERFO0VBMENJLHFCRFdvQjtBQUkxQjtBQ25ERTtFQXdDSSxvQkRPb0I7QUFPMUI7QUM1REU7RUEwQ0ksb0JEWW1CO0FBU3pCO0FDekRFO0VBd0NJLHFCRFFtQjtBQVl6QjtBQVJFO0VBQ0UsYUFBQTtBQVVKOztBQU5BO0VBQ0Usb0JBQUE7QUFTRjtBQVBFO0VBR0UsY0FBQTtFQUVBLG1CQUhnQjtFQUloQixrQkFBQTtBQU1KO0FDOUVFO0VBMENJLG1CRHlCWTtBQWNsQjtBQzNFRTtFQXdDSSxvQkRxQlk7QUFpQmxCO0FBVkk7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJFNUJTO0FGd0NmO0FDNUZFO0VBMENJLHVCRHVDYztBQWNwQjtBQ3pGRTtFQXdDSSx3QkRtQ2M7QUFpQnBCO0FBYk07RUFDRSxZQUFBO0FBZVI7QUFDQSw0bG1CQUE0bG1CIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcbkBpbXBvcnQgJ21peGlucyc7XG5AaW1wb3J0ICdsb29wLWRlc2lnbi1zeXN0ZW0vY29sb3JzJztcbkBpbXBvcnQgJ2xvb3AtZGVzaWduLXN5c3RlbS9oZWxwZXJzJztcblxuLmNvbW1lbnQtZW50aXR5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbiAgJl9fYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgfVxuXG4gIDo6bmctZGVlcCB7XG4gICAgLnBvc3QtYXV0aG9yIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICB9XG4gIH1cbn1cblxuLmNvbnRlbnQge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbi5jb21tZW50LWFjdGlvbnMge1xuICA6Om5nLWRlZXAge1xuICAgIGJ1dHRvbi5ieC0tYWNjb3JkaW9uX19oZWFkaW5nIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRlbnRpdHktYm9yZGVyLWNvbG9yO1xuICAgIH1cblxuICAgIC5ieC0tYWNjb3JkaW9uIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAmX19jb250ZW50IHtcbiAgICAgICAgQGluY2x1ZGUgcGFkZGluZy1yaWdodCgwKTtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgICZfX2Fycm93IHtcbiAgICAgICAgQGluY2x1ZGUgbWFyZ2luLXJpZ2h0KDEuNXJlbSk7XG4gICAgICB9XG5cbiAgICAgICZfX2l0ZW0ge1xuICAgICAgICBib3JkZXItdG9wOiBub25lO1xuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ucmVwbHktdGhyZWFkIHtcbiAgY29sb3I6ICRwb3N0LWhpZ2hsaWdodC1jb2xvcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBAaW5jbHVkZSBsZWZ0KDEuNXJlbSk7XG4gIHRvcDogMC41cmVtO1xuICB6LWluZGV4OiAxO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICBzdmcge1xuICAgIEBpbmNsdWRlIG1hcmdpbi1yaWdodCg1cHgpO1xuICB9XG59XG5cbi5jb21tZW50LXJlcGx5LWZvcm0tY29uYWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMXJlbSAxcmVtIDAgMXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRlbnRpdHktYm9yZGVyLWNvbG9yO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5uby1ibCB7XG4gIEBpbmNsdWRlIGJvcmRlci1sZWZ0KG5vbmUgIWltcG9ydGFudCk7XG59XG5cbi5zdWJjb21tZW50LWVudGl0eSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnN1YmNvbW1lbnQge1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG5cbiAgLnN1YmNvbW1lbnRfX2ljb24ge1xuICAgIGNvbG9yOiAkbG9vcC1ncmVlbi0xMDA7XG4gICAgd2lkdGg6IDFyZW07XG4gICAgbWFyZ2luLXRvcDogLTAuNXJlbTtcbiAgICBAaW5jbHVkZSBtYXJnaW4tcmlnaHQoMC43NXJlbSk7XG4gICAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoLTAuNXJlbSk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gICZfX2hlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufVxuXG4uY29tbWVudC1yZXBsaWVzIHtcbiAgbWFyZ2luLXRvcDogMC45MzhyZW07XG5cbiAgJl9fcmVwbHkge1xuICAgICRtYXJnaW4tbGVmdDogMi41cmVtO1xuICAgICRtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCRtYXJnaW4tbGVmdCk7XG4gICAgbWFyZ2luLWJvdHRvbTogJG1hcmdpbi1ib3R0b207XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBjb250ZW50OiAnICc7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSArICN7JG1hcmdpbi1ib3R0b219KTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAwLjEyNXJlbTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmV5LTI7XG4gICAgICBAaW5jbHVkZSBsZWZ0KGNhbGMoLSN7JG1hcmdpbi1sZWZ0fSAvIDIpKTtcbiAgICB9XG5cbiAgICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbkBtaXhpbiBmbGV4LWdhcCgkZ2FwLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBtYXJnaW4tdG9wOiAoLSRnYXApO1xuICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgoLSRnYXApLCAkZ2xvYmFsKTtcblxuICA+ICoge1xuICAgIG1hcmdpbi10b3A6ICRnYXA7XG4gICAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoJGdhcCwgJGdsb2JhbCk7XG4gIH1cbn1cblxuQG1peGluIGJhc2UtY29udGFpbmVyKCRjb250ZW50LXdpZHRoKSB7XG4gICRkZXNrdG9wLXBhZGRpbmc6IDJyZW07XG4gIG1heC13aWR0aDogY2FsYygjeyRjb250ZW50LXdpZHRofSArICgjeyRkZXNrdG9wLXBhZGRpbmd9KSk7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDJyZW0pIHtcbiAgICBAaW5jbHVkZSBwYWRkaW5nLWxlZnQoJGRlc2t0b3AtcGFkZGluZywgdHJ1ZSk7XG4gICAgQGluY2x1ZGUgcGFkZGluZy1yaWdodCgkZGVza3RvcC1wYWRkaW5nLCB0cnVlKTtcbiAgfVxufVxuXG5AbWl4aW4gY2VudGVyQWJzb2x1dGVFbGVtZW50IHtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcblxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuQG1peGluIG9ubHktbHRyLWdsb2JhbCB7XG4gIGh0bWw6bm90KFtkaXI9J3J0bCddKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1ydGwtZ2xvYmFsIHtcbiAgaHRtbFtkaXI9J3J0bCddICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LWx0ciB7XG4gIDpob3N0LWNvbnRleHQoaHRtbDpub3QoW2Rpcj0ncnRsJ10pKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1ydGwge1xuICA6aG9zdC1jb250ZXh0KGh0bWxbZGlyPSdydGwnXSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHJ0bC12YWx1ZSgkcHJvcGVydHksICRsdHItdmFsdWUsICRydGwtdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpZiAkZ2xvYmFsID09IHRydWUge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyLWdsb2JhbCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRsdHItdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwtZ2xvYmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHJ0bC12YWx1ZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGx0ci12YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRydGwtdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBydGwtcHJvcGVydHkoJGx0ci1wcm9wZXJ0eSwgJHJ0bC1wcm9wZXJ0eSwgJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaWYgJGdsb2JhbCA9PSB0cnVlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ci1nbG9iYWwge1xuICAgICAgI3skbHRyLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsLWdsb2JhbCB7XG4gICAgICAjeyRydGwtcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ciB7XG4gICAgICAjeyRsdHItcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwge1xuICAgICAgI3skcnRsLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWFyZ2luLWxlZnQoJG1hcmdpbiwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KG1hcmdpbi1sZWZ0LCBtYXJnaW4tcmlnaHQsICRtYXJnaW4sICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gbWFyZ2luLXJpZ2h0KCRtYXJnaW4sICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShtYXJnaW4tcmlnaHQsIG1hcmdpbi1sZWZ0LCAkbWFyZ2luLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmcoJHBhZGRpbmdUb3AsICRwYWRkaW5nUmlnaHQsICRwYWRkaW5nQm90dG9tLCAkcGFkZGluZ0xlZnQsICRnbG9iYWw6IGZhbHNlKSB7XG4gIHBhZGRpbmctdG9wOiAkcGFkZGluZ1RvcDtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctcmlnaHQsIHBhZGRpbmctbGVmdCwgJHBhZGRpbmdSaWdodCwgJGdsb2JhbCk7XG4gIHBhZGRpbmctYm90dG9tOiAkcGFkZGluZ1RvcDtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctbGVmdCwgcGFkZGluZy1yaWdodCwgJHBhZGRpbmdMZWZ0LCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmctbGVmdCgkcGFkZGluZywgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctbGVmdCwgcGFkZGluZy1yaWdodCwgJHBhZGRpbmcsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1yaWdodCgkcGFkZGluZywgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctcmlnaHQsIHBhZGRpbmctbGVmdCwgJHBhZGRpbmcsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gdGV4dC1hbGlnbi1sZWZ0KCRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZSh0ZXh0LWFsaWduLCBsZWZ0LCByaWdodCwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBsZWZ0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGxlZnQsIHJpZ2h0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcmlnaHQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocmlnaHQsIGxlZnQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiB0cmFuc2xhdGVYWSgkdmFsdWVYLCAkdmFsdWVZLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUodHJhbnNmb3JtLCB0cmFuc2xhdGUoJHZhbHVlWCwgJHZhbHVlWSksIHRyYW5zbGF0ZSgtJHZhbHVlWCwgJHZhbHVlWSksICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWxlZnQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWxlZnQsIGJvcmRlci1yaWdodCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1yaWdodCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItcmlnaHQsIGJvcmRlci1sZWZ0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMsIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItdG9wLXJpZ2h0LXJhZGl1cywgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItdG9wLWxlZnQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci10b3AtbGVmdC1yYWRpdXMsIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gZmxvYXQtbGVmdCgkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUoZmxvYXQsIGxlZnQsIHJpZ2h0LCAkZ2xvYmFsOiBmYWxzZSk7XG59XG5cbkBtaXhpbiBmbG9hdC1yaWdodCB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZShmbG9hdCwgcmlnaHQsIGxlZnQsICRnbG9iYWw6IGZhbHNlKTtcbn1cblxuQG1peGluIHNtYWxsLWRlc2t0b3Atb25seSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1sZykgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXhsIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLWFuZC10YWJsZXQtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZyAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtYWxsLW1vYmlsZS1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXMgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1tZCAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1kKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbGcpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLXVwIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1kKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGRpc2FibGUtc2Nyb2xsYmFyIHtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iLCIkc3RhbmRhcmRGb250RmFtaWx5OiAnTm90byBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4kY29udGVudC10b3AtcGFkZGluZzogM3JlbTtcbiRwb3N0LWxpc3QtYmc6ICNkYWRhZGE7XG4kd2hpdGU6ICNmZmZmZmY7XG4kcG9zdC1wcmV2aWV3LWJnOiB3aGl0ZTtcbiRsaWdodC1ncmF5LWJnOiAjZjRmNGY0O1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLWxlZnQ6IDIuMzQ0cmVtO1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLXJpZ2h0OiAxLjA2M3JlbTtcbiRwb3N0LXByZXZpZXctcGFkZGluZzogMi41cmVtICRwb3N0LXByZXZpZXctcGFkZGluZy1yaWdodCAxLjI1cmVtICRwb3N0LXByZXZpZXctcGFkZGluZy1sZWZ0O1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLW1vYmlsZTogMXJlbSAxcmVtIDAuNXJlbSAxcmVtO1xuJHBvc3QtcGFkZGluZy1ib3R0b206IDFyZW07XG4kcG9zdC1wcmV2aWV3LWd1dHRlcjogMnB4O1xuJHBvc3QtaGlnaGxpZ2h0LWNvbG9yOiAjNTcwZjg1O1xuJGNvbG9yLXB1cnBsZS05MDogIzMxMTM1ZTtcbiRjb2xvci1wdXJwbGUtNjA6ICM5ODhhYWU7XG4kY29sb3ItcHVycGxlLTUwOiAjOTg4OWFmO1xuJGNvbG9yLXB1cnBsZS0xMDogI2Y1ZjNmNztcbiRjb2xvci1wdXJwbGUtbGlnaHQ6ICM0YjM1YmM7XG4kY29sb3ItcHVycGxlLXZlcnktbGlnaHQ6ICM4NjZhYjA7XG4kY29sb3ItcHVycGxlLXN0ZXBwZXI6ICM0YTJiN2E7XG4kY29sb3ItZ3JlZW4tMTAwOiAjMDUyODA0O1xuJGNvbG9yLWdyZWVuLTkwOiAjMGQzZDBiO1xuJGNvbG9yLWdyZWVuLTgwOiAjMWY2YjFlO1xuJGNvbG9yLWdyZWVuLTcwOiAjMzU4YTM0O1xuJGNvbG9yLWdyZWVuLTYwOiAjNmQ5YTZlO1xuJGNvbG9yLWdyZWVuLTUwOiAjODlhODhmO1xuJGNvbG9yLWdyZWVuLTQwOiAjOWZjOGE2O1xuJGNvbG9yLWdyZWVuLTMwOiAjYWFkNmIzO1xuJGNvbG9yLWdyZWVuLTIwOiAjYzllOWQxO1xuJGNvbG9yLWdyZWVuLTEwOiAjZjNmN2YzO1xuJGNvbG9yLWdyZWVuLXN0ZXBwZXI6ICMxMDdENzk7XG4kY29sb3ItZ3JlZW4tbWVkaXVtOiAjYWRkYWFmO1xuJGNvbG9yLWdyZWVuLWxpZ2h0OiAjM0FCMDk4O1xuJGNvbG9yLWdyZWVuLXZlcnktbGlnaHQ6ICNFREZGRkM7XG4kZ3JleS0xOiAjZDZkMGRmO1xuJHN1cHBvcnQtMDE6ICNkYTFlMjg7XG4kZXJyb3I6ICNlZTIzMmY7XG4kdGV4dC1ibGFjazogIzE2MTYxNjtcbiR0ZXh0LXNlY29uZGFyeTogIzM5MzkzOTtcbiR0ZXh0LWdyYXllZDogIzUyNTI1MjtcbiR0ZXh0LWdyYXllZDgwOiAjOGY4YjhiO1xuJHRleHQtZ3JheS1jYXQ6ICM2ZDcyNzg7XG4kdWktYmFja2dyb3VuZC1ncmF5OiAjZjhmOGY5O1xuJGJvcmRlcjogI2U4ZTdlYTtcbiRlbnRpdHktYm9yZGVyLWNvbG9yOiAjMWMwZjMwMjE7XG4kbG9hZGluZy1iZzogcmdiKDAgMCAwIC8gMTglKTtcbiRzdXBwb3J0LTA0OiAjMDA0M2NlO1xuJGxvb3AtdXNlcm5hbWU6ICMxOTgwMzg7XG4kbG9vcC1hY3RpdmUtY3VycmVudC11c2VyOiAjMjRhMTQ4O1xuJHdhcm0tZ3JheS0xMC1jb2xvcjogI2Y3ZjNmMjtcbiR3YXJtLWdyYXktMjAtY29sb3I6ICNlNWUwZGY7XG4kaGVhZGluZy0xLWNvbG9yOiAjMWMwZjMwO1xuJGhlYWRpbmctMi1jb2xvcjogIzMyMDc0ZDtcbiRoZWFkaW5nLTMtY29sb3I6ICMyZjI3MzU7XG4kbW9iaWxlLWljb24tY29sb3I6ICMxYzBmMzA7XG4kc3RhdGUtZGlzYWJsZWQtMDI6ICNjNmM2YzY7XG4kbGluay0wMjogIzU2MDFiMjtcbiRoZWFkZXItcHVycGxlOiAjMzExMzVlO1xuJGhlYWRlci1ncmVlbjogIzEwN2Q3OTtcbiRwdXJwbGUtbGlnaHQ6ICNjYmM0ZDc7XG4kcHVycGxlLWJhY2tncm91bmQtbGlnaHQ6ICNkY2Q1ZTc7XG4kbG9vcC1pbnRlcmFjdGl2ZS0wMTogIzEwN2Q3OTtcbiRsb29wLWludGVyYWN0aXZlLTAxLW9wYWNpdHk6IHJnYmEoMTYsIDEyNSwgMTIxLCAwLjMpO1xuJGZpbHRlcnMtZ3JlZW46ICMwNTY3NjM7XG4vLyBCcmVha3BvaW50c1xuXG4kYnJlYWtwb2ludC1zOiAzNzVweDtcbiRicmVha3BvaW50LXNtOiA0MjBweDtcbiRicmVha3BvaW50LW1kOiA3NjhweDtcbiRicmVha3BvaW50LWxnOiAxMDgwcHg7XG4kYnJlYWtwb2ludC14bDogMTI3NXB4O1xuXG4kYnJlYWtwb2ludC1tZC12MjogODIwcHg7XG5cbiRoZWFkZXItaGVpZ2h0OiA0LjM3NXJlbTtcbiRoZWFkZXItaGVpZ2h0LXYyOiA0LjM3NXJlbTtcbiRzdGF0ZS1zZWxlY3RlZC11aTogI2UwZTBlMDtcbiRjLWxlZnQtcGFkZGluZzogMS41cmVtO1xuJG1lbnUtYWN0aXZlLWNvbG9yOiAjM0FCMDk4O1xuJG1lbnUtaG92ZXItY29sb3I6ICMzQUIwOTg7XG4kdGFiLWluYWN0aXZlLWNvbG9yOiAjODlhZjkzO1xuJGxpbmUtY29sb3I6ICNkMGRmZDI7XG4kYm9yZGVyLWdyYXk6ICNjY2NjY2M7XG4kdGV4dC1ncmF5OiAjODA4MDgwO1xuJGJhc2UtY29udGFpbmVyLXdpZHRoOiA4MS4xMjRyZW07XG4kaGVhZGVyLXVuZGVybGluZS1oZWlnaHQ6IDAuMzEzcmVtO1xuXG4vLyBNb2RlcmF0b3IgcmV2aWV3IHNlY3Rpb25zXG4kZm9vdGVyLWhlaWdodDogNHJlbTtcbiR0b3BiYXItaGVpZ2h0OiAxMC41cmVtO1xuJHN0ZXBwZXItaGVpZ2h0OiA2LjdyZW07XG5cbi8vIE5ldyBTdG9yeSBmbG93IC8gc3RvcnkgZGV0YWlscyB2YXJpYWJsZXNcbiRncmV5OiAjNjU2NTY1O1xuJGxpZ2h0LWdyZXktMjogI2IxYjRiNjtcbiRsaWdodC1ncmV5LTM6ICNiNGI0YjQ7XG4kbGlnaHQtZ3JleS00OiAjY2ZkM2Q4O1xuJGxpZ2h0LWdyZXktNTogI2Q5ZTBlNztcbiRsaWdodC1ncmV5LTY6ICNmMWYyZjI7XG4kbGlnaHQtZ3JleS03OiAjYzRjNGM0O1xuJGxpZ2h0LWdyZXktODogI2U5ZTllOTtcbiRsaWdodC1ncmV5LTk6ICNlNmVhZWQ7XG4kbGlnaC1ncmV5LXNlcGFyYXRvcjogI2MwYzBjMDtcbiRkYXJrLWdyZXk6ICMxYTFhMWE7XG4kZGFyay1ncmV5LTUwOiByZ2IoMjYsIDI2LCAyNiwgMC41KTtcbiRib3JkZXItZ3JleTogI2M3Y2RkNDtcbiRsaWdodC1wdXJwbGU6ICNlYWVhZWE7XG4kaW5wdXQtZGlzYWJsZWQtYmc6ICNmNGY2Zjg7XG4kZXJyb3ItMjogI2RlMjIyZDtcbiRkYW5nZXI6ICNjOTMwNGQ7XG4kcHJldmlvdXMtcGlsbC1jb2xvcjogIzcxOGQ2ZjtcbiR0b29sdGlwLWdyZXk6ICNhYmFiYWI7XG4kbGlnaHQtZ3JlZW46ICNjZmU1ZTQ2NjtcblxuJGZpbHRlcnMtbW9kYWwtaGVhZGVyLXppbmRleDogMTAwMDA7XG4kbW9kYWwtemluZGV4OiA5OTk5O1xuJGxvY2F0aW9uLW92ZXJsYXktemluZGV4OiA5MDAxO1xuJGhlYWRlci1hc2lkZS16aW5kZXg6IDgwMDI7XG4kaGVhZGVyLWFzaWRlLWJhY2tncm91bmQtemluZGV4OiA4MDAxO1xuJGhlYWRlci16aW5kZXg6IDgwMDA7XG4kbmF2aWdhdGlvbi16aW5kZXg6IDgwMDA7XG4kcGFnZS1sb2FkaW5nLXppbmRleDogNzAwMTtcbiR0b29sdGlwLXppbmRleDogNzAwMDtcbiRuZXctc3RvcnktY29udGVudC1zdGF0ZS16aW5kZXg6IDUwMDtcbiRmaWx0ZXItZHJvcGRvd24temluZGV4OiAxMDA7XG4kbW9kYWwtdG9wLWluZGljYXRvci16aW5kZXg6IDUxO1xuJG1vZGFsLXRvcC1pbmRpY2F0b3ItYmFja2dyb3VuZC16aW5kZXg6IDUxO1xuJGNoYXJ0LXppbmRleDogMTtcbiRjaGFydC1jb250cm9sLXppbmRleDogMjtcblxuJHNsaWRlLXRvZ2dsZS1kaXNhYmxlZC1vcHRpb24tYmFja2dyb3VuZDogI2RkZGRkZDtcblxuJHRvYXN0LWluZm8tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4kdG9hc3QtaW5mby10aXRsZS1jb2xvcjogIzQ5NDk0OTtcbiR0b2FzdC1pbmZvLW1lc3NhZ2UtY29sb3I6ICM0MjJjMDA7XG4kdG9hc3QtaW5mby1idXR0b24tY29sb3I6ICM2YzRlOTk7XG5cbiR0b2FzdC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6ICNkOWVlZWQ7XG4kdG9hc3Qtc3VjY2Vzcy10aXRsZS1jb2xvcjogIzAwNDU0MjtcbiR0b2FzdC1zdWNjZXNzLW1lc3NhZ2UtY29sb3I6ICMwMTMyMzA7XG4kdG9hc3Qtc3VjY2Vzcy1idXR0b24tY29sb3I6ICMwMTY5NjU7XG5cbiR0b2FzdC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6ICNmZmYxZDU7XG4kdG9hc3Qtd2FybmluZy10aXRsZS1jb2xvcjogIzZiNDcwMDtcbiR0b2FzdC13YXJuaW5nLW1lc3NhZ2UtY29sb3I6ICM0MjJjMDA7XG4kdG9hc3Qtd2FybmluZy1idXR0b24tY29sb3I6ICNjYzhmMTQ7XG5cbiR0b2FzdC1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiAjZjVkNWRiO1xuJHRvYXN0LWVycm9yLXRpdGxlLWNvbG9yOiAjNzMwMDE1O1xuJHRvYXN0LWVycm9yLW1lc3NhZ2UtY29sb3I6ICM0NTA2MTE7XG4kdG9hc3QtZXJyb3Itc3VjY2Vzcy1jb2xvcjogI2Q5ZWVlZDtcbiR0b2FzdC1lcnJvci1idXR0b24tY29sb3I6ICNiMjFkMzk7XG5cbiR0b2FzdC1jbG9zZS1idXR0b24tY29sb3I6ICM3MzAwMTU7XG4iLCIvLy8gaHR0cHM6Ly93d3cuZmlnbWEuY29tL2ZpbGUvR25tMDJxVDhsTDFYRXZ0TUZPUjZSTC9Mb29wLTIwMjEtRmVhdHVyZS1EZXZlbG9wbWVudD9ub2RlLWlkPTQlM0EzMDBcblxuLy8vIFRoaXMgaXMgdGhlIG1haW4gY29sb3VyIGZvciBhbGwgdGhlIGVsZW1lbnRzLiBJdCBpcyB1c2VkIHRvIGNyZWF0ZSBhbGwgb2YgdGhlIGlucHV0IGZpZWxkcywgZm9yIGljb25zIGV0Y1xuJGxvb3AtZ3JlZW4tMTI1OiAjMDU2NzYzO1xuJGxvb3AtZ3JlZW4tMTAwOiAjMTA3ZDc5O1xuJGxvb3AtZ3JlZW4tNTA6ICM4N2JlYmM7XG4kbG9vcC1ncmVlbi0yNTogI2MzZGZkZDtcbiRsb29wLWdyZWVuLTU6ICNmM2Y4Zjg7XG5cbi8vLyBVc2VkIGluIG5hdmlnYXRpb24gYW5kIGFzIHNlY29uZGFyeSBlbGVtZW50IGNvbG91cnMgb24gYnV0dG9ucyBhbmQgbGlua3NcbiRsb29wLXB1cnBsZS0xMjU6ICMyNjEwNDc7XG4kbG9vcC1wdXJwbGUtMTAwOiAjMzExMzVlO1xuJGxvb3AtcHVycGxlLTc1OiAjNDYyNDc4O1xuJGxvb3AtcHVycGxlLTYwOiAjODY2YWIwO1xuJGxvb3AtcHVycGxlLTUwOiAjOGE3YmExO1xuJGxvb3AtcHVycGxlLTQwOiAjZWFlNmYwO1xuJGxvb3AtcHVycGxlLTI1OiAjY2JjNGQ3O1xuJGxvb3AtcHVycGxlLTU6ICNmNWYzZjc7XG5cbi8vLyBVc2VkIGFzIGJhY2tncm91bmQgZm9yIGRpc2FibGVkIGxhYmVscyBhbmQgZmllbGRzIGFzIHdlbGwgYXMgZm9yIHRhZ3NcbiRsaWdodC1ncmV5OiAjZWVlZWVlO1xuXG4vLy8gR3JleXNjYWxlXG4kZ3JleS0xMDA6ICMwMDAwMDA7XG4kZ3JleS01MDogdHJhbnNwYXJlbnRpemUoJGdyZXktMTAwLCAxIC0gMC41KTtcbiRncmV5LTI1OiB0cmFuc3BhcmVudGl6ZSgkZ3JleS0xMDAsIDEgLSAwLjI1KTtcbiRncmV5LTU6IHRyYW5zcGFyZW50aXplKCRncmV5LTEwMCwgMSAtIDAuMDUpO1xuXG4vLy8gbm90aWZpY2F0aW9ucywgc3RhdHVzLCBjYXRlZ29yaWVzXG4vLy8gd2FybmluZywgYWxlcnRcbiRkYW5nZXItcmVkOiAjZWUyMzJmO1xuLy8vIG9rLCBhY2NlcHRlZCwgZmluaXNoZWRcbiR5ZXMtZ3JlZW46ICMxZGIwNDY7XG4vLy8gcGVuZGluZ1xuJGxvb3AteWVsbG93OiAjZWNiMzIwO1xuXG4vLy8gaGlnaGxpZ2h0IGNvbG91cnNcbiRwdXJwbGUtaGlnaGxpZ2h0OiAjNmYwMWU1O1xuJHB1cnBsZS1oaWdobGlnaHQtMDI1OiByZ2JhKDExMSwgMSwgMjI5LCAwLjI1KTtcbiRsb29wLXBpbms6ICNlZjQ3YTI7XG4kbG9vcC1waW5rLTAyNTogcmdiYSgyMzksIDcxLCAxNjIsIDAuMjUpO1xuJGxpZ2h0LWJsdWU6ICMyMGQzZWM7XG4kbGlnaHQtYmx1ZS0wMjU6IHJnYmEoMzIsIDIxMSwgMjM2LCAwLjI1KTtcbiRsb29wLWJsdWU6ICMyMDcyZWM7XG4kbG9vcC1ibHVlLTAyNTogcmdiYSgzMiwgMTE0LCAyMzYsIDAuMjUpO1xuJGdyZWVuLTI6ICNjM2VjMjA7XG4kZ3JlZW4tMi0wMjU6IHJnYmEoMTk1LCAyMzYsIDMyLCAwLjI1KTtcbiRsb29wLW9yYW5nZTogI2U5ODAyMDtcbiRsb29wLW9yYW5nZS0wMjU6IHJnYmEoMjMzLCAxMjgsIDMyLCAwLjI1KTtcblxuLy8vIFNwYWNlcnNcbiRncmF5LWxpbmUtY29sb3I6ICNkNmQwZGY7XG5cbiRsb29wLXJlZC1kYXJrOiAjYzkzMDRkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 29420:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/comment/single-comment/single-comment.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleCommentModule": () => (/* binding */ SingleCommentModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _shared_components_post_partials_post_author_date_flat_post_author_date_flat_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/components/post/partials/post-author-date-flat/post-author-date-flat.module */ 3323);
/* harmony import */ var _shared_components_post_partials_post_author_date_post_author_date_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/components/post/partials/post-author-date/post-author-date.module */ 50129);
/* harmony import */ var _shared_components_post_partials_reply_form_reply_form_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/post/partials/reply-form/reply-form.module */ 93865);
/* harmony import */ var _shared_components_upvote_upvote_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components/upvote/upvote.module */ 23312);
/* harmony import */ var _shared_icons_subdirectory_arrow_right_icon_subdirectory_arrow_right_icon_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/icons/subdirectory-arrow-right-icon/subdirectory-arrow-right-icon.module */ 51000);
/* harmony import */ var _card2_card_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../card2/card.module */ 39106);
/* harmony import */ var _single_reply_single_reply_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../single-reply/single-reply.module */ 86665);
/* harmony import */ var _single_comment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./single-comment.component */ 8879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);











class SingleCommentModule {
  static #_ = this.ɵfac = function SingleCommentModule_Factory(t) {
    return new (t || SingleCommentModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: SingleCommentModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _shared_components_post_partials_post_author_date_post_author_date_module__WEBPACK_IMPORTED_MODULE_1__.PostAuthorDateModule, _shared_components_upvote_upvote_module__WEBPACK_IMPORTED_MODULE_3__.UpvoteModule, _shared_components_post_partials_reply_form_reply_form_module__WEBPACK_IMPORTED_MODULE_2__.ReplyFormModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _shared_components_post_partials_post_author_date_flat_post_author_date_flat_module__WEBPACK_IMPORTED_MODULE_0__.PostAuthorDateFlatModule, _shared_icons_subdirectory_arrow_right_icon_subdirectory_arrow_right_icon_module__WEBPACK_IMPORTED_MODULE_4__.SubdirectoryArrowRightIconModule, _single_reply_single_reply_module__WEBPACK_IMPORTED_MODULE_6__.SingleReplyModule, _card2_card_module__WEBPACK_IMPORTED_MODULE_5__.CardModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](SingleCommentModule, {
    declarations: [_single_comment_component__WEBPACK_IMPORTED_MODULE_7__.SingleCommentComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _shared_components_post_partials_post_author_date_post_author_date_module__WEBPACK_IMPORTED_MODULE_1__.PostAuthorDateModule, _shared_components_upvote_upvote_module__WEBPACK_IMPORTED_MODULE_3__.UpvoteModule, _shared_components_post_partials_reply_form_reply_form_module__WEBPACK_IMPORTED_MODULE_2__.ReplyFormModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _shared_components_post_partials_post_author_date_flat_post_author_date_flat_module__WEBPACK_IMPORTED_MODULE_0__.PostAuthorDateFlatModule, _shared_icons_subdirectory_arrow_right_icon_subdirectory_arrow_right_icon_module__WEBPACK_IMPORTED_MODULE_4__.SubdirectoryArrowRightIconModule, _single_reply_single_reply_module__WEBPACK_IMPORTED_MODULE_6__.SingleReplyModule, _card2_card_module__WEBPACK_IMPORTED_MODULE_5__.CardModule],
    exports: [_single_comment_component__WEBPACK_IMPORTED_MODULE_7__.SingleCommentComponent]
  });
})();

/***/ }),

/***/ 84946:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/comment/single-reply/single-reply.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleReplyComponent": () => (/* binding */ SingleReplyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_shared_enums_comment_status_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/enums/comment-status.enum */ 43949);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _core_services_locales_user_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/locales/user-language.service */ 86188);
/* harmony import */ var _app_core_services_api_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/services/api/profile/profile.service */ 58230);
/* harmony import */ var _app_core_services_api_meta_data_meta_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/services/api/meta-data/meta-data.service */ 56401);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _post_partials_post_author_date_post_author_date_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../post/partials/post-author-date/post-author-date.component */ 37331);
/* harmony import */ var _post_partials_story_content_story_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../post/partials/story-content/story-content.component */ 44877);
/* harmony import */ var _post_partials_story_translations_story_translations_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../post/partials/story-translations/story-translations.component */ 99152);
/* harmony import */ var _card2_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../card2/card.component */ 58272);
/* harmony import */ var _partials_comment_actions_comment_actions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../partials/comment-actions/comment-actions.component */ 59674);
/* harmony import */ var _post_partials_post_context_menu_post_context_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../post/partials/post-context-menu/post-context-menu.component */ 73042);
/* harmony import */ var _pills_pill_pill_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pills/pill/pill.component */ 32358);
















function SingleReplyComponent_loop_post_context_menu_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "loop-post-context-menu", 10);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", ctx_r0.comment.id)("postType", "reply");
  }
}
function SingleReplyComponent_app_pill_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-pill", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 2, "comments.reply.solutionProposedTag"))("verified", true);
  }
}
function SingleReplyComponent_app_story_translations_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-story-translations", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("languageSelected", function SingleReplyComponent_app_story_translations_9_Template_app_story_translations_languageSelected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r3.handleCommentLanguageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("currentTranslationType", ctx_r2.comment.contentType)("originalLanguage", ctx_r2.comment.language)("selectedLanguage", ctx_r2.selectedContentLang)("translations", ctx_r2.comment.translations);
  }
}
class SingleReplyComponent {
  get commentContent() {
    if (this.selectedContentLang === this.userLanguageService.getLanguage()) {
      return this.comment.content;
    }
    return this.comment.translations.find(translation => translation.code === this.selectedContentLang)?.content;
  }
  constructor(cd, userLanguageService, profileService, metaDataService, translateService) {
    this.cd = cd;
    this.userLanguageService = userLanguageService;
    this.profileService = profileService;
    this.metaDataService = metaDataService;
    this.translateService = translateService;
    this.isReplyEnable = true;
    this.isUpVoteEnable = true;
    this.reply = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.upvote = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.COMMENT_STATUS = _app_shared_enums_comment_status_enum__WEBPACK_IMPORTED_MODULE_0__.COMMENT_STATUS;
  }
  ngOnInit() {
    this.selectedContentLang = this.userLanguageService.getLanguage();
  }
  handleReplyClick() {
    this.reply.emit(this.comment.id);
  }
  handleUpvoteClick() {
    this.upvote.emit(this.comment.id);
  }
  handleCommentLanguageChange($event) {
    this.selectedContentLang = $event.code;
    this.cd.markForCheck();
  }
  get thematicAreas() {
    return this.metaDataService.thematicAreas$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(thematicOptions => {
      const ids = this.comment?.thematics || [];
      const children = thematicOptions.reduce((acc, area) => [...acc, ...area.children], []);
      return children.filter(option => ids.includes(Number(option.id))).map(option => this.translateService.instant(option.code)).join(', ');
    }));
  }
  static #_ = this.ɵfac = function SingleReplyComponent_Factory(t) {
    return new (t || SingleReplyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_services_locales_user_language_service__WEBPACK_IMPORTED_MODULE_1__.UserLanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_app_core_services_api_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_app_core_services_api_meta_data_meta_data_service__WEBPACK_IMPORTED_MODULE_3__.MetaDataService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: SingleReplyComponent,
    selectors: [["app-single-reply"]],
    inputs: {
      comment: "comment",
      isReplyEnable: "isReplyEnable",
      isUpVoteEnable: "isUpVoteEnable",
      isReplyFormShown: "isReplyFormShown",
      showReply: "showReply",
      voted: "voted",
      votes: "votes"
    },
    outputs: {
      reply: "reply",
      upvote: "upvote"
    },
    decls: 12,
    vars: 13,
    consts: [[1, "single-reply"], [1, "reply-heading-container"], [1, "post-author-date", 3, "postData"], [3, "id", "postType", 4, "ngIf"], ["variant", "new", "theme", "green", 3, "text", "verified", 4, "ngIf"], [1, "post__content", "d-block", "mb-1438", 3, "content"], [1, "thematic_tags"], ["class", "post__translations d-block mb-125", 3, "currentTranslationType", "originalLanguage", "selectedLanguage", "translations", "languageSelected", 4, "ngIf"], [1, "post__section-separator"], [1, "d-block", "mt-1125", 3, "isReplyEnable", "isUpVoteEnable", "isReplyFormShown", "voted", "votes", "replyClick", "upvoteClick"], [3, "id", "postType"], ["variant", "new", "theme", "green", 3, "text", "verified"], [1, "post__translations", "d-block", "mb-125", 3, "currentTranslationType", "originalLanguage", "selectedLanguage", "translations", "languageSelected"]],
    template: function SingleReplyComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "loop-card", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "app-post-author-date", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, SingleReplyComponent_loop_post_context_menu_3_Template, 1, 2, "loop-post-context-menu", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, SingleReplyComponent_app_pill_4_Template, 2, 4, "app-pill", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "app-story-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, SingleReplyComponent_app_story_translations_9_Template, 1, 4, "app-story-translations", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "app-comment-actions", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("replyClick", function SingleReplyComponent_Template_app_comment_actions_replyClick_11_listener() {
          return ctx.handleReplyClick();
        })("upvoteClick", function SingleReplyComponent_Template_app_comment_actions_upvoteClick_11_listener() {
          return ctx.handleUpvoteClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("postData", ctx.comment);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.comment && ctx.profileService.isAdmin && ctx.comment.status !== ctx.COMMENT_STATUS.PENDING_REVIEW);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.comment.solution_proposed);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("content", ctx.commentContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Thematic Tags: ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](8, 11, ctx.thematicAreas), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.comment.translations && ctx.comment.translations.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("isReplyEnable", ctx.isReplyEnable)("isUpVoteEnable", ctx.isUpVoteEnable)("isReplyFormShown", ctx.isReplyFormShown)("voted", ctx.voted)("votes", ctx.votes);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _post_partials_post_author_date_post_author_date_component__WEBPACK_IMPORTED_MODULE_4__.PostAuthorDateComponent, _post_partials_story_content_story_content_component__WEBPACK_IMPORTED_MODULE_5__.StoryContentComponent, _post_partials_story_translations_story_translations_component__WEBPACK_IMPORTED_MODULE_6__.StoryTranslationsComponent, _card2_card_component__WEBPACK_IMPORTED_MODULE_7__.CardComponent, _partials_comment_actions_comment_actions_component__WEBPACK_IMPORTED_MODULE_8__.CommentActionsComponent, _post_partials_post_context_menu_post_context_menu_component__WEBPACK_IMPORTED_MODULE_9__.PostContextMenuComponent, _pills_pill_pill_component__WEBPACK_IMPORTED_MODULE_10__.PillComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe],
    styles: [".single-reply[_ngcontent-%COMP%]     .card {\n  padding-bottom: 1.25rem;\n}\n.single-reply[_ngcontent-%COMP%]   .reply-heading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.single-reply[_ngcontent-%COMP%]   .thematic_tags[_ngcontent-%COMP%] {\n  color: #656565;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmdsZS1yZXBseS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUk7RUFDRSx1QkFBQTtBQVBOO0FBV0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQVRKO0FBV0U7RUFDRSxjQzBFRztFRHpFSCxnQkFBQTtBQVRKIiwiZmlsZSI6InNpbmdsZS1yZXBseS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2xvb3AtZGVzaWduLXN5c3RlbS9jb2xvcnMnO1xuQGltcG9ydCAnbG9vcC1kZXNpZ24tc3lzdGVtL2hlbHBlcnMnO1xuQGltcG9ydCAndmFyaWFibGVzJztcbkBpbXBvcnQgJ21peGlucyc7XG5AaW1wb3J0ICdsb29wLWRlc2lnbi1zeXN0ZW0vaGVscGVycyc7XG5cbi5zaW5nbGUtcmVwbHkge1xuICA6Om5nLWRlZXAge1xuICAgIC5jYXJkIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xuICAgIH1cbiAgfVxuXG4gIC5yZXBseS1oZWFkaW5nLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIH1cbiAgLnRoZW1hdGljX3RhZ3Mge1xuICAgIGNvbG9yOiAkZ3JleTtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG59XG4iLCIkc3RhbmRhcmRGb250RmFtaWx5OiAnTm90byBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4kY29udGVudC10b3AtcGFkZGluZzogM3JlbTtcbiRwb3N0LWxpc3QtYmc6ICNkYWRhZGE7XG4kd2hpdGU6ICNmZmZmZmY7XG4kcG9zdC1wcmV2aWV3LWJnOiB3aGl0ZTtcbiRsaWdodC1ncmF5LWJnOiAjZjRmNGY0O1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLWxlZnQ6IDIuMzQ0cmVtO1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLXJpZ2h0OiAxLjA2M3JlbTtcbiRwb3N0LXByZXZpZXctcGFkZGluZzogMi41cmVtICRwb3N0LXByZXZpZXctcGFkZGluZy1yaWdodCAxLjI1cmVtICRwb3N0LXByZXZpZXctcGFkZGluZy1sZWZ0O1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLW1vYmlsZTogMXJlbSAxcmVtIDAuNXJlbSAxcmVtO1xuJHBvc3QtcGFkZGluZy1ib3R0b206IDFyZW07XG4kcG9zdC1wcmV2aWV3LWd1dHRlcjogMnB4O1xuJHBvc3QtaGlnaGxpZ2h0LWNvbG9yOiAjNTcwZjg1O1xuJGNvbG9yLXB1cnBsZS05MDogIzMxMTM1ZTtcbiRjb2xvci1wdXJwbGUtNjA6ICM5ODhhYWU7XG4kY29sb3ItcHVycGxlLTUwOiAjOTg4OWFmO1xuJGNvbG9yLXB1cnBsZS0xMDogI2Y1ZjNmNztcbiRjb2xvci1wdXJwbGUtbGlnaHQ6ICM0YjM1YmM7XG4kY29sb3ItcHVycGxlLXZlcnktbGlnaHQ6ICM4NjZhYjA7XG4kY29sb3ItcHVycGxlLXN0ZXBwZXI6ICM0YTJiN2E7XG4kY29sb3ItZ3JlZW4tMTAwOiAjMDUyODA0O1xuJGNvbG9yLWdyZWVuLTkwOiAjMGQzZDBiO1xuJGNvbG9yLWdyZWVuLTgwOiAjMWY2YjFlO1xuJGNvbG9yLWdyZWVuLTcwOiAjMzU4YTM0O1xuJGNvbG9yLWdyZWVuLTYwOiAjNmQ5YTZlO1xuJGNvbG9yLWdyZWVuLTUwOiAjODlhODhmO1xuJGNvbG9yLWdyZWVuLTQwOiAjOWZjOGE2O1xuJGNvbG9yLWdyZWVuLTMwOiAjYWFkNmIzO1xuJGNvbG9yLWdyZWVuLTIwOiAjYzllOWQxO1xuJGNvbG9yLWdyZWVuLTEwOiAjZjNmN2YzO1xuJGNvbG9yLWdyZWVuLXN0ZXBwZXI6ICMxMDdENzk7XG4kY29sb3ItZ3JlZW4tbWVkaXVtOiAjYWRkYWFmO1xuJGNvbG9yLWdyZWVuLWxpZ2h0OiAjM0FCMDk4O1xuJGNvbG9yLWdyZWVuLXZlcnktbGlnaHQ6ICNFREZGRkM7XG4kZ3JleS0xOiAjZDZkMGRmO1xuJHN1cHBvcnQtMDE6ICNkYTFlMjg7XG4kZXJyb3I6ICNlZTIzMmY7XG4kdGV4dC1ibGFjazogIzE2MTYxNjtcbiR0ZXh0LXNlY29uZGFyeTogIzM5MzkzOTtcbiR0ZXh0LWdyYXllZDogIzUyNTI1MjtcbiR0ZXh0LWdyYXllZDgwOiAjOGY4YjhiO1xuJHRleHQtZ3JheS1jYXQ6ICM2ZDcyNzg7XG4kdWktYmFja2dyb3VuZC1ncmF5OiAjZjhmOGY5O1xuJGJvcmRlcjogI2U4ZTdlYTtcbiRlbnRpdHktYm9yZGVyLWNvbG9yOiAjMWMwZjMwMjE7XG4kbG9hZGluZy1iZzogcmdiKDAgMCAwIC8gMTglKTtcbiRzdXBwb3J0LTA0OiAjMDA0M2NlO1xuJGxvb3AtdXNlcm5hbWU6ICMxOTgwMzg7XG4kbG9vcC1hY3RpdmUtY3VycmVudC11c2VyOiAjMjRhMTQ4O1xuJHdhcm0tZ3JheS0xMC1jb2xvcjogI2Y3ZjNmMjtcbiR3YXJtLWdyYXktMjAtY29sb3I6ICNlNWUwZGY7XG4kaGVhZGluZy0xLWNvbG9yOiAjMWMwZjMwO1xuJGhlYWRpbmctMi1jb2xvcjogIzMyMDc0ZDtcbiRoZWFkaW5nLTMtY29sb3I6ICMyZjI3MzU7XG4kbW9iaWxlLWljb24tY29sb3I6ICMxYzBmMzA7XG4kc3RhdGUtZGlzYWJsZWQtMDI6ICNjNmM2YzY7XG4kbGluay0wMjogIzU2MDFiMjtcbiRoZWFkZXItcHVycGxlOiAjMzExMzVlO1xuJGhlYWRlci1ncmVlbjogIzEwN2Q3OTtcbiRwdXJwbGUtbGlnaHQ6ICNjYmM0ZDc7XG4kcHVycGxlLWJhY2tncm91bmQtbGlnaHQ6ICNkY2Q1ZTc7XG4kbG9vcC1pbnRlcmFjdGl2ZS0wMTogIzEwN2Q3OTtcbiRsb29wLWludGVyYWN0aXZlLTAxLW9wYWNpdHk6IHJnYmEoMTYsIDEyNSwgMTIxLCAwLjMpO1xuJGZpbHRlcnMtZ3JlZW46ICMwNTY3NjM7XG4vLyBCcmVha3BvaW50c1xuXG4kYnJlYWtwb2ludC1zOiAzNzVweDtcbiRicmVha3BvaW50LXNtOiA0MjBweDtcbiRicmVha3BvaW50LW1kOiA3NjhweDtcbiRicmVha3BvaW50LWxnOiAxMDgwcHg7XG4kYnJlYWtwb2ludC14bDogMTI3NXB4O1xuXG4kYnJlYWtwb2ludC1tZC12MjogODIwcHg7XG5cbiRoZWFkZXItaGVpZ2h0OiA0LjM3NXJlbTtcbiRoZWFkZXItaGVpZ2h0LXYyOiA0LjM3NXJlbTtcbiRzdGF0ZS1zZWxlY3RlZC11aTogI2UwZTBlMDtcbiRjLWxlZnQtcGFkZGluZzogMS41cmVtO1xuJG1lbnUtYWN0aXZlLWNvbG9yOiAjM0FCMDk4O1xuJG1lbnUtaG92ZXItY29sb3I6ICMzQUIwOTg7XG4kdGFiLWluYWN0aXZlLWNvbG9yOiAjODlhZjkzO1xuJGxpbmUtY29sb3I6ICNkMGRmZDI7XG4kYm9yZGVyLWdyYXk6ICNjY2NjY2M7XG4kdGV4dC1ncmF5OiAjODA4MDgwO1xuJGJhc2UtY29udGFpbmVyLXdpZHRoOiA4MS4xMjRyZW07XG4kaGVhZGVyLXVuZGVybGluZS1oZWlnaHQ6IDAuMzEzcmVtO1xuXG4vLyBNb2RlcmF0b3IgcmV2aWV3IHNlY3Rpb25zXG4kZm9vdGVyLWhlaWdodDogNHJlbTtcbiR0b3BiYXItaGVpZ2h0OiAxMC41cmVtO1xuJHN0ZXBwZXItaGVpZ2h0OiA2LjdyZW07XG5cbi8vIE5ldyBTdG9yeSBmbG93IC8gc3RvcnkgZGV0YWlscyB2YXJpYWJsZXNcbiRncmV5OiAjNjU2NTY1O1xuJGxpZ2h0LWdyZXktMjogI2IxYjRiNjtcbiRsaWdodC1ncmV5LTM6ICNiNGI0YjQ7XG4kbGlnaHQtZ3JleS00OiAjY2ZkM2Q4O1xuJGxpZ2h0LWdyZXktNTogI2Q5ZTBlNztcbiRsaWdodC1ncmV5LTY6ICNmMWYyZjI7XG4kbGlnaHQtZ3JleS03OiAjYzRjNGM0O1xuJGxpZ2h0LWdyZXktODogI2U5ZTllOTtcbiRsaWdodC1ncmV5LTk6ICNlNmVhZWQ7XG4kbGlnaC1ncmV5LXNlcGFyYXRvcjogI2MwYzBjMDtcbiRkYXJrLWdyZXk6ICMxYTFhMWE7XG4kZGFyay1ncmV5LTUwOiByZ2IoMjYsIDI2LCAyNiwgMC41KTtcbiRib3JkZXItZ3JleTogI2M3Y2RkNDtcbiRsaWdodC1wdXJwbGU6ICNlYWVhZWE7XG4kaW5wdXQtZGlzYWJsZWQtYmc6ICNmNGY2Zjg7XG4kZXJyb3ItMjogI2RlMjIyZDtcbiRkYW5nZXI6ICNjOTMwNGQ7XG4kcHJldmlvdXMtcGlsbC1jb2xvcjogIzcxOGQ2ZjtcbiR0b29sdGlwLWdyZXk6ICNhYmFiYWI7XG4kbGlnaHQtZ3JlZW46ICNjZmU1ZTQ2NjtcblxuJGZpbHRlcnMtbW9kYWwtaGVhZGVyLXppbmRleDogMTAwMDA7XG4kbW9kYWwtemluZGV4OiA5OTk5O1xuJGxvY2F0aW9uLW92ZXJsYXktemluZGV4OiA5MDAxO1xuJGhlYWRlci1hc2lkZS16aW5kZXg6IDgwMDI7XG4kaGVhZGVyLWFzaWRlLWJhY2tncm91bmQtemluZGV4OiA4MDAxO1xuJGhlYWRlci16aW5kZXg6IDgwMDA7XG4kbmF2aWdhdGlvbi16aW5kZXg6IDgwMDA7XG4kcGFnZS1sb2FkaW5nLXppbmRleDogNzAwMTtcbiR0b29sdGlwLXppbmRleDogNzAwMDtcbiRuZXctc3RvcnktY29udGVudC1zdGF0ZS16aW5kZXg6IDUwMDtcbiRmaWx0ZXItZHJvcGRvd24temluZGV4OiAxMDA7XG4kbW9kYWwtdG9wLWluZGljYXRvci16aW5kZXg6IDUxO1xuJG1vZGFsLXRvcC1pbmRpY2F0b3ItYmFja2dyb3VuZC16aW5kZXg6IDUxO1xuJGNoYXJ0LXppbmRleDogMTtcbiRjaGFydC1jb250cm9sLXppbmRleDogMjtcblxuJHNsaWRlLXRvZ2dsZS1kaXNhYmxlZC1vcHRpb24tYmFja2dyb3VuZDogI2RkZGRkZDtcblxuJHRvYXN0LWluZm8tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4kdG9hc3QtaW5mby10aXRsZS1jb2xvcjogIzQ5NDk0OTtcbiR0b2FzdC1pbmZvLW1lc3NhZ2UtY29sb3I6ICM0MjJjMDA7XG4kdG9hc3QtaW5mby1idXR0b24tY29sb3I6ICM2YzRlOTk7XG5cbiR0b2FzdC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6ICNkOWVlZWQ7XG4kdG9hc3Qtc3VjY2Vzcy10aXRsZS1jb2xvcjogIzAwNDU0MjtcbiR0b2FzdC1zdWNjZXNzLW1lc3NhZ2UtY29sb3I6ICMwMTMyMzA7XG4kdG9hc3Qtc3VjY2Vzcy1idXR0b24tY29sb3I6ICMwMTY5NjU7XG5cbiR0b2FzdC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6ICNmZmYxZDU7XG4kdG9hc3Qtd2FybmluZy10aXRsZS1jb2xvcjogIzZiNDcwMDtcbiR0b2FzdC13YXJuaW5nLW1lc3NhZ2UtY29sb3I6ICM0MjJjMDA7XG4kdG9hc3Qtd2FybmluZy1idXR0b24tY29sb3I6ICNjYzhmMTQ7XG5cbiR0b2FzdC1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiAjZjVkNWRiO1xuJHRvYXN0LWVycm9yLXRpdGxlLWNvbG9yOiAjNzMwMDE1O1xuJHRvYXN0LWVycm9yLW1lc3NhZ2UtY29sb3I6ICM0NTA2MTE7XG4kdG9hc3QtZXJyb3Itc3VjY2Vzcy1jb2xvcjogI2Q5ZWVlZDtcbiR0b2FzdC1lcnJvci1idXR0b24tY29sb3I6ICNiMjFkMzk7XG5cbiR0b2FzdC1jbG9zZS1idXR0b24tY29sb3I6ICM3MzAwMTU7XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29tbWVudC9zaW5nbGUtcmVwbHkvc2luZ2xlLXJlcGx5LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFJO0VBQ0UsdUJBQUE7QUFQTjtBQVdFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUFUSjtBQVdFO0VBQ0UsY0MwRUc7RUR6RUgsZ0JBQUE7QUFUSjtBQUNBLHdxTkFBd3FOIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnbG9vcC1kZXNpZ24tc3lzdGVtL2NvbG9ycyc7XG5AaW1wb3J0ICdsb29wLWRlc2lnbi1zeXN0ZW0vaGVscGVycyc7XG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuQGltcG9ydCAnbWl4aW5zJztcbkBpbXBvcnQgJ2xvb3AtZGVzaWduLXN5c3RlbS9oZWxwZXJzJztcblxuLnNpbmdsZS1yZXBseSB7XG4gIDo6bmctZGVlcCB7XG4gICAgLmNhcmQge1xuICAgICAgcGFkZGluZy1ib3R0b206IDEuMjVyZW07XG4gICAgfVxuICB9XG5cbiAgLnJlcGx5LWhlYWRpbmctY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxuICAudGhlbWF0aWNfdGFncyB7XG4gICAgY29sb3I6ICRncmV5O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIH1cbn1cbiIsIiRzdGFuZGFyZEZvbnRGYW1pbHk6ICdOb3RvIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRjb250ZW50LXRvcC1wYWRkaW5nOiAzcmVtO1xuJHBvc3QtbGlzdC1iZzogI2RhZGFkYTtcbiR3aGl0ZTogI2ZmZmZmZjtcbiRwb3N0LXByZXZpZXctYmc6IHdoaXRlO1xuJGxpZ2h0LWdyYXktYmc6ICNmNGY0ZjQ7XG4kcG9zdC1wcmV2aWV3LXBhZGRpbmctbGVmdDogMi4zNDRyZW07XG4kcG9zdC1wcmV2aWV3LXBhZGRpbmctcmlnaHQ6IDEuMDYzcmVtO1xuJHBvc3QtcHJldmlldy1wYWRkaW5nOiAyLjVyZW0gJHBvc3QtcHJldmlldy1wYWRkaW5nLXJpZ2h0IDEuMjVyZW0gJHBvc3QtcHJldmlldy1wYWRkaW5nLWxlZnQ7XG4kcG9zdC1wcmV2aWV3LXBhZGRpbmctbW9iaWxlOiAxcmVtIDFyZW0gMC41cmVtIDFyZW07XG4kcG9zdC1wYWRkaW5nLWJvdHRvbTogMXJlbTtcbiRwb3N0LXByZXZpZXctZ3V0dGVyOiAycHg7XG4kcG9zdC1oaWdobGlnaHQtY29sb3I6ICM1NzBmODU7XG4kY29sb3ItcHVycGxlLTkwOiAjMzExMzVlO1xuJGNvbG9yLXB1cnBsZS02MDogIzk4OGFhZTtcbiRjb2xvci1wdXJwbGUtNTA6ICM5ODg5YWY7XG4kY29sb3ItcHVycGxlLTEwOiAjZjVmM2Y3O1xuJGNvbG9yLXB1cnBsZS1saWdodDogIzRiMzViYztcbiRjb2xvci1wdXJwbGUtdmVyeS1saWdodDogIzg2NmFiMDtcbiRjb2xvci1wdXJwbGUtc3RlcHBlcjogIzRhMmI3YTtcbiRjb2xvci1ncmVlbi0xMDA6ICMwNTI4MDQ7XG4kY29sb3ItZ3JlZW4tOTA6ICMwZDNkMGI7XG4kY29sb3ItZ3JlZW4tODA6ICMxZjZiMWU7XG4kY29sb3ItZ3JlZW4tNzA6ICMzNThhMzQ7XG4kY29sb3ItZ3JlZW4tNjA6ICM2ZDlhNmU7XG4kY29sb3ItZ3JlZW4tNTA6ICM4OWE4OGY7XG4kY29sb3ItZ3JlZW4tNDA6ICM5ZmM4YTY7XG4kY29sb3ItZ3JlZW4tMzA6ICNhYWQ2YjM7XG4kY29sb3ItZ3JlZW4tMjA6ICNjOWU5ZDE7XG4kY29sb3ItZ3JlZW4tMTA6ICNmM2Y3ZjM7XG4kY29sb3ItZ3JlZW4tc3RlcHBlcjogIzEwN0Q3OTtcbiRjb2xvci1ncmVlbi1tZWRpdW06ICNhZGRhYWY7XG4kY29sb3ItZ3JlZW4tbGlnaHQ6ICMzQUIwOTg7XG4kY29sb3ItZ3JlZW4tdmVyeS1saWdodDogI0VERkZGQztcbiRncmV5LTE6ICNkNmQwZGY7XG4kc3VwcG9ydC0wMTogI2RhMWUyODtcbiRlcnJvcjogI2VlMjMyZjtcbiR0ZXh0LWJsYWNrOiAjMTYxNjE2O1xuJHRleHQtc2Vjb25kYXJ5OiAjMzkzOTM5O1xuJHRleHQtZ3JheWVkOiAjNTI1MjUyO1xuJHRleHQtZ3JheWVkODA6ICM4ZjhiOGI7XG4kdGV4dC1ncmF5LWNhdDogIzZkNzI3ODtcbiR1aS1iYWNrZ3JvdW5kLWdyYXk6ICNmOGY4Zjk7XG4kYm9yZGVyOiAjZThlN2VhO1xuJGVudGl0eS1ib3JkZXItY29sb3I6ICMxYzBmMzAyMTtcbiRsb2FkaW5nLWJnOiByZ2IoMCAwIDAgLyAxOCUpO1xuJHN1cHBvcnQtMDQ6ICMwMDQzY2U7XG4kbG9vcC11c2VybmFtZTogIzE5ODAzODtcbiRsb29wLWFjdGl2ZS1jdXJyZW50LXVzZXI6ICMyNGExNDg7XG4kd2FybS1ncmF5LTEwLWNvbG9yOiAjZjdmM2YyO1xuJHdhcm0tZ3JheS0yMC1jb2xvcjogI2U1ZTBkZjtcbiRoZWFkaW5nLTEtY29sb3I6ICMxYzBmMzA7XG4kaGVhZGluZy0yLWNvbG9yOiAjMzIwNzRkO1xuJGhlYWRpbmctMy1jb2xvcjogIzJmMjczNTtcbiRtb2JpbGUtaWNvbi1jb2xvcjogIzFjMGYzMDtcbiRzdGF0ZS1kaXNhYmxlZC0wMjogI2M2YzZjNjtcbiRsaW5rLTAyOiAjNTYwMWIyO1xuJGhlYWRlci1wdXJwbGU6ICMzMTEzNWU7XG4kaGVhZGVyLWdyZWVuOiAjMTA3ZDc5O1xuJHB1cnBsZS1saWdodDogI2NiYzRkNztcbiRwdXJwbGUtYmFja2dyb3VuZC1saWdodDogI2RjZDVlNztcbiRsb29wLWludGVyYWN0aXZlLTAxOiAjMTA3ZDc5O1xuJGxvb3AtaW50ZXJhY3RpdmUtMDEtb3BhY2l0eTogcmdiYSgxNiwgMTI1LCAxMjEsIDAuMyk7XG4kZmlsdGVycy1ncmVlbjogIzA1Njc2Mztcbi8vIEJyZWFrcG9pbnRzXG5cbiRicmVha3BvaW50LXM6IDM3NXB4O1xuJGJyZWFrcG9pbnQtc206IDQyMHB4O1xuJGJyZWFrcG9pbnQtbWQ6IDc2OHB4O1xuJGJyZWFrcG9pbnQtbGc6IDEwODBweDtcbiRicmVha3BvaW50LXhsOiAxMjc1cHg7XG5cbiRicmVha3BvaW50LW1kLXYyOiA4MjBweDtcblxuJGhlYWRlci1oZWlnaHQ6IDQuMzc1cmVtO1xuJGhlYWRlci1oZWlnaHQtdjI6IDQuMzc1cmVtO1xuJHN0YXRlLXNlbGVjdGVkLXVpOiAjZTBlMGUwO1xuJGMtbGVmdC1wYWRkaW5nOiAxLjVyZW07XG4kbWVudS1hY3RpdmUtY29sb3I6ICMzQUIwOTg7XG4kbWVudS1ob3Zlci1jb2xvcjogIzNBQjA5ODtcbiR0YWItaW5hY3RpdmUtY29sb3I6ICM4OWFmOTM7XG4kbGluZS1jb2xvcjogI2QwZGZkMjtcbiRib3JkZXItZ3JheTogI2NjY2NjYztcbiR0ZXh0LWdyYXk6ICM4MDgwODA7XG4kYmFzZS1jb250YWluZXItd2lkdGg6IDgxLjEyNHJlbTtcbiRoZWFkZXItdW5kZXJsaW5lLWhlaWdodDogMC4zMTNyZW07XG5cbi8vIE1vZGVyYXRvciByZXZpZXcgc2VjdGlvbnNcbiRmb290ZXItaGVpZ2h0OiA0cmVtO1xuJHRvcGJhci1oZWlnaHQ6IDEwLjVyZW07XG4kc3RlcHBlci1oZWlnaHQ6IDYuN3JlbTtcblxuLy8gTmV3IFN0b3J5IGZsb3cgLyBzdG9yeSBkZXRhaWxzIHZhcmlhYmxlc1xuJGdyZXk6ICM2NTY1NjU7XG4kbGlnaHQtZ3JleS0yOiAjYjFiNGI2O1xuJGxpZ2h0LWdyZXktMzogI2I0YjRiNDtcbiRsaWdodC1ncmV5LTQ6ICNjZmQzZDg7XG4kbGlnaHQtZ3JleS01OiAjZDllMGU3O1xuJGxpZ2h0LWdyZXktNjogI2YxZjJmMjtcbiRsaWdodC1ncmV5LTc6ICNjNGM0YzQ7XG4kbGlnaHQtZ3JleS04OiAjZTllOWU5O1xuJGxpZ2h0LWdyZXktOTogI2U2ZWFlZDtcbiRsaWdoLWdyZXktc2VwYXJhdG9yOiAjYzBjMGMwO1xuJGRhcmstZ3JleTogIzFhMWExYTtcbiRkYXJrLWdyZXktNTA6IHJnYigyNiwgMjYsIDI2LCAwLjUpO1xuJGJvcmRlci1ncmV5OiAjYzdjZGQ0O1xuJGxpZ2h0LXB1cnBsZTogI2VhZWFlYTtcbiRpbnB1dC1kaXNhYmxlZC1iZzogI2Y0ZjZmODtcbiRlcnJvci0yOiAjZGUyMjJkO1xuJGRhbmdlcjogI2M5MzA0ZDtcbiRwcmV2aW91cy1waWxsLWNvbG9yOiAjNzE4ZDZmO1xuJHRvb2x0aXAtZ3JleTogI2FiYWJhYjtcbiRsaWdodC1ncmVlbjogI2NmZTVlNDY2O1xuXG4kZmlsdGVycy1tb2RhbC1oZWFkZXItemluZGV4OiAxMDAwMDtcbiRtb2RhbC16aW5kZXg6IDk5OTk7XG4kbG9jYXRpb24tb3ZlcmxheS16aW5kZXg6IDkwMDE7XG4kaGVhZGVyLWFzaWRlLXppbmRleDogODAwMjtcbiRoZWFkZXItYXNpZGUtYmFja2dyb3VuZC16aW5kZXg6IDgwMDE7XG4kaGVhZGVyLXppbmRleDogODAwMDtcbiRuYXZpZ2F0aW9uLXppbmRleDogODAwMDtcbiRwYWdlLWxvYWRpbmctemluZGV4OiA3MDAxO1xuJHRvb2x0aXAtemluZGV4OiA3MDAwO1xuJG5ldy1zdG9yeS1jb250ZW50LXN0YXRlLXppbmRleDogNTAwO1xuJGZpbHRlci1kcm9wZG93bi16aW5kZXg6IDEwMDtcbiRtb2RhbC10b3AtaW5kaWNhdG9yLXppbmRleDogNTE7XG4kbW9kYWwtdG9wLWluZGljYXRvci1iYWNrZ3JvdW5kLXppbmRleDogNTE7XG4kY2hhcnQtemluZGV4OiAxO1xuJGNoYXJ0LWNvbnRyb2wtemluZGV4OiAyO1xuXG4kc2xpZGUtdG9nZ2xlLWRpc2FibGVkLW9wdGlvbi1iYWNrZ3JvdW5kOiAjZGRkZGRkO1xuXG4kdG9hc3QtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiR0b2FzdC1pbmZvLXRpdGxlLWNvbG9yOiAjNDk0OTQ5O1xuJHRvYXN0LWluZm8tbWVzc2FnZS1jb2xvcjogIzQyMmMwMDtcbiR0b2FzdC1pbmZvLWJ1dHRvbi1jb2xvcjogIzZjNGU5OTtcblxuJHRvYXN0LXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogI2Q5ZWVlZDtcbiR0b2FzdC1zdWNjZXNzLXRpdGxlLWNvbG9yOiAjMDA0NTQyO1xuJHRvYXN0LXN1Y2Nlc3MtbWVzc2FnZS1jb2xvcjogIzAxMzIzMDtcbiR0b2FzdC1zdWNjZXNzLWJ1dHRvbi1jb2xvcjogIzAxNjk2NTtcblxuJHRvYXN0LXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogI2ZmZjFkNTtcbiR0b2FzdC13YXJuaW5nLXRpdGxlLWNvbG9yOiAjNmI0NzAwO1xuJHRvYXN0LXdhcm5pbmctbWVzc2FnZS1jb2xvcjogIzQyMmMwMDtcbiR0b2FzdC13YXJuaW5nLWJ1dHRvbi1jb2xvcjogI2NjOGYxNDtcblxuJHRvYXN0LWVycm9yLWJhY2tncm91bmQtY29sb3I6ICNmNWQ1ZGI7XG4kdG9hc3QtZXJyb3ItdGl0bGUtY29sb3I6ICM3MzAwMTU7XG4kdG9hc3QtZXJyb3ItbWVzc2FnZS1jb2xvcjogIzQ1MDYxMTtcbiR0b2FzdC1lcnJvci1zdWNjZXNzLWNvbG9yOiAjZDllZWVkO1xuJHRvYXN0LWVycm9yLWJ1dHRvbi1jb2xvcjogI2IyMWQzOTtcblxuJHRvYXN0LWNsb3NlLWJ1dHRvbi1jb2xvcjogIzczMDAxNTtcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 86665:
/*!*******************************************************************************!*\
  !*** ./src/app/shared/components/comment/single-reply/single-reply.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleReplyModule": () => (/* binding */ SingleReplyModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _app_shared_components_post_partials_post_context_menu_post_context_menu_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/components/post/partials/post-context-menu/post-context-menu.module */ 4168);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _shared_components_button_button_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/components/button/button.module */ 82024);
/* harmony import */ var _shared_components_post_partials_post_author_date_flat_post_author_date_flat_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/post/partials/post-author-date-flat/post-author-date-flat.module */ 3323);
/* harmony import */ var _shared_components_story_card_story_card_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components/story-card/story-card.module */ 63332);
/* harmony import */ var _shared_components_upvote_upvote_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/components/upvote/upvote.module */ 23312);
/* harmony import */ var _shared_icons_reply_icon_reply_icon_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/icons/reply-icon/reply-icon.module */ 64891);
/* harmony import */ var _card2_card_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../card2/card.module */ 39106);
/* harmony import */ var _pills_pills_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pills/pills.module */ 68401);
/* harmony import */ var _post_partials_post_author_date_post_author_date_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../post/partials/post-author-date/post-author-date.module */ 50129);
/* harmony import */ var _post_partials_story_content_story_content_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../post/partials/story-content/story-content.module */ 26147);
/* harmony import */ var _post_partials_story_translations_story_translations_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../post/partials/story-translations/story-translations.module */ 15864);
/* harmony import */ var _partials_comment_actions_comment_actions_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../partials/comment-actions/comment-actions.module */ 82666);
/* harmony import */ var _single_reply_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./single-reply.component */ 84946);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
















class SingleReplyModule {
  static #_ = this.ɵfac = function SingleReplyModule_Factory(t) {
    return new (t || SingleReplyModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
    type: SingleReplyModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _shared_components_post_partials_post_author_date_flat_post_author_date_flat_module__WEBPACK_IMPORTED_MODULE_2__.PostAuthorDateFlatModule, _shared_components_button_button_module__WEBPACK_IMPORTED_MODULE_1__.ButtonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule, _shared_components_upvote_upvote_module__WEBPACK_IMPORTED_MODULE_4__.UpvoteModule, _shared_icons_reply_icon_reply_icon_module__WEBPACK_IMPORTED_MODULE_5__.ReplyIconModule, _shared_components_story_card_story_card_module__WEBPACK_IMPORTED_MODULE_3__.StoryCardModule, _post_partials_post_author_date_post_author_date_module__WEBPACK_IMPORTED_MODULE_8__.PostAuthorDateModule, _post_partials_story_content_story_content_module__WEBPACK_IMPORTED_MODULE_9__.StoryContentModule, _post_partials_story_translations_story_translations_module__WEBPACK_IMPORTED_MODULE_10__.StoryTranslationsModule, _card2_card_module__WEBPACK_IMPORTED_MODULE_6__.CardModule, _partials_comment_actions_comment_actions_module__WEBPACK_IMPORTED_MODULE_11__.CommentActionsModule, _app_shared_components_post_partials_post_context_menu_post_context_menu_module__WEBPACK_IMPORTED_MODULE_0__.PostContextMenuModule, _pills_pills_module__WEBPACK_IMPORTED_MODULE_7__.PillsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](SingleReplyModule, {
    declarations: [_single_reply_component__WEBPACK_IMPORTED_MODULE_12__.SingleReplyComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _shared_components_post_partials_post_author_date_flat_post_author_date_flat_module__WEBPACK_IMPORTED_MODULE_2__.PostAuthorDateFlatModule, _shared_components_button_button_module__WEBPACK_IMPORTED_MODULE_1__.ButtonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule, _shared_components_upvote_upvote_module__WEBPACK_IMPORTED_MODULE_4__.UpvoteModule, _shared_icons_reply_icon_reply_icon_module__WEBPACK_IMPORTED_MODULE_5__.ReplyIconModule, _shared_components_story_card_story_card_module__WEBPACK_IMPORTED_MODULE_3__.StoryCardModule, _post_partials_post_author_date_post_author_date_module__WEBPACK_IMPORTED_MODULE_8__.PostAuthorDateModule, _post_partials_story_content_story_content_module__WEBPACK_IMPORTED_MODULE_9__.StoryContentModule, _post_partials_story_translations_story_translations_module__WEBPACK_IMPORTED_MODULE_10__.StoryTranslationsModule, _card2_card_module__WEBPACK_IMPORTED_MODULE_6__.CardModule, _partials_comment_actions_comment_actions_module__WEBPACK_IMPORTED_MODULE_11__.CommentActionsModule, _app_shared_components_post_partials_post_context_menu_post_context_menu_module__WEBPACK_IMPORTED_MODULE_0__.PostContextMenuModule, _pills_pills_module__WEBPACK_IMPORTED_MODULE_7__.PillsModule],
    exports: [_single_reply_component__WEBPACK_IMPORTED_MODULE_12__.SingleReplyComponent]
  });
})();

/***/ }),

/***/ 50454:
/*!**********************************************************************************************************!*\
  !*** ./src/app/shared/components/post/partials/post-author-date-flat/post-author-date-flat.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostAuthorDateFlatComponent": () => (/* binding */ PostAuthorDateFlatComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_pipes_country_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/pipes/country.pipe */ 17174);
/* harmony import */ var _shared_components_post_post_details_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/post/post-details-helper.service */ 66523);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _app_core_services_locales_user_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/services/locales/user-language.service */ 86188);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);








function PostAuthorDateFlatComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.postPlace);
  }
}
class PostAuthorDateFlatComponent {
  get postPlace() {
    return this.post.place || this.countryPipe.transform(this.post.country);
  }
  get username$() {
    return this.postDetailsHelperService.getAuthorUsername$(this.post).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(username => {
      return [username, this.post?.user?.organisation].filter(component => !!component).join(', ');
    }));
  }
  constructor(countryPipe, postDetailsHelperService, translateService, userLanguageService) {
    this.countryPipe = countryPipe;
    this.postDetailsHelperService = postDetailsHelperService;
    this.translateService = translateService;
    this.userLanguageService = userLanguageService;
    this.underlined = true;
    this.noMargin = false;
    this.language = this.userLanguageService.getLanguage();
  }
  getDateFromNow() {
    const tranlations = {};
    let date;
    tranlations.relativeTime = {
      s: this.translateService.instant(`language.relativeTime.s`),
      ss: this.translateService.instant(`language.relativeTime.ss`),
      m: this.translateService.instant(`language.relativeTime.m`),
      mm: this.translateService.instant(`language.relativeTime.mm`, {
        value: '%d'
      }),
      h: this.translateService.instant(`language.relativeTime.h`),
      hh: this.translateService.instant(`language.relativeTime.hh`, {
        value: '%d'
      }),
      d: this.translateService.instant(`language.relativeTime.d`),
      dd: this.translateService.instant(`language.relativeTime.dd`, {
        value: '%d'
      }),
      M: this.translateService.instant(`language.relativeTime.M`),
      MM: this.translateService.instant(`language.relativeTime.MM`, {
        value: '%d'
      }),
      y: this.translateService.instant(`language.relativeTime.y`),
      yy: this.translateService.instant(`language.relativeTime.yy`, {
        value: '%d'
      })
    };
    tranlations.monthsShort = [this.translateService.instant(`language.monthsShort.January`), this.translateService.instant(`language.monthsShort.February`), this.translateService.instant(`language.monthsShort.March`), this.translateService.instant(`language.monthsShort.April`), this.translateService.instant(`language.monthsShort.May`), this.translateService.instant(`language.monthsShort.June`), this.translateService.instant(`language.monthsShort.July`), this.translateService.instant(`language.monthsShort.August`), this.translateService.instant(`language.monthsShort.September`), this.translateService.instant(`language.monthsShort.October`), this.translateService.instant(`language.monthsShort.November`), this.translateService.instant(`language.monthsShort.December`)];
    if (this.post?.publishedAt) {
      date = new Date(this.post?.publishedAt);
    } else {
      date = new Date(this.post?.createdAt);
    }
    moment__WEBPACK_IMPORTED_MODULE_0__.locale(this.language, tranlations);
    // It is because momentJs show 'a day ago' - d format after 21 hours
    if (this.checkTime(date) < 22) {
      return moment__WEBPACK_IMPORTED_MODULE_0__(date).fromNow(true);
    } else {
      return moment__WEBPACK_IMPORTED_MODULE_0__(date).format('MMM D, YYYY');
    }
  }
  checkTime(date) {
    const currentTime = moment__WEBPACK_IMPORTED_MODULE_0__();
    const timeStore = moment__WEBPACK_IMPORTED_MODULE_0__(date);
    return currentTime.diff(timeStore, 'h');
  }
  static #_ = this.ɵfac = function PostAuthorDateFlatComponent_Factory(t) {
    return new (t || PostAuthorDateFlatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_pipes_country_pipe__WEBPACK_IMPORTED_MODULE_1__.CountryPipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_components_post_post_details_helper_service__WEBPACK_IMPORTED_MODULE_2__.PostDetailsHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_core_services_locales_user_language_service__WEBPACK_IMPORTED_MODULE_3__.UserLanguageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: PostAuthorDateFlatComponent,
    selectors: [["app-post-author-date-flat"]],
    inputs: {
      post: "post",
      underlined: "underlined",
      noMargin: "noMargin"
    },
    decls: 7,
    vars: 5,
    consts: [[1, "post__author"], [1, "post__info"], [1, "post__date"], ["class", "post__place", 4, "ngIf"], [1, "post__place"]],
    template: function PostAuthorDateFlatComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 1)(4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, PostAuthorDateFlatComponent_span_6_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 3, ctx.username$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getDateFromNow());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.postPlace);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
    styles: ["@charset \"UTF-8\";\n.post__author[_ngcontent-%COMP%] {\n  color: #000;\n  font-family: Noto Sans;\n  font-size: 1rem;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 1.375rem;\n  letter-spacing: 0em;\n}\n@media (min-width: 768px) {\n  .post__author[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n    line-height: 1.6875rem;\n  }\n}\n.post__info[_ngcontent-%COMP%] {\n  margin-top: 0.375rem;\n}\n.post__date[_ngcontent-%COMP%] {\n  color: #808080;\n  font-family: Noto Sans;\n  font-size: 0.75rem;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.375rem;\n  letter-spacing: 0em;\n}\n@media (min-width: 768px) {\n  .post__date[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n.post__place[_ngcontent-%COMP%] {\n  color: #656565;\n  font-family: Noto Sans;\n  font-size: 0.75rem;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5rem;\n  letter-spacing: 0em;\n}\n@media (min-width: 768px) {\n  .post__place[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n.post__place[_ngcontent-%COMP%]::before {\n  color: #b4b4b4;\n  content: \"\u2022\";\n  margin: 0 0.625rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtYXV0aG9yLWRhdGUtZmxhdC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fbWl4aW5zLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQU1kO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBSko7QUMwTEU7RUQ3TEE7SUFVSSxrQkFBQTtJQUNBLHNCQUFBO0VBSEo7QUFDRjtBQU1FO0VBQ0Usb0JBQUE7QUFKSjtBQU9FO0VBQ0UsY0V5RFE7RUZ4RFIsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBTEo7QUN3S0U7RUQxS0E7SUFVSSxlQUFBO0VBSko7QUFDRjtBQU9FO0VBQ0UsY0VxREc7RUZwREgsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBTEo7QUMwSkU7RUQ1SkE7SUFVSSxlQUFBO0VBSko7QUFDRjtBQU1JO0VBQ0UsY0UwQ1M7RUZ6Q1QsWUFBQTtFQUNBLGtCQUFBO0FBSk4iLCJmaWxlIjoicG9zdC1hdXRob3ItZGF0ZS1mbGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcbkBpbXBvcnQgJ2xvb3AtZGVzaWduLXN5c3RlbS9jb2xvcnMnO1xuQGltcG9ydCAnbG9vcC1kZXNpZ24tc3lzdGVtL2hlbHBlcnMnO1xuQGltcG9ydCAnbWl4aW5zJztcblxuLnBvc3Qge1xuICAmX19hdXRob3Ige1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtZmFtaWx5OiBOb3RvIFNhbnM7XG4gICAgZm9udC1zaXplOiBweFRvUmVtKDE2KTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogcHhUb1JlbSgyMik7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcblxuICAgIEBpbmNsdWRlIG1vYmlsZS11cCB7XG4gICAgICBmb250LXNpemU6IHB4VG9SZW0oMjApO1xuICAgICAgbGluZS1oZWlnaHQ6IHB4VG9SZW0oMjcpO1xuICAgIH1cbiAgfVxuXG4gICZfX2luZm8ge1xuICAgIG1hcmdpbi10b3A6IHB4VG9SZW0oNik7XG4gIH1cblxuICAmX19kYXRlIHtcbiAgICBjb2xvcjogJHRleHQtZ3JheTtcbiAgICBmb250LWZhbWlseTogTm90byBTYW5zO1xuICAgIGZvbnQtc2l6ZTogcHhUb1JlbSgxMik7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IHB4VG9SZW0oMjIpO1xuICAgIGxldHRlci1zcGFjaW5nOiAwZW07XG5cbiAgICBAaW5jbHVkZSBtb2JpbGUtdXAge1xuICAgICAgZm9udC1zaXplOiBweFRvUmVtKDE2KTtcbiAgICB9XG4gIH1cblxuICAmX19wbGFjZSB7XG4gICAgY29sb3I6ICRncmV5O1xuICAgIGZvbnQtZmFtaWx5OiBOb3RvIFNhbnM7XG4gICAgZm9udC1zaXplOiBweFRvUmVtKDEyKTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogcHhUb1JlbSgyNCk7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcblxuICAgIEBpbmNsdWRlIG1vYmlsZS11cCB7XG4gICAgICBmb250LXNpemU6IHB4VG9SZW0oMTYpO1xuICAgIH1cblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb2xvcjogJGxpZ2h0LWdyZXktMztcbiAgICAgIGNvbnRlbnQ6ICdcXDAyMDIyJztcbiAgICAgIG1hcmdpbjogMCBweFRvUmVtKDEwKTtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbkBtaXhpbiBmbGV4LWdhcCgkZ2FwLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBtYXJnaW4tdG9wOiAoLSRnYXApO1xuICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgoLSRnYXApLCAkZ2xvYmFsKTtcblxuICA+ICoge1xuICAgIG1hcmdpbi10b3A6ICRnYXA7XG4gICAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoJGdhcCwgJGdsb2JhbCk7XG4gIH1cbn1cblxuQG1peGluIGJhc2UtY29udGFpbmVyKCRjb250ZW50LXdpZHRoKSB7XG4gICRkZXNrdG9wLXBhZGRpbmc6IDJyZW07XG4gIG1heC13aWR0aDogY2FsYygjeyRjb250ZW50LXdpZHRofSArICgjeyRkZXNrdG9wLXBhZGRpbmd9KSk7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDJyZW0pIHtcbiAgICBAaW5jbHVkZSBwYWRkaW5nLWxlZnQoJGRlc2t0b3AtcGFkZGluZywgdHJ1ZSk7XG4gICAgQGluY2x1ZGUgcGFkZGluZy1yaWdodCgkZGVza3RvcC1wYWRkaW5nLCB0cnVlKTtcbiAgfVxufVxuXG5AbWl4aW4gY2VudGVyQWJzb2x1dGVFbGVtZW50IHtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcblxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuQG1peGluIG9ubHktbHRyLWdsb2JhbCB7XG4gIGh0bWw6bm90KFtkaXI9J3J0bCddKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1ydGwtZ2xvYmFsIHtcbiAgaHRtbFtkaXI9J3J0bCddICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LWx0ciB7XG4gIDpob3N0LWNvbnRleHQoaHRtbDpub3QoW2Rpcj0ncnRsJ10pKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1ydGwge1xuICA6aG9zdC1jb250ZXh0KGh0bWxbZGlyPSdydGwnXSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHJ0bC12YWx1ZSgkcHJvcGVydHksICRsdHItdmFsdWUsICRydGwtdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpZiAkZ2xvYmFsID09IHRydWUge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyLWdsb2JhbCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRsdHItdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwtZ2xvYmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHJ0bC12YWx1ZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGx0ci12YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRydGwtdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBydGwtcHJvcGVydHkoJGx0ci1wcm9wZXJ0eSwgJHJ0bC1wcm9wZXJ0eSwgJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaWYgJGdsb2JhbCA9PSB0cnVlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ci1nbG9iYWwge1xuICAgICAgI3skbHRyLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsLWdsb2JhbCB7XG4gICAgICAjeyRydGwtcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ciB7XG4gICAgICAjeyRsdHItcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwge1xuICAgICAgI3skcnRsLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWFyZ2luLWxlZnQoJG1hcmdpbiwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KG1hcmdpbi1sZWZ0LCBtYXJnaW4tcmlnaHQsICRtYXJnaW4sICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gbWFyZ2luLXJpZ2h0KCRtYXJnaW4sICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShtYXJnaW4tcmlnaHQsIG1hcmdpbi1sZWZ0LCAkbWFyZ2luLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmcoJHBhZGRpbmdUb3AsICRwYWRkaW5nUmlnaHQsICRwYWRkaW5nQm90dG9tLCAkcGFkZGluZ0xlZnQsICRnbG9iYWw6IGZhbHNlKSB7XG4gIHBhZGRpbmctdG9wOiAkcGFkZGluZ1RvcDtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctcmlnaHQsIHBhZGRpbmctbGVmdCwgJHBhZGRpbmdSaWdodCwgJGdsb2JhbCk7XG4gIHBhZGRpbmctYm90dG9tOiAkcGFkZGluZ1RvcDtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctbGVmdCwgcGFkZGluZy1yaWdodCwgJHBhZGRpbmdMZWZ0LCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmctbGVmdCgkcGFkZGluZywgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctbGVmdCwgcGFkZGluZy1yaWdodCwgJHBhZGRpbmcsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1yaWdodCgkcGFkZGluZywgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctcmlnaHQsIHBhZGRpbmctbGVmdCwgJHBhZGRpbmcsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gdGV4dC1hbGlnbi1sZWZ0KCRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZSh0ZXh0LWFsaWduLCBsZWZ0LCByaWdodCwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBsZWZ0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGxlZnQsIHJpZ2h0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcmlnaHQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocmlnaHQsIGxlZnQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiB0cmFuc2xhdGVYWSgkdmFsdWVYLCAkdmFsdWVZLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUodHJhbnNmb3JtLCB0cmFuc2xhdGUoJHZhbHVlWCwgJHZhbHVlWSksIHRyYW5zbGF0ZSgtJHZhbHVlWCwgJHZhbHVlWSksICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWxlZnQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWxlZnQsIGJvcmRlci1yaWdodCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1yaWdodCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItcmlnaHQsIGJvcmRlci1sZWZ0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMsIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItdG9wLXJpZ2h0LXJhZGl1cywgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItdG9wLWxlZnQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci10b3AtbGVmdC1yYWRpdXMsIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gZmxvYXQtbGVmdCgkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUoZmxvYXQsIGxlZnQsIHJpZ2h0LCAkZ2xvYmFsOiBmYWxzZSk7XG59XG5cbkBtaXhpbiBmbG9hdC1yaWdodCB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZShmbG9hdCwgcmlnaHQsIGxlZnQsICRnbG9iYWw6IGZhbHNlKTtcbn1cblxuQG1peGluIHNtYWxsLWRlc2t0b3Atb25seSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1sZykgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXhsIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLWFuZC10YWJsZXQtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZyAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtYWxsLW1vYmlsZS1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXMgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1tZCAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1kKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbGcpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLXVwIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1kKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGRpc2FibGUtc2Nyb2xsYmFyIHtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iLCIkc3RhbmRhcmRGb250RmFtaWx5OiAnTm90byBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4kY29udGVudC10b3AtcGFkZGluZzogM3JlbTtcbiRwb3N0LWxpc3QtYmc6ICNkYWRhZGE7XG4kd2hpdGU6ICNmZmZmZmY7XG4kcG9zdC1wcmV2aWV3LWJnOiB3aGl0ZTtcbiRsaWdodC1ncmF5LWJnOiAjZjRmNGY0O1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLWxlZnQ6IDIuMzQ0cmVtO1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLXJpZ2h0OiAxLjA2M3JlbTtcbiRwb3N0LXByZXZpZXctcGFkZGluZzogMi41cmVtICRwb3N0LXByZXZpZXctcGFkZGluZy1yaWdodCAxLjI1cmVtICRwb3N0LXByZXZpZXctcGFkZGluZy1sZWZ0O1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLW1vYmlsZTogMXJlbSAxcmVtIDAuNXJlbSAxcmVtO1xuJHBvc3QtcGFkZGluZy1ib3R0b206IDFyZW07XG4kcG9zdC1wcmV2aWV3LWd1dHRlcjogMnB4O1xuJHBvc3QtaGlnaGxpZ2h0LWNvbG9yOiAjNTcwZjg1O1xuJGNvbG9yLXB1cnBsZS05MDogIzMxMTM1ZTtcbiRjb2xvci1wdXJwbGUtNjA6ICM5ODhhYWU7XG4kY29sb3ItcHVycGxlLTUwOiAjOTg4OWFmO1xuJGNvbG9yLXB1cnBsZS0xMDogI2Y1ZjNmNztcbiRjb2xvci1wdXJwbGUtbGlnaHQ6ICM0YjM1YmM7XG4kY29sb3ItcHVycGxlLXZlcnktbGlnaHQ6ICM4NjZhYjA7XG4kY29sb3ItcHVycGxlLXN0ZXBwZXI6ICM0YTJiN2E7XG4kY29sb3ItZ3JlZW4tMTAwOiAjMDUyODA0O1xuJGNvbG9yLWdyZWVuLTkwOiAjMGQzZDBiO1xuJGNvbG9yLWdyZWVuLTgwOiAjMWY2YjFlO1xuJGNvbG9yLWdyZWVuLTcwOiAjMzU4YTM0O1xuJGNvbG9yLWdyZWVuLTYwOiAjNmQ5YTZlO1xuJGNvbG9yLWdyZWVuLTUwOiAjODlhODhmO1xuJGNvbG9yLWdyZWVuLTQwOiAjOWZjOGE2O1xuJGNvbG9yLWdyZWVuLTMwOiAjYWFkNmIzO1xuJGNvbG9yLWdyZWVuLTIwOiAjYzllOWQxO1xuJGNvbG9yLWdyZWVuLTEwOiAjZjNmN2YzO1xuJGNvbG9yLWdyZWVuLXN0ZXBwZXI6ICMxMDdENzk7XG4kY29sb3ItZ3JlZW4tbWVkaXVtOiAjYWRkYWFmO1xuJGNvbG9yLWdyZWVuLWxpZ2h0OiAjM0FCMDk4O1xuJGNvbG9yLWdyZWVuLXZlcnktbGlnaHQ6ICNFREZGRkM7XG4kZ3JleS0xOiAjZDZkMGRmO1xuJHN1cHBvcnQtMDE6ICNkYTFlMjg7XG4kZXJyb3I6ICNlZTIzMmY7XG4kdGV4dC1ibGFjazogIzE2MTYxNjtcbiR0ZXh0LXNlY29uZGFyeTogIzM5MzkzOTtcbiR0ZXh0LWdyYXllZDogIzUyNTI1MjtcbiR0ZXh0LWdyYXllZDgwOiAjOGY4YjhiO1xuJHRleHQtZ3JheS1jYXQ6ICM2ZDcyNzg7XG4kdWktYmFja2dyb3VuZC1ncmF5OiAjZjhmOGY5O1xuJGJvcmRlcjogI2U4ZTdlYTtcbiRlbnRpdHktYm9yZGVyLWNvbG9yOiAjMWMwZjMwMjE7XG4kbG9hZGluZy1iZzogcmdiKDAgMCAwIC8gMTglKTtcbiRzdXBwb3J0LTA0OiAjMDA0M2NlO1xuJGxvb3AtdXNlcm5hbWU6ICMxOTgwMzg7XG4kbG9vcC1hY3RpdmUtY3VycmVudC11c2VyOiAjMjRhMTQ4O1xuJHdhcm0tZ3JheS0xMC1jb2xvcjogI2Y3ZjNmMjtcbiR3YXJtLWdyYXktMjAtY29sb3I6ICNlNWUwZGY7XG4kaGVhZGluZy0xLWNvbG9yOiAjMWMwZjMwO1xuJGhlYWRpbmctMi1jb2xvcjogIzMyMDc0ZDtcbiRoZWFkaW5nLTMtY29sb3I6ICMyZjI3MzU7XG4kbW9iaWxlLWljb24tY29sb3I6ICMxYzBmMzA7XG4kc3RhdGUtZGlzYWJsZWQtMDI6ICNjNmM2YzY7XG4kbGluay0wMjogIzU2MDFiMjtcbiRoZWFkZXItcHVycGxlOiAjMzExMzVlO1xuJGhlYWRlci1ncmVlbjogIzEwN2Q3OTtcbiRwdXJwbGUtbGlnaHQ6ICNjYmM0ZDc7XG4kcHVycGxlLWJhY2tncm91bmQtbGlnaHQ6ICNkY2Q1ZTc7XG4kbG9vcC1pbnRlcmFjdGl2ZS0wMTogIzEwN2Q3OTtcbiRsb29wLWludGVyYWN0aXZlLTAxLW9wYWNpdHk6IHJnYmEoMTYsIDEyNSwgMTIxLCAwLjMpO1xuJGZpbHRlcnMtZ3JlZW46ICMwNTY3NjM7XG4vLyBCcmVha3BvaW50c1xuXG4kYnJlYWtwb2ludC1zOiAzNzVweDtcbiRicmVha3BvaW50LXNtOiA0MjBweDtcbiRicmVha3BvaW50LW1kOiA3NjhweDtcbiRicmVha3BvaW50LWxnOiAxMDgwcHg7XG4kYnJlYWtwb2ludC14bDogMTI3NXB4O1xuXG4kYnJlYWtwb2ludC1tZC12MjogODIwcHg7XG5cbiRoZWFkZXItaGVpZ2h0OiA0LjM3NXJlbTtcbiRoZWFkZXItaGVpZ2h0LXYyOiA0LjM3NXJlbTtcbiRzdGF0ZS1zZWxlY3RlZC11aTogI2UwZTBlMDtcbiRjLWxlZnQtcGFkZGluZzogMS41cmVtO1xuJG1lbnUtYWN0aXZlLWNvbG9yOiAjM0FCMDk4O1xuJG1lbnUtaG92ZXItY29sb3I6ICMzQUIwOTg7XG4kdGFiLWluYWN0aXZlLWNvbG9yOiAjODlhZjkzO1xuJGxpbmUtY29sb3I6ICNkMGRmZDI7XG4kYm9yZGVyLWdyYXk6ICNjY2NjY2M7XG4kdGV4dC1ncmF5OiAjODA4MDgwO1xuJGJhc2UtY29udGFpbmVyLXdpZHRoOiA4MS4xMjRyZW07XG4kaGVhZGVyLXVuZGVybGluZS1oZWlnaHQ6IDAuMzEzcmVtO1xuXG4vLyBNb2RlcmF0b3IgcmV2aWV3IHNlY3Rpb25zXG4kZm9vdGVyLWhlaWdodDogNHJlbTtcbiR0b3BiYXItaGVpZ2h0OiAxMC41cmVtO1xuJHN0ZXBwZXItaGVpZ2h0OiA2LjdyZW07XG5cbi8vIE5ldyBTdG9yeSBmbG93IC8gc3RvcnkgZGV0YWlscyB2YXJpYWJsZXNcbiRncmV5OiAjNjU2NTY1O1xuJGxpZ2h0LWdyZXktMjogI2IxYjRiNjtcbiRsaWdodC1ncmV5LTM6ICNiNGI0YjQ7XG4kbGlnaHQtZ3JleS00OiAjY2ZkM2Q4O1xuJGxpZ2h0LWdyZXktNTogI2Q5ZTBlNztcbiRsaWdodC1ncmV5LTY6ICNmMWYyZjI7XG4kbGlnaHQtZ3JleS03OiAjYzRjNGM0O1xuJGxpZ2h0LWdyZXktODogI2U5ZTllOTtcbiRsaWdodC1ncmV5LTk6ICNlNmVhZWQ7XG4kbGlnaC1ncmV5LXNlcGFyYXRvcjogI2MwYzBjMDtcbiRkYXJrLWdyZXk6ICMxYTFhMWE7XG4kZGFyay1ncmV5LTUwOiByZ2IoMjYsIDI2LCAyNiwgMC41KTtcbiRib3JkZXItZ3JleTogI2M3Y2RkNDtcbiRsaWdodC1wdXJwbGU6ICNlYWVhZWE7XG4kaW5wdXQtZGlzYWJsZWQtYmc6ICNmNGY2Zjg7XG4kZXJyb3ItMjogI2RlMjIyZDtcbiRkYW5nZXI6ICNjOTMwNGQ7XG4kcHJldmlvdXMtcGlsbC1jb2xvcjogIzcxOGQ2ZjtcbiR0b29sdGlwLWdyZXk6ICNhYmFiYWI7XG4kbGlnaHQtZ3JlZW46ICNjZmU1ZTQ2NjtcblxuJGZpbHRlcnMtbW9kYWwtaGVhZGVyLXppbmRleDogMTAwMDA7XG4kbW9kYWwtemluZGV4OiA5OTk5O1xuJGxvY2F0aW9uLW92ZXJsYXktemluZGV4OiA5MDAxO1xuJGhlYWRlci1hc2lkZS16aW5kZXg6IDgwMDI7XG4kaGVhZGVyLWFzaWRlLWJhY2tncm91bmQtemluZGV4OiA4MDAxO1xuJGhlYWRlci16aW5kZXg6IDgwMDA7XG4kbmF2aWdhdGlvbi16aW5kZXg6IDgwMDA7XG4kcGFnZS1sb2FkaW5nLXppbmRleDogNzAwMTtcbiR0b29sdGlwLXppbmRleDogNzAwMDtcbiRuZXctc3RvcnktY29udGVudC1zdGF0ZS16aW5kZXg6IDUwMDtcbiRmaWx0ZXItZHJvcGRvd24temluZGV4OiAxMDA7XG4kbW9kYWwtdG9wLWluZGljYXRvci16aW5kZXg6IDUxO1xuJG1vZGFsLXRvcC1pbmRpY2F0b3ItYmFja2dyb3VuZC16aW5kZXg6IDUxO1xuJGNoYXJ0LXppbmRleDogMTtcbiRjaGFydC1jb250cm9sLXppbmRleDogMjtcblxuJHNsaWRlLXRvZ2dsZS1kaXNhYmxlZC1vcHRpb24tYmFja2dyb3VuZDogI2RkZGRkZDtcblxuJHRvYXN0LWluZm8tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4kdG9hc3QtaW5mby10aXRsZS1jb2xvcjogIzQ5NDk0OTtcbiR0b2FzdC1pbmZvLW1lc3NhZ2UtY29sb3I6ICM0MjJjMDA7XG4kdG9hc3QtaW5mby1idXR0b24tY29sb3I6ICM2YzRlOTk7XG5cbiR0b2FzdC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6ICNkOWVlZWQ7XG4kdG9hc3Qtc3VjY2Vzcy10aXRsZS1jb2xvcjogIzAwNDU0MjtcbiR0b2FzdC1zdWNjZXNzLW1lc3NhZ2UtY29sb3I6ICMwMTMyMzA7XG4kdG9hc3Qtc3VjY2Vzcy1idXR0b24tY29sb3I6ICMwMTY5NjU7XG5cbiR0b2FzdC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6ICNmZmYxZDU7XG4kdG9hc3Qtd2FybmluZy10aXRsZS1jb2xvcjogIzZiNDcwMDtcbiR0b2FzdC13YXJuaW5nLW1lc3NhZ2UtY29sb3I6ICM0MjJjMDA7XG4kdG9hc3Qtd2FybmluZy1idXR0b24tY29sb3I6ICNjYzhmMTQ7XG5cbiR0b2FzdC1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiAjZjVkNWRiO1xuJHRvYXN0LWVycm9yLXRpdGxlLWNvbG9yOiAjNzMwMDE1O1xuJHRvYXN0LWVycm9yLW1lc3NhZ2UtY29sb3I6ICM0NTA2MTE7XG4kdG9hc3QtZXJyb3Itc3VjY2Vzcy1jb2xvcjogI2Q5ZWVlZDtcbiR0b2FzdC1lcnJvci1idXR0b24tY29sb3I6ICNiMjFkMzk7XG5cbiR0b2FzdC1jbG9zZS1idXR0b24tY29sb3I6ICM3MzAwMTU7XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcG9zdC9wYXJ0aWFscy9wb3N0LWF1dGhvci1kYXRlLWZsYXQvcG9zdC1hdXRob3ItZGF0ZS1mbGF0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9zdHlsZXMvX21peGlucy5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQU1kO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBSko7QUMwTEU7RUQ3TEE7SUFVSSxrQkFBQTtJQUNBLHNCQUFBO0VBSEo7QUFDRjtBQU1FO0VBQ0Usb0JBQUE7QUFKSjtBQU9FO0VBQ0UsY0V5RFE7RUZ4RFIsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBTEo7QUN3S0U7RUQxS0E7SUFVSSxlQUFBO0VBSko7QUFDRjtBQU9FO0VBQ0UsY0VxREc7RUZwREgsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBTEo7QUMwSkU7RUQ1SkE7SUFVSSxlQUFBO0VBSko7QUFDRjtBQU1JO0VBQ0UsY0UwQ1M7RUZ6Q1QsWUFBQTtFQUNBLGtCQUFBO0FBSk47QUFDQSw0N2NBQTQ3YyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICdsb29wLWRlc2lnbi1zeXN0ZW0vY29sb3JzJztcbkBpbXBvcnQgJ2xvb3AtZGVzaWduLXN5c3RlbS9oZWxwZXJzJztcbkBpbXBvcnQgJ21peGlucyc7XG5cbi5wb3N0IHtcbiAgJl9fYXV0aG9yIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LWZhbWlseTogTm90byBTYW5zO1xuICAgIGZvbnQtc2l6ZTogcHhUb1JlbSgxNik7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IHB4VG9SZW0oMjIpO1xuICAgIGxldHRlci1zcGFjaW5nOiAwZW07XG5cbiAgICBAaW5jbHVkZSBtb2JpbGUtdXAge1xuICAgICAgZm9udC1zaXplOiBweFRvUmVtKDIwKTtcbiAgICAgIGxpbmUtaGVpZ2h0OiBweFRvUmVtKDI3KTtcbiAgICB9XG4gIH1cblxuICAmX19pbmZvIHtcbiAgICBtYXJnaW4tdG9wOiBweFRvUmVtKDYpO1xuICB9XG5cbiAgJl9fZGF0ZSB7XG4gICAgY29sb3I6ICR0ZXh0LWdyYXk7XG4gICAgZm9udC1mYW1pbHk6IE5vdG8gU2FucztcbiAgICBmb250LXNpemU6IHB4VG9SZW0oMTIpO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiBweFRvUmVtKDIyKTtcbiAgICBsZXR0ZXItc3BhY2luZzogMGVtO1xuXG4gICAgQGluY2x1ZGUgbW9iaWxlLXVwIHtcbiAgICAgIGZvbnQtc2l6ZTogcHhUb1JlbSgxNik7XG4gICAgfVxuICB9XG5cbiAgJl9fcGxhY2Uge1xuICAgIGNvbG9yOiAkZ3JleTtcbiAgICBmb250LWZhbWlseTogTm90byBTYW5zO1xuICAgIGZvbnQtc2l6ZTogcHhUb1JlbSgxMik7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IHB4VG9SZW0oMjQpO1xuICAgIGxldHRlci1zcGFjaW5nOiAwZW07XG5cbiAgICBAaW5jbHVkZSBtb2JpbGUtdXAge1xuICAgICAgZm9udC1zaXplOiBweFRvUmVtKDE2KTtcbiAgICB9XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29sb3I6ICRsaWdodC1ncmV5LTM7XG4gICAgICBjb250ZW50OiAnXFwwMjAyMic7XG4gICAgICBtYXJnaW46IDAgcHhUb1JlbSgxMCk7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AbWl4aW4gZmxleC1nYXAoJGdhcCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgbWFyZ2luLXRvcDogKC0kZ2FwKTtcbiAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoKC0kZ2FwKSwgJGdsb2JhbCk7XG5cbiAgPiAqIHtcbiAgICBtYXJnaW4tdG9wOiAkZ2FwO1xuICAgIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCRnYXAsICRnbG9iYWwpO1xuICB9XG59XG5cbkBtaXhpbiBiYXNlLWNvbnRhaW5lcigkY29udGVudC13aWR0aCkge1xuICAkZGVza3RvcC1wYWRkaW5nOiAycmVtO1xuICBtYXgtd2lkdGg6IGNhbGMoI3skY29udGVudC13aWR0aH0gKyAoI3skZGVza3RvcC1wYWRkaW5nfSkpO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQycmVtKSB7XG4gICAgQGluY2x1ZGUgcGFkZGluZy1sZWZ0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICAgIEBpbmNsdWRlIHBhZGRpbmctcmlnaHQoJGRlc2t0b3AtcGFkZGluZywgdHJ1ZSk7XG4gIH1cbn1cblxuQG1peGluIGNlbnRlckFic29sdXRlRWxlbWVudCB7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbkBtaXhpbiBvbmx5LWx0ci1nbG9iYWwge1xuICBodG1sOm5vdChbZGlyPSdydGwnXSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsLWdsb2JhbCB7XG4gIGh0bWxbZGlyPSdydGwnXSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1sdHIge1xuICA6aG9zdC1jb250ZXh0KGh0bWw6bm90KFtkaXI9J3J0bCddKSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsIHtcbiAgOmhvc3QtY29udGV4dChodG1sW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBydGwtdmFsdWUoJHByb3BlcnR5LCAkbHRyLXZhbHVlLCAkcnRsLXZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaWYgJGdsb2JhbCA9PSB0cnVlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ci1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsLWdsb2JhbCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRydGwtdmFsdWU7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ciB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRsdHItdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gcnRsLXByb3BlcnR5KCRsdHItcHJvcGVydHksICRydGwtcHJvcGVydHksICR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcnRsLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skbHRyLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hcmdpbi1sZWZ0KCRtYXJnaW4sICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShtYXJnaW4tbGVmdCwgbWFyZ2luLXJpZ2h0LCAkbWFyZ2luLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIG1hcmdpbi1yaWdodCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLXJpZ2h0LCBtYXJnaW4tbGVmdCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nKCRwYWRkaW5nVG9wLCAkcGFkZGluZ1JpZ2h0LCAkcGFkZGluZ0JvdHRvbSwgJHBhZGRpbmdMZWZ0LCAkZ2xvYmFsOiBmYWxzZSkge1xuICBwYWRkaW5nLXRvcDogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nUmlnaHQsICRnbG9iYWwpO1xuICBwYWRkaW5nLWJvdHRvbTogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nTGVmdCwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLWxlZnQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmctcmlnaHQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRleHQtYWxpZ24tbGVmdCgkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUodGV4dC1hbGlnbiwgbGVmdCwgcmlnaHQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShsZWZ0LCByaWdodCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHJpZ2h0LCBsZWZ0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gdHJhbnNsYXRlWFkoJHZhbHVlWCwgJHZhbHVlWSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRyYW5zZm9ybSwgdHJhbnNsYXRlKCR2YWx1ZVgsICR2YWx1ZVkpLCB0cmFuc2xhdGUoLSR2YWx1ZVgsICR2YWx1ZVkpLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1sZWZ0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1sZWZ0LCBib3JkZXItcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItcmlnaHQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXJpZ2h0LCBib3JkZXItbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsIGJvcmRlci10b3AtbGVmdC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItdG9wLWxlZnQtcmFkaXVzLCBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGZsb2F0LWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCBsZWZ0LCByaWdodCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gZmxvYXQtcmlnaHQge1xuICBAaW5jbHVkZSBydGwtdmFsdWUoZmxvYXQsIHJpZ2h0LCBsZWZ0LCAkZ2xvYmFsOiBmYWxzZSk7XG59XG5cbkBtaXhpbiBzbWFsbC1kZXNrdG9wLW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbGcpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC14bCAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1hbmQtdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbGcgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBzbWFsbC1tb2JpbGUtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1zIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbWQgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0YWJsZXQtb25seSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS11cCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBkaXNhYmxlLXNjcm9sbGJhciB7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIiwiJHN0YW5kYXJkRm9udEZhbWlseTogJ05vdG8gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGNvbnRlbnQtdG9wLXBhZGRpbmc6IDNyZW07XG4kcG9zdC1saXN0LWJnOiAjZGFkYWRhO1xuJHdoaXRlOiAjZmZmZmZmO1xuJHBvc3QtcHJldmlldy1iZzogd2hpdGU7XG4kbGlnaHQtZ3JheS1iZzogI2Y0ZjRmNDtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1sZWZ0OiAyLjM0NHJlbTtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1yaWdodDogMS4wNjNyZW07XG4kcG9zdC1wcmV2aWV3LXBhZGRpbmc6IDIuNXJlbSAkcG9zdC1wcmV2aWV3LXBhZGRpbmctcmlnaHQgMS4yNXJlbSAkcG9zdC1wcmV2aWV3LXBhZGRpbmctbGVmdDtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1tb2JpbGU6IDFyZW0gMXJlbSAwLjVyZW0gMXJlbTtcbiRwb3N0LXBhZGRpbmctYm90dG9tOiAxcmVtO1xuJHBvc3QtcHJldmlldy1ndXR0ZXI6IDJweDtcbiRwb3N0LWhpZ2hsaWdodC1jb2xvcjogIzU3MGY4NTtcbiRjb2xvci1wdXJwbGUtOTA6ICMzMTEzNWU7XG4kY29sb3ItcHVycGxlLTYwOiAjOTg4YWFlO1xuJGNvbG9yLXB1cnBsZS01MDogIzk4ODlhZjtcbiRjb2xvci1wdXJwbGUtMTA6ICNmNWYzZjc7XG4kY29sb3ItcHVycGxlLWxpZ2h0OiAjNGIzNWJjO1xuJGNvbG9yLXB1cnBsZS12ZXJ5LWxpZ2h0OiAjODY2YWIwO1xuJGNvbG9yLXB1cnBsZS1zdGVwcGVyOiAjNGEyYjdhO1xuJGNvbG9yLWdyZWVuLTEwMDogIzA1MjgwNDtcbiRjb2xvci1ncmVlbi05MDogIzBkM2QwYjtcbiRjb2xvci1ncmVlbi04MDogIzFmNmIxZTtcbiRjb2xvci1ncmVlbi03MDogIzM1OGEzNDtcbiRjb2xvci1ncmVlbi02MDogIzZkOWE2ZTtcbiRjb2xvci1ncmVlbi01MDogIzg5YTg4ZjtcbiRjb2xvci1ncmVlbi00MDogIzlmYzhhNjtcbiRjb2xvci1ncmVlbi0zMDogI2FhZDZiMztcbiRjb2xvci1ncmVlbi0yMDogI2M5ZTlkMTtcbiRjb2xvci1ncmVlbi0xMDogI2YzZjdmMztcbiRjb2xvci1ncmVlbi1zdGVwcGVyOiAjMTA3RDc5O1xuJGNvbG9yLWdyZWVuLW1lZGl1bTogI2FkZGFhZjtcbiRjb2xvci1ncmVlbi1saWdodDogIzNBQjA5ODtcbiRjb2xvci1ncmVlbi12ZXJ5LWxpZ2h0OiAjRURGRkZDO1xuJGdyZXktMTogI2Q2ZDBkZjtcbiRzdXBwb3J0LTAxOiAjZGExZTI4O1xuJGVycm9yOiAjZWUyMzJmO1xuJHRleHQtYmxhY2s6ICMxNjE2MTY7XG4kdGV4dC1zZWNvbmRhcnk6ICMzOTM5Mzk7XG4kdGV4dC1ncmF5ZWQ6ICM1MjUyNTI7XG4kdGV4dC1ncmF5ZWQ4MDogIzhmOGI4YjtcbiR0ZXh0LWdyYXktY2F0OiAjNmQ3Mjc4O1xuJHVpLWJhY2tncm91bmQtZ3JheTogI2Y4ZjhmOTtcbiRib3JkZXI6ICNlOGU3ZWE7XG4kZW50aXR5LWJvcmRlci1jb2xvcjogIzFjMGYzMDIxO1xuJGxvYWRpbmctYmc6IHJnYigwIDAgMCAvIDE4JSk7XG4kc3VwcG9ydC0wNDogIzAwNDNjZTtcbiRsb29wLXVzZXJuYW1lOiAjMTk4MDM4O1xuJGxvb3AtYWN0aXZlLWN1cnJlbnQtdXNlcjogIzI0YTE0ODtcbiR3YXJtLWdyYXktMTAtY29sb3I6ICNmN2YzZjI7XG4kd2FybS1ncmF5LTIwLWNvbG9yOiAjZTVlMGRmO1xuJGhlYWRpbmctMS1jb2xvcjogIzFjMGYzMDtcbiRoZWFkaW5nLTItY29sb3I6ICMzMjA3NGQ7XG4kaGVhZGluZy0zLWNvbG9yOiAjMmYyNzM1O1xuJG1vYmlsZS1pY29uLWNvbG9yOiAjMWMwZjMwO1xuJHN0YXRlLWRpc2FibGVkLTAyOiAjYzZjNmM2O1xuJGxpbmstMDI6ICM1NjAxYjI7XG4kaGVhZGVyLXB1cnBsZTogIzMxMTM1ZTtcbiRoZWFkZXItZ3JlZW46ICMxMDdkNzk7XG4kcHVycGxlLWxpZ2h0OiAjY2JjNGQ3O1xuJHB1cnBsZS1iYWNrZ3JvdW5kLWxpZ2h0OiAjZGNkNWU3O1xuJGxvb3AtaW50ZXJhY3RpdmUtMDE6ICMxMDdkNzk7XG4kbG9vcC1pbnRlcmFjdGl2ZS0wMS1vcGFjaXR5OiByZ2JhKDE2LCAxMjUsIDEyMSwgMC4zKTtcbiRmaWx0ZXJzLWdyZWVuOiAjMDU2NzYzO1xuLy8gQnJlYWtwb2ludHNcblxuJGJyZWFrcG9pbnQtczogMzc1cHg7XG4kYnJlYWtwb2ludC1zbTogNDIwcHg7XG4kYnJlYWtwb2ludC1tZDogNzY4cHg7XG4kYnJlYWtwb2ludC1sZzogMTA4MHB4O1xuJGJyZWFrcG9pbnQteGw6IDEyNzVweDtcblxuJGJyZWFrcG9pbnQtbWQtdjI6IDgyMHB4O1xuXG4kaGVhZGVyLWhlaWdodDogNC4zNzVyZW07XG4kaGVhZGVyLWhlaWdodC12MjogNC4zNzVyZW07XG4kc3RhdGUtc2VsZWN0ZWQtdWk6ICNlMGUwZTA7XG4kYy1sZWZ0LXBhZGRpbmc6IDEuNXJlbTtcbiRtZW51LWFjdGl2ZS1jb2xvcjogIzNBQjA5ODtcbiRtZW51LWhvdmVyLWNvbG9yOiAjM0FCMDk4O1xuJHRhYi1pbmFjdGl2ZS1jb2xvcjogIzg5YWY5MztcbiRsaW5lLWNvbG9yOiAjZDBkZmQyO1xuJGJvcmRlci1ncmF5OiAjY2NjY2NjO1xuJHRleHQtZ3JheTogIzgwODA4MDtcbiRiYXNlLWNvbnRhaW5lci13aWR0aDogODEuMTI0cmVtO1xuJGhlYWRlci11bmRlcmxpbmUtaGVpZ2h0OiAwLjMxM3JlbTtcblxuLy8gTW9kZXJhdG9yIHJldmlldyBzZWN0aW9uc1xuJGZvb3Rlci1oZWlnaHQ6IDRyZW07XG4kdG9wYmFyLWhlaWdodDogMTAuNXJlbTtcbiRzdGVwcGVyLWhlaWdodDogNi43cmVtO1xuXG4vLyBOZXcgU3RvcnkgZmxvdyAvIHN0b3J5IGRldGFpbHMgdmFyaWFibGVzXG4kZ3JleTogIzY1NjU2NTtcbiRsaWdodC1ncmV5LTI6ICNiMWI0YjY7XG4kbGlnaHQtZ3JleS0zOiAjYjRiNGI0O1xuJGxpZ2h0LWdyZXktNDogI2NmZDNkODtcbiRsaWdodC1ncmV5LTU6ICNkOWUwZTc7XG4kbGlnaHQtZ3JleS02OiAjZjFmMmYyO1xuJGxpZ2h0LWdyZXktNzogI2M0YzRjNDtcbiRsaWdodC1ncmV5LTg6ICNlOWU5ZTk7XG4kbGlnaHQtZ3JleS05OiAjZTZlYWVkO1xuJGxpZ2gtZ3JleS1zZXBhcmF0b3I6ICNjMGMwYzA7XG4kZGFyay1ncmV5OiAjMWExYTFhO1xuJGRhcmstZ3JleS01MDogcmdiKDI2LCAyNiwgMjYsIDAuNSk7XG4kYm9yZGVyLWdyZXk6ICNjN2NkZDQ7XG4kbGlnaHQtcHVycGxlOiAjZWFlYWVhO1xuJGlucHV0LWRpc2FibGVkLWJnOiAjZjRmNmY4O1xuJGVycm9yLTI6ICNkZTIyMmQ7XG4kZGFuZ2VyOiAjYzkzMDRkO1xuJHByZXZpb3VzLXBpbGwtY29sb3I6ICM3MThkNmY7XG4kdG9vbHRpcC1ncmV5OiAjYWJhYmFiO1xuJGxpZ2h0LWdyZWVuOiAjY2ZlNWU0NjY7XG5cbiRmaWx0ZXJzLW1vZGFsLWhlYWRlci16aW5kZXg6IDEwMDAwO1xuJG1vZGFsLXppbmRleDogOTk5OTtcbiRsb2NhdGlvbi1vdmVybGF5LXppbmRleDogOTAwMTtcbiRoZWFkZXItYXNpZGUtemluZGV4OiA4MDAyO1xuJGhlYWRlci1hc2lkZS1iYWNrZ3JvdW5kLXppbmRleDogODAwMTtcbiRoZWFkZXItemluZGV4OiA4MDAwO1xuJG5hdmlnYXRpb24temluZGV4OiA4MDAwO1xuJHBhZ2UtbG9hZGluZy16aW5kZXg6IDcwMDE7XG4kdG9vbHRpcC16aW5kZXg6IDcwMDA7XG4kbmV3LXN0b3J5LWNvbnRlbnQtc3RhdGUtemluZGV4OiA1MDA7XG4kZmlsdGVyLWRyb3Bkb3duLXppbmRleDogMTAwO1xuJG1vZGFsLXRvcC1pbmRpY2F0b3ItemluZGV4OiA1MTtcbiRtb2RhbC10b3AtaW5kaWNhdG9yLWJhY2tncm91bmQtemluZGV4OiA1MTtcbiRjaGFydC16aW5kZXg6IDE7XG4kY2hhcnQtY29udHJvbC16aW5kZXg6IDI7XG5cbiRzbGlkZS10b2dnbGUtZGlzYWJsZWQtb3B0aW9uLWJhY2tncm91bmQ6ICNkZGRkZGQ7XG5cbiR0b2FzdC1pbmZvLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuJHRvYXN0LWluZm8tdGl0bGUtY29sb3I6ICM0OTQ5NDk7XG4kdG9hc3QtaW5mby1tZXNzYWdlLWNvbG9yOiAjNDIyYzAwO1xuJHRvYXN0LWluZm8tYnV0dG9uLWNvbG9yOiAjNmM0ZTk5O1xuXG4kdG9hc3Qtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiAjZDllZWVkO1xuJHRvYXN0LXN1Y2Nlc3MtdGl0bGUtY29sb3I6ICMwMDQ1NDI7XG4kdG9hc3Qtc3VjY2Vzcy1tZXNzYWdlLWNvbG9yOiAjMDEzMjMwO1xuJHRvYXN0LXN1Y2Nlc3MtYnV0dG9uLWNvbG9yOiAjMDE2OTY1O1xuXG4kdG9hc3Qtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMWQ1O1xuJHRvYXN0LXdhcm5pbmctdGl0bGUtY29sb3I6ICM2YjQ3MDA7XG4kdG9hc3Qtd2FybmluZy1tZXNzYWdlLWNvbG9yOiAjNDIyYzAwO1xuJHRvYXN0LXdhcm5pbmctYnV0dG9uLWNvbG9yOiAjY2M4ZjE0O1xuXG4kdG9hc3QtZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogI2Y1ZDVkYjtcbiR0b2FzdC1lcnJvci10aXRsZS1jb2xvcjogIzczMDAxNTtcbiR0b2FzdC1lcnJvci1tZXNzYWdlLWNvbG9yOiAjNDUwNjExO1xuJHRvYXN0LWVycm9yLXN1Y2Nlc3MtY29sb3I6ICNkOWVlZWQ7XG4kdG9hc3QtZXJyb3ItYnV0dG9uLWNvbG9yOiAjYjIxZDM5O1xuXG4kdG9hc3QtY2xvc2UtYnV0dG9uLWNvbG9yOiAjNzMwMDE1O1xuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 3323:
/*!*******************************************************************************************************!*\
  !*** ./src/app/shared/components/post/partials/post-author-date-flat/post-author-date-flat.module.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostAuthorDateFlatModule": () => (/* binding */ PostAuthorDateFlatModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _post_author_date_flat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-author-date-flat.component */ 50454);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class PostAuthorDateFlatModule {
  static #_ = this.ɵfac = function PostAuthorDateFlatModule_Factory(t) {
    return new (t || PostAuthorDateFlatModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: PostAuthorDateFlatModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PostAuthorDateFlatModule, {
    declarations: [_post_author_date_flat_component__WEBPACK_IMPORTED_MODULE_0__.PostAuthorDateFlatComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_post_author_date_flat_component__WEBPACK_IMPORTED_MODULE_0__.PostAuthorDateFlatComponent]
  });
})();

/***/ }),

/***/ 84409:
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/post/partials/reply-form/reply-form.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplyFormComponent": () => (/* binding */ ReplyFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/app-routing.props */ 18854);
/* harmony import */ var _app_core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/services/api/model/channel.enum */ 92128);
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/base.component */ 70697);
/* harmony import */ var _shared_utils_prepare_guard_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/utils/prepare-guard-route */ 29425);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _app_shared_enums_posthog_event_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/enums/posthog-event.enum */ 6804);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/auth/auth.service */ 57990);
/* harmony import */ var _core_services_api_comment_comment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/api/comment/comment.service */ 42075);
/* harmony import */ var _shared_directives_invalid_focusable_focus_invalid_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/directives/invalid-focusable/focus-invalid.service */ 52983);
/* harmony import */ var _shared_services_form_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/services/form-helper.service */ 10841);
/* harmony import */ var _core_services_api_profile_profile_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/services/api/profile/profile.service */ 58230);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _app_shared_services_posthog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/shared/services/posthog.service */ 34642);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _skeleton_text_skeleton_text_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../skeleton-text/skeleton-text.component */ 69096);
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../input/input.component */ 40228);
/* harmony import */ var _textarea_v2_textarea_v2_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../textarea-v2/textarea-v2.component */ 64041);
/* harmony import */ var _icons_chat_reply_icon_chat_reply_icon_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../icons/chat-reply-icon/chat-reply-icon.component */ 19174);
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../button/button.component */ 90042);
/* harmony import */ var _icons_arrow_next_icon_arrow_next_icon_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../icons/arrow-next-icon/arrow-next-icon.component */ 6036);
/* harmony import */ var _checkbox_v2_checkbox_v2_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../checkbox-v2/checkbox-v2.component */ 92875);
/* harmony import */ var _icons_checkmark_round_icon_checkmark_round_icon_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../icons/checkmark-round-icon/checkmark-round-icon.component */ 10569);



























const _c0 = ["contentTextarea"];
function ReplyFormComponent_app_skeleton_text_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-skeleton-text", 3);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("lines", 12);
  }
}
function ReplyFormComponent_ng_template_2_ng_container_6_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "story.replyForm.text.warningSignIn"));
  }
}
function ReplyFormComponent_ng_template_2_ng_container_6_section_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "section", 10)(1, "h4", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](7, "loop-input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](3, 3, "story.replyForm.text.name.label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](6, 5, "story.replyForm.text.name.info"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("small", true);
  }
}
function ReplyFormComponent_ng_template_2_ng_container_6_section_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "section", 10)(1, "h4", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](7, "loop-input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](3, 3, "story.replyForm.text.email.label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](6, 5, "story.replyForm.text.email.nonSensitive.info"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("small", true);
  }
}
function ReplyFormComponent_ng_template_2_ng_container_6_loop_checkbox_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "loop-checkbox", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "story.replyForm.text.checkbox"), " ");
  }
}
function ReplyFormComponent_ng_template_2_ng_container_6_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 24)(1, "div", 25)(2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "div", 25)(8, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function ReplyFormComponent_ng_template_2_ng_container_6_div_16_Template_a_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r11.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](4, 3, "story.replyForm.replyingAs"), "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r10.userProfile.nickname);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](10, 5, "story.replyForm.signOut"), " ");
  }
}
function ReplyFormComponent_ng_template_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "loop-textarea", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, ReplyFormComponent_ng_template_2_ng_container_6_p_5_Template, 3, 3, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, ReplyFormComponent_ng_template_2_ng_container_6_section_6_Template, 8, 7, "section", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, ReplyFormComponent_ng_template_2_ng_container_6_section_7_Template, 8, 7, "section", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, ReplyFormComponent_ng_template_2_ng_container_6_loop_checkbox_9_Template, 3, 3, "loop-checkbox", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "section", 15)(11, "app-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("clicked", function ReplyFormComponent_ng_template_2_ng_container_6_Template_app_button_clicked_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r13.submitComment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](15, "app-arrow-next-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](16, ReplyFormComponent_ng_template_2_ng_container_6_div_16_Template, 11, 7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("infoTooltip", (ctx_r3.story == null ? null : ctx_r3.story.channel) === ctx_r3.CHANNEL_CONSTANTS.SMS ? _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](3, 11, "story.replyForm.text.smsTooltip") : "")("maxLength", (ctx_r3.story == null ? null : ctx_r3.story.channel) === ctx_r3.CHANNEL_CONSTANTS.SMS ? ctx_r3.smsReplyCharactersLimit : ctx_r3.otherReplyCharactersLimit)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](4, 13, "story.replyForm.text.content.placeholder"))("small", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r3.userProfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !(ctx_r3.userProfile == null ? null : ctx_r3.userProfile.nickname));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !(ctx_r3.userProfile == null ? null : ctx_r3.userProfile.email));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r3.userProfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", ctx_r3.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](14, 15, ctx_r3.submitted ? "story.replyForm.text.submitting" : "story.replyForm.text.submit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r3.userProfile);
  }
}
function ReplyFormComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "article", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "app-checkmark-round-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "h3", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "app-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function ReplyFormComponent_ng_template_2_ng_template_7_Template_app_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r15.successMessageShown = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](4, 3, "story.replyForm.success.text.line1"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](7, 5, "story.replyForm.success.text.line2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](10, 7, "story.replyForm.success.action"));
  }
}
function ReplyFormComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "form", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "app-chat-reply-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, ReplyFormComponent_ng_template_2_ng_container_6_Template, 17, 17, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, ReplyFormComponent_ng_template_2_ng_template_7_Template, 11, 9, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](8);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("formGroup", ctx_r2.replyForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 4, "story.replyForm.header.text"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r2.successMessageShown)("ngIfElse", _r4);
  }
}
class ReplyFormComponent extends _shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
  constructor(authService, cd, commentService, focusInvalidService, formHelper, profileService, router, toastr, translateService, posthogService) {
    super();
    this.authService = authService;
    this.cd = cd;
    this.commentService = commentService;
    this.focusInvalidService = focusInvalidService;
    this.formHelper = formHelper;
    this.profileService = profileService;
    this.router = router;
    this.toastr = toastr;
    this.translateService = translateService;
    this.posthogService = posthogService;
    this.minContentChars = 5;
    this.formType = 'story';
    this.skeleton = false;
    this.fieldsTouched = [];
    this.CHANNEL_CONSTANTS = _app_core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_1__.CHANNEL_CONSTANTS;
    this.smsReplyCharactersLimit = 320;
    this.otherReplyCharactersLimit = 30000;
    this.submitted = false;
    this.replyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_20__.UntypedFormGroup({
      content: new _angular_forms__WEBPACK_IMPORTED_MODULE_20__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.maxLength(this.otherReplyCharactersLimit), _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.minLength(this.minContentChars), _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required]),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_20__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.email]),
      nickname: new _angular_forms__WEBPACK_IMPORTED_MODULE_20__.UntypedFormControl(''),
      termsAgree: new _angular_forms__WEBPACK_IMPORTED_MODULE_20__.UntypedFormControl(false, [_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.requiredTrue])
    });
    this.userProfile = this.profileService.userProfile;
  }
  ngOnInit() {
    this.termsAgree.patchValue(!!this.userProfile);
  }
  ngOnChanges() {
    if (this.commentId) {
      this.replyForm.addControl('id', new _angular_forms__WEBPACK_IMPORTED_MODULE_20__.UntypedFormControl(this.commentId.id));
    }
    if (this.commentId?.parentCommentId) {
      this.replyForm.addControl('parentCommentId', new _angular_forms__WEBPACK_IMPORTED_MODULE_20__.UntypedFormControl(this.commentId.parentCommentId));
    }
  }
  get content() {
    return this.replyForm.get('content');
  }
  get email() {
    return this.replyForm.get('email');
  }
  get termsAgree() {
    return this.replyForm.get('termsAgree');
  }
  shouldShowValidation(name) {
    return this.replyForm.get(name).invalid && (this.submitted || this.focusedOut(name));
  }
  focusedOut(name) {
    return this.fieldsTouched.indexOf(name) >= 0;
  }
  validate(name) {
    this.fieldsTouched.push(name);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  resetForm() {
    this.replyForm.reset();
    this.replyForm.get('id')?.setValue(this.commentId.id);
    this.replyForm.get('parentCommentId')?.setValue(this.commentId.parentCommentId);
    this.replyForm.markAsPristine();
    this.replyForm.markAsUntouched();
    this.replyForm.get('termsAgree').setValue(!!this.userProfile);
    this.submitted = false;
    this.fieldsTouched = new Array();
    this.cd.markForCheck();
  }
  onSuccess() {
    // TODO
  }
  unblockForm() {
    this.submitted = false;
    this.cd.markForCheck();
  }
  submitComment() {
    this.replyForm.markAllAsTouched();
    this.formHelper.markAllAsDirty(this.replyForm);
    if (this.replyForm.invalid) {
      this.focusInvalidService.focusFirstInvalidFocusableElement();
      return;
    }
    if (this.replyForm.valid && !this.submitted) {
      this.submitted = true;
      const payload = {
        ...this.replyForm.value,
        id: undefined,
        termsAgree: undefined
      };
      if (this.userProfile?.nickname && this.userProfile?.email) {
        payload.nickname = undefined;
        payload.email = undefined;
      }
      Object.keys(payload).forEach(key => {
        payload[key] = payload[key] ? payload[key] : undefined;
      });
      this.commentService.addComment(this.replyForm.value.id, payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.takeUntil)(this.destroyed$)).subscribe(res => {
        if (res.success) {
          this.resetForm();
          this.successMessageShown = true;
          this.posthogService.trackEvent(_app_shared_enums_posthog_event_enum__WEBPACK_IMPORTED_MODULE_4__.POSTHOG_EVENTS.SUBMIT_REPLY, {
            case: this.replyForm.value.id,
            user: this.userProfile.id
          });
        } else {
          this.toastr.error(this.translateService.instant('story.replyForm.toast.error.title'), this.translateService.instant('story.replyForm.toast.error.subtitle'));
          this.unblockForm();
        }
      }, () => {
        this.toastr.error(this.translateService.instant('story.replyForm.toast.error.title'), this.translateService.instant('story.replyForm.toast.error.subtitle'));
        this.unblockForm();
      });
    }
  }
  logout() {
    this.authService.logout();
    this.toastr.success(this.translateService.instant('auth.logout.toast.success.subtitle'));
    this.replyForm.get('termsAgree').setValue(false);
    this.userProfile = null;
    (0,_shared_utils_prepare_guard_route__WEBPACK_IMPORTED_MODULE_3__.forceNavigate)(this.router, (0,_shared_utils_prepare_guard_route__WEBPACK_IMPORTED_MODULE_3__.prepareGuardRoute)(this.router.url), (0,_shared_utils_prepare_guard_route__WEBPACK_IMPORTED_MODULE_3__.prepareGuardRoute)(`${_app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.MAIN_ROUTES.AUTH}/${_app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.AUTH_ROUTES.MAGIC_LINK_LOGIN}`));
    this.cd.markForCheck();
  }
  static #_ = this.ɵfac = function ReplyFormComponent_Factory(t) {
    return new (t || ReplyFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_19__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_services_api_comment_comment_service__WEBPACK_IMPORTED_MODULE_6__.CommentService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_shared_directives_invalid_focusable_focus_invalid_service__WEBPACK_IMPORTED_MODULE_7__.FocusInvalidService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_shared_services_form_helper_service__WEBPACK_IMPORTED_MODULE_8__.FormHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_services_api_profile_profile_service__WEBPACK_IMPORTED_MODULE_9__.ProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_24__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_app_shared_services_posthog_service__WEBPACK_IMPORTED_MODULE_10__.PosthogService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
    type: ReplyFormComponent,
    selectors: [["app-reply-form"]],
    viewQuery: function ReplyFormComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵloadQuery"]()) && (ctx.contentTextAreaRef = _t.first);
      }
    },
    inputs: {
      formType: "formType",
      commentId: "commentId",
      skeleton: "skeleton",
      focus: "focus",
      story: "story"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵNgOnChangesFeature"]],
    decls: 4,
    vars: 2,
    consts: [[1, "reply-form"], [3, "lines", 4, "ngIf", "ngIfElse"], ["replyFormBlock", ""], [3, "lines"], [3, "formGroup"], [1, "reply-form__header"], [1, "reply-form__header-icon"], [1, "reply-form__header-text"], [4, "ngIf", "ngIfElse"], ["successMessage", ""], [1, "reply-form__section"], ["formControlName", "content", 3, "infoTooltip", "maxLength", "placeholder", "small"], ["class", "subtext-textarea", 4, "ngIf"], ["class", "reply-form__section", 4, "ngIf"], ["formControlName", "termsAgree", 4, "ngIf"], [1, "reply-form__actions"], ["mode", "v2", "variant", "primary", 1, "reply-form__submit-button", 3, "disabled", "clicked"], ["class", "d-none mb-1-mobile", 4, "ngIf"], [1, "subtext-textarea"], [1, "reply-form__section-heading"], [1, "reply-form__section-text"], ["formControlName", "nickname", 1, "reply-form__section-input", 3, "small"], ["formControlName", "email", 1, "reply-form__section-input", 3, "small"], ["formControlName", "termsAgree"], [1, "d-none", "mb-1-mobile"], [1, "text-small", "t-medium", "text-right"], [1, "text-grayed"], [1, "username-01"], ["href", "javascript:void(0)", 1, "text-highlight2", "link-basic-over", 3, "click"], [1, "reply-form__success-message"], [1, "reply-form__success-message-icon"], [1, "reply-form__success-message-text"], ["variant", "link-2", "noPadding", "true", 3, "click"]],
    template: function ReplyFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, ReplyFormComponent_app_skeleton_text_1_Template, 1, 1, "app-skeleton-text", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, ReplyFormComponent_ng_template_2_Template, 9, 6, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.skeleton)("ngIfElse", _r1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_26__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormControlName, _skeleton_text_skeleton_text_component__WEBPACK_IMPORTED_MODULE_11__.SkeletonTextComponent, _input_input_component__WEBPACK_IMPORTED_MODULE_12__.InputComponent, _textarea_v2_textarea_v2_component__WEBPACK_IMPORTED_MODULE_13__.TextareaV2Component, _icons_chat_reply_icon_chat_reply_icon_component__WEBPACK_IMPORTED_MODULE_14__.ChatReplyIconComponent, _button_button_component__WEBPACK_IMPORTED_MODULE_15__.ButtonComponent, _icons_arrow_next_icon_arrow_next_icon_component__WEBPACK_IMPORTED_MODULE_16__.ArrowNextIconComponent, _checkbox_v2_checkbox_v2_component__WEBPACK_IMPORTED_MODULE_17__.CheckboxV2Component, _icons_checkmark_round_icon_checkmark_round_icon_component__WEBPACK_IMPORTED_MODULE_18__.CheckmarkRoundIconComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslatePipe],
    styles: [".bx--form-item[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem !important;\n}\n\n.reply-gray[_ngcontent-%COMP%] {\n  color: #393939;\n}\n\n.subtext-textarea[_ngcontent-%COMP%] {\n  color: grey;\n  font-size: smaller;\n}\n\n.reply-form__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: -0.313rem;\n}\n.reply-form__header-icon[_ngcontent-%COMP%] {\n  color: #107d79;\n}\nhtml:not([dir=rtl])[_nghost-%COMP%]   .reply-form__header-icon[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .reply-form__header-icon[_ngcontent-%COMP%] {\n  margin-right: 0.938rem;\n}\nhtml[dir=rtl][_nghost-%COMP%]   .reply-form__header-icon[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .reply-form__header-icon[_ngcontent-%COMP%] {\n  margin-left: 0.938rem;\n}\n.reply-form__header-text[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1a1a1a;\n}\n.reply-form__section[_ngcontent-%COMP%] {\n  margin-bottom: 1.875rem;\n}\n.reply-form__section[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 2.5rem;\n}\n.reply-form__section-heading[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin-bottom: 0.063rem;\n}\nhtml:not([dir=rtl])[_nghost-%COMP%]   .reply-form__section-heading[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .reply-form__section-heading[_ngcontent-%COMP%] {\n  text-align: left;\n}\nhtml[dir=rtl][_nghost-%COMP%]   .reply-form__section-heading[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .reply-form__section-heading[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.reply-form__section-text[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #656565;\n  margin-bottom: 0;\n  max-width: 24.75rem;\n}\nhtml:not([dir=rtl])[_nghost-%COMP%]   .reply-form__section-text[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .reply-form__section-text[_ngcontent-%COMP%] {\n  text-align: left;\n}\nhtml[dir=rtl][_nghost-%COMP%]   .reply-form__section-text[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .reply-form__section-text[_ngcontent-%COMP%] {\n  text-align: right;\n}\n@media (max-width: 767.9px) {\n  .reply-form__section-text[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n.reply-form__section-input[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.938rem;\n  max-width: 24.75rem;\n}\n@media (max-width: 767.9px) {\n  .reply-form__section-input[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n.reply-form__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 2.5rem;\n}\n.reply-form__submit-button[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.reply-form__submit-button[_ngcontent-%COMP%]     button {\n  max-width: 19.063rem;\n  width: 100%;\n  padding: 1.25rem 1.625rem;\n}\n.reply-form__submit-button[_ngcontent-%COMP%]     button .content {\n  justify-content: space-between;\n}\n@media (max-width: 767.9px) {\n  .reply-form__submit-button[_ngcontent-%COMP%]     button {\n    max-width: 100%;\n    width: 100%;\n  }\n}\n.reply-form__success-message[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 5.18rem;\n  padding-bottom: 2.813rem;\n}\n@media (max-width: 767.9px) {\n  .reply-form__success-message[_ngcontent-%COMP%] {\n    padding-top: 4rem;\n  }\n}\n.reply-form__success-message-icon[_ngcontent-%COMP%] {\n  color: #107d79;\n  margin-bottom: 1.25rem;\n}\n.reply-form__success-message-icon[_ngcontent-%COMP%]     svg {\n  height: 2.875rem;\n  width: 2.875rem;\n}\n@media (max-width: 767.9px) {\n  .reply-form__success-message-icon[_ngcontent-%COMP%] {\n    margin-bottom: 1.675rem;\n  }\n}\n.reply-form__success-message-text[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  color: #1a1a1a;\n  margin-bottom: 1.25rem;\n}\n@media (max-width: 767.9px) {\n  .reply-form__success-message-text[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    margin-bottom: 0.808rem;\n  }\n}\n.reply-form__success-message[_ngcontent-%COMP%]     .button .content {\n  font-size: 1.125rem;\n  font-weight: 600;\n  font-style: normal;\n}\n@media (max-width: 767.9px) {\n  .reply-form__success-message[_ngcontent-%COMP%]     .button .content {\n    font-size: 0.875rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcGx5LWZvcm0uY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2xvb3AtZGVzaWduLXN5c3RlbS9fY29sb3JzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsZ0NBQUE7QUFIRjs7QUFNQTtFQUNFLGNDNkJlO0FEaENqQjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU9FO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUFKSjtBQU1JO0VBQ0UsY0VwQlc7QUZnQmpCO0FHc0JFO0VBMENJLHNCSDNEc0I7QUFGNUI7QUd5QkU7RUF3Q0kscUJIL0RzQjtBQUM1QjtBQUVJO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNDd0VNO0FEeEVaO0FBSUU7RUFDRSx1QkFBQTtBQUZKO0FBSUk7RUFDRSxxQkFBQTtBQUZOO0FBS0k7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBRUEsY0N5RE07RUR4RE4sdUJBQUE7QUFKTjtBR0RFO0VBc0JJLGdCQXFEMkI7QUh2RWpDO0FHRUU7RUFvQkksaUJBaURpQztBSHBFdkM7QUFHSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGNDcUNDO0VEcENELGdCQUFBO0VBQ0EsbUJBUmdCO0FBTXRCO0FHZEU7RUFzQkksZ0JBcUQyQjtBSDFEakM7QUdYRTtFQW9CSSxpQkFpRGlDO0FIdkR2QztBR3lIRTtFSG5JRTtJQVNJLGVBQUE7RUFLTjtBQUNGO0FBRkk7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFsQmdCO0FBc0J0QjtBRytHRTtFSHRIRTtJQU1JLGVBQUE7RUFLTjtBQUNGO0FBREU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBR0o7QUFBRTtFQUNFLFlBQUE7QUFFSjtBQUNNO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFDUjtBQUNRO0VBQ0UsOEJBQUE7QUFDVjtBR3lGRTtFSGhHSTtJQVVJLGVBQUE7SUFDQSxXQUFBO0VBQ1I7QUFDRjtBQUlFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7QUFGSjtBRzJFRTtFSC9FQTtJQVNJLGlCQUFBO0VBREo7QUFDRjtBQUdJO0VBUUUsY0V4SFc7RUZ5SFgsc0JBQUE7QUFSTjtBQUNRO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBQ1Y7QUc4REU7RUhuRUU7SUFZSSx1QkFBQTtFQUhOO0FBQ0Y7QUFNSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNDcENNO0VEcUNOLHNCQUFBO0FBSk47QUcrQ0U7RUhuREU7SUFXSSxlQUFBO0lBQ0EsdUJBQUE7RUFITjtBQUNGO0FBUVE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFOVjtBR29DRTtFSGpDTTtJQU1JLG1CQUFBO0VBTFY7QUFDRiIsImZpbGUiOiJyZXBseS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcbkBpbXBvcnQgJ2xvb3AtZGVzaWduLXN5c3RlbS9jb2xvcnMnO1xuQGltcG9ydCAnbWl4aW5zJztcblxuLmJ4LS1mb3JtLWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnJlcGx5LWdyYXkge1xuICBjb2xvcjogJHRleHQtc2Vjb25kYXJ5O1xufVxuXG4uc3VidGV4dC10ZXh0YXJlYSB7XG4gIGNvbG9yOiBncmV5O1xuICBmb250LXNpemU6IHNtYWxsZXI7XG59XG5cbi5yZXBseS1mb3JtIHtcbiAgJl9faGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogLTAuMzEzcmVtO1xuXG4gICAgJi1pY29uIHtcbiAgICAgIGNvbG9yOiAkbG9vcC1ncmVlbi0xMDA7XG4gICAgICBAaW5jbHVkZSBtYXJnaW4tcmlnaHQoMC45MzhyZW0pO1xuICAgIH1cblxuICAgICYtdGV4dCB7XG4gICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAkZGFyay1ncmV5O1xuICAgIH1cbiAgfVxuXG4gICZfX3NlY3Rpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDEuODc1cmVtO1xuXG4gICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xuICAgIH1cblxuICAgICYtaGVhZGluZyB7XG4gICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIEBpbmNsdWRlIHRleHQtYWxpZ24tbGVmdDtcbiAgICAgIGNvbG9yOiAkZGFyay1ncmV5O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC4wNjNyZW07XG4gICAgfVxuXG4gICAgJGlucHV0LW1heC13aWR0aDogMjQuNzVyZW07XG5cbiAgICAmLXRleHQge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgIEBpbmNsdWRlIHRleHQtYWxpZ24tbGVmdDtcbiAgICAgIGNvbG9yOiAkZ3JleTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICBtYXgtd2lkdGg6ICRpbnB1dC1tYXgtd2lkdGg7XG5cbiAgICAgIEBpbmNsdWRlIG1vYmlsZS1vbmx5IHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgICYtaW5wdXQge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tdG9wOiAwLjkzOHJlbTtcbiAgICAgIG1heC13aWR0aDogJGlucHV0LW1heC13aWR0aDtcblxuICAgICAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJl9fYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyLjVyZW07XG4gIH1cblxuICAmX19zdWJtaXQtYnV0dG9uIHtcbiAgICBmbGV4LWdyb3c6IDE7XG5cbiAgICA6Om5nLWRlZXAge1xuICAgICAgYnV0dG9uIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxOS4wNjNyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAxLjI1cmVtIDEuNjI1cmVtO1xuXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cblxuICAgICAgICBAaW5jbHVkZSBtb2JpbGUtb25seSB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJl9fc3VjY2Vzcy1tZXNzYWdlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogNS4xOHJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMi44MTNyZW07XG5cbiAgICBAaW5jbHVkZSBtb2JpbGUtb25seSB7XG4gICAgICBwYWRkaW5nLXRvcDogNHJlbTtcbiAgICB9XG5cbiAgICAmLWljb24ge1xuICAgICAgOjpuZy1kZWVwIHtcbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICBoZWlnaHQ6IDIuODc1cmVtO1xuICAgICAgICAgIHdpZHRoOiAyLjg3NXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb2xvcjogJGxvb3AtZ3JlZW4tMTAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcblxuICAgICAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjY3NXJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLXRleHQge1xuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICRkYXJrLWdyZXk7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuXG4gICAgICBAaW5jbHVkZSBtb2JpbGUtb25seSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC44MDhyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgOjpuZy1kZWVwIHtcbiAgICAgIC5idXR0b24ge1xuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcblxuICAgICAgICAgIEBpbmNsdWRlIG1vYmlsZS1vbmx5IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiJHN0YW5kYXJkRm9udEZhbWlseTogJ05vdG8gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGNvbnRlbnQtdG9wLXBhZGRpbmc6IDNyZW07XG4kcG9zdC1saXN0LWJnOiAjZGFkYWRhO1xuJHdoaXRlOiAjZmZmZmZmO1xuJHBvc3QtcHJldmlldy1iZzogd2hpdGU7XG4kbGlnaHQtZ3JheS1iZzogI2Y0ZjRmNDtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1sZWZ0OiAyLjM0NHJlbTtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1yaWdodDogMS4wNjNyZW07XG4kcG9zdC1wcmV2aWV3LXBhZGRpbmc6IDIuNXJlbSAkcG9zdC1wcmV2aWV3LXBhZGRpbmctcmlnaHQgMS4yNXJlbSAkcG9zdC1wcmV2aWV3LXBhZGRpbmctbGVmdDtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1tb2JpbGU6IDFyZW0gMXJlbSAwLjVyZW0gMXJlbTtcbiRwb3N0LXBhZGRpbmctYm90dG9tOiAxcmVtO1xuJHBvc3QtcHJldmlldy1ndXR0ZXI6IDJweDtcbiRwb3N0LWhpZ2hsaWdodC1jb2xvcjogIzU3MGY4NTtcbiRjb2xvci1wdXJwbGUtOTA6ICMzMTEzNWU7XG4kY29sb3ItcHVycGxlLTYwOiAjOTg4YWFlO1xuJGNvbG9yLXB1cnBsZS01MDogIzk4ODlhZjtcbiRjb2xvci1wdXJwbGUtMTA6ICNmNWYzZjc7XG4kY29sb3ItcHVycGxlLWxpZ2h0OiAjNGIzNWJjO1xuJGNvbG9yLXB1cnBsZS12ZXJ5LWxpZ2h0OiAjODY2YWIwO1xuJGNvbG9yLXB1cnBsZS1zdGVwcGVyOiAjNGEyYjdhO1xuJGNvbG9yLWdyZWVuLTEwMDogIzA1MjgwNDtcbiRjb2xvci1ncmVlbi05MDogIzBkM2QwYjtcbiRjb2xvci1ncmVlbi04MDogIzFmNmIxZTtcbiRjb2xvci1ncmVlbi03MDogIzM1OGEzNDtcbiRjb2xvci1ncmVlbi02MDogIzZkOWE2ZTtcbiRjb2xvci1ncmVlbi01MDogIzg5YTg4ZjtcbiRjb2xvci1ncmVlbi00MDogIzlmYzhhNjtcbiRjb2xvci1ncmVlbi0zMDogI2FhZDZiMztcbiRjb2xvci1ncmVlbi0yMDogI2M5ZTlkMTtcbiRjb2xvci1ncmVlbi0xMDogI2YzZjdmMztcbiRjb2xvci1ncmVlbi1zdGVwcGVyOiAjMTA3RDc5O1xuJGNvbG9yLWdyZWVuLW1lZGl1bTogI2FkZGFhZjtcbiRjb2xvci1ncmVlbi1saWdodDogIzNBQjA5ODtcbiRjb2xvci1ncmVlbi12ZXJ5LWxpZ2h0OiAjRURGRkZDO1xuJGdyZXktMTogI2Q2ZDBkZjtcbiRzdXBwb3J0LTAxOiAjZGExZTI4O1xuJGVycm9yOiAjZWUyMzJmO1xuJHRleHQtYmxhY2s6ICMxNjE2MTY7XG4kdGV4dC1zZWNvbmRhcnk6ICMzOTM5Mzk7XG4kdGV4dC1ncmF5ZWQ6ICM1MjUyNTI7XG4kdGV4dC1ncmF5ZWQ4MDogIzhmOGI4YjtcbiR0ZXh0LWdyYXktY2F0OiAjNmQ3Mjc4O1xuJHVpLWJhY2tncm91bmQtZ3JheTogI2Y4ZjhmOTtcbiRib3JkZXI6ICNlOGU3ZWE7XG4kZW50aXR5LWJvcmRlci1jb2xvcjogIzFjMGYzMDIxO1xuJGxvYWRpbmctYmc6IHJnYigwIDAgMCAvIDE4JSk7XG4kc3VwcG9ydC0wNDogIzAwNDNjZTtcbiRsb29wLXVzZXJuYW1lOiAjMTk4MDM4O1xuJGxvb3AtYWN0aXZlLWN1cnJlbnQtdXNlcjogIzI0YTE0ODtcbiR3YXJtLWdyYXktMTAtY29sb3I6ICNmN2YzZjI7XG4kd2FybS1ncmF5LTIwLWNvbG9yOiAjZTVlMGRmO1xuJGhlYWRpbmctMS1jb2xvcjogIzFjMGYzMDtcbiRoZWFkaW5nLTItY29sb3I6ICMzMjA3NGQ7XG4kaGVhZGluZy0zLWNvbG9yOiAjMmYyNzM1O1xuJG1vYmlsZS1pY29uLWNvbG9yOiAjMWMwZjMwO1xuJHN0YXRlLWRpc2FibGVkLTAyOiAjYzZjNmM2O1xuJGxpbmstMDI6ICM1NjAxYjI7XG4kaGVhZGVyLXB1cnBsZTogIzMxMTM1ZTtcbiRoZWFkZXItZ3JlZW46ICMxMDdkNzk7XG4kcHVycGxlLWxpZ2h0OiAjY2JjNGQ3O1xuJHB1cnBsZS1iYWNrZ3JvdW5kLWxpZ2h0OiAjZGNkNWU3O1xuJGxvb3AtaW50ZXJhY3RpdmUtMDE6ICMxMDdkNzk7XG4kbG9vcC1pbnRlcmFjdGl2ZS0wMS1vcGFjaXR5OiByZ2JhKDE2LCAxMjUsIDEyMSwgMC4zKTtcbiRmaWx0ZXJzLWdyZWVuOiAjMDU2NzYzO1xuLy8gQnJlYWtwb2ludHNcblxuJGJyZWFrcG9pbnQtczogMzc1cHg7XG4kYnJlYWtwb2ludC1zbTogNDIwcHg7XG4kYnJlYWtwb2ludC1tZDogNzY4cHg7XG4kYnJlYWtwb2ludC1sZzogMTA4MHB4O1xuJGJyZWFrcG9pbnQteGw6IDEyNzVweDtcblxuJGJyZWFrcG9pbnQtbWQtdjI6IDgyMHB4O1xuXG4kaGVhZGVyLWhlaWdodDogNC4zNzVyZW07XG4kaGVhZGVyLWhlaWdodC12MjogNC4zNzVyZW07XG4kc3RhdGUtc2VsZWN0ZWQtdWk6ICNlMGUwZTA7XG4kYy1sZWZ0LXBhZGRpbmc6IDEuNXJlbTtcbiRtZW51LWFjdGl2ZS1jb2xvcjogIzNBQjA5ODtcbiRtZW51LWhvdmVyLWNvbG9yOiAjM0FCMDk4O1xuJHRhYi1pbmFjdGl2ZS1jb2xvcjogIzg5YWY5MztcbiRsaW5lLWNvbG9yOiAjZDBkZmQyO1xuJGJvcmRlci1ncmF5OiAjY2NjY2NjO1xuJHRleHQtZ3JheTogIzgwODA4MDtcbiRiYXNlLWNvbnRhaW5lci13aWR0aDogODEuMTI0cmVtO1xuJGhlYWRlci11bmRlcmxpbmUtaGVpZ2h0OiAwLjMxM3JlbTtcblxuLy8gTW9kZXJhdG9yIHJldmlldyBzZWN0aW9uc1xuJGZvb3Rlci1oZWlnaHQ6IDRyZW07XG4kdG9wYmFyLWhlaWdodDogMTAuNXJlbTtcbiRzdGVwcGVyLWhlaWdodDogNi43cmVtO1xuXG4vLyBOZXcgU3RvcnkgZmxvdyAvIHN0b3J5IGRldGFpbHMgdmFyaWFibGVzXG4kZ3JleTogIzY1NjU2NTtcbiRsaWdodC1ncmV5LTI6ICNiMWI0YjY7XG4kbGlnaHQtZ3JleS0zOiAjYjRiNGI0O1xuJGxpZ2h0LWdyZXktNDogI2NmZDNkODtcbiRsaWdodC1ncmV5LTU6ICNkOWUwZTc7XG4kbGlnaHQtZ3JleS02OiAjZjFmMmYyO1xuJGxpZ2h0LWdyZXktNzogI2M0YzRjNDtcbiRsaWdodC1ncmV5LTg6ICNlOWU5ZTk7XG4kbGlnaHQtZ3JleS05OiAjZTZlYWVkO1xuJGxpZ2gtZ3JleS1zZXBhcmF0b3I6ICNjMGMwYzA7XG4kZGFyay1ncmV5OiAjMWExYTFhO1xuJGRhcmstZ3JleS01MDogcmdiKDI2LCAyNiwgMjYsIDAuNSk7XG4kYm9yZGVyLWdyZXk6ICNjN2NkZDQ7XG4kbGlnaHQtcHVycGxlOiAjZWFlYWVhO1xuJGlucHV0LWRpc2FibGVkLWJnOiAjZjRmNmY4O1xuJGVycm9yLTI6ICNkZTIyMmQ7XG4kZGFuZ2VyOiAjYzkzMDRkO1xuJHByZXZpb3VzLXBpbGwtY29sb3I6ICM3MThkNmY7XG4kdG9vbHRpcC1ncmV5OiAjYWJhYmFiO1xuJGxpZ2h0LWdyZWVuOiAjY2ZlNWU0NjY7XG5cbiRmaWx0ZXJzLW1vZGFsLWhlYWRlci16aW5kZXg6IDEwMDAwO1xuJG1vZGFsLXppbmRleDogOTk5OTtcbiRsb2NhdGlvbi1vdmVybGF5LXppbmRleDogOTAwMTtcbiRoZWFkZXItYXNpZGUtemluZGV4OiA4MDAyO1xuJGhlYWRlci1hc2lkZS1iYWNrZ3JvdW5kLXppbmRleDogODAwMTtcbiRoZWFkZXItemluZGV4OiA4MDAwO1xuJG5hdmlnYXRpb24temluZGV4OiA4MDAwO1xuJHBhZ2UtbG9hZGluZy16aW5kZXg6IDcwMDE7XG4kdG9vbHRpcC16aW5kZXg6IDcwMDA7XG4kbmV3LXN0b3J5LWNvbnRlbnQtc3RhdGUtemluZGV4OiA1MDA7XG4kZmlsdGVyLWRyb3Bkb3duLXppbmRleDogMTAwO1xuJG1vZGFsLXRvcC1pbmRpY2F0b3ItemluZGV4OiA1MTtcbiRtb2RhbC10b3AtaW5kaWNhdG9yLWJhY2tncm91bmQtemluZGV4OiA1MTtcbiRjaGFydC16aW5kZXg6IDE7XG4kY2hhcnQtY29udHJvbC16aW5kZXg6IDI7XG5cbiRzbGlkZS10b2dnbGUtZGlzYWJsZWQtb3B0aW9uLWJhY2tncm91bmQ6ICNkZGRkZGQ7XG5cbiR0b2FzdC1pbmZvLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuJHRvYXN0LWluZm8tdGl0bGUtY29sb3I6ICM0OTQ5NDk7XG4kdG9hc3QtaW5mby1tZXNzYWdlLWNvbG9yOiAjNDIyYzAwO1xuJHRvYXN0LWluZm8tYnV0dG9uLWNvbG9yOiAjNmM0ZTk5O1xuXG4kdG9hc3Qtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiAjZDllZWVkO1xuJHRvYXN0LXN1Y2Nlc3MtdGl0bGUtY29sb3I6ICMwMDQ1NDI7XG4kdG9hc3Qtc3VjY2Vzcy1tZXNzYWdlLWNvbG9yOiAjMDEzMjMwO1xuJHRvYXN0LXN1Y2Nlc3MtYnV0dG9uLWNvbG9yOiAjMDE2OTY1O1xuXG4kdG9hc3Qtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMWQ1O1xuJHRvYXN0LXdhcm5pbmctdGl0bGUtY29sb3I6ICM2YjQ3MDA7XG4kdG9hc3Qtd2FybmluZy1tZXNzYWdlLWNvbG9yOiAjNDIyYzAwO1xuJHRvYXN0LXdhcm5pbmctYnV0dG9uLWNvbG9yOiAjY2M4ZjE0O1xuXG4kdG9hc3QtZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogI2Y1ZDVkYjtcbiR0b2FzdC1lcnJvci10aXRsZS1jb2xvcjogIzczMDAxNTtcbiR0b2FzdC1lcnJvci1tZXNzYWdlLWNvbG9yOiAjNDUwNjExO1xuJHRvYXN0LWVycm9yLXN1Y2Nlc3MtY29sb3I6ICNkOWVlZWQ7XG4kdG9hc3QtZXJyb3ItYnV0dG9uLWNvbG9yOiAjYjIxZDM5O1xuXG4kdG9hc3QtY2xvc2UtYnV0dG9uLWNvbG9yOiAjNzMwMDE1O1xuIiwiLy8vIGh0dHBzOi8vd3d3LmZpZ21hLmNvbS9maWxlL0dubTAycVQ4bEwxWEV2dE1GT1I2UkwvTG9vcC0yMDIxLUZlYXR1cmUtRGV2ZWxvcG1lbnQ/bm9kZS1pZD00JTNBMzAwXG5cbi8vLyBUaGlzIGlzIHRoZSBtYWluIGNvbG91ciBmb3IgYWxsIHRoZSBlbGVtZW50cy4gSXQgaXMgdXNlZCB0byBjcmVhdGUgYWxsIG9mIHRoZSBpbnB1dCBmaWVsZHMsIGZvciBpY29ucyBldGNcbiRsb29wLWdyZWVuLTEyNTogIzA1Njc2MztcbiRsb29wLWdyZWVuLTEwMDogIzEwN2Q3OTtcbiRsb29wLWdyZWVuLTUwOiAjODdiZWJjO1xuJGxvb3AtZ3JlZW4tMjU6ICNjM2RmZGQ7XG4kbG9vcC1ncmVlbi01OiAjZjNmOGY4O1xuXG4vLy8gVXNlZCBpbiBuYXZpZ2F0aW9uIGFuZCBhcyBzZWNvbmRhcnkgZWxlbWVudCBjb2xvdXJzIG9uIGJ1dHRvbnMgYW5kIGxpbmtzXG4kbG9vcC1wdXJwbGUtMTI1OiAjMjYxMDQ3O1xuJGxvb3AtcHVycGxlLTEwMDogIzMxMTM1ZTtcbiRsb29wLXB1cnBsZS03NTogIzQ2MjQ3ODtcbiRsb29wLXB1cnBsZS02MDogIzg2NmFiMDtcbiRsb29wLXB1cnBsZS01MDogIzhhN2JhMTtcbiRsb29wLXB1cnBsZS00MDogI2VhZTZmMDtcbiRsb29wLXB1cnBsZS0yNTogI2NiYzRkNztcbiRsb29wLXB1cnBsZS01OiAjZjVmM2Y3O1xuXG4vLy8gVXNlZCBhcyBiYWNrZ3JvdW5kIGZvciBkaXNhYmxlZCBsYWJlbHMgYW5kIGZpZWxkcyBhcyB3ZWxsIGFzIGZvciB0YWdzXG4kbGlnaHQtZ3JleTogI2VlZWVlZTtcblxuLy8vIEdyZXlzY2FsZVxuJGdyZXktMTAwOiAjMDAwMDAwO1xuJGdyZXktNTA6IHRyYW5zcGFyZW50aXplKCRncmV5LTEwMCwgMSAtIDAuNSk7XG4kZ3JleS0yNTogdHJhbnNwYXJlbnRpemUoJGdyZXktMTAwLCAxIC0gMC4yNSk7XG4kZ3JleS01OiB0cmFuc3BhcmVudGl6ZSgkZ3JleS0xMDAsIDEgLSAwLjA1KTtcblxuLy8vIG5vdGlmaWNhdGlvbnMsIHN0YXR1cywgY2F0ZWdvcmllc1xuLy8vIHdhcm5pbmcsIGFsZXJ0XG4kZGFuZ2VyLXJlZDogI2VlMjMyZjtcbi8vLyBvaywgYWNjZXB0ZWQsIGZpbmlzaGVkXG4keWVzLWdyZWVuOiAjMWRiMDQ2O1xuLy8vIHBlbmRpbmdcbiRsb29wLXllbGxvdzogI2VjYjMyMDtcblxuLy8vIGhpZ2hsaWdodCBjb2xvdXJzXG4kcHVycGxlLWhpZ2hsaWdodDogIzZmMDFlNTtcbiRwdXJwbGUtaGlnaGxpZ2h0LTAyNTogcmdiYSgxMTEsIDEsIDIyOSwgMC4yNSk7XG4kbG9vcC1waW5rOiAjZWY0N2EyO1xuJGxvb3AtcGluay0wMjU6IHJnYmEoMjM5LCA3MSwgMTYyLCAwLjI1KTtcbiRsaWdodC1ibHVlOiAjMjBkM2VjO1xuJGxpZ2h0LWJsdWUtMDI1OiByZ2JhKDMyLCAyMTEsIDIzNiwgMC4yNSk7XG4kbG9vcC1ibHVlOiAjMjA3MmVjO1xuJGxvb3AtYmx1ZS0wMjU6IHJnYmEoMzIsIDExNCwgMjM2LCAwLjI1KTtcbiRncmVlbi0yOiAjYzNlYzIwO1xuJGdyZWVuLTItMDI1OiByZ2JhKDE5NSwgMjM2LCAzMiwgMC4yNSk7XG4kbG9vcC1vcmFuZ2U6ICNlOTgwMjA7XG4kbG9vcC1vcmFuZ2UtMDI1OiByZ2JhKDIzMywgMTI4LCAzMiwgMC4yNSk7XG5cbi8vLyBTcGFjZXJzXG4kZ3JheS1saW5lLWNvbG9yOiAjZDZkMGRmO1xuXG4kbG9vcC1yZWQtZGFyazogI2M5MzA0ZDtcbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbkBtaXhpbiBmbGV4LWdhcCgkZ2FwLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBtYXJnaW4tdG9wOiAoLSRnYXApO1xuICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgoLSRnYXApLCAkZ2xvYmFsKTtcblxuICA+ICoge1xuICAgIG1hcmdpbi10b3A6ICRnYXA7XG4gICAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoJGdhcCwgJGdsb2JhbCk7XG4gIH1cbn1cblxuQG1peGluIGJhc2UtY29udGFpbmVyKCRjb250ZW50LXdpZHRoKSB7XG4gICRkZXNrdG9wLXBhZGRpbmc6IDJyZW07XG4gIG1heC13aWR0aDogY2FsYygjeyRjb250ZW50LXdpZHRofSArICgjeyRkZXNrdG9wLXBhZGRpbmd9KSk7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDJyZW0pIHtcbiAgICBAaW5jbHVkZSBwYWRkaW5nLWxlZnQoJGRlc2t0b3AtcGFkZGluZywgdHJ1ZSk7XG4gICAgQGluY2x1ZGUgcGFkZGluZy1yaWdodCgkZGVza3RvcC1wYWRkaW5nLCB0cnVlKTtcbiAgfVxufVxuXG5AbWl4aW4gY2VudGVyQWJzb2x1dGVFbGVtZW50IHtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcblxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuQG1peGluIG9ubHktbHRyLWdsb2JhbCB7XG4gIGh0bWw6bm90KFtkaXI9J3J0bCddKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1ydGwtZ2xvYmFsIHtcbiAgaHRtbFtkaXI9J3J0bCddICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LWx0ciB7XG4gIDpob3N0LWNvbnRleHQoaHRtbDpub3QoW2Rpcj0ncnRsJ10pKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1ydGwge1xuICA6aG9zdC1jb250ZXh0KGh0bWxbZGlyPSdydGwnXSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHJ0bC12YWx1ZSgkcHJvcGVydHksICRsdHItdmFsdWUsICRydGwtdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpZiAkZ2xvYmFsID09IHRydWUge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyLWdsb2JhbCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRsdHItdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwtZ2xvYmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHJ0bC12YWx1ZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGx0ci12YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRydGwtdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBydGwtcHJvcGVydHkoJGx0ci1wcm9wZXJ0eSwgJHJ0bC1wcm9wZXJ0eSwgJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaWYgJGdsb2JhbCA9PSB0cnVlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ci1nbG9iYWwge1xuICAgICAgI3skbHRyLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsLWdsb2JhbCB7XG4gICAgICAjeyRydGwtcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ciB7XG4gICAgICAjeyRsdHItcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwge1xuICAgICAgI3skcnRsLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWFyZ2luLWxlZnQoJG1hcmdpbiwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KG1hcmdpbi1sZWZ0LCBtYXJnaW4tcmlnaHQsICRtYXJnaW4sICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gbWFyZ2luLXJpZ2h0KCRtYXJnaW4sICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShtYXJnaW4tcmlnaHQsIG1hcmdpbi1sZWZ0LCAkbWFyZ2luLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmcoJHBhZGRpbmdUb3AsICRwYWRkaW5nUmlnaHQsICRwYWRkaW5nQm90dG9tLCAkcGFkZGluZ0xlZnQsICRnbG9iYWw6IGZhbHNlKSB7XG4gIHBhZGRpbmctdG9wOiAkcGFkZGluZ1RvcDtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctcmlnaHQsIHBhZGRpbmctbGVmdCwgJHBhZGRpbmdSaWdodCwgJGdsb2JhbCk7XG4gIHBhZGRpbmctYm90dG9tOiAkcGFkZGluZ1RvcDtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctbGVmdCwgcGFkZGluZy1yaWdodCwgJHBhZGRpbmdMZWZ0LCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmctbGVmdCgkcGFkZGluZywgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctbGVmdCwgcGFkZGluZy1yaWdodCwgJHBhZGRpbmcsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1yaWdodCgkcGFkZGluZywgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctcmlnaHQsIHBhZGRpbmctbGVmdCwgJHBhZGRpbmcsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gdGV4dC1hbGlnbi1sZWZ0KCRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZSh0ZXh0LWFsaWduLCBsZWZ0LCByaWdodCwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBsZWZ0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGxlZnQsIHJpZ2h0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcmlnaHQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocmlnaHQsIGxlZnQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiB0cmFuc2xhdGVYWSgkdmFsdWVYLCAkdmFsdWVZLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUodHJhbnNmb3JtLCB0cmFuc2xhdGUoJHZhbHVlWCwgJHZhbHVlWSksIHRyYW5zbGF0ZSgtJHZhbHVlWCwgJHZhbHVlWSksICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWxlZnQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWxlZnQsIGJvcmRlci1yaWdodCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1yaWdodCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItcmlnaHQsIGJvcmRlci1sZWZ0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMsIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItdG9wLXJpZ2h0LXJhZGl1cywgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItdG9wLWxlZnQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci10b3AtbGVmdC1yYWRpdXMsIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gZmxvYXQtbGVmdCgkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUoZmxvYXQsIGxlZnQsIHJpZ2h0LCAkZ2xvYmFsOiBmYWxzZSk7XG59XG5cbkBtaXhpbiBmbG9hdC1yaWdodCB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZShmbG9hdCwgcmlnaHQsIGxlZnQsICRnbG9iYWw6IGZhbHNlKTtcbn1cblxuQG1peGluIHNtYWxsLWRlc2t0b3Atb25seSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1sZykgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXhsIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLWFuZC10YWJsZXQtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZyAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtYWxsLW1vYmlsZS1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXMgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1tZCAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1kKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbGcpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLXVwIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1kKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGRpc2FibGUtc2Nyb2xsYmFyIHtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcG9zdC9wYXJ0aWFscy9yZXBseS1mb3JtL3JlcGx5LWZvcm0uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3N0eWxlcy9sb29wLWRlc2lnbi1zeXN0ZW0vX2NvbG9ycy5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsZ0NBQUE7QUFIRjs7QUFNQTtFQUNFLGNDNkJlO0FEaENqQjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU9FO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUFKSjtBQU1JO0VBQ0UsY0VwQlc7QUZnQmpCO0FHc0JFO0VBMENJLHNCSDNEc0I7QUFGNUI7QUd5QkU7RUF3Q0kscUJIL0RzQjtBQUM1QjtBQUVJO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNDd0VNO0FEeEVaO0FBSUU7RUFDRSx1QkFBQTtBQUZKO0FBSUk7RUFDRSxxQkFBQTtBQUZOO0FBS0k7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBRUEsY0N5RE07RUR4RE4sdUJBQUE7QUFKTjtBR0RFO0VBc0JJLGdCQXFEMkI7QUh2RWpDO0FHRUU7RUFvQkksaUJBaURpQztBSHBFdkM7QUFHSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGNDcUNDO0VEcENELGdCQUFBO0VBQ0EsbUJBUmdCO0FBTXRCO0FHZEU7RUFzQkksZ0JBcUQyQjtBSDFEakM7QUdYRTtFQW9CSSxpQkFpRGlDO0FIdkR2QztBR3lIRTtFSG5JRTtJQVNJLGVBQUE7RUFLTjtBQUNGO0FBRkk7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFsQmdCO0FBc0J0QjtBRytHRTtFSHRIRTtJQU1JLGVBQUE7RUFLTjtBQUNGO0FBREU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBR0o7QUFBRTtFQUNFLFlBQUE7QUFFSjtBQUNNO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFDUjtBQUNRO0VBQ0UsOEJBQUE7QUFDVjtBR3lGRTtFSGhHSTtJQVVJLGVBQUE7SUFDQSxXQUFBO0VBQ1I7QUFDRjtBQUlFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7QUFGSjtBRzJFRTtFSC9FQTtJQVNJLGlCQUFBO0VBREo7QUFDRjtBQUdJO0VBUUUsY0V4SFc7RUZ5SFgsc0JBQUE7QUFSTjtBQUNRO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBQ1Y7QUc4REU7RUhuRUU7SUFZSSx1QkFBQTtFQUhOO0FBQ0Y7QUFNSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNDcENNO0VEcUNOLHNCQUFBO0FBSk47QUcrQ0U7RUhuREU7SUFXSSxlQUFBO0lBQ0EsdUJBQUE7RUFITjtBQUNGO0FBUVE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFOVjtBR29DRTtFSGpDTTtJQU1JLG1CQUFBO0VBTFY7QUFDRjtBQUNBLDQ2bkJBQTQ2bkIiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuQGltcG9ydCAnbG9vcC1kZXNpZ24tc3lzdGVtL2NvbG9ycyc7XG5AaW1wb3J0ICdtaXhpbnMnO1xuXG4uYngtLWZvcm0taXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucmVwbHktZ3JheSB7XG4gIGNvbG9yOiAkdGV4dC1zZWNvbmRhcnk7XG59XG5cbi5zdWJ0ZXh0LXRleHRhcmVhIHtcbiAgY29sb3I6IGdyZXk7XG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcbn1cblxuLnJlcGx5LWZvcm0ge1xuICAmX19oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAtMC4zMTNyZW07XG5cbiAgICAmLWljb24ge1xuICAgICAgY29sb3I6ICRsb29wLWdyZWVuLTEwMDtcbiAgICAgIEBpbmNsdWRlIG1hcmdpbi1yaWdodCgwLjkzOHJlbSk7XG4gICAgfVxuXG4gICAgJi10ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICRkYXJrLWdyZXk7XG4gICAgfVxuICB9XG5cbiAgJl9fc2VjdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS44NzVyZW07XG5cbiAgICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG4gICAgfVxuXG4gICAgJi1oZWFkaW5nIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgQGluY2x1ZGUgdGV4dC1hbGlnbi1sZWZ0O1xuICAgICAgY29sb3I6ICRkYXJrLWdyZXk7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjA2M3JlbTtcbiAgICB9XG5cbiAgICAkaW5wdXQtbWF4LXdpZHRoOiAyNC43NXJlbTtcblxuICAgICYtdGV4dCB7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgQGluY2x1ZGUgdGV4dC1hbGlnbi1sZWZ0O1xuICAgICAgY29sb3I6ICRncmV5O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIG1heC13aWR0aDogJGlucHV0LW1heC13aWR0aDtcblxuICAgICAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1pbnB1dCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbi10b3A6IDAuOTM4cmVtO1xuICAgICAgbWF4LXdpZHRoOiAkaW5wdXQtbWF4LXdpZHRoO1xuXG4gICAgICBAaW5jbHVkZSBtb2JpbGUtb25seSB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmX19hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgfVxuXG4gICZfX3N1Ym1pdC1idXR0b24ge1xuICAgIGZsZXgtZ3JvdzogMTtcblxuICAgIDo6bmctZGVlcCB7XG4gICAgICBidXR0b24ge1xuICAgICAgICBtYXgtd2lkdGg6IDE5LjA2M3JlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDEuMjVyZW0gMS42MjVyZW07XG5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZS1vbmx5IHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmX19zdWNjZXNzLW1lc3NhZ2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiA1LjE4cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAyLjgxM3JlbTtcblxuICAgIEBpbmNsdWRlIG1vYmlsZS1vbmx5IHtcbiAgICAgIHBhZGRpbmctdG9wOiA0cmVtO1xuICAgIH1cblxuICAgICYtaWNvbiB7XG4gICAgICA6Om5nLWRlZXAge1xuICAgICAgICBzdmcge1xuICAgICAgICAgIGhlaWdodDogMi44NzVyZW07XG4gICAgICAgICAgd2lkdGg6IDIuODc1cmVtO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbG9yOiAkbG9vcC1ncmVlbi0xMDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuXG4gICAgICBAaW5jbHVkZSBtb2JpbGUtb25seSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNjc1cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgICYtdGV4dCB7XG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogJGRhcmstZ3JleTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG5cbiAgICAgIEBpbmNsdWRlIG1vYmlsZS1vbmx5IHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjgwOHJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICA6Om5nLWRlZXAge1xuICAgICAgLmJ1dHRvbiB7XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuXG4gICAgICAgICAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCIkc3RhbmRhcmRGb250RmFtaWx5OiAnTm90byBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4kY29udGVudC10b3AtcGFkZGluZzogM3JlbTtcbiRwb3N0LWxpc3QtYmc6ICNkYWRhZGE7XG4kd2hpdGU6ICNmZmZmZmY7XG4kcG9zdC1wcmV2aWV3LWJnOiB3aGl0ZTtcbiRsaWdodC1ncmF5LWJnOiAjZjRmNGY0O1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLWxlZnQ6IDIuMzQ0cmVtO1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLXJpZ2h0OiAxLjA2M3JlbTtcbiRwb3N0LXByZXZpZXctcGFkZGluZzogMi41cmVtICRwb3N0LXByZXZpZXctcGFkZGluZy1yaWdodCAxLjI1cmVtICRwb3N0LXByZXZpZXctcGFkZGluZy1sZWZ0O1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLW1vYmlsZTogMXJlbSAxcmVtIDAuNXJlbSAxcmVtO1xuJHBvc3QtcGFkZGluZy1ib3R0b206IDFyZW07XG4kcG9zdC1wcmV2aWV3LWd1dHRlcjogMnB4O1xuJHBvc3QtaGlnaGxpZ2h0LWNvbG9yOiAjNTcwZjg1O1xuJGNvbG9yLXB1cnBsZS05MDogIzMxMTM1ZTtcbiRjb2xvci1wdXJwbGUtNjA6ICM5ODhhYWU7XG4kY29sb3ItcHVycGxlLTUwOiAjOTg4OWFmO1xuJGNvbG9yLXB1cnBsZS0xMDogI2Y1ZjNmNztcbiRjb2xvci1wdXJwbGUtbGlnaHQ6ICM0YjM1YmM7XG4kY29sb3ItcHVycGxlLXZlcnktbGlnaHQ6ICM4NjZhYjA7XG4kY29sb3ItcHVycGxlLXN0ZXBwZXI6ICM0YTJiN2E7XG4kY29sb3ItZ3JlZW4tMTAwOiAjMDUyODA0O1xuJGNvbG9yLWdyZWVuLTkwOiAjMGQzZDBiO1xuJGNvbG9yLWdyZWVuLTgwOiAjMWY2YjFlO1xuJGNvbG9yLWdyZWVuLTcwOiAjMzU4YTM0O1xuJGNvbG9yLWdyZWVuLTYwOiAjNmQ5YTZlO1xuJGNvbG9yLWdyZWVuLTUwOiAjODlhODhmO1xuJGNvbG9yLWdyZWVuLTQwOiAjOWZjOGE2O1xuJGNvbG9yLWdyZWVuLTMwOiAjYWFkNmIzO1xuJGNvbG9yLWdyZWVuLTIwOiAjYzllOWQxO1xuJGNvbG9yLWdyZWVuLTEwOiAjZjNmN2YzO1xuJGNvbG9yLWdyZWVuLXN0ZXBwZXI6ICMxMDdENzk7XG4kY29sb3ItZ3JlZW4tbWVkaXVtOiAjYWRkYWFmO1xuJGNvbG9yLWdyZWVuLWxpZ2h0OiAjM0FCMDk4O1xuJGNvbG9yLWdyZWVuLXZlcnktbGlnaHQ6ICNFREZGRkM7XG4kZ3JleS0xOiAjZDZkMGRmO1xuJHN1cHBvcnQtMDE6ICNkYTFlMjg7XG4kZXJyb3I6ICNlZTIzMmY7XG4kdGV4dC1ibGFjazogIzE2MTYxNjtcbiR0ZXh0LXNlY29uZGFyeTogIzM5MzkzOTtcbiR0ZXh0LWdyYXllZDogIzUyNTI1MjtcbiR0ZXh0LWdyYXllZDgwOiAjOGY4YjhiO1xuJHRleHQtZ3JheS1jYXQ6ICM2ZDcyNzg7XG4kdWktYmFja2dyb3VuZC1ncmF5OiAjZjhmOGY5O1xuJGJvcmRlcjogI2U4ZTdlYTtcbiRlbnRpdHktYm9yZGVyLWNvbG9yOiAjMWMwZjMwMjE7XG4kbG9hZGluZy1iZzogcmdiKDAgMCAwIC8gMTglKTtcbiRzdXBwb3J0LTA0OiAjMDA0M2NlO1xuJGxvb3AtdXNlcm5hbWU6ICMxOTgwMzg7XG4kbG9vcC1hY3RpdmUtY3VycmVudC11c2VyOiAjMjRhMTQ4O1xuJHdhcm0tZ3JheS0xMC1jb2xvcjogI2Y3ZjNmMjtcbiR3YXJtLWdyYXktMjAtY29sb3I6ICNlNWUwZGY7XG4kaGVhZGluZy0xLWNvbG9yOiAjMWMwZjMwO1xuJGhlYWRpbmctMi1jb2xvcjogIzMyMDc0ZDtcbiRoZWFkaW5nLTMtY29sb3I6ICMyZjI3MzU7XG4kbW9iaWxlLWljb24tY29sb3I6ICMxYzBmMzA7XG4kc3RhdGUtZGlzYWJsZWQtMDI6ICNjNmM2YzY7XG4kbGluay0wMjogIzU2MDFiMjtcbiRoZWFkZXItcHVycGxlOiAjMzExMzVlO1xuJGhlYWRlci1ncmVlbjogIzEwN2Q3OTtcbiRwdXJwbGUtbGlnaHQ6ICNjYmM0ZDc7XG4kcHVycGxlLWJhY2tncm91bmQtbGlnaHQ6ICNkY2Q1ZTc7XG4kbG9vcC1pbnRlcmFjdGl2ZS0wMTogIzEwN2Q3OTtcbiRsb29wLWludGVyYWN0aXZlLTAxLW9wYWNpdHk6IHJnYmEoMTYsIDEyNSwgMTIxLCAwLjMpO1xuJGZpbHRlcnMtZ3JlZW46ICMwNTY3NjM7XG4vLyBCcmVha3BvaW50c1xuXG4kYnJlYWtwb2ludC1zOiAzNzVweDtcbiRicmVha3BvaW50LXNtOiA0MjBweDtcbiRicmVha3BvaW50LW1kOiA3NjhweDtcbiRicmVha3BvaW50LWxnOiAxMDgwcHg7XG4kYnJlYWtwb2ludC14bDogMTI3NXB4O1xuXG4kYnJlYWtwb2ludC1tZC12MjogODIwcHg7XG5cbiRoZWFkZXItaGVpZ2h0OiA0LjM3NXJlbTtcbiRoZWFkZXItaGVpZ2h0LXYyOiA0LjM3NXJlbTtcbiRzdGF0ZS1zZWxlY3RlZC11aTogI2UwZTBlMDtcbiRjLWxlZnQtcGFkZGluZzogMS41cmVtO1xuJG1lbnUtYWN0aXZlLWNvbG9yOiAjM0FCMDk4O1xuJG1lbnUtaG92ZXItY29sb3I6ICMzQUIwOTg7XG4kdGFiLWluYWN0aXZlLWNvbG9yOiAjODlhZjkzO1xuJGxpbmUtY29sb3I6ICNkMGRmZDI7XG4kYm9yZGVyLWdyYXk6ICNjY2NjY2M7XG4kdGV4dC1ncmF5OiAjODA4MDgwO1xuJGJhc2UtY29udGFpbmVyLXdpZHRoOiA4MS4xMjRyZW07XG4kaGVhZGVyLXVuZGVybGluZS1oZWlnaHQ6IDAuMzEzcmVtO1xuXG4vLyBNb2RlcmF0b3IgcmV2aWV3IHNlY3Rpb25zXG4kZm9vdGVyLWhlaWdodDogNHJlbTtcbiR0b3BiYXItaGVpZ2h0OiAxMC41cmVtO1xuJHN0ZXBwZXItaGVpZ2h0OiA2LjdyZW07XG5cbi8vIE5ldyBTdG9yeSBmbG93IC8gc3RvcnkgZGV0YWlscyB2YXJpYWJsZXNcbiRncmV5OiAjNjU2NTY1O1xuJGxpZ2h0LWdyZXktMjogI2IxYjRiNjtcbiRsaWdodC1ncmV5LTM6ICNiNGI0YjQ7XG4kbGlnaHQtZ3JleS00OiAjY2ZkM2Q4O1xuJGxpZ2h0LWdyZXktNTogI2Q5ZTBlNztcbiRsaWdodC1ncmV5LTY6ICNmMWYyZjI7XG4kbGlnaHQtZ3JleS03OiAjYzRjNGM0O1xuJGxpZ2h0LWdyZXktODogI2U5ZTllOTtcbiRsaWdodC1ncmV5LTk6ICNlNmVhZWQ7XG4kbGlnaC1ncmV5LXNlcGFyYXRvcjogI2MwYzBjMDtcbiRkYXJrLWdyZXk6ICMxYTFhMWE7XG4kZGFyay1ncmV5LTUwOiByZ2IoMjYsIDI2LCAyNiwgMC41KTtcbiRib3JkZXItZ3JleTogI2M3Y2RkNDtcbiRsaWdodC1wdXJwbGU6ICNlYWVhZWE7XG4kaW5wdXQtZGlzYWJsZWQtYmc6ICNmNGY2Zjg7XG4kZXJyb3ItMjogI2RlMjIyZDtcbiRkYW5nZXI6ICNjOTMwNGQ7XG4kcHJldmlvdXMtcGlsbC1jb2xvcjogIzcxOGQ2ZjtcbiR0b29sdGlwLWdyZXk6ICNhYmFiYWI7XG4kbGlnaHQtZ3JlZW46ICNjZmU1ZTQ2NjtcblxuJGZpbHRlcnMtbW9kYWwtaGVhZGVyLXppbmRleDogMTAwMDA7XG4kbW9kYWwtemluZGV4OiA5OTk5O1xuJGxvY2F0aW9uLW92ZXJsYXktemluZGV4OiA5MDAxO1xuJGhlYWRlci1hc2lkZS16aW5kZXg6IDgwMDI7XG4kaGVhZGVyLWFzaWRlLWJhY2tncm91bmQtemluZGV4OiA4MDAxO1xuJGhlYWRlci16aW5kZXg6IDgwMDA7XG4kbmF2aWdhdGlvbi16aW5kZXg6IDgwMDA7XG4kcGFnZS1sb2FkaW5nLXppbmRleDogNzAwMTtcbiR0b29sdGlwLXppbmRleDogNzAwMDtcbiRuZXctc3RvcnktY29udGVudC1zdGF0ZS16aW5kZXg6IDUwMDtcbiRmaWx0ZXItZHJvcGRvd24temluZGV4OiAxMDA7XG4kbW9kYWwtdG9wLWluZGljYXRvci16aW5kZXg6IDUxO1xuJG1vZGFsLXRvcC1pbmRpY2F0b3ItYmFja2dyb3VuZC16aW5kZXg6IDUxO1xuJGNoYXJ0LXppbmRleDogMTtcbiRjaGFydC1jb250cm9sLXppbmRleDogMjtcblxuJHNsaWRlLXRvZ2dsZS1kaXNhYmxlZC1vcHRpb24tYmFja2dyb3VuZDogI2RkZGRkZDtcblxuJHRvYXN0LWluZm8tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4kdG9hc3QtaW5mby10aXRsZS1jb2xvcjogIzQ5NDk0OTtcbiR0b2FzdC1pbmZvLW1lc3NhZ2UtY29sb3I6ICM0MjJjMDA7XG4kdG9hc3QtaW5mby1idXR0b24tY29sb3I6ICM2YzRlOTk7XG5cbiR0b2FzdC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6ICNkOWVlZWQ7XG4kdG9hc3Qtc3VjY2Vzcy10aXRsZS1jb2xvcjogIzAwNDU0MjtcbiR0b2FzdC1zdWNjZXNzLW1lc3NhZ2UtY29sb3I6ICMwMTMyMzA7XG4kdG9hc3Qtc3VjY2Vzcy1idXR0b24tY29sb3I6ICMwMTY5NjU7XG5cbiR0b2FzdC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6ICNmZmYxZDU7XG4kdG9hc3Qtd2FybmluZy10aXRsZS1jb2xvcjogIzZiNDcwMDtcbiR0b2FzdC13YXJuaW5nLW1lc3NhZ2UtY29sb3I6ICM0MjJjMDA7XG4kdG9hc3Qtd2FybmluZy1idXR0b24tY29sb3I6ICNjYzhmMTQ7XG5cbiR0b2FzdC1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiAjZjVkNWRiO1xuJHRvYXN0LWVycm9yLXRpdGxlLWNvbG9yOiAjNzMwMDE1O1xuJHRvYXN0LWVycm9yLW1lc3NhZ2UtY29sb3I6ICM0NTA2MTE7XG4kdG9hc3QtZXJyb3Itc3VjY2Vzcy1jb2xvcjogI2Q5ZWVlZDtcbiR0b2FzdC1lcnJvci1idXR0b24tY29sb3I6ICNiMjFkMzk7XG5cbiR0b2FzdC1jbG9zZS1idXR0b24tY29sb3I6ICM3MzAwMTU7XG4iLCIvLy8gaHR0cHM6Ly93d3cuZmlnbWEuY29tL2ZpbGUvR25tMDJxVDhsTDFYRXZ0TUZPUjZSTC9Mb29wLTIwMjEtRmVhdHVyZS1EZXZlbG9wbWVudD9ub2RlLWlkPTQlM0EzMDBcblxuLy8vIFRoaXMgaXMgdGhlIG1haW4gY29sb3VyIGZvciBhbGwgdGhlIGVsZW1lbnRzLiBJdCBpcyB1c2VkIHRvIGNyZWF0ZSBhbGwgb2YgdGhlIGlucHV0IGZpZWxkcywgZm9yIGljb25zIGV0Y1xuJGxvb3AtZ3JlZW4tMTI1OiAjMDU2NzYzO1xuJGxvb3AtZ3JlZW4tMTAwOiAjMTA3ZDc5O1xuJGxvb3AtZ3JlZW4tNTA6ICM4N2JlYmM7XG4kbG9vcC1ncmVlbi0yNTogI2MzZGZkZDtcbiRsb29wLWdyZWVuLTU6ICNmM2Y4Zjg7XG5cbi8vLyBVc2VkIGluIG5hdmlnYXRpb24gYW5kIGFzIHNlY29uZGFyeSBlbGVtZW50IGNvbG91cnMgb24gYnV0dG9ucyBhbmQgbGlua3NcbiRsb29wLXB1cnBsZS0xMjU6ICMyNjEwNDc7XG4kbG9vcC1wdXJwbGUtMTAwOiAjMzExMzVlO1xuJGxvb3AtcHVycGxlLTc1OiAjNDYyNDc4O1xuJGxvb3AtcHVycGxlLTYwOiAjODY2YWIwO1xuJGxvb3AtcHVycGxlLTUwOiAjOGE3YmExO1xuJGxvb3AtcHVycGxlLTQwOiAjZWFlNmYwO1xuJGxvb3AtcHVycGxlLTI1OiAjY2JjNGQ3O1xuJGxvb3AtcHVycGxlLTU6ICNmNWYzZjc7XG5cbi8vLyBVc2VkIGFzIGJhY2tncm91bmQgZm9yIGRpc2FibGVkIGxhYmVscyBhbmQgZmllbGRzIGFzIHdlbGwgYXMgZm9yIHRhZ3NcbiRsaWdodC1ncmV5OiAjZWVlZWVlO1xuXG4vLy8gR3JleXNjYWxlXG4kZ3JleS0xMDA6ICMwMDAwMDA7XG4kZ3JleS01MDogdHJhbnNwYXJlbnRpemUoJGdyZXktMTAwLCAxIC0gMC41KTtcbiRncmV5LTI1OiB0cmFuc3BhcmVudGl6ZSgkZ3JleS0xMDAsIDEgLSAwLjI1KTtcbiRncmV5LTU6IHRyYW5zcGFyZW50aXplKCRncmV5LTEwMCwgMSAtIDAuMDUpO1xuXG4vLy8gbm90aWZpY2F0aW9ucywgc3RhdHVzLCBjYXRlZ29yaWVzXG4vLy8gd2FybmluZywgYWxlcnRcbiRkYW5nZXItcmVkOiAjZWUyMzJmO1xuLy8vIG9rLCBhY2NlcHRlZCwgZmluaXNoZWRcbiR5ZXMtZ3JlZW46ICMxZGIwNDY7XG4vLy8gcGVuZGluZ1xuJGxvb3AteWVsbG93OiAjZWNiMzIwO1xuXG4vLy8gaGlnaGxpZ2h0IGNvbG91cnNcbiRwdXJwbGUtaGlnaGxpZ2h0OiAjNmYwMWU1O1xuJHB1cnBsZS1oaWdobGlnaHQtMDI1OiByZ2JhKDExMSwgMSwgMjI5LCAwLjI1KTtcbiRsb29wLXBpbms6ICNlZjQ3YTI7XG4kbG9vcC1waW5rLTAyNTogcmdiYSgyMzksIDcxLCAxNjIsIDAuMjUpO1xuJGxpZ2h0LWJsdWU6ICMyMGQzZWM7XG4kbGlnaHQtYmx1ZS0wMjU6IHJnYmEoMzIsIDIxMSwgMjM2LCAwLjI1KTtcbiRsb29wLWJsdWU6ICMyMDcyZWM7XG4kbG9vcC1ibHVlLTAyNTogcmdiYSgzMiwgMTE0LCAyMzYsIDAuMjUpO1xuJGdyZWVuLTI6ICNjM2VjMjA7XG4kZ3JlZW4tMi0wMjU6IHJnYmEoMTk1LCAyMzYsIDMyLCAwLjI1KTtcbiRsb29wLW9yYW5nZTogI2U5ODAyMDtcbiRsb29wLW9yYW5nZS0wMjU6IHJnYmEoMjMzLCAxMjgsIDMyLCAwLjI1KTtcblxuLy8vIFNwYWNlcnNcbiRncmF5LWxpbmUtY29sb3I6ICNkNmQwZGY7XG5cbiRsb29wLXJlZC1kYXJrOiAjYzkzMDRkO1xuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIGZsZXgtZ2FwKCRnYXAsICRnbG9iYWw6IGZhbHNlKSB7XG4gIG1hcmdpbi10b3A6ICgtJGdhcCk7XG4gIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCgtJGdhcCksICRnbG9iYWwpO1xuXG4gID4gKiB7XG4gICAgbWFyZ2luLXRvcDogJGdhcDtcbiAgICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgkZ2FwLCAkZ2xvYmFsKTtcbiAgfVxufVxuXG5AbWl4aW4gYmFzZS1jb250YWluZXIoJGNvbnRlbnQtd2lkdGgpIHtcbiAgJGRlc2t0b3AtcGFkZGluZzogMnJlbTtcbiAgbWF4LXdpZHRoOiBjYWxjKCN7JGNvbnRlbnQtd2lkdGh9ICsgKCN7JGRlc2t0b3AtcGFkZGluZ30pKTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MnJlbSkge1xuICAgIEBpbmNsdWRlIHBhZGRpbmctbGVmdCgkZGVza3RvcC1wYWRkaW5nLCB0cnVlKTtcbiAgICBAaW5jbHVkZSBwYWRkaW5nLXJpZ2h0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICB9XG59XG5cbkBtaXhpbiBjZW50ZXJBYnNvbHV0ZUVsZW1lbnQge1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5AbWl4aW4gb25seS1sdHItZ2xvYmFsIHtcbiAgaHRtbDpub3QoW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bC1nbG9iYWwge1xuICBodG1sW2Rpcj0ncnRsJ10gJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktbHRyIHtcbiAgOmhvc3QtY29udGV4dChodG1sOm5vdChbZGlyPSdydGwnXSkpICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bCB7XG4gIDpob3N0LWNvbnRleHQoaHRtbFtkaXI9J3J0bCddKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gcnRsLXZhbHVlKCRwcm9wZXJ0eSwgJGx0ci12YWx1ZSwgJHJ0bC12YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGx0ci12YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHJ0bC12YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHJ0bC1wcm9wZXJ0eSgkbHRyLXByb3BlcnR5LCAkcnRsLXByb3BlcnR5LCAkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpZiAkZ2xvYmFsID09IHRydWUge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyLWdsb2JhbCB7XG4gICAgICAjeyRsdHItcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwtZ2xvYmFsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bCB7XG4gICAgICAjeyRydGwtcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXJnaW4tbGVmdCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLWxlZnQsIG1hcmdpbi1yaWdodCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBtYXJnaW4tcmlnaHQoJG1hcmdpbiwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KG1hcmdpbi1yaWdodCwgbWFyZ2luLWxlZnQsICRtYXJnaW4sICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZygkcGFkZGluZ1RvcCwgJHBhZGRpbmdSaWdodCwgJHBhZGRpbmdCb3R0b20sICRwYWRkaW5nTGVmdCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgcGFkZGluZy10b3A6ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZ1JpZ2h0LCAkZ2xvYmFsKTtcbiAgcGFkZGluZy1ib3R0b206ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZ0xlZnQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1sZWZ0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLXJpZ2h0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiB0ZXh0LWFsaWduLWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRleHQtYWxpZ24sIGxlZnQsIHJpZ2h0LCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGxlZnQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobGVmdCwgcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiByaWdodCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShyaWdodCwgbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRyYW5zbGF0ZVhZKCR2YWx1ZVgsICR2YWx1ZVksICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZSh0cmFuc2Zvcm0sIHRyYW5zbGF0ZSgkdmFsdWVYLCAkdmFsdWVZKSwgdHJhbnNsYXRlKC0kdmFsdWVYLCAkdmFsdWVZKSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItbGVmdCwgYm9yZGVyLXJpZ2h0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1yaWdodCwgYm9yZGVyLWxlZnQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCBib3JkZXItdG9wLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtbGVmdC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBmbG9hdC1sZWZ0KCRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZShmbG9hdCwgbGVmdCwgcmlnaHQsICRnbG9iYWw6IGZhbHNlKTtcbn1cblxuQG1peGluIGZsb2F0LXJpZ2h0IHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCByaWdodCwgbGVmdCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gc21hbGwtZGVza3RvcC1vbmx5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LWxnKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQteGwgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtYW5kLXRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc21hbGwtbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtcyAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LW1kIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtdXAge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gZGlzYWJsZS1zY3JvbGxiYXIge1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 93865:
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/post/partials/reply-form/reply-form.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplyFormModule": () => (/* binding */ ReplyFormModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_shared_components_skeleton_text_skeleton_text_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/components/skeleton-text/skeleton-text.module */ 81298);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _shared_components_input_input_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/components/input/input.module */ 94010);
/* harmony import */ var _icons_arrow_next_icon_arrow_next_icon_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../icons/arrow-next-icon/arrow-next-icon.module */ 72669);
/* harmony import */ var _icons_chat_reply_icon_chat_reply_icon_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../icons/chat-reply-icon/chat-reply-icon.module */ 36478);
/* harmony import */ var _icons_checkmark_round_icon_checkmark_round_icon_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../icons/checkmark-round-icon/checkmark-round-icon.module */ 27141);
/* harmony import */ var _button_button_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../button/button.module */ 82024);
/* harmony import */ var _checkbox_v2_checkbox_v2_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../checkbox-v2/checkbox-v2.module */ 26444);
/* harmony import */ var _checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../checkbox/checkbox.module */ 20902);
/* harmony import */ var _textarea_v2_textarea_v2_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../textarea-v2/textarea-v2.module */ 71049);
/* harmony import */ var _textarea_textarea_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../textarea/textarea.module */ 93319);
/* harmony import */ var _reply_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reply-form.component */ 84409);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);















class ReplyFormModule {
  static #_ = this.ɵfac = function ReplyFormModule_Factory(t) {
    return new (t || ReplyFormModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
    type: ReplyFormModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_7__.CheckboxModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _app_shared_components_skeleton_text_skeleton_text_module__WEBPACK_IMPORTED_MODULE_0__.SkeletonTextModule, _textarea_textarea_module__WEBPACK_IMPORTED_MODULE_9__.TextareaModule, _shared_components_input_input_module__WEBPACK_IMPORTED_MODULE_1__.InputModule, _textarea_v2_textarea_v2_module__WEBPACK_IMPORTED_MODULE_8__.TextareaV2Module, _icons_chat_reply_icon_chat_reply_icon_module__WEBPACK_IMPORTED_MODULE_3__.ChatReplyIconModule, _button_button_module__WEBPACK_IMPORTED_MODULE_5__.ButtonModule, _icons_arrow_next_icon_arrow_next_icon_module__WEBPACK_IMPORTED_MODULE_2__.ArrowNextIconModule, _checkbox_v2_checkbox_v2_module__WEBPACK_IMPORTED_MODULE_6__.CheckboxV2Module, _icons_checkmark_round_icon_checkmark_round_icon_module__WEBPACK_IMPORTED_MODULE_4__.CheckmarkRoundIconModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](ReplyFormModule, {
    declarations: [_reply_form_component__WEBPACK_IMPORTED_MODULE_10__.ReplyFormComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_7__.CheckboxModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _app_shared_components_skeleton_text_skeleton_text_module__WEBPACK_IMPORTED_MODULE_0__.SkeletonTextModule, _textarea_textarea_module__WEBPACK_IMPORTED_MODULE_9__.TextareaModule, _shared_components_input_input_module__WEBPACK_IMPORTED_MODULE_1__.InputModule, _textarea_v2_textarea_v2_module__WEBPACK_IMPORTED_MODULE_8__.TextareaV2Module, _icons_chat_reply_icon_chat_reply_icon_module__WEBPACK_IMPORTED_MODULE_3__.ChatReplyIconModule, _button_button_module__WEBPACK_IMPORTED_MODULE_5__.ButtonModule, _icons_arrow_next_icon_arrow_next_icon_module__WEBPACK_IMPORTED_MODULE_2__.ArrowNextIconModule, _checkbox_v2_checkbox_v2_module__WEBPACK_IMPORTED_MODULE_6__.CheckboxV2Module, _icons_checkmark_round_icon_checkmark_round_icon_module__WEBPACK_IMPORTED_MODULE_4__.CheckmarkRoundIconModule],
    exports: [_reply_form_component__WEBPACK_IMPORTED_MODULE_10__.ReplyFormComponent]
  });
})();

/***/ }),

/***/ 95611:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/story-card/story-card.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoryCardComponent": () => (/* binding */ StoryCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _skeleton_text_skeleton_text_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../skeleton-text/skeleton-text.component */ 69096);
/* harmony import */ var _post_post_preview_post_preview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../post/post-preview/post-preview.component */ 79633);




function StoryCardComponent_app_post_preview_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-post-preview", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("postData", ctx_r0.story)("selfLinkClickable", false)("showActions", true)("postContentLimit", ctx_r0.limit);
  }
}
function StoryCardComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-skeleton-text", 4);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("lines", 8);
  }
}
const _c0 = ["*"];
class StoryCardComponent {
  constructor() {
    this.showSubheading = false;
    this.limit = -1;
  }
  static #_ = this.ɵfac = function StoryCardComponent_Factory(t) {
    return new (t || StoryCardComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: StoryCardComponent,
    selectors: [["app-story-card"]],
    inputs: {
      story: "story",
      showSubheading: "showSubheading",
      loading: "loading"
    },
    ngContentSelectors: _c0,
    decls: 4,
    vars: 2,
    consts: [[1, "card"], [3, "postData", "selfLinkClickable", "showActions", "postContentLimit", 4, "ngIf", "ngIfElse"], ["skeleton", ""], [3, "postData", "selfLinkClickable", "showActions", "postContentLimit"], [3, "lines"]],
    template: function StoryCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, StoryCardComponent_app_post_preview_1_Template, 2, 4, "app-post-preview", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, StoryCardComponent_ng_template_2_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _skeleton_text_skeleton_text_component__WEBPACK_IMPORTED_MODULE_0__.SkeletonTextComponent, _post_post_preview_post_preview_component__WEBPACK_IMPORTED_MODULE_1__.PostPreviewComponent],
    styles: [".card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 0.5rem;\n}\n.card__heading[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\nhtml:not([dir=rtl])[_nghost-%COMP%]   .card__heading[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .card__heading[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\nhtml[dir=rtl][_nghost-%COMP%]   .card__heading[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .card__heading[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\nhtml:not([dir=rtl])[_nghost-%COMP%]   .card__heading[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .card__heading[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\nhtml[dir=rtl][_nghost-%COMP%]   .card__heading[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .card__heading[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.card__subheading[_ngcontent-%COMP%] {\n  margin-bottom: 0.844rem;\n}\nhtml:not([dir=rtl])[_nghost-%COMP%]   .card__subheading[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .card__subheading[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\nhtml[dir=rtl][_nghost-%COMP%]   .card__subheading[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .card__subheading[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\nhtml:not([dir=rtl])[_nghost-%COMP%]   .card__subheading[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .card__subheading[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\nhtml[dir=rtl][_nghost-%COMP%]   .card__subheading[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .card__subheading[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.card__content[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin-bottom: 1.25rem;\n}\nhtml:not([dir=rtl])[_nghost-%COMP%]   .card__content[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .card__content[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\nhtml[dir=rtl][_nghost-%COMP%]   .card__content[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .card__content[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\nhtml:not([dir=rtl])[_nghost-%COMP%]   .card__content[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .card__content[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\nhtml[dir=rtl][_nghost-%COMP%]   .card__content[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .card__content[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.card__translation-status[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.75rem;\n}\nhtml:not([dir=rtl])[_nghost-%COMP%]   .card__translation-status[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .card__translation-status[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\nhtml[dir=rtl][_nghost-%COMP%]   .card__translation-status[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .card__translation-status[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\nhtml:not([dir=rtl])[_nghost-%COMP%]   .card__translation-status[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .card__translation-status[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\nhtml[dir=rtl][_nghost-%COMP%]   .card__translation-status[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .card__translation-status[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.card__line[_ngcontent-%COMP%] {\n  height: 1px;\n  width: 100%;\n  background: #c3dfdd;\n  margin-bottom: 0.6875rem;\n}\nhtml:not([dir=rtl])[_nghost-%COMP%]   .card__actions[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .card__actions[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\nhtml[dir=rtl][_nghost-%COMP%]   .card__actions[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .card__actions[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\nhtml:not([dir=rtl])[_nghost-%COMP%]   .card__after[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .card__after[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\nhtml[dir=rtl][_nghost-%COMP%]   .card__after[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .card__after[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\nhtml:not([dir=rtl])[_nghost-%COMP%]   .card__after[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .card__after[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\nhtml[dir=rtl][_nghost-%COMP%]   .card__after[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .card__after[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.card[_ngcontent-%COMP%]     .post-author__date {\n  font-size: 0.75rem;\n  color: rgba(0, 0, 0, 0.25);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3J5LWNhcmQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi9zdHlsZXMvX21peGlucy5zY3NzIiwiLi4vLi4vLi4vc3R5bGVzL2xvb3AtZGVzaWduLXN5c3RlbS9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FBSEY7QUFLRTtFQUNFLG1CQUFBO0FBSEo7QUNvQ0U7RUEwQ0ksb0JEMUVvQjtBQUQxQjtBQ3VDRTtFQXdDSSxtQkQ5RW9CO0FBRTFCO0FDOEJFO0VBMENJLG1CRHpFbUI7QUFJekI7QUNpQ0U7RUF3Q0ksb0JEN0VtQjtBQU96QjtBQUpFO0VBQ0UsdUJBQUE7QUFNSjtBQ3FCRTtFQTBDSSxvQkRwRW9CO0FBUTFCO0FDd0JFO0VBd0NJLG1CRHhFb0I7QUFXMUI7QUNlRTtFQTBDSSxtQkRuRW1CO0FBYXpCO0FDa0JFO0VBd0NJLG9CRHZFbUI7QUFnQnpCO0FBYkU7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0FBZUo7QUNLRTtFQTBDSSxvQkQ3RG9CO0FBaUIxQjtBQ1FFO0VBd0NJLG1CRGpFb0I7QUFvQjFCO0FDREU7RUEwQ0ksbUJENURtQjtBQXNCekI7QUNFRTtFQXdDSSxvQkRoRW1CO0FBeUJ6QjtBQXRCRTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtBQXdCSjtBQ1hFO0VBMENJLG9CRHREb0I7QUEwQjFCO0FDUkU7RUF3Q0ksbUJEMURvQjtBQTZCMUI7QUNqQkU7RUEwQ0ksbUJEckRtQjtBQStCekI7QUNkRTtFQXdDSSxvQkR6RG1CO0FBa0N6QjtBQS9CRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJFL0JZO0VGZ0NaLHdCQUFBO0FBaUNKO0FDN0JFO0VBMENJLG1CRDFDbUI7QUFnQ3pCO0FDMUJFO0VBd0NJLG9CRDlDbUI7QUFtQ3pCO0FDbkNFO0VBMENJLG9CRHRDb0I7QUFrQzFCO0FDaENFO0VBd0NJLG1CRDFDb0I7QUFxQzFCO0FDekNFO0VBMENJLG1CRHJDbUI7QUF1Q3pCO0FDdENFO0VBd0NJLG9CRHpDbUI7QUEwQ3pCO0FBdENJO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtBQXdDTiIsImZpbGUiOiJzdG9yeS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnbG9vcC1kZXNpZ24tc3lzdGVtL2NvbG9ycyc7XG5AaW1wb3J0ICdsb29wLWRlc2lnbi1zeXN0ZW0vaGVscGVycyc7XG5AaW1wb3J0ICdtaXhpbnMnO1xuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcblxuICAmX19oZWFkaW5nIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIEBpbmNsdWRlIG1hcmdpbi1yaWdodCgwLjVyZW0pO1xuICAgIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KDAuNXJlbSk7XG4gIH1cblxuICAmX19zdWJoZWFkaW5nIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjg0NHJlbTtcbiAgICBAaW5jbHVkZSBtYXJnaW4tcmlnaHQoMC41cmVtKTtcbiAgICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgwLjVyZW0pO1xuICB9XG5cbiAgJl9fY29udGVudCB7XG4gICAgZm9udC1zaXplOiBweFRvUmVtKDE0KTtcbiAgICBtYXJnaW4tYm90dG9tOiBweFRvUmVtKDIwKTtcbiAgICBAaW5jbHVkZSBtYXJnaW4tcmlnaHQoMC41cmVtKTtcbiAgICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgwLjVyZW0pO1xuICB9XG5cbiAgJl9fdHJhbnNsYXRpb24tc3RhdHVzIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiBweFRvUmVtKDEyKTtcbiAgICBAaW5jbHVkZSBtYXJnaW4tcmlnaHQoMC41cmVtKTtcbiAgICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgwLjVyZW0pO1xuICB9XG5cbiAgJl9fbGluZSB7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogJGxvb3AtZ3JlZW4tMjU7XG4gICAgbWFyZ2luLWJvdHRvbTogcHhUb1JlbSgxMSk7XG4gIH1cblxuICAmX19hY3Rpb25zIHtcbiAgICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgwLjVyZW0pO1xuICB9XG5cbiAgJl9fYWZ0ZXIge1xuICAgIEBpbmNsdWRlIG1hcmdpbi1yaWdodCgwLjVyZW0pO1xuICAgIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KDAuNXJlbSk7XG4gIH1cblxuICA6Om5nLWRlZXAge1xuICAgIC5wb3N0LWF1dGhvcl9fZGF0ZSB7XG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbkBtaXhpbiBmbGV4LWdhcCgkZ2FwLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBtYXJnaW4tdG9wOiAoLSRnYXApO1xuICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgoLSRnYXApLCAkZ2xvYmFsKTtcblxuICA+ICoge1xuICAgIG1hcmdpbi10b3A6ICRnYXA7XG4gICAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoJGdhcCwgJGdsb2JhbCk7XG4gIH1cbn1cblxuQG1peGluIGJhc2UtY29udGFpbmVyKCRjb250ZW50LXdpZHRoKSB7XG4gICRkZXNrdG9wLXBhZGRpbmc6IDJyZW07XG4gIG1heC13aWR0aDogY2FsYygjeyRjb250ZW50LXdpZHRofSArICgjeyRkZXNrdG9wLXBhZGRpbmd9KSk7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDJyZW0pIHtcbiAgICBAaW5jbHVkZSBwYWRkaW5nLWxlZnQoJGRlc2t0b3AtcGFkZGluZywgdHJ1ZSk7XG4gICAgQGluY2x1ZGUgcGFkZGluZy1yaWdodCgkZGVza3RvcC1wYWRkaW5nLCB0cnVlKTtcbiAgfVxufVxuXG5AbWl4aW4gY2VudGVyQWJzb2x1dGVFbGVtZW50IHtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcblxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuQG1peGluIG9ubHktbHRyLWdsb2JhbCB7XG4gIGh0bWw6bm90KFtkaXI9J3J0bCddKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1ydGwtZ2xvYmFsIHtcbiAgaHRtbFtkaXI9J3J0bCddICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LWx0ciB7XG4gIDpob3N0LWNvbnRleHQoaHRtbDpub3QoW2Rpcj0ncnRsJ10pKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1ydGwge1xuICA6aG9zdC1jb250ZXh0KGh0bWxbZGlyPSdydGwnXSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHJ0bC12YWx1ZSgkcHJvcGVydHksICRsdHItdmFsdWUsICRydGwtdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpZiAkZ2xvYmFsID09IHRydWUge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyLWdsb2JhbCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRsdHItdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwtZ2xvYmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHJ0bC12YWx1ZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGx0ci12YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRydGwtdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBydGwtcHJvcGVydHkoJGx0ci1wcm9wZXJ0eSwgJHJ0bC1wcm9wZXJ0eSwgJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaWYgJGdsb2JhbCA9PSB0cnVlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ci1nbG9iYWwge1xuICAgICAgI3skbHRyLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsLWdsb2JhbCB7XG4gICAgICAjeyRydGwtcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ciB7XG4gICAgICAjeyRsdHItcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwge1xuICAgICAgI3skcnRsLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWFyZ2luLWxlZnQoJG1hcmdpbiwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KG1hcmdpbi1sZWZ0LCBtYXJnaW4tcmlnaHQsICRtYXJnaW4sICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gbWFyZ2luLXJpZ2h0KCRtYXJnaW4sICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShtYXJnaW4tcmlnaHQsIG1hcmdpbi1sZWZ0LCAkbWFyZ2luLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmcoJHBhZGRpbmdUb3AsICRwYWRkaW5nUmlnaHQsICRwYWRkaW5nQm90dG9tLCAkcGFkZGluZ0xlZnQsICRnbG9iYWw6IGZhbHNlKSB7XG4gIHBhZGRpbmctdG9wOiAkcGFkZGluZ1RvcDtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctcmlnaHQsIHBhZGRpbmctbGVmdCwgJHBhZGRpbmdSaWdodCwgJGdsb2JhbCk7XG4gIHBhZGRpbmctYm90dG9tOiAkcGFkZGluZ1RvcDtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctbGVmdCwgcGFkZGluZy1yaWdodCwgJHBhZGRpbmdMZWZ0LCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmctbGVmdCgkcGFkZGluZywgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctbGVmdCwgcGFkZGluZy1yaWdodCwgJHBhZGRpbmcsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1yaWdodCgkcGFkZGluZywgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctcmlnaHQsIHBhZGRpbmctbGVmdCwgJHBhZGRpbmcsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gdGV4dC1hbGlnbi1sZWZ0KCRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZSh0ZXh0LWFsaWduLCBsZWZ0LCByaWdodCwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBsZWZ0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGxlZnQsIHJpZ2h0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcmlnaHQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocmlnaHQsIGxlZnQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiB0cmFuc2xhdGVYWSgkdmFsdWVYLCAkdmFsdWVZLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUodHJhbnNmb3JtLCB0cmFuc2xhdGUoJHZhbHVlWCwgJHZhbHVlWSksIHRyYW5zbGF0ZSgtJHZhbHVlWCwgJHZhbHVlWSksICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWxlZnQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWxlZnQsIGJvcmRlci1yaWdodCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1yaWdodCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItcmlnaHQsIGJvcmRlci1sZWZ0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMsIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItdG9wLXJpZ2h0LXJhZGl1cywgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItdG9wLWxlZnQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci10b3AtbGVmdC1yYWRpdXMsIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gZmxvYXQtbGVmdCgkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUoZmxvYXQsIGxlZnQsIHJpZ2h0LCAkZ2xvYmFsOiBmYWxzZSk7XG59XG5cbkBtaXhpbiBmbG9hdC1yaWdodCB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZShmbG9hdCwgcmlnaHQsIGxlZnQsICRnbG9iYWw6IGZhbHNlKTtcbn1cblxuQG1peGluIHNtYWxsLWRlc2t0b3Atb25seSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1sZykgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXhsIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLWFuZC10YWJsZXQtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZyAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtYWxsLW1vYmlsZS1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXMgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1tZCAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1kKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbGcpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLXVwIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1kKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGRpc2FibGUtc2Nyb2xsYmFyIHtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iLCIvLy8gaHR0cHM6Ly93d3cuZmlnbWEuY29tL2ZpbGUvR25tMDJxVDhsTDFYRXZ0TUZPUjZSTC9Mb29wLTIwMjEtRmVhdHVyZS1EZXZlbG9wbWVudD9ub2RlLWlkPTQlM0EzMDBcblxuLy8vIFRoaXMgaXMgdGhlIG1haW4gY29sb3VyIGZvciBhbGwgdGhlIGVsZW1lbnRzLiBJdCBpcyB1c2VkIHRvIGNyZWF0ZSBhbGwgb2YgdGhlIGlucHV0IGZpZWxkcywgZm9yIGljb25zIGV0Y1xuJGxvb3AtZ3JlZW4tMTI1OiAjMDU2NzYzO1xuJGxvb3AtZ3JlZW4tMTAwOiAjMTA3ZDc5O1xuJGxvb3AtZ3JlZW4tNTA6ICM4N2JlYmM7XG4kbG9vcC1ncmVlbi0yNTogI2MzZGZkZDtcbiRsb29wLWdyZWVuLTU6ICNmM2Y4Zjg7XG5cbi8vLyBVc2VkIGluIG5hdmlnYXRpb24gYW5kIGFzIHNlY29uZGFyeSBlbGVtZW50IGNvbG91cnMgb24gYnV0dG9ucyBhbmQgbGlua3NcbiRsb29wLXB1cnBsZS0xMjU6ICMyNjEwNDc7XG4kbG9vcC1wdXJwbGUtMTAwOiAjMzExMzVlO1xuJGxvb3AtcHVycGxlLTc1OiAjNDYyNDc4O1xuJGxvb3AtcHVycGxlLTYwOiAjODY2YWIwO1xuJGxvb3AtcHVycGxlLTUwOiAjOGE3YmExO1xuJGxvb3AtcHVycGxlLTQwOiAjZWFlNmYwO1xuJGxvb3AtcHVycGxlLTI1OiAjY2JjNGQ3O1xuJGxvb3AtcHVycGxlLTU6ICNmNWYzZjc7XG5cbi8vLyBVc2VkIGFzIGJhY2tncm91bmQgZm9yIGRpc2FibGVkIGxhYmVscyBhbmQgZmllbGRzIGFzIHdlbGwgYXMgZm9yIHRhZ3NcbiRsaWdodC1ncmV5OiAjZWVlZWVlO1xuXG4vLy8gR3JleXNjYWxlXG4kZ3JleS0xMDA6ICMwMDAwMDA7XG4kZ3JleS01MDogdHJhbnNwYXJlbnRpemUoJGdyZXktMTAwLCAxIC0gMC41KTtcbiRncmV5LTI1OiB0cmFuc3BhcmVudGl6ZSgkZ3JleS0xMDAsIDEgLSAwLjI1KTtcbiRncmV5LTU6IHRyYW5zcGFyZW50aXplKCRncmV5LTEwMCwgMSAtIDAuMDUpO1xuXG4vLy8gbm90aWZpY2F0aW9ucywgc3RhdHVzLCBjYXRlZ29yaWVzXG4vLy8gd2FybmluZywgYWxlcnRcbiRkYW5nZXItcmVkOiAjZWUyMzJmO1xuLy8vIG9rLCBhY2NlcHRlZCwgZmluaXNoZWRcbiR5ZXMtZ3JlZW46ICMxZGIwNDY7XG4vLy8gcGVuZGluZ1xuJGxvb3AteWVsbG93OiAjZWNiMzIwO1xuXG4vLy8gaGlnaGxpZ2h0IGNvbG91cnNcbiRwdXJwbGUtaGlnaGxpZ2h0OiAjNmYwMWU1O1xuJHB1cnBsZS1oaWdobGlnaHQtMDI1OiByZ2JhKDExMSwgMSwgMjI5LCAwLjI1KTtcbiRsb29wLXBpbms6ICNlZjQ3YTI7XG4kbG9vcC1waW5rLTAyNTogcmdiYSgyMzksIDcxLCAxNjIsIDAuMjUpO1xuJGxpZ2h0LWJsdWU6ICMyMGQzZWM7XG4kbGlnaHQtYmx1ZS0wMjU6IHJnYmEoMzIsIDIxMSwgMjM2LCAwLjI1KTtcbiRsb29wLWJsdWU6ICMyMDcyZWM7XG4kbG9vcC1ibHVlLTAyNTogcmdiYSgzMiwgMTE0LCAyMzYsIDAuMjUpO1xuJGdyZWVuLTI6ICNjM2VjMjA7XG4kZ3JlZW4tMi0wMjU6IHJnYmEoMTk1LCAyMzYsIDMyLCAwLjI1KTtcbiRsb29wLW9yYW5nZTogI2U5ODAyMDtcbiRsb29wLW9yYW5nZS0wMjU6IHJnYmEoMjMzLCAxMjgsIDMyLCAwLjI1KTtcblxuLy8vIFNwYWNlcnNcbiRncmF5LWxpbmUtY29sb3I6ICNkNmQwZGY7XG5cbiRsb29wLXJlZC1kYXJrOiAjYzkzMDRkO1xuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3RvcnktY2FyZC9zdG9yeS1jYXJkLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9zdHlsZXMvX21peGlucy5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9zdHlsZXMvbG9vcC1kZXNpZ24tc3lzdGVtL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUFIRjtBQUtFO0VBQ0UsbUJBQUE7QUFISjtBQ29DRTtFQTBDSSxvQkQxRW9CO0FBRDFCO0FDdUNFO0VBd0NJLG1CRDlFb0I7QUFFMUI7QUM4QkU7RUEwQ0ksbUJEekVtQjtBQUl6QjtBQ2lDRTtFQXdDSSxvQkQ3RW1CO0FBT3pCO0FBSkU7RUFDRSx1QkFBQTtBQU1KO0FDcUJFO0VBMENJLG9CRHBFb0I7QUFRMUI7QUN3QkU7RUF3Q0ksbUJEeEVvQjtBQVcxQjtBQ2VFO0VBMENJLG1CRG5FbUI7QUFhekI7QUNrQkU7RUF3Q0ksb0JEdkVtQjtBQWdCekI7QUFiRTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7QUFlSjtBQ0tFO0VBMENJLG9CRDdEb0I7QUFpQjFCO0FDUUU7RUF3Q0ksbUJEakVvQjtBQW9CMUI7QUNERTtFQTBDSSxtQkQ1RG1CO0FBc0J6QjtBQ0VFO0VBd0NJLG9CRGhFbUI7QUF5QnpCO0FBdEJFO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0FBd0JKO0FDWEU7RUEwQ0ksb0JEdERvQjtBQTBCMUI7QUNSRTtFQXdDSSxtQkQxRG9CO0FBNkIxQjtBQ2pCRTtFQTBDSSxtQkRyRG1CO0FBK0J6QjtBQ2RFO0VBd0NJLG9CRHpEbUI7QUFrQ3pCO0FBL0JFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkUvQlk7RUZnQ1osd0JBQUE7QUFpQ0o7QUM3QkU7RUEwQ0ksbUJEMUNtQjtBQWdDekI7QUMxQkU7RUF3Q0ksb0JEOUNtQjtBQW1DekI7QUNuQ0U7RUEwQ0ksb0JEdENvQjtBQWtDMUI7QUNoQ0U7RUF3Q0ksbUJEMUNvQjtBQXFDMUI7QUN6Q0U7RUEwQ0ksbUJEckNtQjtBQXVDekI7QUN0Q0U7RUF3Q0ksb0JEekNtQjtBQTBDekI7QUF0Q0k7RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0FBd0NOO0FBQ0EsNHZXQUE0dlciLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdsb29wLWRlc2lnbi1zeXN0ZW0vY29sb3JzJztcbkBpbXBvcnQgJ2xvb3AtZGVzaWduLXN5c3RlbS9oZWxwZXJzJztcbkBpbXBvcnQgJ21peGlucyc7XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuXG4gICZfX2hlYWRpbmcge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgQGluY2x1ZGUgbWFyZ2luLXJpZ2h0KDAuNXJlbSk7XG4gICAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoMC41cmVtKTtcbiAgfVxuXG4gICZfX3N1YmhlYWRpbmcge1xuICAgIG1hcmdpbi1ib3R0b206IDAuODQ0cmVtO1xuICAgIEBpbmNsdWRlIG1hcmdpbi1yaWdodCgwLjVyZW0pO1xuICAgIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KDAuNXJlbSk7XG4gIH1cblxuICAmX19jb250ZW50IHtcbiAgICBmb250LXNpemU6IHB4VG9SZW0oMTQpO1xuICAgIG1hcmdpbi1ib3R0b206IHB4VG9SZW0oMjApO1xuICAgIEBpbmNsdWRlIG1hcmdpbi1yaWdodCgwLjVyZW0pO1xuICAgIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KDAuNXJlbSk7XG4gIH1cblxuICAmX190cmFuc2xhdGlvbi1zdGF0dXMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IHB4VG9SZW0oMTIpO1xuICAgIEBpbmNsdWRlIG1hcmdpbi1yaWdodCgwLjVyZW0pO1xuICAgIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KDAuNXJlbSk7XG4gIH1cblxuICAmX19saW5lIHtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAkbG9vcC1ncmVlbi0yNTtcbiAgICBtYXJnaW4tYm90dG9tOiBweFRvUmVtKDExKTtcbiAgfVxuXG4gICZfX2FjdGlvbnMge1xuICAgIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KDAuNXJlbSk7XG4gIH1cblxuICAmX19hZnRlciB7XG4gICAgQGluY2x1ZGUgbWFyZ2luLXJpZ2h0KDAuNXJlbSk7XG4gICAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoMC41cmVtKTtcbiAgfVxuXG4gIDo6bmctZGVlcCB7XG4gICAgLnBvc3QtYXV0aG9yX19kYXRlIHtcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIGZsZXgtZ2FwKCRnYXAsICRnbG9iYWw6IGZhbHNlKSB7XG4gIG1hcmdpbi10b3A6ICgtJGdhcCk7XG4gIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCgtJGdhcCksICRnbG9iYWwpO1xuXG4gID4gKiB7XG4gICAgbWFyZ2luLXRvcDogJGdhcDtcbiAgICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgkZ2FwLCAkZ2xvYmFsKTtcbiAgfVxufVxuXG5AbWl4aW4gYmFzZS1jb250YWluZXIoJGNvbnRlbnQtd2lkdGgpIHtcbiAgJGRlc2t0b3AtcGFkZGluZzogMnJlbTtcbiAgbWF4LXdpZHRoOiBjYWxjKCN7JGNvbnRlbnQtd2lkdGh9ICsgKCN7JGRlc2t0b3AtcGFkZGluZ30pKTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MnJlbSkge1xuICAgIEBpbmNsdWRlIHBhZGRpbmctbGVmdCgkZGVza3RvcC1wYWRkaW5nLCB0cnVlKTtcbiAgICBAaW5jbHVkZSBwYWRkaW5nLXJpZ2h0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICB9XG59XG5cbkBtaXhpbiBjZW50ZXJBYnNvbHV0ZUVsZW1lbnQge1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5AbWl4aW4gb25seS1sdHItZ2xvYmFsIHtcbiAgaHRtbDpub3QoW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bC1nbG9iYWwge1xuICBodG1sW2Rpcj0ncnRsJ10gJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktbHRyIHtcbiAgOmhvc3QtY29udGV4dChodG1sOm5vdChbZGlyPSdydGwnXSkpICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bCB7XG4gIDpob3N0LWNvbnRleHQoaHRtbFtkaXI9J3J0bCddKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gcnRsLXZhbHVlKCRwcm9wZXJ0eSwgJGx0ci12YWx1ZSwgJHJ0bC12YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGx0ci12YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHJ0bC12YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHJ0bC1wcm9wZXJ0eSgkbHRyLXByb3BlcnR5LCAkcnRsLXByb3BlcnR5LCAkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpZiAkZ2xvYmFsID09IHRydWUge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyLWdsb2JhbCB7XG4gICAgICAjeyRsdHItcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwtZ2xvYmFsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bCB7XG4gICAgICAjeyRydGwtcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXJnaW4tbGVmdCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLWxlZnQsIG1hcmdpbi1yaWdodCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBtYXJnaW4tcmlnaHQoJG1hcmdpbiwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KG1hcmdpbi1yaWdodCwgbWFyZ2luLWxlZnQsICRtYXJnaW4sICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZygkcGFkZGluZ1RvcCwgJHBhZGRpbmdSaWdodCwgJHBhZGRpbmdCb3R0b20sICRwYWRkaW5nTGVmdCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgcGFkZGluZy10b3A6ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZ1JpZ2h0LCAkZ2xvYmFsKTtcbiAgcGFkZGluZy1ib3R0b206ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZ0xlZnQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1sZWZ0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLXJpZ2h0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiB0ZXh0LWFsaWduLWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRleHQtYWxpZ24sIGxlZnQsIHJpZ2h0LCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGxlZnQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobGVmdCwgcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiByaWdodCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShyaWdodCwgbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRyYW5zbGF0ZVhZKCR2YWx1ZVgsICR2YWx1ZVksICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZSh0cmFuc2Zvcm0sIHRyYW5zbGF0ZSgkdmFsdWVYLCAkdmFsdWVZKSwgdHJhbnNsYXRlKC0kdmFsdWVYLCAkdmFsdWVZKSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItbGVmdCwgYm9yZGVyLXJpZ2h0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1yaWdodCwgYm9yZGVyLWxlZnQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCBib3JkZXItdG9wLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtbGVmdC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBmbG9hdC1sZWZ0KCRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZShmbG9hdCwgbGVmdCwgcmlnaHQsICRnbG9iYWw6IGZhbHNlKTtcbn1cblxuQG1peGluIGZsb2F0LXJpZ2h0IHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCByaWdodCwgbGVmdCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gc21hbGwtZGVza3RvcC1vbmx5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LWxnKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQteGwgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtYW5kLXRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc21hbGwtbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtcyAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LW1kIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtdXAge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gZGlzYWJsZS1zY3JvbGxiYXIge1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiIsIi8vLyBodHRwczovL3d3dy5maWdtYS5jb20vZmlsZS9Hbm0wMnFUOGxMMVhFdnRNRk9SNlJML0xvb3AtMjAyMS1GZWF0dXJlLURldmVsb3BtZW50P25vZGUtaWQ9NCUzQTMwMFxuXG4vLy8gVGhpcyBpcyB0aGUgbWFpbiBjb2xvdXIgZm9yIGFsbCB0aGUgZWxlbWVudHMuIEl0IGlzIHVzZWQgdG8gY3JlYXRlIGFsbCBvZiB0aGUgaW5wdXQgZmllbGRzLCBmb3IgaWNvbnMgZXRjXG4kbG9vcC1ncmVlbi0xMjU6ICMwNTY3NjM7XG4kbG9vcC1ncmVlbi0xMDA6ICMxMDdkNzk7XG4kbG9vcC1ncmVlbi01MDogIzg3YmViYztcbiRsb29wLWdyZWVuLTI1OiAjYzNkZmRkO1xuJGxvb3AtZ3JlZW4tNTogI2YzZjhmODtcblxuLy8vIFVzZWQgaW4gbmF2aWdhdGlvbiBhbmQgYXMgc2Vjb25kYXJ5IGVsZW1lbnQgY29sb3VycyBvbiBidXR0b25zIGFuZCBsaW5rc1xuJGxvb3AtcHVycGxlLTEyNTogIzI2MTA0NztcbiRsb29wLXB1cnBsZS0xMDA6ICMzMTEzNWU7XG4kbG9vcC1wdXJwbGUtNzU6ICM0NjI0Nzg7XG4kbG9vcC1wdXJwbGUtNjA6ICM4NjZhYjA7XG4kbG9vcC1wdXJwbGUtNTA6ICM4YTdiYTE7XG4kbG9vcC1wdXJwbGUtNDA6ICNlYWU2ZjA7XG4kbG9vcC1wdXJwbGUtMjU6ICNjYmM0ZDc7XG4kbG9vcC1wdXJwbGUtNTogI2Y1ZjNmNztcblxuLy8vIFVzZWQgYXMgYmFja2dyb3VuZCBmb3IgZGlzYWJsZWQgbGFiZWxzIGFuZCBmaWVsZHMgYXMgd2VsbCBhcyBmb3IgdGFnc1xuJGxpZ2h0LWdyZXk6ICNlZWVlZWU7XG5cbi8vLyBHcmV5c2NhbGVcbiRncmV5LTEwMDogIzAwMDAwMDtcbiRncmV5LTUwOiB0cmFuc3BhcmVudGl6ZSgkZ3JleS0xMDAsIDEgLSAwLjUpO1xuJGdyZXktMjU6IHRyYW5zcGFyZW50aXplKCRncmV5LTEwMCwgMSAtIDAuMjUpO1xuJGdyZXktNTogdHJhbnNwYXJlbnRpemUoJGdyZXktMTAwLCAxIC0gMC4wNSk7XG5cbi8vLyBub3RpZmljYXRpb25zLCBzdGF0dXMsIGNhdGVnb3JpZXNcbi8vLyB3YXJuaW5nLCBhbGVydFxuJGRhbmdlci1yZWQ6ICNlZTIzMmY7XG4vLy8gb2ssIGFjY2VwdGVkLCBmaW5pc2hlZFxuJHllcy1ncmVlbjogIzFkYjA0Njtcbi8vLyBwZW5kaW5nXG4kbG9vcC15ZWxsb3c6ICNlY2IzMjA7XG5cbi8vLyBoaWdobGlnaHQgY29sb3Vyc1xuJHB1cnBsZS1oaWdobGlnaHQ6ICM2ZjAxZTU7XG4kcHVycGxlLWhpZ2hsaWdodC0wMjU6IHJnYmEoMTExLCAxLCAyMjksIDAuMjUpO1xuJGxvb3AtcGluazogI2VmNDdhMjtcbiRsb29wLXBpbmstMDI1OiByZ2JhKDIzOSwgNzEsIDE2MiwgMC4yNSk7XG4kbGlnaHQtYmx1ZTogIzIwZDNlYztcbiRsaWdodC1ibHVlLTAyNTogcmdiYSgzMiwgMjExLCAyMzYsIDAuMjUpO1xuJGxvb3AtYmx1ZTogIzIwNzJlYztcbiRsb29wLWJsdWUtMDI1OiByZ2JhKDMyLCAxMTQsIDIzNiwgMC4yNSk7XG4kZ3JlZW4tMjogI2MzZWMyMDtcbiRncmVlbi0yLTAyNTogcmdiYSgxOTUsIDIzNiwgMzIsIDAuMjUpO1xuJGxvb3Atb3JhbmdlOiAjZTk4MDIwO1xuJGxvb3Atb3JhbmdlLTAyNTogcmdiYSgyMzMsIDEyOCwgMzIsIDAuMjUpO1xuXG4vLy8gU3BhY2Vyc1xuJGdyYXktbGluZS1jb2xvcjogI2Q2ZDBkZjtcblxuJGxvb3AtcmVkLWRhcms6ICNjOTMwNGQ7XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 63332:
/*!*******************************************************************!*\
  !*** ./src/app/shared/components/story-card/story-card.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoryCardModule": () => (/* binding */ StoryCardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_post_partials_post_author_date_flat_post_author_date_flat_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/components/post/partials/post-author-date-flat/post-author-date-flat.module */ 3323);
/* harmony import */ var _post_post_preview_post_preview_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../post/post-preview/post-preview.module */ 78931);
/* harmony import */ var _skeleton_text_skeleton_text_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../skeleton-text/skeleton-text.module */ 81298);
/* harmony import */ var _story_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./story-card.component */ 95611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);






class StoryCardModule {
  static #_ = this.ɵfac = function StoryCardModule_Factory(t) {
    return new (t || StoryCardModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: StoryCardModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _shared_components_post_partials_post_author_date_flat_post_author_date_flat_module__WEBPACK_IMPORTED_MODULE_0__.PostAuthorDateFlatModule, _skeleton_text_skeleton_text_module__WEBPACK_IMPORTED_MODULE_2__.SkeletonTextModule, _post_post_preview_post_preview_module__WEBPACK_IMPORTED_MODULE_1__.PostPreviewModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](StoryCardModule, {
    declarations: [_story_card_component__WEBPACK_IMPORTED_MODULE_3__.StoryCardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _shared_components_post_partials_post_author_date_flat_post_author_date_flat_module__WEBPACK_IMPORTED_MODULE_0__.PostAuthorDateFlatModule, _skeleton_text_skeleton_text_module__WEBPACK_IMPORTED_MODULE_2__.SkeletonTextModule, _post_post_preview_post_preview_module__WEBPACK_IMPORTED_MODULE_1__.PostPreviewModule],
    exports: [_story_card_component__WEBPACK_IMPORTED_MODULE_3__.StoryCardComponent]
  });
})();

/***/ }),

/***/ 49122:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/shared/components/story-with-comments/story-details-subheading/story-details-subheading.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoryDetailsSubheadingComponent": () => (/* binding */ StoryDetailsSubheadingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/types */ 69165);
/* harmony import */ var _shared_types_difficulty_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/types/difficulty.type */ 48707);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _pills_pill_pill_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pills/pill/pill.component */ 32358);
/* harmony import */ var _pills_pills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pills/pills.component */ 56590);








function StoryDetailsSubheadingComponent_section_0_app_pill_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-pill", 6);
  }
  if (rf & 2) {
    const organisation_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", organisation_r5.name);
  }
}
function StoryDetailsSubheadingComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 3)(1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "app-pills");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, StoryDetailsSubheadingComponent_section_0_app_pill_5_Template, 1, 1, "app-pill", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, "global.to"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.story.organisations);
  }
}
function StoryDetailsSubheadingComponent_app_pill_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-pill", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("dismissed", function StoryDetailsSubheadingComponent_app_pill_3_Template_app_pill_dismissed_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.dismissTag("gender", ctx_r6.story == null ? null : ctx_r6.story.gender));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, ctx_r1.genderMapping[ctx_r1.story == null ? null : ctx_r1.story.gender]))("interactive", ctx_r1.editableTags);
  }
}
function StoryDetailsSubheadingComponent_app_pill_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-pill", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("dismissed", function StoryDetailsSubheadingComponent_app_pill_4_Template_app_pill_dismissed_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.dismissTag("age", ctx_r8.story == null ? null : ctx_r8.story.age));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, ctx_r2.ageMapping[ctx_r2.story == null ? null : ctx_r2.story.age]))("interactive", ctx_r2.editableTags);
  }
}
function StoryDetailsSubheadingComponent_app_pill_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-pill", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StoryDetailsSubheadingComponent_app_pill_5_Template_app_pill_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.dismissTag(item_r10.type, item_r10.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, item_r10.title))("interactive", ctx_r3.editableTags);
  }
}
class StoryDetailsSubheadingComponent {
  get additionalInfo() {
    const difficulties = this.story?.difficulties.map(el => ({
      id: el.id,
      title: `${this.translateService.instant('global.difficulty')} ${this.translateService.instant(_shared_types_difficulty_type__WEBPACK_IMPORTED_MODULE_1__.DIFFICULTY_TRANSLATE_MAPPING[el.id])}`,
      type: 'difficulties'
    }));
    const maternityStatus = this.story?.maternityStatus.map(el => ({
      ...el,
      title: this.translateService.instant(`maternity.${el.code}`),
      type: 'maternityStatus'
    }));
    return [...(difficulties || []), ...(maternityStatus || [])];
  }
  constructor(translateService, cd) {
    this.translateService = translateService;
    this.cd = cd;
    this.dismissedTag = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.dismissedTags = [];
    this.genderMapping = _shared_types__WEBPACK_IMPORTED_MODULE_0__.GENDER_MAPPING;
    this.ageMapping = _shared_types__WEBPACK_IMPORTED_MODULE_0__.AGE_MAPPING;
  }
  dismissed(type, value) {
    for (const dt of this.dismissedTags) {
      if (dt.type === type && dt.value === value) {
        return true;
      }
    }
    return false;
  }
  dismissTag(type, value) {
    const val = {
      type,
      value
    };
    this.dismissedTags.push(val);
    this.dismissedTag.emit(val);
    this.cd.markForCheck();
  }
  static #_ = this.ɵfac = function StoryDetailsSubheadingComponent_Factory(t) {
    return new (t || StoryDetailsSubheadingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: StoryDetailsSubheadingComponent,
    selectors: [["app-story-details-subheading"]],
    inputs: {
      story: "story",
      editableTags: "editableTags"
    },
    outputs: {
      dismissedTag: "dismissedTag"
    },
    decls: 6,
    vars: 4,
    consts: [["class", "organisations", 4, "ngIf"], [3, "text", "interactive", "dismissed", 4, "ngIf"], [3, "text", "interactive", "click", 4, "ngFor", "ngForOf"], [1, "organisations"], [1, "organisations__label"], [3, "text", 4, "ngFor", "ngForOf"], [3, "text"], [3, "text", "interactive", "dismissed"], [3, "text", "interactive", "click"]],
    template: function StoryDetailsSubheadingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, StoryDetailsSubheadingComponent_section_0_Template, 6, 4, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "section")(2, "app-pills");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, StoryDetailsSubheadingComponent_app_pill_3_Template, 2, 4, "app-pill", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, StoryDetailsSubheadingComponent_app_pill_4_Template, 2, 4, "app-pill", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, StoryDetailsSubheadingComponent_app_pill_5_Template, 2, 4, "app-pill", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.story == null ? null : ctx.story.organisations == null ? null : ctx.story.organisations.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.story == null ? null : ctx.story.gender) && !ctx.dismissed("gender", ctx.story == null ? null : ctx.story.gender));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.story == null ? null : ctx.story.age) && !ctx.dismissed("age", ctx.story == null ? null : ctx.story.age));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.additionalInfo);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _pills_pill_pill_component__WEBPACK_IMPORTED_MODULE_2__.PillComponent, _pills_pills_component__WEBPACK_IMPORTED_MODULE_3__.PillsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
    styles: [".organisations[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-bottom: 0.5rem;\n}\nhtml:not([dir=rtl])[_nghost-%COMP%]   .organisations__label[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .organisations__label[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n}\nhtml[dir=rtl][_nghost-%COMP%]   .organisations__label[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .organisations__label[_ngcontent-%COMP%] {\n  margin-left: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3J5LWRldGFpbHMtc3ViaGVhZGluZy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3N0eWxlcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFERjtBQ3FDRTtFQTBDSSxxQkQzRW9CO0FBRDFCO0FDd0NFO0VBd0NJLG9CRC9Fb0I7QUFFMUIiLCJmaWxlIjoic3RvcnktZGV0YWlscy1zdWJoZWFkaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnbWl4aW5zJztcblxuLm9yZ2FuaXNhdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcblxuICAmX19sYWJlbCB7XG4gICAgQGluY2x1ZGUgbWFyZ2luLXJpZ2h0KDAuMjVyZW0pO1xuICB9XG59XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AbWl4aW4gZmxleC1nYXAoJGdhcCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgbWFyZ2luLXRvcDogKC0kZ2FwKTtcbiAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoKC0kZ2FwKSwgJGdsb2JhbCk7XG5cbiAgPiAqIHtcbiAgICBtYXJnaW4tdG9wOiAkZ2FwO1xuICAgIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCRnYXAsICRnbG9iYWwpO1xuICB9XG59XG5cbkBtaXhpbiBiYXNlLWNvbnRhaW5lcigkY29udGVudC13aWR0aCkge1xuICAkZGVza3RvcC1wYWRkaW5nOiAycmVtO1xuICBtYXgtd2lkdGg6IGNhbGMoI3skY29udGVudC13aWR0aH0gKyAoI3skZGVza3RvcC1wYWRkaW5nfSkpO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQycmVtKSB7XG4gICAgQGluY2x1ZGUgcGFkZGluZy1sZWZ0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICAgIEBpbmNsdWRlIHBhZGRpbmctcmlnaHQoJGRlc2t0b3AtcGFkZGluZywgdHJ1ZSk7XG4gIH1cbn1cblxuQG1peGluIGNlbnRlckFic29sdXRlRWxlbWVudCB7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbkBtaXhpbiBvbmx5LWx0ci1nbG9iYWwge1xuICBodG1sOm5vdChbZGlyPSdydGwnXSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsLWdsb2JhbCB7XG4gIGh0bWxbZGlyPSdydGwnXSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1sdHIge1xuICA6aG9zdC1jb250ZXh0KGh0bWw6bm90KFtkaXI9J3J0bCddKSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsIHtcbiAgOmhvc3QtY29udGV4dChodG1sW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBydGwtdmFsdWUoJHByb3BlcnR5LCAkbHRyLXZhbHVlLCAkcnRsLXZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaWYgJGdsb2JhbCA9PSB0cnVlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ci1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsLWdsb2JhbCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRydGwtdmFsdWU7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ciB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRsdHItdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gcnRsLXByb3BlcnR5KCRsdHItcHJvcGVydHksICRydGwtcHJvcGVydHksICR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcnRsLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skbHRyLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hcmdpbi1sZWZ0KCRtYXJnaW4sICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShtYXJnaW4tbGVmdCwgbWFyZ2luLXJpZ2h0LCAkbWFyZ2luLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIG1hcmdpbi1yaWdodCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLXJpZ2h0LCBtYXJnaW4tbGVmdCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nKCRwYWRkaW5nVG9wLCAkcGFkZGluZ1JpZ2h0LCAkcGFkZGluZ0JvdHRvbSwgJHBhZGRpbmdMZWZ0LCAkZ2xvYmFsOiBmYWxzZSkge1xuICBwYWRkaW5nLXRvcDogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nUmlnaHQsICRnbG9iYWwpO1xuICBwYWRkaW5nLWJvdHRvbTogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nTGVmdCwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLWxlZnQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmctcmlnaHQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRleHQtYWxpZ24tbGVmdCgkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUodGV4dC1hbGlnbiwgbGVmdCwgcmlnaHQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShsZWZ0LCByaWdodCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHJpZ2h0LCBsZWZ0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gdHJhbnNsYXRlWFkoJHZhbHVlWCwgJHZhbHVlWSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRyYW5zZm9ybSwgdHJhbnNsYXRlKCR2YWx1ZVgsICR2YWx1ZVkpLCB0cmFuc2xhdGUoLSR2YWx1ZVgsICR2YWx1ZVkpLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1sZWZ0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1sZWZ0LCBib3JkZXItcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItcmlnaHQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXJpZ2h0LCBib3JkZXItbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsIGJvcmRlci10b3AtbGVmdC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItdG9wLWxlZnQtcmFkaXVzLCBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGZsb2F0LWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCBsZWZ0LCByaWdodCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gZmxvYXQtcmlnaHQge1xuICBAaW5jbHVkZSBydGwtdmFsdWUoZmxvYXQsIHJpZ2h0LCBsZWZ0LCAkZ2xvYmFsOiBmYWxzZSk7XG59XG5cbkBtaXhpbiBzbWFsbC1kZXNrdG9wLW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbGcpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC14bCAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1hbmQtdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbGcgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBzbWFsbC1tb2JpbGUtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1zIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbWQgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0YWJsZXQtb25seSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS11cCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBkaXNhYmxlLXNjcm9sbGJhciB7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3Rvcnktd2l0aC1jb21tZW50cy9zdG9yeS1kZXRhaWxzLXN1YmhlYWRpbmcvc3RvcnktZGV0YWlscy1zdWJoZWFkaW5nLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBREY7QUNxQ0U7RUEwQ0kscUJEM0VvQjtBQUQxQjtBQ3dDRTtFQXdDSSxvQkQvRW9CO0FBRTFCO0FBQ0Esd2hPQUF3aE8iLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdtaXhpbnMnO1xuXG4ub3JnYW5pc2F0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuXG4gICZfX2xhYmVsIHtcbiAgICBAaW5jbHVkZSBtYXJnaW4tcmlnaHQoMC4yNXJlbSk7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbkBtaXhpbiBmbGV4LWdhcCgkZ2FwLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBtYXJnaW4tdG9wOiAoLSRnYXApO1xuICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgoLSRnYXApLCAkZ2xvYmFsKTtcblxuICA+ICoge1xuICAgIG1hcmdpbi10b3A6ICRnYXA7XG4gICAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoJGdhcCwgJGdsb2JhbCk7XG4gIH1cbn1cblxuQG1peGluIGJhc2UtY29udGFpbmVyKCRjb250ZW50LXdpZHRoKSB7XG4gICRkZXNrdG9wLXBhZGRpbmc6IDJyZW07XG4gIG1heC13aWR0aDogY2FsYygjeyRjb250ZW50LXdpZHRofSArICgjeyRkZXNrdG9wLXBhZGRpbmd9KSk7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDJyZW0pIHtcbiAgICBAaW5jbHVkZSBwYWRkaW5nLWxlZnQoJGRlc2t0b3AtcGFkZGluZywgdHJ1ZSk7XG4gICAgQGluY2x1ZGUgcGFkZGluZy1yaWdodCgkZGVza3RvcC1wYWRkaW5nLCB0cnVlKTtcbiAgfVxufVxuXG5AbWl4aW4gY2VudGVyQWJzb2x1dGVFbGVtZW50IHtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcblxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuQG1peGluIG9ubHktbHRyLWdsb2JhbCB7XG4gIGh0bWw6bm90KFtkaXI9J3J0bCddKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1ydGwtZ2xvYmFsIHtcbiAgaHRtbFtkaXI9J3J0bCddICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LWx0ciB7XG4gIDpob3N0LWNvbnRleHQoaHRtbDpub3QoW2Rpcj0ncnRsJ10pKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1ydGwge1xuICA6aG9zdC1jb250ZXh0KGh0bWxbZGlyPSdydGwnXSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHJ0bC12YWx1ZSgkcHJvcGVydHksICRsdHItdmFsdWUsICRydGwtdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpZiAkZ2xvYmFsID09IHRydWUge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyLWdsb2JhbCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRsdHItdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwtZ2xvYmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHJ0bC12YWx1ZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGx0ci12YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRydGwtdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBydGwtcHJvcGVydHkoJGx0ci1wcm9wZXJ0eSwgJHJ0bC1wcm9wZXJ0eSwgJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaWYgJGdsb2JhbCA9PSB0cnVlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ci1nbG9iYWwge1xuICAgICAgI3skbHRyLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsLWdsb2JhbCB7XG4gICAgICAjeyRydGwtcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ciB7XG4gICAgICAjeyRsdHItcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwge1xuICAgICAgI3skcnRsLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWFyZ2luLWxlZnQoJG1hcmdpbiwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KG1hcmdpbi1sZWZ0LCBtYXJnaW4tcmlnaHQsICRtYXJnaW4sICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gbWFyZ2luLXJpZ2h0KCRtYXJnaW4sICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShtYXJnaW4tcmlnaHQsIG1hcmdpbi1sZWZ0LCAkbWFyZ2luLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmcoJHBhZGRpbmdUb3AsICRwYWRkaW5nUmlnaHQsICRwYWRkaW5nQm90dG9tLCAkcGFkZGluZ0xlZnQsICRnbG9iYWw6IGZhbHNlKSB7XG4gIHBhZGRpbmctdG9wOiAkcGFkZGluZ1RvcDtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctcmlnaHQsIHBhZGRpbmctbGVmdCwgJHBhZGRpbmdSaWdodCwgJGdsb2JhbCk7XG4gIHBhZGRpbmctYm90dG9tOiAkcGFkZGluZ1RvcDtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctbGVmdCwgcGFkZGluZy1yaWdodCwgJHBhZGRpbmdMZWZ0LCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmctbGVmdCgkcGFkZGluZywgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctbGVmdCwgcGFkZGluZy1yaWdodCwgJHBhZGRpbmcsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1yaWdodCgkcGFkZGluZywgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctcmlnaHQsIHBhZGRpbmctbGVmdCwgJHBhZGRpbmcsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gdGV4dC1hbGlnbi1sZWZ0KCRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZSh0ZXh0LWFsaWduLCBsZWZ0LCByaWdodCwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBsZWZ0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGxlZnQsIHJpZ2h0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcmlnaHQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocmlnaHQsIGxlZnQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiB0cmFuc2xhdGVYWSgkdmFsdWVYLCAkdmFsdWVZLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUodHJhbnNmb3JtLCB0cmFuc2xhdGUoJHZhbHVlWCwgJHZhbHVlWSksIHRyYW5zbGF0ZSgtJHZhbHVlWCwgJHZhbHVlWSksICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWxlZnQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWxlZnQsIGJvcmRlci1yaWdodCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1yaWdodCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItcmlnaHQsIGJvcmRlci1sZWZ0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMsIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItdG9wLXJpZ2h0LXJhZGl1cywgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItdG9wLWxlZnQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci10b3AtbGVmdC1yYWRpdXMsIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gZmxvYXQtbGVmdCgkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUoZmxvYXQsIGxlZnQsIHJpZ2h0LCAkZ2xvYmFsOiBmYWxzZSk7XG59XG5cbkBtaXhpbiBmbG9hdC1yaWdodCB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZShmbG9hdCwgcmlnaHQsIGxlZnQsICRnbG9iYWw6IGZhbHNlKTtcbn1cblxuQG1peGluIHNtYWxsLWRlc2t0b3Atb25seSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1sZykgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXhsIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLWFuZC10YWJsZXQtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZyAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtYWxsLW1vYmlsZS1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXMgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1tZCAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1kKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbGcpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLXVwIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1kKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGRpc2FibGUtc2Nyb2xsYmFyIHtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 51981:
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/story-with-comments/story-with-comments.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoryWithCommentsComponent": () => (/* binding */ StoryWithCommentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/app-routing.props */ 18854);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _core_services_api_story_story_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/api/story/story.service */ 95138);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/ui/ui.service */ 21428);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _post_partials_reply_form_reply_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post/partials/reply-form/reply-form.component */ 84409);
/* harmony import */ var _comment_comment_list_comment_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../comment/comment-list/comment-list.component */ 57315);
/* harmony import */ var _story_card_story_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../story-card/story-card.component */ 95611);
/* harmony import */ var _additional_story_info_additional_story_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../additional-story-info/additional-story-info.component */ 49928);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 38699);














function StoryWithCommentsComponent_div_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0);
  }
}
const _c0 = function () {
  return {
    within: true
  };
};
function StoryWithCommentsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, StoryWithCommentsComponent_div_4_ng_container_2_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](2, _c0));
  }
}
function StoryWithCommentsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 7)(2, "app-reply-form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("story", ctx_r1.story)("commentId", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 3, ctx_r1.story$))("skeleton", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 5, ctx_r1.story$) === undefined);
  }
}
function StoryWithCommentsComponent_div_7_div_1_span_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, ",\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
}
function StoryWithCommentsComponent_div_7_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, StoryWithCommentsComponent_div_7_div_1_span_4_ng_container_2_Template, 2, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const organisation_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r8.commentsLoadedCount > -1 ? organisation_r9 : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r8.commentsLoadedCount > -1 && i_r10 < ctx_r8.organisationsReplied.length - 1);
  }
}
const _c1 = function (a0) {
  return {
    count: a0
  };
};
function StoryWithCommentsComponent_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15)(1, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, StoryWithCommentsComponent_div_7_div_1_span_4_Template, 3, 2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](3, 3, "comments.replies", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](6, _c1, ctx_r7.commentsLoadedCount)));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r7.organisationsReplied)("ngForTrackBy", ctx_r7.trackByFunction);
  }
}
function StoryWithCommentsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, StoryWithCommentsComponent_div_7_div_1_Template, 5, 8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 13)(3, "app-comment-list", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("loaded", function StoryWithCommentsComponent_div_7_Template_app_comment_list_loaded_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r12.commentsLoadedEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.commentsLoadedCount > -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 4, ctx_r2.story$)) == null ? null : tmp_1_0.id)("forceExpanded", ctx_r2.forceExpanded)("showReplyForm", ctx_r2.showForm);
  }
}
function StoryWithCommentsComponent_div_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0);
  }
}
const _c2 = function () {
  return {
    within: false
  };
};
function StoryWithCommentsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, StoryWithCommentsComponent_div_8_ng_container_1_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](2, _c2));
  }
}
function StoryWithCommentsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-additional-story-info", 19);
  }
  if (rf & 2) {
    const within_r15 = ctx.within;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("story", ctx_r5.story)("flat", within_r15)("noPadding", within_r15);
  }
}
class StoryWithCommentsComponent {
  constructor(storyService, router, cd, uiService) {
    this.storyService = storyService;
    this.router = router;
    this.cd = cd;
    this.uiService = uiService;
    this.showReplies = true;
    this.showForm = true;
    this.showActions = true;
    this.embed = false;
    this.showReplyForm = true;
    this.forceExpanded = false;
    this.editableTags = false;
    this.showStoryInfo = true;
    this.loadingError = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.dismissedTag = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.totalReplies = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.storyLoaded = false;
    this.commentsLoadedCount = -1;
    this.organisationsReplied = new Array();
  }
  ngOnInit() {
    this.storyId = this.id;
    if (this.id) {
      this.load(this.storyId, this.channel);
    }
    if (this.changeSubject) {
      this.changeSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroyed$)).subscribe(() => {
        this.cd.markForCheck();
      });
    }
  }
  ngOnChanges(changes) {
    if (changes.postData) {
      this.story$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(this.postData);
      this.storyId = this.postData.id;
      this.storyLoaded = true;
      this.cd.markForCheck();
    }
  }
  load(id, channel) {
    if (channel) {
      this.loadStoryAsModerator(id, channel);
    } else {
      this.loadStory(id);
    }
  }
  commentsLoadedEvent(loaded) {
    this.commentsLoadedCount = loaded;
    this.totalReplies.emit(this.commentsLoadedCount);
    this.cd.markForCheck();
  }
  get isInInboxArea() {
    return this.router.url.startsWith(`/${_app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.MAIN_ROUTES.INBOX}/`);
  }
  trackByFunction(i) {
    return i;
  }
  loadStoryAsModerator(id, channel) {
    this.storyService.getStoryModerator(id, channel).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(e => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.throwError)({
      error: e
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.finalize)(() => this.loading = false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroyed$)).subscribe(res => {
      this.story$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(res);
      this.story = res;
      this.organisationsReplied = [];
      res.organisations.forEach(org => {
        if (org.replied) {
          this.organisationsReplied.push(org.name);
        }
      });
      this.storyLoaded = true;
      this.cd.markForCheck();
    }, () => {
      this.loadingError.emit(true);
    });
  }
  loadStory(id) {
    this.storyService.getStory(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(e => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.throwError)({
      error: e
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.finalize)(() => this.loading = false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroyed$)).subscribe(res => {
      this.story$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(res);
      this.story = res;
      this.organisationsReplied = [];
      res.organisations.forEach(org => {
        if (org.replied) {
          this.organisationsReplied.push(org.name);
        }
      });
      this.storyLoaded = true;
      this.cd.markForCheck();
    }, () => {
      this.loadingError.emit(true);
    });
  }
  static #_ = this.ɵfac = function StoryWithCommentsComponent_Factory(t) {
    return new (t || StoryWithCommentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_api_story_story_service__WEBPACK_IMPORTED_MODULE_1__.StoryService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_2__.UIService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: StoryWithCommentsComponent,
    selectors: [["app-story-with-comments"]],
    inputs: {
      id: "id",
      channel: "channel",
      postData: "postData",
      showReplies: "showReplies",
      showForm: "showForm",
      showActions: "showActions",
      embed: "embed",
      showReplyForm: "showReplyForm",
      forceExpanded: "forceExpanded",
      editableTags: "editableTags",
      forceInfoWithin: "forceInfoWithin",
      showStoryInfo: "showStoryInfo",
      changeSubject: "changeSubject"
    },
    outputs: {
      loadingError: "loadingError",
      dismissedTag: "dismissedTag",
      totalReplies: "totalReplies"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]],
    decls: 12,
    vars: 13,
    consts: [[1, "story-with-comments"], [3, "story", "showSubheading", "loading"], ["ngProjectAs", "after", 5, ["after"]], [4, "ngIf"], ["id", "form-container", 4, "ngIf"], ["class", "comments", "id", "comments-container", 4, "ngIf"], ["additionalStoryInfo", ""], [1, "post__section-separator", "story-with-comments__form-separator"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["id", "form-container"], [3, "story", "commentId", "skeleton"], ["id", "comments-container", 1, "comments"], ["class", "story-details__components-header", 4, "ngIf"], [1, "comments-wrapper"], [3, "id", "forceExpanded", "showReplyForm", "loaded"], [1, "story-details__components-header"], [1, "story-details__comments-count"], ["class", "t-medium text-secondary", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "t-medium", "text-secondary"], [3, "story", "flat", "noPadding"]],
    template: function StoryWithCommentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "app-story-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, StoryWithCommentsComponent_div_4_Template, 3, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, StoryWithCommentsComponent_div_6_Template, 5, 7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, StoryWithCommentsComponent_div_7_Template, 5, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, StoryWithCommentsComponent_div_8_Template, 2, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, StoryWithCommentsComponent_ng_template_10_Template, 1, 3, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("one-column", ctx.forceInfoWithin);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("story", ctx.story)("showSubheading", true)("loading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showStoryInfo && (_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 9, ctx.uiService.mobileView$) || ctx.forceInfoWithin));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showReplies);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showStoryInfo && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 11, ctx.uiService.mobileView$) === false && !ctx.forceInfoWithin);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgTemplateOutlet, _post_partials_reply_form_reply_form_component__WEBPACK_IMPORTED_MODULE_3__.ReplyFormComponent, _comment_comment_list_comment_list_component__WEBPACK_IMPORTED_MODULE_4__.CommentListComponent, _story_card_story_card_component__WEBPACK_IMPORTED_MODULE_5__.StoryCardComponent, _additional_story_info_additional_story_info_component__WEBPACK_IMPORTED_MODULE_6__.AdditionalStoryInfoComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe],
    styles: [".story-details[_ngcontent-%COMP%] {\n  padding: 1.5rem 1rem;\n  border-radius: 8px;\n  background-color: #ffffff;\n}\n.story-details__header[_ngcontent-%COMP%] {\n  margin-bottom: 0.844rem;\n}\n.story-details__comments-count[_ngcontent-%COMP%] {\n  color: #107d79;\n  font-size: 1.25rem;\n  font-weight: bold;\n}\n@media (max-width: 767.9px) {\n  .story-details__comments-count[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n.story-details__components-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.875rem;\n}\n@media (max-width: 767.9px) {\n  .story-details__components-header[_ngcontent-%COMP%] {\n    margin: 0 1.25rem 1.25rem 1.25rem;\n  }\n}\n.story-details__content[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.story-details__translations[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 1.25rem;\n}\n\n.comments[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n@media (min-width: 768px) {\n  .story-with-comments[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: minmax(0, 44.375fr) minmax(0, 21.563fr);\n    gap: 1.25rem;\n  }\n}\n.story-with-comments.one-column[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n.story-with-comments__extra-info--within[_ngcontent-%COMP%] {\n  display: block;\n}\n@media (min-width: 768px) {\n  .story-with-comments__extra-info--within[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.story-with-comments__form-separator[_ngcontent-%COMP%] {\n  margin-top: 1.125rem;\n}\n@media (max-width: 767.9px) {\n  .story-with-comments[_ngcontent-%COMP%]     loop-card .card {\n    padding: 1.25rem;\n  }\n  .story-with-comments[_ngcontent-%COMP%]     .post__section-separator {\n    width: calc(100% + 2.5rem);\n  }\n  html:not([dir=rtl])[_nghost-%COMP%]   .story-with-comments[_ngcontent-%COMP%]     .post__section-separator, html:not([dir=rtl])   [_nghost-%COMP%]   .story-with-comments[_ngcontent-%COMP%]     .post__section-separator {\n    margin-left: -1.5rem;\n  }\n  html[dir=rtl][_nghost-%COMP%]   .story-with-comments[_ngcontent-%COMP%]     .post__section-separator, html[dir=rtl]   [_nghost-%COMP%]   .story-with-comments[_ngcontent-%COMP%]     .post__section-separator {\n    margin-right: -1.5rem;\n  }\n  html:not([dir=rtl])[_nghost-%COMP%]   .story-with-comments[_ngcontent-%COMP%]     .post__section-separator, html:not([dir=rtl])   [_nghost-%COMP%]   .story-with-comments[_ngcontent-%COMP%]     .post__section-separator {\n    margin-right: -1.5rem;\n  }\n  html[dir=rtl][_nghost-%COMP%]   .story-with-comments[_ngcontent-%COMP%]     .post__section-separator, html[dir=rtl]   [_nghost-%COMP%]   .story-with-comments[_ngcontent-%COMP%]     .post__section-separator {\n    margin-left: -1.5rem;\n  }\n  html:not([dir=rtl])[_nghost-%COMP%]   .story-with-comments[_ngcontent-%COMP%]     .comments-action, html:not([dir=rtl])   [_nghost-%COMP%]   .story-with-comments[_ngcontent-%COMP%]     .comments-action, html:not([dir=rtl])[_nghost-%COMP%]   .story-with-comments[_ngcontent-%COMP%]     .post-actions, html:not([dir=rtl])   [_nghost-%COMP%]   .story-with-comments[_ngcontent-%COMP%]     .post-actions {\n    margin-right: 0;\n  }\n  html[dir=rtl][_nghost-%COMP%]   .story-with-comments[_ngcontent-%COMP%]     .comments-action, html[dir=rtl]   [_nghost-%COMP%]   .story-with-comments[_ngcontent-%COMP%]     .comments-action, html[dir=rtl][_nghost-%COMP%]   .story-with-comments[_ngcontent-%COMP%]     .post-actions, html[dir=rtl]   [_nghost-%COMP%]   .story-with-comments[_ngcontent-%COMP%]     .post-actions {\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3J5LXdpdGgtY29tbWVudHMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi9zdHlsZXMvbG9vcC1kZXNpZ24tc3lzdGVtL19jb2xvcnMuc2NzcyIsIi4uLy4uLy4uL3N0eWxlcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFGRjtBQUlFO0VBQ0UsdUJBQUE7QUFGSjtBQUtFO0VBQ0UsY0NUYTtFRFViLGtCQUFBO0VBQ0EsaUJBQUE7QUFISjtBRTJLRTtFRjNLQTtJQU1JLGVBQUE7RUFGSjtBQUNGO0FBS0U7RUFDRSx1QkFBQTtBQUhKO0FFbUtFO0VGaktBO0lBSUksaUNBQUE7RUFGSjtBQUNGO0FBS0U7RUFDRSxtQkFBQTtBQUhKO0FBTUU7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFKSjs7QUFRQTtFQUNFLGtCQUFBO0FBTEY7O0FFK0pFO0VGdkpGO0lBRUksYUFBQTtJQUNBLDhEQUFBO0lBQ0EsWUFBQTtFQUxGO0FBQ0Y7QUFPRTtFQUNFLDBCQUFBO0FBTEo7QUFTSTtFQUNFLGNBQUE7QUFQTjtBRWlKRTtFRjNJRTtJQUlJLGFBQUE7RUFOTjtBQUNGO0FBVUU7RUFDRSxvQkFBQTtBQVJKO0FFNkhFO0VGL0dNO0lBQ0UsZ0JBQUE7RUFYUjtFQWVJO0lBQ0UsMEJBQUE7RUFiTjtFRXZCQTtJQTBDSSxvQkZMdUI7RUFYM0I7RUVwQkE7SUF3Q0kscUJGVHVCO0VBUjNCO0VFN0JBO0lBMENJLHFCRkp3QjtFQU41QjtFRTFCQTtJQXdDSSxvQkZSd0I7RUFINUI7RUVuQ0E7O0lBMENJLGVGQ3dCO0VBSjVCO0VFakNBOztJQXdDSSxjRkh3QjtFQUE1QjtBQUNGIiwiZmlsZSI6InN0b3J5LXdpdGgtY29tbWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdtaXhpbnMnO1xuQGltcG9ydCAnbG9vcC1kZXNpZ24tc3lzdGVtL2NvbG9ycyc7XG5cbi5zdG9yeS1kZXRhaWxzIHtcbiAgcGFkZGluZzogMS41cmVtIDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblxuICAmX19oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDAuODQ0cmVtO1xuICB9XG5cbiAgJl9fY29tbWVudHMtY291bnQge1xuICAgIGNvbG9yOiAkbG9vcC1ncmVlbi0xMDA7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgfVxuXG4gICZfX2NvbXBvbmVudHMtaGVhZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjg3NXJlbTtcblxuICAgIEBpbmNsdWRlIG1vYmlsZS1vbmx5IHtcbiAgICAgIG1hcmdpbjogMCAxLjI1cmVtIDEuMjVyZW0gMS4yNXJlbTtcbiAgICB9XG4gIH1cblxuICAmX19jb250ZW50IHtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICB9XG5cbiAgJl9fdHJhbnNsYXRpb25zIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xuICB9XG59XG5cbi5jb21tZW50cyB7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbn1cblxuLnN0b3J5LXdpdGgtY29tbWVudHMge1xuICBAaW5jbHVkZSBtb2JpbGUtdXAge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgNDQuMzc1ZnIpIG1pbm1heCgwLCAyMS41NjNmcik7XG4gICAgZ2FwOiAxLjI1cmVtO1xuICB9XG5cbiAgJi5vbmUtY29sdW1uIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gICZfX2V4dHJhLWluZm8ge1xuICAgICYtLXdpdGhpbiB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgQGluY2x1ZGUgbW9iaWxlLXVwIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmX19mb3JtLXNlcGFyYXRvciB7XG4gICAgbWFyZ2luLXRvcDogMS4xMjVyZW07XG4gIH1cblxuICA6Om5nLWRlZXAge1xuICAgIEBpbmNsdWRlIG1vYmlsZS1vbmx5IHtcbiAgICAgIGxvb3AtY2FyZCB7XG4gICAgICAgIC5jYXJkIHtcbiAgICAgICAgICBwYWRkaW5nOiAxLjI1cmVtO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5wb3N0X19zZWN0aW9uLXNlcGFyYXRvciB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAyICogMS4yNXJlbSk7XG4gICAgICAgIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KC0xLjVyZW0pO1xuICAgICAgICBAaW5jbHVkZSBtYXJnaW4tcmlnaHQoLTEuNXJlbSk7XG4gICAgICB9XG5cbiAgICAgIC5jb21tZW50cy1hY3Rpb24sXG4gICAgICAucG9zdC1hY3Rpb25zIHtcbiAgICAgICAgQGluY2x1ZGUgbWFyZ2luLXJpZ2h0KDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSIsIi8vLyBodHRwczovL3d3dy5maWdtYS5jb20vZmlsZS9Hbm0wMnFUOGxMMVhFdnRNRk9SNlJML0xvb3AtMjAyMS1GZWF0dXJlLURldmVsb3BtZW50P25vZGUtaWQ9NCUzQTMwMFxuXG4vLy8gVGhpcyBpcyB0aGUgbWFpbiBjb2xvdXIgZm9yIGFsbCB0aGUgZWxlbWVudHMuIEl0IGlzIHVzZWQgdG8gY3JlYXRlIGFsbCBvZiB0aGUgaW5wdXQgZmllbGRzLCBmb3IgaWNvbnMgZXRjXG4kbG9vcC1ncmVlbi0xMjU6ICMwNTY3NjM7XG4kbG9vcC1ncmVlbi0xMDA6ICMxMDdkNzk7XG4kbG9vcC1ncmVlbi01MDogIzg3YmViYztcbiRsb29wLWdyZWVuLTI1OiAjYzNkZmRkO1xuJGxvb3AtZ3JlZW4tNTogI2YzZjhmODtcblxuLy8vIFVzZWQgaW4gbmF2aWdhdGlvbiBhbmQgYXMgc2Vjb25kYXJ5IGVsZW1lbnQgY29sb3VycyBvbiBidXR0b25zIGFuZCBsaW5rc1xuJGxvb3AtcHVycGxlLTEyNTogIzI2MTA0NztcbiRsb29wLXB1cnBsZS0xMDA6ICMzMTEzNWU7XG4kbG9vcC1wdXJwbGUtNzU6ICM0NjI0Nzg7XG4kbG9vcC1wdXJwbGUtNjA6ICM4NjZhYjA7XG4kbG9vcC1wdXJwbGUtNTA6ICM4YTdiYTE7XG4kbG9vcC1wdXJwbGUtNDA6ICNlYWU2ZjA7XG4kbG9vcC1wdXJwbGUtMjU6ICNjYmM0ZDc7XG4kbG9vcC1wdXJwbGUtNTogI2Y1ZjNmNztcblxuLy8vIFVzZWQgYXMgYmFja2dyb3VuZCBmb3IgZGlzYWJsZWQgbGFiZWxzIGFuZCBmaWVsZHMgYXMgd2VsbCBhcyBmb3IgdGFnc1xuJGxpZ2h0LWdyZXk6ICNlZWVlZWU7XG5cbi8vLyBHcmV5c2NhbGVcbiRncmV5LTEwMDogIzAwMDAwMDtcbiRncmV5LTUwOiB0cmFuc3BhcmVudGl6ZSgkZ3JleS0xMDAsIDEgLSAwLjUpO1xuJGdyZXktMjU6IHRyYW5zcGFyZW50aXplKCRncmV5LTEwMCwgMSAtIDAuMjUpO1xuJGdyZXktNTogdHJhbnNwYXJlbnRpemUoJGdyZXktMTAwLCAxIC0gMC4wNSk7XG5cbi8vLyBub3RpZmljYXRpb25zLCBzdGF0dXMsIGNhdGVnb3JpZXNcbi8vLyB3YXJuaW5nLCBhbGVydFxuJGRhbmdlci1yZWQ6ICNlZTIzMmY7XG4vLy8gb2ssIGFjY2VwdGVkLCBmaW5pc2hlZFxuJHllcy1ncmVlbjogIzFkYjA0Njtcbi8vLyBwZW5kaW5nXG4kbG9vcC15ZWxsb3c6ICNlY2IzMjA7XG5cbi8vLyBoaWdobGlnaHQgY29sb3Vyc1xuJHB1cnBsZS1oaWdobGlnaHQ6ICM2ZjAxZTU7XG4kcHVycGxlLWhpZ2hsaWdodC0wMjU6IHJnYmEoMTExLCAxLCAyMjksIDAuMjUpO1xuJGxvb3AtcGluazogI2VmNDdhMjtcbiRsb29wLXBpbmstMDI1OiByZ2JhKDIzOSwgNzEsIDE2MiwgMC4yNSk7XG4kbGlnaHQtYmx1ZTogIzIwZDNlYztcbiRsaWdodC1ibHVlLTAyNTogcmdiYSgzMiwgMjExLCAyMzYsIDAuMjUpO1xuJGxvb3AtYmx1ZTogIzIwNzJlYztcbiRsb29wLWJsdWUtMDI1OiByZ2JhKDMyLCAxMTQsIDIzNiwgMC4yNSk7XG4kZ3JlZW4tMjogI2MzZWMyMDtcbiRncmVlbi0yLTAyNTogcmdiYSgxOTUsIDIzNiwgMzIsIDAuMjUpO1xuJGxvb3Atb3JhbmdlOiAjZTk4MDIwO1xuJGxvb3Atb3JhbmdlLTAyNTogcmdiYSgyMzMsIDEyOCwgMzIsIDAuMjUpO1xuXG4vLy8gU3BhY2Vyc1xuJGdyYXktbGluZS1jb2xvcjogI2Q2ZDBkZjtcblxuJGxvb3AtcmVkLWRhcms6ICNjOTMwNGQ7XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AbWl4aW4gZmxleC1nYXAoJGdhcCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgbWFyZ2luLXRvcDogKC0kZ2FwKTtcbiAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoKC0kZ2FwKSwgJGdsb2JhbCk7XG5cbiAgPiAqIHtcbiAgICBtYXJnaW4tdG9wOiAkZ2FwO1xuICAgIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCRnYXAsICRnbG9iYWwpO1xuICB9XG59XG5cbkBtaXhpbiBiYXNlLWNvbnRhaW5lcigkY29udGVudC13aWR0aCkge1xuICAkZGVza3RvcC1wYWRkaW5nOiAycmVtO1xuICBtYXgtd2lkdGg6IGNhbGMoI3skY29udGVudC13aWR0aH0gKyAoI3skZGVza3RvcC1wYWRkaW5nfSkpO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQycmVtKSB7XG4gICAgQGluY2x1ZGUgcGFkZGluZy1sZWZ0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICAgIEBpbmNsdWRlIHBhZGRpbmctcmlnaHQoJGRlc2t0b3AtcGFkZGluZywgdHJ1ZSk7XG4gIH1cbn1cblxuQG1peGluIGNlbnRlckFic29sdXRlRWxlbWVudCB7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbkBtaXhpbiBvbmx5LWx0ci1nbG9iYWwge1xuICBodG1sOm5vdChbZGlyPSdydGwnXSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsLWdsb2JhbCB7XG4gIGh0bWxbZGlyPSdydGwnXSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1sdHIge1xuICA6aG9zdC1jb250ZXh0KGh0bWw6bm90KFtkaXI9J3J0bCddKSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsIHtcbiAgOmhvc3QtY29udGV4dChodG1sW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBydGwtdmFsdWUoJHByb3BlcnR5LCAkbHRyLXZhbHVlLCAkcnRsLXZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaWYgJGdsb2JhbCA9PSB0cnVlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ci1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsLWdsb2JhbCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRydGwtdmFsdWU7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ciB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRsdHItdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gcnRsLXByb3BlcnR5KCRsdHItcHJvcGVydHksICRydGwtcHJvcGVydHksICR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcnRsLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skbHRyLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hcmdpbi1sZWZ0KCRtYXJnaW4sICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShtYXJnaW4tbGVmdCwgbWFyZ2luLXJpZ2h0LCAkbWFyZ2luLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIG1hcmdpbi1yaWdodCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLXJpZ2h0LCBtYXJnaW4tbGVmdCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nKCRwYWRkaW5nVG9wLCAkcGFkZGluZ1JpZ2h0LCAkcGFkZGluZ0JvdHRvbSwgJHBhZGRpbmdMZWZ0LCAkZ2xvYmFsOiBmYWxzZSkge1xuICBwYWRkaW5nLXRvcDogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nUmlnaHQsICRnbG9iYWwpO1xuICBwYWRkaW5nLWJvdHRvbTogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nTGVmdCwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLWxlZnQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmctcmlnaHQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRleHQtYWxpZ24tbGVmdCgkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUodGV4dC1hbGlnbiwgbGVmdCwgcmlnaHQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShsZWZ0LCByaWdodCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHJpZ2h0LCBsZWZ0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gdHJhbnNsYXRlWFkoJHZhbHVlWCwgJHZhbHVlWSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRyYW5zZm9ybSwgdHJhbnNsYXRlKCR2YWx1ZVgsICR2YWx1ZVkpLCB0cmFuc2xhdGUoLSR2YWx1ZVgsICR2YWx1ZVkpLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1sZWZ0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1sZWZ0LCBib3JkZXItcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItcmlnaHQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXJpZ2h0LCBib3JkZXItbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsIGJvcmRlci10b3AtbGVmdC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItdG9wLWxlZnQtcmFkaXVzLCBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGZsb2F0LWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCBsZWZ0LCByaWdodCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gZmxvYXQtcmlnaHQge1xuICBAaW5jbHVkZSBydGwtdmFsdWUoZmxvYXQsIHJpZ2h0LCBsZWZ0LCAkZ2xvYmFsOiBmYWxzZSk7XG59XG5cbkBtaXhpbiBzbWFsbC1kZXNrdG9wLW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbGcpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC14bCAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1hbmQtdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbGcgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBzbWFsbC1tb2JpbGUtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1zIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbWQgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0YWJsZXQtb25seSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS11cCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBkaXNhYmxlLXNjcm9sbGJhciB7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3Rvcnktd2l0aC1jb21tZW50cy9zdG9yeS13aXRoLWNvbW1lbnRzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9zdHlsZXMvbG9vcC1kZXNpZ24tc3lzdGVtL19jb2xvcnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3R5bGVzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUZGO0FBSUU7RUFDRSx1QkFBQTtBQUZKO0FBS0U7RUFDRSxjQ1RhO0VEVWIsa0JBQUE7RUFDQSxpQkFBQTtBQUhKO0FFMktFO0VGM0tBO0lBTUksZUFBQTtFQUZKO0FBQ0Y7QUFLRTtFQUNFLHVCQUFBO0FBSEo7QUVtS0U7RUZqS0E7SUFJSSxpQ0FBQTtFQUZKO0FBQ0Y7QUFLRTtFQUNFLG1CQUFBO0FBSEo7QUFNRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQUpKOztBQVFBO0VBQ0Usa0JBQUE7QUFMRjs7QUUrSkU7RUZ2SkY7SUFFSSxhQUFBO0lBQ0EsOERBQUE7SUFDQSxZQUFBO0VBTEY7QUFDRjtBQU9FO0VBQ0UsMEJBQUE7QUFMSjtBQVNJO0VBQ0UsY0FBQTtBQVBOO0FFaUpFO0VGM0lFO0lBSUksYUFBQTtFQU5OO0FBQ0Y7QUFVRTtFQUNFLG9CQUFBO0FBUko7QUU2SEU7RUYvR007SUFDRSxnQkFBQTtFQVhSO0VBZUk7SUFDRSwwQkFBQTtFQWJOO0VFdkJBO0lBMENJLG9CRkx1QjtFQVgzQjtFRXBCQTtJQXdDSSxxQkZUdUI7RUFSM0I7RUU3QkE7SUEwQ0kscUJGSndCO0VBTjVCO0VFMUJBO0lBd0NJLG9CRlJ3QjtFQUg1QjtFRW5DQTs7SUEwQ0ksZUZDd0I7RUFKNUI7RUVqQ0E7O0lBd0NJLGNGSHdCO0VBQTVCO0FBQ0Y7QUFDQSxvaVhBQW9pWCIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ21peGlucyc7XG5AaW1wb3J0ICdsb29wLWRlc2lnbi1zeXN0ZW0vY29sb3JzJztcblxuLnN0b3J5LWRldGFpbHMge1xuICBwYWRkaW5nOiAxLjVyZW0gMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuXG4gICZfX2hlYWRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC44NDRyZW07XG4gIH1cblxuICAmX19jb21tZW50cy1jb3VudCB7XG4gICAgY29sb3I6ICRsb29wLWdyZWVuLTEwMDtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICBAaW5jbHVkZSBtb2JpbGUtb25seSB7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuICB9XG5cbiAgJl9fY29tcG9uZW50cy1oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDEuODc1cmVtO1xuXG4gICAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgICAgbWFyZ2luOiAwIDEuMjVyZW0gMS4yNXJlbSAxLjI1cmVtO1xuICAgIH1cbiAgfVxuXG4gICZfX2NvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIH1cblxuICAmX190cmFuc2xhdGlvbnMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDEuMjVyZW07XG4gIH1cbn1cblxuLmNvbW1lbnRzIHtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuXG4uc3Rvcnktd2l0aC1jb21tZW50cyB7XG4gIEBpbmNsdWRlIG1vYmlsZS11cCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCA0NC4zNzVmcikgbWlubWF4KDAsIDIxLjU2M2ZyKTtcbiAgICBnYXA6IDEuMjVyZW07XG4gIH1cblxuICAmLm9uZS1jb2x1bW4ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgJl9fZXh0cmEtaW5mbyB7XG4gICAgJi0td2l0aGluIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICBAaW5jbHVkZSBtb2JpbGUtdXAge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICZfX2Zvcm0tc2VwYXJhdG9yIHtcbiAgICBtYXJnaW4tdG9wOiAxLjEyNXJlbTtcbiAgfVxuXG4gIDo6bmctZGVlcCB7XG4gICAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgICAgbG9vcC1jYXJkIHtcbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIHBhZGRpbmc6IDEuMjVyZW07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnBvc3RfX3NlY3Rpb24tc2VwYXJhdG9yIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDIgKiAxLjI1cmVtKTtcbiAgICAgICAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoLTEuNXJlbSk7XG4gICAgICAgIEBpbmNsdWRlIG1hcmdpbi1yaWdodCgtMS41cmVtKTtcbiAgICAgIH1cblxuICAgICAgLmNvbW1lbnRzLWFjdGlvbixcbiAgICAgIC5wb3N0LWFjdGlvbnMge1xuICAgICAgICBAaW5jbHVkZSBtYXJnaW4tcmlnaHQoMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiLy8vIGh0dHBzOi8vd3d3LmZpZ21hLmNvbS9maWxlL0dubTAycVQ4bEwxWEV2dE1GT1I2UkwvTG9vcC0yMDIxLUZlYXR1cmUtRGV2ZWxvcG1lbnQ/bm9kZS1pZD00JTNBMzAwXG5cbi8vLyBUaGlzIGlzIHRoZSBtYWluIGNvbG91ciBmb3IgYWxsIHRoZSBlbGVtZW50cy4gSXQgaXMgdXNlZCB0byBjcmVhdGUgYWxsIG9mIHRoZSBpbnB1dCBmaWVsZHMsIGZvciBpY29ucyBldGNcbiRsb29wLWdyZWVuLTEyNTogIzA1Njc2MztcbiRsb29wLWdyZWVuLTEwMDogIzEwN2Q3OTtcbiRsb29wLWdyZWVuLTUwOiAjODdiZWJjO1xuJGxvb3AtZ3JlZW4tMjU6ICNjM2RmZGQ7XG4kbG9vcC1ncmVlbi01OiAjZjNmOGY4O1xuXG4vLy8gVXNlZCBpbiBuYXZpZ2F0aW9uIGFuZCBhcyBzZWNvbmRhcnkgZWxlbWVudCBjb2xvdXJzIG9uIGJ1dHRvbnMgYW5kIGxpbmtzXG4kbG9vcC1wdXJwbGUtMTI1OiAjMjYxMDQ3O1xuJGxvb3AtcHVycGxlLTEwMDogIzMxMTM1ZTtcbiRsb29wLXB1cnBsZS03NTogIzQ2MjQ3ODtcbiRsb29wLXB1cnBsZS02MDogIzg2NmFiMDtcbiRsb29wLXB1cnBsZS01MDogIzhhN2JhMTtcbiRsb29wLXB1cnBsZS00MDogI2VhZTZmMDtcbiRsb29wLXB1cnBsZS0yNTogI2NiYzRkNztcbiRsb29wLXB1cnBsZS01OiAjZjVmM2Y3O1xuXG4vLy8gVXNlZCBhcyBiYWNrZ3JvdW5kIGZvciBkaXNhYmxlZCBsYWJlbHMgYW5kIGZpZWxkcyBhcyB3ZWxsIGFzIGZvciB0YWdzXG4kbGlnaHQtZ3JleTogI2VlZWVlZTtcblxuLy8vIEdyZXlzY2FsZVxuJGdyZXktMTAwOiAjMDAwMDAwO1xuJGdyZXktNTA6IHRyYW5zcGFyZW50aXplKCRncmV5LTEwMCwgMSAtIDAuNSk7XG4kZ3JleS0yNTogdHJhbnNwYXJlbnRpemUoJGdyZXktMTAwLCAxIC0gMC4yNSk7XG4kZ3JleS01OiB0cmFuc3BhcmVudGl6ZSgkZ3JleS0xMDAsIDEgLSAwLjA1KTtcblxuLy8vIG5vdGlmaWNhdGlvbnMsIHN0YXR1cywgY2F0ZWdvcmllc1xuLy8vIHdhcm5pbmcsIGFsZXJ0XG4kZGFuZ2VyLXJlZDogI2VlMjMyZjtcbi8vLyBvaywgYWNjZXB0ZWQsIGZpbmlzaGVkXG4keWVzLWdyZWVuOiAjMWRiMDQ2O1xuLy8vIHBlbmRpbmdcbiRsb29wLXllbGxvdzogI2VjYjMyMDtcblxuLy8vIGhpZ2hsaWdodCBjb2xvdXJzXG4kcHVycGxlLWhpZ2hsaWdodDogIzZmMDFlNTtcbiRwdXJwbGUtaGlnaGxpZ2h0LTAyNTogcmdiYSgxMTEsIDEsIDIyOSwgMC4yNSk7XG4kbG9vcC1waW5rOiAjZWY0N2EyO1xuJGxvb3AtcGluay0wMjU6IHJnYmEoMjM5LCA3MSwgMTYyLCAwLjI1KTtcbiRsaWdodC1ibHVlOiAjMjBkM2VjO1xuJGxpZ2h0LWJsdWUtMDI1OiByZ2JhKDMyLCAyMTEsIDIzNiwgMC4yNSk7XG4kbG9vcC1ibHVlOiAjMjA3MmVjO1xuJGxvb3AtYmx1ZS0wMjU6IHJnYmEoMzIsIDExNCwgMjM2LCAwLjI1KTtcbiRncmVlbi0yOiAjYzNlYzIwO1xuJGdyZWVuLTItMDI1OiByZ2JhKDE5NSwgMjM2LCAzMiwgMC4yNSk7XG4kbG9vcC1vcmFuZ2U6ICNlOTgwMjA7XG4kbG9vcC1vcmFuZ2UtMDI1OiByZ2JhKDIzMywgMTI4LCAzMiwgMC4yNSk7XG5cbi8vLyBTcGFjZXJzXG4kZ3JheS1saW5lLWNvbG9yOiAjZDZkMGRmO1xuXG4kbG9vcC1yZWQtZGFyazogI2M5MzA0ZDtcbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbkBtaXhpbiBmbGV4LWdhcCgkZ2FwLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBtYXJnaW4tdG9wOiAoLSRnYXApO1xuICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgoLSRnYXApLCAkZ2xvYmFsKTtcblxuICA+ICoge1xuICAgIG1hcmdpbi10b3A6ICRnYXA7XG4gICAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoJGdhcCwgJGdsb2JhbCk7XG4gIH1cbn1cblxuQG1peGluIGJhc2UtY29udGFpbmVyKCRjb250ZW50LXdpZHRoKSB7XG4gICRkZXNrdG9wLXBhZGRpbmc6IDJyZW07XG4gIG1heC13aWR0aDogY2FsYygjeyRjb250ZW50LXdpZHRofSArICgjeyRkZXNrdG9wLXBhZGRpbmd9KSk7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDJyZW0pIHtcbiAgICBAaW5jbHVkZSBwYWRkaW5nLWxlZnQoJGRlc2t0b3AtcGFkZGluZywgdHJ1ZSk7XG4gICAgQGluY2x1ZGUgcGFkZGluZy1yaWdodCgkZGVza3RvcC1wYWRkaW5nLCB0cnVlKTtcbiAgfVxufVxuXG5AbWl4aW4gY2VudGVyQWJzb2x1dGVFbGVtZW50IHtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcblxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuQG1peGluIG9ubHktbHRyLWdsb2JhbCB7XG4gIGh0bWw6bm90KFtkaXI9J3J0bCddKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1ydGwtZ2xvYmFsIHtcbiAgaHRtbFtkaXI9J3J0bCddICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LWx0ciB7XG4gIDpob3N0LWNvbnRleHQoaHRtbDpub3QoW2Rpcj0ncnRsJ10pKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1ydGwge1xuICA6aG9zdC1jb250ZXh0KGh0bWxbZGlyPSdydGwnXSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHJ0bC12YWx1ZSgkcHJvcGVydHksICRsdHItdmFsdWUsICRydGwtdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpZiAkZ2xvYmFsID09IHRydWUge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyLWdsb2JhbCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRsdHItdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwtZ2xvYmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHJ0bC12YWx1ZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGx0ci12YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRydGwtdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBydGwtcHJvcGVydHkoJGx0ci1wcm9wZXJ0eSwgJHJ0bC1wcm9wZXJ0eSwgJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaWYgJGdsb2JhbCA9PSB0cnVlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ci1nbG9iYWwge1xuICAgICAgI3skbHRyLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsLWdsb2JhbCB7XG4gICAgICAjeyRydGwtcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ciB7XG4gICAgICAjeyRsdHItcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwge1xuICAgICAgI3skcnRsLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWFyZ2luLWxlZnQoJG1hcmdpbiwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KG1hcmdpbi1sZWZ0LCBtYXJnaW4tcmlnaHQsICRtYXJnaW4sICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gbWFyZ2luLXJpZ2h0KCRtYXJnaW4sICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShtYXJnaW4tcmlnaHQsIG1hcmdpbi1sZWZ0LCAkbWFyZ2luLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmcoJHBhZGRpbmdUb3AsICRwYWRkaW5nUmlnaHQsICRwYWRkaW5nQm90dG9tLCAkcGFkZGluZ0xlZnQsICRnbG9iYWw6IGZhbHNlKSB7XG4gIHBhZGRpbmctdG9wOiAkcGFkZGluZ1RvcDtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctcmlnaHQsIHBhZGRpbmctbGVmdCwgJHBhZGRpbmdSaWdodCwgJGdsb2JhbCk7XG4gIHBhZGRpbmctYm90dG9tOiAkcGFkZGluZ1RvcDtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctbGVmdCwgcGFkZGluZy1yaWdodCwgJHBhZGRpbmdMZWZ0LCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmctbGVmdCgkcGFkZGluZywgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctbGVmdCwgcGFkZGluZy1yaWdodCwgJHBhZGRpbmcsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1yaWdodCgkcGFkZGluZywgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctcmlnaHQsIHBhZGRpbmctbGVmdCwgJHBhZGRpbmcsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gdGV4dC1hbGlnbi1sZWZ0KCRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZSh0ZXh0LWFsaWduLCBsZWZ0LCByaWdodCwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBsZWZ0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGxlZnQsIHJpZ2h0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcmlnaHQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocmlnaHQsIGxlZnQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiB0cmFuc2xhdGVYWSgkdmFsdWVYLCAkdmFsdWVZLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUodHJhbnNmb3JtLCB0cmFuc2xhdGUoJHZhbHVlWCwgJHZhbHVlWSksIHRyYW5zbGF0ZSgtJHZhbHVlWCwgJHZhbHVlWSksICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWxlZnQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWxlZnQsIGJvcmRlci1yaWdodCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1yaWdodCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItcmlnaHQsIGJvcmRlci1sZWZ0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMsIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItdG9wLXJpZ2h0LXJhZGl1cywgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItdG9wLWxlZnQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci10b3AtbGVmdC1yYWRpdXMsIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gZmxvYXQtbGVmdCgkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUoZmxvYXQsIGxlZnQsIHJpZ2h0LCAkZ2xvYmFsOiBmYWxzZSk7XG59XG5cbkBtaXhpbiBmbG9hdC1yaWdodCB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZShmbG9hdCwgcmlnaHQsIGxlZnQsICRnbG9iYWw6IGZhbHNlKTtcbn1cblxuQG1peGluIHNtYWxsLWRlc2t0b3Atb25seSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1sZykgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXhsIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLWFuZC10YWJsZXQtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZyAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtYWxsLW1vYmlsZS1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXMgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1tZCAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1kKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbGcpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLXVwIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1kKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGRpc2FibGUtc2Nyb2xsYmFyIHtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 19543:
/*!*************************************************************************************!*\
  !*** ./src/app/shared/components/story-with-comments/story-with-comments.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoryWithCommentsModule": () => (/* binding */ StoryWithCommentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _shared_components_comment_comment_list_comment_list_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/components/comment/comment-list/comment-list.module */ 84609);
/* harmony import */ var _shared_components_pills_pills_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/components/pills/pills.module */ 68401);
/* harmony import */ var _shared_components_post_partials_post_actions_post_actions_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/post/partials/post-actions/post-actions.module */ 49191);
/* harmony import */ var _shared_components_post_partials_reply_form_reply_form_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components/post/partials/reply-form/reply-form.module */ 93865);
/* harmony import */ var _shared_components_post_post_preview_post_preview_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/components/post/post-preview/post-preview.module */ 78931);
/* harmony import */ var _shared_components_story_card_story_card_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/components/story-card/story-card.module */ 63332);
/* harmony import */ var _additional_story_info_additional_story_info_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../additional-story-info/additional-story-info.module */ 50950);
/* harmony import */ var _story_details_subheading_story_details_subheading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./story-details-subheading/story-details-subheading.component */ 49122);
/* harmony import */ var _story_with_comments_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./story-with-comments.component */ 51981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);












class StoryWithCommentsModule {
  static #_ = this.ɵfac = function StoryWithCommentsModule_Factory(t) {
    return new (t || StoryWithCommentsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: StoryWithCommentsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _shared_components_post_partials_post_actions_post_actions_module__WEBPACK_IMPORTED_MODULE_2__.PostActionsModule, _shared_components_post_partials_reply_form_reply_form_module__WEBPACK_IMPORTED_MODULE_3__.ReplyFormModule, _shared_components_comment_comment_list_comment_list_module__WEBPACK_IMPORTED_MODULE_0__.CommentListModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _shared_components_post_post_preview_post_preview_module__WEBPACK_IMPORTED_MODULE_4__.PostPreviewModule, _shared_components_pills_pills_module__WEBPACK_IMPORTED_MODULE_1__.PillsModule, _shared_components_story_card_story_card_module__WEBPACK_IMPORTED_MODULE_5__.StoryCardModule, _additional_story_info_additional_story_info_module__WEBPACK_IMPORTED_MODULE_6__.AdditionalStoryInfoModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](StoryWithCommentsModule, {
    declarations: [_story_with_comments_component__WEBPACK_IMPORTED_MODULE_8__.StoryWithCommentsComponent, _story_details_subheading_story_details_subheading_component__WEBPACK_IMPORTED_MODULE_7__.StoryDetailsSubheadingComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _shared_components_post_partials_post_actions_post_actions_module__WEBPACK_IMPORTED_MODULE_2__.PostActionsModule, _shared_components_post_partials_reply_form_reply_form_module__WEBPACK_IMPORTED_MODULE_3__.ReplyFormModule, _shared_components_comment_comment_list_comment_list_module__WEBPACK_IMPORTED_MODULE_0__.CommentListModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _shared_components_post_post_preview_post_preview_module__WEBPACK_IMPORTED_MODULE_4__.PostPreviewModule, _shared_components_pills_pills_module__WEBPACK_IMPORTED_MODULE_1__.PillsModule, _shared_components_story_card_story_card_module__WEBPACK_IMPORTED_MODULE_5__.StoryCardModule, _additional_story_info_additional_story_info_module__WEBPACK_IMPORTED_MODULE_6__.AdditionalStoryInfoModule],
    exports: [_story_with_comments_component__WEBPACK_IMPORTED_MODULE_8__.StoryWithCommentsComponent]
  });
})();

/***/ }),

/***/ 58347:
/*!******************************************************************!*\
  !*** ./src/app/shared/components/textarea/textarea.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextareaComponent": () => (/* binding */ TextareaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);




class TextareaComponent {
  constructor() {
    this.value = '';
    this.placeholder = '';
    this.maxlength = 512;
    this.noResize = false;
    this.valueChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouch = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  writeValue(text) {
    this.value = text;
    this.onChange?.(text);
    this.valueChanged.emit(text);
  }
  handleFocus() {
    this.onTouch?.();
  }
  static #_ = this.ɵfac = function TextareaComponent_Factory(t) {
    return new (t || TextareaComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TextareaComponent,
    selectors: [["app-textarea"]],
    inputs: {
      disabled: "disabled",
      placeholder: "placeholder",
      maxlength: "maxlength",
      noResize: "noResize"
    },
    outputs: {
      valueChanged: "valueChanged"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => TextareaComponent)
    }])],
    decls: 1,
    vars: 6,
    consts: [[1, "textarea", 3, "ngModel", "disabled", "placeholder", "maxlength", "focus", "ngModelChange"]],
    template: function TextareaComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "textarea", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function TextareaComponent_Template_textarea_focus_0_listener() {
          return ctx.handleFocus();
        })("ngModelChange", function TextareaComponent_Template_textarea_ngModelChange_0_listener($event) {
          return ctx.writeValue($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("no-resize", ctx.noResize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("maxlength", ctx.maxlength);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel],
    styles: [".textarea[_ngcontent-%COMP%] {\n  min-height: 5.188rem;\n  padding: 0.938rem 1.438rem;\n  border-radius: 8px;\n  background-color: #f3f8f8;\n  color: #000000;\n  font-size: 1rem;\n  border: none;\n  width: 100%;\n  resize: vertical;\n}\n.textarea[_ngcontent-%COMP%]::placeholder {\n  color: rgba(0, 0, 0, 0.5);\n  font-style: italic;\n}\n.textarea[_ngcontent-%COMP%]:focus {\n  outline: #31135e 1px auto;\n}\n.textarea.no-resize[_ngcontent-%COMP%] {\n  resize: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHRhcmVhLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vc3R5bGVzL2xvb3AtZGVzaWduLXN5c3RlbS9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkNDYTtFREFiLGNDZ0JTO0VEZlQsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFERjtBQUdFO0VBQ0UseUJDVU07RURUTixrQkFBQTtBQURKO0FBSUU7RUFDRSx5QkFBQTtBQUZKO0FBS0U7RUFDRSxZQUFBO0FBSEoiLCJmaWxlIjoidGV4dGFyZWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdsb29wLWRlc2lnbi1zeXN0ZW0vY29sb3JzJztcblxuLnRleHRhcmVhIHtcbiAgbWluLWhlaWdodDogNS4xODhyZW07XG4gIHBhZGRpbmc6IDAuOTM4cmVtIDEuNDM4cmVtO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRsb29wLWdyZWVuLTU7XG4gIGNvbG9yOiAkZ3JleS0xMDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcblxuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICRncmV5LTUwO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgfVxuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6ICRsb29wLXB1cnBsZS0xMDAgMXB4IGF1dG87XG4gIH1cblxuICAmLm5vLXJlc2l6ZSB7XG4gICAgcmVzaXplOiBub25lO1xuICB9XG59XG4iLCIvLy8gaHR0cHM6Ly93d3cuZmlnbWEuY29tL2ZpbGUvR25tMDJxVDhsTDFYRXZ0TUZPUjZSTC9Mb29wLTIwMjEtRmVhdHVyZS1EZXZlbG9wbWVudD9ub2RlLWlkPTQlM0EzMDBcblxuLy8vIFRoaXMgaXMgdGhlIG1haW4gY29sb3VyIGZvciBhbGwgdGhlIGVsZW1lbnRzLiBJdCBpcyB1c2VkIHRvIGNyZWF0ZSBhbGwgb2YgdGhlIGlucHV0IGZpZWxkcywgZm9yIGljb25zIGV0Y1xuJGxvb3AtZ3JlZW4tMTI1OiAjMDU2NzYzO1xuJGxvb3AtZ3JlZW4tMTAwOiAjMTA3ZDc5O1xuJGxvb3AtZ3JlZW4tNTA6ICM4N2JlYmM7XG4kbG9vcC1ncmVlbi0yNTogI2MzZGZkZDtcbiRsb29wLWdyZWVuLTU6ICNmM2Y4Zjg7XG5cbi8vLyBVc2VkIGluIG5hdmlnYXRpb24gYW5kIGFzIHNlY29uZGFyeSBlbGVtZW50IGNvbG91cnMgb24gYnV0dG9ucyBhbmQgbGlua3NcbiRsb29wLXB1cnBsZS0xMjU6ICMyNjEwNDc7XG4kbG9vcC1wdXJwbGUtMTAwOiAjMzExMzVlO1xuJGxvb3AtcHVycGxlLTc1OiAjNDYyNDc4O1xuJGxvb3AtcHVycGxlLTYwOiAjODY2YWIwO1xuJGxvb3AtcHVycGxlLTUwOiAjOGE3YmExO1xuJGxvb3AtcHVycGxlLTQwOiAjZWFlNmYwO1xuJGxvb3AtcHVycGxlLTI1OiAjY2JjNGQ3O1xuJGxvb3AtcHVycGxlLTU6ICNmNWYzZjc7XG5cbi8vLyBVc2VkIGFzIGJhY2tncm91bmQgZm9yIGRpc2FibGVkIGxhYmVscyBhbmQgZmllbGRzIGFzIHdlbGwgYXMgZm9yIHRhZ3NcbiRsaWdodC1ncmV5OiAjZWVlZWVlO1xuXG4vLy8gR3JleXNjYWxlXG4kZ3JleS0xMDA6ICMwMDAwMDA7XG4kZ3JleS01MDogdHJhbnNwYXJlbnRpemUoJGdyZXktMTAwLCAxIC0gMC41KTtcbiRncmV5LTI1OiB0cmFuc3BhcmVudGl6ZSgkZ3JleS0xMDAsIDEgLSAwLjI1KTtcbiRncmV5LTU6IHRyYW5zcGFyZW50aXplKCRncmV5LTEwMCwgMSAtIDAuMDUpO1xuXG4vLy8gbm90aWZpY2F0aW9ucywgc3RhdHVzLCBjYXRlZ29yaWVzXG4vLy8gd2FybmluZywgYWxlcnRcbiRkYW5nZXItcmVkOiAjZWUyMzJmO1xuLy8vIG9rLCBhY2NlcHRlZCwgZmluaXNoZWRcbiR5ZXMtZ3JlZW46ICMxZGIwNDY7XG4vLy8gcGVuZGluZ1xuJGxvb3AteWVsbG93OiAjZWNiMzIwO1xuXG4vLy8gaGlnaGxpZ2h0IGNvbG91cnNcbiRwdXJwbGUtaGlnaGxpZ2h0OiAjNmYwMWU1O1xuJHB1cnBsZS1oaWdobGlnaHQtMDI1OiByZ2JhKDExMSwgMSwgMjI5LCAwLjI1KTtcbiRsb29wLXBpbms6ICNlZjQ3YTI7XG4kbG9vcC1waW5rLTAyNTogcmdiYSgyMzksIDcxLCAxNjIsIDAuMjUpO1xuJGxpZ2h0LWJsdWU6ICMyMGQzZWM7XG4kbGlnaHQtYmx1ZS0wMjU6IHJnYmEoMzIsIDIxMSwgMjM2LCAwLjI1KTtcbiRsb29wLWJsdWU6ICMyMDcyZWM7XG4kbG9vcC1ibHVlLTAyNTogcmdiYSgzMiwgMTE0LCAyMzYsIDAuMjUpO1xuJGdyZWVuLTI6ICNjM2VjMjA7XG4kZ3JlZW4tMi0wMjU6IHJnYmEoMTk1LCAyMzYsIDMyLCAwLjI1KTtcbiRsb29wLW9yYW5nZTogI2U5ODAyMDtcbiRsb29wLW9yYW5nZS0wMjU6IHJnYmEoMjMzLCAxMjgsIDMyLCAwLjI1KTtcblxuLy8vIFNwYWNlcnNcbiRncmF5LWxpbmUtY29sb3I6ICNkNmQwZGY7XG5cbiRsb29wLXJlZC1kYXJrOiAjYzkzMDRkO1xuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGV4dGFyZWEvdGV4dGFyZWEuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3N0eWxlcy9sb29wLWRlc2lnbi1zeXN0ZW0vX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usb0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJDQ2E7RURBYixjQ2dCUztFRGZULGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBREY7QUFHRTtFQUNFLHlCQ1VNO0VEVE4sa0JBQUE7QUFESjtBQUlFO0VBQ0UseUJBQUE7QUFGSjtBQUtFO0VBQ0UsWUFBQTtBQUhKO0FBQ0Esb3JHQUFvckciLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdsb29wLWRlc2lnbi1zeXN0ZW0vY29sb3JzJztcblxuLnRleHRhcmVhIHtcbiAgbWluLWhlaWdodDogNS4xODhyZW07XG4gIHBhZGRpbmc6IDAuOTM4cmVtIDEuNDM4cmVtO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRsb29wLWdyZWVuLTU7XG4gIGNvbG9yOiAkZ3JleS0xMDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcblxuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICRncmV5LTUwO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgfVxuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6ICRsb29wLXB1cnBsZS0xMDAgMXB4IGF1dG87XG4gIH1cblxuICAmLm5vLXJlc2l6ZSB7XG4gICAgcmVzaXplOiBub25lO1xuICB9XG59XG4iLCIvLy8gaHR0cHM6Ly93d3cuZmlnbWEuY29tL2ZpbGUvR25tMDJxVDhsTDFYRXZ0TUZPUjZSTC9Mb29wLTIwMjEtRmVhdHVyZS1EZXZlbG9wbWVudD9ub2RlLWlkPTQlM0EzMDBcblxuLy8vIFRoaXMgaXMgdGhlIG1haW4gY29sb3VyIGZvciBhbGwgdGhlIGVsZW1lbnRzLiBJdCBpcyB1c2VkIHRvIGNyZWF0ZSBhbGwgb2YgdGhlIGlucHV0IGZpZWxkcywgZm9yIGljb25zIGV0Y1xuJGxvb3AtZ3JlZW4tMTI1OiAjMDU2NzYzO1xuJGxvb3AtZ3JlZW4tMTAwOiAjMTA3ZDc5O1xuJGxvb3AtZ3JlZW4tNTA6ICM4N2JlYmM7XG4kbG9vcC1ncmVlbi0yNTogI2MzZGZkZDtcbiRsb29wLWdyZWVuLTU6ICNmM2Y4Zjg7XG5cbi8vLyBVc2VkIGluIG5hdmlnYXRpb24gYW5kIGFzIHNlY29uZGFyeSBlbGVtZW50IGNvbG91cnMgb24gYnV0dG9ucyBhbmQgbGlua3NcbiRsb29wLXB1cnBsZS0xMjU6ICMyNjEwNDc7XG4kbG9vcC1wdXJwbGUtMTAwOiAjMzExMzVlO1xuJGxvb3AtcHVycGxlLTc1OiAjNDYyNDc4O1xuJGxvb3AtcHVycGxlLTYwOiAjODY2YWIwO1xuJGxvb3AtcHVycGxlLTUwOiAjOGE3YmExO1xuJGxvb3AtcHVycGxlLTQwOiAjZWFlNmYwO1xuJGxvb3AtcHVycGxlLTI1OiAjY2JjNGQ3O1xuJGxvb3AtcHVycGxlLTU6ICNmNWYzZjc7XG5cbi8vLyBVc2VkIGFzIGJhY2tncm91bmQgZm9yIGRpc2FibGVkIGxhYmVscyBhbmQgZmllbGRzIGFzIHdlbGwgYXMgZm9yIHRhZ3NcbiRsaWdodC1ncmV5OiAjZWVlZWVlO1xuXG4vLy8gR3JleXNjYWxlXG4kZ3JleS0xMDA6ICMwMDAwMDA7XG4kZ3JleS01MDogdHJhbnNwYXJlbnRpemUoJGdyZXktMTAwLCAxIC0gMC41KTtcbiRncmV5LTI1OiB0cmFuc3BhcmVudGl6ZSgkZ3JleS0xMDAsIDEgLSAwLjI1KTtcbiRncmV5LTU6IHRyYW5zcGFyZW50aXplKCRncmV5LTEwMCwgMSAtIDAuMDUpO1xuXG4vLy8gbm90aWZpY2F0aW9ucywgc3RhdHVzLCBjYXRlZ29yaWVzXG4vLy8gd2FybmluZywgYWxlcnRcbiRkYW5nZXItcmVkOiAjZWUyMzJmO1xuLy8vIG9rLCBhY2NlcHRlZCwgZmluaXNoZWRcbiR5ZXMtZ3JlZW46ICMxZGIwNDY7XG4vLy8gcGVuZGluZ1xuJGxvb3AteWVsbG93OiAjZWNiMzIwO1xuXG4vLy8gaGlnaGxpZ2h0IGNvbG91cnNcbiRwdXJwbGUtaGlnaGxpZ2h0OiAjNmYwMWU1O1xuJHB1cnBsZS1oaWdobGlnaHQtMDI1OiByZ2JhKDExMSwgMSwgMjI5LCAwLjI1KTtcbiRsb29wLXBpbms6ICNlZjQ3YTI7XG4kbG9vcC1waW5rLTAyNTogcmdiYSgyMzksIDcxLCAxNjIsIDAuMjUpO1xuJGxpZ2h0LWJsdWU6ICMyMGQzZWM7XG4kbGlnaHQtYmx1ZS0wMjU6IHJnYmEoMzIsIDIxMSwgMjM2LCAwLjI1KTtcbiRsb29wLWJsdWU6ICMyMDcyZWM7XG4kbG9vcC1ibHVlLTAyNTogcmdiYSgzMiwgMTE0LCAyMzYsIDAuMjUpO1xuJGdyZWVuLTI6ICNjM2VjMjA7XG4kZ3JlZW4tMi0wMjU6IHJnYmEoMTk1LCAyMzYsIDMyLCAwLjI1KTtcbiRsb29wLW9yYW5nZTogI2U5ODAyMDtcbiRsb29wLW9yYW5nZS0wMjU6IHJnYmEoMjMzLCAxMjgsIDMyLCAwLjI1KTtcblxuLy8vIFNwYWNlcnNcbiRncmF5LWxpbmUtY29sb3I6ICNkNmQwZGY7XG5cbiRsb29wLXJlZC1kYXJrOiAjYzkzMDRkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 93319:
/*!***************************************************************!*\
  !*** ./src/app/shared/components/textarea/textarea.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextareaModule": () => (/* binding */ TextareaModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _textarea_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textarea.component */ 58347);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




class TextareaModule {
  static #_ = this.ɵfac = function TextareaModule_Factory(t) {
    return new (t || TextareaModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: TextareaModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TextareaModule, {
    declarations: [_textarea_component__WEBPACK_IMPORTED_MODULE_0__.TextareaComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule],
    exports: [_textarea_component__WEBPACK_IMPORTED_MODULE_0__.TextareaComponent]
  });
})();

/***/ }),

/***/ 43949:
/*!*****************************************************!*\
  !*** ./src/app/shared/enums/comment-status.enum.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMMENT_STATUS": () => (/* binding */ COMMENT_STATUS)
/* harmony export */ });
var COMMENT_STATUS;
(function (COMMENT_STATUS) {
  COMMENT_STATUS["CALLING"] = "CALLING";
  COMMENT_STATUS["CALL_FAILED"] = "CALL_FAILED";
  COMMENT_STATUS["PUBLISHED_AND_PENDING_CALL"] = "published_and_pending_call";
  COMMENT_STATUS["ACCEPTED_BY_AUTHOR"] = "accepted_by_author";
  COMMENT_STATUS["PUBLISHED"] = "published";
  COMMENT_STATUS["REJECTED"] = "rejected";
  COMMENT_STATUS["PENDING_REVIEW"] = "pending_review";
})(COMMENT_STATUS || (COMMENT_STATUS = {}));

/***/ }),

/***/ 19174:
/*!***************************************************************************!*\
  !*** ./src/app/shared/icons/chat-reply-icon/chat-reply-icon.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatReplyIconComponent": () => (/* binding */ ChatReplyIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class ChatReplyIconComponent {
  static #_ = this.ɵfac = function ChatReplyIconComponent_Factory(t) {
    return new (t || ChatReplyIconComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ChatReplyIconComponent,
    selectors: [["app-chat-reply-icon"]],
    decls: 2,
    vars: 0,
    consts: [["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "25", "fill", "none", "viewBox", "0 0 20 25"], ["fill", "currentColor", "fill-rule", "evenodd", "d", "M.008 7.006c0-1.1.89-1.999 1.99-1.999h16c1.1 0 2 .9 2 1.999v11.991c0 1.1-.9 1.999-2 1.999h-10l-4 3.997v-3.997H2c-1.105 0-2-.897-2-2l.008-11.99zm8.605 1.998v2.132c3.613.533 5.16 3.198 5.677 5.863-1.29-1.866-3.097-2.718-5.677-2.718v2.184L5 12.735l3.613-3.73z", "clip-rule", "evenodd"]],
    template: function ChatReplyIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 36478:
/*!************************************************************************!*\
  !*** ./src/app/shared/icons/chat-reply-icon/chat-reply-icon.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatReplyIconModule": () => (/* binding */ ChatReplyIconModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _chat_reply_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-reply-icon.component */ 19174);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class ChatReplyIconModule {
  static #_ = this.ɵfac = function ChatReplyIconModule_Factory(t) {
    return new (t || ChatReplyIconModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ChatReplyIconModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ChatReplyIconModule, {
    declarations: [_chat_reply_icon_component__WEBPACK_IMPORTED_MODULE_0__.ChatReplyIconComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_chat_reply_icon_component__WEBPACK_IMPORTED_MODULE_0__.ChatReplyIconComponent]
  });
})();

/***/ }),

/***/ 47616:
/*!*****************************************************************!*\
  !*** ./src/app/shared/icons/reply-icon/reply-icon.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplyIconComponent": () => (/* binding */ ReplyIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class ReplyIconComponent {
  static #_ = this.ɵfac = function ReplyIconComponent_Factory(t) {
    return new (t || ReplyIconComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ReplyIconComponent,
    selectors: [["app-reply-icon"]],
    decls: 3,
    vars: 0,
    consts: [["xmlns", "http://www.w3.org/2000/svg", "height", "24px", "viewBox", "0 0 24 24", "width", "24px", "fill", "currentColor"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"]],
    template: function ReplyIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1)(2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["[_nghost-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljb24tc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRiIsImZpbGUiOiJpY29uLXN0eWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2ljb25zL2ljb24tc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjtBQUNBLGdSQUFnUiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 64891:
/*!**************************************************************!*\
  !*** ./src/app/shared/icons/reply-icon/reply-icon.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplyIconModule": () => (/* binding */ ReplyIconModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _reply_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reply-icon.component */ 47616);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class ReplyIconModule {
  static #_ = this.ɵfac = function ReplyIconModule_Factory(t) {
    return new (t || ReplyIconModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ReplyIconModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ReplyIconModule, {
    declarations: [_reply_icon_component__WEBPACK_IMPORTED_MODULE_0__.ReplyIconComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_reply_icon_component__WEBPACK_IMPORTED_MODULE_0__.ReplyIconComponent]
  });
})();

/***/ }),

/***/ 14150:
/*!*******************************************************************************************************!*\
  !*** ./src/app/shared/icons/subdirectory-arrow-right-icon/subdirectory-arrow-right-icon.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubdirectoryArrowRightIconComponent": () => (/* binding */ SubdirectoryArrowRightIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class SubdirectoryArrowRightIconComponent {
  static #_ = this.ɵfac = function SubdirectoryArrowRightIconComponent_Factory(t) {
    return new (t || SubdirectoryArrowRightIconComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SubdirectoryArrowRightIconComponent,
    selectors: [["app-subdirectory-arrow-right-icon"]],
    decls: 3,
    vars: 0,
    consts: [["xmlns", "http://www.w3.org/2000/svg", "height", "24px", "viewBox", "0 0 24 24", "width", "24px", "fill", "currentColor"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"]],
    template: function SubdirectoryArrowRightIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1)(2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["[_nghost-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljb24tc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRiIsImZpbGUiOiJpY29uLXN0eWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2ljb25zL2ljb24tc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjtBQUNBLGdSQUFnUiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 51000:
/*!****************************************************************************************************!*\
  !*** ./src/app/shared/icons/subdirectory-arrow-right-icon/subdirectory-arrow-right-icon.module.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubdirectoryArrowRightIconModule": () => (/* binding */ SubdirectoryArrowRightIconModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _subdirectory_arrow_right_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subdirectory-arrow-right-icon.component */ 14150);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class SubdirectoryArrowRightIconModule {
  static #_ = this.ɵfac = function SubdirectoryArrowRightIconModule_Factory(t) {
    return new (t || SubdirectoryArrowRightIconModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: SubdirectoryArrowRightIconModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SubdirectoryArrowRightIconModule, {
    declarations: [_subdirectory_arrow_right_icon_component__WEBPACK_IMPORTED_MODULE_0__.SubdirectoryArrowRightIconComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_subdirectory_arrow_right_icon_component__WEBPACK_IMPORTED_MODULE_0__.SubdirectoryArrowRightIconComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_components_story-with-comments_story-with-comments_module_ts.js.map