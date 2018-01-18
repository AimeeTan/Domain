"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var DateTimeFormatPipe = DateTimeFormatPipe_1 = (function (_super) {
    __extends(DateTimeFormatPipe, _super);
    function DateTimeFormatPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateTimeFormatPipe.prototype.transform = function (value, args) {
        return _super.prototype.transform.call(this, value.toString(), DateTimeFormatPipe_1.DateTime_FMT);
    };
    return DateTimeFormatPipe;
}(common_1.DatePipe));
DateTimeFormatPipe.DateTime_FMT = 'MM-dd-yyyy HH:mm';
DateTimeFormatPipe = DateTimeFormatPipe_1 = __decorate([
    core_1.Pipe({
        name: 'dateTimeFormat'
    })
], DateTimeFormatPipe);
exports.DateTimeFormatPipe = DateTimeFormatPipe;
var DateTimeFormatPipe_1;
//# sourceMappingURL=pipe-datetimeformat.js.map