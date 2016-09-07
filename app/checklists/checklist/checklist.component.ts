import { Component, Input, OnInit }		from '@angular/core';
import { ActivatedRoute }				from '@angular/router';
import { Checklist,
		 ChecklistItem,
		 ChecklistService }		from '../';

@Component({
	selector: 'checklist',
	templateUrl: 'app/checklists/checklist/checklist.component.html',
	styleUrls: [ 'app/checklists/checklist/checklist.component.css' ]
})
export class ChecklistComponent implements OnInit {
	checklist: Checklist;
	newItem = '';
	titleHolder = "Title";
	newItemHolder = 'List item';

	constructor(
		private route: ActivatedRoute,
		private checklistService: ChecklistService) { }
	
	ngOnInit(): void {
		let id = parseInt(this.route.snapshot.params['id'], 10);
		this.checklistService.getChecklist(id)
								.then(checklist => this.checklist = checklist);
	}

	addItem(): void {
		var length = this.checklist.items.length + 1;
		this.checklist.items.push({id: length, checked: false, description: this.newItem });
		this.newItem = '';
	}

	removeItem(item: ChecklistItem): void {
		for(var i = this.checklist.items.length -1; i >= 0; i--) {
			if (this.checklist.items[i].id === item.id) {
				this.checklist.items.splice(i, 1);
			}
		}

		this.checklistService.save(this.checklist)
							.then(() => console.info(`item ${item.id} deleted`));
	}

	activeItems() { return this.checklist.items.filter(item => !item.checked); }
	doneItems() { return this.checklist.items.filter(item => item.checked); }
}