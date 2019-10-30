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
  { path: 'puestos/:id_feria', loadChildren: './pages/puestos/puestos.module#PuestosPageModule' },
  { path: 'comentarios/:id_puesto', loadChildren: './pages/comentarios/comentarios.module#ComentariosPageModule' },
  { path: 'ferias', loadChildren: './pages/ferias/ferias.module#FeriasPageModule' },
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
