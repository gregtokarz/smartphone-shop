import { ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { Component, Directive, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TextFormatDirective } from './text-format.directive';

// Komponent testowy, aby przetestować dyrektywę
@Component({
    template: `<input type="text" textFormat [(ngModel)]="testText">`
})
class TestComponent {
    testText: string = '';
}

describe('TextFormatDirective', () => {
    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let inputElement: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TextFormatDirective, TestComponent],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true } // Automatyczna detekcja zmian w komponencie
            ]
        });

        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        inputElement = fixture.debugElement.query(By.css('input'));

        // Wysyłałoby zdarzenie blur do elementu wejściowego
        inputElement.nativeElement.dispatchEvent(new Event('blur'));
        fixture.detectChanges();
    });

    it('powinien zostać stworzony TextFormatDirective', () => {
        const directive = new TextFormatDirective(inputElement);
        expect(directive).toBeTruthy();
    });

    it('powinien przekonwertować dane wejsciowe na male litery w przypadku blur', () => {
        // Assert
        expect(testComponent.testText).toBe('');
    });

    it('obsługa małych liter za pomocą ngModel', () => {
        // Arrange
        testComponent.testText = 'TEST';

        // Wysyła zdarzenie blur do elementu wejściowego
        inputElement.nativeElement.dispatchEvent(new Event('blur'));
        fixture.detectChanges();

        // Assert
        expect(testComponent.testText).toBe('TEST');
    });
});
