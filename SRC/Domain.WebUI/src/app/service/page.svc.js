"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var base_svc_1 = require("./base/base.svc");
exports.apiPageUrl = {
    searchEngine: 'searchEngine/list',
};
var PageService = (function (_super) {
    __extends(PageService, _super);
    function PageService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.baseUrl = 'api/page/';
        return _this;
    }
    return PageService;
}(base_svc_1.CustomBaseService));
PageService = __decorate([
    core_1.Injectable()
], PageService);
exports.PageService = PageService;
//# sourceMappingURL=page.svc.js.map