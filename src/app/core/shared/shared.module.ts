import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {KeysPipe } from '../pipe/keys.pipe'
import { IonicModule } from '@ionic/angular';

@NgModule({
 imports:      [ CommonModule,
  ReactiveFormsModule,
  IonicModule
],
 declarations: [ KeysPipe  ],
 exports:      [ HttpClientModule,
                KeysPipe,
                ReactiveFormsModule,IonicModule
                  ]
})
export class SharedModule { }