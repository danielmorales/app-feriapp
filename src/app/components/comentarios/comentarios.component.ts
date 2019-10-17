import { Component, OnInit, Input } from '@angular/core';
import { Comentariopuesto } from '../../interfaces/interfaces';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss'],
})
export class ComentariosComponent implements OnInit {

  @Input() posts: Comentariopuesto[] = [];

  constructor() { }

  ngOnInit() {
    // console.log('Aqui estoy en el componente comentarios', this.posts);
  }

}
