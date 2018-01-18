"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_config_1 = require("../../app.config");
var Navbar = (function () {
    function Navbar(el, config) {
        this.toggleSidebarEvent = new core_1.EventEmitter();
        this.toggleLanguageEvent = new core_1.EventEmitter();
        this.$el = jQuery(el.nativeElement);
        this.config = config.getConfig();
    }
    Navbar.prototype.toggleSidebar = function (state) {
        this.toggleSidebarEvent.emit(state);
    };
    Navbar.prototype.ngOnInit = function () {
        this.$el.find('.input-group-addon + .form-control').on('blur focus', function (e) {
            jQuery(this).parents('.input-group')[e.type === 'focus' ? 'addClass' : 'removeClass']('focus');
        });
    };
    Navbar.prototype.toggleLanguage = function (lang) {
        this.toggleLanguageEvent.emit(lang);
    };
    Navbar.prototype.logout = function () {
        window.location.href = "/Account/Logout";
    };
    return Navbar;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Navbar.prototype, "toggleSidebarEvent", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Navbar.prototype, "toggleLanguageEvent", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Navbar.prototype, "myTenant", void 0);
Navbar = __decorate([
    core_1.Component({
        selector: '[navbar]',
        templateUrl: './navbar.template.html'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, app_config_1.AppConfig])
], Navbar);
exports.Navbar = Navbar;
//# sourceMappingURL=navbar.component.js.map