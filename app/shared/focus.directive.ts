import { Directive, ElementRef, EventEmitter, HostBinding,
         HostListener, Input, Output, Renderer }    from '@angular/core';

@Directive({ selector: '[keepFocus]' })
export class FocusDirective {
    private _defaultClass = 'focused';

    constructor(private el: ElementRef, private render: Renderer) { }

    @Input() set focusClass(className: string) {
        this._defaultClass = className || this._defaultClass;
    }
    @Output()keepFocus = new EventEmitter<boolean>();
    focused: boolean = false;
    hovered: boolean = false;
    get activeFocus(): boolean { return (this.focused || this.hovered); }
    

    @HostBinding('attr.focused')focusedAttr = false;
    @HostListener('mouseenter') onMouseEnter() { this.changeHover(true); }
    @HostListener('mouseleave') onMouseLeave() { this.changeHover(false); }
    @HostListener('focusin') onFocusIn() { this.changeFocus(true); }
    @HostListener('focusout') onFocusOut() { this.changeFocus(false); }

    private changeHover(state: boolean): void {
        this.hovered = state;
        this.updateFocus();
    }

    private changeFocus(state: boolean): void {
        this.focused = state;
        this.render.setElementClass(this.el.nativeElement, this._defaultClass, this.activeFocus);
        this.updateFocus();
    }
    
    private updateFocus(): void {
        this.focusedAttr = this.activeFocus;
        this.keepFocus.emit(this.activeFocus);
    }
}