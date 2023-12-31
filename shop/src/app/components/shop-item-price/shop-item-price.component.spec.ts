import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShopItemPriceComponent } from './shop-item-price.component';

describe('ShopItemPriceComponent', () => {
    let component: ShopItemPriceComponent;
    let fixture: ComponentFixture<ShopItemPriceComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ShopItemPriceComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ShopItemPriceComponent);
        component = fixture.componentInstance;
    });

    it('Powinien zostać poprawnie utworzony komponent ShopItemPriceComponent', () => {
        // Arrange and Act
        fixture.detectChanges();

        // Assert
        expect(component).toBeTruthy();
    });


    it('Komponent ShopItemPriceComponent nie powinien wyświetlać ceny jeśli nie jest przypisana żadna wartość', () => {
        // Arrange
        // Act
        fixture.detectChanges();

        // Assert
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('.price')).toBeNull();
    });
});
