using System.Linq;

namespace Domain
{
	public abstract class NoIDCriteria<T> : Criteria<T> where T : class
	{
		protected override IQueryable<T> Pagination(IQueryable<T> source)
		{
			try
			{
				if (PageIndex.IsFalsy() && PageSize.IsFalsy()) return source;

				AvailCnt = source.Count();
				PageIndex = PageIndex < 1 ? 1 : PageIndex;
				PageSize = PageSize < 1 ? 50 : PageSize;
				return source.Skip((PageIndex - 1) * PageSize).Take(PageSize);
			}
			catch { return source; }
		}
	}
}
