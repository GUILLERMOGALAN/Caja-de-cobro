import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cajero',
  templateUrl: './cajero.component.html',
  styleUrls: ['./cajero.component.css']
})
export class CajerosComponent implements OnInit {
    public title:String;

  constructor() {
      this.title = "Aceptación de caja de cobro.";
  }
  ngOnInit() {
  }

}
