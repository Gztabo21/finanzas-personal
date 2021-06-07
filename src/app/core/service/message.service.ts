import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  constructor(public alertController : AlertController, public toastController:ToastController ){}

  async notification(message: string,duration:number,color='dark') {
    const toast = await this.toastController.create({
      message: message,
      duration: duration,
      color: color
    })
    return toast.present();
  }



  async confirm(){
    const alert  = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Confirm!',
        message: '<strong>Desea eliminar el elemento?</strong>',
        buttons: [
          {
            text: 'NOT',
            role: 'false',
            cssClass: 'secondary',
            handler: () => false
           
          }, {
            text: 'YES',
            role: 'true',
            cssClass:'primary',
            handler: () => true,
          }
        ]
      });
    //alert.dispatchEvent
    await alert.present()
    return  await alert.onDidDismiss()

  }

  clear() {
    this.messages = [];
  }
}