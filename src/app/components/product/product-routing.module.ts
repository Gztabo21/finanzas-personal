import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';


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
        component:ProductListComponent
      },
      {
        path:'new',
        component:ProductFormComponent
      },
      {
        path:'edit/:id',
        component: ProductFormComponent
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
export class ProductRoutingModule {}
