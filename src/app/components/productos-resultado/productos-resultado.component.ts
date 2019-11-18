import { Component, OnInit, Input } from '@angular/core';
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

  precio;

  constructor() {}

  ngOnInit() {

    this.buscarPrecio();

  }

  buscarPrecio(){
   for (let i = 0; i < this.puesto.productos.length; i++) {
     if (this.producto.id_producto==this.puesto.productos[i].id_producto) {
       this.precio=this.puesto.productos[i].puestoproducto.precio
     }   
   }
  }






}
