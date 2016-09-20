import { Component, OnInit } from '@angular/core';

import { Note,
         NoteComponent } from '../notes';

@Component({
    moduleId: module.id,
    selector: 'list-body',
    templateUrl: 'list-body.component.html'
})
export class ListBodyComponent implements OnInit {
    note: Note;
    items: any[];

    constructor(parent: NoteComponent) {
        this.note = parent.note;
    }

    ngOnInit() {
        if (this.note) {
            if (this.note.content instanceof Array) {
                this.items = this.note.content;
            } else if (typeof this.note.content === 'string') {
                this.items = (this.note.content as String).split(' ');
            } else {
                this.items = [ 'no content available.' ];
            }
        }
    }
}