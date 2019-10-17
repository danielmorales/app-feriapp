import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Feria } from '../../interfaces/interfaces';

@Component({
  selector: 'app-ferias',
  templateUrl: './ferias.component.html',
  styleUrls: ['./ferias.component.scss'],
})
export class FeriasComponent implements OnInit {

  @Input() ferias: Feria [] = [];
  @Output() clickFeria = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    // console.log('Aqui estoy en el componente ferias', this.ferias);
  }

  escuchaClick(id_feria){
    // console.log('imprimo el id de la feria que viene del componente hijo', id_feria);
    this.clickFeria.emit(id_feria);
  }

}
