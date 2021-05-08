using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace probando.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class UsuarioController : ControllerBase
	{

		public HttpClient client = new HttpClient();



		// GET: api/<UsuarioController>
		[HttpGet]
		public IEnumerable<string> Get()
		{

			return new string[] { "value1", "value2" };

		}

		// GET api/<UsuarioController>/5
		[HttpGet("{id}")]
		public async Task<Usuario> GetUsuarioByID(int id)
		{


			Usuario usuario = null;
			HttpResponseMessage response = await client.GetAsync("https://jsonplaceholder.typicode.com/user/1");
			if (response.IsSuccessStatusCode)
			{
				usuario = await response.Content.ReadAsAsync<Usuario>();
			}
			return usuario;
		}

		// POST api/<UsuarioController>
		[HttpPost]
		public void Post([FromBody] string value)
		{
		}

		// PUT api/<UsuarioController>/5
		[HttpPut("{id}")]
		public void Put(int id, [FromBody] string value)
		{
		}

		// DELETE api/<UsuarioController>/5
		[HttpDelete("{id}")]
		public void Delete(int id)
		{
		}
	}
}
