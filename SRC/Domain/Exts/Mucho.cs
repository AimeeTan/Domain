namespace at.MyTvp
{
    public sealed class Mucho : at.Tvp.Base<Mucho>
    {
        public Mucho() { }
        private Mucho(string value) : base(value) { }
		public override Mucho NewValue(string value) => new Mucho(value);

		protected override int MaxCount => int.MaxValue;
        protected override string Separator => "\t[\t";
    }
}
