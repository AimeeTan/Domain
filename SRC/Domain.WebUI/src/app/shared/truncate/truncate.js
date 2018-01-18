"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TruncatePipe = (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, args) {
        var limit = parseInt(args);
        var trail = " <label class=\"btn btn-xs btn-danger\">...</label>";
        return value.length > limit ? value.substring(0, limit) + trail : value;
    };
    return TruncatePipe;
}());
TruncatePipe = __decorate([
    core_1.Pipe({
        name: 'truncate'
    })
], TruncatePipe);
exports.TruncatePipe = TruncatePipe;
//# sourceMappingURL=truncate.js.map