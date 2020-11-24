import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { map } from 'rxjs/operators'
import { Product } from '../module/product';


@Injectable({
  providedIn: 'root'
})

export class ProductService {
   apiUrl:string = environment.databaseURL + '/products'
   headers = new HttpHeaders( {
    'Content-Type':'application/json'
  })
  constructor(
    private angularFireDataBase: AngularFireDatabase,
    private http: HttpClient
  ) { }
  create(product:Product){
   let url = `${this.apiUrl}.json`
   return this.http.post( url,product,{headers:this.headers})
  }
  update( product:Product,key$:string){
    let url = `${this.apiUrl}/${key$}.json`
    return this.http.put(url,product,{headers:this.headers})
  }
  detele(key$:string){
    let url = `${this.apiUrl}/${key$}.json`
    return this.http.delete(url)
  }
  get(id:string){
    let url = `${this.apiUrl}/${id}.json`
    return this.http.get(url)

  }
  getAll(){
     let url = `${this.apiUrl}.json`
     return this.http.get(url).pipe(map(r=>{
       return r
     }))

     // return this.angularFireDataBase.database.ref('products/').once('value')
  }
}
