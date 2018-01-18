import { Component, Input, OnInit, Output, EventEmitter, Injectable } from '@angular/core';
import { Daterangepicker } from 'ng2-daterangepicker';
import { DaterangepickerConfig } from 'ng2-daterangepicker';

import * as moment from 'moment'

@Component({
	selector: 'app-ng2daterangepicker',
	templateUrl: './ng2-daterangepicker.component.html'
})

export class Ng2DaterangepickerComponent {
	@Output() onSelect: EventEmitter<string[]> = new EventEmitter();
	@Input() criteria: any;
	dateFormat = 'YYYY-MM-DD';
	startDate: any;
	endDate: any;
	initStartDate = moment().subtract(3, 'month');
	initEndDate = moment();

	ngOnInit() {
		this.startDate = this.initStartDate.format(this.dateFormat);
		this.endDate = this.initEndDate.format(this.dateFormat);
		this.criteria.startDate = this.initStartDate.format(this.dateFormat);
		this.criteria.endDate = this.initEndDate.add(1, 'days').format(this.dateFormat);
	}
	constructor(private daterangepickerOptions: DaterangepickerConfig) {
		this.daterangepickerOptions.settings = {
			locale: { format: this.dateFormat },
			alwaysShowCalendars: false,
			startDate: this.initStartDate,
			endDate: this.initEndDate,
			ranges: {
				'Today': [moment(), moment()],
				'Last Month': [moment().subtract(1, 'month'), moment()],
				'Last 3 Months': [moment().subtract(4, 'month'), moment()],
				'Last 6 Months': [moment().subtract(6, 'month'), moment()],
				'Last 12 Months': [moment().subtract(12, 'month'), moment()],
			}
		};
	}

	private selectedDate(value: any) {
		this.startDate = moment(value.start).format(this.dateFormat);
		this.endDate = moment(value.end).format(this.dateFormat);

		this.criteria.startDate = moment(value.start).format(this.dateFormat);
		this.criteria.endDate = moment(value.end).add(1, 'days').format(this.dateFormat);
		this.onSelect.emit([this.criteria.startDate, this.criteria.endDate]);
	}

}

