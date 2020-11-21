import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthFormComponent } from './auth-form/auth-form.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full',
},  
  {
    path: '',
    // component: ProductListComponent,
    children:[
      {
        path:'signin',
        component:AuthFormComponent
      },
      {
        path:'new',
        component:AuthFormComponent
      },
      {
        path:'edit/:id',
        component: AuthFormComponent
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
export class AuthRoutingModule {}
