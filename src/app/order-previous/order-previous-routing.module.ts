import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderPreviousPage } from './order-previous.page';

const routes: Routes = [
  {
    path: '',
    component: OrderPreviousPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderPreviousPageRoutingModule {}
