using BitolaCityEvents.Core.Entities.Identity.Media;
using BitolaCityEvents.Core.Entities.Joins;
using Microsoft.AspNetCore.Identity;

namespace BitolaCityEvents.Core.Entities.Identity
{
    public class User : IdentityUser<Guid>
    {
        public User() : base()
        {
        }

        public User(string username, string firstName, string lastName, UserPhoto photo = null,
            IEnumerable<UserSavedEvents> savedEvents = null, IEnumerable<UserGoingEvents> goingEvents = null)
            : base(username)
        {
            FirstName = firstName;
            LastName = lastName;
            Photo = photo;
            SavedEvents = savedEvents;
            GoingEvents = goingEvents;
        }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public UserPhoto Photo { get; set; }
        public IEnumerable<UserSavedEvents> SavedEvents { get; set; }
        public IEnumerable<UserGoingEvents> GoingEvents { get; set; }
    }
}
