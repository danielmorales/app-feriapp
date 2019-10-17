import { Component, OnInit, Input } from '@angular/core';
import { Comentariopuesto } from '../../interfaces/interfaces';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.scss'],
})
export class ComentarioComponent implements OnInit {
  
  @Input() post: Comentariopuesto;

  constructor() { }

  ngOnInit() {
    // console.log('Aqui estoy en el componente comentario', this.post);
  }

}
