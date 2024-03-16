import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  alertEmail: boolean = false;
  alertPassword: boolean = false;
  alertConnection: boolean = false;

  constructor(private _router: Router) {}

  ngOnInit(): void {

  }

  login(): void {
    let email = (document.getElementById('email')as any).value;
    let password = (document.getElementById('password')as any).value;

    this.alertEmail = (email === '')? true : false;
    this.alertPassword = (password === '')? true : false;
  }

  register(): void {
    this._router.navigateByUrl('/register');
  }
}
