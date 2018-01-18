"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Angular 2 decorators and services
 */
var core_1 = require("@angular/core");
var app_service_1 = require("./app.service");
var core_2 = require("@ngx-translate/core");
/*
 * App Component
 * Top Level Component
 */
var App = (function () {
    function App(appState, translate) {
        this.appState = appState;
        this.translate = translate;
        translate.addLangs(['en', 'zh-cn']);
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('zh-cn');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('zh-cn');
    }
    App.prototype.ngOnInit = function () {
        console.log('Initial App State', this.appState.state);
    };
    return App;
}());
App = __decorate([
    core_1.Component({
        selector: 'app',
        encapsulation: core_1.ViewEncapsulation.None,
        styleUrls: [
            './scss/application.scss'
        ],
        template: "<router-outlet></router-outlet>"
    }),
    __metadata("design:paramtypes", [app_service_1.AppState,
        core_2.TranslateService])
], App);
exports.App = App;
//# sourceMappingURL=app.component.js.map