using BitolaCityEvents.Core.Entities.Identity;

namespace BitolaCityEvents.Core.Entities.Joins
{
    public class UserGoingEvents
    {
        public Guid UserId { get; set; }
        public User User { get; set; }
        public Guid EventId { get; set; }
        public Event Event { get; set; }
    }
}
