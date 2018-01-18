import { Component, Output, EventEmitter } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'criteria-daterange',
  template: `<select class="form-control width-200" (change)="selectDateRange($event.target.value)">
									<option value="all">All Date</option>
									<option value="today">Today</option>
									<option value="yesterday">Yesterday</option>
									<option value="last7days">Last 7 Days</option>
									<option value="last30days">Last 30 Days</option>
									<option value="thismonth">This Month</option>
									<option value="lastmonth">Last Month</option>
								</select>`
})
export class CriteriaDateRangeComponent {
	@Output() onSelect: EventEmitter<string[]> = new EventEmitter();
	endDate: string;
	startDate: string;

	constructor() {}

	selectDateRange(range: string) {
		const fmt = 'YYYY-MM-DD';
		const today = moment().format(fmt);
		switch (range) {
		case 'today':
			this.endDate = moment().add(1, 'days').format(fmt);;
			this.startDate = today;
			break;
		case 'yesterday':
			this.endDate = today;
			this.startDate = moment().add(-1, 'days').format(fmt);
			break;

		case 'last3days':
			this.endDate = today;
			this.startDate = moment().add(-3, 'days').format(fmt);
			break;

		case 'last7days':
			this.endDate = today;
			this.startDate = moment().add(-7, 'days').format(fmt);
			break;
		case 'last30days':
			this.endDate = today;
			this.startDate = moment().add(-30, 'days').format(fmt);
			break;

		case 'thismonth':
			this.startDate = moment().startOf('month').format(fmt);
			this.endDate = moment().endOf('month').format(fmt);
			break;

		case 'lastmonth':
			const lastMonth = moment().add(-1, 'months');
			this.startDate = lastMonth.startOf('month').format(fmt);
			this.endDate = lastMonth.endOf('month').format(fmt);
			break;
		default:
			this.startDate = null;
			this.endDate = null;
			break;
		}
		this.onSelect.emit([this.startDate,this.endDate]);
	}
}