import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RespuestaPosts, Comentariopuesto } from '../interfaces/interfaces';
import { UsuarioService } from './usuario.service';

const Url = environment.url;

/* ESTO ES PARA METER DATOS EN EL BODY DE LA PETICION HTTP
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: your body data
};
*/

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  paginaPosts = 0;
  //Debo entregar el numero del puesto al seleccionarlo de la interfaz
  puesto = 1;

  // EventEmitter para poner el nuevo post de los primeros en el muro de comentarios
  nuevoPost = new EventEmitter<Comentariopuesto>();

  constructor(private http: HttpClient,
              private usuarioService: UsuarioService) { }

  // tslint:disable-next-line: variable-name

  // AGREGAR EL ID DEL PUESTO EN LAS VARIABLES DE ENTRADA
  getPosts(id: number, pull: boolean = false) {
    if(pull){
      this.paginaPosts = 0;
    }
    this.paginaPosts++;
    return this.http.get<RespuestaPosts>(`${Url}/api/comentariopuesto?pagina=${this.paginaPosts}&puesto=${id}`);
  }

  crearPost(post){
    // Le paso el token para crear un comentario identificando quien lo emite
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    return new Promise(resolve => {
      
      this.http.post(`${Url}/api/comentariopuesto`, post, {headers})
        .subscribe( resp => {
          console.log('Estoy en la promesa del crear post', resp);

          //para poner el post de los primeros en el muro
          this.nuevoPost.emit(resp['post']);
          resolve(true);
        })

    });

  }

}
