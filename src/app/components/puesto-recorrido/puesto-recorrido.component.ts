import { Component, OnInit, Input } from '@angular/core';
import { Puesto, IonRadio, PuestoRecorrido } from '../../interfaces/interfaces';

@Component({
  selector: 'app-puesto-recorrido',
  templateUrl: './puesto-recorrido.component.html',
  styleUrls: ['./puesto-recorrido.component.scss'],
})
export class PuestoRecorridoComponent implements OnInit {

  @Input() puesto;

  @Input() listaFinal: IonRadio [];

  puestito: PuestoRecorrido[] = [];

  constructor() { }

  ngOnInit() {

    console.log('componente', this.puesto);
    console.log('listafinal', this.listaFinal);

    this.buscarProductoEnPuesto(this.puesto,this.listaFinal, this.puestito);
  }

  buscarProductoEnPuesto( puesto: Puesto, lista: IonRadio[], puestito: PuestoRecorrido[]){
    // Se busca el elemento del array que tenga este value
    for (let i = 0; i < lista.length; i++) {
      if(lista[i].value == puesto.id_puesto){
        // Se busca el producto en el puesto
        console.log('Si se encuentra un id de puesto en la lista final, que sea igual al id del puesto');
        for (let j = 0; j < puesto.productos.length; j++) {
          if (puesto.productos[j].id_producto == lista[i].id_producto) {
            console.log('EL producto que se encontró fue', puesto.productos[j].nombre_producto);
            puestito.push({ nombre_producto: puesto.productos[j].nombre_producto, precio_producto: puesto.productos[j].puestoproducto.precio});
          }
          
        }

       
      }
      
    }

    console.log('Esto necesito', puestito);

  }

}
