import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ControlbateauComponent } from './controlbateau/controlbateau.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MenuadminComponent } from './menuadmin/menuadmin.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { FicheComponent } from './fiche/fiche.component';


@NgModule({
  declarations: [
    ControlbateauComponent,
    LoginComponent,
    DashboardComponent,
    MenuadminComponent,
    FicheComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
   HttpClientModule,  
   ReactiveFormsModule,
   AppRoutingModule,
   FormsModule,
  ]
})
export class AdminModule { }
