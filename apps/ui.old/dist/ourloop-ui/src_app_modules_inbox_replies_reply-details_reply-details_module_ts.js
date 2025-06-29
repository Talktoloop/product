"use strict";
(self["webpackChunkourloop_ui"] = self["webpackChunkourloop_ui"] || []).push([["src_app_modules_inbox_replies_reply-details_reply-details_module_ts"],{

/***/ 93632:
/*!*************************************************************************************!*\
  !*** ./src/app/modules/inbox/replies/reply-details/reply-details-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplyDetailsRoutingModule": () => (/* binding */ ReplyDetailsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/app-routing.props */ 18854);
/* harmony import */ var _app_modules_inbox_replies_reply_details_reply_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/modules/inbox/replies/reply-details/reply-details.component */ 67405);
/* harmony import */ var _app_modules_inbox_replies_reply_details_reply_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/modules/inbox/replies/reply-details/reply-details.service */ 66655);
/* harmony import */ var _app_modules_inbox_replies_reply_details_reply_review_and_translate_reply_review_and_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/inbox/replies/reply-details/reply-review-and-translate/reply-review-and-translate.component */ 35388);
/* harmony import */ var _app_modules_inbox_replies_reply_details_reply_transcribe_reply_transcribe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/inbox/replies/reply-details/reply-transcribe/reply-transcribe.component */ 59650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);








const routes = [{
  path: '',
  component: _app_modules_inbox_replies_reply_details_reply_details_component__WEBPACK_IMPORTED_MODULE_1__.ReplyDetailsComponent,
  children: [{
    path: '',
    redirectTo: _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.INBOX_REPLY_ROUTES.REPLY_TRANSCRIBE,
    pathMatch: 'prefix'
  }, {
    path: _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.INBOX_REPLY_ROUTES.REPLY_TRANSCRIBE,
    component: _app_modules_inbox_replies_reply_details_reply_transcribe_reply_transcribe_component__WEBPACK_IMPORTED_MODULE_4__.ReplyTranscribeComponent,
    data: {
      title: 'transcribeReply'
    },
    pathMatch: 'prefix'
  }, {
    path: _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.INBOX_REPLY_ROUTES.REPLY_REVIEW_AND_TRANSLATE,
    component: _app_modules_inbox_replies_reply_details_reply_review_and_translate_reply_review_and_translate_component__WEBPACK_IMPORTED_MODULE_3__.ReplyReviewAndTranslateComponent,
    data: {
      title: 'reviewAndTranslate'
    },
    pathMatch: 'prefix'
  }]
}];
class ReplyDetailsRoutingModule {
  static #_ = this.ɵfac = function ReplyDetailsRoutingModule_Factory(t) {
    return new (t || ReplyDetailsRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: ReplyDetailsRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    providers: [_app_modules_inbox_replies_reply_details_reply_details_service__WEBPACK_IMPORTED_MODULE_2__.ReplyDetailsService],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ReplyDetailsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 67405:
/*!********************************************************************************!*\
  !*** ./src/app/modules/inbox/replies/reply-details/reply-details.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplyDetailsComponent": () => (/* binding */ ReplyDetailsComponent)
/* harmony export */ });
/* harmony import */ var _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/app-routing.props */ 18854);
/* harmony import */ var _core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/api/model/channel.enum */ 92128);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 26067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _app_modules_inbox_replies_reply_details_reply_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/modules/inbox/replies/reply-details/reply-details.service */ 66655);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_route_stepper_route_stepper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/route-stepper/route-stepper.component */ 89193);









function ReplyDetailsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "app-route-stepper", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx_r0.backUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 3, "header.topBar.backToInbox"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("steps", ctx_r0.steps);
  }
}
class ReplyDetailsComponent {
  constructor(router, route, translateService, replyDetailsService) {
    this.router = router;
    this.route = route;
    this.translateService = translateService;
    this.replyDetailsService = replyDetailsService;
    this.backUrl = `/${_app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.MAIN_ROUTES.INBOX}/${_app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.INBOX_ROUTES.REPLIES}`;
    this.steps = [];
  }
  ngOnInit() {
    this.replyDetailsService.reply.subscribe(reply => {
      if (!reply) {
        return;
      }
      this.getSteps(reply.channel);
    });
    this.replyDetailsService.fetch(this.route.snapshot.params['id']);
  }
  getSteps(channel) {
    const steps = [{
      title: this.translateService.instant(`admin.pendingReplyReview.reviewAndTranslate`),
      path: ['./', 'review-and-translate']
    }];
    if (channel === _core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_1__.CHANNEL_CONSTANTS.IVRR) {
      steps.unshift({
        title: this.translateService.instant(`story.details.step.transcribe`),
        path: ['./', 'transcribe']
      });
    }
    this.steps = steps;
  }
  ngOnDestroy() {
    this.replyDetailsService.reply.unsubscribe();
    this.replyDetailsService.s3fileUrl.unsubscribe();
    this.replyDetailsService.s3fileUrl = new rxjs__WEBPACK_IMPORTED_MODULE_5__.ReplaySubject();
    this.replyDetailsService.reply = new rxjs__WEBPACK_IMPORTED_MODULE_5__.ReplaySubject();
  }
  static #_ = this.ɵfac = function ReplyDetailsComponent_Factory(t) {
    return new (t || ReplyDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_modules_inbox_replies_reply_details_reply_details_service__WEBPACK_IMPORTED_MODULE_2__.ReplyDetailsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ReplyDetailsComponent,
    selectors: [["app-reply-details"]],
    decls: 1,
    vars: 1,
    consts: [["class", "details-container", 4, "ngIf"], [1, "details-container"], [1, "details-header"], [1, "details-header__back-arrow", 3, "routerLink"], ["src", "assets/icons/arrow_previous_green.svg", "alt", "go back", 1, "arrow-image"], [3, "steps"]],
    template: function ReplyDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ReplyDetailsComponent_div_0_Template, 8, 5, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.steps.length);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_components_route_stepper_route_stepper_component__WEBPACK_IMPORTED_MODULE_3__.RouteStepperComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
    styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\n.details-container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 78.625rem;\n  width: 100%;\n}\n\n.details-header[_ngcontent-%COMP%] {\n  border-bottom: 0.063rem solid #cfd3d8;\n  margin-bottom: 1.25rem;\n  padding: 1rem 1.5rem;\n}\n@media (min-width: 768px) {\n  .details-header[_ngcontent-%COMP%] {\n    border-bottom: none;\n    margin-bottom: 0rem;\n    padding: 2.75rem 0 2.9375rem;\n  }\n}\n.details-header__back-arrow[_ngcontent-%COMP%] {\n  align-items: center;\n  color: #056763;\n  display: flex;\n  font-size: 0.875rem;\n  font-style: normal;\n  font-weight: 600;\n  gap: 0.625rem;\n  letter-spacing: 0;\n  text-decoration: none;\n}\n@media (min-width: 768px) {\n  .details-header__back-arrow[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n  }\n}\n.details-header__back-arrow[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0;\n}\nhtml:not([dir=rtl])[_nghost-%COMP%]   .details-header__back-arrow[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .details-header__back-arrow[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n}\nhtml[dir=rtl][_nghost-%COMP%]   .details-header__back-arrow[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .details-header__back-arrow[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcGx5LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9zdHlsZXMvX21peGlucy5zY3NzIiwiLi4vLi4vLi4vLi4vc3R5bGVzL2xvb3AtZGVzaWduLXN5c3RlbS9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxXQUFBO0FBSkY7O0FBT0E7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBSkY7O0FBT0E7RUFDRSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFKRjtBQ3FMRTtFRHBMRjtJQU1JLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSw0QkFBQTtFQUhGO0FBQ0Y7QUFLRTtFQUNFLG1CQUFBO0VBQ0EsY0V6QmE7RUYwQmIsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBSEo7QUNtS0U7RUR6S0E7SUFZSSxtQkFBQTtFQUZKO0FBQ0Y7QUFJSTtFQUNFLFNBQUE7QUFGTjtBQ0VFO0VBMENJLHFCRHpDc0I7QUFBNUI7QUNLRTtFQXdDSSxvQkQ3Q3NCO0FBRzVCIiwiZmlsZSI6InJlcGx5LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdsb29wLWRlc2lnbi1zeXN0ZW0vY29sb3JzJztcbkBpbXBvcnQgJ2xvb3AtZGVzaWduLXN5c3RlbS9oZWxwZXJzJztcbkBpbXBvcnQgJ21peGlucyc7XG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGV0YWlscy1jb250YWluZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA3OC42MjVyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGV0YWlscy1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAwLjA2M3JlbSBzb2xpZCAkbGlnaHQtZ3JleS00O1xuICBtYXJnaW4tYm90dG9tOiBweFRvUmVtKDIwKTtcbiAgcGFkZGluZzogcHhUb1JlbSgxNikgcHhUb1JlbSgyNCk7XG5cbiAgQGluY2x1ZGUgbW9iaWxlLXVwIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIG1hcmdpbi1ib3R0b206IHB4VG9SZW0oMCk7XG4gICAgcGFkZGluZzogcHhUb1JlbSg0NCkgMCBweFRvUmVtKDQ3KTtcbiAgfVxuXG4gICZfX2JhY2stYXJyb3cge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6ICRsb29wLWdyZWVuLTEyNTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogcHhUb1JlbSgxNCk7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZ2FwOiBweFRvUmVtKDEwKTtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICBAaW5jbHVkZSBtb2JpbGUtdXAge1xuICAgICAgZm9udC1zaXplOiBweFRvUmVtKDE4KTtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgQGluY2x1ZGUgbWFyZ2luLXJpZ2h0KDAuMjVyZW0pO1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIGZsZXgtZ2FwKCRnYXAsICRnbG9iYWw6IGZhbHNlKSB7XG4gIG1hcmdpbi10b3A6ICgtJGdhcCk7XG4gIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCgtJGdhcCksICRnbG9iYWwpO1xuXG4gID4gKiB7XG4gICAgbWFyZ2luLXRvcDogJGdhcDtcbiAgICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgkZ2FwLCAkZ2xvYmFsKTtcbiAgfVxufVxuXG5AbWl4aW4gYmFzZS1jb250YWluZXIoJGNvbnRlbnQtd2lkdGgpIHtcbiAgJGRlc2t0b3AtcGFkZGluZzogMnJlbTtcbiAgbWF4LXdpZHRoOiBjYWxjKCN7JGNvbnRlbnQtd2lkdGh9ICsgKCN7JGRlc2t0b3AtcGFkZGluZ30pKTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MnJlbSkge1xuICAgIEBpbmNsdWRlIHBhZGRpbmctbGVmdCgkZGVza3RvcC1wYWRkaW5nLCB0cnVlKTtcbiAgICBAaW5jbHVkZSBwYWRkaW5nLXJpZ2h0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICB9XG59XG5cbkBtaXhpbiBjZW50ZXJBYnNvbHV0ZUVsZW1lbnQge1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5AbWl4aW4gb25seS1sdHItZ2xvYmFsIHtcbiAgaHRtbDpub3QoW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bC1nbG9iYWwge1xuICBodG1sW2Rpcj0ncnRsJ10gJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktbHRyIHtcbiAgOmhvc3QtY29udGV4dChodG1sOm5vdChbZGlyPSdydGwnXSkpICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bCB7XG4gIDpob3N0LWNvbnRleHQoaHRtbFtkaXI9J3J0bCddKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gcnRsLXZhbHVlKCRwcm9wZXJ0eSwgJGx0ci12YWx1ZSwgJHJ0bC12YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGx0ci12YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHJ0bC12YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHJ0bC1wcm9wZXJ0eSgkbHRyLXByb3BlcnR5LCAkcnRsLXByb3BlcnR5LCAkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpZiAkZ2xvYmFsID09IHRydWUge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyLWdsb2JhbCB7XG4gICAgICAjeyRsdHItcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwtZ2xvYmFsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bCB7XG4gICAgICAjeyRydGwtcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXJnaW4tbGVmdCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLWxlZnQsIG1hcmdpbi1yaWdodCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBtYXJnaW4tcmlnaHQoJG1hcmdpbiwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KG1hcmdpbi1yaWdodCwgbWFyZ2luLWxlZnQsICRtYXJnaW4sICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZygkcGFkZGluZ1RvcCwgJHBhZGRpbmdSaWdodCwgJHBhZGRpbmdCb3R0b20sICRwYWRkaW5nTGVmdCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgcGFkZGluZy10b3A6ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZ1JpZ2h0LCAkZ2xvYmFsKTtcbiAgcGFkZGluZy1ib3R0b206ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZ0xlZnQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1sZWZ0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLXJpZ2h0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiB0ZXh0LWFsaWduLWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRleHQtYWxpZ24sIGxlZnQsIHJpZ2h0LCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGxlZnQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobGVmdCwgcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiByaWdodCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShyaWdodCwgbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRyYW5zbGF0ZVhZKCR2YWx1ZVgsICR2YWx1ZVksICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZSh0cmFuc2Zvcm0sIHRyYW5zbGF0ZSgkdmFsdWVYLCAkdmFsdWVZKSwgdHJhbnNsYXRlKC0kdmFsdWVYLCAkdmFsdWVZKSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItbGVmdCwgYm9yZGVyLXJpZ2h0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1yaWdodCwgYm9yZGVyLWxlZnQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCBib3JkZXItdG9wLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtbGVmdC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBmbG9hdC1sZWZ0KCRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZShmbG9hdCwgbGVmdCwgcmlnaHQsICRnbG9iYWw6IGZhbHNlKTtcbn1cblxuQG1peGluIGZsb2F0LXJpZ2h0IHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCByaWdodCwgbGVmdCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gc21hbGwtZGVza3RvcC1vbmx5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LWxnKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQteGwgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtYW5kLXRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc21hbGwtbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtcyAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LW1kIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtdXAge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gZGlzYWJsZS1zY3JvbGxiYXIge1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiIsIi8vLyBodHRwczovL3d3dy5maWdtYS5jb20vZmlsZS9Hbm0wMnFUOGxMMVhFdnRNRk9SNlJML0xvb3AtMjAyMS1GZWF0dXJlLURldmVsb3BtZW50P25vZGUtaWQ9NCUzQTMwMFxuXG4vLy8gVGhpcyBpcyB0aGUgbWFpbiBjb2xvdXIgZm9yIGFsbCB0aGUgZWxlbWVudHMuIEl0IGlzIHVzZWQgdG8gY3JlYXRlIGFsbCBvZiB0aGUgaW5wdXQgZmllbGRzLCBmb3IgaWNvbnMgZXRjXG4kbG9vcC1ncmVlbi0xMjU6ICMwNTY3NjM7XG4kbG9vcC1ncmVlbi0xMDA6ICMxMDdkNzk7XG4kbG9vcC1ncmVlbi01MDogIzg3YmViYztcbiRsb29wLWdyZWVuLTI1OiAjYzNkZmRkO1xuJGxvb3AtZ3JlZW4tNTogI2YzZjhmODtcblxuLy8vIFVzZWQgaW4gbmF2aWdhdGlvbiBhbmQgYXMgc2Vjb25kYXJ5IGVsZW1lbnQgY29sb3VycyBvbiBidXR0b25zIGFuZCBsaW5rc1xuJGxvb3AtcHVycGxlLTEyNTogIzI2MTA0NztcbiRsb29wLXB1cnBsZS0xMDA6ICMzMTEzNWU7XG4kbG9vcC1wdXJwbGUtNzU6ICM0NjI0Nzg7XG4kbG9vcC1wdXJwbGUtNjA6ICM4NjZhYjA7XG4kbG9vcC1wdXJwbGUtNTA6ICM4YTdiYTE7XG4kbG9vcC1wdXJwbGUtNDA6ICNlYWU2ZjA7XG4kbG9vcC1wdXJwbGUtMjU6ICNjYmM0ZDc7XG4kbG9vcC1wdXJwbGUtNTogI2Y1ZjNmNztcblxuLy8vIFVzZWQgYXMgYmFja2dyb3VuZCBmb3IgZGlzYWJsZWQgbGFiZWxzIGFuZCBmaWVsZHMgYXMgd2VsbCBhcyBmb3IgdGFnc1xuJGxpZ2h0LWdyZXk6ICNlZWVlZWU7XG5cbi8vLyBHcmV5c2NhbGVcbiRncmV5LTEwMDogIzAwMDAwMDtcbiRncmV5LTUwOiB0cmFuc3BhcmVudGl6ZSgkZ3JleS0xMDAsIDEgLSAwLjUpO1xuJGdyZXktMjU6IHRyYW5zcGFyZW50aXplKCRncmV5LTEwMCwgMSAtIDAuMjUpO1xuJGdyZXktNTogdHJhbnNwYXJlbnRpemUoJGdyZXktMTAwLCAxIC0gMC4wNSk7XG5cbi8vLyBub3RpZmljYXRpb25zLCBzdGF0dXMsIGNhdGVnb3JpZXNcbi8vLyB3YXJuaW5nLCBhbGVydFxuJGRhbmdlci1yZWQ6ICNlZTIzMmY7XG4vLy8gb2ssIGFjY2VwdGVkLCBmaW5pc2hlZFxuJHllcy1ncmVlbjogIzFkYjA0Njtcbi8vLyBwZW5kaW5nXG4kbG9vcC15ZWxsb3c6ICNlY2IzMjA7XG5cbi8vLyBoaWdobGlnaHQgY29sb3Vyc1xuJHB1cnBsZS1oaWdobGlnaHQ6ICM2ZjAxZTU7XG4kcHVycGxlLWhpZ2hsaWdodC0wMjU6IHJnYmEoMTExLCAxLCAyMjksIDAuMjUpO1xuJGxvb3AtcGluazogI2VmNDdhMjtcbiRsb29wLXBpbmstMDI1OiByZ2JhKDIzOSwgNzEsIDE2MiwgMC4yNSk7XG4kbGlnaHQtYmx1ZTogIzIwZDNlYztcbiRsaWdodC1ibHVlLTAyNTogcmdiYSgzMiwgMjExLCAyMzYsIDAuMjUpO1xuJGxvb3AtYmx1ZTogIzIwNzJlYztcbiRsb29wLWJsdWUtMDI1OiByZ2JhKDMyLCAxMTQsIDIzNiwgMC4yNSk7XG4kZ3JlZW4tMjogI2MzZWMyMDtcbiRncmVlbi0yLTAyNTogcmdiYSgxOTUsIDIzNiwgMzIsIDAuMjUpO1xuJGxvb3Atb3JhbmdlOiAjZTk4MDIwO1xuJGxvb3Atb3JhbmdlLTAyNTogcmdiYSgyMzMsIDEyOCwgMzIsIDAuMjUpO1xuXG4vLy8gU3BhY2Vyc1xuJGdyYXktbGluZS1jb2xvcjogI2Q2ZDBkZjtcblxuJGxvb3AtcmVkLWRhcms6ICNjOTMwNGQ7XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9pbmJveC9yZXBsaWVzL3JlcGx5LWRldGFpbHMvcmVwbHktZGV0YWlscy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3R5bGVzL19taXhpbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3R5bGVzL2xvb3AtZGVzaWduLXN5c3RlbS9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxXQUFBO0FBSkY7O0FBT0E7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBSkY7O0FBT0E7RUFDRSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFKRjtBQ3FMRTtFRHBMRjtJQU1JLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSw0QkFBQTtFQUhGO0FBQ0Y7QUFLRTtFQUNFLG1CQUFBO0VBQ0EsY0V6QmE7RUYwQmIsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBSEo7QUNtS0U7RUR6S0E7SUFZSSxtQkFBQTtFQUZKO0FBQ0Y7QUFJSTtFQUNFLFNBQUE7QUFGTjtBQ0VFO0VBMENJLHFCRHpDc0I7QUFBNUI7QUNLRTtFQXdDSSxvQkQ3Q3NCO0FBRzVCO0FBQ0EsZzdVQUFnN1UiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdsb29wLWRlc2lnbi1zeXN0ZW0vY29sb3JzJztcbkBpbXBvcnQgJ2xvb3AtZGVzaWduLXN5c3RlbS9oZWxwZXJzJztcbkBpbXBvcnQgJ21peGlucyc7XG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGV0YWlscy1jb250YWluZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA3OC42MjVyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGV0YWlscy1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAwLjA2M3JlbSBzb2xpZCAkbGlnaHQtZ3JleS00O1xuICBtYXJnaW4tYm90dG9tOiBweFRvUmVtKDIwKTtcbiAgcGFkZGluZzogcHhUb1JlbSgxNikgcHhUb1JlbSgyNCk7XG5cbiAgQGluY2x1ZGUgbW9iaWxlLXVwIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIG1hcmdpbi1ib3R0b206IHB4VG9SZW0oMCk7XG4gICAgcGFkZGluZzogcHhUb1JlbSg0NCkgMCBweFRvUmVtKDQ3KTtcbiAgfVxuXG4gICZfX2JhY2stYXJyb3cge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6ICRsb29wLWdyZWVuLTEyNTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogcHhUb1JlbSgxNCk7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZ2FwOiBweFRvUmVtKDEwKTtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICBAaW5jbHVkZSBtb2JpbGUtdXAge1xuICAgICAgZm9udC1zaXplOiBweFRvUmVtKDE4KTtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgQGluY2x1ZGUgbWFyZ2luLXJpZ2h0KDAuMjVyZW0pO1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIGZsZXgtZ2FwKCRnYXAsICRnbG9iYWw6IGZhbHNlKSB7XG4gIG1hcmdpbi10b3A6ICgtJGdhcCk7XG4gIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCgtJGdhcCksICRnbG9iYWwpO1xuXG4gID4gKiB7XG4gICAgbWFyZ2luLXRvcDogJGdhcDtcbiAgICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgkZ2FwLCAkZ2xvYmFsKTtcbiAgfVxufVxuXG5AbWl4aW4gYmFzZS1jb250YWluZXIoJGNvbnRlbnQtd2lkdGgpIHtcbiAgJGRlc2t0b3AtcGFkZGluZzogMnJlbTtcbiAgbWF4LXdpZHRoOiBjYWxjKCN7JGNvbnRlbnQtd2lkdGh9ICsgKCN7JGRlc2t0b3AtcGFkZGluZ30pKTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MnJlbSkge1xuICAgIEBpbmNsdWRlIHBhZGRpbmctbGVmdCgkZGVza3RvcC1wYWRkaW5nLCB0cnVlKTtcbiAgICBAaW5jbHVkZSBwYWRkaW5nLXJpZ2h0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICB9XG59XG5cbkBtaXhpbiBjZW50ZXJBYnNvbHV0ZUVsZW1lbnQge1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5AbWl4aW4gb25seS1sdHItZ2xvYmFsIHtcbiAgaHRtbDpub3QoW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bC1nbG9iYWwge1xuICBodG1sW2Rpcj0ncnRsJ10gJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktbHRyIHtcbiAgOmhvc3QtY29udGV4dChodG1sOm5vdChbZGlyPSdydGwnXSkpICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bCB7XG4gIDpob3N0LWNvbnRleHQoaHRtbFtkaXI9J3J0bCddKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gcnRsLXZhbHVlKCRwcm9wZXJ0eSwgJGx0ci12YWx1ZSwgJHJ0bC12YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGx0ci12YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHJ0bC12YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHJ0bC1wcm9wZXJ0eSgkbHRyLXByb3BlcnR5LCAkcnRsLXByb3BlcnR5LCAkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpZiAkZ2xvYmFsID09IHRydWUge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyLWdsb2JhbCB7XG4gICAgICAjeyRsdHItcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwtZ2xvYmFsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bCB7XG4gICAgICAjeyRydGwtcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXJnaW4tbGVmdCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLWxlZnQsIG1hcmdpbi1yaWdodCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBtYXJnaW4tcmlnaHQoJG1hcmdpbiwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KG1hcmdpbi1yaWdodCwgbWFyZ2luLWxlZnQsICRtYXJnaW4sICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZygkcGFkZGluZ1RvcCwgJHBhZGRpbmdSaWdodCwgJHBhZGRpbmdCb3R0b20sICRwYWRkaW5nTGVmdCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgcGFkZGluZy10b3A6ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZ1JpZ2h0LCAkZ2xvYmFsKTtcbiAgcGFkZGluZy1ib3R0b206ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZ0xlZnQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1sZWZ0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLXJpZ2h0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiB0ZXh0LWFsaWduLWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRleHQtYWxpZ24sIGxlZnQsIHJpZ2h0LCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGxlZnQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobGVmdCwgcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiByaWdodCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShyaWdodCwgbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRyYW5zbGF0ZVhZKCR2YWx1ZVgsICR2YWx1ZVksICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZSh0cmFuc2Zvcm0sIHRyYW5zbGF0ZSgkdmFsdWVYLCAkdmFsdWVZKSwgdHJhbnNsYXRlKC0kdmFsdWVYLCAkdmFsdWVZKSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItbGVmdCwgYm9yZGVyLXJpZ2h0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1yaWdodCwgYm9yZGVyLWxlZnQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCBib3JkZXItdG9wLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtbGVmdC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBmbG9hdC1sZWZ0KCRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZShmbG9hdCwgbGVmdCwgcmlnaHQsICRnbG9iYWw6IGZhbHNlKTtcbn1cblxuQG1peGluIGZsb2F0LXJpZ2h0IHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCByaWdodCwgbGVmdCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gc21hbGwtZGVza3RvcC1vbmx5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LWxnKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQteGwgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtYW5kLXRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc21hbGwtbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtcyAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LW1kIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtdXAge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gZGlzYWJsZS1zY3JvbGxiYXIge1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiIsIi8vLyBodHRwczovL3d3dy5maWdtYS5jb20vZmlsZS9Hbm0wMnFUOGxMMVhFdnRNRk9SNlJML0xvb3AtMjAyMS1GZWF0dXJlLURldmVsb3BtZW50P25vZGUtaWQ9NCUzQTMwMFxuXG4vLy8gVGhpcyBpcyB0aGUgbWFpbiBjb2xvdXIgZm9yIGFsbCB0aGUgZWxlbWVudHMuIEl0IGlzIHVzZWQgdG8gY3JlYXRlIGFsbCBvZiB0aGUgaW5wdXQgZmllbGRzLCBmb3IgaWNvbnMgZXRjXG4kbG9vcC1ncmVlbi0xMjU6ICMwNTY3NjM7XG4kbG9vcC1ncmVlbi0xMDA6ICMxMDdkNzk7XG4kbG9vcC1ncmVlbi01MDogIzg3YmViYztcbiRsb29wLWdyZWVuLTI1OiAjYzNkZmRkO1xuJGxvb3AtZ3JlZW4tNTogI2YzZjhmODtcblxuLy8vIFVzZWQgaW4gbmF2aWdhdGlvbiBhbmQgYXMgc2Vjb25kYXJ5IGVsZW1lbnQgY29sb3VycyBvbiBidXR0b25zIGFuZCBsaW5rc1xuJGxvb3AtcHVycGxlLTEyNTogIzI2MTA0NztcbiRsb29wLXB1cnBsZS0xMDA6ICMzMTEzNWU7XG4kbG9vcC1wdXJwbGUtNzU6ICM0NjI0Nzg7XG4kbG9vcC1wdXJwbGUtNjA6ICM4NjZhYjA7XG4kbG9vcC1wdXJwbGUtNTA6ICM4YTdiYTE7XG4kbG9vcC1wdXJwbGUtNDA6ICNlYWU2ZjA7XG4kbG9vcC1wdXJwbGUtMjU6ICNjYmM0ZDc7XG4kbG9vcC1wdXJwbGUtNTogI2Y1ZjNmNztcblxuLy8vIFVzZWQgYXMgYmFja2dyb3VuZCBmb3IgZGlzYWJsZWQgbGFiZWxzIGFuZCBmaWVsZHMgYXMgd2VsbCBhcyBmb3IgdGFnc1xuJGxpZ2h0LWdyZXk6ICNlZWVlZWU7XG5cbi8vLyBHcmV5c2NhbGVcbiRncmV5LTEwMDogIzAwMDAwMDtcbiRncmV5LTUwOiB0cmFuc3BhcmVudGl6ZSgkZ3JleS0xMDAsIDEgLSAwLjUpO1xuJGdyZXktMjU6IHRyYW5zcGFyZW50aXplKCRncmV5LTEwMCwgMSAtIDAuMjUpO1xuJGdyZXktNTogdHJhbnNwYXJlbnRpemUoJGdyZXktMTAwLCAxIC0gMC4wNSk7XG5cbi8vLyBub3RpZmljYXRpb25zLCBzdGF0dXMsIGNhdGVnb3JpZXNcbi8vLyB3YXJuaW5nLCBhbGVydFxuJGRhbmdlci1yZWQ6ICNlZTIzMmY7XG4vLy8gb2ssIGFjY2VwdGVkLCBmaW5pc2hlZFxuJHllcy1ncmVlbjogIzFkYjA0Njtcbi8vLyBwZW5kaW5nXG4kbG9vcC15ZWxsb3c6ICNlY2IzMjA7XG5cbi8vLyBoaWdobGlnaHQgY29sb3Vyc1xuJHB1cnBsZS1oaWdobGlnaHQ6ICM2ZjAxZTU7XG4kcHVycGxlLWhpZ2hsaWdodC0wMjU6IHJnYmEoMTExLCAxLCAyMjksIDAuMjUpO1xuJGxvb3AtcGluazogI2VmNDdhMjtcbiRsb29wLXBpbmstMDI1OiByZ2JhKDIzOSwgNzEsIDE2MiwgMC4yNSk7XG4kbGlnaHQtYmx1ZTogIzIwZDNlYztcbiRsaWdodC1ibHVlLTAyNTogcmdiYSgzMiwgMjExLCAyMzYsIDAuMjUpO1xuJGxvb3AtYmx1ZTogIzIwNzJlYztcbiRsb29wLWJsdWUtMDI1OiByZ2JhKDMyLCAxMTQsIDIzNiwgMC4yNSk7XG4kZ3JlZW4tMjogI2MzZWMyMDtcbiRncmVlbi0yLTAyNTogcmdiYSgxOTUsIDIzNiwgMzIsIDAuMjUpO1xuJGxvb3Atb3JhbmdlOiAjZTk4MDIwO1xuJGxvb3Atb3JhbmdlLTAyNTogcmdiYSgyMzMsIDEyOCwgMzIsIDAuMjUpO1xuXG4vLy8gU3BhY2Vyc1xuJGdyYXktbGluZS1jb2xvcjogI2Q2ZDBkZjtcblxuJGxvb3AtcmVkLWRhcms6ICNjOTMwNGQ7XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 94222:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/inbox/replies/reply-details/reply-details.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplyDetailsModule": () => (/* binding */ ReplyDetailsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _app_modules_inbox_replies_reply_details_reply_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/modules/inbox/replies/reply-details/reply-details-routing.module */ 93632);
/* harmony import */ var _app_modules_inbox_replies_reply_details_reply_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/modules/inbox/replies/reply-details/reply-details.component */ 67405);
/* harmony import */ var _app_modules_inbox_replies_reply_details_reply_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/modules/inbox/replies/reply-details/reply-details.service */ 66655);
/* harmony import */ var _app_modules_inbox_replies_reply_details_reply_review_and_translate_reply_review_and_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/inbox/replies/reply-details/reply-review-and-translate/reply-review-and-translate.component */ 35388);
/* harmony import */ var _app_modules_inbox_replies_reply_details_reply_transcribe_reply_transcribe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/inbox/replies/reply-details/reply-transcribe/reply-transcribe.component */ 59650);
/* harmony import */ var _app_modules_inbox_shared_components_reject_modal_reject_modal_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/inbox/shared/components/reject-modal/reject-modal.module */ 49193);
/* harmony import */ var _app_modules_inbox_shared_components_top_bar_top_bar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/modules/inbox/shared/components/top-bar/top-bar.module */ 12734);
/* harmony import */ var _app_modules_inbox_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/modules/inbox/shared/shared.module */ 39743);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _shared_components_audio_player_audio_player_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/components/audio-player/audio-player.module */ 94277);
/* harmony import */ var _shared_components_button_button_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/components/button/button.module */ 82024);
/* harmony import */ var _shared_components_inline_loading_inline_loading_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/components/inline-loading/inline-loading.module */ 80812);
/* harmony import */ var _shared_components_route_stepper_route_stepper_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/components/route-stepper/route-stepper.module */ 40049);
/* harmony import */ var _shared_components_skeleton_text_skeleton_text_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/components/skeleton-text/skeleton-text.module */ 81298);
/* harmony import */ var _shared_components_slide_toggle_slide_toggle_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/components/slide-toggle/slide-toggle.module */ 47211);
/* harmony import */ var _shared_components_textarea_v2_textarea_v2_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shared/components/textarea-v2/textarea-v2.module */ 71049);
/* harmony import */ var _shared_directives_tooltip_tooltip_directive_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shared/directives/tooltip/tooltip.directive.module */ 84898);
/* harmony import */ var _shared_loop_design_system_components_tags_tags_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @shared/loop-design-system/components/tags/tags.module */ 27705);
/* harmony import */ var _shared_loop_design_system_loop_design_system_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @shared/loop-design-system/loop-design-system.module */ 97);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 22560);






















