import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { ListbateauxComponent } from './listbateaux/listbateaux.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BateauComponent } from './bateau/bateau.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { DashboarduserComponent } from './dashboarduser/dashboarduser.component';
import { MenuUserComponent } from './menu-user/menu-user.component';
import { SelectedbateauComponent } from './selectedbateau/selectedbateau.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { PricePipe } from './price.pipe';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AboutusComponent,
    ListbateauxComponent,
    BateauComponent,
    CommentaireComponent,
    SelectedbateauComponent,
    DashboarduserComponent,
    MenuUserComponent,
    PricePipe,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
   HttpClientModule,
   ReactiveFormsModule,
   AppRoutingModule,
   FormsModule,
  ]
})
export class UserModule { }
