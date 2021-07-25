import { Component, OnInit } from '@angular/core';
import { PizzaOrderService } from '../services/pizza-order.service';

@Component({
  selector: 'app-order-previous',
  templateUrl: './order-previous.page.html',
  styleUrls: ['./order-previous.page.scss'],
})
export class OrderPreviousPage implements OnInit {

  previousOrderList = [];

  constructor(private orderService: PizzaOrderService) { }

  ngOnInit() {
    //BUG: Currently the line below break the "Previous Orders" page

    this.previousOrderList = this.orderService.timeOfOrder();
  }

}
