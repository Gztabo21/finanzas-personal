import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {KeysPipe } from '../pipe/keys.pipe'
import { IonicModule } from '@ionic/angular';
import { MessageService } from 'src/app/core/service/message.service';

@NgModule({
 imports:      [ CommonModule,
  ReactiveFormsModule,
  IonicModule,
],
 declarations: [ KeysPipe  ],
 exports:      [ HttpClientModule,
                KeysPipe,
                FormsModule,
                ReactiveFormsModule,IonicModule
                  ],
providers:[
  MessageService
]
})
export class SharedModule { }