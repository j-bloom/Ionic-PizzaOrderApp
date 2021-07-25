import { Component, OnInit, Input, Output } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Pizza, CurrentOrder } from '../services/order.model';
import { PizzaOrderService } from '../services/pizza-order.service';

@Component({
  selector: 'app-pizza-order',
  templateUrl: './pizza-order.page.html',
  styleUrls: ['./pizza-order.page.scss'],
})
export class PizzaOrderPage implements OnInit {

  @Input() topping: string;
  @Input() size: string;

  pizza: Pizza[];
  currentOrder: CurrentOrder[];

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

  pizzaPrices() {
    const smallPizzaPrice = 9.99;
    const mediumPizzaPrice = 14.99;
    const largePizzaPrice = 19.99;
    const xLPizzaPrice = 24.99;
    const partyPizzaPrice = 29.99;

      if(this.sizeSelect(this.size) === 'Small') {
        this.totalOrderPrice += (this.orderQuantityAmount * smallPizzaPrice);
      }else if(this.sizeSelect(this.size) === 'Medium') {
        this.totalOrderPrice += (this.orderQuantityAmount * mediumPizzaPrice);
      }else if(this.sizeSelect(this.size) === 'Large') {
        this.totalOrderPrice += (this.orderQuantityAmount * largePizzaPrice);
      }else if(this.sizeSelect(this.size) === 'Extra Large') {
        this.totalOrderPrice += (this.orderQuantityAmount * xLPizzaPrice);
      }else if(this.sizeSelect(this.size) === 'Party') {
        this.totalOrderPrice += (this.orderQuantityAmount * partyPizzaPrice);
      }
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
    this.totalOrderQuantity = 0;
    this.totalOrderPrice = 0;
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
