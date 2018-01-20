namespace Domain.DataContract
{
	public interface iName { string Name { get; } }
	public interface iUrl { string Url { get; } }
	public interface iXqtg { int Xqtg { get; } }
	public interface iStartKey { string StartKey { get; } }
	public interface iEndKey { string EndKey { get; } }
	public interface iSnap { string Snap { get; } }
	public interface iSearchEngine: IEntity
		, iName
		, iUrl
		, iXqtg
		, iStartKey
		, iEndKey
		, iSnap
	{
	}
}
