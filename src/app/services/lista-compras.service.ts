import { Injectable } from '@angular/core';
import { Checkbox } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ListaComprasService {

  // Lista que se utilizará para buscar los productos en los puestos
  idsProductos: number [] = [];
  // Lista que se utilizará para buscar las ferias elegidas y sus puestos
  idsFerias: number [] = [];

  constructor() { }

    // Esta función recibe una lista del tipo Checkbox y tiene retorna una lista solo con los ids seteados en true
  extraerIds(listaCheck: Checkbox []){

    var listaIds: number [] = [];
      for (var i = 0; i < listaCheck.length; i++) {
        if (listaCheck[i].ok == true) {
          listaIds.push(  listaCheck[i].id );
        }
      }
    return listaIds;
  
  }

  guardarListaCompras(lista){

    this.idsProductos = lista.slice();

    console.log('Esta es la lista en el servicio y que wea', this.idsProductos);

  }

  guardarListaFerias(lista){

    this.idsFerias = lista.slice();

    console.log('Estoy en el servicio ListaCompras, estas son las ferias', this.idsFerias);
  
  }

  




}
