import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
//shared 
import { SharedModule } from 'src/app/core/shared/shared.module';
// Components
import { HeaderComponent } from './header/header.component'
import { TableComponent } from './table/table.component';


@NgModule({
  imports: [ 
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    IonicModule],
  declarations: [
    HeaderComponent,
    TableComponent
  ],
  exports: [
    HeaderComponent,
    TableComponent
  ],
  providers:[

  ]
})
export class LayoutModule {}
