import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { StockItemComponent } from './stock/stock-item/stock-item.component';

describe('AppComponent', () => {

  describe('Simple, No Angular Unit Test', () => {

    describe('Angular-Aware test', () => {

      let fixture: ComponentFixture<AppComponent>;
      let component: AppComponent;

      beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [AppComponent, StockItemComponent]
        }).compileComponents();
      }));

      beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });

      it('Should load stock with default vales', () => {
        let titleEl, nameEl, priceEl, addToFavoriteBtnEl;
        titleEl = fixture.debugElement.query(By.css('h1'));
        expect(titleEl.nativeElement.textContent.trim()).toEqual('Welcome to Stock Market App!');
        nameEl = fixture.debugElement.query(By.css('.name'));
        expect(nameEl.nativeElement.textContent.trim()).toEqual('Test Stock Company (TSC)');
        priceEl = fixture.debugElement.query(By.css('.positive'));
        expect(priceEl.nativeElement.textContent.trim()).toEqual('$ 85');
        addToFavoriteBtnEl = fixture.debugElement.query(By.css('button'));
        expect(addToFavoriteBtnEl).toBeDefined();
      });

      it('Should toggle stock favorite correctly', () => {
        let addToFavoriteBtnEl;
        expect(component.stock.favorite).toBeFalsy();
        addToFavoriteBtnEl = fixture.debugElement.query(By.css('button'));
        expect(addToFavoriteBtnEl).toBeDefined();
        addToFavoriteBtnEl.triggerEventHandler('click', null);
        fixture.detectChanges();
        expect(component.stock.favorite).toBeTruthy();
        addToFavoriteBtnEl = fixture.debugElement.query(By.css('button'));
        expect(addToFavoriteBtnEl).toBeNull();
      });
    });
  });
});