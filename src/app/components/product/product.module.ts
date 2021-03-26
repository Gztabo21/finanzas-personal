import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from 'src/app/core/shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
// services
import { ProductService } from 'src/app/core/service/product.service';
import { LayoutModule } from 'src/app/components/layout/layout.module';

@NgModule({
  imports: [ 
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    ProductRoutingModule,
    SharedModule,
    LayoutModule, 
    IonicModule],
  declarations: [
    ProductFormComponent,
    ProductListComponent],
  exports: [ProductListComponent],
  providers:[
    ProductService
  ]
})
export class ProductModule {}
