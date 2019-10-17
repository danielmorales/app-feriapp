import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Ferias } from '../interfaces/interfaces';

const Url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class FeriasService {

  constructor( private http: HttpClient ) { }

  getFerias(){
    return this.http.get<Ferias>(`${Url}/api/feria`);
  }

}
