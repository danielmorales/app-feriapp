import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Puestos, ProductosPuestoLista } from '../interfaces/interfaces';

const Url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PuestosService {

  constructor( private http: HttpClient ) {}

  // Retorna los puestos de una feria
  getPuestos(id: number){
    return this.http.get<Puestos>(`${Url}/api/puesto/feria/${id}`);
  }

  // Retorna los productos de un puesto
  getProductosPuesto(id: number){
    return this.http.get<ProductosPuestoLista>(`${Url}/api/puesto-producto/${id}`)
  }

  
}
