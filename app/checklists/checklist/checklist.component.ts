import { Component, Input, OnInit }		from '@angular/core';

import { Checklist, ChecklistItem }		from '../';

@Component({
	selector: 'checklist',
	templateUrl: 'app/checklists/checklist/checklist.component.html'
})
export class ChecklistComponent {
	@Input() checklist: Checklist;
	newItem = '';
	
	addItem(): void {
		var length = this.checklist.items.length + 1;
		this.checklist.items.push({id: length, checked: false, description: this.newItem });
		this.newItem = '';
	}
}