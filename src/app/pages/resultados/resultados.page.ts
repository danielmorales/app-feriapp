import { Component, OnInit } from '@angular/core';
import { ListaComprasService } from '../../services/lista-compras.service';
import { PuestosService } from '../../services/puestos.service';
import { ProductosPuesto } from '../../interfaces/interfaces';
import { FeriasService } from '../../services/ferias.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss'],
})
export class ResultadosPage implements OnInit {

  productosPuesto: ProductosPuesto [] = [];

  idsProductos: number [] = [];
  idsFerias: number [] = [];


  constructor(private listaService: ListaComprasService,
              private puestosService: PuestosService) { }

  ngOnInit() {
    console.log('Estoy en la pagina resultados y estos son los productos', this.listaService.idsProductos);
    console.log('Estoy en la pagina resultados y estas son las ferias', this.listaService.idsFerias);
    this.idsProductos = this.listaService.idsProductos;
    this.idsFerias = this.listaService.idsFerias;

    this.obtenerProductosPuesto(1);
  }
  
  // Se obtiene la tabla intermedia de los productos que hay en cada puesto de una determinada feria
  obtenerProductosPuesto(id_feria){
    this.puestosService.getProductosPuesto(id_feria)
      .subscribe(resp => {

        this.productosPuesto.push(...resp.ProductosPuesto);
        console.log('productosPuesto', this.productosPuesto);
  
      })

  }

  buscarProductos(idsFerias: number []){
    for (let index = 0; index < idsFerias.length; index++) {
      //
      
    }
  }




}
