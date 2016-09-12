import { Component }        from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';

import { AuthService }      from '../shared/auth.service';

@Component({
    templateUrl: 'app/login/login.component.html'
})
export class LoginComponent {
    message: string;

    constructor (private authService: AuthService, private router: Router) {
        this.setMessage();
    }

    setMessage() {
        this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    }

    login() {
        this.message = 'Attempting login...';

        this.authService.login().subscribe(() => {
            this.setMessage();
            if (this.authService.isLoggedIn) {
                let redirect = this.authService.redirectUrl ? this.authService.redirectUrl :
                    '';

                let navigationExtras: NavigationExtras = {
                    preserveQueryParams: true,
                    preserveFragment: true
                };

                this.router.navigate([redirect], navigationExtras);
            }
        });
    }

    logout() {
        this.authService.logout();
        this.setMessage();
    }
} 