using BitolaCityEvents.Core.Entities.Identity.Media;
using BitolaCityEvents.DataAccess.Config.Entities.Common.Abstractions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BitolaCityEvents.DataAccess.Config.Entities.Identity.Media
{
    public class AccountPhotoConfig : BaseConfig<AccountPhoto>
    {
        public override void Configure(EntityTypeBuilder<AccountPhoto> builder)
        {
            base.Configure(builder);

            builder.Property(p => p.Path).IsRequired();

            builder.HasOne(ac => ac.Account)
                .WithOne(p => p.Photo)
                .HasForeignKey<AccountPhoto>(fk => fk.AccountId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
