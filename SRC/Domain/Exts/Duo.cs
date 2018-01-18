namespace at.MyTvp
{
	public sealed class Duo : at.Tvp.Base<Duo>
	{
		public Duo() { }
		private Duo(string value) : base(value) { }
		public override Duo NewValue(string value) => new Duo(value);

		protected override int MaxCount => 2;
		protected override string Separator => "\t]\t";
	}
}
