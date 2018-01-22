import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective, AlertComponent } from 'ngx-bootstrap';
import { Criteria, PaginationComponent } from '../shared/criteria.profile';
import { PageService, apiPageUrl } from '../service/page.svc';

@Component({
	templateUrl: './system-config.component.html'
})

export class SystemConfigComponent extends PaginationComponent {
	error: string;
	searchEngines: any;

	constructor(private readonly pageSvc: PageService) {
		super();
		this.criteria = Object.assign({}, Criteria);
	}

	ngAfterViewInit() {
		this.loadData();
	}
	
	loadData() {
		this.pageSvc.httpGet(apiPageUrl.searchEngine, this.criteria, d => {
			this.rows = d.value.data;
			this.criteria.total = d.value.availableCnt;
		}, error => {
			this.error = error;
		});
	}
	
}