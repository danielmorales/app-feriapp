import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../interfaces/interfaces';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent implements OnInit {

  @Input() producto: Producto;
  @Input() id_producto;
  @Input() listaCheck;

  constructor() { }

  ngOnInit() {
  }

  // Esta funcion permite mantener los check del checkbox cuando se utiliza el searchbar, sin ella se pierden los check
  checkear(){

    var encontrado = this.listaCheck.find( x => x.id == this.id_producto)
    var check = encontrado.ok;

    return check;
  }


}
