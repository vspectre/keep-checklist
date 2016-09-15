import { Component, Input, OnInit } from '@angular/core';

import { Note } from './note';
import { NoteComponent } from './note.component'; 

@Component({
    moduleId: module.id,
    selector: 'note-body',
    templateUrl: 'note-body.component.html',
    styleUrls: [ 'note-body.component.ts' ],
    host: {
        'class.panel-body': ''
    }
})
export class NoteBodyComponent implements OnInit {
    note: Note;

    constructor(parent: NoteComponent) {
        this.note = parent.note;
    }

    ngOnInit() {
        
    }
}