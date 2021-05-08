import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

	public tarea: Tarea;
	

	constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private route: ActivatedRoute) {
		const id = this.route.snapshot.paramMap.get('id');

		http.get<Tarea>(baseUrl + 'api/tarea/'+ id).subscribe(result => {
			this.tarea = result;
			console.log(this.tarea);
		}, error => console.error(error));
	}

	ngOnInit() {
		
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
