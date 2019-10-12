import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { ComentarioComponent } from './comentario/comentario.component';
import { IonicModule } from '@ionic/angular';
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';

@NgModule({
  declarations: [
    ComentariosComponent,
    ComentarioComponent,
    AvatarSelectorComponent
  ],
  exports: [
    ComentariosComponent,
    AvatarSelectorComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
