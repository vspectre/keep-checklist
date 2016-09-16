import { Component, OnInit }    from '@angular/core';
import { ActivatedRoute,
         Router }               from '@angular/router';
import { Observable }           from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Note }                 from '../../notes';
import { ChecklistService }     from '../shared';

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

    constructor(private checklistService: ChecklistService,
                private router: Router,
                private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.sessionId = this.route
                            .queryParams
                            .map(params => params['session_id'] || 'None');

        this.token = this.route
                        .fragment
                        .map(fragment => fragment || 'None');

        this.getChecklists();
    }

    private getChecklists() {
        this.checklists = this.checklistService.getChecklists();
        this.checklists.then(checklists => 
            checklists.forEach(checklist => {
                if (checklist.content.length > 3) {
                    checklist.content = checklist.content.filter(item => !item.checked);
                }
            }));
    }

    gotoDetail(checklist: Note): void {
        let link = [ 'checklists/', checklist.id];
        this.router.navigate(link);
    }
}