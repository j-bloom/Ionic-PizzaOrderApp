import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PizzaOrderPageRoutingModule } from './pizza-order-routing.module';

import { PizzaOrderPage } from './pizza-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PizzaOrderPageRoutingModule
  ],
  declarations: [PizzaOrderPage]
})
export class PizzaOrderPageModule {}
