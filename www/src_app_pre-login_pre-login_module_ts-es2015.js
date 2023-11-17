(self["webpackChunkphoto_gallery_ng_capacitor"] = self["webpackChunkphoto_gallery_ng_capacitor"] || []).push([["src_app_pre-login_pre-login_module_ts"],{

/***/ 20287:
/*!*******************************************************!*\
  !*** ./src/app/pre-login/pre-login-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreLoginPageRoutingModule": function() { return /* binding */ PreLoginPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _pre_login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pre-login.page */ 83222);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




const routes = [
    {
        path: '',
        component: _pre_login_page__WEBPACK_IMPORTED_MODULE_0__.PreLoginPage
    }
];
class PreLoginPageRoutingModule {
}
PreLoginPageRoutingModule.ɵfac = function PreLoginPageRoutingModule_Factory(t) { return new (t || PreLoginPageRoutingModule)(); };
PreLoginPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PreLoginPageRoutingModule });
PreLoginPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PreLoginPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 39478:
/*!***********************************************!*\
  !*** ./src/app/pre-login/pre-login.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreLoginPageModule": function() { return /* binding */ PreLoginPageModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _pre_login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pre-login-routing.module */ 20287);
/* harmony import */ var _pre_login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pre-login.page */ 83222);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);






class PreLoginPageModule {
}
PreLoginPageModule.ɵfac = function PreLoginPageModule_Factory(t) { return new (t || PreLoginPageModule)(); };
PreLoginPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PreLoginPageModule });
PreLoginPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _pre_login_routing_module__WEBPACK_IMPORTED_MODULE_0__.PreLoginPageRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PreLoginPageModule, { declarations: [_pre_login_page__WEBPACK_IMPORTED_MODULE_1__.PreLoginPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _pre_login_routing_module__WEBPACK_IMPORTED_MODULE_0__.PreLoginPageRoutingModule] }); })();


/***/ }),

/***/ 83222:
/*!*********************************************!*\
  !*** ./src/app/pre-login/pre-login.page.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreLoginPage": function() { return /* binding */ PreLoginPage; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);




class PreLoginPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    login() {
        this.router.navigate(['login']);
    }
    signUp() {
        this.router.navigate(['create-acc']);
    }
}
PreLoginPage.ɵfac = function PreLoginPage_Factory(t) { return new (t || PreLoginPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
PreLoginPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PreLoginPage, selectors: [["app-pre-login"]], decls: 16, vars: 0, consts: [[1, "ion-no-border"], [1, "ion-no-margin"], ["src", "assets/imgs/loginHeader.png"], [1, "sign-in-btns"], ["fill", "solid", "shape", "round", 1, "login", 3, "click"], ["fill", "outline", "shape", "round", 1, "create", 3, "click"]], template: function PreLoginPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Welcome ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " to the MBC Challenge! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreLoginPage_Template_ion_button_click_12_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreLoginPage_Template_ion_button_click_14_listener() { return ctx.signUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButton], styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-color-background);\n}\n\nion-header[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --ion-background-color: transparent;\n  --opacity: 0;\n}\n\n.sign-in-btns[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  text-align: center;\n}\n\n.login[_ngcontent-%COMP%] {\n  font-size: 15px;\n  --background: red;\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n}\n\n.create[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 15px;\n  --border-color: red;\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n}\n\nion-card[_ngcontent-%COMP%] {\n  --ion-background-color: transparent;\n  box-shadow: none;\n}\n\nion-card-title[_ngcontent-%COMP%] {\n  font-size: 50px;\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n  color: red;\n  text-align: center;\n}\n\nion-card-subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZS1sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5Q0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1DQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0VBQUE7QUFHSjs7QUFBQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxzRUFBQTtBQUdKOztBQUFBO0VBQ0ksbUNBQUE7RUFDQSxnQkFBQTtBQUdKOztBQUFBO0VBQ0ksZUFBQTtFQUNBLHNFQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFHSiIsImZpbGUiOiJwcmUtbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYmFja2dyb3VuZCk7XG59XG5cbmlvbi1oZWFkZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlXG59XG5cbmlvbi10b29sYmFye1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyBcbiAgICAtLW9wYWNpdHk6IDA7XG59XG4uc2lnbi1pbi1idG5ze1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbn1cbi5sb2dpbntcbiAgICBmb250LXNpemU6MTVweDtcbiAgICAtLWJhY2tncm91bmQ6IHJlZDtcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xufVxuXG4uY3JlYXRle1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOjE1cHg7XG4gICAgLS1ib3JkZXItY29sb3I6IHJlZDtcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xufVxuXG5pb24tY2FyZHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgXG4gICAgYm94LXNoYWRvdzpub25lO1xufVxuXG5pb24tY2FyZC10aXRsZXtcbiAgICBmb250LXNpemU6NTBweDtcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiByZWQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tY2FyZC1zdWJ0aXRsZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pre-login_pre-login_module_ts-es2015.js.map