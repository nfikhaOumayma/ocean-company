import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { ControlbateauComponent } from './controlbateau/controlbateau.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FicheComponent } from './fiche/fiche.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'admin',
  children:[
{path:'',redirectTo:'login',pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard],
children:[
  {path:'',redirectTo:'controls',pathMatch:'full'},
  {path:'controls',component:ControlbateauComponent},
  {path:'fiche',component:FicheComponent},

]},

]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
