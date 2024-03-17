import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class FoodsService {
  url: string = 'https://api.studshareat.com/api/';

  httpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      })
    }
  };

  constructor(private http: HttpClient) { }

  sendProduct(product: any) {
    return this.http.post(this.url + 'food',product, this.httpOptions());
  }
}
