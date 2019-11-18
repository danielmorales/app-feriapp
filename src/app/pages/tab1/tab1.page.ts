import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListaComprasService } from '../../services/lista-compras.service';
import { Checkbox } from '../../interfaces/interfaces';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  textoBuscar = '';
  productosSeleccionados;

  constructor(private route: Router,
              private listaCompras: ListaComprasService,
              private navCtrl: NavController) {}

  ngOnInit() {

  }

  buscar(event){
    // console.log('estoy en la funcion buscar', event);
    this.textoBuscar = event.detail.value;
    // console.log('lo que busco', this.textoBuscar);
  }

  escuchaDelHijo(listaSeleccionados){

    // ListaSeleccionados proviene del componente productos y se asigna a una variable local
    this.productosSeleccionados = listaSeleccionados;

  }



  clickSiguiente(){

    // Aqui se transforma solo a numeros
    var lista = this.listaCompras.extraerIds(this.productosSeleccionados);

    // Guardar la lista con la funcion del service
    this.listaCompras.guardarListaCompras(lista);
    
    // this.route.navigateByUrl('/ferias');
    this.navCtrl.navigateRoot('/ferias', {animated: true});
  }

}
