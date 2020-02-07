import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'lageplan',
    loadChildren: () => import('./lageplan/lageplan.module').then( m => m.LageplanPageModule)
  },
  {
    path: 'programm',
    loadChildren: () => import('./programm/programm.module').then( m => m.ProgrammPageModule)
  },
  {
    path: 'eintrittspreise',
    loadChildren: () => import('./eintrittspreise/eintrittspreise.module').then( m => m.EintrittspreisePageModule)
  },
  {
    path: 'themenplakate',
    loadChildren: () => import('./themenplakate/themenplakate.module').then( m => m.ThemenplakatePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
