namespace Domain.Data
{
	using Archetypes;
	using Domain.Core.Store;
	public sealed class DataContextFactory : IDataContextFactory<Domain_SysDataContext>
	{
		public Domain_SysDataContext Create()
			=> new Domain_SysDataContext { ObjectTrackingEnabled = false };
	}
}
