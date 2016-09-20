import { Component, OnInit }    from '@angular/core';
import { ActivatedRoute,
         Router }               from '@angular/router';
import { Observable }           from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Note, NoteService }    from '../../notes';

@Component({
    moduleId: module.id,
	selector: 'notes',
    templateUrl: 'notes.component.html',
    styleUrls: [ 'notes.component.css']
})
export class NotesComponent implements OnInit {
    notes: Promise<Note[]>;
    
    constructor(private noteService: NoteService,
                private router: Router,
                private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.getChecklists();
    }

    private getChecklists() {
        this.notes = this.noteService.getAll();
        this.notes.then(checklists => 
            checklists.forEach(checklist => {
                if (checklist.content.length > 3 && checklist.content instanceof Array) {
                    checklist.content = checklist.content.filter(item => !item.checked);
                }
        }));
    }

    gotoDetail(note: Note): void {
        let link = [ note.type, note.id];
        this.router.navigate(link);
    }
}