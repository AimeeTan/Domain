"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var base_svc_1 = require("./base/base.svc");
exports.environment = {
    production: false
};
var AuthService = (function (_super) {
    __extends(AuthService, _super);
    function AuthService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.url = 'api/Auth/';
        return _this;
    }
    AuthService.prototype.getName = function () {
        return this.http.get(this.url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    return AuthService;
}(base_svc_1.BaseService));
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.svc.js.map