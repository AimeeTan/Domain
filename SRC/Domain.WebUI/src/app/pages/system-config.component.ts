import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective, AlertComponent } from 'ngx-bootstrap';
import { Criteria, PaginationComponent } from '../shared/criteria.profile';
import { PageService } from '../service/page.svc';

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
		this.pageSvc.getSearchEngine().subscribe(data => {
			this.rows = data.value.data;
			this.criteria.total = data.value.availableCnt;
			console.log(this.rows);
		}, (error) => {
			this.error = error;
		});
	}
	
}