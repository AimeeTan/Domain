import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'dateTimeFormat'
})

export class DateTimeFormatPipe extends DatePipe implements PipeTransform {
	static readonly DateTime_FMT = 'MM-dd-yyyy HH:mm';
	transform(value: string, args?: any): any {
		return super.transform(value.toString(), DateTimeFormatPipe.DateTime_FMT);
	}
}