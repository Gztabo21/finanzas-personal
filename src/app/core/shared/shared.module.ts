import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {KeysPipe } from '../pipe/keys.pipe'
import { IonicModule } from '@ionic/angular';
import { MessageService } from 'src/app/core/service/message.service';
import { ProductService }from 'src/app/core/service/product.service';
// components
import {CardComponent} from './card/card.component';

@NgModule({
 imports:      [ CommonModule,
  ReactiveFormsModule,
  IonicModule,
],
 declarations: [ KeysPipe,
  CardComponent
 ],
 exports:      [ HttpClientModule,
                KeysPipe,
                FormsModule,
                ReactiveFormsModule,
                IonicModule,
                CardComponent
                  ],
providers:[
  MessageService,
  ProductService
]
})
export class SharedModule { }