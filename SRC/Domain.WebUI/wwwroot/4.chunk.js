webpackJsonpac__name_([4],{

/***/ 886:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(6);
__webpack_require__(352);
__webpack_require__(351);
var base_svc_1 = __webpack_require__(885);
exports.apiPageUrl = {
    systemConfig: 'system/config',
};
var PageService = (function (_super) {
    __extends(PageService, _super);
    function PageService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.baseUrl = 'api/parcel/exception/';
        return _this;
    }
    return PageService;
}(base_svc_1.CustomBaseService));
PageService = __decorate([
    core_1.Injectable()
], PageService);
exports.PageService = PageService;


/***/ }),

/***/ 912:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(6);
var common_1 = __webpack_require__(54);
var forms_1 = __webpack_require__(95);
var router_1 = __webpack_require__(96);
var ngx_uploader_1 = __webpack_require__(97);
var ngx_bootstrap_1 = __webpack_require__(829);
var core_2 = __webpack_require__(137);
var page_svc_1 = __webpack_require__(886);
var system_config_component_1 = __webpack_require__(913);
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
        imports: [forms_1.FormsModule, forms_1.ReactiveFormsModule, common_1.CommonModule, router_1.RouterModule.forChild(exports.routes), core_2.TranslateModule, ngx_uploader_1.NgUploaderModule,
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


/***/ }),

/***/ 913:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(6);
var criteria_profile_1 = __webpack_require__(914);
var page_svc_1 = __webpack_require__(886);
var SystemConfigComponent = (function (_super) {
    __extends(SystemConfigComponent, _super);
    function SystemConfigComponent(pageSvc) {
        var _this = _super.call(this) || this;
        _this.pageSvc = pageSvc;
        _this.criteria = Object.assign({}, criteria_profile_1.Criteria);
        return _this;
    }
    SystemConfigComponent.prototype.ngAfterViewInit = function () {
        this.loadData();
    };
    SystemConfigComponent.prototype.loadData = function () {
        //this.pageSvc.httpGet(apiPageUrl.systemConfig, this.criteria, data => {
        //	this.rows = data.value.data;
        //	this.criteria.total = data.value.availableCnt;
        //}, error => {
        //	this.error = error;
        //});
    };
    return SystemConfigComponent;
}(criteria_profile_1.PaginationComponent));
SystemConfigComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(915)
    }),
    __metadata("design:paramtypes", [page_svc_1.PageService])
], SystemConfigComponent);
exports.SystemConfigComponent = SystemConfigComponent;


/***/ }),

/***/ 914:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//公用Criteria
var Criteria;
exports.Criteria = Criteria;
this.Criteria = { pageIndex: 1, pageSize: 50, total: 0 };
var PaginationComponent = (function () {
    function PaginationComponent() {
        this.criteria = Criteria;
        this.checked = false;
        this.rows = [];
        this.lastChecked = 0;
    }
    PaginationComponent.prototype.loadData = function () { };
    PaginationComponent.prototype.isChecked = function () {
        return this.rows.filter(function (x) { return x.checked; }).length > 0 ? true : false;
    };
    PaginationComponent.prototype.onChangePage = function (page) {
        this.checked = false;
        this.criteria.pageIndex = page.page;
        this.criteria.pageSize = page.itemsPerPage;
        this.loadData();
    };
    PaginationComponent.prototype.onChangePageSize = function () {
        this.checked = false;
        this.criteria.pageIndex = 1;
        this.loadData();
    };
    PaginationComponent.prototype.onSelectRange = function (date) {
        if (date.length !== 2)
            return;
        this.criteria.startDate = date[0], this.criteria.endDate = date[1];
        this.loadData();
    };
    PaginationComponent.prototype.toggleCheck = function () {
        var _this = this;
        this.checked = !this.checked;
        this.rows.forEach(function (x) { return x.checked = _this.checked; });
    };
    PaginationComponent.prototype.singleCheck = function (idx, event) {
        this.rows[idx].checked = !this.rows[idx].checked;
        event.stopPropagation();
    };
    PaginationComponent.prototype.radioCheck = function (idx, event, callback) {
        this.rows.forEach(function (x) { return x.checked = false; });
        this.rows[idx].checked = !this.rows[idx].checked;
        if (callback)
            callback();
        event.stopPropagation();
    };
    PaginationComponent.prototype.lineCheck = function (idx, event, callback) {
        if (event.ctrlKey || event.shiftKey) {
            this.cleanSelection();
        }
        if (event.ctrlKey === true) {
            this.rows[idx].checked = !this.rows[idx].checked;
        }
        else if (event.shiftKey === true) {
            for (var i = Math.min(idx, this.lastChecked); i <= Math.max(idx, this.lastChecked); i++) {
                this.rows[i].checked = true;
            }
        }
        else {
            this.rows.forEach(function (x) { return x.checked = false; });
            this.rows[idx].checked = true;
        }
        this.lastChecked = idx;
        if (callback)
            callback();
    };
    PaginationComponent.prototype.cleanSelection = function () {
        if (window.getSelection) {
            if (window.getSelection().empty) {
                window.getSelection().empty();
            }
            else if (window.getSelection().removeAllRanges) {
                window.getSelection().removeAllRanges();
            }
        }
    };
    PaginationComponent.prototype.changeSource = function (soucre) {
        this.criteria.source = soucre;
        this.loadData();
    };
    PaginationComponent.prototype.changePort = function (port) {
        this.criteria.poa = port;
        this.loadData();
    };
    PaginationComponent.prototype.changeHub = function (hubID) {
        this.criteria.rcvHubID = hubID;
        this.loadData();
    };
    PaginationComponent.prototype.changeRoute = function (routeID) {
        this.criteria.routeID = routeID;
        this.loadData();
    };
    PaginationComponent.prototype.changeBroker = function (brokerID) {
        this.criteria.brokerID = brokerID;
        this.loadData();
    };
    PaginationComponent.prototype.changeMftGroup = function (mftGroup) {
        this.criteria.mftGroup = mftGroup;
        this.loadData();
    };
    PaginationComponent.prototype.changeTenant = function (id) {
        this.criteria.tenantID = id;
        this.loadData();
    };
    PaginationComponent.prototype.checkedIds = function () {
        var ids = [];
        this.rows.filter(function (x) { return x.checked; }).forEach(function (x) { return ids.push(x.id); });
        if (ids.length < 1) {
            return [];
        }
        else {
            return ids;
        }
    };
    PaginationComponent.prototype.allIds = function () {
        var ids = [];
        this.rows.forEach(function (x) { return ids.push(x.id); });
        if (ids.length < 1) {
            return [];
        }
        else {
            return ids;
        }
    };
    PaginationComponent.prototype.getRowIds = function () {
        var listIds = new Array();
        this.rows.filter(function (x) { return x.checked; }).forEach(function (item) {
            return listIds.push(item.id);
        });
        return listIds;
    };
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;


/***/ }),

/***/ 915:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <meta charset=\"utf-8\" />\r\n    <title></title>\r\n</head>\r\n<body>\r\n\t44444444\r\n</body>\r\n</html>"

/***/ })

});
//# sourceMappingURL=4.map