class ReplyDetailsModule {
  static #_ = this.ɵfac = function ReplyDetailsModule_Factory(t) {
    return new (t || ReplyDetailsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({
    type: ReplyDetailsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({
    providers: [_app_modules_inbox_replies_reply_details_reply_details_service__WEBPACK_IMPORTED_MODULE_2__.ReplyDetailsService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _app_modules_inbox_shared_components_top_bar_top_bar_module__WEBPACK_IMPORTED_MODULE_6__.TopBarModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__.SharedModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateModule, _app_modules_inbox_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedInboxModule, _shared_components_route_stepper_route_stepper_module__WEBPACK_IMPORTED_MODULE_11__.RouteStepperModule, _shared_components_skeleton_text_skeleton_text_module__WEBPACK_IMPORTED_MODULE_12__.SkeletonTextModule, _app_modules_inbox_replies_reply_details_reply_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReplyDetailsRoutingModule, _shared_components_audio_player_audio_player_module__WEBPACK_IMPORTED_MODULE_8__.AudioPlayerModule, _shared_components_textarea_v2_textarea_v2_module__WEBPACK_IMPORTED_MODULE_14__.TextareaV2Module, _shared_directives_tooltip_tooltip_directive_module__WEBPACK_IMPORTED_MODULE_15__.TooltipDirectiveModule, _shared_loop_design_system_components_tags_tags_module__WEBPACK_IMPORTED_MODULE_16__.TagsModule, _app_modules_inbox_shared_components_reject_modal_reject_modal_module__WEBPACK_IMPORTED_MODULE_5__.InboxRejectModalModule, _shared_loop_design_system_loop_design_system_module__WEBPACK_IMPORTED_MODULE_17__.LoopDesignSystemModule, _shared_components_slide_toggle_slide_toggle_module__WEBPACK_IMPORTED_MODULE_13__.SlideToggleModule, _shared_components_button_button_module__WEBPACK_IMPORTED_MODULE_9__.ButtonModule, _shared_components_inline_loading_inline_loading_module__WEBPACK_IMPORTED_MODULE_10__.InlineLoadingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](ReplyDetailsModule, {
    declarations: [_app_modules_inbox_replies_reply_details_reply_details_component__WEBPACK_IMPORTED_MODULE_1__.ReplyDetailsComponent, _app_modules_inbox_replies_reply_details_reply_transcribe_reply_transcribe_component__WEBPACK_IMPORTED_MODULE_4__.ReplyTranscribeComponent, _app_modules_inbox_replies_reply_details_reply_review_and_translate_reply_review_and_translate_component__WEBPACK_IMPORTED_MODULE_3__.ReplyReviewAndTranslateComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _app_modules_inbox_shared_components_top_bar_top_bar_module__WEBPACK_IMPORTED_MODULE_6__.TopBarModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__.SharedModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateModule, _app_modules_inbox_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedInboxModule, _shared_components_route_stepper_route_stepper_module__WEBPACK_IMPORTED_MODULE_11__.RouteStepperModule, _shared_components_skeleton_text_skeleton_text_module__WEBPACK_IMPORTED_MODULE_12__.SkeletonTextModule, _app_modules_inbox_replies_reply_details_reply_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReplyDetailsRoutingModule, _shared_components_audio_player_audio_player_module__WEBPACK_IMPORTED_MODULE_8__.AudioPlayerModule, _shared_components_textarea_v2_textarea_v2_module__WEBPACK_IMPORTED_MODULE_14__.TextareaV2Module, _shared_directives_tooltip_tooltip_directive_module__WEBPACK_IMPORTED_MODULE_15__.TooltipDirectiveModule, _shared_loop_design_system_components_tags_tags_module__WEBPACK_IMPORTED_MODULE_16__.TagsModule, _app_modules_inbox_shared_components_reject_modal_reject_modal_module__WEBPACK_IMPORTED_MODULE_5__.InboxRejectModalModule, _shared_loop_design_system_loop_design_system_module__WEBPACK_IMPORTED_MODULE_17__.LoopDesignSystemModule, _shared_components_slide_toggle_slide_toggle_module__WEBPACK_IMPORTED_MODULE_13__.SlideToggleModule, _shared_components_button_button_module__WEBPACK_IMPORTED_MODULE_9__.ButtonModule, _shared_components_inline_loading_inline_loading_module__WEBPACK_IMPORTED_MODULE_10__.InlineLoadingModule]
  });
})();

/***/ }),

/***/ 66655:
/*!******************************************************************************!*\
  !*** ./src/app/modules/inbox/replies/reply-details/reply-details.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplyDetailsService": () => (/* binding */ ReplyDetailsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26067);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _core_services_api_ivrr_ivrr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/api/ivrr/ivrr */ 99418);
/* harmony import */ var _core_services_api_comment_comment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/api/comment/comment.service */ 42075);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _app_core_services_api_meta_data_meta_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/services/api/meta-data/meta-data.service */ 56401);








class ReplyDetailsService {
  constructor(toastr, ivrrService, commentService, translateService, metaDataService) {
    this.toastr = toastr;
    this.ivrrService = ivrrService;
    this.commentService = commentService;
    this.translateService = translateService;
    this.metaDataService = metaDataService;
    this.reply = new rxjs__WEBPACK_IMPORTED_MODULE_3__.ReplaySubject(1);
    this.s3fileUrl = new rxjs__WEBPACK_IMPORTED_MODULE_3__.ReplaySubject(1);
    this.thematicsMetaData = [];
    this.thematics = [];
  }
  fetch(id) {
    this.loadThematics().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(() => {
      return this.commentService.getCommentModerator(id);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => {
      this.handleError();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
    })).subscribe(replyFetched => {
      if (replyFetched) {
        this.thematics = replyFetched.thematics;
        if (replyFetched.s3FileId) {
          this.ivrrService.getSignedUrlForS3Audio(replyFetched.s3FileId).subscribe(fileUrl => {
            this.s3fileUrl.next(fileUrl);
            this.reply.next(replyFetched);
          }, () => {
            this.handleError();
          });
        } else {
          this.reply.next(replyFetched);
        }
      }
    });
  }
  loadThematics() {
    return this.metaDataService.thematicAreas$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(thematics => {
      this.thematicsMetaData = thematics;
      return thematics;
    }));
  }
  handleError() {
    this.toastr.error(this.translateService.instant(`admin.comment.toast.preview.error.title`), this.translateService.instant('admin.comment.toast.preview.error.subtitle'));
  }
  static #_ = this.ɵfac = function ReplyDetailsService_Factory(t) {
    return new (t || ReplyDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_core_services_api_ivrr_ivrr__WEBPACK_IMPORTED_MODULE_0__.IVRRService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_core_services_api_comment_comment_service__WEBPACK_IMPORTED_MODULE_1__.CommentService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_app_core_services_api_meta_data_meta_data_service__WEBPACK_IMPORTED_MODULE_2__.MetaDataService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
    token: ReplyDetailsService,
    factory: ReplyDetailsService.ɵfac
  });
}

/***/ }),

/***/ 35388:
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/inbox/replies/reply-details/reply-review-and-translate/reply-review-and-translate.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplyReviewAndTranslateComponent": () => (/* binding */ ReplyReviewAndTranslateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/app-routing.props */ 18854);
/* harmony import */ var _app_modules_inbox_shared_components_reject_modal_reject_form_reject_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/modules/inbox/shared/components/reject-modal/reject-form/reject-form.component */ 25166);
/* harmony import */ var _app_modules_inbox_shared_inbox_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/modules/inbox/shared/inbox-post.component */ 37925);
/* harmony import */ var _core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/api/model/channel.enum */ 92128);
/* harmony import */ var _shared_components_aside_aside_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/components/aside/aside.service */ 90240);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! rxjs */ 26562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! rxjs/operators */ 51353);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_services_locales_supported_languages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/locales/supported-languages.service */ 90423);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _app_modules_inbox_replies_reply_details_reply_details_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/modules/inbox/replies/reply-details/reply-details.service */ 66655);
/* harmony import */ var _core_services_api_comment_comment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/api/comment/comment.service */ 42075);
/* harmony import */ var _core_services_fixed_positioning_fixed_positioning__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/services/fixed-positioning/fixed-positioning */ 75060);
/* harmony import */ var _core_services_modal_modal_v2_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/services/modal/modal-v2.service */ 12151);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_core_services_api_meta_data_meta_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/core/services/api/meta-data/meta-data.service */ 56401);
/* harmony import */ var _core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/services/ui/ui.service */ 21428);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_actions_footer_actions_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/actions-footer/actions-footer.component */ 11408);
/* harmony import */ var _shared_components_filters_section_v2_checkbox_filter_wrapper_grouped_checkbox_filter_wrapper_grouped_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/components/filters-section-v2/checkbox-filter-wrapper-grouped/checkbox-filter-wrapper-grouped.component */ 33145);
/* harmony import */ var _shared_components_content_translation_step_content_translation_step_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/content-translation-step/content-translation-step.component */ 51548);
/* harmony import */ var _shared_components_form_section_form_section_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/components/form-section/form-section.component */ 347);
/* harmony import */ var _shared_components_language_autocomplete_language_autocomplete_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/components/language-autocomplete/language-autocomplete.component */ 24265);
/* harmony import */ var _shared_components_post_partials_post_author_date_flat_post_author_date_flat_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../shared/components/post/partials/post-author-date-flat/post-author-date-flat.component */ 50454);
/* harmony import */ var _shared_components_post_translation_controller_post_translation_controller_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/components/post-translation-controller/post-translation-controller.component */ 71974);
/* harmony import */ var _shared_components_story_with_comments_story_with_comments_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../shared/components/story-with-comments/story-with-comments.component */ 51981);
/* harmony import */ var _shared_components_skeleton_text_skeleton_text_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../shared/components/skeleton-text/skeleton-text.component */ 69096);
/* harmony import */ var _shared_components_audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @shared/components/audio-player/audio-player.component */ 77200);
/* harmony import */ var _shared_components_slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../shared/components/slide-toggle/slide-toggle.component */ 47124);
/* harmony import */ var _shared_components_inline_loading_inline_loading_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../shared/components/inline-loading/inline-loading.component */ 26264);


































