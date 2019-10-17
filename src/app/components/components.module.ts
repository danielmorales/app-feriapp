import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { ComentarioComponent } from './comentario/comentario.component';
import { IonicModule } from '@ionic/angular';
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';
import { FeriasComponent } from './ferias/ferias.component';
import { FeriaComponent } from './feria/feria.component';

@NgModule({
  declarations: [
    ComentariosComponent,
    ComentarioComponent,
    AvatarSelectorComponent,
    FeriasComponent,
    FeriaComponent
  ],
  exports: [
    ComentariosComponent,
    AvatarSelectorComponent,
    FeriasComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
