﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace probando
{
	public class Tarea
	{
		public int id { get; set; }

		public string NombreTarea { get; set; }

		public DateTime FechaCreacion { get; set; }

		public DateTime FechaFinalicacion { get; set; }

		public string Explicacion { get; set; }

		public bool Importante { get; set; }

		public string Creador { get; set; }
	}
}
