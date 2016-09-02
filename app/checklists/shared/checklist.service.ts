import { Injectable }				from '@angular/core';
import { Headers, Http, Response }	from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Checklist }		from './checklist';

@Injectable()
export class ChecklistService {
	
	private checklistsUrl = 'app/checklists';	// URL to web api
	
	constructor(public http: Http) { }

	getChecklists(): Promise<Checklist[]> {
		return this.http.get(this.checklistsUrl)
				.toPromise()
				.then(response => response.json().data as Checklist[])
				.catch(this.handleError);
	}
	
	getChecklist(id: number) {
		return this.getChecklists()
				.then(checklists => checklists.find(checklist => checklist.id === id));
	}

	save(checklist: Checklist): Promise<Checklist> {
		var promise = null;
		if (checklist.id) {
			promise = this.post(checklist);
		}
		else {
			promise = this.post(checklist);
		}
		return promise
				.then(checklist => { 
					console.info(`saved list ${checklist.name}`);
					return checklist;
				});
	}

	private post(checklist: Checklist): Promise<Checklist> {
		let headers = new Headers({
			'Content-Type': 'application/json'
		});

		return this.http
					.post(this.checklistsUrl, JSON.stringify(checklist), { headers: headers })
					.toPromise()
					.then(res => res.json().data)
					.catch(this.handleError);
	}

	private put(checklist: Checklist): Promise<Checklist> {
		let headers = new Headers({
			'Content-Type': 'application/json'
		});
		
		return this.http
					.put(this.checklistsUrl, JSON.stringify(checklist), {headers: headers })
					.toPromise()
					.then(() => checklist)
					.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('an error occurred', error);
		return Promise.reject(error.message || error);
	}
}