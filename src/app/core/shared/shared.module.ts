import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {KeysPipe } from '../pipe/keys.pipe'

@NgModule({
 imports:      [ CommonModule,ReactiveFormsModule],
 declarations: [ KeysPipe  ],
 exports:      [ HttpClientModule,
                KeysPipe,
                ReactiveFormsModule
                  ]
})
export class SharedModule { }