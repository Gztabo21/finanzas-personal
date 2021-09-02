import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { filter, map } from 'rxjs/operators'
import { Payment } from '../module/payment';


@Injectable({
  providedIn: 'root'
})

export class PaymentService {
   apiUrl:string = environment.databaseURL + '/payments'
   headers = new HttpHeaders( {
    'Content-Type':'application/json'
  })
  constructor(
    private http: HttpClient
  ) { }
  create(payment:Payment){
   let url = `${this.apiUrl}.json`
   return this.http.post( url,payment,{headers:this.headers})
  }
  update( payment:Payment,key$:string){
    let url = `${this.apiUrl}/${key$}.json`
    return this.http.put(url,payment,{headers:this.headers})
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

  }
}
