import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/core/module/client';
import { ActivatedRoute, Router } from '@angular/router';
// service
import { ClientService } from 'src/app/core/service/client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent implements OnInit {
  //Variable
clientForm:FormGroup;
client:Client;
id:string;
editing:boolean = false;
  constructor( 
    private route:ActivatedRoute,
    private router:Router,
    private _ClienteService:ClientService,
    private formBuilder:FormBuilder) { 

      this.route.params.subscribe(data=>{this.id = data['id']})
    }

  ngOnInit() {
    this.clientForm = this.createForm();
    this.beEditing();
  }
  beEditing(){
    if(this.id){
        this.editing=true;
        this._ClienteService.get(this.id).subscribe(
          (data:Client)=>{
              this.client = data;
              this.clientForm = this.createForm();
          }
        )

    }else{
        this.clientForm = this.createForm();
        this.editing = false;
    }
  }

  createForm():FormGroup{
    return this.formBuilder.group({
      name:[this.client?.name,Validators.required],
      lastname:[this.client?.lastname,Validators.required],
      cedule:[this.client?.cedula,Validators.required],
      phone:[this.client?.phone,Validators.required],
      address:[this.client?.address,Validators.required]
    })
  }
  save(){
    let data =  this.clientForm.getRawValue();
    if (!this.editing){
    this._ClienteService.create(data).subscribe(data=>{
      this.router.navigate(['../main/client/list']);
      console.log('Data Registrados');
    })
  }else{
    this._ClienteService.update(data,this.id).subscribe(
      (data)=>{
        this.router.navigate(['../main/client/list']);
        //message
      }
      )
    }
  }

}
