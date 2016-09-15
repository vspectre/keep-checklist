import { Component,
         Input,
         Output,
         HostBinding,
         HostListener,
         EventEmitter,
         state,
         style,
         transition,
         animate
    }  from '@angular/core';

import { ChecklistItem }    from '../';

@Component({
    moduleId: module.id,
	selector: 'checklist-item',
    templateUrl: 'checklist-item.component.html',
    styleUrls: [ 'checklist-item.component.css' ],
    animations: [],
})
export class ChecklistItemComponent {
    @Input()item: ChecklistItem;
    @Input()allowEdit: boolean = false;
    @Output()deleteRequest = new EventEmitter<ChecklistItem>();

    activeFocus: boolean = false;
    active(): boolean { return this.allowEdit && (this.activeFocus); }

    inputClasses() {
        let classes = {
            checked: this.item.checked,
            disabled: !this.allowEdit
        };

        return classes;
    }

    @HostListener('keepFocus', ['$event']) onFocus(state) {
        this.activeFocus = state;
    }

    remove() {
        this.deleteRequest.emit(this.item);
    }
}