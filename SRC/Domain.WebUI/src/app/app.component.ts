/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

import { TranslateService } from '@ngx-translate/core';
/*
 * App Component
 * Top Level Component
 */
@Component({
	selector: 'app',
	encapsulation: ViewEncapsulation.None,
	styleUrls: [
		'./scss/application.scss'
	],
	template: `<router-outlet></router-outlet>`
})
export class App {

	constructor(
		public appState: AppState,
		public translate: TranslateService) {
		translate.addLangs(['en', 'zh-cn']);
		// this language will be used as a fallback when a translation isn't found in the current language
		translate.setDefaultLang('zh-cn');
		// the lang to use, if the lang isn't available, it will use the current loader to get them
		translate.use('zh-cn');
	}

	ngOnInit() {
		console.log('Initial App State', this.appState.state);
	}

}
