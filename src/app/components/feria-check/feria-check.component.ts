import { Component, OnInit, Input } from '@angular/core';
import { Feria, CheckIonRadio } from '../../interfaces/interfaces';

@Component({
  selector: 'app-feria-check',
  templateUrl: './feria-check.component.html',
  styleUrls: ['./feria-check.component.scss'],
})
export class FeriaCheckComponent implements OnInit {

  @Input() feria: Feria;

  @Input() check: CheckIonRadio;


  constructor() { }

  ngOnInit() {

  }

  checkear(){

    if(this.feria.id_feria == this.check.value && this.check.checked==true){
      return true;
    }

    else{
      return false;
    }


 //   var encontrado = this.listaCheck.find( x => x.id == this.feria.id_feria)
 //   var check = encontrado.ok;


  }


}
