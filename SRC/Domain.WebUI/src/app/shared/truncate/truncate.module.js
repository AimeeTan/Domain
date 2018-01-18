"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ng2_date_time_picker_1 = require("ng2-date-time-picker");
var truncate_1 = require("./truncate");
var TruncateModule = TruncateModule_1 = (function () {
    function TruncateModule() {
    }
    TruncateModule.forRoot = function () {
        return {
            ngModule: TruncateModule_1,
            providers: []
        };
    };
    return TruncateModule;
}());
TruncateModule = TruncateModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule, ng2_date_time_picker_1.DateTimePickerModule, forms_1.FormsModule
        ],
        declarations: [
            truncate_1.TruncatePipe
        ],
        exports: [truncate_1.TruncatePipe]
    })
], TruncateModule);
exports.TruncateModule = TruncateModule;
var TruncateModule_1;
//# sourceMappingURL=truncate.module.js.map