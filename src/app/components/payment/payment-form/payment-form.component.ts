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
import { filter, find, map } from 'rxjs/operators';
@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss'],
})
export class PaymentFormComponent implements OnInit {
public paymentForm:FormGroup;
payment:Payment;
payments : Payment[];
total:number = 0;
sales: Sale;
sale:Sale;
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
    this.getSales();
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
  validationAmount(e){
    this.total = e.target.value;
  }
  getSale(e){
    let key = e.target.value 
    this._saleService.get(key).subscribe((sale:Sale)=>this.sale = sale)
    this._paymentService.getAll().pipe(
      map((data:Payment,i)=>[...Object.values(data)])
    ).subscribe(data =>{
      this.payments = data.filter(r=>r.sale === key)
    })
  }
  save(){
    let data = this.paymentForm.getRawValue();
    let response$ =  this._paymentService.create(data)
    response$.subscribe((data)=>{this.notification('operation success')})
  }
  getSales(){
    this._saleService.getAll().subscribe((data:Sale)=>{
      this.sales = data;
    })
  }


}
