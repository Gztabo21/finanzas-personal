import { Component, OnInit,Input, Output } from '@angular/core';
import { Sale} from '../../module/sale';
import { Product } from '../../module/product';
import { Payment } from '../../module/payment';
import { ProductService } from '../../service/product.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() sale: Sale;
  @Input() name: string;
  @Input() payments: any[];
  @Input() payment :any;
  products : Product[];
  total
  constructor( private _productService: ProductService) {   }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this._productService.getAll().subscribe((data:any)=> this.products = data)
  }
  getNameProduct(key){
    return this.products ? this.products[key].name : null
  }
  getAmountPayment(){
    this.total  = this.payments?.map(r=>r.amount)
    return this.total?.reduce((acc,crr)=>eval(acc+'+'+crr));
  }
  getTotal(amountSale){
    return eval(amountSale +'-'+ this.getAmountPayment())
  }
}
