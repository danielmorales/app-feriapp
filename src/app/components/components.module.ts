import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { ComentarioComponent } from './comentario/comentario.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    ComentariosComponent,
    ComentarioComponent
  ],
  exports: [
    ComentariosComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
