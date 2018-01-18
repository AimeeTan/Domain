using System;

namespace Domain
{
	public class ServiceConfiguration
	{
		public enum Lifetimes { Singleton = 0, Scoped = 1, Transient = 2 }
		public ServiceConfiguration(Lifetimes lifetime, Type serviceType, Type implType)
		{
			Lifetime = lifetime;
			ServiceType = serviceType;
			ImplementationType = implType;
		}
		public Lifetimes Lifetime { get; }
		public Type ServiceType { get; }
		public Type ImplementationType { get; }

		public static ServiceConfiguration Scoped<TService, TImplementation>()
			where TService : class
			where TImplementation : class, TService
			=> new ServiceConfiguration(Lifetimes.Scoped, typeof(TService), typeof(TImplementation));
		public static ServiceConfiguration Scoped(Type serviceType, Type implementationType)
			=> new ServiceConfiguration(Lifetimes.Scoped, serviceType, implementationType);

		public static ServiceConfiguration Singleton<TService, TImplementation>()
			where TService : class
			where TImplementation : class, TService
			=> new ServiceConfiguration(Lifetimes.Singleton, typeof(TService), typeof(TImplementation));
		public static ServiceConfiguration Singleton(Type serviceType, Type implementationType)
			=> new ServiceConfiguration(Lifetimes.Scoped, serviceType, implementationType);

		public static ServiceConfiguration Transient<TService, TImplementation>()
			where TService : class
			where TImplementation : class, TService
			=> new ServiceConfiguration(Lifetimes.Transient, typeof(TService), typeof(TImplementation));
		public static ServiceConfiguration Transient(Type serviceType, Type implementationType)
			=> new ServiceConfiguration(Lifetimes.Scoped, serviceType, implementationType);
	}
}
