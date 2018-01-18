import { RcvHubModule } from '../components/rvchubs/rcvhub.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgUploaderModule } from 'ngx-uploader';

import { ModalModule, PaginationModule } from 'ngx-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { PageService } from '../service/page.svc';
import { SystemConfigComponent } from './system-config.component';


export const routes = [
	{ path: 'system/config', component: SystemConfigComponent, pathMatch: 'full' }
];

@NgModule({
	imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterModule.forChild(routes), TranslateModule, NgUploaderModule,
		PaginationModule.forRoot(), ModalModule.forRoot(), RcvHubModule],
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
