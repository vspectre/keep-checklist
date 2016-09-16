import { Injectable }				from '@angular/core';
import { Headers, Http, Response }	from '@angular/http';

import '../../rxjs-operators';

import { Checklist }		from './checklist';

@Injectable()
export class ChecklistService {
	
	private checklistsUrl = 'app/checklists';	// URL to web api
	
	constructor(public http: Http) { }

	getChecklists(): Promise<Checklist[]> {
		return this.http.get(this.checklistsUrl)
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}
	
	getChecklist(id: number) {
		return this.getChecklists()
			.then(checklists => checklists.find(checklist => checklist.id === id));
	}

	save(checklist: Checklist): Promise<Checklist> {
		var promise = null;
		if (checklist.id) {
			promise = this.put(checklist);
		}
		else {
			promise = this.post(checklist);
		}
		return promise
				.then(checklist => { 
					console.info(`saved list ${checklist.title}`);
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
			.then(this.extractData)
			.catch(this.handleError);
	}

	private put(checklist: Checklist): Promise<Checklist> {
		let headers = new Headers({
			'Content-Type': 'application/json'
		});

		let url = `${this.checklistsUrl}/${checklist.id}`;
		
		return this.http
			.put(url, JSON.stringify(checklist), { headers: headers })
			.toPromise()
			.then(() => checklist)
			.catch(this.handleError);
	}

	private extractData(response: Response) {
		let json = response.json();
		return json.data || { };
	}

	private handleError(error: any): Promise<any> {
		console.error('an error occurred', error);
		return Promise.reject(error.message || error);
	}
}