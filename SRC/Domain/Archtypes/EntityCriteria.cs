using System;
using System.Collections.Generic;
using System.Linq;
using Zebra;

namespace Domain
{
	public abstract class EntityCriteria<T> : EntityCriteria<T, long> where T : class, IEntity<long> { }
	public abstract class EntityCriteria<T, PK> : Criteria<T>, IEntityCriteria<T, PK>
		where T : class, IEntity<PK> where PK : IEquatable<PK>
	{
		public PK ID { get; set; }
		public IList<PK> IDs { get; set; }

		protected override bool OnEarlyBreak()
		{
			self.Add(x => ((IIdentityGetter<PK>)x).ID.Equals(ID), ID.IsTruthy())
				.Add(x => IDs.ToList().Contains(((IIdentityGetter<PK>)x).ID), IDs.IsTangible());
			return ID.IsTruthy() || IDs.IsTangible();
		}

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
