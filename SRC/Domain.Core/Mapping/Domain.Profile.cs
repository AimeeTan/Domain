using AutoMapper;
using Domain.DataContract;

namespace Domain.Core
{
	public class DomainProfile : Profile
	{
		public DomainProfile()
		{
			CreateMap<iSearchEngine, SearchEngine>()
					;
		}
	}
}
