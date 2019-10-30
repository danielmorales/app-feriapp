import { Component, OnInit } from '@angular/core';
import { FeriasService } from '../../services/ferias.service';
import { Feria } from '../../interfaces/interfaces';

// Rutas con argumentos para ver cada feria por separado
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  ferias: Feria [] = [];

  constructor(private feriaService: FeriasService,
              private router: Router) { }

  ngOnInit() {
    this.feriaService.getFerias()
      .subscribe( resp => {
        this.ferias.push(...resp.ferias);
      })
  }

  escuchadelHijo(feriaelegida){
    // console.log('esto viene del hijo del hijo: ', feriaelegida);

    //Navegar a la ruta de la feria
    this.router.navigate( ['/puestos',feriaelegida] );

  }

}
