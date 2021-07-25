import { Component, OnInit } from '@angular/core';
import { PizzaOrderService } from '../services/pizza-order.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-order-current',
  templateUrl: './order-current.page.html',
  styleUrls: ['./order-current.page.scss'],
})
export class OrderCurrentPage implements OnInit {

  pizzaList = [];
  orderList = [];
  timeOfOrder: any;

  constructor(public alertController: AlertController, private orderService: PizzaOrderService) { }

  ngOnInit() {
    this.pizzaList = this.orderService.getAllPizzas();
    this.orderList = this.pizzaList;
  }

  processOrder() {
    this.timeOfOrder = this.orderService.processOrderTime();
    console.log(this.timeOfOrder);
    this.confirmationAlert();
  }

  async confirmationAlert() {
    const alert = await this.alertController.create({
      header:'Order Confirmation',
      message:'Your order has been placed successfully',
      buttons:['OK']
    });
    await alert.present();
  }


}
