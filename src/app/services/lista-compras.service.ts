import { Injectable } from '@angular/core';
import { Checkbox, ProductosPuesto, IonRadio } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ListaComprasService {

  // Lista que se utilizará para buscar las ferias elegidas y sus puestos
  idsFerias: number [] = [];

  // Lista que se utilizará para buscar los productos en los puestos
  idsProductos: number [] = [];

  // Lista final con { id_producto, id_puesto }
  listaFinal: IonRadio [] = [];

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

  // Modificar la entrada ProductosPuesto
  buscarProductosEnPuesto(ids_productos: number [], productosPuesto: ProductosPuesto []){

    // Array para guardar el resultado que retorna la función
    var puestosConProductos: ProductosPuesto [] = [];

    for (let i = 0; i < productosPuesto.length; i++) {
      for (let j = 0; j < ids_productos.length; j++) {
        if(productosPuesto[i].fk_id_producto == ids_productos[j]){
          // Guardar la info de esos puestos
          puestosConProductos.push(productosPuesto[i]);
        }
      }
    }

    console.log('Este es el array que retorna buscarProductosEnPuesto: ', puestosConProductos);
    return puestosConProductos;
  }

  guardarListaCompras(lista){

    this.idsProductos = lista.slice();

    // console.log('Estoy en el servicio ListaCompras, estas son los productos', this.idsProductos);

  }

  // La entrada es un array de numeros, los cuales representan los ids de las ferias seleccionadas por el usuario
  guardarListaFeriasSeleccionadas(lista: number []){

    this.idsFerias = lista.slice();

    // console.log('Estoy en el servicio ListaCompras, estas son las ferias', this.idsFerias);
  
  }

  guardarListaFinal(lista: IonRadio []){

    this.listaFinal = lista.slice();

    console.log('Estoy en el servicio, esta es la lista final', this.listaFinal);
  }


}
