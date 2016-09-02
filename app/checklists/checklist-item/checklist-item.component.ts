import { Component }                    from '@angular/core';
import { Input, Output, EventEmitter }  from '@angular/core';

import { ChecklistItem }    from '../';

@Component({
    selector: 'checklist-item',
    templateUrl: 'app/checklists/checklist-item/checklist-item.component.html',
    styleUrls: [ 'app/checklists/checklist-item/checklist-item.component.css' ]
})
export class ChecklistItemComponent {
    @Input()item: ChecklistItem;
    @Output()deleteRequest = new EventEmitter<ChecklistItem>();

    remove() {
        this.deleteRequest.emit(this.item);
    }
}