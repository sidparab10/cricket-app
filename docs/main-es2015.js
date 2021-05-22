(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/dashboard/dashboard.component */ "./src/app/components/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/login/login.component */ "./src/app/components/pages/login/login.component.ts");






const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: _components_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    },
    {
        path: 'login',
        component: _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./src/app/base.ts");
/* harmony import */ var _services_local_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/local-service.service */ "./src/app/services/local-service.service.ts");
/* harmony import */ var _services_configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/configuration.service */ "./src/app/services/configuration.service.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");






class AppComponent extends _base__WEBPACK_IMPORTED_MODULE_1__["BaseComp"] {
    constructor(locService, configService) {
        super(locService);
        this.locService = locService;
        this.configService = configService;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_local_service_service__WEBPACK_IMPORTED_MODULE_2__["LocalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home");
    } }, directives: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _services_local_service_service__WEBPACK_IMPORTED_MODULE_2__["LocalService"] }, { type: _services_configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/dashboard/dashboard.component */ "./src/app/components/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pages/login/login.component */ "./src/app/components/pages/login/login.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _components_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
        _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _components_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                    _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                    _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/base.ts":
/*!*************************!*\
  !*** ./src/app/base.ts ***!
  \*************************/
/*! exports provided: BaseComp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComp", function() { return BaseComp; });
class BaseComp {
    constructor(locService) {
        this.locService = locService;
        this.i18n = this.locService.getLocalText;
    }
    getFormValidationErr(key) {
        return this.i18n(key) + this.i18n('common.form-validation.postfix');
    }
}


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.model.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/header/header.component.model.ts ***!
  \*************************************************************/
/*! exports provided: HeaderComponentModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponentModel", function() { return HeaderComponentModel; });
class NavBtnClass {
}
class HeaderComponentModel {
    constructor() {
        this.navBtns = [];
    }
}


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/base */ "./src/app/base.ts");
/* harmony import */ var _header_component_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.model */ "./src/app/components/header/header.component.model.ts");
/* harmony import */ var src_app_services_local_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/local-service.service */ "./src/app/services/local-service.service.ts");
/* harmony import */ var src_app_services_configuration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/configuration.service */ "./src/app/services/configuration.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");










