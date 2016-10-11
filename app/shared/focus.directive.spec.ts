import { Component, NO_ERRORS_SCHEMA }  from '@angular/core';
import { TestBed, inject,
         ComponentFixture }     from '@angular/core/testing';
import { By }                   from '@angular/platform-browser';

import { FocusDirective }       from './focus.directive';

@Component({
    template: '<div keepFocus></div>'
})
class FocusTestComponent { }

let fixture: ComponentFixture<FocusTestComponent>;
let focusEl;
let directive: FocusDirective;

describe('FocusDirective', () => {
    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            declarations: [FocusTestComponent, FocusDirective],
            providers: [FocusDirective],
            schemas:    [ NO_ERRORS_SCHEMA ]
        })
        .createComponent(FocusTestComponent);

        focusEl = fixture.debugElement.query(By.directive(FocusDirective));
        directive = focusEl.injector.get(FocusDirective) as FocusDirective;
    });

    it('should not be initially focused', () => {
        expect(directive.activeFocus).toBe(false);
    });

    it('should be focused when focusin triggered', () => {
        focusEl.triggerEventHandler('focusin', null);
        expect(directive.focused).toBe(true);
    });

    it('should not be focused when focusout triggered', () => {
        directive.focused = true;
        focusEl.triggerEventHandler('focusout', null);
        expect(directive.focused).toBe(false);
    });

    it('should be hovered when mouseenter triggered', () => {
        focusEl.triggerEventHandler('mouseenter', null);
        expect(directive.hovered).toBe(true);
    });

    it('should not be hovered when mouseleave triggered', () => {
        directive.hovered = true;
        focusEl.triggerEventHandler('mouseleave', null);
        expect(directive.hovered).toBe(false);
    });

    it('should be marked activeFocus when focused', () => {
        directive.focused = true;
        expect(directive.activeFocus).toBe(true);
    });

    it('should be marked activeFocus when hovered', () => {
        directive.hovered = true;
        expect(directive.activeFocus).toBe(true);
    });

    it('should add focus class when focused', () => {
        let className = 'testFocus';
        directive.focusClass = className;
        focusEl.triggerEventHandler('focusin', null);
        expect(focusEl.classes[className]).toBe(true);
    });

    it('should emit keepFocus event of true when focused', () => {
        let focusedState: boolean;
        let sub = directive.keepFocus.subscribe((state: boolean) => focusedState = state);

        focusEl.triggerEventHandler('focusin', null);
        expect(focusedState).toBe(true);

        if (sub) {
            sub.unsubscribe();
        }
    });

    it('should emit keepFocus event of false when unfocused', () => {
        let focusedState: boolean;
        let sub = directive.keepFocus.subscribe((state: boolean) => focusedState = state);

        focusEl.triggerEventHandler('focusout', null);
        expect(focusedState).toBe(false);

        if (sub) {
            sub.unsubscribe();
        }
    });
});