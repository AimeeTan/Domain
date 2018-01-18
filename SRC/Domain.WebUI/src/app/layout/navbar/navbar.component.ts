import { Component, EventEmitter, OnInit, ElementRef, Output, Input } from '@angular/core';
import { AppConfig } from '../../app.config';
declare let jQuery: any;

@Component({
	selector: '[navbar]',
	templateUrl: './navbar.template.html'
})
export class Navbar implements OnInit {
	@Output() toggleSidebarEvent: EventEmitter<any> = new EventEmitter();
	@Output() toggleLanguageEvent: EventEmitter<any> = new EventEmitter();
	@Input() myTenant: any;
	$el: any;
	config: any;

	constructor(el: ElementRef, config: AppConfig) {
		this.$el = jQuery(el.nativeElement);
		this.config = config.getConfig();
	}

	toggleSidebar(state): void {
		this.toggleSidebarEvent.emit(state);
	}

	ngOnInit(): void {
		this.$el.find('.input-group-addon + .form-control').on('blur focus', function (e): void {
			jQuery(this).parents('.input-group')
			[e.type === 'focus' ? 'addClass' : 'removeClass']('focus');
		});
	}

	toggleLanguage(lang) {
		this.toggleLanguageEvent.emit(lang);
	}

	logout() {
		window.location.href = "/Account/Logout";
	}
}
