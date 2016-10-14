import { Injectable, OnDestroy }    from '@angular/core';

import { Subject }                  from 'rxjs/Subject';
import { Subscription }             from 'rxjs/Subscription';

import { WrapEvent, InputWrapDirective }       from './';

export interface WrapSubsParams {
    onBack?: (x: any) => void;
    onForward?: (x: any) => void;
}

@Injectable()
export class InputWrapService implements OnDestroy {
    //private inputs: {[index: number]: InputWrapDirective} = {};
    private inputs: InputWrapDirective[] = [];
    private subscriptions: Subscription[] = [];
    
    private wrapForward = new Subject<any>();
    private wrapBackward = new Subject<any>();

    wrapBackward$ = this.wrapBackward.asObservable();
    wrapForward$ = this.wrapForward.asObservable();

    constructor() {
        let subs = this.subscribe({ 
                onBack: event => this.onBack(event),
                onForward: event => this.onForward(event)
        });

        this.subscriptions.push(subs.subBack);
        this.subscriptions.push(subs.subForward);
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

    subscribe(params: WrapSubsParams) {
        let subBack: Subscription;
        let subForward: Subscription;
        if (params.onBack) {
            subBack = this.wrapBackward$.subscribe(params.onBack);
        }
        if (params.onForward) {
            subForward = this.wrapForward$.subscribe(params.onForward);
        }

        return { subBack, subForward }
    }

    back(event: WrapEvent) {
        let i = event.wrapIndex;
        if (i > 0 && i <= this.inputs.length) {
            this.wrapBackward.next(event);
        }
    }

    forward(event: WrapEvent) {
        let i = event.wrapIndex;
        if (i <= this.inputs.length) {
            this.wrapForward.next(event); 
        }
    }

    ngOnDestroy() {
        this.unSubscribeAll();
    }

    private onBack(event: WrapEvent) {
        let i = event.wrapIndex - 1;
        let input = this.inputs[i];
        input.updateValue(input.inputValue + event.text);
    }

    private onForward(event: WrapEvent) {
        let i = event.wrapIndex + 1;
        let input = this.inputs[i];
        input.updateValue(event.text + input.inputValue);
    }

    private unSubscribeAll() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}