using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using Zebra;

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

		public class PaginationObjectResult : OkObjectResult
		{
			public PaginationObjectResult(IPagnation pagnation, object value) : base(new { Data = value, AvailableCnt = pagnation.AvailCnt })
			{
			}
		}

		public static PagingResult<T> ToPagingResult<T>(this Criteria criteria, IEnumerable<T> data)
			=> new PagingResult<T>()
			{
				ErrorMsg = "",
				AvailableCnt = criteria.AvailCnt,
				Data = data
			};

		public static IEnumerable<T> EachDo<T>(this IEnumerable<T> me, Action<T, int> endo)
		{
			var ops = me.ToList();
			for (var i = 0; i < ops.Count; i++)
			{
				endo(ops[i], i);
			}
			return ops;
		}
	}

	public class PagingResult<T>
	{
		public string ErrorMsg { get; set; }
		public int AvailableCnt { get; set; }
		public IEnumerable<T> Data { get; set; }
	}
}
