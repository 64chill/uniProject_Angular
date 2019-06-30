(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* #container {\n    display: flex; \n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;}\n.child {\n    width: 200px;\n    height: 200px; }\n#child1 {\n    background-color: red; }\n#child2 {\n    background-color: green; }\n#child3 {\n    background-color: blue; } */\n\nmat-sidenav-container, mat-sidenav-content, mat-sidenav {\n    height: 100%;\n}\n\nmat-sidenav {\n    width: 250px;\n}\n\na {\n    color:white;\n    text-decoration: none;\n}\n\na:hover, a:active {\n    color: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Z0NBYWdDOztBQUVoQztJQUNJLGFBQWE7Q0FDaEI7O0FBQ0Q7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtDQUN6Qjs7QUFDRDtJQUNJLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogI2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjt9XG4uY2hpbGQge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4OyB9XG4jY2hpbGQxIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7IH1cbiNjaGlsZDIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuOyB9XG4jY2hpbGQzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyB9ICovXG5cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciwgbWF0LXNpZGVuYXYtY29udGVudCwgbWF0LXNpZGVuYXYge1xuICAgIGhlaWdodDogMTAwJTtcbn1cbm1hdC1zaWRlbmF2IHtcbiAgICB3aWR0aDogMjUwcHg7XG59XG5cbmEge1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmE6aG92ZXIsIGE6YWN0aXZlIHtcbiAgICBjb2xvcjogbGlnaHRncmF5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-sidenav-container>\n\n      <mat-sidenav #sidenav opened=\"false\" >\n          <mat-nav-list>\n            <a *ngIf=\"loggedIn\" mat-list-item routerLink=\"/notifications\" (click)=\"sidenav.close()\">\n              <mat-icon>notification_important</mat-icon>\n              Notifications\n            </a>\n            <a *ngIf=\"loggedIn && this.userService.getCurrenSession().acc_type == 'passenger'\" mat-list-item routerLink=\"/search-active-rides\" (click)=\"sidenav.close()\">\n              <mat-icon>directions_car</mat-icon>\n              Search Active Rides\n            </a>\n            <a *ngIf=\"loggedIn && this.userService.getCurrenSession().acc_type == 'driver'\" mat-list-item routerLink=\"/view-current-rides\" (click)=\"sidenav.close()\">\n              <mat-icon>directions_car</mat-icon>\n              View Current Rides\n            </a>\n            <a *ngIf=\"loggedIn\" mat-list-item routerLink=\"profile\" (click)=\"myProfile(); sidenav.close()\">\n              <mat-icon>person</mat-icon>\n              My Profile\n            </a>\n            <a *ngIf=\"loggedIn\" mat-list-item routerLink=\"/\" (click)=\"sidenav.close(); signOut()\">\n              <mat-icon>exit_to_app</mat-icon>\n              Sing out\n            </a>\n          </mat-nav-list>\n        </mat-sidenav>\n        <mat-sidenav-content>\n          <mat-toolbar color=\"primary\" *ngIf=\"loggedIn\">\n              <div fxHide.gt-xs>\n                <button mat-raised-button color=\"accent\" (click)=\"sidenav.toggle()\">\n                  <mat-icon>menu</mat-icon>\n                </button>\n              </div>\n              \n              <div fxFlex fxLayoutAlign=\"end\" fxLayoutGap=\"15px\" fxHide.xs>\n      \n                <a  routerLink=\"/notifications\">Notifications</a>\n                <a  *ngIf=\"this.userService.getCurrenSession().acc_type == 'driver'\" routerLink=\"//view-current-rides\" >View Current Rides</a>\n                <a  *ngIf=\"this.userService.getCurrenSession().acc_type == 'passenger'\" routerLink=\"/search-active-rides\">Search Active Rides</a>\n                <div  [matMenuTriggerFor]=\"menu\" >\n                  <a href=\"javascript:;\" fxLayoutAlign=\"center center\">\n                      {{this.userService.getCurrenSession().contact_email}}\n                  <mat-icon>expand_more</mat-icon>\n                  </a>\n                </div>\n                <mat-menu #menu=\"matMenu\">\n                  <button mat-menu-item routerLink=\"/profile\" (click)=\"myProfile()\">My Profile</button>\n                  <button mat-menu-item routerLink=\"/\" (click)=\"signOut()\">Sign Out</button>\n                </mat-menu>\n              </div>\n          </mat-toolbar>\n \n   <router-outlet></router-outlet>\n  </mat-sidenav-content>\n    \n  </mat-sidenav-container>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.title = 'angular-carpol';
        this.loggedIn = false;
    }
    AppComponent.prototype.setLoggedIn = function (value) {
        this.loggedIn = value;
    };
    AppComponent.prototype.signOut = function () {
        this.loggedIn = false;
    };
    AppComponent.prototype.myProfile = function () {
        var _this = this;
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
            return _this.router.navigate(["/profile"]);
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routing.module */ "./src/app/routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _frontpage_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./frontpage/login/login.component */ "./src/app/frontpage/login/login.component.ts");
/* harmony import */ var _frontpage_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./frontpage/signup/signup.component */ "./src/app/frontpage/signup/signup.component.ts");
/* harmony import */ var _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/profile/profile.component */ "./src/app/dashboard/profile/profile.component.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _services_reputation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/reputation.service */ "./src/app/services/reputation.service.ts");
/* harmony import */ var _services_drive_rides_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/drive_rides.service */ "./src/app/services/drive_rides.service.ts");
/* harmony import */ var _dashboard_profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard/profile/edit-profile/edit-profile.component */ "./src/app/dashboard/profile/edit-profile/edit-profile.component.ts");
/* harmony import */ var _dashboard_dashboard_driver_view_current_rides_view_current_rides_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/dashboard_driver/view-current-rides/view-current-rides.component */ "./src/app/dashboard/dashboard_driver/view-current-rides/view-current-rides.component.ts");
/* harmony import */ var _dashboard_dashboard_driver_view_current_rides_edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/dashboard_driver/view-current-rides/edit-dialog/edit-dialog.component */ "./src/app/dashboard/dashboard_driver/view-current-rides/edit-dialog/edit-dialog.component.ts");
/* harmony import */ var _dashboard_dashboard_driver_view_current_rides_create_new_dialog_create_new_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/dashboard_driver/view-current-rides/create-new-dialog/create-new-dialog.component */ "./src/app/dashboard/dashboard_driver/view-current-rides/create-new-dialog/create-new-dialog.component.ts");
/* harmony import */ var _dashboard_dashboard_driver_view_current_rides_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard/dashboard_driver/view-current-rides/delete-dialog/delete-dialog.component */ "./src/app/dashboard/dashboard_driver/view-current-rides/delete-dialog/delete-dialog.component.ts");
/* harmony import */ var _dashboard_dashboard_passenger_search_active_rides_search_active_rides_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dashboard/dashboard_passenger/search-active-rides/search-active-rides.component */ "./src/app/dashboard/dashboard_passenger/search-active-rides/search-active-rides.component.ts");
/* harmony import */ var _dashboard_view_passengers_ride_dialog_view_passengers_ride_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dashboard/view-passengers-ride-dialog/view-passengers-ride-dialog.component */ "./src/app/dashboard/view-passengers-ride-dialog/view-passengers-ride-dialog.component.ts");
/* harmony import */ var _dashboard_dashboard_passenger_search_active_rides_request_ride_dialog_request_ride_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dashboard/dashboard_passenger/search-active-rides/request-ride-dialog/request-ride-dialog.component */ "./src/app/dashboard/dashboard_passenger/search-active-rides/request-ride-dialog/request-ride-dialog.component.ts");
/* harmony import */ var _dashboard_dashboard_passenger_search_active_rides_stops_ride_dialog_stops_ride_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dashboard/dashboard_passenger/search-active-rides/stops-ride-dialog/stops-ride-dialog.component */ "./src/app/dashboard/dashboard_passenger/search-active-rides/stops-ride-dialog/stops-ride-dialog.component.ts");
/* harmony import */ var _dashboard_notification_tabs_notification_tabs_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dashboard/notification-tabs/notification-tabs.component */ "./src/app/dashboard/notification-tabs/notification-tabs.component.ts");
/* harmony import */ var _dashboard_notification_tabs_notification_requests_notification_requests_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dashboard/notification-tabs/notification-requests/notification-requests.component */ "./src/app/dashboard/notification-tabs/notification-requests/notification-requests.component.ts");
/* harmony import */ var _dashboard_notification_tabs_notification_ended_rides_notification_ended_rides_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dashboard/notification-tabs/notification-ended-rides/notification-ended-rides.component */ "./src/app/dashboard/notification-tabs/notification-ended-rides/notification-ended-rides.component.ts");
/* harmony import */ var _dashboard_notification_tabs_notification_requests_driver_notification_requests_driver_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./dashboard/notification-tabs/notification-requests-driver/notification-requests-driver.component */ "./src/app/dashboard/notification-tabs/notification-requests-driver/notification-requests-driver.component.ts");
/* harmony import */ var _dashboard_notification_tabs_notification_ended_rides_rate_dialog_rate_dialog_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./dashboard/notification-tabs/notification-ended-rides/rate-dialog/rate-dialog.component */ "./src/app/dashboard/notification-tabs/notification-ended-rides/rate-dialog/rate-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _frontpage_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _frontpage_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
                _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                _dashboard_profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_15__["EditProfileComponent"],
                _dashboard_dashboard_driver_view_current_rides_view_current_rides_component__WEBPACK_IMPORTED_MODULE_16__["ViewCurrentRidesComponent"],
                _dashboard_dashboard_driver_view_current_rides_edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_17__["EditDialogComponent"],
                _dashboard_dashboard_driver_view_current_rides_create_new_dialog_create_new_dialog_component__WEBPACK_IMPORTED_MODULE_18__["CreateNewDialogComponent"],
                _dashboard_dashboard_driver_view_current_rides_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_19__["DeleteDialogComponent"],
                _dashboard_dashboard_passenger_search_active_rides_search_active_rides_component__WEBPACK_IMPORTED_MODULE_20__["SearchActiveRidesComponent"],
                _dashboard_view_passengers_ride_dialog_view_passengers_ride_dialog_component__WEBPACK_IMPORTED_MODULE_21__["ViewPassengersRideDialogComponent"],
                _dashboard_dashboard_passenger_search_active_rides_request_ride_dialog_request_ride_dialog_component__WEBPACK_IMPORTED_MODULE_22__["RequestRideDialogComponent"],
                _dashboard_dashboard_passenger_search_active_rides_stops_ride_dialog_stops_ride_dialog_component__WEBPACK_IMPORTED_MODULE_23__["StopsRideDialogComponent"],
                _dashboard_notification_tabs_notification_tabs_component__WEBPACK_IMPORTED_MODULE_24__["NotificationTabsComponent"],
                _dashboard_notification_tabs_notification_requests_notification_requests_component__WEBPACK_IMPORTED_MODULE_25__["NotificationRequestsComponent"],
                _dashboard_notification_tabs_notification_ended_rides_notification_ended_rides_component__WEBPACK_IMPORTED_MODULE_26__["NotificationEndedRidesComponent"],
                _dashboard_notification_tabs_notification_requests_driver_notification_requests_driver_component__WEBPACK_IMPORTED_MODULE_27__["NotificationRequestsDriverComponent"],
                _dashboard_notification_tabs_notification_ended_rides_rate_dialog_rate_dialog_component__WEBPACK_IMPORTED_MODULE_28__["RateDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _routing_module__WEBPACK_IMPORTED_MODULE_6__["RoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            ],
            providers: [_services_users_service__WEBPACK_IMPORTED_MODULE_11__["UsersService"], _services_reputation_service__WEBPACK_IMPORTED_MODULE_13__["ReputationService"], _services_drive_rides_service__WEBPACK_IMPORTED_MODULE_14__["DriveRidesService"], _services_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [
                _dashboard_profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_15__["EditProfileComponent"],
                _dashboard_dashboard_driver_view_current_rides_create_new_dialog_create_new_dialog_component__WEBPACK_IMPORTED_MODULE_18__["CreateNewDialogComponent"],
                _dashboard_dashboard_driver_view_current_rides_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_19__["DeleteDialogComponent"],
                _dashboard_dashboard_driver_view_current_rides_edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_17__["EditDialogComponent"],
                _dashboard_view_passengers_ride_dialog_view_passengers_ride_dialog_component__WEBPACK_IMPORTED_MODULE_21__["ViewPassengersRideDialogComponent"],
                _dashboard_dashboard_passenger_search_active_rides_request_ride_dialog_request_ride_dialog_component__WEBPACK_IMPORTED_MODULE_22__["RequestRideDialogComponent"],
                _dashboard_dashboard_passenger_search_active_rides_stops_ride_dialog_stops_ride_dialog_component__WEBPACK_IMPORTED_MODULE_23__["StopsRideDialogComponent"],
                _dashboard_notification_tabs_notification_ended_rides_rate_dialog_rate_dialog_component__WEBPACK_IMPORTED_MODULE_28__["RateDialogComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard_driver/view-current-rides/create-new-dialog/create-new-dialog.component.css":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/dashboard/dashboard_driver/view-current-rides/create-new-dialog/create-new-dialog.component.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmRfZHJpdmVyL3ZpZXctY3VycmVudC1yaWRlcy9jcmVhdGUtbmV3LWRpYWxvZy9jcmVhdGUtbmV3LWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard_driver/view-current-rides/create-new-dialog/create-new-dialog.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/dashboard/dashboard_driver/view-current-rides/create-new-dialog/create-new-dialog.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\n<section>\n    <h1 fxLayout=\"row\" fxLayoutGap=\"10px\"  fxLayoutAlign=\"center center\">Create New Ride!</h1>\n\n    <form fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\"\n    #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n\n<!---------------------------------------------------------------------------------------------------------------------------------------->\n    <mat-form-field>\n        <input type=\"text\"  pattern=\"[A-Za-z0-9]{2,20}\" matInput placeholder=\"Ride Name\" ngModel name=\"rideName\" required #rideNameInput=\"ngModel\" > \n        <mat-error *ngIf=\"rideNameInput.hasError('required')\">Please write ride name</mat-error>\n        <mat-error *ngIf=\"!rideNameInput.hasError('required')\">Ride name should contain only letters and numbers with 2-20 characters</mat-error>\n      </mat-form-field>\n      \n<!---------------------------------------------------------------------------------------------------------------------------------------->\n<mat-form-field>\n    <input type=\"text\"  pattern=\"[A-Za-z0-9 ]{2,30}\" matInput placeholder=\"Start Location\" ngModel name=\"startLocation\" required #startLocationInput=\"ngModel\" > \n    <mat-error *ngIf=\"startLocationInput.hasError('required')\">Please write start location</mat-error>\n    <mat-error *ngIf=\"!startLocationInput.hasError('required')\">Start Location should contain only letters and numbers with 2-30 characters</mat-error>\n  </mat-form-field>\n\n<!---------------------------------------------------------------------------------------------------------------------------------------->\n<mat-form-field>\n    <input type=\"text\" pattern=\"[A-Za-z0-9 ]{2,30}\" matInput placeholder=\"End Location\" ngModel name=\"EndLocation\" required #endLocationInput=\"ngModel\" > \n    <mat-error *ngIf=\"endLocationInput.hasError('required')\">Please write end location</mat-error>\n    <mat-error *ngIf=\"!endLocationInput.hasError('required')\">End Location should contain only letters and numbers with 2-30 characters</mat-error>\n  </mat-form-field>\n<!---------------------------------------------------------------------------------------------------------------------------------------->\n<!---------------------------------------------------------------------------------------------------------------------------------------->\n<!---------------------------------------------------------------------------------------------------------------------------------------->\n<!---------------------------------------------------------------------------------------------------------------------------------------->\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n    <mat-form-field>\n        <input type=\"text\" pattern=\"[0-9]{2}:[0-9]{2}\" matInput placeholder=\"Start Time\" ngModel name=\"startTime\" required #startTimeInput=\"ngModel\" > \n        <mat-error *ngIf=\"startTimeInput.hasError('required')\">Please write start time</mat-error>\n        <mat-error *ngIf=\"!startTimeInput.hasError('required')\">Start time should be like an example : 11:33</mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n          <input type=\"text\" pattern=\"[0-9]{2}:[0-9]{2}\" matInput placeholder=\"End Time\" ngModel name=\"endTime\" required #endTimeInput=\"ngModel\" > \n          <mat-error *ngIf=\"endTimeInput.hasError('required')\">Please write end time</mat-error>\n          <mat-error *ngIf=\"!endTimeInput.hasError('required')\">End time should be like an example : 11:33</mat-error>\n        </mat-form-field>\n\n</div>\n<!---------------------------------------------------------------------------------------------------------------------------------------->\n<!---------------------------------------------------------------------------------------------------------------------------------------->\n<!---------------------------------------------------------------------------------------------------------------------------------------->\n<!---------------------------------------------------------------------------------------------------------------------------------------->\n\n<!---------------------------------------------------------------------------------------------------------------------------------------->\n<mat-form-field>\n    <input type=\"text\" pattern=\"[0-9]{1,2}\" matInput placeholder=\"Passanger Limit\" ngModel name=\"passangerLimit\" required #passangerLimitInput=\"ngModel\" > \n    <mat-error *ngIf=\"passangerLimitInput.hasError('required')\">Please write Passanger Limit</mat-error>\n    <mat-error *ngIf=\"!passangerLimitInput.hasError('required')\">Passanger Limit needs to be between 0-99</mat-error>\n  </mat-form-field>\n\n<!---------------------------------------------------------------------------------------------------------------------------------------->\n<mat-form-field>\n        <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" #datepickerInput=\"ngModel\" ngModel required name=\"dateFiled\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>  \n        <mat-error *ngIf=\"datepickerInput.hasError('required')\">Choose Date</mat-error>\n        <mat-error *ngIf=\"!datepickerInput.hasError('required')\">Please choose a date!</mat-error>   \n  </mat-form-field>\n\n\n<!---------------------------------------------------------------------------------------------------------------------------------------->\n<!---------------------------------------------------------------------------------------------------------------------------------------->\n<mat-form-field>\n    <input type=\"text\" pattern=\"[A-Za-z0-9,]{10,100}\" matInput placeholder=\"Write stops: divade them with comma\" ngModel name=\"stops\" required #stopsInput=\"ngModel\" > \n    <mat-error *ngIf=\"stopsInput.hasError('required')\">Please write stops</mat-error>\n    <mat-error *ngIf=\"!stopsInput.hasError('required')\">Stops needs to be between 10 and 100 characters with comma separating each stop</mat-error>\n  </mat-form-field>\n\n  \n  <!---------------------------------------------------------------------------------------------------------------------------------------->\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n          <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"f.invalid\" >\n            Create New Ride\n          </button>\n          <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"onCancel()\">\n              Cancel\n            </button>\n      </div>\n    </form>\n\n</section>\n</mat-dialog-content>"

/***/ }),

/***/ "./src/app/dashboard/dashboard_driver/view-current-rides/create-new-dialog/create-new-dialog.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/dashboard/dashboard_driver/view-current-rides/create-new-dialog/create-new-dialog.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: CreateNewDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewDialogComponent", function() { return CreateNewDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_drive_rides_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/drive_rides.service */ "./src/app/services/drive_rides.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var CreateNewDialogComponent = /** @class */ (function () {
    function CreateNewDialogComponent(driverService, dialogRef, data, router, _snackBar) {
        this.driverService = driverService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
        this._snackBar = _snackBar;
        this.datePicker_input = null;
    }
    CreateNewDialogComponent.prototype.ngOnInit = function () {
    };
    CreateNewDialogComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var stopsDriverRidesStopsModelList = [];
        var split_stops = form.value.stops.split(",");
        for (var elem in split_stops) {
            stopsDriverRidesStopsModelList.push({
                stop_name: split_stops[elem]
            });
        }
        this.driverService.setDriveRide(this.data.data_id, form.value.rideName, form.value.startLocation, form.value.EndLocation, form.value.startTime, form.value.endTime, form.value.passangerLimit, new Date(form.value.dateFiled), stopsDriverRidesStopsModelList);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
            return _this.router.navigate(["/view-current-rides"]);
        });
        this._snackBar.open("Drive created " + form.value.rideName + ".", "Dismiss", {
            duration: 2000,
        });
        this.onCancel();
    };
    CreateNewDialogComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    CreateNewDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-new-dialog',
            template: __webpack_require__(/*! ./create-new-dialog.component.html */ "./src/app/dashboard/dashboard_driver/view-current-rides/create-new-dialog/create-new-dialog.component.html"),
            styles: [__webpack_require__(/*! ./create-new-dialog.component.css */ "./src/app/dashboard/dashboard_driver/view-current-rides/create-new-dialog/create-new-dialog.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_drive_rides_service__WEBPACK_IMPORTED_MODULE_2__["DriveRidesService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], CreateNewDialogComponent);
    return CreateNewDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard_driver/view-current-rides/delete-dialog/delete-dialog.component.css":
