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
	}
}
