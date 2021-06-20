import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Tarea } from '../interfaces/tarea';
import { User } from 'oidc-client';



@Component({
  selector: 'app-tarea-user',
  templateUrl: './tarea-user.component.html',
  styleUrls: ['./tarea-user.component.css']
})
export class TareaUserComponent implements OnInit {

  ngOnInit(): void {
  }

  public tarea: Tarea;
  public usuario: User[];



	constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private route: ActivatedRoute) {
		const id = this.route.snapshot.paramMap.get('id');

		http.get<Tarea>(baseUrl + 'api/tarea/'+ id).subscribe(result => {
			this.tarea = result;
			console.log(this.tarea);
		}, error => console.error(error));

    const BASE_URL = 'https://jsonplaceholder.typicode.com';
    http.get<User[]>(BASE_URL + '/users/1').subscribe(result => {
      this.usuario = result;
      console.log(this.usuario);
    }, error => console.error(error));
	}

}
