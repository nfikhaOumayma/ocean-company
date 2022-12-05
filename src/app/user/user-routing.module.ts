import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DashboarduserComponent } from './dashboarduser/dashboarduser.component';
import { ListbateauxComponent } from './listbateaux/listbateaux.component';
import { SelectedbateauComponent } from './selectedbateau/selectedbateau.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:DashboarduserComponent,
children:[
  {path:'aboutus',component:AboutusComponent},
  {path:'home',component:HomeComponent},
  {path:'selectedbateau/:id', component:SelectedbateauComponent},
  {path:'listbateaux',component:ListbateauxComponent},
  {path:'', redirectTo:'home',pathMatch:'full'}

]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
