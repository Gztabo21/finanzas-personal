import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
// Components
import { HeaderComponent } from './header/header.component'


@NgModule({
  imports: [ 
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    IonicModule],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  providers:[

  ]
})
export class LayoutModule {}
