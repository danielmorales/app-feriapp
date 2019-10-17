import { Component, OnInit } from '@angular/core';
import { FeriasService } from '../../services/ferias.service';
import { Ferias, Feria, Puesto } from '../../interfaces/interfaces';
import { PuestosService } from '../../services/puestos.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  ferias: Feria [] = [];

  puestos: Puesto [] = [];

  feriaSeleccionada: number;

  constructor(private feriaService: FeriasService,
              private puestoService: PuestosService) { }

  ngOnInit() {
    this.feriaService.getFerias()
      .subscribe( resp => {
        //console.log(resp);
        this.ferias.push(...resp.ferias);
      })
    //  console.log('Imprimiendo el arreglo ferias: ', this.ferias);

  }

  escuchadelHijo(feriaelegida){
    console.log('esto viene del hijo del hijo: ', feriaelegida);
    this.feriaSeleccionada = feriaelegida;


    this.puestoService.getPuestos(feriaelegida)
    .subscribe( resp => {
      //console.log('Hola estoy imprimiendo los puestos',resp);
      this.puestos.push(...resp.puestos);
    })
    console.log('Imprimiendo el arreglo de puestos de la feria ',feriaelegida,': ', this.puestos);

  }

}
