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
        _this.criteria = Object.assign({}, criteria_profile_1.Criteria);
        return _this;
    }
    SystemConfigComponent.prototype.ngAfterViewInit = function () {
        this.loadData();
    };
    SystemConfigComponent.prototype.loadData = function () {
        console.log("ss");
        //this.pageSvc.getSearchEngine().subscribe(data => {
        //	this.rows = data.value.data;
        //	this.criteria.total = data.value.availableCnt;
        //	console.log(this.rows);
        //}, (error) => {
        //	this.error = error;
        //});
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