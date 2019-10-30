import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Puesto } from '../../interfaces/interfaces';

@Component({
  selector: 'app-puestosComponente',
  templateUrl: './puestos.component.html',
  styleUrls: ['./puestos.component.scss'],
})
export class PuestosComponent implements OnInit {

  @Input() puestos: Puesto [] = [];
  @Output() clickPuesto = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

  escuchaClick(id_puesto){
    // console.log('imprimo el id del puesto que viene del componente hijo puesto', id_puesto);
    this.clickPuesto.emit(id_puesto);
  }

}
