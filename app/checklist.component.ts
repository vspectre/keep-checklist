import { Component, Input, OnInit }		from '@angular/core';

import { Checklist }		from './checklist';
import { ChecklistItem }	from './checklist-item';

@Component({
	selector: 'checklist',
	templateUrl: 'views/checklist.component.html'
})
export class ChecklistComponent implements OnInit {
	checklist: Checklist;
	newItem = '';
	
	ngOnInit(): void {
		this.checklist = new Checklist(0,
			'First Checklist',
			[
				new ChecklistItem(1, false, 'Item 1'),
				new ChecklistItem(2, true, 'Item 2'),
				new ChecklistItem(3, false, 'Item 3'),
				new ChecklistItem(4, false, 'Item 4')
			]
		);
	}
	
	addItem(): void {
		var length = this.checklist.items.length + 1;
		this.checklist.items.push(new ChecklistItem(length, false, this.newItem));
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