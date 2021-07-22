import { Component, OnInit, Output } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pizza-order',
  templateUrl: './pizza-order.page.html',
  styleUrls: ['./pizza-order.page.scss'],
})
export class PizzaOrderPage implements OnInit {


  @Output() orderQuantityAmount = 0;
  @Output() topping: string;
  @Output() size: string;
  totalOrderPrice = 0;
  totalOrderQuantity = 0;
  orderCost = 0;
  toppingItems: string[] = ['Cheese', 'Pepperoni', 'Hawian', 'Peppers', 'Sausage', 'Vegitarian'];
  sizeItems: string[] = ['Small', 'Medium', 'Large', 'Extra Large', 'Party'];
  headerImg: string = "https://media.istockphoto.com/vectors/pizza-party-vector-id166009481?k=6&m=166009481&s=612x612&w=0&h=pV5h9E6XQsH_Sj_449hmRxjFwDjtJUAt7q2o_QDdfto=";

  alertMessage: string;

  constructor(public alertController: AlertController) { }

  ngOnInit() {
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
        return this.totalOrderPrice;
      }else if(this.sizeSelect(this.size) === 'Medium') {
        this.totalOrderPrice += (this.orderQuantityAmount * mediumPizzaPrice);
        return this.totalOrderPrice;
      }else if(this.sizeSelect(this.size) === 'Large') {
        this.totalOrderPrice += (this.orderQuantityAmount * largePizzaPrice);
        return this.totalOrderPrice;
      }else if(this.sizeSelect(this.size) === 'Extra Large') {
        this.totalOrderPrice += (this.orderQuantityAmount * xLPizzaPrice);
        return this.totalOrderPrice;
      }else if(this.sizeSelect(this.size) === 'Party') {
        this.totalOrderPrice += (this.orderQuantityAmount * partyPizzaPrice);
        return this.totalOrderPrice;
      }else {
        return this.totalOrderPrice;
      }
  }

  addBtn() {
    if(this.orderQuantityAmount == 0 || 
      (this.topping == '') || 
      (this.size == '')){
      this.missingOrderInfo();
      this.resetLabel();
    } else {
      this.totalOrderQuantity += this.orderQuantityAmount;

      this.pizzaPrices();
      this.addAlert();
      this.resetLabel();

      return this.totalOrderQuantity;
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
    return this.topping = topping;
  }

  sizeSelect(size) {
    return this.size = size;
  }

}
