"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_config_1 = require("../app.config");
var auth_svc_1 = require("../service/auth.svc");
var animations_1 = require("./animations");
var core_2 = require("@ngx-translate/core");
var Layout = (function () {
    function Layout(config, el, router, renderer, ngZone, translate, authService) {
        var _this = this;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.translate = translate;
        this.authService = authService;
        this.chatOpened = false;
        // router��ת�����������
        this.routerState = true;
        this.routerStateCode = 'active';
        this.el = el;
        this.config = config.getConfig();
        this.configFn = config;
        this.router = router;
        this.authService.getName().subscribe(function (data) {
            _this.userName = data.user;
        });
    }
    Layout.prototype.toggleSidebarListener = function (state) {
        var toggleNavigation = state === 'static'
            ? this.toggleNavigationState
            : this.toggleNavigationCollapseState;
        toggleNavigation.apply(this);
        localStorage.setItem('nav-static', this.config.state['nav-static']);
    };
    Layout.prototype.toggleLanguageListener = function (lang) {
        if (this.translate.getLangs().find(function (x) { return x === lang; }).length > 0) {
            this.translate.use(lang).subscribe(function (x) { return console.log("Language:" + lang); });
        }
    };
    Layout.prototype.toggleNavigationState = function () {
        this.config.state['nav-static'] = !this.config.state['nav-static'];
        if (!this.config.state['nav-static']) {
            this.collapseNavigation();
        }
    };
    Layout.prototype.expandNavigation = function () {
        // this method only makes sense for non-static navigation state
        if (this.isNavigationStatic()
            && (this.configFn.isScreen('lg') || this.configFn.isScreen('xl'))) {
            return;
        }
        jQuery('layout').removeClass('nav-collapsed');
        this.$sidebar.find('.active .active').closest('.collapse').collapse('show')
            .siblings('[data-toggle=collapse]').removeClass('collapsed');
    };
    Layout.prototype.collapseNavigation = function () {
        // this method only makes sense for non-static navigation state
        if (this.isNavigationStatic()
            && (this.configFn.isScreen('lg') || this.configFn.isScreen('xl'))) {
            return;
        }
        jQuery('layout').addClass('nav-collapsed');
        this.$sidebar.find('.collapse.in').collapse('hide')
            .siblings('[data-toggle=collapse]').addClass('collapsed');
    };
    /**
     * Check and set navigation collapse according to screen size and navigation state
     */
    Layout.prototype.checkNavigationState = function () {
        var _this = this;
        if (this.isNavigationStatic()) {
            if (this.configFn.isScreen('sm')
                || this.configFn.isScreen('xs') || this.configFn.isScreen('md')) {
                this.collapseNavigation();
            }
        }
        else {
            if (this.configFn.isScreen('lg') || this.configFn.isScreen('xl')) {
                setTimeout(function () {
                    _this.collapseNavigation();
                }, this.config.settings.navCollapseTimeout);
            }
            else {
                this.collapseNavigation();
            }
        }
    };
    Layout.prototype.isNavigationStatic = function () {
        return this.config.state['nav-static'] === false;
    };
    Layout.prototype.toggleNavigationCollapseState = function () {
        if (jQuery('layout').is('.nav-collapsed')) {
            this.expandNavigation();
        }
        else {
            this.collapseNavigation();
        }
    };
    Layout.prototype._sidebarMouseEnter = function () {
        if (this.configFn.isScreen('lg') || this.configFn.isScreen('xl')) {
            this.expandNavigation();
        }
    };
    Layout.prototype._sidebarMouseLeave = function () {
        if (this.configFn.isScreen('lg') || this.configFn.isScreen('xl')) {
            this.collapseNavigation();
        }
    };
    Layout.prototype.enableSwipeCollapsing = function () {
        var swipe = new Hammer(document.getElementById('content-wrap'));
        var d = this;
        swipe.on('swipeleft', function () {
            setTimeout(function () {
                if (d.configFn.isScreen('md')) {
                    return;
                }
                if (!jQuery('layout').is('.nav-collapsed')) {
                    d.collapseNavigation();
                }
            });
        });
        swipe.on('swiperight', function () {
            if (d.configFn.isScreen('md')) {
                return;
            }
            if (jQuery('layout').is('.nav-collapsed')) {
                d.expandNavigation();
            }
        });
    };
    Layout.prototype.collapseNavIfSmallScreen = function () {
        if (this.configFn.isScreen('xs')
            || this.configFn.isScreen('sm') || this.configFn.isScreen('md')) {
            this.collapseNavigation();
        }
    };
    Layout.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('nav-static') === 'true') {
            this.config.state['nav-static'] = true;
        }
        var $el = jQuery(this.el.nativeElement);
        this.$sidebar = $el.find('[sidebar]');
        $el.find('a[href="#"]').on('click', function (e) {
            e.preventDefault();
        });
        this.$sidebar.on('mouseenter', this._sidebarMouseEnter.bind(this));
        this.$sidebar.on('mouseleave', this._sidebarMouseLeave.bind(this));
        this.checkNavigationState();
        this.$sidebar.on('click', function () {
            if (jQuery('layout').is('.nav-collapsed')) {
                _this.expandNavigation();
            }
        });
        this.router.events.subscribe(function (event) {
            _this._navigationInterceptor(event);
            _this.collapseNavIfSmallScreen();
            window.scrollTo(0, 0);
        });
        if ('ontouchstart' in window) {
            this.enableSwipeCollapsing();
        }
        this.$sidebar.find('.collapse').on('show.bs.collapse', function (e) {
            // execute only if we're actually the .collapse element initiated event
            // return for bubbled events
            if (e.target !== e.currentTarget) {
                return;
            }
            var $triggerLink = jQuery(this).prev('[data-toggle=collapse]');
            jQuery($triggerLink.data('parent'))
                .find('.collapse.in').not(jQuery(this)).collapse('hide');
        })
            .on('show.bs.collapse', function (e) {
            // execute only if we're actually the .collapse element initiated event
            // return for bubbled events
            if (e.target !== e.currentTarget) {
                return;
            }
            jQuery(this).closest('li').addClass('open');
        }).on('hide.bs.collapse', function (e) {
            // execute only if we're actually the .collapse element initiated event
            // return for bubbled events
            if (e.target !== e.currentTarget) {
                return;
            }
            jQuery(this).closest('li').removeClass('open');
        });
    };
    Layout.prototype._navigationInterceptor = function (event) {
        if (event instanceof router_1.NavigationEnd) {
            // ÿ��·����ת�ı�״̬
            this.routerState = !this.routerState;
            this.routerStateCode = this.routerState ? 'active' : 'inactive';
        }
        //if (event instanceof NavigationStart) {
        //	// We wanna run this function outside of Angular's zone to
        //	// bypass change detection
        //	this.ngZone.runOutsideAngular(() => {
        //		// For simplicity we are going to turn opacity on / off
        //		// you could add/remove a class for more advanced styling
        //		// and enter/leave animation of the spinner
        //		this.renderer.setElementStyle(
        //			this.spinnerElement.nativeElement,
        //			'opacity',
        //			'1'
        //		);
        //		this.renderer.setElementStyle(
        //			this.routerComponent.nativeElement,
        //			'opacity',
        //			'0'
        //		);
        //	});
        //}
        //if (event instanceof NavigationEnd) {
        //	this._hideSpinner();
        //}
        //// Set loading state to false in both of the below events to
        //// hide the spinner in case a request fails
        //if (event instanceof NavigationCancel) {
        //	this._hideSpinner();
        //}
        //if (event instanceof NavigationError) {
        //	this._hideSpinner();
        //}
    };
    return Layout;
}());
__decorate([
    core_1.ViewChild('spinnerElement'),
    __metadata("design:type", core_1.ElementRef)
], Layout.prototype, "spinnerElement", void 0);
__decorate([
    core_1.ViewChild('routerComponent'),
    __metadata("design:type", core_1.ElementRef)
], Layout.prototype, "routerComponent", void 0);
Layout = __decorate([
    core_1.Component({
        selector: 'layout',
        encapsulation: core_1.ViewEncapsulation.None,
        templateUrl: './layout.template.html',
        host: {
            '[class.nav-static]': 'config.state["nav-static"]',
            '[class.app]': 'true',
            id: 'app'
        },
        animations: [animations_1.routeAnimation]
    }),
    __metadata("design:paramtypes", [app_config_1.AppConfig,
        core_1.ElementRef,
        router_1.Router,
        core_1.Renderer,
        core_1.NgZone,
        core_2.TranslateService,
        auth_svc_1.AuthService])
], Layout);
exports.Layout = Layout;
//# sourceMappingURL=layout.component.js.map