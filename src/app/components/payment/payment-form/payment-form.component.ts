import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/core/module/payment';
import { Validators } from '@angular/forms';
import { FormBuilder,FormGroup }from '@angular/forms'

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss'],
})
export class PaymentFormComponent implements OnInit {
public paymentForm:FormGroup;
payment:Payment;
today= new Date; 
  constructor( 
    private formBuilder:FormBuilder
  ) { }

  ngOnInit() {
    this.paymentForm = this.createForm();
  }
  createForm():FormGroup{
    return this.formBuilder.group({
      id:[this.payment?.id || 0],
      client:[this.payment?.client , Validators.required],
      amount : [this.payment?.amount || 0],
      amountDate:[this.payment?.paymentDate || this.today]
    })
  }
  save(){
    let data = this.paymentForm.getRawValue();
    console.log(data);
  }
}
