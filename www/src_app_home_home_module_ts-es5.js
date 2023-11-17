(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkphoto_gallery_ng_capacitor"] = self["webpackChunkphoto_gallery_ng_capacitor"] || []).push([["src_app_home_home_module_ts"], {
    /***/
    52003:
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePageRoutingModule": function HomePageRoutingModule() {
          return (
            /* binding */
            _HomePageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home.page */
      62267);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
      }];

      var _HomePageRoutingModule = function _HomePageRoutingModule() {
        _classCallCheck(this, _HomePageRoutingModule);
      };

      _HomePageRoutingModule.ɵfac = function HomePageRoutingModule_Factory(t) {
        return new (t || _HomePageRoutingModule)();
      };

      _HomePageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _HomePageRoutingModule
      });
      _HomePageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_HomePageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    3467:
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePageModule": function HomePageModule() {
          return (
            /* binding */
            _HomePageModule
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


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home-routing.module */
      52003);
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home.page */
      62267);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _HomePageModule = function _HomePageModule() {
        _classCallCheck(this, _HomePageModule);
      };

      _HomePageModule.ɵfac = function HomePageModule_Factory(t) {
        return new (t || _HomePageModule)();
      };

      _HomePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _HomePageModule
      });
      _HomePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_HomePageModule, {
          declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule]
        });
      })();
      /***/

    },

    /***/
    62267:
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePage": function HomePage() {
          return (
            /* binding */
            _HomePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../services/data.service */
      52468);
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @capacitor/core */
      68384);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage-angular */
      61628);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var DatePicker = _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Plugins.DatePickerPlugin;

      var _HomePage = /*#__PURE__*/function () {
        function _HomePage(activatedRoute, router, storage, dataService) {
          var _this = this;

          _classCallCheck(this, _HomePage);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.storage = storage;
          this.dataService = dataService;
          this.pickerIsHidden = true;
          this.inputIsHidden = true;
          this.calendarPicker = false;
          this.inputDuration = false;
          this.USER_STORAGE_KEY = '';
          var infoRecv = this.activatedRoute.snapshot.paramMap.get("id");
          this.USER_STORAGE_KEY = infoRecv;
          console.log(this.USER_STORAGE_KEY); //Get init data from storage - if stoarge is NULL - empty string  - if previously entered assign last entered data

          this.dataService.getStorageData(this.USER_STORAGE_KEY).then(function (val) {
            // console.log(val)
            // console.log(val[0].length == 0)
            if (val[0].length == 0) {
              _this.firstname = "";
              _this.lastname = "";
              _this.weight = "";
              _this.duration = "";
            } else {
              // console.log(val[0][val[0].length - 1].firstname)
              _this.firstname = val[0][val[0].length - 1].firstname;
              _this.lastname = val[0][val[0].length - 1].lastname;
              _this.weight = val[0][val[0].length - 1].weight;
              _this.duration = val[0][val[0].length - 1].duration;
            }
          });
        }

        _createClass(_HomePage, [{
          key: "showDatePicker",
          value: function showDatePicker() {
            this.calendarPicker = true;
            this.inputDuration = false;
            this.pickerIsHidden = false;
            this.inputIsHidden = true; // console.log(this.duration.value)
          }
        }, {
          key: "showDateInput",
          value: function showDateInput() {
            this.inputDuration = true;
            this.calendarPicker = false;
            this.inputIsHidden = false;
            this.pickerIsHidden = true;
          }
        }, {
          key: "addDays",
          value: function addDays(date, days) {
            var result = new Date(date);
            result.setDate(result.getDate() + days);
            return result;
          } // when button is clicked - get inputs and assign to varibles & add to storage 

        }, {
          key: "btnClicked",
          value: function btnClicked() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var infoRecv, date2, date1, timeInMilisec, daysBetweenDates, myCurrentDate, myFutureDate, info;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      infoRecv = this.activatedRoute.snapshot.paramMap.get("id");
                      this.USER_STORAGE_KEY = infoRecv;

                      if (this.calendarPicker === true) {
                        date2 = new Date();
                        date1 = new Date(this.date);
                        this.endDate = date1;
                        this.startDate = date2; // console.log(date1)
                        // console.log(date2)

                        timeInMilisec = date1.getTime() - date2.getTime();
                        daysBetweenDates = Math.ceil(timeInMilisec / (1000 * 60 * 60 * 24));
                        this.duration = daysBetweenDates;
                      } else {
                        // let endDate = new Date();
                        console.log(typeof this.duration);
                        myCurrentDate = new Date();
                        myFutureDate = new Date(myCurrentDate);
                        myFutureDate.setDate(myFutureDate.getDate() + this.duration); //myFutureDate is now 8 days in the future

                        console.log(myFutureDate);
                        this.endDate = myFutureDate;
                      }

                      info = {
                        initData: {
                          firstname: this.firstname,
                          lastname: this.lastname,
                          weight: this.weight,
                          duration: this.duration,
                          username: this.USER_STORAGE_KEY,
                          startDate: this.startDate,
                          endDate: this.endDate
                        }
                      };
                      _context.next = 6;
                      return this.dataService.addStorageDataNew(this.USER_STORAGE_KEY, 0, info);

                    case 6:
                      this.router.navigate(['main', this.USER_STORAGE_KEY]);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return _HomePage;
      }();

      _HomePage.ɵfac = function HomePage_Factory(t) {
        return new (t || _HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__.Storage), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService));
      };

      _HomePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _HomePage,
        selectors: [["app-home"]],
        decls: 33,
        vars: 12,
        consts: [["collapse", "condense", 1, "ion-padding-top"], ["size", "large"], [3, "fullscreen"], ["id", "container"], [1, "background"], ["placeholder", "First Name", 3, "ngModel", "ngModelChange"], ["placeholder", "Second Name", 3, "ngModel", "ngModelChange"], ["placeholder", "Current Weight", 3, "ngModel", "ngModelChange"], ["wrap", ""], ["width-50", ""], ["shape", "round", "expand", "full", 1, "buttonRow", 3, "click"], ["name", "time-outline", 1, "icon"], ["name", "calendar-outline", 1, "icon"], [3, "hidden"], ["type", "number", "min", "0", "inputmode", "numeric", "pattern", "[0-9]*", "placeholder", "Number of Days", 3, "ngModel", "ngModelChange"], ["id", "date", 1, "ion-text-end", 3, "value"], ["presentation", "date", 3, "ngModel", "ngModelChange"], ["shape", "round", 3, "click"]],
        template: function HomePage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-title", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Welcome");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-content", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-list", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HomePage_Template_ion_input_ngModelChange_8_listener($event) {
              return ctx.firstname = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HomePage_Template_ion_input_ngModelChange_10_listener($event) {
              return ctx.lastname = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ion-input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HomePage_Template_ion_input_ngModelChange_12_listener($event) {
              return ctx.weight = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-row", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ion-col", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ion-button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_15_listener() {
              return ctx.showDateInput();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Choose Duration");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "ion-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ion-col", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "ion-button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_19_listener() {
              return ctx.showDatePicker();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Pick Finishing Date ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "ion-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "ion-item", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "ion-input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HomePage_Template_ion_input_ngModelChange_23_listener($event) {
              return ctx.duration = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "ion-item", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Finishing Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "ion-input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](28, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "ion-datetime", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HomePage_Template_ion_datetime_ngModelChange_29_listener($event) {
              return ctx.date = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "ion-button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_31_listener() {
              return ctx.btnClicked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "DONE");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fullscreen", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.firstname);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.lastname);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.weight);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.inputIsHidden);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.duration);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.pickerIsHidden);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](28, 9, ctx.date, "dd.MM.yyyy"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.date);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NumericValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.PatternValidator, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonDatetime, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.SelectValueAccessor],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
        styles: ["#container[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  padding-right: 30px;\n  padding-left: 30px;\n}\n\nion-title[_ngcontent-%COMP%] {\n  color: var(--ion-color-red);\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n}\n\ndiv[_ngcontent-%COMP%] {\n  background: var(--ion-color-background);\n}\n\nion-list[_ngcontent-%COMP%] {\n  padding-top: 90%;\n}\n\n.ion-padding-top[_ngcontent-%COMP%] {\n  padding: 70px;\n}\n\nion-item[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\nion-list.background[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-background);\n}\n\n.item.item-input[_ngcontent-%COMP%] {\n  color: var(--ion-color-red);\n}\n\n.item.item-select[_ngcontent-%COMP%] {\n  color: var(--ion-color-red);\n  padding-bottom: 25%;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-color-background);\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--ion-color-background);\n  color: var(--ion-color-red);\n}\n\nion-button[_ngcontent-%COMP%] {\n  --background: var(--ion-color-red);\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n}\n\n.ion-color-background[_ngcontent-%COMP%] {\n  --ion-color-base: var(--ion-color-background);\n  --ion-color-base-rgb: var(--ion-color-background-rgb);\n  --ion-color-contrast: var(--ion-color-background-contrast);\n  --ion-color-contrast-rgb: var(--ion-color-background-contrast-rgb);\n  --ion-color-shade: var(--ion-color-background-shade);\n  --ion-color-tint: var(--ion-color-background-tint);\n}\n\n.ion-color-red[_ngcontent-%COMP%] {\n  --ion-color-base: var(--ion-color-red);\n  --ion-color-base-rgb: var(--ion-color-red-rgb);\n  --ion-color-contrast: var(--ion-color-red-contrast);\n  --ion-color-contrast-rgb: var(--ion-color-red-contrast-rgb);\n  --ion-color-shade: var(--ion-color-red-shade);\n  --ion-color-tint: var(--ion-color-red-tint);\n}\n\nion-popover#popover-bottom[_ngcontent-%COMP%]::part(content) {\n  top: unset !important;\n  left: 0 !important;\n  bottom: 0;\n  width: 100vw;\n  border-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UsMkJBQUE7RUFDQSxzRUFBQTtBQUNKOztBQUVFO0VBQ0UsdUNBQUE7QUFDSjs7QUFFRTtFQUNFLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0FBQ0o7O0FBR0U7RUFDRSw2Q0FBQTtBQUFKOztBQUdFO0VBQ0UsMkJBQUE7QUFBSjs7QUFHRTtFQUNFLDJCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHRTtFQUNFLHlDQUFBO0FBQUo7O0FBR0U7RUFDRSx5Q0FBQTtFQUNBLDJCQUFBO0FBQUo7O0FBR0U7RUFDRSxrQ0FBQTtFQUNBLHNFQUFBO0FBQUo7O0FBSUU7RUFDRSw2Q0FBQTtFQUNBLHFEQUFBO0VBQ0EsMERBQUE7RUFDQSxrRUFBQTtFQUNBLG9EQUFBO0VBQ0Esa0RBQUE7QUFESjs7QUFJRTtFQUNJLHNDQUFBO0VBQ0EsOENBQUE7RUFDQSxtREFBQTtFQUNBLDJEQUFBO0VBQ0EsNkNBQUE7RUFDQSwyQ0FBQTtBQUROOztBQUlFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFESiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIH1cbiAgXG4gIGlvbi10aXRsZXtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXJlZCk7XG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZjtcbiAgfVxuICBcbiAgZGl2e1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1iYWNrZ3JvdW5kKTtcbiAgfVxuICBcbiAgaW9uLWxpc3R7XG4gICAgcGFkZGluZy10b3A6IDkwJTtcbiAgfVxuICBcbiAgLmlvbi1wYWRkaW5nLXRvcHtcbiAgICBwYWRkaW5nOjcwcHhcbiAgfVxuICBcbiAgaW9uLWl0ZW17XG4gICAgcGFkZGluZzogNXB4O1xuICBcbiAgfVxuICBcbiAgaW9uLWxpc3QuYmFja2dyb3VuZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItYmFja2dyb3VuZCk7XG4gIH1cbiAgXG4gIC5pdGVtLml0ZW0taW5wdXQge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcmVkKTtcbiAgfVxuICBcbiAgLml0ZW0uaXRlbS1zZWxlY3Qge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcmVkKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjUlO1xuICB9XG4gIFxuICBpb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1iYWNrZ3JvdW5kKTtcbiAgfVxuICBcbiAgaW9uLXRvb2xiYXJ7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYmFja2dyb3VuZCk7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1yZWQpO1xuICB9XG4gIFxuICBpb24tYnV0dG9ue1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXJlZCk7XG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZjtcbiAgfVxuICBcbiAgXG4gIC5pb24tY29sb3ItYmFja2dyb3VuZCB7XG4gICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLWJhY2tncm91bmQpO1xuICAgIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItYmFja2dyb3VuZC1yZ2IpO1xuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItYmFja2dyb3VuZC1jb250cmFzdCk7XG4gICAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItYmFja2dyb3VuZC1jb250cmFzdC1yZ2IpO1xuICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItYmFja2dyb3VuZC1zaGFkZSk7XG4gICAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWJhY2tncm91bmQtdGludCk7XG4gIH1cbiAgXG4gIC5pb24tY29sb3ItcmVkIHtcbiAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1yZWQpO1xuICAgICAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1yZWQtcmdiKTtcbiAgICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItcmVkLWNvbnRyYXN0KTtcbiAgICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXJlZC1jb250cmFzdC1yZ2IpO1xuICAgICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1yZWQtc2hhZGUpO1xuICAgICAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXJlZC10aW50KTtcbiAgfVxuICBcbiAgaW9uLXBvcG92ZXIjcG9wb3Zlci1ib3R0b206OnBhcnQoY29udGVudCkge1xuICAgIHRvcDogdW5zZXQgIWltcG9ydGFudDtcbiAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG4gICJdfQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_home_home_module_ts-es5.js.map