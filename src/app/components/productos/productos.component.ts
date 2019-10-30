import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto, Carrito } from '../../interfaces/interfaces';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {

  productos: Producto [] = [];

  // Este input es para el filtro, se utiliza en la vista
  @Input() textoBuscar;
  // Este output es para la lista de productos seleccionados
  @Output() productosSeleccionados = new EventEmitter();
  

  // Para lista de ids y booleans del checkbox
  lista: Carrito [] = [];
  // Largo de la lista de productos
  largo: number;

  constructor(private productoService: ProductosService) { }

  ngOnInit() {

    this.obtenerProductos();

  }

  obtenerProductos(){

     this.productoService.getProductos()
      .subscribe(resp => {
        this.productos.push(...resp.productos);
        // console.log('Esta es la respuesta completa', resp);
        // console.log('Id del primer producto de la lista', this.productos[0].id_producto);
        // console.log('Este es el largo, estoy en el ngOnInit del componente', this.productos.length);
        this.largo = this.productos.length;

        // Creo una lista para guardar los valores del checkbox
        this.listaVacia(this.largo);
      });

  }


  listaVacia(largo){
 
    for (var i = 0; i < largo; i++) {
      this.lista.push({id: this.productos[i].id_producto, ok: false});
    }
    console.log('lista vacia generada', this.lista);

    return this.lista;

  }

  onClick(event, producto){

    // event.detail.checked es el boolean del checkbox en el producto
    // Se busca en la lista el producto seleccionado, que viene siendo producto.id_producto
    var encontrado = this.lista.find( x => x.id == producto.id_producto)
    
    // Se busca el índice del producto seleccionado en el arreglo lista
    var pos = this.lista.indexOf(encontrado);

    // Actualizo el valor del check en la lista
    this.lista[pos].ok = event.detail.checked;
    console.log('Lista actualizada', this.lista);

    // Se emite al componente padre la lista de productos seleccionados hasta el momento
    this.productosSeleccionados.emit(this.lista);

  }



}
