import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { UserManager, Log, MetadataService, User } from 'oidc-client';
import { BaseService } from './base/base.svc';

export const environment = {
	production: false
};

@Injectable()
export class AuthService extends BaseService {
	private url = 'api/Auth/';

	constructor(private http: Http) {
		super();
	}

	getName(): Observable<any> {
		return this.http.get(this.url)
			.map((response: Response) => response.json())
			.catch(this.handleError);
	}

}
