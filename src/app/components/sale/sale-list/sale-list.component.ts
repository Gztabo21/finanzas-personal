import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
// service
import { SaleService } from 'src/app/core/service/sale.service';
import { ClientService } from 'src/app/core/service/client.service';
// modules
import { Sale } from 'src/app/core/module/sale';
import { Client } from 'src/app/core/module/client';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.scss'],
})
export class SaleListComponent implements OnInit {
  sales :Sale ;
  clients:Client[];
  constructor(
    private _saleService :SaleService,
    private _clientService:ClientService,
    public router:Router,
    public actionSheetController:ActionSheetController,
    public alertController:AlertController
  ) { }

  ngOnInit() {
    this.getAllSales();
    this.getAllClient();
  }

  getAllSales(){
    this._saleService.getAll().subscribe((data:Sale)=>{
      this.sales = data;
    })
  }
  getAllClient(){
    this._clientService.getAll().subscribe((data:Client[])=>{
        this.clients = data;
    })
  }
  getNameClient(key:string){
    let nameClient
    this.clients ?
    nameClient = this.clients[key].name : null
    return nameClient;
  }
  async ActionSheet(id) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Producto',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        handler: ()=>this.confirmDelete(id)
      }, {
        text: 'Editar',
        icon: 'pencil-outline',
        handler: () => {
          this.router.navigate(['/main/sale/edit/'+id])
        }
      },
       {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  //alert confirmar delete
  async confirmDelete(id) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm',
      /* subHeader: 'Subtitle', */
      message: 'Esta seguro quieres Eliminar?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Okay',
        cssClass:'primary',
        handler: () => this.delete(id)
      }]
    });

    await alert.present();
  }



  delete(e){
    this._saleService.detele(e).subscribe((data)=>{
        this.getAllSales();
    })

  }
}
