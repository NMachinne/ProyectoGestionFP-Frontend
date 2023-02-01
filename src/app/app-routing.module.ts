import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'alumno',
    loadChildren: () => import('./alumno/alumno.module').then( m => m.AlumnoPageModule)
  },
  {
    path: 'alumno',
    loadChildren: () => import('./alumno/alumno.module').then( m => m.AlumnoPageModule)
  },
  {
    path: 'empresa',
    loadChildren: () => import('./empresa/empresa.module').then( m => m.EmpresaPageModule)
  },
  {
    path: 'periodopracticas',
    loadChildren: () => import('./periodopracticas/periodopracticas.module').then( m => m.PeriodopracticasPageModule)
  },
  {
    path: 'modulo',
    loadChildren: () => import('./modulo/modulo.module').then( m => m.ModuloPageModule)
  },
  {
    path: 'usuario-edit',
    loadChildren: () => import('./pages/usuario-edit/usuario-edit.module').then( m => m.UsuarioEditPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
