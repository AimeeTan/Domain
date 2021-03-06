"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var ngx_uploader_1 = require("ngx-uploader");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var page_svc_1 = require("../service/page.svc");
var system_config_component_1 = require("./system-config.component");
exports.routes = [
    { path: '', component: system_config_component_1.SystemConfigComponent, pathMatch: 'full' },
    { path: 'system/config', component: system_config_component_1.SystemConfigComponent, pathMatch: 'full' }
];
var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule.routes = exports.routes;
PagesModule = __decorate([
    core_1.NgModule({
        imports: [forms_1.FormsModule, forms_1.ReactiveFormsModule, common_1.CommonModule, router_1.RouterModule.forChild(exports.routes), ngx_uploader_1.NgUploaderModule, ngx_bootstrap_1.Ng2BootstrapModule, ngx_bootstrap_1.TabsModule.forRoot(), ngx_bootstrap_1.AlertModule.forRoot(),
            ngx_bootstrap_1.PaginationModule.forRoot(), ngx_bootstrap_1.ModalModule.forRoot()],
        declarations: [
            system_config_component_1.SystemConfigComponent
        ],
        providers: [
            page_svc_1.PageService
        ]
    })
], PagesModule);
exports.PagesModule = PagesModule;
//# sourceMappingURL=pages.module.js.map