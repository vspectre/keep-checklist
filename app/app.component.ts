import { Component, OnInit }	from '@angular/core';

import { Checklist, ChecklistService }	from './checklists';

@Component({
	selector: 'keep-checklist',
	templateUrl: 'app/app.component.html'
})
export class AppComponent {
	title = 'Keep Checklist in Ng2';
	checklist: Checklist;
	
	constructor(private checklistService: ChecklistService) { }
	
	ngOnInit(): void {
		this.getChecklist();
	}
	
	getChecklist() : void {
		this.checklistService
				.getChecklist(0)
				.then(checklist => {
					this.checklist = checklist;
				});
	}
}