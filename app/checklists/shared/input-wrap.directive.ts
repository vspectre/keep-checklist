import { Directive,
         ElementRef,
         EventEmitter,
         HostListener,
         Input,
         Output,
         Optional,
         OnInit,
         OnDestroy } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';

import { InputWrapService } from './input-wrap.service';

@Directive({ selector: '[keepInputWrap]' })
export class InputWrapDirective implements OnInit, OnDestroy {
    @Input('keepInputWrap')inputValue: string;
    @Output('keepInputWrapChange')inputValueEmitter = new EventEmitter<string>();
    
    @Input('wrapIndex')wrapIndex?: number = -1;
    
    constructor(private el: ElementRef,
                private inputWrapService: InputWrapService) { }

    @HostListener('keyup.backspace', [ '$event' ]) onBackspace($event) {
        if (this.el.nativeElement.selectionStart === 0) {
            let textToWrap = this.inputValue;
            this.inputValueEmitter.next('');
            this.inputWrapService.back({ wrapIndex: this.wrapIndex, text: textToWrap });
        }
    }

    @HostListener('keyup.enter', [ '$event' ]) onEnter($event) {
        let position = this.el.nativeElement.selectionStart;
        let text = this.inputValue;
        let textToKeep = text.slice(0, position);
        let textToWrap = text.slice(position);
        this.inputValueEmitter.emit(textToKeep);
        this.inputWrapService.forward({ wrapIndex: this.wrapIndex, text: textToWrap });
    }

    ngOnInit() { 
        this.inputWrapService.registerInput(this, this.wrapIndex);
    }

    ngOnDestroy() {
        this.inputWrapService.removeInput(this);
    }
}