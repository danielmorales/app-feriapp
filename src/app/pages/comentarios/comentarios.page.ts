import { Component, OnInit } from '@angular/core';
import { Comentariopuesto } from '../../interfaces/interfaces';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.page.html',
  styleUrls: ['./comentarios.page.scss'],
})
export class ComentariosPage implements OnInit {

  puesto: number;
  posts: Comentariopuesto [] = [];
  habilitado = true;

  constructor(private activatedRouter: ActivatedRoute,
              private postsService: PostsService) {

    this.activatedRouter.params.subscribe(params => {
      console.log('Este es el parametro que viene en la ruta', params['id_puesto']);
      this.puesto = params['id_puesto'];
    })

              }

  ngOnInit() {

    this.siguientes();

    this.postsService.getPosts(this.puesto)
      .subscribe(resp => {
        console.log('Hola estoy en la pagina de comentarios: ', resp);
      })
  }

  recargar (event) {

    this.siguientes(event, true),
    this.habilitado = true;
    this.posts = [];

  }
  
  siguientes (event?, pull:boolean = false ) {
      
    this.postsService.getPosts(this.puesto, pull)
      .subscribe( resp => {
        // console.log('Hola, aqui va lo que devuelve la API', resp);
        this.posts.push(...resp.comentariopuesto);
        console.log('Guardo en el arreglo posts lo que devuelve la api', this.posts);

        if(event){
          event.target.complete();
          if(resp.comentariopuesto.length ===0){
            //event.target.disabled = true;
            this.habilitado = false;
          }
        }
    });

  }


}
