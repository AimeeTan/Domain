namespace at.MyTvp
{
	public sealed class Bag : at.Tvp.Base<Bag>
	{
		public Bag() { }
		private Bag(string value) : base(value) { }
		public override Bag NewValue(string value) => new Bag(value);

		protected override int MaxCount => int.MaxValue;
		protected override string Separator => at.MySpr.Bag;
	}
}
