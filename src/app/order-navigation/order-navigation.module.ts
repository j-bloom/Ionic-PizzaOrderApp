import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderNavigationPageRoutingModule } from './order-navigation-routing.module';

import { OrderNavigationPage } from './order-navigation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderNavigationPageRoutingModule
  ],
  declarations: [OrderNavigationPage]
})
export class OrderNavigationPageModule {}
