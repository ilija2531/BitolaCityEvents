using BitolaCityEvents.API.Extensions;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddApiServices(builder.Configuration);
builder.Services.AddIdentityServices(builder.Configuration);

var app = builder.Build();

app.MapControllers();

app.UseAuthentication();

app.UseAuthorization();

app.Run();
