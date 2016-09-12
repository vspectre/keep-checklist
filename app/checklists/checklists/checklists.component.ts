import { Component, OnInit }    from '@angular/core';
import { ActivatedRoute,
         Router }               from '@angular/router';
import { Observable }           from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Checklist,
         ChecklistService }     from '../shared';

@Component({
    selector: 'checklists',
    templateUrl: 'app/checklists/checklists/checklists.component.html',
    styleUrls: [ 'app/checklists/checklists/checklists.component.css']
})
export class ChecklistsComponent implements OnInit {
    checklists: Promise<Checklist[]>;
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
                if (checklist.items.length > 3) {
                    checklist.items = checklist.items.filter(item => !item.checked);
                }
            }));
    }

    gotoDetail(checklist: Checklist): void {
        let link = [ this.router.url, checklist.id];
        this.router.navigate(link);
    }
}