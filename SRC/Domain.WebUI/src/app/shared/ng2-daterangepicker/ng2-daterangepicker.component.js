"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng2_daterangepicker_1 = require("ng2-daterangepicker");
var moment = require("moment");
var Ng2DaterangepickerComponent = (function () {
    function Ng2DaterangepickerComponent(daterangepickerOptions) {
        this.daterangepickerOptions = daterangepickerOptions;
        this.onSelect = new core_1.EventEmitter();
        this.dateFormat = 'YYYY-MM-DD';
        this.initStartDate = moment().subtract(3, 'month');
        this.initEndDate = moment();
        this.daterangepickerOptions.settings = {
            locale: { format: this.dateFormat },
            alwaysShowCalendars: false,
            startDate: this.initStartDate,
            endDate: this.initEndDate,
            ranges: {
                'Today': [moment(), moment()],
                'Last Month': [moment().subtract(1, 'month'), moment()],
                'Last 3 Months': [moment().subtract(4, 'month'), moment()],
                'Last 6 Months': [moment().subtract(6, 'month'), moment()],
                'Last 12 Months': [moment().subtract(12, 'month'), moment()],
            }
        };
    }
    Ng2DaterangepickerComponent.prototype.ngOnInit = function () {
        this.startDate = this.initStartDate.format(this.dateFormat);
        this.endDate = this.initEndDate.format(this.dateFormat);
        this.criteria.startDate = this.initStartDate.format(this.dateFormat);
        this.criteria.endDate = this.initEndDate.add(1, 'days').format(this.dateFormat);
    };
    Ng2DaterangepickerComponent.prototype.selectedDate = function (value) {
        this.startDate = moment(value.start).format(this.dateFormat);
        this.endDate = moment(value.end).format(this.dateFormat);
        this.criteria.startDate = moment(value.start).format(this.dateFormat);
        this.criteria.endDate = moment(value.end).add(1, 'days').format(this.dateFormat);
        this.onSelect.emit([this.criteria.startDate, this.criteria.endDate]);
    };
    return Ng2DaterangepickerComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Ng2DaterangepickerComponent.prototype, "onSelect", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Ng2DaterangepickerComponent.prototype, "criteria", void 0);
Ng2DaterangepickerComponent = __decorate([
    core_1.Component({
        selector: 'app-ng2daterangepicker',
        templateUrl: './ng2-daterangepicker.component.html'
    }),
    __metadata("design:paramtypes", [ng2_daterangepicker_1.DaterangepickerConfig])
], Ng2DaterangepickerComponent);
exports.Ng2DaterangepickerComponent = Ng2DaterangepickerComponent;
//# sourceMappingURL=ng2-daterangepicker.component.js.map