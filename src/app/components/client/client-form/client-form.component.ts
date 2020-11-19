import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/core/module/client';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent implements OnInit {
clientForm:FormGroup;
client:Client
  constructor( private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.clientForm = this.createForm();
  }

  createForm():FormGroup{
    return this.formBuilder.group({
      name:[this.client?.name,Validators.required],
      lastname:[this.client?.lastname,Validators.required],
      phone:[this.client?.phone,Validators.required]
    })
  }
  save(){
    let data =  this.clientForm.getRawValue();
  }

}
