import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Productos,  OneProducto } from '../interfaces/interfaces';

const Url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor( private http: HttpClient ) { }

  // Obtener todos los productos
  getProductos(){
    return this.http.get<Productos>(`${Url}/api/producto`);
  }
  // Obtener un producto
  getOneProductos(id_producto: number){
    return this.http.get<OneProducto>(`${Url}/api/producto/${id_producto}`);
  }



}
