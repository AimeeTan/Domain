using System.Collections.Generic;
using Zebra.Archetypes;

namespace Domain
{
	partial class extDomain
	{
		public static IEnumerable<T> MuchoSlice<T>(string tvp) where T : ValueBase<T>, new()
			=> at.MyTvp.Mucho.Of(tvp).AsEnumerable(ValueBase<T>.From);
	}
}
