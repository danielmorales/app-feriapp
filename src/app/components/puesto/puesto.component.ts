import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Puesto } from '../../interfaces/interfaces';

@Component({
  selector: 'app-puesto',
  templateUrl: './puesto.component.html',
  styleUrls: ['./puesto.component.scss'],
})
export class PuestoComponent implements OnInit {

  @Input() puesto: Puesto = {};
  @Output() clickPuesto = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

  mostrarIdPuesto(){
    // console.log('estoy haciendo click en el componente puesto, este es el id: ', this.puesto.id_puesto);
    // this.navCtrl.navigateRoot('/puestos', {animated: true});
    this.clickPuesto.emit(this.puesto.id_puesto);
  }

}
