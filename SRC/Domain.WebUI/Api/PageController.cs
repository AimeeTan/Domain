using Domain.Repos;
using Microsoft.AspNetCore.Mvc;

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

		[HttpGet("searchEngine/list")]
		public IActionResult SearchEngineList()
		{
			var ss = _pageRepo.SearchEngineList();
			return Ok(_pageRepo.SearchEngineList());
		}
		//=> TryCatch(() => _pageRepo.SearchEngineList());
	}
}
