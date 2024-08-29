using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

app.UseHttpsRedirection();

// CRUD operations for the User (MUSTERI_TABLE) model

// Create a new User
app.MapPost("/users", async (AppDbContext db, User user) =>
{
    db.MUSTERI_TABLE.Add(user);
    await db.SaveChangesAsync();
    return Results.Created($"/users/{user.TcKimlik_No}", user);
});

// Read all Users
app.MapGet("/users", async (AppDbContext db) =>
{
    return await db.MUSTERI_TABLE.ToListAsync();
});

// Read a single User by TcKimlik_No
app.MapGet("/users/{TcKimlik_No}", async (AppDbContext db, string TcKimlik_No) =>
{
    var user = await db.MUSTERI_TABLE.FindAsync(TcKimlik_No);
    return user != null ? Results.Ok(user) : Results.NotFound();
});

// Update an existing User
app.MapPut("/users/{TcKimlik_No}", async (AppDbContext db, string TcKimlik_No, User updatedUser) =>
{
    var user = await db.MUSTERI_TABLE.FindAsync(TcKimlik_No);

    if (user == null)
    {
        return Results.NotFound();
    }

    user.Isim = updatedUser.Isim;
    user.Soyisim = updatedUser.Soyisim;
    user.Eposta = updatedUser.Eposta;
    user.Cep_Tel = updatedUser.Cep_Tel;
    user.Il_Kodu = updatedUser.Il_Kodu;
    user.Plaka_Numarasi = updatedUser.Plaka_Numarasi;
    user.Ruhsat_Kodu = updatedUser.Ruhsat_Kodu;
    user.Ruhsat_Numarasi = updatedUser.Ruhsat_Numarasi;

    await db.SaveChangesAsync();

    return Results.Ok(user);
});

// Delete a User
app.MapDelete("/users/{TcKimlik_No}", async (AppDbContext db, string TcKimlik_No) =>
{
    var user = await db.MUSTERI_TABLE.FindAsync(TcKimlik_No);

    if (user == null)
    {
        return Results.NotFound();
    }

    db.MUSTERI_TABLE.Remove(user);
    await db.SaveChangesAsync();

    return Results.NoContent();
});

app.Run();
