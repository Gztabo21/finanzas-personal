import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { SharedModule } from'src/app/core/shared/shared.module';
import { SaleService } from 'src/app/core/service/sale.service';
import { ClientService } from 'src/app/core/service/client.service';
import { PaymentService } from 'src/app/core/service/payment.service';

@NgModule({
  imports: [ 
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    PaymentRoutingModule,
    SharedModule,
    LayoutModule, 
    IonicModule],
  declarations: [
    PaymentFormComponent,
    PaymentListComponent],
  providers:[
    SaleService,
    ClientService,
    PaymentService
  ]
})
export class PaymentModule {}
