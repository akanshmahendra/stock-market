import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock/stock.component';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  public stock: Stock;

  constructor() { }

  ngOnInit() {

    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80);

  }

  toggleFavorite(event) {
    console.log('We are toggling the favorite state for this stock', event);
    this.stock.favoite = !this.stock.favoite;
  }

}
