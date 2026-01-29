using BitolaCityEvents.Core.Entities.Identity;
using BitolaCityEvents.DataAccess.Config.Entities.Identity.Common.Abstractions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BitolaCityEvents.DataAccess.Config.Entities.Identity
{
    public class UserConfig : BaseAccountConfig<User>
    {
        public override void Configure(EntityTypeBuilder<User> builder)
        {
            base.Configure(builder);

            builder.ToTable("Users");

            builder.Property(p => p.FirstName).HasMaxLength(30).IsRequired();
            builder.Property(p => p.LastName).HasMaxLength(30).IsRequired();
        }
    }
}
