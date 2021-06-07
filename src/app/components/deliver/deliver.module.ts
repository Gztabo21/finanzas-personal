import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliverFormComponent } from './deliver-form/deliver-form.component';
import { DeliverListComponent } from './deliver-list/deliver-list.component';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { DeliverService } from 'src/app/core/service/deliver.service';
import { ClientService } from 'src/app/core/service/client.service';

@NgModule({
  declarations: [
    DeliverFormComponent,
    DeliverListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule
  ],
  providers:[
    DeliverService,
    ClientService
  ]
})
export class DeliverModule { }
