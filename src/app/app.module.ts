import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';
import { ListComponent } from './components/list/list.component';
import { FilterComponent } from './components/filter/filter.component';
import { GiveComponent } from './components/give/give.component';
import { ProfilComponent } from './components/profil/profil.component';
import { GroupsComponent } from './components/groups/groups.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Error404Component } from './components/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MapComponent,
    ListComponent,
    FilterComponent,
    GiveComponent,
    ProfilComponent,
    GroupsComponent,
    NavbarComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
