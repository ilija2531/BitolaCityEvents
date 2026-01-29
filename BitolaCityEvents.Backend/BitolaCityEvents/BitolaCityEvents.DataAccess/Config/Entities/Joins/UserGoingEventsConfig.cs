using BitolaCityEvents.Core.Entities.Joins;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BitolaCityEvents.DataAccess.Config.Entities.Joins
{
    public class UserGoingEventsConfig : IEntityTypeConfiguration<UserGoingEvents>
    {
        public void Configure(EntityTypeBuilder<UserGoingEvents> builder)
        {
            builder.HasKey(k => new { k.UserId, k.EventId });

            builder.HasOne(u => u.User)
                .WithMany(es => es.GoingEvents)
                .HasForeignKey(fk => fk.UserId);

            builder.HasOne(e => e.Event)
                .WithMany(eg => eg.UsersGoing)
                .HasForeignKey(fk => fk.EventId);
        }
    }
}
