import { Component, Input, OnInit } from '@angular/core';
import { PizzaOrderPage } from '../pizza-order/pizza-order.page';

@Component({
  selector: 'app-order-navigation',
  templateUrl: './order-navigation.page.html',
  styleUrls: ['./order-navigation.page.scss'],
})
export class OrderNavigationPage implements OnInit {

  @Input() pizza: PizzaOrderPage;

  constructor() { }

  ngOnInit() {
  }


}
