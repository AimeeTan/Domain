namespace Domain
{
	public abstract class Criteria : ICriteria, IPagnation
	{
		public virtual int PageIndex { get; set; } = 1;
		public virtual int PageSize { get; set; } = 50;
		public virtual int AvailCnt { get; set; }

		public virtual string SortField { get; set; }
		public virtual bool SortFlag { get; set; } = true;
	}
}
