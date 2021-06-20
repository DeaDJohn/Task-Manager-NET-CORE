import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarea } from "../interfaces/tarea";

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {

  public tareas: Tarea[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Tarea[]>(baseUrl + 'api/tarea').subscribe(result => {
      this.tareas = result;
	  console.log(this.tareas);
    }, error => console.error(error));
  }


}


