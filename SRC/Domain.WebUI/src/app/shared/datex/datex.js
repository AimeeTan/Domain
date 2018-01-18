"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var moment = require("moment");
var DatexPipe = (function () {
    function DatexPipe() {
    }
    DatexPipe.prototype.transform = function (value, format) {
        if (format === void 0) { format = ""; }
        if (!value || value === "")
            return "";
        return moment(value).format(format);
    };
    return DatexPipe;
}());
DatexPipe = __decorate([
    core_1.Pipe({
        name: 'datex'
    })
], DatexPipe);
exports.DatexPipe = DatexPipe;
//# sourceMappingURL=datex.js.map