import { Component, OnInit } from '@angular/core';

import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  public stock!: Stock;
  //public stockClasses;
  public stockStyles;

  constructor() { }

  ngOnInit(): void {
    this.stock = new Stock('Test Stock Company', 'TSC', 111, 100);
    let diff = (this.stock.price / this.stock.previousPrice) - 1;
    let largeChange = Math.abs(diff) > 0.10;

/*    this.stockClasses = {
      "positive": this.stock.isPositiveChange(),
      "negative": !this.stock.isPositiveChange(),
      "large-change": largeChange,
      "small-change": !largeChange
    };*/

    this.stockStyles = {
      "color": this.stock.isPositiveChange() ? "green" : "red",
      "font-size": largeChange ? "2.2em" : "0.8em"
    };
  }

  toggleFavorite(event: any ) {
    console.log('We are toggling the favorite state for this stock.', event)
    this.stock.favorite = !this.stock.favorite;
  }

}
