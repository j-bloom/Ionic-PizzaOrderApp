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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