/*!*********************************************************************************************************!*\
  !*** ./src/app/dashboard/dashboard_driver/view-current-rides/delete-dialog/delete-dialog.component.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmRfZHJpdmVyL3ZpZXctY3VycmVudC1yaWRlcy9kZWxldGUtZGlhbG9nL2RlbGV0ZS1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard_driver/view-current-rides/delete-dialog/delete-dialog.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/dashboard/dashboard_driver/view-current-rides/delete-dialog/delete-dialog.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section><p>\n  Are you sure that you want to delete this ride?\n</p> <b>{{ data.data_name }}</b>\n\n\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n    <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"onCancel()\" >\n      CANCEL\n    </button>\n    <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"onDelete()\">\n        DELETE\n      </button>\n</div>\n\n</section>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard_driver/view-current-rides/delete-dialog/delete-dialog.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/dashboard/dashboard_driver/view-current-rides/delete-dialog/delete-dialog.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: DeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDialogComponent", function() { return DeleteDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_drive_rides_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/drive_rides.service */ "./src/app/services/drive_rides.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var DeleteDialogComponent = /** @class */ (function () {
    function DeleteDialogComponent(dialogRef, data, driverService, router, _snackBar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.driverService = driverService;
        this.router = router;
        this._snackBar = _snackBar;
    }
    DeleteDialogComponent.prototype.ngOnInit = function () {
    };
    DeleteDialogComponent.prototype.onCancel = function () { this.dialogRef.close(); };
    DeleteDialogComponent.prototype.onDelete = function () {
        var _this = this;
        this.driverService.removeUniqueRide(this.data.data_id);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
            return _this.router.navigate(["/view-current-rides"]);
        });
        this._snackBar.open("Drive deleted " + this.data.data_name + ".", "Dismiss", {
            duration: 2000,
        });
        this.onCancel();
    };
    DeleteDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-dialog',
            template: __webpack_require__(/*! ./delete-dialog.component.html */ "./src/app/dashboard/dashboard_driver/view-current-rides/delete-dialog/delete-dialog.component.html"),
            styles: [__webpack_require__(/*! ./delete-dialog.component.css */ "./src/app/dashboard/dashboard_driver/view-current-rides/delete-dialog/delete-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _services_drive_rides_service__WEBPACK_IMPORTED_MODULE_2__["DriveRidesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], DeleteDialogComponent);
    return DeleteDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard_driver/view-current-rides/edit-dialog/edit-dialog.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/dashboard/dashboard_driver/view-current-rides/edit-dialog/edit-dialog.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmRfZHJpdmVyL3ZpZXctY3VycmVudC1yaWRlcy9lZGl0LWRpYWxvZy9lZGl0LWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard_driver/view-current-rides/edit-dialog/edit-dialog.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/dashboard/dashboard_driver/view-current-rides/edit-dialog/edit-dialog.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\n<section>\n    <h1 fxLayout=\"row\" fxLayoutGap=\"10px\"  fxLayoutAlign=\"center center\">Edit Existing Ride!</h1>\n\n    <form fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\"\n    #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n\n<!---------------------------------------------------------------------------------------------------------------------------------------->\n    <mat-form-field appearance=\"outline\">\n        <input [(ngModel)]=\"currentRide.name\" type=\"text\"  pattern=\"[A-Za-z0-9]{2,20}\" matInput placeholder=\"Ride Name\" ngModel name=\"rideName\" required #rideNameInput=\"ngModel\" > \n        <mat-error *ngIf=\"rideNameInput.hasError('required')\">Please write ride name</mat-error>\n        <mat-error *ngIf=\"!rideNameInput.hasError('required')\">Ride name should contain only letters and numbers with 2-20 characters</mat-error>\n      </mat-form-field>\n      \n<!---------------------------------------------------------------------------------------------------------------------------------------->\n<mat-form-field appearance=\"outline\">\n    <input [(ngModel)]=\"currentRide.start_location\" type=\"text\"  pattern=\"[A-Za-z0-9 ]{2,30}\" matInput placeholder=\"Start Location\" ngModel name=\"startLocation\" required #startLocationInput=\"ngModel\" > \n    <mat-error *ngIf=\"startLocationInput.hasError('required')\">Please write start location</mat-error>\n    <mat-error *ngIf=\"!startLocationInput.hasError('required')\">Start Location should contain only letters and numbers with 2-30 characters</mat-error>\n  </mat-form-field>\n\n<!---------------------------------------------------------------------------------------------------------------------------------------->\n<mat-form-field appearance=\"outline\">\n    <input [(ngModel)]=\"currentRide.end_location\" type=\"text\" pattern=\"[A-Za-z0-9 ]{2,30}\" matInput placeholder=\"End Location\" ngModel name=\"EndLocation\" required #endLocationInput=\"ngModel\" > \n    <mat-error *ngIf=\"endLocationInput.hasError('required')\">Please write end location</mat-error>\n    <mat-error *ngIf=\"!endLocationInput.hasError('required')\">End Location should contain only letters and numbers with 2-30 characters</mat-error>\n  </mat-form-field>\n<!---------------------------------------------------------------------------------------------------------------------------------------->\n<!---------------------------------------------------------------------------------------------------------------------------------------->\n<!---------------------------------------------------------------------------------------------------------------------------------------->\n<!---------------------------------------------------------------------------------------------------------------------------------------->\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n    <mat-form-field appearance=\"outline\">\n        <input [(ngModel)]=\"currentRide.start_time\" type=\"text\" pattern=\"[0-9]{2}:[0-9]{2}\" matInput placeholder=\"Start Time\" ngModel name=\"startTime\" required #startTimeInput=\"ngModel\" > \n        <mat-error *ngIf=\"startTimeInput.hasError('required')\">Please write start time</mat-error>\n        <mat-error *ngIf=\"!startTimeInput.hasError('required')\">Start time should be like an example : 11:33</mat-error>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\">\n          <input [(ngModel)]=\"currentRide.end_time\" type=\"text\" pattern=\"[0-9]{2}:[0-9]{2}\" matInput placeholder=\"End Time\" ngModel name=\"endTime\" required #endTimeInput=\"ngModel\" > \n          <mat-error *ngIf=\"endTimeInput.hasError('required')\">Please write end time</mat-error>\n          <mat-error *ngIf=\"!endTimeInput.hasError('required')\">End time should be like an example : 11:33</mat-error>\n        </mat-form-field>\n\n</div>\n<!---------------------------------------------------------------------------------------------------------------------------------------->\n<!---------------------------------------------------------------------------------------------------------------------------------------->\n<!---------------------------------------------------------------------------------------------------------------------------------------->\n<!---------------------------------------------------------------------------------------------------------------------------------------->\n\n<!---------------------------------------------------------------------------------------------------------------------------------------->\n<mat-form-field appearance=\"outline\">\n    <input [(ngModel)]=\"currentRide.passengers_limit\" type=\"text\" pattern=\"[0-9]{1,2}\" matInput placeholder=\"Passanger Limit\" ngModel name=\"passangerLimit\" required #passangerLimitInput=\"ngModel\" > \n    <mat-error *ngIf=\"passangerLimitInput.hasError('required')\">Please write Passanger Limit</mat-error>\n    <mat-error *ngIf=\"!passangerLimitInput.hasError('required')\">Passanger Limit needs to be between 0-99</mat-error>\n  </mat-form-field>\n\n<!---------------------------------------------------------------------------------------------------------------------------------------->\n<mat-form-field appearance=\"outline\">\n        <input [(ngModel)]=\"currentRide.date\" matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" #datepickerInput=\"ngModel\" ngModel required name=\"dateFiled\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>  \n        <mat-error *ngIf=\"datepickerInput.hasError('required')\">Choose Date</mat-error>\n        <mat-error *ngIf=\"!datepickerInput.hasError('required')\">Please choose a date!</mat-error>   \n  </mat-form-field>\n\n\n<!---------------------------------------------------------------------------------------------------------------------------------------->\n<!---------------------------------------------------------------------------------------------------------------------------------------->\n<mat-form-field appearance=\"outline\">\n    <input [(ngModel)]=\"userStopStr\" type=\"text\" pattern=\"[A-Za-z0-9,]{10,100}\" matInput placeholder=\"Write stops: divade them with comma\" ngModel name=\"stops\" required #stopsInput=\"ngModel\" > \n    <mat-error *ngIf=\"stopsInput.hasError('required')\">Please write stops</mat-error>\n    <mat-error *ngIf=\"!stopsInput.hasError('required')\">Stops needs to be between 10 and 100 characters with comma separating each stop</mat-error>\n  </mat-form-field>\n\n\t\t<!---------------------------------------------------------------------------------------------------------------------------------------->\n    <mat-form-field appearance=\"outline\">\n        <mat-label>Select status</mat-label>\n        <mat-select [(value)]=\"currentRide.drive_ride_status\" >\n          <mat-option value=\"ended\">Mark As Ended</mat-option>\n          <mat-option value=\"canceled\">Mark as Canceled</mat-option>\n          <mat-option value=\"ongoing\">Mark as ongoing</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n  \n  <!---------------------------------------------------------------------------------------------------------------------------------------->\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n          <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"f.invalid\" >\n            Edit\n          </button>\n          <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"onCancel()\">\n              Cancel\n            </button>\n      </div>\n    </form>\n\n</section>\n\n</mat-dialog-content>"

/***/ }),

