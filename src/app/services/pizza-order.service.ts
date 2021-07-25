import { Injectable } from '@angular/core';
import { Pizza, CurrentOrder, PizzaPrice, PreviousOrder } from './order.model';
import { PizzaOrderPage } from '../pizza-order/pizza-order.page';

@Injectable({
  providedIn: 'root'
})
export class PizzaOrderService {

  pizza: Pizza[] = [];

  currentOrder: CurrentOrder[] = [
    {
      listOfPizzas: this.pizza,
      totalOrderPrice: 25,
      totalOrderQuantity: 3
    }
  ];

  priceList: PizzaPrice[] = [
    {
      pizzaSize: 'Small',
      price: 9.99
    },
    {
      pizzaSize: 'Medium',
      price: 14.99
    },
    {
      pizzaSize: 'Large',
      price: 19.99
    },
    {
      pizzaSize: 'Extra Large',
      price: 24.99
    },
    {
      pizzaSize: 'Party',
      price: 29.99
    }
  ]
  
  previousOrders: PreviousOrder[] = [];

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

  addPizza(newPizza: Pizza) {
    this.pizza.push(newPizza);
  }

  removePizza(oldPizza: Pizza) {
    const index = this.pizza.indexOf(oldPizza);
    if (index > -1) {
      this.pizza.splice(index, 1);
    }
  }

  resetCurrentOrder() {
    this.pizza = [];
  }

  getPizzaPrice(aPizza: Pizza) {
    var price :number = 0;
    this.priceList.forEach(function (aPrice :PizzaPrice) {
      if(aPizza.pizzaSize === aPrice.pizzaSize) {
        price = (aPizza.quantity * aPrice.price);
      }
    });
    return price;
  }

  getOrderSize() {
    var amount: number = 0;
    this.pizza.forEach(function (aPizza :Pizza) {
      amount += aPizza.quantity;
    });
    return amount;
  }

  getOrderPrice() {
    var totalPrice: number = 0;
    var calcPriceList: PizzaPrice[] = this.priceList;
    this.pizza.forEach(function (aPizza :Pizza) {
      calcPriceList.forEach(function (aPrice :PizzaPrice) {
        if(aPizza.pizzaSize === aPrice.pizzaSize) {
          totalPrice += aPizza.quantity * aPrice.price;
        }
      });
    });   
    return totalPrice;
  }
}
