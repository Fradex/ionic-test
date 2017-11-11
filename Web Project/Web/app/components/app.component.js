"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
/**
 * Компонент для навигации
 */
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "user-app",
        template: " <nav class='navbar navbar-inverse'>\n                       <div class='container-fluid'>\n                         <ul class='nav navbar-nav'>\n                           <li><a [routerLink]=\"['home']\"> \u0413\u043B\u0430\u0432\u043D\u0430\u044F </a></li>\n                      </ul>\n                      </div>\n                 </nav>  \n                   \n              <div class='container'>\n                <router-outlet></router-outlet>\n              </div>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map