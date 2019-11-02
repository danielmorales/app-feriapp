import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { ComentarioComponent } from './comentario/comentario.component';
import { IonicModule } from '@ionic/angular';
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';
import { FeriasComponent } from './ferias/ferias.component';
import { FeriaComponent } from './feria/feria.component';
import { PuestosComponent } from './puestos/puestos.component';
import { PuestoComponent } from './puesto/puesto.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoComponent } from './producto/producto.component';
import { PipesModule } from '../pipes/pipes.module';
import { FeriaCheckComponent } from './feria-check/feria-check.component';
import { FeriasCheckComponent } from './ferias-check/ferias-check.component';

@NgModule({
  declarations: [
    ComentariosComponent,
    ComentarioComponent,
    AvatarSelectorComponent,
    FeriasComponent,
    FeriaComponent,
    PuestosComponent,
    PuestoComponent,
    ProductosComponent,
    ProductoComponent,
    FeriaCheckComponent,
    FeriasCheckComponent
  ],
  exports: [
    ComentariosComponent,
    AvatarSelectorComponent,
    FeriasComponent,
    PuestosComponent,
    ProductosComponent,
    FeriasCheckComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
