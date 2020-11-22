import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/core/module/product';
import { ProductService } from 'src/app/core/service/product.service';
import { Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  public productForm:FormGroup;
  product: Product;
  constructor(    
    private formBuilder : FormBuilder,
    private  productService: ProductService,
    public router: Router,
    public routeActivate:ActivatedRoute
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
  let data = this.productForm.getRawValue()
  this.productService.create(data).then(data=>{
    console.log('Almcenado')
    this.router.navigate(['../main/product/list'])

  }).catch(error=>{console.log(error)})
}
  

}
