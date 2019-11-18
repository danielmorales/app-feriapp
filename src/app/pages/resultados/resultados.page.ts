import { Component, OnInit } from '@angular/core';
import { Feria, Producto } from '../../interfaces/interfaces';
import { ListaComprasService } from '../../services/lista-compras.service';
import { FeriasService } from '../../services/ferias.service';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss'],
})
export class ResultadosPage implements OnInit {
  
  // Se le asignan todas las ferias, se utiliza de variable de entrada en la función filtrarFerias()
  ferias: Feria [] = [];
  // IDs de las ferias seleccionadas, se utiliza de variable de entrada en la función filtrarFerias()
  idsFerias: number [] = [];
  // IDs de los productos seleccionados
  idsProductos: number [] = [];

  // Array que se recorre mediante un ngFor y cada elemento se envia al componente ferias-resultado
  // Retorno de la función filtrarFerias()
  feriasSeleccionadas: Feria [] = [];

  // Array que se recorre mediante n ngFor y cada elemento se envia al componente hijo
  productosSeleccionados: Producto [] = [];

  // Array que guardará todos los productos y serán enviados a los componentes hijos
  // NO ES NECESARIO PORQUE EN PUESTOS YA VIENE TODA LA INFO DE LOS PRODUCTOS
  productos: Producto [] = []


  constructor(private listaService: ListaComprasService,
              private feriasService: FeriasService,
              private productosService: ProductosService){
    
    // Se le asignan los IDs de las ferias seleccionadas por el usuario
    this.idsFerias = this.listaService.idsFerias;
    this.idsProductos = this.listaService.idsProductos;
  }

  ngOnInit(){

    // Se obtienen los productos y ferias que serán mostrados en la vista
    this.obtenerProductos();
    this.obtenerFerias();

  }
  
  // Se obtienen todos los productos y se envía el arreglo a los componentes hijos.
  obtenerProductos(){

    this.productosService.getProductos()
      .subscribe(resp => {
        this.productos.push(...resp.productos);

        // Filtrar aca los productos y meterlos al array productosSeleccionados
        // console.log('HOLA ESTOS SON LOS PRODUCTOS SIN FILTRAR', this.productos);
        this.productosSeleccionados.push( ...this.filtrarProductos(this.idsProductos, this.productos));
        // console.log('Productos seleccionados enviados al componente hijo', this.productosSeleccionados);
      })

  }

  filtrarProductos( idsProductos: number [], productos: Producto []){

    var productosSeleccionados: Producto [] = [];
    for (let i = 0; i < idsProductos.length; i++) {
      for (let j = 0; j < productos.length; j++) {
        if(idsProductos[i]==productos[j].id_producto){
          productosSeleccionados.push(productos[j]);
        }
      }
    }
    // console.log('Dentro de la funcion filtrarProductos: ', productosSeleccionados);
    return productosSeleccionados;
  }

  // Se obtienen las ferias y se filtran a la vez para almacenarlas en la variable feriasSeleccionadas
  obtenerFerias(){

    this.feriasService.getFerias()
      .subscribe( resp => {
        this.ferias.push(...resp.ferias);

        // Se filtran las ferias y se meten al array feriasSeleccionadas
        this.feriasSeleccionadas.push( ...this.filtrarFerias(this.idsFerias, this.ferias));
        // Esto hace "lo mismo" que arriba, pero no funciona porque al componente hijo el array llega vacio
        //this.feriasSeleccionadas = this.filtrarFerias(this.idsFerias, this.ferias);
        // console.log('Ferias seleccionadas enviadas al componente hijo', this.feriasSeleccionadas);
      })

  }

  // La entrada son todas las ferias y los IDs de las ferias seleccionadas, retorna las ferias seleccionadas
  // Esta función es invocada por obtenerFerias()
  filtrarFerias( idsFerias: number [], ferias: Feria []){
    
    var feriasSeleccionadas: Feria [] = [];
    for (let i = 0; i < idsFerias.length; i++) {
      for (let j = 0; j < ferias.length; j++) {
        if(idsFerias[i]==ferias[j].id_feria){
          feriasSeleccionadas.push(ferias[j]);
        }
      }
    }
    // console.log('Dentro de la funcion filtrarFerias: ', feriasSeleccionadas);
    return feriasSeleccionadas;
  }


}