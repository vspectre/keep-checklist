import { Injectable }               from '@angular/core';
import { Router, Resolve,
         ActivatedRouteSnapshot }   from '@angular/router';
import { Observable }               from 'rxjs/Observable';

import { Note, NoteBodyComponent }        from './';

@Injectable()
export class NoteResolve implements Resolve<NoteBodyComponent> {
    constructor(private router: Router) {}
    
    resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
        return NoteBodyComponent;
    }
}