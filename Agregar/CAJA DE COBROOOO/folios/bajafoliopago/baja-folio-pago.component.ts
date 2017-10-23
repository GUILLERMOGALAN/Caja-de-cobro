import { Component, OnInit } from '@angular/core';
/**CARGAMOS EL MODELO */
import { BajaFolioPago } from './models/baja-folio-pago'
declare var jquery:any;
declare var $ :any;

@Component({
    selector: 'baja-folio-pago',
    templateUrl: './baja-folio-pago.component.html',
    styleUrls: ['./baja-folio-pago.component.css']
})
export class BajaFolioComponent implements OnInit
{
    public altafoliopago: BajaFolioPago; //Instanciamos el modelo para alta de serie en PAGOS
    //public altaserieVale: Series; //Instanciamos el modelo para alta de serie en VALES
    title :string;
    
    constructor(){
        /**Inicializamos el modelo SERIE */
        this.title = "Baja Definitiva en Folios Pago";
        this.altafoliopago = new BajaFolioPago("","","");
        //this.altaserieVale = new Series("","");
    }
    ngOnInit(){
       
      }
}