const _c0 = ["storyPreview"];
const _c1 = ["storyReviewContainer"];
const _c2 = ["storyDetails"];
function ReplyReviewAndTranslateComponent_ng_container_5_app_audio_player_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](0, "app-audio-player", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("audioSrc", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](1, 1, ctx_r16.audioSrc$));
  }
}
function ReplyReviewAndTranslateComponent_ng_container_5_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](2, 2, "admin.pendingReplyReview.originalStoryWrittenIn"), "\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](3, 4, "languages." + ctx_r17.reply.storyLanguage), "");
  }
}
function ReplyReviewAndTranslateComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](1, "app-post-author-date-flat", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](2, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](4, ReplyReviewAndTranslateComponent_ng_container_5_app_audio_player_4_Template, 2, 3, "app-audio-player", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](6, "p", 28)(7, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function ReplyReviewAndTranslateComponent_ng_container_5_Template_a_click_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵresetView"](ctx_r18.showStoryDetails($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](10, ReplyReviewAndTranslateComponent_ng_container_5_span_10_Template, 4, 6, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("post", ctx_r2.reply)("underlined", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](ctx_r2.reply.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx_r2.audioSrc$);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](9, 6, "admin.comment.preview.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx_r2.reply == null ? null : ctx_r2.reply.storyLanguage);
  }
}
function ReplyReviewAndTranslateComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](1, "app-skeleton-text", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("lines", 5);
  }
}
function ReplyReviewAndTranslateComponent_app_inline_loading_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](0, "app-inline-loading", 35);
  }
}
function ReplyReviewAndTranslateComponent_loop_checkbox_filter_wrapper_grouped_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](0, "loop-checkbox-filter-wrapper-grouped", 36);
  }
  if (rf & 2) {
    const thematicAreaData_r20 = ctx.ngIf;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("filterData", thematicAreaData_r20)("form", ctx_r6.commentForm)("isModal", false)("reset$", ctx_r6.resetThematics$);
  }
}
function ReplyReviewAndTranslateComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](2, 1, "errors.thematicsNotEntered"), " ");
  }
}
function ReplyReviewAndTranslateComponent_loop_language_autocomplete_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](0, "loop-language-autocomplete", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](1, 3, "admin.pendingStoryReview.originalLanguagePlaceholder"))("existingOptions", ctx_r8.languageOptions)("formControl", ctx_r8.languageControl);
  }
}
function ReplyReviewAndTranslateComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](2, 1, "errors.languageNotEntered"), " ");
  }
}
function ReplyReviewAndTranslateComponent_ng_container_27_app_content_translation_step_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "app-content-translation-step", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("translatedTextChange", function ReplyReviewAndTranslateComponent_ng_container_27_app_content_translation_step_1_Template_app_content_translation_step_translatedTextChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵresetView"](ctx_r22.translatedText = $event);
    })("targetLanguageChange", function ReplyReviewAndTranslateComponent_ng_container_27_app_content_translation_step_1_Template_app_content_translation_step_targetLanguageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵresetView"](ctx_r24.targetLanguage = $event);
    })("submitTranslation", function ReplyReviewAndTranslateComponent_ng_container_27_app_content_translation_step_1_Template_app_content_translation_step_submitTranslation_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r23);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵresetView"](ctx_r25.submitTranslation());
    })("closeClicked", function ReplyReviewAndTranslateComponent_ng_container_27_app_content_translation_step_1_Template_app_content_translation_step_closeClicked_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r23);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵresetView"](ctx_r26.closeClicked());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("processing", ctx_r21.processing)("languagesOptions", ctx_r21.translationOptions)("targetLanguage", ctx_r21.targetLanguage)("translatedText", ctx_r21.translatedText)("originalLanguage", ctx_r21.reply.language);
  }
}
function ReplyReviewAndTranslateComponent_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](1, ReplyReviewAndTranslateComponent_ng_container_27_app_content_translation_step_1_Template, 1, 5, "app-content-translation-step", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", !ctx_r10.allTranslated);
  }
}
function ReplyReviewAndTranslateComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](1, "app-skeleton-text", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("lines", 2);
  }
}
function ReplyReviewAndTranslateComponent_app_post_translation_controller_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "app-post-translation-controller", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("languagesChanged", function ReplyReviewAndTranslateComponent_app_post_translation_controller_30_Template_app_post_translation_controller_languagesChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵresetView"](ctx_r27.updatedLanguages($event));
    })("verifyTranslation", function ReplyReviewAndTranslateComponent_app_post_translation_controller_30_Template_app_post_translation_controller_verifyTranslation_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r28);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵresetView"](ctx_r29.verifyTranslation($event));
    })("deleteTranslation", function ReplyReviewAndTranslateComponent_app_post_translation_controller_30_Template_app_post_translation_controller_deleteTranslation_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r28);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵresetView"](ctx_r30.deleteTranslation($event));
    })("retryTranslation", function ReplyReviewAndTranslateComponent_app_post_translation_controller_30_Template_app_post_translation_controller_retryTranslation_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r28);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵresetView"](ctx_r31.retryTranslation($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("processing", ctx_r13.processing)("initialTranslations", ctx_r13.translations)("selectedLanguage", ctx_r13.targetLanguage)("selectedLanguageContent", ctx_r13.translatedText)("originalLanguage", ctx_r13.reply.language);
  }
}
function ReplyReviewAndTranslateComponent_ng_template_32_app_story_with_comments_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "app-story-with-comments", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("loadingError", function ReplyReviewAndTranslateComponent_ng_template_32_app_story_with_comments_8_Template_app_story_with_comments_loadingError_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵresetView"](ctx_r33.previewLoadingError());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("id", ctx_r32.reply.storyId)("channel", ctx_r32.reply.storyChannel)("forceExpanded", true)("embed", true)("showActions", true)("showForm", false)("showReplies", true)("forceInfoWithin", true)("showStoryInfo", false);
  }
}
function ReplyReviewAndTranslateComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "div", 43)(1, "div", 44)(2, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function ReplyReviewAndTranslateComponent_ng_template_32_Template_img_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵresetView"](ctx_r35.hideDetailsPanel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](4, "div", 46)(5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](8, ReplyReviewAndTranslateComponent_ng_template_32_app_story_with_comments_8_Template, 1, 9, "app-story-with-comments", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpropertyInterpolate"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](3, 3, "admin.comment.preview.hide"));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](7, 5, "admin.comment.preview.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx_r15.reply == null ? null : ctx_r15.reply.storyId);
  }
}
class ReplyReviewAndTranslateComponent extends _app_modules_inbox_shared_inbox_post_component__WEBPACK_IMPORTED_MODULE_2__.InboxPostBaseComponent {
  set reply(value) {
    this._reply = value;
    this.cd.detectChanges();
  }
  get reply() {
    return this._reply;
  }
  onWindowScroll() {
    this.fixedPositioning.positionFixedElement(this.fixedElementData, this.ui.mobileView$.getValue());
  }
  onWindowResize() {
    this.fixedPositioning.positionFixedElement(this.fixedElementData, this.ui.mobileView$.getValue());
  }
  get replyLanguagePill() {
    return this.reply?.language ? [{
      content: this.translateService.instant(`languages.${this.reply.language}`),
      id: this.reply.language
    }] : [];
  }
  get isVoiceStory() {
    return this.reply?.storyChannel === _core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_3__.CHANNEL_CONSTANTS.IVRR && this.reply.channel !== _core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_3__.CHANNEL_CONSTANTS.IVRR;
  }
  constructor(languageService, toastr, translateService, replyDetailsService, asideService, cd, commentService, fixedPositioning, modalService, route, router, metaDataService, ui) {
    super(translateService, languageService, toastr);
    this.languageService = languageService;
    this.toastr = toastr;
    this.translateService = translateService;
    this.replyDetailsService = replyDetailsService;
    this.asideService = asideService;
    this.cd = cd;
    this.commentService = commentService;
    this.fixedPositioning = fixedPositioning;
    this.modalService = modalService;
    this.route = route;
    this.router = router;
    this.metaDataService = metaDataService;
    this.ui = ui;
    this.rejectButtonLabel = this.translateService.instant('admin.pendingReplyReview.rejectReply');
    this.backUrl = '/inbox/replies';
    this.publishing = false;
    this.rejecting = false;
    this.step = 1;
    this.contentScrolled = false;
    this.solutionProposed = false;
    this.scrolledToBottom = false;
    this.disablePublishAction = false;
    this.languageControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_25__.UntypedFormControl(null);
    this.thematicAreaDataNew$ = new rxjs__WEBPACK_IMPORTED_MODULE_26__.BehaviorSubject(null);
    this.resetThematics$ = new rxjs__WEBPACK_IMPORTED_MODULE_26__.BehaviorSubject(true);
    this.commentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_25__.UntypedFormGroup({
      thematics: new _angular_forms__WEBPACK_IMPORTED_MODULE_25__.UntypedFormControl()
    });
    this.steps = [{
      text: 'admin.pendingReplyReview.reviewStep'
    }];
    this.getMetadata();
  }
  checkParams() {
    this.route.parent.snapshot.paramMap.get('forceReject') && this.handleRejectClick();
  }
  ngOnChanges(changes) {
    super.setup(this.reply.id, this.reply.translations, this.reply.language);
    this.hideDetailsPanel();
    super.initLanguages();
    this.checkParams();
    this.refreshTranslations(null, 0);
  }
  refreshTranslations(affectedLang = '', minimumRepeat) {
    this.isSubmitted = false;
    super.refreshTranslationsByFn(this.commentService.getCommentTranslationStatuses.bind(this.commentService), affectedLang, minimumRepeat);
  }
  closeClicked() {
    super.initLanguages();
  }
  submitTranslation() {
    super.submitTranslationByFn(this.commentService.addCommentTranslationModerator.bind(this.commentService)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.takeUntil)(this.destroyed$)).subscribe(() => {
      this.refreshTranslations(this.targetLanguage, 4);
      this.cd.detectChanges();
    }, err => {
      super.showErrorNotification(err?.error.message?.error);
      this.refreshTranslations(null, 0);
      this.cd.markForCheck();
    });
  }
  verifyTranslation(payload) {
    super.verifyTranslationByFn(this.commentService.verifyCommentTranslationModerator.bind(this.commentService), payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.takeUntil)(this.destroyed$)).subscribe(() => {
      this.refreshTranslations(payload.language, 1);
      this.cd.markForCheck();
    }, err => {
      this.refreshTranslations(this.targetLanguage, 0);
      super.showErrorNotification(err?.error.message?.error);
      this.cd.markForCheck();
    });
  }
  deleteTranslation(language) {
    super.deleteTranslationByFn(this.commentService.deleteCommentTranslationModerator.bind(this.commentService), language).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.takeUntil)(this.destroyed$)).subscribe(() => {
      this.refreshTranslations(null, 1);
      this.cd.markForCheck();
    }, err => {
      this.refreshTranslations(null, 0);
      super.showErrorNotification(err?.error.message?.error);
    });
  }
  retryTranslation(language) {
    if (this.processing) {
      return;
    }
    super.retryTranslationByFn(this.commentService.retryCommentTranslationModerator.bind(this.commentService), language).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.takeUntil)(this.destroyed$)).subscribe(() => {
      this.refreshTranslations(language, 4);
      this.cd.markForCheck();
    }, err => {
      this.refreshTranslations(null, 0);
      super.showErrorNotification(err?.error.message?.error);
    });
  }
  handleRejectClick() {
    this.rejecting = true;
    const modal = this.modalService.open(_app_modules_inbox_shared_components_reject_modal_reject_form_reject_form_component__WEBPACK_IMPORTED_MODULE_1__.InboxRejectFormComponent, {
      hasAuthor: this.shouldShowNotificationMessage(),
      languageCode: this.reply.language,
      type: 'comment',
      channel: this.reply?.channel,
      contactIsNotAccepted: false,
      multiple: false
    });
    modal.confirm.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.takeUntil)(this.destroyed$)).subscribe(payload => this.rejectComment(payload));
    modal.close$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.takeUntil)(this.destroyed$)).subscribe(() => {
      this.rejecting = false;
      this.cd.markForCheck();
    });
  }
  shouldShowNotificationMessage() {
    return this.reply?.channel === _core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_3__.CHANNEL_CONSTANTS.WEB ? !!this.reply.emailProvided : true;
  }
  publishReply() {
    this.isSubmitted = true;
    if (!this.isValid()) {
      return;
    }
    this.publishing = true;
    this.cd.markForCheck();
    const handleErrorResponse = (isIvrr = false) => {
      this.toastr.error(this.translateService.instant(isIvrr ? 'admin.comment.toast.sentToPendingRecording.error.title' : `admin.comment.toast.published.error.title`), this.translateService.instant(isIvrr ? 'admin.comment.toast.sentToPendingRecording.error.subtitle' : 'admin.comment.toast.published.error.subtitle'));
    };
    const handleSuccessResponse = isIvrr => {
      this.toastr.success(this.translateService.instant(isIvrr ? 'admin.comment.toast.sentToPendingRecording.success.subtitle' : 'admin.comment.toast.published.success.subtitle'), this.translateService.instant(isIvrr ? 'admin.comment.toast.sentToPendingRecording.success.title' : 'admin.comment.toast.published.success.title'), isIvrr ? {
        buttons: [{
          title: 'Record a voice note'
        }]
      } : {}).onAction.subscribe(() => {
        this.router.navigate([`${_app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.MAIN_ROUTES.OUTBOX}/${_app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.OUTBOX_ROUTES.PENDING_RECORDING}/${_app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.OUTBOX_PENDING_RECORD_ROUTES.RECORD.replace(':id', this.reply.id)}`]);
      });
      this.router.navigate([this.backUrl], {
        queryParams: {
          processedReplyId: this.reply.id
        }
      });
    };
    if (this.isVoiceStory) {
      this.commentService.putPendingRecordingComment(this.reply.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.finalize)(() => this.publishing = false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.takeUntil)(this.destroyed$)).subscribe(res => res.success ? handleSuccessResponse(true) : handleErrorResponse(true), e => {
        handleErrorResponse(true);
      });
    } else {
      this.publishing = true;
      this.commentService.updateCommentModerator(this.reply.id, {
        thematics: this.commentForm.value.thematics,
        language: this.reply.language,
        solution_proposed: this.solutionProposed
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.mergeMap)(() => this.commentService.publishCommentModerator(this.reply.id)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.takeUntil)(this.destroyed$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.finalize)(() => {
        this.publishing = false;
      })).subscribe(res => res.success ? handleSuccessResponse() : handleErrorResponse(), e => {
        handleErrorResponse();
      });
    }
  }
  rejectComment(payload) {
    if (!this.isValid()) {
      return;
    }
    const handleErrorResponse = () => {
      this.toastr.error(this.translateService.instant(`admin.comment.toast.rejected.error.title`), this.translateService.instant('admin.comment.toast.rejected.error.subtitle'));
      this.rejecting = false;
      this.cd.markForCheck();
    };
    this.commentService.rejectCommentModerator(this.reply.id, payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.catchError)(e => (0,rxjs__WEBPACK_IMPORTED_MODULE_32__.throwError)({
      error: e
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.takeUntil)(this.destroyed$)).subscribe(res => {
      if (res.success) {
        this.toastr.success(this.translateService.instant(`admin.comment.toast.rejected.success.title`), this.translateService.instant('admin.comment.toast.rejected.success.subtitle'));
        this.router.navigate([this.backUrl], {
          queryParams: {
            processedReplyId: this.reply.id
          }
        });
      } else {
        handleErrorResponse();
      }
    }, () => {
      handleErrorResponse();
    });
  }
  showStoryDetails($event) {
    $event.preventDefault();
    $event.stopPropagation();
    this.asideService.openAside(this.storyPreviewRef, {
      position: _shared_components_aside_aside_service__WEBPACK_IMPORTED_MODULE_4__.AsidePosition.RIGHT
    });
    this.cd.markForCheck();
  }
  hideDetailsPanel() {
    this.asideService.closeAside();
    this.cd.markForCheck();
  }
  previewLoadingError() {
    this.toastr.error(this.translateService.instant(`admin.comment.toast.preview.error.title`), this.translateService.instant('admin.comment.toast.preview.error.subtitle'));
    this.hideDetailsPanel();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this.hideDetailsPanel();
  }
  handleLanguageChange(value) {
    if (value === this.reply.language || !value) {
      return;
    }
    this.switchingLanguage = true;
    this.commentService.updateCommentModerator(this.reply.id, {
      thematics: this.commentForm.value.thematics,
      language: value,
      solution_proposed: this.solutionProposed
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.finalize)(() => this.switchingLanguage = false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.catchError)(error => {
      this.showErrorNotification();
      throw error;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.takeUntil)(this.destroyed$)).subscribe(() => {
      this.reply.language = value;
      this.setup(this.reply.id, this.reply.translations, this.reply.language);
      this.initLanguages();
      this.refreshTranslations('', 5);
    });
  }
  handleLanguageDismiss() {
    this.reply.language = null;
  }
  ngAfterViewInit() {
    this.enableFixedPositioning();
  }
  enableFixedPositioning() {
    this.fixedElementData = {
      containerElement: this.storyReviewContainerElement.nativeElement,
      documentTopPadding: 70,
      fixedElement: this.storyDetailsElement.nativeElement,
      fixedElementPadding: 32
    };
    this.ui.mobileView$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.takeUntil)(this.destroyed$)).subscribe(isMobile => {
      setTimeout(() => this.fixedPositioning.positionFixedElement(this.fixedElementData, isMobile), 0);
    });
  }
  isValid() {
    if (this.reply.language && this.reply.thematics.length) {
      return true;
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
  getMetadata() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_33__.combineLatest)([this.metaDataService.thematicAreas$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.takeUntil)(this.destroyed$)).subscribe(([thematic]) => {
      const processedData = {
        data: thematic.map(tx => {
          tx.checked = false;
          tx.children.forEach(child => {
            child.parentId = tx.code;
            child.checked = false;
          });
          return tx;
        })
      };
      this.thematicAreaDataNew$.next(processedData);
    });
  }
  handleThematicChange() {
    this.reply.thematics = this.commentForm.value.thematics;
  }
  get selectedThematics() {
    if (!this.thematicOptions) {
      return [];
    }
    const ids = this.reply.thematics || [];
    const children = this.thematicOptions.reduce((acc, area) => [...acc, ...area.children], []);
    return ids.map(id => children.find(option => option.value === id)).filter(option => !!option).map(option => ({
      id: option.value,
      content: option.content
    }));
  }
  dismissThematicArea(id) {
    const updatedThematics = this.reply.thematics.filter(thematicId => thematicId !== id);
    this.reply = {
      ...this.reply,
      thematics: updatedThematics
    };
    this.commentForm.get('thematics').setValue(this.reply.thematics);
  }
  thematicAreaOutsideClick() {
    this.commentForm.get('thematics').setValue(this.reply.thematics);
    this.resetThematics$.next(true);
  }
  ngOnInit() {
    this.setThematics();
    this.replyDetailsService.reply.subscribe(reply => {
      this.reply = reply;
      this.solutionProposed = reply.solution_proposed;
      this.setAudioToTranscribe();
      this.publishButtonLabel = this.translateService.instant(this.isVoiceStory ? 'admin.pendingReplyReview.publishAndForwardToVoiceRecord' : 'admin.pendingReplyReview.publishReply');
      this.ngOnChanges(null);
    });
    this.commentForm.get('thematics').setValue(this.replyDetailsService.thematics);
  }
  setThematics() {
    this.thematicOptions = this.replyDetailsService.thematicsMetaData.map(thematic => ({
      value: thematic.id,
      content: this.translateService.instant(thematic.code),
      children: thematic.children.map(child => ({
        content: this.translateService.instant(child.code),
        value: child.id
      }))
    }));
  }
  setAudioToTranscribe() {
    this.replyDetailsService.s3fileUrl.subscribe(fileUrl => {
      this.audioSrc$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_34__.of)(fileUrl);
    });
  }
  solutionProposedChanged(solutionProposed) {
    this.solutionProposed = solutionProposed;
  }
  static #_ = this.ɵfac = function ReplyReviewAndTranslateComponent_Factory(t) {
    return new (t || ReplyReviewAndTranslateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_core_services_locales_supported_languages_service__WEBPACK_IMPORTED_MODULE_5__.SupportedLanguagesService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_35__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_36__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_app_modules_inbox_replies_reply_details_reply_details_service__WEBPACK_IMPORTED_MODULE_6__.ReplyDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_shared_components_aside_aside_service__WEBPACK_IMPORTED_MODULE_4__.AsideService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_24__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_core_services_api_comment_comment_service__WEBPACK_IMPORTED_MODULE_7__.CommentService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_core_services_fixed_positioning_fixed_positioning__WEBPACK_IMPORTED_MODULE_8__.FixedPositioning), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_core_services_modal_modal_v2_service__WEBPACK_IMPORTED_MODULE_9__.ModalServiceV2), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_37__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_37__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_app_core_services_api_meta_data_meta_data_service__WEBPACK_IMPORTED_MODULE_10__.MetaDataService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_core_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_11__.UIService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineComponent"]({
    type: ReplyReviewAndTranslateComponent,
    selectors: [["app-reply-review-and-translate"]],
    viewQuery: function ReplyReviewAndTranslateComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_c2, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.storyPreviewRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.storyReviewContainerElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.storyDetailsElement = _t.first);
      }
    },
    hostBindings: function ReplyReviewAndTranslateComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("scroll", function ReplyReviewAndTranslateComponent_scroll_HostBindingHandler($event) {
          return ctx.onWindowScroll($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵresolveWindow"])("resize", function ReplyReviewAndTranslateComponent_resize_HostBindingHandler($event) {
          return ctx.onWindowResize($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵresolveWindow"]);
      }
    },
    inputs: {
      reply: "reply",
      rejectButtonLabel: "rejectButtonLabel",
      backUrl: "backUrl"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵNgOnChangesFeature"]],
    decls: 34,
    vars: 38,
    consts: [[1, "review-form"], ["storyReviewContainer", ""], [1, "story-details"], ["storyDetails", ""], [1, "review-form__wrapper"], [4, "ngIf", "ngIfElse"], ["postSkeleton", ""], [1, "story-review__content", "review-form__form", "overflow-hidden"], [1, "f-column", "w-100"], [1, "translations-controller", "mt-3125"], [1, "d-flex", "f-column", "mb-1"], ["class", "d-flex flex-center", 4, "ngIf"], [1, "flex-grow-1"], ["dropdownWidth", "auto", 1, "form__section", 3, "heading", "isValid", "requiredValidationError", "required", "selectedItems", "apply", "dismiss", "outsideClicked"], ["controlName", "thematics", 3, "filterData", "form", "isModal", "reset$", 4, "ngIf"], ["slot", "helptext", "cy", "pending-reply-review-language-error", "class", "review-form__form__error", 4, "ngIf"], [1, "solution-proposed"], [3, "checked", "text", "changed$"], [1, "thread-preview__separator"], [3, "singleValue", "heading", "required", "isValid", "selectedItems", "requiredValidationError", "dismiss", "apply"], [3, "placeholder", "existingOptions", "formControl", 4, "ngIf"], ["formSkeleton", ""], [3, "processing", "initialTranslations", "selectedLanguage", "selectedLanguageContent", "originalLanguage", "languagesChanged", "verifyTranslation", "deleteTranslation", "retryTranslation", 4, "ngIf"], [3, "saveButtonLabel", "cancelButtonLabel", "performingSaveAction", "performingCancelAction", "disableSaveAction", "showStepControls", "noNextIcon", "cancel", "save"], ["storyPreview", ""], [1, "review-form__header", 3, "post", "underlined"], [1, "story-details__paragraph"], [3, "audioSrc", 4, "ngIf"], [1, "thread-preview", "mt-1h"], ["href", "javascript:void(0)", 3, "click"], ["class", "thread-preview__language text-small text-gray ml-0-375", 4, "ngIf"], [3, "audioSrc"], [1, "thread-preview__language", "text-small", "text-gray", "ml-0-375"], [1, "post-skeleton"], [3, "lines"], [1, "d-flex", "flex-center"], ["controlName", "thematics", 3, "filterData", "form", "isModal", "reset$"], ["slot", "helptext", "cy", "pending-reply-review-language-error", 1, "review-form__form__error"], [3, "placeholder", "existingOptions", "formControl"], ["class", "content-translation-step", 3, "processing", "languagesOptions", "targetLanguage", "translatedText", "originalLanguage", "translatedTextChange", "targetLanguageChange", "submitTranslation", "closeClicked", 4, "ngIf"], [1, "content-translation-step", 3, "processing", "languagesOptions", "targetLanguage", "translatedText", "originalLanguage", "translatedTextChange", "targetLanguageChange", "submitTranslation", "closeClicked"], [1, "form-skeleton"], [3, "processing", "initialTranslations", "selectedLanguage", "selectedLanguageContent", "originalLanguage", "languagesChanged", "verifyTranslation", "deleteTranslation", "retryTranslation"], [1, "panel-content"], [1, "flex-right-end"], ["src", "assets/icons/close_green.svg", 1, "preview-heading-close", 3, "alt", "click"], [1, "d-flex-space-between", "preview-heading-box"], [3, "id", "channel", "forceExpanded", "embed", "showActions", "showForm", "showReplies", "forceInfoWithin", "showStoryInfo", "loadingError", 4, "ngIf"], [3, "id", "channel", "forceExpanded", "embed", "showActions", "showForm", "showReplies", "forceInfoWithin", "showStoryInfo", "loadingError"]],
    template: function ReplyReviewAndTranslateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "article", 0, 1)(2, "div", 2, 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](5, ReplyReviewAndTranslateComponent_ng_container_5_Template, 11, 8, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](6, ReplyReviewAndTranslateComponent_ng_template_6_Template, 2, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](12, ReplyReviewAndTranslateComponent_app_inline_loading_12_Template, 1, 0, "app-inline-loading", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](13, "div", 12)(14, "app-form-section", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("apply", function ReplyReviewAndTranslateComponent_Template_app_form_section_apply_14_listener() {
          return ctx.handleThematicChange();
        })("dismiss", function ReplyReviewAndTranslateComponent_Template_app_form_section_dismiss_14_listener($event) {
          return ctx.dismissThematicArea($event);
        })("outsideClicked", function ReplyReviewAndTranslateComponent_Template_app_form_section_outsideClicked_14_listener() {
          return ctx.thematicAreaOutsideClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](16, ReplyReviewAndTranslateComponent_loop_checkbox_filter_wrapper_grouped_16_Template, 1, 4, "loop-checkbox-filter-wrapper-grouped", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](18, ReplyReviewAndTranslateComponent_div_18_Template, 3, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](19, "div", 16)(20, "app-slide-toggle", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("changed$", function ReplyReviewAndTranslateComponent_Template_app_slide_toggle_changed__20_listener($event) {
          return ctx.solutionProposedChanged($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](23, "app-form-section", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("dismiss", function ReplyReviewAndTranslateComponent_Template_app_form_section_dismiss_23_listener() {
          return ctx.handleLanguageDismiss();
        })("apply", function ReplyReviewAndTranslateComponent_Template_app_form_section_apply_23_listener() {
          return ctx.handleLanguageChange(ctx.languageControl.value);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](25, ReplyReviewAndTranslateComponent_loop_language_autocomplete_25_Template, 2, 5, "loop-language-autocomplete", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](26, ReplyReviewAndTranslateComponent_div_26_Template, 3, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](27, ReplyReviewAndTranslateComponent_ng_container_27_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](28, ReplyReviewAndTranslateComponent_ng_template_28_Template, 2, 1, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](30, ReplyReviewAndTranslateComponent_app_post_translation_controller_30_Template, 1, 5, "app-post-translation-controller", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](31, "app-actions-footer", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("cancel", function ReplyReviewAndTranslateComponent_Template_app_actions_footer_cancel_31_listener() {
          return ctx.handleRejectClick();
        })("save", function ReplyReviewAndTranslateComponent_Template_app_actions_footer_save_31_listener() {
          return ctx.publishReply();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](32, ReplyReviewAndTranslateComponent_ng_template_32_Template, 9, 7, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵreference"](7);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵreference"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx.reply)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx.switchingLanguage);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("heading", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](15, 30, "filters.thematic"))("isValid", !!(ctx.reply == null ? null : ctx.reply.thematics.length))("requiredValidationError", ctx.isSubmitted)("required", true)("selectedItems", ctx.selectedThematics);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](17, 32, ctx.thematicAreaDataNew$));
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", !(ctx.reply == null ? null : ctx.reply.thematics.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("checked", ctx.solutionProposed)("text", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](21, 34, "admin.comment.solutionProposedButton"));
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("singleValue", true)("heading", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](24, 36, "admin.pendingStoryReview.originalLanguage"))("required", true)("isValid", !!ctx.reply.language)("selectedItems", ctx.replyLanguagePill)("requiredValidationError", ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx.reply);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", !(ctx.reply == null ? null : ctx.reply.language));
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx.reply)("ngIfElse", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx.reply);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("saveButtonLabel", ctx.publishButtonLabel)("cancelButtonLabel", ctx.rejectButtonLabel)("performingSaveAction", ctx.publishing)("performingCancelAction", ctx.rejecting)("disableSaveAction", ctx.disablePublishAction)("showStepControls", false)("noNextIcon", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_38__.NgIf, _shared_components_actions_footer_actions_footer_component__WEBPACK_IMPORTED_MODULE_12__.ActionsFooterComponent, _shared_components_filters_section_v2_checkbox_filter_wrapper_grouped_checkbox_filter_wrapper_grouped_component__WEBPACK_IMPORTED_MODULE_13__.CheckboxFilterWrapperGroupedComponent, _shared_components_content_translation_step_content_translation_step_component__WEBPACK_IMPORTED_MODULE_14__.ContentTranslationStepComponent, _shared_components_form_section_form_section_component__WEBPACK_IMPORTED_MODULE_15__.FormSectionComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.NgControlStatus, _shared_components_language_autocomplete_language_autocomplete_component__WEBPACK_IMPORTED_MODULE_16__.LanguageAutocompleteComponent, _shared_components_post_partials_post_author_date_flat_post_author_date_flat_component__WEBPACK_IMPORTED_MODULE_17__.PostAuthorDateFlatComponent, _shared_components_post_translation_controller_post_translation_controller_component__WEBPACK_IMPORTED_MODULE_18__.PostTranslationControllerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormControlDirective, _shared_components_story_with_comments_story_with_comments_component__WEBPACK_IMPORTED_MODULE_19__.StoryWithCommentsComponent, _shared_components_skeleton_text_skeleton_text_component__WEBPACK_IMPORTED_MODULE_20__.SkeletonTextComponent, _shared_components_audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_21__.AudioPlayerComponent, _shared_components_slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_22__.SlideToggleComponent, _shared_components_inline_loading_inline_loading_component__WEBPACK_IMPORTED_MODULE_23__.InlineLoadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_38__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_36__.TranslatePipe],
    styles: ["@charset \"UTF-8\";\n\n.semi-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.bold[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n\n.capitalize[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n\n.body-default[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5rem;\n  letter-spacing: normal;\n  color: #000000;\n}\n\n.small-info-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: #31135e;\n}\n\n.subheading[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: #31135e;\n}\n\n.body-caption[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: 1.2px;\n  text-transform: uppercase;\n  color: #31135e;\n}\n\n[_nghost-%COMP%] {\n  background: #ffffff;\n  border-radius: 8px;\n}\n[_nghost-%COMP%]     .wizard__title {\n  text-transform: capitalize;\n}\n\n.story-details[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 8px;\n}\n@media (max-width: 767.9px) {\n  .story-details[_ngcontent-%COMP%] {\n    border-radius: unset;\n  }\n}\n\n.translations-controller[_ngcontent-%COMP%] {\n  margin-top: 1.875rem;\n}\n@media (min-width: 768px) {\n  .translations-controller[_ngcontent-%COMP%] {\n    margin-top: 3.125rem;\n  }\n}\n\n.arrow-icon[_ngcontent-%COMP%] {\n  transform: translateY(0.1875rem);\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: #31135e;\n  font-weight: bold;\n  margin-bottom: 1rem;\n}\n\na[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: #107d79;\n}\n\n.panel-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: #31135e;\n  font-weight: bold;\n  margin-bottom: 1.5rem;\n}\n.panel-content[_ngcontent-%COMP%]   .preview-heading-close[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 1.25rem;\n  background: #ffffff;\n  border-radius: 50%;\n}\n\n.review-form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n}\n@media screen and (max-width: 767.9px) {\n  .review-form[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n@media screen and (min-width: 768px) {\n  .review-form[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n.review-form__wrapper[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  padding: 1.25rem;\n}\n@media (min-width: 768px) {\n  .review-form__wrapper[_ngcontent-%COMP%] {\n    padding: 3.75rem;\n  }\n}\n.review-form__form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  background-color: #fff;\n}\n.review-form__form__error[_ngcontent-%COMP%] {\n  color: #da1e28;\n  font-size: 0.75rem;\n}\n@media (min-width: 768px) {\n  .review-form__form[_ngcontent-%COMP%] {\n    width: calc(50% - 0.625rem);\n    flex-direction: row;\n    flex: unset;\n    border-radius: pxToRem(16);\n  }\n  html:not([dir=rtl])[_nghost-%COMP%]   .review-form__form[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .review-form__form[_ngcontent-%COMP%] {\n    margin-left: calc(50% + 1.25rem);\n  }\n  html[dir=rtl][_nghost-%COMP%]   .review-form__form[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .review-form__form[_ngcontent-%COMP%] {\n    margin-right: calc(50% + 1.25rem);\n  }\n}\n\n.stepper-section[_ngcontent-%COMP%] {\n  transition: box-shadow 0.4s ease-in-out;\n  padding: 1.625rem 2rem;\n}\n.stepper-section.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.15);\n}\n.stepper-section.shadow-none[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n\n@media screen and (min-width: 768px) {\n  html:not([dir=rtl])[_nghost-%COMP%]   .review-spacer[_ngcontent-%COMP%], html:not([dir=rtl])   [_nghost-%COMP%]   .review-spacer[_ngcontent-%COMP%] {\n    border-right: 1px solid #cccccc;\n  }\n  html[dir=rtl][_nghost-%COMP%]   .review-spacer[_ngcontent-%COMP%], html[dir=rtl]   [_nghost-%COMP%]   .review-spacer[_ngcontent-%COMP%] {\n    border-left: 1px solid #cccccc;\n  }\n}\n@media screen and (max-width: 767.9px) {\n  .review-spacer[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #cccccc;\n    margin-bottom: 2rem;\n    padding-bottom: 2rem;\n  }\n}\n\n.spacer[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 1.25rem;\n}\n@media screen and (max-width: 767.9px) {\n  .spacer[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n  .post-skeleton p {\n  height: 1.5rem;\n}\n  .post-skeleton p:first-child {\n  height: 2rem;\n}\n  .form-skeleton {\n  padding-top: 1.5rem;\n}\n  .form-skeleton p:last-child {\n  height: 20rem;\n}\n  .form-skeleton p:first-child {\n  height: 3rem;\n}\n\n.loading-indicator[_ngcontent-%COMP%] {\n  width: 0;\n}\n\n.thread-preview[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.thread-preview[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: inherit;\n  font-weight: 600;\n}\n@media (min-width: 768px) {\n  .thread-preview[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n.thread-preview__separator[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  width: calc(100% + 2 * 1.25rem);\n  background-color: #e9e9e9;\n  margin: 1.25rem -1.25rem 1.5rem;\n}\n@media (min-width: 768px) {\n  .thread-preview__separator[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 2.5rem 0;\n  }\n}\n.thread-preview__language[_ngcontent-%COMP%]:before {\n  content: \"\u2022\";\n  margin: 0 0.625rem;\n}\n\n.story-details__paragraph[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n@media (min-width: 768px) {\n  .story-details__paragraph[_ngcontent-%COMP%] {\n    margin-top: 1.875rem;\n    font-size: 1.25rem;\n  }\n}\n\n.content-translation-step[_ngcontent-%COMP%] {\n  display: block;\n  padding-bottom: 1.875rem;\n}\n@media (min-width: 768px) {\n  .content-translation-step[_ngcontent-%COMP%] {\n    padding-bottom: 3.75rem;\n  }\n}\n\napp-audio-player[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.solution-proposed[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcGx5LXJldmlldy1hbmQtdHJhbnNsYXRlLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL190eXBvZ3JhcGh5LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7O0VBQUE7QUE0REE7RUFDRSxnQkFBQTtBRHZERjs7QUMwREE7RUFDRSxnQkFBQTtBRHZERjs7QUMwREE7RUFDRSwwQkFBQTtBRHZERjs7QUMwREE7RUEvREUsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBRFNGOztBQ3FEQTtFQTFERSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNDWmdCO0FGcUJsQjs7QUM4Q0E7RUFuREUsa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0N0QmdCO0FGK0JsQjs7QUN3Q0E7RUE3Q0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQ2pDZ0I7QUYwQ2xCOztBQW5EQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFzREY7QUFwREk7RUFDRSwwQkFBQTtBQXNETjs7QUFqREE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBb0RGO0FHbUhFO0VIektGO0lBSUksb0JBQUE7RUFzREY7QUFDRjs7QUFuREE7RUFDRSxvQkFBQTtBQXNERjtBR3NIRTtFSDdLRjtJQUlJLG9CQUFBO0VBdURGO0FBQ0Y7O0FBcERBO0VBQ0UsZ0NBQUE7QUF1REY7O0FBcERBO0VDTEUsa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0N0QmdCO0VGdUJoQixpQkFBQTtFQUNBLG1CQUFBO0FBNkRGOztBQTFEQTtFQ1VFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQ0lvQjtBRmdEdEI7O0FBaEVFO0VDaEJBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNDdEJnQjtFRmtDZCxpQkFBQTtFQUNBLHFCQUFBO0FBeUVKO0FBdkVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQXlFSjs7QUFyRUE7RUFDRSxhQUFBO0VBQ0Esb0RBQUE7QUF3RUY7QUF0RUU7RUFKRjtJQUtJLHFDQUFBO0VBeUVGO0FBQ0Y7QUF2RUU7RUFSRjtJQVNJLGFBQUE7RUEwRUY7QUFDRjtBQXhFRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUEwRUo7QUdpREU7RUg3SEE7SUFLSSxnQkFBQTtFQTJFSjtBQUNGO0FBeEVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQTBFSjtBQXhFSTtFQUNFLGNFbkRPO0VGb0RQLGtCQUFBO0FBMEVOO0FHa0NFO0VIcEhBO0lBYUksMkJBQUE7SUFDQSxtQkFBQTtJQUNBLFdBQUE7SUFDQSwwQkFBQTtFQXlFSjtFRzlIQTtJQTBDSSxnQ0hPcUI7RUFnRnpCO0VHM0hBO0lBd0NJLGlDSEdxQjtFQW1GekI7QUFDRjs7QUEzRUE7RUFDRSx1Q0FBQTtFQUNBLHNCQUFBO0FBOEVGO0FBNUVFO0VBQ0UsNENBQUE7QUE4RUo7QUE1RUk7RUFDRSxnQkFBQTtBQThFTjs7QUF4RUU7RUd4RUE7SUEwQ0ksK0JIK0JvQjtFQTRFeEI7RUcvSUE7SUF3Q0ksOEJIMkJvQjtFQStFeEI7QUFDRjtBQTdFRTtFQUxGO0lBTUksZ0NBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0VBZ0ZGO0FBQ0Y7O0FBN0VBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFnRkY7QUE5RUU7RUFKRjtJQUtJLGFBQUE7RUFpRkY7QUFDRjs7QUE1RUk7RUFDRSxjQUFBO0FBK0VOO0FBN0VNO0VBQ0UsWUFBQTtBQStFUjtBQTFFRTtFQUNFLG1CQUFBO0FBNEVKO0FBekVNO0VBQ0UsYUFBQTtBQTJFUjtBQXhFTTtFQUNFLFlBQUE7QUEwRVI7O0FBcEVBO0VBQ0UsUUFBQTtBQXVFRjs7QUFwRUE7RUFDRSxrQkFBQTtBQXVFRjtBQXJFRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUF1RUo7QUc3Q0U7RUgvQkY7SUFTSSxlQUFBO0VBdUVGO0FBQ0Y7QUFyRUU7RUFFRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EseUJFakZXO0VGa0ZYLCtCQUFBO0FBc0VKO0FHekRFO0VIbkJBO0lBU0ksV0FBQTtJQUNBLGdCQUFBO0VBdUVKO0FBQ0Y7QUFwRUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFzRUo7O0FBbEVBO0VBQ0UsZUFBQTtBQXFFRjtBR3ZFRTtFSENGO0lBSUksb0JBQUE7SUFDQSxrQkFBQTtFQXNFRjtBQUNGOztBQW5FQTtFQUNFLGNBQUE7RUFDQSx3QkFBQTtBQXNFRjtBR2xGRTtFSFVGO0lBS0ksdUJBQUE7RUF1RUY7QUFDRjs7QUFwRUE7RUFDRSxnQkFBQTtBQXVFRjs7QUFwRUE7RUFDRSxnQkFBQTtBQXVFRiIsImZpbGUiOiJyZXBseS1yZXZpZXctYW5kLXRyYW5zbGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICdtaXhpbnMnO1xuQGltcG9ydCAndHlwb2dyYXBoeSc7XG5cbjpob3N0IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICA6Om5nLWRlZXAge1xuICAgIC53aXphcmRfX3RpdGxlIHtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIH1cbiAgfVxufVxuXG4uc3RvcnktZGV0YWlscyB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgIGJvcmRlci1yYWRpdXM6IHVuc2V0O1xuICB9XG59XG5cbi50cmFuc2xhdGlvbnMtY29udHJvbGxlciB7XG4gIG1hcmdpbi10b3A6IDEuODc1cmVtO1xuXG4gIEBpbmNsdWRlIG1vYmlsZS11cCB7XG4gICAgbWFyZ2luLXRvcDogMy4xMjVyZW07XG4gIH1cbn1cblxuLmFycm93LWljb24ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYygwLjc1cmVtIC8gNCkpO1xufVxuXG5oMyB7XG4gIEBpbmNsdWRlIHN1YmhlYWRpbmc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG5hIHtcbiAgQGluY2x1ZGUgbGluay1ncmVlbjtcbn1cblxuLnBhbmVsLWNvbnRlbnQge1xuICBoMiB7XG4gICAgQGluY2x1ZGUgc3ViaGVhZGluZztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIH1cbiAgLnByZXZpZXctaGVhZGluZy1jbG9zZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDEuMjVyZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbn1cblxuLnJldmlldy1mb3JtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKSBtaW5tYXgoMCwgMWZyKTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1tZCAtIDAuMXB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKTtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1kKSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gICZfX3dyYXBwZXIge1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgcGFkZGluZzogMS4yNXJlbTtcblxuICAgIEBpbmNsdWRlIG1vYmlsZS11cCB7XG4gICAgICBwYWRkaW5nOiAzLjc1cmVtO1xuICAgIH1cbiAgfVxuXG4gICZfX2Zvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cbiAgICAmX19lcnJvciB7XG4gICAgICBjb2xvcjogJHN1cHBvcnQtMDE7XG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbW9iaWxlLXVwIHtcbiAgICAgIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KGNhbGMoNTAlICsgMS4yNXJlbSkpO1xuICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMC42MjVyZW0pO1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZsZXg6IHVuc2V0O1xuICAgICAgYm9yZGVyLXJhZGl1czogcHhUb1JlbSgxNik7XG4gICAgfVxuICB9XG59XG5cbi5zdGVwcGVyLXNlY3Rpb24ge1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNHMgZWFzZS1pbi1vdXQ7XG4gIHBhZGRpbmc6IDEuNjI1cmVtIDJyZW07XG5cbiAgJi5zaGFkb3cge1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuXG4gICAgJi1ub25lIHtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi5yZXZpZXctc3BhY2VyIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIHtcbiAgICBAaW5jbHVkZSBib3JkZXItcmlnaHQoMXB4IHNvbGlkICRib3JkZXItZ3JheSk7XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1tZCAtIDAuMSkge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyLWdyYXk7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgfVxufVxuXG4uc3BhY2VyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMS4yNXJlbTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1tZCAtIDAuMXB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG46Om5nLWRlZXAge1xuICAucG9zdC1za2VsZXRvbiB7XG4gICAgcCB7XG4gICAgICBoZWlnaHQ6IDEuNXJlbTtcblxuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZm9ybS1za2VsZXRvbiB7XG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcblxuICAgIHAge1xuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgaGVpZ2h0OiAyMHJlbTtcbiAgICAgIH1cblxuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmxvYWRpbmctaW5kaWNhdG9yIHtcbiAgd2lkdGg6IDA7XG59XG5cbi50aHJlYWQtcHJldmlldyB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcblxuICBhIHtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG4gIEBpbmNsdWRlIG1vYmlsZS11cCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG5cbiAgJl9fc2VwYXJhdG9yIHtcbiAgICAkc2lkZU1hcmdpbjogMS4yNXJlbTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMiAqICN7JHNpZGVNYXJnaW59KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JleS04O1xuICAgIG1hcmdpbjogMS4yNXJlbSAoLSRzaWRlTWFyZ2luKSAxLjVyZW07XG5cbiAgICBAaW5jbHVkZSBtb2JpbGUtdXAge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW46IDIuNXJlbSAwO1xuICAgIH1cbiAgfVxuXG4gICZfX2xhbmd1YWdlOmJlZm9yZSB7XG4gICAgY29udGVudDogJ+KAoic7XG4gICAgbWFyZ2luOiAwIDAuNjI1cmVtO1xuICB9XG59XG5cbi5zdG9yeS1kZXRhaWxzX19wYXJhZ3JhcGgge1xuICBmb250LXNpemU6IDFyZW07XG5cbiAgQGluY2x1ZGUgbW9iaWxlLXVwIHtcbiAgICBtYXJnaW4tdG9wOiAxLjg3NXJlbTtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cbn1cblxuLmNvbnRlbnQtdHJhbnNsYXRpb24tc3RlcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLWJvdHRvbTogMS44NzVyZW07XG5cbiAgQGluY2x1ZGUgbW9iaWxlLXVwIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMy43NXJlbTtcbiAgfVxufVxuXG5hcHAtYXVkaW8tcGxheWVyIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLnNvbHV0aW9uLXByb3Bvc2Vke1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuIiwiLyoqXG4qIFRoaXMgZmlsZSBjb250YWlucyBtaXhpbnMgYW5kIGNsYXNzZXMgZm9yIHRoZSBuZXcgZGVzaWducyBzeXN0ZW0gdHlwb2dyYXBoeS5cbiAqL1xuXG5AbWl4aW4gc3RhbmRhcmQtZm9udC1mYW1pbHkoJHN1ZmZpeDogbnVsbCkge1xuICBmb250LWZhbWlseTogJHN0YW5kYXJkRm9udEZhbWlseSAkc3VmZml4O1xufVxuXG5AbWl4aW4gYm9keS1kZWZhdWx0IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuQG1peGluIHNtYWxsLWluZm8tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICRjb2xvci1wdXJwbGUtOTA7XG59XG5cbkBtaXhpbiBzdWJoZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogJGNvbG9yLXB1cnBsZS05MDtcbn1cblxuQG1peGluIGJvZHktY2FwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogJGNvbG9yLXB1cnBsZS05MDtcbn1cblxuQG1peGluIGxpbmstZ3JlZW4ge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAkbG9vcC1pbnRlcmFjdGl2ZS0wMTtcbn1cblxuLnNlbWktYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLmNhcGl0YWxpemUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmJvZHktZGVmYXVsdCB7XG4gIEBpbmNsdWRlIGJvZHktZGVmYXVsdDtcbn1cblxuLnNtYWxsLWluZm8tdGV4dCB7XG4gIEBpbmNsdWRlIHNtYWxsLWluZm8tdGV4dDtcbn1cblxuLnN1YmhlYWRpbmcge1xuICBAaW5jbHVkZSBzdWJoZWFkaW5nO1xufVxuXG4uYm9keS1jYXB0aW9uIHtcbiAgQGluY2x1ZGUgYm9keS1jYXB0aW9uO1xufVxuIiwiJHN0YW5kYXJkRm9udEZhbWlseTogJ05vdG8gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGNvbnRlbnQtdG9wLXBhZGRpbmc6IDNyZW07XG4kcG9zdC1saXN0LWJnOiAjZGFkYWRhO1xuJHdoaXRlOiAjZmZmZmZmO1xuJHBvc3QtcHJldmlldy1iZzogd2hpdGU7XG4kbGlnaHQtZ3JheS1iZzogI2Y0ZjRmNDtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1sZWZ0OiAyLjM0NHJlbTtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1yaWdodDogMS4wNjNyZW07XG4kcG9zdC1wcmV2aWV3LXBhZGRpbmc6IDIuNXJlbSAkcG9zdC1wcmV2aWV3LXBhZGRpbmctcmlnaHQgMS4yNXJlbSAkcG9zdC1wcmV2aWV3LXBhZGRpbmctbGVmdDtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1tb2JpbGU6IDFyZW0gMXJlbSAwLjVyZW0gMXJlbTtcbiRwb3N0LXBhZGRpbmctYm90dG9tOiAxcmVtO1xuJHBvc3QtcHJldmlldy1ndXR0ZXI6IDJweDtcbiRwb3N0LWhpZ2hsaWdodC1jb2xvcjogIzU3MGY4NTtcbiRjb2xvci1wdXJwbGUtOTA6ICMzMTEzNWU7XG4kY29sb3ItcHVycGxlLTYwOiAjOTg4YWFlO1xuJGNvbG9yLXB1cnBsZS01MDogIzk4ODlhZjtcbiRjb2xvci1wdXJwbGUtMTA6ICNmNWYzZjc7XG4kY29sb3ItcHVycGxlLWxpZ2h0OiAjNGIzNWJjO1xuJGNvbG9yLXB1cnBsZS12ZXJ5LWxpZ2h0OiAjODY2YWIwO1xuJGNvbG9yLXB1cnBsZS1zdGVwcGVyOiAjNGEyYjdhO1xuJGNvbG9yLWdyZWVuLTEwMDogIzA1MjgwNDtcbiRjb2xvci1ncmVlbi05MDogIzBkM2QwYjtcbiRjb2xvci1ncmVlbi04MDogIzFmNmIxZTtcbiRjb2xvci1ncmVlbi03MDogIzM1OGEzNDtcbiRjb2xvci1ncmVlbi02MDogIzZkOWE2ZTtcbiRjb2xvci1ncmVlbi01MDogIzg5YTg4ZjtcbiRjb2xvci1ncmVlbi00MDogIzlmYzhhNjtcbiRjb2xvci1ncmVlbi0zMDogI2FhZDZiMztcbiRjb2xvci1ncmVlbi0yMDogI2M5ZTlkMTtcbiRjb2xvci1ncmVlbi0xMDogI2YzZjdmMztcbiRjb2xvci1ncmVlbi1zdGVwcGVyOiAjMTA3RDc5O1xuJGNvbG9yLWdyZWVuLW1lZGl1bTogI2FkZGFhZjtcbiRjb2xvci1ncmVlbi1saWdodDogIzNBQjA5ODtcbiRjb2xvci1ncmVlbi12ZXJ5LWxpZ2h0OiAjRURGRkZDO1xuJGdyZXktMTogI2Q2ZDBkZjtcbiRzdXBwb3J0LTAxOiAjZGExZTI4O1xuJGVycm9yOiAjZWUyMzJmO1xuJHRleHQtYmxhY2s6ICMxNjE2MTY7XG4kdGV4dC1zZWNvbmRhcnk6ICMzOTM5Mzk7XG4kdGV4dC1ncmF5ZWQ6ICM1MjUyNTI7XG4kdGV4dC1ncmF5ZWQ4MDogIzhmOGI4YjtcbiR0ZXh0LWdyYXktY2F0OiAjNmQ3Mjc4O1xuJHVpLWJhY2tncm91bmQtZ3JheTogI2Y4ZjhmOTtcbiRib3JkZXI6ICNlOGU3ZWE7XG4kZW50aXR5LWJvcmRlci1jb2xvcjogIzFjMGYzMDIxO1xuJGxvYWRpbmctYmc6IHJnYigwIDAgMCAvIDE4JSk7XG4kc3VwcG9ydC0wNDogIzAwNDNjZTtcbiRsb29wLXVzZXJuYW1lOiAjMTk4MDM4O1xuJGxvb3AtYWN0aXZlLWN1cnJlbnQtdXNlcjogIzI0YTE0ODtcbiR3YXJtLWdyYXktMTAtY29sb3I6ICNmN2YzZjI7XG4kd2FybS1ncmF5LTIwLWNvbG9yOiAjZTVlMGRmO1xuJGhlYWRpbmctMS1jb2xvcjogIzFjMGYzMDtcbiRoZWFkaW5nLTItY29sb3I6ICMzMjA3NGQ7XG4kaGVhZGluZy0zLWNvbG9yOiAjMmYyNzM1O1xuJG1vYmlsZS1pY29uLWNvbG9yOiAjMWMwZjMwO1xuJHN0YXRlLWRpc2FibGVkLTAyOiAjYzZjNmM2O1xuJGxpbmstMDI6ICM1NjAxYjI7XG4kaGVhZGVyLXB1cnBsZTogIzMxMTM1ZTtcbiRoZWFkZXItZ3JlZW46ICMxMDdkNzk7XG4kcHVycGxlLWxpZ2h0OiAjY2JjNGQ3O1xuJHB1cnBsZS1iYWNrZ3JvdW5kLWxpZ2h0OiAjZGNkNWU3O1xuJGxvb3AtaW50ZXJhY3RpdmUtMDE6ICMxMDdkNzk7XG4kbG9vcC1pbnRlcmFjdGl2ZS0wMS1vcGFjaXR5OiByZ2JhKDE2LCAxMjUsIDEyMSwgMC4zKTtcbiRmaWx0ZXJzLWdyZWVuOiAjMDU2NzYzO1xuLy8gQnJlYWtwb2ludHNcblxuJGJyZWFrcG9pbnQtczogMzc1cHg7XG4kYnJlYWtwb2ludC1zbTogNDIwcHg7XG4kYnJlYWtwb2ludC1tZDogNzY4cHg7XG4kYnJlYWtwb2ludC1sZzogMTA4MHB4O1xuJGJyZWFrcG9pbnQteGw6IDEyNzVweDtcblxuJGJyZWFrcG9pbnQtbWQtdjI6IDgyMHB4O1xuXG4kaGVhZGVyLWhlaWdodDogNC4zNzVyZW07XG4kaGVhZGVyLWhlaWdodC12MjogNC4zNzVyZW07XG4kc3RhdGUtc2VsZWN0ZWQtdWk6ICNlMGUwZTA7XG4kYy1sZWZ0LXBhZGRpbmc6IDEuNXJlbTtcbiRtZW51LWFjdGl2ZS1jb2xvcjogIzNBQjA5ODtcbiRtZW51LWhvdmVyLWNvbG9yOiAjM0FCMDk4O1xuJHRhYi1pbmFjdGl2ZS1jb2xvcjogIzg5YWY5MztcbiRsaW5lLWNvbG9yOiAjZDBkZmQyO1xuJGJvcmRlci1ncmF5OiAjY2NjY2NjO1xuJHRleHQtZ3JheTogIzgwODA4MDtcbiRiYXNlLWNvbnRhaW5lci13aWR0aDogODEuMTI0cmVtO1xuJGhlYWRlci11bmRlcmxpbmUtaGVpZ2h0OiAwLjMxM3JlbTtcblxuLy8gTW9kZXJhdG9yIHJldmlldyBzZWN0aW9uc1xuJGZvb3Rlci1oZWlnaHQ6IDRyZW07XG4kdG9wYmFyLWhlaWdodDogMTAuNXJlbTtcbiRzdGVwcGVyLWhlaWdodDogNi43cmVtO1xuXG4vLyBOZXcgU3RvcnkgZmxvdyAvIHN0b3J5IGRldGFpbHMgdmFyaWFibGVzXG4kZ3JleTogIzY1NjU2NTtcbiRsaWdodC1ncmV5LTI6ICNiMWI0YjY7XG4kbGlnaHQtZ3JleS0zOiAjYjRiNGI0O1xuJGxpZ2h0LWdyZXktNDogI2NmZDNkODtcbiRsaWdodC1ncmV5LTU6ICNkOWUwZTc7XG4kbGlnaHQtZ3JleS02OiAjZjFmMmYyO1xuJGxpZ2h0LWdyZXktNzogI2M0YzRjNDtcbiRsaWdodC1ncmV5LTg6ICNlOWU5ZTk7XG4kbGlnaHQtZ3JleS05OiAjZTZlYWVkO1xuJGxpZ2gtZ3JleS1zZXBhcmF0b3I6ICNjMGMwYzA7XG4kZGFyay1ncmV5OiAjMWExYTFhO1xuJGRhcmstZ3JleS01MDogcmdiKDI2LCAyNiwgMjYsIDAuNSk7XG4kYm9yZGVyLWdyZXk6ICNjN2NkZDQ7XG4kbGlnaHQtcHVycGxlOiAjZWFlYWVhO1xuJGlucHV0LWRpc2FibGVkLWJnOiAjZjRmNmY4O1xuJGVycm9yLTI6ICNkZTIyMmQ7XG4kZGFuZ2VyOiAjYzkzMDRkO1xuJHByZXZpb3VzLXBpbGwtY29sb3I6ICM3MThkNmY7XG4kdG9vbHRpcC1ncmV5OiAjYWJhYmFiO1xuJGxpZ2h0LWdyZWVuOiAjY2ZlNWU0NjY7XG5cbiRmaWx0ZXJzLW1vZGFsLWhlYWRlci16aW5kZXg6IDEwMDAwO1xuJG1vZGFsLXppbmRleDogOTk5OTtcbiRsb2NhdGlvbi1vdmVybGF5LXppbmRleDogOTAwMTtcbiRoZWFkZXItYXNpZGUtemluZGV4OiA4MDAyO1xuJGhlYWRlci1hc2lkZS1iYWNrZ3JvdW5kLXppbmRleDogODAwMTtcbiRoZWFkZXItemluZGV4OiA4MDAwO1xuJG5hdmlnYXRpb24temluZGV4OiA4MDAwO1xuJHBhZ2UtbG9hZGluZy16aW5kZXg6IDcwMDE7XG4kdG9vbHRpcC16aW5kZXg6IDcwMDA7XG4kbmV3LXN0b3J5LWNvbnRlbnQtc3RhdGUtemluZGV4OiA1MDA7XG4kZmlsdGVyLWRyb3Bkb3duLXppbmRleDogMTAwO1xuJG1vZGFsLXRvcC1pbmRpY2F0b3ItemluZGV4OiA1MTtcbiRtb2RhbC10b3AtaW5kaWNhdG9yLWJhY2tncm91bmQtemluZGV4OiA1MTtcbiRjaGFydC16aW5kZXg6IDE7XG4kY2hhcnQtY29udHJvbC16aW5kZXg6IDI7XG5cbiRzbGlkZS10b2dnbGUtZGlzYWJsZWQtb3B0aW9uLWJhY2tncm91bmQ6ICNkZGRkZGQ7XG5cbiR0b2FzdC1pbmZvLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuJHRvYXN0LWluZm8tdGl0bGUtY29sb3I6ICM0OTQ5NDk7XG4kdG9hc3QtaW5mby1tZXNzYWdlLWNvbG9yOiAjNDIyYzAwO1xuJHRvYXN0LWluZm8tYnV0dG9uLWNvbG9yOiAjNmM0ZTk5O1xuXG4kdG9hc3Qtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiAjZDllZWVkO1xuJHRvYXN0LXN1Y2Nlc3MtdGl0bGUtY29sb3I6ICMwMDQ1NDI7XG4kdG9hc3Qtc3VjY2Vzcy1tZXNzYWdlLWNvbG9yOiAjMDEzMjMwO1xuJHRvYXN0LXN1Y2Nlc3MtYnV0dG9uLWNvbG9yOiAjMDE2OTY1O1xuXG4kdG9hc3Qtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMWQ1O1xuJHRvYXN0LXdhcm5pbmctdGl0bGUtY29sb3I6ICM2YjQ3MDA7XG4kdG9hc3Qtd2FybmluZy1tZXNzYWdlLWNvbG9yOiAjNDIyYzAwO1xuJHRvYXN0LXdhcm5pbmctYnV0dG9uLWNvbG9yOiAjY2M4ZjE0O1xuXG4kdG9hc3QtZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogI2Y1ZDVkYjtcbiR0b2FzdC1lcnJvci10aXRsZS1jb2xvcjogIzczMDAxNTtcbiR0b2FzdC1lcnJvci1tZXNzYWdlLWNvbG9yOiAjNDUwNjExO1xuJHRvYXN0LWVycm9yLXN1Y2Nlc3MtY29sb3I6ICNkOWVlZWQ7XG4kdG9hc3QtZXJyb3ItYnV0dG9uLWNvbG9yOiAjYjIxZDM5O1xuXG4kdG9hc3QtY2xvc2UtYnV0dG9uLWNvbG9yOiAjNzMwMDE1O1xuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIGZsZXgtZ2FwKCRnYXAsICRnbG9iYWw6IGZhbHNlKSB7XG4gIG1hcmdpbi10b3A6ICgtJGdhcCk7XG4gIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCgtJGdhcCksICRnbG9iYWwpO1xuXG4gID4gKiB7XG4gICAgbWFyZ2luLXRvcDogJGdhcDtcbiAgICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgkZ2FwLCAkZ2xvYmFsKTtcbiAgfVxufVxuXG5AbWl4aW4gYmFzZS1jb250YWluZXIoJGNvbnRlbnQtd2lkdGgpIHtcbiAgJGRlc2t0b3AtcGFkZGluZzogMnJlbTtcbiAgbWF4LXdpZHRoOiBjYWxjKCN7JGNvbnRlbnQtd2lkdGh9ICsgKCN7JGRlc2t0b3AtcGFkZGluZ30pKTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MnJlbSkge1xuICAgIEBpbmNsdWRlIHBhZGRpbmctbGVmdCgkZGVza3RvcC1wYWRkaW5nLCB0cnVlKTtcbiAgICBAaW5jbHVkZSBwYWRkaW5nLXJpZ2h0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICB9XG59XG5cbkBtaXhpbiBjZW50ZXJBYnNvbHV0ZUVsZW1lbnQge1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5AbWl4aW4gb25seS1sdHItZ2xvYmFsIHtcbiAgaHRtbDpub3QoW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bC1nbG9iYWwge1xuICBodG1sW2Rpcj0ncnRsJ10gJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktbHRyIHtcbiAgOmhvc3QtY29udGV4dChodG1sOm5vdChbZGlyPSdydGwnXSkpICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bCB7XG4gIDpob3N0LWNvbnRleHQoaHRtbFtkaXI9J3J0bCddKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gcnRsLXZhbHVlKCRwcm9wZXJ0eSwgJGx0ci12YWx1ZSwgJHJ0bC12YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGx0ci12YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHJ0bC12YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHJ0bC1wcm9wZXJ0eSgkbHRyLXByb3BlcnR5LCAkcnRsLXByb3BlcnR5LCAkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpZiAkZ2xvYmFsID09IHRydWUge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyLWdsb2JhbCB7XG4gICAgICAjeyRsdHItcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwtZ2xvYmFsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bCB7XG4gICAgICAjeyRydGwtcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXJnaW4tbGVmdCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLWxlZnQsIG1hcmdpbi1yaWdodCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBtYXJnaW4tcmlnaHQoJG1hcmdpbiwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KG1hcmdpbi1yaWdodCwgbWFyZ2luLWxlZnQsICRtYXJnaW4sICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZygkcGFkZGluZ1RvcCwgJHBhZGRpbmdSaWdodCwgJHBhZGRpbmdCb3R0b20sICRwYWRkaW5nTGVmdCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgcGFkZGluZy10b3A6ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZ1JpZ2h0LCAkZ2xvYmFsKTtcbiAgcGFkZGluZy1ib3R0b206ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZ0xlZnQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1sZWZ0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLXJpZ2h0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiB0ZXh0LWFsaWduLWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRleHQtYWxpZ24sIGxlZnQsIHJpZ2h0LCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGxlZnQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobGVmdCwgcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiByaWdodCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShyaWdodCwgbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRyYW5zbGF0ZVhZKCR2YWx1ZVgsICR2YWx1ZVksICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZSh0cmFuc2Zvcm0sIHRyYW5zbGF0ZSgkdmFsdWVYLCAkdmFsdWVZKSwgdHJhbnNsYXRlKC0kdmFsdWVYLCAkdmFsdWVZKSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItbGVmdCwgYm9yZGVyLXJpZ2h0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1yaWdodCwgYm9yZGVyLWxlZnQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCBib3JkZXItdG9wLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtbGVmdC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBmbG9hdC1sZWZ0KCRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZShmbG9hdCwgbGVmdCwgcmlnaHQsICRnbG9iYWw6IGZhbHNlKTtcbn1cblxuQG1peGluIGZsb2F0LXJpZ2h0IHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCByaWdodCwgbGVmdCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gc21hbGwtZGVza3RvcC1vbmx5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LWxnKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQteGwgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtYW5kLXRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc21hbGwtbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtcyAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LW1kIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtdXAge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gZGlzYWJsZS1zY3JvbGxiYXIge1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9pbmJveC9yZXBsaWVzL3JlcGx5LWRldGFpbHMvcmVwbHktcmV2aWV3LWFuZC10cmFuc2xhdGUvcmVwbHktcmV2aWV3LWFuZC10cmFuc2xhdGUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3N0eWxlcy9fdHlwb2dyYXBoeS5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7RUFBQTtBQTREQTtFQUNFLGdCQUFBO0FEdkRGOztBQzBEQTtFQUNFLGdCQUFBO0FEdkRGOztBQzBEQTtFQUNFLDBCQUFBO0FEdkRGOztBQzBEQTtFQS9ERSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FEU0Y7O0FDcURBO0VBMURFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0NaZ0I7QUZxQmxCOztBQzhDQTtFQW5ERSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQ3RCZ0I7QUYrQmxCOztBQ3dDQTtFQTdDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNDakNnQjtBRjBDbEI7O0FBbkRBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQXNERjtBQXBESTtFQUNFLDBCQUFBO0FBc0ROOztBQWpEQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFvREY7QUdtSEU7RUh6S0Y7SUFJSSxvQkFBQTtFQXNERjtBQUNGOztBQW5EQTtFQUNFLG9CQUFBO0FBc0RGO0FHc0hFO0VIN0tGO0lBSUksb0JBQUE7RUF1REY7QUFDRjs7QUFwREE7RUFDRSxnQ0FBQTtBQXVERjs7QUFwREE7RUNMRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQ3RCZ0I7RUZ1QmhCLGlCQUFBO0VBQ0EsbUJBQUE7QUE2REY7O0FBMURBO0VDVUUsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNDSW9CO0FGZ0R0Qjs7QUFoRUU7RUNoQkEsa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0N0QmdCO0VGa0NkLGlCQUFBO0VBQ0EscUJBQUE7QUF5RUo7QUF2RUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBeUVKOztBQXJFQTtFQUNFLGFBQUE7RUFDQSxvREFBQTtBQXdFRjtBQXRFRTtFQUpGO0lBS0kscUNBQUE7RUF5RUY7QUFDRjtBQXZFRTtFQVJGO0lBU0ksYUFBQTtFQTBFRjtBQUNGO0FBeEVFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQTBFSjtBR2lERTtFSDdIQTtJQUtJLGdCQUFBO0VBMkVKO0FBQ0Y7QUF4RUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBMEVKO0FBeEVJO0VBQ0UsY0VuRE87RUZvRFAsa0JBQUE7QUEwRU47QUdrQ0U7RUhwSEE7SUFhSSwyQkFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLDBCQUFBO0VBeUVKO0VHOUhBO0lBMENJLGdDSE9xQjtFQWdGekI7RUczSEE7SUF3Q0ksaUNIR3FCO0VBbUZ6QjtBQUNGOztBQTNFQTtFQUNFLHVDQUFBO0VBQ0Esc0JBQUE7QUE4RUY7QUE1RUU7RUFDRSw0Q0FBQTtBQThFSjtBQTVFSTtFQUNFLGdCQUFBO0FBOEVOOztBQXhFRTtFR3hFQTtJQTBDSSwrQkgrQm9CO0VBNEV4QjtFRy9JQTtJQXdDSSw4QkgyQm9CO0VBK0V4QjtBQUNGO0FBN0VFO0VBTEY7SUFNSSxnQ0FBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7RUFnRkY7QUFDRjs7QUE3RUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQWdGRjtBQTlFRTtFQUpGO0lBS0ksYUFBQTtFQWlGRjtBQUNGOztBQTVFSTtFQUNFLGNBQUE7QUErRU47QUE3RU07RUFDRSxZQUFBO0FBK0VSO0FBMUVFO0VBQ0UsbUJBQUE7QUE0RUo7QUF6RU07RUFDRSxhQUFBO0FBMkVSO0FBeEVNO0VBQ0UsWUFBQTtBQTBFUjs7QUFwRUE7RUFDRSxRQUFBO0FBdUVGOztBQXBFQTtFQUNFLGtCQUFBO0FBdUVGO0FBckVFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQXVFSjtBRzdDRTtFSC9CRjtJQVNJLGVBQUE7RUF1RUY7QUFDRjtBQXJFRTtFQUVFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSx5QkVqRlc7RUZrRlgsK0JBQUE7QUFzRUo7QUd6REU7RUhuQkE7SUFTSSxXQUFBO0lBQ0EsZ0JBQUE7RUF1RUo7QUFDRjtBQXBFRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQXNFSjs7QUFsRUE7RUFDRSxlQUFBO0FBcUVGO0FHdkVFO0VIQ0Y7SUFJSSxvQkFBQTtJQUNBLGtCQUFBO0VBc0VGO0FBQ0Y7O0FBbkVBO0VBQ0UsY0FBQTtFQUNBLHdCQUFBO0FBc0VGO0FHbEZFO0VIVUY7SUFLSSx1QkFBQTtFQXVFRjtBQUNGOztBQXBFQTtFQUNFLGdCQUFBO0FBdUVGOztBQXBFQTtFQUNFLGdCQUFBO0FBdUVGO0FBQ0EsNG1zQkFBNG1zQiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICdtaXhpbnMnO1xuQGltcG9ydCAndHlwb2dyYXBoeSc7XG5cbjpob3N0IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICA6Om5nLWRlZXAge1xuICAgIC53aXphcmRfX3RpdGxlIHtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIH1cbiAgfVxufVxuXG4uc3RvcnktZGV0YWlscyB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgIGJvcmRlci1yYWRpdXM6IHVuc2V0O1xuICB9XG59XG5cbi50cmFuc2xhdGlvbnMtY29udHJvbGxlciB7XG4gIG1hcmdpbi10b3A6IDEuODc1cmVtO1xuXG4gIEBpbmNsdWRlIG1vYmlsZS11cCB7XG4gICAgbWFyZ2luLXRvcDogMy4xMjVyZW07XG4gIH1cbn1cblxuLmFycm93LWljb24ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYygwLjc1cmVtIC8gNCkpO1xufVxuXG5oMyB7XG4gIEBpbmNsdWRlIHN1YmhlYWRpbmc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG5hIHtcbiAgQGluY2x1ZGUgbGluay1ncmVlbjtcbn1cblxuLnBhbmVsLWNvbnRlbnQge1xuICBoMiB7XG4gICAgQGluY2x1ZGUgc3ViaGVhZGluZztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIH1cbiAgLnByZXZpZXctaGVhZGluZy1jbG9zZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDEuMjVyZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbn1cblxuLnJldmlldy1mb3JtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKSBtaW5tYXgoMCwgMWZyKTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1tZCAtIDAuMXB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKTtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1kKSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gICZfX3dyYXBwZXIge1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgcGFkZGluZzogMS4yNXJlbTtcblxuICAgIEBpbmNsdWRlIG1vYmlsZS11cCB7XG4gICAgICBwYWRkaW5nOiAzLjc1cmVtO1xuICAgIH1cbiAgfVxuXG4gICZfX2Zvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cbiAgICAmX19lcnJvciB7XG4gICAgICBjb2xvcjogJHN1cHBvcnQtMDE7XG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbW9iaWxlLXVwIHtcbiAgICAgIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KGNhbGMoNTAlICsgMS4yNXJlbSkpO1xuICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMC42MjVyZW0pO1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZsZXg6IHVuc2V0O1xuICAgICAgYm9yZGVyLXJhZGl1czogcHhUb1JlbSgxNik7XG4gICAgfVxuICB9XG59XG5cbi5zdGVwcGVyLXNlY3Rpb24ge1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNHMgZWFzZS1pbi1vdXQ7XG4gIHBhZGRpbmc6IDEuNjI1cmVtIDJyZW07XG5cbiAgJi5zaGFkb3cge1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuXG4gICAgJi1ub25lIHtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi5yZXZpZXctc3BhY2VyIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIHtcbiAgICBAaW5jbHVkZSBib3JkZXItcmlnaHQoMXB4IHNvbGlkICRib3JkZXItZ3JheSk7XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1tZCAtIDAuMSkge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyLWdyYXk7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgfVxufVxuXG4uc3BhY2VyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMS4yNXJlbTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1tZCAtIDAuMXB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG46Om5nLWRlZXAge1xuICAucG9zdC1za2VsZXRvbiB7XG4gICAgcCB7XG4gICAgICBoZWlnaHQ6IDEuNXJlbTtcblxuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZm9ybS1za2VsZXRvbiB7XG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcblxuICAgIHAge1xuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgaGVpZ2h0OiAyMHJlbTtcbiAgICAgIH1cblxuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmxvYWRpbmctaW5kaWNhdG9yIHtcbiAgd2lkdGg6IDA7XG59XG5cbi50aHJlYWQtcHJldmlldyB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcblxuICBhIHtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG4gIEBpbmNsdWRlIG1vYmlsZS11cCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG5cbiAgJl9fc2VwYXJhdG9yIHtcbiAgICAkc2lkZU1hcmdpbjogMS4yNXJlbTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMiAqICN7JHNpZGVNYXJnaW59KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JleS04O1xuICAgIG1hcmdpbjogMS4yNXJlbSAoLSRzaWRlTWFyZ2luKSAxLjVyZW07XG5cbiAgICBAaW5jbHVkZSBtb2JpbGUtdXAge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW46IDIuNXJlbSAwO1xuICAgIH1cbiAgfVxuXG4gICZfX2xhbmd1YWdlOmJlZm9yZSB7XG4gICAgY29udGVudDogJ8OiwoDCoic7XG4gICAgbWFyZ2luOiAwIDAuNjI1cmVtO1xuICB9XG59XG5cbi5zdG9yeS1kZXRhaWxzX19wYXJhZ3JhcGgge1xuICBmb250LXNpemU6IDFyZW07XG5cbiAgQGluY2x1ZGUgbW9iaWxlLXVwIHtcbiAgICBtYXJnaW4tdG9wOiAxLjg3NXJlbTtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cbn1cblxuLmNvbnRlbnQtdHJhbnNsYXRpb24tc3RlcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLWJvdHRvbTogMS44NzVyZW07XG5cbiAgQGluY2x1ZGUgbW9iaWxlLXVwIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMy43NXJlbTtcbiAgfVxufVxuXG5hcHAtYXVkaW8tcGxheWVyIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLnNvbHV0aW9uLXByb3Bvc2Vke1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuIiwiLyoqXG4qIFRoaXMgZmlsZSBjb250YWlucyBtaXhpbnMgYW5kIGNsYXNzZXMgZm9yIHRoZSBuZXcgZGVzaWducyBzeXN0ZW0gdHlwb2dyYXBoeS5cbiAqL1xuXG5AbWl4aW4gc3RhbmRhcmQtZm9udC1mYW1pbHkoJHN1ZmZpeDogbnVsbCkge1xuICBmb250LWZhbWlseTogJHN0YW5kYXJkRm9udEZhbWlseSAkc3VmZml4O1xufVxuXG5AbWl4aW4gYm9keS1kZWZhdWx0IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuQG1peGluIHNtYWxsLWluZm8tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICRjb2xvci1wdXJwbGUtOTA7XG59XG5cbkBtaXhpbiBzdWJoZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogJGNvbG9yLXB1cnBsZS05MDtcbn1cblxuQG1peGluIGJvZHktY2FwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogJGNvbG9yLXB1cnBsZS05MDtcbn1cblxuQG1peGluIGxpbmstZ3JlZW4ge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAkbG9vcC1pbnRlcmFjdGl2ZS0wMTtcbn1cblxuLnNlbWktYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLmNhcGl0YWxpemUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmJvZHktZGVmYXVsdCB7XG4gIEBpbmNsdWRlIGJvZHktZGVmYXVsdDtcbn1cblxuLnNtYWxsLWluZm8tdGV4dCB7XG4gIEBpbmNsdWRlIHNtYWxsLWluZm8tdGV4dDtcbn1cblxuLnN1YmhlYWRpbmcge1xuICBAaW5jbHVkZSBzdWJoZWFkaW5nO1xufVxuXG4uYm9keS1jYXB0aW9uIHtcbiAgQGluY2x1ZGUgYm9keS1jYXB0aW9uO1xufVxuIiwiJHN0YW5kYXJkRm9udEZhbWlseTogJ05vdG8gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGNvbnRlbnQtdG9wLXBhZGRpbmc6IDNyZW07XG4kcG9zdC1saXN0LWJnOiAjZGFkYWRhO1xuJHdoaXRlOiAjZmZmZmZmO1xuJHBvc3QtcHJldmlldy1iZzogd2hpdGU7XG4kbGlnaHQtZ3JheS1iZzogI2Y0ZjRmNDtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1sZWZ0OiAyLjM0NHJlbTtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1yaWdodDogMS4wNjNyZW07XG4kcG9zdC1wcmV2aWV3LXBhZGRpbmc6IDIuNXJlbSAkcG9zdC1wcmV2aWV3LXBhZGRpbmctcmlnaHQgMS4yNXJlbSAkcG9zdC1wcmV2aWV3LXBhZGRpbmctbGVmdDtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1tb2JpbGU6IDFyZW0gMXJlbSAwLjVyZW0gMXJlbTtcbiRwb3N0LXBhZGRpbmctYm90dG9tOiAxcmVtO1xuJHBvc3QtcHJldmlldy1ndXR0ZXI6IDJweDtcbiRwb3N0LWhpZ2hsaWdodC1jb2xvcjogIzU3MGY4NTtcbiRjb2xvci1wdXJwbGUtOTA6ICMzMTEzNWU7XG4kY29sb3ItcHVycGxlLTYwOiAjOTg4YWFlO1xuJGNvbG9yLXB1cnBsZS01MDogIzk4ODlhZjtcbiRjb2xvci1wdXJwbGUtMTA6ICNmNWYzZjc7XG4kY29sb3ItcHVycGxlLWxpZ2h0OiAjNGIzNWJjO1xuJGNvbG9yLXB1cnBsZS12ZXJ5LWxpZ2h0OiAjODY2YWIwO1xuJGNvbG9yLXB1cnBsZS1zdGVwcGVyOiAjNGEyYjdhO1xuJGNvbG9yLWdyZWVuLTEwMDogIzA1MjgwNDtcbiRjb2xvci1ncmVlbi05MDogIzBkM2QwYjtcbiRjb2xvci1ncmVlbi04MDogIzFmNmIxZTtcbiRjb2xvci1ncmVlbi03MDogIzM1OGEzNDtcbiRjb2xvci1ncmVlbi02MDogIzZkOWE2ZTtcbiRjb2xvci1ncmVlbi01MDogIzg5YTg4ZjtcbiRjb2xvci1ncmVlbi00MDogIzlmYzhhNjtcbiRjb2xvci1ncmVlbi0zMDogI2FhZDZiMztcbiRjb2xvci1ncmVlbi0yMDogI2M5ZTlkMTtcbiRjb2xvci1ncmVlbi0xMDogI2YzZjdmMztcbiRjb2xvci1ncmVlbi1zdGVwcGVyOiAjMTA3RDc5O1xuJGNvbG9yLWdyZWVuLW1lZGl1bTogI2FkZGFhZjtcbiRjb2xvci1ncmVlbi1saWdodDogIzNBQjA5ODtcbiRjb2xvci1ncmVlbi12ZXJ5LWxpZ2h0OiAjRURGRkZDO1xuJGdyZXktMTogI2Q2ZDBkZjtcbiRzdXBwb3J0LTAxOiAjZGExZTI4O1xuJGVycm9yOiAjZWUyMzJmO1xuJHRleHQtYmxhY2s6ICMxNjE2MTY7XG4kdGV4dC1zZWNvbmRhcnk6ICMzOTM5Mzk7XG4kdGV4dC1ncmF5ZWQ6ICM1MjUyNTI7XG4kdGV4dC1ncmF5ZWQ4MDogIzhmOGI4YjtcbiR0ZXh0LWdyYXktY2F0OiAjNmQ3Mjc4O1xuJHVpLWJhY2tncm91bmQtZ3JheTogI2Y4ZjhmOTtcbiRib3JkZXI6ICNlOGU3ZWE7XG4kZW50aXR5LWJvcmRlci1jb2xvcjogIzFjMGYzMDIxO1xuJGxvYWRpbmctYmc6IHJnYigwIDAgMCAvIDE4JSk7XG4kc3VwcG9ydC0wNDogIzAwNDNjZTtcbiRsb29wLXVzZXJuYW1lOiAjMTk4MDM4O1xuJGxvb3AtYWN0aXZlLWN1cnJlbnQtdXNlcjogIzI0YTE0ODtcbiR3YXJtLWdyYXktMTAtY29sb3I6ICNmN2YzZjI7XG4kd2FybS1ncmF5LTIwLWNvbG9yOiAjZTVlMGRmO1xuJGhlYWRpbmctMS1jb2xvcjogIzFjMGYzMDtcbiRoZWFkaW5nLTItY29sb3I6ICMzMjA3NGQ7XG4kaGVhZGluZy0zLWNvbG9yOiAjMmYyNzM1O1xuJG1vYmlsZS1pY29uLWNvbG9yOiAjMWMwZjMwO1xuJHN0YXRlLWRpc2FibGVkLTAyOiAjYzZjNmM2O1xuJGxpbmstMDI6ICM1NjAxYjI7XG4kaGVhZGVyLXB1cnBsZTogIzMxMTM1ZTtcbiRoZWFkZXItZ3JlZW46ICMxMDdkNzk7XG4kcHVycGxlLWxpZ2h0OiAjY2JjNGQ3O1xuJHB1cnBsZS1iYWNrZ3JvdW5kLWxpZ2h0OiAjZGNkNWU3O1xuJGxvb3AtaW50ZXJhY3RpdmUtMDE6ICMxMDdkNzk7XG4kbG9vcC1pbnRlcmFjdGl2ZS0wMS1vcGFjaXR5OiByZ2JhKDE2LCAxMjUsIDEyMSwgMC4zKTtcbiRmaWx0ZXJzLWdyZWVuOiAjMDU2NzYzO1xuLy8gQnJlYWtwb2ludHNcblxuJGJyZWFrcG9pbnQtczogMzc1cHg7XG4kYnJlYWtwb2ludC1zbTogNDIwcHg7XG4kYnJlYWtwb2ludC1tZDogNzY4cHg7XG4kYnJlYWtwb2ludC1sZzogMTA4MHB4O1xuJGJyZWFrcG9pbnQteGw6IDEyNzVweDtcblxuJGJyZWFrcG9pbnQtbWQtdjI6IDgyMHB4O1xuXG4kaGVhZGVyLWhlaWdodDogNC4zNzVyZW07XG4kaGVhZGVyLWhlaWdodC12MjogNC4zNzVyZW07XG4kc3RhdGUtc2VsZWN0ZWQtdWk6ICNlMGUwZTA7XG4kYy1sZWZ0LXBhZGRpbmc6IDEuNXJlbTtcbiRtZW51LWFjdGl2ZS1jb2xvcjogIzNBQjA5ODtcbiRtZW51LWhvdmVyLWNvbG9yOiAjM0FCMDk4O1xuJHRhYi1pbmFjdGl2ZS1jb2xvcjogIzg5YWY5MztcbiRsaW5lLWNvbG9yOiAjZDBkZmQyO1xuJGJvcmRlci1ncmF5OiAjY2NjY2NjO1xuJHRleHQtZ3JheTogIzgwODA4MDtcbiRiYXNlLWNvbnRhaW5lci13aWR0aDogODEuMTI0cmVtO1xuJGhlYWRlci11bmRlcmxpbmUtaGVpZ2h0OiAwLjMxM3JlbTtcblxuLy8gTW9kZXJhdG9yIHJldmlldyBzZWN0aW9uc1xuJGZvb3Rlci1oZWlnaHQ6IDRyZW07XG4kdG9wYmFyLWhlaWdodDogMTAuNXJlbTtcbiRzdGVwcGVyLWhlaWdodDogNi43cmVtO1xuXG4vLyBOZXcgU3RvcnkgZmxvdyAvIHN0b3J5IGRldGFpbHMgdmFyaWFibGVzXG4kZ3JleTogIzY1NjU2NTtcbiRsaWdodC1ncmV5LTI6ICNiMWI0YjY7XG4kbGlnaHQtZ3JleS0zOiAjYjRiNGI0O1xuJGxpZ2h0LWdyZXktNDogI2NmZDNkODtcbiRsaWdodC1ncmV5LTU6ICNkOWUwZTc7XG4kbGlnaHQtZ3JleS02OiAjZjFmMmYyO1xuJGxpZ2h0LWdyZXktNzogI2M0YzRjNDtcbiRsaWdodC1ncmV5LTg6ICNlOWU5ZTk7XG4kbGlnaHQtZ3JleS05OiAjZTZlYWVkO1xuJGxpZ2gtZ3JleS1zZXBhcmF0b3I6ICNjMGMwYzA7XG4kZGFyay1ncmV5OiAjMWExYTFhO1xuJGRhcmstZ3JleS01MDogcmdiKDI2LCAyNiwgMjYsIDAuNSk7XG4kYm9yZGVyLWdyZXk6ICNjN2NkZDQ7XG4kbGlnaHQtcHVycGxlOiAjZWFlYWVhO1xuJGlucHV0LWRpc2FibGVkLWJnOiAjZjRmNmY4O1xuJGVycm9yLTI6ICNkZTIyMmQ7XG4kZGFuZ2VyOiAjYzkzMDRkO1xuJHByZXZpb3VzLXBpbGwtY29sb3I6ICM3MThkNmY7XG4kdG9vbHRpcC1ncmV5OiAjYWJhYmFiO1xuJGxpZ2h0LWdyZWVuOiAjY2ZlNWU0NjY7XG5cbiRmaWx0ZXJzLW1vZGFsLWhlYWRlci16aW5kZXg6IDEwMDAwO1xuJG1vZGFsLXppbmRleDogOTk5OTtcbiRsb2NhdGlvbi1vdmVybGF5LXppbmRleDogOTAwMTtcbiRoZWFkZXItYXNpZGUtemluZGV4OiA4MDAyO1xuJGhlYWRlci1hc2lkZS1iYWNrZ3JvdW5kLXppbmRleDogODAwMTtcbiRoZWFkZXItemluZGV4OiA4MDAwO1xuJG5hdmlnYXRpb24temluZGV4OiA4MDAwO1xuJHBhZ2UtbG9hZGluZy16aW5kZXg6IDcwMDE7XG4kdG9vbHRpcC16aW5kZXg6IDcwMDA7XG4kbmV3LXN0b3J5LWNvbnRlbnQtc3RhdGUtemluZGV4OiA1MDA7XG4kZmlsdGVyLWRyb3Bkb3duLXppbmRleDogMTAwO1xuJG1vZGFsLXRvcC1pbmRpY2F0b3ItemluZGV4OiA1MTtcbiRtb2RhbC10b3AtaW5kaWNhdG9yLWJhY2tncm91bmQtemluZGV4OiA1MTtcbiRjaGFydC16aW5kZXg6IDE7XG4kY2hhcnQtY29udHJvbC16aW5kZXg6IDI7XG5cbiRzbGlkZS10b2dnbGUtZGlzYWJsZWQtb3B0aW9uLWJhY2tncm91bmQ6ICNkZGRkZGQ7XG5cbiR0b2FzdC1pbmZvLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuJHRvYXN0LWluZm8tdGl0bGUtY29sb3I6ICM0OTQ5NDk7XG4kdG9hc3QtaW5mby1tZXNzYWdlLWNvbG9yOiAjNDIyYzAwO1xuJHRvYXN0LWluZm8tYnV0dG9uLWNvbG9yOiAjNmM0ZTk5O1xuXG4kdG9hc3Qtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiAjZDllZWVkO1xuJHRvYXN0LXN1Y2Nlc3MtdGl0bGUtY29sb3I6ICMwMDQ1NDI7XG4kdG9hc3Qtc3VjY2Vzcy1tZXNzYWdlLWNvbG9yOiAjMDEzMjMwO1xuJHRvYXN0LXN1Y2Nlc3MtYnV0dG9uLWNvbG9yOiAjMDE2OTY1O1xuXG4kdG9hc3Qtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMWQ1O1xuJHRvYXN0LXdhcm5pbmctdGl0bGUtY29sb3I6ICM2YjQ3MDA7XG4kdG9hc3Qtd2FybmluZy1tZXNzYWdlLWNvbG9yOiAjNDIyYzAwO1xuJHRvYXN0LXdhcm5pbmctYnV0dG9uLWNvbG9yOiAjY2M4ZjE0O1xuXG4kdG9hc3QtZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogI2Y1ZDVkYjtcbiR0b2FzdC1lcnJvci10aXRsZS1jb2xvcjogIzczMDAxNTtcbiR0b2FzdC1lcnJvci1tZXNzYWdlLWNvbG9yOiAjNDUwNjExO1xuJHRvYXN0LWVycm9yLXN1Y2Nlc3MtY29sb3I6ICNkOWVlZWQ7XG4kdG9hc3QtZXJyb3ItYnV0dG9uLWNvbG9yOiAjYjIxZDM5O1xuXG4kdG9hc3QtY2xvc2UtYnV0dG9uLWNvbG9yOiAjNzMwMDE1O1xuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIGZsZXgtZ2FwKCRnYXAsICRnbG9iYWw6IGZhbHNlKSB7XG4gIG1hcmdpbi10b3A6ICgtJGdhcCk7XG4gIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCgtJGdhcCksICRnbG9iYWwpO1xuXG4gID4gKiB7XG4gICAgbWFyZ2luLXRvcDogJGdhcDtcbiAgICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgkZ2FwLCAkZ2xvYmFsKTtcbiAgfVxufVxuXG5AbWl4aW4gYmFzZS1jb250YWluZXIoJGNvbnRlbnQtd2lkdGgpIHtcbiAgJGRlc2t0b3AtcGFkZGluZzogMnJlbTtcbiAgbWF4LXdpZHRoOiBjYWxjKCN7JGNvbnRlbnQtd2lkdGh9ICsgKCN7JGRlc2t0b3AtcGFkZGluZ30pKTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MnJlbSkge1xuICAgIEBpbmNsdWRlIHBhZGRpbmctbGVmdCgkZGVza3RvcC1wYWRkaW5nLCB0cnVlKTtcbiAgICBAaW5jbHVkZSBwYWRkaW5nLXJpZ2h0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICB9XG59XG5cbkBtaXhpbiBjZW50ZXJBYnNvbHV0ZUVsZW1lbnQge1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5AbWl4aW4gb25seS1sdHItZ2xvYmFsIHtcbiAgaHRtbDpub3QoW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bC1nbG9iYWwge1xuICBodG1sW2Rpcj0ncnRsJ10gJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktbHRyIHtcbiAgOmhvc3QtY29udGV4dChodG1sOm5vdChbZGlyPSdydGwnXSkpICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LXJ0bCB7XG4gIDpob3N0LWNvbnRleHQoaHRtbFtkaXI9J3J0bCddKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gcnRsLXZhbHVlKCRwcm9wZXJ0eSwgJGx0ci12YWx1ZSwgJHJ0bC12YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGx0ci12YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHJ0bC12YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHJ0bC1wcm9wZXJ0eSgkbHRyLXByb3BlcnR5LCAkcnRsLXByb3BlcnR5LCAkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpZiAkZ2xvYmFsID09IHRydWUge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyLWdsb2JhbCB7XG4gICAgICAjeyRsdHItcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwtZ2xvYmFsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bCB7XG4gICAgICAjeyRydGwtcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXJnaW4tbGVmdCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLWxlZnQsIG1hcmdpbi1yaWdodCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBtYXJnaW4tcmlnaHQoJG1hcmdpbiwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KG1hcmdpbi1yaWdodCwgbWFyZ2luLWxlZnQsICRtYXJnaW4sICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZygkcGFkZGluZ1RvcCwgJHBhZGRpbmdSaWdodCwgJHBhZGRpbmdCb3R0b20sICRwYWRkaW5nTGVmdCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgcGFkZGluZy10b3A6ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZ1JpZ2h0LCAkZ2xvYmFsKTtcbiAgcGFkZGluZy1ib3R0b206ICRwYWRkaW5nVG9wO1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZ0xlZnQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1sZWZ0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1sZWZ0LCBwYWRkaW5nLXJpZ2h0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLXJpZ2h0KCRwYWRkaW5nLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocGFkZGluZy1yaWdodCwgcGFkZGluZy1sZWZ0LCAkcGFkZGluZywgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiB0ZXh0LWFsaWduLWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRleHQtYWxpZ24sIGxlZnQsIHJpZ2h0LCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGxlZnQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobGVmdCwgcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiByaWdodCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShyaWdodCwgbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRyYW5zbGF0ZVhZKCR2YWx1ZVgsICR2YWx1ZVksICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZSh0cmFuc2Zvcm0sIHRyYW5zbGF0ZSgkdmFsdWVYLCAkdmFsdWVZKSwgdHJhbnNsYXRlKC0kdmFsdWVYLCAkdmFsdWVZKSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItbGVmdCwgYm9yZGVyLXJpZ2h0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1yaWdodCwgYm9yZGVyLWxlZnQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCBib3JkZXItdG9wLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci10b3AtbGVmdC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBmbG9hdC1sZWZ0KCRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZShmbG9hdCwgbGVmdCwgcmlnaHQsICRnbG9iYWw6IGZhbHNlKTtcbn1cblxuQG1peGluIGZsb2F0LXJpZ2h0IHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCByaWdodCwgbGVmdCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gc21hbGwtZGVza3RvcC1vbmx5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LWxnKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQteGwgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtYW5kLXRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc21hbGwtbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtcyAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LW1kIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtdXAge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gZGlzYWJsZS1zY3JvbGxiYXIge1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 59650:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/inbox/replies/reply-details/reply-transcribe/reply-transcribe.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplyTranscribeComponent": () => (/* binding */ ReplyTranscribeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/app-routing.props */ 18854);
/* harmony import */ var _app_modules_inbox_shared_components_reject_modal_reject_form_reject_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/modules/inbox/shared/components/reject-modal/reject-form/reject-form.component */ 25166);
/* harmony import */ var _app_shared_loop_design_system_components_loop_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/loop-design-system/components/loop-icon */ 22214);
/* harmony import */ var _app_shared_loop_design_system_components_tags_simple_tag_theme_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/loop-design-system/components/tags/simple-tag-theme.enum */ 61168);
/* harmony import */ var _core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/api/model/channel.enum */ 92128);
/* harmony import */ var _shared_components_audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/components/audio-player/audio-player.component */ 77200);
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/components/base.component */ 70697);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _core_services_modal_modal_v2_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/modal/modal-v2.service */ 12151);
/* harmony import */ var _core_services_api_comment_comment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/services/api/comment/comment.service */ 42075);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _app_modules_inbox_replies_reply_details_reply_details_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/modules/inbox/replies/reply-details/reply-details.service */ 66655);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_icons_arrow_next_icon_arrow_next_icon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/icons/arrow-next-icon/arrow-next-icon.component */ 6036);
/* harmony import */ var _shared_components_textarea_v2_textarea_v2_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/components/textarea-v2/textarea-v2.component */ 64041);
/* harmony import */ var _shared_components_slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/components/slide-toggle/slide-toggle.component */ 47124);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/components/button/button.component */ 90042);
























