import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Puesto, Producto } from '../../interfaces/interfaces';

@Component({
  selector: 'app-productos-resultado',
  templateUrl: './productos-resultado.component.html',
  styleUrls: ['./productos-resultado.component.scss'],
})
export class ProductosResultadoComponent implements OnInit {

  // Contiene el producto que se desea buscar en los puestos
  @Input() producto: Producto;

  // Contiene los puestos donde hay que buscar el producto
  @Input() puesto: Puesto;

  // Contiene el precio más bajo para ocuparlo en in ngIf
  @Input() precioMasBajo: number;


  precioVista: number;
  kgunidad: number;

  constructor() {}

  ngOnInit() {

    console.log('Este es el producto', this.producto);
    console.log('Este es el puesto', this.puesto);

    this.precioVista = this.buscarPrecio(this.producto, this.puesto);

    // this.precio.emit( this.buscarPrecio(this.producto, this.puesto) );

  }

  buscarPrecio(producto: Producto, puesto: Puesto){
    var precio: number;
    for (let i = 0; i < puesto.productos.length; i++) {
      if (producto.id_producto == puesto.productos[i].id_producto) {
        precio = puesto.productos[i].puestoproducto.precio
        this.kgunidad = puesto.productos[i].puestoproducto.kgunidad;
      }  
    }

    return precio;
  }






}