/***/ "./src/app/dashboard/dashboard_driver/view-current-rides/edit-dialog/edit-dialog.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/dashboard/dashboard_driver/view-current-rides/edit-dialog/edit-dialog.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: EditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDialogComponent", function() { return EditDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_drive_rides_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/drive_rides.service */ "./src/app/services/drive_rides.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/notification.service */ "./src/app/services/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var EditDialogComponent = /** @class */ (function () {
    function EditDialogComponent(dialogRef, data, driverService, notificationService) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.driverService = driverService;
        this.notificationService = notificationService;
        this.rideTEMP = this.driverService.getUniqueRide(data.data_id);
        this.currentRide = {
            id_drive_rides: -1,
            id_driver: -1,
            name: "",
            start_location: "",
            end_location: "",
            departure_time: "",
            start_time: "",
            end_time: "",
            drive_ride_status: '',
            passengers_limit: -1,
            current_passengers_number: -1,
            current_passengers_data: [],
            drive_ride_stops: [],
            notifications: [],
            date: new Date()
        };
        Object.keys(this.rideTEMP).forEach(function (key) { return _this.currentRide[key] = _this.rideTEMP[key]; });
        var stopsArray = [];
        for (var elem in this.currentRide.drive_ride_stops) {
            stopsArray.push(this.currentRide.drive_ride_stops[elem].stop_name);
        }
        this.userStopStr = stopsArray.join(",");
    }
    EditDialogComponent.prototype.ngOnInit = function () {
    };
    EditDialogComponent.prototype.onSubmit = function (form) {
        var _this = this;
        Object.keys(this.currentRide).forEach(function (key) { return _this.rideTEMP[key] = _this.currentRide[key]; });
        if (this.currentRide.drive_ride_status == "ended") {
            var id_ride = this.rideTEMP.id_drive_rides;
            var id_driver = this.rideTEMP.id_driver;
            var objectListPassData = this.rideTEMP.current_passengers_data;
            for (var elem in objectListPassData) {
                var id_passenger = objectListPassData[elem].id_user;
                this.notificationService.setNewDriveEnd(id_passenger, id_driver, id_ride);
            }
        }
        this.onCancel();
    };
    EditDialogComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    EditDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-dialog',
            template: __webpack_require__(/*! ./edit-dialog.component.html */ "./src/app/dashboard/dashboard_driver/view-current-rides/edit-dialog/edit-dialog.component.html"),
            styles: [__webpack_require__(/*! ./edit-dialog.component.css */ "./src/app/dashboard/dashboard_driver/view-current-rides/edit-dialog/edit-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _services_drive_rides_service__WEBPACK_IMPORTED_MODULE_2__["DriveRidesService"],
            _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationsService"]])
    ], EditDialogComponent);
    return EditDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard_driver/view-current-rides/view-current-rides.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/dashboard/dashboard_driver/view-current-rides/view-current-rides.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div-style{\r\n    max-width: 300px;\r\n    margin: 20px;\r\n    margin-right: 100px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZF9kcml2ZXIvdmlldy1jdXJyZW50LXJpZGVzL3ZpZXctY3VycmVudC1yaWRlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixvQkFBb0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkX2RyaXZlci92aWV3LWN1cnJlbnQtcmlkZXMvdmlldy1jdXJyZW50LXJpZGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2LXN0eWxle1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard_driver/view-current-rides/view-current-rides.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/dashboard/dashboard_driver/view-current-rides/view-current-rides.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<section>\n\n  <div class=\"div-style\" fxLayout=\"column\" fxLayoutAlign=\"end end\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\">\n          <mat-form-field>\n              <mat-label>Filter Rides</mat-label>\n              <input matInput type=\"text\" (keyup)=\"doFilter($event.target.value)\" placeholder=\"Filter\">\n            </mat-form-field>\n            <button mat-raised-button color=\"primary\" (click)=\"createRide()\" fxLayout=\"column\" fxLayoutAlign=\"end end\" >Create New Ride</button>\n      </div> \n  </div>\n  \n    \n\n<!-- property binding -->\n<mat-table [dataSource]= \"ridesSource\" matSort >\n   \n  <!-- ride name -->\n  <ng-container matColumnDef=\"name\" >\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Name</mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">{{ element.name }}</mat-cell>\n  </ng-container>\n\n  <!-- RIDE START LOCATION -->\n  <ng-container matColumnDef=\"start_location\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Start Location</mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">{{ element.start_location }}</mat-cell>\n  </ng-container>\n\n   <!-- RIDE END LOCATION -->\n  <ng-container matColumnDef=\"end_location\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>End Location</mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">{{ element.end_location }}</mat-cell>\n  </ng-container>\n\n  <!-- RIDE TIME -->\n  <ng-container matColumnDef=\"time\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Time</mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">{{ element.start_time }} - {{ element.end_time }}</mat-cell>\n  </ng-container>\n\n  <!-- RIDE DATE -->\n  <ng-container matColumnDef=\"date\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Date</mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">\n      {{ element.date.getDate() }}/\n      {{ element.date.getMonth()+1 }}/\n      {{ element.date.getFullYear() }}\n    </mat-cell>\n  </ng-container>\n\n\n  <!-- RIDE STATUS -->\n  <ng-container matColumnDef=\"drive_ride_status\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Status</mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">{{ element.drive_ride_status }}</mat-cell>\n  </ng-container>\n\n\n  <!-- RIDE LIMIT -->\n  <ng-container matColumnDef=\"passengers_limit\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Limit</mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">{{ element.passengers_limit }}</mat-cell>\n  </ng-container>\n\n\n  <!-- RIDE CURRENT PASSENGERS -->\n  <ng-container matColumnDef=\"current_passengers\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Current passengers</mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">\n        <button mat-stroked-button  (click)=\"onViewPassengers(element.id_drive_rides)\">\n            {{ element.current_passengers_number }}\n        </button>\n    </mat-cell>\n  </ng-container>\n\n   <!-- RIDE ACTIONS -->\n   <ng-container matColumnDef=\"actions\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Actions</mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">\n      <button mat-stroked-button \n      [disabled]=\"driveRidesService.getUniqueRide(element.id_drive_rides).drive_ride_status =='ended'\"\n       (click)=\"editRide(element.id_drive_rides)\">Edit</button>\n      <button mat-stroked-button  (click)=\"deleteRide(element.id_drive_rides, element.name)\">Delete</button>\n    </mat-cell>\n  </ng-container>\n\n   <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n   <mat-row *matRowDef=\"let rows; columns: displayedColumns\"></mat-row>\n</mat-table>\n\n<mat-paginator [pageSize]=\"3\" [pageSizeOptions]=\"[2,3,4,6,8]\"></mat-paginator>\n\n</section>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard_driver/view-current-rides/view-current-rides.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/dashboard/dashboard_driver/view-current-rides/view-current-rides.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ViewCurrentRidesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCurrentRidesComponent", function() { return ViewCurrentRidesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_drive_rides_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/drive_rides.service */ "./src/app/services/drive_rides.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-dialog/edit-dialog.component */ "./src/app/dashboard/dashboard_driver/view-current-rides/edit-dialog/edit-dialog.component.ts");
/* harmony import */ var _delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delete-dialog/delete-dialog.component */ "./src/app/dashboard/dashboard_driver/view-current-rides/delete-dialog/delete-dialog.component.ts");
/* harmony import */ var _create_new_dialog_create_new_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-new-dialog/create-new-dialog.component */ "./src/app/dashboard/dashboard_driver/view-current-rides/create-new-dialog/create-new-dialog.component.ts");
/* harmony import */ var _view_passengers_ride_dialog_view_passengers_ride_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../view-passengers-ride-dialog/view-passengers-ride-dialog.component */ "./src/app/dashboard/view-passengers-ride-dialog/view-passengers-ride-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ViewCurrentRidesComponent = /** @class */ (function () {
    function ViewCurrentRidesComponent(driveRidesService, appComponent, userService, dialog, router) {
        this.driveRidesService = driveRidesService;
        this.appComponent = appComponent;
        this.userService = userService;
        this.dialog = dialog;
        this.router = router;
        this.displayedColumns = ["name", "start_location", "end_location", "time", "date", "drive_ride_status", "passengers_limit", "current_passengers", "actions"];
        this.ridesSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        //___________________________________________ reddirect
        if (this.userService.getCurrenSession().id_user == -1) {
            this.router.navigate(["/"]);
        }
        //___________________________________________ reddirect end
    }
    ViewCurrentRidesComponent.prototype.ngOnInit = function () {
        this.ridesSource.data = this.driveRidesService.getDriverRides(this.userService.getCurrenSession().id_user);
    };
    ViewCurrentRidesComponent.prototype.ngAfterViewInit = function () {
        this.ridesSource.sort = this.sort;
        this.ridesSource.paginator = this.paginator;
    };
    ViewCurrentRidesComponent.prototype.editRide = function (id) {
        this.dialog.open(_edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_5__["EditDialogComponent"], { data: { data_id: id } });
    };
    ViewCurrentRidesComponent.prototype.deleteRide = function (id, name) {
        this.dialog.open(_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DeleteDialogComponent"], { data: { data_id: id, data_name: name } });
    };
    ViewCurrentRidesComponent.prototype.createRide = function () {
        var driverID = this.userService.getCurrenSession().id_user;
        this.dialog.open(_create_new_dialog_create_new_dialog_component__WEBPACK_IMPORTED_MODULE_7__["CreateNewDialogComponent"], { data: { data_id: driverID } });
    };
    ViewCurrentRidesComponent.prototype.onViewPassengers = function (id) {
        this.dialog.open(_view_passengers_ride_dialog_view_passengers_ride_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ViewPassengersRideDialogComponent"], { data: { data_id: id } });
    };
    ViewCurrentRidesComponent.prototype.doFilter = function (filterValue) {
        this.ridesSource.filter = filterValue.trim().toLowerCase();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], ViewCurrentRidesComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], ViewCurrentRidesComponent.prototype, "paginator", void 0);
    ViewCurrentRidesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-current-rides',
            template: __webpack_require__(/*! ./view-current-rides.component.html */ "./src/app/dashboard/dashboard_driver/view-current-rides/view-current-rides.component.html"),
            styles: [__webpack_require__(/*! ./view-current-rides.component.css */ "./src/app/dashboard/dashboard_driver/view-current-rides/view-current-rides.component.css")]
        }),
        __metadata("design:paramtypes", [_services_drive_rides_service__WEBPACK_IMPORTED_MODULE_1__["DriveRidesService"],
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], ViewCurrentRidesComponent);
    return ViewCurrentRidesComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard_passenger/search-active-rides/request-ride-dialog/request-ride-dialog.component.css":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/dashboard/dashboard_passenger/search-active-rides/request-ride-dialog/request-ride-dialog.component.css ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmRfcGFzc2VuZ2VyL3NlYXJjaC1hY3RpdmUtcmlkZXMvcmVxdWVzdC1yaWRlLWRpYWxvZy9yZXF1ZXN0LXJpZGUtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard_passenger/search-active-rides/request-ride-dialog/request-ride-dialog.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/dashboard/dashboard_passenger/search-active-rides/request-ride-dialog/request-ride-dialog.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section><p>\n    Please confirm that you want to request a ride\n  </p> <b>{{ data.data_name }}</b>\n  \n  \n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n      <button type=\"button\" mat-stroked-button (click)=\"onCancel()\" >\n        CANCEL\n      </button>\n      <button type=\"button\" mat-raised-button color=\"primary\"  (click)=\"onRequestARide()\">\n          REQUEST\n        </button>\n  </div>\n  \n  </section>\n  "

/***/ }),

/***/ "./src/app/dashboard/dashboard_passenger/search-active-rides/request-ride-dialog/request-ride-dialog.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/dashboard/dashboard_passenger/search-active-rides/request-ride-dialog/request-ride-dialog.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: RequestRideDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestRideDialogComponent", function() { return RequestRideDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_drive_rides_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/drive_rides.service */ "./src/app/services/drive_rides.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/notification.service */ "./src/app/services/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var RequestRideDialogComponent = /** @class */ (function () {
    function RequestRideDialogComponent(dialogRef, data, driverService, _snackBar, userService, notificationService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.driverService = driverService;
        this._snackBar = _snackBar;
        this.userService = userService;
        this.notificationService = notificationService;
    }
    RequestRideDialogComponent.prototype.ngOnInit = function () {
    };
    RequestRideDialogComponent.prototype.onCancel = function () { this.dialogRef.close(); };
    RequestRideDialogComponent.prototype.onRequestARide = function () {
        var passID = this.userService.getCurrenSession().id_user;
        var driverID = this.driverService.getUniqueRide(this.data.data_id).id_driver;
        var rideID = this.data.data_id;
        this.notificationService.setNewRequest(passID, driverID, rideID);
        this.onCancel();
    };
    RequestRideDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-ride-dialog',
            template: __webpack_require__(/*! ./request-ride-dialog.component.html */ "./src/app/dashboard/dashboard_passenger/search-active-rides/request-ride-dialog/request-ride-dialog.component.html"),
            styles: [__webpack_require__(/*! ./request-ride-dialog.component.css */ "./src/app/dashboard/dashboard_passenger/search-active-rides/request-ride-dialog/request-ride-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _services_drive_rides_service__WEBPACK_IMPORTED_MODULE_2__["DriveRidesService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"],
            _services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"]])
    ], RequestRideDialogComponent);
    return RequestRideDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard_passenger/search-active-rides/search-active-rides.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/dashboard/dashboard_passenger/search-active-rides/search-active-rides.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin-right-10px{\r\n    margin-right: 10px;\r\n}\r\n.margin-top-10px{\r\n    margin-top:10px;\r\n}\r\n.toggle-div{\r\n    margin: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZF9wYXNzZW5nZXIvc2VhcmNoLWFjdGl2ZS1yaWRlcy9zZWFyY2gtYWN0aXZlLXJpZGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUVEO0lBQ0ksYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmRfcGFzc2VuZ2VyL3NlYXJjaC1hY3RpdmUtcmlkZXMvc2VhcmNoLWFjdGl2ZS1yaWRlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbi1yaWdodC0xMHB4e1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5tYXJnaW4tdG9wLTEwcHh7XHJcbiAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbn1cclxuXHJcbi50b2dnbGUtZGl2e1xyXG4gICAgbWFyZ2luOiAzMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard_passenger/search-active-rides/search-active-rides.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/dashboard/dashboard_passenger/search-active-rides/search-active-rides.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section>\n\n  \n<div class=\"toggle-div\"  fxLayout=\"row\" fxLayoutAlign=\" center\" >\n    {{toggleBtn ? 'Ongoing Rides' : 'Inactive Rides'}}\n    <mat-slide-toggle [(ngModel)]=\"toggleBtn\"></mat-slide-toggle>\n</div>\n<!----------------------------------------------------------------------------------------------->\n<!-- ONgoing Rides-->\n<!----------------------------------------------------------------------------------------------->\n  <div *ngIf=\"toggleBtn\">\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"margin-top-10px\">\n          <mat-form-field>\n              <mat-label>Filter Rides</mat-label>\n              <input matInput type=\"text\" (keyup)=\"doFilter($event.target.value)\" placeholder=\"Filter\">\n            </mat-form-field>\n      </div>\n      \n          \n      \n      <!-- property binding -->\n      <mat-table [dataSource]= \"ridesSource\" matSort class=\"margin-right-10px\" >\n    \n        <!-- driver name -->\n        <ng-container matColumnDef=\"driver_name\" >\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Driver Name</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n                <a [routerLink]=\"['/profile']\" [queryParams]=\"{userID: element.id_driver}\" (click)=\"onDriverView(element.id_driver)\">\n                  {{element.driverName}}\n                </a>\n            </mat-cell>\n          </ng-container>\n         \n        <!-- ride name -->\n        <ng-container matColumnDef=\"ride_name\" >\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Ride Name</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">{{ element.name }}</mat-cell>\n        </ng-container>\n    \n         <!-- RIDE START LOCATION -->\n      <ng-container matColumnDef=\"location\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Location</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> \n            FROM {{ element.start_location }}<br>\n            TO {{ element.end_location }} </mat-cell>\n        </ng-container>\n      \n    \n      \n        <!-- RIDE TIME -->\n        <ng-container matColumnDef=\"time\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Time</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">{{ element.start_time }} - {{ element.end_time }}</mat-cell>\n        </ng-container>\n      \n        <!-- RIDE DATE -->\n        <ng-container matColumnDef=\"date\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Date</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            {{ element.date.getDate() }}/\n            {{ element.date.getMonth()+1 }}/\n            {{ element.date.getFullYear() }}\n          </mat-cell>\n        </ng-container>\n      \n      \n        <!-- RIDE STATUS -->\n        <ng-container matColumnDef=\"status\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Status</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">{{ element.drive_ride_status }}</mat-cell>\n        </ng-container>\n      \n      \n        <!-- RIDE LIMIT -->\n        <ng-container matColumnDef=\"limit\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Limit</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">{{ element.passengers_limit }}</mat-cell>\n        </ng-container>\n      \n      \n        <!-- RIDE CURRENT PASSENGERS -->\n        <ng-container matColumnDef=\"current_passengers\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Current passengers</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n              <button mat-stroked-button  (click)=\"onViewPassengers(element.id_drive_rides)\">\n                  {{ element.current_passengers_number }}\n              </button>\n          </mat-cell>\n        </ng-container>\n      \n         <!-- RIDE ACTIONS -->\n         <ng-container matColumnDef=\"actions\" >\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Actions</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n    \n            <button mat-raised-button color=\"warn\"  (click)=\"onRequest(element.id_drive_rides)\">\n                Request\n            </button>\n    \n            <button mat-raised-button color=\"primary\"   (click)=\"onViewStops(element.id_drive_rides)\">\n                Stops\n            </button>        \n              \n          </mat-cell>\n        </ng-container>\n      \n         <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n         <mat-row *matRowDef=\"let rows; columns: displayedColumns\"></mat-row>\n      </mat-table>\n      \n      <mat-paginator [pageSize]=\"3\" [pageSizeOptions]=\"[2,3,4,6,8]\"></mat-paginator>\n\n\n  </div>\n<!----------------------------------------------------------------------------------------------->\n<!-- Inactive Rides-->\n<!----------------------------------------------------------------------------------------------->\n  <div *ngIf=\"!toggleBtn\">\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"margin-top-10px\">\n          <mat-form-field>\n              <mat-label>Filter Rides</mat-label>\n              <input matInput type=\"text\" (keyup)=\"doFilter2($event.target.value)\" placeholder=\"Filter\">\n            </mat-form-field>\n      </div>\n      \n          \n      \n      <!-- property binding -->\n      <mat-table [dataSource]= \"ridesSource2\" matSort class=\"margin-right-10px\" >\n    \n        <!-- driver name -->\n        <ng-container matColumnDef=\"driver_name\" >\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Driver Name</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n                <a [routerLink]=\"['/profile']\" [queryParams]=\"{userID: element.id_driver}\" (click)=\"onDriverView(element.id_driver)\">\n                  {{element.driverName}}\n                </a>\n            </mat-cell>\n          </ng-container>\n         \n        <!-- ride name -->\n        <ng-container matColumnDef=\"ride_name\" >\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Ride Name</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">{{ element.name }}</mat-cell>\n        </ng-container>\n    \n         <!-- RIDE START LOCATION -->\n      <ng-container matColumnDef=\"location\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Location</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> \n            FROM {{ element.start_location }}<br>\n            TO {{ element.end_location }} </mat-cell>\n        </ng-container>\n      \n    \n      \n        <!-- RIDE TIME -->\n        <ng-container matColumnDef=\"time\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Time</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">{{ element.start_time }} - {{ element.end_time }}</mat-cell>\n        </ng-container>\n      \n        <!-- RIDE DATE -->\n        <ng-container matColumnDef=\"date\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Date</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            {{ element.date.getDate() }}/\n            {{ element.date.getMonth()+1 }}/\n            {{ element.date.getFullYear() }}\n          </mat-cell>\n        </ng-container>\n      \n      \n        <!-- RIDE STATUS -->\n        <ng-container matColumnDef=\"status\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Status</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">{{ element.drive_ride_status }}</mat-cell>\n        </ng-container>\n      \n      \n        <!-- RIDE LIMIT -->\n        <ng-container matColumnDef=\"limit\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Limit</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">{{ element.passengers_limit }}</mat-cell>\n        </ng-container>\n      \n      \n        <!-- RIDE CURRENT PASSENGERS -->\n        <ng-container matColumnDef=\"current_passengers\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Current passengers</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n              <button mat-stroked-button  (click)=\"onViewPassengers(element.id_drive_rides)\">\n                  {{ element.current_passengers_number }}\n              </button>\n          </mat-cell>\n        </ng-container>\n      \n         <!-- RIDE ACTIONS -->\n         <ng-container matColumnDef=\"actions\" >\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Actions</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n   \n            <button mat-raised-button color=\"primary\"   (click)=\"onViewStops(element.id_drive_rides)\">\n                Stops\n            </button>        \n              \n          </mat-cell>\n        </ng-container>\n      \n         <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n         <mat-row *matRowDef=\"let rows; columns: displayedColumns\"></mat-row>\n      </mat-table>\n      \n      <mat-paginator [pageSize]=\"3\" [pageSizeOptions]=\"[2,3,4,6,8]\"></mat-paginator>\n\n\n  </div>\n \n  \n  </section>\n  "

/***/ }),

/***/ "./src/app/dashboard/dashboard_passenger/search-active-rides/search-active-rides.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/dashboard/dashboard_passenger/search-active-rides/search-active-rides.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: SearchActiveRidesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchActiveRidesComponent", function() { return SearchActiveRidesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_drive_rides_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/drive_rides.service */ "./src/app/services/drive_rides.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _view_passengers_ride_dialog_view_passengers_ride_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../view-passengers-ride-dialog/view-passengers-ride-dialog.component */ "./src/app/dashboard/view-passengers-ride-dialog/view-passengers-ride-dialog.component.ts");
/* harmony import */ var _request_ride_dialog_request_ride_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./request-ride-dialog/request-ride-dialog.component */ "./src/app/dashboard/dashboard_passenger/search-active-rides/request-ride-dialog/request-ride-dialog.component.ts");
/* harmony import */ var _stops_ride_dialog_stops_ride_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stops-ride-dialog/stops-ride-dialog.component */ "./src/app/dashboard/dashboard_passenger/search-active-rides/stops-ride-dialog/stops-ride-dialog.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SearchActiveRidesComponent = /** @class */ (function () {
    function SearchActiveRidesComponent(driveRidesService, appComponent, userService, dialog, router, _snackBar) {
        this.driveRidesService = driveRidesService;
        this.appComponent = appComponent;
        this.userService = userService;
        this.dialog = dialog;
        this.router = router;
        this._snackBar = _snackBar;
        this.displayedColumns = ["driver_name", "ride_name", "location", "time", "date", "status", "limit", "current_passengers", "actions"];
        this.ridesSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.ridesSource2 = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.toggleBtn = true;
        //___________________________________________ reddirect
        if (this.userService.getCurrenSession().id_user == -1) {
            this.router.navigate(["/"]);
        }
        //___________________________________________ reddirect end
    }
    SearchActiveRidesComponent.prototype.ngOnInit = function () {
        this.userID = this.userService.getCurrenSession().id_user;
        this.ridesSource.data = this.driveRidesService.getOngoingDrives();
        this.ridesSource2.data = this.driveRidesService.getSpecificInactivePassengerRides(this.userID);
        this.ridesSource.data = this.setDriversName(this.ridesSource.data);
        this.ridesSource2.data = this.setDriversName(this.ridesSource2.data);
    };
    SearchActiveRidesComponent.prototype.setDriversName = function (source_data_in) {
        for (var elem in source_data_in) {
            var current_user = this.userService.getProfileData(source_data_in[elem].id_driver);
            var fname = current_user.fname;
            var lname = current_user.lname;
            source_data_in[elem]["driverName"] = fname + " " + lname;
        }
        return source_data_in;
    };
    SearchActiveRidesComponent.prototype.ngAfterViewInit = function () {
        this.ridesSource.sort = this.sort;
        this.ridesSource.paginator = this.paginator;
        this.ridesSource2.sort = this.sort;
        this.ridesSource2.paginator = this.paginator;
    };
    SearchActiveRidesComponent.prototype.doFilter = function (filterValue) {
        this.ridesSource.filter = filterValue.trim().toLowerCase();
    };
    SearchActiveRidesComponent.prototype.doFilter2 = function (filterValue) {
        this.ridesSource2.filter = filterValue.trim().toLowerCase();
    };
    SearchActiveRidesComponent.prototype.onDriverView = function (id) {
        var _this = this;
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
            return _this.router.navigate(["/profile", { userID: id }]);
        });
    };
    SearchActiveRidesComponent.prototype.onViewPassengers = function (id) {
        this.dialog.open(_view_passengers_ride_dialog_view_passengers_ride_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ViewPassengersRideDialogComponent"], { data: { data_id: id } });
    };
    SearchActiveRidesComponent.prototype.onRequest = function (id) {
        var result = this.driveRidesService.isRequestAvailableForUniqueUser(id, this.userService.getCurrenSession().id_user);
        switch (result) {
            case "success": {
                this.dialog.open(_request_ride_dialog_request_ride_dialog_component__WEBPACK_IMPORTED_MODULE_7__["RequestRideDialogComponent"], {
                    data: { data_id: id,
                        data_name: this.driveRidesService.getUniqueRide(id).name }
                });
                break;
            }
            case "aleardy_exist": {
                this._snackBar.open("You are already registered as passanger!", "close", {
                    duration: 2000,
                });
                break;
            }
            case "full": {
                this._snackBar.open("You can't do that! That ride is full!", "close", {
                    duration: 2000,
                });
                break;
            } // case full end
        } // switch end;
    }; // onRequest end;
    SearchActiveRidesComponent.prototype.onViewStops = function (id) {
        this.dialog.open(_stops_ride_dialog_stops_ride_dialog_component__WEBPACK_IMPORTED_MODULE_8__["StopsRideDialogComponent"], { data: { data_id: id } });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], SearchActiveRidesComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], SearchActiveRidesComponent.prototype, "paginator", void 0);
    SearchActiveRidesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-active-rides',
            template: __webpack_require__(/*! ./search-active-rides.component.html */ "./src/app/dashboard/dashboard_passenger/search-active-rides/search-active-rides.component.html"),
            styles: [__webpack_require__(/*! ./search-active-rides.component.css */ "./src/app/dashboard/dashboard_passenger/search-active-rides/search-active-rides.component.css")]
        }),
        __metadata("design:paramtypes", [_services_drive_rides_service__WEBPACK_IMPORTED_MODULE_4__["DriveRidesService"],
            _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]])
    ], SearchActiveRidesComponent);
    return SearchActiveRidesComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard_passenger/search-active-rides/stops-ride-dialog/stops-ride-dialog.component.css":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/dashboard/dashboard_passenger/search-active-rides/stops-ride-dialog/stops-ride-dialog.component.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".containerDIV{\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZF9wYXNzZW5nZXIvc2VhcmNoLWFjdGl2ZS1yaWRlcy9zdG9wcy1yaWRlLWRpYWxvZy9zdG9wcy1yaWRlLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtDQUN2QiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmRfcGFzc2VuZ2VyL3NlYXJjaC1hY3RpdmUtcmlkZXMvc3RvcHMtcmlkZS1kaWFsb2cvc3RvcHMtcmlkZS1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJESVZ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard_passenger/search-active-rides/stops-ride-dialog/stops-ride-dialog.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/dashboard/dashboard_passenger/search-active-rides/stops-ride-dialog/stops-ride-dialog.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\n  <section>\n    Stops for the ride:\n    <div *ngFor=\"let item of stopsArray\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"containerDIV\" >\n          {{item.stop_name}}\n    </div>\n  \n  \n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n      <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"onCancel()\" >\n        CANCEL\n      </button>\n      </div>\n  \n  </section>\n</mat-dialog-content>\n  "

/***/ }),

