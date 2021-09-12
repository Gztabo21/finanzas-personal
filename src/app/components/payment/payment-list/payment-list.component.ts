import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/core/service/payment.service';
import { SaleService } from 'src/app/core/service/sale.service';
import { ClientService } from 'src/app/core/service/client.service';
import { Payment } from 'src/app/core/module/payment';
import { Client} from 'src/app/core/module/client';
import { Sale } from 'src/app/core/module/sale';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.scss'],
})
export class PaymentListComponent implements OnInit {
  payments: Payment[]
  clients : Client[]
  sales : Sale[]
  constructor(private _paymentService:PaymentService,
              private _clienteService: ClientService,
              private _saleService: SaleService) { }

  ngOnInit() {
    this.getDatas()
   
  }

  getDatas(){
    this._paymentService.getAll().subscribe((pay:Payment[])=>this.payments = pay)
    this._saleService.getAll().subscribe((sales:Sale[])=> this.sales = sales)
  }
  getName(key){
      return this.sales ? this.sales[key].name : null
  }
}
