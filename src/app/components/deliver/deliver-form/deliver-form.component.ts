import { Component, Input, OnInit } from '@angular/core';
import { ClientService}  from 'src/app/core/service/client.service';
import { Client } from 'src/app/core/module/client';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeliverService } from 'src/app/core/service/deliver.service';
import { MessageService } from 'src/app/core/service/message.service';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-deliver-form',
  templateUrl: './deliver-form.component.html',
  styleUrls: ['./deliver-form.component.scss'],
})
export class DeliverFormComponent implements OnInit {
  /* @Input() idClient:any;
  @Input() sale:any; */
  constructor(private clientService:ClientService,
              public messageService:MessageService,
              public modalController: ModalController,
              private formBuilder:FormBuilder) { }
 /*  @Input() client : Client */
  deliForm : FormGroup;
  
  ngOnInit() {
    // this.verificarClient();
    this.deliForm = this.createForm();
    console.log(this.deliForm)
  }
  /* verificarClient(){
    if (this.idClient != 'other' ){
      let client = this.clientService.get(this.idClient)
      client.subscribe((data:Client)=>{
        this.client = data;
        this.deliverForm = this.createForm();
        this.deliverForm = this.createForm();
        this.deliverForm = this.createForm();
      })
      this.deliverForm = this.createForm();
    }else{
    this.deliverForm = this.createForm();
    }
  } */
  createForm():FormGroup{
    return this.formBuilder.group({
      name:['' ,Validators.required],
      lastname:['',Validators.required],
      cedula:['',Validators.required],
      phone:['',Validators.required],
      address:['',Validators.required] 
    })
  }
  test($event){
    console.log(this.deliForm.getRawValue())
  }
  save(){
    let dataForm = this.deliForm.getRawValue()
    console.log(dataForm)
    // this.modalController.dismiss(dataForm);
    // this.clientService.create(dataForm).subscribe(x=>this.messageService.notification('Operation Sucess',2000))
  }
}
