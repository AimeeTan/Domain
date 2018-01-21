using Domain.Repos;
using Microsoft.AspNetCore.Mvc;

namespace Domain.Api
{
	[Route("api/page")]
	public class PageController : BaseController
	{
		private readonly IPageRepo _pageRepo;
		public PageController(ITenancyProvider tenancyProvider
		  , IPageRepo pageRepo) :
		  base(tenancyProvider)
		{
			_pageRepo = pageRepo;
		}

		[HttpGet("searchEngine/list")]
		public IActionResult SearchEngineList()
		  => TryCatch(() => _pageRepo.SearchEngineList());
	}
}
