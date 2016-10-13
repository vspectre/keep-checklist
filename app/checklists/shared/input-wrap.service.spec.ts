import { InputWrapDirective,
         InputWrapService,
         WrapEvent }            from './index';

function initInputs(sut: InputWrapService) {
    let inputs = [];
    for (let i = 0; i < 5; i++) {
        let directive = new InputWrapDirective(null, sut);
        directive.wrapIndex = i;
        inputs.push(directive);
        sut.registerInput(directive, i);
    }

    return inputs;
}

let sut: InputWrapService;
let inputs: InputWrapDirective[];

describe('InputWrapService', () => {
    beforeEach(() => {
        sut = new InputWrapService();
        inputs = initInputs(sut);
    });

    it('should emit forward when empty', done => {
        sut.wrapForward$.subscribe(() => done());
        sut.forward(new WrapEvent());
    });

    it('should not emit backward when empty', done => {
        sut.wrapBackward$.subscribe(() => fail());
        sut.back(new WrapEvent());
        done();
    });

    it('should not emit backward from first input', done => { 
        sut.wrapBackward$.subscribe(() => fail());
        sut.back(new WrapEvent());
        done();
    });

    it('should not emit forward when wrapIndex is higher than input count', done => {
        var expected = new WrapEvent(inputs.length + 1);
        sut.wrapBackward$.subscribe(() => fail());

        sut.back(expected);
        done();
    });

    it('should emit backward', done => {
        let expected = new WrapEvent(1, 'wrapped text');
        sut.wrapBackward$.subscribe(event => {
            expect(expected).toEqual(event);
            done();
        });

        sut.back(expected);
    });

    it('should emit forward', done => {
        let expected = new WrapEvent(0, 'wrapped text');
        sut.wrapForward$.subscribe(event => {
            expect(expected).toEqual(event);
            done();
        });

        sut.forward(expected);
    });
})