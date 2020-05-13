import { Component, OnInit, Input } from '@angular/core';
import { ProductosSupermercado, Producto } from '../../interfaces/interfaces';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-comparar-nombre-producto',
  templateUrl: './comparar-nombre-producto.component.html',
  styleUrls: ['./comparar-nombre-producto.component.scss'],
})
export class CompararNombreProductoComponent implements OnInit {
  
  @Input() productoSupermercado: ProductosSupermercado;

  producto: Producto;
  nombre_producto: string;

  constructor( private productoService: ProductosService ) { }

  ngOnInit() {

    // console.log('Hijo compararnombreproducto', this.productoSupermercado);

    this.obtenerProducto(this.productoSupermercado.fk_id_producto);
  }

  obtenerProducto( id_producto: number){
    this.productoService.getOneProductos( id_producto )
      .subscribe( resp => {
        console.log('SAJKSDJKSASADJLKSDJ', resp.producto.nombre_producto);
        this.nombre_producto = resp.producto.nombre_producto;
        this.producto = resp.producto;
        console.log('imprimo producto', this.producto); 
      })

    
  }



}
