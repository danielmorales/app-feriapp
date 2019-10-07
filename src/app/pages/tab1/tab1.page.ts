import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Comentariopuesto } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  posts: Comentariopuesto [] = [];

  habilitado = true;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.siguientes();
  }

  recargar (event) {
    this.siguientes(event, true),
    this.habilitado = true;
    this.posts = [];
  }
  
  siguientes( event?, pull:boolean =false ){
      
    this.postsService.getPosts(pull)
    .subscribe( resp => {
      console.log('Hola, aqui va lo que devuelve la API', resp);
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
