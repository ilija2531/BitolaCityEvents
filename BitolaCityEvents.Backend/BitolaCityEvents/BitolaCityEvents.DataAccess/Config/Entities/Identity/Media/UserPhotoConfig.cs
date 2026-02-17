using BitolaCityEvents.Core.Entities.Identity.Media;
using BitolaCityEvents.DataAccess.Config.Entities.Common.Abstractions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BitolaCityEvents.DataAccess.Config.Entities.Identity.Media
{
    public class UserPhotoConfig : BaseConfig<UserPhoto>
    {
        public override void Configure(EntityTypeBuilder<UserPhoto> builder)
        {
            base.Configure(builder);

            builder.Property(p => p.Path).IsRequired();

            builder.HasOne(ac => ac.User)
                .WithOne(p => p.Photo)
                .HasForeignKey<UserPhoto>(fk => fk.UserId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
