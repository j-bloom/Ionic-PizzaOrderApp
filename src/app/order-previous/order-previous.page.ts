import { Component, OnInit } from '@angular/core';
import { PizzaOrderService } from '../services/pizza-order.service';
import { PreviousOrder } from '../services/order.model';

@Component({
  selector: 'app-order-previous',
  templateUrl: './order-previous.page.html',
  styleUrls: ['./order-previous.page.scss'],
})
export class OrderPreviousPage implements OnInit {

  previousOrder: PreviousOrder;

  constructor(private orderService: PizzaOrderService) { }

  ngOnInit() {}

  loadPreviousOrders() {
    return this.orderService.getAllPreviousOrders();
  }

}
