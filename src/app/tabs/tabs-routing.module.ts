import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
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
        loadChildren: () => import('../components/sale/sale.module').then(m => m.SaleModule)
      },
      {
        path: 'payment',
        loadChildren: () => import('../components/payment/payment.module').then(m => m.PaymentModule)
      },
      {
        path: '',
        redirectTo: '/main/product',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/main/product',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
