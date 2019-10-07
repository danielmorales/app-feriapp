import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RespuestaPosts } from '../interfaces/interfaces';

const Url = environment.url;

/*
const headers = new HttpHeaders({
  'X-Api-key': Url,
  'fk_id_puesto': puesto
});
*/

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  paginaPosts = 0;
  puesto = 1;

  constructor(private http: HttpClient) { }

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
}
