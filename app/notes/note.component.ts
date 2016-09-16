import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute }           from '@angular/router';

import { Note }             from './note';

@Component({
    moduleId: module.id,
    selector: 'note',
    templateUrl: 'note.component.html',
    styleUrls: [ 'note.component.css' ],
})
export class NoteComponent implements OnInit {
    @Input()note: Note;
    @Input()allowEdit = true;
    titlePlaceHolder = "Title";

    ngOnInit() {
        this.setNote();
    }

    private setNote() {
        this.note = { 
            id: 100,
            title: 'General Note',
            type: 'note',
            content: 'Your note goes here in the body' 
        };
    }
}