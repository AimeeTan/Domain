"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var ng2_daterangepicker_component_1 = require("./ng2-daterangepicker.component");
var ng2_daterangepicker_1 = require("ng2-daterangepicker");
var datex_module_1 = require("../datex/datex.module");
var Ng2DaterangepickerModule = Ng2DaterangepickerModule_1 = (function () {
    function Ng2DaterangepickerModule() {
    }
    Ng2DaterangepickerModule.forRoot = function () {
        return {
            ngModule: Ng2DaterangepickerModule_1,
            providers: []
        };
    };
    return Ng2DaterangepickerModule;
}());
Ng2DaterangepickerModule = Ng2DaterangepickerModule_1 = __decorate([
    core_1.NgModule({
        declarations: [
            ng2_daterangepicker_component_1.Ng2DaterangepickerComponent
        ],
        imports: [
            common_1.CommonModule, ng2_daterangepicker_1.Daterangepicker, datex_module_1.DatexPipeModule
        ],
        exports: [ng2_daterangepicker_component_1.Ng2DaterangepickerComponent]
    })
], Ng2DaterangepickerModule);
exports.Ng2DaterangepickerModule = Ng2DaterangepickerModule;
var Ng2DaterangepickerModule_1;
//# sourceMappingURL=ng2-daterangepicker.module.js.map