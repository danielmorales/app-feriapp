import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Feria, Puesto, Producto, IonRadio } from '../../interfaces/interfaces';
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
  // Se le asigna el precio más bajo de un producto en la feria
  precioMasBajoProducto: number = 0;

  // Para el guardar y enviar los datos seleccionados con Ion Radio
  @Output() enviarSeleccionado = new EventEmitter();
  productoPuestoSeleccionado: IonRadio [] = [];

  
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
          // Inserto el puesto encotrado al array puestosConElProducto
          puestosConElProducto.push(puestosFeria[i]);

          // Le asigno el primer precio que encuentre
          if(this.precioMasBajoProducto == 0){
            this.precioMasBajoProducto = puestosFeria[i].productos[j].puestoproducto.precio
          }

          console.log('Preciomasbajo', this.precioMasBajoProducto);
          // Si Otro precio es menor al más bajo, entonces ese precio es el más bajo
          if (this.precioMasBajoProducto > puestosFeria[i].productos[j].puestoproducto.precio) {
            this.precioMasBajoProducto = puestosFeria[i].productos[j].puestoproducto.precio;
            console.log('PreciomasbajoEnelIf', this.precioMasBajoProducto);
          }
          console.log('PreciomasbajoDespuesDelIf', this.precioMasBajoProducto);
          console.log( 'BuscarProductoEnFeria', producto.nombre_producto,':', puestosFeria[i].productos[j] );
        }

      }
    }

    return puestosConElProducto;

  }

  escuchaDelHijo( precio: number ){
    console.log('Estoy en el hijo: ', this.producto.nombre_producto,':', precio);
    // Lista con los precios de este producto, buscar el menor, marcar el menor
  
  }

  radioGroupChange(event){
    console.log("holaeventoooooooooo",event.detail);
  }



  radioSelect(event, producto){
    // Solo me importa el ultimo check que se hace, guardar el id del puesto y el id del producto
    // event.detail.value = id_puesto
    console.log('ID_PUESTO: ', event.detail.value,'ID_PRODUCTO', producto.id_producto);
    if (this.productoPuestoSeleccionado.length == 0) {
      this.productoPuestoSeleccionado.push({id_producto: producto.id_producto, value: event.detail.value});
      this.enviarSeleccionado.emit(this.productoPuestoSeleccionado);
      // console.log('En el if', this.productoPuestoSeleccionado);
    }

    else{
      this.productoPuestoSeleccionado.pop();
      this.productoPuestoSeleccionado.push({id_producto: producto.id_producto, value: event.detail.value});
      this.enviarSeleccionado.emit(this.productoPuestoSeleccionado);
      // console.log('en el else', this.productoPuestoSeleccionado);
    }
  

  }



}
