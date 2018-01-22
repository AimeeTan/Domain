import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { BaseService, CustomBaseService } from './base/base.svc';

export const apiPageUrl = {
	searchEngine: 'searchEngine/list'
}

@Injectable()
export class PageService extends CustomBaseService {
	baseUrl: string = 'api/page/';
}