using BitolaCityEvents.Core.Entities.Common.Abstractions;

namespace BitolaCityEvents.Core.Entities.Identity.Media
{
    public class UserPhoto : BaseEntity
    {
        public UserPhoto() : base()
        {
        }

        public UserPhoto(Guid id, string path, Guid userId, User user = null)
            : base(id)
        {
            Path = path;
            UserId = userId;
            User = user;

        }

        public string Path { get; set; }
        public Guid UserId { get; set; }
        public User User { get; set; }
    }
}
