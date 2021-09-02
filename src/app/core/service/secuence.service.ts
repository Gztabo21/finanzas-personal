import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { filter } from 'rxjs/operators';
import { Secuence } from '../module/secuence';

@Injectable({providedIn: 'root'})
export class SecuenceService {
    constructor(private httpClient: HttpClient) { }
    apiUrl:string = environment.databaseURL + '/secuence'
    headers = new HttpHeaders( {
        'Content-Type':'application/json'
        })
    
    addSecuence(secuence:Secuence){
        let url = `${this.apiUrl}.json`
        return this.httpClient.post(url,secuence,{headers:this.headers})
    }

    getSecuence(type){
        let url = `${this.apiUrl}.json`
        return this.httpClient.get(url).pipe( filter( (sec:Secuence)=> sec.name ===  type) )
    }
    update( secuence:Secuence,key$:string){
        let url = `${this.apiUrl}.json`
        return this.httpClient.put(url,secuence,{headers:this.headers})
      }
}