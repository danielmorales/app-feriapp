import { Component, OnInit, Input } from '@angular/core';
import { ProductosSupermercado, Puesto, Comparacion } from '../../interfaces/interfaces';
import { PuestosService } from '../../services/puestos.service';

@Component({
  selector: 'app-comparar-precios',
  templateUrl: './comparar-precios.component.html',
  styleUrls: ['./comparar-precios.component.scss'],
})
export class CompararPreciosComponent implements OnInit {

  @Input() productoSupermercadoHijo: ProductosSupermercado;


  // Guarda los puestos de la feria
  puestos: Puesto [] = [];

  kgounidad: number;
  fk_id_producto: number;

  
  // Se le asigna el precio más bajo de un producto en la feria
  precioMasBajoProducto: number = 0;
  
  listaComparacion: Comparacion [] = [];
  
  constructor(private puestosService: PuestosService) {

  }

  ngOnInit() {


    this.kgounidad = this.productoSupermercadoHijo.kgunidad;
    this.fk_id_producto = this.productoSupermercadoHijo.fk_id_producto;


    this.obtenerProductosFeria(1);

    
  }

  obtenerProductosFeria(id_feria: number){
    this.puestosService.getPuestos(id_feria)
      .subscribe(resp => {
        console.log('Estos son los puestos de la feria, ESTOY EN COMPONENTE HIJO', resp.puestos);
        this.puestos.push(...resp.puestos);
        // Filtrar productos en feria
        this.buscarProductoEnFeria(this.puestos, this.fk_id_producto, this.kgounidad)
      })
  }

  // Entradas: Array de puestos, productoSupermercado.kgunidad (1 o 2)
  // Salida: Obtener el puesto con el menor precio según kgunidad, para mostrar el precio en ese puesto

  elMasEconomico(puestos: Puesto[], fk_id_producto: number, kgounidad: number ){
    if(puestos.length > 0){
      for (let i = 0; i < puestos.length; i++) {
        for (let j = 0; j < puestos[i].productos.length; j++) {
          if (puestos[i].productos[j].id_producto == fk_id_producto) {

            
          }
        }
        
      }

  
    }

  }

   // Retorna un arreglo de puestos que poseen un producto
   buscarProductoEnFeria(puestos: Puesto[], fk_id_producto: number, kgounidad: number){

    var puestosConElProducto: Puesto [] = [];
    

    for (let i = 0; i < puestos.length; i++) {

      for (let j = 0; j < puestos[i].productos.length; j++) {


        if (puestos[i].productos[j].id_producto == fk_id_producto) {

          // Inserto el puesto encotrado al array puestosConElProducto
          puestosConElProducto.push(puestos[i]);

          // Le asigno el primer precio que encuentre
          if(this.precioMasBajoProducto == 0){
            this.precioMasBajoProducto = puestos[i].productos[j].puestoproducto.precio
          }

          console.log('Preciomasbajo', this.precioMasBajoProducto);
          // Si Otro precio es menor al más bajo, entonces ese precio es el más bajo
          if (this.precioMasBajoProducto > puestos[i].productos[j].puestoproducto.precio) {
            this.precioMasBajoProducto = puestos[i].productos[j].puestoproducto.precio;
            console.log('PreciomasbajoEnelIf', this.precioMasBajoProducto);
          }
          console.log('PreciomasbajoDespuesDelIf', this.precioMasBajoProducto);
          console.log( 'BuscarProductoEnFeria', fk_id_producto,':', puestos[i].productos[j] );
        }

      }
    }
    
    // return puestosConElProducto;

  }

  buscarProductosEnFeria(productosSupermercado: ProductosSupermercado [], puestos: Puesto [] ){

    console.log('en el primer for', productosSupermercado.length);
    
    for (let i = 0; i < productosSupermercado.length; i++) {
      console.log('en el segundo for');  
      var menorPrecio = 0;
      var precioSuper: number;
      var nombre: string;

      for (let j = 0; j < puestos.length; j++) {


        for (let k = 0; k < puestos[j].productos.length; k++) {
          
          if (productosSupermercado[i].fk_id_producto == puestos[j].productos[k].id_producto && puestos[j].productos[k].puestoproducto.kgunidad == productosSupermercado[i].kgunidad) {

            nombre = puestos[j].productos[k].nombre_producto;
            precioSuper = productosSupermercado[i].precio;

            if( menorPrecio == 0 ){
              menorPrecio = puestos[j].productos[k].puestoproducto.precio;
            }

            if( menorPrecio > puestos[j].productos[k].puestoproducto.precio ){
              menorPrecio = puestos[j].productos[k].puestoproducto.precio;
            }


          }
          
        }

        
      }

      this.listaComparacion.push({ nombre_producto: nombre, precio_feria: menorPrecio, precio_super: precioSuper})


      
    }

    console.log('Lista de comparacion ', this.listaComparacion);

  }


  buscarMenorPrecioFeria ( idproducto: number, cantidad: number, puestos: Puesto []){

    // Precio más bajo para n cantidad
    var precioMasBajo = 0;


    for (let i = 0; i < puestos.length; i++) {

      if (puestos[i].oferta.length > 0) {
        
        for (let k = 0; k < puestos[i].oferta.length; k++) {
  
          if(puestos[i].oferta[k].id_producto == idproducto && cantidad>=puestos[i].oferta[k].ofertaproducto.cantidad){

            // Ejemplo, el producto en oferta es 5 unidades por 800
            // Necesito 7 unidades == > solo 5 en oferta y 2 unidades por separado
            // Necesito 10 unidades == > 10 en oferta
            if( (cantidad%puestos[i].oferta[k].ofertaproducto.cantidad) == 0 ){
              // Llevo n veces la oferta
              var n_veces = cantidad/puestos[i].oferta[k].ofertaproducto.cantidad;

              var valor = n_veces * puestos[i].oferta[k].ofertaproducto.precio;

              if(valor > precioMasBajo){
                precioMasBajo = valor;
              }
              
            }
            else{
               var n_vecesDif = cantidad/puestos[i].oferta[k].ofertaproducto.cantidad;

               n_vecesDif = Math.floor(n_vecesDif);
               var resto = cantidad/puestos[i].oferta[k].ofertaproducto.cantidad;
            }

          }
          
        }


      }


      for (let j = 0; j < puestos[i].productos.length; j++) {
        if( puestos[i].productos[j].id_producto == idproducto ){

          // guardar valor en precioMasBajo
          precioMasBajo == puestos[i].productos[j].puestoproducto.precio; 
        }
        
        
      }


    }

  }

}
