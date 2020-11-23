import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Product } from '../module/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private angularFireDataBase: AngularFireDatabase
  ) { }
  create(product:Product){
   return this.angularFireDataBase.database.ref('products/').push().set({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: product.quantity
    })
  }
  getAll(){
      return this.angularFireDataBase.database.ref('products/').once('value')
  }
}
