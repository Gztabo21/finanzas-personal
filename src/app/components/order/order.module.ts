import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule} from './order-rounting.module'
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderListComponent } from './order-list/order-list.component';



@NgModule({
  declarations: [
    OrderFormComponent,
    OrderListComponent
  ],
  imports: [
    OrderRoutingModule,
    CommonModule,
  ]
})
export class OrderModule { }