/***/ "./src/app/dashboard/dashboard_passenger/search-active-rides/stops-ride-dialog/stops-ride-dialog.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/dashboard/dashboard_passenger/search-active-rides/stops-ride-dialog/stops-ride-dialog.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: StopsRideDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopsRideDialogComponent", function() { return StopsRideDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_drive_rides_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/drive_rides.service */ "./src/app/services/drive_rides.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var StopsRideDialogComponent = /** @class */ (function () {
    function StopsRideDialogComponent(dialogRef, data, driverService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.driverService = driverService;
        this.stopsArray = [];
        this.stopsArray = this.driverService.getStopsArray(data.data_id);
    }
    StopsRideDialogComponent.prototype.ngOnInit = function () {
    };
    StopsRideDialogComponent.prototype.onCancel = function () { this.dialogRef.close(); };
    StopsRideDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stops-ride-dialog',
            template: __webpack_require__(/*! ./stops-ride-dialog.component.html */ "./src/app/dashboard/dashboard_passenger/search-active-rides/stops-ride-dialog/stops-ride-dialog.component.html"),
            styles: [__webpack_require__(/*! ./stops-ride-dialog.component.css */ "./src/app/dashboard/dashboard_passenger/search-active-rides/stops-ride-dialog/stops-ride-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _services_drive_rides_service__WEBPACK_IMPORTED_MODULE_2__["DriveRidesService"]])
    ], StopsRideDialogComponent);
    return StopsRideDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/notification-tabs/notification-ended-rides/notification-ended-rides.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/dashboard/notification-tabs/notification-ended-rides/notification-ended-rides.component.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ub3RpZmljYXRpb24tdGFicy9ub3RpZmljYXRpb24tZW5kZWQtcmlkZXMvbm90aWZpY2F0aW9uLWVuZGVkLXJpZGVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/notification-tabs/notification-ended-rides/notification-ended-rides.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/dashboard/notification-tabs/notification-ended-rides/notification-ended-rides.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<section>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\">\n        <mat-form-field>\n            <mat-label>Filter Rides</mat-label>\n            <input matInput type=\"text\" (keyup)=\"doFilter($event.target.value)\" placeholder=\"Filter\">\n          </mat-form-field>\n    </div> \n\n  \n\n<!-- property binding -->\n<mat-table [dataSource]=\"notificationSource\" matSort >\n \n<!-- driver name -->\n<ng-container matColumnDef=\"driver_name\">\n  <mat-header-cell *matHeaderCellDef mat-sort-header>Driver Name</mat-header-cell>\n  <mat-cell *matCellDef=\"let element\">\n      <a [routerLink]=\"['/profile']\" [queryParams]=\"{userID: element.id_driver}\" (click)=\"onProfileUse(element.id_driver)\">\n        {{element.driverName}}\n      </a>\n    </mat-cell>\n</ng-container>\n\n<!-- passenger name -->\n<ng-container matColumnDef=\"passenger_name\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Passanger Name</mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">\n          <a [routerLink]=\"['/profile']\" [queryParams]=\"{userID: element.id_passanger}\" (click)=\"onProfileUse(element.id_passanger)\">\n            {{element.passengerName}}\n          </a>        \n      </mat-cell>\n  </ng-container>\n\n  <!-- action -->\n<ng-container matColumnDef=\"action\" >\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Action</mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">\n        <button\n        *ngIf=\"userService.getCurrenSession().acc_type == 'driver'\"\n         mat-flat-button color=\"accent\"  (click)=\"onRateUser(element.id_passanger)\">Rate Passenger</button>\n         <button\n         *ngIf=\"userService.getCurrenSession().acc_type == 'passenger'\"\n         mat-flat-button color=\"accent\"  (click)=\"onRateUser(element.id_driver, element.notification_id)\">Rate Driver</button>\n    </mat-cell>\n  </ng-container>\n\n\n\n <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n <mat-row *matRowDef=\"let rows; columns: displayedColumns\"></mat-row>\n</mat-table>\n\n<mat-paginator [pageSize]=\"3\" [pageSizeOptions]=\"[2,3,4,6,8]\"></mat-paginator>\n\n</section>\n"

/***/ }),

/***/ "./src/app/dashboard/notification-tabs/notification-ended-rides/notification-ended-rides.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/dashboard/notification-tabs/notification-ended-rides/notification-ended-rides.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: NotificationEndedRidesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationEndedRidesComponent", function() { return NotificationEndedRidesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_drive_rides_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/drive_rides.service */ "./src/app/services/drive_rides.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rate_dialog_rate_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rate-dialog/rate-dialog.component */ "./src/app/dashboard/notification-tabs/notification-ended-rides/rate-dialog/rate-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NotificationEndedRidesComponent = /** @class */ (function () {
    function NotificationEndedRidesComponent(driveRidesService, userService, notificationService, dialog, router) {
        this.driveRidesService = driveRidesService;
        this.userService = userService;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.router = router;
        this.displayedColumns = ["driver_name", "passenger_name", "action"];
        this.notificationSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
    }
    NotificationEndedRidesComponent.prototype.ngOnInit = function () {
        this.setUpDataForTable();
    };
    NotificationEndedRidesComponent.prototype.setUpDataForTable = function () {
        this.notificationSource.data = this.notificationService.getNotificationsForSpecificUserEndedRides(this.userService.getCurrenSession().id_user);
        for (var elem in this.notificationSource.data) {
            var current_driver = this.userService.getProfileData(this.notificationSource.data[elem].id_driver);
            var current_passenger = this.userService.getProfileData(this.notificationSource.data[elem].id_passanger);
            this.notificationSource.data[elem]["driverName"] = current_driver.fname + " " + current_driver.lname;
            this.notificationSource.data[elem]["passengerName"] = current_passenger.fname + " " + current_passenger.lname;
        }
    };
    NotificationEndedRidesComponent.prototype.ngAfterViewInit = function () {
        this.notificationSource.sort = this.sort;
        this.notificationSource.paginator = this.paginator;
    };
    NotificationEndedRidesComponent.prototype.doFilter = function (filterValue) {
        this.notificationSource.filter = filterValue.trim().toLowerCase();
    };
    NotificationEndedRidesComponent.prototype.onProfileUse = function (id) {
        var _this = this;
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
            return _this.router.navigate(["/profile", { userID: id }]);
        });
    };
    NotificationEndedRidesComponent.prototype.onRateUser = function (id, id_notification) {
        var _this = this;
        var user = this.userService.getProfileData(id);
        var username = user.fname + " " + user.lname;
        this.dialog.open(_rate_dialog_rate_dialog_component__WEBPACK_IMPORTED_MODULE_6__["RateDialogComponent"], { data: { data_id: id,
                id_notification: id_notification,
                data_name: username } });
        this.dialog._afterAllClosed.subscribe(function () {
            _this.setUpDataForTable();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], NotificationEndedRidesComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], NotificationEndedRidesComponent.prototype, "paginator", void 0);
    NotificationEndedRidesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification-ended-rides',
            template: __webpack_require__(/*! ./notification-ended-rides.component.html */ "./src/app/dashboard/notification-tabs/notification-ended-rides/notification-ended-rides.component.html"),
            styles: [__webpack_require__(/*! ./notification-ended-rides.component.css */ "./src/app/dashboard/notification-tabs/notification-ended-rides/notification-ended-rides.component.css")]
        }),
        __metadata("design:paramtypes", [_services_drive_rides_service__WEBPACK_IMPORTED_MODULE_1__["DriveRidesService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], NotificationEndedRidesComponent);
    return NotificationEndedRidesComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/notification-tabs/notification-ended-rides/rate-dialog/rate-dialog.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/dashboard/notification-tabs/notification-ended-rides/rate-dialog/rate-dialog.component.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-margin{\r\n    margin: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL25vdGlmaWNhdGlvbi10YWJzL25vdGlmaWNhdGlvbi1lbmRlZC1yaWRlcy9yYXRlLWRpYWxvZy9yYXRlLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ub3RpZmljYXRpb24tdGFicy9ub3RpZmljYXRpb24tZW5kZWQtcmlkZXMvcmF0ZS1kaWFsb2cvcmF0ZS1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1tYXJnaW57XHJcbiAgICBtYXJnaW46IDMwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/notification-tabs/notification-ended-rides/rate-dialog/rate-dialog.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/dashboard/notification-tabs/notification-ended-rides/rate-dialog/rate-dialog.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\n  <p class=\"my-margin\">\n    Leave feedback for <b>{{ data.data_name }}</b>\n  </p> \n\n  <form fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\"\n    #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n\n<!---------------------------------------------------------------------------------------------------------------------------------------->\n<mat-form-field appearance=\"outline\" floatPlaceholder=\"always\" floatLabel=\"always\" class=\"mat-form-field--no-underline\">\n    <mat-label>Feedback</mat-label>\n  <input matInput placeholder style=\"display: none\">\n  <mat-radio-group ngModel name=\"feedback\" [(ngModel)]=\"feedback\" required #feedbackInput=\"ngModel\" fxLayout fxLayoutAlign=\"center\" fxLayoutGap=\"20px\">\n    <mat-radio-button value=\"positive\">Positive</mat-radio-button>\n    <mat-radio-button value=\"negative\">Negative</mat-radio-button>\n  </mat-radio-group>\n</mat-form-field>\n\n<!---------------------------------------------------------------------------------------------------------------------------------------->\n      <mat-form-field class=\"example-full-width\">\n          <textarea pattern=\"[A-Za-z0-9 ,!.?]{0,40}\" matInput placeholder=\"Leave a comment\"\n          name=\"comment\"  #commentInput=\"ngModel\"ngModel></textarea>\n          <mat-error *ngIf=\"commentInput.hasError('required')\">Write additional comment</mat-error>\n          <mat-error *ngIf=\"!commentInput.hasError('required')\">Comment must be between 0 and 40 characters</mat-error>\n        </mat-form-field>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n          <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"onCancel()\" >\n            CANCEL\n          </button>\n\n          <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"f.invalid\" >\n              Submit Feedback\n            </button>\n      </div>\n      </form>\n  \n  \n \n\n\n</mat-dialog-content>"

/***/ }),

/***/ "./src/app/dashboard/notification-tabs/notification-ended-rides/rate-dialog/rate-dialog.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/dashboard/notification-tabs/notification-ended-rides/rate-dialog/rate-dialog.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: RateDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateDialogComponent", function() { return RateDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _services_reputation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/reputation.service */ "./src/app/services/reputation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var RateDialogComponent = /** @class */ (function () {
    function RateDialogComponent(dialogRef, data, router, _snackBar, userService, notificationService, reputationService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
        this._snackBar = _snackBar;
        this.userService = userService;
        this.notificationService = notificationService;
        this.reputationService = reputationService;
        this.feedback = "positive";
    }
    RateDialogComponent.prototype.ngOnInit = function () {
    };
    RateDialogComponent.prototype.onCancel = function () { this.dialogRef.close(); };
    RateDialogComponent.prototype.onSubmit = function (form) {
        // set that user has rated the ride
        if (this.userService.getCurrenSession().acc_type == "driver") {
            this.notificationService.setRideEndRatedDriver(this.data.id_notification);
        }
        else {
            this.notificationService.setRideEndRatedPassenger(this.data.id_notification);
        }
        //set positive or negative feedback
        if (this.feedback == "positive") {
            this.reputationService.addPositive(this.data.data_id);
        }
        else {
            this.reputationService.setNegative(this.data.data_id);
        }
        //set comment if not empty
        if (form.value.comment != "") {
            //setNewComment(id:number,id_from:number, comment:string){
            //kome, od , comment
            this.reputationService.setNewComment(this.data.data_id, this.userService.getCurrenSession().id_user, form.value.comment);
        }
        this._snackBar.open("Success! Feedback score was added!", "close", {
            duration: 2000,
        });
        //close dialog
        this.onCancel();
    };
    RateDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rate-dialog',
            template: __webpack_require__(/*! ./rate-dialog.component.html */ "./src/app/dashboard/notification-tabs/notification-ended-rides/rate-dialog/rate-dialog.component.html"),
            styles: [__webpack_require__(/*! ./rate-dialog.component.css */ "./src/app/dashboard/notification-tabs/notification-ended-rides/rate-dialog/rate-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"],
            _services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"],
            _services_reputation_service__WEBPACK_IMPORTED_MODULE_6__["ReputationService"]])
    ], RateDialogComponent);
    return RateDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/notification-tabs/notification-requests-driver/notification-requests-driver.component.css":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/dashboard/notification-tabs/notification-requests-driver/notification-requests-driver.component.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ub3RpZmljYXRpb24tdGFicy9ub3RpZmljYXRpb24tcmVxdWVzdHMtZHJpdmVyL25vdGlmaWNhdGlvbi1yZXF1ZXN0cy1kcml2ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/notification-tabs/notification-requests-driver/notification-requests-driver.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/dashboard/notification-tabs/notification-requests-driver/notification-requests-driver.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<section>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\">\n        <mat-form-field>\n            <mat-label>Filter Rides</mat-label>\n            <input matInput type=\"text\" (keyup)=\"doFilter($event.target.value)\" placeholder=\"Filter\">\n          </mat-form-field>\n    </div> \n\n  \n\n<!-- property binding -->\n<mat-table [dataSource]=\"notificationSource\" matSort >\n \n<!-- driver name -->\n<ng-container matColumnDef=\"passenger_name\" >\n  <mat-header-cell *matHeaderCellDef mat-sort-header>Passenger Name</mat-header-cell>\n  <mat-cell *matCellDef=\"let element\">\n      <a [routerLink]=\"['/profile']\" [queryParams]=\"{userID: element.id_passanger}\" (click)=\"onProfileUse(element.id_passanger)\">\n        {{element.passengerName}}\n      </a>\n    </mat-cell>\n</ng-container>\n\n<!-- ride name -->\n<ng-container matColumnDef=\"ride_name\" >\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Ride Name</mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">{{ element.rideName }}</mat-cell>\n  </ng-container>\n\n  <!-- location name -->\n<ng-container matColumnDef=\"location\" >\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Location</mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">{{ element.locationToFrom }}</mat-cell>\n  </ng-container>\n\n  <!-- approved name -->\n  <ng-container matColumnDef=\"actions\" >\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Actions</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">\n          <button mat-flat-button color=\"warn\"  (click)=\"onApprove(element.notification_id)\">Approve</button>\n          <button mat-flat-button color=\"accent\"  (click)=\"onDismiss(element.notification_id)\">Dismiss</button>\n      </mat-cell>\n    </ng-container>\n\n\n <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n <mat-row *matRowDef=\"let rows; columns: displayedColumns\"></mat-row>\n</mat-table>\n\n<mat-paginator [pageSize]=\"3\" [pageSizeOptions]=\"[2,3,4,6,8]\"></mat-paginator>\n\n</section>\n"

