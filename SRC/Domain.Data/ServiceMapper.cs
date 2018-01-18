using System.Collections.Generic;

namespace Domain
{
	public interface IServiceMapper
	{
		IEnumerable<ServiceConfiguration> ServiceConfigs { get; }
	}

	public class ServiceMapper : IServiceMapper
	{
		//public IEnumerable<ServiceConfiguration> ServiceConfigs => new[] 
		//{
		//	ServiceConfiguration.Scoped<IParcelRepo, ParcelRepo>(),
		//	ServiceConfiguration.Scoped(typeof(Logging.ILogger<>),typeof(Logging.EmptyLogger<>))
		//};
		public IEnumerable<ServiceConfiguration> ServiceConfigs => throw new System.NotImplementedException();
	}
}
