import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Feria, Checkbox, CheckIonRadio } from '../../interfaces/interfaces';
import { FeriasService } from '../../services/ferias.service';

@Component({
  selector: 'app-ferias-check',
  templateUrl: './ferias-check.component.html',
  styleUrls: ['./ferias-check.component.scss'],
})
export class FeriasCheckComponent implements OnInit {

  ferias: Feria [] = [];

  // Este input es para el filtro, se utiliza en la vista
  @Input() textoBuscar;
  // Este output es para la lista de productos seleccionados
  @Output() feriaSeleccionada = new EventEmitter();

  checkpadre: CheckIonRadio = {checked: false, value: 1};


  constructor(private feriaService: FeriasService) { }

  ngOnInit() {

    this.obtenerFerias();

  }

  obtenerFerias(){
    this.feriaService.getFerias()
    .subscribe( resp => {
      this.ferias.push(...resp.ferias);
    });

  }


  radioSelect(event){

    this.checkpadre = event.detail;
    console.log('asdasdasdasd', this.checkpadre);

    this.feriaSeleccionada.emit(event.detail.value)

  }

}
