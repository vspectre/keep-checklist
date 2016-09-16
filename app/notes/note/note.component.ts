import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute }           from '@angular/router';

import { Note }             from '../';

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

    constructor(private route: ActivatedRoute){}

    ngOnInit() {
        this.setNote();
    }

    private setNote() {
        this.route.data.forEach((data: { note: Note }) => {
            this.note = data.note;
        });
    }
}