"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CriteriaDateTimePickerComponent = (function () {
    function CriteriaDateTimePickerComponent() {
        this.onChange = new core_1.EventEmitter();
    }
    CriteriaDateTimePickerComponent.prototype.setMoment = function (moment) {
        this.onChange.emit(moment);
    };
    return CriteriaDateTimePickerComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CriteriaDateTimePickerComponent.prototype, "onChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CriteriaDateTimePickerComponent.prototype, "moment", void 0);
CriteriaDateTimePickerComponent = __decorate([
    core_1.Component({
        templateUrl: './criteria-datetimepicker.component.html',
        selector: 'criteria-datetimepicker',
    }),
    __metadata("design:paramtypes", [])
], CriteriaDateTimePickerComponent);
exports.CriteriaDateTimePickerComponent = CriteriaDateTimePickerComponent;
//# sourceMappingURL=criteria-datetimepicker.component.js.map