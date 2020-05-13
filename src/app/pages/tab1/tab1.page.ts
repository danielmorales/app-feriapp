import { Component, OnInit } from '@angular/core';
import { ListaComprasService } from '../../services/lista-compras.service';
import { NavController } from '@ionic/angular';
import { Checkbox } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  textoBuscar = '';
  productosSeleccionados: Checkbox [] = [];

  constructor(private listaCompras: ListaComprasService,
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

  // Función que se ejecuta al presionar el botón siguiente, luego de seleccionar los productos

  // MOSTRAR ALERTA AL NO TENER NADA SELECCIONADO
  clickSiguiente(){

    if(this.productosSeleccionados.length == 0){
      // Mostrar alerta
      console.log('Seleccione sus productos');
      return
    }

    var largo = 0;
    for (let j = 0; j < this.productosSeleccionados.length; j++) {
      if(this.productosSeleccionados[j].ok == false){
        largo++;
      }
    }

    if(largo == this.productosSeleccionados.length){
      console.log('Seleccione sus productos222');
      return;
    }
      

    // Aqui se transforma solo a numeros
    var lista = this.listaCompras.extraerIds(this.productosSeleccionados);

 
    // Guardar la lista con la funcion del service
    this.listaCompras.guardarListaCompras(lista);
    
    // this.route.navigateByUrl('/ferias');
    this.navCtrl.navigateRoot('main/tabs/tab1/ferias', {animated: true});
  }

}
