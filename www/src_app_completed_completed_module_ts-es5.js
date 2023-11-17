(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkphoto_gallery_ng_capacitor"] = self["webpackChunkphoto_gallery_ng_capacitor"] || []).push([["src_app_completed_completed_module_ts"], {
    /***/
    18450:
    /*!*******************************************************!*\
      !*** ./src/app/completed/completed-routing.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CompletedPageRoutingModule": function CompletedPageRoutingModule() {
          return (
            /* binding */
            _CompletedPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _completed_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./completed.page */
      57408);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _completed_page__WEBPACK_IMPORTED_MODULE_0__.CompletedPage
      }];

      var _CompletedPageRoutingModule = function _CompletedPageRoutingModule() {
        _classCallCheck(this, _CompletedPageRoutingModule);
      };

      _CompletedPageRoutingModule.ɵfac = function CompletedPageRoutingModule_Factory(t) {
        return new (t || _CompletedPageRoutingModule)();
      };

      _CompletedPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _CompletedPageRoutingModule
      });
      _CompletedPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_CompletedPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    8664:
    /*!***********************************************!*\
      !*** ./src/app/completed/completed.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CompletedPageModule": function CompletedPageModule() {
          return (
            /* binding */
            _CompletedPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _completed_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./completed-routing.module */
      18450);
      /* harmony import */


      var _completed_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./completed.page */
      57408);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _CompletedPageModule = function _CompletedPageModule() {
        _classCallCheck(this, _CompletedPageModule);
      };

      _CompletedPageModule.ɵfac = function CompletedPageModule_Factory(t) {
        return new (t || _CompletedPageModule)();
      };

      _CompletedPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _CompletedPageModule
      });
      _CompletedPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _completed_routing_module__WEBPACK_IMPORTED_MODULE_0__.CompletedPageRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_CompletedPageModule, {
          declarations: [_completed_page__WEBPACK_IMPORTED_MODULE_1__.CompletedPage],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _completed_routing_module__WEBPACK_IMPORTED_MODULE_0__.CompletedPageRoutingModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_completed_completed_module_ts-es5.js.map