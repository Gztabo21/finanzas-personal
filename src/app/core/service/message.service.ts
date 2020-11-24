import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  notification(message:string){
   // return this.
  }
  confirm(){

  }

  clear() {
    this.messages = [];
  }
}