using BitolaCityEvents.Core.Entities.Common.Abstractions;

namespace BitolaCityEvents.Core.Entities.Identity.Media
{
    public class OrganizatorPhoto : BaseEntity
    {
        public OrganizatorPhoto() : base()
        {
        }

        public OrganizatorPhoto(Guid id, string path, Guid organizatorId, Organizator organizator = null)
            : base(id)
        {
            Path = path;
            OrganizatorId = organizatorId;
            Organizator = organizator;
        }

        public string Path { get; set; }
        public Guid OrganizatorId { get; set; }
        public Organizator Organizator { get; set; }
    }
}
