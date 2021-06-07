import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/core/module/payment';
import { Validators } from '@angular/forms';
import { FormBuilder,FormGroup }from '@angular/forms';
import { Sale } from 'src/app/core/module/sale';
import { SaleService } from 'src/app/core/service/sale.service';
import {ClientService} from 'src/app/core/service/client.service';
import { Client } from 'src/app/core/module/client';
import { from } from 'rxjs';
import { PaymentService } from 'src/app/core/service/payment.service';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss'],
})
export class PaymentFormComponent implements OnInit {
public paymentForm:FormGroup;
payment:Payment;
sales: Sale;
today= new Date;
id:any ;
  constructor( 
    private route:ActivatedRoute,
    private router:Router,
    private formBuilder:FormBuilder,
    private _saleService: SaleService,
    public _clientService: ClientService,
    private _paymentService: PaymentService,
    public toastController: ToastController,
  ) {
    this.route.params.subscribe(data=>{this.id = data['id']})
   }

  ngOnInit() {
    this.paymentForm = this.createForm();
    this.getSale();
  }
  createForm():FormGroup{
    return this.formBuilder.group({
      id:[this.payment?.id || 0],
      sale:[this.payment?.sale , Validators.required],
      amount : [this.payment?.amount || 0],
      amountDate:[this.payment?.paymentDate || this.today]
    })
  }
  async notification(message:string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
  save(){
    let data = this.paymentForm.getRawValue();
    let response$ =  this._paymentService.create(data)
    response$.subscribe((data)=>{this.notification('operation success')})
  }
  onSelectChange(e){
      this.sales = e.value;
  }
  getSale(){
    this._saleService.getAll().subscribe((data:Sale)=>{
      this.sales = data;
    })
  }

}
