import { Component, OnInit } from '@angular/core';
import { Route,ActivatedRoute} from '@angular/router'
import { ModalController } from '@ionic/angular';
//components
import { SaleProductFormComponent } from '../sale-product-form/sale-product-form.component';
// services
import { SaleService } from 'src/app/core/service/sale.service';
import { ClientService } from 'src/app/core/service/client.service';
// Module
import { Sale } from 'src/app/core/module/sale';
import { Client } from 'src/app/core/module/client'

@Component({
  selector: 'app-sale-form',
  templateUrl: './sale-form.component.html',
  styleUrls: ['./sale-form.component.scss'],
})
export class SaleFormComponent implements OnInit {
  clients: Client[];
  constructor(
/*     private _saleService:SaleService,*/
     public modalController:ModalController,
     private _clientService:ClientService,
   /*  private route:Route,
    private router:ActivatedRoute, */
  ) { }

  ngOnInit() {
    this.getClients();
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: SaleProductFormComponent ,
      cssClass: 'my-custom-class',
      swipeToClose: true
    });
    return await modal.present();
  }

  getClients(){
    this._clientService.getAll().subscribe((data:Client[])=>{
      this.clients = data;
      console.log(this.clients);
    })
  }

}
