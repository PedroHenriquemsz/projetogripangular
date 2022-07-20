import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', loadChildren: () => import('../app/pages/login/login.module').then(m => m.LoginModule) },
  { path: 'garantia', loadChildren: () => import('../app/pages/garantias/garantias.module').then(m => m.GarantiasModule) },
  { path: 'home', loadChildren: () => import('../app/pages/home/home.module').then(m => m.HomeModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
