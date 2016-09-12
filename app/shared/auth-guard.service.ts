import { Injectable }               from '@angular/core';
import { CanActivate, Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot,
        NavigationExtras }          from '@angular/router';

import { AuthService }              from './auth.service';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isLoggedIn) { return true; }

        this.authService.redirectUrl = state.url;

        let sessionId = 132456789;

        let navigationExtras: NavigationExtras = {
            queryParams: { 'session_id': sessionId },
            fragment: 'anchor'
        };

        this.router.navigate(['/login'], navigationExtras);
        return false;
    }
}