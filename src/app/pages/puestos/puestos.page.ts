import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PuestosService } from '../../services/puestos.service';
import { Puesto } from '../../interfaces/interfaces';

@Component({
  selector: 'app-puestos',
  templateUrl: './puestos.page.html',
  styleUrls: ['./puestos.page.scss'],
})
export class PuestosPage implements OnInit {

  feria: number;
  puestos: Puesto [] = [];

  constructor(private activatedRouter: ActivatedRoute,
              private puestoService: PuestosService,
              private router: Router) {

    this.activatedRouter.params.subscribe(params => {
      console.log('Este es el parametro que viene en la ruta', params['id_feria']);
      this.feria = params['id_feria'];
    })

  }

  ngOnInit() {
    this.puestoService.getPuestos(this.feria)
    .subscribe( resp => {
      //console.log('Hola estoy imprimiendo los puestos',resp);
      this.puestos.push(...resp.puestos);
    })
    // console.log('Imprimiendo el arreglo de puestos de la feria ', this.feria,': ', this.puestos);

  }

  escuchadelHijo(puestoElegido){
    console.log('Este es el puesto seleccionado y navego a comentarios/puestoElegido', puestoElegido);

    this.router.navigate( ['/comentarios', puestoElegido] );
  }

} 
