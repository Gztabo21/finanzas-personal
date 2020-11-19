import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientListComponent } from './client-list/client-list.component';


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
        component:ClientListComponent
      },
      {
        path:'new',
        component:ClientFormComponent
      },
      {
        path:'edit/:id',
        component: ClientFormComponent
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
export class ClientRoutingModule {}
