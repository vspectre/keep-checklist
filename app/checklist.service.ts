import { Injectable }		from '@angular/core';
import { Http }				from '@angular/http';

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

	private handleError(error: any): Promise<any> {
		console.error('an error occurred', error);
		return Promise.reject(error.message || error);
	}
}