webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__components_home_home_component__["a" /* HomeComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<!-- Navigation -->\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" href=\"#\"><img class=\"nav-logo\" src=\"" + __webpack_require__("./src/assets/icons/NEUROSETS-LOGO.png") + "\">Neurosets</a>\n        </div>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\"\n            aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n            <ul class=\"navbar-nav ml-auto\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\" (click)=\"open(content)\"><i class=\"fas fa-info-circle fa-lg\"></i></a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\"><i class=\"fab fa-github fa-lg\"></i></a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<!-- Content -->\n<router-outlet></router-outlet>\n\n<!-- Footer -->\n<footer class=\"py-4 bg-dark\">\n    <div class=\"container\">\n        <p class=\"m-0 text-center text-white\">Developed by alonsocoding 2018</p>\n    </div>\n    <!-- /.container -->\n</footer>\n\n<!-- Info Modal --> \n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Information</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <img class=\"info-logo\" src=\"" + __webpack_require__("./src/assets/icons/NEUROSETS-LOGO.png") + "\">\n      <h4>Neurosets v1.0.0</h4>\n      <p>Neural Networks multi-platform application</p>\n      <p>Developed by alonsocoding 2018</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-dark\" (click)=\"c('Close click')\">Close</button>\n    </div>\n  </ng-template>\n\n<!-- / close modal -->";

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\n  -webkit-app-region: drag; }\n\n.nav-logo {\n  height: 40px;\n  width: 40px; }\n\n.info-logo {\n  height: 100px;\n  width: 100px; }\n\n.modal-body {\n  -ms-flex-line-pack: center;\n      align-content: center;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_electron_service__ = __webpack_require__("./src/app/providers/electron.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(electronService, translate, modalService) {
        this.electronService = electronService;
        this.translate = translate;
        this.modalService = modalService;
        translate.setDefaultLang('en');
        if (electronService.isElectron()) {
            console.log('Mode electron');
            // Check if electron is correctly injected (see externals in webpack.config.js)
            console.log('c', electronService.ipcRenderer);
            // Check if nodeJs childProcess is correctly injected (see externals in webpack.config.js)
            console.log('c', electronService.childProcess);
        }
        else {
            console.log('Mode web');
        }
    }
    AppComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    AppComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_electron_service__["a" /* ElectronService */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_zone_js_dist_zone_mix__ = __webpack_require__("./node_modules/zone.js/dist/zone-mix.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_zone_js_dist_zone_mix___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_zone_js_dist_zone_mix__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reflect_metadata__ = __webpack_require__("./node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reflect_metadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reflect_metadata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polyfills__ = __webpack_require__("./src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_http_loader__ = __webpack_require__("./node_modules/@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_electron_service__ = __webpack_require__("./src/app/providers/electron.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_directives_webview_directive__ = __webpack_require__("./src/app/directives/webview.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// NG Translate








// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_9__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11_app_directives_webview_directive__["a" /* WebviewDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_14__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_15_ng2_smart_table__["a" /* Ng2SmartTableModule */],
                __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (HttpLoaderFactory),
                        deps: [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__providers_electron_service__["a" /* ElectronService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Page Content -->\n<div class=\"container\">\n\n  <div class=\"row\">\n\n    <div class=\"col-md-4 col-lg-4\">\n      <h1 class=\"my-4\">Datasets</h1>\n      <div class=\"list-group\">\n        <a href=\"#\" class=\"list-group-item active\">Dataset 1</a>\n        <a href=\"#\" class=\"list-group-item\">Dataset 2</a>\n        <a href=\"#\" class=\"list-group-item\">Dataset 3</a>\n      </div>\n      <br>\n      <button class=\"btn btn-primary btn-plus btn-right\" (click)=\"open(content)\"><i class=\"fas fa-plus\"></i></button>\n    </div>\n    <!-- /.col-lg-3 -->\n\n    <div class=\"col-md-8 col-lg-8\">\n      <div class=\"my-4\">\n        <ngb-tabset type=\"pills\">\n          <!-- Data Content -->\n          <ngb-tab title=\"Data\">\n            <ng-template ngbTabContent>\n              <hr>\n              <form>\n                <div class=\"form-group\">\n                  <label for=\"exampleInputEmail1\">Title</label>\n                  <input name=\"title\" [(ngModel)]=\"title\" type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter the title\">\n                  <small id=\"emailHelp\" class=\"form-text text-muted\">Use the title to match the result.</small>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"exampleSelect1\">Input 1</label>\n                  <select name=\"input1\" [(ngModel)]=\"input1\" class=\"form-control\" id=\"exampleSelect1\">\n                    <option>0</option>\n                    <option>1</option>\n                  </select>\n                  <small id=\"emailHelp\" class=\"form-text text-muted\">The first entry of the data.</small>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"exampleSelect1\">Input 2</label>\n                  <select name=\"input2\" [(ngModel)]=\"input2\" class=\"form-control\" id=\"exampleSelect1\">\n                    <option>0</option>\n                    <option>1</option>\n                  </select>\n                  <small id=\"emailHelp\" class=\"form-text text-muted\">The second entry of the data.</small>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"exampleSelect1\">Output</label>\n                    <select name=\"output\" [(ngModel)]=\"output\" class=\"form-control\" id=\"exampleSelect1\">\n                      <option>0</option>\n                      <option>1</option>\n                    </select>\n                    <small id=\"emailHelp\" class=\"form-text text-muted\">The result of the data.</small>\n                  </div>\n                <hr>\n                <button type=\"submit\" class=\"btn btn-success btn-right\" (click)=\"addData()\">Save Data</button>\n              </form>\n              <br>\n              <!--/end of content-->\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab title=\"Train\">\n            <ng-template ngbTabContent>\n              <!-- Train Content -->\n              <hr>\n              <ng2-smart-table [settings]=\"settings\" [source]=\"data\"></ng2-smart-table>\n              <hr>\n                <button type=\"submit\" class=\"btn btn-success btn-right\" (click)=\"trainData()\">Train Data</button>\n                <br>\n              <!--/end of content-->\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab title=\"Test\">\n            <ng-template ngbTabContent>\n              <!-- Test Content -->\n              <hr>\n              <form>\n              <div class=\"form-group\">\n                  <label for=\"exampleSelect1\">Input 1</label>\n                  <select name=\"input1\" [(ngModel)]=\"input1\" class=\"form-control\" id=\"exampleSelect1\">\n                    <option>0</option>\n                    <option>1</option>\n                  </select>\n                  <small id=\"emailHelp\" class=\"form-text text-muted\">The first entry of the data.</small>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"exampleSelect1\">Input 2</label>\n                  <select name=\"input2\" [(ngModel)]=\"input2\" class=\"form-control\" id=\"exampleSelect1\">\n                    <option>0</option>\n                    <option>1</option>\n                  </select>\n                  <small id=\"emailHelp\" class=\"form-text text-muted\">The second entry of the data.</small>\n                </div>\n                <hr>\n                <button type=\"submit\" class=\"btn btn-success btn-right\" (click)=\"showResult()\">Show the result</button><br><br>\n              </form>\n              <form>\n                  <div class=\"form-group\">\n                      <label for=\"exampleInputEmail1\">Result</label>\n                      <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"{{output}}\" disabled>\n                      <small id=\"emailHelp\" class=\"form-text text-muted\">This information is based in the train data.</small>\n                    </div>\n              </form>\n              <!-- /end of content-->\n            </ng-template>\n          </ngb-tab>\n        </ngb-tabset>\n\n      </div>\n      <!-- /.card -->\n    </div>\n    <!-- /.col-lg-9 -->\n\n  </div>\n\n</div>\n<!-- /.container -->\n\n<!-- Info Modal --> \n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">New Dataset</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n        <form>\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail1\">Name</label>\n              <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter the title\">\n              <small id=\"emailHelp\" class=\"form-text text-muted\">The name defined for the dataset.</small>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Description</label>\n                <textarea type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter the description\"></textarea>\n                <small id=\"emailHelp\" class=\"form-text text-muted\">Some description about the dataset.</small>\n              </div>\n            </form>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"c('Close click')\">Save Dataset</button>\n      <button type=\"button\" class=\"btn btn-dark\" (click)=\"c('Close click')\">Close</button>\n    </div>\n  </ng-template>\n\n<!-- / close modal -->";

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.container {\n  height: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  /* pour anciens Chrome et Safari */\n  background-size: cover;\n  /* version standardisée */ }\n  .container .title {\n    color: white;\n    margin: 0;\n    padding: 50px 20px; }\n\n.btn-plus {\n  border-radius: 50%; }\n\n.btn-right {\n  float: right; }\n\n:host /deep/ * {\n  font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif; }\n\n:host /deep/ table {\n  color: #606c71; }\n  :host /deep/ table tr td, :host /deep/ table tr th {\n    border: 1px solid #e9ebec; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var brain = __webpack_require__("./node_modules/brain/lib/brain.js");

var HomeComponent = /** @class */ (function () {
    function HomeComponent(modalService) {
        this.modalService = modalService;
        // Settings to datatable
        this.settings = {
            actions: {
                position: 'right',
                add: false,
                edit: false,
            },
            delete: {
                deleteButtonContent: '<span class="fas fa-trash-alt"></span>',
                confirmDelete: true,
            },
            columns: {
                title: {
                    title: 'Title'
                },
                input1: {
                    title: 'Input 1'
                },
                input2: {
                    title: 'Input 2'
                },
                output: {
                    title: 'Output'
                }
            }
        };
        // Data to set datatable
        this.data = [];
        this.title = "";
        this.input1 = 0;
        this.input2 = 0;
        this.output = 0;
        this.trained = false;
        this.net = new brain.NeuralNetwork();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.addData = function () {
        if (this.title == "") {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()('Data incomplete', 'Your data is incomplete', 'error');
        }
        else {
            this.data.push({
                title: this.title,
                input1: this.input1,
                input2: this.input2,
                output: this.output
            });
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()('Data saved', 'Your data is ready to train', 'success');
        }
    };
    HomeComponent.prototype.trainData = function () {
        var training = [];
        for (var i = 0; i < this.data.length; i++) {
            training.push({
                input: [this.data[i].input1,
                    this.data[i].input2],
                output: [this.data[i].output]
            });
        }
        this.net.train(training);
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()('Data trained', 'Your data is ready to test', 'success');
        this.trained = true;
    };
    HomeComponent.prototype.showResult = function () {
        if (!this.trained) {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()('Data not trained', 'Your data needs to be trained', 'error');
        }
        else {
            this.output = Math.round(this.net.run([this.input1, this.input2]));
        }
    };
    HomeComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, {
            size: 'lg'
        }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    HomeComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/directives/webview.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebviewDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebviewDirective = /** @class */ (function () {
    function WebviewDirective() {
    }
    WebviewDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: 'webview'
        }),
        __metadata("design:paramtypes", [])
    ], WebviewDirective);
    return WebviewDirective;
}());



/***/ }),

/***/ "./src/app/providers/electron.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectronService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElectronService = /** @class */ (function () {
    function ElectronService() {
        this.isElectron = function () {
            return window && window.process && window.process.type;
        };
        // Conditional imports
        if (this.isElectron()) {
            this.ipcRenderer = window.require('electron').ipcRenderer;
            this.childProcess = window.require('child_process');
        }
    }
    ElectronService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ElectronService);
    return ElectronService;
}());



