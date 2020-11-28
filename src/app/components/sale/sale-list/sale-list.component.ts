import { Component, OnInit } from '@angular/core';
// service
import { SaleService } from 'src/app/core/service/sale.service';
// modules
import { Sale } from 'src/app/core/module/sale';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.scss'],
})
export class SaleListComponent implements OnInit {
  sales :Sale ;
  constructor(
    private _saleService :SaleService
  ) { }

  ngOnInit() {
    this.getAllSales();
  }

  getAllSales(){
    this._saleService.getAll().subscribe((data:Sale)=>{
      this.sales = data;
    })
  }

  delete(e){
    this._saleService.detele(e).subscribe((data)=>{
        this.getAllSales();
    })

  }
}
