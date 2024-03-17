import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy{
  alertFirstname: boolean = false;
  alertLastname: boolean = false;
  alertUsername: boolean = false;
  alertEmail: boolean = false;
  alertPassword: boolean = false;
  alertBirthdate: boolean = false;
  alertStreet: boolean = false;
  alertNumber: boolean = false;
  alertCity: boolean = false;
  alertZip: boolean = false;

  constructor(private _usr: UsersService) {}

  ngOnInit(): void {
    document.body.id = 'bdregister';
  }

  ngOnDestroy(): void {
    document.body.id = '';
  }

  register(): void {
    let firstname = (document.getElementById('firstname')as any).value;
    let lastname = (document.getElementById('lastname')as any).value;
    let username = (document.getElementById('username')as any).value;
    let email = (document.getElementById('email')as any).value;
    let password = (document.getElementById('password')as any).value;
    let birthdate = (document.getElementById('birthdate')as any).value;
    let street = (document.getElementById('street')as any).value;
    let streetnumber = (document.getElementById('streetnumber')as any).value;
    let city = (document.getElementById('city')as any).value;
    let zip = (document.getElementById('zip')as any).value;

    this.alertFirstname = (firstname === '')? true : false;
    this.alertLastname = (lastname === '')? true : false;
    this.alertUsername = (username === '')? true : false;
    this.alertEmail = (email === '')? true : false;
    this.alertPassword = (password === '')? true : false;
    this.alertBirthdate = (birthdate === '')? true : false;
    this.alertStreet = (street === '')? true : false;
    this.alertNumber = (streetnumber === '')? true : false;
    this.alertCity = (city === '')? true : false;
    this.alertZip = (zip === '')? true : false;

    if(!this.alertFirstname && !this.alertLastname && !this.alertUsername && !this.alertEmail && !this.alertPassword && !this.alertBirthdate && !this.alertStreet && !this.alertNumber && !this.alertCity && !this.alertZip){
      let newUser = {
        firstname: firstname,
        lastname: lastname,
        username: username,
        email: email,
        password: password,
        birthdate: birthdate,
        street: street,
        number: streetnumber,
        city: city,
        zip: zip,
        country: 'Belgium'
      };

      this._usr.newUser(newUser).subscribe(
        (res: any)=>{
          console.log(res);
        },
        (err: any)=>{
          console.error(err);
        }
      );
    }
  }
}
