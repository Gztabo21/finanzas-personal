import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { SafeGuard }from 'src/app/safe-.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
},  
  {
    path: 'main',
    component: TabsPage,
    children: [
      {
        path: 'product',
        loadChildren: () => import('../components/product/product.module').then(m => m.ProductModule)
        // loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'client',
        loadChildren: () => import('../components/client/client.module').then(m => m.ClientModule)
      },
      {
        path: 'sale',
        loadChildren: () => import('../components/sale/sale.module').then(m => m.SaleModule),
        canActivate:[SafeGuard]
      },
      {
        path: 'payment',
        loadChildren: () => import('../components/payment/payment.module').then(m => m.PaymentModule)
      },
      {
        path: 'order',
        loadChildren: () => import('../components/order/order.module').then(m => m.OrderModule),

      }
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('../components/auth/auth.module').then(m => m.AuthModule)
  },
 /*  {
    path: '',
    redirectTo: '/main/product',
    pathMatch: 'full'
  } */
];

@NgModule({
  imports: [    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
