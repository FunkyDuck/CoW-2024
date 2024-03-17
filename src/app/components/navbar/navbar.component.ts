import { Component, OnInit } from '@angular/core';
import {ConnectedGuard} from "../../guards/connected.guard";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  displayNav: boolean = false;

  constructor(private _guard: ConnectedGuard) {}

  ngOnInit(): void {
    if(localStorage.getItem('access_token'))
      this.displayNav = true;
  }
}
