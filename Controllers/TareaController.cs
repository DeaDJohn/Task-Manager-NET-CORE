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

		//private static tarea[] Tareas = new[]
		//{
		//	"Abrir", "Cerrar", "Poner", "Quitar", "Borrar", "Probar"
		//};
		private List<Tarea> tareaList = new List<Tarea>();
		// GET: api/<TareaController>
		[HttpGet]
		public IEnumerable<Tarea> Get()
		{
			tareaList.Add(new Tarea(0, "Crear proyecto", new DateTime(2021, 1, 1), DateTime.MinValue, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", true, "Pepito" ));
			tareaList.Add(new Tarea(1, "Programar proyecto", new DateTime(2021, 1, 10), DateTime.MinValue, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", true, "Pepito"));
			tareaList.Add(new Tarea(2, "Probar proyecto", new DateTime(2021, 1, 21), DateTime.MinValue, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", true, "Pepito"));
			tareaList.Add(new Tarea(3, "Resolver fallos", new DateTime(2021, 2, 7), DateTime.MinValue, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", false, "Pepito"));
			tareaList.Add(new Tarea(4, "Resolver fallos", new DateTime(2021, 2, 7), DateTime.MinValue, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", false, "Pepito"));
			tareaList.Add(new Tarea(5, "Subir a producción", new DateTime(2021, 2, 9), DateTime.MinValue, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", false, "Pepito"));

			return tareaList.ToArray();

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
