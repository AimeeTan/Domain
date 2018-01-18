"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ng2_date_time_picker_1 = require("ng2-date-time-picker");
var criteria_datetimepicker_component_1 = require("./criteria-datetimepicker.component");
var CriteriaDateTimePickerModule = CriteriaDateTimePickerModule_1 = (function () {
    function CriteriaDateTimePickerModule() {
    }
    CriteriaDateTimePickerModule.forRoot = function () {
        return {
            ngModule: CriteriaDateTimePickerModule_1,
            providers: []
        };
    };
    return CriteriaDateTimePickerModule;
}());
CriteriaDateTimePickerModule = CriteriaDateTimePickerModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule, ng2_date_time_picker_1.DateTimePickerModule, forms_1.FormsModule
        ],
        declarations: [
            criteria_datetimepicker_component_1.CriteriaDateTimePickerComponent
        ],
        exports: [criteria_datetimepicker_component_1.CriteriaDateTimePickerComponent]
    })
], CriteriaDateTimePickerModule);
exports.CriteriaDateTimePickerModule = CriteriaDateTimePickerModule;
var CriteriaDateTimePickerModule_1;
//# sourceMappingURL=criteria-datetimepicker.module.js.map