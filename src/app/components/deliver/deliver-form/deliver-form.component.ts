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
  @Input() idClient:any;
  @Input() sale:any;
  constructor(private clientService:ClientService,
              public messageService:MessageService,
              public modalController: ModalController,
              private formBuilder:FormBuilder) { }
  @Input() client : Client
  deliverForm : FormGroup;
  
  ngOnInit() {
    this.verificarClient();
    this.deliverForm = this.createForm();
  }
  verificarClient(){
    debugger
    if (this.idClient != 'other' ){
      let client = this.clientService.get(this.idClient)
      client.subscribe((data:Client)=>{
        this.client = data;
        console.log(data)
        this.deliverForm = this.createForm();
        this.deliverForm = this.createForm();
        this.deliverForm = this.createForm();
      })
      this.deliverForm = this.createForm();
    }else{
    this.deliverForm = this.createForm();
    }
  }
  createForm():FormGroup{
    return this.formBuilder.group({
      name:[this.client?.name || '' ,Validators.required],
      lastname:[this.client?.lastname || '',Validators.required],
      cedula:[this.client?.cedula || '',Validators.required],
      phone:[this.client?.phone || '',Validators.required],
      address:[this.client?.address|| '',Validators.required] 
    })
  }
  save(){
    let dataForm = this.deliverForm.getRawValue()
    this.modalController.dismiss(dataForm);
    // this.clientService.create(dataForm).subscribe(x=>this.messageService.notification('Operation Sucess',2000))
  }
}
