import { Component, OnInit } from '@angular/core';
import { PizzaOrderService } from '../services/pizza-order.service';
import { Pizza, PreviousOrder } from '../services/order.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-order-current',
  templateUrl: './order-current.page.html',
  styleUrls: ['./order-current.page.scss'],
})
export class OrderCurrentPage implements OnInit {

  pizzaList: Pizza[] = [];
  orderList = [];
  timeOfOrder: any;

  constructor(public alertController: AlertController, private orderService: PizzaOrderService) { }

  ngOnInit() {
    this.pizzaList = this.orderService.getAllPizzas();
    this.orderList = this.pizzaList;
  }

  
  processOrder() {
    var processOrder: PreviousOrder = {
      orderDate: this.orderService.processOrderTime(),
      totalOrderPrice: this.orderService.getOrderPrice(),
      totalOrderQuantity: this.orderService.getOrderSize()
    };
    this.orderService.addPreviousOrder(processOrder);
    this.confirmationAlert();
  }


  getPizzaList() {
    return this.orderService.getAllPizzas();
  }

  getPizzaPrice(aPizza: Pizza) {
    return this.orderService.getPizzaPrice(aPizza);
  }

  removePizza(aPizza: Pizza) {
    this.orderService.removePizza(aPizza);
  }

  async confirmationAlert() {
    const alert = await this.alertController.create({
      header:'Order Confirmation',
      message:'Your order has been placed successfully',
      buttons:['OK']
    });
    await alert.present();
  }

  getTotalQuantity() {
    return this.orderService.getOrderSize();
  }

  getTotalPrice() {
    return this.orderService.getOrderPrice();
  }

}
