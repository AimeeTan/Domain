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
    //onChangePage(page: any) {
    //	this.checked = false;
    //	this.criteria.pageIndex = page.page;
    //	this.criteria.pageSize = page.itemsPerPage;
    //	this.loadData();
    //}
    //onChangePageSize() {
    //	this.checked = false;
    //	this.criteria.pageIndex = 1;
    //	this.loadData();
    //}
    //onSelectRange(date: string[]) {
    //	if (date.length !== 2) return;
    //	[this.criteria.startDate, this.criteria.endDate] = date;
    //	this.loadData();
    //}
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
    //changeTenant(id: any) {
    //	this.criteria.tenantID = id;
    //	this.loadData(); 
    //}
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
//# sourceMappingURL=criteria.profile.js.map