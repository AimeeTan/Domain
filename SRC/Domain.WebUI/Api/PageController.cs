using Domain.Repos;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Domain.Api
{
	[Route("api/pages")]
	public class PageController : Controller
	{
		private readonly IPageRepo _pageRepo;
		public PageController(IPageRepo pageRepo) 
		{
			_pageRepo = pageRepo;
		}

		protected static IActionResult TryCatch<TR>(Func<TR> func)
		{
			try { return new OkObjectResult(func()); }
			catch (Exception ex) { return new BadRequestObjectResult(new { Error = ex.Message }); }
		}
		[HttpGet("searchEngine/list")]
		public IActionResult SearchEngineList()
			=> TryCatch(() => _pageRepo.SearchEngineList());
	}
}
