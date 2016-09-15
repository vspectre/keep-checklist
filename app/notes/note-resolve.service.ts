import { Injectable }               from '@angular/core';
import { Router, Resolve,
         ActivatedRouteSnapshot }   from '@angular/router';
import { Observable }               from 'rxjs/Observable';

import { Note }                     from './note';
import { NoteBodyComponent }        from './note-body.component';
import { ListBodyComponent }        from './list-body.component';

@Injectable()
export class NoteResolve implements Resolve<any> {
    constructor(private router: Router) {}
    
    resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
        if (route.url[0].path === 'list') {
            return ListBodyComponent;
        } else {
            return NoteBodyComponent;
        }
    }
}