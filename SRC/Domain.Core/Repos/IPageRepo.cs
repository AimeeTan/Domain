using System.Collections.Generic;

namespace Domain.Core
{
	public interface IPageRepo
	{
		IList<SearchEngine> SearchEngineList { get; }
	}
}
