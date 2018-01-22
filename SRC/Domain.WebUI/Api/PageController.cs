using Domain.Core;
using Domain.Repos;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

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

		private static IActionResult TryCatch<TR>(Func<TR> func)
		{
			try { return new OkObjectResult(func()); }
			catch (Exception ex) { return new BadRequestObjectResult(new { Error = ex.Message }); }
		}

		private static IActionResult TryCatch(System.Action action)
		{
			try { action(); return new OkObjectResult(new { Message = "OK" }); }
			catch (Exception ex) { return new BadRequestObjectResult(new { Error = ex.Message }); }
		}

		[HttpGet("searchEngine/list")]
		public IActionResult SearchEngineList()
			=> TryCatch(() => _pageRepo.SearchEngineList());

		
        [HttpPost("confirm/config")]
        public IActionResult ConfirmConfig([FromBody]SearchEngineSpec spec)
            => TryCatch(() => _pageRepo.ConfirmConfig(spec));
	}
}
