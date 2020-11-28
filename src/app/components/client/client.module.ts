import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ClientRoutingModule } from './client-routing.module';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientListComponent } from './client-list/client-list.component';
import { LayoutModule } from 'src/app/components/layout/layout.module';
//shared
import { SharedModule } from 'src/app/core/shared/shared.module';
// services
import { ClientService } from 'src/app/core/service/client.service';

@NgModule({
  imports: [ 
    CommonModule, 
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    ClientRoutingModule, 
    LayoutModule,
    IonicModule],
  declarations: [

    ClientFormComponent,
    ClientListComponent],
  providers:[
    ClientService
  ]
})
export class ClientModule {}
