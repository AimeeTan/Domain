import { Injectable, Inject } from '@angular/core';
import { Http, Response, URLSearchParams, ResponseContentType, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class BaseService {
	public header: Headers = new Headers({ "ajax": "" })
	public redireactIdentity(response: Response) {
		if (response.text() == "0") {
			location.reload();
		}
		return response;
	}

	public handleError(error: Response) {
		console.log(error);
		if (error.status === 401 || error.status === 403) {
			location.reload();
			location.href = location.href;
		}
		return Observable.throw(error.json().error || 'Server error');
	}
	public getFilter(criteria: any) {
		const filter = new URLSearchParams();
		for (let property in criteria) {
			if (criteria.hasOwnProperty(property)) {
				if (!!criteria[property]) {
					filter.set(property, criteria[property].toString());
				}
			}
		}
		return filter;
	}
}