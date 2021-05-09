import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-tarea-crear',
  templateUrl: './tarea-crear.component.html',
  styleUrls: ['./tarea-crear.component.css']
})
export class TareaCrearComponent {
  public tarea: Tarea;
  public status: string;
  private saveTarea: Tarea;
  private http: HttpClient;
  private baseUrl: string;


  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    this.baseUrl = baseUrl;
    this.http = http;
      this.tarea = {
        id: 0,
        nombreTarea: '',
        fechaCreacion: new Date(),
        fechaFinalizacion: null,
        explicacion: null,
        importante: false,
        creador: 'Elon Musk'
      }
  }

  onSubmit(form) {
		// Guardar los datos
		this.createTarea(this.tarea).subscribe(
			response => {
				if (response) {

						this.saveTarea = response;
						this.status = "success";
				} else {
					this.status = "failed";
				}
			},
			error => {
				console.log(<any>error);
			}
		);
	}

  createTarea(tarea: Tarea): Observable<any> {
    let params = JSON.stringify(tarea);
    console.log( params );
    console.log(this.baseUrl + "api/tarea/");
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post(
      this.baseUrl + "api/tarea/",
      params,
      { headers: headers }
    );
}

}

interface Tarea {
  id: number,
  nombreTarea: string;
  fechaCreacion: Date;
  fechaFinalizacion: Date;
  explicacion: string;
  importante: boolean;
  creador: string;
}
