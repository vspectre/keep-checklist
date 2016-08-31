import { Component, Input, OnInit }		from '@angular/core';

import { Checklist }		from './checklist';
import { ChecklistItem }	from './checklist-item';
import { ChecklistService }	from './checklist.service';

@Component({
	selector: 'checklist',
	templateUrl: 'views/checklist.component.html'
})
export class ChecklistComponent implements OnInit {
	checklist: Checklist;
	items: ChecklistItem[];
	newItem = '';
	
	constructor(public checklistService: ChecklistService) { }
	
	ngOnInit(): void {
		this.getChecklist();
	}
	
	getChecklist() : void {
		this.checklistService
				.getChecklist(0)
				.then(checklist => {
					this.checklist = checklist;
					this.items = checklist.items;
				});
	}
	
	addItem(): void {
		var length = this.checklist.items.length + 1;
		this.checklist.items.push({id: length, checked: false, description: this.newItem });
		this.newItem = '';
	}
	
	remove(itemId: number): void {
		for(var i = this.checklist.items.length -1; i >= 0; i--) {
			if (this.checklist.items[i].id === itemId) {
				this.checklist.items.splice(i, 1);
			}
		}
	}
}