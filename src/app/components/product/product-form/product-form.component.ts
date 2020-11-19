import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { product } from 'src/app/core/module/product'
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  public productForm:FormGroup;
  product: product;
  constructor(    
    private formBuilder : FormBuilder
    ) { }

  ngOnInit() {
    this.productForm = this.createForm();
  }

  createForm():FormGroup{
    return this.formBuilder.group({
      name:[this.product?.name,Validators.required],
      price:[this.product?.price || 0.00 ,Validators.required],
      quantity:[ this.product?.quantity || 0 ,Validators.required]
    })
  }
save(){
  console.log(this.productForm.getRawValue())
}
  

}
