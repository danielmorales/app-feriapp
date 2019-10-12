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


return new Promise(resolve => {
    this.httpClient.delete(URL, httpOptions)       
                   .subscribe(res => {     
                       resolve(res);
                   }, err => {               
                       resolve(err);
                   });
    });
});
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

  // funcion que no se utiliza, es para juntar una query con la url inicial
  private ejecutarQuery<T>(query: string) {
    query = Url + query;
    return this.http.get(query);
  }
  // tslint:disable-next-line: variable-name
  getPosts(pull: boolean = false) {
    if(pull){
      this.paginaPosts = 0;
    }
    this.paginaPosts++;
    return this.http.get<RespuestaPosts>(`${Url}/api/comentariopuesto?pagina=${this.paginaPosts}&puesto=${this.puesto}`);
  //  return this.ejecutarQuery(`/api/comentariopuesto?pagina=${this.paginaPosts}`);
  }

  crearPost(post){
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
