namespace Domain.DataContract
{
	public interface iXqtg { int Xqtg { get; } }
	public interface iUrl { string Url { get; } }
	public interface iName { string Name { get; } }
	public interface iSnap { string Snap { get; } }
	public interface iEndKey { string EndKey { get; } }
	public interface iStartKey { string StartKey { get; } }

	public interface iSearchEngine : 
		IEntity<int>
		, iName
		, iUrl
		, iXqtg
		, iStartKey
		, iEndKey
		, iSnap
	{
	}
}