function ReplyTranscribeComponent_div_0_app_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "app-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("clicked", function ReplyTranscribeComponent_div_0_app_button_17_Template_app_button_clicked_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r3.submitTranscribe());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "app-arrow-next-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 2, "admin.pendingReplyReview.heading"));
  }
}
function ReplyTranscribeComponent_div_0_app_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "app-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("clicked", function ReplyTranscribeComponent_div_0_app_button_18_Template_app_button_clicked_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r5.handleRejectClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 2, "admin.pendingReplyReview.rejectReply"));
  }
}
function ReplyTranscribeComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "app-audio-player", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](12, "loop-textarea", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 9)(15, "app-slide-toggle", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("changed$", function ReplyTranscribeComponent_div_0_Template_app_slide_toggle_changed__15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r7.poorAudioQualityChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](17, ReplyTranscribeComponent_div_0_app_button_17_Template, 5, 4, "app-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](18, ReplyTranscribeComponent_div_0_app_button_18_Template, 4, 4, "app-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 13, "global.transcribeReply"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](7, 15, "story.details.transcribe.header.subtitle"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("isEscapeButtonEnable", true)("audioSrc", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](10, 17, ctx_r0.audioSrc$));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formControl", ctx_r0.transcribeControl)("maxLength", 30000)("autosize", true)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](13, 19, "story.details.transcribe.content.placeholder"))("small", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("checked", ctx_r0.poorAudioQuality)("text", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](16, 21, "story.details.transcribe.footer.poorAudioQuality"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r0.poorAudioQuality);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r0.poorAudioQuality);
  }
}
class ReplyTranscribeComponent extends _shared_components_base_component__WEBPACK_IMPORTED_MODULE_6__.BaseComponent {
  constructor(router, toastr, modalService, commentService, activatedRoute, translateService, replyDetailsService) {
    super();
    this.router = router;
    this.toastr = toastr;
    this.modalService = modalService;
    this.commentService = commentService;
    this.activatedRoute = activatedRoute;
    this.translateService = translateService;
    this.replyDetailsService = replyDetailsService;
    this.LoopIcon = _app_shared_loop_design_system_components_loop_icon__WEBPACK_IMPORTED_MODULE_2__["default"];
    this.SimpleTagTheme = _app_shared_loop_design_system_components_tags_simple_tag_theme_enum__WEBPACK_IMPORTED_MODULE_3__.SimpleTagTheme;
    this.loading = false;
    this.poorAudioQuality = false;
    this.transcribeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.UntypedFormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.maxLength(30000)]);
  }
  ngOnInit() {
    this.replyDetailsService.reply.subscribe(reply => {
      this.reply = reply;
      this.transcribeControl.setValue(this.reply.content || null);
      this.setAudioToTranscribe();
      if (this.reply.channel !== _core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_4__.CHANNEL_CONSTANTS.IVRR) {
        this.router.navigate([_app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.INBOX_REPLY_ROUTES.REPLY_REVIEW_AND_TRANSLATE], {
          relativeTo: this.activatedRoute.parent
        });
      }
    });
  }
  poorAudioQualityChange(poorAudioQuality) {
    this.poorAudioQuality = poorAudioQuality;
  }
  setAudioToTranscribe() {
    this.replyDetailsService.s3fileUrl.subscribe(fileUrl => {
      this.audioSrc$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)(fileUrl);
    });
  }
  submitTranscribe() {
    this.transcribeControl.markAsTouched();
    this.transcribeControl.updateValueAndValidity();
    if (!this.transcribeControl.valid) {
      return;
    }
    this.loading = true;
    this.commentService.addCommentTranslationModerator(this.reply.id, {
      language: this.reply.language,
      content: this.transcribeControl.value
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.finalize)(() => this.loading = false)).subscribe(() => {
      this.replyDetailsService.fetch(this.reply.id);
      this.router.navigate([`${_app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.INBOX_REPLY_ROUTES.REPLY_REVIEW_AND_TRANSLATE}/`], {
        relativeTo: this.activatedRoute.parent
      });
    }, () => {
      this.toastr.error(this.translateService.instant(`story.details.transcribe.toast.reviewStory.error.subtitle`),
      // TODO
      this.translateService.instant(`story.details.transcribe.toast.reviewStory.error.title`));
    });
  }
  handleRejectClick() {
    const modal = this.modalService.open(_app_modules_inbox_shared_components_reject_modal_reject_form_reject_form_component__WEBPACK_IMPORTED_MODULE_1__.InboxRejectFormComponent, {
      hasAuthor: this.shouldShowNotificationMessage(),
      languageCode: this.reply.language,
      type: 'comment',
      channel: this.reply.channel,
      contactIsNotAccepted: false,
      multiple: false
    });
    modal.confirm.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.destroyed$)).subscribe(payload => this.reject(payload));
  }
  shouldShowNotificationMessage() {
    return this.reply.channel === _core_services_api_model_channel_enum__WEBPACK_IMPORTED_MODULE_4__.CHANNEL_CONSTANTS.WEB ? !!this.reply.emailProvided : true;
  }
  reject(rejectReasons) {
    this.loading = true;
    this.commentService.rejectCommentModerator(this.reply.id, rejectReasons).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.finalize)(() => this.loading = false)).subscribe(() => {
      this.router.navigate([`${_app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.MAIN_ROUTES.INBOX}/${_app_app_routing_props__WEBPACK_IMPORTED_MODULE_0__.INBOX_ROUTES.REPLIES}`], {
        queryParams: {
          processedReplyId: this.reply.id
        }
      });
      this.toastr.success(this.translateService.instant(`admin.comment.toast.rejected.success.subtitle`), this.translateService.instant(`admin.comment.toast.rejected.success.title`));
    }, () => {
      this.toastr.error(this.translateService.instant(`admin.comment.toast.rejected.error.subtitle`), this.translateService.instant(`admin.comment.toast.rejected.error.title`));
    });
  }
  static #_ = this.ɵfac = function ReplyTranscribeComponent_Factory(t) {
    return new (t || ReplyTranscribeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_21__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_services_modal_modal_v2_service__WEBPACK_IMPORTED_MODULE_7__.ModalServiceV2), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_services_api_comment_comment_service__WEBPACK_IMPORTED_MODULE_8__.CommentService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_app_modules_inbox_replies_reply_details_reply_details_service__WEBPACK_IMPORTED_MODULE_9__.ReplyDetailsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
    type: ReplyTranscribeComponent,
    selectors: [["app-reply-transcribe"]],
    viewQuery: function ReplyTranscribeComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_shared_components_audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_5__.AudioPlayerComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.audioPlayer = _t.first);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵInheritDefinitionFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "transcribe-container", 4, "ngIf"], [1, "transcribe-container"], [1, "transcribe-header"], [1, "transcribe-header__title"], [1, "transcribe-header__subtitle"], [1, "transcribe-content"], [3, "isEscapeButtonEnable", "audioSrc"], [1, "p-rel"], [3, "formControl", "maxLength", "autosize", "placeholder", "small"], [1, "transcribe-footer"], [3, "checked", "text", "changed$"], ["class", "transcribe-footer__review-button", "mode", "v2", "variant", "primary", 3, "disabled", "clicked", 4, "ngIf"], ["class", "transcribe-footer__reject-button", "mode", "v2", "variant", "danger", 3, "disabled", "clicked", 4, "ngIf"], ["mode", "v2", "variant", "primary", 1, "transcribe-footer__review-button", 3, "disabled", "clicked"], ["mode", "v2", "variant", "danger", 1, "transcribe-footer__reject-button", 3, "disabled", "clicked"]],
    template: function ReplyTranscribeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, ReplyTranscribeComponent_div_0_Template, 19, 23, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.reply);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _shared_icons_arrow_next_icon_arrow_next_icon_component__WEBPACK_IMPORTED_MODULE_10__.ArrowNextIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlDirective, _shared_components_audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_5__.AudioPlayerComponent, _shared_components_textarea_v2_textarea_v2_component__WEBPACK_IMPORTED_MODULE_11__.TextareaV2Component, _shared_components_slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_12__.SlideToggleComponent, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_13__.ButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_23__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslatePipe],
    styles: [".transcribe-container[_ngcontent-%COMP%] {\n  width: 592px;\n  margin: 0 auto;\n}\n@media (max-width: 767.9px) {\n  .transcribe-container[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n.transcribe-container[_ngcontent-%COMP%]   .transcribe-header[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n@media (max-width: 767.9px) {\n  .transcribe-container[_ngcontent-%COMP%]   .transcribe-header[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n}\n.transcribe-container[_ngcontent-%COMP%]   .transcribe-header__title[_ngcontent-%COMP%] {\n  color: #1a1a1a;\n  font-size: 2.25rem;\n  font-style: normal;\n  font-weight: bold;\n  line-height: 3rem;\n  margin-bottom: 1rem;\n}\n.transcribe-container[_ngcontent-%COMP%]   .transcribe-header__subtitle[_ngcontent-%COMP%] {\n  color: #656565;\n  font-size: 1.125rem;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1.5rem;\n}\n.transcribe-container[_ngcontent-%COMP%]   .transcribe-content[_ngcontent-%COMP%] {\n  background: #ffffff;\n  margin-bottom: 3rem;\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  border-radius: 0.5rem;\n}\n@media (max-width: 767.9px) {\n  .transcribe-container[_ngcontent-%COMP%]   .transcribe-content[_ngcontent-%COMP%] {\n    padding: 1rem;\n    margin-bottom: 1.5rem;\n  }\n}\n.transcribe-container[_ngcontent-%COMP%]   .transcribe-content[_ngcontent-%COMP%]   app-audio-player[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n@media (max-width: 767.9px) {\n  .transcribe-container[_ngcontent-%COMP%]   .transcribe-content[_ngcontent-%COMP%]   app-audio-player[_ngcontent-%COMP%] {\n    margin-bottom: unset;\n    margin-top: 1rem;\n    order: 1;\n  }\n}\n.transcribe-container[_ngcontent-%COMP%]   .transcribe-footer[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n@media (max-width: 767.9px) {\n  .transcribe-container[_ngcontent-%COMP%]   .transcribe-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 0 1rem;\n    align-items: flex-start;\n  }\n}\n@media (max-width: 767.9px) {\n  .transcribe-container[_ngcontent-%COMP%]   .transcribe-footer[_ngcontent-%COMP%]   app-slide-toggle[_ngcontent-%COMP%] {\n    margin-bottom: 1.5rem;\n  }\n}\n.transcribe-container[_ngcontent-%COMP%]   .transcribe-footer__reject-button[_ngcontent-%COMP%], .transcribe-container[_ngcontent-%COMP%]   .transcribe-footer__review-button[_ngcontent-%COMP%] {\n  min-height: 2.5rem;\n  min-width: 13rem;\n}\n@media (max-width: 767.9px) {\n  .transcribe-container[_ngcontent-%COMP%]   .transcribe-footer__reject-button[_ngcontent-%COMP%], .transcribe-container[_ngcontent-%COMP%]   .transcribe-footer__review-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.transcribe-container[_ngcontent-%COMP%]   .transcribe-footer__reject-button[_ngcontent-%COMP%]     button, .transcribe-container[_ngcontent-%COMP%]   .transcribe-footer__review-button[_ngcontent-%COMP%]     button {\n  min-height: 2.5rem;\n}\n\n.got-it__submit-btn[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 0;\n  margin-top: 0.75rem;\n  background: transparent;\n  font-size: 1rem;\n  font-weight: 600;\n}\n\n.sensitive-story__tag[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 1rem;\n}\n@media (max-width: 767.9px) {\n  .sensitive-story__tag[_ngcontent-%COMP%] {\n    order: 3;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcGx5LXRyYW5zY3JpYmUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvX21peGlucy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBSEY7QUNvTEU7RURuTEY7SUFLSSxlQUFBO0VBRkY7QUFDRjtBQUlFO0VBQ0UsbUJBQUE7QUFGSjtBQzRLRTtFRDNLQTtJQUlJLGVBQUE7RUFESjtBQUNGO0FBR0k7RUFDRSxjRW1GTTtFRmxGTixrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBRE47QUFJSTtFQUNFLGNFZ0VDO0VGL0RELG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBRk47QUFNRTtFQUNFLG1CRW5DSTtFRm9DSixtQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQUpKO0FDZ0pFO0VEbEpBO0lBU0ksYUFBQTtJQUNBLHFCQUFBO0VBSEo7QUFDRjtBQUtJO0VBQ0Usc0JBQUE7QUFITjtBQ3VJRTtFRHJJRTtJQUlJLG9CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxRQUFBO0VBRk47QUFDRjtBQU1FO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFKSjtBQzJIRTtFRDFIQTtJQU1JLHNCQUFBO0lBQ0EsZUFBQTtJQUNBLHVCQUFBO0VBSEo7QUFDRjtBQ29IRTtFRC9HRTtJQUVJLHFCQUFBO0VBSE47QUFDRjtBQU1JO0VBRUUsa0JBQUE7RUFDQSxnQkFBQTtBQUxOO0FDMkdFO0VEekdFO0lBTUksV0FBQTtFQUpOO0FBQ0Y7QUFPUTtFQUNFLGtCQUFBO0FBTFY7O0FBWUE7RUFDRSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFURjs7QUFZQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQVRGO0FDcUZFO0VEOUVGO0lBS0ksUUFBQTtFQVJGO0FBQ0YiLCJmaWxlIjoicmVwbHktdHJhbnNjcmliZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICdsb29wLWRlc2lnbi1zeXN0ZW0vaGVscGVycyc7XG5AaW1wb3J0ICdtaXhpbnMnO1xuXG4udHJhbnNjcmliZS1jb250YWluZXIge1xuICB3aWR0aDogNTkycHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuXG4gIEBpbmNsdWRlIG1vYmlsZS1vbmx5IHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cblxuICAudHJhbnNjcmliZS1oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG5cbiAgICBAaW5jbHVkZSBtb2JpbGUtb25seSB7XG4gICAgICBwYWRkaW5nOiAwIHB4VG9SZW0oMTYpO1xuICAgIH1cblxuICAgICZfX3RpdGxlIHtcbiAgICAgIGNvbG9yOiAkZGFyay1ncmV5O1xuICAgICAgZm9udC1zaXplOiAyLjI1cmVtO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBsaW5lLWhlaWdodDogM3JlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgfVxuXG4gICAgJl9fc3VidGl0bGUge1xuICAgICAgY29sb3I6ICRncmV5O1xuICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgIH1cbiAgfVxuXG4gIC50cmFuc2NyaWJlLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcblxuICAgIEBpbmNsdWRlIG1vYmlsZS1vbmx5IHtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgfVxuXG4gICAgYXBwLWF1ZGlvLXBsYXllciB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuXG4gICAgICBAaW5jbHVkZSBtb2JpbGUtb25seSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IHVuc2V0O1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICBvcmRlcjogMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudHJhbnNjcmliZS1mb290ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICBAaW5jbHVkZSBtb2JpbGUtb25seSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgcGFkZGluZzogMCBweFRvUmVtKDE2KTtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIH1cblxuICAgIGFwcC1zbGlkZS10b2dnbGUge1xuICAgICAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgJl9fcmVqZWN0LWJ1dHRvbixcbiAgICAmX19yZXZpZXctYnV0dG9uIHtcbiAgICAgIG1pbi1oZWlnaHQ6IHB4VG9SZW0oNDApO1xuICAgICAgbWluLXdpZHRoOiBweFRvUmVtKDIwOCk7XG5cbiAgICAgIEBpbmNsdWRlIG1vYmlsZS1vbmx5IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIDo6bmctZGVlcCB7XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgbWluLWhlaWdodDogcHhUb1JlbSg0MCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmdvdC1pdF9fc3VibWl0LWJ0biB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLXRvcDogMC43NXJlbTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnNlbnNpdGl2ZS1zdG9yeV9fdGFnIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMXJlbTtcblxuICBAaW5jbHVkZSBtb2JpbGUtb25seSB7XG4gICAgb3JkZXI6IDM7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbkBtaXhpbiBmbGV4LWdhcCgkZ2FwLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBtYXJnaW4tdG9wOiAoLSRnYXApO1xuICBAaW5jbHVkZSBtYXJnaW4tbGVmdCgoLSRnYXApLCAkZ2xvYmFsKTtcblxuICA+ICoge1xuICAgIG1hcmdpbi10b3A6ICRnYXA7XG4gICAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoJGdhcCwgJGdsb2JhbCk7XG4gIH1cbn1cblxuQG1peGluIGJhc2UtY29udGFpbmVyKCRjb250ZW50LXdpZHRoKSB7XG4gICRkZXNrdG9wLXBhZGRpbmc6IDJyZW07XG4gIG1heC13aWR0aDogY2FsYygjeyRjb250ZW50LXdpZHRofSArICgjeyRkZXNrdG9wLXBhZGRpbmd9KSk7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDJyZW0pIHtcbiAgICBAaW5jbHVkZSBwYWRkaW5nLWxlZnQoJGRlc2t0b3AtcGFkZGluZywgdHJ1ZSk7XG4gICAgQGluY2x1ZGUgcGFkZGluZy1yaWdodCgkZGVza3RvcC1wYWRkaW5nLCB0cnVlKTtcbiAgfVxufVxuXG5AbWl4aW4gY2VudGVyQWJzb2x1dGVFbGVtZW50IHtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcblxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuQG1peGluIG9ubHktbHRyLWdsb2JhbCB7XG4gIGh0bWw6bm90KFtkaXI9J3J0bCddKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1ydGwtZ2xvYmFsIHtcbiAgaHRtbFtkaXI9J3J0bCddICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LWx0ciB7XG4gIDpob3N0LWNvbnRleHQoaHRtbDpub3QoW2Rpcj0ncnRsJ10pKSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1ydGwge1xuICA6aG9zdC1jb250ZXh0KGh0bWxbZGlyPSdydGwnXSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHJ0bC12YWx1ZSgkcHJvcGVydHksICRsdHItdmFsdWUsICRydGwtdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpZiAkZ2xvYmFsID09IHRydWUge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyLWdsb2JhbCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRsdHItdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwtZ2xvYmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHJ0bC12YWx1ZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG9ubHktbHRyIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGx0ci12YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRydGwtdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBydGwtcHJvcGVydHkoJGx0ci1wcm9wZXJ0eSwgJHJ0bC1wcm9wZXJ0eSwgJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaWYgJGdsb2JhbCA9PSB0cnVlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ci1nbG9iYWwge1xuICAgICAgI3skbHRyLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsLWdsb2JhbCB7XG4gICAgICAjeyRydGwtcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ciB7XG4gICAgICAjeyRsdHItcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwge1xuICAgICAgI3skcnRsLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWFyZ2luLWxlZnQoJG1hcmdpbiwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KG1hcmdpbi1sZWZ0LCBtYXJnaW4tcmlnaHQsICRtYXJnaW4sICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gbWFyZ2luLXJpZ2h0KCRtYXJnaW4sICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShtYXJnaW4tcmlnaHQsIG1hcmdpbi1sZWZ0LCAkbWFyZ2luLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmcoJHBhZGRpbmdUb3AsICRwYWRkaW5nUmlnaHQsICRwYWRkaW5nQm90dG9tLCAkcGFkZGluZ0xlZnQsICRnbG9iYWw6IGZhbHNlKSB7XG4gIHBhZGRpbmctdG9wOiAkcGFkZGluZ1RvcDtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctcmlnaHQsIHBhZGRpbmctbGVmdCwgJHBhZGRpbmdSaWdodCwgJGdsb2JhbCk7XG4gIHBhZGRpbmctYm90dG9tOiAkcGFkZGluZ1RvcDtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctbGVmdCwgcGFkZGluZy1yaWdodCwgJHBhZGRpbmdMZWZ0LCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmctbGVmdCgkcGFkZGluZywgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctbGVmdCwgcGFkZGluZy1yaWdodCwgJHBhZGRpbmcsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1yaWdodCgkcGFkZGluZywgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHBhZGRpbmctcmlnaHQsIHBhZGRpbmctbGVmdCwgJHBhZGRpbmcsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gdGV4dC1hbGlnbi1sZWZ0KCRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZSh0ZXh0LWFsaWduLCBsZWZ0LCByaWdodCwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBsZWZ0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGxlZnQsIHJpZ2h0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gcmlnaHQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkocmlnaHQsIGxlZnQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiB0cmFuc2xhdGVYWSgkdmFsdWVYLCAkdmFsdWVZLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUodHJhbnNmb3JtLCB0cmFuc2xhdGUoJHZhbHVlWCwgJHZhbHVlWSksIHRyYW5zbGF0ZSgtJHZhbHVlWCwgJHZhbHVlWSksICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWxlZnQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWxlZnQsIGJvcmRlci1yaWdodCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1yaWdodCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItcmlnaHQsIGJvcmRlci1sZWZ0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMsIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItdG9wLXJpZ2h0LXJhZGl1cywgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItdG9wLWxlZnQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci10b3AtbGVmdC1yYWRpdXMsIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gZmxvYXQtbGVmdCgkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUoZmxvYXQsIGxlZnQsIHJpZ2h0LCAkZ2xvYmFsOiBmYWxzZSk7XG59XG5cbkBtaXhpbiBmbG9hdC1yaWdodCB7XG4gIEBpbmNsdWRlIHJ0bC12YWx1ZShmbG9hdCwgcmlnaHQsIGxlZnQsICRnbG9iYWw6IGZhbHNlKTtcbn1cblxuQG1peGluIHNtYWxsLWRlc2t0b3Atb25seSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1sZykgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXhsIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLWFuZC10YWJsZXQtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZyAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtYWxsLW1vYmlsZS1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXMgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1tZCAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1kKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbGcpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLXVwIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1kKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGRpc2FibGUtc2Nyb2xsYmFyIHtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iLCIkc3RhbmRhcmRGb250RmFtaWx5OiAnTm90byBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4kY29udGVudC10b3AtcGFkZGluZzogM3JlbTtcbiRwb3N0LWxpc3QtYmc6ICNkYWRhZGE7XG4kd2hpdGU6ICNmZmZmZmY7XG4kcG9zdC1wcmV2aWV3LWJnOiB3aGl0ZTtcbiRsaWdodC1ncmF5LWJnOiAjZjRmNGY0O1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLWxlZnQ6IDIuMzQ0cmVtO1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLXJpZ2h0OiAxLjA2M3JlbTtcbiRwb3N0LXByZXZpZXctcGFkZGluZzogMi41cmVtICRwb3N0LXByZXZpZXctcGFkZGluZy1yaWdodCAxLjI1cmVtICRwb3N0LXByZXZpZXctcGFkZGluZy1sZWZ0O1xuJHBvc3QtcHJldmlldy1wYWRkaW5nLW1vYmlsZTogMXJlbSAxcmVtIDAuNXJlbSAxcmVtO1xuJHBvc3QtcGFkZGluZy1ib3R0b206IDFyZW07XG4kcG9zdC1wcmV2aWV3LWd1dHRlcjogMnB4O1xuJHBvc3QtaGlnaGxpZ2h0LWNvbG9yOiAjNTcwZjg1O1xuJGNvbG9yLXB1cnBsZS05MDogIzMxMTM1ZTtcbiRjb2xvci1wdXJwbGUtNjA6ICM5ODhhYWU7XG4kY29sb3ItcHVycGxlLTUwOiAjOTg4OWFmO1xuJGNvbG9yLXB1cnBsZS0xMDogI2Y1ZjNmNztcbiRjb2xvci1wdXJwbGUtbGlnaHQ6ICM0YjM1YmM7XG4kY29sb3ItcHVycGxlLXZlcnktbGlnaHQ6ICM4NjZhYjA7XG4kY29sb3ItcHVycGxlLXN0ZXBwZXI6ICM0YTJiN2E7XG4kY29sb3ItZ3JlZW4tMTAwOiAjMDUyODA0O1xuJGNvbG9yLWdyZWVuLTkwOiAjMGQzZDBiO1xuJGNvbG9yLWdyZWVuLTgwOiAjMWY2YjFlO1xuJGNvbG9yLWdyZWVuLTcwOiAjMzU4YTM0O1xuJGNvbG9yLWdyZWVuLTYwOiAjNmQ5YTZlO1xuJGNvbG9yLWdyZWVuLTUwOiAjODlhODhmO1xuJGNvbG9yLWdyZWVuLTQwOiAjOWZjOGE2O1xuJGNvbG9yLWdyZWVuLTMwOiAjYWFkNmIzO1xuJGNvbG9yLWdyZWVuLTIwOiAjYzllOWQxO1xuJGNvbG9yLWdyZWVuLTEwOiAjZjNmN2YzO1xuJGNvbG9yLWdyZWVuLXN0ZXBwZXI6ICMxMDdENzk7XG4kY29sb3ItZ3JlZW4tbWVkaXVtOiAjYWRkYWFmO1xuJGNvbG9yLWdyZWVuLWxpZ2h0OiAjM0FCMDk4O1xuJGNvbG9yLWdyZWVuLXZlcnktbGlnaHQ6ICNFREZGRkM7XG4kZ3JleS0xOiAjZDZkMGRmO1xuJHN1cHBvcnQtMDE6ICNkYTFlMjg7XG4kZXJyb3I6ICNlZTIzMmY7XG4kdGV4dC1ibGFjazogIzE2MTYxNjtcbiR0ZXh0LXNlY29uZGFyeTogIzM5MzkzOTtcbiR0ZXh0LWdyYXllZDogIzUyNTI1MjtcbiR0ZXh0LWdyYXllZDgwOiAjOGY4YjhiO1xuJHRleHQtZ3JheS1jYXQ6ICM2ZDcyNzg7XG4kdWktYmFja2dyb3VuZC1ncmF5OiAjZjhmOGY5O1xuJGJvcmRlcjogI2U4ZTdlYTtcbiRlbnRpdHktYm9yZGVyLWNvbG9yOiAjMWMwZjMwMjE7XG4kbG9hZGluZy1iZzogcmdiKDAgMCAwIC8gMTglKTtcbiRzdXBwb3J0LTA0OiAjMDA0M2NlO1xuJGxvb3AtdXNlcm5hbWU6ICMxOTgwMzg7XG4kbG9vcC1hY3RpdmUtY3VycmVudC11c2VyOiAjMjRhMTQ4O1xuJHdhcm0tZ3JheS0xMC1jb2xvcjogI2Y3ZjNmMjtcbiR3YXJtLWdyYXktMjAtY29sb3I6ICNlNWUwZGY7XG4kaGVhZGluZy0xLWNvbG9yOiAjMWMwZjMwO1xuJGhlYWRpbmctMi1jb2xvcjogIzMyMDc0ZDtcbiRoZWFkaW5nLTMtY29sb3I6ICMyZjI3MzU7XG4kbW9iaWxlLWljb24tY29sb3I6ICMxYzBmMzA7XG4kc3RhdGUtZGlzYWJsZWQtMDI6ICNjNmM2YzY7XG4kbGluay0wMjogIzU2MDFiMjtcbiRoZWFkZXItcHVycGxlOiAjMzExMzVlO1xuJGhlYWRlci1ncmVlbjogIzEwN2Q3OTtcbiRwdXJwbGUtbGlnaHQ6ICNjYmM0ZDc7XG4kcHVycGxlLWJhY2tncm91bmQtbGlnaHQ6ICNkY2Q1ZTc7XG4kbG9vcC1pbnRlcmFjdGl2ZS0wMTogIzEwN2Q3OTtcbiRsb29wLWludGVyYWN0aXZlLTAxLW9wYWNpdHk6IHJnYmEoMTYsIDEyNSwgMTIxLCAwLjMpO1xuJGZpbHRlcnMtZ3JlZW46ICMwNTY3NjM7XG4vLyBCcmVha3BvaW50c1xuXG4kYnJlYWtwb2ludC1zOiAzNzVweDtcbiRicmVha3BvaW50LXNtOiA0MjBweDtcbiRicmVha3BvaW50LW1kOiA3NjhweDtcbiRicmVha3BvaW50LWxnOiAxMDgwcHg7XG4kYnJlYWtwb2ludC14bDogMTI3NXB4O1xuXG4kYnJlYWtwb2ludC1tZC12MjogODIwcHg7XG5cbiRoZWFkZXItaGVpZ2h0OiA0LjM3NXJlbTtcbiRoZWFkZXItaGVpZ2h0LXYyOiA0LjM3NXJlbTtcbiRzdGF0ZS1zZWxlY3RlZC11aTogI2UwZTBlMDtcbiRjLWxlZnQtcGFkZGluZzogMS41cmVtO1xuJG1lbnUtYWN0aXZlLWNvbG9yOiAjM0FCMDk4O1xuJG1lbnUtaG92ZXItY29sb3I6ICMzQUIwOTg7XG4kdGFiLWluYWN0aXZlLWNvbG9yOiAjODlhZjkzO1xuJGxpbmUtY29sb3I6ICNkMGRmZDI7XG4kYm9yZGVyLWdyYXk6ICNjY2NjY2M7XG4kdGV4dC1ncmF5OiAjODA4MDgwO1xuJGJhc2UtY29udGFpbmVyLXdpZHRoOiA4MS4xMjRyZW07XG4kaGVhZGVyLXVuZGVybGluZS1oZWlnaHQ6IDAuMzEzcmVtO1xuXG4vLyBNb2RlcmF0b3IgcmV2aWV3IHNlY3Rpb25zXG4kZm9vdGVyLWhlaWdodDogNHJlbTtcbiR0b3BiYXItaGVpZ2h0OiAxMC41cmVtO1xuJHN0ZXBwZXItaGVpZ2h0OiA2LjdyZW07XG5cbi8vIE5ldyBTdG9yeSBmbG93IC8gc3RvcnkgZGV0YWlscyB2YXJpYWJsZXNcbiRncmV5OiAjNjU2NTY1O1xuJGxpZ2h0LWdyZXktMjogI2IxYjRiNjtcbiRsaWdodC1ncmV5LTM6ICNiNGI0YjQ7XG4kbGlnaHQtZ3JleS00OiAjY2ZkM2Q4O1xuJGxpZ2h0LWdyZXktNTogI2Q5ZTBlNztcbiRsaWdodC1ncmV5LTY6ICNmMWYyZjI7XG4kbGlnaHQtZ3JleS03OiAjYzRjNGM0O1xuJGxpZ2h0LWdyZXktODogI2U5ZTllOTtcbiRsaWdodC1ncmV5LTk6ICNlNmVhZWQ7XG4kbGlnaC1ncmV5LXNlcGFyYXRvcjogI2MwYzBjMDtcbiRkYXJrLWdyZXk6ICMxYTFhMWE7XG4kZGFyay1ncmV5LTUwOiByZ2IoMjYsIDI2LCAyNiwgMC41KTtcbiRib3JkZXItZ3JleTogI2M3Y2RkNDtcbiRsaWdodC1wdXJwbGU6ICNlYWVhZWE7XG4kaW5wdXQtZGlzYWJsZWQtYmc6ICNmNGY2Zjg7XG4kZXJyb3ItMjogI2RlMjIyZDtcbiRkYW5nZXI6ICNjOTMwNGQ7XG4kcHJldmlvdXMtcGlsbC1jb2xvcjogIzcxOGQ2ZjtcbiR0b29sdGlwLWdyZXk6ICNhYmFiYWI7XG4kbGlnaHQtZ3JlZW46ICNjZmU1ZTQ2NjtcblxuJGZpbHRlcnMtbW9kYWwtaGVhZGVyLXppbmRleDogMTAwMDA7XG4kbW9kYWwtemluZGV4OiA5OTk5O1xuJGxvY2F0aW9uLW92ZXJsYXktemluZGV4OiA5MDAxO1xuJGhlYWRlci1hc2lkZS16aW5kZXg6IDgwMDI7XG4kaGVhZGVyLWFzaWRlLWJhY2tncm91bmQtemluZGV4OiA4MDAxO1xuJGhlYWRlci16aW5kZXg6IDgwMDA7XG4kbmF2aWdhdGlvbi16aW5kZXg6IDgwMDA7XG4kcGFnZS1sb2FkaW5nLXppbmRleDogNzAwMTtcbiR0b29sdGlwLXppbmRleDogNzAwMDtcbiRuZXctc3RvcnktY29udGVudC1zdGF0ZS16aW5kZXg6IDUwMDtcbiRmaWx0ZXItZHJvcGRvd24temluZGV4OiAxMDA7XG4kbW9kYWwtdG9wLWluZGljYXRvci16aW5kZXg6IDUxO1xuJG1vZGFsLXRvcC1pbmRpY2F0b3ItYmFja2dyb3VuZC16aW5kZXg6IDUxO1xuJGNoYXJ0LXppbmRleDogMTtcbiRjaGFydC1jb250cm9sLXppbmRleDogMjtcblxuJHNsaWRlLXRvZ2dsZS1kaXNhYmxlZC1vcHRpb24tYmFja2dyb3VuZDogI2RkZGRkZDtcblxuJHRvYXN0LWluZm8tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4kdG9hc3QtaW5mby10aXRsZS1jb2xvcjogIzQ5NDk0OTtcbiR0b2FzdC1pbmZvLW1lc3NhZ2UtY29sb3I6ICM0MjJjMDA7XG4kdG9hc3QtaW5mby1idXR0b24tY29sb3I6ICM2YzRlOTk7XG5cbiR0b2FzdC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6ICNkOWVlZWQ7XG4kdG9hc3Qtc3VjY2Vzcy10aXRsZS1jb2xvcjogIzAwNDU0MjtcbiR0b2FzdC1zdWNjZXNzLW1lc3NhZ2UtY29sb3I6ICMwMTMyMzA7XG4kdG9hc3Qtc3VjY2Vzcy1idXR0b24tY29sb3I6ICMwMTY5NjU7XG5cbiR0b2FzdC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6ICNmZmYxZDU7XG4kdG9hc3Qtd2FybmluZy10aXRsZS1jb2xvcjogIzZiNDcwMDtcbiR0b2FzdC13YXJuaW5nLW1lc3NhZ2UtY29sb3I6ICM0MjJjMDA7XG4kdG9hc3Qtd2FybmluZy1idXR0b24tY29sb3I6ICNjYzhmMTQ7XG5cbiR0b2FzdC1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiAjZjVkNWRiO1xuJHRvYXN0LWVycm9yLXRpdGxlLWNvbG9yOiAjNzMwMDE1O1xuJHRvYXN0LWVycm9yLW1lc3NhZ2UtY29sb3I6ICM0NTA2MTE7XG4kdG9hc3QtZXJyb3Itc3VjY2Vzcy1jb2xvcjogI2Q5ZWVlZDtcbiR0b2FzdC1lcnJvci1idXR0b24tY29sb3I6ICNiMjFkMzk7XG5cbiR0b2FzdC1jbG9zZS1idXR0b24tY29sb3I6ICM3MzAwMTU7XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9pbmJveC9yZXBsaWVzL3JlcGx5LWRldGFpbHMvcmVwbHktdHJhbnNjcmliZS9yZXBseS10cmFuc2NyaWJlLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9zdHlsZXMvX21peGlucy5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFIRjtBQ29MRTtFRG5MRjtJQUtJLGVBQUE7RUFGRjtBQUNGO0FBSUU7RUFDRSxtQkFBQTtBQUZKO0FDNEtFO0VEM0tBO0lBSUksZUFBQTtFQURKO0FBQ0Y7QUFHSTtFQUNFLGNFbUZNO0VGbEZOLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFETjtBQUlJO0VBQ0UsY0VnRUM7RUYvREQsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFGTjtBQU1FO0VBQ0UsbUJFbkNJO0VGb0NKLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBSko7QUNnSkU7RURsSkE7SUFTSSxhQUFBO0lBQ0EscUJBQUE7RUFISjtBQUNGO0FBS0k7RUFDRSxzQkFBQTtBQUhOO0FDdUlFO0VEcklFO0lBSUksb0JBQUE7SUFDQSxnQkFBQTtJQUNBLFFBQUE7RUFGTjtBQUNGO0FBTUU7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUpKO0FDMkhFO0VEMUhBO0lBTUksc0JBQUE7SUFDQSxlQUFBO0lBQ0EsdUJBQUE7RUFISjtBQUNGO0FDb0hFO0VEL0dFO0lBRUkscUJBQUE7RUFITjtBQUNGO0FBTUk7RUFFRSxrQkFBQTtFQUNBLGdCQUFBO0FBTE47QUMyR0U7RUR6R0U7SUFNSSxXQUFBO0VBSk47QUFDRjtBQU9RO0VBQ0Usa0JBQUE7QUFMVjs7QUFZQTtFQUNFLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVRGOztBQVlBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBVEY7QUNxRkU7RUQ5RUY7SUFLSSxRQUFBO0VBUkY7QUFDRjtBQUVBLGdrZ0JBQWdrZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuQGltcG9ydCAnbG9vcC1kZXNpZ24tc3lzdGVtL2hlbHBlcnMnO1xuQGltcG9ydCAnbWl4aW5zJztcblxuLnRyYW5zY3JpYmUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDU5MnB4O1xuICBtYXJnaW46IDAgYXV0bztcblxuICBAaW5jbHVkZSBtb2JpbGUtb25seSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnRyYW5zY3JpYmUtaGVhZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuXG4gICAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgICAgcGFkZGluZzogMCBweFRvUmVtKDE2KTtcbiAgICB9XG5cbiAgICAmX190aXRsZSB7XG4gICAgICBjb2xvcjogJGRhcmstZ3JleTtcbiAgICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIH1cblxuICAgICZfX3N1YnRpdGxlIHtcbiAgICAgIGNvbG9yOiAkZ3JleTtcbiAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgICB9XG4gIH1cblxuICAudHJhbnNjcmliZS1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG5cbiAgICBAaW5jbHVkZSBtb2JpbGUtb25seSB7XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIH1cblxuICAgIGFwcC1hdWRpby1wbGF5ZXIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcblxuICAgICAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiB1bnNldDtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgb3JkZXI6IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnRyYW5zY3JpYmUtZm9vdGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHBhZGRpbmc6IDAgcHhUb1JlbSgxNik7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICB9XG5cbiAgICBhcHAtc2xpZGUtdG9nZ2xlIHtcbiAgICAgIEBpbmNsdWRlIG1vYmlsZS1vbmx5IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgICZfX3JlamVjdC1idXR0b24sXG4gICAgJl9fcmV2aWV3LWJ1dHRvbiB7XG4gICAgICBtaW4taGVpZ2h0OiBweFRvUmVtKDQwKTtcbiAgICAgIG1pbi13aWR0aDogcHhUb1JlbSgyMDgpO1xuXG4gICAgICBAaW5jbHVkZSBtb2JpbGUtb25seSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICA6Om5nLWRlZXAge1xuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IHB4VG9SZW0oNDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5nb3QtaXRfX3N1Ym1pdC1idG4ge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi10b3A6IDAuNzVyZW07XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zZW5zaXRpdmUtc3RvcnlfX3RhZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDFyZW07XG5cbiAgQGluY2x1ZGUgbW9iaWxlLW9ubHkge1xuICAgIG9yZGVyOiAzO1xuICB9XG59XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AbWl4aW4gZmxleC1nYXAoJGdhcCwgJGdsb2JhbDogZmFsc2UpIHtcbiAgbWFyZ2luLXRvcDogKC0kZ2FwKTtcbiAgQGluY2x1ZGUgbWFyZ2luLWxlZnQoKC0kZ2FwKSwgJGdsb2JhbCk7XG5cbiAgPiAqIHtcbiAgICBtYXJnaW4tdG9wOiAkZ2FwO1xuICAgIEBpbmNsdWRlIG1hcmdpbi1sZWZ0KCRnYXAsICRnbG9iYWwpO1xuICB9XG59XG5cbkBtaXhpbiBiYXNlLWNvbnRhaW5lcigkY29udGVudC13aWR0aCkge1xuICAkZGVza3RvcC1wYWRkaW5nOiAycmVtO1xuICBtYXgtd2lkdGg6IGNhbGMoI3skY29udGVudC13aWR0aH0gKyAoI3skZGVza3RvcC1wYWRkaW5nfSkpO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQycmVtKSB7XG4gICAgQGluY2x1ZGUgcGFkZGluZy1sZWZ0KCRkZXNrdG9wLXBhZGRpbmcsIHRydWUpO1xuICAgIEBpbmNsdWRlIHBhZGRpbmctcmlnaHQoJGRlc2t0b3AtcGFkZGluZywgdHJ1ZSk7XG4gIH1cbn1cblxuQG1peGluIGNlbnRlckFic29sdXRlRWxlbWVudCB7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbkBtaXhpbiBvbmx5LWx0ci1nbG9iYWwge1xuICBodG1sOm5vdChbZGlyPSdydGwnXSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsLWdsb2JhbCB7XG4gIGh0bWxbZGlyPSdydGwnXSAmIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1sdHIge1xuICA6aG9zdC1jb250ZXh0KGh0bWw6bm90KFtkaXI9J3J0bCddKSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktcnRsIHtcbiAgOmhvc3QtY29udGV4dChodG1sW2Rpcj0ncnRsJ10pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBydGwtdmFsdWUoJHByb3BlcnR5LCAkbHRyLXZhbHVlLCAkcnRsLXZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaWYgJGdsb2JhbCA9PSB0cnVlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ci1nbG9iYWwge1xuICAgICAgI3skcHJvcGVydHl9OiAkbHRyLXZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsLWdsb2JhbCB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRydGwtdmFsdWU7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBvbmx5LWx0ciB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRsdHItdmFsdWU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgb25seS1ydGwge1xuICAgICAgI3skcHJvcGVydHl9OiAkcnRsLXZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gcnRsLXByb3BlcnR5KCRsdHItcHJvcGVydHksICRydGwtcHJvcGVydHksICR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGlmICRnbG9iYWwgPT0gdHJ1ZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHItZ2xvYmFsIHtcbiAgICAgICN7JGx0ci1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbmx5LXJ0bC1nbG9iYWwge1xuICAgICAgI3skcnRsLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgb25seS1sdHIge1xuICAgICAgI3skbHRyLXByb3BlcnR5fTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG9ubHktcnRsIHtcbiAgICAgICN7JHJ0bC1wcm9wZXJ0eX06ICR2YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hcmdpbi1sZWZ0KCRtYXJnaW4sICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShtYXJnaW4tbGVmdCwgbWFyZ2luLXJpZ2h0LCAkbWFyZ2luLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIG1hcmdpbi1yaWdodCgkbWFyZ2luLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkobWFyZ2luLXJpZ2h0LCBtYXJnaW4tbGVmdCwgJG1hcmdpbiwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nKCRwYWRkaW5nVG9wLCAkcGFkZGluZ1JpZ2h0LCAkcGFkZGluZ0JvdHRvbSwgJHBhZGRpbmdMZWZ0LCAkZ2xvYmFsOiBmYWxzZSkge1xuICBwYWRkaW5nLXRvcDogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nUmlnaHQsICRnbG9iYWwpO1xuICBwYWRkaW5nLWJvdHRvbTogJHBhZGRpbmdUb3A7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nTGVmdCwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBwYWRkaW5nLWxlZnQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLWxlZnQsIHBhZGRpbmctcmlnaHQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHBhZGRpbmctcmlnaHQoJHBhZGRpbmcsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShwYWRkaW5nLXJpZ2h0LCBwYWRkaW5nLWxlZnQsICRwYWRkaW5nLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHRleHQtYWxpZ24tbGVmdCgkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtdmFsdWUodGV4dC1hbGlnbiwgbGVmdCwgcmlnaHQsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gbGVmdCgkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShsZWZ0LCByaWdodCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIHJpZ2h0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KHJpZ2h0LCBsZWZ0LCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gdHJhbnNsYXRlWFkoJHZhbHVlWCwgJHZhbHVlWSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKHRyYW5zZm9ybSwgdHJhbnNsYXRlKCR2YWx1ZVgsICR2YWx1ZVkpLCB0cmFuc2xhdGUoLSR2YWx1ZVgsICR2YWx1ZVkpLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1sZWZ0KCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1sZWZ0LCBib3JkZXItcmlnaHQsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItcmlnaHQoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXJpZ2h0LCBib3JkZXItbGVmdCwgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMoJHZhbHVlLCAkZ2xvYmFsOiBmYWxzZSkge1xuICBAaW5jbHVkZSBydGwtcHJvcGVydHkoYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMsIGJvcmRlci10b3AtbGVmdC1yYWRpdXMsICR2YWx1ZSwgJGdsb2JhbCk7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzKCR2YWx1ZSwgJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXByb3BlcnR5KGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCAkdmFsdWUsICRnbG9iYWwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cygkdmFsdWUsICRnbG9iYWw6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJ0bC1wcm9wZXJ0eShib3JkZXItdG9wLWxlZnQtcmFkaXVzLCBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cywgJHZhbHVlLCAkZ2xvYmFsKTtcbn1cblxuQG1peGluIGZsb2F0LWxlZnQoJGdsb2JhbDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcnRsLXZhbHVlKGZsb2F0LCBsZWZ0LCByaWdodCwgJGdsb2JhbDogZmFsc2UpO1xufVxuXG5AbWl4aW4gZmxvYXQtcmlnaHQge1xuICBAaW5jbHVkZSBydGwtdmFsdWUoZmxvYXQsIHJpZ2h0LCBsZWZ0LCAkZ2xvYmFsOiBmYWxzZSk7XG59XG5cbkBtaXhpbiBzbWFsbC1kZXNrdG9wLW9ubHkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbGcpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC14bCAtIDAuMXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1hbmQtdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbGcgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBzbWFsbC1tb2JpbGUtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1zIC0gMC4xcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbWQgLSAwLjFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0YWJsZXQtb25seSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS11cCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBkaXNhYmxlLXNjcm9sbGJhciB7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIiwiJHN0YW5kYXJkRm9udEZhbWlseTogJ05vdG8gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGNvbnRlbnQtdG9wLXBhZGRpbmc6IDNyZW07XG4kcG9zdC1saXN0LWJnOiAjZGFkYWRhO1xuJHdoaXRlOiAjZmZmZmZmO1xuJHBvc3QtcHJldmlldy1iZzogd2hpdGU7XG4kbGlnaHQtZ3JheS1iZzogI2Y0ZjRmNDtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1sZWZ0OiAyLjM0NHJlbTtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1yaWdodDogMS4wNjNyZW07XG4kcG9zdC1wcmV2aWV3LXBhZGRpbmc6IDIuNXJlbSAkcG9zdC1wcmV2aWV3LXBhZGRpbmctcmlnaHQgMS4yNXJlbSAkcG9zdC1wcmV2aWV3LXBhZGRpbmctbGVmdDtcbiRwb3N0LXByZXZpZXctcGFkZGluZy1tb2JpbGU6IDFyZW0gMXJlbSAwLjVyZW0gMXJlbTtcbiRwb3N0LXBhZGRpbmctYm90dG9tOiAxcmVtO1xuJHBvc3QtcHJldmlldy1ndXR0ZXI6IDJweDtcbiRwb3N0LWhpZ2hsaWdodC1jb2xvcjogIzU3MGY4NTtcbiRjb2xvci1wdXJwbGUtOTA6ICMzMTEzNWU7XG4kY29sb3ItcHVycGxlLTYwOiAjOTg4YWFlO1xuJGNvbG9yLXB1cnBsZS01MDogIzk4ODlhZjtcbiRjb2xvci1wdXJwbGUtMTA6ICNmNWYzZjc7XG4kY29sb3ItcHVycGxlLWxpZ2h0OiAjNGIzNWJjO1xuJGNvbG9yLXB1cnBsZS12ZXJ5LWxpZ2h0OiAjODY2YWIwO1xuJGNvbG9yLXB1cnBsZS1zdGVwcGVyOiAjNGEyYjdhO1xuJGNvbG9yLWdyZWVuLTEwMDogIzA1MjgwNDtcbiRjb2xvci1ncmVlbi05MDogIzBkM2QwYjtcbiRjb2xvci1ncmVlbi04MDogIzFmNmIxZTtcbiRjb2xvci1ncmVlbi03MDogIzM1OGEzNDtcbiRjb2xvci1ncmVlbi02MDogIzZkOWE2ZTtcbiRjb2xvci1ncmVlbi01MDogIzg5YTg4ZjtcbiRjb2xvci1ncmVlbi00MDogIzlmYzhhNjtcbiRjb2xvci1ncmVlbi0zMDogI2FhZDZiMztcbiRjb2xvci1ncmVlbi0yMDogI2M5ZTlkMTtcbiRjb2xvci1ncmVlbi0xMDogI2YzZjdmMztcbiRjb2xvci1ncmVlbi1zdGVwcGVyOiAjMTA3RDc5O1xuJGNvbG9yLWdyZWVuLW1lZGl1bTogI2FkZGFhZjtcbiRjb2xvci1ncmVlbi1saWdodDogIzNBQjA5ODtcbiRjb2xvci1ncmVlbi12ZXJ5LWxpZ2h0OiAjRURGRkZDO1xuJGdyZXktMTogI2Q2ZDBkZjtcbiRzdXBwb3J0LTAxOiAjZGExZTI4O1xuJGVycm9yOiAjZWUyMzJmO1xuJHRleHQtYmxhY2s6ICMxNjE2MTY7XG4kdGV4dC1zZWNvbmRhcnk6ICMzOTM5Mzk7XG4kdGV4dC1ncmF5ZWQ6ICM1MjUyNTI7XG4kdGV4dC1ncmF5ZWQ4MDogIzhmOGI4YjtcbiR0ZXh0LWdyYXktY2F0OiAjNmQ3Mjc4O1xuJHVpLWJhY2tncm91bmQtZ3JheTogI2Y4ZjhmOTtcbiRib3JkZXI6ICNlOGU3ZWE7XG4kZW50aXR5LWJvcmRlci1jb2xvcjogIzFjMGYzMDIxO1xuJGxvYWRpbmctYmc6IHJnYigwIDAgMCAvIDE4JSk7XG4kc3VwcG9ydC0wNDogIzAwNDNjZTtcbiRsb29wLXVzZXJuYW1lOiAjMTk4MDM4O1xuJGxvb3AtYWN0aXZlLWN1cnJlbnQtdXNlcjogIzI0YTE0ODtcbiR3YXJtLWdyYXktMTAtY29sb3I6ICNmN2YzZjI7XG4kd2FybS1ncmF5LTIwLWNvbG9yOiAjZTVlMGRmO1xuJGhlYWRpbmctMS1jb2xvcjogIzFjMGYzMDtcbiRoZWFkaW5nLTItY29sb3I6ICMzMjA3NGQ7XG4kaGVhZGluZy0zLWNvbG9yOiAjMmYyNzM1O1xuJG1vYmlsZS1pY29uLWNvbG9yOiAjMWMwZjMwO1xuJHN0YXRlLWRpc2FibGVkLTAyOiAjYzZjNmM2O1xuJGxpbmstMDI6ICM1NjAxYjI7XG4kaGVhZGVyLXB1cnBsZTogIzMxMTM1ZTtcbiRoZWFkZXItZ3JlZW46ICMxMDdkNzk7XG4kcHVycGxlLWxpZ2h0OiAjY2JjNGQ3O1xuJHB1cnBsZS1iYWNrZ3JvdW5kLWxpZ2h0OiAjZGNkNWU3O1xuJGxvb3AtaW50ZXJhY3RpdmUtMDE6ICMxMDdkNzk7XG4kbG9vcC1pbnRlcmFjdGl2ZS0wMS1vcGFjaXR5OiByZ2JhKDE2LCAxMjUsIDEyMSwgMC4zKTtcbiRmaWx0ZXJzLWdyZWVuOiAjMDU2NzYzO1xuLy8gQnJlYWtwb2ludHNcblxuJGJyZWFrcG9pbnQtczogMzc1cHg7XG4kYnJlYWtwb2ludC1zbTogNDIwcHg7XG4kYnJlYWtwb2ludC1tZDogNzY4cHg7XG4kYnJlYWtwb2ludC1sZzogMTA4MHB4O1xuJGJyZWFrcG9pbnQteGw6IDEyNzVweDtcblxuJGJyZWFrcG9pbnQtbWQtdjI6IDgyMHB4O1xuXG4kaGVhZGVyLWhlaWdodDogNC4zNzVyZW07XG4kaGVhZGVyLWhlaWdodC12MjogNC4zNzVyZW07XG4kc3RhdGUtc2VsZWN0ZWQtdWk6ICNlMGUwZTA7XG4kYy1sZWZ0LXBhZGRpbmc6IDEuNXJlbTtcbiRtZW51LWFjdGl2ZS1jb2xvcjogIzNBQjA5ODtcbiRtZW51LWhvdmVyLWNvbG9yOiAjM0FCMDk4O1xuJHRhYi1pbmFjdGl2ZS1jb2xvcjogIzg5YWY5MztcbiRsaW5lLWNvbG9yOiAjZDBkZmQyO1xuJGJvcmRlci1ncmF5OiAjY2NjY2NjO1xuJHRleHQtZ3JheTogIzgwODA4MDtcbiRiYXNlLWNvbnRhaW5lci13aWR0aDogODEuMTI0cmVtO1xuJGhlYWRlci11bmRlcmxpbmUtaGVpZ2h0OiAwLjMxM3JlbTtcblxuLy8gTW9kZXJhdG9yIHJldmlldyBzZWN0aW9uc1xuJGZvb3Rlci1oZWlnaHQ6IDRyZW07XG4kdG9wYmFyLWhlaWdodDogMTAuNXJlbTtcbiRzdGVwcGVyLWhlaWdodDogNi43cmVtO1xuXG4vLyBOZXcgU3RvcnkgZmxvdyAvIHN0b3J5IGRldGFpbHMgdmFyaWFibGVzXG4kZ3JleTogIzY1NjU2NTtcbiRsaWdodC1ncmV5LTI6ICNiMWI0YjY7XG4kbGlnaHQtZ3JleS0zOiAjYjRiNGI0O1xuJGxpZ2h0LWdyZXktNDogI2NmZDNkODtcbiRsaWdodC1ncmV5LTU6ICNkOWUwZTc7XG4kbGlnaHQtZ3JleS02OiAjZjFmMmYyO1xuJGxpZ2h0LWdyZXktNzogI2M0YzRjNDtcbiRsaWdodC1ncmV5LTg6ICNlOWU5ZTk7XG4kbGlnaHQtZ3JleS05OiAjZTZlYWVkO1xuJGxpZ2gtZ3JleS1zZXBhcmF0b3I6ICNjMGMwYzA7XG4kZGFyay1ncmV5OiAjMWExYTFhO1xuJGRhcmstZ3JleS01MDogcmdiKDI2LCAyNiwgMjYsIDAuNSk7XG4kYm9yZGVyLWdyZXk6ICNjN2NkZDQ7XG4kbGlnaHQtcHVycGxlOiAjZWFlYWVhO1xuJGlucHV0LWRpc2FibGVkLWJnOiAjZjRmNmY4O1xuJGVycm9yLTI6ICNkZTIyMmQ7XG4kZGFuZ2VyOiAjYzkzMDRkO1xuJHByZXZpb3VzLXBpbGwtY29sb3I6ICM3MThkNmY7XG4kdG9vbHRpcC1ncmV5OiAjYWJhYmFiO1xuJGxpZ2h0LWdyZWVuOiAjY2ZlNWU0NjY7XG5cbiRmaWx0ZXJzLW1vZGFsLWhlYWRlci16aW5kZXg6IDEwMDAwO1xuJG1vZGFsLXppbmRleDogOTk5OTtcbiRsb2NhdGlvbi1vdmVybGF5LXppbmRleDogOTAwMTtcbiRoZWFkZXItYXNpZGUtemluZGV4OiA4MDAyO1xuJGhlYWRlci1hc2lkZS1iYWNrZ3JvdW5kLXppbmRleDogODAwMTtcbiRoZWFkZXItemluZGV4OiA4MDAwO1xuJG5hdmlnYXRpb24temluZGV4OiA4MDAwO1xuJHBhZ2UtbG9hZGluZy16aW5kZXg6IDcwMDE7XG4kdG9vbHRpcC16aW5kZXg6IDcwMDA7XG4kbmV3LXN0b3J5LWNvbnRlbnQtc3RhdGUtemluZGV4OiA1MDA7XG4kZmlsdGVyLWRyb3Bkb3duLXppbmRleDogMTAwO1xuJG1vZGFsLXRvcC1pbmRpY2F0b3ItemluZGV4OiA1MTtcbiRtb2RhbC10b3AtaW5kaWNhdG9yLWJhY2tncm91bmQtemluZGV4OiA1MTtcbiRjaGFydC16aW5kZXg6IDE7XG4kY2hhcnQtY29udHJvbC16aW5kZXg6IDI7XG5cbiRzbGlkZS10b2dnbGUtZGlzYWJsZWQtb3B0aW9uLWJhY2tncm91bmQ6ICNkZGRkZGQ7XG5cbiR0b2FzdC1pbmZvLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuJHRvYXN0LWluZm8tdGl0bGUtY29sb3I6ICM0OTQ5NDk7XG4kdG9hc3QtaW5mby1tZXNzYWdlLWNvbG9yOiAjNDIyYzAwO1xuJHRvYXN0LWluZm8tYnV0dG9uLWNvbG9yOiAjNmM0ZTk5O1xuXG4kdG9hc3Qtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiAjZDllZWVkO1xuJHRvYXN0LXN1Y2Nlc3MtdGl0bGUtY29sb3I6ICMwMDQ1NDI7XG4kdG9hc3Qtc3VjY2Vzcy1tZXNzYWdlLWNvbG9yOiAjMDEzMjMwO1xuJHRvYXN0LXN1Y2Nlc3MtYnV0dG9uLWNvbG9yOiAjMDE2OTY1O1xuXG4kdG9hc3Qtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMWQ1O1xuJHRvYXN0LXdhcm5pbmctdGl0bGUtY29sb3I6ICM2YjQ3MDA7XG4kdG9hc3Qtd2FybmluZy1tZXNzYWdlLWNvbG9yOiAjNDIyYzAwO1xuJHRvYXN0LXdhcm5pbmctYnV0dG9uLWNvbG9yOiAjY2M4ZjE0O1xuXG4kdG9hc3QtZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogI2Y1ZDVkYjtcbiR0b2FzdC1lcnJvci10aXRsZS1jb2xvcjogIzczMDAxNTtcbiR0b2FzdC1lcnJvci1tZXNzYWdlLWNvbG9yOiAjNDUwNjExO1xuJHRvYXN0LWVycm9yLXN1Y2Nlc3MtY29sb3I6ICNkOWVlZWQ7XG4kdG9hc3QtZXJyb3ItYnV0dG9uLWNvbG9yOiAjYjIxZDM5O1xuXG4kdG9hc3QtY2xvc2UtYnV0dG9uLWNvbG9yOiAjNzMwMDE1O1xuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 37925:
/*!**************************************************************!*\
  !*** ./src/app/modules/inbox/shared/inbox-post.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InboxPostBaseComponent": () => (/* binding */ InboxPostBaseComponent)
