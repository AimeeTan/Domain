import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgUploaderModule } from 'ngx-uploader';
import { ModalModule, Ng2BootstrapModule, PaginationModule, TabsModule, AlertModule } from 'ngx-bootstrap';

import { PageService } from '../service/page.svc';
import { SystemConfigComponent } from './system-config.component';


export const routes = [
	{ path: '', component: SystemConfigComponent, pathMatch: 'full' },
	{ path: 'system/config', component: SystemConfigComponent, pathMatch: 'full' }
];

@NgModule({
	imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterModule.forChild(routes), NgUploaderModule, Ng2BootstrapModule,TabsModule.forRoot(),AlertModule.forRoot(),
		PaginationModule.forRoot(), ModalModule.forRoot()],
	declarations: [
		SystemConfigComponent
	],
	providers: [
		PageService
	]
})
export class PagesModule {
	static routes = routes;
}
