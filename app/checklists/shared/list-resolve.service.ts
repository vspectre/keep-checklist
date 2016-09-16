import { Injectable }               from '@angular/core';
import { Router, Resolve,
         ActivatedRouteSnapshot }   from '@angular/router';
import { Observable }               from 'rxjs/Observable';

import { ListBodyComponent }        from '../';

@Injectable()
export class ListResolve implements Resolve<any> {
    constructor(private router: Router) {}
    
    resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
        return ListBodyComponent;
    }
}