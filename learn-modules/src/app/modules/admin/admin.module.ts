import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './componetns/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './componetns/home/home.component';
import { UsersComponent } from './componetns/users/users.component';
import { HeaderComponent } from '../layout/components/header/header.component';
import { FooterComponent } from '../layout/components/footer/footer.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    HomeComponent,
    UsersComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule {

  constructor() {
    console.log('this is admin module....');
  }
}
