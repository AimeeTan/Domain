"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var layout_component_1 = require("./layout.component");
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '', component: layout_component_1.Layout, children: []
    }
];
exports.ROUTES = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=layout.routes.js.map