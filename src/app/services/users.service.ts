import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  token: string | undefined;
  url: string = 'https://api.studshareat.com/api/';

  httpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
  };

  constructor(private http: HttpClient) { }

  newUser(user: any): any {
    console.info(user)
    return this.http.post(this.url + 'register', user, this.httpOptions());
  }

  login(data: any): any {
    return this.http.post(this.url + 'login', data, this.httpOptions());
  }

  isConnected(): boolean {
    return false;
  }
}
