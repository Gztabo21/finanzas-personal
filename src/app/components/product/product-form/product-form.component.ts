import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/core/module/product';
import { ProductService } from 'src/app/core/service/product.service';
import { Router,ActivatedRoute,ParamMap} from '@angular/router';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  public productForm:FormGroup;
  product: Product;
  editing:boolean = false;
  id:any;
  constructor(    
    private formBuilder : FormBuilder,
    private  productService: ProductService,
    public router: Router,
    public routeActivate:ActivatedRoute
    ) {
        this.routeActivate.params.subscribe(r=>{this.id = r['id']
      });
     }

  ngOnInit() {
    this.beEditing();
  }

  beEditing() {
  
    if(this.id){
      this.editing = true;
      this.productService.get(this.id).subscribe((data:Product)=>{
       this.product = data;
       this.productForm = this.createForm();
      })
      this.productForm = this.createForm();
    }else{
       this.productForm = this.createForm();
    }  
   
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
  if(this.editing){
    this.productService.update(data,this.id).subscribe(data=>{
      this.router.navigate(['../main/product/list'])
       console.log(data)
      })
  }else{
  this.productService.create(data).subscribe(data=>{
    this.router.navigate(['../main/product/list'])
     console.log(data)
    })
  }
}
  

}
