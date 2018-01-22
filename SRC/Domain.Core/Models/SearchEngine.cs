using System.Collections.Generic;
using System.Linq;
using Zebra;

namespace Domain.Core
{
	public class SearchEngine : Entity<SearchEngine>
	{
		public int Xqtg { get; set; }
		public string Url { get; set; }
		public string Snap { get; set; }
		public string Name { get; set; }
		public string EndKey { get; set; }
		public string StartKey { get; set; }
		public bool Checked { get; set; }
	}

	public class SearchEngineSpec
	{
		public IEnumerable<SearchEngine> Items { get; set; }
		public string Slip => Items
			.EachTo(x => at.Tvp.Triad.Join(x.ID, x.StartKey, x.EndKey))
			.Over(at.Tvp.Many.Join);
	}
}
