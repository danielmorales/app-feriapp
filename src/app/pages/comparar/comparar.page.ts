import { Component, OnInit } from '@angular/core';
import { SupermercadosService } from '../../services/supermercados.service';
import { Supermercado, Puesto, ProductosSupermercado, Comparacion } from '../../interfaces/interfaces';
import { PuestosService } from '../../services/puestos.service';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-comparar',
  templateUrl: './comparar.page.html',
  styleUrls: ['./comparar.page.scss'],
})
export class CompararPage implements OnInit {
  
  // CON ESTA LISTA FUNCIONA LA PAGINA
  // EJEMPLO. Lista de ids de productos
  // FALTA AGREGAR EN LA ENTRADA EL ID DE LA FERIA Y EL ID DEL SUPERMERCADO
  idsProductos: number [] = [1,7];


  // Guarda todos los productos del supermercado
  productosSupermercado: ProductosSupermercado [] = [];

  // Guarda los productos del supermercado seleccionados
  productosSupermercadoSeleccionados: ProductosSupermercado [] = [];


  // Lista de producto del usuario
  // Lista productos más baratos en una feria
  // Lista productos en un supermercado

  constructor( private superService: SupermercadosService) { }

  ngOnInit() {

    this.obtenerProductosSupermercado(1);
 
    
    
  }

  obtenerProductosSupermercado(id_supermercado: number){
    this.superService.getProductosbySupermercado(id_supermercado)
      .subscribe(resp => {
        console.log('Estos son los productos del supermercado', resp.productossupermercado);
        this.productosSupermercado.push(...resp.productossupermercado)
        // Se filtran
        this.productosSupermercadoSeleccionados.push(...this.filtrarProductos(this.idsProductos, this.productosSupermercado));
      })
  }





  filtrarProductos( idsproductos: number [], productossupermercado: ProductosSupermercado []){
    
    // Array que guarda solo los productos referenciados en idsproductos
    var productosencontrados: ProductosSupermercado [] = []
    
    for (let i = 0; i < idsproductos.length; i++) {
      for (let j = 0; j < productossupermercado.length; j++) {
        
        if (idsproductos[i] == productossupermercado[j].fk_id_producto) {
          productosencontrados.push(productossupermercado[j]);
        }
        
      }
    }
    console.log('Retorno buscarProductosEnSupermercado()', productosencontrados);
    return productosencontrados;
  }



}
