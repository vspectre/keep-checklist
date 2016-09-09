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
    @Input()allowEdit: boolean = false;
    @Output()deleteRequest = new EventEmitter<ChecklistItem>();

    editing: boolean = false;
    focused: boolean = false;
    active(): boolean { return this.allowEdit && (this.editing || this.focused); }

    inputClasses() {
        let classes = {
            checked: this.item.checked,
            disabled: !this.allowEdit
        };

        return classes;
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.changeFocus(true);
    }
    @HostListener('mouseleave') onMouseLeave() { 
        this.changeFocus(false);
    }
    @HostListener('focusin') onFocusIn() {
        this.activate(true);
    }
    @HostListener('focusout') onFocusOut() {
        this.activate(false);
    }

    private changeFocus(state: boolean): void {
        this.focused = state;
    }

    activate(state: boolean): void {
        this.editing = state;
    }

    remove() {
        this.deleteRequest.emit(this.item);
    }
}