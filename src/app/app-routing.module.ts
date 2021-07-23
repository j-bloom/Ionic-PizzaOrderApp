import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pizza-order',
    pathMatch: 'full'
  },
  {
    path: 'pizza-order',
    loadChildren: () => import('./pizza-order/pizza-order.module').then( m => m.PizzaOrderPageModule)
  },
  {
    path: 'order-navigation',
    loadChildren: () => import('./order-navigation/order-navigation.module').then( m => m.OrderNavigationPageModule)
  },
  {
    path: 'order-current',
    loadChildren: () => import('./order-current/order-current.module').then( m => m.OrderCurrentPageModule)
  },
  {
    path: 'order-previous',
    loadChildren: () => import('./order-previous/order-previous.module').then( m => m.OrderPreviousPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