/***/ }),

/***/ "./src/app/dashboard/notification-tabs/notification-requests-driver/notification-requests-driver.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/dashboard/notification-tabs/notification-requests-driver/notification-requests-driver.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: NotificationRequestsDriverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationRequestsDriverComponent", function() { return NotificationRequestsDriverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_drive_rides_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/drive_rides.service */ "./src/app/services/drive_rides.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NotificationRequestsDriverComponent = /** @class */ (function () {
    function NotificationRequestsDriverComponent(driveRidesService, userService, notificationService, dialog, router, _snackBar) {
        this.driveRidesService = driveRidesService;
        this.userService = userService;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.router = router;
        this._snackBar = _snackBar;
        this.displayedColumns = ["passenger_name", "ride_name", "location", "actions"];
        this.notificationSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
    }
    NotificationRequestsDriverComponent.prototype.ngOnInit = function () {
        this.setUpValues();
    };
    NotificationRequestsDriverComponent.prototype.setUpValues = function () {
        this.notificationSource.data = this.notificationService.getNotificationsForSpecificDriverRequest(this.userService.getCurrenSession().id_user);
        for (var elem in this.notificationSource.data) {
            var current_user = this.userService.getProfileData(this.notificationSource.data[elem].id_passanger);
            var uniqueRide = this.driveRidesService.getUniqueRide(this.notificationSource.data[elem].ride_id);
            var rideName = uniqueRide.name;
            var locationToFrom = uniqueRide.start_location + " - " + uniqueRide.end_location;
            var fname = current_user.fname;
            var lname = current_user.lname;
            this.notificationSource.data[elem]["passengerName"] = fname + " " + lname;
            this.notificationSource.data[elem]["rideName"] = rideName;
            this.notificationSource.data[elem]["locationToFrom"] = locationToFrom;
        }
    };
    NotificationRequestsDriverComponent.prototype.ngAfterViewInit = function () {
        this.notificationSource.sort = this.sort;
        this.notificationSource.paginator = this.paginator;
    };
    NotificationRequestsDriverComponent.prototype.doFilter = function (filterValue) {
        this.notificationSource.filter = filterValue.trim().toLowerCase();
    };
    NotificationRequestsDriverComponent.prototype.onProfileUse = function (id) {
        var _this = this;
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
            return _this.router.navigate(["/profile", { userID: id }]);
        });
    };
    NotificationRequestsDriverComponent.prototype.onApprove = function (notifyID) {
        //approve
        this.notificationService.setRequestApprovedTrue(notifyID);
        //add to the passenger to the list
        var passengerID = this.notificationService.getPassengerIdFromNotification(notifyID);
        var driveID = this.notificationService.getRideIDFromNotification(notifyID);
        var result = this.driveRidesService.addPassengerToDriveListIfThereIsFreeSpace(driveID, passengerID);
        switch (result) {
            case "success": {
                this._snackBar.open("Success! You have approved the passanger", "close", {
                    duration: 2000,
                });
                break;
            }
            case "aleardy_exist": {
                this._snackBar.open("Passanger is already registered!", "close", {
                    duration: 2000,
                });
                break;
            }
            case "full": {
                this._snackBar.open("You can't do that! That ride is full!", "close", {
                    duration: 2000,
                });
                break;
            }
        } // switch end;
        this.setUpValues(); // reset values in table
    };
    NotificationRequestsDriverComponent.prototype.onDismiss = function (notifyID) {
        this.notificationService.setDissmissedTrue(notifyID);
        this.setUpValues(); // reset values in table
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], NotificationRequestsDriverComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], NotificationRequestsDriverComponent.prototype, "paginator", void 0);
    NotificationRequestsDriverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification-requests-driver',
            template: __webpack_require__(/*! ./notification-requests-driver.component.html */ "./src/app/dashboard/notification-tabs/notification-requests-driver/notification-requests-driver.component.html"),
            styles: [__webpack_require__(/*! ./notification-requests-driver.component.css */ "./src/app/dashboard/notification-tabs/notification-requests-driver/notification-requests-driver.component.css")]
        }),
        __metadata("design:paramtypes", [_services_drive_rides_service__WEBPACK_IMPORTED_MODULE_1__["DriveRidesService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], NotificationRequestsDriverComponent);
    return NotificationRequestsDriverComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/notification-tabs/notification-requests/notification-requests.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/dashboard/notification-tabs/notification-requests/notification-requests.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ub3RpZmljYXRpb24tdGFicy9ub3RpZmljYXRpb24tcmVxdWVzdHMvbm90aWZpY2F0aW9uLXJlcXVlc3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/notification-tabs/notification-requests/notification-requests.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/dashboard/notification-tabs/notification-requests/notification-requests.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<section>\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\">\n            <mat-form-field>\n                <mat-label>Filter Rides</mat-label>\n                <input matInput type=\"text\" (keyup)=\"doFilter($event.target.value)\" placeholder=\"Filter\">\n              </mat-form-field>\n        </div> \n    \n      \n  \n  <!-- property binding -->\n  <mat-table [dataSource]=\"notificationSource\" matSort >\n     \n    <!-- driver name -->\n    <ng-container matColumnDef=\"driver_name\" >\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Driver Name</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">\n          <a [routerLink]=\"['/profile']\" [queryParams]=\"{userID: element.id_driver}\" (click)=\"onProfileUse(element.id_driver)\">\n            {{element.driverName}}\n          </a>\n        </mat-cell>\n    </ng-container>\n\n    <!-- ride name -->\n    <ng-container matColumnDef=\"ride_name\" >\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Ride Name</mat-header-cell>\n        <mat-cell *matCellDef=\"let element\">{{ element.rideName }}</mat-cell>\n      </ng-container>\n\n      <!-- location name -->\n    <ng-container matColumnDef=\"location\" >\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Location</mat-header-cell>\n        <mat-cell *matCellDef=\"let element\">{{ element.locationToFrom }}</mat-cell>\n      </ng-container>\n\n      <!-- approved name -->\n      <ng-container matColumnDef=\"approved\" >\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Approved</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">{{ element.approved }}</mat-cell>\n        </ng-container>\n  \n  \n     <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n     <mat-row *matRowDef=\"let rows; columns: displayedColumns\"></mat-row>\n  </mat-table>\n  \n  <mat-paginator [pageSize]=\"3\" [pageSizeOptions]=\"[2,3,4,6,8]\"></mat-paginator>\n  \n  </section>\n  "

/***/ }),

/***/ "./src/app/dashboard/notification-tabs/notification-requests/notification-requests.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/dashboard/notification-tabs/notification-requests/notification-requests.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: NotificationRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationRequestsComponent", function() { return NotificationRequestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_drive_rides_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/drive_rides.service */ "./src/app/services/drive_rides.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NotificationRequestsComponent = /** @class */ (function () {
    function NotificationRequestsComponent(driveRidesService, userService, notificationService, dialog, router) {
        this.driveRidesService = driveRidesService;
        this.userService = userService;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.router = router;
        this.displayedColumns = ["driver_name", "ride_name", "location", "approved"];
        this.notificationSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
    }
    NotificationRequestsComponent.prototype.ngOnInit = function () {
        this.notificationSource.data = this.notificationService.getNotificationsForSpecificUserRequest(this.userService.getCurrenSession().id_user);
        //this.notificationSource.data =  this.driveRidesService.getDriverRides(this.userService.getCurrenSession().id_user);
        for (var elem in this.notificationSource.data) {
            var current_user = this.userService.getProfileData(this.notificationSource.data[elem].id_driver);
            var uniqueRide = this.driveRidesService.getUniqueRide(this.notificationSource.data[elem].ride_id);
            var rideName = uniqueRide.name;
            var locationToFrom = uniqueRide.start_location + " - " + uniqueRide.end_location;
            var fname = current_user.fname;
            var lname = current_user.lname;
            this.notificationSource.data[elem]["driverName"] = fname + " " + lname;
            this.notificationSource.data[elem]["rideName"] = rideName;
            this.notificationSource.data[elem]["locationToFrom"] = locationToFrom;
        }
    };
    NotificationRequestsComponent.prototype.ngAfterViewInit = function () {
        this.notificationSource.sort = this.sort;
        this.notificationSource.paginator = this.paginator;
    };
    NotificationRequestsComponent.prototype.doFilter = function (filterValue) {
        this.notificationSource.filter = filterValue.trim().toLowerCase();
    };
    NotificationRequestsComponent.prototype.onProfileUse = function (id) {
        var _this = this;
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
            return _this.router.navigate(["/profile", { userID: id }]);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], NotificationRequestsComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], NotificationRequestsComponent.prototype, "paginator", void 0);
    NotificationRequestsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification-requests',
            template: __webpack_require__(/*! ./notification-requests.component.html */ "./src/app/dashboard/notification-tabs/notification-requests/notification-requests.component.html"),
            styles: [__webpack_require__(/*! ./notification-requests.component.css */ "./src/app/dashboard/notification-tabs/notification-requests/notification-requests.component.css")]
        }),
        __metadata("design:paramtypes", [_services_drive_rides_service__WEBPACK_IMPORTED_MODULE_1__["DriveRidesService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], NotificationRequestsComponent);
    return NotificationRequestsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/notification-tabs/notification-tabs.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/notification-tabs/notification-tabs.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-container{\r\n    margin: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL25vdGlmaWNhdGlvbi10YWJzL25vdGlmaWNhdGlvbi10YWJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL25vdGlmaWNhdGlvbi10YWJzL25vdGlmaWNhdGlvbi10YWJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiA1MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/notification-tabs/notification-tabs.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/notification-tabs/notification-tabs.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n    <mat-tab-group class=\"my-container\" >\n        <mat-tab label=\"Requests\" *ngIf=\"this.userService.getCurrenSession().acc_type == 'passenger'\">\n            <ng-template matTabLabel>\n                <span >Sent Requests</span>\n            </ng-template>\n          <app-notification-requests></app-notification-requests>\n        </mat-tab>\n\n        <mat-tab label=\"Requests\" *ngIf=\"this.userService.getCurrenSession().acc_type == 'driver'\">\n                <ng-template matTabLabel>\n                    <span >Requests</span>\n                </ng-template>\n                <app-notification-requests-driver></app-notification-requests-driver>\n            </mat-tab>\n    \n        <mat-tab label=\"Ended Rides\">\n            <ng-template matTabLabel>\n                <span>Ended Rides</span>\n            </ng-template>\n          <app-notification-ended-rides></app-notification-ended-rides>\n        </mat-tab>\n    </mat-tab-group>\n</section>"

/***/ }),

/***/ "./src/app/dashboard/notification-tabs/notification-tabs.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/notification-tabs/notification-tabs.component.ts ***!
  \****************************************************************************/
/*! exports provided: NotificationTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationTabsComponent", function() { return NotificationTabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationTabsComponent = /** @class */ (function () {
    function NotificationTabsComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        //___________________________________________ reddirect
        if (this.userService.getCurrenSession().id_user == -1) {
            this.router.navigate(["/"]);
        }
        //___________________________________________ reddirect end
    }
    NotificationTabsComponent.prototype.ngOnInit = function () {
    };
    NotificationTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification-tabs',
            template: __webpack_require__(/*! ./notification-tabs.component.html */ "./src/app/dashboard/notification-tabs/notification-tabs.component.html"),
            styles: [__webpack_require__(/*! ./notification-tabs.component.css */ "./src/app/dashboard/notification-tabs/notification-tabs.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NotificationTabsComponent);
    return NotificationTabsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/profile/edit-profile/edit-profile.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/profile/edit-profile/edit-profile.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert{\r\n    color: #721c24;\r\n    background-color: #f8d7da;\r\n    border-color: #f5c6cb;\r\n    position: relative;\r\n    padding: .75rem 1.25rem;\r\n    margin-bottom: 1rem;\r\n    border: 1px solid transparent;\r\n    border-top-color: transparent;\r\n    border-right-color: transparent;\r\n    border-bottom-color: transparent;\r\n    border-left-color: transparent;\r\n    border-radius: .25rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Byb2ZpbGUvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5QixnQ0FBZ0M7SUFDaEMsaUNBQWlDO0lBQ2pDLCtCQUErQjtJQUMvQixzQkFBc0I7Q0FDekIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvcHJvZmlsZS9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnR7XHJcbiAgICBjb2xvcjogIzcyMWMyNDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGQ3ZGE7XHJcbiAgICBib3JkZXItY29sb3I6ICNmNWM2Y2I7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAuNzVyZW0gMS4yNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/profile/edit-profile/edit-profile.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/profile/edit-profile/edit-profile.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\n    <section fxLayout=\"column\" fxLayoutAlign=\"center center\">        \n            <form fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\"\n            #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n            <!---------------------------------------------------------------------------------------------------------------------------------------->\n            <mat-form-field appearance=\"outline\" floatPlaceholder=\"always\" floatLabel=\"always\" class=\"mat-form-field--no-underline\">\n                <mat-label>Account type</mat-label>\n              <input matInput placeholder style=\"display: none\">\n              <mat-radio-group ngModel name=\"typeOfUser\" [(ngModel)]=\"currentUser.acc_type\" required #typeOfUserInput=\"ngModel\" fxLayout fxLayoutAlign=\"center\" fxLayoutGap=\"20px\">\n                <mat-radio-button value=\"driver\">Driver</mat-radio-button>\n                <mat-radio-button value=\"passenger\">Passenger</mat-radio-button>\n              </mat-radio-group>\n            </mat-form-field>\n        <!---------------------------------------------------------------------------------------------------------------------------------------->\n        \n            <mat-form-field appearance=\"outline\">\n                <input type=\"text\" pattern=\"[A-Z]{1}[a-z]{2,20}\" matInput placeholder=\"First name\" [(ngModel)]=\"currentUser.fname\" name=\"firstName\" required #firstNameInput=\"ngModel\" > \n                <mat-error *ngIf=\"firstNameInput.hasError('required')\">Please write Your first name.</mat-error>\n                <mat-error *ngIf=\"!firstNameInput.hasError('required')\">First lether should be capital letter followed by at least 2 words</mat-error>\n              </mat-form-field>\n          <!---------------------------------------------------------------------------------------------------------------------------------------->\n              <mat-form-field appearance=\"outline\">\n                <input type=\"text\" pattern=\"[A-Z]{1}[a-z]{2,20}\" matInput placeholder=\"Last name\" [(ngModel)]=\"currentUser.lname\" name=\"lastName\" required #lastNameInput=\"ngModel\">\n                <mat-error *ngIf=\"lastNameInput.hasError('required')\">Please write Your last name.</mat-error>\n                <mat-error *ngIf=\"!lastNameInput.hasError('required')\">First lether should be capital letter followed by at least 2 words</mat-error>\n              </mat-form-field>\n          <!---------------------------------------------------------------------------------------------------------------------------------------->\n              <mat-form-field appearance=\"outline\">\n                <input type=\"tel\" pattern=\"[0]{1}[0-9]{9}\" matInput placeholder=\"Mobile phone number\" [(ngModel)]=\"currentUser.contact_phone\" name=\"phone\" required #phoneInput=\"ngModel\" minlength=\"6\">\n                <mat-error *ngIf=\"phoneInput.hasError('required')\">Please write Your mobile number.</mat-error>\n                <mat-error *ngIf=\"!phoneInput.hasError('required')\">Phone number should start with 0 followed by 9 digits afterwards</mat-error>\n              </mat-form-field>\n          <!---------------------------------------------------------------------------------------------------------------------------------------->\n              <mat-form-field appearance=\"outline\">\n                <input type=\"text\" matInput placeholder=\"Address\" [(ngModel)]=\"currentUser.contact_address\" name=\"address\" required #adressInput=\"ngModel\">\n                <mat-error *ngIf=\"adressInput.hasError('required')\">Please write Your full address.</mat-error>\n              </mat-form-field>\n        \n        <!---------------------------------------------------------------------------------------------------------------------------------------->\n            <!-- <font *ngIf=\"emailInUse\" color=\"red\">Email already in use. Please enter another email address!</font> -->\n            <mat-form-field appearance=\"outline\" hintLabel=\"This will be used for signing in.\">\n                <input type=\"email\" matInput placeholder=\"Your email\" [(ngModel)]=\"currentUser.contact_email\" name=\"email\" email required #emailInput=\"ngModel\">\n                <mat-error *ngIf=\"emailInput.hasError('required')\">Please write Your email address.</mat-error>\n                <mat-error *ngIf=\"!emailInput.hasError('required')\">Please use the correct email format.</mat-error>\n              </mat-form-field>\n          <!---------------------------------------------------------------------------------------------------------------------------------------->\n              <mat-form-field appearance=\"outline\" hintLabel=\"Please enter minimum 6 characters.\">\n                <mat-label>Your password</mat-label>\n                <input type=\"password\" matInput placeholder ngModel name=\"password\" [(ngModel)]=\"currentUser.password\" required minlength=\"6\" #passInput=\"ngModel\">\n                <mat-hint align=\"end\">{{ passInput.value?.length }} /6 </mat-hint>\n                <mat-error *ngIf=\"passInput.hasError('required')\">Please enter minimum 6 characters.</mat-error> \n                <mat-error *ngIf=\"!passInput.hasError('required')\">Please enter minimum 6 characters.</mat-error> \n              </mat-form-field>\n          \n          <div class=\"alert\" *ngIf=\"errorString !=''\">{{ errorString }}</div>\n          <!---------------------------------------------------------------------------------------------------------------------------------------->\n              <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"f.invalid\">\n                EDIT\n              </button>\n              <button mat-raised-button color=\"warn\" (click)=\"onCancel()\">\n                  Cancel\n                </button>\n            </form>\n        \n    \n      </section>\n\n\n\n</mat-dialog-content>\n"

/***/ }),

/***/ "./src/app/dashboard/profile/edit-profile/edit-profile.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/profile/edit-profile/edit-profile.component.ts ***!
  \**************************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/users.service */ "./src/app/services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(dialogRef, data, userService) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.errorString = "";
        this.userTEMP = userService.getProfileData(data.userid);
        this.currentUser = { id_user: -1,
            fname: "",
            lname: "",
            contact_email: "",
            contact_phone: "",
            contact_address: "",
            password: "",
            acc_type: "driver", };
        Object.keys(this.userTEMP).forEach(function (key) { return _this.currentUser[key] = _this.userTEMP[key]; });
    }
    EditProfileComponent.prototype.ngOnInit = function () {
    };
    EditProfileComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    EditProfileComponent.prototype.onSubmit = function (form) {
        var _this = this;
        Object.keys(this.currentUser).forEach(function (key) { return _this.userTEMP[key] = _this.currentUser[key]; });
        /*
        this.userService.updateUser({
          id_user         : this.data.userid,       // later we are going to use this to put current logged in user
            fname           : form.value.firstName,       // to simulate the SESSION on the backend
            lname           : form.value.lastName,
            contact_email   : form.value.email,
            contact_phone   : form.value.phone,
            contact_address : form.value.address,
            password        : form.value.password,
            acc_type        : form.value.typeOfUser
        }); */
        this.onCancel();
    };
    EditProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! ./edit-profile.component.html */ "./src/app/dashboard/profile/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile.component.css */ "./src/app/dashboard/profile/edit-profile/edit-profile.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/profile/profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/profile/profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".width-500px{\r\n    width: 500px;\r\n    max-width: 500px;\r\n}\r\n\r\n.green-text{\r\n    color: #009933;\r\n}\r\n\r\n.red-text{\r\n    color: #990000;\r\n}\r\n\r\n.gray-text{\r\n    color:#424040;\r\n}\r\n\r\n.sectionClass{\r\n    margin-top: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7O0FBQ0Q7SUFDSSxlQUFlO0NBQ2xCOztBQUNEO0lBQ0ksY0FBYztDQUNqQjs7QUFFRDtJQUNJLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aWR0aC01MDBweHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbi5ncmVlbi10ZXh0e1xyXG4gICAgY29sb3I6ICMwMDk5MzM7XHJcbn1cclxuLnJlZC10ZXh0e1xyXG4gICAgY29sb3I6ICM5OTAwMDA7XHJcbn1cclxuLmdyYXktdGV4dHtcclxuICAgIGNvbG9yOiM0MjQwNDA7XHJcbn1cclxuXHJcbi5zZWN0aW9uQ2xhc3N7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/profile/profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/profile/profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section  fxLayoutAlign=\"center center\" fxLayout=\"column\" class=\"sectionClass\">\n  <mat-card>\n      <mat-card-header fxLayoutGap=\"100px\" >\n          <div mat-card-avatar ><img mat-card-image src={{imgSRC}} class=\"resize-img\"/></div>\n          <mat-card-title>{{userToShow.fname }} {{userToShow.lname }}</mat-card-title>\n          <mat-card-subtitle>{{userToShow.acc_type}}</mat-card-subtitle>\n       </mat-card-header>\n       <mat-card-content>\n          <button *ngIf=\"userIDtoShow == userService.getCurrenSession().id_user\" mat-stroked-button color=\"primary\"  (click)=\"editProfile()\">Edit</button>\n          <mat-list >\n              <mat-divider></mat-divider>\n              <mat-list-item><mat-icon>star_rate</mat-icon>Raiting</mat-list-item>\n              <mat-list-item class=\"green-text\">Positive {{repData?.rep_positive}}</mat-list-item>\n              <mat-list-item class=\"red-text\">Negative {{repData?.rep_negative}}</mat-list-item>\n              <mat-divider></mat-divider>\n              \n              <mat-list-item><mat-icon>mail_outline</mat-icon>Email:</mat-list-item>\n              <p class=\"gray-text\" fxLayoutGap=\"100px\" fxLayoutAlign=\"center center\">{{userToShow.contact_email}}</p>\n              <mat-divider></mat-divider>\n              <mat-list-item><mat-icon>phone</mat-icon>Phone: </mat-list-item>\n              <p class=\"gray-text\" fxLayoutGap=\"100px\" fxLayoutAlign=\"center center\">{{userToShow.contact_phone}}</p>\n              <mat-divider></mat-divider>\n              <mat-list-item><mat-icon>home</mat-icon>Address: </mat-list-item>\n              <p class=\"gray-text\" fxLayoutGap=\"100px\" fxLayoutAlign=\"center center\">{{userToShow.contact_address}}</p>\n            </mat-list>\n       </mat-card-content> \n\n\n       <h4>REVIEWS</h4>\n       <div *ngIf=\"repData.rep_comment\">\n       <div fxLayoutAlign=\"flex-start\" fxLayoutAlign=\"flex-start\"  role=\"list\" *ngFor=\"let item of repData.rep_comment; index as i;\">\n          <mat-card>\n              <mat-card-header fxLayoutGap=\"100px\" >\n                  <a [routerLink]=\"['/profile']\" [queryParams]=\"{userID: item.id_user_from}\" (click)=\"reloadComponent(item.id_user_from)\">\n                  {{userService.getProfileData(item.id_user_from).fname }} {{userService.getProfileData(item.id_user_from).lname }}\n                </a>\n                </mat-card-header>\n                <mat-card-content>\n                    {{item.comment}}\n                </mat-card-content>\n          </mat-card>\n       </div>\n    </div>\n      </mat-card>\n</section>\n\n\n\n"

/***/ }),

/***/ "./src/app/dashboard/profile/profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/profile/profile.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_reputation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/reputation.service */ "./src/app/services/reputation.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/dashboard/profile/edit-profile/edit-profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, appComponent, router, route, repService, dialog) {
        this.userService = userService;
        this.appComponent = appComponent;
        this.router = router;
        this.route = route;
        this.repService = repService;
        this.dialog = dialog;
        this.userIDtoShow = -1;
        var urlParse = this.router.url.split("=");
        if (typeof urlParse[1] != 'undefined' || urlParse[1] != null) {
            this.userIDtoShow = Number(urlParse[1]);
        }
        /*this.route.queryParams.subscribe(params => {
          console.log(this.router.url.split("=")[1]);
          if (!isNaN(Number(params['userID']))){
            this.userIDtoShow = Number(params['userID']);
          }
          });*/
        if (this.userIDtoShow == -1) {
            this.userIDtoShow = userService.getCurrenSession().id_user;
        }
        this.userToShow = userService.getProfileData(this.userIDtoShow);
        this.imgSRC = "https://robohash.org/" + this.userToShow.fname + ".png";
        this.repData = repService.getReputationOfOneUser(this.userIDtoShow);
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.editProfile = function () {
        this.dialog.open(_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__["EditProfileComponent"], { data: { userid: this.userIDtoShow } });
    };
    ProfileComponent.prototype.reloadComponent = function (id) {
        var _this = this;
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
            return _this.router.navigate(["/profile", { userID: id }]);
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/dashboard/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/dashboard/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_reputation_service__WEBPACK_IMPORTED_MODULE_4__["ReputationService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/view-passengers-ride-dialog/view-passengers-ride-dialog.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/dashboard/view-passengers-ride-dialog/view-passengers-ride-dialog.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC92aWV3LXBhc3NlbmdlcnMtcmlkZS1kaWFsb2cvdmlldy1wYXNzZW5nZXJzLXJpZGUtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/view-passengers-ride-dialog/view-passengers-ride-dialog.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/dashboard/view-passengers-ride-dialog/view-passengers-ride-dialog.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n    Following passengers are registered for this ride:\n    <div *ngFor=\"let item of passangersArray\" fxLayout=\"column\" fxLayoutAlign=\"center center\" >\n        <a [routerLink]=\"['/profile']\" [queryParams]=\"{userID: item.pID}\" (click)=\"onPassengerView(item.pID)\">\n          {{item.name}}\n        </a>\n    </div>\n  \n  \n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n      <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"onCancel()\" >\n        CANCEL\n      </button>\n      </div>\n  \n  </section>\n  "

/***/ }),

/***/ "./src/app/dashboard/view-passengers-ride-dialog/view-passengers-ride-dialog.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/dashboard/view-passengers-ride-dialog/view-passengers-ride-dialog.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ViewPassengersRideDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPassengersRideDialogComponent", function() { return ViewPassengersRideDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_drive_rides_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/drive_rides.service */ "./src/app/services/drive_rides.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ViewPassengersRideDialogComponent = /** @class */ (function () {
    function ViewPassengersRideDialogComponent(dialogRef, data, driverService, usersService, router) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.driverService = driverService;
        this.usersService = usersService;
        this.router = router;
        this.passangersArray = [];
        var passengerObjectArray = this.driverService.getPassangersArray(data.data_id);
        for (var elem in passengerObjectArray) {
            var userData = this.usersService.getProfileData(passengerObjectArray[elem].id_user);
            this.passangersArray.push({
                pID: passengerObjectArray[elem].id_user,
                name: userData.fname + " " + userData.lname,
            });
        }
    }
    ViewPassengersRideDialogComponent.prototype.ngOnInit = function () {
    };
    ViewPassengersRideDialogComponent.prototype.onCancel = function () { this.dialogRef.close(); };
    ViewPassengersRideDialogComponent.prototype.onPassengerView = function (id) {
        this.router.navigate(["/profile", { userID: id }]);
        this.onCancel();
    };
    ViewPassengersRideDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-passengers-ride-dialog',
            template: __webpack_require__(/*! ./view-passengers-ride-dialog.component.html */ "./src/app/dashboard/view-passengers-ride-dialog/view-passengers-ride-dialog.component.html"),
            styles: [__webpack_require__(/*! ./view-passengers-ride-dialog.component.css */ "./src/app/dashboard/view-passengers-ride-dialog/view-passengers-ride-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _services_drive_rides_service__WEBPACK_IMPORTED_MODULE_2__["DriveRidesService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ViewPassengersRideDialogComponent);
    return ViewPassengersRideDialogComponent;
}());



/***/ }),

/***/ "./src/app/frontpage/login/login.component.css":
/*!*****************************************************!*\
  !*** ./src/app/frontpage/login/login.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n    width: 300px;\n}\nh1{\n    margin-bottom: 20px;\n}\nsection{\n    height:30%;\n    width:50%;\n\t\n\ttop:0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tmargin: auto;\n}\nimg{\n    margin-top: 10px;\n    margin-bottom: 10px;\n    position: static;\n    width: 33%;\n    height: 33%;\n    -o-object-fit: fill;\n       object-fit: fill;\n}\n.alert{\n    color: #721c24;\n    background-color: #f8d7da;\n    border-color: #f5c6cb;\n    position: relative;\n    padding: .75rem 1.25rem;\n    margin-bottom: 1rem;\n    border: 1px solid transparent;\n    border-top-color: transparent;\n    border-right-color: transparent;\n    border-bottom-color: transparent;\n    border-left-color: transparent;\n    border-radius: .25rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnRwYWdlL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLFdBQVc7SUFDWCxVQUFVOztDQUViLE1BQU07Q0FDTixVQUFVO0NBQ1YsUUFBUTtDQUNSLFNBQVM7Q0FDVCxhQUFhO0NBQ2I7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQWlCO09BQWpCLGlCQUFpQjtDQUNwQjtBQUVEO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5QixnQ0FBZ0M7SUFDaEMsaUNBQWlDO0lBQ2pDLCtCQUErQjtJQUMvQixzQkFBc0I7Q0FDekIiLCJmaWxlIjoic3JjL2FwcC9mcm9udHBhZ2UvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMzAwcHg7XG59XG5oMXtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuc2VjdGlvbntcbiAgICBoZWlnaHQ6MzAlO1xuICAgIHdpZHRoOjUwJTtcblx0XG5cdHRvcDowO1xuXHRib3R0b206IDA7XG5cdGxlZnQ6IDA7XG5cdHJpZ2h0OiAwO1xuXHRtYXJnaW46IGF1dG87XG59XG5pbWd7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgd2lkdGg6IDMzJTtcbiAgICBoZWlnaHQ6IDMzJTtcbiAgICBvYmplY3QtZml0OiBmaWxsO1xufVxuXG4uYWxlcnR7XG4gICAgY29sb3I6ICM3MjFjMjQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTtcbiAgICBib3JkZXItY29sb3I6ICNmNWM2Y2I7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IC43NXJlbSAxLjI1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/frontpage/login/login.component.html":
/*!******************************************************!*\
  !*** ./src/app/frontpage/login/login.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div  fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <img src=\"/assets/loginbackground.jpg\"/>\n  </div>\n  \n  <h1 fxLayout=\"row\" fxLayoutGap=\"10px\"  fxLayoutAlign=\"center center\">Carpooling LOGIN page</h1>\n  <form fxLayout=\"column\" fxLayoutGap=\"10px\" fxLayoutAlign=\"center center\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n  <mat-form-field>\n    <input type=\"email\" matInput placeholder=\"Your email\" ngModel name=\"email\" email required #emailInput=\"ngModel\">\n    <mat-error *ngIf=\"emailInput.hasError('required')\">Field should not be left empty.</mat-error>\n    <mat-error *ngIf=\"!emailInput.hasError('required')\">Please provide correct email format.</mat-error>\n  </mat-form-field>\n  <mat-form-field appearance=\"standard\"  hintLabel=\"Please provide minimum 6 characters.\">\n    <input [(ngModel)]=password type=\"password\" matInput placeholder=\"Your password\" ngModel name=\"password\" required minlength=\"6\" #pwdInput=\"ngModel\">\n    <mat-label>Your password</mat-label>\n    <mat-hint align=\"end\">{{ pwdInput.value?.length }} / 6</mat-hint>\n    <mat-error *ngIf=\"pwdInput.hasError('required')\">Please enter minimum 6 characters.</mat-error> \n        <mat-error *ngIf=\"!pwdInput.hasError('required')\">Please enter minimum 6 characters.</mat-error> \n  </mat-form-field> \n  <div class=\"alert\" *ngIf=\"errorString !=''\">{{ errorString }}</div>\n  <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"f.invalid\">Login</button>\n  </form> \n\n  \n  \n  <p fxLayout=\"column\" fxLayoutGap=\"10px\" fxLayoutAlign=\"center center\">\n    Don't have an account\n     <a routerLink=\"/signup\" >\n      Consider registering here!\n     </a></p> \n  \n  </section>\n"

/***/ }),

