namespace Domain.Core.Store
{
	partial class Domain_SysDataContext
	{

		public Domain_SysDataContext() :
				base(global::Domain.Core.Properties.Settings.Default.Domain_SysConnectionString, mappingSource)
		{
			OnCreated();
		}
	}
}
