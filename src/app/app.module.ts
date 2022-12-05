import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import {  HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
  
  ],
  imports: [
    BrowserModule,
    UserModule,
    AdminModule,
    AppRoutingModule,
    HttpClientModule,  
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
