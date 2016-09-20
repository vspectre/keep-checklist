import { Component, OnInit }    from '@angular/core';
import { ActivatedRoute,
         Router }               from '@angular/router';
import { Observable }           from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Note, NoteService }    from '../../notes';

@Component({
    moduleId: module.id,
	selector: 'checklists',
    templateUrl: 'checklists.component.html',
    styleUrls: [ 'checklists.component.css']
})
export class ChecklistsComponent implements OnInit {
    checklists: Promise<Note[]>;
    sessionId: Observable<string>;
    token: Observable<string>;

    constructor(private noteService: NoteService,
                private router: Router,
                private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.getChecklists();
    }

    private getChecklists() {
        this.checklists = this.noteService.getAll();
        this.checklists.then(checklists => 
            checklists.forEach(checklist => {
                if (checklist.content.length > 3 && checklist.content instanceof Array) {
                    checklist.content = checklist.content.filter(item => !item.checked);
                }
            }));
    }

    gotoDetail(checklist: Note): void {
        let link = [ 'checklists/', checklist.id];
        this.router.navigate(link);
    }
}