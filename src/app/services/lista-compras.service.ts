import { Injectable } from '@angular/core';
import { Carrito } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ListaComprasService {

  listaCompras: Carrito [];

  constructor() { }

  guardarListaCompras(lista){
    // this.listaCompras = lista;
    console.log('estoy en el servicio que guarda la lista de compras', lista);
  }


}
