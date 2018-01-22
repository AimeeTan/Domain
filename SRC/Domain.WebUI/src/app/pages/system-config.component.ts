import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective, AlertComponent } from 'ngx-bootstrap';
import { Criteria, PaginationComponent } from '../shared/criteria.profile';
import { PageService } from '../service/page.svc';

@Component({
	templateUrl: './system-config.component.html'
})

export class SystemConfigComponent extends PaginationComponent {
	error: string;

	constructor(private readonly pageSvc: PageService) {
		super();
		//this.criteria = Object.assign({}, Criteria);
	}

	ngAfterViewInit() {
		this.loadData();
	}
	
	loadData() {
		this.pageSvc.getSearchEngine().subscribe(data => {
			this.rows = data;
		}, (error) => {
			this.error = error;
		});
	}

	checkSearchEngine(idx: number, event: any) {
		this.rows[idx].checked = !this.rows[idx].checked;
	}
	confirm() {
		console.log(this.rows);
	}
}