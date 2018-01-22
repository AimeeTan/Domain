"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var criteria_profile_1 = require("../shared/criteria.profile");
var page_svc_1 = require("../service/page.svc");
var SystemConfigComponent = (function (_super) {
    __extends(SystemConfigComponent, _super);
    function SystemConfigComponent(pageSvc) {
        var _this = _super.call(this) || this;
        _this.pageSvc = pageSvc;
        return _this;
        //this.criteria = Object.assign({}, Criteria);
    }
    SystemConfigComponent.prototype.ngAfterViewInit = function () {
        this.loadData();
    };
    SystemConfigComponent.prototype.loadData = function () {
        var _this = this;
        this.pageSvc.getSearchEngine().subscribe(function (data) {
            _this.rows = data;
        }, function (error) {
            _this.error = error;
        });
    };
    SystemConfigComponent.prototype.checkSearchEngine = function (idx, event) {
        this.rows[idx].checked = !this.rows[idx].checked;
    };
    return SystemConfigComponent;
}(criteria_profile_1.PaginationComponent));
SystemConfigComponent = __decorate([
    core_1.Component({
        templateUrl: './system-config.component.html'
    }),
    __metadata("design:paramtypes", [page_svc_1.PageService])
], SystemConfigComponent);
exports.SystemConfigComponent = SystemConfigComponent;
//# sourceMappingURL=system-config.component.js.map