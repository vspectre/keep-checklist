import { Injectable }               from '@angular/core';
import { Router, Resolve,
         ActivatedRouteSnapshot }   from '@angular/router';
import { Observable }               from 'rxjs/Observable';

import { Checklist,
         ChecklistService }         from './';

@Injectable()
export class ChecklistResolve implements Resolve<Checklist> {
    constructor(private checklistService: ChecklistService,
                private router: Router) {}
    
    resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
        let id = +route.params['id'];

        return this.checklistService.getChecklist(id).then(checklist => {
            if (checklist) {
                return checklist;
            } else {
                this.router.navigate(['/']);
                return false;
            }
        });
    }
}