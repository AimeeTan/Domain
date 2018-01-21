using System.Collections.Generic;
using Domain.Archetypes;
using Domain.Core;
using Domain.Data.Store;

namespace Domain.Data
{
	public class PageRepo : TvpRepoBase<Domain_SysDataContext>, IPageRepo
	{
		public PageRepo(IDataContextFactory<Domain_SysDataContext> factory) : base(factory) { }

		public IList<SearchEngine> SearchEngineList
			=> OnFunction(x => x.SearchEngine_Row().MapToList<SearchEngine>());
	}
}
