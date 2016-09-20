import { Component, Input, OnInit } from '@angular/core';

import { Note, NoteComponent }      from '../';

@Component({
    moduleId: module.id,
    selector: 'note-body',
    templateUrl: 'note-body.component.html',
    styleUrls: [ 'note-body.component.css' ],
    host: {
        'class.panel-body': ''
    }
})
export class NoteBodyComponent implements OnInit {
    note: Note;
    allowEdit = true;

    constructor(private parent: NoteComponent) {}

    ngOnInit() {
        this.note = this.parent.note;
        this.allowEdit = this.parent.allowEdit;
    }
}