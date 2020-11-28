import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/core/module/client';
// service
import { ClientService } from 'src/app/core/service/client.service';
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit {
  clients:Client[];
  constructor( private _clientService:ClientService) { }

  ngOnInit() {
    this.getAllClient();
  }
  getAllClient(){
    this._clientService.getAll().subscribe((data:Client[])=>{
      this.clients = data;
    })
  }

  delete(e){
    this._clientService.detele(e).subscribe(data=>{
      this.getAllClient()
    })
  }
}
