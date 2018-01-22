using Domain.Facets;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;

namespace Domain.Api
{
	[Produces("application/json")]
	[ResponseCache(NoStore = true, Duration = 0, VaryByHeader = "None")]
	//[AllowAnonymous]
	[Authorize]
	public abstract class BaseController : Controller
		//, ITvpRepoContext
	{
		//public BaseController(ITenancyProvider tenancyProvider)
		//{
		//	Tenancy = tenancyProvider.Get();
		//}
		protected IActionResult TryOrBadRequest<R>(Func<R> func)
			=> TryCatch(func);

		protected static IActionResult TryCatch<TR>(Func<TR> func)
		{
			try { return new OkObjectResult(func()); }
			catch (Exception ex) { return new BadRequestObjectResult(new { Error = ex.Message }); }
		}

		protected static IActionResult TryCatch(System.Action action)
		{
			try { action(); return new OkObjectResult(new { Message = "OK" }); }
			catch (Exception ex) { return new BadRequestObjectResult(new { Error = ex.Message }); }
		}

		//public Tenancy Tenancy { get; }

		//public string TenancyTvp => throw new NotImplementedException();

		//public string TenancyTvp => Tenancy.TvpFor(UserRoles.ICOP);

		//protected void setImportDetailFromSession<T>(string key, T detail)
		//{
		//	HttpContext.Session.SetString(key, JsonConvert.SerializeObject(detail));
		//}

		//protected T getImportDetailFromSession<T>(string key)
		//{
		//	try
		//	{
		//		var jsonData = HttpContext.Session.GetString(key) ?? string.Empty;
		//		return JsonConvert.DeserializeObject<T>(jsonData);
		//	}
		//	catch
		//	{
		//		return default(T);
		//	}

		//}
	}
}
