import { Component, OnInit, OnDestroy }		from '@angular/core';
import { ActivatedRoute }				from '@angular/router';

import { Subscription }			from 'rxjs/Subscription';

import { Note,
		 NoteBody,
		 NoteComponent,
		 NoteService }			from '../../notes';
import { ChecklistItem }		from '../';

@Component({
	moduleId: module.id,
	selector: 'checklist',
	templateUrl: 'checklist.component.html',
	styleUrls: [ 'checklist.component.css' ],
})
export class ChecklistComponent  extends NoteBody {
    host_class: string;
	newItem = '';
	newItemHolder = 'List item';
	
	constructor(parent: NoteComponent, 
				private noteService: NoteService) {
		super(parent);
		this.host_class = 'list-group';
	}

	activeItems() { return this.note.content.filter(item => !item.checked); }
	doneItems() { return this.note.content.filter(item => item.checked); }

    addItem(): void {
		this.add(this.newItem);
		this.newItem = '';
	}

	private add(itemValue: string, i?: number) {
		let newItem = {id: 0, checked: false, description: itemValue };
		if (!i || i >= this.note.content.length) {
			i = this.note.content.length;
		}
		this.note.content.splice(i, 0, newItem);
		
		this.noteService.save(this.note)
				.subscribe(
					note => 
						console.info(`'${newItem.id + ':' + newItem.description}' added to checklist ${note.title}`),
					error =>
						this.handleError
				);
	}

	removeItem(item: ChecklistItem): void {
		this.note.content.splice(this.note.content.indexOf(item), 1);

		this.noteService.save(this.note)
					.subscribe(
						note => console.info(`item ${item.id} deleted`),
						error => this.handleError
					);
	}

	private handleError (error: any) {
		// In a real world app, we might use a remote logging infrastructure
		// We'd also dig deeper into the error to get a better message
		let errMsg = (error.message) ? error.message :
		error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg); // log to console instead
		//return Promise.reject(errMsg);
	}
}