import { Injectable }               from '@angular/core';
import { Router, Resolve,
         ActivatedRouteSnapshot }   from '@angular/router';
import { Observable }               from 'rxjs/Observable';

import { Note, NoteService }        from './';

@Injectable()
export class NoteResolve implements Resolve<Note> {
    constructor(private noteService: NoteService,
                private router: Router) {}
    
    resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
        let id = +route.params['id'];

        return this.noteService.get(id).map(note => {
            if (note) {
                return note;
            } else {
                this.router.navigate(['/error']);
                return false;
            }
        });
    }
}