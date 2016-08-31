import { Component, Input }    from '@angular/core';

import { ChecklistItem }    from './checklist-item'; 

@Component({
    selector: 'checklist-item',
    templateUrl: 'views/checklist-item.component.html'
})
export class ChecklistItemComponent {
    @Input()item: ChecklistItem;

    
}