/***/ "./src/app/frontpage/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/frontpage/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, appComponent, router) {
        this.userService = userService;
        this.appComponent = appComponent;
        this.router = router;
        this.errorString = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (this.userService.validateLogin(form.value.email, form.value.password)) {
            this.appComponent.setLoggedIn(true);
            this.errorString = "";
            //___________________________________________ reddirect
            if (this.userService.getCurrenSession().id_user != -1) {
                var reddirect_path_1 = "/";
                if (this.userService.getCurrenSession().acc_type == "driver") {
                    reddirect_path_1 = "/view-current-rides";
                }
                else {
                    reddirect_path_1 = "/search-active-rides";
                }
                this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
                    return _this.router.navigate([reddirect_path_1]);
                });
            }
            //___________________________________________ reddirect end
        }
        else {
            this.errorString = "Invalid email and/or password provided!";
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/frontpage/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/frontpage/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"], _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/frontpage/signup/signup.component.css":
/*!*******************************************************!*\
  !*** ./src/app/frontpage/signup/signup.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n    width: 300px;\n}\n\nh1{\n    margin-bottom: 20px;\n}\n\nsection{\n    height:30%;\n    width:50%;\n\t\n\ttop:0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tmargin: auto;\n}\n\nimg{\n    margin-top: 10px;\n    margin-bottom: 10px;\n    position: static;\n    width: 33%;\n    height: 33%;\n    -o-object-fit: fill;\n       object-fit: fill;\n}\n\n.alert{\n    color: #721c24;\n    background-color: #f8d7da;\n    border-color: #f5c6cb;\n    position: relative;\n    padding: .75rem 1.25rem;\n    margin-bottom: 1rem;\n    border: 1px solid transparent;\n    border-top-color: transparent;\n    border-right-color: transparent;\n    border-bottom-color: transparent;\n    border-left-color: transparent;\n    border-radius: .25rem;\n}\n\n.section-css{\n    margin-top: 50px;\n}\n\n.pClass{\n    margin-bottom: 100px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnRwYWdlL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsVUFBVTs7Q0FFYixNQUFNO0NBQ04sVUFBVTtDQUNWLFFBQVE7Q0FDUixTQUFTO0NBQ1QsYUFBYTtDQUNiOztBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBaUI7T0FBakIsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5QixnQ0FBZ0M7SUFDaEMsaUNBQWlDO0lBQ2pDLCtCQUErQjtJQUMvQixzQkFBc0I7Q0FDekI7O0FBQ0Q7SUFDSSxpQkFBaUI7Q0FDcEI7O0FBQ0Q7SUFDSSxxQkFBcUI7Q0FDeEIiLCJmaWxlIjoic3JjL2FwcC9mcm9udHBhZ2Uvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAzMDBweDtcbn1cblxuaDF7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuc2VjdGlvbntcbiAgICBoZWlnaHQ6MzAlO1xuICAgIHdpZHRoOjUwJTtcblx0XG5cdHRvcDowO1xuXHRib3R0b206IDA7XG5cdGxlZnQ6IDA7XG5cdHJpZ2h0OiAwO1xuXHRtYXJnaW46IGF1dG87XG59XG5pbWd7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgd2lkdGg6IDMzJTtcbiAgICBoZWlnaHQ6IDMzJTtcbiAgICBvYmplY3QtZml0OiBmaWxsO1xufVxuXG4uYWxlcnR7XG4gICAgY29sb3I6ICM3MjFjMjQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTtcbiAgICBib3JkZXItY29sb3I6ICNmNWM2Y2I7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IC43NXJlbSAxLjI1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xufVxuLnNlY3Rpb24tY3Nze1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG4ucENsYXNze1xuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/frontpage/signup/signup.component.html":
/*!********************************************************!*\
  !*** ./src/app/frontpage/signup/signup.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section-css\">\n    <div  fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <img src=\"/assets/registerImage.jpg\"/>\n    </div>\n    <h1 fxLayout=\"row\" fxLayoutGap=\"10px\"  fxLayoutAlign=\"center center\">Carpooling REGISTER page</h1>\n\n    <form fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\"\n    #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n    <!---------------------------------------------------------------------------------------------------------------------------------------->\n    <mat-form-field appearance=\"outline\" floatPlaceholder=\"always\" floatLabel=\"always\" class=\"mat-form-field--no-underline\">\n        <mat-label>Account type</mat-label>\n      <input matInput placeholder style=\"display: none\">\n      <mat-radio-group ngModel name=\"typeOfUser\" [(ngModel)]=typeOfUser required #typeOfUserInput=\"ngModel\" fxLayout fxLayoutAlign=\"center\" fxLayoutGap=\"20px\">\n        <mat-radio-button value=\"driver\">Driver</mat-radio-button>\n        <mat-radio-button value=\"passenger\">Passenger</mat-radio-button>\n      </mat-radio-group>\n    </mat-form-field>\n<!---------------------------------------------------------------------------------------------------------------------------------------->\n\n    <mat-form-field>\n        <input type=\"text\" pattern=\"[A-Z]{1}[a-z]{2,20}\" matInput placeholder=\"First name\" ngModel name=\"firstName\" required #firstNameInput=\"ngModel\" > \n        <mat-error *ngIf=\"firstNameInput.hasError('required')\">Please write Your first name.</mat-error>\n        <mat-error *ngIf=\"!firstNameInput.hasError('required')\">First lether should be capital letter followed by at least 2 words</mat-error>\n      </mat-form-field>\n  <!---------------------------------------------------------------------------------------------------------------------------------------->\n      <mat-form-field>\n        <input type=\"text\" pattern=\"[A-Z]{1}[a-z]{2,20}\" matInput placeholder=\"Last name\" ngModel name=\"lastName\" required #lastNameInput=\"ngModel\">\n        <mat-error *ngIf=\"lastNameInput.hasError('required')\">Please write Your last name.</mat-error>\n        <mat-error *ngIf=\"!lastNameInput.hasError('required')\">First lether should be capital letter followed by at least 2 words</mat-error>\n      </mat-form-field>\n  <!---------------------------------------------------------------------------------------------------------------------------------------->\n      <mat-form-field>\n        <input type=\"tel\" pattern=\"[0]{1}[0-9]{9}\" matInput placeholder=\"Mobile phone number\" ngModel name=\"phone\" required #phoneInput=\"ngModel\" minlength=\"6\">\n        <mat-error *ngIf=\"phoneInput.hasError('required')\">Please write Your mobile number.</mat-error>\n        <mat-error *ngIf=\"!phoneInput.hasError('required')\">Phone number should start with 0 followed by 9 digits afterwards</mat-error>\n      </mat-form-field>\n  <!---------------------------------------------------------------------------------------------------------------------------------------->\n      <mat-form-field>\n        <input type=\"text\" matInput placeholder=\"Address\" ngModel name=\"address\" required #adressInput=\"ngModel\">\n        <mat-error *ngIf=\"adressInput.hasError('required')\">Please write Your full address.</mat-error>\n      </mat-form-field>\n\n<!---------------------------------------------------------------------------------------------------------------------------------------->\n    <!-- <font *ngIf=\"emailInUse\" color=\"red\">Email already in use. Please enter another email address!</font> -->\n    <mat-form-field hintLabel=\"This will be used for signing in.\">\n        <input type=\"email\" matInput placeholder=\"Your email\" ngModel name=\"email\" email required #emailInput=\"ngModel\">\n        <mat-error *ngIf=\"emailInput.hasError('required')\">Please write Your email address.</mat-error>\n        <mat-error *ngIf=\"!emailInput.hasError('required')\">Please use the correct email format.</mat-error>\n      </mat-form-field>\n  <!---------------------------------------------------------------------------------------------------------------------------------------->\n      <mat-form-field appearance=\"standard\" hintLabel=\"Please enter minimum 6 characters.\">\n        <mat-label>Your password</mat-label>\n        <input type=\"password\" matInput placeholder ngModel name=\"password\" [(ngModel)]=password required minlength=\"6\" #passInput=\"ngModel\">\n        <mat-hint align=\"end\">{{ passInput.value?.length }} /6 </mat-hint>\n        <mat-error *ngIf=\"passInput.hasError('required')\">Please enter minimum 6 characters.</mat-error> \n        <mat-error *ngIf=\"!passInput.hasError('required')\">Please enter minimum 6 characters.</mat-error> \n      </mat-form-field>\n  <!---------------------------------------------------------------------------------------------------------------------------------------->\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n      <mat-checkbox color=\"primary\" ngModel name=\"acceptance\" required></mat-checkbox>\n      <!-- I accept the <font face=\"verdana\" color=\"blue\" (click)=\"onTos()\"><u>terms and conditions</u></font> of use. -->\n      I accept the <a href=\"javascript:;\" (click)=\"onTos()\">terms and conditions</a> of use.\n    </div>\n  \n  <div class=\"alert\" *ngIf=\"errorString !=''\">{{ errorString }}</div>\n  <!---------------------------------------------------------------------------------------------------------------------------------------->\n      <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"f.invalid\">\n        Sign up!\n      </button>\n    </form>\n\n\n<p fxLayout=\"column\" fxLayoutGap=\"10px\" fxLayoutAlign=\"center center\" class=\"pClass\">\n    Already have an account?\n     <a routerLink=\"/\" >\n      Consider to login here!\n     </a></p> \n</section>"

/***/ }),

/***/ "./src/app/frontpage/signup/signup.component.ts":
/*!******************************************************!*\
  !*** ./src/app/frontpage/signup/signup.component.ts ***!
  \******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_reputation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/reputation.service */ "./src/app/services/reputation.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, userService, appComponent, repService) {
        this.router = router;
        this.userService = userService;
        this.appComponent = appComponent;
        this.repService = repService;
        this.errorString = "";
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (!this.userService.doesEmailExists(form.value.email)) {
            /*
            in_fname:string,
              in_lname:string,
              in_contact_email:string,
              in_contact_phone:string,
              in_contact_address:string,
              in_password:string,
              in_acc_type:string,){*/
            var newID = this.userService.addUser(form.value.firstName, form.value.lastName, form.value.email, form.value.phone, form.value.address, form.value.password, form.value.typeOfUser);
            this.errorString = "";
            this.appComponent.setLoggedIn(true);
            this.userService.validateLogin(form.value.email, form.value.password);
            this.repService.initReputation(newID);
            //___________________________________________ reddirect
            if (this.userService.getCurrenSession().id_user != -1) {
                var reddirect_path_1 = "/";
                if (this.userService.getCurrenSession().acc_type == "driver") {
                    reddirect_path_1 = "/view-current-rides";
                }
                else {
                    reddirect_path_1 = "/search-active-rides";
                }
                this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
                    return _this.router.navigate([reddirect_path_1]);
                });
            }
            //___________________________________________ reddirect end
        }
        else {
            this.errorString = "This email already exist!";
        }
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/frontpage/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/frontpage/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"], _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], _services_reputation_service__WEBPACK_IMPORTED_MODULE_3__["ReputationService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _node_modules_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/@angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* Modul za registraciju Angular Material komponenti */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var matModules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"]
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_node_modules_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: matModules.slice(),
            exports: matModules.slice()
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/routing.module.ts":
/*!***********************************!*\
  !*** ./src/app/routing.module.ts ***!
  \***********************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _node_modules_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/@angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _frontpage_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frontpage/login/login.component */ "./src/app/frontpage/login/login.component.ts");
/* harmony import */ var _frontpage_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./frontpage/signup/signup.component */ "./src/app/frontpage/signup/signup.component.ts");
/* harmony import */ var _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/profile/profile.component */ "./src/app/dashboard/profile/profile.component.ts");
/* harmony import */ var _dashboard_dashboard_driver_view_current_rides_view_current_rides_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard_driver/view-current-rides/view-current-rides.component */ "./src/app/dashboard/dashboard_driver/view-current-rides/view-current-rides.component.ts");
/* harmony import */ var _dashboard_dashboard_passenger_search_active_rides_search_active_rides_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard_passenger/search-active-rides/search-active-rides.component */ "./src/app/dashboard/dashboard_passenger/search-active-rides/search-active-rides.component.ts");
/* harmony import */ var _dashboard_notification_tabs_notification_tabs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/notification-tabs/notification-tabs.component */ "./src/app/dashboard/notification-tabs/notification-tabs.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Kreiraju se automatski prilikom navođenja komponenti u nizu rute ispod






var rute = [
    { path: '', component: _frontpage_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], pathMatch: 'full' },
    { path: 'signup', component: _frontpage_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: 'profile', component: _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'view-current-rides', component: _dashboard_dashboard_driver_view_current_rides_view_current_rides_component__WEBPACK_IMPORTED_MODULE_5__["ViewCurrentRidesComponent"] },
    { path: 'search-active-rides', component: _dashboard_dashboard_passenger_search_active_rides_search_active_rides_component__WEBPACK_IMPORTED_MODULE_6__["SearchActiveRidesComponent"] },
    { path: 'notifications', component: _dashboard_notification_tabs_notification_tabs_component__WEBPACK_IMPORTED_MODULE_7__["NotificationTabsComponent"] }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_node_modules_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(rute)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/services/drive_rides.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/drive_rides.service.ts ***!
  \*************************************************/
