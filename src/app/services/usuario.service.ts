import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { Cuenta } from '../interfaces/interfaces';
import { NavController } from '@ionic/angular';

const Url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;
  private cuenta: Cuenta = {};

  constructor( private http: HttpClient,
               private storage: Storage,
               private navCtrl: NavController) { }
  
  login(email: string, password: string) {
    
    const data = {correo_cuenta: email, password_cuenta: password};

    return new Promise(resolve =>{
      
      this.http.post(`${Url}/api/cuenta/login`, data)
        .subscribe( async resp =>{
          console.log(resp);
          if(resp['ok']){
            console.log('Hola estoy en el if si es una respuesta OK del token');
            await this.guardarToken(resp['tokenuser']);
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

  logout(){
    this.token = null;
    this.cuenta = null;
    this.storage.clear();
    this.navCtrl.navigateRoot('/login', {animated: true});
  }

  registro( usuario: Cuenta){
    console.log('entre a la funcion registro');
    return new Promise(resolve=>{
      this.http.post(`${Url}/api/cuenta`, usuario)
        .subscribe( async resp => {
          console.log(resp);
          if(resp['ok']){
            console.log('Hola estoy en el if de la funcion REGISTRO,si es que el token fue OK');
            await this.guardarToken(resp['tokenuser']);
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

    //para el logout
    await this.validaToken();
  }

  getUsuario(){
    //validación por si la cuenta no existe, retornar al login    
    if (!this.cuenta.id_cuenta){
      this.validaToken();
    }
    return{...this.cuenta};
  }

  async cargarToken(){
    this.token = await this.storage.get('token') || null;
  }

  async validaToken(): Promise<boolean> {

    // console.log('Entre a la funcion validaToken');

    await this.cargarToken();

    if(!this.token){
      this.navCtrl.navigateRoot('/login');
      return Promise.resolve(false);
    }

    return new Promise<boolean>(resolve =>{

      const headers = new HttpHeaders({
        'x-token': this.token
      });

      this.http.get(`${Url}/api/cuenta`, {headers})
        .subscribe(resp =>{
          if(resp['ok']){
            this.cuenta = resp['cuenta'];
            resolve(true);
          } else {
            this.navCtrl.navigateRoot('/login');
            resolve(false);
          }
          
        });
    })
  }

  actualizarCuenta(cuenta: Cuenta){
    const headers = new HttpHeaders({
      'x-token': this.token
    })

    return new Promise(resolve=>{
      
      this.http.post(`${Url}/api/cuenta/update`, cuenta, {headers})
        .subscribe(resp => {
          // Quitar clg
          //console.log('dentro del promise del usuarioservice', resp);

          if(resp['ok']){
            this.guardarToken(resp['token']);
            resolve(true);
          }else {
            resolve(false);
          }

        });
    });

  }

}
