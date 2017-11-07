"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var http_1 = require("@angular/http");
var angular2_datatable_1 = require("angular2-datatable");
var app_routing_1 = require("./app.routing");
var home_component_1 = require("./components/home.component");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var base_service_1 = require("./service/base.service");
var Appcomponent = require("./components/app.component");
var AppComponent = Appcomponent.AppComponent;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_2.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule, ng2_bs3_modal_1.Ng2Bs3ModalModule, app_routing_1.routing, angular2_datatable_1.DataTableModule],
        declarations: [AppComponent, home_component_1.HomeComponent],
        providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }, base_service_1.BaseService],
        bootstrap: [AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map