function HeaderComponent_button_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const btn_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](btn_r1.icon);
} }
function HeaderComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const btn_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onNavBtnClick(btn_r1.urlPath); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_button_6_ng_container_2_Template, 3, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const btn_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", btn_r1.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", btn_r1.icon && btn_r1.icon !== "none");
} }
class HeaderComponent extends src_app_base__WEBPACK_IMPORTED_MODULE_1__["BaseComp"] {
    constructor(locService, configService, router) {
        super(locService);
        this.locService = locService;
        this.configService = configService;
        this.router = router;
        this.headerConfig = new _header_component_model__WEBPACK_IMPORTED_MODULE_2__["HeaderComponentModel"]();
    }
    ngOnInit() {
        this.headerConfig = this.configService.getComponentConfig("header");
    }
    onNavBtnClick(path) {
        this.router.navigateByUrl(path);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_local_service_service__WEBPACK_IMPORTED_MODULE_3__["LocalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_configuration_service__WEBPACK_IMPORTED_MODULE_4__["ConfigurationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 2, consts: [[1, "header-container"], [1, "header-title-wrapper", "container-fluid", "row"], [1, "header-title-container", "col-8", "left-side"], [1, "header-buttons-container", "col-4", "right-side"], ["mat-button", "", "class", "header-button", 3, "click", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "header-button", 3, "click"], [4, "ngIf"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_button_6_Template, 3, 2, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.i18n("title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.headerConfig.navBtns);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]], styles: [".header-container[_ngcontent-%COMP%] {\n  border-bottom: 2px solid var(--secondary);\n  margin: 0;\n  padding-left: 0;\n  background-color: var(--primary);\n}\n.header-container[_ngcontent-%COMP%]   .header-title-wrapper[_ngcontent-%COMP%]   .header-title-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-left: 5px;\n}\n.header-container[_ngcontent-%COMP%]   .header-title-wrapper[_ngcontent-%COMP%]   .header-title-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 30px;\n  margin: 10px;\n  font-weight: 500;\n  color: var(--cyan);\n}\n.header-container[_ngcontent-%COMP%]   .header-title-wrapper[_ngcontent-%COMP%]   .header-buttons-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding-right: 0;\n  color: var(--cyan);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvRDpcXFByb2plY3RzXFxDcmlja2V0IEFwcFxcY3JpY2tldC1hcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUNDRjtBREVJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNBTjtBRE1NO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSlI7QURRSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ05OIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1jb250YWluZXIge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnkpO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcblxyXG4gIC5oZWFkZXItdGl0bGUtd3JhcHBlciB7XHJcbiAgICAuaGVhZGVyLXRpdGxlLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG5cclxuICAgICAgLy8gLmxvZ28tYm94IHtcclxuICAgICAgLy8gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLnBuZycpO1xyXG4gICAgICAvLyB9XHJcblxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY3lhbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyLWJ1dHRvbnMtY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgY29sb3I6IHZhcigtLWN5YW4pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuaGVhZGVyLWNvbnRhaW5lciB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnkpO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuaGVhZGVyLXRpdGxlLXdyYXBwZXIgLmhlYWRlci10aXRsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5oZWFkZXItdGl0bGUtd3JhcHBlciAuaGVhZGVyLXRpdGxlLWNvbnRhaW5lciBoMSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0tY3lhbik7XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuaGVhZGVyLXRpdGxlLXdyYXBwZXIgLmhlYWRlci1idXR0b25zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIGNvbG9yOiB2YXIoLS1jeWFuKTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: src_app_services_local_service_service__WEBPACK_IMPORTED_MODULE_3__["LocalService"] }, { type: src_app_services_configuration_service__WEBPACK_IMPORTED_MODULE_4__["ConfigurationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 6, vars: 0, consts: [[1, "app-body-container"], [1, "header-wrapper"], [1, "body-container"], [1, "body-wrapper"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".app-body-container[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.app-body-container[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: calc(100vh - 54px);\n}\n.app-body-container[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .body-wrapper[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #eee;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0Q6XFxQcm9qZWN0c1xcQ3JpY2tldCBBcHBcXGNyaWNrZXQtYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0FDQUo7QURHRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ0RKO0FER0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDRE4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtYm9keS1jb250YWluZXIge1xyXG4gIC5oZWFkZXItd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAuYm9keS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1NHB4KTtcclxuXHJcbiAgICAuYm9keS13cmFwcGVyIHtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5hcHAtYm9keS1jb250YWluZXIgLmhlYWRlci13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmFwcC1ib2R5LWNvbnRhaW5lciAuYm9keS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTRweCk7XG59XG4uYXBwLWJvZHktY29udGFpbmVyIC5ib2R5LWNvbnRhaW5lciAuYm9keS13cmFwcGVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/dashboard/dashboard.component.model.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/dashboard/dashboard.component.model.ts ***!
  \*************************************************************************/
/*! exports provided: DashboardModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModel", function() { return DashboardModel; });
class NavBtnsModel {
}
class StatisticsModel {
}
class DashboardModel {
    constructor() {
        this.navBtns = [];
        this.statistics = [];
    }
}


/***/ }),

/***/ "./src/app/components/pages/dashboard/dashboard.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/dashboard/dashboard.component.ts ***!
  \*******************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dashboard_component_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component.model */ "./src/app/components/pages/dashboard/dashboard.component.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_services_configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/configuration.service */ "./src/app/services/configuration.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");








function DashboardComponent_button_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const btn_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](btn_r2.icon);
} }
function DashboardComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_button_4_ng_container_2_Template, 3, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const btn_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", btn_r2.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", btn_r2.icon && btn_r2.icon !== "none");
} }
function DashboardComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stat_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("stat-box ", stat_r5.type, "-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stat_r5.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", stat_r5.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stat_r5.value);
} }
const url = "";
const CalByDstrict = "";
class DashboardComponent {
    constructor(http, configService) {
        this.http = http;
        this.configService = configService;
        this.dashboardConfig = new _dashboard_component_model__WEBPACK_IMPORTED_MODULE_1__["DashboardModel"]();
    }
    ngOnInit() {
        this.dashboardConfig = this.configService.getComponentConfig("dashboard");
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 7, vars: 2, consts: [[1, "dashboard-container"], [1, "banner-container"], [1, "banner-image"], [1, "navbar-container"], ["mat-stroked-button", "", "class", "header-button", 4, "ngFor", "ngForOf"], [1, "statistics-container"], [3, "class", 4, "ngFor", "ngForOf"], ["mat-stroked-button", "", 1, "header-button"], [4, "ngIf"], [1, "stat-label"], [1, "icon"], [1, "label"], [1, "stat-value"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_button_4_Template, 3, 2, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DashboardComponent_div_6_Template, 9, 6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dashboardConfig.navBtns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dashboardConfig.statistics);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], styles: [".dashboard-container[_ngcontent-%COMP%]   .banner-container[_ngcontent-%COMP%]   .banner-image[_ngcontent-%COMP%] {\n  height: 350px;\n  width: 100%;\n  background-image: url('banner.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: right;\n  display: flex;\n  align-items: flex-end;\n}\n.dashboard-container[_ngcontent-%COMP%]   .banner-container[_ngcontent-%COMP%]   .banner-image[_ngcontent-%COMP%]   .navbar-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  gap: 10px;\n  background: var(--primary);\n  padding: 5px 0;\n}\n.dashboard-container[_ngcontent-%COMP%]   .banner-container[_ngcontent-%COMP%]   .banner-image[_ngcontent-%COMP%]   .navbar-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: var(--gray);\n}\n.dashboard-container[_ngcontent-%COMP%]   .statistics-container[_ngcontent-%COMP%] {\n  display: grid;\n  width: 100%;\n  grid-template-columns: 40% 40%;\n  gap: 20px;\n  text-align: center;\n  justify-content: center;\n  margin: 30px 0;\n}\n.dashboard-container[_ngcontent-%COMP%]   .statistics-container[_ngcontent-%COMP%]   .stat-box[_ngcontent-%COMP%] {\n  border-bottom: 5px solid var(--secondary);\n  color: var(--secondary);\n  padding: 20px 10px;\n  display: flex;\n  justify-content: space-between;\n  font-size: 22px;\n  border-radius: 5px;\n  align-items: center;\n  max-width: 450px;\n  margin: auto;\n  width: 100%;\n  transition: 0.5s;\n  background-image: linear-gradient(to right, #007bff, #009996);\n  position: relative;\n}\n.dashboard-container[_ngcontent-%COMP%]   .statistics-container[_ngcontent-%COMP%]   .stat-box[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-image: linear-gradient(to bottom, #ff0044, #cc6900);\n  z-index: -1;\n  transition: opacity 0.5s linear;\n  opacity: 0;\n}\n.dashboard-container[_ngcontent-%COMP%]   .statistics-container[_ngcontent-%COMP%]   .stat-box[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.dashboard-container[_ngcontent-%COMP%]   .statistics-container[_ngcontent-%COMP%]   .stat-box[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9kYXNoYm9hcmQvRDpcXFByb2plY3RzXFxDcmlja2V0IEFwcFxcY3JpY2tldC1hcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBhZ2VzXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQ0ROO0FER007RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQ0RSO0FER1E7RUFDRSxrQkFBQTtBQ0RWO0FET0U7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDTEo7QURPSTtFQUNFLHlDQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkRBQUE7RUFHQSxrQkFBQTtBQ1BOO0FEU007RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsOERBQUE7RUFHQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxVQUFBO0FDVFI7QURZTTtFQUNFLFVBQUE7QUNWUjtBRG9CTTtFQUNFLGFBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7QUNsQlIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFzaGJvYXJkLWNvbnRhaW5lciB7XHJcbiAgLmJhbm5lci1jb250YWluZXIge1xyXG4gICAgLmJhbm5lci1pbWFnZSB7XHJcbiAgICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYW5uZXIuanBnJyk7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblxyXG4gICAgICAubmF2YmFyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDA7XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JheSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc3RhdGlzdGljcy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MCUgNDAlO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDMwcHggMDtcclxuXHJcbiAgICAuc3RhdC1ib3gge1xyXG4gICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdmFyKC0tc2Vjb25kYXJ5KTtcclxuICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWF4LXdpZHRoOiA0NTBweDtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LFxyXG4gICAgICAgICAgaHNsKDIxMSwgMTAwJSwgNTAlKSxcclxuICAgICAgICAgIGhzbCgxNzksIDEwMCUsIDMwJSkpO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLFxyXG4gICAgICAgICAgICBoc2woMzQ0LCAxMDAlLCA1MCUpLFxyXG4gICAgICAgICAgICBoc2woMzEsIDEwMCUsIDQwJSkpO1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBsaW5lYXI7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3Zlcjo6YmVmb3JlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgLy8gJjpob3ZlciB7XHJcbiAgICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcclxuICAgICAgLy8gICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICAvLyAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgIC8vIH1cclxuXHJcbiAgICAgIC5zdGF0LWxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGdhcDogNXB4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmRhc2hib2FyZC1jb250YWluZXIgLmJhbm5lci1jb250YWluZXIgLmJhbm5lci1pbWFnZSB7XG4gIGhlaWdodDogMzUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFubmVyLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5kYXNoYm9hcmQtY29udGFpbmVyIC5iYW5uZXItY29udGFpbmVyIC5iYW5uZXItaW1hZ2UgLm5hdmJhci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuLmRhc2hib2FyZC1jb250YWluZXIgLmJhbm5lci1jb250YWluZXIgLmJhbm5lci1pbWFnZSAubmF2YmFyLWNvbnRhaW5lciBidXR0b24ge1xuICBjb2xvcjogdmFyKC0tZ3JheSk7XG59XG4uZGFzaGJvYXJkLWNvbnRhaW5lciAuc3RhdGlzdGljcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICB3aWR0aDogMTAwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MCUgNDAlO1xuICBnYXA6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMzBweCAwO1xufVxuLmRhc2hib2FyZC1jb250YWluZXIgLnN0YXRpc3RpY3MtY29udGFpbmVyIC5zdGF0LWJveCB7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnkpO1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IDQ1MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDdiZmYsICMwMDk5OTYpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGFzaGJvYXJkLWNvbnRhaW5lciAuc3RhdGlzdGljcy1jb250YWluZXIgLnN0YXQtYm94OjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmMDA0NCwgI2NjNjkwMCk7XG4gIHotaW5kZXg6IC0xO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgbGluZWFyO1xuICBvcGFjaXR5OiAwO1xufVxuLmRhc2hib2FyZC1jb250YWluZXIgLnN0YXRpc3RpY3MtY29udGFpbmVyIC5zdGF0LWJveDpob3Zlcjo6YmVmb3JlIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5kYXNoYm9hcmQtY29udGFpbmVyIC5zdGF0aXN0aWNzLWNvbnRhaW5lciAuc3RhdC1ib3ggLnN0YXQtbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: src_app_services_configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/login/login.component.model.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/login/login.component.model.ts ***!
  \*****************************************************************/
/*! exports provided: LoginComponentModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponentModel", function() { return LoginComponentModel; });
class FormInputModel {
}
class LoginComponentModel {
    constructor() {
        this.formInputs = [];
    }
}


/***/ }),

/***/ "./src/app/components/pages/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/base */ "./src/app/base.ts");
/* harmony import */ var _login_component_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.model */ "./src/app/components/pages/login/login.component.model.ts");
/* harmony import */ var src_app_services_local_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/local-service.service */ "./src/app/services/local-service.service.ts");
/* harmony import */ var src_app_services_configuration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/configuration.service */ "./src/app/services/configuration.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm2015/input.js");










