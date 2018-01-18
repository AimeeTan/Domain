using System;

namespace Domain
{
	public interface IReferring : IReferring<long> { }
	public interface IReferring<TKey> : IIdentityGetter<TKey> where TKey : IEquatable<TKey>
	{
		string Text { get; }
	}

	public sealed class Referring : Zebra.Archetypes.Duad<Referring, long, string>, IReferring<long>
	{
		public static Referring Of(Enum id, string text) => new Referring(id.ToInt64(), text);
		public static Referring Of(long id, string text) => new Referring(id, text);

		public Referring() : this(0, string.Empty) { }
		private Referring(long id, string text) : base(id, text.Ensure()) { }

		protected override Referring OnNew(IDuad<string, string> tvp) => Of(tvp.V1.ToInt64(), tvp.V2);

		public long ID => f1;
		public string Text => f2;
	}
}
