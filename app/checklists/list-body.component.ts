import { Component, OnInit } from '@angular/core';

import { Note,
         NoteComponent } from '../notes';

@Component({
    moduleId: module.id,
    selector: 'list-body',
    templateUrl: 'list-body.component.html',
    host: {
        'class.list-group': ''
    }
})
export class ListBodyComponent implements OnInit {
    note: Note;
    allowEdit = true;
    items: any[];

    constructor(parent: NoteComponent) {
        this.note = parent.note;
        this.allowEdit = parent.allowEdit;
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