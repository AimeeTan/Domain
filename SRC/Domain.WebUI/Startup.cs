﻿using AutoMapper;
using Domain.Archetypes;
using Domain.Core;
using Domain.Data;
using Domain.Data.Store;
using Domain.Repos;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace Domain.WebUI
{
	public class Startup
	{
		public Startup(IHostingEnvironment env)
		{
			var builder = new ConfigurationBuilder()
				.SetBasePath(env.ContentRootPath)
				.AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
				.AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

			if (env.IsDevelopment())
			{
				// For more details on using the user secret store see http://go.microsoft.com/fwlink/?LinkID=532709
				//builder.AddUserSecrets<Startup>();
			}

			builder.AddEnvironmentVariables();
			Configuration = builder.Build();
			Env.InitWebDirectory(env.ContentRootPath);
			Mapper.Initialize(cfg =>
			{
				cfg.AddProfile<DomainProfile>();
			});
		}

		public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
			// Add framework services.
			//services.AddLocalization();
			services.AddMvc();
			services.AddScoped<IPageRepo, PageRepo>();
			//services.AddTransient<ITenancyProvider, TenancyProvider>();
			services.AddScoped<IDataContextFactory<Domain_SysDataContext>, DataContextFactory>();
			//services.AddSession(options =>
			//{
			//	options.IdleTimeout = TimeSpan.FromHours(6);
			//	options.CookieHttpOnly = true;
			//});
		}

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

			app.UseMvc(routes =>
			{
				routes.MapRoute(
					name: "default",
					template: "{controller=Home}/{action=Index}/{id?}");
			});
        }
    }
}
