import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { PaymentListComponent } from './payment-list/payment-list.component';

@NgModule({
  imports: [ 
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    PaymentRoutingModule, 
    IonicModule],
  declarations: [
    PaymentFormComponent,
    PaymentListComponent]
})
export class PaymentModule {}
