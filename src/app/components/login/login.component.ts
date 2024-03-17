import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  alertEmail: boolean = false;
  alertPassword: boolean = false;
  alertConnection: boolean = false;

  constructor(private _router: Router, private _usr: UsersService) {}

  ngOnInit(): void {
    document.body.id = 'bdlogin';
  }

  ngOnDestroy(): void {
    document.body.id = '';
  }

  login(): void {
    let email = (document.getElementById('email')as any).value;
    let password = (document.getElementById('password')as any).value;

    this.alertEmail = (email === '')? true : false;
    this.alertPassword = (password === '')? true : false;

    if(!this.alertEmail && !this.alertPassword){
      this._usr.login({email: email, password: password}).subscribe(
        (res: any)=>{
          console.log(res);
        },
        (err: any)=>{
          console.error(err);
        }
      );
    }
  }

  register(): void {
    this._router.navigateByUrl('/register');
  }
}
