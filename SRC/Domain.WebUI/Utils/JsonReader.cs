using Newtonsoft.Json;
using System.IO;

namespace Zebra.IC.WebUI
{
	public static class JsonReader<T>
	{
		public static T Read(string path)
		{
			using (var stream = new StreamReader(path))
			{
				var json = stream.ReadToEnd();
				return JsonConvert.DeserializeObject<T>(json);
			}
		}
	}
}
