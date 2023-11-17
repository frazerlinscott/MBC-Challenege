(self["webpackChunkphoto_gallery_ng_capacitor"] = self["webpackChunkphoto_gallery_ng_capacitor"] || []).push([["src_app_main_main_module_ts"],{

/***/ 19853:
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageRoutingModule": function() { return /* binding */ MainPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.page */ 64332);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




const routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_0__.MainPage
    }
];
class MainPageRoutingModule {
}
MainPageRoutingModule.ɵfac = function MainPageRoutingModule_Factory(t) { return new (t || MainPageRoutingModule)(); };
MainPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MainPageRoutingModule });
MainPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MainPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 65705:
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageModule": function() { return /* binding */ MainPageModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-routing.module */ 19853);
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.page */ 64332);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);






class MainPageModule {
}
MainPageModule.ɵfac = function MainPageModule_Factory(t) { return new (t || MainPageModule)(); };
MainPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MainPageModule });
MainPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _main_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainPageRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MainPageModule, { declarations: [_main_page__WEBPACK_IMPORTED_MODULE_1__.MainPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _main_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainPageRoutingModule] }); })();


/***/ }),

/***/ 64332:
/*!***********************************!*\
  !*** ./src/app/main/main.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPage": function() { return /* binding */ MainPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _workout1_workout1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../workout1/workout1.page */ 18461);
/* harmony import */ var _completed_completed_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../completed/completed.page */ 57408);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 52468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ 61628);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);














