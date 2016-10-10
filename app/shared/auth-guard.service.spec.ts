import { TestBed, inject }      from '@angular/core/testing';
import { Router, RouterStateSnapshot }       from '@angular/router';
import { AuthGuard }    from './auth-guard.service';
import { AuthService }  from './auth.service';

describe('AuthGuard', () => {
    beforeEach(() => {
    TestBed.configureTestingModule({
            providers: [
                { provide: AuthService, useValue: { isLoggedIn: false } },
                { provide: Router, useValue: { navigate(url: string) { return url; } } },
                AuthGuard
            ]
        });
    });

    it('should not be null',
      inject([AuthGuard], (sut: AuthGuard) => {
        expect(sut).not.toBeNull();
    }));

    it('can activate when user is logged in',
      inject([AuthGuard, AuthService], (sut: AuthGuard, authService: AuthService) => {
        authService.isLoggedIn = true;
        expect(sut.canActivate(null, null)).toBe(true);
    }));

    it('should set redirect url when user is not logged in',
      inject([AuthGuard, AuthService], (sut: AuthGuard, authService: AuthService) => {
        var url = 'test/url';
        var state = { root: undefined, url: url };
        sut.canActivate(null,  state);
        expect(authService.redirectUrl).toBe(url);
    }));

    it ('should navigate to login when user is not logged in ',
      inject([AuthGuard, Router], (sut: AuthGuard, router: Router) => {
        const navigateSpy = spyOn(router, 'navigate');
        var url = 'test/url';
        var state = { root: undefined, url: url };
        sut.canActivate(null,  state);
        expect(navigateSpy).toHaveBeenCalledWith(['/login']);
    }));
})