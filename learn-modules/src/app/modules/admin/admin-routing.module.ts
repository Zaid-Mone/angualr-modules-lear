import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './componetns/admin-dashboard/admin-dashboard.component';
import { UsersComponent } from './componetns/users/users.component';
import { HomeComponent } from './componetns/home/home.component';

const routes: Routes = [
  {
    
    path: '',
    component: HomeComponent ,
    children: [
      { path: 'admin-dashboard', component:  AdminDashboardComponent},
      { path: 'users', component: UsersComponent },
      { path: '', redirectTo: '/admin/admin-dashboard', pathMatch: 'full' },
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
