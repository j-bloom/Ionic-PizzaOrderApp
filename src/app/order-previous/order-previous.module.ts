import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderPreviousPageRoutingModule } from './order-previous-routing.module';

import { OrderPreviousPage } from './order-previous.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderPreviousPageRoutingModule
  ],
  declarations: [OrderPreviousPage]
})
export class OrderPreviousPageModule {}
