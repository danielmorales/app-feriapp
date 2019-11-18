import { Component, OnInit, Input } from '@angular/core';
import { Feria, Puesto, Producto, Puestoproducto } from '../../interfaces/interfaces';
import { PuestosService } from '../../services/puestos.service';

@Component({
  selector: 'app-ferias-resultado',
  templateUrl: './ferias-resultado.component.html',
  styleUrls: ['./ferias-resultado.component.scss'],
})
export class FeriasResultadoComponent implements OnInit {

  // Se recibe del componente padre
  @Input() feria: Feria = {};
  // Se envia al componente hijo
  @Input() producto: Producto;

  // Guarda los puestos de la feria input que poseen el producto input
  puestosConElProducto: Puesto [] = [];
  
  constructor(private puestosService: PuestosService) {
  }
  

  ngOnInit() {
    this.obtenerPuestosFeria(this.feria.id_feria);
  }

  // Obtener los Puestos de una feria y luego recorrerlos, buscando los productos de esos puestos
  obtenerPuestosFeria(id_feria: number){

    var puestosFeria: Puesto [] = [];

    this.puestosService.getPuestos(id_feria)
      .subscribe(resp => {
        puestosFeria.push(...resp.puestos);
        this.puestosConElProducto.push(...this.buscarProductoEnFeria(puestosFeria, this.producto));
        console.log('Estos puestos tienen el producto', this.producto.nombre_producto, ':', this.puestosConElProducto);
      })

  }

  // Retorna un arreglo de puestos que poseen un producto
  buscarProductoEnFeria(puestosFeria: Puesto[], producto: Producto){

    var puestosConElProducto: Puesto [] = [];

    for (let i = 0; i < puestosFeria.length; i++) {
      for (let j = 0; j < puestosFeria[i].productos.length; j++) {

        if (puestosFeria[i].productos[j].id_producto == producto.id_producto) {
          puestosConElProducto.push(puestosFeria[i]);
          console.log( 'holaholahola', puestosFeria[i].productos[j]);
        }

      }
    }

    return puestosConElProducto;

  }




}
