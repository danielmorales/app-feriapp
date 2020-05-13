import { Component, OnInit } from '@angular/core';
import { ListaComprasService } from '../../services/lista-compras.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ferias',
  templateUrl: './ferias.page.html',
  styleUrls: ['./ferias.page.scss'],
})
export class FeriasPage implements OnInit {

  // Esto debe ir en otro componente especial para el searchbar
  textoBuscar = '';

  feriaSeleccionada;

  constructor( private route: Router,
               private listaCompras: ListaComprasService) { }

  ngOnInit() {

  }

  buscar(event){
    // console.log('estoy en la funcion buscar', event);
    this.textoBuscar = event.detail.value;
    // console.log('lo que busco', this.textoBuscar);
  }

  escuchaDelHijo(feriaelegida){

    console.log('esto viene del componente app-ferias-check: ', feriaelegida);
    // Se asigna listaSeleccionados a una variable local
    this.feriaSeleccionada = feriaelegida;

  }

  clickSiguiente(){

    // FALTA VALIDAR SI NO SE HA ELEGIDO NINGUNA FERIA

    // if feriaseleccionada == null, entonces mostrar mensaje y salir de esta funcion

    // Llamo al servicio que guardará localmente la lista para luego utilizarla en otra página
    this.listaCompras.guardaFeriaSeleccionada(this.feriaSeleccionada);
    
    this.route.navigateByUrl('/resultados');
  }


}