function MainPage_ion_select_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-select-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", w_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](w_r3.name);
} }
function MainPage_ion_select_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-select-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const o_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", o_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](o_r4.name);
} }
function MainPage_ion_button_65_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MainPage_ion_button_65_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.completeBtnClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "COMPLETE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/about"]; };
class MainPage {
    constructor(dataService, activatedRoute, router, modalController, storage) {
        this.dataService = dataService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.modalController = modalController;
        this.storage = storage;
        this.USER_STORAGE_KEY = '';
        this.WorkoutOptions = [];
        this.WorkoutOneData = "";
        this.WorkoutTwoData = "";
        this.initDatabase = [];
        this.progressIndex = 1;
        this.PHOTO_STORAGE_KEY = '';
        this.completeBtnShown = false;
        this.checklistsCount = 0;
        this.loadData(); // load data from stoarge 
        this.LoadNumDays(); // load number of days left calculated from duration 
    }
    ngOnInit() {
        this.loadInitData();
        // let infoRecv = this.activatedRoute.snapshot.paramMap.get("id")
        // this.USER_STORAGE_KEY=infoRecv
        // console.log(this.USER_STORAGE_KEY)
    }
    ImagePage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let photoStorageKey = this.activatedRoute.snapshot.paramMap.get("id");
            let photosDetailsObj = { day: this.numDay, storageKey: photoStorageKey };
            this.photosDetailsStr = JSON.stringify(photosDetailsObj);
            // console.log(this.photosDetailsStr)
            this.router.navigate(['photo', this.photosDetailsStr]);
            this.checklistsCount += 1;
        });
    }
    // get init duration data and assignmnet numdays to display
    LoadNumDays() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let infoRecv = this.activatedRoute.snapshot.paramMap.get("id");
            this.USER_STORAGE_KEY = infoRecv;
            yield this.dataService.getStorageData(this.USER_STORAGE_KEY).then(val => {
                // console.log(val)
                if (val[1].length === 0) { //no PROGRESS DATA
                    this.numDay = 1;
                }
                else {
                    this.numDay = (val[1].length + 1); //grab the last day of progress days and set to numDay
                    // console.log(this.numDay)
                }
            });
        });
    }
    //load data from storage 
    loadData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // this.initDatabase = await this.dataService.getProgressData();
            // this.WorkoutDatabase = await this.dataService.getWorkoutData();
        });
    }
    //remove item from stoarge 
    // async removeItem(index){
    //   this.loadData();
    //   // this.dataService.removeProgressItem(index);
    //   this.initDatabase.splice(index, 1);
    // }
    // present model when "edit" workout button is pressed 
    presentModal1(page) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let infoRecv = this.activatedRoute.snapshot.paramMap.get("id");
            this.USER_STORAGE_KEY = infoRecv;
            const modal = yield this.modalController.create({
                component: _workout1_workout1_page__WEBPACK_IMPORTED_MODULE_0__.Workout1Page,
                componentProps: { userStorage: this.USER_STORAGE_KEY, updatedWorkoutList: this.WorkoutOptions, page }
            });
            modal.onDidDismiss();
            return modal.present();
        });
    }
    // function to load selection list from storage 
    loadSelection() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.WorkoutDatabase = yield this.dataService.getStorageData(this.USER_STORAGE_KEY);
            this.WorkoutOptions = this.WorkoutDatabase[2];
            this.checklistsCount += 1;
        });
    }
    loadInitData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let infoRecv = this.activatedRoute.snapshot.paramMap.get("id");
            this.USER_STORAGE_KEY = infoRecv;
            yield this.dataService.getStorageData(this.USER_STORAGE_KEY).then(val => {
                this.duration = val[0][val[0].length - 1].initData.duration;
                this.firstname = val[0][val[0].length - 1].initData.firstname;
                this.lastname = val[0][val[0].length - 1].initData.lastname;
                this.weight = val[0][val[0].length - 1].initData.weight;
                this.durationINT = parseInt(this.duration);
                this.startDate = val[0][val[0].length - 1].initData.startDate;
                this.endDate = val[0][val[0].length - 1].initData.endDate;
                // this.startDate = startDate.substring(0, 15);
                // this.endDate = endDate.substring(0, 15);
                console.log(this.startDate);
                console.log(this.endDate);
            });
        });
    }
    // check if checkboxs are checked and assign varibles to add to storage 
    checkChecked(e, location) {
        var isChecked = e.currentTarget.checked;
        if (isChecked == false) {
            if (location === "reading") {
                this.readingCheck = 10;
            }
            if (location === "water") {
                this.waterCheck = 4;
            }
            if (location === "food") {
                this.eatingCheck = true;
                this.completeBtnShown = true;
            }
        }
    }
    progressBtnClick() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigate(['progress', this.USER_STORAGE_KEY]);
        });
    }
    //fucntion to add main page data to storage and navigate to progress page  
    completeBtnClick() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.completeBtnShown = false;
            yield this.dataService.getStorageData(this.USER_STORAGE_KEY).then(val => {
                for (let i = 0; i < val[2].length; i++) {
                    if (val[2][i].name === this.workoutOneSelected) {
                        this.selectedWorkoutOneNotes = val[2][i].notes;
                    }
                    if (val[2][i].name === this.workoutTwoSelected) {
                        this.selectedWorkoutTwoNotes = val[2][i].notes;
                    }
                }
            });
            //get all new inputs and assign to varibles 
            this.pageInfo = {
                progressData: { Day: this.numDay,
                    firstname: this.firstname,
                    lastname: this.lastname,
                    Workout1: this.workoutOneSelected,
                    NotesOne: this.selectedWorkoutOneNotes,
                    Workout2: this.workoutTwoSelected,
                    NotesTwo: this.selectedWorkoutTwoNotes,
                    Sleep: this.daySleep,
                    Weight: this.dayWeight,
                    Picture: 1,
                    Reading: this.readingCheck,
                    Water: this.waterCheck,
                    Eating: this.eatingCheck,
                    initWeight: this.weight,
                    Duration: this.duration
                }
            };
            //add new inputs to storage  
            yield this.dataService.addStorageDataNew(this.USER_STORAGE_KEY, 1, this.pageInfo);
            //calculate new "days left" to display on interface 
            yield this.dataService.getStorageData(this.USER_STORAGE_KEY).then(val => {
                if (val[1].length === 0) {
                    let daysDiff = 0;
                    this.duration = this.durationINT - daysDiff;
                }
                else {
                    let daysDiff = val[1].length;
                    this.duration = this.durationINT - daysDiff;
                }
            });
            yield this.dataService.getStorageData(this.USER_STORAGE_KEY).then(val => {
                this.numDay = ((val[1][val[1].length - 1].progressData.Day) += 1);
            });
            //reset inputs to allow user to input a new day 
            this.workoutOneSelected = "";
            this.workoutTwoSelected = "";
            this.daySleep = "";
            this.dayWeight = "";
            this.readingCheck = 0;
            this.waterCheck = 0;
            this.eatingCheck = false;
            this.ReadingisChecked = false;
            this.EatingisChecked = false;
            this.DrinkingisChecked = false;
            this.loadData();
            const modal = yield this.modalController.create({
                component: _completed_completed_page__WEBPACK_IMPORTED_MODULE_1__.CompletedPage,
                componentProps: { userStorage: this.USER_STORAGE_KEY, data: this.pageInfo }
            });
            modal.onDidDismiss();
            return modal.present();
        });
    }
    signOut() {
        this.USER_STORAGE_KEY = '';
        this.router.navigate(['pre-login']);
    }
}
MainPage.ɵfac = function MainPage_Factory(t) { return new (t || MainPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.Storage)); };
MainPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MainPage, selectors: [["app-main"]], decls: 66, vars: 19, consts: [["slot", "start", 1, "signOut", 3, "click"], ["slot", "end", 1, "about", 3, "routerLink"], [1, "name"], ["id", "container"], [1, "background"], [3, "ngModel", "click", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "editLink", 3, "click"], ["type", "number", "min", "0", "inputmode", "numeric", "pattern", "[0-9]*", "ng-model", "vm.onlyNumbers", "placeholder", "Sleep", 3, "ngModel", "ngModelChange"], ["type", "number", "min", "0", "inputmode", "numeric", "pattern", "[0-9]*", "ng-model", "vm.onlyNumbers", "placeholder", "Weight", 1, "weight", 3, "ngModel", "ngModelChange"], [3, "click"], ["slot", "end", "name", "camera"], [3, "ngModel", "ngModelChange", "click"], ["id", "bottomContainer"], [1, "buttonRow"], ["wrap", ""], ["width-50", ""], ["shape", "round", "expand", "full", 1, "buttonRow", 3, "click"], ["name", "document-outline", 1, "icon"], ["shape", "round", "class", "buttonRow", "expand", "full", 3, "click", 4, "ngIf"], [3, "value"], ["name", "checkbox-outline", 1, "icon"]], template: function MainPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MainPage_Template_ion_buttons_click_2_listener() { return ctx.signOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Sign Out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ion-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Workout 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ion-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MainPage_Template_ion_select_click_16_listener() { return ctx.loadSelection(); })("ngModelChange", function MainPage_Template_ion_select_ngModelChange_16_listener($event) { return ctx.workoutOneSelected = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, MainPage_ion_select_option_17_Template, 2, 2, "ion-select-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MainPage_Template_a_click_18_listener() { return ctx.presentModal1(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Workout 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "ion-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MainPage_Template_ion_select_click_23_listener() { return ctx.loadSelection(); })("ngModelChange", function MainPage_Template_ion_select_ngModelChange_23_listener($event) { return ctx.workoutTwoSelected = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, MainPage_ion_select_option_24_Template, 2, 2, "ion-select-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MainPage_Template_a_click_25_listener() { return ctx.presentModal1(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "ion-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MainPage_Template_ion_input_ngModelChange_29_listener($event) { return ctx.daySleep = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "ion-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MainPage_Template_ion_input_ngModelChange_32_listener($event) { return ctx.dayWeight = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "ion-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MainPage_Template_ion_item_click_34_listener() { return ctx.ImagePage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Upload Progress Picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "ion-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "ion-checkbox", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MainPage_Template_ion_checkbox_ngModelChange_39_listener($event) { return ctx.ReadingisChecked = $event; })("click", function MainPage_Template_ion_checkbox_click_39_listener($event) { return ctx.checkChecked($event, "reading"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "10 Pages of Reading");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "ion-checkbox", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MainPage_Template_ion_checkbox_ngModelChange_43_listener($event) { return ctx.DrinkingisChecked = $event; })("click", function MainPage_Template_ion_checkbox_click_43_listener($event) { return ctx.checkChecked($event, "water"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Drink 4L of Water");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "ion-checkbox", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MainPage_Template_ion_checkbox_ngModelChange_47_listener($event) { return ctx.EatingisChecked = $event; })("click", function MainPage_Template_ion_checkbox_click_47_listener($event) { return ctx.checkChecked($event, "food"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "No Cheat Meals or Alcohol");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, " DAYS REMAINING: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](56, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "ion-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "ion-row", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "ion-col", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "ion-button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MainPage_Template_ion_button_click_61_listener() { return ctx.progressBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "PROGRESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "ion-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "ion-col", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, MainPage_ion_button_65_Template, 3, 0, "ion-button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](18, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.firstname, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("DAY ", ctx.numDay, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.workoutOneSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.WorkoutOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.workoutTwoSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.WorkoutOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.daySleep);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.dayWeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.ReadingisChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.DrinkingisChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.EatingisChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.duration, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" FINISHING: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](56, 15, ctx.endDate, "dd MMMM yyyy"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.completeBtnShown);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.SelectValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NumericValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.PatternValidator, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButton, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSelectOption], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: ["#container[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--ion-color-red);\n  margin-top: -20px;\n  margin-bottom: -10px;\n}\n\n#bottomContainer[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--ion-color-red);\n  margin-bottom: -10px;\n}\n\n.editLink[_ngcontent-%COMP%] {\n  color: var(--ion-color-red);\n}\n\n.signOut[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n\n.about[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\n\ndiv[_ngcontent-%COMP%] {\n  background: var(--ion-color-background);\n}\n\nion-item[_ngcontent-%COMP%] {\n  padding-right: 16px;\n  --background: var(--ion-color-background);\n  color: var(--ion-color-red);\n}\n\nion-icon.icon[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\n.name[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.item.item-input[_ngcontent-%COMP%] {\n  color: var(--ion-color-red);\n  --background: var(--ion-color-background);\n}\n\nion-list[_ngcontent-%COMP%] {\n  --background: var(--ion-color-background);\n}\n\nion-list.background[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-background);\n}\n\n.item.item-select[_ngcontent-%COMP%] {\n  color: var(--ion-color-red);\n  --background: var(--ion-color-background);\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-color-background);\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--ion-color-background);\n  color: var(--ion-color-red);\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n}\n\n.progress-btn[_ngcontent-%COMP%] {\n  --background: var(--ion-color-red);\n  width: 50%;\n  margin-left: 25%;\n  margin-right: 25%;\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n}\n\n.buttonRow[_ngcontent-%COMP%] {\n  --background: var(--ion-color-red);\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n  font-size: 15px;\n}\n\nion-footer[_ngcontent-%COMP%] {\n  bottom: 0;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 60px;\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n  padding-top: -50px;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: white;\n  font-family: Impact, Haettenschweiler, \"Arial Narrow\", sans-serif;\n  padding-top: -50px;\n}\n\nion-checkbox[_ngcontent-%COMP%] {\n  --checkmark-color: white;\n  --background-checked: var(--ion-color-red);\n  --border-color: white;\n  --border-color-checked: white;\n}\n\n.ion-color-background[_ngcontent-%COMP%] {\n  --ion-color-base: var(--ion-color-background);\n  --ion-color-base-rgb: var(--ion-color-background-rgb);\n  --ion-color-contrast: var(--ion-color-background-contrast);\n  --ion-color-contrast-rgb: var(--ion-color-background-contrast-rgb);\n  --ion-color-shade: var(--ion-color-background-shade);\n  --ion-color-tint: var(--ion-color-background-tint);\n}\n\n.ion-color-red[_ngcontent-%COMP%] {\n  --ion-color-base: var(--ion-color-red);\n  --ion-color-base-rgb: var(--ion-color-red-rgb);\n  --ion-color-contrast: var(--ion-color-red-contrast);\n  --ion-color-contrast-rgb: var(--ion-color-red-contrast-rgb);\n  --ion-color-shade: var(--ion-color-red-shade);\n  --ion-color-tint: var(--ion-color-red-tint);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0UsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUdBO0VBQ0ksdUNBQUE7QUFBSjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUlBO0VBQ0Usa0JBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7QUFERjs7QUFLQTtFQUNFLDJCQUFBO0VBQ0EseUNBQUE7QUFGRjs7QUFLQTtFQUNFLHlDQUFBO0FBRkY7O0FBS0E7RUFDRSw2Q0FBQTtBQUZGOztBQU1BO0VBQ0UsMkJBQUE7RUFDQSx5Q0FBQTtBQUhGOztBQU1BO0VBQ0UseUNBQUE7QUFIRjs7QUFNQTtFQUNFLHlDQUFBO0VBQ0EsMkJBQUE7RUFDQSxzRUFBQTtBQUhGOztBQU9BO0VBQ0Usa0NBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNFQUFBO0FBSkY7O0FBUUE7RUFDRSxrQ0FBQTtFQUNBLHNFQUFBO0VBQ0EsZUFBQTtBQUxGOztBQVFBO0VBQ0EsU0FBQTtBQUxBOztBQVFBO0VBQ0UsZUFBQTtFQUNBLHNFQUFBO0FBTEY7O0FBUUE7RUFDRSxlQUFBO0VBRUEsc0VBQUE7RUFDQSxrQkFBQTtBQU5GOztBQVNBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxpRUFBQTtFQUNBLGtCQUFBO0FBTkY7O0FBU0E7RUFDRSx3QkFBQTtFQUNBLDBDQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQU5GOztBQVlBO0VBQ0ksNkNBQUE7RUFDQSxxREFBQTtFQUNBLDBEQUFBO0VBQ0Esa0VBQUE7RUFDQSxvREFBQTtFQUNBLGtEQUFBO0FBVEo7O0FBWUE7RUFDSSxzQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsbURBQUE7RUFDQSwyREFBQTtFQUNBLDZDQUFBO0VBQ0EsMkNBQUE7QUFUSiIsImZpbGUiOiJtYWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXJlZCk7IFxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xufVxuXG4jYm90dG9tQ29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1yZWQpOyBcbiAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbn1cblxuLmVkaXRMaW5re1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXJlZCk7XG59XG5cbi5zaWduT3V0e1xuICBwYWRkaW5nLWxlZnQ6MjBweDtcbn1cblxuLmFib3V0e1xuICBwYWRkaW5nLXJpZ2h0OjIwcHg7XG59XG5cblxuZGl2e1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1iYWNrZ3JvdW5kKTtcbn1cblxuaW9uLWl0ZW17XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXJlZCk7XG5cbn1cblxuaW9uLWljb24uaWNvbntcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4ubmFtZXtcbiAgY29sb3I6IHdoaXRlIDtcbn1cblxuXG4uaXRlbS5pdGVtLWlucHV0IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1yZWQpO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1iYWNrZ3JvdW5kKTtcbn1cblxuaW9uLWxpc3R7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWJhY2tncm91bmQpO1xufVxuXG5pb24tbGlzdC5iYWNrZ3JvdW5ke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItYmFja2dyb3VuZCk7XG59XG5cblxuLml0ZW0uaXRlbS1zZWxlY3Qge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXJlZCk7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWJhY2tncm91bmQpO1xufVxuXG5pb24tY29udGVudHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYmFja2dyb3VuZCk7XG59XG5cbmlvbi10b29sYmFye1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1iYWNrZ3JvdW5kKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1yZWQpO1xuICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xufVxuXG5cbi5wcm9ncmVzcy1idG57XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXJlZCk7XG4gIHdpZHRoOjUwJTtcbiAgbWFyZ2luLWxlZnQ6MjUlO1xuICBtYXJnaW4tcmlnaHQ6MjUlO1xuICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xufVxuXG5cbi5idXR0b25Sb3d7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXJlZCk7XG4gIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuaW9uLWZvb3RlcntcbmJvdHRvbTowO1xufVxuXG5oMXtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xufVxuXG5oMntcbiAgZm9udC1zaXplOiAxNXB4O1xuXG4gIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmctdG9wOiAtNTBweDtcbn1cblxuaDN7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93Jywgc2Fucy1zZXJpZjtcbiAgcGFkZGluZy10b3A6IC01MHB4O1xufVxuXG5pb24tY2hlY2tib3h7XG4gIC0tY2hlY2ttYXJrLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1yZWQpO1xuICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XG4gIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6IHdoaXRlO1xufVxuXG5cblxuXG4uaW9uLWNvbG9yLWJhY2tncm91bmQge1xuICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1iYWNrZ3JvdW5kKTtcbiAgICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWJhY2tncm91bmQtcmdiKTtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWJhY2tncm91bmQtY29udHJhc3QpO1xuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWJhY2tncm91bmQtY29udHJhc3QtcmdiKTtcbiAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWJhY2tncm91bmQtc2hhZGUpO1xuICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1iYWNrZ3JvdW5kLXRpbnQpO1xuICB9XG4gIFxuLmlvbi1jb2xvci1yZWQge1xuICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1yZWQpO1xuICAgIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItcmVkLXJnYik7XG4gICAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1yZWQtY29udHJhc3QpO1xuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXJlZC1jb250cmFzdC1yZ2IpO1xuICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItcmVkLXNoYWRlKTtcbiAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItcmVkLXRpbnQpO1xuICB9Il19 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_main_main_module_ts-es2015.js.map