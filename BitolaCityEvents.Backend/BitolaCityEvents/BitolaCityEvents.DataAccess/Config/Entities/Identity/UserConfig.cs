using BitolaCityEvents.Core.Entities.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BitolaCityEvents.DataAccess.Config.Entities.Identity
{
    public class UserConfig : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable("Users");

            builder.HasKey(e => e.Id);

            builder.HasIndex(i => i.UserName).IsUnique();
            builder.HasIndex(i => i.Email).IsUnique();

            builder.Property(p => p.UserName).HasColumnName("Username").IsRequired();
            builder.Property(p => p.FirstName).HasMaxLength(30).IsRequired();
            builder.Property(p => p.LastName).HasMaxLength(30).IsRequired();
        }
    }
}
