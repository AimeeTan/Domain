"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var base_svc_1 = require("./base/base.svc");
var PageService = (function (_super) {
    __extends(PageService, _super);
    function PageService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.url = 'api/pages/';
        return _this;
    }
    PageService.prototype.getSearchEngine = function () {
        return this.http.get(this.url + 'searchEngine/list')
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    return PageService;
}(base_svc_1.BaseService));
PageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PageService);
exports.PageService = PageService;
//# sourceMappingURL=page.svc.js.map