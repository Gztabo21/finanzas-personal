import { Component, OnInit } from '@angular/core';
import { Route,ActivatedRoute} from '@angular/router'
import { ModalController } from '@ionic/angular';
//components
import { SaleProductFormComponent } from '../sale-product-form/sale-product-form.component';
// services
import { SaleService } from 'src/app/core/service/sale.service';
import { ClientService } from 'src/app/core/service/client.service';
import { ProductService } from 'src/app/core/service/product.service';
// Module
import { Sale } from 'src/app/core/module/sale';
import { Product } from 'src/app/core/module/product'
import { SaleItem } from 'src/app/core/module/item-sale'
import { Client } from 'src/app/core/module/client'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sale-form',
  templateUrl: './sale-form.component.html',
  styleUrls: ['./sale-form.component.scss'],
})
export class SaleFormComponent implements OnInit {
  clients: Client[];
  saleItems: SaleItem[] = [];
  products: Product[]

  constructor(
/*     private _saleService:SaleService,*/
     public modalController:ModalController,
     private _clientService:ClientService,
     private _productService:ProductService,
   /*  private route:Route,
    private router:ActivatedRoute, */
  ) { }

  ngOnInit() {
    this.getClients();
    this.getProducts();
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: SaleProductFormComponent ,
      cssClass: 'my-custom-class',
      swipeToClose: true,
    });

    modal.onDidDismiss().then(data=>{
      let item = data.data;
      this.saleItems.push(item);
    })
    return await modal.present();
  }

  getClients(): void{
    this._clientService.getAll().subscribe((data:Client[])=>{
      this.clients = data;
    })
  }

  getProduct(key):string {
    let name = this.products[key].name
      return name
  /*   this._productService.get(key).pipe(
      map((r:Product)=>r.name)
    ).subscribe((data)=>{
      console.log(data);
       name =  data;
    }) */

  }
  // all products
  getProducts():void{
    this._productService.getAll().subscribe((data:Product[])=>{
      this.products = data;
    })
  }
  saveSale(){
    
  }
   

}
