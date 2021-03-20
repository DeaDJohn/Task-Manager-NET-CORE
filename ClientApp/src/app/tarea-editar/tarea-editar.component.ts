import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-tarea-editar',
  templateUrl: './tarea-editar.component.html',
  styleUrls: ['./tarea-editar.component.css']
})
export class TareaEditarComponent  {


  public tareas: Tarea;
  private id: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get("id");

    console.log(this.id);
    http.get<Tarea>(baseUrl + 'api/tarea/'+ this.id).subscribe(result => {
      this.tareas = result;
      console.log( this.tareas )
    }, error => console.error(error));
  }

  onSubmit(){

  }
  editarTarea(){

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