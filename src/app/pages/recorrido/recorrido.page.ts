import { Component, OnInit } from '@angular/core';
import { PuestosService } from '../../services/puestos.service';
import { Puesto, IonRadio } from '../../interfaces/interfaces';
import { ListaComprasService } from '../../services/lista-compras.service';

@Component({
  selector: 'app-recorrido',
  templateUrl: './recorrido.page.html',
  styleUrls: ['./recorrido.page.scss'],
})
export class RecorridoPage implements OnInit {
  
  // ENTRADAS
  // Crear un condicional, si listaFInal.length es igual a 0, entonces devolver a la página principal

  // Lista de objetos {id_producto, id_puesto}
  listaFinal: IonRadio [];
  // FALTA AGREGAR EL ID DE LA FERIA ELEGIDA EN NGONINIT
  feria: number;
  // FALTA AGREGAR EL TOTAL DE PUESTOS QUE TIENE LA FERIA

  puestos: Puesto [] = [];
  puestosRecorrido: Puesto [] = [];
  ordenPuestosVacios: any [];
  ordenPuestos: any [];

  constructor(private listaService: ListaComprasService,
              private puestoService: PuestosService) {
    this.listaFinal = this.listaService.listaFinal;
    // ASIGNAR VALOR DE LA VARIABLE feria acá
  }

  ngOnInit() {

    this.puestoService.getPuestos(1)
      .subscribe( resp => {
      this.puestos.push(...resp.puestos);
      console.log('Estos son los puestos', this.puestos);

      this.ordenPuestosVacios = this.crearOrdenVacio(100);
      this.ordenPuestos = this.generarOrden(this.puestos, this.ordenPuestosVacios);
    });

  }

  crearOrdenVacio( totalPuestos ){

    var array = [];
    var filas = totalPuestos/2;

    for (let i = 0; i < filas; i++) {
      array[i] = []
      for (let j = 0; j < 2; j++) {
        array[i][j] = 0;
      }
    }

    console.log('Print Array 0', array );
    return array;
  }

  generarOrden(puestos: Puesto[], ordenPuestos: any []){

    for (let i = 0; i < puestos.length; i++) {

      if(puestos[i].geo_puesto !== null){
        
        var geo = puestos[i].geo_puesto;
        // console.log('puesto numero',puestos[i].id_puesto );
        // console.log('el geo', geo);
        var coma = ",";
        var parse = geo.split(coma);
        console.log('el geo parse int 0', parseInt(parse[0]));
        console.log('el geo parse int 1', parseInt(parse[1]));
        console.log('el geo parse int 2', parseInt(parse[2]));

        var fila = parseInt(parse[1]);
        var columna = parseInt(parse[2]);
        console.log('este es el parse', parse);
        ordenPuestos[fila][columna] = puestos[i];
      }
    }
    console.log('SHISHIGANG', ordenPuestos);
    return ordenPuestos;
  }

}
