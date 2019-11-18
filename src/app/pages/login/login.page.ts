import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { Cuenta } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal', {static: true}) slides: IonSlides;

  loginUser = {
    email: 'test1@gmail.com',
    password: 'test1'
  };

  registerUser: Cuenta = {
    nombre: 'Daniel',
    apellido: 'Morales',
    correo_cuenta: 'danielmorales.ag@gmail.com',
    password_cuenta: 'clave123'
  };


  constructor(private usuarioService: UsuarioService,
              private navCtrl: NavController,
              private uiService: UiServiceService) { }

  ngOnInit() {
    this.slides.lockSwipes(true);
  }

  async login(fLogin: NgForm){

    if(fLogin.invalid){
      return;
    }

    const valido = await this.usuarioService.login(this.loginUser.email, this.loginUser.password);

    if(valido){
      //Navegar al tabs
      this.navCtrl.navigateRoot('main/tabs/tab1', {animated: true});
    }
    else {
      //Mostrar alerta usuario y contraseña no validos
      this.uiService.alertaInformativa('Usuario y contraseña no son correctos');
    }
    console.log('Estoy en la funcion login');
    console.log((fLogin.valid));
    console.log(this.loginUser);
  }

  async registro(fRegistro: NgForm) {
    console.log('Estoy en la funcion registro');
    console.log((fRegistro.valid));

    if(fRegistro.invalid){
      console.log('formulario invalido');
      return;
    }

    const valido = await this.usuarioService.registro(this.registerUser);

    
    if(valido){
      //Navegar al tabs
      this.navCtrl.navigateRoot('main/tabs/tab1', {animated: true});
    }
    else {
      //Mostrar alerta usuario y contraseña no validos
      this.uiService.alertaInformativa('Ese email ya existe');
    }

  }


  mostrarRegistro(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);  
  }

  mostrarLogin(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true); 
  }

}
