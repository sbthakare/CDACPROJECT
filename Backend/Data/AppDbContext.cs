using Microsoft.EntityFrameworkCore;
using TalentBridge2.Models;


namespace TalentBridge2.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Job> Jobs { get; set; }
       // public DbSet<Studentprofile> Studentprofiles { get; set; }

         

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasData(new User
            {
                Id = 1,
                FirstName = "Rutik",
                LastName = "Ahire",
                Address = "Nashik",
                PhoneNumber = "8490876545",
                Email = "admin@talentbridge.com",
                UserName = "admin",
                PasswordHash = BCrypt.Net.BCrypt.HashPassword("Admin@123"),
                Role = "Admin"
            });
        }
    }
}
