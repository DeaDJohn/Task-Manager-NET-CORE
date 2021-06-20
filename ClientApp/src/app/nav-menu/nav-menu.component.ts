import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from "../interfaces/user";

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  public usuarios: User[];

  constructor(http: HttpClient) {
    const BASE_URL = 'https://jsonplaceholder.typicode.com';
    http.get<User[]>(BASE_URL + '/users/1').subscribe(result => {
      this.usuarios = result;
      console.log(this.usuarios);
    }, error => console.error(error));
  }
}
