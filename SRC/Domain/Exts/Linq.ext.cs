using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Zebra;

namespace Domain
{
	partial class extDomain
	{
		public static IQueryable<T> PageBy<T, C>(this IQueryable<T> me, C criteria) where C : IPagnation
			=> me.Skip((criteria.PageIndex - 1) * criteria.PageSize).Take(criteria.PageSize);

		public static IEnumerable<T> PageBy<T, C>(this IEnumerable<T> me, C criteria) where C : IPagnation
			=> criteria.PageIndex > 0 ? me.Skip((criteria.PageIndex - 1) * criteria.PageSize).Take(criteria.PageSize) : me;

		public static IQueryable<T> OrderBy<T>(this IQueryable<T> me, string propertyName) => OrderBy(me, propertyName, false);
		public static IQueryable<T> OrderBy<T>(this IQueryable<T> me, string propertyName, bool desc)
		{
			if (propertyName.IsFalsy())
			{
				return me;
			}
			var param = Expression.Parameter(typeof(T));
			var body = Expression.Property(param, propertyName);
			dynamic keySelector = Expression.Lambda(body, param);
			return desc ? Queryable.OrderByDescending(me, keySelector) : Queryable.OrderBy(me, keySelector);
		}

		public static IEnumerable<T> FilterBy<T>(this IQueryable<T> me, Criteria<T> criteria) where T : IEntity
			=> me.FilterBy<T, long>(criteria);

		public static IEnumerable<T> FilterBy<T, PK>(this IQueryable<T> me, Criteria<T> criteria)
			where T : IEntity<PK>
			where PK : IEquatable<PK>
			=> criteria.ApplyTo(me);

	}
}
