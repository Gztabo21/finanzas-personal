import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/core/module/client';
import { ClientService }from 'src/app/core/service/client.service';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
