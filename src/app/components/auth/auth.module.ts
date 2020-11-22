import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { AuthService } from 'src/app/core/service/auth.service';

@NgModule({
  imports: [ 
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule, 
    IonicModule],
  declarations: [
    AuthFormComponent,
],providers:[
  AuthService
]

})
export class AuthModule {}
