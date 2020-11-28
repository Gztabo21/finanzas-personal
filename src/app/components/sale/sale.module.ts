import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SaleRoutingModule } from './sale-routing.module';
import { SaleFormComponent } from './sale-form/sale-form.component';
import { SaleListComponent } from './sale-list/sale-list.component';
import { LayoutModule } from 'src/app/components/layout/layout.module'
//Service
import { SaleService } from 'src/app/core/service/sale.service';
import { ClientService } from 'src/app/core/service/client.service'
//shared
import { SharedModule } from 'src/app/core/shared/shared.module';

@NgModule({
  imports: [ 
    CommonModule, 
    FormsModule,
    SharedModule,
    LayoutModule,
    SaleRoutingModule, 
    IonicModule],
  declarations: [
    SaleFormComponent,
    SaleListComponent],
  providers:[
    SaleService,
    ClientService
  ]
  // exports: [ProductListComponent]
})
export class SaleModule {}
