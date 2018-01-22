using Microsoft.AspNetCore.Mvc;

namespace Domain.Api
{
	[Route("api/[controller]")]
	public class AuthController : Controller
	{
		[HttpGet]
		public IActionResult Index()
		{
			//var user = HttpContext.User.Identity.Name;
			var user = "Admin";
			if (user != null)
				return Ok(new { user });
			return BadRequest();
		}
	}
}
