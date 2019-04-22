import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock/stock.component';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent implements OnInit {

  public stock: Stock;
  public confirmed: boolean = false;
  public exchanges: string[] = ['NYSE', 'NASDAQ', 'OTHERS'];

  constructor() {

    this.stock = new Stock('Test', '', 0, 0, 'NASDAQ');

  }

  ngOnInit() {
  }

  setStockPrice(price) {
    this.stock.previousPrice = this.stock.price;
    this.stock.price = price;
  }

  createStock(stockForm) {
    console.log('Stock Form', stockForm.value);
    if(stockForm.valid) {
      this.stock = stockForm.value.stock;
      console.log('Creating stock ', this.stock);      
    } else {
      console.error('Stock form is in invalid state.');
    }
  }

}
