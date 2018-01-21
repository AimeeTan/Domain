using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
