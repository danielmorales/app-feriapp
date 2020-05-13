import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Supermercados, ListaProductosSupermercado } from '../interfaces/interfaces';

const Url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class SupermercadosService {

  constructor(private http: HttpClient) { }

  getSupermercados(){
    return this.http.get<Supermercados>(`${Url}/api/supermercado`)
  }

  getProductosbySupermercado(id_supermercado: number){
    return this.http.get<ListaProductosSupermercado>(`${Url}/api/supermercado-producto/${id_supermercado}`)
  }

}
