using BitolaCityEvents.Core.Entities.Joins;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BitolaCityEvents.DataAccess.Config.Entities.Joins
{
    public class UserSavedEventsConfig : IEntityTypeConfiguration<UserSavedEvents>
    {
        public void Configure(EntityTypeBuilder<UserSavedEvents> builder)
        {
            builder.HasKey(k => new { k.UserId, k.EventId });

            builder.HasOne(u => u.User)
                .WithMany(es => es.SavedEvents)
                .HasForeignKey(fk => fk.UserId);

            builder.HasOne(e => e.Event)
                .WithMany(eg => eg.UserSaves)
                .HasForeignKey(fk => fk.EventId);
        }
    }
}
