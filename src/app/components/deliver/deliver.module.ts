import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliverFormComponent } from './deliver-form/deliver-form.component';
import { DeliverListComponent } from './deliver-list/deliver-list.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { DeliverService } from 'src/app/core/service/deliver.service';
import { ClientService } from 'src/app/core/service/client.service';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    DeliverFormComponent,
    DeliverListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    IonicModule
  ],
  providers:[
    DeliverService,
    ClientService
  ]
})
export class DeliverModule { }