function LoginComponent_ng_container_7_ng_container_1_mat_form_field_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const input_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](input_r2.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("autocomplete", input_r2.autocomplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("type", input_r2.inputType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", input_r2.placeholder);
} }
function LoginComponent_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_ng_container_7_ng_container_1_mat_form_field_1_Template, 4, 4, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const input_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", input_r2.formType === "both" || input_r2.formType === ctx_r3.formType);
} }
function LoginComponent_ng_container_7_ng_container_2_ng_container_2_mat_form_field_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subInput_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subInput_r9.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("autocomplete", subInput_r9.autocomplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("type", subInput_r9.inputType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", subInput_r9.placeholder);
} }
function LoginComponent_ng_container_7_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_ng_container_7_ng_container_2_ng_container_2_mat_form_field_1_Template, 4, 4, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const subInput_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subInput_r9.formType === "both" || subInput_r9.formType === ctx_r8.formType);
} }
function LoginComponent_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_ng_container_7_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const input_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", input_r2.inputs);
} }
function LoginComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_ng_container_7_ng_container_1_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_ng_container_7_ng_container_2_Template, 3, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const input_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", input_r2.type === "input");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", input_r2.type === "multi");
} }
function LoginComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.i18n("loginRegister.formBtns.forgetBtn"));
} }
class LoginComponent extends src_app_base__WEBPACK_IMPORTED_MODULE_1__["BaseComp"] {
    constructor(locService, configService) {
        super(locService);
        this.locService = locService;
        this.configService = configService;
        this.formType = 'login';
        this.loginConfig = new _login_component_model__WEBPACK_IMPORTED_MODULE_2__["LoginComponentModel"]();
    }
    ngOnInit() {
        this.loginConfig = this.configService.getComponentConfig("login");
    }
    isLoginForm() {
        return this.formType === 'login';
    }
    toggleForm() {
        this.formType = this.formType === 'register' ? 'login' : 'register';
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_local_service_service__WEBPACK_IMPORTED_MODULE_3__["LocalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_configuration_service__WEBPACK_IMPORTED_MODULE_4__["ConfigurationService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 16, vars: 6, consts: [[1, "login-container", "container-fluid"], [1, "login-register-form", "col-4"], [1, "form-container"], [4, "ngFor", "ngForOf"], [1, "submit-btn-container"], ["color", "primary", "mat-stroked-button", ""], ["class", "forget-password-container", 4, "ngIf"], [1, "form-route-link"], [3, "click"], [4, "ngIf"], ["matInput", "", 3, "autocomplete", "type", "placeholder"], [1, "input-row"], [1, "forget-password-container"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginComponent_ng_container_7_Template, 3, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginComponent_div_11_Template, 3, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_14_listener() { return ctx.toggleForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isLoginForm() ? ctx.i18n("loginRegister.formTitle.login") : ctx.i18n("loginRegister.formTitle.register"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.loginConfig.formInputs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.isLoginForm() ? ctx.i18n("loginRegister.formBtns.login") : ctx.i18n("loginRegister.formBtns.register"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoginForm());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.isLoginForm() ? ctx.i18n("loginRegister.formRouting.registerForm") : ctx.i18n("loginRegister.formRouting.loginForm"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.isLoginForm() ? ctx.i18n("loginRegister.formRouting.registerFormLink") : ctx.i18n("loginRegister.formRouting.loginFormLink"), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"]], styles: [".login-container[_ngcontent-%COMP%]   .login-register-form[_ngcontent-%COMP%] {\n  margin: auto;\n  max-width: 500px;\n}\n.login-container[_ngcontent-%COMP%]   .login-register-form[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #f5f5f5;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  box-shadow: 0px 0px 10px var(--gray);\n}\n.login-container[_ngcontent-%COMP%]   .login-register-form[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--primary);\n}\n.login-container[_ngcontent-%COMP%]   .login-register-form[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%] {\n  width: auto;\n  text-align: center;\n  padding: 0 10px;\n  color: var(--primary);\n}\n.login-container[_ngcontent-%COMP%]   .login-register-form[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n.login-container[_ngcontent-%COMP%]   .login-register-form[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.login-container[_ngcontent-%COMP%]   .login-register-form[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .submit-btn-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  color: var(--primary);\n}\n.login-container[_ngcontent-%COMP%]   .login-register-form[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .submit-btn-container[_ngcontent-%COMP%]   .forget-password-container[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.login-container[_ngcontent-%COMP%]   .login-register-form[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .submit-btn-container[_ngcontent-%COMP%]   .forget-password-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--gray);\n  cursor: pointer;\n  text-decoration: underline;\n}\n.login-container[_ngcontent-%COMP%]   .login-register-form[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .submit-btn-container[_ngcontent-%COMP%]   .forget-password-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--purple);\n}\n.login-container[_ngcontent-%COMP%]   .form-route-link[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  text-align: right;\n}\n.login-container[_ngcontent-%COMP%]   .form-route-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary);\n  cursor: pointer;\n  text-decoration: underline;\n}\n.login-container[_ngcontent-%COMP%]   .form-route-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--purple);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9sb2dpbi9EOlxcUHJvamVjdHNcXENyaWNrZXQgQXBwXFxjcmlja2V0LWFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xccGFnZXNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0FKO0FERUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7QUNBTjtBREVNO0VBQ0Usb0NBQUE7QUNBUjtBREVRO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDQVY7QURJTTtFQUNFLGFBQUE7QUNGUjtBREtNO0VBQ0UsV0FBQTtBQ0hSO0FET1E7RUFDRSxXQUFBO0VBQ0EscUJBQUE7QUNMVjtBRFFRO0VBQ0UsZ0JBQUE7QUNOVjtBRFFVO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUNOWjtBRFFZO0VBQ0Usb0JBQUE7QUNOZDtBRGNFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ1pKO0FEY0k7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQ1pOO0FEY007RUFDRSxvQkFBQTtBQ1pSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250YWluZXIge1xyXG4gIC5sb2dpbi1yZWdpc3Rlci1mb3JtIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcblxyXG4gICAgLmZvcm0tY29udGFpbmVyIHtcclxuICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggdmFyKC0tZ3JheSk7XHJcblxyXG4gICAgICBmaWVsZHNldCB7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xyXG5cclxuICAgICAgICBsZWdlbmQge1xyXG4gICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuaW5wdXQtcm93IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3VibWl0LWJ0bi1jb250YWluZXIge1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb3JnZXQtcGFzc3dvcmQtY29udGFpbmVyIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZm9ybS1yb3V0ZS1saW5rIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuXHJcbiAgICBhIHtcclxuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXB1cnBsZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmxvZ2luLWNvbnRhaW5lciAubG9naW4tcmVnaXN0ZXItZm9ybSB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiA1MDBweDtcbn1cbi5sb2dpbi1jb250YWluZXIgLmxvZ2luLXJlZ2lzdGVyLWZvcm0gLmZvcm0tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggdmFyKC0tZ3JheSk7XG59XG4ubG9naW4tY29udGFpbmVyIC5sb2dpbi1yZWdpc3Rlci1mb3JtIC5mb3JtLWNvbnRhaW5lciBmaWVsZHNldCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcbn1cbi5sb2dpbi1jb250YWluZXIgLmxvZ2luLXJlZ2lzdGVyLWZvcm0gLmZvcm0tY29udGFpbmVyIGZpZWxkc2V0IGxlZ2VuZCB7XG4gIHdpZHRoOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuLmxvZ2luLWNvbnRhaW5lciAubG9naW4tcmVnaXN0ZXItZm9ybSAuZm9ybS1jb250YWluZXIgLmlucHV0LXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubG9naW4tY29udGFpbmVyIC5sb2dpbi1yZWdpc3Rlci1mb3JtIC5mb3JtLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cbi5sb2dpbi1jb250YWluZXIgLmxvZ2luLXJlZ2lzdGVyLWZvcm0gLmZvcm0tY29udGFpbmVyIC5zdWJtaXQtYnRuLWNvbnRhaW5lciBidXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuLmxvZ2luLWNvbnRhaW5lciAubG9naW4tcmVnaXN0ZXItZm9ybSAuZm9ybS1jb250YWluZXIgLnN1Ym1pdC1idG4tY29udGFpbmVyIC5mb3JnZXQtcGFzc3dvcmQtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5sb2dpbi1jb250YWluZXIgLmxvZ2luLXJlZ2lzdGVyLWZvcm0gLmZvcm0tY29udGFpbmVyIC5zdWJtaXQtYnRuLWNvbnRhaW5lciAuZm9yZ2V0LXBhc3N3b3JkLWNvbnRhaW5lciBhIHtcbiAgY29sb3I6IHZhcigtLWdyYXkpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmxvZ2luLWNvbnRhaW5lciAubG9naW4tcmVnaXN0ZXItZm9ybSAuZm9ybS1jb250YWluZXIgLnN1Ym1pdC1idG4tY29udGFpbmVyIC5mb3JnZXQtcGFzc3dvcmQtY29udGFpbmVyIGE6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbn1cbi5sb2dpbi1jb250YWluZXIgLmZvcm0tcm91dGUtbGluayB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmxvZ2luLWNvbnRhaW5lciAuZm9ybS1yb3V0ZS1saW5rIGEge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4ubG9naW4tY29udGFpbmVyIC5mb3JtLXJvdXRlLWxpbmsgYTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: src_app_services_local_service_service__WEBPACK_IMPORTED_MODULE_3__["LocalService"] }, { type: src_app_services_configuration_service__WEBPACK_IMPORTED_MODULE_4__["ConfigurationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_configuration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/configuration.service */ "./src/app/services/configuration.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");






function SidebarComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "asdakjsd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "asdakjsd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "asdakjsd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "asdakjsd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "asdakjsd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "hide-sidebar": a0 }; };
class SidebarComponent {
    constructor(configService) {
        this.configService = configService;
        this.sidebarConfig = {};
        this.showSidebar = false;
    }
    ngOnInit() {
        this.sidebarConfig = this.configService.getComponentConfig("sidebar");
    }
    onSidebarBtn() {
        this.showSidebar = !this.showSidebar;
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_configuration_service__WEBPACK_IMPORTED_MODULE_1__["ConfigurationService"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 6, vars: 4, consts: [[1, "sidebar-container", 3, "ngClass"], [1, "sidebar-btn-container"], ["mat-icon-button", "", 3, "click"], ["class", "siderbar-wrapper", 4, "ngIf"], [1, "siderbar-wrapper"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_2_listener() { return ctx.onSidebarBtn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_div_5_Template, 11, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, !ctx.showSidebar));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSidebar);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".sidebar-container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-right: 1px solid var(--primary);\n  height: 100%;\n  width: 250px;\n  transition: 1s ease;\n  background: var(--primary);\n}\n.sidebar-container.hide-sidebar[_ngcontent-%COMP%] {\n  width: 40px;\n  transition: 1s ease;\n}\n.sidebar-container.hide-sidebar[_ngcontent-%COMP%]   .siderbar-wrapper[_ngcontent-%COMP%] {\n  transition: 1ms ease;\n  transition-delay: 3s;\n  display: none;\n}\n.sidebar-container[_ngcontent-%COMP%]   .sidebar-btn-container[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.sidebar-container[_ngcontent-%COMP%]   .siderbar-wrapper[_ngcontent-%COMP%] {\n  transition: 1ms ease;\n  transition-delay: 3s;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL0Q6XFxQcm9qZWN0c1xcQ3JpY2tldCBBcHBcXGNyaWNrZXQtYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzaWRlYmFyXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0Esc0NBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUNDRjtBRENFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FDQ0o7QURDSTtFQUNFLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FDQ047QURHRTtFQUNFLGlCQUFBO0FDREo7QURJRTtFQUNFLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyLWNvbnRhaW5lciB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIHRyYW5zaXRpb246IDFzIGVhc2U7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XHJcbiAgXHJcbiAgJi5oaWRlLXNpZGViYXIge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAxcyBlYXNlO1xyXG4gICAgXHJcbiAgICAuc2lkZXJiYXItd3JhcHBlciAge1xyXG4gICAgICB0cmFuc2l0aW9uOiAxbXMgZWFzZTtcclxuICAgICAgdHJhbnNpdGlvbi1kZWxheTogM3M7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2lkZWJhci1idG4tY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICAuc2lkZXJiYXItd3JhcHBlciB7XHJcbiAgICB0cmFuc2l0aW9uOiAxbXMgZWFzZTtcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDNzO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxufVxyXG4iLCIuc2lkZWJhci1jb250YWluZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMjUwcHg7XG4gIHRyYW5zaXRpb246IDFzIGVhc2U7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xufVxuLnNpZGViYXItY29udGFpbmVyLmhpZGUtc2lkZWJhciB7XG4gIHdpZHRoOiA0MHB4O1xuICB0cmFuc2l0aW9uOiAxcyBlYXNlO1xufVxuLnNpZGViYXItY29udGFpbmVyLmhpZGUtc2lkZWJhciAuc2lkZXJiYXItd3JhcHBlciB7XG4gIHRyYW5zaXRpb246IDFtcyBlYXNlO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAzcztcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zaWRlYmFyLWNvbnRhaW5lciAuc2lkZWJhci1idG4tY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uc2lkZWJhci1jb250YWluZXIgLnNpZGVyYmFyLXdyYXBwZXIge1xuICB0cmFuc2l0aW9uOiAxbXMgZWFzZTtcbiAgdHJhbnNpdGlvbi1kZWxheTogM3M7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.scss']
            }]
    }], function () { return [{ type: src_app_services_configuration_service__WEBPACK_IMPORTED_MODULE_1__["ConfigurationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/fesm2015/clipboard.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/fesm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/fesm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/fesm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/fesm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/fesm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/fesm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/fesm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/fesm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/fesm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/fesm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/fesm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/fesm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/fesm2015/tree.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/fesm2015/overlay.js");













































class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
        ],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]], exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
                ],
                imports: [
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/configuration.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/configuration.service.ts ***!
  \***************************************************/
/*! exports provided: ConfigurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationService", function() { return ConfigurationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _assets_configuration_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../assets/configuration.json */ "./src/assets/configuration.json");
var _assets_configuration_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../assets/configuration.json */ "./src/assets/configuration.json", 1);



class ConfigurationService {
    constructor() {
        this.configData = _assets_configuration_json__WEBPACK_IMPORTED_MODULE_1__;
    }
    getComponentConfig(compName) {
        var _a;
        return (_a = this.configData) === null || _a === void 0 ? void 0 : _a[compName];
    }
}
ConfigurationService.ɵfac = function ConfigurationService_Factory(t) { return new (t || ConfigurationService)(); };
ConfigurationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfigurationService, factory: ConfigurationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigurationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/local-service.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/local-service.service.ts ***!
  \***************************************************/
/*! exports provided: LocalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalService", function() { return LocalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var _assets_localization_en_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/localization-en.json */ "./src/assets/localization-en.json");
var _assets_localization_en_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/localization-en.json */ "./src/assets/localization-en.json", 1);




class LocalService {
    constructor() {
        i18next__WEBPACK_IMPORTED_MODULE_1__["default"].init({
            lng: 'en',
            debug: true,
            resources: {
                en: {
                    translation: _assets_localization_en_json__WEBPACK_IMPORTED_MODULE_2__,
                },
            },
        }, function (err, t) { });
    }
    getLocalText(key) {
        return key !== undefined ? i18next__WEBPACK_IMPORTED_MODULE_1__["default"].t(key) : '';
    }
}
LocalService.ɵfac = function LocalService_Factory(t) { return new (t || LocalService)(); };
LocalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalService, factory: LocalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/assets/configuration.json":
/*!***************************************!*\
  !*** ./src/assets/configuration.json ***!
  \***************************************/
/*! exports provided: common, header, login, dashboard, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"common\":{},\"header\":{\"navBtns\":[{\"type\":\"home\",\"label\":\"Home\",\"urlPath\":\"home\"},{\"type\":\"login\",\"label\":\"Login\",\"icon\":\"account_circle\",\"urlPath\":\"login\"}]},\"login\":{\"formInputs\":[{\"type\":\"multi\",\"inputs\":[{\"formType\":\"register\",\"type\":\"input\",\"inputType\":\"text\",\"label\":\"First Name\",\"placeholder\":\"First Name\",\"clsName\":\"firstName\",\"autocomplete\":\"off\"},{\"formType\":\"register\",\"type\":\"input\",\"inputType\":\"text\",\"label\":\"Last Name\",\"placeholder\":\"Last Name\",\"clsName\":\"lastName\",\"autocomplete\":\"off\"}]},{\"formType\":\"both\",\"type\":\"input\",\"inputType\":\"text\",\"label\":\"Username\",\"placeholder\":\"Username\",\"clsName\":\"username\",\"autocomplete\":\"off\"},{\"formType\":\"register\",\"type\":\"input\",\"inputType\":\"email\",\"label\":\"Email\",\"placeholder\":\"Email\",\"clsName\":\"email\",\"autocomplete\":\"off\"},{\"formType\":\"both\",\"type\":\"input\",\"inputType\":\"password\",\"label\":\"Password\",\"placeholder\":\"Password\",\"clsName\":\"password\",\"autocomplete\":\"off\"},{\"formType\":\"register\",\"type\":\"input\",\"inputType\":\"password\",\"label\":\"Confirm Password\",\"placeholder\":\"Confirm Password\",\"clsName\":\"confirmPassword\",\"autocomplete\":\"off\"}]},\"dashboard\":{\"statistics\":[{\"type\":\"course-completion\",\"label\":\"Course Completed\",\"value\":10,\"icon\":\"library_books\"},{\"type\":\"test-completion\",\"label\":\"Test Completed\",\"value\":4,\"icon\":\"assignment_turned_in\"},{\"type\":\"points-earned\",\"label\":\"Points Earned\",\"value\":2,\"icon\":\"grade\"},{\"type\":\"badges-earned\",\"label\":\"Badges Earned\",\"value\":8,\"icon\":\"favorite\"}],\"navBtns\":[{\"label\":\"Courses\"},{\"label\":\"Reports\"},{\"label\":\"Practice\"},{\"label\":\"Account\"}]}}");

/***/ }),

/***/ "./src/assets/localization-en.json":
/*!*****************************************!*\
  !*** ./src/assets/localization-en.json ***!
  \*****************************************/
/*! exports provided: title, common, loginRegister, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Dream 11\",\"common\":{},\"loginRegister\":{\"formRouting\":{\"registerForm\":\"Don't have an account?\",\"registerFormLink\":\"Sign up\",\"loginForm\":\"Already have an account?\",\"loginFormLink\":\"Sign in\"},\"formTitle\":{\"login\":\"Login\",\"register\":\"Register\"},\"formBtns\":{\"login\":\"Login\",\"register\":\"Register\",\"forgetBtn\":\"Forget Password?\"}}}");

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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\Cricket App\cricket-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map