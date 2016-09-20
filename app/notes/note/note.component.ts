import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { Note,
         NoteService }              from '../';

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

    constructor(private route: ActivatedRoute,
                private noteService: NoteService){}

    ngOnInit() {
        this.setNote();
    }

    private setNote() {
        //this.note = new Note();
        
        // this.route.params.forEach((params: Params) => {
        //     let id = +params['id'];

        //     this.noteService.get(id).then(note => {
        //         this.note = note;
        //     });
        // });

        this.route.data.forEach((data: { note: Note }) => {
            this.note = data.note;
        });
    }
}