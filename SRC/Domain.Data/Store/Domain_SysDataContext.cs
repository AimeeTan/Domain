namespace Domain.Data.Store
{
	partial class Domain_SysDataContext
	{
		public Domain_SysDataContext() :
				base(global::Domain.Data.Properties.Settings.Default.Domain_SysConnectionString, mappingSource)
		{
			OnCreated();
		}
	}
}
