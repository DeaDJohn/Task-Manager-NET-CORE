import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consultar-api',
  templateUrl: './consultar-api.component.html'
})
export class ConsultarApiComponent {
  public usuarios: Usuarios[];

  constructor(http: HttpClient) {
    const BASE_URL = 'https://jsonplaceholder.typicode.com';
    http.get<Usuarios[]>(BASE_URL + '/users').subscribe(result => {
      this.usuarios = result;
    }, error => console.error(error));
  }
}

interface Usuarios {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
}
