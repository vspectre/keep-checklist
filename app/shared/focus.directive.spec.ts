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
let sut: FocusDirective;

describe('FocusDirective', () => {
    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            declarations: [FocusTestComponent, FocusDirective],
            providers: [FocusDirective],
            schemas:    [ NO_ERRORS_SCHEMA ]
        })
        .createComponent(FocusTestComponent);

        focusEl = fixture.debugElement.query(By.directive(FocusDirective));
        sut = focusEl.injector.get(FocusDirective) as FocusDirective;
    });

    it('should not be initially focused', () => {
        expect(sut.activeFocus).toBe(false);
    });

    it('should be focused when focusin triggered', () => {
        focusEl.triggerEventHandler('focusin', null);
        expect(sut.focused).toBe(true);
    });

    it('should not be focused when focusout triggered', () => {
        sut.focused = true;
        focusEl.triggerEventHandler('focusout', null);
        expect(sut.focused).toBe(false);
    });

    it('should be hovered when mouseenter triggered', () => {
        focusEl.triggerEventHandler('mouseenter', null);
        expect(sut.hovered).toBe(true);
    });

    it('should not be hovered when mouseleave triggered', () => {
        sut.hovered = true;
        focusEl.triggerEventHandler('mouseleave', null);
        expect(sut.hovered).toBe(false);
    });

    it('should be marked activeFocus when focused', () => {
        sut.focused = true;
        expect(sut.activeFocus).toBe(true);
    });

    it('should be marked activeFocus when hovered', () => {
        sut.hovered = true;
        expect(sut.activeFocus).toBe(true);
    });

    it('should add focus class when focused', () => {
        let className = 'testFocus';
        sut.focusClass = className;
        focusEl.triggerEventHandler('focusin', null);
        expect(focusEl.classes[className]).toBe(true);
    });

    it('should emit keepFocus event of true when focused', () => {
        let focusedState: boolean;
        let sub = sut.keepFocus.subscribe((state: boolean) => focusedState = state);

        focusEl.triggerEventHandler('focusin', null);
        expect(focusedState).toBe(true);

        if (sub) {
            sub.unsubscribe();
        }
    });

    it('should emit keepFocus event of false when unfocused', () => {
        let focusedState: boolean;
        let sub = sut.keepFocus.subscribe((state: boolean) => focusedState = state);

        focusEl.triggerEventHandler('focusout', null);
        expect(focusedState).toBe(false);

        if (sub) {
            sub.unsubscribe();
        }
    });
});