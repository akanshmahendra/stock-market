import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import { StockItemComponent } from './stock-item.component';
import { Stock } from 'src/app/model/stock/stock.component';
import { By } from '@angular/platform-browser';

describe('Stock Item Component', () => {
  
  let fixture: ComponentFixture<StockItemComponent>;
  let component: StockItemComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StockItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItemComponent);
    component = fixture.componentInstance;
    component.stock = new Stock('Testing Stock', 'TS', 100, 200);
    fixture.detectChanges();
  });

  it('Should crerate stock component and render stock data', () => {
    let nameEl, addToFavoriteBtn, priceEl;
    nameEl = fixture.debugElement.query(By.css('.name'));
    expect(nameEl.nativeElement.textContent.trim()).toEqual('Testing Stock (TS)');
    priceEl = fixture.debugElement.query(By.css('.negative'));
    expect(priceEl.nativeElement.textContent.trim()).toEqual('$ 100');
    addToFavoriteBtn = fixture.debugElement.query(By.css('button'));
    expect(addToFavoriteBtn).toBeDefined();
  });

  it('Should trigger event emmitter on add to favorite', () => {
    let selectedStock: Stock;
    component.toggleFavorite.subscribe((stock: Stock) => {
      selectedStock = stock;
    });
    const addToFavoriteBtn = fixture.debugElement.query(By.css('button'));
    expect(selectedStock).toBeUndefined();
    addToFavoriteBtn.triggerEventHandler('click', null);
    expect(selectedStock).toEqual(component.stock);
  });
});