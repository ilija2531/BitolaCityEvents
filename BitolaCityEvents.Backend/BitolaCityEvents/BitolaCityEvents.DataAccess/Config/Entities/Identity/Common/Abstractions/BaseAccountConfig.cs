using BitolaCityEvents.Core.Entities.Identity.Common.Abstractions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BitolaCityEvents.DataAccess.Config.Entities.Identity.Common.Abstractions
{
    public abstract class BaseAccountConfig<T> : IEntityTypeConfiguration<T> where T : Account
    {
        public virtual void Configure(EntityTypeBuilder<T> builder)
        {
            builder.HasKey(e => e.Id);

            builder.HasIndex(i => i.UserName).IsUnique();
            builder.HasIndex(i => i.Email).IsUnique();

            builder.Property(p => p.UserName).HasColumnName("Username").IsRequired();
        }
    }
}
