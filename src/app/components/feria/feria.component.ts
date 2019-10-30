import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Feria } from '../../interfaces/interfaces';

@Component({
  selector: 'app-feria',
  templateUrl: './feria.component.html',
  styleUrls: ['./feria.component.scss'],
})
export class FeriaComponent implements OnInit {

  @Input() feria: Feria = {};
  @Output() clickFeria = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    
  }

  mostrarPuestos(){
    // console.log('estoy haciendo click en el componente feria, este es el id: ', this.feria.id_feria);
    // this.navCtrl.navigateRoot('/puestos', {animated: true});
    this.clickFeria.emit(this.feria.id_feria);
  }

}
