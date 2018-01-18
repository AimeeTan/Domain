import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Ng2DaterangepickerComponent } from './ng2-daterangepicker.component';
import { Daterangepicker } from 'ng2-daterangepicker';
import { DatexPipeModule } from '../datex/datex.module';

@NgModule({
	declarations: [
		Ng2DaterangepickerComponent
	],
	imports: [
		CommonModule, Daterangepicker, DatexPipeModule
	],
	exports: [Ng2DaterangepickerComponent]
})
export class Ng2DaterangepickerModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: Ng2DaterangepickerModule,
			providers: []
		};
	}
}