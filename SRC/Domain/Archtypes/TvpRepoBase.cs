using System;
using Domain.Facets;

namespace Domain.Archetypes
{
	public interface ITvpRepo : IAware<ITvpRepoContext> { }
	public interface IDataContextFactory<T> where T : IDisposable { T Create(); }

	public abstract class TvpRepoBase<TDataContext> : ITvpRepo where TDataContext : IDisposable
	{
		private ITvpRepoContext _tvpRepoContext;
		private readonly IDataContextFactory<TDataContext> _dataContextFactory;

		protected TvpRepoBase(IDataContextFactory<TDataContext> dataContextFactory)
		{
			_dataContextFactory = dataContextFactory;
		}

		void IAware<ITvpRepoContext>.Admit(ITvpRepoContext visitor) => _tvpRepoContext = visitor;


		protected string ResultArg;
		protected virtual string TenancyArg => (_tvpRepoContext?.TenancyTvp).Ensure();

		protected virtual string OnAction(Action<TDataContext> action)
		{
			ResultArg = string.Empty;
			using (var dataContext = _dataContextFactory.Create())
			{
				action(dataContext);
			}
			return ResultArg;
		}
		protected virtual string OnAction(Action<TDataContext> action, Action<Exception> onError)
		{
			try { return OnAction(action); }
			catch (Exception ex) { onError(ex); return ResultArg; }
		}

		protected virtual R OnFunction<R>(Func<TDataContext, R> func)
		{
			using (var dataContext = _dataContextFactory.Create())
			{
				return func(dataContext);
			}
		}
		protected virtual R OnFunction<R>(Func<TDataContext, R> func, Action<Exception> onError)
		{
			try { return OnFunction(func); }
			catch (Exception ex) { onError(ex); return default(R); }
		}
	}

}
