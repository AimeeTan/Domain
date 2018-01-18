import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { BaseService, CustomBaseService } from './base/base.svc';
import { ICustomsSpec } from '../model/customs';

export const apiPageUrl = {
	systemConfig: 'system/config',
}

@Injectable()
export class PageService extends CustomBaseService {
	baseUrl: string = 'api/parcel/exception/';
}