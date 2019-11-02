import { Component, OnInit, Input } from '@angular/core';
import { Feria } from '../../interfaces/interfaces';

@Component({
  selector: 'app-feria-check',
  templateUrl: './feria-check.component.html',
  styleUrls: ['./feria-check.component.scss'],
})
export class FeriaCheckComponent implements OnInit {

  @Input() feria: Feria;
  @Input() listaCheck;


  constructor() { }

  ngOnInit() {}

  checkear(){

    var encontrado = this.listaCheck.find( x => x.id == this.feria.id_feria)
    var check = encontrado.ok;

    return check;
  }


}
