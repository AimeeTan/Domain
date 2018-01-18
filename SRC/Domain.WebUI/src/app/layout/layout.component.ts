import {
	Component,
	ViewEncapsulation,
	ElementRef, Renderer,
	NgZone,
	ViewChild
} from '@angular/core';
import {
	Router,
	Event as RouterEvent,
	NavigationStart,
	NavigationEnd,
	NavigationCancel,
	NavigationError
} from '@angular/router';
import { AppConfig } from '../app.config';
import { AuthService } from '../service/auth.svc';
import { routeAnimation } from './animations';
import { TranslateService } from '@ngx-translate/core';
declare let jQuery: any;
declare let Hammer: any;

@Component({
	selector: 'layout',
	encapsulation: ViewEncapsulation.None,
	templateUrl: './layout.template.html',
	host: {
		'[class.nav-static]': 'config.state["nav-static"]',
		'[class.app]': 'true',
		id: 'app'
	},
	animations: [routeAnimation]
})
export class Layout {
	config: any;
	configFn: any;
	$sidebar: any;
	el: ElementRef;
	router: Router;
	userName: string;
	chatOpened = false;
	@ViewChild('spinnerElement') spinnerElement: ElementRef;
	@ViewChild('routerComponent') routerComponent: ElementRef;

	constructor(config: AppConfig,
		el: ElementRef,
		router: Router,
		private renderer: Renderer,
		private ngZone: NgZone,
		public translate: TranslateService,
		public authService: AuthService) {
		this.el = el;
		this.config = config.getConfig();
		this.configFn = config;
		this.router = router;
		this.authService.getName().subscribe((data) => {
			this.userName = data.user;
		});
	}

	toggleSidebarListener(state): void {
		let toggleNavigation = state === 'static'
			? this.toggleNavigationState
			: this.toggleNavigationCollapseState;
		toggleNavigation.apply(this);
		localStorage.setItem('nav-static', this.config.state['nav-static']);
	}

	toggleLanguageListener(lang): void {
		if (this.translate.getLangs().find(x => x === lang).length > 0) {
			this.translate.use(lang).subscribe(x => console.log(`Language:${lang}`));
		}
	}

	toggleNavigationState(): void {
		this.config.state['nav-static'] = !this.config.state['nav-static'];
		if (!this.config.state['nav-static']) {
			this.collapseNavigation();
		}
	}

	expandNavigation(): void {
		// this method only makes sense for non-static navigation state
		if (this.isNavigationStatic()
			&& (this.configFn.isScreen('lg') || this.configFn.isScreen('xl'))) { return; }

		jQuery('layout').removeClass('nav-collapsed');
		this.$sidebar.find('.active .active').closest('.collapse').collapse('show')
			.siblings('[data-toggle=collapse]').removeClass('collapsed');
	}

	collapseNavigation(): void {
		// this method only makes sense for non-static navigation state
		if (this.isNavigationStatic()
			&& (this.configFn.isScreen('lg') || this.configFn.isScreen('xl'))) { return; }

		jQuery('layout').addClass('nav-collapsed');
		this.$sidebar.find('.collapse.in').collapse('hide')
			.siblings('[data-toggle=collapse]').addClass('collapsed');
	}

	/**
	 * Check and set navigation collapse according to screen size and navigation state
	 */
	checkNavigationState(): void {
		if (this.isNavigationStatic()) {
			if (this.configFn.isScreen('sm')
				|| this.configFn.isScreen('xs') || this.configFn.isScreen('md')) {
				this.collapseNavigation();
			}
		} else {
			if (this.configFn.isScreen('lg') || this.configFn.isScreen('xl')) {
				setTimeout(() => {
					this.collapseNavigation();
				}, this.config.settings.navCollapseTimeout);
			} else {
				this.collapseNavigation();
			}
		}
	}

	isNavigationStatic(): boolean {
		return this.config.state['nav-static'] === false;
	}

	toggleNavigationCollapseState(): void {
		if (jQuery('layout').is('.nav-collapsed')) {
			this.expandNavigation();
		} else {
			this.collapseNavigation();
		}
	}

