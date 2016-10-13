import { Injectable, OnDestroy }    from '@angular/core';

import { DoSignature }              from 'rxjs/operator/do';
import { Subject }                  from 'rxjs/Subject';

import { WrapEvent, InputWrapDirective }       from './';

@Injectable()
export class InputWrapService {
    //private inputs: {[index: number]: InputWrapDirective} = {};
    private inputs: InputWrapDirective[] = [];
    
    private wrapForward = new Subject<any>();
    private wrapBackward = new Subject<any>();

    wrapBackward$ = this.wrapBackward.asObservable();
    wrapForward$ = this.wrapForward.asObservable();

    constructor() {
        this.wrapBackward$.subscribe(event => this.onBack(event));
        //this.wrapForward$.subscribe(event => this.onForward(event));
    }

    registerInput(inputRef: InputWrapDirective, index: number): number {
        if (index >= 0) {
            console.debug('register');
            this.inputs.splice(index, 0, inputRef);
        }

        return index;
    }

    removeInput(inputRef: InputWrapDirective): void {
        this.inputs.splice(this.inputs.indexOf(inputRef), 1);
    }

    do(onBack: (x: any) => void, onForward: (x: any) => void) {
        console.debug('do');
        this.wrapBackward$.subscribe(onBack);
        this.wrapForward$.subscribe(onForward);
    }

    back(event: WrapEvent) {
        console.debug('back');
        let i = event.wrapIndex;
        if (i > 0 && i <= this.inputs.length) {
            this.wrapBackward.next(event);
        }
    }

    forward(event: WrapEvent) {
        console.debug('forward');
        let i = event.wrapIndex;
        if (i <= this.inputs.length) {
            this.wrapForward.next(event); 
        }
    }

    private onBack(event: WrapEvent) {
        console.debug('onBack');
        let i = event.wrapIndex - 1;
        let input = this.inputs[i];
        input.inputValueEmitter.next(input.inputValue + event.text);
    }

    private onForward(event: WrapEvent) {
        console.debug('onForward');
        let i = event.wrapIndex + 1;
        let input = this.inputs[i];
        input.inputValueEmitter.next(event.text + input.inputValue);
    }
}