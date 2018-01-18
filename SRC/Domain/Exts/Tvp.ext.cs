using System.Collections.Generic;

namespace Domain
{
	using Domain.Archetypes;
	partial class extInfoPath
	{
		
		public static IEnumerable<T> MuchoSlice<T>(string tvp) where T : ValueBase<T>, new()
			=> at.MyTvp.Mucho.Of(tvp).AsEnumerable(ValueBase<T>.From);
	}
}
