import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { map } from 'rxjs/operators'
import { Client } from '../module/client';


@Injectable({
  providedIn: 'root'
})

export class DeliverService {
   apiUrl:string = environment.databaseURL + '/clients'
   headers = new HttpHeaders( {
    'Content-Type':'application/json'
  })
  constructor(
    private http: HttpClient
  ) { }
  create(deliver:Client){
   let url = `${this.apiUrl}.json`
   return this.http.post( url,deliver,{headers:this.headers})
  }
  update( deliver:Client,key$:string){
    let url = `${this.apiUrl}/${key$}.json`
    return this.http.put(url,deliver,{headers:this.headers})
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
