import { TestBed, inject }  from '@angular/core/testing';

import { AuthService }      from './auth.service';
import '../rxjs-operators';

describe('AuthService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AuthService]
        });
    });

    it('changes isLoggedIn to true',
      inject([AuthService], (sut: AuthService) => {
        expect(sut.isLoggedIn).toBe(false);
        sut.login()
            .toPromise()
            .then(() => expect(sut.isLoggedIn).toBe(true));
    }));
    
    it('changes isLoggedIn to false',
      inject([AuthService], (sut: AuthService) => {
        sut.login()
            .toPromise()
            .then(() => {
                sut.logout();
                expect(sut.isLoggedIn).toBe(false);
        });
    }));
});