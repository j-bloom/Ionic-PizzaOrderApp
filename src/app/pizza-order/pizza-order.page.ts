import { Component, OnInit, Input, Output } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Pizza } from '../services/order.model';
import { PizzaOrderService } from '../services/pizza-order.service';

@Component({
  selector: 'app-pizza-order',
  templateUrl: './pizza-order.page.html',
  styleUrls: ['./pizza-order.page.scss'],
})
export class PizzaOrderPage implements OnInit {

  @Input() topping: string;
  @Input() size: string;

  orderQuantityAmount: number;
  totalOrderPrice = 0;
  totalOrderQuantity = 0;
  orderCost = 0;
  toppingItems: string[] = ['Cheese', 'Pepperoni', 'Hawian', 'Peppers', 'Sausage', 'Vegitarian'];
  sizeItems: string[] = ['Small', 'Medium', 'Large', 'Extra Large', 'Party'];
  headerImg = 'https://media.istockphoto.com/vectors/pizza-party-vector-id166009481?k=6&m=166009481&s=612x612&w=0&h=pV5h9E6XQsH_Sj_449hmRxjFwDjtJUAt7q2o_QDdfto=';

  alertMessage: string;

  constructor(public alertController: AlertController, private orderService: PizzaOrderService) { }

  ngOnInit() {
    this.totalOrderQuantity = this.orderService.getAllPizzas().length;
  }


  numberButtonPress(num: number) {
    if(typeof(num) === typeof(this.totalOrderQuantity)){
      return this.orderQuantityAmount = num;
    }
  };

  async addAlert() {
    const alert = await this.alertController.create({
      header: 'Order',
      message: 'Your order now has ' + this.totalOrderQuantity + ' pizza\'s and your total is $' + this.totalOrderPrice,
      buttons: ['OK']
    });
    await alert.present();
  }

  async missingOrderInfo() {
    const alert = await this.alertController.create({
      header:'Missing Information',
      message:'Please ensure orders contain a quantity, topping and size',
      buttons:['OK']
    });
    await alert.present();
  }

  addBtn() {
    if(this.orderQuantityAmount === 0 ||
      (this.topping === '') ||
      (this.size === '')){
      this.missingOrderInfo();
      this.resetLabel();
    } else {
      var newPizza: Pizza = {
        quantity: this.orderQuantityAmount,
        pizzaTopping: this.topping,
        pizzaSize: this.size
      };
      this.orderService.addPizza(newPizza);
      this.totalOrderQuantity = this.orderService.getOrderSize();
      this.totalOrderPrice = this.orderService.getOrderPrice();
      this.addAlert();
      this.resetLabel();
    }
  }

  resetLabel() {
    this.orderQuantityAmount = 0;
    this.topping = '';
    this.size = '';
  }

  resetBtn() {
    this.resetLabel();
    this.orderService.resetCurrentOrder();
  }

  toppingSelect(topping) {
    this.topping = topping;
    return this.topping;
  }

  sizeSelect(size) {
    this.size = size;
    return this.size;
  }

}
