using Microsoft.EntityFrameworkCore;

namespace WebAPI.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<User> MUSTERI_TABLE { get; set; }
        public DbSet<Police> POLICE_TABLE { get; set; }
        public DbSet<Odeme> ODEME_TABLE { get; set; }
    }
}
