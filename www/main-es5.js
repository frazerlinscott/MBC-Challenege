(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkphoto_gallery_ng_capacitor"] = self["webpackChunkphoto_gallery_ng_capacitor"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: 'pre-login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pre-login_pre-login_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pre-login/pre-login.module */
          39478)).then(function (m) {
            return m.PreLoginPageModule;
          });
        }
      }, {
        path: '',
        redirectTo: 'pre-login',
        pathMatch: 'full'
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./login/login.module */
          80107)).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'create-acc',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_create-acc_create-acc_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./create-acc/create-acc.module */
          32954)).then(function (m) {
            return m.CreateAccPageModule;
          });
        }
      }, {
        path: 'home/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./home/home.module */
          3467)).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'main/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_main_main_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./main/main.module */
          65705)).then(function (m) {
            return m.MainPageModule;
          });
        }
      }, {
        path: 'main',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_main_main_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./main/main.module */
          65705)).then(function (m) {
            return m.MainPageModule;
          });
        }
      }, {
        path: 'edit-workout',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
          /*! ./edit-workout/edit-workout.module */
          58458)).then(function (m) {
            return m.EditWorkoutPageModule;
          });
        }
      }, {
        path: 'photo/:id',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
          /*! ./photo/photo.module */
          51727)).then(function (m) {
            return m.PhotoPageModule;
          });
        }
      }, {
        path: 'view-day',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_view-day_view-day_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./view-day/view-day.module */
          5323)).then(function (m) {
            return m.ViewDayPageModule;
          });
        }
      }, {
        path: 'progress/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_progress_progress_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./progress/progress.module */
          17072)).then(function (m) {
            return m.ProgressPageModule;
          });
        }
      }, {
        path: 'about',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./about/about.module */
          46985)).then(function (m) {
            return m.AboutPageModule;
          });
        }
      }, {
        path: 'completed/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_completed_completed_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./completed/completed.module */
          8664)).then(function (m) {
            return m.CompletedPageModule;
          });
        }
      }, {
        path: 'map',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_map_map_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./map/map.module */
          42622)).then(function (m) {
            return m.MapPageModule;
          });
        }
      } // {
      //   path: 'notes',
      //   loadChildren: () => import('./notes/notes.module').then( m => m.NotesPageModule)
      // },
      // {
      //   path: 'edit-workout',
      //   loadChildren: () => import('./edit-workout/edit-workout.module').then( m => m.EditWorkoutPageModule)
      // },
      // {
      //   path: 'home/:id',
      //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      // },
      // {
      //   path: 'create-acc',
      //   loadChildren: () => import('./create-acc/create-acc.module').then( m => m.CreateAccPageModule)
      // },
      // {
      //   path: 'photo/:id',
      //   loadChildren: () => import('./photo/photo.module').then( m => m.PhotoPageModule)
      // },
      // {
      //   path: 'camera',
      //   loadChildren: () => import('./camera/camera.module').then( m => m.CameraPageModule)
      // },
      // {
      //   path: 'notes/:id',
      //   loadChildren: () => import('./notes/notes.module').then( m => m.NotesPageModule)
      // },
      ];

      var _AppRoutingModule = function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      };

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__.PreloadAllModules
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/splash-screen */
      88592);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _AppComponent = /*#__PURE__*/function () {
        function _AppComponent() {
          _classCallCheck(this, _AppComponent);

          this.initializeApp();
        }

        _createClass(_AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            /* To make sure we provide the fastest app loading experience
               for our users, hide the splash screen automatically
               when the app is ready to be used:
                     https://capacitor.ionicframework.com/docs/apis/splash-screen#hiding-the-splash-screen
            */
            _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_0__.SplashScreen.hide();
          }
        }]);

        return _AppComponent;
      }();

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)();
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-app");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonApp, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonRouterOutlet],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/storage-angular */
      54925);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _workout1_workout1_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./workout1/workout1.module */
      86936);
      /* harmony import */


      var _edit_workout_edit_workout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit-workout/edit-workout.module */
      58458);
      /* harmony import */


      var _photo_photo_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./photo/photo.module */
      51727);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouteReuseStrategy,
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicRouteStrategy
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__.IonicStorageModule.forRoot(), _photo_photo_module__WEBPACK_IMPORTED_MODULE_4__.PhotoPageModule, _workout1_workout1_module__WEBPACK_IMPORTED_MODULE_2__.Workout1PageModule, _edit_workout_edit_workout_module__WEBPACK_IMPORTED_MODULE_3__.EditWorkoutPageModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__.IonicStorageModule, _photo_photo_module__WEBPACK_IMPORTED_MODULE_4__.PhotoPageModule, _workout1_workout1_module__WEBPACK_IMPORTED_MODULE_2__.Workout1PageModule, _edit_workout_edit_workout_module__WEBPACK_IMPORTED_MODULE_3__.EditWorkoutPageModule]
        });
      })();
      /***/

    },

    /***/
    5337:
    /*!*************************************************************!*\
      !*** ./src/app/edit-workout/edit-workout-routing.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditWorkoutPageRoutingModule": function EditWorkoutPageRoutingModule() {
          return (
            /* binding */
            _EditWorkoutPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _edit_workout_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./edit-workout.page */
      28298);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _edit_workout_page__WEBPACK_IMPORTED_MODULE_0__.EditWorkoutPage
      }];

      var _EditWorkoutPageRoutingModule = function _EditWorkoutPageRoutingModule() {
        _classCallCheck(this, _EditWorkoutPageRoutingModule);
      };

      _EditWorkoutPageRoutingModule.ɵfac = function EditWorkoutPageRoutingModule_Factory(t) {
        return new (t || _EditWorkoutPageRoutingModule)();
      };

      _EditWorkoutPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _EditWorkoutPageRoutingModule
      });
      _EditWorkoutPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_EditWorkoutPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    58458:
    /*!*****************************************************!*\
      !*** ./src/app/edit-workout/edit-workout.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditWorkoutPageModule": function EditWorkoutPageModule() {
          return (
            /* binding */
            _EditWorkoutPageModule
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


      var _edit_workout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./edit-workout-routing.module */
      5337);
      /* harmony import */


      var _edit_workout_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./edit-workout.page */
      28298);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _EditWorkoutPageModule = function _EditWorkoutPageModule() {
        _classCallCheck(this, _EditWorkoutPageModule);
      };

      _EditWorkoutPageModule.ɵfac = function EditWorkoutPageModule_Factory(t) {
        return new (t || _EditWorkoutPageModule)();
      };

      _EditWorkoutPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _EditWorkoutPageModule
      });
      _EditWorkoutPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _edit_workout_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditWorkoutPageRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_EditWorkoutPageModule, {
          declarations: [_edit_workout_page__WEBPACK_IMPORTED_MODULE_1__.EditWorkoutPage],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _edit_workout_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditWorkoutPageRoutingModule]
        });
      })();
      /***/

    },

    /***/
    28298:
    /*!***************************************************!*\
      !*** ./src/app/edit-workout/edit-workout.page.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditWorkoutPage": function EditWorkoutPage() {
          return (
            /* binding */
            _EditWorkoutPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../services/data.service */
      52468);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _EditWorkoutPage = /*#__PURE__*/function () {
        function _EditWorkoutPage(dataService, navParams, modalController) {
          _classCallCheck(this, _EditWorkoutPage);

          this.dataService = dataService;
          this.navParams = navParams;
          this.modalController = modalController;
          this.workout = "";
          this.notes = "";
          this.USER_STORAGE_KEY = '';
        }

        _createClass(_EditWorkoutPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.index = this.navParams.get('index');
            this.workout = this.navParams.get('workout');
            this.notes = this.navParams.get('notes');
            this.page = this.navParams.get('currentPage');
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      // this.editedWorkout = await this.dataService.getStorageDataNew(2);
                      // let chosenINDEX = this.editedWorkout[this.index]
                      // console.log(chosenINDEX)
                      this.modalController.dismiss({
                        workout: this.workout,
                        notes: this.notes
                      });

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return _EditWorkoutPage;
      }();

      _EditWorkoutPage.ɵfac = function EditWorkoutPage_Factory(t) {
        return new (t || _EditWorkoutPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController));
      };

      _EditWorkoutPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _EditWorkoutPage,
        selectors: [["app-edit-workout"]],
        decls: 19,
        vars: 2,
        consts: [["padding", ""], [1, "background"], ["position", "floating"], ["type", "text", "clearInput", "", 3, "ngModel", "ngModelChange"], [2, "display", "flex", "justify-content", "center"], ["shape", "round", 1, "closeBtn", 3, "click"], ["name", "close-outline"]],
        template: function EditWorkoutPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "EditWorkout");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-content", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-list", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Workout");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EditWorkoutPage_Template_ion_input_ngModelChange_10_listener($event) {
              return ctx.workout = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Notes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EditWorkoutPage_Template_ion_input_ngModelChange_14_listener($event) {
              return ctx.notes = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ion-button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditWorkoutPage_Template_ion_button_click_16_listener() {
              return ctx.closeModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "CLOSE");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "ion-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.workout);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.notes);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon],
        styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-color-background);\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--ion-color-background);\n  color: var(--ion-color-red);\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n}\n\nion-item[_ngcontent-%COMP%] {\n  padding-right: 16px;\n  --background: var(--ion-color-background);\n  color: var(--ion-color-red);\n}\n\nion-list.background[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-background);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtd29ya291dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5Q0FBQTtBQUNKOztBQUVBO0VBQ0kseUNBQUE7RUFDQSwyQkFBQTtFQUNBLHNFQUFBO0FBQ0o7O0FBQ0U7RUFDRSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsMkJBQUE7QUFFSjs7QUFDQTtFQUNJLDZDQUFBO0FBRUoiLCJmaWxlIjoiZWRpdC13b3Jrb3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWJhY2tncm91bmQpO1xufVxuXG5pb24tdG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1iYWNrZ3JvdW5kKTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXJlZCk7XG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZjtcbiAgfVxuICBpb24taXRlbXtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWJhY2tncm91bmQpO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcmVkKTtcbn1cblxuaW9uLWxpc3QuYmFja2dyb3VuZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItYmFja2dyb3VuZCk7XG4gIH1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    98883:
    /*!***********************************************!*\
      !*** ./src/app/photo/photo-routing.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PhotoPageRoutingModule": function PhotoPageRoutingModule() {
          return (
            /* binding */
            _PhotoPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _photo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./photo.page */
      70561);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _photo_page__WEBPACK_IMPORTED_MODULE_0__.PhotoPage
      }];

      var _PhotoPageRoutingModule = function _PhotoPageRoutingModule() {
        _classCallCheck(this, _PhotoPageRoutingModule);
      };

      _PhotoPageRoutingModule.ɵfac = function PhotoPageRoutingModule_Factory(t) {
        return new (t || _PhotoPageRoutingModule)();
      };

      _PhotoPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _PhotoPageRoutingModule
      });
      _PhotoPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_PhotoPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    51727:
    /*!***************************************!*\
      !*** ./src/app/photo/photo.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PhotoPageModule": function PhotoPageModule() {
          return (
            /* binding */
            _PhotoPageModule
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


      var _photo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./photo-routing.module */
      98883);
      /* harmony import */


      var _photo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./photo.page */
      70561);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _PhotoPageModule = function _PhotoPageModule() {
        _classCallCheck(this, _PhotoPageModule);
      };

      _PhotoPageModule.ɵfac = function PhotoPageModule_Factory(t) {
        return new (t || _PhotoPageModule)();
      };

      _PhotoPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _PhotoPageModule
      });
      _PhotoPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _photo_routing_module__WEBPACK_IMPORTED_MODULE_0__.PhotoPageRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_PhotoPageModule, {
          declarations: [_photo_page__WEBPACK_IMPORTED_MODULE_1__.PhotoPage],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _photo_routing_module__WEBPACK_IMPORTED_MODULE_0__.PhotoPageRoutingModule]
        });
      })();
      /***/

    },

    /***/
    70561:
    /*!*************************************!*\
      !*** ./src/app/photo/photo.page.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PhotoPage": function PhotoPage() {
          return (
            /* binding */
            _PhotoPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _services_photo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../services/photo.service */
      61957);
      /* harmony import */


      var _view_day_view_day_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../view-day/view-day.page */
      69642);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function PhotoPage_ion_col_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-col", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PhotoPage_ion_col_9_Template_ion_img_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var photo_r1 = restoredCtx.$implicit;
            var position_r2 = restoredCtx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r3.showActionSheet(photo_r1, position_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var photo_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", photo_r1.webviewPath);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("DAY: ", photo_r1.day, "");
        }
      }

      var _PhotoPage = /*#__PURE__*/function () {
        function _PhotoPage(modalController, router, activatedRoute, photoService, actionSheetController) {
          _classCallCheck(this, _PhotoPage);

          this.modalController = modalController;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.photoService = photoService;
          this.actionSheetController = actionSheetController;
          this.CamBtnIsHidden = false;
          this.SaveBtnIsHidden = true;
          this.PHOTO_STORAGE_KEY = '';
        }

        _createClass(_PhotoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.photoInfo = this.activatedRoute.snapshot.paramMap.get("id");
                      this.allPhotoData = JSON.parse(this.photoInfo);
                      this.PHOTO_STORAGE_KEY = this.allPhotoData.storageKey;
                      this.numDay = this.allPhotoData.day;
                      console.log(this.PHOTO_STORAGE_KEY);
                      this.CamBtnIsHidden = false;
                      this.SaveBtnIsHidden = true;
                      _context2.next = 9;
                      return this.photoService.loadSaved(this.PHOTO_STORAGE_KEY);

                    case 9:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "savePhoto",
          value: function savePhoto() {
            this.photoService.addNewToGallery(this.numDay, this.PHOTO_STORAGE_KEY);
            this.CamBtnIsHidden = true;
            this.SaveBtnIsHidden = false;
          }
        }, {
          key: "showActionSheet",
          value: function showActionSheet(photo, position) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.actionSheetController.create({
                        header: 'Photos',
                        buttons: [{
                          text: 'View',
                          role: 'view',
                          icon: 'eye',
                          handler: function handler() {
                            _this.presentDayModel(photo);
                          }
                        }, {
                          text: 'Delete',
                          role: 'destructive',
                          icon: 'trash',
                          handler: function handler() {
                            _this.photoService.deletePicture(photo, position, _this.PHOTO_STORAGE_KEY);
                          }
                        }, {
                          text: 'Cancel',
                          icon: 'close',
                          role: 'cancel',
                          handler: function handler() {// Nothing to do, action sheet is automatically closed
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context3.sent;
                      _context3.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "presentDayModel",
          value: function presentDayModel(photo) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var modal;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.modalController.create({
                        component: _view_day_view_day_page__WEBPACK_IMPORTED_MODULE_1__.ViewDayPage,
                        componentProps: {
                          data: this.allPhotoData,
                          photo: photo
                        }
                      });

                    case 2:
                      modal = _context4.sent;
                      modal.onDidDismiss();
                      return _context4.abrupt("return", modal.present());

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return _PhotoPage;
      }();

      _PhotoPage.ɵfac = function PhotoPage_Factory(t) {
        return new (t || _PhotoPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_photo_service__WEBPACK_IMPORTED_MODULE_0__.PhotoService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ActionSheetController));
      };

      _PhotoPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _PhotoPage,
        selectors: [["app-photo"]],
        decls: 13,
        vars: 2,
        consts: [["slot", "start"], [1, "back"], ["padding", ""], ["size", "6", 4, "ngFor", "ngForOf"], ["vertical", "bottom", "horizontal", "center", "slot", "fixed"], [1, "cam", 3, "hidden", "click"], ["name", "camera"], ["size", "6"], [3, "src", "click"]],
        template: function PhotoPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-back-button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Progress Gallery");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-content", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, PhotoPage_ion_col_9_Template, 4, 2, "ion-col", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-fab", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-fab-button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PhotoPage_Template_ion_fab_button_click_11_listener() {
              return ctx.savePhoto();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "ion-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.photoService.photos);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.CamBtnIsHidden);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBackButtonDelegate, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRow, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel],
        styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-color-background);\n}\n\n.back[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.cam[_ngcontent-%COMP%] {\n  --background: red;\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--ion-color-background);\n}\n\nion-title[_ngcontent-%COMP%] {\n  color: var(--ion-color-red);\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n  font-size: 18px;\n}\n\nion-label[_ngcontent-%COMP%] {\n  color: red;\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n  font-size: 18px;\n  text-align: center;\n}\n\n.photo-background[_ngcontent-%COMP%] {\n  --background: var(--ion-color-background);\n  margin-right: -1px;\n  margin-left: -5px;\n  margin-top: -1px;\n}\n\nion-card[_ngcontent-%COMP%] {\n  --ion-background-color: transparent;\n  box-shadow: none;\n}\n\nion-image[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n}\n\nion-label[_ngcontent-%COMP%] {\n  color: white;\n}\n\n#gridview[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ndiv.image[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\ndiv.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30%;\n  height: auto;\n  border: 1px solid #ccc;\n}\n\ndiv.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.32), 0 0 0 0px rgba(0, 0, 0, 0.16);\n}\n\n.photo-background[_ngcontent-%COMP%] {\n  background: var(--ion-color-background);\n}\n\n.buttonRow[_ngcontent-%COMP%] {\n  --background: var(--ion-color-red);\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob3RvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlDQUFBO0FBQ0o7O0FBQ0E7RUFDSSxVQUFBO0FBRUo7O0FBQ0E7RUFDSSxpQkFBQTtBQUVKOztBQUNBO0VBQ0kseUNBQUE7QUFFSjs7QUFDQTtFQUNJLDJCQUFBO0VBQ0Esc0VBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQ0E7RUFDSSxVQUFBO0VBQ0Esc0VBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDQTtFQUNJLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBRUE7RUFDSSxtQ0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBSUE7RUFFSSxrQkFBQTtFQUNBLFdBQUE7QUFGSjs7QUFLQTtFQUNJLFlBQUE7QUFGSjs7QUFLQTtFQUNJLGtCQUFBO0FBRko7O0FBSUE7RUFDSSxxQkFBQTtBQURKOztBQUdBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUFKOztBQUVBO0VBQ0ksMEVBQUE7QUFDSjs7QUFFQTtFQUNJLHVDQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQ0FBQTtFQUNBLHNFQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6InBob3RvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWJhY2tncm91bmQpO1xufVxuLmJhY2t7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuICBcbi5jYW17XG4gICAgLS1iYWNrZ3JvdW5kOiByZWQ7XG59XG5cbmlvbi10b29sYmFye1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWJhY2tncm91bmQpO1xufVxuXG5pb24tdGl0bGV7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1yZWQpO1xuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5pb24tbGFiZWx7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5waG90by1iYWNrZ3JvdW5ke1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWJhY2tncm91bmQpO1xuICAgIG1hcmdpbi1yaWdodDogLTFweDtcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xufVxuXG5cbmlvbi1jYXJke1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyBcbiAgICBib3gtc2hhZG93Om5vbmU7XG59XG5cblxuXG5pb24taW1hZ2V7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6MTAwJTtcbn1cblxuaW9uLWxhYmVse1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2dyaWR2aWV3IHsgXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7IFxufVxuZGl2LmltYWdlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59IFxuZGl2LmltYWdlIGltZyB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cbmRpdi5pbWFnZSBpbWc6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAwIHJnYmEoMCwwLDAsMC4zMiksIDAgMCAwIDBweCByZ2JhKDAsMCwwLDAuMTYpO1xufVxuXG4ucGhvdG8tYmFja2dyb3VuZHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYmFja2dyb3VuZCk7XG59XG5cbi5idXR0b25Sb3d7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcmVkKTtcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfSJdfQ== */"]
      });
      /***/
    },

    /***/
    52468:
    /*!******************************************!*\
      !*** ./src/app/services/data.service.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DataService": function DataService() {
          return (
            /* binding */
            _DataService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/storage-angular */
      61628);

      var PROGRESS_KEY = 'ProgressData';
      var WORKOUT_KEY = 'WorkoutData';
      var INIT_KEY = 'InitData';
      var KEY = "AppStorage";
      var LOGIN_KEY = "LoginStorage";

      var _DataService = /*#__PURE__*/function () {
        function _DataService(storage) {
          _classCallCheck(this, _DataService);

          this.storage = storage;
          this.initData = [];
          this.progressData = [];
          this.workoutData = [];
          this.loginData = [];
          this.progressPictures = [];
          this.init();
        }

        _createClass(_DataService, [{
          key: "init",
          value: function init() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.storage.create();

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          } //--------------------------------------------------------------------
          //--------------------------------------------------------------------
          //--------------------------------------------------------------------

        }, {
          key: "getStorageDataNew",
          value: function getStorageDataNew(key, index) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var storedData;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.storage.get(key);

                    case 2:
                      _context6.t0 = _context6.sent;

                      if (_context6.t0) {
                        _context6.next = 5;
                        break;
                      }

                      _context6.t0 = [];

                    case 5:
                      storedData = _context6.t0;
                      return _context6.abrupt("return", storedData[index]);

                    case 7:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "getStorageData",
          value: function getStorageData(key) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      return _context7.abrupt("return", this.storage.get(key) || []);

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "addStorageDataNew",
          value: function addStorageDataNew(key, index, item) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var storedData;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.storage.get(key);

                    case 2:
                      _context8.t0 = _context8.sent;

                      if (_context8.t0) {
                        _context8.next = 5;
                        break;
                      }

                      _context8.t0 = [];

                    case 5:
                      storedData = _context8.t0;
                      // console.log(storedData)
                      storedData[index].push(item); // console.log(storedData)

                      return _context8.abrupt("return", this.storage.set(key, storedData));

                    case 8:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "addUserStorage",
          value: function addUserStorage(item) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var storedData;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.storage.get(LOGIN_KEY);

                    case 2:
                      _context9.t0 = _context9.sent;

                      if (_context9.t0) {
                        _context9.next = 5;
                        break;
                      }

                      _context9.t0 = [];

                    case 5:
                      storedData = _context9.t0;
                      storedData.push(item);
                      return _context9.abrupt("return", this.storage.set(LOGIN_KEY, storedData));

                    case 8:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "createUser",
          value: function createUser(key, item) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var newStorage;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.storage.get(key);

                    case 2:
                      _context10.t0 = _context10.sent;

                      if (_context10.t0) {
                        _context10.next = 5;
                        break;
                      }

                      _context10.t0 = [];

                    case 5:
                      newStorage = _context10.t0;

                      if (!(newStorage.length == 0)) {
                        _context10.next = 15;
                        break;
                      }

                      newStorage.push(this.initData);
                      newStorage.push(this.progressData);
                      newStorage.push(this.workoutData);
                      newStorage.push(this.loginData);
                      newStorage.push(this.progressPictures);
                      newStorage[3].splice(0, 1);
                      newStorage[3].push(item);
                      return _context10.abrupt("return", this.storage.set(key, newStorage));

                    case 15:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "removeStorageItem",
          value: function removeStorageItem(key, index, item) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var storedData;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.storage.get(key);

                    case 2:
                      _context11.t0 = _context11.sent;

                      if (_context11.t0) {
                        _context11.next = 5;
                        break;
                      }

                      _context11.t0 = [];

                    case 5:
                      storedData = _context11.t0;
                      storedData[index].splice(item, 1);
                      return _context11.abrupt("return", this.storage.set(key, storedData));

                    case 8:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "updateStoargeItem",
          value: function updateStoargeItem(key, index, item) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var storedData;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this.storage.get(key);

                    case 2:
                      _context12.t0 = _context12.sent;

                      if (_context12.t0) {
                        _context12.next = 5;
                        break;
                      }

                      _context12.t0 = [];

                    case 5:
                      storedData = _context12.t0;

                      if (item.name != "") {
                        storedData[2].splice(index, 1);
                        storedData[2].push(item);
                      }

                      return _context12.abrupt("return", this.storage.set(key, storedData));

                    case 8:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }]);

        return _DataService;
      }();

      _DataService.ɵfac = function DataService_Factory(t) {
        return new (t || _DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__.Storage));
      };

      _DataService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _DataService,
        factory: _DataService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    61957:
    /*!*******************************************!*\
      !*** ./src/app/services/photo.service.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PhotoService": function PhotoService() {
          return (
            /* binding */
            _PhotoService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/camera */
      37673);
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @capacitor/core */
      68384);
      /* harmony import */


      var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor/filesystem */
      61977);
      /* harmony import */


      var _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @capacitor/storage */
      96628);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _PhotoService = /*#__PURE__*/function () {
        // private PHOTO_STORAGE: string = 'photos';
        function _PhotoService(platform) {
          _classCallCheck(this, _PhotoService);

          this.platform = platform;
          this.photos = [];

          this.convertBlobToBase64 = function (blob) {
            return new Promise(function (resolve, reject) {
              var reader = new FileReader();
              reader.onerror = reject;

              reader.onload = function () {
                resolve(reader.result);
              };

              reader.readAsDataURL(blob);
            });
          };
        }

        _createClass(_PhotoService, [{
          key: "loadSaved",
          value: function loadSaved(key) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var photoList, _iterator, _step, photo, readFile;

              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.get({
                        key: key
                      });

                    case 2:
                      photoList = _context13.sent;
                      this.photos = JSON.parse(photoList.value) || []; // If running on the web...

                      if (this.platform.is('hybrid')) {
                        _context13.next = 24;
                        break;
                      }

                      // Display the photo by reading into base64 format
                      _iterator = _createForOfIteratorHelper(this.photos);
                      _context13.prev = 6;

                      _iterator.s();

                    case 8:
                      if ((_step = _iterator.n()).done) {
                        _context13.next = 16;
                        break;
                      }

                      photo = _step.value;
                      _context13.next = 12;
                      return _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.readFile({
                        path: photo.filepath,
                        directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Directory.Data
                      });

                    case 12:
                      readFile = _context13.sent;
                      // Web platform only: Load the photo as base64 data
                      photo.webviewPath = "data:image/jpeg;base64,".concat(readFile.data);

                    case 14:
                      _context13.next = 8;
                      break;

                    case 16:
                      _context13.next = 21;
                      break;

                    case 18:
                      _context13.prev = 18;
                      _context13.t0 = _context13["catch"](6);

                      _iterator.e(_context13.t0);

                    case 21:
                      _context13.prev = 21;

                      _iterator.f();

                      return _context13.finish(21);

                    case 24:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this, [[6, 18, 21, 24]]);
            }));
          }
          /* Use the device camera to take a photo:
          // https://capacitor.ionicframework.com/docs/apis/camera
             // Store the photo data into permanent file storage:
          // https://capacitor.ionicframework.com/docs/apis/filesystem
             // Store a reference to all photo filepaths using Storage API:
          // https://capacitor.ionicframework.com/docs/apis/storage
          */

        }, {
          key: "addNewToGallery",
          value: function addNewToGallery(day, key) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var capturedPhoto, savedImageFile;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.Camera.getPhoto({
                        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.CameraResultType.Uri,
                        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.CameraSource.Camera,
                        quality: 100 // highest quality (0 to 100)

                      });

                    case 2:
                      capturedPhoto = _context14.sent;
                      _context14.next = 5;
                      return this.savePicture(capturedPhoto, day);

                    case 5:
                      savedImageFile = _context14.sent;
                      // Add new photo to Photos array
                      this.photos.unshift(savedImageFile); // Cache all photo data for future retrieval

                      _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.set({
                        key: key,
                        value: JSON.stringify(this.photos)
                      });

                    case 8:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          } // Save picture to file on device

        }, {
          key: "savePicture",
          value: function savePicture(photo, day) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var base64Data, fileName, savedFile;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
                      return this.readAsBase64(photo);

                    case 2:
                      base64Data = _context15.sent;
                      // Write the file to the data directory
                      fileName = new Date().getTime() + '.jpeg';
                      _context15.next = 6;
                      return _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.writeFile({
                        path: fileName,
                        data: base64Data,
                        directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Directory.Data
                      });

                    case 6:
                      savedFile = _context15.sent;

                      if (!this.platform.is('hybrid')) {
                        _context15.next = 11;
                        break;
                      }

                      return _context15.abrupt("return", {
                        filepath: savedFile.uri,
                        webviewPath: _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.convertFileSrc(savedFile.uri),
                        day: day
                      });

                    case 11:
                      return _context15.abrupt("return", {
                        filepath: fileName,
                        webviewPath: photo.webPath,
                        day: day
                      });

                    case 12:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          } // Read camera photo into base64 format based on the platform the app is running on

        }, {
          key: "readAsBase64",
          value: function readAsBase64(photo) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var file, response, blob;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      if (!this.platform.is('hybrid')) {
                        _context16.next = 7;
                        break;
                      }

                      _context16.next = 3;
                      return _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.readFile({
                        path: photo.path
                      });

                    case 3:
                      file = _context16.sent;
                      return _context16.abrupt("return", file.data);

                    case 7:
                      _context16.next = 9;
                      return fetch(photo.webPath);

                    case 9:
                      response = _context16.sent;
                      _context16.next = 12;
                      return response.blob();

                    case 12:
                      blob = _context16.sent;
                      _context16.next = 15;
                      return this.convertBlobToBase64(blob);

                    case 15:
                      return _context16.abrupt("return", _context16.sent);

                    case 16:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          } // Delete picture by removing it from reference data and the filesystem

        }, {
          key: "deletePicture",
          value: function deletePicture(photo, position, key) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var filename;
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      // Remove this photo from the Photos reference data array
                      this.photos.splice(position, 1); // Update photos array cache by overwriting the existing photo array

                      _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.set({
                        key: key,
                        value: JSON.stringify(this.photos)
                      }); // delete photo file from filesystem


                      filename = photo.filepath.substr(photo.filepath.lastIndexOf('/') + 1);
                      _context17.next = 5;
                      return _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.deleteFile({
                        path: filename,
                        directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Directory.Data
                      });

                    case 5:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          }
        }]);

        return _PhotoService;
      }();

      _PhotoService.ɵfac = function PhotoService_Factory(t) {
        return new (t || _PhotoService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform));
      };

      _PhotoService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: _PhotoService,
        factory: _PhotoService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    69642:
    /*!*******************************************!*\
      !*** ./src/app/view-day/view-day.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewDayPage": function ViewDayPage() {
          return (
            /* binding */
            _ViewDayPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../services/data.service */
      52468);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _ViewDayPage = /*#__PURE__*/function () {
        function _ViewDayPage(dataService, navParams, modalController) {
          _classCallCheck(this, _ViewDayPage);

          this.dataService = dataService;
          this.navParams = navParams;
          this.modalController = modalController;
        }

        _createClass(_ViewDayPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      this.initData = this.navParams.get('data');
                      this.USER_STORAGE_KEY = this.initData.storageKey;
                      this.numDay = this.initData.day;
                      this.currentPhoto = this.navParams.get('photo');
                      _context18.next = 6;
                      return this.dataService.getStorageData(this.USER_STORAGE_KEY).then(function (val) {
                        // console.log(this.currentPhoto.day)
                        var getDayData = val[1][_this2.currentPhoto.day - 1];
                        _this2.currentWorkout1 = getDayData.progressData.Workout1;
                        _this2.currentWorkout2 = getDayData.progressData.Workout2;
                        _this2.currentWorkout1Notes = getDayData.progressData.NotesOne;
                        _this2.currentWorkout2Notes = getDayData.progressData.NotesTwo;
                      });

                    case 6:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalController.dismiss();
          }
        }]);

        return _ViewDayPage;
      }();

      _ViewDayPage.ɵfac = function ViewDayPage_Factory(t) {
        return new (t || _ViewDayPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController));
      };

      _ViewDayPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _ViewDayPage,
        selectors: [["app-view-day"]],
        decls: 25,
        vars: 6,
        consts: [[3, "src"], [1, "day-title"], [1, "workout"], [1, "workouts"], [1, "notes"], ["src", "assets/imgs/checklist.png"], ["vertical", "bottom", "horizontal", "center", "slot", "fixed"], [1, "close", 3, "click"], ["name", "close"]],
        template: function ViewDayPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ion-img", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-card-title", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-card-title", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " WORKOUT 1: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-card-title", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-card-subtitle", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-card-title", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " WORKOUT 2: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ion-card-title", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-card-subtitle", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "ion-img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-fab", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-fab-button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewDayPage_Template_ion_fab_button_click_23_listener() {
              return ctx.closeModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "ion-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.currentPhoto.webviewPath);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" DAY ", ctx.currentPhoto.day, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.currentWorkout1, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.currentWorkout1Notes, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.currentWorkout2, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.currentWorkout2Notes, " ");
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon],
        styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-color-background);\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--ion-color-background);\n  color: var(--ion-color-red);\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n}\n\nion-item[_ngcontent-%COMP%] {\n  color: var(--ion-color-background);\n}\n\nion-list.background[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-background);\n}\n\nion-label[_ngcontent-%COMP%] {\n  color: var(--ion-color-red);\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n}\n\nion-card-title[_ngcontent-%COMP%] {\n  color: var(--ion-color-red);\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n}\n\n.workouts[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding-left: 20px;\n  color: var(--ion-color-background);\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n}\n\n.workout[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: var(--ion-color-red);\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n}\n\n.notes[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n\n.day-title[_ngcontent-%COMP%] {\n  color: var(--ion-color-background);\n  font-size: 60px;\n}\n\n.close[_ngcontent-%COMP%] {\n  --background: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctZGF5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlDQUFBO0FBQ0o7O0FBRUE7RUFDSSx5Q0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0VBQUE7QUFDSjs7QUFFRTtFQUdFLGtDQUFBO0FBREo7O0FBSUE7RUFDSSw2Q0FBQTtBQURKOztBQUlBO0VBQ0ksMkJBQUE7RUFDQSxzRUFBQTtBQURKOztBQUdBO0VBQ0ksMkJBQUE7RUFDQSxzRUFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxzRUFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0VBQUE7QUFBSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0oiLCJmaWxlIjoidmlldy1kYXkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYmFja2dyb3VuZCk7XG59XG5cbmlvbi10b29sYmFye1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWJhY2tncm91bmQpO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcmVkKTtcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xuICB9XG5cbiAgaW9uLWl0ZW17XG4gICAgLy8gcGFkZGluZy1yaWdodDogMTZweDtcbiAgICAvLyAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1iYWNrZ3JvdW5kKTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWJhY2tncm91bmQpO1xufVxuXG5pb24tbGlzdC5iYWNrZ3JvdW5ke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1iYWNrZ3JvdW5kKTtcbiAgfVxuXG5pb24tbGFiZWx7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1yZWQpO1xuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XG59XG5pb24tY2FyZC10aXRsZXtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXJlZCk7XG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZjtcbn1cblxuLndvcmtvdXRze1xuICAgIGZvbnQtc2l6ZTogMjBweCA7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYmFja2dyb3VuZCk7XG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZjtcbn1cblxuLndvcmtvdXR7XG4gICAgZm9udC1zaXplOiAyMnB4IDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXJlZCk7XG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZjtcbn1cbi5ub3Rlc3tcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5kYXktdGl0bGV7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1iYWNrZ3JvdW5kKTtcbiAgICBmb250LXNpemU6IDYwcHggO1xufVxuXG4uY2xvc2V7XG4gICAgLS1iYWNrZ3JvdW5kOiByZWQ7XG59Il19 */"]
      });
      /***/
    },

    /***/
    80528:
    /*!*****************************************************!*\
      !*** ./src/app/workout1/workout1-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Workout1PageRoutingModule": function Workout1PageRoutingModule() {
          return (
            /* binding */
            _Workout1PageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _workout1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./workout1.page */
      18461);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _workout1_page__WEBPACK_IMPORTED_MODULE_0__.Workout1Page
      }];

      var _Workout1PageRoutingModule = function _Workout1PageRoutingModule() {
        _classCallCheck(this, _Workout1PageRoutingModule);
      };

      _Workout1PageRoutingModule.ɵfac = function Workout1PageRoutingModule_Factory(t) {
        return new (t || _Workout1PageRoutingModule)();
      };

      _Workout1PageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _Workout1PageRoutingModule
      });
      _Workout1PageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_Workout1PageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    86936:
    /*!*********************************************!*\
      !*** ./src/app/workout1/workout1.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Workout1PageModule": function Workout1PageModule() {
          return (
            /* binding */
            _Workout1PageModule
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


      var _workout1_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./workout1-routing.module */
      80528);
      /* harmony import */


      var _workout1_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./workout1.page */
      18461);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _Workout1PageModule = function _Workout1PageModule() {
        _classCallCheck(this, _Workout1PageModule);
      };

      _Workout1PageModule.ɵfac = function Workout1PageModule_Factory(t) {
        return new (t || _Workout1PageModule)();
      };

      _Workout1PageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _Workout1PageModule
      });
      _Workout1PageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _workout1_routing_module__WEBPACK_IMPORTED_MODULE_0__.Workout1PageRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_Workout1PageModule, {
          declarations: [_workout1_page__WEBPACK_IMPORTED_MODULE_1__.Workout1Page],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _workout1_routing_module__WEBPACK_IMPORTED_MODULE_0__.Workout1PageRoutingModule]
        });
      })();
      /***/

    },

    /***/
    18461:
    /*!*******************************************!*\
      !*** ./src/app/workout1/workout1.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Workout1Page": function Workout1Page() {
          return (
            /* binding */
            _Workout1Page
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../services/data.service */
      52468);
      /* harmony import */


      var _edit_workout_edit_workout_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../edit-workout/edit-workout.page */
      28298);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function Workout1Page_ion_item_sliding_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item-sliding");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, ">");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-item-options");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Workout1Page_ion_item_sliding_17_Template_ion_button_click_6_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var i_r2 = restoredCtx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r3.edit(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Workout1Page_ion_item_sliding_17_Template_ion_button_click_8_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var i_r2 = restoredCtx.index;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r5.deleteWorkout(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var workout_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", workout_r1.name, " ");
        }
      }

      var _Workout1Page = /*#__PURE__*/function () {
        function _Workout1Page(navParams, dataService, modalController, alertController) {
          _classCallCheck(this, _Workout1Page);

          this.navParams = navParams;
          this.dataService = dataService;
          this.modalController = modalController;
          this.alertController = alertController;
          this.displayWorkout = [];
          this.USER_STORAGE_KEY = '';
          this.loadData();
        }

        _createClass(_Workout1Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.USER_STORAGE_KEY = this.navParams.get('userStorage');
            console.log(this.USER_STORAGE_KEY);
          }
        }, {
          key: "loadData",
          value: function loadData() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      this.USER_STORAGE_KEY = this.navParams.get('userStorage');
                      _context19.next = 3;
                      return this.dataService.getStorageDataNew(this.USER_STORAGE_KEY, 2);

                    case 3:
                      this.WorkoutDatabase = _context19.sent;

                    case 4:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          } // navigation for to edit chosen workout // page workout index 

        }, {
          key: "edit",
          value: function edit(i) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              var _this3 = this;

              var editmodal;
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      _context20.next = 2;
                      return this.modalController.create({
                        component: _edit_workout_edit_workout_page__WEBPACK_IMPORTED_MODULE_1__.EditWorkoutPage,
                        componentProps: {
                          workout: this.WorkoutDatabase[i].name,
                          notes: this.WorkoutDatabase[i].notes,
                          index: i,
                          currentPage: this.page
                        }
                      });

                    case 2:
                      editmodal = _context20.sent;
                      //navigate back from modal and set chosen workouts 
                      editmodal.onDidDismiss().then(function (retval) {
                        _this3.index = i;

                        if (retval.data.workout != "") {
                          _this3.WorkoutDatabase.splice(i, 1);

                          _this3.WorkoutDatabase.push({
                            "page": _this3.page,
                            "name": retval.data.workout,
                            "notes": retval.data.notes
                          });
                        }

                        _this3.editedWorkout = {
                          "page": _this3.page,
                          "name": retval.data.workout,
                          "notes": retval.data.notes
                        };

                        _this3.updateWorkoutItem(_this3.index, _this3.editedWorkout);
                      });
                      return _context20.abrupt("return", editmodal.present());

                    case 5:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          }
        }, {
          key: "updateWorkoutItem",
          value: function updateWorkoutItem(index, editedWorkout) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      _context21.next = 2;
                      return this.dataService.updateStoargeItem(this.USER_STORAGE_KEY, index, editedWorkout);

                    case 2:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));
          } // add new workout to storage 

        }, {
          key: "addWorkout",
          value: function addWorkout() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      this.USER_STORAGE_KEY = this.navParams.get('userStorage');
                      this.savedWorkoutData = {
                        "page": this.page,
                        "name": this.Workout,
                        "notes": this.Notes
                      };
                      this.workoutInfo = {
                        "page": this.page,
                        "name": this.Workout,
                        "notes": this.Notes
                      };
                      _context22.next = 5;
                      return this.dataService.addStorageDataNew(this.USER_STORAGE_KEY, 2, this.workoutInfo);

                    case 5:
                      this.loadData();
                      this.closeModal();

                    case 7:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this);
            }));
          } //delete chosen workout from storage 

        }, {
          key: "deleteWorkout",
          value: function deleteWorkout(index) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      this.USER_STORAGE_KEY = this.navParams.get('userStorage');
                      this.dataService.removeStorageItem(this.USER_STORAGE_KEY, 2, index);
                      this.WorkoutDatabase.splice(index, 1);

                    case 3:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));
          } //close workout modal and navigate back to main page passing new workout 

        }, {
          key: "closeModal",
          value: function closeModal() {
            var workout1String = JSON.stringify(this.WorkoutDatabase);
            this.modalController.dismiss(workout1String);
          }
        }]);

        return _Workout1Page;
      }();

      _Workout1Page.ɵfac = function Workout1Page_Factory(t) {
        return new (t || _Workout1Page)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavParams), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController));
      };

      _Workout1Page.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _Workout1Page,
        selectors: [["app-workout1"]],
        decls: 23,
        vars: 4,
        consts: [["placeholder", "Add New Workout", 3, "ngModel", "ngModelChange"], [1, "notes"], ["position", "floating"], ["rows", "6", "cols", "20", "placeholder", "Enter any notes here...", 3, "ngModel", "ngModelChange"], [2, "display", "flex", "justify-content", "center"], ["shape", "round", 1, "addBtn", 3, "click"], ["name", "add-outline"], [1, "background"], [4, "ngFor", "ngForOf"], ["shape", "round", 1, "closeBtn", 3, "click"], ["name", "close-outline"], ["slot", "end", "name", "chevron-back-outline"], ["size", "small", 1, "notesBtn", 3, "click"], ["size", "small", 1, "delBtn", 3, "click"]],
        template: function Workout1Page_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-input", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function Workout1Page_Template_ion_input_ngModelChange_7_listener($event) {
              return ctx.Workout = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-item", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Notes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-textarea", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function Workout1Page_Template_ion_textarea_ngModelChange_11_listener($event) {
              return ctx.Notes = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Workout1Page_Template_ion_button_click_13_listener() {
              return ctx.addWorkout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "ADD ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "ion-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ion-list", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, Workout1Page_ion_item_sliding_17_Template, 10, 1, "ion-item-sliding", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ion-button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Workout1Page_Template_ion_button_click_20_listener() {
              return ctx.closeModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "CLOSE");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "ion-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("WORKOUT ", ctx.page, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.Workout);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.Notes);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.WorkoutDatabase);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTextarea, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonList, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItemSliding, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItemOptions],
        styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-color-background);\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--ion-color-background);\n  color: var(--ion-color-red);\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n}\n\nion-item[_ngcontent-%COMP%] {\n  padding-right: 16px;\n  --background: var(--ion-color-background);\n  color: var(--ion-color-red);\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--ion-color-background);\n}\n\nion-item-options[_ngcontent-%COMP%] {\n  --sliding-background: var(--ion-color-background);\n}\n\n.delBtn[_ngcontent-%COMP%] {\n  --background: red;\n  width: 60px;\n  height: 35px;\n}\n\n.notesBtn[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 35px;\n}\n\nion-item.notes[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\nion-list.background[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-background);\n}\n\nion-footer[_ngcontent-%COMP%] {\n  padding: 5%;\n  background-color: var(--ion-color-background);\n}\n\n.closeBtn[_ngcontent-%COMP%] {\n  --background:var(--ion-color-red);\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n}\n\n.addBtn[_ngcontent-%COMP%] {\n  --background:var(--ion-color-red);\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtvdXQxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlDQUFBO0FBQ0o7O0FBRUE7RUFDSSx5Q0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0VBQUE7QUFDSjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSwyQkFBQTtBQUFKOztBQUdBO0VBQ0kseUNBQUE7QUFBSjs7QUFJQTtFQUNJLGlEQUFBO0FBREo7O0FBS0E7RUFFSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSEo7O0FBTUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUhKOztBQU9BO0VBQ0ksb0JBQUE7QUFKSjs7QUFRQTtFQUNJLDZDQUFBO0FBTEo7O0FBU0E7RUFDSSxXQUFBO0VBQ0EsNkNBQUE7QUFOSjs7QUFTQTtFQUNJLGlDQUFBO0VBQ0Esc0VBQUE7QUFOSjs7QUFTQTtFQUNJLGlDQUFBO0VBQ0Esc0VBQUE7QUFOSiIsImZpbGUiOiJ3b3Jrb3V0MS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1iYWNrZ3JvdW5kKTtcbn1cblxuaW9uLXRvb2xiYXJ7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYmFja2dyb3VuZCk7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1yZWQpO1xuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XG4gIH1cblxuXG5pb24taXRlbXtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWJhY2tncm91bmQpO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcmVkKTtcbn1cblxuaW9uLXRvb2xiYXJ7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYmFja2dyb3VuZCk7XG59XG5cblxuaW9uLWl0ZW0tb3B0aW9uc3tcbiAgICAtLXNsaWRpbmctYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWJhY2tncm91bmQpO1xufVxuIFxuXG4uZGVsQnRue1xuICAgIC8vIGNvbG9yOiByZWQ7XG4gICAgLS1iYWNrZ3JvdW5kOiByZWQ7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xufVxuXG4ubm90ZXNCdG57XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuXG59XG5cbmlvbi1pdGVtLm5vdGVze1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5cbmlvbi1saXN0LmJhY2tncm91bmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWJhY2tncm91bmQpO1xuICB9XG5cblxuaW9uLWZvb3RlcntcbiAgICBwYWRkaW5nOjUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1iYWNrZ3JvdW5kKTtcbn1cblxuLmNsb3NlQnRue1xuICAgIC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItcmVkKTtcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xufVxuXG4uYWRkQnRue1xuICAgIC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItcmVkKTtcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xufVxuXG5cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);
      /* harmony import */


      var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/pwa-elements/loader */
      32404);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.log(err);
      }); // Call the element loader after the platform has been bootstrapped


      (0, _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__.defineCustomElements)(window);
      /***/
    },

    /***/
    50863:
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \******************************************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": [47321, "common", "node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"],
        "./ion-alert.entry.js": [36108, "common", "node_modules_ionic_core_dist_esm_ion-alert_entry_js"],
        "./ion-app_8.entry.js": [31489, "common", "node_modules_ionic_core_dist_esm_ion-app_8_entry_js"],
        "./ion-avatar_3.entry.js": [10305, "common", "node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"],
        "./ion-back-button.entry.js": [15830, "common", "node_modules_ionic_core_dist_esm_ion-back-button_entry_js"],
        "./ion-backdrop.entry.js": [37757, "node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"],
        "./ion-button_2.entry.js": [30392, "common", "node_modules_ionic_core_dist_esm_ion-button_2_entry_js"],
        "./ion-card_5.entry.js": [66911, "common", "node_modules_ionic_core_dist_esm_ion-card_5_entry_js"],
        "./ion-checkbox.entry.js": [30937, "common", "node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"],
        "./ion-chip.entry.js": [78695, "common", "node_modules_ionic_core_dist_esm_ion-chip_entry_js"],
        "./ion-col_3.entry.js": [16034, "node_modules_ionic_core_dist_esm_ion-col_3_entry_js"],
        "./ion-datetime_3.entry.js": [68837, "common", "node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"],
        "./ion-fab_3.entry.js": [34195, "common", "node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"],
        "./ion-img.entry.js": [41709, "node_modules_ionic_core_dist_esm_ion-img_entry_js"],
        "./ion-infinite-scroll_2.entry.js": [33087, "node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"],
        "./ion-input.entry.js": [84513, "common", "node_modules_ionic_core_dist_esm_ion-input_entry_js"],
        "./ion-item-option_3.entry.js": [58056, "common", "node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"],
        "./ion-item_8.entry.js": [10862, "common", "node_modules_ionic_core_dist_esm_ion-item_8_entry_js"],
        "./ion-loading.entry.js": [7509, "common", "node_modules_ionic_core_dist_esm_ion-loading_entry_js"],
        "./ion-menu_3.entry.js": [86030, "common", "node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"],
        "./ion-modal.entry.js": [71855, "common", "node_modules_ionic_core_dist_esm_ion-modal_entry_js"],
        "./ion-nav_2.entry.js": [38708, "common", "node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"],
        "./ion-popover.entry.js": [23527, "common", "node_modules_ionic_core_dist_esm_ion-popover_entry_js"],
        "./ion-progress-bar.entry.js": [24694, "common", "node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"],
        "./ion-radio_2.entry.js": [19222, "common", "node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"],
        "./ion-range.entry.js": [25277, "common", "node_modules_ionic_core_dist_esm_ion-range_entry_js"],
        "./ion-refresher_2.entry.js": [39921, "common", "node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"],
        "./ion-reorder_2.entry.js": [83122, "common", "node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"],
        "./ion-ripple-effect.entry.js": [51602, "node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"],
        "./ion-route_4.entry.js": [45174, "common", "node_modules_ionic_core_dist_esm_ion-route_4_entry_js"],
        "./ion-searchbar.entry.js": [7895, "common", "node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"],
        "./ion-segment_2.entry.js": [76164, "common", "node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"],
        "./ion-select_3.entry.js": [20592, "common", "node_modules_ionic_core_dist_esm_ion-select_3_entry_js"],
        "./ion-slide_2.entry.js": [27162, "node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"],
        "./ion-spinner.entry.js": [81374, "common", "node_modules_ionic_core_dist_esm_ion-spinner_entry_js"],
        "./ion-split-pane.entry.js": [97896, "node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"],
        "./ion-tab-bar_2.entry.js": [25043, "common", "node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"],
        "./ion-tab_2.entry.js": [77802, "common", "node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"],
        "./ion-text.entry.js": [29072, "common", "node_modules_ionic_core_dist_esm_ion-text_entry_js"],
        "./ion-textarea.entry.js": [32191, "common", "node_modules_ionic_core_dist_esm_ion-textarea_entry_js"],
        "./ion-toast.entry.js": [40801, "common", "node_modules_ionic_core_dist_esm_ion-toast_entry_js"],
        "./ion-toggle.entry.js": [67110, "common", "node_modules_ionic_core_dist_esm_ion-toggle_entry_js"],
        "./ion-virtual-scroll.entry.js": [10431, "node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function () {
        return Object.keys(map);
      };

      webpackAsyncContext.id = 50863;
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    55899:
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/pwa-elements/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \**************************************************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./pwa-action-sheet.entry.js": [79437, "node_modules_ionic_pwa-elements_dist_esm_pwa-action-sheet_entry_js"],
        "./pwa-camera-modal-instance.entry.js": [18025, "node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal-instance_entry_js"],
        "./pwa-camera-modal.entry.js": [64262, "node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal_entry_js"],
        "./pwa-camera.entry.js": [58206, "node_modules_ionic_pwa-elements_dist_esm_pwa-camera_entry_js"],
        "./pwa-toast.entry.js": [24297, "node_modules_ionic_pwa-elements_dist_esm_pwa-toast_entry_js"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return __webpack_require__.e(ids[1]).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function () {
        return Object.keys(map);
      };

      webpackAsyncContext.id = 55899;
      module.exports = webpackAsyncContext;
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map