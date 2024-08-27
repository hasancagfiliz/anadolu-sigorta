var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

var app = builder.Build();

// Configure the HTTP request pipeline.



// Routing

// "shirts"

app.MapGet("/shirts", () =>
{
    return "Reading all the shirts";
});

app.MapGet("shirts/{id}", (int id) =>
{
    return $"Reading shirt with ID: {id}";
});

app.MapPost("shirts/{id}", (int id) =>
{
    return $"Creating a shirt with ID: {id}";
});

app.MapPut("/shirts/{id}", (int id) =>
{
    return $"Updating shirt with ID: {id}";
});

app.MapDelete("/shirts/{id}", (int id) =>
{
    return $"Deleting shirt with ID: {id}";
});

app.Run();

internal record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
