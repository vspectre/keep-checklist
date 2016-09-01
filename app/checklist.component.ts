import { Component, Input, OnInit }		from '@angular/core';

import { Checklist }		from './checklist';
import { ChecklistItem }	from './checklist-item';

@Component({
	selector: 'checklist',
	templateUrl: 'views/checklist.component.html'
})
export class ChecklistComponent {
	@Input() checklist: Checklist;
	newItem = '';
	
	get diagnostics() { return JSON.stringify(this.checklist); }
	
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