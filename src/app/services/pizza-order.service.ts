import { Injectable } from '@angular/core';
import { Pizza, CurrentOrder } from '../pizza-order/order.model';
import { PizzaOrderPage } from '../pizza-order/pizza-order.page';

@Injectable({
  providedIn: 'root'
})
export class PizzaOrderService {

  pizza: Pizza[] = [
    {
      quantity: 1,
      pizzaTopping: 'Pepperoni',
      pizzaSize: 'Small'
    },
    {
      quantity: 5,
      pizzaTopping: 'Cheese',
      pizzaSize: 'Extra Large'
    }
  ];

  currentOrder: CurrentOrder[] = [
    {
      listOfPizzas: this.pizza,
      totalOrderPrice: 25,
      totalOrderQuantity: 3
    }
  ];

  customerOrder: PizzaOrderPage;
  topping: string;
  timeOfOrder: any;

  constructor() { }



  getAllPizzas() {
    return [...this.pizza];
  }

  getAllCurrentOrders() {
    return [...this.currentOrder];
  }

  processOrderTime() {
    this.timeOfOrder = new Date().toString();
    return this.timeOfOrder;
  }


}
