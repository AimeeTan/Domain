"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var moment = require("moment");
var CriteriaDateRangeComponent = (function () {
    function CriteriaDateRangeComponent() {
        this.onSelect = new core_1.EventEmitter();
    }
    CriteriaDateRangeComponent.prototype.selectDateRange = function (range) {
        var fmt = 'YYYY-MM-DD';
        var today = moment().format(fmt);
        switch (range) {
            case 'today':
                this.endDate = moment().add(1, 'days').format(fmt);
                ;
                this.startDate = today;
                break;
            case 'yesterday':
                this.endDate = today;
                this.startDate = moment().add(-1, 'days').format(fmt);
                break;
            case 'last3days':
                this.endDate = today;
                this.startDate = moment().add(-3, 'days').format(fmt);
                break;
            case 'last7days':
                this.endDate = today;
                this.startDate = moment().add(-7, 'days').format(fmt);
                break;
            case 'last30days':
                this.endDate = today;
                this.startDate = moment().add(-30, 'days').format(fmt);
                break;
            case 'thismonth':
                this.startDate = moment().startOf('month').format(fmt);
                this.endDate = moment().endOf('month').format(fmt);
                break;
            case 'lastmonth':
                var lastMonth = moment().add(-1, 'months');
                this.startDate = lastMonth.startOf('month').format(fmt);
                this.endDate = lastMonth.endOf('month').format(fmt);
                break;
            default:
                this.startDate = null;
                this.endDate = null;
                break;
        }
        this.onSelect.emit([this.startDate, this.endDate]);
    };
    return CriteriaDateRangeComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CriteriaDateRangeComponent.prototype, "onSelect", void 0);
CriteriaDateRangeComponent = __decorate([
    core_1.Component({
        selector: 'criteria-daterange',
        template: "<select class=\"form-control width-200\" (change)=\"selectDateRange($event.target.value)\">\n\t\t\t\t\t\t\t\t\t<option value=\"all\">All Date</option>\n\t\t\t\t\t\t\t\t\t<option value=\"today\">Today</option>\n\t\t\t\t\t\t\t\t\t<option value=\"yesterday\">Yesterday</option>\n\t\t\t\t\t\t\t\t\t<option value=\"last7days\">Last 7 Days</option>\n\t\t\t\t\t\t\t\t\t<option value=\"last30days\">Last 30 Days</option>\n\t\t\t\t\t\t\t\t\t<option value=\"thismonth\">This Month</option>\n\t\t\t\t\t\t\t\t\t<option value=\"lastmonth\">Last Month</option>\n\t\t\t\t\t\t\t\t</select>"
    }),
    __metadata("design:paramtypes", [])
], CriteriaDateRangeComponent);
exports.CriteriaDateRangeComponent = CriteriaDateRangeComponent;
//# sourceMappingURL=criteria-daterange.component.js.map