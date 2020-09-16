import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'add-session',
    loadChildren: () => import('./add-session/add-session.module').then( m => m.AddSessionPageModule)
  },
  {
    path: 'get-sessions',
    loadChildren: () => import('./get-sessions/get-sessions.module').then(m => m.GetSessionsPageModule)
  },
  {
    path: 'edit-session/:id',
    loadChildren: () => import('./edit-session/edit-session.module').then( m => m.EditSessionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
