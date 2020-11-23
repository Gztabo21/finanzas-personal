import { Component, OnInit } from '@angular/core';
import { snapshotChanges } from '@angular/fire/database';
import { Product } from 'src/app/core/module/product';
import { ProductService }from 'src/app/core/service/product.service';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[]=[];
  constructor(
    private productService:ProductService,
    public actionSheetController: ActionSheetController,
    public alertController: AlertController,
    public router: Router
  ) { }

  ngOnInit() {
    this.getproducts();
  }

  async getproducts(){
    await this.productService.getAll().then((snapshot) =>{ 
      snapshot.forEach((child) => {    
        this.products.push({id:child.key,name:child.val().name,price:child.val().price,quantity:child.val().price})
      });
    })  
    
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
          this.router.navigate(['/main/product/edit/'+id])
        }
      },
     /*   {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, */
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
        handler: () => this.deleteProduct(id)
      }]
    });

    await alert.present();
  }

  // eliminar items
  deleteProduct(id){
    console.log(id)
  }
  

}
