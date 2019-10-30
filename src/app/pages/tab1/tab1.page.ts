import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListaComprasService } from '../../services/lista-compras.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  textoBuscar = '';
  productosSeleccionados;

  constructor(private route: Router,
              private listaCompras: ListaComprasService) {}

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
    this.productosSeleccionados = listaSeleccionados;

  }

  clickSiguiente(){
    console.log('Estoy dando click en Siguiente');
    console.log('El objeto que necesito enviar', this.productosSeleccionados);
    // Llamo al servicio que guardará localmente la lista para luego utilizarla en otra página
    this.listaCompras.guardarListaCompras(this.productosSeleccionados);
    
    
    // this.route.navigateByUrl('/ferias');
  }

}
