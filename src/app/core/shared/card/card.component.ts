import { Component, OnInit,Input } from '@angular/core';
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
  products : Product[];
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
    let total  = this.payments?.map(r=>r.amount)
    return total?.reduce((acc,crr)=>acc+crr);
  }
}
