import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { BaseService } from './base/base.svc';


@Injectable()
export class PageService extends BaseService {
	private url = 'api/pages/';

	constructor(private http: Http) {
		super();
	}

	confirmConfig(spec: any): Observable<any> {
		return this.http.post(this.url + 'confirm/config', spec , { headers: this.header })
			.map((response: Response) => response)
			.catch(this.handleError);
	}

	getSearchEngine(): Observable<any> {
		return this.http.get(this.url + 'searchEngine/list')
			.map((response: Response) => response.json())
			.catch(this.handleError);
	}

	//getList(criteria: any): Observable<any> {
	//	const filter = new URLSearchParams();
	//	for (let property in criteria) {
	//		if (criteria.hasOwnProperty(property)) {
	//			if (!!criteria[property]) {
	//				filter.set(property, criteria[property].toString());
	//			}
	//		}
	//	}
	//	return this.http.get(this.url + '/list', { search: filter })
	//		.map((response: Response) => response.json())
	//		.catch(this.handleError);
	//}
}