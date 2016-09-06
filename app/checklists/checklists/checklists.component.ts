import { Component, OnInit }            from '@angular/core';

import { Checklist,
         ChecklistService }             from '../shared';

@Component({
    selector: 'checklists',
    templateUrl: 'app/checklists/checklists/checklists.component.html',
    styleUrls: [ 'app/checklists/checklists/checklists.component.css']
})
export class ChecklistsComponent implements OnInit {
    checklists: Promise<Checklist[]>;

    constructor(private checklistService: ChecklistService) { }

    ngOnInit(): void {
        this.checklists = this.checklistService.getChecklists();
        this.checklists.then(checklists => 
            checklists.forEach(checklist => {
                if (checklist.items.length > 3) {
                    checklist.items = checklist.items.filter(item => !item.checked);
                    checklist.items.splice(3);
                }
            }));
    }
}