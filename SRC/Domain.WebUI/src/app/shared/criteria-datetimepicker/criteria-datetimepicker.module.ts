import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { DateTimePickerModule } from 'ng2-date-time-picker';
import { CriteriaDateTimePickerComponent } from './criteria-datetimepicker.component';

@NgModule({
	imports: [
		CommonModule, DateTimePickerModule, FormsModule
	],
	declarations: [
		CriteriaDateTimePickerComponent
	],
	exports: [CriteriaDateTimePickerComponent]
})

export class CriteriaDateTimePickerModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: CriteriaDateTimePickerModule,
			providers: []
		};
	}
}