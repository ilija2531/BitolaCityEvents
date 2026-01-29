using BitolaCityEvents.Core.Entities;
using BitolaCityEvents.DataAccess.Config.Entities.Common.Abstractions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BitolaCityEvents.DataAccess.Config.Entities
{
    public class EventConfig : BaseConfig<Event>
    {
        public override void Configure(EntityTypeBuilder<Event> builder)
        {
            base.Configure(builder);

            builder.HasIndex(i => i.Title).IsUnique();

            builder.Property(p => p.Title).HasMaxLength(50).IsRequired();
            builder.Property(p => p.Location).HasMaxLength(50).IsRequired();
            builder.Property(p => p.Description).IsRequired(false);
            builder.Property(p => p.StartTime).IsRequired();
            builder.Property(p => p.EndTime).IsRequired();
            builder.Property(p => p.PostedOn).IsRequired();
            builder.Property(p => p.Status).HasConversion<string>().IsRequired();

            builder.HasOne(o => o.Organizator)
                .WithMany(e => e.Events)
                .HasForeignKey(fk => fk.OrganizatorId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
