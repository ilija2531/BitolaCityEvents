using BitolaCityEvents.Core.Entities.Media;
using BitolaCityEvents.DataAccess.Config.Entities.Common.Abstractions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BitolaCityEvents.DataAccess.Config.Entities.Media
{
    public class EventPhotoConfig : BaseConfig<EventPhoto>
    {
        public override void Configure(EntityTypeBuilder<EventPhoto> builder)
        {
            base.Configure(builder);

            builder.Property(p => p.Path).IsRequired();

            builder.HasOne(ep => ep.Event)
                .WithMany(e => e.Photos)
                .HasForeignKey(fk => fk.EventId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Cascade); 
        }
    }
}