/***/ }),

/***/ "./src/assets/icons/NEUROSETS-LOGO.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/assets/icons/NEUROSETS-LOGO.png";

/***/ }),

/***/ "./src/environments/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// This file contains development variables. (When you work in DEV MODE)
// This file is use by webpack. Please don't rename it and don't move it to another directory.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_environments__ = __webpack_require__("./src/environments/index.ts");




if (__WEBPACK_IMPORTED_MODULE_3_environments__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
    .bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */], {
    preserveWhitespaces: false
})
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__ = __webpack_require__("./node_modules/core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__ = __webpack_require__("./node_modules/core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone_mix__ = __webpack_require__("./node_modules/zone.js/dist/zone-mix.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone_mix___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone_mix__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/


/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ "crypto":
/***/ (function(module, exports) {

if(typeof require('crypto') === 'undefined') {var e = new Error("Cannot find module \"require('crypto')\""); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = require('crypto');

/***/ }),

/***/ "events":
/***/ (function(module, exports) {

if(typeof require('events') === 'undefined') {var e = new Error("Cannot find module \"require('events')\""); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = require('events');

/***/ }),

/***/ "fs":
/***/ (function(module, exports) {

if(typeof require('fs') === 'undefined') {var e = new Error("Cannot find module \"require('fs')\""); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = require('fs');

/***/ }),

/***/ "stream":
/***/ (function(module, exports) {

module.exports = require('stream');

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
//# sourceMappingURL=main.bundle.js.map