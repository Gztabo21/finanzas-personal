import { Component, OnInit } from '@angular/core';
import { snapshotChanges } from '@angular/fire/database';
import { Product } from 'src/app/core/module/product';
import { ProductService }from 'src/app/core/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor(
    private productService:ProductService
  ) { }

  ngOnInit() {
    this.getproducts();
  }

  getproducts(){
    let vat = this.productService.getAll().then(snapshot =>{
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
       /*  this.products.push(childData); */
        // ...
      });
    })
    
  }

}
