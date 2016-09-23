import { Injectable, OnDestroy }    from '@angular/core';

import { DoSignature }              from 'rxjs/operator/do';
import { Subject }                  from 'rxjs/Subject';

import { InputWrapDirective }       from './';

@Injectable()
export class InputWrapService {
    private inputs: InputWrapDirective[] = [];
    
    private wrapForward = new Subject<any>();
    private wrapBackward = new Subject<any>();

    wrapBackward$ = this.wrapBackward.asObservable();
    wrapForward$ = this.wrapForward.asObservable();

    constructor() {
        this.wrapBackward$.subscribe(event => this.onBack(event));
        this.wrapForward$.subscribe(event => this.onForward(event));
    }

    registerInput(inputRef: InputWrapDirective, index: number): number {
        if (index >= 0) {
            this.inputs.splice(index, 0, inputRef);
        }

        return index;
    }

    removeInput(inputRef: InputWrapDirective): void {
        this.inputs.splice(this.inputs.indexOf(inputRef), 1);
    }

    do(onBack: (x: any) => void, onForward: (x: any) => void) {
        console.debug('do');
        this.wrapBackward$ = this.wrapBackward$.do(onBack).do(event => this.onBack(event));
        this.wrapForward$ = this.wrapForward$.do(onForward).do(event => this.onForward(event));
    }

    back(event) {
        console.debug('back');
        let i = event.wrapIndex;
        if (i > 0 && i <= this.inputs.length) {
            this.wrapBackward.next(event);
        }
    }

    forward(event) {
        console.debug('forward');
        let i = event.wrapIndex;
        if (i <= this.inputs.length) {
            this.wrapForward.next(event); 
        }
    }

    private onBack(event) {
        console.debug('onBack');
        let i = event.wrapIndex - 1;
        let input = this.inputs[i];
        input.inputValueEmitter.next(input.inputValue + event.text);
    }

    private onForward(event) {
        console.debug('onForward');
        let i = event.wrapIndex + 1;
        let input = this.inputs[i];
        input.inputValueEmitter.next(event.text + input.inputValue);
    }
}