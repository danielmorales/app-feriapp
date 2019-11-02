import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Feria, Checkbox } from '../../interfaces/interfaces';
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
  @Output() feriasSeleccionadas = new EventEmitter();

  // Para lista de ids y booleans del checkbox
  lista: Checkbox [] = [];
  // Largo de la lista de productos
  largo: number;

  constructor(private feriaService: FeriasService) { }

  ngOnInit() {

    this.obtenerFerias();

  }

  obtenerFerias(){
    this.feriaService.getFerias()
    .subscribe( resp => {
      this.ferias.push(...resp.ferias);

      this.largo = this.ferias.length;
      this.listaVacia(this.largo);
    });

  }

  listaVacia(largo){
 
    for (var i = 0; i < largo; i++) {
      this.lista.push({id: this.ferias[i].id_feria, ok: false});
    }
    // console.log('lista vacia generada', this.lista);

    return this.lista;

  }

  onClick(event, feria){

    // event.detail.checked es el boolean del checkbox en el producto
    // Se busca en la lista el producto seleccionado, que viene siendo producto.id_producto
    var encontrado = this.lista.find( x => x.id == feria.id_feria)
    
    // Se busca el índice del producto seleccionado en el arreglo lista
    var pos = this.lista.indexOf(encontrado);

    // Actualizo el valor del check en la lista
    this.lista[pos].ok = event.detail.checked;
    console.log('Lista actualizada', this.lista);

    // Se emite al componente padre la lista de productos seleccionados hasta el momento
    this.feriasSeleccionadas.emit(this.lista);

  }

}
