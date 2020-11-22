import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit {
  signinForm: FormGroup;
  message:string = '';
  errorAuth:Boolean = false ;
  constructor(
    private formBuilder:FormBuilder,
    private authService: AuthService,
    public router: Router,
  ) { }
    createForm():FormGroup{
      return this.formBuilder.group({
        email:['',Validators.required],
        password:['',Validators.required]
      })
    }
  ngOnInit() {
    this.signinForm = this.createForm();
  }

  signIn(){
    let auth = this.signinForm.getRawValue();
    this.authService.signIn(auth).then(data=>{
     this.router.navigate(['../main/product/list'])  
    }).catch( error =>{
      this.errorAuth =true;
      this.message = error.message;
    })

  }

}
