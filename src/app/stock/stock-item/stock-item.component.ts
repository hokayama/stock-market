import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  public name!:string;
  public code!:string;
  public price!:number;
  public previousPrice!:number;
  public positiveChange!: boolean;


  constructor() { }

  ngOnInit(): void {
    this.name = 'Teste Stock Company';
    this.code = 'TSC';
    this.price = 85;
    this.previousPrice = 90;
    this.positiveChange = this.price >= this.previousPrice;
  }

}
