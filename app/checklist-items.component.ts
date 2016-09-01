import { Component, Input } from '@angular/core';

import { ChecklistItem }        from './checklist-item';
import { ChecklistItemService}  from './checklist-item.service';

@Component({
    selector: 'checklist-items',
    templateUrl: 'views/checklist-items.component.html'
})
export class ChecklistItemsComponent {
    @Input()items: ChecklistItem[];

    constructor(public checklistItemService: ChecklistItemService) { }

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