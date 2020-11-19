import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleListComponent } from './sale-list/sale-list.component';
import { SaleFormComponent } from './sale-form/sale-form.component';


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
        component:SaleListComponent
      },
      {
        path:'new',
        component:SaleFormComponent
      },
      {
        path:'edit/:id',
        component: SaleFormComponent
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
export class SaleRoutingModule {}