	_sidebarMouseEnter(): void {
		if (this.configFn.isScreen('lg') || this.configFn.isScreen('xl')) {
			this.expandNavigation();
		}
	}
	_sidebarMouseLeave(): void {
		if (this.configFn.isScreen('lg') || this.configFn.isScreen('xl')) {
			this.collapseNavigation();
		}
	}

	enableSwipeCollapsing(): void {
		let swipe = new Hammer(document.getElementById('content-wrap'));
		let d = this;

		swipe.on('swipeleft', () => {
			setTimeout(() => {
				if (d.configFn.isScreen('md')) { return; }

				if (!jQuery('layout').is('.nav-collapsed')) {
					d.collapseNavigation();
				}
			});
		});

		swipe.on('swiperight', () => {
			if (d.configFn.isScreen('md')) { return; }
			if (jQuery('layout').is('.nav-collapsed')) {
				d.expandNavigation();
			}
		});
	}

	collapseNavIfSmallScreen(): void {
		if (this.configFn.isScreen('xs')
			|| this.configFn.isScreen('sm') || this.configFn.isScreen('md')) {
			this.collapseNavigation();
		}
	}

	ngOnInit(): void {

		if (localStorage.getItem('nav-static') === 'true') {
			this.config.state['nav-static'] = true;
		}

		let $el = jQuery(this.el.nativeElement);
		this.$sidebar = $el.find('[sidebar]');

		$el.find('a[href="#"]').on('click', (e) => {
			e.preventDefault();
		});

		this.$sidebar.on('mouseenter', this._sidebarMouseEnter.bind(this));
		this.$sidebar.on('mouseleave', this._sidebarMouseLeave.bind(this));

		this.checkNavigationState();

		this.$sidebar.on('click', () => {
			if (jQuery('layout').is('.nav-collapsed')) {
				this.expandNavigation();
			}
		});

		this.router.events.subscribe((event) => {
			this._navigationInterceptor(event);
			this.collapseNavIfSmallScreen();
			window.scrollTo(0, 0);
		});

		if ('ontouchstart' in window) {
			this.enableSwipeCollapsing();
		}

		this.$sidebar.find('.collapse').on('show.bs.collapse', function (e): void {
			// execute only if we're actually the .collapse element initiated event
			// return for bubbled events
			if (e.target !== e.currentTarget) { return; }

			let $triggerLink = jQuery(this).prev('[data-toggle=collapse]');
			jQuery($triggerLink.data('parent'))
				.find('.collapse.in').not(jQuery(this)).collapse('hide');
		})
			/* adding additional classes to navigation link li-parent
			 for several purposes. see navigation styles */
			.on('show.bs.collapse', function (e): void {
				// execute only if we're actually the .collapse element initiated event
				// return for bubbled events
				if (e.target !== e.currentTarget) { return; }

				jQuery(this).closest('li').addClass('open');
			}).on('hide.bs.collapse', function (e): void {
				// execute only if we're actually the .collapse element initiated event
				// return for bubbled events
				if (e.target !== e.currentTarget) { return; }

				jQuery(this).closest('li').removeClass('open');
			});
	}
	// router��ת�����������
	routerState: boolean = true;
	routerStateCode: string = 'active';
	private _navigationInterceptor(event: RouterEvent): void {
		if (event instanceof NavigationEnd) {
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
	}

	//private _hideSpinner(): void {
	//	// We wanna run this function outside of Angular's zone to
	//	// bypass change detection,
	//	this.ngZone.runOutsideAngular(() => {

	//		// For simplicity we are going to turn opacity on / off
	//		// you could add/remove a class for more advanced styling
	//		// and enter/leave animation of the spinner
	//		this.renderer.setElementStyle(
	//			this.spinnerElement.nativeElement,
	//			'opacity',
	//			'0'
	//		);
	//		this.renderer.setElementStyle(
	//			this.routerComponent.nativeElement,
	//			'opacity',
	//			'1'
	//		);
	//	});
	//}
}
