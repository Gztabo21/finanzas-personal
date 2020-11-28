import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {KeysPipe } from '../pipe/keys.pipe'

@NgModule({
 imports:      [ CommonModule],
 declarations: [ KeysPipe  ],
 exports:      [ HttpClientModule,
                KeysPipe
                  ]
})
export class SharedModule { }