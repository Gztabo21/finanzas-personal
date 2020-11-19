import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
},  
  {
    path: '',
    // component: ProductListComponent,
    children:[
      {
        path:'list',
        component:PaymentListComponent
      },
      {
        path:'new',
        component:PaymentFormComponent
      },
      {
        path:'edit/:id',
        component: PaymentFormComponent
      }
    ]
  },
  // {
  //   path:'new',
  //   component: ProductFormComponent,
  // },
  // {
  //   path:'edit',
  //   component: ProductFormComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule {}
