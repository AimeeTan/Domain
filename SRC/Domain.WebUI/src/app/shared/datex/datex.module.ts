import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { DatexPipe } from './datex';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		DatexPipe
	],
	exports: [DatexPipe]
})
export class DatexPipeModule { }