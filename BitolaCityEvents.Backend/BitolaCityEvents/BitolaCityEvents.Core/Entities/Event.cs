using BitolaCityEvents.Core.Entities.Common.Abstractions;
using BitolaCityEvents.Core.Entities.Identity;
using BitolaCityEvents.Core.Entities.Joins;
using BitolaCityEvents.Core.Entities.Media;

namespace BitolaCityEvents.Core.Entities
{
    public class Event : BaseEntity
    {
        public Event() : base()
        {
        }

        public Event(Guid id, string title, string description, DateTime startTime, DateTime endTime, 
            Guid organizatorId, Organizator organizator = null, IEnumerable<EventPhoto> photos = null, 
            IEnumerable<UserSavedEvents> userSaves = null, IEnumerable<UserGoingEvents> usersGoing = null)
            : base(id)
        {
            Title = title;
            Description = description;
            StartTime = startTime;
            EndTime = endTime;
            OrganizatorId = organizatorId;
            Organizator = organizator;
            Photos = photos;
            UserSaves = userSaves;
            UsersGoing = usersGoing;
        }

        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public Guid OrganizatorId { get; set; }
        public Organizator Organizator { get; set; }
        public IEnumerable<EventPhoto> Photos { get; set; }
        public IEnumerable<UserSavedEvents> UserSaves { get; set; }
        public IEnumerable<UserGoingEvents> UsersGoing { get; set; }
    }
}
