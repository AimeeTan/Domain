"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jquery-slimscroll");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var core_2 = require("@ngx-translate/core");
var layout_routes_1 = require("./layout.routes");
var layout_component_1 = require("./layout.component");
var sidebar_component_1 = require("./sidebar/sidebar.component");
var navbar_component_1 = require("./navbar/navbar.component");
var search_pipe_1 = require("./pipes/search.pipe");
var notifications_load_directive_1 = require("./notifications/notifications-load.directive");
var notifications_component_1 = require("./notifications/notifications.component");
var auth_svc_1 = require("../service/auth.svc");
var LayoutModule = (function () {
    function LayoutModule() {
    }
    return LayoutModule;
}());
LayoutModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            ngx_bootstrap_1.TooltipModule.forRoot(),
            layout_routes_1.ROUTES,
            forms_1.FormsModule,
            core_2.TranslateModule
        ],
        declarations: [
            layout_component_1.Layout,
            sidebar_component_1.Sidebar,
            navbar_component_1.Navbar,
            search_pipe_1.SearchPipe,
            notifications_component_1.Notifications,
            notifications_load_directive_1.NotificationLoad
        ],
        providers: [auth_svc_1.AuthService]
    })
], LayoutModule);
exports.LayoutModule = LayoutModule;
//# sourceMappingURL=layout.module.js.map