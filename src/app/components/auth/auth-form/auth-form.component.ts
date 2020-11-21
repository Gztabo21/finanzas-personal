import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit {
  signinForm: FormGroup;
  constructor(
    private formBuilder:FormBuilder
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
    console.log(auth);
  }

}
