namespace at.MyTvp
{
	public sealed class Trio : at.Tvp.Base<Trio>
	{
		public  Trio() { }
		private Trio(string value) : base(value) { }
		public override Trio NewValue(string value) => new Trio(value);

		protected override int MaxCount => 3;
		protected override string Separator => "\t}\t";
	}
}
