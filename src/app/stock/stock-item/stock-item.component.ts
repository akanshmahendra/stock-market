import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Stock } from 'src/app/model/stock/stock.component';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  @Input() public stock: Stock;
  @Output() private toggleFavorite: EventEmitter<Stock>;

  constructor() {
    this.toggleFavorite = new EventEmitter<Stock>();
  }

  ngOnInit() { }

  onToggleFavorite() {
    this.toggleFavorite.emit(this.stock);
  }

}