/* harmony export */ });
/* harmony import */ var _app_core_services_api_generic_retry_strategy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/core/services/api/generic-retry-strategy */ 71169);
/* harmony import */ var _app_core_services_api_model_story_translation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/services/api/model/story-translation */ 66234);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 73414);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 39230);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 8838);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var src_app_shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/base.component */ 70697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _core_services_locales_supported_languages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/locales/supported-languages.service */ 90423);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ 94817);









class InboxPostBaseComponent extends src_app_shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
  constructor(translateService, languageService, toastr) {
    super();
    this.translateService = translateService;
    this.languageService = languageService;
    this.toastr = toastr;
    this.originalLanguageError = null;
    this.translatedText = '';
    this.processing = false;
    this.allTranslated = false;
    this.atLeastOneTranslated = false;
  }
  setup(id, translations, originalLanguage) {
    this.id = id;
    this.translations = translations;
    this.originalLanguage = originalLanguage;
  }
  initLanguages() {
    this.languageService.allLanguages$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(languages => {
      this.supportedLanguages = languages;
      this.languageOptions = this.getLanguageOptions();
      const translatedLanguages = [];
      this.translations.forEach(translation => translation.status !== _app_core_services_api_model_story_translation__WEBPACK_IMPORTED_MODULE_1__.TRANSLATION_STATUS_CONSTANTS.ERROR && translatedLanguages.push(translation.code));
      this.translationOptions = this.supportedLanguages.map(language => ({
        id: language.language,
        name: this.translateService.instant(`languages.${language.language}`)
      })).filter(option => translatedLanguages.indexOf(option.id) === -1 && option.id !== this.originalLanguage);
      this.translatedText = '';
      this.targetLanguage = null;
      this.allTranslated = !this.translationOptions.length;
      this.atLeastOneTranslated = this.translations.some(tr => tr.status === _app_core_services_api_model_story_translation__WEBPACK_IMPORTED_MODULE_1__.TRANSLATION_STATUS_CONSTANTS.TRANSLATED);
    });
  }
  refreshTranslationsByFn(reqFunction, affectedLang = '', minimumRepeat = 4) {
    this.processing = true;
    const iterations = {
      current: 0,
      min: minimumRepeat,
      max: 15
    };
    const retryWhenSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    reqFunction(this.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.delay)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.repeat)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.retryWhen)((0,_app_core_services_api_generic_retry_strategy__WEBPACK_IMPORTED_MODULE_0__.genericRetryStrategy)()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(retryWhenSubject$)).subscribe(r => {
      this.translations = r;
      let mtSupportedLength = 0;
      this.supportedLanguages.forEach(a => {
        if (a.mtSupported) {
          mtSupportedLength++;
        }
      });
      iterations.current++;
      const machineInProgress = r.find(a => a.status === _app_core_services_api_model_story_translation__WEBPACK_IMPORTED_MODULE_1__.TRANSLATION_STATUS_CONSTANTS.TRANSLATING && a.type === _app_core_services_api_model_story_translation__WEBPACK_IMPORTED_MODULE_1__.TRANSLATION_TYPE.MACHINE);
      const iterationsCompleted = iterations.current > iterations.min;
      const maxReached = iterations.current >= iterations.max;
      const affectedLangPresent = !!r.find(a => a.code === affectedLang);
      const shouldStop = maxReached || iterationsCompleted && !machineInProgress && (!affectedLang || affectedLang && affectedLangPresent);
      if (shouldStop) {
        this.processing = false;
        this.translations = this.translations.map(t => {
          if (t.status === _app_core_services_api_model_story_translation__WEBPACK_IMPORTED_MODULE_1__.TRANSLATION_STATUS_CONSTANTS.TRANSLATING && t.type === _app_core_services_api_model_story_translation__WEBPACK_IMPORTED_MODULE_1__.TRANSLATION_TYPE.MACHINE) {
            t.status = _app_core_services_api_model_story_translation__WEBPACK_IMPORTED_MODULE_1__.TRANSLATION_STATUS_CONSTANTS.ERROR;
            t.content = null;
          }
          return t;
        });
        retryWhenSubject$.next(null);
        retryWhenSubject$.complete();
      }
      this.initLanguages();
    });
  }
  getLanguageOptions() {
    return this.supportedLanguages?.map(language => ({
      id: language.language,
      name: this.translateService.instant(`languages.${language.language}`)
    }));
  }
  updatedLanguages(data) {
    this.finalTranslationsData = data.filter(i => i.content && i.status);
  }
  submitTranslationByFn(reqFunction) {
    this.processing = true;
    return reqFunction(this.id, {
      language: this.targetLanguage,
      content: this.translatedText
    });
  }
  verifyTranslationByFn(reqFunction, payload) {
    this.processing = true;
    return reqFunction(this.id, payload);
  }
  deleteTranslationByFn(reqFunction, language) {
    this.processing = true;
    return reqFunction(this.id, language);
  }
  retryTranslationByFn(reqFunction, language) {
    this.processing = true;
    return reqFunction(this.id, language);
  }
  showErrorNotification(message) {
    this.toastr.error(this.translateService.instant(`error.generic.title`), message || this.translateService.instant('error.generic.subtitle'));
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  static #_ = this.ɵfac = function InboxPostBaseComponent_Factory(t) {
    return new (t || InboxPostBaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_locales_supported_languages_service__WEBPACK_IMPORTED_MODULE_3__.SupportedLanguagesService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: InboxPostBaseComponent,
    selectors: [["ng-component"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]],
    decls: 0,
    vars: 0,
    template: function InboxPostBaseComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
}

/***/ }),

