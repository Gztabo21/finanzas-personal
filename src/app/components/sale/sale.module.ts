import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SaleRoutingModule } from './sale-routing.module';
import { SaleFormComponent } from './sale-form/sale-form.component';
import { SaleListComponent } from './sale-list/sale-list.component';
import { SaleProductFormComponent } from './sale-product-form/sale-product-form.component';
import { LayoutModule } from 'src/app/components/layout/layout.module'
//Service
import { SaleService } from 'src/app/core/service/sale.service';
import { ClientService } from 'src/app/core/service/client.service';
import { ProductService } from 'src/app/core/service/product.service'
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
    SaleProductFormComponent,
    SaleListComponent],
  providers:[
    SaleService,
    ClientService,
    ProductService
  ]
  // exports: [ProductListComponent]
})
export class SaleModule {}
