import { AuthService }  from './auth.service';
import '../rxjs-operators';

describe('AuthService', () => {
    // This service is for user authentication, right now just a hallow implementation
    let sut = new AuthService();

    it('changes isLoggedIn to true', () => {
        expect(sut.isLoggedIn).toBe(false);
        sut.login()
            .toPromise()
            .then(() => expect(sut.isLoggedIn).toBe(true));
    });
    
    it('changes isLoggedIn to false', () => {
        sut.login()
            .toPromise()
            .then(() => expect(sut.isLoggedIn).toBe(true));
        sut.logout();
        expect(sut.isLoggedIn).toBe(false);
    })
})