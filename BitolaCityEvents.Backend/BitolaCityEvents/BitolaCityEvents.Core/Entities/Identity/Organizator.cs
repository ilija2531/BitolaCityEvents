using BitolaCityEvents.Core.Entities.Identity.Media;
using Microsoft.AspNetCore.Identity;

namespace BitolaCityEvents.Core.Entities.Identity
{
    public class Organizator : IdentityUser<Guid>
    {
        public Organizator() : base()
        {
        }

        public Organizator(string username, string organizatorName, IEnumerable<Event> events = null,
            OrganizatorPhoto photo = null)
            : base(username)
        {
            OrganizatorName = organizatorName;
            Events = events;
            Photo = photo;
        }

        public string OrganizatorName { get; set; }
        public IEnumerable<Event> Events { get; set; }
        public OrganizatorPhoto Photo { get; set; }
    }
}
