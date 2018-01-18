"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var criteria_daterange_component_1 = require("./criteria-daterange.component");
var CriteriaDateRangeModule = CriteriaDateRangeModule_1 = (function () {
    function CriteriaDateRangeModule() {
    }
    CriteriaDateRangeModule.forRoot = function () {
        return {
            ngModule: CriteriaDateRangeModule_1,
            providers: []
        };
    };
    return CriteriaDateRangeModule;
}());
CriteriaDateRangeModule = CriteriaDateRangeModule_1 = __decorate([
    core_1.NgModule({
        declarations: [
            criteria_daterange_component_1.CriteriaDateRangeComponent
        ],
        imports: [
            common_1.CommonModule
        ],
        exports: [criteria_daterange_component_1.CriteriaDateRangeComponent]
    })
], CriteriaDateRangeModule);
exports.CriteriaDateRangeModule = CriteriaDateRangeModule;
var CriteriaDateRangeModule_1;
//# sourceMappingURL=criteria-daterange.module.js.map