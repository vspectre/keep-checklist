import { InputWrapDirective,
         InputWrapService,
         WrapEvent }            from './index';

function initInputs(sut: InputWrapService) {
    let inputs = [];
    for (let i = 0; i < 5; i++) {
        let directive = new InputWrapDirective(null, sut);
        directive.wrapIndex = i;
        directive.inputValue = `${i} - text`;
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

    it('should append value to previous input on wrap backward', () => {
        let wrapText = 'wrapped text';
        let event = new WrapEvent(1, wrapText);
        let previousInput = inputs[event.wrapIndex - 1];
        let spy = spyOn(previousInput, 'updateValue');
        let expected = previousInput.inputValue + wrapText;

        sut.back(event);

        expect(spy).toHaveBeenCalledWith(expected);
    });

    it('should prepend value to next input on wrap forward', () => {
        let wrapText = 'wrapped text';
        let event = new WrapEvent(0, wrapText);
        let nextInput = inputs[event.wrapIndex + 1];
        let spy = spyOn(nextInput, 'updateValue');
        let expected = wrapText + nextInput.inputValue;

        sut.forward(event);

        expect(spy).toHaveBeenCalledWith(expected);
    })
})