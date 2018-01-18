import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { DateTimePickerModule } from 'ng2-date-time-picker';
import { TruncatePipe } from './truncate';

@NgModule({
	imports: [
		CommonModule, DateTimePickerModule, FormsModule
	],
	declarations: [
		TruncatePipe
	],
	exports: [TruncatePipe]
})

export class TruncateModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: TruncateModule,
			providers: []
		};
	}
}