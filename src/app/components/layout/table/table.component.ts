import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

  @Input() elements : any[];
  @Input() nameModule : string;
  @Output() $key = new EventEmitter<string>();

  constructor(
    public router:Router,
    private actionSheetController : ActionSheetController,
    private alertController:AlertController
  ) { }

  ngOnInit() {

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
          this.router.navigate([`/main/${this.nameModule}/edit/`+id])
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
  deleteProduct(key$){
    this.$key.emit(key$);
 /*  this.productService.detele(key$).subscribe(data=>{
    this.getproducts();
  }) */
  }
}
