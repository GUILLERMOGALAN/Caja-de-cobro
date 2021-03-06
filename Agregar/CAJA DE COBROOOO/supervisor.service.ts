import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../services/global';

@Injectable()
export class SupervisorService {
    public url: string;
    data: any = null;
    identity;
    token;
    constructor(private _http: Http) {
        this.url = GLOBAL.url;
    }
    //Codigo 200 exito
    //codigo 400 not found
    //codig 500 error interno (alguna de las razones puede ser por que se envia un dato incorrecto desde front)
      getCaja(status) {
        return this._http.get(this.url + 'cajas/obtener/'+status)
        .map((res: Response) => res.json());
      }

      getCajero() {
        return this._http.get(this.url + 'cajeros/obtenerSinCaja/')
        .map((res: Response) => res.json());
      }

      getcajasCajeros() {
        return this._http.get(this.url + 'cajascajeros/')
        .map((res: Response) => res.json());
      }
      
      getallCajeros() {
        return this._http.get(this.url + 'cajeros/')
        .map((res: Response) => res.json());
      }
 
      getCajero2() {
        return this._http.get(this.url + 'cajeros')
        .map((res: Response) => res.json());
      }

      asignarCaja(cajero){
        const params = JSON.stringify(cajero);
        const headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
        return this._http.put(this.url+'cajeros/asignarCaja', params, {headers: headers})
          .map((res: Response) => res.json());
      }

      desasignarCaja(cajero){
        const params = JSON.stringify(cajero);
        const headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
        return this._http.put(this.url+'cajeros/desasignarCaja', params, {headers: headers})
          .map((res: Response) => res.json());
      }

      //A partir de aqui se tiene que borrar ↓↓↓↓↓↓↓
      
      // getCategorias() {
      //   return this._http.get(this.url + 'categoria/leer/')
      //                    .map((res: Response) => res.json());
      // }

      // getProducto(codigoo){
      //   const params = JSON.stringify(codigoo);
      //   console.log(params);
      //   const headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
      //   return this._http.post(this.url + 'producto/buscar/', params, {headers: headers})
      //                    .map(res => res.json());
      // }

      // modificarCategoria(categoriaa) {
      //   const params = JSON.stringify(categoriaa);
      //   console.log(params);
      //   const headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
      //   return this._http.put(this.url+'categoria/modificar', params, {headers: headers})
      //     .map((res: Response) => res.json());
      // }

      // eliminarCategoria(categoriaa) {
      //   const headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
      //   return this._http.delete('http://192.168.0.29:8080/categoria/eliminar/' + categoriaa, {headers: headers})
      //     .map((res: Response) => res.json());
      // }

      /**SERVICIOS DE SERIES */
      altadeSerie(serie){
        const params = JSON.stringify(serie);
        const headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
        return this._http.put('http://192.168.0.18:8080/'+'api/serie-vales', params, {headers: headers})
          .map((res: Response) => res.json());
      }

      /**TERMINAN SERVICIOS DE SERIES */
      

}