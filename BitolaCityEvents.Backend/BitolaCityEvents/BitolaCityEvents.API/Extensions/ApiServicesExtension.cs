using BitolaCityEvents.DataAccess.Data;
using Microsoft.EntityFrameworkCore;

namespace BitolaCityEvents.API.Extensions
{
    public static class ApiServicesExtension
    {
        public static IServiceCollection AddApiServices(this IServiceCollection services, 
            IConfiguration config)
        {
            services.AddControllers();
            services.AddDbContext<BitolaCityEventsDbContext>(options =>
                options.UseSqlServer(config.GetConnectionString("BitolaCityEventsConnection")));
                  
            return services;
        }
    }
}
