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

  feriasSeleccionadas;

  constructor( private route: Router,
               private listaCompras: ListaComprasService) { }

  ngOnInit() {

  }

  buscar(event){
    // console.log('estoy en la funcion buscar', event);
    this.textoBuscar = event.detail.value;
    // console.log('lo que busco', this.textoBuscar);
  }

  escuchaDelHijo(listaSeleccionados){

    console.log('esto viene del componente productos: ', listaSeleccionados);
    // Se asigna listaSeleccionados a una variable local
    this.feriasSeleccionadas = listaSeleccionados;

  }

  clickSiguiente(){

    // Aqui se transforma solo a numeros
    var lista = this.listaCompras.extraerIds(this.feriasSeleccionadas);

    // Llamo al servicio que guardará localmente la lista para luego utilizarla en otra página
    this.listaCompras.guardarListaFerias(lista);
    
    this.route.navigateByUrl('/resultados');
  }


}
