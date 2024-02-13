import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';
import { Error404Component } from './components/error404/error404.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home page' },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(a => a.AdminModule), canActivate: [authGuard] },
  { path: '**', component: Error404Component, title: 'Error Page' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [authGuard]
})
export class AppRoutingModule { }
