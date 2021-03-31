import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliverFormComponent } from './deliver-form/deliver-form.component';
import { DeliverListComponent } from './deliver-list/deliver-list.component';
import { SharedModule } from 'src/app/core/shared/shared.module';

@NgModule({
  declarations: [
    DeliverFormComponent,
    DeliverListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DeliverModule { }
