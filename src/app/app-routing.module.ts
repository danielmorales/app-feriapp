import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsuarioGuard } from './guards/usuario.guard';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
   // canActivate: [UsuarioGuard]
    canLoad: [UsuarioGuard]
  },
  { path: 'login',
    loadChildren: './pages/login/login.module#LoginPageModule'
  },
  {
    path: '',
    pathMatch:'full',
    redirectTo: 'main/tabs/tab1'
  },
  { path: 'tab4', loadChildren: './pages/tab4/tab4.module#Tab4PageModule' },
  // Tab 2 modificar, sirve solo para comentar respecto a un puesto
  { path: 'tab2', loadChildren: './pages/tab2/tab2.module#Tab2PageModule'},
  { path: 'puestos/:id_feria', loadChildren: './pages/puestos/puestos.module#PuestosPageModule' },
  { path: 'comentarios/:id_puesto', loadChildren: './pages/comentarios/comentarios.module#ComentariosPageModule' },
  { path: 'ferias', loadChildren: './pages/ferias/ferias.module#FeriasPageModule',canLoad: [UsuarioGuard] },
  { path: 'resultados', loadChildren: './pages/resultados/resultados.module#ResultadosPageModule' },
  { path: 'recorrido', loadChildren: './pages/recorrido/recorrido.module#RecorridoPageModule' },
  { path: 'mapa-ferias', loadChildren: './pages/mapa-ferias/mapa-ferias.module#MapaFeriasPageModule' },
  { path: 'comparar', loadChildren: './pages/comparar/comparar.module#CompararPageModule' },
  {
    path: '**',
    pathMatch:'full',
    redirectTo: 'main/tabs/tab1'
  }   
 
 
  ];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
