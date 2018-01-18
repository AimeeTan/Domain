using System.Collections.Generic;
using System.Linq;
using AutoMapper;

namespace Domain.Data
{
	public static partial class extMapper
	{
		public static T Map<T>(this object me) => Mapper.Map<T>(me);
		public static T MapFirst<T>(this IQueryable<object> me) => me.FirstOrDefault().Map<T>();
		public static T MapFirst<T>(this IEnumerable<object> me) => me.FirstOrDefault().Map<T>();

		public static IList<T> MapToList<T>(this IQueryable<object> me) => MapToList<T>(me.AsEnumerable());
		public static IList<T> MapToList<T>(this IEnumerable<object> me) => Map<T>(me).ToListDuly();

		public static IEnumerable<T> Map<T>(this IQueryable<object> me) => Map<T>(me.AsEnumerable());
		public static IEnumerable<T> Map<T>(this IEnumerable<object> me) => me.Select(Mapper.Map<T>);
	}
}
 