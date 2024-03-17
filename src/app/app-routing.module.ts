import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import { RegisterComponent } from './components/register/register.component';
import {Error404Component} from "./components/error404/error404.component";
import {ConnectedGuard} from "./guards/connected.guard";
import {GiveComponent} from "./components/give/give.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register',component: RegisterComponent},
  {path: 'home', component: HomeComponent, canActivate: [ConnectedGuard]},
  {path: 'give', component: GiveComponent, canActivate: [ConnectedGuard]},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
