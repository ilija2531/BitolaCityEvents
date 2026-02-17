using BitolaCityEvents.Core.Entities;
using BitolaCityEvents.Core.Entities.Identity;
using BitolaCityEvents.Core.Entities.Identity.Media;
using BitolaCityEvents.Core.Entities.Joins;
using BitolaCityEvents.Core.Entities.Media;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace BitolaCityEvents.DataAccess.Data
{
    public class BitolaCityEventsDbContext : IdentityDbContext<User, IdentityRole<Guid>, Guid,
        IdentityUserClaim<Guid>, IdentityUserRole<Guid>, IdentityUserLogin<Guid>, IdentityRoleClaim<Guid>,
        IdentityUserToken<Guid>>
    {
        public BitolaCityEventsDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Event> Events { get; set; }
        public DbSet<EventPhoto> EventPhotos { get; set; }
        public DbSet<UserPhoto> UserPhotos { get; set; }
        public DbSet<UserGoingEvents> UserGoingEvents { get; set; }
        public DbSet<UserSavedEvents> UserSavedEvents { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<IdentityRole>().ToTable("Roles");
            modelBuilder.Entity<IdentityUserRole<string>>().ToTable("UserRoles");
            modelBuilder.Entity<IdentityUserClaim<string>>().ToTable("UserClaims");
            modelBuilder.Entity<IdentityUserLogin<string>>().ToTable("UserLogins");
            modelBuilder.Entity<IdentityRoleClaim<string>>().ToTable("UserClaims");
            modelBuilder.Entity<IdentityUserToken<string>>().ToTable("UserTokens");
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());


            foreach (var entity in modelBuilder.Model.GetEntityTypes())
            {
                foreach (var key in entity.GetKeys())
                {
                    key.SetName($"PK{entity.GetTableName()}");
                }

                foreach (var foreignKey in entity.GetForeignKeys())
                {
                    foreignKey.SetConstraintName($"FK{entity.GetTableName()}{foreignKey.PrincipalEntityType.GetTableName()}{foreignKey.Properties.Select(p => p.Name)}");
                }

                foreach (var index in entity.GetIndexes())
                {
                    index.SetDatabaseName($"IX{entity.GetTableName()}{index.Properties.Select(p => p.Name)}");
                }
            }
        }
    }
}
