using System;
using System.Collections.Generic;

namespace Domain
{
	public interface IEntityCriteria<T, PK> : ICriteria where T : class, IEntity<PK> where PK : IEquatable<PK>
	{
		PK ID { get; set; }
		IList<PK> IDs { get; set; }
	}
}
