import { Component, OnInit, OnDestroy }		from '@angular/core';
import { ActivatedRoute }				from '@angular/router';

import { Subscription }			from 'rxjs/Subscription';

import { Note,
		 NoteBody,
		 NoteComponent,
		 NoteService }			from '../../notes';
import { ChecklistItem,
	     InputWrapService,
		 WrapEvent }			from '../';

@Component({
	moduleId: module.id,
	selector: 'checklist',
	templateUrl: 'checklist.component.html',
	styleUrls: [ 'checklist.component.css' ],
	providers: [
		InputWrapService
	]
})
export class ChecklistComponent  extends NoteBody implements OnDestroy {
    host_class: string;
	newItem = '';
	newItemHolder = 'List item';
	wrapForwardSubscription: Subscription;
	wrapBackwardSubscription: Subscription;

	activeItems(): Array<ChecklistItem> { 
		return this.note.content.filter(item => !item.checked);
	}
	doneItems(): Array<ChecklistItem> { 
		return this.note.content.filter(item => item.checked);
	}

	
	constructor(parent: NoteComponent, 
				private noteService: NoteService,
				private inputWrapService: InputWrapService) {
		super(parent);
		this.host_class = 'list-group';
	}

	ngOnInit() {
		super.ngOnInit();

		this.inputWrapService.do(event => this.wrapBackward(event),
								 event => this.wrapForward(event));
	}

	ngOnDestroy() {
		if (this.wrapBackwardSubscription) {
			this.wrapBackwardSubscription.unsubscribe();
		}
		if (this.wrapForwardSubscription) {
			this.wrapForwardSubscription.unsubscribe();
		}
	}
	
    addNewItem(): void {
		if (this.newItem.length > 0) {
			this.add(this.newItem);
			this.newItem = '';
		}
	}

	removeItem(item: ChecklistItem): void {
		let index = this.note.content.indexOf(item);
		this.remove(index);
	}

	private wrapBackward(event: WrapEvent) {
		if (event.wrapIndex === this.activeItems().length) { return; }
		let index = this.getOtherIndex(event.wrapIndex, this.activeItems(), this.note.content);
		console.debug(`back: ${JSON.stringify(event)}. removing at ${index}`);
		this.remove(index);
	}

	private wrapForward(event: WrapEvent) {
		console.debug(`forward: ${JSON.stringify(event)}`);
		if (event.wrapIndex == this.activeItems().length) {
			this.addNewItem();
		} else {
			let index = this.getOtherIndex(event.wrapIndex + 1, this.activeItems(), this.note.content);
			this.add(event.text, index);
		}		
	}

	private add(itemValue: string, i?: number) {
		let newItem = {id: 0, checked: false, description: itemValue };
		if (!i || i < 0 || i >= this.note.content.length) {
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

	private remove(index: number): ChecklistItem {
		let removedItem = this.note.content.splice(index, 1);

		this.noteService.save(this.note)
					.subscribe(
						note => console.info(`item ${removedItem[0].id} deleted`),
						error => this.handleError
					);
		return removedItem;
	}

	private handleError (error: any) {
		// In a real world app, we might use a remote logging infrastructure
		// We'd also dig deeper into the error to get a better message
		let errMsg = (error.message) ? error.message :
		error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg); // log to console instead
		//return Promise.reject(errMsg);
	}

	private getOtherIndex(index: number, arrayFrom: Array<any>, arrayTo: Array<any>): number {
		return arrayTo.indexOf(arrayFrom[index]);
	}
}