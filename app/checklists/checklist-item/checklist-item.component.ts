import { Component,
         Input,
         Output,
         HostListener,
         EventEmitter,
         state,
         style,
         transition,
         animate
    }  from '@angular/core';

import { ChecklistItem }    from '../';

@Component({
    selector: 'checklist-item',
    templateUrl: 'app/checklists/checklist-item/checklist-item.component.html',
    styleUrls: [ 'app/checklists/checklist-item/checklist-item.component.css' ],
    animations: [ ]
})
export class ChecklistItemComponent {
    @Input()item: ChecklistItem;
    @Output()deleteRequest = new EventEmitter<ChecklistItem>();

    editing: boolean = false;
    focused: boolean = false;
    active(): boolean { return this.editing || this.focused; }

    @HostListener('mouseenter') onMouseEnter() {
        this.focused = true;
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.focused = false;
    }

    activate(state: boolean): void {
        this.editing = state;
    }

    remove() {
        this.deleteRequest.emit(this.item);
    }
}