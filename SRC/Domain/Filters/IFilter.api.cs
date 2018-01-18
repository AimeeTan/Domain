using System;
using System.Collections.Generic;
using System.Linq;
using Zebra;
using Zebra.Facets;

namespace Domain
{
	public interface IFilter : ICriteria, IAware<PagingSpec>, IAware<IEnumerable<SortSpec>>
	{
		bool Canceled { get; set; }
		PagingSpec PagingSpec { get; }
		IEnumerable<SortSpec> SortSpecs { get; }
	}

	public interface IFilter<T> : IFilter
	{
		IQueryable<T> Filter(IQueryable<T> source);
	}

	public interface IFilter<T, K> : IFilter<T>, IAware<K[]>
	{
		K[] TalliedIDs { get; }
	}

	partial class extDomain
	{
		public static IQueryable<T> ApplyTo<T>(this IFilter<T> me, Func<IQueryable<T>> source)
			=> me.ApplyTo(source());

		public static IQueryable<T> ApplyTo<T>(this IFilter<T> me, IQueryable<T> source)
			=> me.Filter(source);

		public static IEnumerable<T> ApplyTo<T>(this IFilter<T> me, IEnumerable<T> source)
			=> me.ApplyTo(source.AsQueryable());
	}
}