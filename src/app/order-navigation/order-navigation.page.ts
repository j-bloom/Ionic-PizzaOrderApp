import { Component, Input, OnInit } from '@angular/core';
import { PizzaOrderPage } from '../pizza-order/pizza-order.page';
import { PizzaOrderService } from '../services/pizza-order.service'

@Component({
  selector: 'app-order-navigation',
  templateUrl: './order-navigation.page.html',
  styleUrls: ['./order-navigation.page.scss'],
})
export class OrderNavigationPage implements OnInit {

  @Input() pizza: PizzaOrderPage;

  constructor(private orderService: PizzaOrderService) { }

  ngOnInit() {
  }

  newOrder(){
    return this.orderService.resetCurrentOrder();
  }

}