/*! exports provided: DriveRidesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriveRidesService", function() { return DriveRidesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DriveRidesService = /** @class */ (function () {
    function DriveRidesService() {
        this.driveRideList = [
            {
                id_drive_rides: 1,
                id_driver: 2,
                name: "drive 1",
                start_location: "start loc1",
                end_location: "end loc 1",
                departure_time: "10:30",
                start_time: "10:30",
                end_time: "11:30",
                drive_ride_status: 'ongoing',
                passengers_limit: 5,
                current_passengers_number: 2,
                current_passengers_data: [
                    { id_user: 1 },
                    { id_user: 3 }
                ],
                drive_ride_stops: [
                    { stop_name: "stop1" },
                    { stop_name: "stop2" }
                ],
                date: new Date()
            },
            {
                id_drive_rides: 2,
                id_driver: 2,
                name: "drive 2",
                start_location: "start loc2",
                end_location: "end loc 2",
                departure_time: "12:30",
                start_time: "12:30",
                end_time: "13:30",
                drive_ride_status: 'ended',
                passengers_limit: 5,
                current_passengers_number: 1,
                current_passengers_data: [
                    { id_user: 1 }
                ],
                drive_ride_stops: [
                    { stop_name: "stop1" },
                    { stop_name: "stop2" }
                ],
                date: new Date()
            }, {
                id_drive_rides: 3,
                id_driver: 2,
                name: "drive3",
                start_location: "start loc2",
                end_location: "end loc 2",
                departure_time: "01:30",
                start_time: "03:30",
                end_time: "03:30",
                drive_ride_status: 'ongoing',
                passengers_limit: 5,
                current_passengers_number: 0,
                current_passengers_data: [],
                drive_ride_stops: [
                    { stop_name: "stop1" },
                    { stop_name: "stop2" }
                ],
                date: new Date()
            }
        ];
    }
    DriveRidesService.prototype.setDriveRide = function (id_driver, name, start_location, end_location, start_time, end_time, passengers_limit, date, drive_ride_stops) {
        var newID = this.driveRideList[this.driveRideList.length - 1].id_drive_rides + 1;
        this.driveRideList.push({
            id_drive_rides: newID,
            id_driver: id_driver,
            name: name,
            start_location: start_location,
            end_location: end_location,
            departure_time: "",
            start_time: start_time,
            end_time: end_time,
            drive_ride_status: 'ongoing',
            passengers_limit: passengers_limit,
            current_passengers_number: 0,
            current_passengers_data: [],
            drive_ride_stops: drive_ride_stops,
            date: date
        });
    };
    DriveRidesService.prototype.getDriverRides = function (id_driver) {
        var driveRideList2 = [];
        for (var i = 0; i < this.driveRideList.length; i++) {
            if (this.driveRideList[i]["id_driver"] == id_driver) {
                driveRideList2.push(this.driveRideList[i]);
            }
        }
        return driveRideList2;
    };
    DriveRidesService.prototype.getUniqueRide = function (id_ride) {
        for (var i = 0; i < this.driveRideList.length; i++) {
            if (this.driveRideList[i]["id_drive_rides"] == id_ride) {
                return this.driveRideList[i];
            }
        }
    };
    DriveRidesService.prototype.removeUniqueRide = function (id_ride) {
        var filtered = this.driveRideList.filter(function (el) { return el.id_drive_rides != id_ride; });
        this.driveRideList = filtered;
    };
    DriveRidesService.prototype.getPassangersArray = function (id_drive) {
        for (var i = 0; i < this.driveRideList.length; i++) {
            if (this.driveRideList[i]["id_drive_rides"] == id_drive) {
                return this.driveRideList[i]["current_passengers_data"];
            }
        }
    };
    DriveRidesService.prototype.getStopsArray = function (id_drive) {
        for (var i = 0; i < this.driveRideList.length; i++) {
            if (this.driveRideList[i]["id_drive_rides"] == id_drive) {
                return this.driveRideList[i]["drive_ride_stops"];
            }
        }
    };
    DriveRidesService.prototype.getOngoingDrives = function () {
        var returnDriveRideList = [];
        for (var i = 0; i < this.driveRideList.length; i++) {
            if (this.driveRideList[i]["drive_ride_status"] == 'ongoing') {
                returnDriveRideList.push(this.driveRideList[i]);
            }
        }
        return returnDriveRideList;
    };
    DriveRidesService.prototype.getSpecificInactivePassengerRides = function (pID) {
        var returnDriveRideList = [];
        for (var i = 0; i < this.driveRideList.length; i++) {
            if (this.driveRideList[i]["drive_ride_status"] != 'ongoing') {
                for (var j = 0; j < this.driveRideList[i].current_passengers_data.length; j++) {
                    if (this.driveRideList[i].current_passengers_data[j]["id_user"] == pID) {
                        returnDriveRideList.push(this.driveRideList[i]);
                    }
                }
            }
        }
        return returnDriveRideList;
    };
    DriveRidesService.prototype.addPassengerToDriveListIfThereIsFreeSpace = function (in_id_drive, in_id_pass) {
        for (var i = 0; i < this.driveRideList.length; i++) {
            if (this.driveRideList[i]["id_drive_rides"] == in_id_drive) {
                if (this.driveRideList[i]["current_passengers_number"] < this.driveRideList[i]["passengers_limit"]) {
                    for (var elem in this.driveRideList[i]["current_passengers_data"]) {
                        if (this.driveRideList[i]["current_passengers_data"][elem].id_user == in_id_pass) {
                            return "aleardy_exist";
                        }
                    }
                    this.driveRideList[i]["current_passengers_data"].push({ id_user: in_id_pass });
                    this.driveRideList[i]["current_passengers_number"] += 1;
                    return "success";
                }
                else {
                    return "full";
                }
            }
        }
    };
    DriveRidesService.prototype.isRequestAvailableForUniqueUser = function (in_id_drive, in_id_pass) {
        console.log("in_id_pass " + in_id_pass);
        console.log("in_id_drive " + in_id_drive);
        for (var i = 0; i < this.driveRideList.length; i++) {
            if (this.driveRideList[i]["id_drive_rides"] == in_id_drive) {
                if (this.driveRideList[i]["current_passengers_number"] < this.driveRideList[i]["passengers_limit"]) {
                    for (var elem in this.driveRideList[i]["current_passengers_data"]) {
                        if (this.driveRideList[i]["current_passengers_data"][elem].id_user == in_id_pass) {
                            return "aleardy_exist";
                        }
                    }
                    return "success";
                }
                else {
                    return "full";
                }
            }
        }
    };
    DriveRidesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], DriveRidesService);
    return DriveRidesService;
}());



/***/ }),

/***/ "./src/app/services/notification.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return NotificationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotificationsService = /** @class */ (function () {
    function NotificationsService() {
        this.notificationList = [
            {
                notification_id: 1,
                id_passanger: 1,
                id_driver: 2,
                type: 'request',
                approved: false,
                dismissed_by_driver: false,
                ride_id: 1,
            },
            {
                notification_id: 2,
                id_passanger: 5,
                id_driver: 2,
                type: 'request',
                approved: false,
                dismissed_by_driver: false,
                ride_id: 3,
            },
            {
                notification_id: 3,
                id_passanger: 1,
                id_driver: 2,
                type: 'ride_end',
                ride_end_rated_driver: false,
                ride_end_rated_passenger: false,
                ride_id: 1,
            }
        ];
    }
    // ------------------------------------------------------------------------------------
    NotificationsService.prototype.setNewRequest = function (in_id_pass, in_id_driver, ride_id) {
        var newID = this.notificationList[this.notificationList.length - 1].notification_id + 1;
        this.notificationList.push({
            ride_id: ride_id,
            notification_id: newID,
            id_passanger: in_id_pass,
            id_driver: in_id_driver,
            type: 'request',
            approved: false,
            dismissed_by_driver: false
        });
    };
    // ------------------------------------------------------------------------------------
    NotificationsService.prototype.setNewDriveEnd = function (in_id_pass, in_id_driver, ride_id) {
        var newID = this.notificationList[this.notificationList.length - 1].notification_id + 1;
        this.notificationList.push({
            ride_id: ride_id,
            notification_id: newID,
            id_passanger: in_id_pass,
            id_driver: in_id_driver,
            type: 'ride_end',
            ride_end_rated_driver: false,
            ride_end_rated_passenger: false,
        });
    };
    // ------------------------------------------------------------------------------------
    NotificationsService.prototype.setRequestApprovedTrue = function (notiID) {
        for (var i = 0; i < this.notificationList.length; i++) {
            if (this.notificationList[i]["notification_id"] == notiID) {
                this.notificationList[i]["approved"] = true;
            }
        }
    };
    // ------------------------------------------------------------------------------------
    NotificationsService.prototype.setDissmissedTrue = function (notiID) {
        for (var i = 0; i < this.notificationList.length; i++) {
            if (this.notificationList[i]["notification_id"] == notiID) {
                this.notificationList[i]["dismissed_by_driver"] = true;
            }
        }
    };
    // ------------------------------------------------------------------------------------
    NotificationsService.prototype.getNotificationsForSpecificUserRequest = function (in_id) {
        var returnList = [];
        for (var i = 0; i < this.notificationList.length; i++) {
            if (this.notificationList[i]["type"] == "request") {
                if (this.notificationList[i]["id_passanger"] == in_id) {
                    returnList.push(this.notificationList[i]);
                }
            }
        }
        return returnList;
    };
    NotificationsService.prototype.getNotificationsForSpecificDriverRequest = function (in_id) {
        var returnList = [];
        for (var i = 0; i < this.notificationList.length; i++) {
            if (this.notificationList[i]["type"] == "request") {
                if (this.notificationList[i]["id_driver"] == in_id) {
                    if (!this.notificationList[i]["dismissed_by_driver"] && !this.notificationList[i]["approved"])
                        returnList.push(this.notificationList[i]);
                }
            }
        }
        return returnList;
    };
    NotificationsService.prototype.getNotificationsForSpecificUserEndedRides = function (in_id) {
        var returnList = [];
        for (var i = 0; i < this.notificationList.length; i++) {
            if (this.notificationList[i]["type"] == "ride_end") {
                if (this.notificationList[i]["id_passanger"] == in_id && this.notificationList[i]["ride_end_rated_passenger"] == false) {
                    returnList.push(this.notificationList[i]);
                }
                else if (this.notificationList[i]["id_driver"] == in_id && this.notificationList[i]["ride_end_rated_driver"] == false) {
                    returnList.push(this.notificationList[i]);
                }
            }
        }
        return returnList;
    };
    NotificationsService.prototype.setRideEndRatedDriver = function (id) {
        for (var i = 0; i < this.notificationList.length; i++) {
            if (this.notificationList[i]["notification_id"] == id) {
                this.notificationList[i]["ride_end_rated_driver"] = true;
            }
        }
    };
    NotificationsService.prototype.setRideEndRatedPassenger = function (id) {
        for (var i = 0; i < this.notificationList.length; i++) {
            if (this.notificationList[i]["notification_id"] == id) {
                this.notificationList[i]["ride_end_rated_passenger"] = true;
            }
        }
    };
    NotificationsService.prototype.getPassengerIdFromNotification = function (in_id) {
        for (var i = 0; i < this.notificationList.length; i++) {
            if (this.notificationList[i]["notification_id"] == in_id) {
                return this.notificationList[i]["id_passanger"];
            }
        }
    };
    NotificationsService.prototype.getRideIDFromNotification = function (in_id) {
        for (var i = 0; i < this.notificationList.length; i++) {
            if (this.notificationList[i]["notification_id"] == in_id) {
                return this.notificationList[i]["ride_id"];
            }
        }
    };
    NotificationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], NotificationsService);
    return NotificationsService;
}());



/***/ }),

/***/ "./src/app/services/reputation.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/reputation.service.ts ***!
  \************************************************/
/*! exports provided: ReputationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReputationService", function() { return ReputationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReputationService = /** @class */ (function () {
    function ReputationService() {
        this.repList = [
            {
                id_reputation: 1,
                id_user: 1,
                rep_positive: 4,
                rep_negative: 0,
                rep_comment: [{
                        id_user_from: 2,
                        comment: "great ride!"
                    }, {
                        id_user_from: 3,
                        comment: "bad ride!"
                    }],
            },
            {
                id_reputation: 2,
                id_user: 2,
                rep_positive: 1,
                rep_negative: 2,
                rep_comment: [{
                        id_user_from: 1,
                        comment: "awesome ride!"
                    }, {
                        id_user_from: 3,
                        comment: "great!"
                    }],
            },
            {
                id_reputation: 3,
                id_user: 3,
                rep_positive: 0,
                rep_negative: 0,
                rep_comment: [],
            },
            {
                id_reputation: 4,
                id_user: 4,
                rep_positive: 0,
                rep_negative: 0,
                rep_comment: [],
            },
            {
                id_reputation: 5,
                id_user: 5,
                rep_positive: 0,
                rep_negative: 0,
                rep_comment: [],
            }
        ];
    }
    ReputationService.prototype.getReputationOfOneUser = function (id_user) {
        for (var i = 0; i < this.repList.length; i++) {
            if (this.repList[i]["id_user"] == id_user) {
                return this.repList[i];
            }
        }
    };
    ReputationService.prototype.initReputation = function (id_user) {
        var newID = this.repList[this.repList.length - 1].id_reputation + 1;
        this.repList.push({
            id_reputation: newID,
            id_user: id_user,
            rep_positive: 0,
            rep_negative: 0,
            rep_comment: [],
        });
    };
    ReputationService.prototype.addPositive = function (id) {
        for (var i = 0; i < this.repList.length; i++) {
            if (this.repList[i]["id_user"] == id) {
                this.repList[i]["rep_positive"] = this.repList[i]["rep_positive"] + 1;
            }
        }
    };
    ReputationService.prototype.setNegative = function (id) {
        for (var i = 0; i < this.repList.length; i++) {
            if (this.repList[i]["id_user"] == id) {
                this.repList[i]["rep_negative"] = this.repList[i]["rep_positive"] + 1;
            }
        }
    };
    ReputationService.prototype.setNewComment = function (id, id_from, comment) {
        for (var i = 0; i < this.repList.length; i++) {
            if (this.repList[i]["id_user"] == id) {
                this.repList[i]["rep_comment"].push({
                    id_user_from: id_from,
                    comment: comment
                });
            }
        }
    };
    ReputationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ReputationService);
    return ReputationService;
}());



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UsersService = /** @class */ (function () {
    function UsersService() {
        this.current_session = {
            id_user: -1,
            fname: "",
            lname: "",
            contact_email: "",
            contact_phone: "",
            contact_address: "",
            password: "",
            acc_type: 'passenger'
        };
        /// setting userList---------------------------------------------------------------------------------
        this.userList = [
            {
                id_user: 1,
                fname: "Jeremiah",
                lname: "Riley",
                contact_email: "jeremiah@example.com",
                contact_phone: "0123456789",
                contact_address: "2014 Public Works Drive Chattanooga, TN 37421",
                password: "secret",
                acc_type: 'passenger'
            },
            {
                id_user: 2,
                fname: "Pam",
                lname: "Smith",
                contact_email: "pam.pSmith@example.com",
                contact_phone: "0123456789",
                contact_address: "3246 Boring Lane Inverness, CA 94937",
                password: "secret",
                acc_type: 'driver'
            },
            {
                id_user: 3,
                fname: "John",
                lname: "Dusek",
                contact_email: "johnn@example.com",
                contact_phone: "0123456789",
                contact_address: "3762 Briarwood Drive Camden, NJ 08102",
                password: "secret",
                acc_type: 'passenger'
            },
            {
                id_user: 4,
                fname: "Jared",
                lname: "Leighton",
                contact_email: "jaredd@example.com",
                contact_phone: "0123456789",
                contact_address: "60 Pheasant Ridge Road Philadelphia, PA 19103",
                password: "secret",
                acc_type: 'driver'
            },
            {
                id_user: 5,
                fname: "Ingrid",
                lname: "Monsen",
                contact_email: "imonsen@example.com",
                contact_phone: "0123456789",
                contact_address: "Serenade Opus 108 9700 Volkegem",
                password: "secret",
                acc_type: 'passenger'
            },
        ];
    }
    /// end userList---------------------------------------------------------------------------------
    //---------------------------------- getuserList -------------------------------------------------
    UsersService.prototype.getuserList = function () {
        return this.userList;
    };
    //---------------------------------- getCurrenSession ----------------------------------------------
    UsersService.prototype.getCurrenSession = function () {
        return this.current_session;
    };
    UsersService.prototype.setCurrenSession = function (current_session_in) {
        this.current_session = current_session_in;
    };
    //---------------------------------- getProfileData -------------------------------------------------
    UsersService.prototype.getProfileData = function (id_user) {
        for (var i = 0; i < this.userList.length; i++) {
            if (this.userList[i]["id_user"] == id_user) {
                return this.userList[i];
            }
        }
        // TODO return reputation and comments as well
    };
    //---------------------------------- setUser --------------------------------------------------------
    UsersService.prototype.addUser = function (in_fname, in_lname, in_contact_email, in_contact_phone, in_contact_address, in_password, in_acc_type) {
        var newID = this.userList[this.userList.length - 1].id_user + 1;
        this.userList.push({
            id_user: newID,
            fname: in_fname,
            lname: in_lname,
            contact_email: in_contact_email,
            contact_phone: in_contact_phone,
            contact_address: in_contact_address,
            password: in_password,
            acc_type: in_acc_type == 'driver' ? 'driver' : 'passenger'
        }); // end push;
        return newID;
    }; //end setUser;
    //---------------------------------- doesEmailExists ------------------------------------------
    UsersService.prototype.doesEmailExists = function (email_in) {
        for (var i = 0; i < this.userList.length; i++) {
            if (this.userList[i]["contact_email"] == email_in) {
                return true;
            }
        }
        return false;
    };
    //---------------------------------- validateLogin ----------------------------------------------
    UsersService.prototype.validateLogin = function (email_in, pwd_in) {
        for (var i = 0; i < this.userList.length; i++) {
            if (this.userList[i]["contact_email"] == email_in && this.userList[i]["password"] == pwd_in) {
                this.setCurrenSession(this.userList[i]);
                return true;
            }
        }
        return false;
    }; // validateLogin end;
    //---------------------------------- updateUser ----------------------------------------------
    UsersService.prototype.updateUser = function (in_model) {
        for (var i = 0; i < this.userList.length; i++) {
            if (this.userList[i]["id_user"] == in_model.id_user) {
                this.userList[i] = in_model;
            }
        }
    };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dj\Desktop\KWA\carpol\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map