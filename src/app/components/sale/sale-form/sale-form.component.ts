import { Component, OnInit } from '@angular/core';
import { Route,ActivatedRoute} from '@angular/router';
import{ FormBuilder,FormGroup, Validators } from '@angular/forms';
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
  sale:Sale;
  saleForm:FormGroup;
  amountTotal:number = 0;
  today:Date = new Date;

  constructor(
    private _saleService:SaleService,
     public modalController:ModalController,
     private _clientService:ClientService,
     private _productService:ProductService,
     private _formbuilder:FormBuilder
   /*  private route:Route,
    private router:ActivatedRoute, */
  ) { }

  ngOnInit() {
    this.getClients();
    this.getProducts();
    this.saleForm = this.createForm();
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
      this.saleItems.push(item);
      this.updateAmount();
    })
    return await modal.present();
  }

  getClients(): void{
    this._clientService.getAll().subscribe((data:Client[])=>{
      this.clients = data;
    })
  }

  getProduct(key):string {
    let name = this.products[key].name;
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
  saveSale(){
    let dataForm: Sale = this.saleForm.getRawValue();
    dataForm.state = 'borrador';
    dataForm.number = 1;
    dataForm.saleItem = this.saleItems;
    dataForm.amountTotal = this.amountTotal;
    console.log(dataForm); 
    this._saleService.create(dataForm).subscribe(data=>console.log(data));
  }
   

}
