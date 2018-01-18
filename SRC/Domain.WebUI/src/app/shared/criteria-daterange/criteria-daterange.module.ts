import { CommonModule} from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CriteriaDateRangeComponent } from './criteria-daterange.component';

@NgModule({
	declarations: [
		CriteriaDateRangeComponent
	],
	imports: [
		CommonModule
	],
	exports:[CriteriaDateRangeComponent]
})
export class CriteriaDateRangeModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: CriteriaDateRangeModule,
			providers: []
		};
	}
}