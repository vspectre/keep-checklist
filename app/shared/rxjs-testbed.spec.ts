import { Subject }      from 'rxjs/Subject';
import { Observable }   from 'rxjs/Observable';
import { Subscriber }     from 'rxjs/Subscriber';

//import '../rxjs-operators';

describe('RXjs Test Bed', () => {
    describe('Playing with Subject & Observable combo', () => {
        let subject: Subject<any>;
        let observable: Observable<any>;

        beforeEach(() => {
            subject = new Subject<any>();
            observable = subject.asObservable();
        });

        it('subscribe should work', done => {
            let expected = 'Test';
            observable.subscribe(x => {
                expect(x).toEqual(expected);
                done();
            });

            subject.next(expected);
        });

        it('do without subscription should not work', done => {
            let expected = 'Test';
            subject.do(x => fail());

            subject.next(expected);
            done();
        });

        it('do with subscription should work', done => {
            let expected = 'Test';
            observable.do(x => expect(x).toEqual(expected)).subscribe(x => {
                expect(x).toEqual(expected);
                done();
            });

            subject.next(expected);
        })

        // it('do after subscription', done => {
        //     let expected = 'Test';
        //     var test = new Subscriber<any>(x => {
        //         console.debug('next');
        //         done();
        //     });
        //     observable.subscribe(test);
        //     observable.do(x => console.debug('do'));

        //     subject.next(expected);
        // })
    })
})