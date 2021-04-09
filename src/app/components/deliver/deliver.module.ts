import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliverFormComponent } from './deliver-form/deliver-form.component';
import { DeliverListComponent } from './deliver-list/deliver-list.component';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    DeliverFormComponent,
    DeliverListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule
  ]
})
export class DeliverModule { }
