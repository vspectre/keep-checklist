import { Component, OnInit }	from '@angular/core';

import { Checklist }			from './checklist';
import { ChecklistService }		from './checklist.service';

@Component({
	selector: 'keep-checklist',
	templateUrl: 'views/app.component.html'
})
export class AppComponent {
	title = 'Keep Checklist in Ng2';
	checklist: Checklist;
	
	constructor(public checklistService: ChecklistService) { }
	
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