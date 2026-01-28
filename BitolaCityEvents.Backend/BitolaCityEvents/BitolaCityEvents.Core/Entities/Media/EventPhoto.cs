using BitolaCityEvents.Core.Entities.Common.Abstractions;

namespace BitolaCityEvents.Core.Entities.Media
{
    public class EventPhoto : BaseEntity
    {
        public EventPhoto() : base()
        {
        }

        public EventPhoto(Guid id, string path, Guid eventId, Event @event = null)
            : base(id)
        {
            Path = path;
            EventId = eventId;
            Event = @event;
        }

        public string Path { get; set; }
        public Guid EventId { get; set; }
        public Event Event { get; set; }
    }
}
