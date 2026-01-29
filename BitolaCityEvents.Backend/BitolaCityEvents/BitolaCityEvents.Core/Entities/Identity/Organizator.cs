using BitolaCityEvents.Core.Entities.Identity.Common.Abstractions;
using BitolaCityEvents.Core.Entities.Identity.Media;

namespace BitolaCityEvents.Core.Entities.Identity
{
    public class Organizator : Account
    {
        public Organizator() : base()
        {
        }

        public Organizator(string username, string organizatorName, IEnumerable<Event> events = null,
            AccountPhoto photo = null)
            : base(username, photo)
        {
            OrganizatorName = organizatorName;
            Events = events;
        }

        public string OrganizatorName { get; set; }
        public IEnumerable<Event> Events { get; set; }
    }
}