/***/ 47211:
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/slide-toggle/slide-toggle.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlideToggleModule": () => (/* binding */ SlideToggleModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _app_shared_icons_close_icon_close_icon_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/icons/close-icon/close-icon.module */ 96958);
/* harmony import */ var _app_shared_icons_done_icon_done_icon_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/icons/done-icon/done-icon.module */ 81188);
/* harmony import */ var _slide_toggle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slide-toggle.component */ 47124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);





class SlideToggleModule {
  static #_ = this.ɵfac = function SlideToggleModule_Factory(t) {
    return new (t || SlideToggleModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: SlideToggleModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _app_shared_icons_close_icon_close_icon_module__WEBPACK_IMPORTED_MODULE_0__.CloseIconModule, _app_shared_icons_done_icon_done_icon_module__WEBPACK_IMPORTED_MODULE_1__.DoneIconModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SlideToggleModule, {
    declarations: [_slide_toggle_component__WEBPACK_IMPORTED_MODULE_2__.SlideToggleComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _app_shared_icons_close_icon_close_icon_module__WEBPACK_IMPORTED_MODULE_0__.CloseIconModule, _app_shared_icons_done_icon_done_icon_module__WEBPACK_IMPORTED_MODULE_1__.DoneIconModule],
    exports: [_slide_toggle_component__WEBPACK_IMPORTED_MODULE_2__.SlideToggleComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_modules_inbox_replies_reply-details_reply-details_module_ts.js.map