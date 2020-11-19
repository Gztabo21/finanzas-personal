import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SaleRoutingModule } from './sale-routing.module';
import { SaleFormComponent } from './sale-form/sale-form.component';
import { SaleListComponent } from './sale-list/sale-list.component';

@NgModule({
  imports: [ 
    CommonModule, 
    FormsModule,
    SaleRoutingModule, 
    IonicModule],
  declarations: [
    SaleFormComponent,
    SaleListComponent],
  // exports: [ProductListComponent]
})
export class SaleModule {}
