import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';
import { Cuenta } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  tempImages: string [] = [];

  // Para añadir los datos de la cuenta en el post
  /*
  cuenta: Cuenta = {
    apellido: 'ejemplo',
    nombre: 'ekemplo',
    correo_cuenta: 'asdasd@gmail.com'
  };
  */

  post = {
    texto_comentariopuesto: 'ejemplo de comentario del puesto 1',
    fk_id_puesto: 1
  };

  constructor(private PostsService: PostsService,
              private route: Router) {}


  async crearPost(){
    console.log('estoy en la funcion crearPost del tab2, donde se llama al servicio crearpost', this.post);
    const creado = await this.PostsService.crearPost(this.post);

    this.post = {
      texto_comentariopuesto: '',
      fk_id_puesto: 1
    };

    this.route.navigateByUrl('main/tabs/tab1');
  }

}
