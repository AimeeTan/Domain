"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var BaseService = (function () {
    function BaseService() {
        this.header = new http_1.Headers({ "ajax": "" });
    }
    BaseService.prototype.redireactIdentity = function (response) {
        if (response.text() == "0") {
            location.reload();
        }
        return response;
    };
    BaseService.prototype.handleError = function (error) {
        console.log(error);
        if (error.status === 401 || error.status === 403) {
            location.reload();
            location.href = location.href;
        }
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    BaseService.prototype.getFilter = function (criteria) {
        var filter = new http_1.URLSearchParams();
        for (var property in criteria) {
            if (criteria.hasOwnProperty(property)) {
                if (!!criteria[property]) {
                    filter.set(property, criteria[property].toString());
                }
            }
        }
        return filter;
    };
    return BaseService;
}());
BaseService = __decorate([
    core_1.Injectable()
], BaseService);
exports.BaseService = BaseService;
var CustomBaseService = (function () {
    function CustomBaseService(http) {
        this.http = http;
        this.header = new http_1.Headers({ "ajax": "" });
    }
    CustomBaseService.prototype.redireactIdentity = function (response) {
        if (response.text() == "0") {
            location.reload();
        }
        return response;
    };
    CustomBaseService.prototype.handleError = function (error) {
        console.log(error);
        if (error.status === 401 || error.status === 403) {
            location.reload();
            location.href = location.href;
        }
        return Observable_1.Observable.throw(error.text() || 'Server error');
    };
    CustomBaseService.prototype.getFilter = function (criteria) {
        var filter = new http_1.URLSearchParams();
        for (var property in criteria) {
            if (criteria.hasOwnProperty(property)) {
                if (!!criteria[property]) {
                    filter.set(property, criteria[property].toString());
                }
            }
        }
        return filter;
    };
    CustomBaseService.prototype.httpGet = function (url, params, exec, erroExec) {
        var _this = this;
        var model;
        if (params) {
            model = { search: this.getFilter(params), headers: this.header };
        }
        else {
            model = Object.assign({}, params, { headers: this.header });
        }
        this.http.get(this.baseUrl + url, model)
            .map(function (response) { return _this.redireactIdentity(response).json(); })
            .catch(this.handleError)
            .subscribe(function (data) { return exec(data); }, function (erro) { return erroExec(erro); });
    };
    CustomBaseService.prototype.httpPost = function (url, params, exec, erroExec) {
        var _this = this;
        this.http.post(this.baseUrl + url, params, { headers: this.header })
            .map(function (response) { return _this.redireactIdentity(response).json(); })
            .catch(this.handleError)
            .subscribe(function (data) { return exec(data); }, function (erro) { return erroExec(erro); });
    };
    return CustomBaseService;
}());
CustomBaseService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CustomBaseService);
exports.CustomBaseService = CustomBaseService;
//# sourceMappingURL=base.svc.js.map