import { Component, OnInit,ViewChild } from '@angular/core';
import { FormControl,FormGroup, FormBuilder, Validators } from '@angular/forms'
//module
import { Product } from 'src/app/core/module/product';
import { SaleItem } from 'src/app/core/module/item-sale';
//services
import { ProductService } from 'src/app/core/service/product.service';

@Component({
  selector: 'app-sale-product-form',
  templateUrl: './sale-product-form.component.html',
  styleUrls: ['./sale-product-form.component.scss'],
})
export class SaleProductFormComponent implements OnInit {
  @ViewChild('quantity') quantity:number;
  products : Product[];
  saleItem : SaleItem;
  saleItemForm: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private _productService :ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
    this.saleItemForm = this.createForm();
  }

  getProducts(){
    this._productService.getAll().subscribe((data:Product[])=>{
      this.products = data ;
    })
  }

  createForm():FormGroup{
    return this._formBuilder.group({
      id:[ this.saleItem?.id],
      product:[this.saleItem?.product,Validators.required],
      quantity:[this.saleItem?.quantity||0],
      unitPrice:[this.saleItem?.unitPrice || 0],
      amountTotal:[this.saleItem?.amounTotal || 0]
    })
  }
  
increase(){
  let data = this.saleItemForm.getRawValue()
  this.quantity
  data.quantity = data.quantity ++;
  console.log(this.quantity)

}

decrease(){

}

}
