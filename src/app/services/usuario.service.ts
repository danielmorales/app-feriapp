import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { Cuenta } from '../interfaces/interfaces';

const Url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;

  constructor( private http: HttpClient,
               private storage: Storage) { }
  
  login(email: string, password: string) {
    
    const data = {correo_cuenta: email, password_cuenta: password};

    return new Promise(resolve =>{
      
      this.http.post(`${Url}/api/cuenta/login`, data)
        .subscribe(resp =>{
          console.log(resp);
          if(resp['ok']){
            console.log('Hola estoy en el if si es una respuesta OK del token');
            this.guardarToken(resp['tokenuser']);
            resolve(true);
          }
          else {
            this.token = null;
            this.storage.clear();
            resolve(false);
          }
        });

    });

  }

  registro( usuario: Cuenta){
    console.log('entre a la funcion registro');
    return new Promise(resolve=>{
      this.http.post(`${Url}/api/cuenta`, usuario)
        .subscribe(resp => {
          console.log(resp);
          if(resp['ok']){
            console.log('Hola estoy en el if de la funcion REGISTRO,si es que el token fue OK');
            this.guardarToken(resp['tokenuser']);
            resolve(true);
          }
          else {
            this.token = null;
            this.storage.clear();
            resolve(false);
          }
        })
    });
  }

  async guardarToken(token: string){
    this.token = token;
    await this.storage.set('token', token);
  }

}
