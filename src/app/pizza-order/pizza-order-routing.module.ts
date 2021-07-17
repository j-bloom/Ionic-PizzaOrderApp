import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PizzaOrderPage } from './pizza-order.page';

const routes: Routes = [
  {
    path: '',
    component: PizzaOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PizzaOrderPageRoutingModule {}
