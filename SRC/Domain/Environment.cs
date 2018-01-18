using System;
using System.Diagnostics;
using System.IO;

namespace Domain
{
	public static class Env
	{
		/// <summary>
		/// 创建网站初始目录 InitWebDirectory(env.ContentRootPath)
		/// logs : 日志目录
		/// .well-known : HTTPS 认证目录
		/// </summary>
		/// <param name="appRootDirectory">string app root path</param>
		public static void InitWebDirectory(string appRootDirectory)
		{
			var folders = new[]
			{
				"logs",
				".well-known"
			};

			try
			{
				foreach (var folder in folders)
				{
					var fd = Path.Combine(appRootDirectory, folder);
					if (Directory.Exists(fd)) continue;
					Directory.CreateDirectory(fd);
					Debug.WriteLine("Created Directory : {0}", fd);
				}
			}
			catch (Exception e)
			{
				Debug.WriteLine(e.Message);
			}
		}
	}
}
