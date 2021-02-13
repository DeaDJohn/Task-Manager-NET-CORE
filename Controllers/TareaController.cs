using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace probando.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class TareaController : ControllerBase
	{

		private static string[] Tareas = new[]
		{
			"Abrir", "Cerrar", "Poner", "Quitar", "Borrar", "Probar"
		};

		// GET: api/<TareaController>
		[HttpGet]
		public IEnumerable<Tarea> Get()
		{
			var rng = new Random();
			return Enumerable.Range(1, 5).Select(index => new Tarea
			{
				id = rng.Next(0, 255),
				NombreTarea = Tareas[rng.Next(Tareas.Length)],
				FechaCreacion = DateTime.Now.AddDays(index),
				FechaFinalicacion = DateTime.MinValue,
				Explicacion = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mattis turpis sit amet ex iaculis vestibulum. Curabitur hendrerit faucibus suscipit. Quisque elementum, sem nec cursus.",
				Importante = rng.Next(100) <= 50 ? true : false,
				Creador = "YO"
			})
			.ToArray();

		}

		// GET api/<TareaController>/5
		[HttpGet("{id}")]
		public string Get(int id)
		{
			return "value";
		}

		// POST api/<TareaController>
		[HttpPost]
		public void Post([FromBody] string value)
		{
		}

		// PUT api/<TareaController>/5
		[HttpPut("{id}")]
		public void Put(int id, [FromBody] string value)
		{
		}

		// DELETE api/<TareaController>/5
		[HttpDelete("{id}")]
		public void Delete(int id)
		{
		}
	}
}
