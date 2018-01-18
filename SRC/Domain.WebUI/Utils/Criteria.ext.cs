using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace Domain.WebUI
{
	public static partial class extDomain
	{
		public static IActionResult PageOf<T, C>(this C criteria,
			Func<C, IEnumerable<T>> result) where C : Criteria
		{
			var data = result(criteria).ToListDuly();
			return new PaginationObjectResult(criteria, data);
		}
	}
}
