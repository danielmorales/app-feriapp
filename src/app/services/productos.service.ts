import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Productos } from '../interfaces/interfaces';

const Url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor( private http: HttpClient ) { }

  getProductos(){
    return this.http.get<Productos>(`${Url}/api/producto`);
  }
}
