"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var datex_1 = require("./datex");
var DatexPipeModule = (function () {
    function DatexPipeModule() {
    }
    return DatexPipeModule;
}());
DatexPipeModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            datex_1.DatexPipe
        ],
        exports: [datex_1.DatexPipe]
    })
], DatexPipeModule);
exports.DatexPipeModule = DatexPipeModule;
//# sourceMappingURL=datex.module.js.map