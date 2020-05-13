import { Component, OnInit, Input } from '@angular/core';
import { Producto, Checkbox } from '../../interfaces/interfaces';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent implements OnInit {

  @Input() producto: Producto;

  @Input() listaCheck: Checkbox [];

  constructor() { }

  ngOnInit() {
  }

  // Esta funcion permite mantener los check del checkbox cuando se utiliza el searchbar, sin ella se pierden los check
  // Busca el valor del check en cada elemento de la lista y lo asigna en el checkbox
  
  checkear(){

    var encontrado = this.listaCheck.find( x => x.id == this.producto.id_producto);
    var check = encontrado.ok;

    return check;
  }


}
