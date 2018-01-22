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
//# sourceMappingURL=base.svc.js.map