import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../interfaces/user";

@Component({
  selector: 'app-consultar-api',
  templateUrl: './consultar-api.component.html'
})
export class ConsultarApiComponent {
  public usuarios: User[];

  constructor(http: HttpClient) {
    const BASE_URL = 'https://jsonplaceholder.typicode.com';
    http.get<User[]>(BASE_URL + '/users').subscribe(result => {
      this.usuarios = result;
    }, error => console.error(error));
  }
}

