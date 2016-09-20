import { Component, Input, OnInit, OnDestroy }		from '@angular/core';
import { ActivatedRoute }				from '@angular/router';

import { Subscription }			from 'rxjs/Subscription';

import { Note, NoteService }	from '../../notes';
import { ChecklistItem }		from '../';

@Component({
	moduleId: module.id,
	selector: 'checklist',
	templateUrl: 'checklist.component.html',
	styleUrls: [ 'checklist.component.css' ]
})
export class ChecklistComponent implements OnInit, OnDestroy {
	private sub: Subscription;
	checklist: Note;
	allowEdit = true;
	newItem = '';
	titleHolder = "Title";
	newItemHolder = 'List item';

	constructor(
		private route: ActivatedRoute,
		private noteService: NoteService) { }
	
	ngOnInit(): void {
		this.setChecklist();
	}

	ngOnDestroy(): void {
		if (this.sub) {
			this.sub.unsubscribe();
		}
	}

	addItem(): void {
		let itemValue = this.newItem;
		this.newItem = '';
		var length = this.checklist.content.length + 1;
		this.checklist.content.push({id: length, checked: false, description: itemValue });
		
		this.noteService.save(this.checklist)
				.then(() => {
					console.info(`'${itemValue}' added to checklist ${this.checklist.title}`);
				});
	}

	removeItem(item: ChecklistItem): void {
		for(var i = this.checklist.content.length -1; i >= 0; i--) {
			if (this.checklist.content[i].id === item.id) {
				this.checklist.content.splice(i, 1);
			}
		}

		this.noteService.save(this.checklist)
					.then(() => console.info(`item ${item.id} deleted`));
	}

	activeItems() { return this.checklist.content.filter(item => !item.checked); }
	doneItems() { return this.checklist.content.filter(item => item.checked); }

	private setChecklist(): void {
		this.route.data.forEach((data: { checklist: Note }) => {
			this.checklist = data.checklist;
			if (!(this.checklist.content instanceof Array)) {
				this.checklist.content = (this.checklist.content as String).split(' ');
			}
			this.allowEdit = this.checklist.id % 2 === 0;
		});
	}
}