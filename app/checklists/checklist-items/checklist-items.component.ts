import { Component, Input } from '@angular/core';

import { ChecklistItem, ChecklistItemService }  from '../';

@Component({
    selector: 'checklist-items',
    templateUrl: 'app/checklists/checklist-items/checklist-items.component.html'
})
export class ChecklistItemsComponent {
    @Input()items: ChecklistItem[];

    constructor(private checklistItemService: ChecklistItemService) { }

    remove(item: ChecklistItem): void {
        this.checklistItemService
            .delete(item)
            .then(() => console.info(`item ${item.id} deleted`));
            
            for(var i = this.items.length -1; i >= 0; i--) {
                if (this.items[i].id === item.id) {
                    this.items.splice(i, 1);
                }
            }
	}
}