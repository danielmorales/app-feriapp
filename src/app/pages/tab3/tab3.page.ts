import { Component, OnInit } from '@angular/core';
import { Cuenta } from 'src/app/interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';
import { NgForm } from '@angular/forms';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  cuenta: Cuenta = {};

  constructor(private usuarioService: UsuarioService,
              private uiService: UiServiceService,
              private postsService: PostsService ) {}

  ngOnInit(){
    this.cuenta = this.usuarioService.getUsuario();
    console.log('ngOninit del tab3', this.cuenta);
  }

  async actualizar(fActualizar: NgForm){
    if(fActualizar.invalid){return;}

    const actualizado = await this.usuarioService.actualizarCuenta(this.cuenta);
    console.log((actualizado));

    if(actualizado){
      //toast con el mensaje de actualizado
      this.uiService.presentToast('Registro actualizado');
    }else{
      //toast con el error
      this.uiService.presentToast('No se pudo actualizar');
    }
  }

  logout(){
    this.postsService.paginaPosts = 0;
    this.usuarioService.logout();

  }

}
