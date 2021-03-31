import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-deliver-form',
  templateUrl: './deliver-form.component.html',
  styleUrls: ['./deliver-form.component.scss'],
})
export class DeliverFormComponent implements OnInit {
  @Input() client:any;
  constructor() { }

  ngOnInit() {
    console.log(this.client)
  }

}
