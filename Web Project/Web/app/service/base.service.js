"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
/**
 * Базовый сервис (CRUD)
 */
var BaseService = (function () {
    /**
     * .ctor
     * @param _http
     */
    function BaseService(_http) {
        this._http = _http;
    }
    /**
     * Полусить данные
     * @param url
     */
    BaseService.prototype.get = function () {
        if (this.url == null) {
            console.log('Url is empty.');
            return null;
        }
        return this._http.get(this.url)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log("All: " + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    /**
     * Отправить дпанные на сохраенние
     * @param url
     * @param model
     */
    BaseService.prototype.post = function (model) {
        if (this.url == null) {
            console.log('Url is empty.');
            return null;
        }
        var body = JSON.stringify(model);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this.url, body, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    /**
     * Обновить данные
     * @param url
     * @param id
     * @param model
     */
    BaseService.prototype.put = function (id, model) {
        if (this.url == null) {
            console.log('Url is empty.');
            return null;
        }
        var body = JSON.stringify(model);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.put(this.url + id, body, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    /**
     * Удалить объект по ид
     * @param url
     * @param id
     */
    BaseService.prototype.delete = function (id) {
        if (this.url == null) {
            console.log('Url is empty.');
            return null;
        }
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.delete(this.url + id, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    /**
     * Обработать ошибку
     * @param error
     */
    BaseService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return BaseService;
}());
BaseService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], BaseService);
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map