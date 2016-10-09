import { OnInit } from '@angular/core';

import { Observable }               from 'rxjs/Observable';

import { Note, NoteComponent }      from '../';

export class NoteBody implements OnInit {
    note: Note;
    allowEdit = true;

    constructor(private parent: NoteComponent) {}

    ngOnInit() {
        this.note = this.parent.note;
        this.allowEdit = this.parent.allowEdit;
    }
}