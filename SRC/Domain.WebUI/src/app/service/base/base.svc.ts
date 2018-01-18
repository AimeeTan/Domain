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


@Injectable()
export class CustomBaseService {
	baseUrl: string;
	public header: Headers = new Headers({ "ajax": "" })
	constructor(private http: Http) {
	}

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
		return Observable.throw(error.text() || 'Server error');
	}

	public getFilter(criteria: any): URLSearchParams {
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

	public httpGet(url: string, params?: Object, exec?: Function, erroExec?: Function) {
		let model: any;
		if (params) {
			model = { search: this.getFilter(params), headers: this.header }
		} else {
			model = Object.assign({}, params, { headers: this.header});
		}
		this.http.get(this.baseUrl + url, model)
			.map((response: Response) => this.redireactIdentity(response).json())
			.catch(this.handleError)
			.subscribe(data => exec(data), erro => erroExec(erro));
	}

	public httpPost(url: string, params?: Object, exec?: Function, erroExec?: Function) {
		this.http.post(this.baseUrl + url, params, { headers: this.header })
			.map((response: Response) => this.redireactIdentity(response).json())
			.catch(this.handleError)
			.subscribe(data => exec(data), erro => erroExec(erro));
	}
}
