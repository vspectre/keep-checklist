import { Injectable }				from '@angular/core';
import { Headers, Http, Response }	from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ChecklistItem }		from './checklist-item';
import { ChecklistItemService } from './checklist-item.service';

@Injectable()
export class ChecklistItemApiService implements ChecklistItemService {
	
	private checklistItemsUrl = 'app/checklists/0/items';	// URL to web api
	
	constructor(public http: Http) { }

    delete(item: ChecklistItem) {
        let headers = new Headers({
           'Content-Type': 'application/json'
        });

        let url = `${this.checklistItemsUrl}/${item.id}`;

        return this.http
                .delete(url, {headers: headers})
                .toPromise()
                .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}