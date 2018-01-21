using Domain.Archetypes;
using Domain.Core;
using System.Collections.Generic;

namespace Domain.Repos
{
	public interface IPageRepo : ITvpRepo
	{
	 	IList<SearchEngine> SearchEngineList();
	}
}
