import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { map } from 'rxjs/operators'
import { Client } from '../module/client';


@Injectable({
  providedIn: 'root'
})

export class ClientService {
   apiUrl:string = environment.databaseURL + '/clients'
   headers = new HttpHeaders( {
    'Content-Type':'application/json'
  })
  constructor(
    private http: HttpClient
  ) { }
  create(client:Client){
   let url = `${this.apiUrl}.json`
   return this.http.post( url,client,{headers:this.headers})
  }
  update( client:Client,key$:string){
    let url = `${this.apiUrl}/${key$}.json`
    return this.http.put(url,client,{headers:this.headers})
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
