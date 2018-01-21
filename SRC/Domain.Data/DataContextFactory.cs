namespace Domain.Data
{
	using Domain.Archetypes;
	using Domain.Data.Store;

	public sealed class DataContextFactory :
		IDataContextFactory<Domain_SysDataContext>
	{
		public Domain_SysDataContext Create()
			=> new Domain_SysDataContext { ObjectTrackingEnabled = false };
	}
}
