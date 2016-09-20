import { Component, OnInit }    from '@angular/core';

import { Note,
		 NoteBody,
         NoteComponent,
         NoteService }          from '../notes';
import { ChecklistItem }        from './';

@Component({
    moduleId: module.id,
    selector: 'list-body',
    templateUrl: 'list-body.component.html',
    styleUrls: [ 'list-body.component.css' ],
    host: {
        'class': 'host_class'
    }
})
export class ListBodyComponent extends NoteBody {
    host_class: string;
	
	newItem = '';
	newItemHolder = 'List item';
	
	constructor(parent: NoteComponent, private noteService: NoteService) {
		super(parent);
		this.host_class = 'list-group';
	}

    addItem(): void {
		let itemValue = this.newItem;
		this.newItem = '';
		var length = this.note.content.length + 1;
		this.note.content.push({id: length, checked: false, description: itemValue });
		
		this.noteService.save(this.note)
				.then(() => {
					console.info(`'${itemValue}' added to checklist ${this.note.title}`);
				});
	}

	removeItem(item: ChecklistItem): void {
		for(var i = this.note.content.length -1; i >= 0; i--) {
			if (this.note.content[i].id === item.id) {
				this.note.content.splice(i, 1);
			}
		}

		this.noteService.save(this.note)
					.then(() => console.info(`item ${item.id} deleted`));
	}

	activeItems() { return this.note.content.filter(item => !item.checked); }
	doneItems() { return this.note.content.filter(item => item.checked); }
}