import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderNavigationPage } from './order-navigation.page';

const routes: Routes = [
  {
    path: '',
    component: OrderNavigationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderNavigationPageRoutingModule {}
