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
	allowEdit = true;
	newItem = '';
	titleHolder = "Title";
	newItemHolder = 'List item';

	constructor(
		private route: ActivatedRoute,
		private checklistService: ChecklistService) { }
	
	ngOnInit(): void {
		this.setChecklist();
	}

	addItem(): void {
		let itemValue = this.newItem;
		this.newItem = '';
		var length = this.checklist.items.length + 1;
		this.checklist.items.push({id: length, checked: false, description: itemValue });
		
		this.checklistService.save(this.checklist)
				.then(() => {
					console.info(`'${itemValue}' added to checklist ${this.checklist.name}`);
				});
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

	private setChecklist(): void {
		let id = parseInt(this.route.snapshot.params['id'], 10);
		this.checklistService.getChecklist(id)
					.then(checklist => {
						this.checklist = checklist;
						this.allowEdit = this.checklist.id % 2 === 0;
					});
	}
}