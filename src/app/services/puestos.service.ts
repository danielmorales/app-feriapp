import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Puestos } from '../interfaces/interfaces';

const Url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PuestosService {

  constructor( private http: HttpClient ) {}

  // Retorna los puestos de una feria en particular
  getPuestos(id: number){
    return this.http.get<Puestos>(`${Url}/api/puesto/feria/${id}`);
  }
  
}
