import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderCurrentPageRoutingModule } from './order-current-routing.module';

import { OrderCurrentPage } from './order-current.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderCurrentPageRoutingModule
  ],
  declarations: [OrderCurrentPage]
})
export class OrderCurrentPageModule {}
