import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import{ FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
//components
import { SaleProductFormComponent } from '../sale-product-form/sale-product-form.component';
import { DeliverFormComponent } from 'src/app/components/deliver/deliver-form/deliver-form.component';
// services
import { SaleService } from 'src/app/core/service/sale.service';
import { ClientService } from 'src/app/core/service/client.service';
import { ProductService } from 'src/app/core/service/product.service';
// Module
import { Sale } from 'src/app/core/module/sale';
import { Product } from 'src/app/core/module/product'
import { SaleItem } from 'src/app/core/module/item-sale'
import { Client } from 'src/app/core/module/client'
import {state} from 'src/app/core/enums/state';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sale-form',
  templateUrl: './sale-form.component.html',
  styleUrls: ['./sale-form.component.scss'],
})
export class SaleFormComponent implements OnInit {
  /* variables */
  states: any = state;
  clients: Client[];
  saleItems: SaleItem[] = [];
  products: Product[]
  sale:Sale;
  saleForm:FormGroup;
  amountTotal:Number = 0;
  today:Date = new Date;
  id:string;
  editing:boolean = false;
  /* end variables */
  constructor(
    private _saleService:SaleService,
     public modalController:ModalController,
     public alertController: AlertController,
     private _clientService:ClientService,
     private _productService:ProductService,
     private _formbuilder:FormBuilder,
     public toastController: ToastController,
    private route:Router,
    private activateRoute:ActivatedRoute
  ) { 
    this.activateRoute.params.subscribe(data=>this.id = data['id'])
  }

  ngOnInit() {
    this.getClients();
    this.getProducts();
    this.saleForm = this.createForm();
    this.beEditing();
  }

  beEditing(){
    this.id ?
    this._saleService.get(this.id).subscribe((data:Sale)=>{
        this.sale = data;
        this.saleForm = this.createForm(); 
        this.sale.saleItem.forEach(r=>{
          this.saleItems.push(r);
        })
        this.amountTotal = this.sale.amountTotal;
        this.editing = true ;
    })
    :
    null

  }

  createForm():FormGroup{
    return this._formbuilder.group({
      state:[this.sale?.state || ''],
      number:[this.sale?.number],
      client:[this.sale?.client || '',Validators.required],
      saleInvoiceDate:[this.sale?.saleInvoiceDate || this.today ],
      amountTotal:[this.sale?.amountTotal || 0],
      saleItem:[this.sale?.saleItem || '']
    })
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: SaleProductFormComponent ,
      cssClass: 'my-custom-class',
      swipeToClose: true,
    });

    modal.onDidDismiss().then(data=>{
      let item = data.data;
      if(item){
      this.saleItems.push(item);
      this.updateAmount();
      }
    })
    return await modal.present();
  }

  async deliveredProductModal() {
    const modal = await this.modalController.create({
      component: DeliverFormComponent ,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      componentProps:{
        'client':this.sale?.id || 'other'
      }
    });

    modal.onDidDismiss().then(data=>{
      let item = data.data;
      if(item){
      this.saleItems.push(item);
      this.updateAmount();
      }
    })
    return await modal.present();
  }

  async notification(message:string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  getClients(): void{
    this._clientService.getAll().subscribe((data:Client[])=>{
      this.clients = data;
    })
  }

  getProduct(key):string {
    let name 
    this.products ?
    name = this.products[key].name
    : null
    return name;
  }
  updateAmount(){
    let amounts = this.saleItems.map(r =>r.amountTotal)
    this.amountTotal = amounts.reduce((acc,val)=>eval(String(acc+'+'+val)))
  }
  // all products
  getProducts():void{
    this._productService.getAll().subscribe((data:Product[])=>{
      this.products = data;
    })
  }
  delete(id:number){
    id == 0 ? this.saleItems.splice(id,id+1):this.saleItems.splice(id,id)
  }
  saveSale(){
    this.alertConfirmState()
  }
  save(state:string){
    let dataForm: Sale = this.saleForm.getRawValue();
    dataForm.state = state ;
    dataForm.number = 1;
    dataForm.saleItem = this.saleItems;
    dataForm.amountTotal = this.amountTotal; 
    let request = !this.editing ? this._saleService.create(dataForm):this._saleService.update(dataForm,this.id)
    request.subscribe(data=>{
      this.notification('Saved sale');
        this.route.navigate(['../main/sale/list']);
    })
  }

  async alertConfirmDelete(id) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: '<strong>Desea eliminar el elemento?</strong>',
      buttons: [
        {
          text: 'NOT',
          role: 'cancel',
          cssClass: 'secondary',
         
        }, {
          text: 'YES',
          cssClass:'primary',
          handler: () => {
            this.delete(id)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
          }
        }
      ]
    });

    await alert.present();
  }

  deliveredToOther(){
    console.log('fdsdfds')
  }
  async confirmDelivered() {
    const alert = await this.alertController.create({
      cssClass: 'alert-deliver',
      header: 'Confirm!',
      message: '<strong>Aquien le entregara el producto?</strong>',
      buttons: [
        {
          text: 'Otro',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.deliveredProductModal()
          }
        }, {
          text: 'Cliente',
          role:'confirm',
          cssClass:'primary',
          handler: () => {
            this.deliveredProductModal()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
          }
        }
      ]
    })
    await alert.present();
  }
   
  async alertConfirmState() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: '<strong>El pedido de venta se entregara de inmediato?</strong>',
      buttons: [
        {
          text: 'NOT',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
           this.save(state.pending)
          }
        }, {
          text: 'YES',
          handler: () => {
            this.save(state.delivered)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
          }
        }
      ]
    })
    await alert.present();
  }
}

