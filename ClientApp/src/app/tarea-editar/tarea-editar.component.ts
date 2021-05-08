import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-tarea-editar',
  templateUrl: './tarea-editar.component.html',
  styleUrls: ['./tarea-editar.component.css']
})
export class TareaEditarComponent  {


  public tarea: Tarea;
  private id: string;
  public status: string;
  private saveTarea: Tarea;
  private http: HttpClient;
  private baseUrl: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get("id");
    this.baseUrl = baseUrl;
    this.http = http;
    console.log(this.id);
    http.get<Tarea>(baseUrl + 'api/tarea/'+ this.id).subscribe(result => {
      this.tarea = result;
      console.log( this.tarea )
    }, error => console.error(error));
  }

  onSubmit(form) {
		// Guardar los datos
		this.editTarea(this.tarea).subscribe(
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

  editTarea(tarea: Tarea): Observable<any> {
    let params = JSON.stringify(tarea);
    console.log( params );
    console.log(this.baseUrl + "api/tarea/" + tarea.id);
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.put(
      this.baseUrl + "api/tarea/" + tarea.id,
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