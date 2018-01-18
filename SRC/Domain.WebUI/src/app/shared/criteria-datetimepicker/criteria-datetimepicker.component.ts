import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DateTimePickerModule } from 'ng2-date-time-picker';

@Component({
	templateUrl: './criteria-datetimepicker.component.html',
	selector: 'criteria-datetimepicker',
})

export class CriteriaDateTimePickerComponent {
	@Output() public onChange: EventEmitter<Date> = new EventEmitter();
	@Input() moment: string;
	constructor() { }

	setMoment(moment: any): any {
		this.onChange.emit(moment);
	}
}