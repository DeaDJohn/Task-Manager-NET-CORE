using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace probando
{
	public class Tarea
	{
		public Tarea(int Id, string NombreTarea, DateTime FechaCreacion, DateTime FechaFinalicacion, string Explicacion, bool Importante, string Creador)
		{
			this.Id = Id;
			this.NombreTarea = NombreTarea;
			this.FechaCreacion = FechaCreacion;
			this.FechaFinalicacion = FechaFinalicacion;
			this.Explicacion = Explicacion;
			this.Importante = Importante;
			this.Creador = Creador;
		}

		public int Id { get; set; }

		public string NombreTarea { get; set; }

		public DateTime FechaCreacion { get; set; }

		public DateTime FechaFinalicacion { get; set; }

		public string Explicacion { get; set; }

		public bool Importante { get; set; }

		public string Creador { get; set; }
	}
}
