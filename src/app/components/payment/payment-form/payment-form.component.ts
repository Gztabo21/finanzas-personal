import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/core/module/payment';
import { Validators } from '@angular/forms';
import { FormBuilder,FormGroup }from '@angular/forms';
import { Sale } from 'src/app/core/module/sale';
import { SaleService } from 'src/app/core/service/sale.service';
import {ClientService} from 'src/app/core/service/client.service';
import { Client } from 'src/app/core/module/client';
import { from } from 'rxjs';
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
  constructor( 
    private formBuilder:FormBuilder,
    private _saleService: SaleService,
    public _clientService: ClientService
  ) { }

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
  save(){
    let data = this.paymentForm.getRawValue();
    console.log(data);
  }
  getSale(){
    this._saleService.getAll().subscribe((data:Sale)=>{
      this.sales = data;
      console.log(this.sales);
    })
  }
/*   getClients(){

  } */
 /*  getNameClient(key:string):String{
     this._clientService.get(key).subscribe((data:Client)=>{
         data.name
     })
  } */
}
