import { Component, OnInit,ViewChild } from '@angular/core';
import { FormControl,FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
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
 /*  @ViewChild('quantity'); */
  quantity:number = 0;
  amountTotal:number = 0;
  unitPrice:number = 0;
  products : Product[];
  saleItem : SaleItem;
  totalStock:number;
  saleItemForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _productService :ProductService,
    public modalController: ModalController,
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
      id:[this.saleItem?.id],
      product:[this.saleItem?.product,Validators.required],
      quantity:[this.saleItem?.quantity||0],
      unitPrice:[this.saleItem?.unitPrice || 0],
      amountTotal:[this.saleItem?.amountTotal || 0]
    })
  }
  
increase(){
  this.amountTotal = eval(String(this.amountTotal)+'+'+String(this.unitPrice));
  this.quantity = this.quantity+1
}

getProduct(e){
  let key = e.detail.value;
  let dataForm = this.saleItemForm.getRawValue();
  this.unitPrice = this.products[key].price;
  this.amountTotal = this.products[key].price;
  this.totalStock = this.products[key].quantity
  this.quantity = 1;
  /* this.products[e.value] */
}

decrease(){
  if(this.quantity > 0){
    this.amountTotal = this.amountTotal - this.unitPrice ;
    this.quantity = this.quantity - 1;
  }else{
    this.quantity = 0 ;
    this.amountTotal = 0;
    this.unitPrice = 0;
  }
}

saveProduct():void {
  let dataForm = this.saleItemForm.getRawValue();
  this.modalController.dismiss(dataForm);
}



}
